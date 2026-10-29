// Check capability yang dipakai ulang lintas profil. Setiap check:
// 1) memastikan halaman/login/data siap (gagal siap = failed atau [DATA_UNAVAILABLE], tidak pernah passed),
// 2) mengassert kehadiran (expected=true) atau ketidakhadiran (expected=false) komponen.
// Locator berasal dari DOM live 2026-10-28 (artifacts/evidence/TCI-AUDIT) dan selector map existing;
// locator komponen yang saat ini nonaktif berasal dari bundle client dan ditandai di docs/testing-profiles.md.
const { expect } = require('@playwright/test');

const COLORS = { prediction: '#16a34a', deviation: '#f04438' };
const MAX_SAMPLE_REQUESTS = 60;

async function settle(page) {
  await page.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => {});
}

// ---------- Navigasi ----------
async function openSidebar(page) {
  await page.goto('/monitoring');
  await expect(page, 'landing Monitoring harus terbuka (bukan login/redirect)').toHaveURL(/\/monitoring(\?|$)/);
  const aside = page.locator('aside');
  // Kesiapan: grup Dashboard terbuka dan menu inti terlihat.
  await expect(aside.locator('a[href="/monitoring"]')).toBeVisible();
  await expect(aside.locator('a[href="/tracking-location"]')).toBeVisible();
  await settle(page);
  return aside;
}

function sidebarCheck(href, name) {
  return async ({ page, expected, observe }) => {
    const aside = await openSidebar(page);
    const byHref = aside.locator(`a[href="${href}"]`);
    const byName = aside.getByRole('link', { name, exact: true });
    observe('sidebar', { href, countByHref: await byHref.count(), countByName: await byName.count() });
    if (expected) {
      await expect(byHref).toBeVisible();
      await expect(byHref).toHaveText(name);
    } else {
      await expect(byHref).toHaveCount(0);
      await expect(byName).toHaveCount(0);
    }
  };
}

// ---------- Monitoring ----------
async function openMonitoring(page) {
  const summaryP = page.waitForResponse((r) => r.url().includes('/api/monitoring-tracking/summary'), { timeout: 30_000 });
  await page.goto('/monitoring');
  const summary = await summaryP;
  expect(summary.status(), 'GET monitoring-tracking/summary').toBe(200);
  const body = await summary.json();
  await expect(page.getByRole('heading', { name: 'Monitoring' }).first()).toBeVisible();
  await expect(page.getByText('Total Armada', { exact: true })).toBeVisible();
  await expect(page.locator('.leaflet-container').first()).toBeVisible();
  await settle(page);
  return body.data;
}

async function scorecardValue(page, label) {
  const text = await page.locator('body').innerText();
  const m = text.match(new RegExp(`${label}\\s*\\n+\\s*(\\d+)`));
  return m ? Number(m[1]) : null;
}

const monitoringCoreScorecard = async ({ page, expected, observe }) => {
  const data = await openMonitoring(page);
  const cards = [['Total Armada', 'totalArmada'], ['Tidak Update', 'tidakUpdate'], ['Melewati SLA', 'melewatiSla'], ['Jumlah Kendala', 'jumlahKendala']];
  const seen = {};
  for (const [label, key] of cards) seen[label] = { ui: await scorecardValue(page, label), api: data.scorecard[key] };
  observe('scorecards', seen);
  if (!expected) throw new Error('Ekspektasi false untuk score card inti belum didukung');
  for (const [label] of cards) {
    await expect(page.getByText(label, { exact: true }).first()).toBeVisible();
    expect(seen[label].ui, `nilai ${label} UI = API`).toBe(seen[label].api);
  }
};

const monitoringKeluarJalur = async ({ page, expected, observe }) => {
  await openMonitoring(page);
  const subtitle = page.getByText('Keluar dari rute yang direncanakan', { exact: true });
  const label = page.getByText('Keluar Jalur', { exact: true });
  observe('keluarJalur', { subtitleCount: await subtitle.count(), labelCount: await label.count() });
  if (expected) {
    await expect(subtitle).toBeVisible();
  } else {
    await expect(subtitle).toHaveCount(0);
    await expect(label).toHaveCount(0);
  }
};

function monitoringPanelTab(name) {
  return async ({ page, expected, observe }) => {
    await openMonitoring(page);
    const tab = page.getByRole('button', { name, exact: true });
    observe('panel', { name, count: await tab.count() });
    if (expected) await expect(tab).toBeVisible();
    else await expect(tab).toHaveCount(0);
  };
}

const monitoringMap = async ({ page, expected }) => {
  await openMonitoring(page);
  if (!expected) throw new Error('Ekspektasi false untuk peta Monitoring belum didukung');
  await expect(page.locator('.leaflet-container').first()).toBeVisible();
};

// ---------- Tracking & Location ----------
async function findSample(api, scope, predicate, label) {
  const opts = await api(`/monitoring-tracking/track/orders?scope=${scope}`);
  if (opts.status !== 200 || !Array.isArray(opts.body?.data)) {
    throw new Error(`GET track/orders?scope=${scope} HTTP ${opts.status}`);
  }
  let requests = 0;
  for (const ord of opts.body.data) {
    for (const n of ord.nopols || []) {
      if (requests >= MAX_SAMPLE_REQUESTS) break;
      requests++;
      const t = await api(`/monitoring-tracking/track?orderCode=${encodeURIComponent(ord.orderId)}&nopol=${encodeURIComponent(n.nopol)}`);
      if (t.status === 200 && t.body?.data && predicate(t.body.data)) {
        return { orderId: ord.orderId, nopol: n.nopol, data: t.body.data, scanned: requests, options: opts.body.data.length };
      }
    }
  }
  throw new Error(`[DATA_UNAVAILABLE] tidak ada order scope=${scope} dengan ${label} (dipindai ${requests} kombinasi order/nopol dari ${opts.body.data.length} order; batas ${MAX_SAMPLE_REQUESTS})`);
}

const longestPath = (d) => Math.max(d.path?.length || 0, ...(d.vehicles || []).map((v) => v.path?.length || 0));

async function openTracking(page, tab, sample) {
  const tabName = tab === 'riwayat' ? 'Pengiriman Selesai' : 'Pengiriman Berjalan';
  const q = `${tab === 'riwayat' ? 'tab=riwayat&' : ''}orderCode=${encodeURIComponent(sample.orderId)}&nopol=${encodeURIComponent(sample.nopol)}`;
  const trackP = page.waitForResponse((r) => r.url().includes('/api/monitoring-tracking/track?'), { timeout: 30_000 });
  await page.goto(`/tracking-location?${q}`);
  expect((await trackP).status(), 'GET monitoring-tracking/track').toBe(200);
  await expect(page.getByRole('tab', { name: tabName })).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('heading', { name: 'Detail Armada' })).toBeVisible();
  await expect(page.getByText(sample.orderId, { exact: true }).first()).toBeVisible();
  const map = page.locator('.leaflet-container').first();
  await expect(map).toBeVisible();
  // Titik GPS identik menghasilkan path nol-panjang yang "hidden"; cukup pastikan layer jalur sudah dirender.
  await expect.poll(() => map.locator('path.leaflet-interactive').count(), { message: 'jalur peta harus dirender sebelum assertion' })
    .toBeGreaterThan(0);
  await settle(page);
  return map;
}

async function strokeCount(map, color) {
  return map.locator('path.leaflet-interactive').evaluateAll(
    (els, c) => els.filter((e) => (e.getAttribute('stroke') || '').toLowerCase() === c).length, color);
}

const trackingSearch = (tab) => async ({ page, expected, session, observe }) => {
  if (!expected) throw new Error('Ekspektasi false untuk pencarian tracking belum didukung');
  const sample = await findSample(session.api, tab === 'riwayat' ? 'history' : 'active', (d) => longestPath(d) > 1, 'jalur GPS > 1 titik');
  observe('sample', { orderId: sample.orderId, nopol: sample.nopol, pathPoints: longestPath(sample.data) });
  await openTracking(page, tab, sample);
};

const riwayatTab = async ({ page, expected, observe }) => {
  await page.goto('/tracking-location');
  await expect(page.getByRole('heading', { name: 'Tracking & Location' })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Pengiriman Berjalan' })).toBeVisible();
  const tab = page.getByRole('tab', { name: 'Pengiriman Selesai' });
  observe('tabs', await page.getByRole('tab').allInnerTexts());
  if (expected) {
    await tab.click();
    await expect(tab).toHaveAttribute('aria-selected', 'true');
    await expect(page).toHaveURL(/tab=riwayat/);
  } else {
    await expect(tab).toHaveCount(0);
  }
};

const predictionRoute = async ({ page, expected, session, observe }) => {
  const sample = await findSample(session.api, 'active', (d) => (d.vehicles || []).some((v) => v.predictedRoute && v.predictedRoute.path?.length > 1), 'data predictedRoute');
  observe('sample', { orderId: sample.orderId, nopol: sample.nopol, apiPredictedRoute: true });
  const map = await openTracking(page, 'terkini', sample);
  const n = await strokeCount(map, COLORS.prediction);
  observe('predictionPolylines', n);
  if (expected) expect(n, 'polyline prediksi rute').toBeGreaterThan(0);
  else expect(n, 'polyline prediksi rute tidak boleh dirender').toBe(0);
};

// Legenda peta Tracking Terkini. Kesiapan: panel "Status Pengiriman" terbuka dan item yang
// tidak di-gate ("Jalur dilalui (GPS)") tampil, sehingga ketidakhadiran item tidak berasal dari panel tertutup.
const terkiniLegendItem = (label) => async ({ page, expected, session, observe }) => {
  const sample = await findSample(session.api, 'active', (d) => longestPath(d) > 1, 'jalur GPS > 1 titik');
  await openTracking(page, 'terkini', sample);
  await expect(page.getByRole('button', { name: 'Status Pengiriman' })).toBeVisible();
  await expect(page.getByText('Jalur dilalui (GPS)', { exact: true }), 'legenda harus terbuka sebelum assertion').toBeVisible();
  const item = page.getByText(label, { exact: true });
  observe('legend', { label, count: await item.count(), sample: sample.orderId });
  if (expected === null) return; // belum ada requirement: hanya observasi
  if (expected) await expect(item).toBeVisible();
  else await expect(item, `legenda '${label}' tidak boleh tampil`).toHaveCount(0);
};

const routeDeviation = async ({ page, expected, session, observe }) => {
  const sample = await findSample(session.api, 'active', (d) => (d.vehicles || []).some((v) => v.deviationSegment && v.deviationSegment.path?.length > 0), 'data deviationSegment');
  observe('sample', { orderId: sample.orderId, nopol: sample.nopol, apiDeviationSegment: true });
  const map = await openTracking(page, 'terkini', sample);
  const n = await strokeCount(map, COLORS.deviation);
  observe('deviationPolylines', n);
  if (expected) expect(n, 'polyline penyimpangan jalur').toBeGreaterThan(0);
  else expect(n, 'polyline penyimpangan jalur tidak boleh dirender').toBe(0);
};

const routePlayback = async ({ page, expected, session, observe }) => {
  const sample = await findSample(session.api, 'history', (d) => longestPath(d) > 1, 'jalur GPS > 1 titik (playback dapat diputar)');
  observe('sample', { orderId: sample.orderId, nopol: sample.nopol, pathPoints: longestPath(sample.data) });
  await openTracking(page, 'riwayat', sample);
  const controls = {
    Mundur: page.getByRole('button', { name: 'Mundur', exact: true }),
    Putar: page.getByRole('button', { name: /^(Putar|Jeda)$/ }),
    Maju: page.getByRole('button', { name: 'Maju', exact: true }),
    Ulang: page.getByRole('button', { name: 'Ulang', exact: true }),
    'Garis waktu playback': page.getByRole('slider', { name: 'Garis waktu playback' }),
  };
  const counts = {};
  for (const [k, loc] of Object.entries(controls)) counts[k] = await loc.count();
  observe('playbackControls', counts);
  for (const [k, loc] of Object.entries(controls)) {
    if (expected) await expect(loc, `kontrol playback ${k}`).toBeVisible();
    else await expect(loc, `kontrol playback ${k} tidak boleh tampil`).toHaveCount(0);
  }
};

// ---------- Progres Pengiriman ----------
const progresPage = async ({ page, expected }) => {
  if (!expected) throw new Error('Ekspektasi false untuk Progres Pengiriman belum didukung');
  await page.goto('/progres-pengiriman');
  await expect(page).toHaveURL(/\/progres-pengiriman/);
  await expect(page.getByRole('heading', { name: 'Progres Pengiriman' }).first()).toBeVisible();
};

const CHECKS = {
  'navigation.sidebar.monitoring': sidebarCheck('/monitoring', 'Monitoring'),
  'navigation.sidebar.trackingLocation': sidebarCheck('/tracking-location', 'Tracking & Location'),
  'navigation.sidebar.progresPengiriman': sidebarCheck('/progres-pengiriman', 'Progres Pengiriman'),
  'navigation.sidebar.dashboardOperasional': sidebarCheck('/dashboard-operasional', 'Operasional'),
  'tracking.terkini.search': trackingSearch('terkini'),
  'tracking.terkini.predictionRoute': predictionRoute,
  'tracking.terkini.predictionLegend': terkiniLegendItem('Prediksi rute ke tujuan'),
  'tracking.terkini.deviationLegend': terkiniLegendItem('Jalur di luar prediksi rute'),
  'tracking.terkini.routeDeviation': routeDeviation,
  'tracking.riwayat.tab': riwayatTab,
  'tracking.riwayat.search': trackingSearch('riwayat'),
  'tracking.riwayat.routePlayback': routePlayback,
  'monitoring.scorecard.core': monitoringCoreScorecard,
  'monitoring.scorecard.keluarJalur': monitoringKeluarJalur,
  'monitoring.panel.dataKasus': monitoringPanelTab('Data Kasus'),
  'monitoring.panel.armadaTerdekat': monitoringPanelTab('Armada Terdekat'),
  'monitoring.map': monitoringMap,
  'progres.page': progresPage,
};

module.exports = { CHECKS };

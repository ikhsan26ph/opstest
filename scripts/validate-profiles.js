#!/usr/bin/env node
// Validasi offline fondasi multi-customer (tanpa akses OPS):
// resolver/schema, input invalid, discovery per profil, command default, lock, converter+report terpisah.
const assert = require('assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');
// Profil nonaktif (arsip) tetap divalidasi offline; penolakan eksekusi diuji eksplisit di bawah.
process.env.OPS_ALLOW_DISABLED_PROFILE = '1';
const R = require('../profiles/resolver');
// artifacts/ di-gitignore: tidak ada pada checkout bersih (CI).
fs.mkdirSync(path.join(__dirname, '..', 'artifacts'), { recursive: true });

const ROOT = path.join(__dirname, '..');
const results = [];
function check(name, fn) {
  try { fn(); results.push(['PASS', name]); } catch (e) { results.push(['FAIL', name, e.message]); }
}
function throwsCode(fn, code) {
  try { fn(); } catch (e) {
    assert.ok(e.message.startsWith(`[${code}]`), `kode ${code} diharapkan, didapat: ${e.message}`);
    return;
  }
  assert.fail(`diharapkan error ${code}`);
}

// Salin direktori profiles ke temp agar kasus invalid tidak menyentuh file asli.
function fixture(mutate) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'opstest-profiles-'));
  fs.cpSync(path.join(ROOT, 'profiles'), dir, { recursive: true });
  const rw = (rel, fn) => {
    const f = path.join(dir, rel);
    const data = JSON.parse(fs.readFileSync(f, 'utf8'));
    fs.writeFileSync(f, JSON.stringify(fn(data) ?? data, null, 2));
  };
  mutate(rw, dir);
  return dir;
}

// ---------- Resolver: profil nyata ----------
const tci = R.resolveProfile('tci');
const def = R.resolveProfile('default');

check('TCI: override false dipertahankan (tidak dianggap kosong)', () => {
  for (const c of ['tracking.riwayat.routePlayback', 'tracking.terkini.predictionRoute', 'tracking.terkini.routeDeviation',
    'navigation.sidebar.dashboardOperasional', 'monitoring.panel.dataKasus', 'monitoring.panel.armadaTerdekat', 'monitoring.scorecard.keluarJalur']) {
    assert.equal(tci.expectations[c].expected, false, c);
  }
});
check('TCI: merge bertingkat mempertahankan sibling dari paket starter', () => {
  assert.equal(tci.expectations['tracking.terkini.search'].expected, true);
  assert.equal(def.expectations['tracking.terkini.predictionLegend'].expected, null);
  assert.equal(tci.manifest.tracking.terkini.search.source, R.resolveProfile('tci').manifest.tracking.terkini.search.source);
  assert.equal(tci.expectations['monitoring.scorecard.core'].expected, true);
});
check('Default bukan parent TCI: paket berbeda, nilai null default tidak menjadi true/false', () => {
  assert.equal(def.packageId, 'product-default');
  assert.equal(tci.packageId, 'starter');
  assert.equal(def.expectations['tracking.riwayat.routePlayback'].expected, null);
  assert.equal(def.expectations['navigation.sidebar.dashboardOperasional'].expected, null);
});
check('Objek antarprofil independen dan immutable', () => {
  assert.ok(Object.isFrozen(tci.manifest.tracking.terkini));
  assert.throws(() => { 'use strict'; tci.manifest.tracking.terkini.search.expected = false; });
  const again = R.resolveProfile('tci');
  assert.notEqual(again.manifest, tci.manifest);
  assert.equal(again.expectations['tracking.terkini.search'].expected, true);
  assert.notEqual(def.manifest.tracking, tci.manifest.tracking);
});
check('deepMerge tidak memutasi input', () => {
  const base = { a: { b: { expected: true, source: 's' }, c: { expected: true, source: 's' } } };
  const out = R.deepMerge(base, { a: { b: { expected: false, source: 'o' } } });
  assert.equal(out.a.b.expected, false);
  assert.equal(out.a.c.expected, true);
  assert.equal(base.a.b.expected, true);
});
check('Syarat konfigurasi turunan TCI', () => {
  const kj = tci.requiredConfig.find((r) => r.capability === 'monitoring.scorecard.keluarJalur');
  assert.deepEqual(kj.flags, ['smart-alert', 'route-deviation']);
  assert.equal(kj.expectedAvailable, false);
  assert.equal(def.requiredConfig.length, 0);
});
check('checkObservedConfig: cocok, mismatch, flag hilang', () => {
  const off = { 'route-playback': false, 'route-prediction': false, 'route-deviation': false, 'dashboard-operasional': false, 'smart-alert': false };
  assert.deepEqual(R.checkObservedConfig(tci.requiredConfig, off), []);
  const m = R.checkObservedConfig(tci.requiredConfig, { ...off, 'route-playback': true });
  assert.equal(m.length, 1);
  assert.equal(m[0].capability, 'tracking.riwayat.routePlayback');
  // keluarJalur hanya tersedia bila smart-alert DAN route-deviation true
  assert.equal(R.checkObservedConfig(tci.requiredConfig, { ...off, 'smart-alert': true }).some((x) => x.capability === 'monitoring.scorecard.keluarJalur'), false);
  const { 'smart-alert': _, ...missing } = off;
  assert.ok(R.checkObservedConfig(tci.requiredConfig, missing).some((x) => /tidak dilaporkan/.test(x.reason)));
  assert.equal(R.checkObservedConfig(tci.requiredConfig, null).length, 1);
});

// ---------- Profil nonaktif ----------
check('TCI nonaktif: resolve ditolak tanpa flag arsip, tetap valid dengan flag', () => {
  assert.equal(tci.status, 'disabled');
  const saved = process.env.OPS_ALLOW_DISABLED_PROFILE;
  delete process.env.OPS_ALLOW_DISABLED_PROFILE;
  try { throwsCode(() => R.resolveProfile('tci'), 'PROFILE_DISABLED'); } finally { process.env.OPS_ALLOW_DISABLED_PROFILE = saved; }
  assert.equal(R.resolveProfile('default').status, 'active');
});
check('TCI nonaktif: run-profile.sh dan discovery default menolak sebelum menyentuh OPS', () => {
  const env = { ...process.env }; delete env.OPS_ALLOW_DISABLED_PROFILE; env.OPS_PROFILE = '';
  const r = spawnSync('bash', ['scripts/run-profile.sh', 'tci'], { cwd: ROOT, env, encoding: 'utf8' });
  assert.notEqual(r.status, 0);
  assert.match(r.stderr + r.stdout, /PROFILE_DISABLED/);
  assert.ok(!fs.existsSync(path.join(ROOT, 'artifacts/locks/ops-staging.lock')));
});

// ---------- Input invalid ----------
check('Tolak profil tidak terdaftar', () => throwsCode(() => R.resolveProfile('acme'), 'PROFILE_UNKNOWN'));
check('Tolak profil bukan string', () => throwsCode(() => R.resolveProfile(undefined), 'PROFILE_UNKNOWN'));
check('Tolak target tidak terdaftar', () => throwsCode(() => R.resolveTarget('prod', 'tci'), 'TARGET_UNKNOWN'));
check('Tolak profil yang tidak diizinkan pada target', () => throwsCode(() => R.resolveTarget('ops-staging-admin', 'example-local'), 'TARGET_PROFILE_NOT_ALLOWED'));
check('Tolak paket tidak terdaftar', () => {
  const dir = fixture((rw) => rw('customers/tci.json', (d) => { d.package = 'enterprise'; }));
  throwsCode(() => R.resolveProfile('tci', { dir }), 'PACKAGE_UNKNOWN');
});
check('Tolak key override tidak dikenal', () => {
  const dir = fixture((rw) => rw('customers/tci.json', (d) => { d.overrides.tracking.terkini.heatmap = { expected: false, source: 'x' }; }));
  throwsCode(() => R.resolveProfile('tci', { dir }), 'MANIFEST_UNKNOWN_KEY');
});
check('Tolak typo grup override', () => {
  const dir = fixture((rw) => rw('customers/tci.json', (d) => { d.overrides.trackng = { terkini: {} }; }));
  throwsCode(() => R.resolveProfile('tci', { dir }), 'MANIFEST_UNKNOWN_KEY');
});
check('Tolak tipe expected salah (string "false")', () => {
  const dir = fixture((rw) => rw('customers/tci.json', (d) => { d.overrides.tracking.riwayat.routePlayback.expected = 'false'; }));
  throwsCode(() => R.resolveProfile('tci', { dir }), 'MANIFEST_TYPE');
});
check('Tolak leaf boolean polos (harus object ber-source)', () => {
  const dir = fixture((rw) => rw('customers/tci.json', (d) => { d.overrides.tracking.riwayat.routePlayback = false; }));
  throwsCode(() => R.resolveProfile('tci', { dir }), 'MANIFEST_TYPE');
});
check('Tolak leaf tanpa source', () => {
  const dir = fixture((rw) => rw('customers/tci.json', (d) => { delete d.overrides.tracking.riwayat.routePlayback.source; }));
  throwsCode(() => R.resolveProfile('tci', { dir }), 'MANIFEST_TYPE');
});
check('Tolak ekspektasi wajib yang belum lengkap (null)', () => {
  const dir = fixture((rw) => rw('customers/tci.json', (d) => { delete d.overrides.tracking.terkini.routeDeviation; }));
  throwsCode(() => R.resolveProfile('tci', { dir }), 'MANIFEST_INCOMPLETE');
});
check('Tolak paket yang tidak mendefinisikan semua capability', () => {
  const dir = fixture((rw) => rw('packages/starter.json', (d) => { delete d.capabilities.progres; }));
  throwsCode(() => R.resolveProfile('tci', { dir }), 'PACKAGE_INCOMPLETE');
});
check('Tolak requiredCapabilities tidak dikenal', () => {
  const dir = fixture((rw) => rw('customers/tci.json', (d) => { d.requiredCapabilities.push('tracking.terkini.heatmap'); }));
  throwsCode(() => R.resolveProfile('tci', { dir }), 'MANIFEST_UNKNOWN_KEY');
});
check('Tolak nilai credential di target', () => {
  const dir = fixture((rw) => rw('targets/ops-staging-admin.json', (d) => { d.account.password = 'x'; }));
  throwsCode(() => R.resolveTarget('ops-staging-admin', 'tci', { dir }), 'TARGET_INVALID');
});
check('Tolak envOverride berisi nilai, bukan nama env var', () => {
  const dir = fixture((rw) => rw('targets/ops-staging-admin.json', (d) => { d.account.envOverride.email = 'someone@example.com'; }));
  throwsCode(() => R.resolveTarget('ops-staging-admin', 'tci', { dir }), 'TARGET_INVALID');
});
check('Tolak target http (non-https)', () => {
  const dir = fixture((rw) => rw('targets/ops-staging-admin.json', (d) => { d.environment.baseUrl = 'http://ops-staging.prahu-hub.com'; }));
  throwsCode(() => R.resolveTarget('ops-staging-admin', 'tci', { dir }), 'TARGET_INVALID');
});
check('Kredensial env.md tidak dipakai lintas environment', () => {
  const t = R.resolveTarget('example-offline', 'example-local');
  throwsCode(() => R.resolveCredentials(t, { env: {}, parseEnv: () => ({ baseUrl: 'https://ops-staging.prahu-hub.com', accounts: [] }) }), 'AUTH_BLOCKED');
});
check('Kredensial: env override dipakai bila tersedia; nilai tidak muncul di source', () => {
  const t = R.resolveTarget('ops-staging-admin', 'tci');
  const c = R.resolveCredentials(t, { env: { OPS_ADMIN_EMAIL: 'e@x', OPS_ADMIN_PASSWORD: 'p' }, parseEnv: () => { throw new Error('tidak boleh dibaca'); } });
  assert.equal(c.source, 'env:OPS_ADMIN_EMAIL');
});

// ---------- Profil contoh: registrasi customer baru tanpa ubah logika inti ----------
check('Profil contoh lokal ter-resolve (paket starter + override)', () => {
  const ex = R.resolveProfile('example-local');
  assert.equal(ex.kind, 'example');
  assert.equal(ex.expectations['navigation.sidebar.dashboardOperasional'].expected, false);
  assert.equal(ex.expectations['navigation.sidebar.monitoring'].expected, true);
});
check('Customer baru cukup file + entri registry', () => {
  const dir = fixture((rw, d) => {
    const doc = JSON.parse(fs.readFileSync(path.join(d, 'customers/example-local.json'), 'utf8'));
    doc.id = 'acme-demo';
    fs.writeFileSync(path.join(d, 'customers/acme-demo.json'), JSON.stringify(doc));
    rw('registry.json', (r) => { r.profiles['acme-demo'] = 'customers/acme-demo.json'; });
  });
  assert.equal(R.resolveProfile('acme-demo', { dir }).profileId, 'acme-demo');
});

// ---------- Discovery dan command default ----------
function list(envExtra) {
  const r = spawnSync('npx', ['playwright', 'test', '--list', '--pass-with-no-tests'], { cwd: ROOT, env: { ...process.env, OPS_PROFILE: '', OPS_TARGET: '', OPS_ALLOW_DISABLED_PROFILE: '1', ...envExtra }, encoding: 'utf8' });
  const m = (r.stdout + r.stderr).match(/Total: (\d+) tests?/);
  return { code: r.status, total: m ? Number(m[1]) : null, out: r.stdout + r.stderr };
}
check('Command default (tanpa OPS_PROFILE): 0 test, suite custom tidak terdaftar', () => {
  const r = list({});
  assert.equal(r.total, 0, r.out);
});
for (const [p, n] of [['default', 16], ['tci', 18], ['example-local', 2]]) {
  check(`Discovery profil ${p}: ${n} test`, () => {
    const r = list({ OPS_PROFILE: p });
    assert.equal(r.total, n, r.out.slice(-500));
    if (p !== 'default') assert.ok(!/profil default/.test(r.out));
  });
}
check('Discovery profil tidak dikenal gagal (tidak fallback ke default)', () => {
  const r = list({ OPS_PROFILE: 'acme' });
  assert.notEqual(r.code, 0);
  assert.match(r.out, /PROFILE_UNKNOWN/);
});
check('Setiap requirement TCI dipetakan ke skenario', () => {
  const sc = JSON.parse(fs.readFileSync(path.join(ROOT, tci.scenarioFile), 'utf8')).scenarios;
  for (const [rid, req] of Object.entries(tci.requirements)) {
    for (const cap of req.capabilities) assert.ok(sc.some((s) => s.capability === cap && s.requirements.includes(rid)), `${rid}/${cap}`);
  }
  assert.equal(new Set(sc.filter((s) => s.requirements.includes('TCI005')).map((s) => s.capability)).size, 3);
  // Klarifikasi 2026-10-28: legenda prediksi/penyimpangan termasuk TCI002/TCI003; TCI001 menjaga tab + data riwayat.
  assert.equal(tci.expectations['tracking.terkini.predictionLegend'].expected, false);
  assert.equal(tci.expectations['tracking.terkini.deviationLegend'].expected, false);
  assert.equal(tci.expectations['tracking.riwayat.tab'].expected, true);
  assert.equal(tci.expectations['tracking.riwayat.search'].expected, true);
});

check('Run profil: trace Playwright dimatikan (trace merekam credential/token)', () => {
  const r = spawnSync('node', ['-e', 'const c=require("./playwright.config.js");process.stdout.write(JSON.stringify({t:c.use.trace,g:!!c.globalSetup}))'],
    { cwd: ROOT, env: { ...process.env, OPS_PROFILE: 'tci', OPS_TARGET: '', OPS_RUN_DIR: '/tmp/x' }, encoding: 'utf8' });
  assert.deepEqual(JSON.parse(r.stdout), { t: 'off', g: true });
  const d = spawnSync('node', ['-e', 'const c=require("./playwright.config.js");process.stdout.write(JSON.stringify({t:c.use.trace,g:!!c.globalSetup}))'],
    { cwd: ROOT, env: { ...process.env, OPS_PROFILE: '' }, encoding: 'utf8' });
  assert.deepEqual(JSON.parse(d.stdout), { t: 'retain-on-failure', g: false });
});

// ---------- Perbaikan hasil code review ----------
check('Requirement ID typo pada skenario ditolak; label konteks diterima', () => {
  const { loadScenarios } = require('../tests/helpers/profile');
  const tmp = path.join(ROOT, 'artifacts', `validate-sc-${process.pid}.json`);
  const base = JSON.parse(fs.readFileSync(path.join(ROOT, tci.scenarioFile), 'utf8'));
  base.scenarios.find((x) => x.id === 'SCN-0001').requirements = ['TCI0O1'];
  fs.writeFileSync(tmp, JSON.stringify(base));
  try {
    assert.throws(() => loadScenarios({ ...tci, scenarioFile: path.relative(ROOT, tmp) }), /requirement tidak dikenal TCI0O1/);
    assert.ok(loadScenarios(tci).length > 0);
  } finally { fs.rmSync(tmp, { force: true }); }
});
check('Target dengan environment bukan object -> TARGET_INVALID (bukan TypeError)', () => {
  const dir = fixture((rw) => rw('targets/ops-staging-admin.json', (d) => { d.environment = null; }));
  throwsCode(() => R.resolveTarget('ops-staging-admin', 'default', { dir }), 'TARGET_INVALID');
});
check('Secret scan: password non-ASCII terdeteksi byte-level; artefak bersih lolos', () => {
  const dir = fs.mkdtempSync(path.join(ROOT, 'artifacts', 'validate-scan-'));
  try {
    fs.writeFileSync(path.join(dir, 'a.json'), '{"x":"ok"}');
    const run = () => spawnSync('node', ['scripts/scan-run-secrets.js', dir, 'ops-staging-admin'],
      { cwd: ROOT, env: { ...process.env, OPS_ADMIN_EMAIL: 'e@x.test', OPS_ADMIN_PASSWORD: 'pässwörd€1' }, encoding: 'utf8' });
    assert.equal(run().status, 0);
    fs.writeFileSync(path.join(dir, 'b.json'), '{"pw":"pässwörd€1"}');
    assert.equal(run().status, 3);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});
check('Teardown tanpa OPS_RUN_ID tidak melepas lock milik run lain', () => {
  const lock = require('../tests/helpers/target-lock');
  const key = 'ops-staging';
  assert.equal(lock.status(key), null, 'lock ops-staging harus kosong sebelum uji');
  lock.acquire(key, { runId: 'OTHER', profileId: 'default' });
  try {
    const env = { ...process.env, OPS_PROFILE: 'default', OPS_RUN_DIR: fs.mkdtempSync(path.join(os.tmpdir(), 'td-')) };
    delete env.OPS_RUN_ID;
    const r = spawnSync('node', ['-e', 'require("./tests/helpers/profile-global-teardown")().then(()=>process.exit(0))'], { cwd: ROOT, env, encoding: 'utf8' });
    assert.equal(r.status, 0, r.stderr);
    assert.equal(lock.status(key).runId, 'OTHER');
  } finally { lock.release(key, 'OTHER'); }
});

// ---------- Lock ----------
check('Lock: run kedua pada lockKey sama ditolak; release hanya oleh pemilik', () => {
  const lock = require('../tests/helpers/target-lock');
  const key = `selftest-${process.pid}`;
  lock.acquire(key, { runId: 'A', profileId: 'tci' });
  assert.throws(() => lock.acquire(key, { runId: 'B', profileId: 'default' }), /PRECONDITION_LOCKED/);
  assert.equal(lock.release(key, 'B').released, false);
  assert.equal(lock.release(key, 'A').released, true);
  assert.equal(lock.status(key), null);
});

// ---------- Converter + report terpisah per profil/target/runId ----------
check('Converter/report: nama file & metadata dipisah per profil/target/runId; precondition -> blocked', () => {
  const pyPath = [path.join(ROOT, 'artifacts/python-deps'), process.env.PYTHONPATH].filter(Boolean).join(path.delimiter);
  const tmp = fs.mkdtempSync(path.join(ROOT, 'artifacts', 'validation-profiles-'));
  try {
    fs.cpSync(path.join(ROOT, 'scripts'), path.join(tmp, 'scripts'), { recursive: true });
    fs.cpSync(path.join(ROOT, 'scenario/profile-capabilities'), path.join(tmp, 'scenario/profile-capabilities'), { recursive: true });
    fs.mkdirSync(path.join(tmp, 'config'));
    fs.copyFileSync(path.join(ROOT, 'config/env.example.md'), path.join(tmp, 'config/env.example.md'));
    const outs = [];
    for (const [profile, runId] of [['tci', 'R1'], ['default', 'R1']]) {
      const runDir = `artifacts/runs/${profile}/ops-staging-admin/${runId}`;
      fs.mkdirSync(path.join(tmp, runDir), { recursive: true });
      fs.writeFileSync(path.join(tmp, runDir, 'run-meta.json'), JSON.stringify({ profile, target: 'ops-staging-admin', runId, runDir, commit: 'abc1234', manifestVersion: 'm', packageId: 'p', packageVersion: 'v', baseUrl: 'https://x', expectedRole: 'ADMIN' }));
      fs.writeFileSync(path.join(tmp, runDir, 'isolation.json'), JSON.stringify({ configDrift: false, lockReleased: true }));
      const specs = [
        { title: 'SCN-0001: x', tests: [{ results: [{ status: 'passed' }] }] },
        { title: 'SCN-0002: x', tests: [{ results: [{ status: 'failed', errors: [{ message: '[PRECONDITION_CONFIG_MISMATCH] x' }] }] }] },
        { title: 'SCN-0003: x', tests: [{ results: [{ status: 'failed', errors: [{ message: '[DATA_UNAVAILABLE] x' }] }] }] },
        { title: 'SCN-0004: x', tests: [{ results: [{ status: 'failed', errors: [{ message: 'expect(received).toBe(expected)' }] }] }] },
      ];
      fs.writeFileSync(path.join(tmp, runDir, 'playwright.json'), JSON.stringify({ stats: { startTime: '2026-10-28T00:00:00Z', duration: 1 }, suites: [{ specs }] }));
      const r = spawnSync('python3', ['scripts/playwright_to_results.py', `${runDir}/playwright.json`, 'profile-capabilities', '--run-dir', runDir], { cwd: tmp, encoding: 'utf8' });
      assert.equal(r.status, 0, r.stderr);
      const out = r.stdout.trim().split('\n').pop();
      outs.push(out);
      const data = JSON.parse(fs.readFileSync(path.join(tmp, out), 'utf8'));
      const st = data.scenarios.map((s) => s.status);
      assert.deepEqual(st.slice(0, 4), ['passed', 'blocked', 'blocked', 'failed']);
      // Skenario profil yang tidak ada di report tidak hilang: skipped (tanpa error global).
      assert.ok(st.length > 4 && st.slice(4).every((x) => x === 'skipped'), JSON.stringify(st));
      assert.equal(data.profileRun.profile, profile);
      assert.equal(data.environment.user, 'target:ops-staging-admin');
      assert.ok(data.scenarios[0].requirements.length > 0);
      const g = spawnSync('python3', ['scripts/generate_report.py', out], { cwd: tmp, encoding: 'utf8', env: { ...process.env, PYTHONPATH: pyPath } });
      assert.equal(g.status, 0, g.stderr);
    }
    assert.notEqual(outs[0], outs[1]);
    const xlsx = fs.readdirSync(path.join(tmp, 'reports')).sort();
    assert.deepEqual(xlsx, ['profile-capabilities__default__ops-staging-admin__R1.xlsx', 'profile-capabilities__tci__ops-staging-admin__R1.xlsx']);
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});

let failed = 0;
for (const [s, n, e] of results) {
  console.log(`${s}  ${n}${e ? `\n      ${e}` : ''}`);
  if (s === 'FAIL') failed++;
}
console.log(`\n${results.length - failed}/${results.length} PASS`);
process.exit(failed ? 1 : 0);

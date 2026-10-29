// Fixture suite profil: precondition target -> login sekali per worker -> verifikasi role.
// Kode error di awal pesan dipetakan converter menjadi blocked (bukan bug produk).
// Read-only: semua request non-GET diblok kecuali endpoint auth. Credential/token tidak pernah dicetak.
const fs = require('fs');
const path = require('path');
const base = require('@playwright/test');
const { loadActive } = require('./profile');
const { resolveCredentials, checkObservedConfig } = require('../../profiles/resolver');
const { fetchSystemStatus, summarizeStatus } = require('./ops-api');

const AUTH_PATHS = /^\/api\/auth\/(login|refresh|logout|me)$/;

function runFile(name) {
  const dir = process.env.OPS_RUN_DIR;
  return dir ? path.join(dir, name) : null;
}

function writeRunFile(name, data) {
  const f = runFile(name);
  if (f) fs.writeFileSync(f, JSON.stringify(data, null, 2));
}

async function login(page, baseUrl, creds) {
  await page.goto(`${baseUrl}/login`);
  // Form siap saat handler React terpasang (observasi explore/2026-09-23-login-form-observation.md).
  await page.waitForFunction(() => {
    const f = document.querySelector('form');
    return f && Object.keys(f).some((k) => k.startsWith('__reactProps') && typeof f[k]?.onSubmit === 'function');
  });
  await page.getByPlaceholder('Masukkan Email', { exact: true }).fill(creds.email);
  await page.getByPlaceholder('Masukkan Password', { exact: true }).fill(creds.password);
  const resP = page.waitForResponse((r) => new URL(r.url()).pathname === '/api/auth/login', { timeout: 30_000 }).catch(() => null);
  await page.getByRole('button', { name: 'Login', exact: true }).click();
  const res = await resP;
  if (!res || res.status() !== 200) return { ok: false, status: res ? res.status() : null };
  await page.waitForURL((u) => !u.pathname.startsWith('/login'), { timeout: 30_000 });
  return { ok: true, status: res.status() };
}

const test = base.test.extend({
  active: [async ({}, use) => {
    const active = loadActive();
    if (!active) throw new Error('[PROFILE_RUN_CONTEXT] OPS_PROFILE tidak diset');
    await use(active);
  }, { scope: 'worker' }],

  opsSession: [async ({ browser, active }, use, workerInfo) => {
    const { profile, target } = active;
    const env = target.environment;

    // 1. Environment dan konfigurasi observasi (bukan dari UI fitur yang diuji).
    const status = await fetchSystemStatus(env.apiBaseUrl);
    const observed = summarizeStatus(status);
    writeRunFile(`observed-config-w${workerInfo.workerIndex}.json`, observed);
    if (status.httpStatus !== 200 || !status.data) {
      throw new Error(`[PRECONDITION_ENV] system/status tidak dapat dibaca (HTTP ${status.httpStatus}${status.error ? `, ${status.error}` : ''})`);
    }
    for (const k of ['maintenanceMode', 'expired', 'paymentOverdue']) {
      if (status.data[k]) throw new Error(`[PRECONDITION_ENV] system/status ${k}=true`);
    }
    if (env.appEnv && status.data.appEnv !== env.appEnv) {
      throw new Error(`[PRECONDITION_ENV] appEnv observasi ${status.data.appEnv} != target ${env.appEnv}`);
    }
    const mismatches = checkObservedConfig(profile.requiredConfig, status.data.features);
    if (mismatches.length) {
      throw new Error(`[PRECONDITION_CONFIG_MISMATCH] konfigurasi target ${target.id} tidak sesuai profil ${profile.profileId}: ` +
        mismatches.map((m) => `${m.capability} (${m.reason})`).join('; '));
    }

    // 2. Login: satu percobaan per run; kegagalan dicatat agar worker lain tidak mengulang.
    const authFile = runFile('auth-state.json');
    if (authFile && fs.existsSync(authFile)) {
      const prev = JSON.parse(fs.readFileSync(authFile, 'utf8'));
      if (prev.failed) throw new Error(`${prev.code} login sudah gagal pada run ini (${prev.detail}); tidak diulang`);
    }
    let creds;
    try {
      creds = resolveCredentials(target);
    } catch (e) {
      writeRunFile('auth-state.json', { failed: true, code: '[AUTH_BLOCKED]', detail: e.message.replace(/^\[\w+\]\s*/, '') });
      throw new Error(`[AUTH_BLOCKED] ${e.message}`);
    }

    const context = await browser.newContext({ baseURL: env.baseUrl, viewport: { width: 1440, height: 1000 }, timezoneId: 'Asia/Jakarta' });
    const blocked = [];
    let token = null;
    await context.route('**/*', (route) => {
      const req = route.request();
      const url = new URL(req.url());
      if (req.method() === 'GET' || AUTH_PATHS.test(url.pathname)) return route.continue();
      if (!url.pathname.startsWith('/cdn-cgi/')) blocked.push({ method: req.method(), path: url.pathname });
      return route.abort();
    });
    context.on('request', (req) => {
      const h = req.headers().authorization;
      if (h && req.url().startsWith(env.apiBaseUrl)) token = h;
    });
    const page = await context.newPage();
    const meP = page.waitForResponse((r) => new URL(r.url()).pathname === '/api/auth/me', { timeout: 30_000 }).catch(() => null);
    const result = await login(page, env.baseUrl, creds);
    creds = null;
    if (!result.ok) {
      writeRunFile('auth-state.json', { failed: true, code: '[AUTH_FAILURE]', detail: `POST /api/auth/login HTTP ${result.status}` });
      await context.close();
      throw new Error(`[AUTH_FAILURE] login gagal (HTTP ${result.status}); tidak ada retry otomatis`);
    }

    // 3. Role akun dari API, bukan dari label config.
    const meRes = await meP;
    const me = meRes ? await meRes.json().catch(() => null) : null;
    const role = me && me.data ? me.data.role : null;
    writeRunFile('auth-state.json', { failed: false, role, at: new Date().toISOString() });
    if (role !== target.account.expectedRole) {
      await context.close();
      throw new Error(`[PRECONDITION_ROLE] role akun ${role} != role target ${target.account.expectedRole}`);
    }
    await page.close();

    const api = async (p) => {
      const res = await context.request.get(`${env.apiBaseUrl}${p}`, { headers: token ? { authorization: token } : {} });
      return { status: res.status(), body: await res.json().catch(() => null) };
    };

    await use({ context, api, observed, role, blocked });

    // Cleanup dicatat terpisah dari hasil suite.
    const cleanup = { at: new Date().toISOString(), worker: workerInfo.workerIndex, blockedNonGet: blocked };
    try {
      const p = await context.newPage();
      await p.goto(`${env.baseUrl}/akun-saya`).catch(() => {});
      cleanup.logoutStatus = await p.evaluate((u) => fetch(`${u}/auth/logout`, { method: 'POST', credentials: 'include' })
        .then((r) => r.status).catch(() => null), env.apiBaseUrl);
    } catch (e) {
      cleanup.logoutError = e.message;
    } finally {
      await context.close();
      cleanup.contextClosed = true;
      writeRunFile(`cleanup-w${workerInfo.workerIndex}.json`, cleanup);
    }
  }, { scope: 'worker', timeout: 120_000 }],

  page: async ({ opsSession }, use) => {
    const page = await opsSession.context.newPage();
    try { await use(page); } finally { await page.close(); }
  },
});

module.exports = { test, expect: base.expect };

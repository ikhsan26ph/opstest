const path = require('path');
const { defineConfig, devices } = require('@playwright/test');
const { parseEnv } = require('./tests/helpers/env');
const { activeSelection } = require('./tests/helpers/profile');

const env = parseEnv();
// Suite profil hanya aktif bila OPS_PROFILE diset (scripts/run-profile.sh). Artefak dipisah per
// profil/target/runId lewat OPS_RUN_DIR; tanpa profil, perilaku default tidak berubah.
const profileRun = activeSelection();
const runDir = profileRun && process.env.OPS_RUN_DIR;

module.exports = defineConfig({
  testDir: './tests',
  outputDir: runDir ? path.join(runDir, 'test-results') : 'artifacts/test-results',
  timeout: 90_000,
  expect: { timeout: 10_000 },
  // Conservative initial execution policy, NOT an observed OPS backend constraint.
  // Session/storageState and safe concurrency: NEEDS VALIDATION.
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [
    ['line'],
    ['json', { outputFile: runDir ? path.join(runDir, 'playwright.json') : 'results/_playwright/last-run.json' }],
  ],
  ...(profileRun ? {
    globalSetup: require.resolve('./tests/helpers/profile-global-setup'),
    globalTeardown: require.resolve('./tests/helpers/profile-global-teardown'),
  } : {}),
  use: {
    baseURL: env.baseUrl,
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    // Suite profil login di fixture worker; trace merekam isian form dan header Authorization,
    // sehingga trace dimatikan untuk run profil. Evidence memakai screenshot + anotasi observasi.
    trace: profileRun ? 'off' : 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});

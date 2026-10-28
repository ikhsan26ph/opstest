const { defineConfig, devices } = require('@playwright/test');
const { parseEnv } = require('./tests/helpers/env');

const env = parseEnv();

module.exports = defineConfig({
  testDir: './tests',
  outputDir: 'artifacts/test-results',
  timeout: 90_000,
  expect: { timeout: 10_000 },
  // Conservative initial execution policy, NOT an observed OPS backend constraint.
  // Session/storageState and safe concurrency: NEEDS VALIDATION.
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [
    ['line'],
    ['json', { outputFile: 'results/_playwright/last-run.json' }],
  ],
  use: {
    baseURL: env.baseUrl,
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});

// Suite capability berbasis profil. Tanpa OPS_PROFILE tidak ada test yang didaftarkan
// (command default tetap 0 test bisnis). Jalankan lewat: bash scripts/run-profile.sh <profil> [target].
const { test, expect } = require('./helpers/profile-fixtures');
const { loadActive } = require('./helpers/profile');
const { CHECKS } = require('./capabilities');

const active = loadActive();

if (active) {
  const { profile, target, scenarios } = active;
  test.describe(`profil ${profile.profileId} @ ${target.id}`, () => {
    for (const s of scenarios) {
      const leaf = profile.expectations[s.capability];
      const check = CHECKS[s.capability];
      test(`${s.id}: ${s.title}`, async ({ page, opsSession }, testInfo) => {
        expect(check, `check untuk ${s.capability}`).toBeTruthy();
        testInfo.annotations.push({
          type: 'expectation',
          description: `${s.capability} expected=${leaf.expected} (sumber: ${leaf.source}; konfirmasi: ${leaf.confirmation || '-'})`,
        });
        const observe = (key, value) => testInfo.annotations.push({ type: 'observation', description: `${key}=${JSON.stringify(value)}` });
        try {
          if (leaf.expected === null) {
            // Ekspektasi belum ditetapkan: check hanya mengamati. Hasilnya (termasuk error) tidak boleh
            // menjadi passed/failed; dicatat sebagai observasi lalu skipped.
            await check({ page, expected: null, session: opsSession, observe }).catch((e) => observe('observeError', String(e.message).split('\n')[0].slice(0, 200)));
          } else {
            await check({ page, expected: leaf.expected, session: opsSession, observe });
          }
        } finally {
          const shot = testInfo.outputPath('evidence.png');
          if (!page.isClosed()) {
            await page.screenshot({ path: shot, fullPage: true }).then(() => testInfo.attachments.push({ name: 'evidence', path: shot, contentType: 'image/png' })).catch(() => {});
          }
        }
        test.skip(leaf.expected === null, `Ekspektasi ${s.capability} belum ditetapkan (${leaf.source}); hanya observasi, bukan bukti lulus`);
      });
    }
  });
}

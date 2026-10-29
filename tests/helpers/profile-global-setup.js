// Aktif hanya bila OPS_PROFILE diset. Mengambil lock target dan snapshot konfigurasi awal.
// Tidak mengubah konfigurasi aplikasi.
const fs = require('fs');
const path = require('path');
const { loadActive } = require('./profile');
const { fetchSystemStatus, summarizeStatus } = require('./ops-api');
const lock = require('./target-lock');

module.exports = async () => {
  const active = loadActive();
  if (!active) return;
  const runDir = process.env.OPS_RUN_DIR;
  const runId = process.env.OPS_RUN_ID;
  if (!runDir || !runId) {
    throw new Error('[PROFILE_RUN_CONTEXT] Jalankan profil lewat scripts/run-profile.sh agar OPS_RUN_DIR/OPS_RUN_ID dan reporter terpisah.');
  }
  fs.mkdirSync(runDir, { recursive: true });
  const { profile, target } = active;
  const held = lock.acquire(target.settings.lockKey, { runId, profileId: profile.profileId, targetId: target.id });
  const before = await fetchSystemStatus(target.environment.apiBaseUrl);
  fs.writeFileSync(path.join(runDir, 'config-before.json'), JSON.stringify(summarizeStatus(before), null, 2));
  fs.writeFileSync(path.join(runDir, 'lock.json'), JSON.stringify(held, null, 2));
};

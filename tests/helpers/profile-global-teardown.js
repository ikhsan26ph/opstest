// Snapshot konfigurasi akhir, deteksi drift selama run, lepas lock. Hasil ditulis ke isolation.json,
// terpisah dari hasil suite. Tidak berjalan bila proses dihentikan paksa (SIGKILL).
const fs = require('fs');
const path = require('path');
const { loadActive } = require('./profile');
const { fetchSystemStatus, summarizeStatus } = require('./ops-api');
const lock = require('./target-lock');

module.exports = async () => {
  const active = loadActive();
  const runDir = process.env.OPS_RUN_DIR;
  if (!active || !runDir) return;
  const { target } = active;
  const out = { at: new Date().toISOString(), lockKey: target.settings.lockKey };
  try {
    const beforeFile = path.join(runDir, 'config-before.json');
    if (!fs.existsSync(beforeFile)) {
      // Global setup gagal (mis. lock dipegang run lain): tidak ada sesi/snapshot milik run ini.
      out.configDrift = null;
      out.note = 'global setup tidak selesai; snapshot awal tidak ada';
      return;
    }
    const before = JSON.parse(fs.readFileSync(beforeFile, 'utf8'));
    const after = summarizeStatus(await fetchSystemStatus(target.environment.apiBaseUrl));
    fs.writeFileSync(path.join(runDir, 'config-after.json'), JSON.stringify(after, null, 2));
    const keys = ['products', 'productSource', 'addOns', 'features', 'maintenanceMode'];
    const drift = after.features
      ? keys.filter((k) => JSON.stringify(before[k]) !== JSON.stringify(after[k]))
      : ['snapshot tidak lengkap'];
    out.configDrift = drift.length > 0;
    out.driftKeys = drift;
    out.configChangedByRun = false; // suite ini read-only terhadap konfigurasi
  } catch (e) {
    out.configDrift = null;
    out.error = e.message;
  } finally {
    const r = lock.release(target.settings.lockKey, process.env.OPS_RUN_ID);
    out.lockReleased = r.released;
    if (!r.released) out.lockNote = r.reason;
    fs.writeFileSync(path.join(runDir, 'isolation.json'), JSON.stringify(out, null, 2));
  }
};

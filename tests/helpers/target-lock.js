// Lock lintas run di host yang sama untuk satu lockKey (scope setting target).
// Bukan lock lintas mesin: runner lain (CI/host lain) wajib memakai concurrency group yang sama.
// workers=1 hanya membatasi worker di dalam satu run.
const fs = require('fs');
const os = require('os');
const path = require('path');

const LOCK_DIR = path.join(__dirname, '..', '..', 'artifacts', 'locks');

function lockPath(lockKey) {
  return path.join(LOCK_DIR, `${lockKey}.lock`);
}

function pidAlive(pid) {
  try { process.kill(pid, 0); return true; } catch (e) { return e.code === 'EPERM'; }
}

function acquire(lockKey, owner) {
  fs.mkdirSync(LOCK_DIR, { recursive: true });
  const file = lockPath(lockKey);
  const body = { ...owner, host: os.hostname(), pid: process.pid, acquiredAt: new Date().toISOString() };
  try {
    fs.writeFileSync(file, JSON.stringify(body, null, 2), { flag: 'wx' });
    return body;
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
    let holder = {};
    try { holder = JSON.parse(fs.readFileSync(file, 'utf8')); } catch { /* unreadable lock */ }
    const stale = holder.host === os.hostname() && holder.pid && !pidAlive(holder.pid);
    throw new Error(`[PRECONDITION_LOCKED] lock '${lockKey}' dipegang run ${holder.runId || '?'} ` +
      `(profil ${holder.profileId || '?'}, host ${holder.host || '?'}, pid ${holder.pid || '?'}, sejak ${holder.acquiredAt || '?'})` +
      (stale ? '. Proses pemegang tidak hidup: verifikasi tidak ada run aktif lalu jalankan `npm run profile:lock -- release ' + lockKey + '`.' : '. Tunggu run tersebut selesai.'));
  }
}

function release(lockKey, runId) {
  const file = lockPath(lockKey);
  if (!fs.existsSync(file)) return { released: false, reason: 'lock tidak ada' };
  const holder = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (runId && holder.runId !== runId) return { released: false, reason: `lock milik run lain (${holder.runId})` };
  fs.unlinkSync(file);
  return { released: true };
}

function status(lockKey) {
  const file = lockPath(lockKey);
  return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : null;
}

module.exports = { acquire, release, status, lockPath };

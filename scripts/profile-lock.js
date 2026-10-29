#!/usr/bin/env node
// Recovery lock target. Usage: node scripts/profile-lock.js status|release <lockKey>
// Lepas lock HANYA setelah memastikan tidak ada run aktif pada scope setting yang sama.
const lock = require('../tests/helpers/target-lock');
const [cmd, key] = process.argv.slice(2);
if (!['status', 'release'].includes(cmd) || !key) {
  console.error('Usage: node scripts/profile-lock.js status|release <lockKey>');
  process.exit(2);
}
if (cmd === 'status') console.log(JSON.stringify(lock.status(key), null, 2) || 'null');
else console.log(JSON.stringify(lock.release(key)));

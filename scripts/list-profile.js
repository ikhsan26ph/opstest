#!/usr/bin/env node
// Discovery suite profil tanpa login/eksekusi. Usage: node scripts/list-profile.js <profil> [target]
const { spawnSync } = require('child_process');
const [profile, target] = process.argv.slice(2);
if (!profile) { console.error('Usage: node scripts/list-profile.js <profil> [target]'); process.exit(2); }
const env = { ...process.env, OPS_PROFILE: profile, ...(target ? { OPS_TARGET: target } : {}) };
const r = spawnSync('npx', ['playwright', 'test', '--list', 'tests/profile-capabilities.spec.js'], { env, stdio: 'inherit' });
process.exit(r.status ?? 1);

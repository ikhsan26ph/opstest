#!/usr/bin/env node
// Pindai artefak run untuk password akun target dan token Bearer/JWT. Hanya nama file yang dicetak.
// Usage: node scripts/scan-run-secrets.js <runDir> <target> [file tambahan...]
const fs = require('fs');
const path = require('path');
const { resolveTarget, resolveCredentials } = require('../profiles/resolver');
const [runDir, targetId, ...extra] = process.argv.slice(2);
const needles = [/Bearer\s+eyJ/, /eyJ[\w-]{10,}\.[\w-]{10,}\.[\w-]{10,}/];
try {
  const { password } = resolveCredentials(resolveTarget(targetId));
  if (password) needles.push(password);
} catch { /* tanpa credential: tetap pindai pola token */ }
const files = [];
const walk = (p) => fs.statSync(p).isDirectory() ? fs.readdirSync(p).forEach((f) => walk(path.join(p, f))) : files.push(p);
[runDir, ...extra].filter((p) => p && fs.existsSync(p)).forEach(walk);
const hits = files.filter((f) => {
  const buf = fs.readFileSync(f).toString('latin1');
  return needles.some((n) => (typeof n === 'string' ? buf.includes(n) : n.test(buf)));
});
if (hits.length) {
  console.error(`SECRET SCAN: ${hits.length} file memuat password/token — hapus sebelum dibagikan:\n${hits.join('\n')}`);
  process.exit(3);
}
console.log(`SECRET SCAN: bersih (${files.length} file)`);

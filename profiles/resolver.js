// Resolver profil: manifest efektif = baseline paket + override customer eksplisit.
// Manifest adalah EKSPEKTASI; resolver tidak membaca atau mengubah konfigurasi aplikasi.
// Tanpa dependency; dipakai Playwright (tests/helpers/profile.js) dan scripts/validate-profiles.js.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PROFILES_DIR = __dirname;
const LEAF_KEYS = new Set(['expected', 'source', 'confirmation']);
const CONFIRMATIONS = new Set(['observed', 'requirement', 'pending', 'example']);
const PROFILE_KINDS = new Set(['product', 'customer', 'example']);
const ID_RE = /^[a-z0-9][a-z0-9-]*$/;

class ProfileError extends Error {
  constructor(code, message) {
    super(`[${code}] ${message}`);
    this.code = code;
  }
}

const isPlainObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

function readJson(file, code) {
  if (!fs.existsSync(file)) throw new ProfileError(code, `file tidak ditemukan: ${path.relative(process.cwd(), file)}`);
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    throw new ProfileError(code, `JSON tidak valid: ${path.relative(process.cwd(), file)}: ${e.message}`);
  }
}

function requireKeys(obj, keys, where, code) {
  for (const k of keys) if (!(k in obj)) throw new ProfileError(code, `${where}: key wajib '${k}' tidak ada`);
}

function rejectUnknownKeys(obj, allowed, where, code) {
  for (const k of Object.keys(obj)) if (!allowed.includes(k)) throw new ProfileError(code, `${where}: key tidak dikenal '${k}'`);
}

function loadRegistry(dir = PROFILES_DIR) {
  const reg = readJson(path.join(dir, 'registry.json'), 'REGISTRY_INVALID');
  requireKeys(reg, ['registryVersion', 'catalog', 'packages', 'profiles', 'targets'], 'registry.json', 'REGISTRY_INVALID');
  for (const k of ['packages', 'profiles', 'targets']) {
    if (!isPlainObject(reg[k])) throw new ProfileError('REGISTRY_INVALID', `registry.json: '${k}' harus object`);
  }
  const catalog = readJson(path.join(dir, reg.catalog), 'CATALOG_INVALID');
  validateCatalog(catalog);
  return { dir, reg, catalog };
}

function validateCatalog(catalog) {
  requireKeys(catalog, ['catalogVersion', 'capabilities'], 'catalog', 'CATALOG_INVALID');
  if (!isPlainObject(catalog.capabilities)) throw new ProfileError('CATALOG_INVALID', 'catalog.capabilities harus object');
  for (const [key, cap] of Object.entries(catalog.capabilities)) {
    if (!/^[a-zA-Z]+(\.[a-zA-Z]+)+$/.test(key)) throw new ProfileError('CATALOG_INVALID', `key capability tidak valid: ${key}`);
    if (!isPlainObject(cap) || typeof cap.description !== 'string') throw new ProfileError('CATALOG_INVALID', `${key}: description wajib`);
    if (cap.config !== undefined) {
      if (!isPlainObject(cap.config) || !Array.isArray(cap.config.all) || cap.config.all.length === 0 ||
          !cap.config.all.every((f) => typeof f === 'string' && f)) {
        throw new ProfileError('CATALOG_INVALID', `${key}: config harus {all:[flag,...]}`);
      }
    }
  }
}

// Validasi tree ekspektasi (baseline paket atau override) terhadap katalog.
// Tree bertingkat; leaf = object dengan 'expected'. Mengembalikan map flat path -> leaf.
function flattenExpectations(tree, catalog, where, { requireAll = false } = {}) {
  if (!isPlainObject(tree)) throw new ProfileError('MANIFEST_TYPE', `${where}: harus object`);
  const flat = {};
  const walk = (node, prefix) => {
    for (const [k, v] of Object.entries(node)) {
      const p = prefix ? `${prefix}.${k}` : k;
      if (!isPlainObject(v)) throw new ProfileError('MANIFEST_TYPE', `${where}: '${p}' harus object, bukan ${Array.isArray(v) ? 'array' : typeof v}`);
      if ('expected' in v) {
        if (!(p in catalog.capabilities)) throw new ProfileError('MANIFEST_UNKNOWN_KEY', `${where}: capability tidak ada di katalog: ${p}`);
        rejectUnknownKeys(v, [...LEAF_KEYS], `${where}: ${p}`, 'MANIFEST_UNKNOWN_KEY');
        if (!(v.expected === true || v.expected === false || v.expected === null)) {
          throw new ProfileError('MANIFEST_TYPE', `${where}: ${p}.expected harus true|false|null, bukan ${JSON.stringify(v.expected)}`);
        }
        if (typeof v.source !== 'string' || !v.source.trim()) throw new ProfileError('MANIFEST_TYPE', `${where}: ${p}.source wajib string`);
        if (v.confirmation !== undefined && !CONFIRMATIONS.has(v.confirmation)) {
          throw new ProfileError('MANIFEST_TYPE', `${where}: ${p}.confirmation tidak valid: ${v.confirmation}`);
        }
        flat[p] = v;
      } else {
        const isPrefix = Object.keys(catalog.capabilities).some((c) => c.startsWith(`${p}.`));
        if (!isPrefix) throw new ProfileError('MANIFEST_UNKNOWN_KEY', `${where}: key tidak dikenal: ${p}`);
        walk(v, p);
      }
    }
  };
  walk(tree, '');
  if (requireAll) {
    const missing = Object.keys(catalog.capabilities).filter((c) => !(c in flat));
    if (missing.length) throw new ProfileError('PACKAGE_INCOMPLETE', `${where}: capability belum didefinisikan: ${missing.join(', ')}`);
  }
  return flat;
}

function deepClone(v) {
  return JSON.parse(JSON.stringify(v));
}

// Merge bertingkat: sibling dipertahankan, leaf override menggantikan leaf baseline utuh (termasuk false).
function deepMerge(base, override) {
  const out = deepClone(base);
  for (const [k, v] of Object.entries(override)) {
    if (isPlainObject(v) && !('expected' in v) && isPlainObject(out[k]) && !('expected' in out[k])) {
      out[k] = deepMerge(out[k], v);
    } else {
      out[k] = deepClone(v);
    }
  }
  return out;
}

function deepFreeze(o) {
  if (o && typeof o === 'object' && !Object.isFrozen(o)) {
    Object.freeze(o);
    for (const v of Object.values(o)) deepFreeze(v);
  }
  return o;
}

function loadPackage(ctx, packageId) {
  if (typeof packageId !== 'string' || !(packageId in ctx.reg.packages)) {
    throw new ProfileError('PACKAGE_UNKNOWN', `paket tidak terdaftar: ${JSON.stringify(packageId)}`);
  }
  const pkg = readJson(path.join(ctx.dir, ctx.reg.packages[packageId]), 'PACKAGE_INVALID');
  rejectUnknownKeys(pkg, ['id', 'version', 'description', 'capabilities'], `paket ${packageId}`, 'PACKAGE_INVALID');
  requireKeys(pkg, ['id', 'version', 'capabilities'], `paket ${packageId}`, 'PACKAGE_INVALID');
  if (pkg.id !== packageId) throw new ProfileError('PACKAGE_INVALID', `paket ${packageId}: id file '${pkg.id}' tidak cocok`);
  flattenExpectations(pkg.capabilities, ctx.catalog, `paket ${packageId}`, { requireAll: true });
  return pkg;
}

function loadProfileDoc(ctx, profileId) {
  if (typeof profileId !== 'string' || !ID_RE.test(profileId) || !(profileId in ctx.reg.profiles)) {
    throw new ProfileError('PROFILE_UNKNOWN', `profil tidak terdaftar: ${JSON.stringify(profileId)}. Terdaftar: ${Object.keys(ctx.reg.profiles).join(', ')}`);
  }
  const doc = readJson(path.join(ctx.dir, ctx.reg.profiles[profileId]), 'PROFILE_INVALID');
  const allowed = ['id', 'kind', 'displayName', 'status', 'disabledReason', 'package', 'manifestVersion', 'scenarioFile', 'requiredCapabilities', 'overrides', 'requirements'];
  rejectUnknownKeys(doc, allowed, `profil ${profileId}`, 'PROFILE_INVALID');
  requireKeys(doc, allowed.filter((k) => !['displayName', 'status', 'disabledReason'].includes(k)), `profil ${profileId}`, 'PROFILE_INVALID');
  if (doc.id !== profileId) throw new ProfileError('PROFILE_INVALID', `profil ${profileId}: id file '${doc.id}' tidak cocok`);
  if (doc.status !== undefined && !['active', 'disabled'].includes(doc.status)) {
    throw new ProfileError('PROFILE_INVALID', `profil ${profileId}: status harus active|disabled`);
  }
  if (!PROFILE_KINDS.has(doc.kind)) throw new ProfileError('PROFILE_INVALID', `profil ${profileId}: kind tidak valid: ${doc.kind}`);
  if (!Array.isArray(doc.requiredCapabilities) || !doc.requiredCapabilities.every((c) => typeof c === 'string')) {
    throw new ProfileError('PROFILE_INVALID', `profil ${profileId}: requiredCapabilities harus array string`);
  }
  for (const c of doc.requiredCapabilities) {
    if (!(c in ctx.catalog.capabilities)) throw new ProfileError('MANIFEST_UNKNOWN_KEY', `profil ${profileId}: requiredCapabilities memuat key tidak dikenal: ${c}`);
  }
  if (!isPlainObject(doc.requirements)) throw new ProfileError('PROFILE_INVALID', `profil ${profileId}: requirements harus object`);
  for (const [rid, r] of Object.entries(doc.requirements)) {
    if (!isPlainObject(r) || typeof r.title !== 'string' || !Array.isArray(r.capabilities)) {
      throw new ProfileError('PROFILE_INVALID', `profil ${profileId}: requirement ${rid} harus {title, capabilities[]}`);
    }
    for (const c of r.capabilities) {
      if (!doc.requiredCapabilities.includes(c)) {
        throw new ProfileError('PROFILE_INVALID', `profil ${profileId}: requirement ${rid} memakai ${c} yang tidak ada di requiredCapabilities`);
      }
    }
  }
  return doc;
}

function resolveProfile(profileId, { dir = PROFILES_DIR } = {}) {
  const ctx = loadRegistry(dir);
  const doc = loadProfileDoc(ctx, profileId);
  // Profil nonaktif tidak dapat dijalankan; OPS_ALLOW_DISABLED_PROFILE=1 hanya untuk validasi/arsip offline.
  if (doc.status === 'disabled' && process.env.OPS_ALLOW_DISABLED_PROFILE !== '1') {
    throw new ProfileError('PROFILE_DISABLED', `profil '${profileId}' nonaktif: ${doc.disabledReason || 'tanpa alasan tercatat'}`);
  }
  const pkg = loadPackage(ctx, doc.package);
  flattenExpectations(doc.overrides, ctx.catalog, `override ${profileId}`);
  const manifest = deepMerge(pkg.capabilities, doc.overrides);
  const flat = flattenExpectations(manifest, ctx.catalog, `manifest ${profileId}`, { requireAll: true });
  const incomplete = doc.requiredCapabilities.filter((c) => flat[c].expected === null);
  if (incomplete.length) {
    throw new ProfileError('MANIFEST_INCOMPLETE', `profil ${profileId}: ekspektasi wajib belum ditetapkan (null): ${incomplete.join(', ')}`);
  }
  const digest = crypto.createHash('sha256')
    .update(JSON.stringify({ manifest, pkg: pkg.version, catalog: ctx.catalog.catalogVersion })).digest('hex').slice(0, 12);
  return deepFreeze({
    profileId,
    kind: doc.kind,
    status: doc.status || 'active',
    displayName: doc.displayName || profileId,
    packageId: pkg.id,
    packageVersion: pkg.version,
    catalogVersion: ctx.catalog.catalogVersion,
    manifestVersion: `${doc.manifestVersion}+${digest}`,
    scenarioFile: doc.scenarioFile,
    requiredCapabilities: [...doc.requiredCapabilities],
    requirements: deepClone(doc.requirements),
    manifest,
    expectations: deepClone(flat),
    requiredConfig: deriveRequiredConfig(flat, doc.requiredCapabilities, ctx.catalog),
  });
}

// Ekspektasi capability ber-flag -> syarat konfigurasi observasi target (precondition, bukan verdict).
function deriveRequiredConfig(flat, required, catalog) {
  const out = [];
  for (const cap of required) {
    const cfg = catalog.capabilities[cap].config;
    if (!cfg || flat[cap].expected === null) continue;
    out.push({ capability: cap, flags: [...cfg.all], expectedAvailable: flat[cap].expected });
  }
  return out;
}

// Bandingkan observed features (system/status) dengan syarat profil.
function checkObservedConfig(requiredConfig, features) {
  if (!isPlainObject(features)) return [{ capability: '*', reason: 'features tidak tersedia pada system/status' }];
  const mismatches = [];
  for (const r of requiredConfig) {
    const unknown = r.flags.filter((f) => typeof features[f] !== 'boolean');
    if (unknown.length) {
      mismatches.push({ capability: r.capability, reason: `flag tidak dilaporkan: ${unknown.join(', ')}` });
      continue;
    }
    const available = r.flags.every((f) => features[f] === true);
    if (available !== r.expectedAvailable) {
      mismatches.push({
        capability: r.capability,
        reason: `ekspektasi ${r.expectedAvailable ? 'tersedia' : 'tidak tersedia'}, konfigurasi observasi ${r.flags.map((f) => `${f}=${features[f]}`).join(' & ')}`,
      });
    }
  }
  return mismatches;
}

function resolveTarget(targetId, profileId, { dir = PROFILES_DIR } = {}) {
  const ctx = loadRegistry(dir);
  if (typeof targetId !== 'string' || !(targetId in ctx.reg.targets)) {
    throw new ProfileError('TARGET_UNKNOWN', `target tidak terdaftar: ${JSON.stringify(targetId)}. Terdaftar: ${Object.keys(ctx.reg.targets).join(', ')}`);
  }
  const t = readJson(path.join(ctx.dir, ctx.reg.targets[targetId]), 'TARGET_INVALID');
  rejectUnknownKeys(t, ['id', 'description', 'environment', 'tenant', 'account', 'settings', 'allowedProfiles'], `target ${targetId}`, 'TARGET_INVALID');
  requireKeys(t, ['id', 'environment', 'tenant', 'account', 'settings', 'allowedProfiles'], `target ${targetId}`, 'TARGET_INVALID');
  if (t.id !== targetId) throw new ProfileError('TARGET_INVALID', `target ${targetId}: id file '${t.id}' tidak cocok`);
  requireKeys(t.environment, ['id', 'baseUrl', 'apiBaseUrl'], `target ${targetId}.environment`, 'TARGET_INVALID');
  for (const k of ['baseUrl', 'apiBaseUrl']) {
    if (!/^https:\/\/[^\s/]+/.test(t.environment[k])) throw new ProfileError('TARGET_INVALID', `target ${targetId}: ${k} harus URL https`);
  }
  // Hanya referensi secret yang boleh ada di target; nilai email/password ditolak.
  rejectUnknownKeys(t.account, ['secretRef', 'envOverride', 'expectedRole'], `target ${targetId}.account`, 'TARGET_INVALID');
  requireKeys(t.account, ['secretRef', 'expectedRole'], `target ${targetId}.account`, 'TARGET_INVALID');
  const ref = t.account.secretRef;
  if (!isPlainObject(ref) || ref.type !== 'env-md-row' || !Number.isInteger(ref.row) || ref.row < 1) {
    throw new ProfileError('TARGET_INVALID', `target ${targetId}: secretRef harus {type:'env-md-row', row:<int>=1>}`);
  }
  if (t.account.envOverride !== undefined) {
    const o = t.account.envOverride;
    if (!isPlainObject(o) || !/^[A-Z][A-Z0-9_]*$/.test(o.email || '') || !/^[A-Z][A-Z0-9_]*$/.test(o.password || '')) {
      throw new ProfileError('TARGET_INVALID', `target ${targetId}: envOverride harus berisi NAMA env var {email,password}, bukan nilai`);
    }
  }
  requireKeys(t.settings, ['scope', 'lockKey'], `target ${targetId}.settings`, 'TARGET_INVALID');
  if (!['environment', 'tenant', 'account', 'session', 'unknown'].includes(t.settings.scope)) {
    throw new ProfileError('TARGET_INVALID', `target ${targetId}: settings.scope tidak valid`);
  }
  if (!ID_RE.test(t.settings.lockKey)) throw new ProfileError('TARGET_INVALID', `target ${targetId}: lockKey tidak valid`);
  if (!Array.isArray(t.allowedProfiles)) throw new ProfileError('TARGET_INVALID', `target ${targetId}: allowedProfiles harus array`);
  if (profileId !== undefined && !t.allowedProfiles.includes(profileId)) {
    throw new ProfileError('TARGET_PROFILE_NOT_ALLOWED', `profil '${profileId}' tidak diizinkan pada target '${targetId}' (allowed: ${t.allowedProfiles.join(', ')})`);
  }
  return deepFreeze(t);
}

// Kredensial: env var override (CI) lalu baris config/env.md. Nilai tidak pernah dicetak.
function resolveCredentials(target, { env = process.env, parseEnv } = {}) {
  const o = target.account.envOverride;
  if (o && env[o.email] && env[o.password]) return { email: env[o.email], password: env[o.password], source: `env:${o.email}` };
  const parsed = (parseEnv || require('../tests/helpers/env').parseEnv)();
  if (parsed.baseUrl.replace(/\/$/, '') !== target.environment.baseUrl.replace(/\/$/, '')) {
    throw new ProfileError('AUTH_BLOCKED', `baseUrl config/env.md tidak sama dengan target ${target.id}; akun env.md tidak dipakai lintas environment`);
  }
  const acct = parsed.accounts.find((a) => a.no === target.account.secretRef.row);
  if (!acct) throw new ProfileError('AUTH_BLOCKED', `akun baris ${target.account.secretRef.row} config/env.md tidak tersedia`);
  return { email: acct.email, password: acct.password, source: `env.md#${target.account.secretRef.row}` };
}

module.exports = {
  ProfileError, loadRegistry, resolveProfile, resolveTarget, resolveCredentials,
  checkObservedConfig, deriveRequiredConfig, deepMerge, flattenExpectations,
};

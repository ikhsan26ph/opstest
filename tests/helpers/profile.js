// Pemilihan profil aktif. Tanpa OPS_PROFILE tidak ada profil aktif, sehingga command default
// (npm run test:list / npx playwright test) tidak menjalankan suite custom tanpa sengaja.
const fs = require('fs');
const path = require('path');
const { resolveProfile, resolveTarget, loadRegistry, ProfileError } = require('../../profiles/resolver');

const ROOT = path.join(__dirname, '..', '..');

function activeSelection(env = process.env) {
  const profileId = env.OPS_PROFILE;
  if (!profileId) return null;
  const { reg } = loadRegistry();
  if (!(profileId in reg.profiles)) {
    throw new ProfileError('PROFILE_UNKNOWN', `OPS_PROFILE '${profileId}' tidak terdaftar. Terdaftar: ${Object.keys(reg.profiles).join(', ')}`);
  }
  const targetId = env.OPS_TARGET || (reg.defaultTargets || {})[profileId];
  if (!targetId) throw new ProfileError('TARGET_UNKNOWN', `OPS_TARGET wajib untuk profil '${profileId}' (tidak ada defaultTargets)`);
  return { profileId, targetId };
}

function loadScenarios(profile) {
  const file = path.join(ROOT, profile.scenarioFile);
  if (!fs.existsSync(file)) throw new ProfileError('PROFILE_INVALID', `scenarioFile tidak ditemukan: ${profile.scenarioFile}`);
  const { scenarios } = JSON.parse(fs.readFileSync(file, 'utf8'));
  const ids = new Set();
  for (const s of scenarios) {
    if (!/^SCN-\d{4}$/.test(s.id)) throw new ProfileError('PROFILE_INVALID', `${profile.scenarioFile}: id tidak valid ${s.id}`);
    if (ids.has(s.id)) throw new ProfileError('PROFILE_INVALID', `${profile.scenarioFile}: id duplikat ${s.id}`);
    ids.add(s.id);
    if (!(s.capability in profile.expectations)) {
      throw new ProfileError('MANIFEST_UNKNOWN_KEY', `${profile.scenarioFile}: ${s.id} capability tidak dikenal ${s.capability}`);
    }
    if (!Array.isArray(s.requirements)) throw new ProfileError('PROFILE_INVALID', `${profile.scenarioFile}: ${s.id} requirements harus array`);
    for (const r of s.requirements) {
      const req = profile.requirements[r];
      // ID di luar requirements profil hanya boleh label konteks (CLARIFY-*, DEFAULT-*, <X>-CTX-*); typo ditolak.
      if (!req && !/^(CLARIFY-.+|DEFAULT-.+|[A-Z0-9]+-CTX-.+)$/.test(r)) {
        throw new ProfileError('PROFILE_INVALID', `${profile.scenarioFile}: ${s.id} requirement tidak dikenal ${r}`);
      }
      if (req && !req.capabilities.includes(s.capability)) {
        throw new ProfileError('PROFILE_INVALID', `${s.id}: requirement ${r} tidak memetakan capability ${s.capability}`);
      }
    }
  }
  // Setiap requirement customer wajib punya minimal satu skenario.
  for (const [rid, req] of Object.entries(profile.requirements)) {
    for (const cap of req.capabilities) {
      if (!scenarios.some((s) => s.capability === cap && s.requirements.includes(rid))) {
        throw new ProfileError('PROFILE_INVALID', `${profile.scenarioFile}: requirement ${rid}/${cap} belum dipetakan ke skenario`);
      }
    }
  }
  return scenarios;
}

function loadActive(env = process.env) {
  const sel = activeSelection(env);
  if (!sel) return null;
  const profile = resolveProfile(sel.profileId);
  const target = resolveTarget(sel.targetId, sel.profileId);
  return { profile, target, scenarios: loadScenarios(profile) };
}

module.exports = { activeSelection, loadActive, loadScenarios, ROOT };

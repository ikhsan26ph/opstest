# Tests

`npm run test:list` tanpa `OPS_PROFILE` menghasilkan 0 test (kontrak default dipertahankan).
Suite capability per profil: `tests/profile-capabilities.spec.js` + `tests/capabilities/` + fixture `tests/helpers/profile-fixtures.js`;
hanya aktif lewat `scripts/run-profile.sh <profil> [target]`. Lihat docs/testing-profiles.md.
Fixture generik `tests/helpers/fixtures.js` tetap fail-closed (AUTH_NOT_VALIDATED). Fixture profil login sekali per run dengan selector login yang teramati dan memverifikasi role via /api/auth/me.
Public smoke terpisah: `npm run smoke:public`, tidak melalui converter skenario.

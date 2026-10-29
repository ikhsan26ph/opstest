# opstest

Framework automation OPS staging yang disiapkan dari arsitektur omstest. Belum ada knowledge authenticated atau skenario bisnis OPS.

- Target: https://ops-staging.prahu-hub.com
- Baca AGENTS.md / CLAUDE.md dan docs/agent-guide.md.
- Setup: Node >=22; `npm ci`; bila browser belum tersedia `npx playwright install chromium`.
- Reporting: `python3 -m pip install -r requirements.txt` bila openpyxl belum tersedia.
- config/env.md sudah disiapkan dengan akun kosong dan gitignored. Template: config/env.example.md. Jangan isi akun buatan.
- Discovery: `npm run test:list` (0 test bisnis diharapkan; suite profil tidak ikut tanpa `OPS_PROFILE`).
- Profil produk/customer (aktif: default; tci nonaktif/arsip): `bash scripts/run-profile.sh <profil> [target]`; validasi offline `npm run validate:profiles`. Lihat docs/testing-profiles.md dan docs/customer-onboarding.md.
- Public observation tanpa login: `npm run smoke:public`.
- Auth fixture sengaja blocked sampai authenticated exploration selesai; isi credential saja belum mengaktifkannya.
- Workflow lengkap dan kontrak reporting: docs/agent-guide.md; skema: scenario/README.md.
- Audit migrasi: docs/migration-audit.md. Evidence publik: explore/public-smoke.json jika smoke berhasil.

Tidak ada metadata Git atau remote sumber yang disalin. Tidak ada commit/push.

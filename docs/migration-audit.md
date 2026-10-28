# Audit migrasi — 2026-09-23

## Sumber dan isolasi
Source lokal /home/icun/Project/omstest tersedia; tidak clone GitHub.
Target /home/icun/Project/opstest sudah ada dan kosong sebelum pekerjaan.
Tidak ada conflict/overwrite file user. Copy selektif, bukan copy seluruh repository lalu menghapus.
Tidak menyalin .git, credential config/env.md, settings.local.json, browser sessions,
node_modules, artifacts/results/reports, atau file kosong File. Tidak ada remote, commit, atau push.
Hash 2779 file sumber (termasuk Git, kecuali node_modules) dibanding sebelum/sesudah: identik.
Manifest audit lokal di artifacts/validation/source-integrity.json (gitignored).
Workspace QA registry tidak diubah karena scope user hanya folder target.

## Audit dependency dan coupling
Dibaca package/lock, Playwright config, kedua helper, semua script reporting,
AGENTS/CLAUDE, README, workflow/role/adapter, MCP configs, scenario schema,
contoh spec dan inventory knowledge. Search rekursif case-insensitive OMS/oms,
/monitoring, /order, storageState dan workers meliputi seluruh direktori knowledge/framework.
Jumlah match audit: config template 2, docs 21, explore 241, scenario 4993,
shared 376, scripts 3, tests 14, .claude 6, .codex 0.
Config akun sumber tidak ditampilkan/disalin.

## REUSE
- Playwright CommonJS, Chromium, timeout, JSON reporter; dependency/lock versi sumber.
- Kontrak SCN metadata/requirements dan struktur hasil; converter rekursif Playwright suites.
- Excel Summary/Detail/Failed_BugCandidates, screenshot attachments, batch merge.
- Tabel environment, struktur workflow/role/adapter dan MCP Playwright.

## ADAPT
- package/lock identity opstest; Playwright worker policy konservatif, tanpa klaim backend.
- env helper: credential opsional untuk initialize/discovery; requireCredentials tersedia.
- Auth fixture diganti guard AUTH_NOT_VALIDATED: tanpa route, locator, login, shared session.
- Converter mengenali AUTH_NOT_VALIDATED/AUTH_FAILURE/AUTH_BLOCKED sebagai blocked.
- Merger menghapus fallback hostname/akun/role sumber, mendukung kedua suffix schema,
  dan mengimplementasikan dedup last-batch-wins sesuai pesan script asal.
- Report title OPS; --all mengabaikan batch/internal files agar tidak double count.
- Wrapper reporter path unik agar run yang gagal initialize tidak memakai JSON run sebelumnya.
- Agent docs ditulis ulang dengan aturan evidence, traceability, triage, secret dan isolasi.
- MCP Claude tidak lagi hardcode executable Brave milik mesin sumber.
- requirements.txt mendokumentasikan dependency Excel yang telah tersedia lokal.

## REBUILD / tidak diimpor
Delapan folder scenario bisnis, satu spec bisnis, dua exploration knowledge files,
enam selector/recipe files dan decision history aplikasi sumber.
Tidak ada module/role/menu/route bisnis OPS yang dihasilkan dari knowledge tersebut.
Placeholder module-map bukan bukti exploration authenticated.
Folder task tidak dibuat karena fitur asal belum diimplementasikan dan berisi asumsi bisnis.

## Evidence OPS publik
Lihat explore/public-smoke.json, 2026-09-23: base URL menuju /login, HTTP 200;
input placeholder Masukkan Email, Masukkan Password dan tombol Login teramati.
Judul halaman Login | Prahu Hub - TMS dicatat literal; tidak membuktikan identitas/behavior backend.
Tidak ada input credential, klik Login, atau authenticated exploration.

## NEEDS VALIDATION
Redirect setelah login, success signal, authenticated home, session lifecycle,
storageState portability, roles/permissions, menus/modules/routes, authenticated selectors,
concurrency/workers backend, data isolation dan semua business flow/expected results.
Fixture authenticated belum aktif meskipun credential nanti diisi; implementasi harus mengikuti evidence.

## Validation
- npm ci --ignore-scripts: 3 packages terpasang, audit 0 vulnerabilities.
- npm run test:list: sukses, 0 tests/0 files; disengaja, tanpa scenario bisnis.
- npm run smoke:public: sukses HTTP 200, hanya public DOM.
- Node --check config/helpers/public-smoke; bash -n wrapper; Python AST syntax: sukses.
- python3 scripts/validate-framework.py: sukses, synthetic offline converter → JSON → Excel,
  auth blocked vs assertion failed, metadata, akun kosong, batch schema/dedup/missing/environment.
  Synthetic files terisolasi dalam temporary artifacts dan dibersihkan; bukan hasil OPS.
- Node assert env parser: target benar, 0 akun, requireCredentials menolak akun kosong.
- Scan residu: referensi OMS tersisa hanya provenance/larangan migrasi dan audit ini,
  tidak ada runtime hostname/route/akun/selector/skema bisnis OMS.
- Source hash comparison: sukses, repository sumber tidak berubah.

## Batas framework yang dipertahankan
Result runId masih resolusi detik; run berurutan dan hindari overwrite.
Excel formula perlu recalc untuk cached values. Fixture authenticated sengaja belum runnable.
Tidak ada klaim coverage atau verdict bisnis OPS dari validasi framework ini.

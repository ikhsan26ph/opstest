# opstest — OPS automation

Target dari user: https://ops-staging.prahu-hub.com.
Framework berasal dari omstest; knowledge OMS bukan knowledge OPS.

## Evidence dan keamanan
- Bedakan verified fact, runtime observation, user clarification, dan open question. Yang belum terbukti: NEEDS VALIDATION.
- Hasil exploration OPS bertanggal di explore/ dan shared/ menjadi sumber selector/navigation. Catat URL, state, metode observasi, dan batas cakupan.
- Selector hanya dari observed DOM/state; jangan menebak route, menu, role, expected result, atau flow dari aplikasi sumber maupun kemiripan UI.
- Skenario bisnis hanya dari requirement/test case/evidence yang diberikan. UI observation sendiri tidak membuktikan aturan bisnis.
- Failed automation tidak otomatis application bug. Blocked tidak otomatis defect. Bedakan locator, timing, environment, auth, data, precondition, requirement gap, dan confirmed defect.
- Credential hanya config/env.md (gitignored), dari user. Jangan cetak password/token/cookie/storageState dalam log, source, docs, atau report. Review artifact sebelum dibagikan.
- Tanpa credential: hanya public exploration tanpa submit login. Setelah credential tersedia: observasi form, satu percobaan login; bila gagal berhenti untuk diagnosis, tanpa retry otomatis.
- Auth fixture masih fail-closed: NEEDS VALIDATION AFTER AUTHENTICATED EXPLORATION. Jangan bypass guard dengan menganggap context publik sudah authenticated.
- Session/storageState, redirect, roles, dan concurrency belum diketahui. workers=1/retries=0 adalah kebijakan konservatif, bukan limit backend terverifikasi.
- Exploration read-only; selain login yang diotorisasi, jangan submit/simpan/hapus/mengubah setting. Jangan ubah data pengguna lain. Stress/mass data perlu permintaan eksplisit.
- Jangan commit/push tanpa instruksi user. Semua perubahan hanya di opstest.

## Investigasi Blocked (wajib, sejak 2026-09-23)
Status blocked tidak boleh diterima apa adanya. Untuk setiap skenario/kondisi blocked:
1. Identifikasi penyebab aktual dengan evidence (URL, state, pesan UI, response API, data yang tidak ada). Kategori: prasyarat langkah, data uji, precondition state, role/akun, proses modul lain yang harus selesai dulu, setup lain (setting, master, file).
2. Tentukan apakah dapat dilepas dengan langkah/data/role/proses tersebut, hanya berdasarkan spec, test data, perilaku aplikasi, dan evidence — bukan asumsi.
3. Jika dapat dilepas: dokumentasikan kebutuhan (langkah, data, akun, urutan) sebagai precondition/setup di skenario dan jalankan sebagai bagian test flow. Data setup dibuat dengan penanda unik run (mis. prefix `QA-<runId>`), hanya memakai akun dari config/env.md, dan tidak mengubah data milik pihak lain.
4. Jika tidak dapat dilepas (butuh akses/aplikasi di luar jangkauan, credential/role yang tidak tersedia, keputusan requirement, atau aksi yang tidak diotorisasi): tetap blocked dengan alasan spesifik, evidence, dan apa yang dibutuhkan dari user.
5. Catat hasil investigasi di plan/result (kolom blocker, resolusi, evidence). Blocked tetap bukan defect.

## Framework
- Node >=22, npm ci; Playwright config di playwright.config.js. `npm run test:list` discovery tanpa login; nol test bisnis adalah kondisi awal yang disengaja.
- `npm run smoke:public` membuka base URL saja dan mencatat DOM publik, tidak login. Ini observasi teknis, bukan verdict requirement bisnis.
- tests/helpers/env.js membaca tabel config/env.md, fallback template jika file tidak ada. `parseEnv({requireCredentials:true})` menolak akun kosong.
- scenario/README.md adalah kontrak metadata; tests/<modul>.spec.js memakai judul `SCN-xxxx: <judul asli>`. ID/title/category/priority/requirements disalin dari sumber.
- `bash scripts/run-playwright.sh <modul> [args]`: Playwright JSON → scripts/playwright_to_results.py → results/<modul>__<runId>.json → scripts/generate_report.py → reports/*.xlsx.
- `python3 scripts/merge_batches.py <modul> <runId>` untuk batch MCP. Metadata environment harus berasal dari run; tidak ada fallback akun/role. Duplikat ID memakai batch terakhir. Missing scenarios = skipped.
- Status passed/failed/blocked/skipped. Failed menyertakan error dan screenshot jika tersedia; screenshot failure bawaan Playwright dipertahankan. Auth error codes [AUTH_NOT_VALIDATED], [AUTH_FAILURE], [AUTH_BLOCKED] → blocked, bukan bug.
- Excel mempertahankan Summary, Detail, Failed_BugCandidates. Formula perlu recalculation Excel/LibreOffice untuk cached values.
- Jangan jalankan dua run dalam folder yang sama; config reporter default masih last-run.json. Wrapper memakai path reporter unik agar tidak mengonversi hasil lama. RunId result memakai detik; jadwalkan run berurutan, jangan overwrite hasil.
- Handoff: baca shared/decisions.md dan hasil terkait; catat pekerjaan tersisa. Jangan berbagi browser state/credential antar project.

## Agent workflow
Baca docs/workflows/<nama>.md dan docs/roles/<peran>.md yang relevan. Peran dijalankan berurutan dalam agent utama; delegasi tidak diperlukan.
Periksa tool browser yang benar-benar tersedia, jangan mengasumsikan nama tool atau menurunkan pengamanan. Jika unavailable, catat blocked.
Utamakan locator role/label/testid yang telah diobservasi, tunggu state visible/enabled yang relevan. Snapshot boleh untuk exploration/diagnosis; tidak perlu snapshot berulang pada eksekusi yang sudah punya evidence selector.
`task` belum diimplementasikan.

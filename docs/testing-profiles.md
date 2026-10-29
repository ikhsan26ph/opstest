# Profil pengujian (multi-customer)

Satu codebase untuk produk default dan customer. Customer tidak dipelihara lewat branch permanen atau salinan suite.

## Lapisan

| Lapisan | Lokasi | Isi |
|---|---|---|
| Katalog capability | `profiles/catalog.json` | Path capability, deskripsi, flag konfigurasi terkait (`config.all`), sumber evidence |
| Baseline paket | `profiles/packages/<paket>.json` | Ekspektasi lengkap untuk SEMUA capability katalog (`true`/`false`/`null`) |
| Override customer | `profiles/customers/<profil>.json` → `overrides` | Hanya key yang berbeda dari paket, eksplisit dan bersumber |
| Registry | `profiles/registry.json` | Daftar paket, profil, target, dan `defaultTargets` |
| Target eksekusi | `profiles/targets/<target>.json` | Environment, tenant, referensi akun (bukan nilai), role yang diharapkan, scope setting, `lockKey`, profil yang diizinkan |
| Skenario per profil | `scenario/profile-capabilities/<profil>_scenarios.json` | `SCN-xxxx` → `capability` + `requirements` customer |
| Check capability | `tests/capabilities/index.js` | Satu check per capability, dipakai ulang semua profil |

Manifest efektif = baseline paket + override customer (`profiles/resolver.js`). Default bukan parent customer: `default` memakai paket `product-default`, `tci` memakai `starter`.

Leaf ekspektasi: `{ "expected": true|false|null, "source": "...", "confirmation": "observed|requirement|pending|example" }`.
- `null` = belum diketahui. Tidak dianggap `false` atau `true`.
- Capability di `requiredCapabilities` yang ter-resolve `null` → resolver menolak (`MANIFEST_INCOMPLETE`).
- Skenario dengan ekspektasi `null` (opsional) tetap menjalankan check sebagai observasi lalu dilaporkan **skipped**, bukan passed.

Manifest adalah ekspektasi. Resolver dan suite tidak mengubah konfigurasi aplikasi.

## Validasi resolver

Resolver menolak: profil/paket/target tidak terdaftar, key tidak ada di katalog (termasuk typo grup), tipe salah (`"false"` string, boolean polos tanpa `source`), paket yang tidak mendefinisikan semua capability, ekspektasi wajib `null`, nilai credential atau URL non-https di target, profil yang tidak diizinkan pada target. Nilai `false` dipertahankan, merge bertingkat mempertahankan sibling, hasil di-deep-freeze dan independen antar profil.

```bash
npm run validate:profiles      # offline, tanpa akses OPS
```

## Command

```bash
npm run test:list                         # default: 0 test bisnis (suite profil tidak terdaftar)
npm run test:list:profile -- tci          # discovery profil tanpa login
bash scripts/run-profile.sh tci           # target dari registry.defaultTargets
bash scripts/run-profile.sh default ops-staging-admin --grep SCN-0006
```

Tanpa `OPS_PROFILE`, `tests/profile-capabilities.spec.js` tidak mendaftarkan test. Profil tidak dikenal gagal (tidak fallback ke default). `npm test <modul>` untuk modul lama tidak berubah.

## Precondition (fixture `tests/helpers/profile-fixtures.js`)

Urutan per worker, sebelum test:
1. `GET <apiBaseUrl>/system/status` (publik): HTTP 200, `maintenanceMode/expired/paymentOverdue` false, `appEnv` sesuai target.
2. Konfigurasi observasi vs syarat profil (`requiredConfig` diturunkan dari katalog). Contoh TCI: `route-playback`, `route-prediction`, `route-deviation`, `dashboard-operasional` false; `smart-alert && route-deviation` tidak keduanya true. Tidak cocok → `[PRECONDITION_CONFIG_MISMATCH]` (blocked, bukan failed).
3. Credential dari env var `envOverride` (CI) atau baris `config/env.md`; `baseUrl` env.md harus sama dengan target. Login satu kali per run; kegagalan dicatat di `auth-state.json` agar worker berikutnya tidak mengulang.
4. Role dari `GET /api/auth/me` harus sama dengan `expectedRole` target (`[PRECONDITION_ROLE]`).
5. Guard read-only: semua request non-GET diblok kecuali `/api/auth/*`.

Setiap check memastikan kondisi siap sebelum assertion negatif: URL/tab aktif, heading, response API 200, Detail Armada memuat order sampel, layer jalur peta sudah dirender, dan sampel data yang relevan (mis. API memuat `predictedRoute` sebelum memastikan garis prediksi tidak dirender). Tanpa data relevan → `[DATA_UNAVAILABLE]` (blocked). Halaman kosong/error/role salah gagal di tahap siap, tidak pernah passed.

Klasifikasi converter: `[AUTH_*]`, `[PRECONDITION_*]`, `[DATA_UNAVAILABLE]`, `[PROFILE_RUN_CONTEXT]` → blocked. Assertion perilaku gagal → failed (kandidat finding, belum tentu bug).

## Scope setting dan isolasi

Evidence 2026-10-28 (`explore/2026-10-28-tci-devtools-scope.md`): flag fitur dibaca dari `system/status` tanpa sesi dan diubah dev-tools lewat `PATCH /dev-tools/features/{key}` tanpa parameter tenant/akun → **scope environment** untuk OPS staging. Unlock dev-tools memakai token di `sessionStorage` (per sesi browser), tetapi itu hanya akses ke halaman, bukan scope flag.

Konsekuensi:
- Profil dengan ekspektasi flag berbeda tidak boleh berjalan bersamaan pada environment yang sama. Utamakan environment khusus per konfigurasi.
- `scripts/run-profile.sh` → global setup mengambil lock `artifacts/locks/<lockKey>.lock` (host lokal) dan snapshot `config-before.json`; teardown menulis `config-after.json` dan `isolation.json` (`configDrift`, `lockReleased`). Drift = hasil run tidak dapat dipercaya; ulangi setelah konfigurasi stabil.
- Lock lokal tidak mengunci host/CI lain; CI memakai `concurrency.group` per `lockKey`. `workers=1` hanya membatasi worker dalam satu run.
- Suite saat ini tidak mengubah setting, jadi tidak ada restore. Bila kelak ada run yang mengubah setting: snapshot awal, ubah, verifikasi lewat `system/status`, jalankan, restore, verifikasi restore, catat terpisah dari hasil suite.
- Teardown tidak dijamin berjalan bila proses dihentikan paksa (SIGKILL/runner mati).

Recovery lock:
```bash
npm run profile:lock -- status ops-staging
# pastikan tidak ada run aktif (lokal dan CI) pada scope yang sama, lalu:
npm run profile:lock -- release ops-staging
```
Bila konfigurasi pernah diubah oleh run yang terhenti: bandingkan `config-before.json` run tersebut dengan `system/status` sekarang dan pulihkan lewat pemilik dev-tools, lalu verifikasi ulang.

## Artefak dan report

Per run: `artifacts/runs/<profil>/<target>/<runId>/` berisi `run-meta.json` (commit, dirty flag, manifest, paket, target aman), `playwright.json`, `test-results/` (evidence PNG per test), `observed-config-w*.json`, `config-before/after.json`, `auth-state.json` (role saja), `cleanup-w*.json` (logout/blocked non-GET), `isolation.json`, `suite.json` (exit code suite).

Hasil: `results/profile-capabilities__<profil>__<target>__<runId>.json` (field `profileRun`, `capability`, `evidence`); Excel: `reports/profile-capabilities__<profil>__<target>__<runId>.xlsx` dengan baris Summary Profil/Target/Manifest/Paket/Commit/Konfigurasi observasi/Isolasi. `outputDir`, JSON reporter, results, dan Excel dipisah eksplisit; tidak bergantung pada `outputDir` saja.

Identitas akun di results adalah `target:<id>` + role terverifikasi, bukan email. Screenshot evidence menampilkan header aplikasi (nama/email akun) — review sebelum dibagikan.

**Trace Playwright dimatikan untuk run profil**: trace terbukti merekam isian password login dan header Authorization (2026-10-28, trace dihapus). `scripts/scan-run-secrets.js` dijalankan otomatis setelah run dan gagal (exit 3) bila password/JWT ditemukan.

## Locator

Teramati di DOM live 2026-10-28: sidebar `aside a[href=...]`, tab `role=tab` + `aria-selected` (label UI kini **Pengiriman Berjalan / Pengiriman Selesai**, dahulu Tracking Terkini / Riwayat Tracking), heading Detail Armada, peta `.leaflet-container path.leaflet-interactive`, score card teks label, tombol Data Kasus/Armada Terdekat (hanya dari bundle; nonaktif saat ini).

Berasal dari bundle client (komponen nonaktif sehingga belum teramati saat tampil): kontrol playback `button[aria-label=Mundur|Putar|Jeda|Maju|Ulang]`, slider `Garis waktu playback`; warna polyline prediksi `#16A34A`, penyimpangan `#F04438`; subtitle score card `Keluar dari rute yang direncanakan`. **NEEDS LIVE VALIDATION** saat fitur aktif sebelum dipakai untuk assertion positif.

## Profil nonaktif

Profil dapat ditandai `"status": "disabled"` (+ `disabledReason`) di `profiles/customers/<id>.json`. Resolver menolak dengan `[PROFILE_DISABLED]`, sehingga `run-profile.sh`, discovery, dan CI tidak bisa menjalankannya; berkas tetap sebagai arsip. **TCI nonaktif sejak 2026-10-29** (keputusan user: tidak dijalankan lagi). Ini tidak mengubah setting aplikasi OPS. Aktifkan kembali: ubah `status` ke `active` dan tambahkan profil ke pilihan CI. Validasi offline tetap memeriksa profil nonaktif lewat `OPS_ALLOW_DISABLED_PROFILE=1` (hanya dipakai `validate-profiles.js`).

## Status TCI terkini (arsip)

Run `20261028T050256Z-36864`: 15 passed, 2 failed (TCI-FND-01 legenda prediksi/penyimpangan tetap tampil), 1 blocked (TCI003 garis deviasi: tidak ada data `deviationSegment`). Detail: `explore/2026-10-28-tci-devtools-scope.md`.

## Dampak perubahan

- Ubah **paket**: semua profil dengan `package` tersebut terdampak. Jalankan `npm run validate:profiles` (resolusi dan discovery semua profil) dan run live tiap profil pewaris yang punya target.
- Ubah **capability/check**: jalankan setiap profil yang memakai capability itu, baik yang mengharapkan `true` maupun `false`.
- Ubah **katalog**: paket wajib mendefinisikan key baru (`PACKAGE_INCOMPLETE` bila tidak).
- Ubah **target/scope setting**: perbarui `lockKey` dan `concurrency.group` CI bersamaan.

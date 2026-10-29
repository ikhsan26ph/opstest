# TCI — scope dev-tools, gating fitur, dan eksekusi profil (2026-10-28)

OPS staging, akun baris 1 config/env.md (role API `ADMIN`, permissions ALL). Read-only: guard memblok semua non-GET kecuali auth. Evidence: `artifacts/evidence/TCI-AUDIT/` (screenshot, `pages.json`, `tracking.json`, `data-audit.json`, chunk JS client). Harness: `artifacts/harness/tci/`.

## Dev-tools
- `/dev-tools` (unauth) → `/login?next=%2Fdev-tools`. Setelah login Admin: dialog **Verifikasi Admin — Password Dev Tools**. Password dev-tools tidak tersedia → isi halaman **tidak diobservasi** (BLOCKED akses).
- Bundle client: `POST /dev-tools/unlock {password}` → token di `sessionStorage.devToolsToken`, header `X-Dev-Tools-Token`. `GET /dev-tools/features`, `PATCH /dev-tools/features/{key} {enabled}`; juga tracking-simulator, import-drop-point, tracking-retention.
- `GET /api/system/status` dapat dibaca **tanpa sesi** dan memuat `features` {route-playback, route-prediction, route-deviation, dashboard-operasional, smart-alert}; `products [TMS]`, `productSource core`, `appEnv DEV`.
- Kesimpulan (code + API evidence, bukan dokumentasi backend): flag berlaku **per environment**, efektif saat client membaca ulang `system/status` (polling/reload). Unlock dev-tools per sesi browser hanya membuka halaman. Belum diverifikasi: apakah backend menyimpan per tenant di balik satu deployment.

## Nilai flag observasi
Semua `false` pada 2026-10-28 (pukul 10:49–11:26 WIB, stabil sepanjang run). `route-playback` false juga tercatat 2026-10-26; Dashboard Operasional `FEATURE_DISABLED` sejak 2026-10-27; 2026-09-23 Dashboard Operasional dan chip Keluar Jalur masih tampil.

## Gating di client (bundle 2026-10-28)
| Requirement | Komponen | Flag | Perilaku saat flag false |
|---|---|---|---|
| TCI001 | Kontrol playback Riwayat | route-playback | Hanya bar kontrol (Mundur/Putar/Maju/Ulang, slider, kecepatan) tidak dirender; **tab tetap ada** |
| TCI002 | Garis prediksi rute Terkini | route-prediction | `predictedRoute` di-null-kan di client; API tetap mengirim data |
| TCI003 | Segmen penyimpangan Terkini | route-deviation | `deviationSegment` di-null-kan di client |
| TCI004 | Menu Dashboard > Operasional | dashboard-operasional | Item sidebar disembunyikan; route `/dashboard-operasional` dialihkan ke `/akun-saya` |
| TCI005 | Panel Data Kasus + tab Armada Terdekat | smart-alert | Seluruh panel tidak dirender |
| TCI005 | Score card Keluar Jalur | smart-alert && route-deviation | Kartu tidak dirender |

Efek samping `smart-alert=false` di luar requirement: score card/chip **Berpotensi Terlambat** dan route `/monitoring/riwayat` (Riwayat Kasus) ikut disembunyikan. Legenda peta Terkini **"Prediksi rute ke tujuan"** dan **"Jalur di luar prediksi rute"** dirender tanpa syarat flag (tampil live saat flag false).

## Data untuk assertion negatif
44 kombinasi order/nopol aktif, 91 riwayat: 34 aktif memuat `predictedRoute`; 42 riwayat jalur >1 titik; **0** memuat `deviationSegment` (aktif maupun riwayat).

## Eksekusi profil
| Run | Hasil | Catatan |
|---|---|---|
| tci 20261028T041404Z-30089 | 13P / 3F / 1B | 3F = kesiapan peta otomasi (path nol-panjang dianggap hidden); diperbaiki, bukan produk |
| tci 20261028T041840Z-31156 | 15P / 0F / 1B / 1S | B = TCI003 data deviasi tidak ada; S = legenda (ekspektasi belum ditetapkan, teramati tampil) |
| default 20261028T042326Z-32225 | 9P / 0F / 1B / 6S | S = ekspektasi produk default belum dikonfirmasi; B = observasi deviasi tanpa data |
| tci 20261028T042621Z-32917 | 0P / 17B | Uji lock: run ditolak `[PRECONDITION_LOCKED]` sebelum login |

Isolasi: `configDrift=false`, lock dilepas, logout 200, tidak ada non-GET bisnis yang terkirim. Trace run pertama memuat password/token → dihapus; trace dimatikan untuk run profil.

## Klarifikasi user 2026-10-28 dan run lanjutan
1. TCI001: hanya kontrol playback yang hilang; data riwayat perjalanan tetap tampil → tab Riwayat dan data riwayat diharapkan tersedia (SCN-0002, SCN-0014 memetakan TCI001).
2. Legenda "Prediksi rute ke tujuan" (TCI002) dan "Jalur di luar prediksi rute" (TCI003) harus ikut hilang → capability legenda dipisah, ekspektasi TCI `false`.
3. Berpotensi Terlambat tetap ada karena dipakai di Progres Pengiriman; aturan Progres Pengiriman tidak diubah. Di Tracking & Location, tampilan deviation dan prediction disembunyikan. Bundle: status Progres Pengiriman tidak di-gate feature flag. Tampilan Berpotensi Terlambat di Monitoring (ikut tersembunyi oleh smart-alert) belum dinyatakan → tetap pertanyaan terbuka, begitu juga Riwayat Kasus (/monitoring/riwayat).

Run tci 20261028T050256Z-36864: 15P / 2F / 1B. Failed SCN-0004 dan SCN-0018 = kandidat finding **TCI-FND-01**: legenda prediksi dan penyimpangan rute di peta Tracking Terkini tetap tampil saat route-prediction/route-deviation false (sampel ORD0327836588; config observasi semua flag false; panel legenda terbuka). Satu masalah: komponen legenda dirender tanpa syarat flag (bundle client). Priority belum ditetapkan. B = SCN-0005 tanpa data deviationSegment.

## TCI003 — verifikasi manual (user, 2026-10-29)
User akan memeriksa garis Penyimpangan Jalur (Route Deviation) di peta Tracking Terkini secara manual karena staging tidak punya order dengan `deviationSegment`. SCN-0005 tetap **blocked (DATA_UNAVAILABLE)** pada run otomasi; hasil manual belum diterima, jadi belum ada klaim passed/failed untuk garis deviasi. Bagian TCI003 yang sudah terotomasi: legenda "Jalur di luar prediksi rute" (SCN-0018, failed → TCI-FND-01).
Saat melapor, mohon sertakan: ID order + nopol, kondisi data (ada segmen deviasi di API atau tidak), apakah garis merah muncul, dan screenshot. Tanpa data deviasi pada order uji, hasil "tidak tampil" tidak membuktikan apa pun.

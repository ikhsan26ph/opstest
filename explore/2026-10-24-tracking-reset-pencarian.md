# Observasi Reset Pencarian & Auto-select — Tracking & Location — 2026-10-24

Target https://ops-staging.prahu-hub.com/tracking-location, akun 1 config/env.md (header Admin / Administrator). Playwright Chromium 1440×1000, read-only; guard harness memblok semua request non-GET kecuali auth login/refresh/logout. Waktu 09:22–09:31 WIB, run RP20261024. Evidence: artifacts/evidence/RP20261024.

Sumber requirement: teks user 2026-10-24 + desain `/home/icun/Produk/OPS/Tracking & Location - Reset Pencarian.jpeg` (role Shipper/Staff Operasional). Observasi hanya akun Admin; role Shipper NEEDS VALIDATION.

Login: login pertama (proses terpisah) 200, tetapi sesi hilang karena refresh token ter-rotasi oleh run harness yang crash sebelum menyimpan state (refresh 401) — masalah harness, bukan aplikasi. Login kedua 200 via daemon browser persisten; logout UI 200 → /login. Tidak ada mutasi data. Request terblok: cdn-cgi beacon (run pertama), dan 2× `POST /api/system/client-error` yang dipicu oleh simulasi error opsi.

## Data opsi
Satu request per tab: `GET /api/monitoring-tracking/track/orders?scope=active|history` → `[{orderId, nopols:[{nopol,label,assignmentId}]}]`. Saring dan auto-select berjalan di client (tidak ada request saat memilih).
Tab aktif: 12 order, 10 opsi nopol. Tab riwayat: 48 order, 21 opsi nopol. Sampel: 1:1 K12345K↔ORD1250969862; nopol multi-order L9180EL (3), L1090EL (2); order multi-nopol ORD1599718978 (L2012EL, L9180EL). Riwayat: L9001BB↔ORD0065468154, L1111LO (5 order), ORD0217664995 (3 nopol).

## Hasil per pertanyaan terbuka
| # | Pertanyaan | Observasi runtime | Evidence |
|---|---|---|---|
| 1 | Nama tab | Staging masih "Tracking Terkini" / "Riwayat Tracking"; heading area hasil tab riwayat "Riwayat Tracking Armada". Desain: Pengiriman Berjalan/Selesai. Perbedaan → keputusan requirement. | 01-initial |
| 2 | Reset saat kosong | Tombol "Reset Pencarian" selalu tampil & enabled, termasuk saat kosong; klik saat kosong tidak mengubah apa pun dan tanpa request. | 01-initial |
| 3 | Tampilan sebelum pencarian | Area Tracking Armada kosong dengan teks "Pilih Nopol/No. Kontainer dan ID Order, lalu klik Cari untuk melihat tracking armada."; Bagikan disabled. Reset mengembalikan teks ini (juga setelah pesan validasi). | 09-after-reset, 10 |
| 4 | Ganti pilihan | Saat kedua field terisi, opsi tiap field disaring oleh nilai field lain → kombinasi tak cocok tidak bisa dipilih. Mengganti ke nilai lain yang cocok tetap mempertahankan field lain. Pasangan 1:1 (K12345K/ORD1250969862) hanya bisa diganti lewat Reset. | 07-change |
| 5 | Timpa field yang sudah terisi | Tidak menimpa: ORD1599718978 lalu L9180EL → order tetap; L9180EL lalu ORD1599718978 → nopol tetap. | 07-change |
| 6 | Saring berantai | Ya. L2012EL → auto ORD1599718978 → opsi nopol menjadi [L2012EL, L9180EL]. Bila hanya satu field terisi, daftar field itu sendiri tetap penuh. | 06-2 |
| 7 | 0 opsi | Tidak dapat terjadi via saring (relasi dari data yang sama). Pencarian teks tanpa hasil → "Tidak ada pilihan". | 11-no-match |
| 8 | Ganti pilihan setelah hasil tampil, tanpa Cari | Hasil lama tetap tampil: field L2012EL tetapi Detail Armada/History masih L9180EL, Bagikan aktif. Mismatch — perlu keputusan requirement (kandidat issue UX, bukan defect terkonfirmasi). | 09-after-change-no-cari |
| 9 | Pindah tab | Pilihan & hasil dikosongkan; opsi tab tujuan di-fetch ulang (scope=history/active). | 10-switch-to-riwayat, 10-back-to-terkini |
| 10 | Tombol × per field | Tidak ada; klik ulang opsi terpilih tidak men-deselect. Satu-satunya cara mengosongkan: Reset/pindah tab. | 07-change |
| 11 | Validasi Cari | Cari selalu enabled. Field kosong → tanpa request, pesan di area peta: kosong keduanya/nopol saja → "Pilih ID Order terlebih dahulu."; order saja → "Pilih Nopol/No. Kontainer terlebih dahulu.". Tidak ada error per field. | 08-* |
| 12 | Opsi lambat/gagal (simulasi client) | Loading: teks "Memuat pilihan tracking...", dropdown tetap bisa dibuka & menampilkan "Tidak ada pilihan". Error 500: teks merah "Gagal memuat pilihan tracking. Muat ulang halaman untuk mencoba lagi.", tanpa toast; Reset tidak memuat ulang opsi. | 11-options-loading, 12-options-500-error-text |
| 13 | Reset saat Cari loading | Field & area hasil langsung kembali kosong; respons yang datang belakangan (delay 6 s) tidak ditampilkan. | 11-cari-loading, 11-reset-during-loading |
| 14 | Format ID Order | Staging konsisten: dropdown dan Detail Armada sama-sama `ORD1599718978`. Inkonsistensi `LKL-FTL…` vs `FTL…` hanya di desain. | 09-result |

Requirement inti pada sampel: auto-select dua arah 1:1 terpenuhi, banyak opsi tidak di-auto-select, auto-select tidak memicu Cari (`GET /api/monitoring-tracking/track?orderCode=…&nopol=…` hanya saat Cari), Reset mengosongkan field/opsi/hasil dan tetap di tab aktif (kedua tab).

## Lanjutan 09:40–09:43 WIB (run RP20261024b, evidence artifacts/evidence/RP20261024b)
Login 200, logout 200. Tab masih "Tracking Terkini"/"Riwayat Tracking" (klarifikasi user: harus Pengiriman Berjalan/Pengiriman Selesai → belum sesuai di staging).
- Bagikan pada kondisi mismatch (field L2012EL, hasil L9180EL): `GET /api/monitoring-tracking/track/share?orderCode=ORD1599718978&nopol=L9180EL` (tanpa mutasi). Dialog "Bagikan Tracking Pengiriman": ID Order ORD1599718978, Nopol **L9180EL**, Nomor DO **DO-1B**, link tracking tms-staging. Yang dibagikan = hasil lama, bukan isi field. (b01-*, b02-share-dialog-stale)
- Link share dibuka read-only: halaman publik TMS "Lacak Pengiriman", resi terisi; meminta verifikasi 4 digit nomor penerima. POST `/api/v1/public/tracking/search` terblok guard; isi tracking publik tidak diverifikasi. (b02-share-page)
- Cari setelah ganti pilihan: `GET /track?orderCode=ORD1599718978&nopol=L2012EL` → Detail Armada No. Polisi L2012EL, sopir Sukri, History L 2012 EL. Bagikan berikutnya: nopol L2012EL, DO-1C. (b02-after-cari-changed, b02-share-after-cari)
Token link share di-redact dari evidence.

Catatan lain: label opsi nopol yang punya beberapa kontainer hanya menampilkan satu label (mis. aktif "L1090EL", riwayat "L1090EL / LABB345678") — NEEDS VALIDATION apakah sesuai harapan.
Simulasi 12/13 memakai intersepsi request di browser, bukan kondisi server nyata.

## Lanjutan 2026-10-26 — buka link Bagikan (run RP20261026, evidence artifacts/evidence/RP20261026)
Login 200, logout 200. Guard: hanya POST `apitms-staging…/api/v1/public/tracking/search` yang diizinkan (9×, pencarian publik). WhatsApp/Email tidak diklik. Tab staging masih "Tracking Terkini"/"Riwayat Tracking".
- Link dibuat untuk ORD1599718978: A = L9180EL (DO-1B); S = field L2012EL tanpa Cari → identik dengan A; B = setelah Cari L2012EL (DO-1C), berbeda. (t02-*)
- Detail Order: penerima PT. Haier Sales Indonesia, PIC Ahmad Priyanto, WA berakhiran 1792; armada L1090EL/DO-1A, L9180EL/DO-1B, L2012EL/DO-1C. (t03-order-detail)
- Membuka link → redirect `tms-staging.prahu-hub.com/tracking`, resi `ORD1599718978.<token>` jadi chip, pencarian otomatis `POST /api/v1/public/tracking/search {"resi":[…]}` → 200 `{"status":"success","data":[]}` → "Hasil Pencarian: Resi tidak ditemukan". Sama untuk A, B (bersih), "ORD1599718978" saja, dan "DO-1B". Tahap verifikasi 4 digit tidak pernah tampil. (t05, t06-*, t07-B-clean)
- Tiap pencarian mengirim 2 request identik. Chip resi lama ikut tersisa saat membuka link berikutnya di tab yang sama (localStorage hanya "theme"; mekanisme tidak diverifikasi).
- Tanpa resi kontrol yang diketahui valid, belum dapat dibedakan apakah halaman publik tidak mengenal order OPS (beda sistem/environment) atau token salah. NEEDS VALIDATION oleh dev.

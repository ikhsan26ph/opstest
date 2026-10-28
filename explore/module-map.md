# OPS module map

Status terbaru Codex 2026-09-23 03:26Z: ketiga akun login/logout UI sukses. Smoke live mencakup Admin 24, Vendor 6, akun 3 sebanyak 23 route, ditambah 3 state tab akun 3. Lima shared/selector-map-*.md kini berisi count live. Lihat [laporan terbaru](2026-09-23-auth-diagnosis-and-smoke.md) dan [smoke](2026-09-23-live-smoke.md). Pemetaan historis di bawah tetap dipertahankan sebagai provenance.

Pemetaan awal Claude 2026-09-23 mencakup akun 1 (Admin Utama) dan akun 2 (Vendor); akun 3 saat itu belum berhasil login. Status terbaru akun 3 tercantum di bagian bawah. Business rule/expected result tetap NEEDS VALIDATION; tabel historis ini memuat route/menu teramati, bukan verdict fungsi bisnis.

## Publik
| Route | Evidence | Catatan |
|---|---|---|
| / → /login (unauth) | redirect terobservasi | Form: placeholder `Masukkan Email`, `Masukkan Password`, button `Login`, link `Lupa Password?` → `/lupa-password` (belum dibuka) |

## Admin (akun 1, header "Admin / Administrator") — 24 route terverifikasi
| Menu (sidebar) | Route | Title aktual |
|---|---|---|
| Dashboard > Monitoring (landing) | /monitoring | Monitoring |
| Dashboard > Tracking & Location | /tracking-location | Tracking & Location (tabs: Tracking Terkini, Riwayat Tracking) |
| Dashboard > Progres Pengiriman | /progres-pengiriman | Progres Pengiriman |
| Dashboard > Operasional | /dashboard-operasional | Dashboard Operasional |
| Order | /order | Daftar Order |
| Penugasan Tracking | /penugasan-tracking | Penugasan Tracking |
| Master Wilayah > Provinsi/Kota/Kecamatan/Kelurahan | /master/provinsi, /master/kota, /master/kecamatan, /master/kelurahan | Master Provinsi/Kota/Kecamatan/Kelurahan |
| Master Operasional > Drop Point | /master/customer | Master Drop Point |
| Master Operasional > Waktu Perjalanan | /master/waktu-perjalanan | Master Waktu Perjalanan |
| Master Operasional > Pelabuhan / Pelayaran | /master/pelabuhan, /master/pelayaran | Master Pelabuhan / Pelayaran |
| Master Operasional > Unit | /master/unit | Master Unit (tabs Armada, Jenis Armada, Jenis Kontainer) |
| Master Operasional > Sopir / CS | /master/sopir, /master/cs | Master Sopir / Master Customer Service |
| Manajemen Vendor | /manajemen-vendor | Manajemen Vendor |
| Pengaturan Akun | /pengaturan-akun | Pengaturan Akun (tabs Sub User, Hak Akses) |
| Akun Saya | /akun-saya | Akun Saya |
| Pengaturan Sistem | /setting/sistem | Pengaturan Sistem |
| Pusat Notifikasi > Pengaturan / Preferensi | /setting/general, /setting/preferensi-notifikasi | Pengaturan Notifikasi / Preferensi Notifikasi |
| (dari Monitoring) Riwayat | /monitoring/riwayat | Riwayat Kasus |
Detail selector/API per route: explore/2026-09-23-admin-route-map.md.

## Vendor (akun 2, header "PT. Ikatan Kuat / Vendor") — 6 route terverifikasi
| Menu | Route |
|---|---|
| Order (landing) | /vendor-portal/order |
| Penugasan Tracking | /penugasan-tracking |
| Master Operasional > Master Armada | /vendor-portal/master/armada |
| Master Operasional > Master Sopir | /vendor-portal/master/sopir |
| Akun Saya | /vendor-portal/akun-saya |
| Pusat Notifikasi | /vendor-portal/setting/preferensi-notifikasi |
Detail historis: explore/2026-09-23-vendor-route-map.md. Bug candidate Logout Vendor tidak direproduksi pada 03:18Z: klik dari preferensi notifikasi mengirim POST logout 200 dan redirect /login. Masalah intermiten belum dikesampingkan.

## Sub user (akun 3)
Login UI berhasil 03:19Z, login/me 200, landing /monitoring. Label konfigurasi Sub user; header aktual `Jaya Administrator` (perlu klarifikasi role yang diharapkan). [Peta route akun 3](2026-09-23-subuser-route-map.md): 23 route sidebar diakses read-only, mencakup Monitoring, Tracking & Location, Progres Pengiriman, Operasional, Order, Penugasan Tracking, 11 Master, Manajemen Vendor, Pengaturan Akun, Akun Saya, Pengaturan Sistem, Pengaturan Notifikasi, Preferensi Notifikasi. Link brand / mengarah ke landing; /monitoring/riwayat belum dibuka untuk akun 3. Tambahan tab Jenis Armada, Jenis Kontainer, Riwayat Tracking tervalidasi pada run terpisah. Logout sukses pada kedua sesi akun 3. Ini pemeriksaan browser otomatis, bukan verifikasi manual manusia.

## Catatan teknis
- Tidak ada `data-testid` di semua halaman yang dipetakan. Locator andalan: role/name, placeholder, title, heading.
- Backend: apiops-staging.prahu-hub.com. Frontend Next.js.

## Tambah Penugasan — live 2026-10-26

Run PS20261026: link Penugasan Tracking → `/penugasan-tracking`; tombol Tambah Penugasan → `/penugasan-tracking/tambah`. Akun1, Admin/Administrator. FTL cards, FCL jadwal Direct/Connecting dan gate kontainer, partial/final pop-up, read-only persistence diperiksa. [Exploration](2026-10-26-penugasan-parsial.md), [selector map khusus](../shared/selector-map-penugasan-parsial.md), [laporan](../reports/penugasan-parsial_test-report-20261026.md). Evidence baru ini tidak mengganti verdict historis September untuk requirement lain.

## Status tahap daftar Penugasan — live 2026-10-26

Run ST20261026-030049: daftar `/penugasan-tracking`; action Isi Data Tracking menuju `/penugasan-tracking/<assignmentId>/isi-tracking`. Admin/Administrator; tahap aktual dan counting multi lokasi teruji dari event UI tersimpan, termasuk lintas kota dan link Kembali tanpa reload. [Exploration](2026-10-26-status-tahap-penugasan.md), [selector map](../shared/selector-map-status-tahap-penugasan.md), [laporan](../reports/status-tahap-penugasan_test-report-20261026.md). Poin4 masih menunggu klarifikasi istilah; bukan defect aplikasi.

2026-10-26, LT20261026-035459: Detail Penugasan dari Aksi > Detail mempunyai Lihat Tracking. Sopir: link /tracking-location?orderCode=...&nopol=... untuk aktif, tambahan tab=riwayat untuk selesai. Tab, dua filter, request otomatis, Detail Armada diverifikasi pada14sampel dan4regresi;18P. Pengurus: tombol disabled pada aktif/selesai, scope belum dikonfirmasi (SCN-0019 blocked requirementgap). Detail explore/2026-10-26-lihat-tracking.md, selectors shared/selector-map-lihat-tracking.md. Read-only, logout UI /login, browserclosed.

2026-10-26 — pembaruan setelah klarifikasi user LT20261026-035459: “oke untuk yang sekarang sudah sesuai”. User menerima perilaku Lihat Tracking hanya bagi penugasan ke Sopir; Pengurus disabled sesuai. SCN-0019 dinilai passed berdasarkan bukti existing dua state Pengurus dan pembanding Sopir, tanpa rerun atau mutasi. Rekap aktif19passed/0failed/0blocked/0skipped menggantikan18P/1B pada catatan historis. Teks tooltip terdeteksi pada elemen; kemunculan visual saat hover belum diuji, tidak diklaim terverifikasi. Catatan label kontainer tambahan tetap disimpan tanpa dijadikan defect requirement nopol/ID order. JSON, skenario, coverage, laporan dan Excel diperbarui.

2026-10-26 EP20261026-062548: Edit Penugasan allowedBelumBerangkat/DalamPerjalanan; FTL3milestone danFCLdengandateworkaroundpersisted. Save→Konfirmasi→PUT/api/penugasan/<assignmentId>200. FCLprefilltanggalmundur membloksaveactual (EP-FND-01). LCL/LTLentryreadonlydua statuspadaAdmin/Vendorpengelola. 33checks29P/1F/3B;2DHdevice/accountblocked+1scopeFCLfieldpending. Evidence/report explore/2026-10-26-edit-penugasan.md, shared/selector-map-edit-penugasan.md, reports/edit-penugasan_test-report-20261026.md. Keduasessionlogout200/browserclosed.

2026-10-26, TS20261026: Tracking & Location — opsi `GET /api/monitoring-tracking/track/orders?scope=active|history` (32/48 order), share `GET …/track/share?orderCode&nopol` (trackingUrl, nomorDo[], nomorKontainer, serviceType, companyName). Public Tracking OPS terobservasi di https://trackingops-staging.prahu-hub.com (pencarian Nomor DO, `POST apiops-staging/api/v1/public/tracking/search {nomorDo:[]}`, detail `/tracking/<ID>.<token>` → `POST …/public/tracking/detail {trackingRef}`). Order Pengurus FTL dikecualikan T&L (pesan app). `GET /api/system/status` features: route-playback/prediction/deviation false. Laporan reports/tracking-location-bagikan_test-report-20261026.md.

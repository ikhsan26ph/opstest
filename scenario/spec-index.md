# Indeks Spesifikasi per Modul — sumber `Spek Glogal OPS.xlsx`

Dibuat 2026-09-23 dari `scenario/Spek Glogal OPS.xlsx`. File per modul (`<modul>/<modul>_spec.md`) berisi teks yang **disalin apa adanya** dari kolom G sheet `Spek TMS-S`; pemecahan hanya per ID fitur (kolom A) dan per baris rule (kolom D/F/G). Verifikasi: seluruh 162 blok teks kolom G ditemukan identik di file hasil.

Status seluruh isi: **requirement tertulis dari user**, belum divalidasi terhadap OPS staging. Breakdown REQ/VAL/AC per modul ada di `<modul>/<modul>_analysis.md` (lihat §6). Gherkin dan `_scenarios.json` belum dibuat.

## 1. Isi workbook

| Sheet | Isi | Dipakai? |
|---|---|---|
| `Spek TMS-S` (A1:I438, 163 baris berisi) | Spesifikasi fitur TMS-S 1.0.0, 20 ID (TMS.S003–TMS.S025) | Ya — satu-satunya sumber spesifikasi |
| `Progress BUG` (9.089 baris berisi) | Tracker bug 2021-an (project PB/RO/PH, kolom Status QC dsb.) | Tidak — bukan spesifikasi |
| `MASTER` | Daftar value dropdown (status, project, versi, module, PIC) | Tidak — bukan spesifikasi |
| `rekap$` | Formula Google Sheets (`__xludf.dummyfunction`), hasil `#VALUE!` | Tidak |

Struktur kolom `Spek TMS-S`: A=ID, B=Cakupan fitur, C=PIC, D=No, E=Jenis Fitur/No Desain, F=Tipe (Pendahuluan/Rule), G=Isi rule, H=Spesifikasi Selesai, I=Versi. (Header B, F, G sama-sama bertuliskan "Detail Fitur".)

## 2. Daftar modul

| ID | Modul (kolom B) | Folder | Blok | Baris | PIC | Spek selesai | Menu OPS yang teramati* |
|---|---|---|---|---|---|---|---|
| TMS.S003 | Manajemen Vendor | [manajemen-vendor](manajemen-vendor/manajemen-vendor_spec.md) | 9 | 2–10 | EL | 2026-07-01 | /manajemen-vendor |
| TMS.S004 | Registrasi Vendor | [registrasi-vendor](registrasi-vendor/registrasi-vendor_spec.md) | 6 | 12–17 | EL | 2026-07-01 | — (link undangan email; belum teramati) |
| TMS.S006 | Master Drop Point | [master-drop-point](master-drop-point/master-drop-point_spec.md) | 6 | 19–24 | BB | 2026-07-02 (hanya baris 19) | /master/customer |
| TMS.S008 | Master Waktu Perjalanan | [master-waktu-perjalanan](master-waktu-perjalanan/master-waktu-perjalanan_spec.md) | 7 | 26–32 | BB | 2026-07-03 (hanya baris 26) | /master/waktu-perjalanan |
| TMS.S009 | Master Unit (Armada) | [master-unit-armada](master-unit-armada/master-unit-armada_spec.md) | 5 | 34–38 | EL | 2026-07-06 | /master/unit; vendor /vendor-portal/master/armada |
| TMS.S010 | Master Sopir | [master-sopir](master-sopir/master-sopir_spec.md) | 5 | 40–44 | EL | 2026-07-06 | /master/sopir; vendor /vendor-portal/master/sopir |
| TMS.S011 | Order FTL | [order-ftl](order-ftl/order-ftl_spec.md) | 11 | 46–56 | EL | 2026-07-02 | /order; vendor /vendor-portal/order |
| TMS.S012 | Order FCL | [order-fcl](order-fcl/order-fcl_spec.md) | 11 | 58–68 | EL | 2026-07-02 | /order |
| TMS.S013 | Order LTL & LCL | [order-ltl-lcl](order-ltl-lcl/order-ltl-lcl_spec.md) | 10 | 70–79 | EL | 2026-07-03 | /order |
| TMS.S014 | Improve Dashboard Operasional | [dashboard-operasional](dashboard-operasional/dashboard-operasional_spec.md) | 9 | 81–89 | BB | (kosong) | /dashboard-operasional |
| TMS.S015 | Penugasan Tracking | [penugasan-tracking](penugasan-tracking/penugasan-tracking_spec.md) | 11 | 91–101 | EL | 2026-07-09 | /penugasan-tracking |
| TMS.S016 | Penyesuaian APK Tracking FCL LCL (Driver Hub) | [driver-hub-tracking-fcl-lcl](driver-hub-tracking-fcl-lcl/driver-hub-tracking-fcl-lcl_spec.md) | 5 | 103–107 | EL | 2026-07-10 | — (aplikasi driver, bukan web) |
| TMS.S018 | Dashboard Monitoring & Tracking Location | [dashboard-monitoring-tracking](dashboard-monitoring-tracking/dashboard-monitoring-tracking_spec.md) | 12 | 109–120 | EL | 2026-07-13 | /monitoring, /monitoring/riwayat, /progres-pengiriman, /tracking-location |
| TMS.S019 | Batch Order | [batch-order](batch-order/batch-order_spec.md) | 4 | 122–125 | EL | 2026-07-13 | /order (tombol Batch Order; belum teramati) |
| TMS.S020 | Pengaturan Sistem | [pengaturan-sistem](pengaturan-sistem/pengaturan-sistem_spec.md) | 4 | 127–130 | EL | 2026-07-15 | /setting/sistem |
| TMS.S021 | Pengaturan Akun (Sub User & Hak Akses) | [pengaturan-akun](pengaturan-akun/pengaturan-akun_spec.md) | 15 | 132–146 | EL | 2026-07-15 | /pengaturan-akun |
| TMS.S022 | Pusat Notifikasi | [pusat-notifikasi](pusat-notifikasi/pusat-notifikasi_spec.md) | 5 | 148–152 | EL | 2026-07-15, 2026-07-17 | /setting/general, /setting/preferensi-notifikasi; vendor /vendor-portal/setting/preferensi-notifikasi |
| TMS.S023 | Akun Saya | [akun-saya](akun-saya/akun-saya_spec.md) | 6 | 154–159 | EL | 2026-07-17 | /akun-saya; vendor /vendor-portal/akun-saya |
| TMS.S024 | Master Customer Service | [master-customer-service](master-customer-service/master-customer-service_spec.md) | 9 | 161–169 | EL | 2026-07-28 | /master/cs |
| TMS.S025 | Pembatasan Pajak dan KIR Armada | [pembatasan-pajak-kir-armada](pembatasan-pajak-kir-armada/pembatasan-pajak-kir-armada_spec.md) | 12 | 171–182 | EL | 2026-07-31 | lintas modul (lihat §3) |

\* Kolom terakhir dicocokkan hanya berdasarkan **kesamaan nama menu** dengan `explore/module-map.md` (observasi 2026-09-23). Ini bukan bukti bahwa perilaku aplikasi sesuai spek — NEEDS VALIDATION.

ID yang tidak ada di sumber: TMS.S001, S002, S005, S007, S017 (tidak diasumsikan isinya). Sheet berlabel "TMS-S", sedangkan nama file "OPS"; kesetaraan TMS-S = OPS belum dinyatakan eksplisit di file.

## 3. Dependensi lintas modul (hanya yang disebut tertulis)

Rule tetap disimpan di ID sumbernya; tabel ini menunjukkan modul lain yang ikut terdampak.

| Rule sumber | Modul terdampak | Isi singkat |
|---|---|---|
| S003-R05/R06/R07 (Pengelola Vendor/Shipper) | Master Unit (S009-R02), Master Sopir (S010-R02), Penugasan Tracking (S015-R02), Master CS (S024-R03/R08) | Tab Armada/menu Sopir & hak penugasan shipper bergantung pada adanya vendor dengan Pengelola = Shipper |
| S003-R05, S004-R02 | Registrasi Vendor ↔ Manajemen Vendor | Undangan Registrasi Mandiri, resend, status Menunggu → Aktif |
| S020-R03 poin 1 | Manajemen Vendor / Registrasi Vendor | Durasi kedaluwarsa undangan (default 2 Jam) |
| S020-R03 poin 2–4 | Dashboard Monitoring (S018-R04/R07/R09) | Radius armada terdekat (5 km), batas Tidak Update (30 menit), koridor keluar jalur (3 km) |
| S006-R06 poin 1 | Order S011/S012/S013 (Step 1) | Drop point aktif jadi pilihan saat membuat order |
| S008-R02 poin 3/6 | Order S011/S013 Step 3, Batch Order S019-R04 poin 6, Dashboard Operasional S014-R02, Monitoring | Waktu perjalanan dari master / tersimpan ke master dari order |
| S011–S013 Step 1 (Metode Pengiriman FCL/LCL) | Penugasan Tracking S015-R04/R06 | Metode Pengiriman memengaruhi tampilan/aksi Tugaskan Sopir Bongkar |
| S011–S013 Status Order | Penugasan Tracking | Status Ditugaskan / Proses Pengiriman / Selesai mengikuti status penugasan |
| S015-R05 poin 8/10 | Driver Hub S016 | Mode "Tugaskan ke Sopir" tampil di Driver Hub; FCL/LCL dipisah muat/bongkar |
| S021-R08/R09 | Order, Penugasan Tracking, Dashboard (Monitoring, Progres Pengiriman, Tracking & Location, Operasional), Master, Manajemen Vendor | Level akses 3-level & Cakupan Data |
| S021-R10, S022-R02/R03 | Pusat Notifikasi ↔ Pengaturan Akun | Daftar notifikasi; Kapal Berlayar/Sandar kondisional pada Jenis Pengiriman FCL/LCL |
| S024-R08/R09 | Manajemen Vendor (form tambah/edit & list) | Field CS pada form vendor, kolom & filter CS pada list vendor |
| S025-R03 | Pengaturan Sistem | Section baru "Pembatasan Kelayakan Armada" |
| S025-R06 | Master Armada sisi vendor (S009-R03/R04) | Akhir Berlaku KIR/Pajak menjadi wajib sesuai mode |
| S025-R05/R07/R08 | Penugasan Tracking (S015-R05) | Badge status dokumen, pop up, disable "Isi Data Manual" |
| S025-R09/R10/R11 | Pusat Notifikasi (S022) | Reminder email/push, tab "KIR Armada" |
| S016-R05 poin 3 | Penugasan Tracking S015-R09 | "rule sama dengan Isi Kendala FTL/LTL" |

## 4. Inkonsistensi & pertanyaan terbuka di sumber (perlu klarifikasi, tidak diputuskan)

**Manajemen Vendor / Registrasi (S003, S004, S020)**
1. S003-R05: hanya 3 kombinasi Metode × Pengelola dijelaskan; kombinasi *Registrasi Mandiri + Pengelola Shipper* tidak disebut (boleh/tidak?).
2. S003-R07 poin 3: Aktif ↔ Tidak Aktif "melalui action pada tabel/detail vendor", tetapi daftar action S003-R04 hanya Detail, Edit, Kirim Undangan.
3. S003-R06 poin 1: data dapat diubah "setelah vendor berstatus aktif", sementara S003-R04 memberi aksi Edit pada status Menunggu.
4. S004-R06 poin 4: label status "Menunggu Registrasi / Terdaftar" berbeda dengan status S003 (Menunggu/Aktif/Tidak Aktif).
5. S004-R05 poin 10: format & ukuran Dokumen Tambahan tertulis "perlu dikonfirmasi" (contoh .pdf/.jpg/.jpeg/.png, 5MB); S023-R04 poin 7 menyebut 4MB, .pdf/.jpg.

**Master (S006, S008, S009, S010, S024)**
6. S006 & S008: kolom Spesifikasi Selesai/Versi kosong untuk seluruh baris rule (hanya baris pendahuluan terisi); S014 kosong seluruhnya.
7. S009-R03 sisi Vendor poin 7 "wajib mengisi seluruh field" bertentangan dengan poin 1 yang menandai Akhir Berlaku Pajak, Mulai/Akhir Berlaku KIR, Foto KIR "tidak wajib" (sama pola di S010-R03 sisi Vendor: Kode Pos tidak wajib).
8. S010-R01 (Akses Vendor) menyebut diksi "Master Armada" untuk Master Sopir — kemungkinan salin dari S009; S010-R05 poin 5 menyebut "List armada" di halaman Kelola Sopir.
9. S009-R01/S010-R01 "pengelola ada yang dihandle oleh admin" vs S009-R02/S010-R02 "Pengelola = Shipper" — diasumsikan sama? perlu konfirmasi.
10. S009/S010 sisi Vendor: form "menduplikasi TMS LKL" — detail di luar file ini.
11. S024-R04 poin 10: "No. WhatsApp CS tidak boleh duplikat (satu nomor dapat dipakai beberapa label CS)" saling bertentangan.
12. S024-R07: template "Template Import Data Master TMS-S.xlsx" tidak ada di workbook. S021-R08 poin 8 (Master Operasional di Hak Akses) tidak mencantumkan Master Customer Service.

**Order (S011, S012, S013, S019)**
13. S011-R02 memakai "No Desain: 080 - 083" (sama dengan Registrasi Vendor S004); S013-R02 tertulis "0770 - 079".
14. S012-R11 berjudul "Aksi pada Daftar Order FTL" padahal di modul FCL.
15. S013-R03 poin 4 "Pengisian order FCL", S013-R07 "Review Order FCL", S013-R06 poin 2 "Waktu perjalanan FCL" — di modul LTL & LCL.
16. S013-R09: tidak menyebut field yang tetap dapat diubah (berbeda dengan S011/S012 poin 4); penomoran lompat ke 5.
17. S011–S013 Step 3 "Tanggal Permintaan Muat" & "Waktu Perjalanan": S018-R10 menyebut SLA "input user saat order dibuat", padahal FCL/LCL tidak punya input waktu perjalanan.
18. S019-R04 poin 6 terpotong: "…tersimpan di mas". S019 menyebut template "Template Batch Order TMS Shipper.xlsx" yang tidak ada di workbook.
19. S019-R04: "No DO harus berupa angka", sedangkan form order (S011-R06 dst.) mengizinkan beberapa No DO dipisah koma; kolom "Harga Barang" vs field "Harga" di form.
20. S019-R01 kolom E "Desain duplikat Saat ini" — tidak ada nomor desain.

**Penugasan Tracking & Driver Hub (S015, S016)**
21. S015-R05 bagian FCL&LCL poin 2 terpotong: `Field "Data Kapal Connecting" (muncul saat pilih Connecting, dapat lebih dari 1 baris` (tanpa kelanjutan).
22. S015-R08 poin 6 (FCL/LCL): catatan "[LTL tidak bisa pilih alamat]" berada di konteks FCL/LCL; "Berangkat Bongkar … Kondisi: Multipickup" (bukan Multidrop?). Penomoran poin 7 ganda.
23. S015-R09 poin 1 "Input keterangan" tanpa status wajib; S016-R05 poin 3 menyatakan keterangan wajib "rule sama dengan Isi Kendala FTL/LTL".
24. Label step akhir: S015-R03 "Pengiriman Selesai" vs S018-R05 legenda "Selesai Bongkar".
25. S016-R04 poin 5 merujuk "poin 3-5" dengan penomoran sumber yang tidak urut. S016 adalah aplikasi Driver Hub (mobile) — tidak ada route web yang teramati untuk ini.

**Dashboard (S014, S018)**
26. S014-R05 poin 2: "Line chart" tetapi "Saat hover pada bar"; "seperti di desain" (desain tidak ada di file).
27. S014-R06 poin 3: tabel "5 Vendor Paling Produktif" berkolom Nomor Polisi & Jenis Armada (bukan nama vendor).
28. S014-R09 menduplikasi teks konversi waktu S008-R07.
29. S018-R03 poin 4 & S018-R04 poin 2 merujuk "spesifikasi sebelumnya" (auto-update, threshold GPS offline, Total Armada, Tidak Update, Melewati SLA, Kendala) yang tidak ada di file.
30. Istilah "Potensi Terlambat" (S018-R04/R05) vs "Berisiko Terlambat" (S018-R06) vs "Berisiko melewati SLA" (S018-R10) — sama atau berbeda?
31. S018-R10 poin 6: "ambang minimal proyeksi keterlambatan" tanpa nilai; S018-R09 poin 5/7: ambang persisten & nilai (n) "dapat diatur melalui Pengaturan Sistem" tetapi field-nya tidak ada di S020-R03.

**Pengaturan Akun / Notifikasi / Akun Saya (S021, S022, S023)**
32. S021-R08 poin 9 merujuk "Bab 8", S021-R13 poin 3 merujuk "Bab 1" — struktur dokumen lain di luar file. S021-R14 penomoran rusak ("Total 2. 2. Akses").
33. S022-R02: "Duplikat dari fitur TMS LKL" — detail di luar file. S022-R04 memakai "Order Masuk" sedangkan list vendor "Order Baru".
34. S023-R02 poin 3: desain hanya untuk sisi Vendor; S023-R03 layout shipper "mengacu TMS LKL". S023-R04 typo "ode Pos".

**Pembatasan Pajak & KIR (S025)**
35. S025-R03 poin 3 "Armada Dibatasi => tidak dapat dipilih saat penugasan" vs S025-R07 poin 4 "Armada Dibatasi => … seluruh armada tetap dapat dipilih. Setelah armada dipilih, sistem menampilkan alert".
36. S025-R02 poin 3: berlaku untuk armada "yang pengelolanya vendor" — perlakuan armada dari vendor Pengelola = Shipper (S009 sisi shipper tanpa field KIR/Pajak) tidak dijelaskan.
37. S025-R08 & S025-R12: copy pop up mengacu "Katalog Pop Up Kelayakan Armada" (link claude.ai artifact) — tidak ada di workbook. S025-R10 mengacu "desain nomor 194".

## 5. Langkah berikutnya (belum dikerjakan)
- Klarifikasi poin §4 ke pemilik spek (PIC EL/BB) sebelum menurunkan REQ/AC.
- Per modul: buat `<modul>_analysis.md` (REQ/VAL/AC) dari `_spec.md`, lalu `_ui-inventory.md` dari evidence explore, `.feature`, `_scenarios.json`, `_coverage.md` sesuai `scenario/README.md`.

## 6. Breakdown REQ / VAL / AC per modul (2026-09-23)

Setiap modul punya `<modul>_analysis.md`: breakdown section (SEC), requirement atomik (REQ), validasi field (VAL), acceptance criteria Diberikan/Ketika/Maka (AC), state/transisi, dependensi, dan pertanyaan terbuka per modul (Q). Semua butir merujuk `<ID>-Rxx poin n`. Status REQ: `TERTULIS`, `AMBIGU`, `KONFLIK`, `TERPOTONG`, `REF-EKSTERNAL` (tidak ada yang diputuskan sepihak).

| ID | Analysis | SEC | REQ | VAL | AC | Q |
|---|---|---|---|---|---|---|
| TMS.S003 | [manajemen-vendor](manajemen-vendor/manajemen-vendor_analysis.md) | 8 | 57 | 5 | 30 | 11 |
| TMS.S004 | [registrasi-vendor](registrasi-vendor/registrasi-vendor_analysis.md) | 5 | 42 | 9 | 26 | 7 |
| TMS.S006 | [master-drop-point](master-drop-point/master-drop-point_analysis.md) | 6 | 57 | 10 | 39 | 16 |
| TMS.S008 | [master-waktu-perjalanan](master-waktu-perjalanan/master-waktu-perjalanan_analysis.md) | 7 | 56 | 5 | 37 | 18 |
| TMS.S009 | [master-unit-armada](master-unit-armada/master-unit-armada_analysis.md) | 7 | 61 | 14 | 42 | 17 |
| TMS.S010 | [master-sopir](master-sopir/master-sopir_analysis.md) | 7 | 65 | 12 | 40 | 19 |
| TMS.S011 | [order-ftl](order-ftl/order-ftl_analysis.md) | 11 | 104 | 18 | 64 | 19 |
| TMS.S012 | [order-fcl](order-fcl/order-fcl_analysis.md) | 11 | 108 | 20 | 66 | 21 |
| TMS.S013 | [order-ltl-lcl](order-ltl-lcl/order-ltl-lcl_analysis.md) | 14 | 88 | 21 | 56 | 22 |
| TMS.S014 | [dashboard-operasional](dashboard-operasional/dashboard-operasional_analysis.md) | 9 | 71 | 8 | 44 | 18 |
| TMS.S015 | [penugasan-tracking](penugasan-tracking/penugasan-tracking_analysis.md) | 14 | 110 | 22 | 76 | 13 |
| TMS.S016 | [driver-hub-tracking-fcl-lcl](driver-hub-tracking-fcl-lcl/driver-hub-tracking-fcl-lcl_analysis.md) | 4 | 21 | 2 | 19 | 4 |
| TMS.S018 | [dashboard-monitoring-tracking](dashboard-monitoring-tracking/dashboard-monitoring-tracking_analysis.md) | 10 | 96 | 7 | 56 | 19 |
| TMS.S019 | [batch-order](batch-order/batch-order_analysis.md) | 5 | 45 | 21 | 41 | 20 |
| TMS.S020 | [pengaturan-sistem](pengaturan-sistem/pengaturan-sistem_analysis.md) | 6 | 21 | 6 | 12 | 7 |
| TMS.S021 | [pengaturan-akun](pengaturan-akun/pengaturan-akun_analysis.md) | 11 | 75 | 10 | 53 | 17 |
| TMS.S022 | [pusat-notifikasi](pusat-notifikasi/pusat-notifikasi_analysis.md) | 5 | 48 | 4 | 20 | 12 |
| TMS.S023 | [akun-saya](akun-saya/akun-saya_analysis.md) | 5 | 42 | 10 | 29 | 10 |
| TMS.S024 | [master-customer-service](master-customer-service/master-customer-service_analysis.md) | 7 | 63 | 10 | 43 | 15 |
| TMS.S025 | [pembatasan-pajak-kir-armada](pembatasan-pajak-kir-armada/pembatasan-pajak-kir-armada_analysis.md) | 10 | 113 | 16 | 70 | 16 |
| **Total** | 20 modul | 162 | 1343 | 230 | 863 | 301 |

Q per modul mencakup rujukan ulang ke §4 di atas plus pertanyaan baru yang ditemukan saat breakdown. Belum dibuat: `_ui-inventory.md`, `.feature`, `_scenarios.json`, `_coverage.md`.

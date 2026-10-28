# TMS.S022 — Pusat Notifikasi · Analysis (REQ / VAL / AC)

> Sumber: [`pusat-notifikasi_spec.md`](pusat-notifikasi_spec.md) (verbatim `Spek TMS-S` baris 148–152) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.
> Catatan sumber: R03, R04, R05 tidak bernomor (kolom No "-"); poin di dalamnya dirujuk sesuai penomoran teks atau judul bagian.

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Rule umum pusat notifikasi | TMS.S022-R01, R02 poin 1–3, Cakupan kolom B | Shipper, Vendor | REQ-001–REQ-004 | — | AC-001 |
| SEC-02 | List Notifikasi TMS Shipper | TMS.S022-R02 (bagian "List Notifikasi TMS Shipper") | Shipper | REQ-005–REQ-023 | VAL-001 | AC-002–AC-006 |
| SEC-03 | List Notifikasi TMS Vendor | TMS.S022-R03 | Vendor | REQ-024–REQ-040 | VAL-001, VAL-002 | AC-007–AC-012 |
| SEC-04 | Halaman Notifikasi — rule penulisan | TMS.S022-R04 | Shipper/Vendor (tidak dirinci) | REQ-041–REQ-045 | VAL-003 | AC-013–AC-017 |
| SEC-05 | Email "Order Baru" untuk vendor | TMS.S022-R05 | Vendor | REQ-046–REQ-048 | VAL-004 | AC-018–AC-020 |

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Shipper | Menerima notifikasi sesuai "List Notifikasi TMS Shipper" | TMS.S022-R02 poin 3; R02 (bagian "List Notifikasi TMS Shipper") |
| Vendor | Menerima notifikasi sesuai "List Notifikasi TMS Vendor"; email "Order Baru" hanya bila pengelola dilakukan oleh vendor itu sendiri | TMS.S022-R03; R05 poin 1 |
| Sub user (lintas modul) | Switch on/off per jenis notifikasi diatur pada Hak Akses | TMS.S021-R08 poin 9; R10 |

## 3. Requirement (REQ)

**Matriks notifikasi × kanal (dikutip dari sumber)**

| Kategori | Notifikasi | Shipper (R02) | Vendor (R03) |
|---|---|---|---|
| Akun (tidak ditampilkan pada list) | Lupa Password | Email & Whatsapp | Email & Whatsapp |
| Akun (tidak ditampilkan pada list) | Ubah Password | Email & Whatsapp | Email & Whatsapp |
| Order | Order Baru | — (tidak tercantum) | Push & email |
| Order | Order Selesai | Push | Push |
| Order | Order Dibatalkan | Push | Push (tidak ada button "cek disini") |
| Order | Order Telah Ditugaskan | Push | Push |
| Tracking | Tahap Pengiriman - Berangkat Muat | Push | Push |
| Tracking | Tahap Pengiriman - Selesai Muat | Push | Push |
| Tracking | Tahap Pengiriman - Kapal Berlayar | Push | Push |
| Tracking | Tahap Pengiriman - Kapal Sandar | Push | Push |
| Tracking | Tahap Pengiriman - Berangkat Bongkar | Push | Push |
| Tracking | Tahap Pengiriman - Selesai Bongkar | Push | Push |
| Tracking | Tahap Pengiriman - Alihkan Armada | Push | Push |
| Monitoring & Tracking | Reminder Kendala Armada | Push | Push |
| Monitoring & Tracking | Reminder Armada Tidak Update | Push | — (tidak tercantum) |
| Monitoring & Tracking | Reminder Armada Melewati SLA | Push | — (tidak tercantum) |
| Monitoring & Tracking | Reminder Armada Keluar Jalur | Push | — (tidak tercantum) |
| Monitoring & Tracking | Reminder Armada Berpotensi Terlambat | Push | — (tidak tercantum) |

### SEC-01 · Rule umum pusat notifikasi
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Pusat notifikasi merupakan "Duplikat dari fitur yang ada pada TMS LKL". | TMS.S022-R02 poin 1 | REF-EKSTERNAL (Q-01) |
| REQ-002 | Penyesuaian hanya ada pada list notifikasi saja. | TMS.S022-R02 poin 2 | TERTULIS |
| REQ-003 | Diterapkan pada shipper & vendor. | TMS.S022-R02 poin 3 | TERTULIS |
| REQ-004 | Cakupan fitur: Setting notifikasi global; Setting preferensi notifikasi; Push Notifikasi; Notifikasi Wa & email (rincian perilaku tidak ada di file). | TMS.S022 (Cakupan kolom B) poin 1–4 | REF-EKSTERNAL (Q-01, Q-11, Q-12) |

### SEC-02 · List Notifikasi TMS Shipper
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-005 | List notifikasi shipper tertulis dalam kategori: Akun, Order, Tracking, Monitoring & Tracking. | TMS.S022-R02 (bagian "List Notifikasi TMS Shipper") | TERTULIS |
| REQ-006 | Kategori Akun "Jangan ditampilkan pada list, berjalan dibelakang pengirimannya". | TMS.S022-R02 (bagian "List Notifikasi TMS Shipper" — Akun) | TERTULIS |
| REQ-007 | Lupa Password → Email & Whatsapp. | TMS.S022-R02 (Akun) | TERTULIS |
| REQ-008 | Ubah Password → Email & Whatsapp. | TMS.S022-R02 (Akun) | TERTULIS |
| REQ-009 | Order Selesai → Push. | TMS.S022-R02 (Order) | TERTULIS |
| REQ-010 | Order Dibatalkan → Push. | TMS.S022-R02 (Order) | TERTULIS |
| REQ-011 | Order Telah Ditugaskan → Push. | TMS.S022-R02 (Order) | TERTULIS |
| REQ-012 | Tahap Pengiriman - Berangkat Muat → Push. | TMS.S022-R02 (Tracking) | TERTULIS |
| REQ-013 | Tahap Pengiriman - Selesai Muat → Push. | TMS.S022-R02 (Tracking) | TERTULIS |
| REQ-014 | Tahap Pengiriman - Kapal Berlayar → Push. | TMS.S022-R02 (Tracking) | TERTULIS (kondisional di S021-R10, Q-04) |
| REQ-015 | Tahap Pengiriman - Kapal Sandar → Push. | TMS.S022-R02 (Tracking) | TERTULIS (Q-04) |
| REQ-016 | Tahap Pengiriman - Berangkat Bongkar → Push. | TMS.S022-R02 (Tracking) | TERTULIS |
| REQ-017 | Tahap Pengiriman - Selesai Bongkar → Push. | TMS.S022-R02 (Tracking) | TERTULIS |
| REQ-018 | Tahap Pengiriman - Alihkan Armada → Push. | TMS.S022-R02 (Tracking) | TERTULIS |
| REQ-019 | Reminder Kendala Armada → Push. | TMS.S022-R02 (Monitoring & Tracking) | TERTULIS |
| REQ-020 | Reminder Armada Tidak Update → Push. | TMS.S022-R02 (Monitoring & Tracking) | TERTULIS |
| REQ-021 | Reminder Armada Melewati SLA → Push. | TMS.S022-R02 (Monitoring & Tracking) | TERTULIS |
| REQ-022 | Reminder Armada Keluar Jalur → Push. | TMS.S022-R02 (Monitoring & Tracking) | TERTULIS |
| REQ-023 | Reminder Armada Berpotensi Terlambat → Push. | TMS.S022-R02 (Monitoring & Tracking) | TERTULIS |

### SEC-03 · List Notifikasi TMS Vendor
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-024 | List notifikasi vendor tertulis dalam kategori: Akun, Order, Tracking, Monitoring & Tracking. | TMS.S022-R03 | TERTULIS |
| REQ-025 | Kategori Akun "Jangan ditampilkan pada list, berjalan dibelakang pengirimannya". | TMS.S022-R03 (Akun) | TERTULIS |
| REQ-026 | Lupa Password → Email & Whatsapp. | TMS.S022-R03 (Akun) | TERTULIS |
| REQ-027 | Ubah Password → Email & Whatsapp. | TMS.S022-R03 (Akun) | TERTULIS |
| REQ-028 | Order Baru → Push & email. | TMS.S022-R03 (Order) | TERTULIS (Q-02, Q-07) |
| REQ-029 | Order Selesai → Push. | TMS.S022-R03 (Order) | TERTULIS |
| REQ-030 | Order Dibatalkan → Push, tidak ada button "cek disini", karena baris order akan hilang di sisi vendor jika dibatalkan / assign ke vendor lain. | TMS.S022-R03 (Order) | TERTULIS (Q-09) |
| REQ-031 | Order Telah Ditugaskan → Push. | TMS.S022-R03 (Order) | TERTULIS |
| REQ-032 | Tahap Pengiriman - Berangkat Muat → Push. | TMS.S022-R03 (Tracking) | TERTULIS |
| REQ-033 | Tahap Pengiriman - Selesai Muat → Push. | TMS.S022-R03 (Tracking) | TERTULIS |
| REQ-034 | Tahap Pengiriman - Kapal Berlayar → Push. | TMS.S022-R03 (Tracking) | TERTULIS (Q-04) |
| REQ-035 | Tahap Pengiriman - Kapal Sandar → Push. | TMS.S022-R03 (Tracking) | TERTULIS (Q-04) |
| REQ-036 | Tahap Pengiriman - Berangkat Bongkar → Push. | TMS.S022-R03 (Tracking) | TERTULIS |
| REQ-037 | Tahap Pengiriman - Selesai Bongkar → Push. | TMS.S022-R03 (Tracking) | TERTULIS |
| REQ-038 | Tahap Pengiriman - Alihkan Armada → Push. | TMS.S022-R03 (Tracking) | TERTULIS |
| REQ-039 | Reminder Kendala Armada → Push. | TMS.S022-R03 (Monitoring & Tracking) | TERTULIS |
| REQ-040 | Kategori Monitoring & Tracking pada list vendor hanya berisi Reminder Kendala Armada (Reminder Armada Tidak Update, Melewati SLA, Keluar Jalur, Berpotensi Terlambat tidak tercantum). | TMS.S022-R03 (Monitoring & Tracking) | TERTULIS |

### SEC-04 · Halaman Notifikasi — rule penulisan
Teks dikutip persis dari sumber, termasuk tanda kutip yang tidak tertutup dan typo.

| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-041 | Order Masuk: "Order [ID Order] baru ditujukan untuk Anda. Segera lakukan penugasan tracking untuk order tersebut" | TMS.S022-R04 poin 1 | AMBIGU ("Order Masuk" vs "Order Baru"; Q-02) |
| REQ-042 | Kapal Berlayar: `"Kapal [Nama Kapal] - [No voyage] untuk order [ID Order] telah berlayar.` (tanda kutip penutup tidak ada di sumber) | TMS.S022-R04 poin 2 | TERPOTONG (Q-05) |
| REQ-043 | Kapal Sandar: `"Kapal [Nama Kapal] - [No voyage] untuk order [ID Order] telah sandar.` (tanda kutip penutup tidak ada di sumber) | TMS.S022-R04 poin 3 | TERPOTONG (Q-05) |
| REQ-044 | Armada Keluar Jalur: "Armada [Nopol] pada order [ID Order] terdeteksi keluar jalur dari rute yang dipredikasi pada perjalanan [Rute]. Periksa kondisi pengiriman" | TMS.S022-R04 poin 4 | TERTULIS (typo "dipredikasi", Q-05; [Nopol] untuk FCL/LCL, Q-06) |
| REQ-045 | Armada Berpotensi Terlambat: "Armada [Nopol] pada order [ID Order] diprediksi terlambat tiba di [Kota Tujuan] sekitar [Durasi Keterlambatan] melebihi SLA. Periksa kondisi pengiriman." | TMS.S022-R04 poin 5 | TERTULIS (Q-06) |

### SEC-05 · Email "Order Baru" untuk vendor
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-046 | Notifikasi email "Order Baru" hanya terkirim ke vendor, saat pengelola dilakukan oleh vendor itu sendiri. | TMS.S022-R05 poin 1 | TERTULIS |
| REQ-047 | Email dapat direct ke halaman detail order yang dimaksud ("dimaksut"). | TMS.S022-R05 poin 2 | TERTULIS |
| REQ-048 | Tampilan email mengikuti desain "No Desain: 180-182" (kolom E: "180. VENDOR - NOTIFIKASI EMAIL - ORDER BARU"). | TMS.S022-R05 poin 3; kolom E | REF-EKSTERNAL |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-02, SEC-03 | Notifikasi kategori Akun (Lupa Password, Ubah Password) | Tidak ditampilkan pada list; tetap terkirim via Email & Whatsapp | "Jangan ditampilkan pada list, berjalan dibelakang pengirimannya" | TMS.S022-R02; R03 |
| VAL-002 | SEC-03 | Notifikasi Order Dibatalkan (vendor) | Tanpa button "cek disini" | "tidak ada button "cek disini", karena baris order itu akan hilang di sisi vendor jika dibatalkan / assign ke vendor lain" | TMS.S022-R03 |
| VAL-003 | SEC-04 | Placeholder template | [ID Order], [Nama Kapal], [No voyage], [Nopol], [Rute], [Kota Tujuan], [Durasi Keterlambatan] diganti data terkait | Tidak disebut | TMS.S022-R04 poin 1–5 |
| VAL-004 | SEC-05 | Penerima email "Order Baru" | Hanya vendor, saat pengelola dilakukan oleh vendor itu sendiri | Tidak terkirim (tidak ada pesan) | TMS.S022-R05 poin 1 |

## 5. Acceptance Criteria (AC)
### SEC-01 · Rule umum
- **AC-001** (REQ-003) — **Diberikan** akun shipper dan akun vendor **Ketika** masing-masing membuka pengaturan/pusat notifikasi **Maka** keduanya memiliki list notifikasi sesuai list masing-masing (R02 untuk shipper, R03 untuk vendor). · Sumber: TMS.S022-R02 poin 3; R03

### SEC-02 · List Shipper
- **AC-002** (REQ-005, REQ-006, REQ-009–REQ-023, VAL-001) — **Diberikan** user shipper **Ketika** melihat list notifikasi **Maka** tampil notifikasi kategori Order, Tracking, Monitoring & Tracking sesuai R02, dan "Lupa Password" / "Ubah Password" tidak tampil. · Sumber: TMS.S022-R02
- **AC-003** (REQ-007, VAL-001) — **Diberikan** user shipper **Ketika** melakukan Lupa Password **Maka** notifikasi terkirim via Email & Whatsapp. · Sumber: TMS.S022-R02 (Akun)
- **AC-004** (REQ-008, VAL-001) — **Diberikan** user shipper **Ketika** melakukan Ubah Password **Maka** notifikasi terkirim via Email & Whatsapp. · Sumber: TMS.S022-R02 (Akun)
- **AC-005** (REQ-009–REQ-018) — **Diberikan** order shipper **Ketika** order Selesai / Dibatalkan / Telah Ditugaskan, atau tahap pengiriman berubah (Berangkat Muat, Selesai Muat, Kapal Berlayar, Kapal Sandar, Berangkat Bongkar, Selesai Bongkar, Alihkan Armada) **Maka** shipper menerima Push notifikasi yang sesuai. · Sumber: TMS.S022-R02 (Order, Tracking)
- **AC-006** (REQ-019–REQ-023) — **Diberikan** armada pada order shipper **Ketika** terjadi Kendala / Tidak Update / Melewati SLA / Keluar Jalur / Berpotensi Terlambat **Maka** shipper menerima Push reminder yang sesuai. · Sumber: TMS.S022-R02 (Monitoring & Tracking)

### SEC-03 · List Vendor
- **AC-007** (REQ-024, REQ-025, REQ-040, VAL-001) — **Diberikan** user vendor **Ketika** melihat list notifikasi **Maka** tampil notifikasi Order (Order Baru, Order Selesai, Order Dibatalkan, Order Telah Ditugaskan), 7 Tahap Pengiriman, dan hanya "Reminder Kendala Armada" pada Monitoring & Tracking; "Lupa Password" / "Ubah Password" tidak tampil. · Sumber: TMS.S022-R03
- **AC-008** (REQ-026, REQ-027) — **Diberikan** user vendor **Ketika** melakukan Lupa Password / Ubah Password **Maka** notifikasi terkirim via Email & Whatsapp. · Sumber: TMS.S022-R03 (Akun)
- **AC-009** (REQ-028) — **Diberikan** order baru ditujukan ke vendor **Ketika** order dibuat **Maka** vendor menerima Push, dan email bila memenuhi R05 poin 1. · Sumber: TMS.S022-R03 (Order); R05 poin 1
- **AC-010** (REQ-030, VAL-002) — **Diberikan** order vendor dibatalkan **Ketika** vendor menerima Push "Order Dibatalkan" **Maka** notifikasi tidak memiliki button "cek disini". · Sumber: TMS.S022-R03 (Order)
- **AC-011** (REQ-029, REQ-031–REQ-038) — **Diberikan** order vendor **Ketika** order Selesai / Telah Ditugaskan, atau tahap pengiriman berubah **Maka** vendor menerima Push yang sesuai. · Sumber: TMS.S022-R03 (Order, Tracking)
- **AC-012** (REQ-039) — **Diberikan** armada vendor mengalami kendala **Ketika** kendala dilaporkan **Maka** vendor menerima Push "Reminder Kendala Armada". · Sumber: TMS.S022-R03 (Monitoring & Tracking)

### SEC-04 · Halaman Notifikasi
- **AC-013** (REQ-041, VAL-003) — **Diberikan** order baru ditujukan ke vendor **Ketika** notifikasi tampil di halaman Notifikasi **Maka** teks = "Order [ID Order] baru ditujukan untuk Anda. Segera lakukan penugasan tracking untuk order tersebut" dengan [ID Order] terisi. · Sumber: TMS.S022-R04 poin 1
- **AC-014** (REQ-042, VAL-003) — **Diberikan** tahap Kapal Berlayar tercatat **Ketika** notifikasi tampil **Maka** teks mengikuti "Kapal [Nama Kapal] - [No voyage] untuk order [ID Order] telah berlayar." dengan placeholder terisi. · Sumber: TMS.S022-R04 poin 2
- **AC-015** (REQ-043, VAL-003) — **Diberikan** tahap Kapal Sandar tercatat **Ketika** notifikasi tampil **Maka** teks mengikuti "Kapal [Nama Kapal] - [No voyage] untuk order [ID Order] telah sandar." dengan placeholder terisi. · Sumber: TMS.S022-R04 poin 3
- **AC-016** (REQ-044, VAL-003) — **Diberikan** armada terkonfirmasi keluar jalur **Ketika** notifikasi tampil **Maka** teks = "Armada [Nopol] pada order [ID Order] terdeteksi keluar jalur dari rute yang dipredikasi pada perjalanan [Rute]. Periksa kondisi pengiriman" dengan placeholder terisi. · Sumber: TMS.S022-R04 poin 4
- **AC-017** (REQ-045, VAL-003) — **Diberikan** armada berpotensi terlambat **Ketika** notifikasi tampil **Maka** teks = "Armada [Nopol] pada order [ID Order] diprediksi terlambat tiba di [Kota Tujuan] sekitar [Durasi Keterlambatan] melebihi SLA. Periksa kondisi pengiriman." dengan placeholder terisi. · Sumber: TMS.S022-R04 poin 5

### SEC-05 · Email "Order Baru"
- **AC-018** (REQ-046, VAL-004) — **Diberikan** order baru untuk vendor yang pengelolanya vendor itu sendiri **Ketika** order ditujukan ke vendor **Maka** email "Order Baru" terkirim ke vendor. · Sumber: TMS.S022-R05 poin 1
- **AC-019** (REQ-046, VAL-004) — **Diberikan** order baru untuk vendor yang pengelolanya bukan vendor itu sendiri **Ketika** order ditujukan ke vendor **Maka** email "Order Baru" tidak terkirim. · Sumber: TMS.S022-R05 poin 1
- **AC-020** (REQ-047) — **Diberikan** vendor menerima email "Order Baru" **Ketika** vendor membuka tautan pada email **Maka** diarahkan ke halaman detail order yang dimaksud. · Sumber: TMS.S022-R05 poin 2

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Pengaturan Akun (S021) | Daftar notifikasi pada Hak Akses (switch on/off); Kapal Berlayar/Sandar hanya tampil bila FCL atau LCL dicentang pada Jenis Pengiriman; Lupa/Ubah Password tidak tampil pada list | TMS.S021-R08 poin 9; R10; spec-index §3 |
| Pembatasan Pajak & KIR Armada (S025) | Tab/kategori baru "KIR Armada" pada halaman Notifikasi (item per tahapan deadline, dapat dipilih/ditandai dibaca/dihapus, button Cek Disini ke Master Armada, auto terhapus 3 bulan, hanya untuk role Penerima Reminder) — rule tetap milik S025, dicantumkan sebagai dependensi saja | TMS.S025-R11 poin 1–6; R09; spec-index §3 |
| Dashboard Monitoring (S018) | Pemicu Reminder Tidak Update / Melewati SLA / Keluar Jalur / Berpotensi Terlambat; notifikasi dini "Berisiko melewati SLA" dengan ambang minimal | TMS.S018-R04; R09; R10 poin 6 |
| Penugasan Tracking (S015) / Driver Hub (S016) | Pemicu Tahap Pengiriman & Kendala; Kapal Berlayar/Sandar ([Nama Kapal], [No voyage]) | TMS.S022-R02; R03; R04 poin 2–3 |
| Manajemen Vendor (S003) | Pengelola vendor (vendor sendiri vs shipper) menentukan email "Order Baru" | TMS.S022-R05 poin 1; spec-index §3 (S003-R05/R06/R07) |
| Order (S011–S013) | Order Baru/Selesai/Dibatalkan/Telah Ditugaskan; halaman detail order sebagai tujuan email | TMS.S022-R03; R05 poin 2 |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | "Duplikat dari fitur yang ada pada TMS LKL" — perilaku setting global/preferensi, push, WA & email tidak ada di file. | R02 poin 1; Cakupan kolom B | REQ-001, REQ-004 | §4 no.33 |
| Q-02 | R04 memakai "Order Masuk" sedangkan list vendor memakai "Order Baru" — notifikasi yang sama? | R03; R04 poin 1 | REQ-028, REQ-041 | §4 no.33 |
| Q-03 | Template kalimat hanya diberikan untuk 5 notifikasi; teks notifikasi lain (Order Selesai, Order Dibatalkan, Order Telah Ditugaskan, Tahap Pengiriman lain, Reminder Kendala/Tidak Update/Melewati SLA) tidak diberikan — mengikuti TMS LKL? | R04 | REQ-009–REQ-021, REQ-029–REQ-039 | Baru |
| Q-04 | Di S022, Kapal Berlayar/Sandar tidak diberi syarat, sedangkan S021-R10 menyembunyikannya bila FCL & LCL tidak dicentang — apakah syarat tersebut juga berlaku pada list preferensi notifikasi shipper dan vendor? | R02; R03; S021-R10 | REQ-014, REQ-015, REQ-034, REQ-035 | Baru |
| Q-05 | Konfirmasi teks final: template Kapal Berlayar/Sandar tanpa tanda kutip penutup, typo "dipredikasi", dan akhiran titik tidak konsisten (Keluar Jalur tanpa titik, Berpotensi Terlambat dengan titik). | R04 poin 2–5 | REQ-042–REQ-044 | Baru |
| Q-06 | Template [Nopol] untuk FCL/LCL, padahal S018-R02 poin 4 memakai no. kontainer untuk FCL & LCL. | R04 poin 4–5; S018-R02 poin 4 | REQ-044, REQ-045 | Baru |
| Q-07 | Apakah Push "Order Baru" tetap dikirim ke vendor yang pengelolanya shipper (R05 hanya membatasi email)? | R03; R05 poin 1 | REQ-028, REQ-046 | Baru |
| Q-08 | "Halaman Notifikasi" R04 berlaku untuk sisi shipper, vendor, atau keduanya? (Order Masuk hanya di list vendor; Keluar Jalur & Berpotensi Terlambat hanya di list shipper.) | R04 | REQ-041–REQ-045 | Baru |
| Q-09 | Keberadaan dan tujuan button "cek disini" pada notifikasi selain Order Dibatalkan vendor tidak dijelaskan. | R03 | REQ-030 | Baru |
| Q-10 | Notifikasi "Armada Mendekat" disebut pada S020-R03 poin 2 (Radius Notifikasi Lokasi Muat/Bongkar) tetapi tidak ada di list Shipper maupun Vendor. | R02; R03; S020-R03 poin 2 | REQ-005, REQ-024 | Baru |
| Q-11 | Hubungan "Setting notifikasi global" / "Setting preferensi notifikasi" (Cakupan kolom B) dengan switch notifikasi per Hak Akses (S021-R08 poin 9) — mana yang menentukan notifikasi diterima? | Cakupan kolom B; S021-R08 poin 9 | REQ-004 | Baru |
| Q-12 | Kanal "Notifikasi Wa" pada Cakupan hanya muncul untuk Lupa/Ubah Password; apakah ada notifikasi lain via WhatsApp? | Cakupan kolom B; R02; R03 | REQ-004 | Baru |

## 9. Catatan testability (bukan requirement)
- Lupa Password / Ubah Password (Email & Whatsapp) dan email "Order Baru" memerlukan akses kotak masuk email dan WhatsApp penerima.
- Push notifikasi Tahap Pengiriman, Kapal Berlayar/Sandar, Kendala, dan Reminder Monitoring bergantung pada aksi Driver Hub, data GPS, atau job/proses latar sistem.
- Desain email No Desain 180-182 tidak tersedia di file.

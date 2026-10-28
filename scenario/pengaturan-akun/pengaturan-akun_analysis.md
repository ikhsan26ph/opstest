# TMS.S021 — Pengaturan Akun (Sub User & Hak Akses) · Analysis (REQ / VAL / AC)

> Sumber: [`pengaturan-akun_spec.md`](pengaturan-akun_spec.md) (verbatim `Spek TMS-S` baris 132–146) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.
> Catatan penomoran sumber: R09 memiliki dua poin bernomor "2." — dirujuk sebagai "poin 2 (pertama)" dan "poin 2 (kedua)". R06 dan R14 berisi dua sub-bagian (Edit/Detail) dengan penomoran masing-masing.

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Rule umum Pengaturan Akun | TMS.S021-R01, R02 | Sub user | REQ-001–REQ-003 | — | AC-001–AC-002 |
| SEC-02 | Sub User — Daftar | TMS.S021-R03, R04 | Sub user | REQ-004–REQ-010 | — | AC-003–AC-007 |
| SEC-03 | Sub User — Tambah | TMS.S021-R05 | Sub user (Akses Penuh "Sub User") | REQ-011–REQ-022 | VAL-001–VAL-007 | AC-008–AC-017 |
| SEC-04 | Sub User — Edit & Detail | TMS.S021-R06 | Sub user | REQ-023–REQ-027 | — | AC-018–AC-021 |
| SEC-05 | Hak Akses — List, Tambah & Default Value | TMS.S021-R11, R12, R13 | Sub user | REQ-028–REQ-037 | — | AC-022–AC-028 |
| SEC-06 | Hak Akses — Detail & Edit | TMS.S021-R14 | Sub user | REQ-038–REQ-042 | VAL-008 | AC-029–AC-031 |
| SEC-07 | Level akses | TMS.S021-R07 | Sub user | REQ-043–REQ-045 | — | AC-032–AC-034 |
| SEC-08 | Struktur modul Hak Akses | TMS.S021-R08 | — | REQ-046–REQ-057 | — | AC-035–AC-037 |
| SEC-09 | Cakupan Data | TMS.S021-R09 | — | REQ-058–REQ-066 | — | AC-038–AC-044 |
| SEC-10 | Notifikasi | TMS.S021-R10 | — | REQ-067–REQ-070 | VAL-010 | AC-045–AC-047 |
| SEC-11 | Validasi Data & Keamanan, Catatan Umum | TMS.S021-R15 | Sub user | REQ-071–REQ-075 | VAL-002, VAL-003, VAL-009 | AC-048–AC-053 |

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Sub user dengan hak akses "Sub User" level Akses Penuh pada modul Pengaturan Akun | Dapat menambah dan mengelola sub user lain ("bukan terbatas hanya untuk Admin Utama") | TMS.S021-R05 poin 1 |
| Sub user yang "memiliki akses pengaturan akun" | Dapat membuat hak akses | TMS.S021-R02 poin 3 |
| Admin Utama | Disebut sebagai pihak yang dapat mengelola sub user; hak lainnya tidak didefinisikan | TMS.S021-R05 poin 1 |
| Sub user (umum) | Akses per modul mengikuti level Akses Penuh / Lihat Saja / Tidak Ada Akses | TMS.S021-R07 |

## 3. Requirement (REQ)
### SEC-01 · Rule umum Pengaturan Akun
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Menu pengaturan memiliki 2 tab terpisah: "Sub User" dan "Hak Akses". | TMS.S021-R02 poin 1 | TERTULIS |
| REQ-002 | Pada tab Sub User, user dapat menggunakan hak akses yang sudah dibuat sebelumnya atau membuat hak akses baru. | TMS.S021-R02 poin 2 | TERTULIS |
| REQ-003 | Sub user dapat membuat hak akses asalkan memiliki akses pengaturan akun. | TMS.S021-R02 poin 3 | AMBIGU (Q-04) |

### SEC-02 · Sub User — Daftar
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-004 | Tab Sub User - Daftar tampil default saat membuka menu Pengaturan Akun. | TMS.S021-R04 poin 1 | TERTULIS |
| REQ-005 | Tiap baris data dapat: Lihat Detail, Edit, Hapus. | TMS.S021-R04 poin 2 | TERTULIS (perilaku Hapus, Q-09) |
| REQ-006 | Terdapat button "+ Tambah Sub User". | TMS.S021-R04 poin 3 | TERTULIS |
| REQ-007 | Button "Reset" pada filter mengosongkan filter & mengembalikan tabel ke kondisi default. | TMS.S021-R04 poin 4 | TERTULIS (field filter tidak disebut, Q-05) |
| REQ-008 | Button "Terapkan" menampilkan data sesuai filter. | TMS.S021-R04 poin 4 | TERTULIS |
| REQ-009 | Default 20 data per halaman, jumlahnya dapat diatur. | TMS.S021-R04 poin 5 | TERTULIS |
| REQ-010 | Perubahan jumlah data per halaman maupun pindah halaman (next page) tidak menampilkan loading state. | TMS.S021-R04 poin 5 | TERTULIS |

### SEC-03 · Sub User — Tambah
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-011 | Sub user dapat menambah dan mengelola sub user lain selama memiliki hak akses "Sub User" dengan level Akses Penuh pada modul Pengaturan Akun (bukan terbatas hanya untuk Admin Utama). | TMS.S021-R05 poin 1 | TERTULIS |
| REQ-012 | Field "Nama Sub User" wajib, text. | TMS.S021-R05 poin 2 | TERTULIS |
| REQ-013 | Field "Email" wajib, validasi format email. | TMS.S021-R05 poin 2 | TERTULIS |
| REQ-014 | Field "Nomor WhatsApp" wajib, input angka. | TMS.S021-R05 poin 2 | TERTULIS |
| REQ-015 | Field "Bagian Staff" wajib. | TMS.S021-R05 poin 2 | TERTULIS (tipe input tidak disebut, Q-06) |
| REQ-016 | Field "Password" & "Konfirmasi Password" wajib, tersedia toggle show/hide (icon mata). | TMS.S021-R05 poin 2 | TERTULIS (aturan password, Q-07) |
| REQ-017 | Status otomatis "Aktif" saat data disimpan. | TMS.S021-R05 poin 2 | TERTULIS |
| REQ-018 | Section Hak Akses memiliki 2 pilihan: "Pilih Hak Akses" dan "Buat Hak Akses". | TMS.S021-R05 poin 3 | TERTULIS |
| REQ-019 | Pilih Hak Akses → pilih template hak akses yang sudah ada via dropdown; setelah dipilih, sistem menampilkan preview seluruh hak akses dari template tersebut dalam kondisi read-only. | TMS.S021-R05 poin 3 | TERTULIS |
| REQ-020 | Buat Hak Akses → user mengisi Nama Hak Akses (wajib) dan menyusun hak akses baru secara custom & interaktif. | TMS.S021-R05 poin 3 | TERTULIS |
| REQ-021 | Button "Batal" menampilkan alert konfirmasi. | TMS.S021-R05 poin 4 | TERTULIS (teks alert tidak disebut, Q-17) |
| REQ-022 | Button "Simpan" menampilkan alert konfirmasi; data baru muncul di list. | TMS.S021-R05 poin 4 | TERTULIS |

### SEC-04 · Sub User — Edit & Detail
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-023 | Form edit sama seperti form tambah, data terisi sesuai data terakhir tersimpan. | TMS.S021-R06 (bagian "Edit Sub User") poin 1 | TERTULIS |
| REQ-024 | Password default tidak ditampilkan, dapat dilihat dengan klik icon mata. | TMS.S021-R06 (bagian "Edit Sub User") poin 2 | TERTULIS |
| REQ-025 | Field Status dapat diedit melalui dropdown (Aktif/Tidak Aktif). | TMS.S021-R06 (bagian "Edit Sub User") poin 3 | TERTULIS (efek Tidak Aktif, Q-08) |
| REQ-026 | Detail Sub User menampilkan seluruh data yang diinput saat Tambah/Edit (Informasi Umum + Hak Akses), bersifat read-only. | TMS.S021-R06 (bagian "Detail Sub User") poin 1 | TERTULIS |
| REQ-027 | Pada Detail Sub User, Hak Akses ditampilkan dalam struktur tree, dapat di-minimize per kategori. | TMS.S021-R06 (bagian "Detail Sub User") poin 2 | TERTULIS |

### SEC-05 · Hak Akses — List, Tambah & Default Value
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-028 | Tiap baris data Hak Akses dapat: Lihat Detail, Edit, Hapus. | TMS.S021-R13 poin 1 | TERTULIS |
| REQ-029 | Terdapat tombol tambah hak akses langsung dari tab Hak Akses, dengan rule yang sama dengan proses tambah hak akses pada tab "sub user". | TMS.S021-R13 poin 2 | TERTULIS |
| REQ-030 | Filter: Nama Hak Akses, Status (dropdown). | TMS.S021-R13 poin 3 | AMBIGU (Status hak akses tidak didefinisikan, Q-08) |
| REQ-031 | Button Reset & Terapkan "mengikuti pola yang sama seperti Bab 1". | TMS.S021-R13 poin 3 | REF-EKSTERNAL (Q-01) |
| REQ-032 | Default 20 data per halaman, dapat diatur, tanpa loading saat ganti halaman/jumlah data. | TMS.S021-R13 poin 4 | TERTULIS |
| REQ-033 | Tiap baris & halaman Detail menampilkan ringkasan jumlah: total modul dengan Akses Penuh, Lihat Saja, Tidak Ada Akses, jumlah notifikasi aktif, serta jumlah Sub User yang menggunakan hak akses tersebut. | TMS.S021-R13 poin 5 | TERTULIS |
| REQ-034 | Default Jenis Pengiriman saat membuat hak akses baru: seluruh jenis terpilih (FTL, LTL, FCL, LCL tercentang semua). | TMS.S021-R11 poin 1 | TERTULIS |
| REQ-035 | Default level akses: Akses Penuh untuk seluruh modul, dan seluruh notifikasi aktif, "sesuai requirement". | TMS.S021-R11 poin 2 | TERTULIS (Q-15) |
| REQ-036 | Tombol shortcut "Terapkan Cepat ke Semua Modul" dengan pilihan Akses Penuh / Lihat Saja / Tidak Ada Akses menerapkan level akses yang sama ke seluruh modul sekaligus. | TMS.S021-R11 poin 3 | TERTULIS (Q-15) |
| REQ-037 | Setelah menggunakan shortcut, user tetap dapat mengubah/custom secara manual. | TMS.S021-R11 poin 3 | TERTULIS |

### SEC-06 · Hak Akses — Detail & Edit
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-038 | Detail Hak Akses menampilkan Informasi Umum: Nama Hak Akses, Deskripsi, Tanggal Buat, Tanggal Diperbarui, Total Sub User (pengguna hak akses ini), Cakupan Data, dan ringkasan "Total 2. 2. Akses" (jumlah Akses Penuh/Lihat Saja/Tidak Ada/Notifikasi). | TMS.S021-R14 (bagian "Detail Hak Akses") poin 1 | TERPOTONG (penomoran rusak; Q-02, Q-14) |
| REQ-039 | Detail Hak Akses menampilkan Hak Akses dalam struktur tree, dapat di-minimize per kategori, read-only. | TMS.S021-R14 (bagian "Detail Hak Akses") poin 3 | TERTULIS |
| REQ-040 | Edit Hak Akses: field Nama Hak Akses (wajib, text), Deskripsi (opsional, textarea). | TMS.S021-R14 (bagian "Edit Hak Akses") poin 1 | TERTULIS |
| REQ-041 | Edit Hak Akses: tersedia shortcut "Terapkan Cepat ke Semua Modul". | TMS.S021-R14 (bagian "Edit Hak Akses") poin 2 | TERTULIS |
| REQ-042 | Edit Hak Akses: struktur tree & rule sama dengan proses Buat Hak Akses. | TMS.S021-R14 (bagian "Edit Hak Akses") poin 3 | TERTULIS |

### SEC-07 · Level akses
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-043 | Akses Penuh → dapat melakukan seluruh operasi (Create, Read, Update, Delete) pada fitur terkait. | TMS.S021-R07 poin 1 | TERTULIS |
| REQ-044 | Lihat Saja → hanya dapat melihat data, tidak dapat membuat/mengubah/menghapus. | TMS.S021-R07 poin 2 | TERTULIS |
| REQ-045 | Tidak Ada Akses → tidak dapat mengakses fitur sama sekali; menu disembunyikan dari navigasi. | TMS.S021-R07 poin 3 | TERTULIS |

### SEC-08 · Struktur modul Hak Akses
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-046 | Manajemen Vendor → kontrol 3-level (Akses Penuh/Lihat Saja/Tidak Ada Akses), tanpa Cakupan Data. | TMS.S021-R08 poin 1 | TERTULIS |
| REQ-047 | Jenis Pengiriman → bukan kontrol 3-level, melainkan checkbox multi-select: FTL, LTL, FCL, LCL. | TMS.S021-R08 poin 2 | TERTULIS |
| REQ-048 | Jenis Pengiriman menentukan jenis pengiriman apa saja yang dapat diakses/dikerjakan sub user pada modul Order & tempat lain yang relevan. | TMS.S021-R08 poin 2 | AMBIGU (Q-12) |
| REQ-049 | Order → kontrol 3-level + Cakupan Data (Semua Data / Data Sendiri). | TMS.S021-R08 poin 3 | TERTULIS |
| REQ-050 | Penugasan Tracking → kontrol 3-level + Cakupan Data mengikuti rule turunan dari Order. | TMS.S021-R08 poin 4 | TERTULIS |
| REQ-051 | Dashboard (kategori, dapat di-minimize): Monitoring, Progres Pengiriman, Tracking & Location memiliki Cakupan Data turunan dari Order; Operasional tidak memiliki Cakupan Data. | TMS.S021-R08 poin 5 | AMBIGU (kontrol 3-level tidak disebut, Q-11) |
| REQ-052 | Pengaturan Akun (kategori) → Sub User, Hak Akses; masing-masing kontrol 3-level, tanpa Cakupan Data. | TMS.S021-R08 poin 6 | TERTULIS |
| REQ-053 | Master Wilayah (kategori) → Master Provinsi, Master Kota, Master Kecamatan, Master Kelurahan; masing-masing kontrol 3-level, tanpa Cakupan Data. | TMS.S021-R08 poin 7 | TERTULIS |
| REQ-054 | Master Operasional (kategori) → Master Drop Point, Master Pelabuhan, Master Pelayaran, Master Waktu Perjalanan, Master Unit, Master Sopir; masing-masing kontrol 3-level, tanpa Cakupan Data. | TMS.S021-R08 poin 8 | AMBIGU (Master Customer Service tidak tercantum; Q-03) |
| REQ-055 | Notifikasi (kategori) → switch on/off per jenis notifikasi; "lihat Bab 8 untuk daftar & rule kondisionalnya". | TMS.S021-R08 poin 9 | REF-EKSTERNAL (Q-01; daftar di R10) |
| REQ-056 | Manajemen Vendor, Jenis Pengiriman, Order, dan Penugasan Tracking tampil sebagai item langsung (tidak dalam kategori collapsible). | TMS.S021-R08 poin 10 | TERTULIS |
| REQ-057 | Dashboard, Pengaturan Akun, Master Wilayah, Master Operasional, dan Notifikasi tampil sebagai kategori collapsible (bisa di-minimize). | TMS.S021-R08 poin 10 | TERTULIS |

### SEC-09 · Cakupan Data
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-058 | Cakupan Data pada Order memiliki 2 pilihan: Semua Data atau Data Sendiri. | TMS.S021-R09 poin 1 | TERTULIS |
| REQ-059 | Akses Order "akses penuh" → tampil 2 pilihan (Semua Data dan Data Sendiri). | TMS.S021-R09 poin 2 (pertama) | TERTULIS |
| REQ-060 | Akses Order "lihat saja" → tampil 1 pilihan (Semua Data), dan bagian Data Sendiri disable. | TMS.S021-R09 poin 2 (pertama) | AMBIGU (Q-10) |
| REQ-061 | Akses Order "Tidak ada Akses" → tidak tampil cakupan data; otomatis pada modul turunan hanya menampilkan "Semua Data" sebagai teks/badge tetap. | TMS.S021-R09 poin 2 (pertama) | TERTULIS |
| REQ-062 | Cakupan Data pada Order memengaruhi tampilan Cakupan Data pada modul turunan: Penugasan Tracking, serta Dashboard (Monitoring, Progres Pengiriman, dan Tracking & Location). | TMS.S021-R09 poin 2 (kedua) | TERTULIS |
| REQ-063 | Order = "Semua Data" → field Cakupan Data pada seluruh modul turunan bukan pilihan/toggle; hanya menampilkan "Semua Data" sebagai teks/badge tetap (opsi "Mengikuti Cakupan Data Order" dihilangkan). | TMS.S021-R09 poin 3 | TERTULIS |
| REQ-064 | Order = "Data Sendiri" → field Cakupan Data pada modul turunan berupa toggle 2 pilihan: "Semua Data" atau "Mengikuti Cakupan Data Order" (mengikuti berarti = Data Sendiri). | TMS.S021-R09 poin 4 | TERTULIS |
| REQ-065 | Saat Order = "Data Sendiri", masing-masing modul turunan dapat diatur berbeda-beda (independen satu sama lain). | TMS.S021-R09 poin 4 | TERTULIS |
| REQ-066 | Field Cakupan Data pada modul turunan hanya relevan/tampil apabila level akses modul tersebut bukan "Tidak Ada Akses". | TMS.S021-R09 poin 5 | TERTULIS |

### SEC-10 · Notifikasi
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-067 | Daftar notifikasi yang tampil (switch on/off): "Order Selesai", "Order Dibatalkan", "Order Telah Ditugaskan", "Tahap Pengiriman - Berangkat Muat", "Tahap Pengiriman - Selesai Muat", "Tahap Pengiriman - Kapal Berlayar" (kondisional), "Tahap Pengiriman - Kapal Sandar" (kondisional), "Tahap Pengiriman - Berangkat Bongkar", "Tahap Pengiriman - Selesai Bongkar", "Tahap Pengiriman - Alihkan Armada", "Reminder Kendala Armada", "Reminder Armada Tidak Update", "Reminder Armada Melewati SLA", "Reminder Armada Keluar Jalur", "Reminder Armada Berpotensi Terlambat". | TMS.S021-R10; R08 poin 9 | TERTULIS (Q-13) |
| REQ-068 | "Lupa Password" dan "Ubah Password" tidak ditampilkan pada list ("berjalan dibelakang pengirimannya"). | TMS.S021-R10 | TERTULIS |
| REQ-069 | "Tahap Pengiriman - Kapal Berlayar" dan "Tahap Pengiriman - Kapal Sandar" hanya ditampilkan apabila minimal salah satu dari FCL atau LCL dicentang pada hak akses Jenis Pengiriman. | TMS.S021-R10 (bagian "Rule kondisional") poin 1 | TERTULIS |
| REQ-070 | Apabila hanya FTL dan/atau LTL yang dicentang (FCL & LCL tidak dicentang sama sekali), kedua notifikasi tersebut disembunyikan/dihilangkan dari daftar. | TMS.S021-R10 (bagian "Rule kondisional") poin 2 | TERTULIS |

### SEC-11 · Validasi Data & Keamanan, Catatan Umum
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-071 | Email tidak boleh duplikat. | TMS.S021-R15 poin 1 | TERTULIS (pesan tidak disebut, Q-17) |
| REQ-072 | Nomor WhatsApp tidak boleh duplikat. | TMS.S021-R15 poin 2 | TERTULIS (Q-17) |
| REQ-073 | Data Hak Akses tidak dapat dihapus jika sudah digunakan (masih terpasang pada minimal 1 Sub User). | TMS.S021-R15 poin 3 | TERTULIS (perilaku UI, Q-09) |
| REQ-074 | Setiap berhasil simpan/edit/hapus data, muncul toast notifikasi saat kembali ke halaman list. | TMS.S021-R15 (bagian "Catatan Umum") poin 1 | TERTULIS (Q-17) |
| REQ-075 | Data mandatory yang belum terisi tidak dapat disimpan, dan menampilkan alert/helper error. | TMS.S021-R15 (bagian "Catatan Umum") poin 2 | TERTULIS |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-03 | Nama Sub User | Wajib, text | "tidak dapat disimpan, dan menampilkan alert/helper error" | TMS.S021-R05 poin 2; R15 Catatan Umum poin 2 |
| VAL-002 | SEC-03, SEC-11 | Email | Wajib; format email; tidak boleh duplikat | Kosong: "tidak dapat disimpan, dan menampilkan alert/helper error"; format/duplikat: pesan tidak disebut | TMS.S021-R05 poin 2; R15 poin 1 |
| VAL-003 | SEC-03, SEC-11 | Nomor WhatsApp | Wajib; input angka; tidak boleh duplikat | Kosong: "tidak dapat disimpan, dan menampilkan alert/helper error"; duplikat: pesan tidak disebut | TMS.S021-R05 poin 2; R15 poin 2 |
| VAL-004 | SEC-03 | Bagian Staff | Wajib | "tidak dapat disimpan, dan menampilkan alert/helper error" | TMS.S021-R05 poin 2; R15 Catatan Umum poin 2 |
| VAL-005 | SEC-03 | Password | Wajib; toggle show/hide | "tidak dapat disimpan, dan menampilkan alert/helper error" | TMS.S021-R05 poin 2; R15 Catatan Umum poin 2 |
| VAL-006 | SEC-03 | Konfirmasi Password | Wajib; toggle show/hide | "tidak dapat disimpan, dan menampilkan alert/helper error" (kecocokan dengan Password tidak disebut) | TMS.S021-R05 poin 2; R15 Catatan Umum poin 2 |
| VAL-007 | SEC-03 | Nama Hak Akses (opsi Buat Hak Akses) | Wajib | "tidak dapat disimpan, dan menampilkan alert/helper error" | TMS.S021-R05 poin 3; R15 Catatan Umum poin 2 |
| VAL-008 | SEC-06 | Nama Hak Akses / Deskripsi (Edit Hak Akses) | Nama: wajib, text; Deskripsi: opsional, textarea | Nama kosong: "tidak dapat disimpan, dan menampilkan alert/helper error" | TMS.S021-R14 (bagian "Edit Hak Akses") poin 1; R15 Catatan Umum poin 2 |
| VAL-009 | SEC-11 | Hapus Hak Akses | Tidak dapat dihapus bila terpasang pada ≥ 1 Sub User | Pesan/perilaku tidak disebut | TMS.S021-R15 poin 3 |
| VAL-010 | SEC-10 | Jenis Pengiriman × notifikasi Kapal | Kapal Berlayar/Sandar tampil hanya bila FCL atau LCL dicentang | Disembunyikan/dihilangkan dari daftar | TMS.S021-R10 (bagian "Rule kondisional") poin 1–2 |

## 5. Acceptance Criteria (AC)
### SEC-01 · Rule umum
- **AC-001** (REQ-001) — **Diberikan** user membuka menu Pengaturan Akun **Ketika** halaman tampil **Maka** terdapat 2 tab terpisah "Sub User" dan "Hak Akses". · Sumber: TMS.S021-R02 poin 1
- **AC-002** (REQ-002) — **Diberikan** form sub user **Ketika** user mengisi section Hak Akses **Maka** user dapat memilih hak akses yang sudah ada atau membuat hak akses baru. · Sumber: TMS.S021-R02 poin 2

### SEC-02 · Sub User — Daftar
- **AC-003** (REQ-004) — **Diberikan** user membuka menu Pengaturan Akun **Ketika** halaman dimuat **Maka** tab Sub User - Daftar tampil default. · Sumber: TMS.S021-R04 poin 1
- **AC-004** (REQ-005, REQ-006) — **Diberikan** daftar sub user berisi data **Ketika** tabel tampil **Maka** tiap baris memiliki aksi Lihat Detail, Edit, Hapus, dan terdapat button "+ Tambah Sub User". · Sumber: TMS.S021-R04 poin 2–3
- **AC-005** (REQ-008) — **Diberikan** filter terisi **Ketika** user klik "Terapkan" **Maka** tabel menampilkan data sesuai filter. · Sumber: TMS.S021-R04 poin 4
- **AC-006** (REQ-007) — **Diberikan** filter terisi/diterapkan **Ketika** user klik "Reset" **Maka** filter dikosongkan dan tabel kembali ke kondisi default. · Sumber: TMS.S021-R04 poin 4
- **AC-007** (REQ-009, REQ-010) — **Diberikan** data > 20 **Ketika** halaman dimuat, lalu user mengubah jumlah per halaman atau pindah halaman **Maka** default 20 data tampil, dan perubahan tidak menampilkan loading state. · Sumber: TMS.S021-R04 poin 5

### SEC-03 · Sub User — Tambah
- **AC-008** (REQ-011) — **Diberikan** sub user dengan hak akses "Sub User" level Akses Penuh pada Pengaturan Akun **Ketika** membuka Pengaturan Akun **Maka** dapat menambah dan mengelola sub user lain. · Sumber: TMS.S021-R05 poin 1
- **AC-009** (REQ-012–REQ-016, VAL-001, VAL-004–VAL-006, REQ-075) — **Diberikan** form Tambah Sub User **Ketika** user klik Simpan dengan salah satu field wajib (Nama Sub User, Email, Nomor WhatsApp, Bagian Staff, Password, Konfirmasi Password) kosong **Maka** data tidak dapat disimpan dan tampil alert/helper error. · Sumber: TMS.S021-R05 poin 2; R15 Catatan Umum poin 2
- **AC-010** (REQ-013, VAL-002) — **Diberikan** form Tambah Sub User **Ketika** Email diisi dengan format bukan email **Maka** validasi format email gagal dan data tidak tersimpan. · Sumber: TMS.S021-R05 poin 2
- **AC-011** (REQ-014, VAL-003) — **Diberikan** field Nomor WhatsApp **Ketika** user mengetik karakter bukan angka **Maka** field hanya menerima input angka. · Sumber: TMS.S021-R05 poin 2
- **AC-012** (REQ-016) — **Diberikan** Password & Konfirmasi Password terisi **Ketika** user klik icon mata **Maka** isi password tampil/tersembunyi (toggle show/hide). · Sumber: TMS.S021-R05 poin 2
- **AC-013** (REQ-017, REQ-022, REQ-074) — **Diberikan** seluruh field wajib valid **Ketika** user klik Simpan dan mengonfirmasi alert **Maka** data tersimpan dengan Status "Aktif", muncul di list, dan tampil toast saat kembali ke list. · Sumber: TMS.S021-R05 poin 2, 4; R15 Catatan Umum poin 1
- **AC-014** (REQ-019) — **Diberikan** opsi "Pilih Hak Akses" **Ketika** user memilih template dari dropdown **Maka** tampil preview seluruh hak akses template dalam kondisi read-only. · Sumber: TMS.S021-R05 poin 3
- **AC-015** (REQ-020, VAL-007) — **Diberikan** opsi "Buat Hak Akses" **Ketika** user menyimpan tanpa Nama Hak Akses **Maka** data tidak dapat disimpan dan tampil alert/helper error. · Sumber: TMS.S021-R05 poin 3; R15 Catatan Umum poin 2
- **AC-016** (REQ-020) — **Diberikan** opsi "Buat Hak Akses" **Ketika** user mengisi Nama Hak Akses dan menyusun hak akses **Maka** hak akses custom dapat disusun secara interaktif. · Sumber: TMS.S021-R05 poin 3
- **AC-017** (REQ-021) — **Diberikan** form Tambah Sub User terisi **Ketika** user klik "Batal" **Maka** tampil alert konfirmasi. · Sumber: TMS.S021-R05 poin 4

### SEC-04 · Sub User — Edit & Detail
- **AC-018** (REQ-023, REQ-024) — **Diberikan** sub user tersimpan **Ketika** user membuka Edit **Maka** form sama dengan form tambah, terisi data terakhir, dan password tidak ditampilkan kecuali icon mata diklik. · Sumber: TMS.S021-R06 (bagian "Edit Sub User") poin 1–2
- **AC-019** (REQ-025) — **Diberikan** form Edit Sub User **Ketika** user membuka dropdown Status **Maka** tersedia pilihan Aktif/Tidak Aktif dan perubahan dapat disimpan. · Sumber: TMS.S021-R06 (bagian "Edit Sub User") poin 3
- **AC-020** (REQ-026) — **Diberikan** sub user tersimpan **Ketika** user membuka Lihat Detail **Maka** seluruh Informasi Umum + Hak Akses tampil read-only. · Sumber: TMS.S021-R06 (bagian "Detail Sub User") poin 1
- **AC-021** (REQ-027) — **Diberikan** Detail Sub User **Ketika** user me-minimize satu kategori pada tree Hak Akses **Maka** kategori tersebut ter-collapse. · Sumber: TMS.S021-R06 (bagian "Detail Sub User") poin 2

### SEC-05 · Hak Akses — List, Tambah & Default Value
- **AC-022** (REQ-028, REQ-029) — **Diberikan** tab Hak Akses **Ketika** tampil **Maka** tiap baris memiliki Lihat Detail, Edit, Hapus, dan terdapat tombol tambah hak akses. · Sumber: TMS.S021-R13 poin 1–2
- **AC-023** (REQ-030) — **Diberikan** tab Hak Akses **Ketika** user melihat filter **Maka** tersedia filter Nama Hak Akses dan Status (dropdown) dengan button Reset & Terapkan. · Sumber: TMS.S021-R13 poin 3
- **AC-024** (REQ-032) — **Diberikan** data hak akses > 20 **Ketika** halaman dimuat / ganti halaman / ganti jumlah data **Maka** default 20 data dan tanpa loading. · Sumber: TMS.S021-R13 poin 4
- **AC-025** (REQ-033) — **Diberikan** hak akses dipakai oleh sub user **Ketika** list/detail tampil **Maka** tampil ringkasan jumlah modul Akses Penuh, Lihat Saja, Tidak Ada Akses, jumlah notifikasi aktif, dan jumlah Sub User pengguna. · Sumber: TMS.S021-R13 poin 5
- **AC-026** (REQ-034, REQ-035) — **Diberikan** user membuat hak akses baru **Ketika** form terbuka **Maka** FTL, LTL, FCL, LCL tercentang, seluruh modul Akses Penuh, dan seluruh notifikasi aktif. · Sumber: TMS.S021-R11 poin 1–2
- **AC-027** (REQ-036) — **Diberikan** form hak akses **Ketika** user memilih "Terapkan Cepat ke Semua Modul" → Lihat Saja **Maka** seluruh modul menjadi Lihat Saja sekaligus. · Sumber: TMS.S021-R11 poin 3
- **AC-028** (REQ-037) — **Diberikan** shortcut sudah diterapkan **Ketika** user mengubah level salah satu modul secara manual **Maka** perubahan manual diterima. · Sumber: TMS.S021-R11 poin 3

### SEC-06 · Hak Akses — Detail & Edit
- **AC-029** (REQ-038, REQ-039) — **Diberikan** hak akses tersimpan **Ketika** user membuka Detail **Maka** tampil Nama Hak Akses, Deskripsi, Tanggal Buat, Tanggal Diperbarui, Total Sub User, Cakupan Data, ringkasan jumlah akses, dan tree read-only yang dapat di-minimize. · Sumber: TMS.S021-R14 (bagian "Detail Hak Akses") poin 1, 3
- **AC-030** (REQ-040, VAL-008) — **Diberikan** form Edit Hak Akses **Ketika** Nama Hak Akses dikosongkan lalu disimpan **Maka** tidak dapat disimpan dan tampil alert/helper error; Deskripsi boleh kosong. · Sumber: TMS.S021-R14 (bagian "Edit Hak Akses") poin 1; R15 Catatan Umum poin 2
- **AC-031** (REQ-041, REQ-042) — **Diberikan** form Edit Hak Akses **Ketika** tampil **Maka** tersedia shortcut "Terapkan Cepat ke Semua Modul" dan struktur tree sama dengan Buat Hak Akses. · Sumber: TMS.S021-R14 (bagian "Edit Hak Akses") poin 2–3

### SEC-07 · Level akses
- **AC-032** (REQ-043) — **Diberikan** sub user dengan Akses Penuh pada suatu fitur **Ketika** membuka fitur **Maka** dapat Create, Read, Update, Delete. · Sumber: TMS.S021-R07 poin 1
- **AC-033** (REQ-044) — **Diberikan** sub user dengan Lihat Saja **Ketika** membuka fitur **Maka** hanya dapat melihat data, tidak dapat membuat/mengubah/menghapus. · Sumber: TMS.S021-R07 poin 2
- **AC-034** (REQ-045) — **Diberikan** sub user dengan Tidak Ada Akses pada suatu fitur **Ketika** login **Maka** menu fitur disembunyikan dari navigasi dan fitur tidak dapat diakses. · Sumber: TMS.S021-R07 poin 3

### SEC-08 · Struktur modul
- **AC-035** (REQ-046–REQ-054) — **Diberikan** form Buat Hak Akses **Ketika** tree tampil **Maka** modul dan tipe kontrolnya sesuai R08 poin 1–8 (3-level, checkbox Jenis Pengiriman, Cakupan Data hanya pada Order, Penugasan Tracking, Monitoring, Progres Pengiriman, Tracking & Location). · Sumber: TMS.S021-R08 poin 1–8
- **AC-036** (REQ-056, REQ-057) — **Diberikan** tree hak akses **Ketika** tampil **Maka** Manajemen Vendor, Jenis Pengiriman, Order, Penugasan Tracking tampil sebagai item langsung; Dashboard, Pengaturan Akun, Master Wilayah, Master Operasional, Notifikasi tampil sebagai kategori collapsible. · Sumber: TMS.S021-R08 poin 10
- **AC-037** (REQ-047, REQ-048) — **Diberikan** hak akses dengan Jenis Pengiriman hanya FTL **Ketika** sub user bekerja di modul Order **Maka** hanya jenis pengiriman FTL yang dapat diakses/dikerjakan. · Sumber: TMS.S021-R08 poin 2

### SEC-09 · Cakupan Data
- **AC-038** (REQ-059) — **Diberikan** level akses Order = Akses Penuh **Ketika** field Cakupan Data Order tampil **Maka** tampil 2 pilihan "Semua Data" dan "Data Sendiri". · Sumber: TMS.S021-R09 poin 2 (pertama)
- **AC-039** (REQ-060) — **Diberikan** level akses Order = Lihat Saja **Ketika** field Cakupan Data Order tampil **Maka** hanya "Semua Data" yang dapat dipilih dan "Data Sendiri" disable. · Sumber: TMS.S021-R09 poin 2 (pertama)
- **AC-040** (REQ-061) — **Diberikan** level akses Order = Tidak Ada Akses **Ketika** form tampil **Maka** Cakupan Data Order tidak tampil dan modul turunan menampilkan "Semua Data" sebagai teks/badge tetap. · Sumber: TMS.S021-R09 poin 2 (pertama)
- **AC-041** (REQ-062, REQ-063) — **Diberikan** Order = "Semua Data" **Ketika** melihat Cakupan Data Penugasan Tracking, Monitoring, Progres Pengiriman, Tracking & Location **Maka** masing-masing hanya menampilkan "Semua Data" sebagai teks/badge tetap tanpa opsi "Mengikuti Cakupan Data Order". · Sumber: TMS.S021-R09 poin 2 (kedua), 3
- **AC-042** (REQ-064) — **Diberikan** Order = "Data Sendiri" **Ketika** melihat Cakupan Data modul turunan **Maka** tampil toggle "Semua Data" / "Mengikuti Cakupan Data Order". · Sumber: TMS.S021-R09 poin 4
- **AC-043** (REQ-065) — **Diberikan** Order = "Data Sendiri" **Ketika** user mengatur Monitoring = "Semua Data" dan Penugasan Tracking = "Mengikuti Cakupan Data Order" **Maka** kedua pengaturan tersimpan berbeda (independen). · Sumber: TMS.S021-R09 poin 4
- **AC-044** (REQ-066) — **Diberikan** level akses salah satu modul turunan = Tidak Ada Akses **Ketika** form tampil **Maka** field Cakupan Data modul tersebut tidak tampil. · Sumber: TMS.S021-R09 poin 5

### SEC-10 · Notifikasi
- **AC-045** (REQ-067, REQ-068) — **Diberikan** kategori Notifikasi pada hak akses **Ketika** diekspansi **Maka** tampil switch untuk daftar notifikasi R10 dan tidak ada "Lupa Password" / "Ubah Password". · Sumber: TMS.S021-R10; R08 poin 9
- **AC-046** (REQ-069, VAL-010) — **Diberikan** Jenis Pengiriman mencentang minimal FCL atau LCL **Ketika** daftar notifikasi tampil **Maka** "Tahap Pengiriman - Kapal Berlayar" dan "Tahap Pengiriman - Kapal Sandar" tampil. · Sumber: TMS.S021-R10 (bagian "Rule kondisional") poin 1
- **AC-047** (REQ-070, VAL-010) — **Diberikan** Jenis Pengiriman hanya FTL dan/atau LTL **Ketika** daftar notifikasi tampil **Maka** kedua notifikasi Kapal disembunyikan dari daftar. · Sumber: TMS.S021-R10 (bagian "Rule kondisional") poin 2

### SEC-11 · Validasi & Catatan Umum
- **AC-048** (REQ-071, VAL-002) — **Diberikan** Email sudah dipakai sub user lain **Ketika** user menyimpan sub user dengan Email tersebut **Maka** data tidak tersimpan (duplikat ditolak). · Sumber: TMS.S021-R15 poin 1
- **AC-049** (REQ-072, VAL-003) — **Diberikan** Nomor WhatsApp sudah dipakai **Ketika** user menyimpan sub user dengan nomor tersebut **Maka** data tidak tersimpan (duplikat ditolak). · Sumber: TMS.S021-R15 poin 2
- **AC-050** (REQ-073, VAL-009) — **Diberikan** hak akses terpasang pada ≥ 1 Sub User **Ketika** user mencoba menghapusnya **Maka** hak akses tidak terhapus. · Sumber: TMS.S021-R15 poin 3
- **AC-051** (REQ-073) — **Diberikan** hak akses tidak dipakai Sub User mana pun **Ketika** user menghapusnya **Maka** hak akses terhapus dan toast tampil saat kembali ke list. · Sumber: TMS.S021-R13 poin 1; R15 poin 3; R15 Catatan Umum poin 1
- **AC-052** (REQ-074) — **Diberikan** simpan/edit/hapus sub user atau hak akses berhasil **Ketika** kembali ke halaman list **Maka** muncul toast notifikasi. · Sumber: TMS.S021-R15 (bagian "Catatan Umum") poin 1
- **AC-053** (REQ-075) — **Diberikan** field mandatory kosong pada form mana pun di modul ini **Ketika** user menyimpan **Maka** data tidak tersimpan dan tampil alert/helper error. · Sumber: TMS.S021-R15 (bagian "Catatan Umum") poin 2

## 6. State / transisi & matriks Cakupan Data (hanya dari spec)
**Status Sub User**
| Status | Kapan | Sumber |
|---|---|---|
| Aktif | Otomatis saat data sub user disimpan (Tambah) | TMS.S021-R05 poin 2 |
| Aktif ↔ Tidak Aktif | Diubah melalui dropdown Status pada Edit Sub User; efek status tidak disebut (Q-08) | TMS.S021-R06 (bagian "Edit Sub User") poin 3 |

**Matriks Cakupan Data — level akses Order × tampilan modul turunan** (modul turunan = Penugasan Tracking, Dashboard Monitoring, Dashboard Progres Pengiriman, Dashboard Tracking & Location; Dashboard Operasional tidak memiliki Cakupan Data — R08 poin 5)

| Level akses Order | Tampilan Cakupan Data di Order | Pilihan Order | Tampilan Cakupan Data modul turunan (level modul turunan ≠ Tidak Ada Akses) | Modul turunan dengan level Tidak Ada Akses | Sumber |
|---|---|---|---|---|---|
| Akses Penuh | 2 pilihan: "Semua Data", "Data Sendiri" | Semua Data | Teks/badge tetap "Semua Data" (opsi "Mengikuti Cakupan Data Order" dihilangkan) | Field tidak tampil | R09 poin 2 (pertama), 3, 5 |
| Akses Penuh | 2 pilihan: "Semua Data", "Data Sendiri" | Data Sendiri | Toggle "Semua Data" / "Mengikuti Cakupan Data Order" (= Data Sendiri); tiap modul turunan independen | Field tidak tampil | R09 poin 2 (pertama), 4, 5 |
| Lihat Saja | "Tampil 1 pilihan (Semua Data), dan bagian Data Sendiri disable" (Q-10) | Semua Data (satu-satunya pilihan) | Teks/badge tetap "Semua Data" (mengikuti R09 poin 3 untuk Order = Semua Data) | Field tidak tampil | R09 poin 2 (pertama), 3, 5 |
| Tidak Ada Akses | Tidak tampil cakupan data | — | Otomatis hanya menampilkan "Semua Data" sebagai teks/badge tetap | Field tidak tampil | R09 poin 2 (pertama), 5 |

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Order (S011–S013) | Level akses & Cakupan Data (Semua Data / Data Sendiri); Jenis Pengiriman membatasi jenis yang dapat dikerjakan | TMS.S021-R08 poin 2–3; R09 |
| Penugasan Tracking (S015) | Cakupan Data turunan dari Order | TMS.S021-R08 poin 4; R09 poin 2 (kedua) |
| Dashboard Monitoring / Progres Pengiriman / Tracking & Location (S018) | Cakupan Data turunan dari Order | TMS.S021-R08 poin 5; R09 |
| Dashboard Operasional (S014) | Item hak akses tanpa Cakupan Data | TMS.S021-R08 poin 5 |
| Manajemen Vendor (S003) | Kontrol 3-level tanpa Cakupan Data | TMS.S021-R08 poin 1 |
| Master Drop Point, Waktu Perjalanan, Unit, Sopir (S006, S008, S009, S010) dan Master Wilayah, Pelabuhan, Pelayaran | Item hak akses 3-level; Master Customer Service (S024) tidak tercantum | TMS.S021-R08 poin 7–8; spec-index §4 no.12 |
| Pusat Notifikasi (S022) | Daftar notifikasi & kondisional Kapal Berlayar/Sandar; Lupa/Ubah Password tidak tampil di list | TMS.S021-R10; TMS.S022-R02; spec-index §3 |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | R08 poin 9 merujuk "Bab 8", R13 poin 3 merujuk "Bab 1" — struktur dokumen di luar file. Apakah "Bab 1" = R04 poin 4 dan "Bab 8" = R10? | R08 poin 9; R13 poin 3 | REQ-031, REQ-055 | §4 no.32 |
| Q-02 | R14 Detail: penomoran rusak "ringkasan Total 2. 2. Akses" dan poin 2 hilang. | R14 | REQ-038 | §4 no.32 |
| Q-03 | Master Operasional tidak mencantumkan Master Customer Service (S024). | R08 poin 8 | REQ-054 | §4 no.12 |
| Q-04 | R02 poin 3 "sub user dapat membuat hak akses asalkan memiliki akses pengaturan akun" vs R05 poin 1 (Akses Penuh pada item "Sub User"). Untuk membuat hak akses, level apa dan pada item mana ("Sub User" atau "Hak Akses")? | R02 poin 3; R05 poin 1; R08 poin 6 | REQ-003, REQ-011 | Baru |
| Q-05 | Field filter pada tab Sub User - Daftar tidak disebut. | R04 poin 4 | REQ-007, REQ-008 | Baru |
| Q-06 | Tipe input & opsi "Bagian Staff" tidak disebut. | R05 poin 2 | REQ-015 | Baru |
| Q-07 | Aturan Password (panjang/kompleksitas) dan validasi kecocokan Password vs Konfirmasi Password beserta pesannya tidak disebut. | R05 poin 2 | REQ-016 | Baru |
| Q-08 | Efek Status "Tidak Aktif" pada sub user tidak disebut; filter "Status" pada tab Hak Akses memakai status yang tidak didefinisikan untuk hak akses (tidak ada field status di R14). | R06 poin 3; R13 poin 3 | REQ-025, REQ-030 | Baru |
| Q-09 | Perilaku Hapus (konfirmasi sebelum hapus sub user/hak akses) dan tampilan saat menghapus hak akses yang masih dipakai (pesan/aksi disable) tidak disebut. | R04 poin 2; R13 poin 1; R15 poin 3 | REQ-005, REQ-073 | Baru |
| Q-10 | Order "lihat saja": "Tampil 1 pilihan (Semua Data), dan bagian Data Sendiri disable" — apakah "Data Sendiri" tetap terlihat dalam kondisi disable atau tidak ditampilkan? | R09 poin 2 (pertama) | REQ-060 | Baru |
| Q-11 | Item Dashboard (Monitoring, Progres Pengiriman, Tracking & Location, Operasional) tidak disebut memiliki kontrol 3-level, padahal R09 poin 5 mensyaratkan level akses modul turunan. | R08 poin 5; R09 poin 5 | REQ-051, REQ-066 | Baru |
| Q-12 | "Tempat lain yang relevan" untuk Jenis Pengiriman tidak dirinci; apakah minimal satu jenis wajib dicentang? | R08 poin 2 | REQ-048 | Baru |
| Q-13 | Pengaturan Akun berlaku untuk shipper saja atau juga vendor? Daftar notifikasi R10 sama dengan list Shipper S022-R02, sedangkan list Vendor S022-R03 berbeda (mis. "Order Baru"). | R10; S022-R02/R03 | REQ-067 | Baru |
| Q-14 | Detail Hak Akses menampilkan satu "Cakupan Data" padahal Cakupan Data diatur per modul (Order + modul turunan) — nilai apa yang ditampilkan? | R14 (bagian "Detail Hak Akses") poin 1 | REQ-038 | Baru |
| Q-15 | Default "sesuai requirement" (R11 poin 2) tidak merujuk requirement tertentu; apakah shortcut "Terapkan Cepat ke Semua Modul" juga memengaruhi Jenis Pengiriman, Cakupan Data, dan Notifikasi? | R11 poin 2–3 | REQ-035, REQ-036 | Baru |
| Q-16 | Hak/perlakuan "Admin Utama" (apakah dapat diedit/dihapus/dinonaktifkan oleh sub user lain) tidak didefinisikan. | R05 poin 1 | REQ-011 | Baru |
| Q-17 | Teks alert konfirmasi (Batal/Simpan), toast, dan pesan error (format email, duplikat Email/WhatsApp) tidak diberikan. | R05 poin 4; R15 | REQ-021, REQ-022, REQ-071, REQ-072, REQ-074 | Baru |

## 9. Catatan testability (bukan requirement)
- Notifikasi "Lupa Password" dan "Ubah Password" berjalan di belakang (Email & Whatsapp menurut S022-R02) — verifikasi butuh akses email/WhatsApp.
- Verifikasi level akses & Cakupan Data membutuhkan login sebagai sub user dengan kombinasi hak akses berbeda serta data order milik user lain.

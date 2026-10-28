# TMS.S021 — Pengaturan Akun

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 132–146.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S021 |
| PIC | EL |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-15 |
| Jenis Fitur / No Desain (kolom E) | 165. Daftar Sub User; No Desain: 165 - 174 |
| Jumlah blok rule | 15 |

## Cakupan (kolom B)

```
Pengaturan Akun
1. List dan Filter
2. Sub user dan hak akses
3. Form tambah, edit, detail, hapus sub user
4. Form tambah, edit, detail, hapus hak akses
```

## Rincian spesifikasi

### TMS.S021-R01 · Pendahuluan

Ref: `Spek TMS-S!A132:I132` · No: 1 · Tipe: Pendahuluan · Kolom E: 165. Daftar Sub User · Spesifikasi Selesai: 2026-07-15

```text
Fitur ini menjelasakan proses pembuatan sub user beserta hak akses nya
```

### TMS.S021-R02 · Rule umum Pengaturan Akun:

Ref: `Spek TMS-S!A133:I133` · No: 2 · Tipe: Rule · Kolom E: No Desain: 165 - 174 · Spesifikasi Selesai: 2026-07-15

```text
Rule umum Pengaturan Akun:
1. Pada menu pengaturan di dalamnya terdapat 2 tab terpisah yakni:
- Sub User 
- Hak Akses
2. Pada tab menu sub user bisa menggunakan hak akses yang sudah dibuat sebelumnya, atau membuat hak akses baru 
3. sub user dapat membuat hak akses asalkan memiliki akses pengaturan akun
```

### TMS.S021-R03 · Sub user

Ref: `Spek TMS-S!A134:I134` · No: 3 · Tipe: (kosong) · Spesifikasi Selesai: 2026-07-15

```text
Sub user
```

### TMS.S021-R04 · Tab Sub User - Daftar

Ref: `Spek TMS-S!A135:I135` · No: 4 · Tipe: Rule · Spesifikasi Selesai: 2026-07-15

```text
Tab Sub User - Daftar Terdapat rule:

1. Halaman tampil default saat membuka menu Pengaturan Akun.
2. Tiap baris data dapat: Lihat Detail, Edit, Hapus.
3. Terdapat button "+ Tambah Sub User".
4. Pada filter Button "Reset" mengosongkan filter & mengembalikan tabel ke kondisi default; button "Terapkan" menampilkan data sesuai filter.
5. Default 20 data per halaman, dapat diatur jumlahnya. Perubahan jumlah data per halaman maupun pindah halaman (next page) tidak menampilkan loading state.
```

### TMS.S021-R05 · Tambah Sub User

Ref: `Spek TMS-S!A136:I136` · No: 5 · Tipe: Rule · Spesifikasi Selesai: 2026-07-15

```text
Tambah Sub User Terdapat rule:

1. Sub user dapat menambah dan mengelola sub user lain selama memiliki hak akses "Sub User" dengan level Akses Penuh pada modul Pengaturan Akun (bukan terbatas hanya untuk Admin Utama)
2. Field Informasi Umum:
- Nama Sub User => wajib, text.
- Email => wajib, validasi format email.
- Nomor WhatsApp => wajib, input angka.
- Bagian Staff => wajib
- Password & Konfirmasi Password => wajib, tersedia toggle show/hide (icon mata).
- Status otomatis "Aktif" saat data disimpan.
3. Section Hak Akses - 2 pilihan:
- Pilih Hak Akses => pilih template hak akses yang sudah ada via dropdown. Setelah dipilih, sistem menampilkan preview seluruh hak akses dari template tersebut dalam kondisi read-only.
- Buat Hak Akses => user mengisi Nama Hak Akses (wajib) dan menyusun hak akses baru secara custom & interaktif
4. Button: Batal (alert konfirmasi), Simpan (alert konfirmasi, data baru muncul di list).
```

### TMS.S021-R06 · Edit Sub User + Detail Sub User

Ref: `Spek TMS-S!A137:I137` · No: 6 · Tipe: Rule · Spesifikasi Selesai: 2026-07-15

```text
Edit Sub User Terdapat rule:

1. Form edit sama seperti form tambah, data terisi sesuai data terakhir tersimpan.
2. Password default tidak ditampilkan, dapat dilihat dengan klik icon mata.
3. Field Status dapat diedit melalui dropdown (Aktif/Tidak Aktif).

Detail Sub User Terdapat rule:

1. Menampilkan seluruh data yang diinput saat Tambah/Edit Sub User (Informasi Umum + Hak Akses), bersifat read-only.
2. Hak Akses ditampilkan dalam struktur tree, dapat di-minimize per kategori.
```

### TMS.S021-R07 · Level Hak Akses

Ref: `Spek TMS-S!A138:I138` · No: 7 · Tipe: Rule · Spesifikasi Selesai: 2026-07-15

```text
 Level Hak Akses

1. Akses Penuh => dapat melakukan seluruh operasi (Create, Read, Update, Delete) pada fitur terkait.
2. Lihat Saja => hanya dapat melihat data, tidak dapat membuat/mengubah/menghapus.
3. Tidak Ada Akses => tidak dapat mengakses fitur ini sama sekali; menu disembunyikan dari navigasi.
```

### TMS.S021-R08 · Struktur Modul Hak Akses:

Ref: `Spek TMS-S!A139:I139` · No: 8 · Tipe: Rule · Spesifikasi Selesai: 2026-07-15

```text
Struktur Modul Hak Akses:

1. Manajemen Vendor => kontrol 3-level (Akses Penuh/Lihat Saja/Tidak Ada Akses), tanpa Cakupan Data.
2. Jenis Pengiriman => bukan kontrol 3-level, melainkan checkbox multi-select: FTL, LTL, FCL, LCL. Menentukan jenis pengiriman apa saja yang dapat diakses/dikerjakan sub user pada modul Order & tempat lain yang relevan. 
3. Order => kontrol 3-level + Cakupan Data (Semua Data / Data Sendiri).
4. Penugasan Tracking => kontrol 3-level + Cakupan Data mengikuti rule turunan dari Order.
5. Dashboard (kategori, dapat di-minimize) 
=> Monitoring: memiliki Cakupan Data turunan dari Order
=> Progres Pengiriman: memiliki Cakupan Data turunan dari Order
=> Tracking & Location: memiliki Cakupan Data turunan dari Order
=> Operasional: tidak memiliki Cakupan Data.
6. Pengaturan Akun (kategori) => Sub User, Hak Akses - masing-masing kontrol 3-level, tanpa Cakupan Data.
7. Master Wilayah (kategori) => Master Provinsi, Master Kota, Master Kecamatan, Master Kelurahan - masing-masing kontrol 3-level, tanpa Cakupan Data.
8. Master Operasional (kategori) => Master Drop Point, Master Pelabuhan, Master Pelayaran, Master Waktu Perjalanan, Master Unit, Master Sopir - masing-masing kontrol 3-level, tanpa Cakupan Data.
9. Notifikasi (kategori) => switch on/off per jenis notifikasi - lihat Bab 8 untuk daftar & rule kondisionalnya.
10. Catatan: Manajemen Vendor, Jenis Pengiriman, Order, dan Penugasan Tracking tampil sebagai item langsung (tidak dalam kategori collapsible), sedangkan Dashboard, Pengaturan Akun, Master Wilayah, Master Operasional, dan Notifikasi tampil sebagai kategori collapsible (bisa di-minimize).
```

### TMS.S021-R09 · Rule Cakupan Data (Order → Penugasan Tracking & Dashboard)

Ref: `Spek TMS-S!A140:I140` · No: 9 · Tipe: Rule · Spesifikasi Selesai: 2026-07-15

```text
Rule Cakupan Data (Order → Penugasan Tracking & Dashboard) Terdapat rule:

1. Cakupan Data pada Order memiliki 2 pilihan: Semua Data atau Data Sendiri.
2. Cakupan data  yang tampil pada order:
- Tampil 2 pilihan (Semua Data dan Data Sendiri) => Saat akses order "akses penuh" 
- Tampil 1 pilihan (Semua Data), dan bagian Data Sendiri disable => Saat akses order "lihat saja"
- Tidak tampil cakupan data => Saat akses order "Tidak ada Akses". Otomatis pada modul turunan hanya menampilkan "Semua Data" sebagai teks/badge tetap
2. Cakupan Data pada Order memengaruhi tampilan Cakupan Data pada modul turunannya: Penugasan Tracking, serta Dashboard (Monitoring, Progres Pengiriman, dan Tracking & Location.)
3. Saat Order = "Semua Data": field Cakupan Data pada seluruh modul turunan tidak lagi berupa pilihan/toggle - hanya menampilkan "Semua Data" sebagai teks/badge tetap (opsi "Mengikuti Cakupan Data Order" dihilangkan, karena sudah pasti semua data).
4. Saat Order = "Data Sendiri": field Cakupan Data pada modul turunan berupa toggle 2 pilihan: "Semua Data" atau "Mengikuti Cakupan Data Order" (mengikuti berarti = Data Sendiri). Masing-masing modul turunan dapat diatur berbeda-beda (independen satu sama lain).
5. Field Cakupan Data pada modul turunan hanya relevan/tampil apabila level akses modul tersebut bukan "Tidak Ada Akses".
```

### TMS.S021-R10 · Notifikasi Daftar notifikasi:

Ref: `Spek TMS-S!A141:I141` · No: 10 · Tipe: Rule · Spesifikasi Selesai: 2026-07-15

```text
Notifikasi Daftar notifikasi:

Lupa Password => Jangan ditampilkan pada list, berjalan dibelakang pengirimannya
Ubah Password => Jangan ditampilkan pada list, berjalan dibelakang pengirimannya
Order Selesai
Order Dibatalkan
Order Telah Ditugaskan
Tahap Pengiriman - Berangkat Muat
Tahap Pengiriman - Selesai Muat
Tahap Pengiriman - Kapal Berlayar (kondisional, lihat poin di bawah)
Tahap Pengiriman - Kapal Sandar (kondisional, lihat poin di bawah)
Tahap Pengiriman - Berangkat Bongkar
Tahap Pengiriman - Selesai Bongkar
Tahap Pengiriman - Alihkan Armada
Reminder Kendala Armada
Reminder Armada Tidak Update
Reminder Armada Melewati SLA
Reminder Armada Keluar Jalur
Reminder Armada Berpotensi Terlambat


Rule kondisional:
1. Notifikasi "Tahap Pengiriman - Kapal Berlayar" dan "Tahap Pengiriman - Kapal Sandar" hanya ditampilkan apabila minimal salah satu dari FCL atau LCL dicentang pada bagian hak akses Jenis Pengiriman.
2. Apabila hanya FTL dan/atau LTL yang dicentang (FCL & LCL tidak dicentang sama sekali), kedua notifikasi tersebut disembunyikan/dihilangkan dari daftar.
```

### TMS.S021-R11 · Default Value saat Membuat Hak Akses Baru

Ref: `Spek TMS-S!A142:I142` · No: 11 · Tipe: Rule · Spesifikasi Selesai: 2026-07-15

```text
Default Value saat Membuat Hak Akses Baru Terdapat rule:

1. Default Jenis Pengiriman: seluruh jenis terpilih (FTL, LTL, FCL, LCL tercentang semua).
2. Default level akses: Akses Penuh untuk seluruh modul, dan seluruh notifikasi aktif, sesuai requirement.
3. Tombol shortcut "Terapkan Cepat ke Semua Modul": Akses Penuh / Lihat Saja / Tidak Ada Akses - menerapkan level akses yang sama ke seluruh modul sekaligus. User tetap dapat mengubah/custom secara manual setelah menggunakan shortcut ini.
```

### TMS.S021-R12 · Hak Akses

Ref: `Spek TMS-S!A143:I143` · No: 12 · Tipe: (kosong) · Spesifikasi Selesai: 2026-07-15

```text
Hak Akses
```

### TMS.S021-R13 · Tab List Hak Akses

Ref: `Spek TMS-S!A144:I144` · No: 13 · Tipe: Rule · Spesifikasi Selesai: 2026-07-15

```text
Tab List Hak Akses Terdapat rule:

1. Tiap baris data dapat: Lihat Detail, Edit, Hapus.
2. Terdapat tombol tambah hak akses langsung dari tab ini, dengan rule yang sama dengan proses tambah hak akses pada tab "sub user"
3. Filter: Nama Hak Akses, Status (dropdown). Button Reset & Terapkan mengikuti pola yang sama seperti Bab 1.
4. Default 20 data per halaman, dapat diatur, tanpa loading saat ganti halaman/jumlah data.
5. Tiap baris & halaman Detail menampilkan ringkasan jumlah: total modul dengan Akses Penuh, Lihat Saja, Tidak Ada Akses, dan jumlah notifikasi aktif, serta jumlah Sub User yang menggunakan hak akses tersebut.
```

### TMS.S021-R14 · Detail Hak Akses + Edit Hak Akses

Ref: `Spek TMS-S!A145:I145` · No: 14 · Tipe: Rule · Spesifikasi Selesai: 2026-07-15

```text
Detail Hak Akses Terdapat rule:

1. Menampilkan Informasi Umum: Nama Hak Akses, Deskripsi, Tanggal Buat, Tanggal Diperbarui, Total Sub User (pengguna hak akses ini), Cakupan Data, dan ringkasan Total 2. 2. Akses (jumlah Akses Penuh/Lihat Saja/Tidak Ada/Notifikasi).
3. Hak Akses ditampilkan dalam struktur tree, dapat di-minimize per kategori, bersifat read-only.

Edit Hak Akses Terdapat rule:

1. Field: Nama Hak Akses (wajib, text), Deskripsi (opsional, textarea).
2. Tersedia shortcut "Terapkan Cepat ke Semua Modul".
3. Struktur tree & rule sama dengan proses Buat Hak Akses.
```

### TMS.S021-R15 · Validasi Data & Keamanan:

Ref: `Spek TMS-S!A146:I146` · No: 15 · Tipe: Rule · Spesifikasi Selesai: 2026-07-15

```text
Validasi Data & Keamanan:

1. Email tidak boleh duplikat.
2. Nomor WhatsApp tidak boleh duplikat.
3. Data Hak Akses tidak dapat dihapus jika sudah digunakan (masih terpasang pada minimal 1 Sub User).

Catatan Umum:

1. Setiap berhasil simpan/edit/hapus data, muncul toast notifikasi saat kembali ke halaman list.
2. Data mandatory yang belum terisi tidak dapat disimpan, dan menampilkan alert/helper error.
```

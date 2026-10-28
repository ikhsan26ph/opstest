# TMS.S025 — Pembatasan Pajak dan KIR Armada

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 171–182.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S025 |
| PIC | EL |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-31 |
| Jenis Fitur / No Desain (kolom E) | 191. Pengaturan Sistem Pembatasan Kelayakan Armada; No Desain: 191 - 200; Desain Pop Up Alert |
| Jumlah blok rule | 12 |

## Cakupan (kolom B)

```
Pembatasan Pajak dan KIR Armada
1. Pemilihan armada dapat dibatasi/diberi alert berdasarkan masa berlaku pajak dan KIR
2. Setting batasan pajak dan KIR untuk penggunaan armada
3. Form Pengisian 
4. Desain Pop Up
```

## Rincian spesifikasi

### TMS.S025-R01 · Pendahuluan

Ref: `Spek TMS-S!A171:I171` · No: 1 · Tipe: Pendahuluan · Kolom E: 191. Pengaturan Sistem Pembatasan Kelayakan Armada · Spesifikasi Selesai: 2026-07-31

```text
Fitur ini menjelasakan adanya pembatasan armada untuk bisa jalan, saat KIR atau Pajak nya habis
```

### TMS.S025-R02 · Ketentuan Umum

Ref: `Spek TMS-S!A172:I172` · No: 2 · Tipe: Rule · Kolom E: No Desain: 191 - 200 · Spesifikasi Selesai: 2026-07-31

```text
Ketentuan Umum Terdapat rules:

1. Fitur memeriksa masa berlaku dokumen armada (KIR dan Pajak/STNK) pada saat proses penugasan.
2. Pengaturan dilakukan oleh Shipper melalui menu Pengaturan Sistem, pada section Pembatasan Kelayakan Armada.
3. Pengaturan bersifat global, berlaku untuk seluruh vendor dan seluruh armada => yang pengelola nya vendor 
4. Data masa berlaku dokumen tetap diinput oleh vendor pada Master Armada. Shipper tidak dapat mengubah data tersebut.
5. Perhitungan selisih tanggal menggunakan satuan hari kalender penuh dengan mengabaikan jam, timezone Asia/Jakarta.
```

### TMS.S025-R03 · Pengaturan Sistem — Pembatasan Kelayakan Armada

Ref: `Spek TMS-S!A173:I173` · No: 3 · Tipe: Rule · Spesifikasi Selesai: 2026-07-31

```text
Pengaturan Sistem — Pembatasan Kelayakan Armada terdapat rules:

1. Section berada di halaman Pengaturan Sistem dan dapat di-collapse seperti section lainnya.

2. Field Dokumen yang Diperiksa berupa checkbox:
- Pilihan => KIR & Pajak (STNK)
- Wajib dipilih minimal 1 dokumen bila Mode Pengecekan bukan Tidak Ada Pengecekan.
- Dokumen yang tidak dicentang tidak diperiksa, tidak menghasilkan badge, dan tidak menghasilkan reminder.

3. Field Mode Pengecekan berupa radio, wajib dipilih, dengan 3 pilihan:
- Armada Dibatasi => Armada dengan dokumen yang tidak memenuhi syarat tidak dapat dipilih saat penugasan. => Data masa berlaku dokumen pada Master Armada menjadi wajib. => Badge status dokumen tampil pada dropdown armada. => Reminder dikirim.
- Peringatan => Armada tetap dapat dipilih, namun sistem menampilkan alert kedaluwarsa. => Data masa berlaku dokumen pada Master Armada menjadi wajib. => Badge status dokumen tampil pada dropdown armada. => Reminder dikirim.
- Tidak Ada Pengecekan => Sistem tidak memeriksa masa berlaku dokumen sama sekali. => Data masa berlaku dokumen pada Master Armada tidak wajib. => Badge status dokumen tidak tampil pada dropdown armada. => Reminder tidak dikirim.

4. Saat Mode Pengecekan = Tidak Ada Pengecekan, seluruh field di bawahnya disembunyikan, yaitu Dasar Perhitungan FTL & LTL, Dasar Perhitungan FCL & LCL, Toleransi Hari, Waktu Reminder, Penerima Reminder, dan Jenis Notifikasi. Nilai terakhir tetap disimpan agar tidak hilang bila mode dikembalikan.

5. Field Dasar Perhitungan FTL & LTL berupa radio, wajib dipilih, dengan 2 pilihan:
- Target Waktu Perjalanan => dokumen harus masih berlaku sampai muatan tiba di lokasi bongkar. Nilai target waktu perjalanan diambil dari data order.
- Tanggal Permintaan Muat => dokumen harus masih berlaku pada saat armada melakukan proses muat.

6. Field Dasar Perhitungan FCL & LCL hanya memiliki 1 pilihan yaitu Tanggal Permintaan Muat / Bongkar, dan bersifat terpilih otomatis serta tidak dapat diubah. Pengiriman via kontainer tidak memiliki target waktu perjalanan pada order.

7. Field Toleransi Hari bersifat opsional, input berupa angka dengan satuan hari, nilai minimal 0. Penempatan field mengikuti pilihan Dasar Perhitungan FTL & LTL:
- Bila Dasar Perhitungan FTL & LTL = Target Waktu Perjalanan: => Toleransi Hari tidak tampil pada section FTL & LTL, karena durasi perjalanan sudah termasuk dalam target waktu perjalanan. => Toleransi Hari tampil sebagai field tersendiri pada section FCL & LCL dan dapat diisi bebas.
- Bila Dasar Perhitungan FTL & LTL = Tanggal Permintaan Muat: => Toleransi Hari tampil sebagai field pada section FTL & LTL. => Toleransi Hari tidak tampil sebagai field pada section FCL & LCL. Nilainya mengikuti Toleransi Hari FTL & LTL dan ditampilkan sebagai informasi read-only.

8. Setiap Dasar Perhitungan menampilkan kotak contoh perhitungan. Nilai pada contoh mengikuti isi field secara dinamis, meliputi tanggal contoh, nilai toleransi atau target waktu perjalanan, dan hasil minimal akhir berlaku dokumen.

9. Field Waktu Reminder berupa daftar input H- yang dapat ditambah:
- Wajib terdapat minimal 1 baris.
- Default terisi 3 baris => H-30, H-14, H-7.
- Baris tambahan ditambahkan melalui button tambah.
- Baris dapat dihapus, kecuali bila hanya tersisa 1 baris.
- Input berupa angka bulat, nilai minimal 0.
- Nilai antar baris tidak boleh duplikat.
- Nilai wajib diurutkan dari yang terlama atau terbesar ke yang terdekat atau terkecil. Bila urutan tidak sesuai, tampilkan helper error.

10. Field Penerima Reminder berupa segmented, wajib dipilih:
- Pilihan => Shipper, Vendor, Shipper & Vendor

11. Field Jenis Notifikasi berupa segmented, wajib dipilih:
- Pilihan => Email, Push Notifikasi, Email & Push Notifikasi

12. Jika field required tidak diisi, tampilkan helper error dan border field berubah ke warna error.
13. Perubahan pengaturan berlaku segera setelah disimpan, dan tidak mengubah penugasan yang sudah tersimpan sebelumnya.
```

### TMS.S025-R04 · Perhitungan Batas Akhir Berlaku Dokumen

Ref: `Spek TMS-S!A174:I174` · No: 4 · Tipe: Rule · Spesifikasi Selesai: 2026-07-31

```text
Perhitungan Batas Akhir Berlaku Dokumen Terdapat rules:

1. Sistem menghitung tanggal batas untuk setiap penugasan, lalu membandingkannya dengan tanggal akhir berlaku dokumen armada.
2. Armada dinyatakan memenuhi syarat bila tanggal akhir berlaku dokumen lebih besar atau sama dengan tanggal batas.
3. Rumus tanggal batas:
- Order FTL & LTL dengan Dasar Perhitungan Target Waktu Perjalanan => tanggal permintaan muat + target waktu perjalanan dari order.
- Order FTL & LTL dengan Dasar Perhitungan Tanggal Permintaan Muat => tanggal permintaan muat + Toleransi Hari.
- Order FCL & LCL => tanggal permintaan yang dinilai + Toleransi Hari.
4. Untuk order FCL & LCL, tanggal permintaan yang dipakai mengikuti jenis penugasannya:
- Penugasan muat => memakai tanggal permintaan muat.
- Penugasan bongkar => memakai tanggal permintaan bongkar.
5. Pengecekan dilakukan terhadap seluruh dokumen yang dicentang pada Dokumen yang Diperiksa. Armada dinyatakan tidak memenuhi syarat bila salah satu dokumen tidak memenuhi.
6. Bila tanggal akhir berlaku dokumen kosong, armada dinyatakan Data Belum Lengkap dan belum bisa dilakukan perhitungan rumus.
```

### TMS.S025-R05 · Status Dokumen Armada - Penugasan Tracking

Ref: `Spek TMS-S!A175:I175` · No: 5 · Tipe: Rule · Spesifikasi Selesai: 2026-07-31

```text
Status Dokumen Armada - Penugasan Tracking Terdapat rules:

1. Status dihitung sistem secara real-time dan tidak disimpan sebagai kolom statis.
2. Ketentuan status per dokumen:
- Berlaku => tanggal akhir berlaku dokumen lebih besar atau sama dengan tanggal batas. Badge warna hijau.
- Segera Berakhir => tanggal akhir berlaku dokumen masih lebih besar atau sama dengan tanggal hari ini, namun lebih kecil dari tanggal batas. Badge warna kuning.
- Tidak Berlaku => tanggal akhir berlaku dokumen lebih kecil dari tanggal hari ini. Badge warna merah.
- Data Belum Lengkap => tanggal akhir berlaku dokumen kosong. Badge warna kuning.
3. Label badge mengikuti nama dokumennya, contoh KIR Berlaku, KIR Segera Berakhir, KIR Tidak Berlaku, dan Data KIR Belum Lengkap.
4. Bila lebih dari satu dokumen diperiksa dan lebih dari satu dokumen bermasalah, badge ditampilkan per dokumen yang bermasalah. Urutan prioritas tampil dari yang paling parah => Data Belum Lengkap, Tidak Berlaku, Segera Berakhir.
5. Bila seluruh dokumen yang diperiksa berstatus Berlaku, cukup tampilkan satu badge Berlaku.
6. Status ini tampil hanya saat mode pengecekkan Armada Dibatasi atau Peringatan
```

### TMS.S025-R06 · Master Armada (sisi vendor)

Ref: `Spek TMS-S!A176:I176` · No: 6 · Tipe: Rule · Spesifikasi Selesai: 2026-07-31

```text
Master Armada (sisi vendor) Terdapat rules:

1. Field Akhir Berlaku KIR dan Akhir Berlaku Pajak menjadi wajib diisi bila Mode Pengecekan = Armada Dibatasi atau Peringatan, dan dokumen tersebut dicentang pada Dokumen yang Diperiksa.
2. Ketentuan wajib berlaku pada proses tambah armada, edit armada, dan import data armada.
3. Field yang berubah menjadi wajib menampilkan tanda required beserta keterangan penyebabnya.
4. Data armada existing yang tanggalnya kosong tidak dipaksa untuk terisi. Armada tersebut berstatus Data Belum Lengkap dan mengikuti perlakuan mode yang berlaku pada saat penugasan.
5. Armada dengan dokumen kedaluwarsa tetap dapat disimpan. Sistem tidak memblokir proses simpan pada Master Armada. Pembatasan hanya berlaku pada proses penugasan.
6. Template import master armada akhirnya juga mengikuti rule proses tambah armada (sesuai mode pengecekkan)
```

### TMS.S025-R07 · Penugasan Tracking - Pilih Armada

Ref: `Spek TMS-S!A177:I177` · No: 7 · Tipe: Rule · Spesifikasi Selesai: 2026-07-31

```text
Penugasan Tracking - Pilih Armada Terdapat rules:

1. Pengecekan dijalankan pada 2 titik yaitu saat dropdown armada dimuat, dan saat button Simpan ditekan.
2. Dasar perhitungan yang dipakai mengikuti jenis order yang dipilih, yaitu FTL, LTL, FCL, atau LCL.
3. Badge status dokumen ditampilkan pada setiap item di dropdown armada.
4. Perilaku dropdown armada per mode:
- Armada Dibatasi => armada yang tidak memenuhi syarat dan armada dengan data belum lengkap tetap tampil pada dropdown, seluruh armada tetap dapat dipilih. Setelah armada dipilih, sistem menampilkan alert sesuai status dokumennya.
- Peringatan => seluruh armada tetap dapat dipilih. Setelah armada dipilih, sistem menampilkan alert sesuai status dokumennya.
- Tidak Ada Pengecekan => dropdown tampil tanpa badge apa pun dan tanpa pembatasan.
5. Pengecekan dilakukan per baris armada. Bila satu penugasan berisi lebih dari satu armada, setiap baris dievaluasi terpisah.
6. Pada mode Armada Dibatasi & Peringatan, user wajib melakukan pengisian data dan konfirmasi pada pop up peringatan sebelum penugasan dapat disimpan.
7. Saat button Simpan ditekan, sistem mengevaluasi ulang seluruh armada yang dipilih. Bila terdapat armada yang berubah menjadi tidak memenuhi syarat pada mode Armada Dibatasi, proses simpan dibatalkan dan tampil alert error.
8. Opsi Isi Data Manual pada field Armada tidak memiliki data dokumen, sehingga perlakuannya:
- Mode Armada Dibatasi => opsi Isi Data Manual tampil disable, dengan keterangan bahwa armada wajib dipilih dari master.
- Mode Peringatan => opsi Isi Data Manual tampil disable, dengan keterangan bahwa armada wajib dipilih dari master.
- Mode Tidak Ada Pengecekan => tidak ada perubahan perilaku.
9. Perubahan pengaturan tidak mencabut penugasan yang sudah tersimpan. Armada yang dokumennya kedaluwarsa di tengah perjalanan tidak dihentikan sistem.
```

### TMS.S025-R08 · Pop Up alert

Ref: `Spek TMS-S!A178:I178` · No: 8 · Tipe: Rule · Spesifikasi Selesai: 2026-07-31

```text
Pop Up alert Terdapat rules:

1. Seluruh copy, judul, dan susunan button mengikuti file desain Katalog Pop Up Kelayakan Armada pada claude.
2. Pop up yang dibutuhkan minimal mencakup kondisi:
- Armada tidak dapat dipilih karena dokumen tidak berlaku, pada mode Armada Dibatasi.
- Armada tidak dapat dipilih karena data dokumen belum lengkap, pada mode Armada Dibatasi.
- Peringatan dokumen tidak berlaku, dengan konfirmasi untuk tetap melanjutkan, pada mode Peringatan.
- Peringatan dokumen segera berakhir sebelum tanggal batas, dengan konfirmasi untuk tetap melanjutkan, pada mode Peringatan.
- Peringatan data dokumen belum lengkap, dengan konfirmasi untuk tetap melanjutkan, pada mode Peringatan.
- Konfirmasi penyimpanan perubahan Mode Pengecekan pada Pengaturan Sistem.
3. Pop up peringatan wajib memuat aksi konfirmasi. Tanpa konfirmasi, penugasan tidak dapat disimpan.
```

### TMS.S025-R09 · Reminder Masa Berlaku Dokumen

Ref: `Spek TMS-S!A179:I179` · No: 9 · Tipe: Rule · Spesifikasi Selesai: 2026-07-31

```text
Reminder Masa Berlaku Dokumen Terdapat rules:

1. Sistem menjalankan job pengecekan sekali sehari.
2. Job hanya berjalan bila Mode Pengecekan bukan Tidak Ada Pengecekan.
3. Job memeriksa seluruh armada dari seluruh vendor, untuk setiap dokumen yang dicentang pada Dokumen yang Diperiksa.
4. Armada masuk ke dalam reminder bila salah satu kondisi terpenuhi:
- Sisa hari menuju tanggal akhir berlaku dokumen tepat sama dengan salah satu nilai pada Waktu Reminder.
- Tanggal akhir berlaku dokumen sudah terlewati, dan selisih hari terlewatinya tepat sama dengan salah satu nilai pada Waktu Reminder, dihitung sebagai H+.
5. Penerima reminder mengikuti setting Penerima Reminder:
- Shipper => hanya user shipper, memuat armada dari seluruh vendor.
- Vendor => hanya user vendor pemilik armada, dan hanya memuat armada miliknya sendiri.
- Shipper & Vendor => keduanya, dengan isi sesuai cakupan masing-masing.
6. Tempat pengiriman mengikuti setting Jenis Notifikasi, dengan ketentuan penggabungan yang berbeda:
- Email => digabung per hari. Seluruh armada dan seluruh dokumen yang jatuh tempo pada hari itu dikirim dalam satu email.
- Push Notifikasi => dipisah per deadline. Satu push per tahapan Waktu Reminder, memuat jumlah armada pada tahapan tersebut.
7. Bila pada hari tersebut tidak ada armada yang jatuh tempo, tidak ada email maupun push yang dikirim.
8. Reminder berhenti otomatis begitu tanggal akhir berlaku dokumen diperbarui oleh vendor.
```

### TMS.S025-R10 · Isi Email Reminder

Ref: `Spek TMS-S!A180:I180` · No: 10 · Tipe: Rule · Spesifikasi Selesai: 2026-07-31

```text
Isi Email Reminder Terdapat rules:

1. Subject dan layout mengikuti desain nomor 194.
2. Email memuat tabel dengan kolom:
- No
- Nopol
- Vendor
- Akhir Berlaku Dokumen
- Sisa Waktu
3. Kolom Akhir Berlaku Dokumen diawali nama dokumennya, contoh KIR: 01/08/2026 dan Pajak: 03/08/2026.
4. Satu armada yang memiliki lebih dari satu dokumen jatuh tempo ditampilkan sebagai satu grup baris, dengan kolom No, Nopol, dan Vendor di-merge.
5. Kolom Sisa Waktu:
- Belum terlewati => tampil "n hari lagi".
- Sudah terlewati => tampil "Lewat n hari" dengan warna error.
6. Urutan baris berdasarkan sisa waktu paling kritis di atas, yaitu yang sudah terlewati lebih dahulu, kemudian H- terkecil.
7. Kalimat penutup email menyesuaikan Mode Pengecekan yang berlaku:
- Mode Peringatan => menyebutkan bahwa armada masih dapat ditugaskan namun akan memunculkan peringatan.
- Mode Armada Dibatasi => menyebutkan bahwa armada tidak dapat ditugaskan sampai dokumennya diperbarui.
8. Salam pembuka dan cakupan data menyesuaikan penerima:
- Shipper => memuat data armada dari seluruh vendor.
- Vendor => hanya memuat data armada milik vendor tersebut.
```

### TMS.S025-R11 · Pusat Notifikasi

Ref: `Spek TMS-S!A181:I181` · No: 11 · Tipe: Rule · Spesifikasi Selesai: 2026-07-31

```text
Pusat Notifikasi Terdapat rules:

1. Ditambahkan kategori atau tab baru KIR Armada pada halaman Notifikasi, mengikuti pola tab yang sudah ada.
2. Satu item notifikasi mewakili satu tahapan deadline, memuat jumlah armada yang memerlukan perhatian beserta tahapannya. Contoh: Reminder: Akhir masa berlaku KIR : 3 armada memerlukan perhatian (H+7 lewat akhir masa berlaku).
3. Item notifikasi mengikuti ketentuan existing, yaitu dapat dipilih, ditandai dibaca, dan dihapus.
4. Button Cek Disini mengarahkan ke halaman Master Armada dengan filter Status Dokumen sesuai tahapan notifikasinya.
5. Notifikasi mengikuti ketentuan existing auto terhapus 3 bulan sekali.
6. Notifikasi hanya dibuat untuk role yang termasuk dalam setting Penerima Reminder.
```

### TMS.S025-R12 · Link Desain Pop Up Claude: https://claude.ai/code/artifact/d5a1bce2-9ba1-4540-8703-aac1f019f95d

Ref: `Spek TMS-S!A182:I182` · No: 12 · Tipe: Rule · Kolom E: Desain Pop Up Alert · Spesifikasi Selesai: 2026-07-31

```text
Link Desain Pop Up Claude: https://claude.ai/code/artifact/d5a1bce2-9ba1-4540-8703-aac1f019f95d
```

# TMS.S012 — Order FCL

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 58–68.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S012 |
| PIC | EL |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-02 |
| Jenis Fitur / No Desain (kolom E) | 041. ADMIN - DAFTAR ORDER; No Desain: 041 - 076 |
| Jumlah blok rule | 11 |

## Cakupan (kolom B)

```
Order FCL
1. Tipe pengiriman: normal, multipickup, multidrop, dan multipoint
2. Form tambah, edit order
3. Detail order
4. Batalkan order
5. Akses:
- Vendor: Lihat Detail 
- Shipper: Seluruh Aksi
```

## Rincian spesifikasi

### TMS.S012-R01 · Pendahuluan

Ref: `Spek TMS-S!A58:I58` · No: 1 · Tipe: Pendahuluan · Kolom E: 041. ADMIN - DAFTAR ORDER · Spesifikasi Selesai: 2026-07-02

```text
Pada ID ini menjelaskan terkait proses pengisian data order untuk tipe pengiriman Normal, Mulripickup, Multidrop, dan Multipoin pada Jenis order FCL
```

### TMS.S012-R02 · Akses Vendor & Shipper pada menu Order:

Ref: `Spek TMS-S!A59:I59` · No: 2 · Tipe: Rule · Kolom E: No Desain: 041 - 076 · Spesifikasi Selesai: (kosong)

```text
Akses Vendor & Shipper pada menu Order:
1. Vendor hanya bisa melihat detail data order 
2. Shipper mengakses keseluruhan aksi pada order
```

### TMS.S012-R03 · Ketentuan Umum Order FCL

Ref: `Spek TMS-S!A60:I60` · No: 3 · Tipe: Rule · Spesifikasi Selesai: 2026-07-02

```text
Ketentuan Umum Order FCL terdapat rule:

1. FCL (Full Container Load) merupakan mode pengiriman menggunakan satu kontainer penuh yang khusus untuk satu pengirim saja (tidak digabung dengan pengirim lain).
2. FCL menggunakan satuan "Kontainer" (field: Jenis Kontainer, Jumlah Kontainer).
3. Order dapat diinput manual melalui form "Buat Order", atau secara batch melalui upload template Excel (tombol "Batch Order") => Untuk batch dijelaskan pada modul terpisah
4. Jumlah Kontainer diinput manual oleh shipper tanpa batasan.
5. Pengisian order FCL terbagi menjadi 4 step: 
- Data Pengiriman
- Data Barang 
- Vendor & Harga
- Review.
```

### TMS.S012-R04 · Tipe Pengiriman pada Order FCL

Ref: `Spek TMS-S!A61:I61` · No: 4 · Tipe: Rule · Spesifikasi Selesai: 2026-07-02

```text
Tipe Pengiriman pada Order FCL terdapat rule:

1. Satu order FCL dapat merepresentasikan lebih dari 1 kota asal dan/atau kota tujuan melalui pemilihan Tipe Pengiriman.
2. Tipe Pengiriman yang tersedia: 
- Normal => bagian Data Pengirim & Data Penerima masing-masing hanya 1 baris, tidak dapat ditambah baris.
- Multipickup => bagian Data Pengirim dapat ditambah baris (minimal 2 baris Pick Up), Data Penerima tetap 1 baris.
- Multidrop => bagian Data Penerima dapat ditambah baris (minimal 2 baris Drop Off), Data Pengirim tetap 1 baris.
- Multipoint (kombinasi Multipickup & Multidrop) => bagian Data Pengirim & Data Penerima keduanya dapat ditambah baris (minimal 2 baris Pick Up dan 2 baris Drop Off).
7. Saat Tipe Pengiriman dipilih Multipickup/Multidrop/Multipoint, sistem otomatis menampilkan baris pickup/drop sejumlah minimal yang disyaratkan tanpa perlu user klik "Tambah Baris Input".
8. Tombol delete (hapus baris) baru akan tampil saat kondisi terdapat lebih dari 2 baris drop/pickup.
9. Sistem wajib memvalidasi agar jumlah baris tidak dapat dikurangi hingga di bawah minimal yang disyaratkan tipe pengiriman saat user menghapus baris tambahan.
```

### TMS.S012-R05 · Step 1 - Data Pengiriman Order FCL

Ref: `Spek TMS-S!A62:I62` · No: 5 · Tipe: Rule · Spesifikasi Selesai: 2026-07-02

```text
Step 1 - Data Pengiriman Order FCL terdapat rule:

1. Field yang tersedia:
- Pelabuhan Asal => Dropdown, wajib diisi, data dari Master Pelabuhan
- Pelabuhan Tujuan => Dropdown, wajib diisi, data dari Master Pelabuhan
- Jenis Kontainer => Dropdown, wajib diisi, data dari Master Unit (Jenis Kontainer)
- Jumlah Kontainer => Input angka, wajib diisi
- Tipe Pengiriman => Dropdown, wajib diisi (Normal/Multipickup/Multidrop/Multipoint)
- Metode Pengiriman => Pilihan wajib salah satu (Door to Door / Door to CY / CY to Door / CY to CY))
2. Metode Pengiriman yang dipilih akan memengaruhi tampilan pada menu Penugasan Tracking.
3. Data Pengirim & Data Penerima:
- Drop Point Asal/Tujuan => Dropdown, wajib diisi dan mengambil data dari Master Droppoint.
- Saat Drop Point dipilih, sistem auto-draft: detail alamat, nama perusahaan, Nama PIC, dan No. PIC.
- Field PIC dan No. WhatsApp bersifat draft namun tetap dapat diubah manual oleh user.
4. Jika field wajib tidak diisi: tampilkan helper error & border field berubah warna error.
5. Untuk bisa ke next step wajib mengisi seluruh field. Saat terdapat field yang kosong, tidak dapat klik button selanjutnya => akan tampil alert pada keseluruhan field yang kosong 
6. Dapat menyimpan sebagai draft data yang sudah di isikan, walaupun keseluruhan field belum di isi => tampil pop up konfirmasi alert 
7. Fungsi button:
- Batal: Untuk membatalkan pengisian data => Tampil pop up konfirmasi 
- Draf: Untuk menyimpan sebagai draf dari data yang sudah di isikan
- Selanjutnya: Untuk beralih ke next step
```

### TMS.S012-R06 · Step 2 - Data Barang Order FCL

Ref: `Spek TMS-S!A63:I63` · No: 6 · Tipe: Rule · Spesifikasi Selesai: 2026-07-02

```text
Step 2 - Data Barang Order FCL terdapat rule:

1. Halaman menampilkan card per kontainer sesuai jumlah kontainer yang diinput di Step 1 (contoh: 3 kontainer = Kontainer 1, Kontainer 2, Kontainer 3). Header card menampilkan nomor Kontainer dan jenis Kontainer
2. Kondisi Multipickup, Multidrop, dan Multipoint: seluruh alamat pickup/drop yang diinput di Step 1 auto-terdraft pada setiap kontainer. Penambahan barang dilakukan per kombinasi alamat pada tiap kontainer. Setiap kontainer dalam 1 order wajib melewati seluruh alamat asal & tujuan yang sama
3. Setiap kombinasi alamat pada tiap kontainer menampilkan label Alamat Pick Up dan Alamat Drop Off di bagian atas area input barang.
4. Alamat asal & tujuan pada Data Barang otomatis ter-draft dari Step 1 dan bersifat disable/read only pada step ini.
5. Hanya dapat memasukkan 1 data deskripsi barang di tiap kontainer 
6. Field yang tersedia per card kontainer:
- Deskripsi Barang => Wajib diisi
- Nomor DO => Tidak Wajib diisi, dapat diisi lebih dari satu, dipisahkan dengan koma
- Berat (kg) => Tidak Wajib diisi
- Kubikasi (m3) => Tidak Wajib diisi
7. Sistem menampilkan alert apabila Berat dan/atau Kubikasi yang diinput melebihi kapasitas maksimal kontainer, dengan 3 variasi pesan sesuai kondisi: melebihi Berat saja, melebihi Kubikasi saja, atau melebihi keduanya.
8. Alert kapasitas bersifat informasi saja (tidak memblokir proses) - user tetap dapat melanjutkan ke step berikutnya meski data melebihi kapasitas.
9. Data Barang (koli/karungan) tidak mengikat spesifikasi rinci jenis barang di dalamnya, hanya mencatat pada level koli.
10. Jika field wajib tidak diisi: tampilkan helper error & border field berubah warna error.
11. Untuk bisa ke next step wajib mengisi seluruh field. Saat terdapat field yang kosong, tidak dapat klik button selanjutnya => akan tampil alert pada keseluruhan field yang kosong 
12. Dapat menyimpan sebagai draft data yang sudah di isikan, walaupun keseluruhan field belum di isi => tampil pop up konfirmasi alert 
13. Fungsi button:
- Batal: Untuk membatalkan pengisian data => Tampil pop up konfirmasi 
- Draf: Untuk menyimpan sebagai draf dari data yang sudah di isikan
- Sebelumnya: untuk mundur, atau kembali ke step sebelumnya. Data tetap terdraft (tidak hilang)
- Selanjutnya: Untuk beralih ke next step
```

### TMS.S012-R07 · Step 3 - Vendor & Harga Order FCL

Ref: `Spek TMS-S!A64:I64` · No: 7 · Tipe: Rule · Spesifikasi Selesai: 2026-07-02

```text
Step 3 - Vendor & Harga Order FCL terdapat rule:

1. Field yang tersedia:
- Vendor => Dropdown, wajib diisi
- Tanggal Permintaan Muat => Wajib diisi
- Harga => Wajib diisi, input manual
- Waktu Perjalanan => Pada FCL tidak terdapat inputan waktu perjalanan. Karena menggunakan perhitungan ETA - ETD + 4 hari
2. Waktu perjalanan FCL baru diketahui saat sudah menambahkan penugasan (Isi jadwal kapal). Sehingga waktu perjalanan baru tampil pada informasi detail saat status "Ditugaskan"
4. Untuk Tipe Pengiriman Multipickup/Multidrop/Multipoint, detail alamat asal/tujuan tidak ditampilkan penuh pada step ini - hanya diringkas sebagai label  sesuai dengan Tipe Pengiriman. Tampilan berupa text link yang saat dibuka berisi daftar alamat lengkap per titik pickup/drop off.
5. Kalkulasi PPN & PPH bersifat opsional, diaktifkan melalui checkbox "Gunakan Komponen Harga".
6. Saat "Gunakan Komponen Harga" dicentang: sistem baru menampilkan field PPN/PPH => Bersifat required. Besaran presentase ppn/pph mengambil dari data terakhir yang digunakan. Saat belum ada yang bisa digunakan, maka akan tampil kosong
7. Saat menggunakan komponen harga, sistem menghitung Total Harga = Harga DPP + Nilai PPN - Nilai PPH.
8. Untuk bisa ke next step wajib mengisi seluruh field. Saat terdapat field yang kosong, tidak dapat klik button selanjutnya => akan tampil alert pada keseluruhan field yang kosong 
9. Dapat menyimpan sebagai draft data yang sudah di isikan, walaupun keseluruhan field belum di isi => tampil pop up konfirmasi alert 
10. Fungsi button:
- Batal: Untuk membatalkan pengisian data => Tampil pop up konfirmasi 
- Draf: Untuk menyimpan sebagai draf dari data yang sudah di isikan
- Sebelumnya: untuk mundur, atau kembali ke step sebelumnya. Data tetap terdraft (tidak hilang)
- Selanjutnya: Untuk beralih ke next step
```

### TMS.S012-R08 · Step 4 - Review Order FCL

Ref: `Spek TMS-S!A65:I65` · No: 8 · Tipe: Rule · Spesifikasi Selesai: 2026-07-02

```text
Step 4 - Review Order FCL terdapat rule:

1. Step Review menampilkan ringkasan seluruh data dari Step 1-3 secara read-only.
2.Fungsi button:
- Batal: Untuk membatalkan pengisian data => Tampil pop up konfirmasi 
- Draf: Untuk menyimpan sebagai draf dari data yang sudah di isikan
- Sebelumnya: untuk mundur, atau kembali ke step sebelumnya. Data tetap terdraft (tidak hilang)
-  Simpan: menyelesaikan proses pembuatan order dan mengubah status menjadi "Menunggu Penugasan"
```

### TMS.S012-R09 · Status Order

Ref: `Spek TMS-S!A66:I66` · No: 9 · Tipe: Rule · Spesifikasi Selesai: 2026-07-02

```text
Status Order terdapat rule:

1. Terdapat 9 status pada order FCL:
- Isi Data Pengiriman => pengisian data order belum selesai di step "Data Pengiriman".
- Isi Data Muatan => pengisian data order belum selesai di step "Data Barang".
- Isi Data Vendor => pengisian data order belum selesai di step "Vendor & Harga".
- Review Order => seluruh step sudah terisi namun order belum di-submit (masih di step Review).
- Menunggu Penugasan => seluruh data order sudah lengkap & disubmit, menunggu proses penugasan vendor.
- Ditugaskan => vendor sudah melakukan penugasan.
- Proses Pengiriman => status penugasan armada "Dalam Perjalanan".
- Selesai => seluruh armada sudah selesai bongkar (status penugasan "Selesai").
- Dibatalkan => order dibatalkan oleh admin shipper.
2. Catatan: Status 1-4 (Isi Data Pengiriman s.d. Review Order) merupakan kondisi draft, tersimpan otomatis melalui aksi "Simpan ke Draf" pada step manapun.
```

### TMS.S012-R10 · Hak Edit Order FCL + Pembatalan Order

Ref: `Spek TMS-S!A67:I67` · No: 10 · Tipe: Rule · Spesifikasi Selesai: 2026-07-02

```text
Hak Edit Order FCL terdapat rule:

1. Shipper dapat mengubah data order selama status masih dalam rentang draft (Isi Data Pengiriman s.d. Review Order) hingga "Menunggu Penugasan".
2. Shipper tidak dapat lagi mengubah data order setelah status berubah menjadi "Ditugaskan".
3. Pada halaman Edit Order, field Jenis Pengiriman dan Tipe Pengiriman bersifat locked/read-only dan tidak dapat diubah.
4. Field Jenis Kontainer, Jumlah Kontainer, Data Pengirim, Data Penerima, Data Barang, dan Vendor & Harga tetap dapat diubah selama order berstatus dapat diedit (mengacu poin 1).
5. Fungsi button:
- Batal: Untuk membatalkan pengisian data => Tampil pop up konfirmasi 
-  Simpan: menyelesaikan proses pengeditan => Tampil pop up konfirmasi 

Pembatalan Order terdapat rule:

1. Order dapat dibatalkan selama status berada dalam rentang draft hingga "Ditugaskan" (tidak dapat dibatalkan setelah status "Proses Pengiriman").
2. Pembatalan order dilakukan oleh admin shipper (bukan oleh vendor).
3. Field "Alasan Pembatalan" wajib diisi saat melakukan pembatalan.
```

### TMS.S012-R11 · Aksi pada Daftar Order FTL

Ref: `Spek TMS-S!A68:I68` · No: 11 · Tipe: Rule · Spesifikasi Selesai: 2026-07-02

```text
Aksi pada Daftar Order FTL terdapat rule:

1. Aksi yang tersedia menyesuaikan status order:
- Status Isi Data Pengiriman/Muatan/Vendor - Review Order => Detail, Lanjutkan Pengisian, Batalkan Order, Riwayat Perubahan.
- Status Menunggu Penugasan => Detail, Edit, Batalkan Order, Riwayat Perubahan.
- Status Ditugaskan => Detail, Batalkan Order, Riwayat Perubahan (aksi Edit tidak tersedia).
2. Tombol "Riwayat Pembatalan" pada toolbar halaman Daftar Order menampilkan daftar seluruh order yang pernah dibatalkan (terpisah dari aksi per-baris "Riwayat Perubahan" yang menampilkan histori perubahan order tertentu).
```

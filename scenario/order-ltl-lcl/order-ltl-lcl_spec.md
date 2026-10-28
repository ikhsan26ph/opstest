# TMS.S013 — Order LTL & LCL

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 70–79.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S013 |
| PIC | EL |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-03 |
| Jenis Fitur / No Desain (kolom E) | 077. ADMIN - DAFTAR ORDER; No Desain: 0770 - 079 |
| Jumlah blok rule | 10 |

## Cakupan (kolom B)

```
Order LTL & LCL
1. Form tambah, edit order
2. Detail order
3. Batalkan order
4. Akses:
- Vendor: Lihat Detail 
- Shipper: Seluruh Aksi
```

## Rincian spesifikasi

### TMS.S013-R01 · Pendahuluan

Ref: `Spek TMS-S!A70:I70` · No: 1 · Tipe: Pendahuluan · Kolom E: 077. ADMIN - DAFTAR ORDER · Spesifikasi Selesai: 2026-07-03

```text
Pada ID ini menjelaskan terkait proses pengisian data order untuk  Jenis order LTL & LCL
```

### TMS.S013-R02 · Akses Vendor & Shipper pada menu Order:

Ref: `Spek TMS-S!A71:I71` · No: 2 · Tipe: Rule · Kolom E: No Desain: 0770 - 079 · Spesifikasi Selesai: 2026-07-03

```text
Akses Vendor & Shipper pada menu Order:
1. Vendor hanya bisa melihat detail data order 
2. Shipper mengakses keseluruhan aksi pada order
```

### TMS.S013-R03 · Ketentuan Umum Order LTL & LCL

Ref: `Spek TMS-S!A72:I72` · No: 3 · Tipe: Rule · Spesifikasi Selesai: 2026-07-03

```text
Ketentuan Umum Order LTL & LCL terdapat rule:

1. LTL (Less Than Truck Load) => mode pengiriman menggunakan truk, namun tidak penuh (dapat digabung dengan pengirim lain).
2. LCL (Less Than Container Load) => mode pengiriman menggunakan kontainer via laut, namun tidak penuh (dapat digabung dengan pengirim lain).
3. Order dapat diinput manual melalui form "Buat Order", atau secara batch melalui upload template Excel (tombol "Batch Order") => Untuk batch dijelaskan pada modul terpisah
4. Pengisian order FCL terbagi menjadi 4 step: 
- Data Pengiriman
- Data Barang 
- Vendor & Harga
- Review.
```

### TMS.S013-R04 · Step 1 - Data Pengiriman Order LTL & LCL

Ref: `Spek TMS-S!A73:I73` · No: 4 · Tipe: (kosong) · Spesifikasi Selesai: 2026-07-03

```text
Step 1 - Data Pengiriman Order LTL & LCL terdapat rule:

LCL
1. Field yang tersedia :
- Pelabuhan Asal => Dropdown, wajib diisi, data dari Master Pelabuhan
- Pelabuhan Tujuan => Dropdown, wajib diisi, data dari Master Pelabuhan
- Jumlah Kontainer => Selalu terkunci 1 (field disable)
- Metode Pengiriman => Pilihan wajib salah satu (Door to Door / Door to CY / CY to Door / CY to CY))
2. Metode Pengiriman yang dipilih akan memengaruhi tampilan pada menu Penugasan Tracking.

LTL
1. Field yang tersedia :
- Kota Asal => Dropdown, wajib diisi, data dari Master Kota
- Kota Tujuan => Dropdown, wajib diisi, data dari Master Kota
2. Kota terpilih akan mempengaruhi pilihan dropdown pada droppoint (Sesuai dengan kota terpilih) 

Rule Umum: 
1. Data Pengirim & Data Penerima:
- Drop Point Asal/Tujuan => Dropdown, wajib diisi dan mengambil data dari Master Droppoint.
- Saat Drop Point dipilih, sistem auto-draft: detail alamat, nama perusahaan, Nama PIC, dan No. PIC.
- Field PIC dan No. WhatsApp bersifat draft namun tetap dapat diubah manual oleh user.
2. Tipe pengiriman untuk LTL LCL yakni normal, sehingga bagian Data Pengirim & Data Penerima masing-masing hanya 1 baris, tidak dapat ditambah baris.
3. Jika field wajib tidak diisi: tampilkan helper error & border field berubah warna error.
4. Untuk bisa ke next step wajib mengisi seluruh field. Saat terdapat field yang kosong, tidak dapat klik button selanjutnya => akan tampil alert pada keseluruhan field yang kosong 
5. Dapat menyimpan sebagai draft data yang sudah di isikan, walaupun keseluruhan field belum di isi => tampil pop up konfirmasi alert 
6. Fungsi button:
- Batal: Untuk membatalkan pengisian data => Tampil pop up konfirmasi 
- Draf: Untuk menyimpan sebagai draf dari data yang sudah di isikan
- Selanjutnya: Untuk beralih ke next step
```

### TMS.S013-R05 · Step 2 - Data Barang Order LTL & LCL

Ref: `Spek TMS-S!A74:I74` · No: 5 · Tipe: Rule · Spesifikasi Selesai: 2026-07-03

```text
Step 2 - Data Barang Order LTL & LCL terdapat rule:

1. Hanya dapat memasukkan 1 data barang untuk LTL & LCL
2. Field yang tersedia:
- Deskripsi Barang => Wajib diisi
- Nomor DO => Tidak Wajib diisi, dapat diisi lebih dari satu, dipisahkan dengan koma
- Berat (kg) => Tidak Wajib diisi
- Kubikasi (m3) => Tidak Wajib diisi
3. Tidak ada pengecekkan kelebihan berat / kubikasi pada step ini 
4. Data Barang (koli/karungan) tidak mengikat spesifikasi rinci jenis barang di dalamnya, hanya mencatat pada level koli.
5. Jika field wajib tidak diisi: tampilkan helper error & border field berubah warna error.
6. Untuk bisa ke next step wajib mengisi seluruh field. Saat terdapat field yang kosong, tidak dapat klik button selanjutnya => akan tampil alert pada keseluruhan field yang kosong 
7. Dapat menyimpan sebagai draft data yang sudah di isikan, walaupun keseluruhan field belum di isi => tampil pop up konfirmasi alert 
8. Fungsi button:
- Batal: Untuk membatalkan pengisian data => Tampil pop up konfirmasi 
- Draf: Untuk menyimpan sebagai draf dari data yang sudah di isikan
- Sebelumnya: untuk mundur, atau kembali ke step sebelumnya. Data tetap terdraft (tidak hilang)
- Selanjutnya: Untuk beralih ke next step
```

### TMS.S013-R06 · Step 3 - Vendor & Harga Order LTL & LCL

Ref: `Spek TMS-S!A75:I75` · No: 6 · Tipe: Rule · Spesifikasi Selesai: 2026-07-03

```text
Step 3 - Vendor & Harga Order LTL & LCL terdapat rule:

1. Field yang tersedia:
- Vendor => Dropdown, wajib diisi
- Tanggal Permintaan Muat => Wajib diisi
- Harga => Wajib diisi, input manual
- Waktu Perjalanan => Pada LTL Dapat berupa text field, atau hanya text only. Sedangkan pada LCL tidak terdapat inputan waktu perjalanan. Karena menggunakan perhitungan ETA - ETD + 4 hari
2. Waktu perjalanan FCL baru diketahui saat sudah menambahkan penugasan (Isi jadwal kapal). Sehingga waktu perjalanan baru tampil pada informasi detail saat status "Ditugaskan"
3. Kalkulasi PPN & PPH bersifat opsional, diaktifkan melalui checkbox "Gunakan Komponen Harga".
4. Saat "Gunakan Komponen Harga" dicentang: sistem baru menampilkan field PPN/PPH => Bersifat required. Besaran presentase ppn/pph mengambil dari data terakhir yang digunakan. Saat belum ada yang bisa digunakan, maka akan tampil kosong
5. Saat menggunakan komponen harga, sistem menghitung Total Harga = Harga DPP + Nilai PPN - Nilai PPH.
6. Untuk bisa ke next step wajib mengisi seluruh field. Saat terdapat field yang kosong, tidak dapat klik button selanjutnya => akan tampil alert pada keseluruhan field yang kosong 
7. Dapat menyimpan sebagai draft data yang sudah di isikan, walaupun keseluruhan field belum di isi => tampil pop up konfirmasi alert 
8. Fungsi button:
- Batal: Untuk membatalkan pengisian data => Tampil pop up konfirmasi 
- Draf: Untuk menyimpan sebagai draf dari data yang sudah di isikan
- Sebelumnya: untuk mundur, atau kembali ke step sebelumnya. Data tetap terdraft (tidak hilang)
- Selanjutnya: Untuk beralih ke next step
```

### TMS.S013-R07 · Step 4 - Review Order FCL

Ref: `Spek TMS-S!A76:I76` · No: 7 · Tipe: Rule · Spesifikasi Selesai: 2026-07-03

```text
Step 4 - Review Order FCL terdapat rule:

1. Step Review menampilkan ringkasan seluruh data dari Step 1-3 secara read-only.
2.Fungsi button:
- Batal: Untuk membatalkan pengisian data => Tampil pop up konfirmasi 
- Draf: Untuk menyimpan sebagai draf dari data yang sudah di isikan
- Sebelumnya: untuk mundur, atau kembali ke step sebelumnya. Data tetap terdraft (tidak hilang)
-  Simpan: menyelesaikan proses pembuatan order dan mengubah status menjadi "Menunggu Penugasan"
```

### TMS.S013-R08 · Status Order

Ref: `Spek TMS-S!A77:I77` · No: 8 · Tipe: Rule · Spesifikasi Selesai: 2026-07-03

```text
Status Order terdapat rule:

1. Terdapat 9 status pada order LTL & LCL:
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

### TMS.S013-R09 · Hak Edit Order LTL & LCL + Pembatalan Order

Ref: `Spek TMS-S!A78:I78` · No: 9 · Tipe: Rule · Spesifikasi Selesai: 2026-07-03

```text
Hak Edit Order LTL & LCL terdapat rule:

1. Shipper dapat mengubah data order selama status masih dalam rentang draft (Isi Data Pengiriman s.d. Review Order) hingga "Menunggu Penugasan".
2. Shipper tidak dapat lagi mengubah data order setelah status berubah menjadi "Ditugaskan".
3. Pada halaman Edit Order, field Jenis Pengiriman bersifat locked/read-only dan tidak dapat diubah.
5. Fungsi button:
- Batal: Untuk membatalkan pengisian data => Tampil pop up konfirmasi 
-  Simpan: menyelesaikan proses pengeditan => Tampil pop up konfirmasi 

Pembatalan Order terdapat rule:

1. Order dapat dibatalkan selama status berada dalam rentang draft hingga "Ditugaskan" (tidak dapat dibatalkan setelah status "Proses Pengiriman").
2. Pembatalan order dilakukan oleh admin shipper (bukan oleh vendor).
3. Field "Alasan Pembatalan" wajib diisi saat melakukan pembatalan.
```

### TMS.S013-R10 · Aksi pada Daftar Order LTL & LCL

Ref: `Spek TMS-S!A79:I79` · No: 10 · Tipe: Rule · Spesifikasi Selesai: 2026-07-03

```text
Aksi pada Daftar Order LTL & LCL terdapat rule:

1. Aksi yang tersedia menyesuaikan status order:
- Status Isi Data Pengiriman/Muatan/Vendor - Review Order => Detail, Lanjutkan Pengisian, Batalkan Order, Riwayat Perubahan.
- Status Menunggu Penugasan => Detail, Edit, Batalkan Order, Riwayat Perubahan.
- Status Ditugaskan => Detail, Batalkan Order, Riwayat Perubahan (aksi Edit tidak tersedia).
2. Tombol "Riwayat Pembatalan" pada toolbar halaman Daftar Order menampilkan daftar seluruh order yang pernah dibatalkan (terpisah dari aksi per-baris "Riwayat Perubahan" yang menampilkan histori perubahan order tertentu).
```

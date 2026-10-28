# TMS.S008 — Master Waktu Perjalanan

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 26–32.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S008 |
| PIC | BB |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-03 |
| Jenis Fitur / No Desain (kolom E) | MASTER WAKTU PERJALANAN |
| Jumlah blok rule | 7 |

## Cakupan (kolom B)

```
Master Waktu Perjalanan
1. Form tambah, edit
2. Hapus Data
3. Tambah data dengan input manual atau berdasarkan rata-rata waktu riwayat perjalanan
```

## Rincian spesifikasi

### TMS.S008-R01 · Pendahuluan

Ref: `Spek TMS-S!A26:I26` · No: 1 · Tipe: Pendahuluan · Kolom E: MASTER WAKTU PERJALANAN · Spesifikasi Selesai: 2026-07-03

```text
ID ini menjelaskan mengenai menu master untuk mengelola data rute pengiriman beserta target waktu perjalanan yang dapat digunakan oleh sistem untuk memicu peringatan pada Dashboard Monitoring.
```

### TMS.S008-R02 · Definisi General:

Ref: `Spek TMS-S!A27:I27` · No: 2 · Tipe: (kosong) · Spesifikasi Selesai: (kosong)

```text
Definisi General:
1. Target waktu perjalanan adalah dari kota ke kota.
2. Target waktu perjalanan disimpan dalam satuan jam (contoh: Surabaya - Jakarta = 48 jam). Dibuat jam karena menjadi acuan sistem untuk menghitung keterlambatan pengiriman. Tapi tampil di sistem dalam satuan H dan J (aturan konversi di poin berikutnya)
3. Waktu Perjalanan bisa ditambah lewat menu Master Waktu Perjalanan atau ditambahkan saat membuat order (jika belum ada di master) dan tersimpan sebagai data baru di master.
4. Data bisa diedit, tapi tidak mengubah historical data yang digunakan sebelumnya.
5. Semua perubahan tercatat pada riwayat
6. Data Waktu Perjalanan digunakan sebagai informasi di Order, dan menghitung keterlambatan di Dashboard Monitoring, Operasional
```

### TMS.S008-R03 · Master Waktu Perjalanan ada pada Master Operasional

Ref: `Spek TMS-S!A28:I28` · No: 3 · Tipe: (kosong) · Spesifikasi Selesai: (kosong)

```text
Master Waktu Perjalanan ada pada Master Operasional
1. Pada halaman Master Waktu Perjalanan akan tampil tabel data dengan kolom berikut:
  - No
  - Rute
  - Waktu Perjalanan
  - Sumber Data (Input Manual/Riwayat Data)
  - Status (Aktif/Tidak Aktif)
  - aksi (edit dan hapus)

2. Bisa filter data:
  - Rute (text field)
  - Waktu Perjalanan (text field)
  - Sumber Data (dropdown)
  - Status (dropdown)
  *Tombol Reset: mereset filter dan data pada tabel.
  *Tombol Terapkan: menampilkan data pada tabel sesuai filter.

3. Tabel tampil default 20 baris, dan terdapat pagination. Tapi dapat sesuaikan tampilan tabel ke 10/20/50/100 baris data.

4. Bisa perbarui Waktu Perjalanan secara bersamaan. Ada button "Perbarui Waktu Perjalanan".
Cara kerja: 
  *Saat button tersebut di klik, baris data muncul checkbox dan dapat dipilih 1 atau lebih untuk diperbarui. 
  *Batasan: Hanya data yang memiliki riwayat perjalanan > 5 kali yang dapat diperbarui.
  *Memperbarui artinya membuat waktu perjalanan berubah sesuai nilai rata-rata terbaru per saat aksi tersebut dilakukan. 
  *Saat melakukan aksi ini, data bisa difilter.
  *Jika data sudah dipilih, akan tampil informasi jumlah data terpilih, berikut detail sumber data terpilih.
  *Tombol "Batal": membatalkan aksi, kembali ke halaman normal
  *Tombol "Perbarui Waktu Perjalanan":  memperbarui data, lalu kembali ke halaman normal
  *saat akan lakukan pembaruan, akan muncul konfirmasi dahulu, dan tampil jumlah data terpilih berikut jenis sumber datanya.
```

### TMS.S008-R04 · Tambah Waktu Perjalanan

Ref: `Spek TMS-S!A29:I29` · No: 4 · Tipe: (kosong) · Spesifikasi Selesai: (kosong)

```text
Tambah Waktu Perjalanan
1. Saat tombol "Tambah Waktu Perjalanan", akan menuju halaman tambah waktu perjalanan

2. Pada halaman tersebut, default yang tampil ada bagian Detail Rute dan Target Waktu Perjalanan
  - Detail Rute:
    > Kota Asal (drop down dari master kota)
    > Kota Tujuan (drop down dari master kota)
    > Bisa tambah kota transit (drop down, kota di antara origin & destination). Kota transit dapat dihapus, dan dapat diubah urutannya.
  - Target Waktu Perjalanan:
    > Memilih "Input Manual" atau "Berdasarkan Riwayat"
    > Saat memilih Input Manual: tampil field untuk number dengan satuan "Jam". Terdapat informasi contoh penggunaan data.
    > Saat memilih Berdasarkan Riwayat: akan tampil informasi jumlah trip rute tersebut, rata-rata waktu perjalanan dibulatkan ke atas dalam satuan jam, dan periode data tersebut diambil.
    > Terdapat informasi penjelasan riwayat data juga.
    > Data baru yang tersimpan, status auto 'Aktif'
    > Saat pindah dari Input Manual ke Berdasarkan Riwayat, data yang sudah terisi di Input Manual tidak terhapus (sehingga jika kembali ke Input Manual, masih ada isiannya. Tapi data yang tersimpan final adalah pada bagian yang terakhir dipilih.

3. Data waktu perjalanan bisa tambah baris input, dan kedua data bisa dihapus hingga minimal menyisakan 1 data.

4. Tombol tersedia:
  - Batal: Membatalkan proses, perlu konfirmasi. Lalu kembali ke halaman Master Waktu Perjalanan
  - Simpan: Menyimpan data, lalu kembali ke halaman Master Waktu Perjalanan, dan muncul informasi data tersimpan
```

### TMS.S008-R05 · Edit Waktu Perjalanan

Ref: `Spek TMS-S!A30:I30` · No: 5 · Tipe: (kosong) · Spesifikasi Selesai: (kosong)

```text
Edit Waktu Perjalanan
1. Setiap baris data dapat diedit. Menuju halaman edit.

2. Halaman Edit: default yang tampil data terpilih pada bagian Detail Rute dan Target Waktu Perjalanan. Field tersedia sebagai berikut
  - Detail Rute:
    > Kota Asal (drop down dari master kota)
    > Kota Tujuan (drop down dari master kota)
    > Bisa tambah kota transit (drop down, kota di antara origin & destination). Kota transit dapat dihapus, dan dapat diubah urutannya.
  - Target Waktu Perjalanan:
    > Memilih form "Input Manual" atau "Berdasarkan Riwayat"
    > Saat memilih Input Manual: tampil field untuk number dengan satuan "Jam". Terdapat informasi contoh penggunaan data.
    > Saat memilih Berdasarkan Riwayat: akan tampil informasi jumlah trip rute tersebut, rata-rata waktu perjalanan dibulatkan ke atas dalam satuan jam, dan periode data tersebut diambil.
    > Terdapat informasi penjelasan riwayat data juga.
    > Status (drop down)

3. Data bisa diedit, tapi tidak mengubah data yang sebelumnya sudah digunakan. Hanya akan mengubah data yang akan digunakan.

4. Tombol tersedia:
  - Batal: Membatalkan proses, perlu konfirmasi. Lalu kembali ke halaman Master Waktu Perjalanan
  - Simpan: Menyimpan data, lalu kembali ke halaman Master Waktu Perjalanan, dan muncul informasi data berhasil diubah
```

### TMS.S008-R06 · Hapus Data

Ref: `Spek TMS-S!A31:I31` · No: 6 · Tipe: (kosong) · Spesifikasi Selesai: (kosong)

```text
Hapus Data
1. Data yang sudah digunakan tidak dapat dihapus jika sudah digunakan pada order
```

### TMS.S008-R07 · Konversi waktu perjalanan:

Ref: `Spek TMS-S!A32:I32` · No: 7 · Tipe: (kosong) · Spesifikasi Selesai: (kosong)

```text
Konversi waktu perjalanan: 
  *Saat data tersimpan, satuan jam di atas 23 jam akan terkonversi menjadi hari. Contoh: 24 jam = 1 hari; 38 jam = 1 hari 14 jam.
  *konversi ini tampil pada tabel data master, dan informasi waktu perjalanan di Order.
  *pada tabel master ini, satuan dapat disingkat menjadi h dan j. Contoh: 1h 14j
```

# TMS.S019 — Admin dapat membuat Batch Order

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 122–125.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S019 |
| PIC | EL |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-13 |
| Jenis Fitur / No Desain (kolom E) | Desain duplikat Saat ini |
| Jumlah blok rule | 4 |

## Cakupan (kolom B)

```
Admin dapat membuat Batch Order
1. Form batch order dan template import batch order
2. Preview data yang tidak sesuai
3. Pop up konfirmasi
4. LTL, LCL, FTL, FCL
```

## Rincian spesifikasi

### TMS.S019-R01 · Pendahuluan

Ref: `Spek TMS-S!A122:I122` · No: 1 · Tipe: Pendahuluan · Kolom E: Desain duplikat Saat ini · Spesifikasi Selesai: 2026-07-13

```text
Fitur ini menjelasakan proses batch order, yakni proses upload excel yang dapat langsung tercreate menjadi order. Template excel beserta aturannya tersedia pada sistem
```

### TMS.S019-R02 · Rule umum batch order:

Ref: `Spek TMS-S!A123:I123` · No: 2 · Tipe: Rule · Spesifikasi Selesai: 2026-07-13

```text
Rule umum batch order:
1. Batch order dilakukan melalui menu "Order" dengan klik button "Batch Order"
2. Saat di klik sistem akan direct ke halaman Batch Order 
3. Default halaman yakni menampilkan pilihan Tipe pengiriman yang ada (FTL, FCL, LTL, LCL)
4. Template terpisah untuk masing-masing (FTL, FCL, LTL, LCL) => Textlink Download Template Excel
5. Terdapat tempat untuk upload dokumen 

Template: Template Batch Order TMS Shipper.xlsx
```

### TMS.S019-R03 · Preview Data Order

Ref: `Spek TMS-S!A124:I124` · No: 3 · Tipe: Rule · Spesifikasi Selesai: 2026-07-13

```text
Preview Data Order terdapat rule:
1. Setelah file berhasil diupload, ditampilkan section Preview Data Order berisi ringkasan: Tanggal Upload, Total Data, Jumlah Data Sesuai, Jumlah Data Tidak Sesuai, Customer, dan Nama File.
2. Hanya data yang gagal/tidak sesuai yang ditampilkan pada tabel preview. Data yang valid tidak ditampilkan.
3. Data tidak sesuai ditandai dengan highlight warna merah pada kolom yang bermasalah disertai tooltip penjelasan kesalahan.
4. Kesalahan pada satu baris tidak menggagalkan baris lain. Setiap baris divalidasi secara independen.
5. Jika masih terdapat data tidak valid kemudian user klik "Lanjutkan", tampil pop up konfirmasi bahwa proses tidak dapat dilanjutkan selama masih ada data tidak valid.
6. Data tidak valid tidak dapat lolos ke tahap create shipment.
7. Jika seluruh data valid, klik "Lanjutkan" akan membuat seluruh order berhasil terbuat, dan redirect ke halaman Daftar Order dengan seluruh data hasil batch upload ditampilkan => Tampil pop up konfirmasi 
8. Button Batal membatalkan proses dan kembali ke halaman Daftar order => Tampil pop up konfirmasi 
9. Harus terdapat alert batch order berhasil tercreate menjadi shipment
10. Harus terdapat pop up alert saat file tidak sesuai 

Template: Template Batch Order TMS Shipper.xlsx
```

### TMS.S019-R04 · Ketentuan Template & Kolom

Ref: `Spek TMS-S!A125:I125` · No: 4 · Tipe: Rule · Spesifikasi Selesai: 2026-07-13

```text
Ketentuan Template & Kolom terdapat rule:
1. Satu baris Excel = satu data shipment.
2. Kolom bertanda bintang (*) pada template adalah kolom wajib diisi.
3. Karakter pemisah:
- Semicolon (;) sebagai pemisah antar data dalam satu kolom, dan pemisah antar alamat pada data barang .
- Pagar (##) sebagai pemisah antar armada.
4. Rule drop point: => Menggunakan template yang sama 
- Drop Point Asal lebih dari satu = multipickup.
- Drop Point Tujuan lebih dari satu = multidrop.
- Keduanya lebih dari satu = multipickup & multidrop.
5. Rule pada kolom PIC & No Whatsapp:
- Jika di isi maka akan mengambil data dari hasil pengisian
- Jika tidak di isi maka akan mengambil dari data master droppoint
- Jika ada sebagian yang ingin menggunakan data pic / no whatsapp melalui inputan dalam satu order, dan yang sebagian lainnya tidak, maka kolom  tersebut diisi dengan strip (-).
6. Rule pada kolom Waktu Perjalanan:
- Jika di master sudah ada, maka meskipun di inputkan tidak akan berubah
- Jika di master belum ada, saat di inputkan maka akan tersimpan di mas
7. Rule validasi per kolom: 

Pelabuhan Asal / Pelabuhan Tujuan: 
- Harus terdaftar pada master. Jika tidak ada → tooltip "Tidak ada data pada master".

Kota Asal / Kota Tujuan: 
- Harus terdaftar pada master. Jika tidak ada → tooltip "Tidak ada data pada master".

Metode Pengiriman: 
- Harus sesuai pilihan yang tersedia pada sistem. Jika tidak ada → tooltip "Tidak ada data pada pilihan yang tersedia".

Jenis Armada/Kontainer:
- Harus terdaftar pada master. Jika tidak ada → tooltip "Tidak ada data pada master".

Jumlah Armada/Kontainer:
- Harus berupa angka. Jika tidak sesuai → tooltip "Format data tidak sesuai".

Drop Point Asal & Drop Point Tujuan:
- Harus terdaftar pada master. Jika tidak ada → tooltip "Tidak ada data pada master".

PIC Pengirim & PIC Penerima:
- Tidak wajib diisi.
- Harus berupa text. Jika tidak sesuai → tooltip "Format data tidak sesuai".

No WA PIC Pengirim & No WA PIC Penerima:
- Tidak wajib diisi.
- Harus berupa angka. Jika tidak sesuai → tooltip "Format data tidak sesuai".
- Input diawali 62 atau +62 → sistem membaca sebagai 0.
- Input diawali 0 → tetap terbaca 0.

Deskripsi Barang:
- Harus berupa text. Jika tidak sesuai → tooltip "Format data tidak sesuai".
- Harus sesuai jumlah berdasarkan droppoint & armada yang ada. Jika tidak sesuai → tooltip "Deskripsi Barang tidak Lengkap".

Berat, No DO & Kubikasi (semua dalam satuan):
- Tidak wajib diisi.
- Harus berupa angka. Jika tidak sesuai → tooltip "Format data tidak sesuai".
- Harus sesuai jumlah berdasarkan droppoint & armada yang ada. Jika tidak sesuai → tooltip "Berat / No DO / Kubikasi tidak Lengkap".

Vendor:
- Harus terdaftar pada Manajemen Vendor. Jika tidak ada → tooltip "Tidak ada data pada Manajemen Vendor".

Tgl Permintaan Muat:
- Harus berupa angka dan berformat DD/MM/YYYY. Jika tidak sesuai → tooltip "Format data tidak sesuai".

Waktu Perjalanan:
- Tidak wajib diisi.
- Saat tidak di isi namun pada master data belum tersedia, maka → tooltip  "Tidak ada data pada master".
- Harus berupa angka. Jika tidak sesuai → tooltip "Format data tidak sesuai".

Harga Barang:  
- Harus berupa angka. Jika tidak sesuai → tooltip "Format data tidak sesuai"

PPN (%), PPH (%):
- Tidak wajib diisi.
- Jika diisi harus berupa angka. Jika tidak sesuai → tooltip "Format data tidak sesuai".
```

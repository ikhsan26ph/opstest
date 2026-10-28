# TMS.S010 — Master Sopir

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 40–44.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S010 |
| PIC | EL |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-06 |
| Jenis Fitur / No Desain (kolom E) | 122. Daftar Sopir POV Shipper; No Desain: 122 - 126 |
| Jumlah blok rule | 5 |

## Cakupan (kolom B)

```
Master Sopir
1. List Data Sopir
2. Form Tambah, edit
3. Setting Master 
4. Hapus Data
5. Akses:
- Shipper => Baru tampil di shipper saat terdapat kondisi pengelola ada yang dihandle oleh admin 
- Vendor => Tampil di akun vendor dengan diksi "Master Armada"
```

## Rincian spesifikasi

### TMS.S010-R01 · Pendahuluan

Ref: `Spek TMS-S!A40:I40` · No: 1 · Tipe: Pendahuluan · Kolom E: 122. Daftar Sopir POV Shipper · Spesifikasi Selesai: 2026-07-06

```text
Pada ID ini menjelaskan terkait master sopir pada POV shipper dan vendor
```

### TMS.S010-R02 · Ketentuan Umum (Sisi Shipper) + Ketentuan Umum (Sisi Vendor)

Ref: `Spek TMS-S!A41:I41` · No: 2 · Tipe: Rule · Kolom E: No Desain: 122 - 126 · Spesifikasi Selesai: 2026-07-06

```text
Ketentuan Umum (Sisi Shipper) Terdapat rule:
1. Data sopir sisi shipper masuk ke dalam menu "Master Sopir".
2. Menu "Master Sopir" hanya tampil apabila shipper memiliki minimal 1 vendor dengan Pengelola = "Shipper" (mengacu konsep Pengelola pada Manajemen Vendor).
3. Jika shipper tidak memiliki vendor dengan Pengelola = Shipper, menu "Master Sopir" tidak ditampilkan.
4. Saat vendor terdaftar dengan Pengelola = Shipper, vendor tersebut otomatis muncul pada Master Sopir - data vendor tidak perlu diinput manual, otomatis masuk by sistem.
5. Master Sopir menampilkan daftar vendor (bukan daftar sopir individual secara langsung) - tiap baris vendor menampilkan agregat Jumlah Sopir & Tanggal Update terakhir.
6. Aksi "Kelola Sopir" (icon gear) membuka halaman detail berisi daftar sopir milik vendor tersebut.

Ketentuan Umum (Sisi Vendor) Terdapat rule:
1. Form Tambah Sopir sisi vendor menduplikasi form yang sudah ada pada produk TMS LKL (Lintas Karya Logistik) - isi form sama, dapat mengacu implementasi yang sudah ada.
2. Data sopir sisi vendor masuk ke dalam menu Master sopir (perspektif vendor terhadap fleet miliknya sendiri, tanpa pengelompokan per vendor karena hanya 1 entitas).
```

### TMS.S010-R03 · Tambah Sopir (Sisi Shipper) + Tambah Sopir (Sisi Vendor)

Ref: `Spek TMS-S!A42:I42` · No: 3 · Tipe: (kosong) · Spesifikasi Selesai: 2026-07-06

```text
Tambah Sopir (Sisi Shipper) Terdapat rule:
1. Terdapat 2 entry point:
- Dari halaman utama Master Sopir (di luar konteks vendor tertentu) => wajib memilih field "Nama Vendor" terlebih dahulu.
- Dari dalam halaman "Kelola Sopir" milik vendor tertentu => tidak perlu memilih Nama Vendor, penambahan hanya berlaku untuk vendor tersebut.
2. Field yang diinput: Nama Vendor (khusus entry point luar), Nama Sopir, No. WhatsApp. Seluruh field wajib diisi.
3. Data sopir yang baru ditambahkan otomatis berstatus "Aktif".
4. Dapat menambah lebih dari 1 baris input sekaligus. Icon hapus baris baru tampil saat terdapat 2 baris input atau lebih.
5. Dapat melakukan batch upload melalui Import Data:
- Kolom template dari entry point luar => No, Nama Vendor, Nama Sopir, No. WhatsApp.
- Kolom template dari entry point dalam (Kelola Sopir per vendor) => No, Nama Sopir, No. WhatsApp.
6. No. WhatsApp boleh sama antar vendor yang berbeda, namun tidak boleh sama pada data sopir milik vendor yang sama (unique per vendor, bukan unique global). 
7. Jika field wajib tidak diisi: tampilkan helper error & border field berubah warna error.
8. Untuk data bisa disimpan wajib mengisi seluruh field. Saat terdapat field yang kosong, tidak dapat klik button simpan => akan tampil alert pada keseluruhan field yang kosong 
9. Fungsi button:
- Batal: Untuk membatalkan pengisian data => Tampil pop up konfirmasi 
- Simpan: untuk menyimpan data yang telah diisikan

Tambah Sopir (Sisi Vendor) Terdapat rule:
1. Field yang tersedia:
Nama Sopir => wajib diisi.
No. WhatsApp => wajib diisi.
No. KTP => wajib diisi.
No. SIM => wajib diisi.
Provinsi => dropdown, wajib diisi.
Kota/Kab. => dropdown, wajib diisi.
Kecamatan => dropdown, wajib diisi.
Desa/Kelurahan => dropdown, wajib diisi.
Kode Pos => tidak wajib diisi.
Alamat Lengkap => wajib diisi.
Foto KTP => wajib diisi, maksimal 4MB, format .jpg/.jpeg/.png.
Foto SIM => wajib diisi, maksimal 4MB, format .jpg/.jpeg/.png.
Foto Sopir => wajib diisi, maksimal 4MB, format .jpg/.jpeg/.png.
2. Dapat menambah lebih dari 1 baris input sekaligus. Icon hapus baris baru tampil saat terdapat 2 baris input atau lebih.
3. Data sopir yang baru ditambahkan otomatis berstatus "Aktif".
4. Dapat melakukan batch upload melalui Import Data dengan kolom: No, Nama Sopir, No Whatsapp, No KTP, No SIM, Provinsi, Kota/Kab, Kecamatan, Desa/Kelurahan, Alamat.
5. Nomor wa whatsapp tidak boleh sama
6. Jika field wajib tidak diisi: tampilkan helper error & border field berubah warna error.
7. Untuk data bisa disimpan wajib mengisi seluruh field. Saat terdapat field yang kosong, tidak dapat klik button simpan => akan tampil alert pada keseluruhan field yang kosong 
8. Fungsi button:
- Batal: Untuk membatalkan pengisian data => Tampil pop up konfirmasi 
- Simpan: untuk menyimpan data yang telah diisikan
```

### TMS.S010-R04 · Edit Sopir (Sisi Shipper) + Edit Sopir (Sisi Vendor)

Ref: `Spek TMS-S!A43:I43` · No: 4 · Tipe: (kosong) · Spesifikasi Selesai: 2026-07-06

```text
Edit Sopir (Sisi Shipper) Terdapat rule:
1. Saat mengedit data sopir, data yang sudah digunakan tetap dapat diubah.
2. Field "Status" (Aktif/Tidak Aktif) hanya ditampilkan pada form Edit.
3. Field yang dapat diedit: Nama Sopir, No. WhatsApp, Status.
4. Form edit berupa pop up 
5. Fungsi button:
- Batal: Untuk membatalkan perubahan  => Tampil pop up konfirmasi 
- Simpan: untuk menyimpan perubahan => Tampil pop up konfirmasi 

Edit Sopir (Sisi Vendor) Terdapat rule:
1. Saat mengedit data sopir, data yang sudah digunakan tetap dapat diubah.
2. Field "Status" (Aktif/Tidak Aktif) hanya ditampilkan pada form Edit.
3. No. WhatsApp tidak boleh duplikat pada data sopir milik vendor tersebut.
4. Form edit berupa pop up 
5. Fungsi button:
- Batal: Untuk membatalkan perubahan  => Tampil pop up konfirmasi 
- Simpan: untuk menyimpan perubahan => Tampil pop up konfirmasi
```

### TMS.S010-R05 · Halaman Kelola Sopir (Detail per Vendor)

Ref: `Spek TMS-S!A44:I44` · No: 5 · Tipe: (kosong) · Spesifikasi Selesai: 2026-07-06

```text
Halaman Kelola Sopir (Detail per Vendor) Terdapat rule:

1. Menampilkan Informasi Vendor: Nama Vendor, Jumlah Sopir, Tanggal Update.
2. Tersedia Filter: Nama Sopir, No. WhatsApp, Status.
4. Tersedia tombol "Riwayat" untuk melihat riwayat perubahan data
5. List armada pada halaman ini menampilkan aksi Edit & Hapus per baris.
```

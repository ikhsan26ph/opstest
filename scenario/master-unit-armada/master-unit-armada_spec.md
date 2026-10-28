# TMS.S009 — Master Unit (Armada)

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 34–38.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S009 |
| PIC | EL |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-06 |
| Jenis Fitur / No Desain (kolom E) | 117. Daftar Arnada POV Shipper; No Desain: 117 - 121 |
| Jumlah blok rule | 5 |

## Cakupan (kolom B)

```
Master Unit (Armada)
1. List Data Armada 
2. Form Tambah, edit
3. Setting Master 
4. Hapus Data
5. Akses:
- Shipper => Baru tampil di shipper saat terdapat kondisi pengelola ada yang dihandle oleh admin 
- Vendor => Tampil di akun vendor dengan diksi "Master Armada"
```

## Rincian spesifikasi

### TMS.S009-R01 · Pendahuluan

Ref: `Spek TMS-S!A34:I34` · No: 1 · Tipe: Pendahuluan · Kolom E: 117. Daftar Arnada POV Shipper · Spesifikasi Selesai: 2026-07-06

```text
Pada ID ini menjelaskan terkait master armada pada POV shipper dan vendor
```

### TMS.S009-R02 · Ketentuan Umum (Sisi Shipper) + Ketentuan Umum (Sisi Vendor)

Ref: `Spek TMS-S!A35:I35` · No: 2 · Tipe: Rule · Kolom E: No Desain: 117 - 121 · Spesifikasi Selesai: 2026-07-06

```text
Ketentuan Umum (Sisi Shipper) Terdapat rule:
1. Data armada sisi shipper masuk ke dalam menu Master Unit, tab "Armada".
2. Tab "Armada" hanya tampil apabila shipper memiliki minimal 1 vendor dengan Pengelola = "Shipper" (vendor yang dikelola langsung oleh shipper - mengacu konsep Pengelola pada Manajemen Vendor).
3. Jika shipper tidak memiliki vendor dengan Pengelola = Shipper, tab "Armada" tidak ditampilkan pada Master Unit.
4. Saat sebuah vendor terdaftar dengan Pengelola = Shipper, vendor tersebut otomatis muncul pada tab "Armada" - data vendor tidak perlu diinput manual pada master armada, otomatis masuk by sistem.
5. Tab "Armada" menampilkan daftar vendor (bukan daftar armada individual secara langsung) - setiap baris vendor menampilkan agregat Jumlah Armada & Tanggal Update terakhir.
6. Aksi "Kelola Armada" (icon gear) pada salah satu baris vendor membuka halaman detail "Kelola Armada" berisi daftar armada milik vendor tersebut.

Ketentuan Umum (Sisi Vendor) Terdapat rule:
1. Form Tambah Armada sisi vendor menduplikasi form yang sudah ada pada produk TMS LKL (Lintas Karya Logistik) - isi form sama, dapat mengacu implementasi yang sudah ada.
2. Data armada sisi vendor masuk ke dalam menu Master Armada (perspektif vendor terhadap fleet miliknya sendiri, tanpa pengelompokan per vendor karena hanya 1 entitas).
```

### TMS.S009-R03 · Tambah Armada (Sisi Shipper) + Tambah Armada (Sisi Vendor)

Ref: `Spek TMS-S!A36:I36` · No: 3 · Tipe: (kosong) · Spesifikasi Selesai: 2026-07-06

```text
Tambah Armada (Sisi Shipper) Terdapat rule:
1. Terdapat 2 entry point untuk menambah data armada:
- Dari halaman utama Master Unit > tab Armada (di luar konteks vendor tertentu) => wajib memilih field "Nama Vendor" terlebih dahulu.
- Dari dalam halaman "Kelola Armada" milik vendor tertentu => tidak perlu memilih Nama Vendor (otomatis mengikuti vendor yang sedang dibuka). Penambahan armada hanya berlaku untuk vendor tersebut.
2. Field yang diinput: Nama Vendor (khusus entry point dari luar), Jenis Armada (dropdown, data dari Master Jenis Armada), Nomor Polisi. Seluruh field wajib diisi.
3. Data armada yang baru ditambahkan otomatis berstatus "Aktif".
4. Dapat menambah lebih dari 1 baris input sekaligus menggunakan "Tambah Baris Input". Icon hapus baris baru tampil saat terdapat 2 baris input atau lebih.
5. Dapat melakukan batch upload melalui Import Data:
- Kolom template dari entry point luar => No, Nama Vendor, Jenis Armada, Nomor Polisi.
- Kolom template dari entry point dalam (Kelola Armada per vendor) => No, Jenis Armada, Nomor Polisi.
6. Nomor Polisi boleh sama antar vendor yang berbeda, namun tidak boleh sama pada data armada milik vendor yang sama (unique per vendor, bukan unique global).
7. Jika field wajib tidak diisi: tampilkan helper error & border field berubah warna error.
8. Untuk data bisa disimpan wajib mengisi seluruh field. Saat terdapat field yang kosong, tidak dapat klik button simpan => akan tampil alert pada keseluruhan field yang kosong 
9. Fungsi button:
- Batal: Untuk membatalkan pengisian data => Tampil pop up konfirmasi 
- Simpan: untuk menyimpan data yang telah diisikan

Tambah Armada (Sisi Vendor) Terdapat rule:
1. Field yang tersedia:
- Jenis Armada => dropdown, wajib diisi, data dari Master Jenis Armada.
- Nomor Polisi => wajib diisi.
- Akhir Berlaku Pajak => tidak wajib diisi.
- No. KIR => wajib diisi.
- Mulai Berlaku KIR => tidak wajib diisi.
- Akhir Berlaku KIR => tidak wajib diisi.
- Foto STNK => wajib diisi, maksimal 4MB, format .jpg/.jpeg/.png.
- Foto KIR => tidak wajib diisi, maksimal 4MB, format .jpg/.jpeg/.png.
- Foto Kendaraan => wajib diisi, maksimal 4MB, format .jpg/.jpeg/.png.
2. Dapat menambah lebih dari 1 baris input sekaligus. Icon hapus baris baru tampil saat terdapat 2 baris input atau lebih.
3. Data armada yang baru ditambahkan otomatis berstatus "Aktif".
4. Dapat melakukan batch upload melalui Import Data dengan kolom: No, Jenis Armada, Nomor Polisi, No. KIR.
5. Nomor Polisi tidak boleh sama
6. Jika field wajib tidak diisi: tampilkan helper error & border field berubah warna error.
7. Untuk data bisa disimpan wajib mengisi seluruh field. Saat terdapat field yang kosong, tidak dapat klik button simpan => akan tampil alert pada keseluruhan field yang kosong 
8. Fungsi button:
- Batal: Untuk membatalkan pengisian data => Tampil pop up konfirmasi 
- Simpan: untuk menyimpan data yang telah diisikan
```

### TMS.S009-R04 · Edit Armada (Sisi Shipper) + Edit Armada (Sisi Vendor)

Ref: `Spek TMS-S!A37:I37` · No: 4 · Tipe: (kosong) · Spesifikasi Selesai: 2026-07-06

```text
Edit Armada (Sisi Shipper) Terdapat rule:
1. Saat mengedit data armada, data yang sudah digunakan (misal sudah pernah ditugaskan) tetap dapat diubah.
2. Field "Status" (Aktif/Tidak Aktif) hanya ditampilkan pada form Edit (tidak ada saat proses tambah).
3. Field yang dapat diedit: Jenis Armada, Nomor Polisi, Status.
4. Form edit berupa pop up 
5. Fungsi button:
- Batal: Untuk membatalkan perubahan  => Tampil pop up konfirmasi 
- Simpan: untuk menyimpan perubahan => Tampil pop up konfirmasi 

Edit Armada (Sisi Vendor) Terdapat rule:
1. Saat mengedit data armada, data yang sudah digunakan tetap dapat diubah.
2. Field "Status" (Aktif/Tidak Aktif) hanya ditampilkan pada form Edit.
3. Nomor Polisi tidak boleh duplikat pada data armada milik vendor tersebu
4. Form edit berupa pop up 
5. Fungsi button:
- Batal: Untuk membatalkan perubahan  => Tampil pop up konfirmasi 
- Simpan: untuk menyimpan perubahan => Tampil pop up konfirmasi
```

### TMS.S009-R05 · Halaman Kelola Armada (Detail per Vendor)

Ref: `Spek TMS-S!A38:I38` · No: 5 · Tipe: (kosong) · Spesifikasi Selesai: 2026-07-06

```text
Halaman Kelola Armada (Detail per Vendor) Terdapat rule:

1. Menampilkan Informasi Vendor: Nama Vendor, Jumlah Armada, Tanggal Update.
2. Tersedia Filter: Jenis Armada, Nomor Polisi, Status.
3. Tersedia tombol "Riwayat" untuk melihat riwayat perubahan data armada 
4. List armada pada halaman ini menampilkan aksi Edit & Hapus per baris.
```

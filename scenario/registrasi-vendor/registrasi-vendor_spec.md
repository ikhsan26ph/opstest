# TMS.S004 — Registrasi Vendor

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 12–17.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S004 |
| PIC | EL |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-01 |
| Jenis Fitur / No Desain (kolom E) | 080. VENDOR - NOTIFIKASI EMAIL - UNDANGAN REGISTRASI; No Desain: 080 - 083 |
| Jumlah blok rule | 6 |

## Cakupan (kolom B)

```
Registrasi Vendor
1. Form registrasi
2. Form login
3. Notifikasi email - undangan registrasi
```

## Rincian spesifikasi

### TMS.S004-R01 · Pendahuluan

Ref: `Spek TMS-S!A12:I12` · No: 1 · Tipe: Pendahuluan · Kolom E: 080. VENDOR - NOTIFIKASI EMAIL - UNDANGAN REGISTRASI · Spesifikasi Selesai: 2026-07-01

```text
Pada ID ini menjelaskan terkait proses registrasi dan pengaktifan akun vendor pada TMS
```

### TMS.S004-R02 · Peraturan Umum:

Ref: `Spek TMS-S!A13:I13` · No: - · Tipe: Rule · Kolom E: No Desain: 080 - 083 · Spesifikasi Selesai: 2026-07-01

```text
Peraturan Umum:

1. Tidak tersedia menu/akses bagi vendor untuk mendaftar secara mandiri tanpa undangan
2. Email undangan registrasi hanya dikirim apabila shipper memilih metode "Registrasi Mandiri" dan "jenis pengelola vendor" sesuai ketentuan.
3. Saat klik button "Undang", sistem mengirim email undangan ke Email Perusahaan/PIC yang diinput shipper.
4. Sistem generate link undangan yang unik per vendor dan bersifat single-use (tidak dapat digunakan kembali setelah dipakai untuk menyelesaikan registrasi).
5. Shipper dapat mengirim ulang undangan (resend) apabila link sebelumnya sudah expired atau belum digunakan vendor.
6. Setiap proses resend undangan akan generate link baru dan menonaktifkan link undangan sebelumnya (link lama tidak dapat lagi diakses).
```

### TMS.S004-R03 · Akses Link Undangan oleh Vendor

Ref: `Spek TMS-S!A14:I14` · No: - · Tipe: Rule · Spesifikasi Selesai: 2026-07-01

```text
Akses Link Undangan oleh Vendor Terdapat rules:

1. Link undangan pada email menampilkan tanggal & jam kedaluwarsa sesuai pengaturan masa berlaku (format: "Tautan ini berlaku hingga dd/mm/yyyy pukul HH.mm").
2. Apabila vendor mengklik/membuka link setelah melewati masa berlaku, sistem menampilkan informasi bahwa link sudah expired dan form registrasi tidak dapat diakses.
3. Apabila link sudah pernah digunakan untuk menyelesaikan registrasi sebelumnya, sistem menampilkan informasi bahwa vendor sudah terdaftar dan mengarahkan ke halaman Login.
4. Apabila link valid dan belum digunakan, vendor diarahkan ke form Registrasi Step 1 (Informasi Akun).
```

### TMS.S004-R04 · Registrasi Vendor - Step 1 (Informasi Akun)

Ref: `Spek TMS-S!A15:I15` · No: - · Tipe: Rule · Spesifikasi Selesai: 2026-07-01

```text
Registrasi Vendor - Step 1 (Informasi Akun) Terdapat rules:

1. Field Email Perusahaan/PIC otomatis terisi (draft) dari data yang diinput shipper saat mengundang, dan dapat diubah oleh vendor.
2. Apabila vendor mengubah Email Perusahaan/PIC, sistem melakukan validasi format email dan validasi uniqueness (tidak boleh sama dengan email yang sudah terdaftar sebagai akun vendor lain).
3. Field Kata Sandi & Konfirmasi Kata Sandi wajib diisi.
4. Kata Sandi minimal 8 karakter dengan kombinasi huruf dan angka.
5. Konfirmasi Kata Sandi harus sama dengan Kata Sandi. Jika tidak sama, tampilkan helper error.
6. Jika field required tidak diisi/tidak valid: tampilkan helper error & border field berubah ke warna error.
7. Button "Selanjutnya" akan memproses ke Step 2 apabila seluruh field pada Step 1 sudah terisi dan valid.
8. Data yang sudah diinput pada Step 1 tetap tersimpan (tidak hilang) apabila vendor kembali dari Step 2 menggunakan button "Sebelumnya".
```

### TMS.S004-R05 · Registrasi Vendor - Step 2 (Informasi Perusahaan)

Ref: `Spek TMS-S!A16:I16` · No: - · Tipe: Rule · Spesifikasi Selesai: 2026-07-01

```text
Registrasi Vendor - Step 2 (Informasi Perusahaan) Terdapat rules:

1. Field Nama Perusahaan otomatis terisi dari data yang diinput shipper saat mengundang, bersifat disable dan tidak dapat diubah vendor.
2. Field Email otomatis terisi dari inputan Step 1, bersifat disable dan tidak dapat diubah pada step ini.
3. Field wajib diisi (required): Alias Perusahaan, No. WhatsApp Perusahaan/PIC, Nama PIC Perusahaan, Provinsi, Kota/Kab, Kecamatan, Desa/Kelurahan, Alamat.
4. Field tidak wajib diisi (optional): Kode Pos, Catatan Tambahan, Dokumen Tambahan.
5. Dropdown Provinsi > Kota/Kab > Kecamatan > Desa/Kelurahan bersifat dependent/berjenjang: opsi pada dropdown level bawah mengikuti pilihan pada dropdown level di atasnya.
6. Apabila dropdown level atas diubah, maka pilihan pada dropdown level di bawahnya yang sudah terisi akan direset kembali ke kondisi kosong.
7. Field Kode Pos terisi otomatis mengikuti pilihan Desa/Kelurahan dan bersifat disable (tidak dapat diinput manual oleh vendor).
8. Field No. WhatsApp hanya dapat diisi angka.
9. Dokumen Tambahan dapat diupload lebih dari 1 file dalam satu proses input.
10. Format file yang diperbolehkan untuk Dokumen Tambahan serta maksimal ukuran file per file perlu dikonfirmasi (contoh acuan umum: .pdf/.jpg/.jpeg/.png, maks. 5MB per file).
11. Setiap file yang berhasil diupload menampilkan nama file, tanggal & jam upload, ukuran file, dan dapat dihapus menggunakan icon delete sebelum submit.
12. Jika field required tidak diisi: tampilkan helper error & border field berubah ke warna error.
13. Button "Registrasi" hanya dapat diproses apabila seluruh field required pada Step 1 & Step 2 sudah terisi dan valid.
```

### TMS.S004-R06 · Registrasi Berhasil

Ref: `Spek TMS-S!A17:I17` · No: - · Tipe: Rule · Spesifikasi Selesai: 2026-07-01

```text
Registrasi Berhasil Terdapat rules:

1. Setelah klik "Registrasi" dan seluruh data valid, sistem menyimpan data vendor dan mengaktifkan akun vendor.
2. Status link undangan berubah menjadi "used" dan tidak dapat diakses kembali setelah registrasi berhasil.
3. Vendor otomatis diarahkan ke halaman utama vendor dalam kondisi sudah login, tanpa perlu login manual melalui halaman Login.
4. Shipper dapat memantau status undangan/registrasi vendor (contoh: Menunggu Registrasi / Terdaftar) pada menu Manajemen Vendor.
```

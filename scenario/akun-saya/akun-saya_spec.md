# TMS.S023 — Akun Saya

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 154–159.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S023 |
| PIC | EL |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-17 |
| Jenis Fitur / No Desain (kolom E) | 175. INFORMASI AKUN VENDOR; No Desain: 175 - 179 |
| Jumlah blok rule | 6 |

## Cakupan (kolom B)

```
Akun Saya 
1. Edit informasi akun
2. Ubah Password
```

## Rincian spesifikasi

### TMS.S023-R01 · Pendahuluan

Ref: `Spek TMS-S!A154:I154` · No: 1 · Tipe: Pendahuluan · Kolom E: 175. INFORMASI AKUN VENDOR · Spesifikasi Selesai: 2026-07-17

```text
Fitur ini menjelasakan menu akun saya, yang di dalamnya terdapat informasi akun terdaftar dan aksi edit dan ubah password yang bisa dilakukan
```

### TMS.S023-R02 · Ketentuan Umum (Akun Saya)

Ref: `Spek TMS-S!A155:I155` · No: 2 · Tipe: Rule · Kolom E: No Desain: 175 - 179 · Spesifikasi Selesai: 2026-07-17

```text
Ketentuan Umum (Akun Saya) Terdapat rule:

1. Admin utama shipper, sub user shipper, dan vendor hanya dapat mengedit informasi akun miliknya sendiri (tidak dapat mengedit akun user lain melalui menu ini).
2. Seluruh tipe akun memiliki 2 aksi pada menu Akun Saya: Edit Informasi & Ubah Password.
3. Desain yang dilampirkan hanya berlaku untuk tampilan Akun Saya sisi Vendor.
```

### TMS.S023-R03 · Tampilan Akun Saya (Admin Utama Shipper & Sub User Shipper) + Tampilan Akun Saya (Vendor)

Ref: `Spek TMS-S!A156:I156` · No: 4 · Tipe: Rule · Spesifikasi Selesai: 2026-07-17

```text
Tampilan Akun Saya (Admin Utama Shipper & Sub User Shipper) Terdapat rule:
1. Field yang ditampilkan: Nama, Email, Nomor WhatsApp, Bagian Staff.
2. Layout kartu/section mengacu pada pengerjaan yang ada pada TMS LKL

Tampilan Akun Saya (Vendor) Terdapat rule:
1. Mengikuti desain: section Informasi Umum, Informasi Perusahaan, dan Nomor WhatsApp Customer Service.
```

### TMS.S023-R04 · Edit Informasi (Sisi Vendor)

Ref: `Spek TMS-S!A157:I157` · No: 5 · Tipe: Rule · Spesifikasi Selesai: 2026-07-17

```text
Edit Informasi (Sisi Vendor) Terdapat rule:

1. Field read-only (tidak dapat diedit): Nama Perusahaan, Email, Kode Pos.
2. ode Pos => terisi otomatis by sistem mengikuti pilihan Desa/Kelurahan.
3. Field wajib diisi: No. WhatsApp, Nama PIC Perusahaan, Provinsi, Kota/Kab., Kecamatan, Desa/Kelurahan, Alamat, No. WhatsApp CS.
4. Field tidak wajib: Alias Perusahaan, Catatan Tambahan, Dokumen Tambahan.
5. Dropdown wilayah bersifat bertingkat: Provinsi => Kota/Kab. => Kecamatan => Desa/Kelurahan. Perubahan level atas => mereset pilihan level di bawahnya.
6. No. WhatsApp & No. WhatsApp CS => hanya menerima angka dan mengikuti validasi format nomor yang berlaku pada sistem.
7. Dokumen Tambahan => maksimal 4MB, format .pdf atau .jpg. File di luar ketentuan => ditolak dengan pesan error.
8. Dokumen yang sudah terunggah dapat dihapus (icon ✕).
9. Jika field wajib tidak diisi => tampilkan helper error & border field berubah warna error.
10 Fungsi button:
Batal: membatalkan pengisian data => tampil pop up konfirmasi 
Simpan: menyimpan data (validasi seluruh field wajib sebelum submit).=> tampil pop up konfirmasi
```

### TMS.S023-R05 · Edit Informasi (Admin Utama Shipper & Sub User Shipper)

Ref: `Spek TMS-S!A158:I158` · No: 6 · Tipe: Rule · Spesifikasi Selesai: 2026-07-17

```text
Edit Informasi (Admin Utama Shipper & Sub User Shipper) Terdapat rule:

1. Field yang dapat diedit: Nama, Nomor WhatsApp
2. Email &  Bagian Staff. => read-only (disable, tidak dapat diedit).
3. Nomor WhatsApp => hanya menerima angka dan mengikuti validasi format nomor yang berlaku pada sistem.
4. Jika field wajib tidak diisi => tampilkan helper error & border field berubah warna error.
5. Fungsi button:
Batal: membatalkan pengisian data => tampil pop up konfirmasi 
Simpan: menyimpan data (validasi seluruh field wajib sebelum submit).=> tampil pop up konfirmasi
```

### TMS.S023-R06 · Ubah Password

Ref: `Spek TMS-S!A159:I159` · No: 7 · Tipe: Rule · Spesifikasi Selesai: 2026-07-17

```text
Ubah Password Terdapat rule:

1. Alur 3 langkah: Pilih Metode OTP => Verifikasi OTP => Input Password Baru.
2. Wajib memilih salah satu metode OTP: via Email atau via WhatsApp. Button Lanjutkan aktif => setelah salah satu metode dipilih.
3. Kode OTP => 6 digit, dikirim ke email/WhatsApp sesuai metode yang dipilih.
4. Terdapat timer countdown. Tautan "Kirim Ulang Kode" nonaktif selama timer berjalan => aktif setelah timer habis. (5 menit)
5. Kode OTP salah/kedaluwarsa => tampilkan pesan error.
6. Password Baru => wajib min. 8 karakter dengan kombinasi huruf dan angka.
7. Konfirmasi Password => harus sama persis dengan Password Baru.
8. Password Baru & Konfirmasi Password => memiliki toggle show/hide.
9. Button Simpan berhasil => hanya jika rule password (poin 6 & 7) terpenuhi.
10. Fungsi button:
Batal: membatalkan proses ubah password  => tampil konfirmasi 
Simpan: menyimpan password baru  => tampil konfirmasi
```

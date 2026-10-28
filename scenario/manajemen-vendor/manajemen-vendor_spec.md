# TMS.S003 — Manajemen Vendor

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 2–10.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S003 |
| PIC | EL |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-01 |
| Jenis Fitur / No Desain (kolom E) | 084. MANAJEMEN VENDOR - LIST DATA; No Desain: 001 - 040 |
| Jumlah blok rule | 9 |

## Cakupan (kolom B)

```
Manajemen Vendor
1. Form tambah vendor, edit vendor
2. Detail vendor
3. Aktifkan, nonaktifkan vendor
4. Registrasi mandiri & dikelola vendor
5. Registrasi dibantu shipper & dikelola vendor
6. Registrasi dibantu shipper & dikelola shipper
7. Notifikasi undangan dan informasi akun
```

## Rincian spesifikasi

### TMS.S003-R01 · Pendahuluan

Ref: `Spek TMS-S!A2:I2` · No: 1 · Tipe: Pendahuluan · Kolom E: 084. MANAJEMEN VENDOR - LIST DATA · Spesifikasi Selesai: 2026-07-01

```text
Pada ID ini menjelaskan terkait manajemen vendor yang diundang ke TMS. Mulai dari proses invite, pengiriman email, hingga pengisian data registrasi
```

### TMS.S003-R02 · Struktur & Akses Menu

Ref: `Spek TMS-S!A3:I3` · No: 2 · Tipe: Rule · Kolom E: No Desain: 001 - 040 · Spesifikasi Selesai: 2026-07-01

```text
Struktur & Akses Menu Terdapat rules:

1. Menu "Manajemen Vendor" berdiri sendiri di sidebar utama, sejajar dengan menu operasional lain (Order, Penugasan Tracking, dll).
2. Menu ini hanya dapat diakses oleh akun shipper (akun utama & sub user dengan hak akses sesuai). Vendor tidak memiliki akses ke menu ini.
3. Saat menu dibuka, halaman default yang tampil adalah daftar seluruh vendor yang pernah diundang/didaftarkan oleh shipper tersebut.
```

### TMS.S003-R03 · Halaman Daftar Vendor

Ref: `Spek TMS-S!A4:I4` · No: 3 · Tipe: Rule · Spesifikasi Selesai: 2026-07-01

```text
Halaman Daftar Vendor Terdapat rules:

1. Urutan default data adalah berdasarkan tanggal undangan/pendaftaran terbaru (vendor paling baru ditambahkan tampil paling atas).
2. Default data yang tampil sebanyak 20 data per halaman, tersedia pagination & dropdown jumlah data per halaman.
3. Kolom "No. WhatsApp" dan "Alias Perusahaan" tampil kosong ("-") apabila vendor belum menyelesaikan proses registrasi mandiri (status "Menunggu").
4. Kolom "Pengelola" menampilkan badge "Vendor" atau "Shipper" sesuai pengaturan yang dipilih.
5. Kolom "Status" menampilkan badge sesuai status vendor.
- Menunggu => Hanya ada saat kondisi registrasi dilakukan oleh vendor 
- Aktif 
- Tidak Aktif 
6. Tombol "+ Tambah Vendor" mengarahkan ke halaman tambah vendor
```

### TMS.S003-R04 · Action Menu pada Daftar Vendor

Ref: `Spek TMS-S!A5:I5` · No: 4 · Tipe: Rule · Spesifikasi Selesai: 2026-07-01

```text
Action Menu pada Daftar Vendor Terdapat Rules:

1. Pengelola: Vendor
- Status "Menunggu": Detail, Edit, Kirim Undangan (resend, via email).
- Status "Aktif": Detail, Edit.
- Status "Tidak Aktif": Detail, Edit.

2. Pengelola: Shipper
- Status "Aktif": Detail, Edit.
- Status "Tidak Aktif": Detail, Edit.

3. Catatan tambahan:
- Status "Menunggu" hanya mungkin terjadi pada Pengelola "Vendor" dengan Metode Registrasi "Mandiri" yang belum diselesaikan vendor
- Action "Kirim Undangan" hanya tampil selama status masih "Menunggu".
```

### TMS.S003-R05 · Halaman Tambah Vendor (Invite Vendor)

Ref: `Spek TMS-S!A6:I6` · No: 5 · Tipe: Rule · Spesifikasi Selesai: 2026-07-01

```text
Halaman Tambah Vendor (Invite Vendor) Terdapat rules:

1. Shipper wajib memilih Metode Registrasi ("Registrasi Mandiri" / "Registrasi Dibantu Admin") dan Pengelola ("Vendor" / "Shipper") sebelum melanjutkan mengisi data.
2. Field data yang tampil menyesuaikan Metode Registrasi yang dipilih:
- Metode "Registrasi Mandiri": hanya menampilkan 2 field (Nama Perusahaan, Email). Field lainnya dilengkapi oleh vendor sendiri saat proses registrasi.
- Metode "Registrasi Dibantu Admin": menampilkan seluruh field Informasi Perusahaan secara lengkap, diisi langsung oleh shipper atas nama vendor.
3. Section "Akses" (Manajemen Sub User, Jenis Pengiriman FCL/FTL) selalu ditampilkan & dapat diatur shipper pada kedua Metode Registrasi, terlepas dari Pengelola yang dipilih.
4. Satu alamat Email hanya dapat diinput/diundang satu kali oleh shipper yang sama. Jika email sudah terdaftar sebagai vendor pada shipper tersebut, tampilkan error: "Email ini sudah terdaftar sebagai vendor Anda."
5. Tombol "Batal" kembali ke halaman Daftar Vendor tanpa menyimpan/mengirim apapun. Dan menampilkan pop up konfirmasi 
6. Setelah shipper submit form, sistem melakukan aksi sesuai kombinasi Metode & Pengelola.
- Registrasi Mandiri + Pengelola Vendor: Registrasi & pengelolaan operasional (armada, sopir, penugasan) sepenuhnya oleh vendor. Shipper tidak dapat membantu proses penugasan. Sistem mengirim email undangan registrasi berisi link aktivasi. Status vendor otomatis "Menunggu" sampai vendor menyelesaikan registrasi.
- Registrasi Dibantu Admin + Pengelola Vendor: Registrasi dibantu/diisi shipper, namun pengelolaan operasional sepenuhnya oleh vendor. Shipper tidak dapat membantu proses penugasan. Begitu shipper menyimpan data, sistem otomatis membuat akun vendor (email & password sementara) dan mengirim email informasi akun. Status vendor otomatis "Aktif".
- Registrasi Dibantu Admin + Pengelola Shipper: Registrasi & pengelolaan operasional sepenuhnya oleh shipper. Vendor tidak memiliki akses login ke sistem. Status vendor otomatis "Aktif" begitu data disimpan.
```

### TMS.S003-R06 · Perubahan Pengelola (Edit Vendor)

Ref: `Spek TMS-S!A7:I7` · No: 6 · Tipe: Rule · Spesifikasi Selesai: 2026-07-01

```text
Perubahan Pengelola (Edit Vendor) Terdapat rules:

1. Data vendor dapat diubah setelah vendor berstatus aktif, melalui action "Edit".
2. Perubahan Pengelola dari Shipper → Vendor: sistem membuat akun baru untuk vendor & mengirim email informasi akun (email & password sementara).
3. Perubahan Pengelola dari Vendor → Shipper: akun vendor yang sudah ada tetap aktif dan tetap dapat login, namun akses berubah menjadi read-only (hanya dapat melihat data, tidak dapat melakukan penugasan/operasional). Sistem mengirim email notifikasi pengalihan pengelolaan ke vendor.
4. Kontrol penugasan/operasional hanya dapat dipegang oleh salah satu pihak (vendor atau shipper) dalam satu waktu, tidak dapat aktif bersamaan.
```

### TMS.S003-R07 · Status Vendor & Transisi

Ref: `Spek TMS-S!A8:I8` · No: 7 · Tipe: Rule · Spesifikasi Selesai: 2026-07-01

```text
Status Vendor & Transisi Terdapat rule:

1. Terdapat 3 status: Menunggu, Aktif, Tidak Aktif.
- Menunggu: Undangan sudah dikirim (khusus Metode "Registrasi Mandiri"), vendor belum mengklik link aktivasi/belum menyelesaikan registrasi.
- Aktif: Vendor sudah menyelesaikan registrasi mandiri, ATAU data vendor sudah selesai diinput shipper via "Registrasi Dibantu Admin". Vendor (jika Pengelola Vendor) dapat login dan menggunakan sistem.
- Tidak Aktif: Shipper menonaktifkan vendor secara manual. Vendor (jika sebelumnya punya akses) tidak dapat login. Seluruh data tetap tersimpan.
2. Transisi Menunggu → Aktif terjadi otomatis oleh sistem mengikuti progres registrasi vendor.
3. Transisi Aktif ↔ Tidak Aktif hanya dapat dikendalikan manual oleh shipper melalui action pada tabel/detail vendor.
4. Status "Menunggu" tidak berlaku untuk Metode "Registrasi Dibantu Admin" (baik Pengelola Vendor maupun Shipper), karena data selalu lengkap saat disimpan.
```

### TMS.S003-R08 · Kirim Undangan Ulang (Resend)

Ref: `Spek TMS-S!A9:I9` · No: 8 · Tipe: Rule · Spesifikasi Selesai: 2026-07-01

```text
Kirim Undangan Ulang (Resend) Terdapat rules:

1. Action "Kirim Undangan" hanya tersedia untuk vendor berstatus "Menunggu".
2. Setiap resend akan generate link aktivasi baru dan menonaktifkan link sebelumnya (link lama tidak dapat lagi diakses).
3. Timestamp acuan perhitungan masa berlaku expired ter-reset mengikuti waktu resend.
```

### TMS.S003-R09 · Notifikasi Email

Ref: `Spek TMS-S!A10:I10` · No: 9 · Tipe: Rule · Spesifikasi Selesai: 2026-07-01

```text
Notifikasi Email Terdapat 4 jenis notifikasi email pada modul ini:

1. Undangan Registrasi Mandiri - dikirim saat invite dengan Metode "Registrasi Mandiri". Berisi link aktivasi & informasi masa berlaku link.
2. Informasi Akun (Registrasi Dibantu Admin + Pengelola Vendor) - dikirim otomatis saat shipper menyimpan data vendor lengkap. Berisi email & password sementara.
3. Notifikasi Pengalihan Pengelolaan dari Shipper ke Vendor - dikirim saat Pengelola diubah dari Shipper menjadi Vendor. Berisi email & password sementara (akun baru).
4. Notifikasi Pengalihan Pengelolaan dari Vendor ke Shipper - dikirim saat Pengelola diubah dari Vendor menjadi Shipper. Berisi informasi pengalihan (tanpa akun baru).
```

# Audit placeholder field WhatsApp — OPS staging — 2026-09-26

## Scope dan metode

- Requirement dari user: placeholder `No. WhatsApp Sopir` memakai format kode negara `62xxx` pada (1) Tambah Sopir di Master Sopir dan (2) opsi Isi Data Manual di Penugasan Sopir Bongkar; field WhatsApp lain memakai format `08xxxx`.
- Target: `https://ops-staging.prahu-hub.com`.
- Observasi Playwright Chromium, read-only, akun Admin Utama dan Vendor dari `config/env.md`.
- Seluruh non-GET API bisnis diblok. Hasil run: tidak ada mutasi yang terblok maupun terkirim. Kedua sesi logout berhasil.
- Evidence utama: `artifacts/evidence/WA20260926-final/whatsapp-audit/audit.json`, snapshot, dan screenshot pada subfolder `admin/` dan `vendor/`.

## Verdict improvement yang diminta

| Target requirement | Observasi runtime | Verdict |
|---|---|---|
| Admin — Master Sopir > Tambah Sopir (`/master/sopir/tambah`) menggunakan `62xxx` | Label `No. WhatsApp *`; placeholder `Contoh: 081234567898` | **FAILED — belum memakai 62xxx** |
| Vendor — Master Sopir > Tambah Sopir (`/vendor-portal/master/sopir/tambah`) menggunakan `62xxx` | Label `Nomor WhatsApp *`; placeholder `Masukkan Nomor WhatsApp`; helper `Contoh: 081234567898` | **FAILED — belum memakai 62xxx** |
| Penugasan Tracking > Penugasan Sopir Bongkar > Sopir Bongkar > Isi Data Manual menggunakan `62xxx` | Label `No. WhatsApp (opsional)`; placeholder `Contoh: 081234567898` | **FAILED — belum memakai 62xxx** |

Catatan cakupan: requirement menyebut “Master Sopir” tanpa membatasi role. Karena OPS memiliki Master Sopir versi Admin dan Vendor, keduanya diperiksa. Keduanya belum memberi petunjuk format `62xxx`.

## Inventaris halaman dengan input terkait WhatsApp

### Input data bisnis

| Halaman/state | Route | Field yang teramati | Placeholder / petunjuk format |
|---|---|---|---|
| Master Drop Point — Tambah Perusahaan | `/master/customer/tambah` | No. WhatsApp PIC | `Masukkan No. WhatsApp PIC`; helper `Contoh: 081234567898` |
| Master Sopir Admin — Tambah Sopir | `/master/sopir/tambah` | No. WhatsApp | `Contoh: 081234567898` |
| Master Sopir Vendor — Tambah Sopir | `/vendor-portal/master/sopir/tambah` | Nomor WhatsApp | `Masukkan Nomor WhatsApp`; helper `Contoh: 081234567898` |
| Master Customer Service — Tambah | `/master/cs/tambah` | No. WhatsApp CS | `Masukkan No. WhatsApp CS` (tidak ada contoh format pada state yang diamati) |
| Manajemen Vendor — Tambah, Registrasi Dibantu Admin | `/manajemen-vendor/tambah` | No. WhatsApp; No. WhatsApp CS | Keduanya `Contoh: 081234567899` |
| Order — Buat | `/order/buat` | No. WhatsApp PIC muat; No. WhatsApp PIC bongkar | Keduanya `Masukkan No. WhatsApp PIC` (tidak ada contoh format pada state kosong) |
| Akun Saya Admin — Edit Informasi | `/akun-saya` | No. WhatsApp | Placeholder `08xxxxxxxxxx`; helper `Contoh: 081234567898` |
| Akun Saya Vendor — Edit Informasi | `/vendor-portal/akun-saya/edit` | No. WhatsApp; No. WhatsApp CS | Keduanya `Contoh: 081234567899` |
| Pengaturan Sistem | `/setting/sistem` | Nomor WhatsApp CS | `08xxxxxxxxxx` |
| Penugasan Sopir Bongkar — Isi Data Manual | `/penugasan-tracking/<id>/tugaskan-bongkar` | No. WhatsApp (opsional) | `Contoh: 081234567898` |

Vendor Order route `/vendor-portal/order/buat` juga diperiksa, tetapi tidak menampilkan input WhatsApp pada state awal yang teramati. `Pengaturan Akun` tidak menampilkan input WhatsApp pada state daftar.

### Filter pencarian

| Halaman | Route | Field filter / placeholder |
|---|---|---|
| Master Drop Point | `/master/customer` | `Masukkan No. WhatsApp PIC` |
| Master Customer Service | `/master/cs` | `Masukkan No. WhatsApp CS` |
| Manajemen Vendor | `/manajemen-vendor` | `Masukkan No. WhatsApp`; `Masukkan No. WhatsApp CS` |
| Master Sopir Vendor | `/vendor-portal/master/sopir` | `Masukkan No. WhatsApp` |

Master Sopir Admin memiliki field/filter WhatsApp pada evidence route map 2026-09-23, tetapi pada state live 2026-09-26 field tersebut tidak terlihat sebagai input WhatsApp. Statusnya **NEEDS VALIDATION** untuk state filter yang mungkin perlu dibuka.

## Triase

- **Confirmed mismatch terhadap requirement user:** tiga target di tabel verdict masih memakai contoh format lokal `08...`, bukan `62xxx`.
- **Konsistensi saat ini:** seluruh petunjuk format eksplisit yang teramati masih mengarah ke `08...`; beberapa field hanya memakai placeholder generik tanpa contoh format.
- **Risiko UX/validasi:** bila hanya dua field sopir diubah menjadi `62xxx`, pengguna akan menerima dua konvensi input WhatsApp dalam aplikasi. Backend normalization dan validasi penyimpanan tidak diuji karena audit ini read-only. Perlu dipastikan apakah perbedaan format memang aturan bisnis yang disengaja.

## Pemeriksaan fungsi input lanjutan

Run lanjutan: `artifacts/evidence/WAF20260926-final2/whatsapp-function/results.json`. Setiap field diuji di sisi klien tanpa klik Simpan menggunakan huruf, campuran angka/huruf/simbol, nomor `08`, nomor `62`, lebih dari 15 digit, dan nomor pendek. Nilai awal dikembalikan setelah pengujian. Tidak ada request mutasi bisnis; sesi logout berhasil.

| Area | Nonangka | Input `628123456789` setelah blur | Panjang >15 | Nomor pendek `123` setelah blur |
|---|---|---|---|---|
| Master Drop Point | dibuang | menjadi `08123456789` | dipotong 15 digit | tetap diterima di input |
| Master Sopir Admin | dibuang | menjadi `08123456789` | dipotong 15 digit | tetap diterima di input |
| Master CS | dibuang | menjadi `08123456789` | dipotong 15 digit | tetap diterima di input |
| Manajemen Vendor (No. WA & WA CS) | dibuang | menjadi `08123456789` | dipotong 15 digit | tetap diterima di input |
| Order (PIC muat & bongkar) | dibuang | menjadi `08123456789` | dipotong 15 digit | tetap diterima di input |
| Pengaturan Sistem | dibuang | menjadi `08123456789` | dipotong 15 digit | tetap diterima di input |
| Akun Saya Admin | dibuang | **tetap `628123456789`** | dipotong 15 digit | tetap diterima di input |
| Penugasan Sopir Bongkar manual | dibuang | menjadi `08123456789` | dipotong 15 digit | tetap diterima di input |
| Master Sopir Vendor | dibuang | menjadi `08123456789` | dipotong 15 digit | tetap diterima di input |
| Akun Saya Vendor (No. WA & WA CS) | dibuang | menjadi `08123456789` | dipotong 15 digit | tetap diterima di input |

Verdict fungsi:

- Filter karakter angka konsisten: huruf dibuang dan input campuran menyisakan digit.
- Hampir semua field menormalisasi awalan negara `62` menjadi awalan lokal `0`. Ini bertentangan dengan improvement `62xxx` untuk Master Sopir dan Penugasan Sopir Bongkar.
- Akun Saya Admin berbeda sendiri: nilai `62...` dipertahankan. Perilaku lintas halaman belum konsisten.
- Batas 15 digit konsisten pada state yang diuji.
- Nomor sangat pendek tetap berada di input setelah blur dan tidak memunculkan helper format. Validasi saat penyimpanan **NEEDS VALIDATION** karena run ini sengaja tidak submit form. Duplikasi juga tidak diuji karena memerlukan submit/data test terkontrol.

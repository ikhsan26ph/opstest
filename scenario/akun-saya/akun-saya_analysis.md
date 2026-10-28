# TMS.S023 — Akun Saya · Analysis (REQ / VAL / AC)

> Sumber: [`akun-saya_spec.md`](akun-saya_spec.md) (verbatim `Spek TMS-S` baris 154–159) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Ketentuan Umum (Akun Saya) | TMS.S023-R02 | Admin utama shipper, Sub user shipper, Vendor | REQ-001–REQ-003 | — | AC-001–AC-002 |
| SEC-02 | Tampilan Akun Saya (Shipper & Vendor) | TMS.S023-R03 | Admin utama shipper, Sub user shipper, Vendor | REQ-004–REQ-006 | — | AC-003–AC-004 |
| SEC-03 | Edit Informasi (Sisi Vendor) | TMS.S023-R04 | Vendor | REQ-007–REQ-021 | VAL-001–VAL-004 | AC-005–AC-014 |
| SEC-04 | Edit Informasi (Admin Utama Shipper & Sub User Shipper) | TMS.S023-R05 | Admin utama shipper, Sub user shipper | REQ-022–REQ-029 | VAL-005–VAL-006 | AC-015–AC-019 |
| SEC-05 | Ubah Password | TMS.S023-R06 | Seluruh tipe akun | REQ-030–REQ-042 | VAL-007–VAL-010 | AC-020–AC-029 |

TMS.S023-R01 (Pendahuluan) tidak menghasilkan REQ; isinya: menu akun saya berisi "informasi akun terdaftar dan aksi edit dan ubah password".

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Admin utama shipper | Edit Informasi (Nama, Nomor WhatsApp) & Ubah Password akun miliknya sendiri | TMS.S023-R02 poin 1–2; R05 poin 1 |
| Sub user shipper | Sama dengan admin utama shipper | TMS.S023-R02 poin 1–2; R05 poin 1 |
| Vendor | Edit Informasi (field sisi vendor) & Ubah Password akun miliknya sendiri | TMS.S023-R02 poin 1–2; R04 |
| Semua aktor | Tidak dapat mengedit akun user lain melalui menu ini | TMS.S023-R02 poin 1 |

## 3. Requirement (REQ)
### SEC-01 · Ketentuan Umum (Akun Saya)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Admin utama shipper, sub user shipper, dan vendor hanya dapat mengedit informasi akun miliknya sendiri (tidak dapat mengedit akun user lain melalui menu ini). | TMS.S023-R02 poin 1 | TERTULIS |
| REQ-002 | Seluruh tipe akun memiliki 2 aksi pada menu Akun Saya: Edit Informasi & Ubah Password. | TMS.S023-R02 poin 2 | TERTULIS |
| REQ-003 | Desain yang dilampirkan hanya berlaku untuk tampilan Akun Saya sisi Vendor. | TMS.S023-R02 poin 3 | REF-EKSTERNAL (Q-01) |

### SEC-02 · Tampilan Akun Saya
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-004 | Tampilan admin utama & sub user shipper menampilkan field: Nama, Email, Nomor WhatsApp, Bagian Staff. | TMS.S023-R03 (bagian "Tampilan Akun Saya (Admin Utama Shipper & Sub User Shipper)") poin 1 | TERTULIS |
| REQ-005 | Layout kartu/section tampilan shipper mengacu pada pengerjaan yang ada pada TMS LKL. | TMS.S023-R03 (bagian "Tampilan Akun Saya (Admin Utama Shipper & Sub User Shipper)") poin 2 | REF-EKSTERNAL (Q-01) |
| REQ-006 | Tampilan vendor mengikuti desain: section Informasi Umum, Informasi Perusahaan, dan Nomor WhatsApp Customer Service. | TMS.S023-R03 (bagian "Tampilan Akun Saya (Vendor)") poin 1 | REF-EKSTERNAL (Q-01) |

### SEC-03 · Edit Informasi (Sisi Vendor)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-007 | Field read-only (tidak dapat diedit): Nama Perusahaan, Email, Kode Pos. | TMS.S023-R04 poin 1 | TERTULIS |
| REQ-008 | Kode Pos terisi otomatis oleh sistem mengikuti pilihan Desa/Kelurahan (sumber tertulis "ode Pos"). | TMS.S023-R04 poin 2 | TERTULIS (typo, Q-02) |
| REQ-009 | Field wajib diisi: No. WhatsApp, Nama PIC Perusahaan, Provinsi, Kota/Kab., Kecamatan, Desa/Kelurahan, Alamat, No. WhatsApp CS. | TMS.S023-R04 poin 3 | TERTULIS |
| REQ-010 | Field tidak wajib: Alias Perusahaan, Catatan Tambahan, Dokumen Tambahan. | TMS.S023-R04 poin 4 | KONFLIK (Q-04) |
| REQ-011 | Dropdown wilayah bertingkat: Provinsi => Kota/Kab. => Kecamatan => Desa/Kelurahan. | TMS.S023-R04 poin 5 | TERTULIS |
| REQ-012 | Perubahan dropdown level atas mereset pilihan level di bawahnya. | TMS.S023-R04 poin 5 | TERTULIS |
| REQ-013 | No. WhatsApp & No. WhatsApp CS hanya menerima angka. | TMS.S023-R04 poin 6 | TERTULIS |
| REQ-014 | No. WhatsApp & No. WhatsApp CS mengikuti validasi format nomor yang berlaku pada sistem. | TMS.S023-R04 poin 6 | REF-EKSTERNAL (Q-05) |
| REQ-015 | Dokumen Tambahan maksimal 4MB, format .pdf atau .jpg. | TMS.S023-R04 poin 7 | KONFLIK (Q-03) |
| REQ-016 | File di luar ketentuan Dokumen Tambahan ditolak dengan pesan error. | TMS.S023-R04 poin 7 | TERTULIS (teks lihat Q-08) |
| REQ-017 | Dokumen yang sudah terunggah dapat dihapus (icon ✕). | TMS.S023-R04 poin 8 | TERTULIS |
| REQ-018 | Jika field wajib tidak diisi: tampil helper error & border field berubah warna error. | TMS.S023-R04 poin 9 | TERTULIS |
| REQ-019 | Button "Batal": membatalkan pengisian data dan menampilkan pop up konfirmasi. | TMS.S023-R04 poin 10 | AMBIGU (Q-08) |
| REQ-020 | Button "Simpan": memvalidasi seluruh field wajib sebelum submit. | TMS.S023-R04 poin 10 | TERTULIS |
| REQ-021 | Button "Simpan": menyimpan data dan menampilkan pop up konfirmasi. | TMS.S023-R04 poin 10 | AMBIGU (Q-08) |

### SEC-04 · Edit Informasi (Admin Utama Shipper & Sub User Shipper)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-022 | Field yang dapat diedit: Nama, Nomor WhatsApp. | TMS.S023-R05 poin 1 | TERTULIS |
| REQ-023 | Email & Bagian Staff read-only (disable, tidak dapat diedit). | TMS.S023-R05 poin 2 | TERTULIS |
| REQ-024 | Nomor WhatsApp hanya menerima angka. | TMS.S023-R05 poin 3 | TERTULIS |
| REQ-025 | Nomor WhatsApp mengikuti validasi format nomor yang berlaku pada sistem. | TMS.S023-R05 poin 3 | REF-EKSTERNAL (Q-05) |
| REQ-026 | Jika field wajib tidak diisi: tampil helper error & border field berubah warna error. | TMS.S023-R05 poin 4 | AMBIGU (Q-06) |
| REQ-027 | Button "Batal": membatalkan pengisian data dan menampilkan pop up konfirmasi. | TMS.S023-R05 poin 5 | AMBIGU (Q-08) |
| REQ-028 | Button "Simpan": memvalidasi seluruh field wajib sebelum submit. | TMS.S023-R05 poin 5 | TERTULIS |
| REQ-029 | Button "Simpan": menyimpan data dan menampilkan pop up konfirmasi. | TMS.S023-R05 poin 5 | AMBIGU (Q-08) |

### SEC-05 · Ubah Password
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-030 | Alur 3 langkah: Pilih Metode OTP => Verifikasi OTP => Input Password Baru. | TMS.S023-R06 poin 1 | TERTULIS |
| REQ-031 | Wajib memilih salah satu metode OTP: via Email atau via WhatsApp. | TMS.S023-R06 poin 2 | TERTULIS |
| REQ-032 | Button "Lanjutkan" aktif setelah salah satu metode OTP dipilih. | TMS.S023-R06 poin 2 | TERTULIS |
| REQ-033 | Kode OTP 6 digit, dikirim ke email/WhatsApp sesuai metode yang dipilih. | TMS.S023-R06 poin 3 | TERTULIS |
| REQ-034 | Terdapat timer countdown pada langkah verifikasi OTP. | TMS.S023-R06 poin 4 | TERTULIS |
| REQ-035 | Tautan "Kirim Ulang Kode" nonaktif selama timer berjalan dan aktif setelah timer habis; sumber mencantumkan "(5 menit)". | TMS.S023-R06 poin 4 | AMBIGU (Q-07) |
| REQ-036 | Kode OTP salah/kedaluwarsa menampilkan pesan error. | TMS.S023-R06 poin 5 | AMBIGU (Q-07, Q-08) |
| REQ-037 | Password Baru wajib minimal 8 karakter dengan kombinasi huruf dan angka. | TMS.S023-R06 poin 6 | TERTULIS |
| REQ-038 | Konfirmasi Password harus sama persis dengan Password Baru. | TMS.S023-R06 poin 7 | TERTULIS |
| REQ-039 | Password Baru & Konfirmasi Password memiliki toggle show/hide. | TMS.S023-R06 poin 8 | TERTULIS |
| REQ-040 | Button Simpan berhasil hanya jika rule password (poin 6 & 7) terpenuhi. | TMS.S023-R06 poin 9 | TERTULIS |
| REQ-041 | Button "Batal": membatalkan proses ubah password dan menampilkan konfirmasi. | TMS.S023-R06 poin 10 | AMBIGU (Q-08) |
| REQ-042 | Button "Simpan": menyimpan password baru dan menampilkan konfirmasi. | TMS.S023-R06 poin 10 | AMBIGU (Q-08) |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-03 | No. WhatsApp, Nama PIC Perusahaan, Provinsi, Kota/Kab., Kecamatan, Desa/Kelurahan, Alamat, No. WhatsApp CS | Wajib diisi | "tampilkan helper error & border field berubah warna error" | TMS.S023-R04 poin 3, 9 |
| VAL-002 | SEC-03 | No. WhatsApp (vendor) | Hanya angka; mengikuti validasi format nomor yang berlaku pada sistem | Tidak disebut di spec | TMS.S023-R04 poin 6 |
| VAL-003 | SEC-03 | No. WhatsApp CS | Hanya angka; mengikuti validasi format nomor yang berlaku pada sistem | Tidak disebut di spec | TMS.S023-R04 poin 6 |
| VAL-004 | SEC-03 | Dokumen Tambahan | Maksimal 4MB, format .pdf atau .jpg | "ditolak dengan pesan error" (teks pesan tidak disebut) | TMS.S023-R04 poin 7 |
| VAL-005 | SEC-04 | Nomor WhatsApp (shipper) | Hanya angka; mengikuti validasi format nomor yang berlaku pada sistem | Tidak disebut di spec | TMS.S023-R05 poin 3 |
| VAL-006 | SEC-04 | Field wajib shipper (tidak dirinci) | Wajib diisi | "tampilkan helper error & border field berubah warna error" | TMS.S023-R05 poin 4 |
| VAL-007 | SEC-05 | Metode OTP | Wajib memilih salah satu (Email / WhatsApp) | Button "Lanjutkan" belum aktif sebelum metode dipilih | TMS.S023-R06 poin 2 |
| VAL-008 | SEC-05 | Kode OTP | 6 digit; harus benar dan belum kedaluwarsa | "tampilkan pesan error" (teks pesan tidak disebut) | TMS.S023-R06 poin 3, 5 |
| VAL-009 | SEC-05 | Password Baru | Wajib, minimal 8 karakter, kombinasi huruf dan angka | Simpan tidak berhasil ("Button Simpan berhasil => hanya jika rule password (poin 6 & 7) terpenuhi") | TMS.S023-R06 poin 6, 9 |
| VAL-010 | SEC-05 | Konfirmasi Password | Harus sama persis dengan Password Baru | Simpan tidak berhasil (poin 9) | TMS.S023-R06 poin 7, 9 |

## 5. Acceptance Criteria (AC)
### SEC-01 · Ketentuan Umum (Akun Saya)
- **AC-001** (REQ-001) — **Diberikan** login sebagai admin utama shipper, sub user shipper, atau vendor **Ketika** membuka menu Akun Saya **Maka** yang dapat diedit hanya informasi akun miliknya sendiri, bukan akun user lain · Sumber: TMS.S023-R02 poin 1
- **AC-002** (REQ-002) — **Diberikan** login dengan tipe akun apa pun **Ketika** membuka menu Akun Saya **Maka** tersedia 2 aksi: Edit Informasi & Ubah Password · Sumber: TMS.S023-R02 poin 2

### SEC-02 · Tampilan Akun Saya
- **AC-003** (REQ-004) — **Diberikan** login sebagai admin utama atau sub user shipper **Ketika** membuka Akun Saya **Maka** tampil field Nama, Email, Nomor WhatsApp, Bagian Staff · Sumber: TMS.S023-R03 (bagian shipper) poin 1
- **AC-004** (REQ-006) — **Diberikan** login sebagai vendor **Ketika** membuka Akun Saya **Maka** tampil section Informasi Umum, Informasi Perusahaan, dan Nomor WhatsApp Customer Service · Sumber: TMS.S023-R03 (bagian vendor) poin 1

### SEC-03 · Edit Informasi (Sisi Vendor)
- **AC-005** (REQ-007) — **Diberikan** vendor membuka Edit Informasi **Ketika** mencoba mengubah Nama Perusahaan, Email, atau Kode Pos **Maka** field tersebut read-only · Sumber: TMS.S023-R04 poin 1
- **AC-006** (REQ-008) — **Diberikan** vendor di Edit Informasi **Ketika** memilih Desa/Kelurahan **Maka** Kode Pos terisi otomatis oleh sistem · Sumber: TMS.S023-R04 poin 2
- **AC-007** (REQ-011, REQ-012) — **Diberikan** seluruh dropdown wilayah sudah terisi **Ketika** vendor mengubah dropdown level atas **Maka** pilihan level di bawahnya direset · Sumber: TMS.S023-R04 poin 5
- **AC-008** (REQ-009, REQ-018, VAL-001) — **Diberikan** salah satu field wajib vendor kosong **Ketika** validasi berjalan (termasuk saat klik "Simpan") **Maka** tampil helper error & border field berwarna error · Sumber: TMS.S023-R04 poin 3, 9, 10
- **AC-009** (REQ-013, VAL-002, VAL-003) — **Diberikan** vendor mengisi No. WhatsApp atau No. WhatsApp CS **Ketika** memasukkan karakter selain angka **Maka** field hanya menerima angka · Sumber: TMS.S023-R04 poin 6
- **AC-010** (REQ-015, REQ-016, VAL-004) — **Diberikan** vendor mengunggah Dokumen Tambahan berukuran > 4MB atau berformat selain .pdf/.jpg **Ketika** upload diproses **Maka** file ditolak dengan pesan error · Sumber: TMS.S023-R04 poin 7
- **AC-011** (REQ-017) — **Diberikan** dokumen sudah terunggah **Ketika** vendor klik icon ✕ **Maka** dokumen terhapus · Sumber: TMS.S023-R04 poin 8
- **AC-012** (REQ-019) — **Diberikan** vendor sedang mengedit informasi **Ketika** klik "Batal" **Maka** tampil pop up konfirmasi pembatalan pengisian data · Sumber: TMS.S023-R04 poin 10
- **AC-013** (REQ-020, REQ-021) — **Diberikan** seluruh field wajib vendor terisi dan valid **Ketika** klik "Simpan" **Maka** tampil pop up konfirmasi dan data tersimpan · Sumber: TMS.S023-R04 poin 10
- **AC-014** (REQ-020, VAL-001) — **Diberikan** ada field wajib vendor yang kosong **Ketika** klik "Simpan" **Maka** data tidak disubmit (validasi field wajib sebelum submit) · Sumber: TMS.S023-R04 poin 10

### SEC-04 · Edit Informasi (Admin Utama Shipper & Sub User Shipper)
- **AC-015** (REQ-022, REQ-023) — **Diberikan** admin utama/sub user shipper membuka Edit Informasi **Ketika** form tampil **Maka** Nama & Nomor WhatsApp dapat diedit, Email & Bagian Staff disable · Sumber: TMS.S023-R05 poin 1–2
- **AC-016** (REQ-024, VAL-005) — **Diberikan** shipper mengisi Nomor WhatsApp **Ketika** memasukkan karakter selain angka **Maka** field hanya menerima angka · Sumber: TMS.S023-R05 poin 3
- **AC-017** (REQ-026, VAL-006) — **Diberikan** field wajib shipper kosong **Ketika** validasi berjalan **Maka** tampil helper error & border field berwarna error · Sumber: TMS.S023-R05 poin 4 (field wajib lihat Q-06)
- **AC-018** (REQ-027) — **Diberikan** shipper sedang mengedit informasi **Ketika** klik "Batal" **Maka** tampil pop up konfirmasi pembatalan · Sumber: TMS.S023-R05 poin 5
- **AC-019** (REQ-028, REQ-029) — **Diberikan** field wajib shipper terisi dan valid **Ketika** klik "Simpan" **Maka** tampil pop up konfirmasi dan data tersimpan · Sumber: TMS.S023-R05 poin 5

### SEC-05 · Ubah Password
- **AC-020** (REQ-030, REQ-031, REQ-032, VAL-007) — **Diberikan** user di langkah Pilih Metode OTP **Ketika** belum memilih metode **Maka** button "Lanjutkan" belum aktif; setelah memilih Email atau WhatsApp button "Lanjutkan" aktif · Sumber: TMS.S023-R06 poin 1–2
- **AC-021** (REQ-033) — **Diberikan** user memilih metode Email (atau WhatsApp) **Ketika** melanjutkan **Maka** kode OTP 6 digit dikirim ke email (atau WhatsApp) sesuai metode · Sumber: TMS.S023-R06 poin 3
- **AC-022** (REQ-034, REQ-035) — **Diberikan** user di langkah Verifikasi OTP **Ketika** timer countdown masih berjalan **Maka** tautan "Kirim Ulang Kode" nonaktif, dan menjadi aktif setelah timer habis · Sumber: TMS.S023-R06 poin 4
- **AC-023** (REQ-036, VAL-008) — **Diberikan** user di langkah Verifikasi OTP **Ketika** memasukkan kode OTP salah **Maka** tampil pesan error · Sumber: TMS.S023-R06 poin 5
- **AC-024** (REQ-036, VAL-008) — **Diberikan** kode OTP sudah kedaluwarsa **Ketika** user memasukkan kode tersebut **Maka** tampil pesan error · Sumber: TMS.S023-R06 poin 5
- **AC-025** (REQ-037, REQ-040, VAL-009) — **Diberikan** Password Baru kurang dari 8 karakter atau tanpa kombinasi huruf dan angka **Ketika** klik Simpan **Maka** penyimpanan tidak berhasil · Sumber: TMS.S023-R06 poin 6, 9
- **AC-026** (REQ-038, REQ-040, VAL-010) — **Diberikan** Konfirmasi Password tidak sama persis dengan Password Baru **Ketika** klik Simpan **Maka** penyimpanan tidak berhasil · Sumber: TMS.S023-R06 poin 7, 9
- **AC-027** (REQ-039) — **Diberikan** user mengisi Password Baru & Konfirmasi Password **Ketika** menekan toggle show/hide **Maka** isian dapat ditampilkan/disembunyikan · Sumber: TMS.S023-R06 poin 8
- **AC-028** (REQ-040, REQ-042) — **Diberikan** Password Baru & Konfirmasi Password memenuhi poin 6 & 7 **Ketika** klik Simpan **Maka** tampil konfirmasi dan password baru tersimpan · Sumber: TMS.S023-R06 poin 9–10
- **AC-029** (REQ-041) — **Diberikan** user berada dalam proses ubah password **Ketika** klik Batal **Maka** tampil konfirmasi pembatalan proses ubah password · Sumber: TMS.S023-R06 poin 10

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Registrasi Vendor (TMS.S004-R05) | Field informasi perusahaan vendor yang diisi saat registrasi diedit kembali di Akun Saya; aturan wajib (Alias Perusahaan) dan ketentuan Dokumen Tambahan berbeda | TMS.S023-R04 poin 4, 7; TMS.S004-R05 poin 3, 10; spec-index §4 no.5 |
| Manajemen Vendor (TMS.S003-R06) | Vendor yang Pengelola-nya diubah menjadi Shipper memiliki akses read-only; penerapan pada Akun Saya tidak disebut (Q-10) | TMS.S003-R06 poin 3 |
| Pengaturan Akun (TMS.S021) | Admin utama & sub user shipper sebagai tipe akun; field Bagian Staff read-only di Akun Saya | TMS.S023-R02 poin 1; R05 poin 2 |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | Desain yang dilampirkan hanya untuk sisi Vendor dan tidak ada di file; layout sisi shipper "mengacu pada pengerjaan yang ada pada TMS LKL" (di luar file). | TMS.S023-R02 poin 3; R03 | REQ-003, REQ-005, REQ-006 | §4 no.34 |
| Q-02 | Typo sumber "ode Pos" (diasumsikan merujuk Kode Pos pada poin 1?) — perlu konfirmasi. | TMS.S023-R04 poin 2 | REQ-008 | §4 no.34 |
| Q-03 | Dokumen Tambahan: S023 maks 4MB, .pdf/.jpg; S004-R05 poin 10 "perlu dikonfirmasi" (contoh .pdf/.jpg/.jpeg/.png, 5MB). Ketentuan mana yang berlaku? | TMS.S023-R04 poin 7; TMS.S004-R05 poin 10 | REQ-015, REQ-016 | §4 no.5 |
| Q-04 | Alias Perusahaan "tidak wajib" di Akun Saya (S023-R04 poin 4), tetapi "wajib" saat registrasi vendor (S004-R05 poin 3). | TMS.S023-R04 poin 4; TMS.S004-R05 poin 3 | REQ-010 | Baru |
| Q-05 | "validasi format nomor yang berlaku pada sistem" tidak didefinisikan di file (panjang, awalan, pesan error). | TMS.S023-R04 poin 6; R05 poin 3 | REQ-014, REQ-025 | Baru |
| Q-06 | Edit Informasi shipper menyebut "Jika field wajib tidak diisi" tanpa merinci field mana yang wajib (Nama? Nomor WhatsApp?). | TMS.S023-R05 poin 1, 4 | REQ-026 | Baru |
| Q-07 | "(5 menit)" di akhir poin 4 — durasi timer countdown "Kirim Ulang Kode" atau masa berlaku OTP? Masa berlaku OTP (untuk kondisi "kedaluwarsa" di poin 5) tidak disebut terpisah. | TMS.S023-R06 poin 4–5 | REQ-035, REQ-036 | Baru |
| Q-08 | Teks pesan error (OTP salah/kedaluwarsa, file ditolak) dan teks pop up konfirmasi tidak disebut. Untuk "Simpan", apakah pop up konfirmasi muncul sebelum menyimpan (konfirmasi) atau sesudah (informasi berhasil)? | TMS.S023-R04 poin 7, 10; R05 poin 5; R06 poin 5, 10 | REQ-016, REQ-019, REQ-021, REQ-027, REQ-029, REQ-036, REQ-041, REQ-042 | Baru |
| Q-09 | Penomoran kolom D sumber: R02 No 2 lalu R03 No 4 (No 3 tidak ada) dan R03 menggabungkan dua tampilan — apakah ada rule yang hilang? | TMS.S023-R02, R03 | — | Baru |
| Q-10 | Vendor yang Pengelola-nya dialihkan ke Shipper menjadi read-only (S003-R06 poin 3) — apakah tetap dapat Edit Informasi/Ubah Password di Akun Saya? | TMS.S023-R02 poin 2; TMS.S003-R06 poin 3 | REQ-002 | Baru |

## 9. Catatan testability (bukan requirement)
- Pengiriman OTP via Email/WhatsApp (REQ-033) memerlukan akses kotak masuk email atau nomor WhatsApp akun uji.
- Timer countdown & OTP kedaluwarsa (REQ-034–REQ-036) memerlukan waktu berjalan.
- Upload Dokumen Tambahan (REQ-015–REQ-017) memerlukan file uji dengan ukuran/format tertentu.
- Tampilan sisi Vendor mengikuti desain yang tidak ada di file (REQ-006).

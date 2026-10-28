# TMS.S004 — Registrasi Vendor · Analysis (REQ / VAL / AC)

> Sumber: [`registrasi-vendor_spec.md`](registrasi-vendor_spec.md) (verbatim `Spek TMS-S` baris 12–17) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Peraturan Umum | TMS.S004-R02 | Shipper, Sistem, Vendor | REQ-001–REQ-008 | — | AC-001–AC-004 |
| SEC-02 | Akses Link Undangan oleh Vendor | TMS.S004-R03 | Vendor, Sistem | REQ-009–REQ-014 | VAL-009 | AC-005–AC-008 |
| SEC-03 | Registrasi Vendor - Step 1 (Informasi Akun) | TMS.S004-R04 | Vendor | REQ-015–REQ-024 | VAL-001–VAL-005 | AC-009–AC-016 |
| SEC-04 | Registrasi Vendor - Step 2 (Informasi Perusahaan) | TMS.S004-R05 | Vendor | REQ-025–REQ-038 | VAL-006–VAL-008 | AC-017–AC-024 |
| SEC-05 | Registrasi Berhasil | TMS.S004-R06 | Vendor, Sistem, Shipper | REQ-039–REQ-042 | — | AC-025–AC-026 |

TMS.S004-R01 (Pendahuluan) tidak menghasilkan REQ; isinya: "proses registrasi dan pengaktifan akun vendor pada TMS". Cakupan kolom B juga menyebut "2. Form login" tanpa rule (Q-06).

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Shipper | Mengundang (button "Undang"), mengirim ulang undangan, memantau status pada menu Manajemen Vendor | TMS.S004-R02 poin 3, 5; R06 poin 4 |
| Vendor (diundang) | Membuka link undangan, mengisi form registrasi Step 1 & Step 2 | TMS.S004-R03, R04, R05 |
| Vendor (tanpa undangan) | "Tidak tersedia menu/akses bagi vendor untuk mendaftar secara mandiri tanpa undangan" | TMS.S004-R02 poin 1 |
| Sistem | Kirim email undangan, generate link unik single-use, aktivasi akun, auto-login | TMS.S004-R02 poin 3–4, 6; R06 |

## 3. Requirement (REQ)
### SEC-01 · Peraturan Umum
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Tidak tersedia menu/akses bagi vendor untuk mendaftar secara mandiri tanpa undangan. | TMS.S004-R02 poin 1 | TERTULIS |
| REQ-002 | Email undangan registrasi hanya dikirim apabila shipper memilih metode "Registrasi Mandiri" dan "jenis pengelola vendor" sesuai ketentuan. | TMS.S004-R02 poin 2 | AMBIGU (Q-01) |
| REQ-003 | Saat klik button "Undang", sistem mengirim email undangan ke Email Perusahaan/PIC yang diinput shipper. | TMS.S004-R02 poin 3 | TERTULIS |
| REQ-004 | Sistem men-generate link undangan yang unik per vendor. | TMS.S004-R02 poin 4 | TERTULIS |
| REQ-005 | Link undangan bersifat single-use (tidak dapat digunakan kembali setelah dipakai untuk menyelesaikan registrasi). | TMS.S004-R02 poin 4 | TERTULIS |
| REQ-006 | Shipper dapat mengirim ulang undangan (resend) apabila link sebelumnya sudah expired atau belum digunakan vendor. | TMS.S004-R02 poin 5 | TERTULIS |
| REQ-007 | Setiap proses resend men-generate link baru. | TMS.S004-R02 poin 6 | TERTULIS |
| REQ-008 | Setiap proses resend menonaktifkan link undangan sebelumnya (link lama tidak dapat lagi diakses). | TMS.S004-R02 poin 6 | TERTULIS |

### SEC-02 · Akses Link Undangan oleh Vendor
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-009 | Link undangan pada email menampilkan tanggal & jam kedaluwarsa sesuai pengaturan masa berlaku, format: "Tautan ini berlaku hingga dd/mm/yyyy pukul HH.mm". | TMS.S004-R03 poin 1 | TERTULIS |
| REQ-010 | Link dibuka setelah melewati masa berlaku: sistem menampilkan informasi bahwa link sudah expired. | TMS.S004-R03 poin 2 | TERTULIS (teks lihat Q-05) |
| REQ-011 | Link dibuka setelah melewati masa berlaku: form registrasi tidak dapat diakses. | TMS.S004-R03 poin 2 | TERTULIS |
| REQ-012 | Link yang sudah pernah digunakan untuk menyelesaikan registrasi: sistem menampilkan informasi bahwa vendor sudah terdaftar. | TMS.S004-R03 poin 3 | TERTULIS (teks lihat Q-05) |
| REQ-013 | Link yang sudah pernah digunakan: sistem mengarahkan ke halaman Login. | TMS.S004-R03 poin 3 | TERTULIS |
| REQ-014 | Link valid dan belum digunakan: vendor diarahkan ke form Registrasi Step 1 (Informasi Akun). | TMS.S004-R03 poin 4 | TERTULIS |

### SEC-03 · Registrasi Vendor - Step 1 (Informasi Akun)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-015 | Field Email Perusahaan/PIC otomatis terisi (draft) dari data yang diinput shipper saat mengundang. | TMS.S004-R04 poin 1 | TERTULIS |
| REQ-016 | Field Email Perusahaan/PIC dapat diubah oleh vendor. | TMS.S004-R04 poin 1 | TERTULIS |
| REQ-017 | Apabila Email Perusahaan/PIC diubah, sistem memvalidasi format email. | TMS.S004-R04 poin 2 | TERTULIS |
| REQ-018 | Apabila Email Perusahaan/PIC diubah, sistem memvalidasi uniqueness (tidak boleh sama dengan email yang sudah terdaftar sebagai akun vendor lain). | TMS.S004-R04 poin 2 | AMBIGU (Q-04) |
| REQ-019 | Field Kata Sandi & Konfirmasi Kata Sandi wajib diisi. | TMS.S004-R04 poin 3 | TERTULIS |
| REQ-020 | Kata Sandi minimal 8 karakter dengan kombinasi huruf dan angka. | TMS.S004-R04 poin 4 | TERTULIS |
| REQ-021 | Konfirmasi Kata Sandi harus sama dengan Kata Sandi; jika tidak sama tampil helper error. | TMS.S004-R04 poin 5 | TERTULIS |
| REQ-022 | Jika field required tidak diisi/tidak valid: tampil helper error & border field berubah ke warna error. | TMS.S004-R04 poin 6 | TERTULIS |
| REQ-023 | Button "Selanjutnya" memproses ke Step 2 apabila seluruh field Step 1 sudah terisi dan valid. | TMS.S004-R04 poin 7 | AMBIGU (Q-07) |
| REQ-024 | Data Step 1 tetap tersimpan (tidak hilang) apabila vendor kembali dari Step 2 menggunakan button "Sebelumnya". | TMS.S004-R04 poin 8 | TERTULIS |

### SEC-04 · Registrasi Vendor - Step 2 (Informasi Perusahaan)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-025 | Field Nama Perusahaan otomatis terisi dari data undangan shipper, bersifat disable dan tidak dapat diubah vendor. | TMS.S004-R05 poin 1 | TERTULIS |
| REQ-026 | Field Email otomatis terisi dari inputan Step 1, bersifat disable dan tidak dapat diubah pada step ini. | TMS.S004-R05 poin 2 | TERTULIS |
| REQ-027 | Field wajib (required): Alias Perusahaan, No. WhatsApp Perusahaan/PIC, Nama PIC Perusahaan, Provinsi, Kota/Kab, Kecamatan, Desa/Kelurahan, Alamat. | TMS.S004-R05 poin 3 | TERTULIS |
| REQ-028 | Field tidak wajib (optional): Kode Pos, Catatan Tambahan, Dokumen Tambahan. | TMS.S004-R05 poin 4 | TERTULIS |
| REQ-029 | Dropdown Provinsi > Kota/Kab > Kecamatan > Desa/Kelurahan berjenjang: opsi level bawah mengikuti pilihan level di atasnya. | TMS.S004-R05 poin 5 | TERTULIS |
| REQ-030 | Apabila dropdown level atas diubah, pilihan dropdown level di bawahnya yang sudah terisi direset ke kondisi kosong. | TMS.S004-R05 poin 6 | TERTULIS |
| REQ-031 | Field Kode Pos terisi otomatis mengikuti pilihan Desa/Kelurahan dan bersifat disable (tidak dapat diinput manual). | TMS.S004-R05 poin 7 | TERTULIS |
| REQ-032 | Field No. WhatsApp hanya dapat diisi angka. | TMS.S004-R05 poin 8 | TERTULIS |
| REQ-033 | Dokumen Tambahan dapat diupload lebih dari 1 file dalam satu proses input. | TMS.S004-R05 poin 9 | TERTULIS |
| REQ-034 | Format file & maksimal ukuran per file Dokumen Tambahan "perlu dikonfirmasi" (contoh acuan umum: .pdf/.jpg/.jpeg/.png, maks. 5MB per file). | TMS.S004-R05 poin 10 | AMBIGU (Q-03) |
| REQ-035 | Setiap file yang berhasil diupload menampilkan nama file, tanggal & jam upload, dan ukuran file. | TMS.S004-R05 poin 11 | TERTULIS |
| REQ-036 | File yang sudah diupload dapat dihapus menggunakan icon delete sebelum submit. | TMS.S004-R05 poin 11 | TERTULIS |
| REQ-037 | Jika field required tidak diisi: tampil helper error & border field berubah ke warna error. | TMS.S004-R05 poin 12 | TERTULIS |
| REQ-038 | Button "Registrasi" hanya dapat diproses apabila seluruh field required pada Step 1 & Step 2 sudah terisi dan valid. | TMS.S004-R05 poin 13 | AMBIGU (Q-07) |

### SEC-05 · Registrasi Berhasil
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-039 | Setelah klik "Registrasi" dan seluruh data valid, sistem menyimpan data vendor dan mengaktifkan akun vendor. | TMS.S004-R06 poin 1 | TERTULIS |
| REQ-040 | Status link undangan berubah menjadi "used" dan tidak dapat diakses kembali setelah registrasi berhasil. | TMS.S004-R06 poin 2 | TERTULIS |
| REQ-041 | Vendor otomatis diarahkan ke halaman utama vendor dalam kondisi sudah login, tanpa login manual melalui halaman Login. | TMS.S004-R06 poin 3 | TERTULIS |
| REQ-042 | Shipper dapat memantau status undangan/registrasi vendor (contoh: "Menunggu Registrasi / Terdaftar") pada menu Manajemen Vendor. | TMS.S004-R06 poin 4 | KONFLIK (Q-02) |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-03 | Email Perusahaan/PIC | Format email valid (divalidasi bila diubah vendor) | "tampilkan helper error & border field berubah ke warna error" (teks pesan tidak disebut) | TMS.S004-R04 poin 2, 6 |
| VAL-002 | SEC-03 | Email Perusahaan/PIC | Unik — tidak boleh sama dengan email yang sudah terdaftar sebagai akun vendor lain | "tampilkan helper error & border field berubah ke warna error" (teks pesan tidak disebut) | TMS.S004-R04 poin 2, 6 |
| VAL-003 | SEC-03 | Kata Sandi | Wajib diisi | "tampilkan helper error & border field berubah ke warna error" | TMS.S004-R04 poin 3, 6 |
| VAL-004 | SEC-03 | Kata Sandi | Minimal 8 karakter, kombinasi huruf dan angka | "tampilkan helper error & border field berubah ke warna error" | TMS.S004-R04 poin 4, 6 |
| VAL-005 | SEC-03 | Konfirmasi Kata Sandi | Wajib diisi; harus sama dengan Kata Sandi | "Jika tidak sama, tampilkan helper error." / "border field berubah ke warna error" | TMS.S004-R04 poin 3, 5, 6 |
| VAL-006 | SEC-04 | Alias Perusahaan, No. WhatsApp Perusahaan/PIC, Nama PIC Perusahaan, Provinsi, Kota/Kab, Kecamatan, Desa/Kelurahan, Alamat | Wajib diisi | "tampilkan helper error & border field berubah ke warna error" | TMS.S004-R05 poin 3, 12 |
| VAL-007 | SEC-04 | No. WhatsApp | Hanya dapat diisi angka | Tidak disebut di spec | TMS.S004-R05 poin 8 |
| VAL-008 | SEC-04 | Dokumen Tambahan | Format & ukuran maksimum "perlu dikonfirmasi" (contoh .pdf/.jpg/.jpeg/.png, maks. 5MB per file) | Tidak disebut di spec | TMS.S004-R05 poin 10 |
| VAL-009 | SEC-02 | Link undangan | Harus belum melewati masa berlaku, belum digunakan, dan bukan link lama yang dinonaktifkan oleh resend | Expired: informasi link sudah expired, form tidak dapat diakses; sudah digunakan: informasi vendor sudah terdaftar & diarahkan ke Login; link lama: "tidak dapat lagi diakses" | TMS.S004-R03 poin 2–3; R02 poin 6; R06 poin 2 |

## 5. Acceptance Criteria (AC)
### SEC-01 · Peraturan Umum
- **AC-001** (REQ-001) — **Diberikan** calon vendor tanpa undangan **Ketika** mencari akses pendaftaran mandiri **Maka** tidak tersedia menu/akses untuk mendaftar · Sumber: TMS.S004-R02 poin 1
- **AC-002** (REQ-002, REQ-003) — **Diberikan** shipper mengisi undangan dengan metode "Registrasi Mandiri" dan jenis pengelola vendor **Ketika** klik button "Undang" **Maka** sistem mengirim email undangan ke Email Perusahaan/PIC yang diinput · Sumber: TMS.S004-R02 poin 2–3
- **AC-003** (REQ-004, REQ-005) — **Diberikan** vendor telah menyelesaikan registrasi dengan link undangannya **Ketika** link yang sama dipakai lagi **Maka** link tidak dapat digunakan kembali · Sumber: TMS.S004-R02 poin 4
- **AC-004** (REQ-006, REQ-007, REQ-008, VAL-009) — **Diberikan** link undangan L1 sudah expired atau belum digunakan **Ketika** shipper melakukan resend **Maka** link baru L2 dikirim dan L1 tidak dapat lagi diakses · Sumber: TMS.S004-R02 poin 5–6

### SEC-02 · Akses Link Undangan oleh Vendor
- **AC-005** (REQ-009) — **Diberikan** email undangan terkirim **Ketika** vendor membaca email **Maka** tampil teks kedaluwarsa dengan format "Tautan ini berlaku hingga dd/mm/yyyy pukul HH.mm" sesuai pengaturan masa berlaku · Sumber: TMS.S004-R03 poin 1
- **AC-006** (REQ-010, REQ-011, VAL-009) — **Diberikan** link undangan melewati masa berlaku **Ketika** vendor membuka link **Maka** tampil informasi bahwa link sudah expired dan form registrasi tidak dapat diakses · Sumber: TMS.S004-R03 poin 2
- **AC-007** (REQ-012, REQ-013, VAL-009) — **Diberikan** link sudah pernah dipakai menyelesaikan registrasi **Ketika** vendor membuka link **Maka** tampil informasi bahwa vendor sudah terdaftar dan vendor diarahkan ke halaman Login · Sumber: TMS.S004-R03 poin 3
- **AC-008** (REQ-014) — **Diberikan** link valid dan belum digunakan **Ketika** vendor membuka link **Maka** vendor diarahkan ke form Registrasi Step 1 (Informasi Akun) · Sumber: TMS.S004-R03 poin 4

### SEC-03 · Registrasi Vendor - Step 1 (Informasi Akun)
- **AC-009** (REQ-015, REQ-016) — **Diberikan** vendor di Step 1 **Ketika** form tampil **Maka** Email Perusahaan/PIC terisi dari data undangan dan dapat diubah · Sumber: TMS.S004-R04 poin 1
- **AC-010** (REQ-017, REQ-022, VAL-001) — **Diberikan** vendor mengubah Email Perusahaan/PIC menjadi format tidak valid **Ketika** validasi berjalan **Maka** tampil helper error & border field berwarna error · Sumber: TMS.S004-R04 poin 2, 6
- **AC-011** (REQ-018, REQ-022, VAL-002) — **Diberikan** vendor mengubah Email Perusahaan/PIC menjadi email yang sudah terdaftar sebagai akun vendor lain **Ketika** validasi berjalan **Maka** email dinyatakan tidak valid dengan helper error & border error · Sumber: TMS.S004-R04 poin 2, 6
- **AC-012** (REQ-019, REQ-022, VAL-003, VAL-005) — **Diberikan** Kata Sandi dan/atau Konfirmasi Kata Sandi kosong **Ketika** vendor mencoba melanjutkan **Maka** tampil helper error & border error pada field kosong · Sumber: TMS.S004-R04 poin 3, 6
- **AC-013** (REQ-020, VAL-004) — **Diberikan** Kata Sandi kurang dari 8 karakter atau tanpa kombinasi huruf dan angka **Ketika** validasi berjalan **Maka** tampil helper error & border error · Sumber: TMS.S004-R04 poin 4, 6
- **AC-014** (REQ-021, VAL-005) — **Diberikan** Konfirmasi Kata Sandi tidak sama dengan Kata Sandi **Ketika** validasi berjalan **Maka** tampil helper error · Sumber: TMS.S004-R04 poin 5
- **AC-015** (REQ-023) — **Diberikan** seluruh field Step 1 terisi dan valid **Ketika** klik "Selanjutnya" **Maka** vendor masuk ke Step 2 · Sumber: TMS.S004-R04 poin 7
- **AC-016** (REQ-024) — **Diberikan** vendor telah mengisi Step 1 dan berada di Step 2 **Ketika** klik "Sebelumnya" **Maka** data Step 1 tetap terisi · Sumber: TMS.S004-R04 poin 8

### SEC-04 · Registrasi Vendor - Step 2 (Informasi Perusahaan)
- **AC-017** (REQ-025, REQ-026) — **Diberikan** vendor di Step 2 **Ketika** form tampil **Maka** Nama Perusahaan (dari undangan) dan Email (dari Step 1) terisi dan disable · Sumber: TMS.S004-R05 poin 1–2
- **AC-018** (REQ-027, REQ-037, VAL-006) — **Diberikan** salah satu field required Step 2 kosong **Ketika** vendor mencoba memproses **Maka** tampil helper error & border field berwarna error · Sumber: TMS.S004-R05 poin 3, 12
- **AC-019** (REQ-029, REQ-030) — **Diberikan** Provinsi, Kota/Kab, Kecamatan, Desa/Kelurahan sudah terisi **Ketika** vendor mengubah dropdown level atas **Maka** opsi level bawah mengikuti pilihan baru dan pilihan level bawah yang sudah terisi direset kosong · Sumber: TMS.S004-R05 poin 5–6
- **AC-020** (REQ-031) — **Diberikan** vendor memilih Desa/Kelurahan **Ketika** pilihan tersimpan di form **Maka** Kode Pos terisi otomatis dan disable · Sumber: TMS.S004-R05 poin 7
- **AC-021** (REQ-032, VAL-007) — **Diberikan** vendor mengisi No. WhatsApp **Ketika** mengetik karakter selain angka **Maka** field hanya dapat diisi angka · Sumber: TMS.S004-R05 poin 8
- **AC-022** (REQ-033, REQ-035, REQ-036) — **Diberikan** vendor mengupload lebih dari 1 file Dokumen Tambahan dalam satu proses input **Ketika** upload berhasil **Maka** setiap file menampilkan nama file, tanggal & jam upload, ukuran file, dan dapat dihapus dengan icon delete sebelum submit · Sumber: TMS.S004-R05 poin 9, 11
- **AC-023** (REQ-028, REQ-038) — **Diberikan** seluruh field required Step 1 & Step 2 terisi dan valid **Ketika** klik "Registrasi" **Maka** registrasi diproses · Sumber: TMS.S004-R05 poin 4, 13
- **AC-024** (REQ-038) — **Diberikan** ada field required Step 1 atau Step 2 yang belum terisi/valid **Ketika** klik "Registrasi" **Maka** registrasi tidak diproses · Sumber: TMS.S004-R05 poin 13

### SEC-05 · Registrasi Berhasil
- **AC-025** (REQ-039, REQ-040, REQ-041) — **Diberikan** seluruh data valid **Ketika** vendor klik "Registrasi" **Maka** data vendor tersimpan, akun vendor aktif, status link menjadi "used" (tidak dapat diakses kembali), dan vendor diarahkan ke halaman utama vendor dalam kondisi sudah login · Sumber: TMS.S004-R06 poin 1–3
- **AC-026** (REQ-042) — **Diberikan** vendor diundang (dan/atau sudah menyelesaikan registrasi) **Ketika** shipper membuka menu Manajemen Vendor **Maka** shipper dapat memantau status undangan/registrasi vendor tersebut · Sumber: TMS.S004-R06 poin 4 (label lihat Q-02)

## 6. State / transisi
| Objek | Status | Kondisi | Sumber |
|---|---|---|---|
| Link undangan | Valid (belum digunakan, belum expired) | Membuka link → form Step 1 | TMS.S004-R03 poin 4 |
| Link undangan | Expired | Lewat masa berlaku → informasi expired, form tidak dapat diakses | TMS.S004-R03 poin 2 |
| Link undangan | Nonaktif (link lama) | Terjadi resend → link lama tidak dapat lagi diakses | TMS.S004-R02 poin 6 |
| Link undangan | "used" | Registrasi berhasil → tidak dapat diakses kembali; membuka link → informasi sudah terdaftar & diarahkan ke Login | TMS.S004-R06 poin 2; R03 poin 3 |
| Akun vendor | Aktif | Registrasi berhasil → akun diaktifkan | TMS.S004-R06 poin 1 |

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Manajemen Vendor (TMS.S003) | Undangan dibuat dari form Tambah Vendor ("Registrasi Mandiri"); resend via action "Kirim Undangan"; status Menunggu → Aktif; shipper memantau status di menu Manajemen Vendor | TMS.S003-R05, R07, R08; TMS.S004-R02, R06 poin 4; spec-index §3 |
| Pengaturan Sistem (TMS.S020) | Masa berlaku link undangan mengikuti Durasi Kedaluwarsa Undangan Vendor (default 2 Jam) | TMS.S020-R03 poin 1; TMS.S004-R03 poin 1 |
| Akun Saya (TMS.S023) | Field informasi perusahaan vendor yang sama diedit kembali di Akun Saya (aturan wajib/dokumen berbeda, lihat Q-03) | TMS.S023-R04 |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | "jenis pengelola vendor" sesuai ketentuan — ketentuan mana? Kombinasi "Registrasi Mandiri" + Pengelola "Shipper" tidak dijelaskan di S003-R05. | TMS.S004-R02 poin 2; TMS.S003-R05 | REQ-002 | §4 no.1 |
| Q-02 | Label status "Menunggu Registrasi / Terdaftar" berbeda dengan status S003 (Menunggu/Aktif/Tidak Aktif). | TMS.S004-R06 poin 4 | REQ-042 | §4 no.4 |
| Q-03 | Format & ukuran Dokumen Tambahan tertulis "perlu dikonfirmasi" (contoh .pdf/.jpg/.jpeg/.png, 5MB); S023-R04 poin 7 menyebut 4MB, .pdf/.jpg. Perilaku file di luar ketentuan tidak disebut. | TMS.S004-R05 poin 10 | REQ-034 | §4 no.5 |
| Q-04 | Lingkup keunikan email: S004-R04 poin 2 "akun vendor lain" (seluruh sistem?) vs S003-R05 poin 4 per shipper yang sama. Teks helper error untuk format/duplikat email di Step 1 juga tidak disebut. | TMS.S004-R04 poin 2; TMS.S003-R05 poin 4 | REQ-017, REQ-018 | Baru |
| Q-05 | Teks informasi "link sudah expired", "vendor sudah terdaftar", serta tampilan saat membuka link lama yang dinonaktifkan oleh resend tidak disebut. | TMS.S004-R03 poin 2–3; R02 poin 6 | REQ-008, REQ-010, REQ-012 | Baru |
| Q-06 | Cakupan kolom B menyebut "2. Form login", tetapi tidak ada rule untuk form login di TMS.S004. | TMS.S004 Cakupan | — | Baru |
| Q-07 | "Selanjutnya" / "Registrasi" "hanya dapat diproses" bila valid — apakah button disable sebelum valid, atau tetap aktif lalu menampilkan helper error saat diklik? | TMS.S004-R04 poin 7; R05 poin 13 | REQ-023, REQ-038 | Baru |

## 9. Catatan testability (bukan requirement)
- Email undangan, teks kedaluwarsa, dan link undangan (REQ-003, REQ-009) hanya dapat diverifikasi dari kotak masuk email vendor.
- Kondisi link expired (REQ-010–REQ-011) bergantung pada durasi dari Pengaturan Sistem (TMS.S020-R03 poin 1) dan waktu berjalan.
- Link lama setelah resend dan status "used" (REQ-005, REQ-008, REQ-040) memerlukan beberapa email undangan untuk vendor yang sama.
- Upload Dokumen Tambahan memerlukan file uji; format/ukuran belum final (Q-03).

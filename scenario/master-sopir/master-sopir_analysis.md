# TMS.S010 — Master Sopir · Analysis (REQ / VAL / AC)

> Sumber: [`master-sopir_spec.md`](master-sopir_spec.md) (verbatim `Spek TMS-S` baris 40–44) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.
> Catatan: rule S010-R02/R03/R04 masing-masing memuat dua sub-bagian ("Sisi Shipper" dan "Sisi Vendor") dengan penomoran poin yang dimulai ulang; sumber ditulis `TMS.S010-Rxx (bagian "<judul>") poin n`. Pada bagian "Tambah Sopir (Sisi Vendor)" poin 1, daftar field tidak bernomor; field disebut namanya.

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| **Sisi Shipper** | | | | | | |
| SEC-01 | Ketentuan umum & tampilan menu "Master Sopir" | TMS.S010-R01, TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Shipper)"), Cakupan kolom B | Shipper | REQ-001–REQ-009 | — | AC-001–AC-005 |
| SEC-02 | Tambah Sopir (Sisi Shipper) | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") | Shipper | REQ-010–REQ-023 | VAL-001–VAL-005 | AC-006–AC-015 |
| SEC-03 | Edit Sopir (Sisi Shipper) | TMS.S010-R04 (bagian "Edit Sopir (Sisi Shipper)") | Shipper | REQ-024–REQ-029 | — | AC-016–AC-020 |
| SEC-04 | Halaman Kelola Sopir (Detail per Vendor) & Hapus | TMS.S010-R05, Cakupan kolom B poin 4 | Shipper | REQ-030–REQ-034 | — | AC-021–AC-024 |
| **Sisi Vendor** | | | | | | |
| SEC-05 | Ketentuan umum (Sisi Vendor) | TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Vendor)"), Cakupan kolom B | Vendor | REQ-035–REQ-037 | — | AC-025 |
| SEC-06 | Tambah Sopir (Sisi Vendor) | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") | Vendor | REQ-038–REQ-059 | VAL-006–VAL-012 | AC-026–AC-035 |
| SEC-07 | Edit Sopir (Sisi Vendor) | TMS.S010-R04 (bagian "Edit Sopir (Sisi Vendor)") | Vendor | REQ-060–REQ-065 | VAL-011 | AC-036–AC-040 |

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Shipper | "Baru tampil di shipper saat terdapat kondisi pengelola ada yang dihandle oleh admin"; menu "Master Sopir" hanya tampil bila shipper memiliki minimal 1 vendor dengan Pengelola = "Shipper" | Cakupan kolom B poin 5; TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 2–3 (Q-01) |
| Vendor | Cakupan: "Tampil di akun vendor dengan diksi \"Master Armada\""; R02: data sopir vendor masuk ke menu "Master sopir" | Cakupan kolom B poin 5; TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Vendor)") poin 2 (Q-03) |
| (Hak akses sub user) | Master Sopir tercantum pada kategori Master Operasional di Hak Akses (3-level, tanpa Cakupan Data) | TMS.S021-R08 poin 8 (rujukan lintas modul) |

## 3. Requirement (REQ)

## Sisi Shipper

### SEC-01 · Ketentuan umum & menu "Master Sopir"
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Master sopir tersedia pada POV shipper dan vendor. | TMS.S010-R01 | TERTULIS |
| REQ-002 | Pada shipper, master sopir "Baru tampil di shipper saat terdapat kondisi pengelola ada yang dihandle oleh admin". | Cakupan kolom B poin 5 | AMBIGU (Q-01) |
| REQ-003 | Data sopir sisi shipper berada di menu "Master Sopir". | TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 1 | TERTULIS |
| REQ-004 | Menu "Master Sopir" hanya tampil apabila shipper memiliki minimal 1 vendor dengan Pengelola = "Shipper". | TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 2 | TERTULIS |
| REQ-005 | Jika shipper tidak memiliki vendor dengan Pengelola = Shipper, menu "Master Sopir" tidak ditampilkan. | TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 3 | TERTULIS |
| REQ-006 | Vendor yang terdaftar dengan Pengelola = Shipper otomatis muncul pada Master Sopir tanpa input manual. | TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 4 | TERTULIS |
| REQ-007 | Master Sopir menampilkan daftar vendor, bukan daftar sopir individual. | TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 5 | AMBIGU (Q-13) |
| REQ-008 | Setiap baris vendor menampilkan agregat Jumlah Sopir & Tanggal Update terakhir. | TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 5 | TERTULIS |
| REQ-009 | Aksi "Kelola Sopir" (icon gear) membuka halaman detail berisi daftar sopir milik vendor tersebut. | TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 6 | TERTULIS |

### SEC-02 · Tambah Sopir (Sisi Shipper)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-010 | Entry point dari halaman utama Master Sopir (di luar konteks vendor tertentu) mewajibkan memilih field "Nama Vendor" terlebih dahulu. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 1 | TERTULIS |
| REQ-011 | Entry point dari halaman "Kelola Sopir" vendor tertentu tidak memerlukan pemilihan Nama Vendor; penambahan hanya berlaku untuk vendor tersebut. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 1 | TERTULIS |
| REQ-012 | Field input: Nama Vendor (khusus entry point luar), Nama Sopir, No. WhatsApp. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 2 | TERTULIS |
| REQ-013 | Seluruh field wajib diisi. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 2 | TERTULIS |
| REQ-014 | Sopir yang baru ditambahkan otomatis berstatus "Aktif". | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 3 | TERTULIS |
| REQ-015 | Dapat menambah lebih dari 1 baris input sekaligus. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 4 | TERTULIS |
| REQ-016 | Icon hapus baris baru tampil saat terdapat 2 baris input atau lebih. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 4 | TERTULIS |
| REQ-017 | Import Data dari entry point luar memakai kolom template: No, Nama Vendor, Nama Sopir, No. WhatsApp. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 5 | AMBIGU (Q-07) |
| REQ-018 | Import Data dari entry point dalam (Kelola Sopir per vendor) memakai kolom template: No, Nama Sopir, No. WhatsApp. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 5 | AMBIGU (Q-07) |
| REQ-019 | No. WhatsApp boleh sama antar vendor berbeda, tetapi tidak boleh sama pada data sopir milik vendor yang sama (unique per vendor). | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 6 | TERTULIS |
| REQ-020 | Jika field wajib tidak diisi: tampil helper error & border field berubah warna error. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 7 | TERTULIS |
| REQ-021 | Saat terdapat field kosong, tidak dapat klik button simpan dan tampil alert pada keseluruhan field yang kosong. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 8 | AMBIGU (Q-05) |
| REQ-022 | Button Batal membatalkan pengisian data dan menampilkan pop up konfirmasi. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 9 | TERTULIS |
| REQ-023 | Button Simpan menyimpan data yang telah diisikan. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 9 | TERTULIS |

### SEC-03 · Edit Sopir (Sisi Shipper)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-024 | Data sopir yang sudah digunakan tetap dapat diubah. | TMS.S010-R04 (bagian "Edit Sopir (Sisi Shipper)") poin 1 | TERTULIS |
| REQ-025 | Field "Status" (Aktif/Tidak Aktif) hanya ditampilkan pada form Edit. | TMS.S010-R04 (bagian "Edit Sopir (Sisi Shipper)") poin 2 | TERTULIS |
| REQ-026 | Field yang dapat diedit: Nama Sopir, No. WhatsApp, Status. | TMS.S010-R04 (bagian "Edit Sopir (Sisi Shipper)") poin 3 | AMBIGU (Q-10) |
| REQ-027 | Form edit berupa pop up. | TMS.S010-R04 (bagian "Edit Sopir (Sisi Shipper)") poin 4 | TERTULIS |
| REQ-028 | Button Batal membatalkan perubahan dan menampilkan pop up konfirmasi. | TMS.S010-R04 (bagian "Edit Sopir (Sisi Shipper)") poin 5 | TERTULIS |
| REQ-029 | Button Simpan menyimpan perubahan dan menampilkan pop up konfirmasi. | TMS.S010-R04 (bagian "Edit Sopir (Sisi Shipper)") poin 5 | TERTULIS |

### SEC-04 · Halaman Kelola Sopir (Detail per Vendor) & Hapus
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-030 | Halaman Kelola Sopir menampilkan Informasi Vendor: Nama Vendor, Jumlah Sopir, Tanggal Update. | TMS.S010-R05 poin 1 | TERTULIS |
| REQ-031 | Tersedia filter: Nama Sopir, No. WhatsApp, Status. | TMS.S010-R05 poin 2 | TERTULIS |
| REQ-032 | Tersedia tombol "Riwayat" untuk melihat riwayat perubahan data. | TMS.S010-R05 poin 4 | AMBIGU (Q-16) |
| REQ-033 | "List armada pada halaman ini menampilkan aksi Edit & Hapus per baris" (halaman Kelola Sopir). | TMS.S010-R05 poin 5 | AMBIGU (Q-03) |
| REQ-034 | Data sopir dapat dihapus ("Hapus Data"); syarat, konfirmasi, dan pesan tidak dirinci. | Cakupan kolom B poin 4; TMS.S010-R05 poin 5 | AMBIGU (Q-06) |

## Sisi Vendor

### SEC-05 · Ketentuan umum (Sisi Vendor)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-035 | Pada akun vendor, menu tampil dengan diksi "Master Armada" (menurut Cakupan). | Cakupan kolom B poin 5 | KONFLIK (Q-03) |
| REQ-036 | Data sopir sisi vendor masuk ke menu "Master sopir" tanpa pengelompokan per vendor (hanya 1 entitas). | TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Vendor)") poin 2 | KONFLIK (Q-03, Q-12) |
| REQ-037 | Form Tambah Sopir sisi vendor menduplikasi form pada produk TMS LKL (Lintas Karya Logistik) — "isi form sama, dapat mengacu implementasi yang sudah ada". | TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Vendor)") poin 1 | REF-EKSTERNAL (Q-04) |

### SEC-06 · Tambah Sopir (Sisi Vendor)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-038 | Field Nama Sopir wajib diisi. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-039 | Field No. WhatsApp wajib diisi. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-040 | Field No. KTP wajib diisi. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-041 | Field No. SIM wajib diisi. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-042 | Field Provinsi berupa dropdown, wajib diisi. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-043 | Field Kota/Kab. berupa dropdown, wajib diisi. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-044 | Field Kecamatan berupa dropdown, wajib diisi. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-045 | Field Desa/Kelurahan berupa dropdown, wajib diisi. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-046 | Field Kode Pos tidak wajib diisi. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1 | KONFLIK (Q-02) |
| REQ-047 | Field Alamat Lengkap wajib diisi. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-048 | Field Foto KTP wajib diisi, maksimal 4MB, format .jpg/.jpeg/.png. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-049 | Field Foto SIM wajib diisi, maksimal 4MB, format .jpg/.jpeg/.png. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-050 | Field Foto Sopir wajib diisi, maksimal 4MB, format .jpg/.jpeg/.png. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-051 | Dapat menambah lebih dari 1 baris input sekaligus. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 2 | TERTULIS |
| REQ-052 | Icon hapus baris baru tampil saat terdapat 2 baris input atau lebih. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 2 | TERTULIS |
| REQ-053 | Sopir yang baru ditambahkan otomatis berstatus "Aktif". | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 3 | TERTULIS |
| REQ-054 | Import Data memakai kolom: No, Nama Sopir, No Whatsapp, No KTP, No SIM, Provinsi, Kota/Kab, Kecamatan, Desa/Kelurahan, Alamat. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 4 | KONFLIK (Q-07) |
| REQ-055 | "Nomor wa whatsapp tidak boleh sama". | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 5 | AMBIGU (Q-08) |
| REQ-056 | Jika field wajib tidak diisi: tampil helper error & border field berubah warna error. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 6 | TERTULIS |
| REQ-057 | Data hanya dapat disimpan bila seluruh field terisi; saat ada field kosong, tidak dapat klik button simpan dan tampil alert pada keseluruhan field yang kosong. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 7 | KONFLIK (Q-02, Q-05) |
| REQ-058 | Button Batal membatalkan pengisian data dan menampilkan pop up konfirmasi. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 8 | TERTULIS |
| REQ-059 | Button Simpan menyimpan data yang telah diisikan. | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 8 | TERTULIS |

### SEC-07 · Edit Sopir (Sisi Vendor)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-060 | Data sopir yang sudah digunakan tetap dapat diubah. | TMS.S010-R04 (bagian "Edit Sopir (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-061 | Field "Status" (Aktif/Tidak Aktif) hanya ditampilkan pada form Edit. | TMS.S010-R04 (bagian "Edit Sopir (Sisi Vendor)") poin 2 | TERTULIS |
| REQ-062 | No. WhatsApp tidak boleh duplikat pada data sopir milik vendor tersebut. | TMS.S010-R04 (bagian "Edit Sopir (Sisi Vendor)") poin 3 | TERTULIS |
| REQ-063 | Form edit berupa pop up. | TMS.S010-R04 (bagian "Edit Sopir (Sisi Vendor)") poin 4 | AMBIGU (Q-11) |
| REQ-064 | Button Batal membatalkan perubahan dan menampilkan pop up konfirmasi. | TMS.S010-R04 (bagian "Edit Sopir (Sisi Vendor)") poin 5 | TERTULIS |
| REQ-065 | Button Simpan menyimpan perubahan dan menampilkan pop up konfirmasi. | TMS.S010-R04 (bagian "Edit Sopir (Sisi Vendor)") poin 5 | TERTULIS |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-02 | Nama Vendor (entry point luar) | Wajib dipilih terlebih dahulu | "tampilkan helper error & border field berubah warna error" | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 1, 2, 7 |
| VAL-002 | SEC-02 | Nama Sopir | Wajib | "tampilkan helper error & border field berubah warna error" | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 2, 7 |
| VAL-003 | SEC-02 | No. WhatsApp | Wajib (format tidak dinyatakan, Q-09) | "tampilkan helper error & border field berubah warna error" | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 2, 7 |
| VAL-004 | SEC-02 | No. WhatsApp | Unique per vendor (boleh sama antar vendor berbeda) | Tidak dinyatakan di spec (Q-14) | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 6 |
| VAL-005 | SEC-02 | Form tambah (seluruh field) | Seluruh field wajib terisi agar dapat disimpan | "tidak dapat klik button simpan => akan tampil alert pada keseluruhan field yang kosong" | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 8 |
| VAL-006 | SEC-06 | Nama Sopir, No. WhatsApp, No. KTP, No. SIM | Wajib (format tidak dinyatakan, Q-09) | "tampilkan helper error & border field berubah warna error" | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1, 6 |
| VAL-007 | SEC-06 | Provinsi, Kota/Kab., Kecamatan, Desa/Kelurahan | Dropdown, wajib | "tampilkan helper error & border field berubah warna error" | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1, 6 |
| VAL-008 | SEC-06 | Alamat Lengkap | Wajib | "tampilkan helper error & border field berubah warna error" | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1, 6 |
| VAL-009 | SEC-06 | Foto KTP, Foto SIM, Foto Sopir | Wajib, maksimal 4MB, format .jpg/.jpeg/.png | Wajib kosong: "tampilkan helper error & border field berubah warna error"; ukuran/format tidak sesuai: tidak dinyatakan (Q-14) | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1, 6 |
| VAL-010 | SEC-06 | Kode Pos | Tertulis "tidak wajib diisi" — bertentangan dengan poin 7 | Tidak dinyatakan (Q-02) | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1, 7 |
| VAL-011 | SEC-06, SEC-07 | No. WhatsApp | Tambah: "Nomor wa whatsapp tidak boleh sama"; Edit: tidak boleh duplikat pada data sopir milik vendor tersebut | Tidak dinyatakan (Q-08, Q-14) | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 5; TMS.S010-R04 (bagian "Edit Sopir (Sisi Vendor)") poin 3 |
| VAL-012 | SEC-06 | Form tambah (seluruh field) | "wajib mengisi seluruh field" | "tidak dapat klik button simpan => akan tampil alert pada keseluruhan field yang kosong" | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 7 (KONFLIK Q-02) |

## 5. Acceptance Criteria (AC)

## Sisi Shipper

### SEC-01 · Ketentuan umum & menu "Master Sopir"
- **AC-001** (REQ-003, REQ-004) — **Diberikan** shipper memiliki minimal 1 vendor dengan Pengelola = "Shipper" **Ketika** shipper melihat menu **Maka** menu "Master Sopir" tampil · Sumber: TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 1–2
- **AC-002** (REQ-005) — **Diberikan** shipper tidak memiliki vendor dengan Pengelola = Shipper **Ketika** shipper melihat menu **Maka** menu "Master Sopir" tidak ditampilkan · Sumber: TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 3
- **AC-003** (REQ-006) — **Diberikan** vendor baru terdaftar dengan Pengelola = Shipper **Ketika** Master Sopir dibuka **Maka** vendor tersebut otomatis muncul tanpa input manual · Sumber: TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 4
- **AC-004** (REQ-007, REQ-008) — **Diberikan** Master Sopir terbuka **Ketika** daftar dimuat **Maka** setiap baris adalah vendor dengan agregat Jumlah Sopir & Tanggal Update terakhir · Sumber: TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 5
- **AC-005** (REQ-009) — **Diberikan** baris vendor **Ketika** aksi "Kelola Sopir" (icon gear) diklik **Maka** halaman detail berisi daftar sopir milik vendor tersebut terbuka · Sumber: TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 6

### SEC-02 · Tambah Sopir (Sisi Shipper)
- **AC-006** (REQ-010, REQ-012, VAL-001) — **Diberikan** tambah sopir dibuka dari halaman utama Master Sopir **Ketika** form tampil **Maka** field Nama Vendor, Nama Sopir, No. WhatsApp tersedia dan Nama Vendor wajib dipilih · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 1–2
- **AC-007** (REQ-011) — **Diberikan** tambah sopir dibuka dari halaman "Kelola Sopir" vendor X **Ketika** form tampil dan data disimpan **Maka** tidak ada pemilihan Nama Vendor dan sopir tersimpan untuk vendor X · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 1
- **AC-008** (REQ-013, REQ-020, VAL-001–VAL-003) — **Diberikan** salah satu field wajib kosong **Ketika** validasi dijalankan **Maka** tampil helper error dan border field berubah warna error · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 7
- **AC-009** (REQ-021, VAL-005) — **Diberikan** terdapat field kosong **Ketika** user mencoba menyimpan **Maka** button simpan tidak dapat diklik dan tampil alert pada keseluruhan field yang kosong · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 8
- **AC-010** (REQ-015, REQ-016) — **Diberikan** form dengan 1 baris input **Ketika** baris input ditambah **Maka** icon hapus baris tampil saat ≥ 2 baris; dengan 1 baris icon hapus tidak tampil · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 4
- **AC-011** (REQ-019, VAL-004) — **Diberikan** vendor A sudah memiliki sopir dengan No. WhatsApp W **Ketika** sopir baru dengan No. WhatsApp W ditambahkan untuk vendor A **Maka** data tidak dapat disimpan · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 6
- **AC-012** (REQ-019) — **Diberikan** vendor A memiliki sopir dengan No. WhatsApp W **Ketika** sopir dengan No. WhatsApp W ditambahkan untuk vendor B **Maka** data dapat disimpan · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 6
- **AC-013** (REQ-017, REQ-018) — **Diberikan** Import Data dibuka dari entry point luar / dalam **Ketika** template diperiksa **Maka** kolom masing-masing: No, Nama Vendor, Nama Sopir, No. WhatsApp / No, Nama Sopir, No. WhatsApp · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 5
- **AC-014** (REQ-014, REQ-023) — **Diberikan** seluruh field valid **Ketika** Simpan diklik **Maka** sopir tersimpan berstatus "Aktif" · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 3, 9
- **AC-015** (REQ-022) — **Diberikan** form tambah terisi **Ketika** Batal diklik **Maka** tampil pop up konfirmasi · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 9

### SEC-03 · Edit Sopir (Sisi Shipper)
- **AC-016** (REQ-025, REQ-026, REQ-027) — **Diberikan** list sopir di Kelola Sopir **Ketika** aksi Edit diklik **Maka** pop up edit tampil dengan field Nama Sopir, No. WhatsApp, Status (Aktif/Tidak Aktif) · Sumber: TMS.S010-R04 (bagian "Edit Sopir (Sisi Shipper)") poin 2–4
- **AC-017** (REQ-025) — **Diberikan** form tambah sopir **Ketika** form tampil **Maka** field Status tidak ada · Sumber: TMS.S010-R04 (bagian "Edit Sopir (Sisi Shipper)") poin 2
- **AC-018** (REQ-024) — **Diberikan** sopir sudah digunakan **Ketika** diedit dan disimpan **Maka** perubahan dapat dilakukan · Sumber: TMS.S010-R04 (bagian "Edit Sopir (Sisi Shipper)") poin 1
- **AC-019** (REQ-029) — **Diberikan** perubahan pada pop up edit **Ketika** Simpan diklik **Maka** tampil pop up konfirmasi · Sumber: TMS.S010-R04 (bagian "Edit Sopir (Sisi Shipper)") poin 5
- **AC-020** (REQ-028) — **Diberikan** pop up edit terbuka **Ketika** Batal diklik **Maka** tampil pop up konfirmasi · Sumber: TMS.S010-R04 (bagian "Edit Sopir (Sisi Shipper)") poin 5

### SEC-04 · Halaman Kelola Sopir
- **AC-021** (REQ-030) — **Diberikan** halaman Kelola Sopir vendor X **Ketika** dimuat **Maka** tampil Informasi Vendor: Nama Vendor, Jumlah Sopir, Tanggal Update · Sumber: TMS.S010-R05 poin 1
- **AC-022** (REQ-031) — **Diberikan** halaman Kelola Sopir **Ketika** filter Nama Sopir / No. WhatsApp / Status diterapkan **Maka** list sopir tersaring sesuai filter · Sumber: TMS.S010-R05 poin 2
- **AC-023** (REQ-032) — **Diberikan** halaman Kelola Sopir **Ketika** tombol "Riwayat" diklik **Maka** tampil riwayat perubahan data · Sumber: TMS.S010-R05 poin 4
- **AC-024** (REQ-033) — **Diberikan** list pada halaman Kelola Sopir **Ketika** baris dilihat **Maka** setiap baris memiliki aksi Edit & Hapus · Sumber: TMS.S010-R05 poin 5

## Sisi Vendor

### SEC-05 · Ketentuan umum (Sisi Vendor)
- **AC-025** (REQ-036) — **Diberikan** login sebagai vendor **Ketika** membuka menu master sopir **Maka** daftar sopir milik vendor tampil tanpa pengelompokan per vendor · Sumber: TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Vendor)") poin 2 (nama menu: Q-03)

### SEC-06 · Tambah Sopir (Sisi Vendor)
- **AC-026** (REQ-038–REQ-050) — **Diberikan** form Tambah Sopir vendor **Ketika** form tampil **Maka** tersedia field Nama Sopir, No. WhatsApp, No. KTP, No. SIM, Provinsi, Kota/Kab., Kecamatan, Desa/Kelurahan, Kode Pos, Alamat Lengkap, Foto KTP, Foto SIM, Foto Sopir · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1
- **AC-027** (REQ-056, VAL-006–VAL-009) — **Diberikan** salah satu field wajib (selain Kode Pos) kosong **Ketika** validasi dijalankan **Maka** tampil helper error dan border field berubah warna error · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1, 6
- **AC-028** (REQ-057, VAL-012) — **Diberikan** terdapat field kosong **Ketika** user mencoba menyimpan **Maka** button simpan tidak dapat diklik dan tampil alert pada keseluruhan field yang kosong · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 7 (cakupan Kode Pos: Q-02)
- **AC-029** (REQ-048–REQ-050, VAL-009) — **Diberikan** file Foto KTP/SIM/Sopir berformat .jpg/.jpeg/.png dan ≤ 4MB **Ketika** diunggah **Maka** file diterima · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1
- **AC-030** (REQ-048–REQ-050, VAL-009) — **Diberikan** file foto > 4MB atau berformat selain .jpg/.jpeg/.png **Ketika** diunggah **Maka** file tidak diterima · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 1 (pesan: Q-14)
- **AC-031** (REQ-051, REQ-052) — **Diberikan** form dengan 1 baris input **Ketika** baris input ditambah **Maka** icon hapus baris tampil saat ≥ 2 baris · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 2
- **AC-032** (REQ-054) — **Diberikan** Import Data vendor **Ketika** template diperiksa **Maka** kolom: No, Nama Sopir, No Whatsapp, No KTP, No SIM, Provinsi, Kota/Kab, Kecamatan, Desa/Kelurahan, Alamat · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 4
- **AC-033** (REQ-055, VAL-011) — **Diberikan** vendor sudah memiliki sopir dengan No. WhatsApp W **Ketika** sopir baru dengan No. WhatsApp W ditambahkan **Maka** data tidak dapat disimpan · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 5
- **AC-034** (REQ-053, REQ-059) — **Diberikan** seluruh field wajib valid **Ketika** Simpan diklik **Maka** sopir tersimpan berstatus "Aktif" · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 3, 8
- **AC-035** (REQ-058) — **Diberikan** form tambah terisi **Ketika** Batal diklik **Maka** tampil pop up konfirmasi · Sumber: TMS.S010-R03 (bagian "Tambah Sopir (Sisi Vendor)") poin 8

### SEC-07 · Edit Sopir (Sisi Vendor)
- **AC-036** (REQ-061, REQ-063) — **Diberikan** list sopir vendor **Ketika** edit dibuka **Maka** form edit berupa pop up dan menampilkan field "Status" (Aktif/Tidak Aktif) · Sumber: TMS.S010-R04 (bagian "Edit Sopir (Sisi Vendor)") poin 2, 4
- **AC-037** (REQ-060) — **Diberikan** sopir sudah digunakan **Ketika** diedit dan disimpan **Maka** perubahan dapat dilakukan · Sumber: TMS.S010-R04 (bagian "Edit Sopir (Sisi Vendor)") poin 1
- **AC-038** (REQ-062, VAL-011) — **Diberikan** vendor memiliki sopir lain dengan No. WhatsApp W **Ketika** No. WhatsApp sopir diubah menjadi W **Maka** perubahan tidak dapat disimpan · Sumber: TMS.S010-R04 (bagian "Edit Sopir (Sisi Vendor)") poin 3
- **AC-039** (REQ-065) — **Diberikan** perubahan pada pop up edit **Ketika** Simpan diklik **Maka** tampil pop up konfirmasi · Sumber: TMS.S010-R04 (bagian "Edit Sopir (Sisi Vendor)") poin 5
- **AC-040** (REQ-064) — **Diberikan** pop up edit terbuka **Ketika** Batal diklik **Maka** tampil pop up konfirmasi · Sumber: TMS.S010-R04 (bagian "Edit Sopir (Sisi Vendor)") poin 5

## 6. State / transisi
| Status sopir | Kondisi / aksi | Sisi | Sumber |
|---|---|---|---|
| Aktif | Otomatis saat sopir baru ditambahkan | Shipper & Vendor | TMS.S010-R03 (bagian "Tambah Sopir (Sisi Shipper)") poin 3; (bagian "Tambah Sopir (Sisi Vendor)") poin 3 |
| Aktif ↔ Tidak Aktif | Diubah melalui field "Status" pada form Edit (pop up) | Shipper & Vendor | TMS.S010-R04 (kedua bagian) poin 2 |
| Pengaruh Tidak Aktif | Tidak dinyatakan (Q-15) | — | — |

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Manajemen Vendor (S003) | Menu "Master Sopir" & daftar vendor bergantung pada vendor dengan Pengelola = Shipper | TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 2–4; TMS.S003-R05/R06/R07; spec-index §3 |
| Penugasan Tracking (S015) | Sopir "Pilih Dari Master" pada penugasan; opsi "Tugaskan ke Sopir" disable bila Sopir diisi manual ("tidak ada akun sopir untuk menerima penugasan di Driver Hub") | TMS.S015-R05 poin 6, 9 |
| Driver Hub (S016) | Penugasan mode "Tugaskan ke Sopir" tampil di aplikasi Driver Hub | TMS.S015-R05 poin 8; spec-index §3 |
| Pengaturan Akun (S021) | Hak akses Master Sopir di kategori Master Operasional | TMS.S021-R08 poin 8 |
| TMS LKL (produk lain) | Form tambah sopir sisi vendor menduplikasi TMS LKL | TMS.S010-R02 (bagian "Ketentuan Umum (Sisi Vendor)") poin 1; spec-index §4 no.10 |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | Cakupan "pengelola ada yang dihandle oleh admin" vs R02 "Pengelola = Shipper" — apakah sama? | Cakupan kolom B poin 5; TMS.S010-R02 (Sisi Shipper) poin 2 | REQ-002, REQ-004 | spec-index §4 no.9 |
| Q-02 | Sisi Vendor poin 7 "wajib mengisi seluruh field" bertentangan dengan poin 1 "Kode Pos => tidak wajib diisi". | TMS.S010-R03 (Sisi Vendor) poin 1, 7 | REQ-046, REQ-057 | spec-index §4 no.7 |
| Q-03 | Cakupan menyebut akun vendor dengan diksi "Master Armada" (R02 sisi vendor menyebut "Master sopir"); R05 poin 5 menyebut "List armada" di halaman Kelola Sopir. | Cakupan kolom B poin 5; TMS.S010-R02 (Sisi Vendor) poin 2; TMS.S010-R05 poin 5 | REQ-033, REQ-035, REQ-036 | spec-index §4 no.8 |
| Q-04 | Form sisi vendor "menduplikasi TMS LKL" — detail di luar file. | TMS.S010-R02 (Sisi Vendor) poin 1 | REQ-037 | spec-index §4 no.10 |
| Q-05 | "tidak dapat klik button simpan => akan tampil alert pada keseluruhan field yang kosong": button disabled, atau dapat diklik lalu memunculkan alert? Teks alert tidak dicantumkan. | TMS.S010-R03 (Sisi Shipper) poin 8; (Sisi Vendor) poin 7 | REQ-021, REQ-057 | Baru |
| Q-06 | Hapus sopir: syarat (mis. sopir yang sudah ditugaskan), pop up konfirmasi, dan pesan tidak dirinci; aksi hapus sisi vendor tidak disebut. | Cakupan kolom B poin 4; TMS.S010-R05 poin 5 | REQ-033, REQ-034 | Baru |
| Q-07 | Import Data: format/nama template, cara download, penanganan baris gagal tidak dinyatakan. Import vendor tidak memuat Foto KTP/SIM/Sopir (wajib di form) dan Kode Pos — bagaimana data import memenuhi field wajib? Kolom "Alamat" vs field "Alamat Lengkap". | TMS.S010-R03 (Sisi Shipper) poin 5; (Sisi Vendor) poin 1, 4 | REQ-017, REQ-018, REQ-054 | Baru |
| Q-08 | Sisi Vendor tambah "Nomor wa whatsapp tidak boleh sama": dalam lingkup data sopir vendor sendiri (seperti edit poin 3) atau global? Termasuk duplikat antar baris input dalam satu proses? | TMS.S010-R03 (Sisi Vendor) poin 5; TMS.S010-R04 (Sisi Vendor) poin 3 | REQ-055, REQ-062 | Baru |
| Q-09 | Format/validasi No. WhatsApp, No. KTP, No. SIM (hanya angka, panjang, awalan) tidak dinyatakan. | TMS.S010-R03 (kedua bagian) | REQ-012, REQ-039–REQ-041 | Baru |
| Q-10 | Edit sisi Shipper tidak menyebut validasi unik No. WhatsApp per vendor, field wajib, maupun helper error saat edit — apakah aturan tambah berlaku? | TMS.S010-R04 (Sisi Shipper) | REQ-026 | Baru |
| Q-11 | Field yang dapat diedit pada sisi Vendor tidak disebut (sisi Shipper: Nama Sopir, No. WhatsApp, Status). | TMS.S010-R04 (Sisi Vendor) | REQ-063 | Baru |
| Q-12 | Halaman list master sopir sisi vendor (kolom, filter, Riwayat, aksi per baris, pagination) tidak dirinci; R05 hanya menjelaskan Kelola Sopir per vendor. | TMS.S010-R02 (Sisi Vendor) poin 2; TMS.S010-R05 | REQ-036 | Baru |
| Q-13 | Halaman utama Master Sopir sisi shipper (daftar vendor): kolom selain Jumlah Sopir & Tanggal Update, filter, pagination, urutan, definisi "Tanggal Update" tidak dinyatakan. | TMS.S010-R02 (Sisi Shipper) poin 5 | REQ-007, REQ-008 | Baru |
| Q-14 | Teks helper error, pesan duplikat No. WhatsApp, pesan file melebihi 4MB/format salah, teks pop up konfirmasi, dan notifikasi sukses simpan tidak dicantumkan. | TMS.S010-R03; TMS.S010-R04 | REQ-019, REQ-048–REQ-050, REQ-055, REQ-062 | Baru |
| Q-15 | Pengaruh status Tidak Aktif pada sopir (pilihan sopir di Penugasan Tracking, akses Driver Hub) tidak dinyatakan. | TMS.S010-R04 (kedua bagian) poin 2 | REQ-025, REQ-061 | Baru |
| Q-16 | R05 penomoran lompat (poin 1, 2, 4, 5 — poin 3 tidak ada): apakah ada rule yang hilang? Isi "Riwayat" tidak dirinci. | TMS.S010-R05 | REQ-032 | Baru |
| Q-17 | S015-R05 poin 9 menyiratkan sopir dari master memiliki akun untuk menerima penugasan di Driver Hub; pembuatan/aktivasi akun sopir dari Master Sopir (shipper maupun vendor) tidak dinyatakan. | TMS.S010-R03; TMS.S015-R05 poin 9 | REQ-012, REQ-038–REQ-050 | Baru |
| Q-18 | Cakupan kolom B "Setting Master" tidak memiliki rule. | Cakupan kolom B poin 3 | — | Baru |
| Q-19 | Perubahan Pengelola vendor (S003-R06, Shipper ↔ Vendor): apa yang terjadi pada data sopir vendor tersebut dan kemunculannya di Master Sopir shipper? | TMS.S010-R02 (Sisi Shipper) poin 4; TMS.S003-R06 | REQ-006 | Baru |

## 9. Catatan testability (bukan requirement)
- REQ-004/REQ-005/REQ-006 memerlukan akun shipper dengan dan tanpa vendor Pengelola = Shipper.
- SEC-05–SEC-07 memerlukan login akun vendor.
- REQ-048–REQ-050 memerlukan file uji gambar dengan variasi ukuran/format; template import tidak ada di workbook.
- Keterkaitan sopir master dengan Driver Hub (Q-17) hanya dapat diverifikasi melalui aplikasi Driver Hub (bukan web OPS).

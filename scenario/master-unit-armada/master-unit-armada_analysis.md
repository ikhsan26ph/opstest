# TMS.S009 — Master Unit (Armada) · Analysis (REQ / VAL / AC)

> Sumber: [`master-unit-armada_spec.md`](master-unit-armada_spec.md) (verbatim `Spek TMS-S` baris 34–38) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.
> Catatan: rule S009-R02/R03/R04 masing-masing memuat dua sub-bagian ("Sisi Shipper" dan "Sisi Vendor") dengan penomoran poin yang dimulai ulang; sumber ditulis `TMS.S009-Rxx (bagian "<judul>") poin n`.
> Perubahan status wajib field Akhir Berlaku KIR/Pajak berasal dari **TMS.S025-R06** dan tidak disalin di sini — lihat §7.

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| **Sisi Shipper** | | | | | | |
| SEC-01 | Ketentuan umum & tampilan tab "Armada" (Master Unit) | TMS.S009-R01, TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Shipper)"), Cakupan kolom B | Shipper | REQ-001–REQ-009 | — | AC-001–AC-005 |
| SEC-02 | Tambah Armada (Sisi Shipper) | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") | Shipper | REQ-010–REQ-023 | VAL-001–VAL-005 | AC-006–AC-016 |
| SEC-03 | Edit Armada (Sisi Shipper) | TMS.S009-R04 (bagian "Edit Armada (Sisi Shipper)") | Shipper | REQ-024–REQ-029 | — | AC-017–AC-021 |
| SEC-04 | Halaman Kelola Armada (Detail per Vendor) & Hapus | TMS.S009-R05, Cakupan kolom B poin 4 | Shipper | REQ-030–REQ-034 | — | AC-022–AC-025 |
| **Sisi Vendor** | | | | | | |
| SEC-05 | Ketentuan umum (Sisi Vendor) — menu "Master Armada" | TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Vendor)"), Cakupan kolom B | Vendor | REQ-035–REQ-037 | — | AC-026 |
| SEC-06 | Tambah Armada (Sisi Vendor) | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") | Vendor | REQ-038–REQ-055 | VAL-006–VAL-014 | AC-027–AC-037 |
| SEC-07 | Edit Armada (Sisi Vendor) | TMS.S009-R04 (bagian "Edit Armada (Sisi Vendor)") | Vendor | REQ-056–REQ-061 | VAL-013 | AC-038–AC-042 |

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Shipper | "Baru tampil di shipper saat terdapat kondisi pengelola ada yang dihandle oleh admin"; tab "Armada" pada Master Unit hanya tampil bila shipper memiliki minimal 1 vendor dengan Pengelola = "Shipper" | Cakupan kolom B poin 5; TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 2–3 (Q-01) |
| Vendor | "Tampil di akun vendor dengan diksi \"Master Armada\""; mengelola armada miliknya sendiri | Cakupan kolom B poin 5; TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Vendor)") poin 2 |
| (Hak akses sub user) | Master Unit tercantum pada kategori Master Operasional di Hak Akses (3-level, tanpa Cakupan Data) | TMS.S021-R08 poin 8 (rujukan lintas modul) |

## 3. Requirement (REQ)

## Sisi Shipper

### SEC-01 · Ketentuan umum & tab "Armada"
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Master armada tersedia pada POV shipper dan vendor. | TMS.S009-R01 | TERTULIS |
| REQ-002 | Pada shipper, master armada "Baru tampil di shipper saat terdapat kondisi pengelola ada yang dihandle oleh admin". | Cakupan kolom B poin 5 | AMBIGU (Q-01) |
| REQ-003 | Data armada sisi shipper berada di menu Master Unit, tab "Armada". | TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 1 | TERTULIS |
| REQ-004 | Tab "Armada" hanya tampil apabila shipper memiliki minimal 1 vendor dengan Pengelola = "Shipper". | TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 2 | TERTULIS |
| REQ-005 | Jika shipper tidak memiliki vendor dengan Pengelola = Shipper, tab "Armada" tidak ditampilkan pada Master Unit. | TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 3 | TERTULIS |
| REQ-006 | Vendor yang terdaftar dengan Pengelola = Shipper otomatis muncul pada tab "Armada" tanpa input manual. | TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 4 | TERTULIS |
| REQ-007 | Tab "Armada" menampilkan daftar vendor, bukan daftar armada individual. | TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 5 | AMBIGU (Q-12) |
| REQ-008 | Setiap baris vendor menampilkan agregat Jumlah Armada & Tanggal Update terakhir. | TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 5 | TERTULIS |
| REQ-009 | Aksi "Kelola Armada" (icon gear) pada baris vendor membuka halaman detail "Kelola Armada" berisi daftar armada milik vendor tersebut. | TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 6 | TERTULIS |

### SEC-02 · Tambah Armada (Sisi Shipper)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-010 | Entry point dari halaman utama Master Unit > tab Armada (di luar konteks vendor tertentu) mewajibkan memilih field "Nama Vendor" terlebih dahulu. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 1 | TERTULIS |
| REQ-011 | Entry point dari halaman "Kelola Armada" vendor tertentu tidak menampilkan pemilihan Nama Vendor (otomatis mengikuti vendor yang dibuka); penambahan hanya berlaku untuk vendor tersebut. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 1 | TERTULIS |
| REQ-012 | Field input: Nama Vendor (khusus entry point luar), Jenis Armada (dropdown, data dari Master Jenis Armada), Nomor Polisi. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 2 | TERTULIS |
| REQ-013 | Seluruh field wajib diisi. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 2 | TERTULIS |
| REQ-014 | Armada yang baru ditambahkan otomatis berstatus "Aktif". | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 3 | TERTULIS |
| REQ-015 | Dapat menambah lebih dari 1 baris input sekaligus menggunakan "Tambah Baris Input". | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 4 | TERTULIS |
| REQ-016 | Icon hapus baris baru tampil saat terdapat 2 baris input atau lebih. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 4 | TERTULIS |
| REQ-017 | Import Data dari entry point luar memakai kolom template: No, Nama Vendor, Jenis Armada, Nomor Polisi. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 5 | AMBIGU (Q-07) |
| REQ-018 | Import Data dari entry point dalam (Kelola Armada per vendor) memakai kolom template: No, Jenis Armada, Nomor Polisi. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 5 | AMBIGU (Q-07) |
| REQ-019 | Nomor Polisi boleh sama antar vendor berbeda, tetapi tidak boleh sama pada data armada milik vendor yang sama (unique per vendor). | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 6 | TERTULIS |
| REQ-020 | Jika field wajib tidak diisi: tampil helper error & border field berubah warna error. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 7 | TERTULIS |
| REQ-021 | Saat terdapat field kosong, tidak dapat klik button simpan dan tampil alert pada keseluruhan field yang kosong. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 8 | AMBIGU (Q-05) |
| REQ-022 | Button Batal membatalkan pengisian data dan menampilkan pop up konfirmasi. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 9 | TERTULIS |
| REQ-023 | Button Simpan menyimpan data yang telah diisikan. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 9 | TERTULIS |

### SEC-03 · Edit Armada (Sisi Shipper)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-024 | Data armada yang sudah digunakan (misal sudah pernah ditugaskan) tetap dapat diubah. | TMS.S009-R04 (bagian "Edit Armada (Sisi Shipper)") poin 1 | TERTULIS |
| REQ-025 | Field "Status" (Aktif/Tidak Aktif) hanya ditampilkan pada form Edit, tidak pada proses tambah. | TMS.S009-R04 (bagian "Edit Armada (Sisi Shipper)") poin 2 | TERTULIS |
| REQ-026 | Field yang dapat diedit: Jenis Armada, Nomor Polisi, Status. | TMS.S009-R04 (bagian "Edit Armada (Sisi Shipper)") poin 3 | AMBIGU (Q-09) |
| REQ-027 | Form edit berupa pop up. | TMS.S009-R04 (bagian "Edit Armada (Sisi Shipper)") poin 4 | TERTULIS |
| REQ-028 | Button Batal membatalkan perubahan dan menampilkan pop up konfirmasi. | TMS.S009-R04 (bagian "Edit Armada (Sisi Shipper)") poin 5 | TERTULIS |
| REQ-029 | Button Simpan menyimpan perubahan dan menampilkan pop up konfirmasi. | TMS.S009-R04 (bagian "Edit Armada (Sisi Shipper)") poin 5 | TERTULIS |

### SEC-04 · Halaman Kelola Armada (Detail per Vendor) & Hapus
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-030 | Halaman Kelola Armada menampilkan Informasi Vendor: Nama Vendor, Jumlah Armada, Tanggal Update. | TMS.S009-R05 poin 1 | TERTULIS |
| REQ-031 | Tersedia filter: Jenis Armada, Nomor Polisi, Status. | TMS.S009-R05 poin 2 | TERTULIS |
| REQ-032 | Tersedia tombol "Riwayat" untuk melihat riwayat perubahan data armada. | TMS.S009-R05 poin 3 | AMBIGU (Q-15) |
| REQ-033 | List armada menampilkan aksi Edit & Hapus per baris. | TMS.S009-R05 poin 4 | TERTULIS |
| REQ-034 | Data armada dapat dihapus ("Hapus Data"); syarat, konfirmasi, dan pesan tidak dirinci. | Cakupan kolom B poin 4; TMS.S009-R05 poin 4 | AMBIGU (Q-06) |

## Sisi Vendor

### SEC-05 · Ketentuan umum (Sisi Vendor)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-035 | Pada akun vendor, menu tampil dengan diksi "Master Armada". | Cakupan kolom B poin 5 | TERTULIS |
| REQ-036 | Data armada sisi vendor masuk ke menu Master Armada tanpa pengelompokan per vendor (hanya 1 entitas). | TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Vendor)") poin 2 | AMBIGU (Q-11) |
| REQ-037 | Form Tambah Armada sisi vendor menduplikasi form pada produk TMS LKL (Lintas Karya Logistik) — "isi form sama, dapat mengacu implementasi yang sudah ada". | TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Vendor)") poin 1 | REF-EKSTERNAL (Q-03) |

### SEC-06 · Tambah Armada (Sisi Vendor)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-038 | Field Jenis Armada: dropdown, wajib diisi, data dari Master Jenis Armada. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-039 | Field Nomor Polisi wajib diisi. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-040 | Field Akhir Berlaku Pajak tidak wajib diisi (status wajib dapat berubah sesuai TMS.S025-R06, lihat §7). | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1 | KONFLIK (Q-02) |
| REQ-041 | Field No. KIR wajib diisi. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-042 | Field Mulai Berlaku KIR tidak wajib diisi. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1 | KONFLIK (Q-02) |
| REQ-043 | Field Akhir Berlaku KIR tidak wajib diisi (status wajib dapat berubah sesuai TMS.S025-R06, lihat §7). | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1 | KONFLIK (Q-02) |
| REQ-044 | Field Foto STNK wajib diisi, maksimal 4MB, format .jpg/.jpeg/.png. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-045 | Field Foto KIR tidak wajib diisi, maksimal 4MB, format .jpg/.jpeg/.png. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1 | KONFLIK (Q-02) |
| REQ-046 | Field Foto Kendaraan wajib diisi, maksimal 4MB, format .jpg/.jpeg/.png. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-047 | Dapat menambah lebih dari 1 baris input sekaligus. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 2 | TERTULIS |
| REQ-048 | Icon hapus baris baru tampil saat terdapat 2 baris input atau lebih. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 2 | TERTULIS |
| REQ-049 | Armada yang baru ditambahkan otomatis berstatus "Aktif". | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 3 | TERTULIS |
| REQ-050 | Import Data memakai kolom: No, Jenis Armada, Nomor Polisi, No. KIR. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 4 | KONFLIK (Q-07) |
| REQ-051 | Nomor Polisi tidak boleh sama. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 5 | AMBIGU (Q-08) |
| REQ-052 | Jika field wajib tidak diisi: tampil helper error & border field berubah warna error. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 6 | TERTULIS |
| REQ-053 | Data hanya dapat disimpan bila seluruh field terisi; saat ada field kosong, tidak dapat klik button simpan dan tampil alert pada keseluruhan field yang kosong. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 7 | KONFLIK (Q-02, Q-05) |
| REQ-054 | Button Batal membatalkan pengisian data dan menampilkan pop up konfirmasi. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 8 | TERTULIS |
| REQ-055 | Button Simpan menyimpan data yang telah diisikan. | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 8 | TERTULIS |

### SEC-07 · Edit Armada (Sisi Vendor)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-056 | Data armada yang sudah digunakan tetap dapat diubah. | TMS.S009-R04 (bagian "Edit Armada (Sisi Vendor)") poin 1 | TERTULIS |
| REQ-057 | Field "Status" (Aktif/Tidak Aktif) hanya ditampilkan pada form Edit. | TMS.S009-R04 (bagian "Edit Armada (Sisi Vendor)") poin 2 | TERTULIS |
| REQ-058 | Nomor Polisi tidak boleh duplikat pada data armada milik vendor tersebut (sumber tertulis "tersebu"). | TMS.S009-R04 (bagian "Edit Armada (Sisi Vendor)") poin 3 | TERTULIS |
| REQ-059 | Form edit berupa pop up. | TMS.S009-R04 (bagian "Edit Armada (Sisi Vendor)") poin 4 | AMBIGU (Q-10) |
| REQ-060 | Button Batal membatalkan perubahan dan menampilkan pop up konfirmasi. | TMS.S009-R04 (bagian "Edit Armada (Sisi Vendor)") poin 5 | TERTULIS |
| REQ-061 | Button Simpan menyimpan perubahan dan menampilkan pop up konfirmasi. | TMS.S009-R04 (bagian "Edit Armada (Sisi Vendor)") poin 5 | TERTULIS |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-02 | Nama Vendor (entry point luar) | Wajib dipilih terlebih dahulu | "tampilkan helper error & border field berubah warna error" | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 1, 2, 7 |
| VAL-002 | SEC-02 | Jenis Armada | Wajib, dropdown dari Master Jenis Armada | "tampilkan helper error & border field berubah warna error" | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 2, 7 |
| VAL-003 | SEC-02 | Nomor Polisi | Wajib | "tampilkan helper error & border field berubah warna error" | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 2, 7 |
| VAL-004 | SEC-02 | Nomor Polisi | Unique per vendor (boleh sama antar vendor berbeda) | Tidak dinyatakan di spec (Q-13) | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 6 |
| VAL-005 | SEC-02 | Form tambah (seluruh field) | Seluruh field wajib terisi agar dapat disimpan | "tidak dapat klik button simpan => akan tampil alert pada keseluruhan field yang kosong" | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 8 |
| VAL-006 | SEC-06 | Jenis Armada | Wajib, dropdown dari Master Jenis Armada | "tampilkan helper error & border field berubah warna error" | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1, 6 |
| VAL-007 | SEC-06 | Nomor Polisi | Wajib | "tampilkan helper error & border field berubah warna error" | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1, 6 |
| VAL-008 | SEC-06 | No. KIR | Wajib | "tampilkan helper error & border field berubah warna error" | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1, 6 |
| VAL-009 | SEC-06 | Foto STNK | Wajib, maksimal 4MB, format .jpg/.jpeg/.png | Wajib kosong: "tampilkan helper error & border field berubah warna error"; ukuran/format tidak sesuai: tidak dinyatakan (Q-13) | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1, 6 |
| VAL-010 | SEC-06 | Foto Kendaraan | Wajib, maksimal 4MB, format .jpg/.jpeg/.png | Sama seperti VAL-009 | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1, 6 |
| VAL-011 | SEC-06 | Foto KIR | Tidak wajib; maksimal 4MB, format .jpg/.jpeg/.png | Ukuran/format tidak sesuai: tidak dinyatakan (Q-13) | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1 |
| VAL-012 | SEC-06 | Akhir Berlaku Pajak, Mulai Berlaku KIR, Akhir Berlaku KIR | Tertulis "tidak wajib diisi" — bertentangan dengan poin 7; status wajib Akhir Berlaku KIR/Pajak juga diatur TMS.S025-R06 (§7) | Tidak dinyatakan (Q-02) | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1, 7 |
| VAL-013 | SEC-06, SEC-07 | Nomor Polisi | Tambah: "tidak boleh sama"; Edit: tidak boleh duplikat pada data armada milik vendor tersebut | Tidak dinyatakan di spec (Q-08, Q-13) | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 5; TMS.S009-R04 (bagian "Edit Armada (Sisi Vendor)") poin 3 |
| VAL-014 | SEC-06 | Form tambah (seluruh field) | "wajib mengisi seluruh field" | "tidak dapat klik button simpan => akan tampil alert pada keseluruhan field yang kosong" | TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 7 (KONFLIK Q-02) |

## 5. Acceptance Criteria (AC)

## Sisi Shipper

### SEC-01 · Ketentuan umum & tab "Armada"
- **AC-001** (REQ-003, REQ-004) — **Diberikan** shipper memiliki minimal 1 vendor dengan Pengelola = "Shipper" **Ketika** membuka menu Master Unit **Maka** tab "Armada" tampil · Sumber: TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 1–2
- **AC-002** (REQ-005) — **Diberikan** shipper tidak memiliki vendor dengan Pengelola = Shipper **Ketika** membuka menu Master Unit **Maka** tab "Armada" tidak ditampilkan · Sumber: TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 3
- **AC-003** (REQ-006) — **Diberikan** vendor baru terdaftar dengan Pengelola = Shipper **Ketika** tab "Armada" dibuka **Maka** vendor tersebut otomatis muncul tanpa input manual · Sumber: TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 4
- **AC-004** (REQ-007, REQ-008) — **Diberikan** tab "Armada" terbuka **Ketika** daftar dimuat **Maka** setiap baris adalah vendor dengan agregat Jumlah Armada & Tanggal Update terakhir (bukan daftar armada individual) · Sumber: TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 5
- **AC-005** (REQ-009) — **Diberikan** baris vendor pada tab "Armada" **Ketika** aksi "Kelola Armada" (icon gear) diklik **Maka** halaman "Kelola Armada" terbuka berisi daftar armada milik vendor tersebut · Sumber: TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 6

### SEC-02 · Tambah Armada (Sisi Shipper)
- **AC-006** (REQ-010, REQ-012, VAL-001) — **Diberikan** tambah armada dibuka dari halaman utama Master Unit > tab Armada **Ketika** form tampil **Maka** field Nama Vendor, Jenis Armada, Nomor Polisi tersedia dan Nama Vendor wajib dipilih · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 1–2
- **AC-007** (REQ-011) — **Diberikan** tambah armada dibuka dari halaman "Kelola Armada" vendor X **Ketika** form tampil dan data disimpan **Maka** tidak ada pemilihan Nama Vendor dan armada tersimpan untuk vendor X · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 1
- **AC-008** (REQ-012, VAL-002) — **Diberikan** form tambah **Ketika** dropdown Jenis Armada dibuka **Maka** pilihan berasal dari Master Jenis Armada · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 2
- **AC-009** (REQ-013, REQ-020, VAL-001–VAL-003) — **Diberikan** salah satu field wajib kosong **Ketika** validasi dijalankan **Maka** tampil helper error dan border field berubah warna error · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 7
- **AC-010** (REQ-021, VAL-005) — **Diberikan** terdapat field kosong **Ketika** user mencoba menyimpan **Maka** button simpan tidak dapat diklik dan tampil alert pada keseluruhan field yang kosong · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 8
- **AC-011** (REQ-015, REQ-016) — **Diberikan** form tambah dengan 1 baris input **Ketika** "Tambah Baris Input" diklik **Maka** baris bertambah dan icon hapus baris tampil (≥ 2 baris); dengan 1 baris icon hapus tidak tampil · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 4
- **AC-012** (REQ-019, VAL-004) — **Diberikan** vendor A sudah memiliki armada Nomor Polisi N **Ketika** armada Nomor Polisi N ditambahkan lagi untuk vendor A **Maka** data tidak dapat disimpan · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 6
- **AC-013** (REQ-019) — **Diberikan** vendor A memiliki armada Nomor Polisi N **Ketika** armada Nomor Polisi N ditambahkan untuk vendor B **Maka** data dapat disimpan · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 6
- **AC-014** (REQ-017, REQ-018) — **Diberikan** Import Data dibuka dari entry point luar / dalam **Ketika** template diperiksa **Maka** kolom masing-masing: No, Nama Vendor, Jenis Armada, Nomor Polisi / No, Jenis Armada, Nomor Polisi · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 5
- **AC-015** (REQ-014, REQ-023) — **Diberikan** seluruh field valid **Ketika** Simpan diklik **Maka** data armada tersimpan berstatus "Aktif" · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 3, 9
- **AC-016** (REQ-022) — **Diberikan** form tambah terisi **Ketika** Batal diklik **Maka** tampil pop up konfirmasi pembatalan · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 9

### SEC-03 · Edit Armada (Sisi Shipper)
- **AC-017** (REQ-027, REQ-026, REQ-025) — **Diberikan** list armada di Kelola Armada **Ketika** aksi Edit diklik **Maka** pop up edit tampil dengan field Jenis Armada, Nomor Polisi, Status (Aktif/Tidak Aktif) · Sumber: TMS.S009-R04 (bagian "Edit Armada (Sisi Shipper)") poin 2–4
- **AC-018** (REQ-025) — **Diberikan** form tambah armada **Ketika** form tampil **Maka** field Status tidak ada · Sumber: TMS.S009-R04 (bagian "Edit Armada (Sisi Shipper)") poin 2
- **AC-019** (REQ-024) — **Diberikan** armada sudah pernah ditugaskan **Ketika** diedit dan disimpan **Maka** perubahan dapat dilakukan · Sumber: TMS.S009-R04 (bagian "Edit Armada (Sisi Shipper)") poin 1
- **AC-020** (REQ-029) — **Diberikan** perubahan pada pop up edit **Ketika** Simpan diklik **Maka** tampil pop up konfirmasi sebelum perubahan disimpan · Sumber: TMS.S009-R04 (bagian "Edit Armada (Sisi Shipper)") poin 5
- **AC-021** (REQ-028) — **Diberikan** pop up edit terbuka **Ketika** Batal diklik **Maka** tampil pop up konfirmasi pembatalan · Sumber: TMS.S009-R04 (bagian "Edit Armada (Sisi Shipper)") poin 5

### SEC-04 · Halaman Kelola Armada
- **AC-022** (REQ-030) — **Diberikan** halaman Kelola Armada vendor X **Ketika** dimuat **Maka** tampil Informasi Vendor: Nama Vendor, Jumlah Armada, Tanggal Update · Sumber: TMS.S009-R05 poin 1
- **AC-023** (REQ-031) — **Diberikan** halaman Kelola Armada **Ketika** filter Jenis Armada / Nomor Polisi / Status diterapkan **Maka** list armada tersaring sesuai filter · Sumber: TMS.S009-R05 poin 2
- **AC-024** (REQ-032) — **Diberikan** halaman Kelola Armada **Ketika** tombol "Riwayat" diklik **Maka** tampil riwayat perubahan data armada · Sumber: TMS.S009-R05 poin 3
- **AC-025** (REQ-033) — **Diberikan** list armada **Ketika** baris dilihat **Maka** setiap baris memiliki aksi Edit & Hapus · Sumber: TMS.S009-R05 poin 4

## Sisi Vendor

### SEC-05 · Ketentuan umum (Sisi Vendor)
- **AC-026** (REQ-035, REQ-036) — **Diberikan** login sebagai vendor **Ketika** membuka menu master **Maka** menu bernama "Master Armada" menampilkan armada milik vendor tanpa pengelompokan per vendor · Sumber: Cakupan kolom B poin 5; TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Vendor)") poin 2

### SEC-06 · Tambah Armada (Sisi Vendor)
- **AC-027** (REQ-038–REQ-046) — **Diberikan** form Tambah Armada vendor **Ketika** form tampil **Maka** tersedia field Jenis Armada, Nomor Polisi, Akhir Berlaku Pajak, No. KIR, Mulai Berlaku KIR, Akhir Berlaku KIR, Foto STNK, Foto KIR, Foto Kendaraan · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1
- **AC-028** (REQ-052, VAL-006–VAL-010) — **Diberikan** salah satu dari Jenis Armada, Nomor Polisi, No. KIR, Foto STNK, Foto Kendaraan kosong **Ketika** validasi dijalankan **Maka** tampil helper error dan border field berubah warna error · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1, 6
- **AC-029** (REQ-053, VAL-014) — **Diberikan** terdapat field wajib kosong **Ketika** user mencoba menyimpan **Maka** button simpan tidak dapat diklik dan tampil alert pada keseluruhan field yang kosong · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 7 (cakupan "seluruh field": Q-02)
- **AC-030** (REQ-044, REQ-046, VAL-009, VAL-010) — **Diberikan** file Foto STNK/Foto Kendaraan berformat .jpg/.jpeg/.png dan ≤ 4MB **Ketika** diunggah **Maka** file diterima · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1
- **AC-031** (REQ-044–REQ-046, VAL-009–VAL-011) — **Diberikan** file foto > 4MB atau berformat selain .jpg/.jpeg/.png **Ketika** diunggah **Maka** file tidak diterima · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 1 (pesan: Q-13)
- **AC-032** (REQ-047, REQ-048) — **Diberikan** form dengan 1 baris input **Ketika** baris input ditambah **Maka** icon hapus baris tampil saat ≥ 2 baris · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 2
- **AC-033** (REQ-050) — **Diberikan** Import Data vendor **Ketika** template diperiksa **Maka** kolom: No, Jenis Armada, Nomor Polisi, No. KIR · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 4
- **AC-034** (REQ-051, VAL-013) — **Diberikan** vendor sudah memiliki armada Nomor Polisi N **Ketika** armada Nomor Polisi N ditambahkan lagi **Maka** data tidak dapat disimpan · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 5
- **AC-035** (REQ-049, REQ-055) — **Diberikan** seluruh field wajib valid **Ketika** Simpan diklik **Maka** armada tersimpan berstatus "Aktif" · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 3, 8
- **AC-036** (REQ-054) — **Diberikan** form tambah terisi **Ketika** Batal diklik **Maka** tampil pop up konfirmasi · Sumber: TMS.S009-R03 (bagian "Tambah Armada (Sisi Vendor)") poin 8
- **AC-037** (REQ-040, REQ-043) — **Diberikan** Mode Pengecekan & Dokumen yang Diperiksa pada Pengaturan Sistem **Ketika** form tambah/edit/import armada vendor digunakan **Maka** status wajib Akhir Berlaku KIR/Pajak mengikuti TMS.S025-R06 (AC dirinci di analysis S025) · Sumber: TMS.S025-R06 (dependensi)

### SEC-07 · Edit Armada (Sisi Vendor)
- **AC-038** (REQ-059, REQ-057) — **Diberikan** list Master Armada vendor **Ketika** edit dibuka **Maka** form edit berupa pop up dan menampilkan field "Status" (Aktif/Tidak Aktif) · Sumber: TMS.S009-R04 (bagian "Edit Armada (Sisi Vendor)") poin 2, 4
- **AC-039** (REQ-056) — **Diberikan** armada sudah digunakan **Ketika** diedit dan disimpan **Maka** perubahan dapat dilakukan · Sumber: TMS.S009-R04 (bagian "Edit Armada (Sisi Vendor)") poin 1
- **AC-040** (REQ-058, VAL-013) — **Diberikan** vendor memiliki armada lain dengan Nomor Polisi N **Ketika** Nomor Polisi armada diubah menjadi N **Maka** perubahan tidak dapat disimpan · Sumber: TMS.S009-R04 (bagian "Edit Armada (Sisi Vendor)") poin 3
- **AC-041** (REQ-061) — **Diberikan** perubahan pada pop up edit **Ketika** Simpan diklik **Maka** tampil pop up konfirmasi · Sumber: TMS.S009-R04 (bagian "Edit Armada (Sisi Vendor)") poin 5
- **AC-042** (REQ-060) — **Diberikan** pop up edit terbuka **Ketika** Batal diklik **Maka** tampil pop up konfirmasi · Sumber: TMS.S009-R04 (bagian "Edit Armada (Sisi Vendor)") poin 5

## 6. State / transisi
| Status armada | Kondisi / aksi | Sisi | Sumber |
|---|---|---|---|
| Aktif | Otomatis saat armada baru ditambahkan | Shipper & Vendor | TMS.S009-R03 (bagian "Tambah Armada (Sisi Shipper)") poin 3; (bagian "Tambah Armada (Sisi Vendor)") poin 3 |
| Aktif ↔ Tidak Aktif | Diubah melalui field "Status" pada form Edit (pop up) | Shipper & Vendor | TMS.S009-R04 (kedua bagian) poin 2 |
| Pengaruh Tidak Aktif | Tidak dinyatakan (Q-14) | — | — |

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Manajemen Vendor (S003) | Tab "Armada" & daftar vendor bergantung pada vendor dengan Pengelola = Shipper | TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Shipper)") poin 2–4; TMS.S003-R05/R06/R07; spec-index §3 |
| Pembatasan Pajak & KIR (S025) | **TMS.S025-R06**: status wajib field Akhir Berlaku KIR dan Akhir Berlaku Pajak pada Master Armada sisi vendor berubah sesuai Mode Pengecekan & Dokumen yang Diperiksa (berlaku pada tambah, edit, import). Tidak disalin; lihat analysis S025. | TMS.S025-R06; spec-index §3 |
| Pembatasan Pajak & KIR (S025) | Data masa berlaku dokumen diinput vendor pada Master Armada; shipper tidak dapat mengubahnya; berlaku untuk armada "yang pengelola nya vendor" | TMS.S025-R02 poin 3–4; spec-index §4 no.36 |
| Pengaturan Sistem (S020) / S025-R03 | Mode Pengecekan menentukan wajib/tidaknya data masa berlaku | TMS.S025-R03 poin 3 (rujukan) |
| Penugasan Tracking (S015) | Armada "Pilih Dari Master" pada penugasan; badge status dokumen armada | TMS.S015-R05 poin 6–7; TMS.S025-R05/R07 |
| Order (S011) | Jenis Armada pada order "data diambil dari Master Unit (Jenis Armada)" | TMS.S011 (field Jenis Armada) |
| Pengaturan Akun (S021) | Hak akses Master Unit di kategori Master Operasional | TMS.S021-R08 poin 8 |
| TMS LKL (produk lain) | Form tambah armada sisi vendor menduplikasi TMS LKL | TMS.S009-R02 (bagian "Ketentuan Umum (Sisi Vendor)") poin 1; spec-index §4 no.10 |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | Cakupan "pengelola ada yang dihandle oleh admin" vs R02 "Pengelola = Shipper" — apakah sama? | Cakupan kolom B poin 5; TMS.S009-R02 (Sisi Shipper) poin 2 | REQ-002, REQ-004 | spec-index §4 no.9 |
| Q-02 | Sisi Vendor poin 7 "wajib mengisi seluruh field" bertentangan dengan poin 1 yang menandai Akhir Berlaku Pajak, Mulai/Akhir Berlaku KIR, Foto KIR "tidak wajib". | TMS.S009-R03 (Sisi Vendor) poin 1, 7 | REQ-040, REQ-042, REQ-043, REQ-045, REQ-053 | spec-index §4 no.7 |
| Q-03 | Form sisi vendor "menduplikasi TMS LKL" — detail di luar file. | TMS.S009-R02 (Sisi Vendor) poin 1 | REQ-037 | spec-index §4 no.10 |
| Q-04 | Perlakuan KIR/Pajak untuk armada dari vendor Pengelola = Shipper (form shipper tanpa field KIR/Pajak). | TMS.S009-R03 (Sisi Shipper) poin 2; TMS.S025-R02 poin 3 | REQ-012 | spec-index §4 no.36 |
| Q-05 | "tidak dapat klik button simpan => akan tampil alert pada keseluruhan field yang kosong": button simpan disabled, atau dapat diklik lalu memunculkan alert? Teks alert tidak dicantumkan. | TMS.S009-R03 (Sisi Shipper) poin 8; (Sisi Vendor) poin 7 | REQ-021, REQ-053 | Baru |
| Q-06 | Hapus armada: syarat (mis. armada sudah ditugaskan boleh dihapus?), pop up konfirmasi, dan pesan tidak dirinci; aksi hapus pada sisi vendor tidak disebut. | Cakupan kolom B poin 4; TMS.S009-R05 poin 4 | REQ-033, REQ-034 | Baru |
| Q-07 | Import Data: format/nama template, cara download, dan penanganan baris gagal tidak dinyatakan. Import vendor hanya berkolom No, Jenis Armada, Nomor Polisi, No. KIR, padahal Foto STNK & Foto Kendaraan wajib di form — bagaimana data import memenuhi field wajib? | TMS.S009-R03 (Sisi Shipper) poin 5; (Sisi Vendor) poin 1, 4 | REQ-017, REQ-018, REQ-050 | Baru |
| Q-08 | Sisi Vendor tambah "Nomor Polisi tidak boleh sama": dalam lingkup data armada vendor sendiri (seperti edit poin 3) atau global? Termasuk duplikat antar baris input dalam satu proses? | TMS.S009-R03 (Sisi Vendor) poin 5; TMS.S009-R04 (Sisi Vendor) poin 3 | REQ-051, REQ-058 | Baru |
| Q-09 | Edit sisi Shipper tidak menyebut validasi unik Nomor Polisi per vendor, field wajib, maupun helper error saat edit — apakah aturan tambah berlaku? | TMS.S009-R04 (Sisi Shipper) | REQ-026 | Baru |
| Q-10 | Field yang dapat diedit pada sisi Vendor tidak disebut (sisi Shipper: Jenis Armada, Nomor Polisi, Status). Apakah seluruh field form tambah (termasuk foto & tanggal KIR/Pajak) dapat diedit di pop up? | TMS.S009-R04 (Sisi Vendor) | REQ-059 | Baru |
| Q-11 | Halaman list Master Armada sisi vendor (kolom, filter, tombol Riwayat, aksi per baris, pagination) tidak dirinci; R05 hanya menjelaskan Kelola Armada per vendor. | TMS.S009-R02 (Sisi Vendor) poin 2; TMS.S009-R05 | REQ-036 | Baru |
| Q-12 | Halaman utama tab "Armada" (daftar vendor): kolom selain Jumlah Armada & Tanggal Update, filter, pagination, urutan, dan definisi "Tanggal Update" tidak dinyatakan. | TMS.S009-R02 (Sisi Shipper) poin 5 | REQ-007, REQ-008 | Baru |
| Q-13 | Teks helper error, pesan duplikat Nomor Polisi, pesan file melebihi 4MB/format salah, teks pop up konfirmasi, dan notifikasi sukses simpan tidak dicantumkan. | TMS.S009-R03; TMS.S009-R04 | REQ-019, REQ-044–REQ-046, REQ-051, REQ-058 | Baru |
| Q-14 | Pengaruh status Tidak Aktif pada armada (mis. terhadap pilihan armada di Penugasan Tracking) tidak dinyatakan. | TMS.S009-R04 (kedua bagian) poin 2 | REQ-025, REQ-057 | Baru |
| Q-15 | Isi dan tampilan "Riwayat" perubahan data armada tidak dirinci. | TMS.S009-R05 poin 3 | REQ-032 | Baru |
| Q-16 | Cakupan kolom B "Setting Master" tidak memiliki rule; "Master Jenis Armada" (sumber dropdown) tidak dirinci di file. | Cakupan kolom B poin 3; TMS.S009-R03 | REQ-012, REQ-038 | Baru |
| Q-17 | Perubahan Pengelola vendor (S003-R06, Shipper ↔ Vendor): apa yang terjadi pada data armada vendor tersebut dan kemunculannya di tab "Armada"? | TMS.S009-R02 (Sisi Shipper) poin 4; TMS.S003-R06 | REQ-006 | Baru |

## 9. Catatan testability (bukan requirement)
- REQ-004/REQ-005/REQ-006 memerlukan akun shipper dengan dan tanpa vendor Pengelola = Shipper (data di Manajemen Vendor).
- SEC-05–SEC-07 memerlukan login akun vendor (menu "Master Armada").
- REQ-044–REQ-046 memerlukan file uji gambar dengan variasi ukuran/format; REQ-017/REQ-018/REQ-050 memerlukan file template import yang tidak ada di workbook.
- Status wajib Akhir Berlaku KIR/Pajak bergantung konfigurasi Pengaturan Sistem (TMS.S025-R03/R06).

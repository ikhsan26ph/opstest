# TMS.S006 — Master Drop Point · Analysis (REQ / VAL / AC)

> Sumber: [`master-drop-point_spec.md`](master-drop-point_spec.md) (verbatim `Spek TMS-S` baris 19–24) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.
> Catatan sumber: kolom Spesifikasi Selesai/Versi hanya terisi pada baris pendahuluan (spec-index §4 no.6).

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Halaman Master Drop Point (tabel, filter, aksi baris) | TMS.S006-R02, TMS.S006-R06 poin 5 | Admin | REQ-001–REQ-011 | VAL-009 | AC-001–AC-008 |
| SEC-02 | Tambah Perusahaan (bagian Perusahaan + bagian Drop Point) | TMS.S006-R03 | Admin | REQ-012–REQ-025 | VAL-001–VAL-008 | AC-009–AC-018 |
| SEC-03 | Edit Informasi Perusahaan | TMS.S006-R04 | Admin | REQ-026–REQ-034 | — | AC-019–AC-024 |
| SEC-04 | Detail Perusahaan (informasi + tabel drop point) | TMS.S006-R05 poin 1–4, TMS.S006-R06 poin 5 | Admin | REQ-035–REQ-041 | — | AC-025–AC-028 |
| SEC-05 | Lihat / Tambah / Edit / Hapus Drop Point (right drawer) | TMS.S006-R05 poin 4–6 | Admin | REQ-042–REQ-050 | VAL-003–VAL-008, VAL-010 | AC-029–AC-036 |
| SEC-06 | Ketentuan umum & lainnya | TMS.S006-R01, TMS.S006-R06 | Admin | REQ-051–REQ-057 | VAL-010 | AC-037–AC-039 |

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Admin | "Admin bisa lihat, tambah, edit, dan hapus data. Tapi data yang sudah digunakan tidak dapat dihapus (perlu alert)." | TMS.S006-R06 poin 2 |
| (Hak akses sub user) | Master Drop Point tercantum pada kategori Master Operasional di Hak Akses, "masing-masing kontrol 3-level, tanpa Cakupan Data" | TMS.S021-R08 poin 8 (rujukan lintas modul) |

Hubungan istilah "Admin" dengan akun Shipper/Vendor tidak dinyatakan → Q-15.

## 3. Requirement (REQ)
### SEC-01 · Halaman Master Drop Point
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Master Drop Point berada pada Master Operasional. | TMS.S006-R02 (bagian "Master Drop Point ada pada Master Operasional") | TERTULIS |
| REQ-002 | Halaman utama menampilkan tabel dengan kolom: Nama Perusahaan, Alias, Nama PIC, No WA PIC, "Aksi (Aktif/Tidak Aktif)", tombol aksi. | TMS.S006-R02 poin 1 | AMBIGU (Q-01, Q-02) |
| REQ-003 | Tabel dapat difilter dengan: Nama Perusahaan (text field), Alias (text field), Nama PIC (text field), No WA PIC (text field), Status (drop down). | TMS.S006-R02 poin 2 | AMBIGU (Q-02) |
| REQ-004 | Tombol Reset mereset filter dan data pada tabel. | TMS.S006-R02 poin 2 | TERTULIS |
| REQ-005 | Tombol Terapkan menampilkan data pada tabel sesuai filter. | TMS.S006-R02 poin 2 | TERTULIS |
| REQ-006 | Pada halaman Master Drop Point dapat menambah perusahaan. | TMS.S006-R02 poin 3 | TERTULIS |
| REQ-007 | Aksi lihat pada baris menuju halaman "Detail Perusahaan". | TMS.S006-R02 poin 4 | TERTULIS |
| REQ-008 | Aksi edit pada baris menuju halaman "Edit Informasi Perusahaan". | TMS.S006-R02 poin 4 | TERTULIS |
| REQ-009 | Aksi hapus pada baris menghapus data perusahaan. | TMS.S006-R02 poin 4 | TERTULIS |
| REQ-010 | Data perusahaan tidak dapat dihapus jika sudah digunakan/memiliki drop point. | TMS.S006-R02 poin 4 | KONFLIK (Q-04) |
| REQ-011 | Data pada tabel halaman Master Drop Point berurutan terbaru teratas; nomor urut ascending. | TMS.S006-R06 poin 5 | TERTULIS |

### SEC-02 · Tambah Perusahaan
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-012 | Form Tambah Perusahaan terdiri dari dua bagian: Bagian Perusahaan dan Bagian Drop Point. | TMS.S006-R03 poin 1 | TERTULIS |
| REQ-013 | Bagian Perusahaan berisi field: Nama perusahaan (required), Email, Nama PIC, No Whatsapp PIC, Provinsi, Kota, Kec., Kel., Alamat Perusahaan, Dokumen Tambahan. | TMS.S006-R03 poin 2 | TERTULIS |
| REQ-014 | Nama perusahaan wajib diisi (required). | TMS.S006-R03 poin 2 | TERTULIS |
| REQ-015 | Perusahaan yang baru ditambahkan berstatus otomatis aktif. | TMS.S006-R03 poin 2 | TERTULIS |
| REQ-016 | Field opsional Bagian Perusahaan dimunculkan melalui trigger untuk mengisi field opsional. | TMS.S006-R03 poin 2 (catatan) | AMBIGU (Q-05) |
| REQ-017 | Jika trigger field opsional diklik, dilakukan pengecekan setidaknya 1 field opsional terisi; jika tidak ada yang diisi, user perlu unchecklist. | TMS.S006-R03 poin 2 (catatan) | AMBIGU (Q-05) |
| REQ-018 | Bagian Drop Point berisi field: Nama Drop Point (required, text field), PIC Drop Point (required, text field), No PIC Drop Point (required, text field number min. 10), Provinsi, Kota, Kecamatan, Kelurahan (masing-masing "required, drop point ambil dr master"), Kode Pos ("auto draft"), Alamat (required, text box), Catatan (text box). | TMS.S006-R03 poin 3 | AMBIGU (Q-06, Q-08) |
| REQ-019 | Kode Pos terisi "auto draft". | TMS.S006-R03 poin 3 | AMBIGU (Q-07) |
| REQ-020 | Drop point yang baru ditambahkan berstatus otomatis aktif. | TMS.S006-R03 poin 3 | TERTULIS |
| REQ-021 | Bagian Drop Point dapat menambah baris data. | TMS.S006-R03 poin 3 | TERTULIS |
| REQ-022 | Setelah baris ditambah, baris data pertama atau setelahnya dapat dihapus, minimal menyisakan 1 data drop point. | TMS.S006-R03 poin 3 | TERTULIS |
| REQ-023 | Tombol Batal kembali ke halaman master drop point. | TMS.S006-R03 poin 4 | TERTULIS |
| REQ-024 | Tombol Simpan menyimpan data lalu menuju halaman master drop point. | TMS.S006-R03 poin 4 | TERTULIS |
| REQ-025 | Saat data tersimpan tampil alert bahwa data tersimpan. | TMS.S006-R03 poin 4 | AMBIGU (Q-12) |

### SEC-03 · Edit Informasi Perusahaan
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-026 | Halaman "Edit Informasi Perusahaan" dapat dibuka dari aksi edit pada halaman Master Drop Point. | TMS.S006-R04 poin 1 | TERTULIS |
| REQ-027 | Halaman "Edit Informasi Perusahaan" dapat dibuka dari tombol edit pada halaman Detail Perusahaan. | TMS.S006-R04 poin 1; TMS.S006-R05 poin 2 | TERTULIS |
| REQ-028 | Data perusahaan dapat diubah meskipun sudah digunakan, tanpa mengubah data yang sudah berjalan sebelumnya. | TMS.S006-R04 poin 2 | TERTULIS |
| REQ-029 | Field yang tampil sama seperti saat tambah perusahaan. | TMS.S006-R04 poin 3 | AMBIGU (Q-09) |
| REQ-030 | Bagian selain nama perusahaan terhide sampai trigger dipilih. | TMS.S006-R04 poin 3 | AMBIGU (Q-05) |
| REQ-031 | Jika field opsional sudah terisi pada data awal, field tersebut tetap muncul pada halaman edit. | TMS.S006-R04 poin 3 | TERTULIS |
| REQ-032 | Halaman edit menampilkan informasi jumlah drop point yang dimiliki perusahaan. | TMS.S006-R04 poin 4 | TERTULIS |
| REQ-033 | Tombol Batal kembali ke halaman master drop point. | TMS.S006-R04 poin 5 | TERTULIS |
| REQ-034 | Tombol Simpan menyimpan data, menuju halaman master drop point, dan menampilkan alert data tersimpan. | TMS.S006-R04 poin 5 | AMBIGU (Q-12) |

### SEC-04 · Detail Perusahaan
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-035 | Penambahan drop point dilakukan pada perusahaan yang sudah dibuat; klik button mata pada perusahaan terkait menuju halaman "Detail Perusahaan". | TMS.S006-R05 poin 1 | TERTULIS |
| REQ-036 | Halaman Detail Perusahaan menampilkan informasi perusahaan dan tabel daftar drop point milik perusahaan tersebut. | TMS.S006-R05 poin 2 | TERTULIS |
| REQ-037 | Halaman Detail Perusahaan memiliki button untuk edit informasi perusahaan. | TMS.S006-R05 poin 2 | TERTULIS |
| REQ-038 | Informasi perusahaan yang tampil: Nama perusahaan, Email, Nama PIC, No Whatsapp PIC, Provinsi, Kota, Kec., Kel., Alamat Perusahaan, Dokumen Tambahan, Status. | TMS.S006-R05 poin 3 | TERTULIS |
| REQ-039 | Hanya data yang diisi yang tampil; data yang tidak diisi tidak tampil sama sekali pada Informasi Perusahaan. | TMS.S006-R05 poin 3 (catatan) | TERTULIS |
| REQ-040 | Tabel Drop Point berkolom: No, Nama Drop Point, Kota/Kab., Status, tombol aksi. | TMS.S006-R05 poin 4 | TERTULIS |
| REQ-041 | Data tabel Drop Point di Detail Perusahaan berurutan terbaru teratas; nomor urut ascending. | TMS.S006-R06 poin 5 | TERTULIS |

### SEC-05 · Lihat / Tambah / Edit / Hapus Drop Point (right drawer)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-042 | Aksi lihat drop point membuka right drawer informasi drop point: nama drop point, PIC, No PIC, Provinsi, Kota, Kecamatan, Kelurahan, Alamat, status. | TMS.S006-R05 poin 4 | TERTULIS |
| REQ-043 | Aksi edit drop point membuka right drawer edit drop point; semua field dapat diedit. | TMS.S006-R05 poin 4 | TERTULIS |
| REQ-044 | Edit drop point tidak mengubah data yang sebelumnya sudah digunakan, hanya mengubah yang akan digunakan. | TMS.S006-R05 poin 4 | TERTULIS |
| REQ-045 | Aksi hapus drop point hanya bisa dilakukan jika drop point belum digunakan. | TMS.S006-R05 poin 4 | TERTULIS |
| REQ-046 | Tambah Drop Point dilakukan melalui right drawer dengan field yang sama seperti REQ-018 (termasuk Kode Pos "auto draft"). | TMS.S006-R05 poin 5 | AMBIGU (Q-06, Q-07, Q-08, Q-11) |
| REQ-047 | Drop point baru yang ditambahkan via drawer berstatus otomatis aktif. | TMS.S006-R05 poin 5 | TERTULIS |
| REQ-048 | Drawer Tambah Drop Point dapat menambah baris data; baris pertama atau setelahnya dapat dihapus, minimal menyisakan 1 data drop point. | TMS.S006-R05 poin 5 | TERTULIS |
| REQ-049 | Tombol Batal pada setiap drawer menutup drawer. | TMS.S006-R05 poin 6 | TERTULIS |
| REQ-050 | Tombol Simpan pada setiap drawer menyimpan data, menutup drawer, dan menampilkan alert data tersimpan. | TMS.S006-R05 poin 6 | AMBIGU (Q-12) |

### SEC-06 · Ketentuan umum & lainnya
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-051 | Drop point dapat digunakan sebagai lokasi muat atau bongkar dalam proses pengiriman. | TMS.S006-R01 | TERTULIS |
| REQ-052 | Drop point aktif ditampilkan sebagai pilihan saat membuat order. | TMS.S006-R06 poin 1 | TERTULIS |
| REQ-053 | Admin dapat melihat, menambah, mengedit, dan menghapus data. | TMS.S006-R06 poin 2 | AMBIGU (Q-15) |
| REQ-054 | Data yang sudah digunakan tidak dapat dihapus dan sistem menampilkan alert. | TMS.S006-R06 poin 2 | AMBIGU (Q-12) |
| REQ-055 | Satu kota dapat memiliki lebih dari satu drop point. | TMS.S006-R06 poin 3 | TERTULIS |
| REQ-056 | Urutan drop point dalam penugasan ditentukan secara manual oleh admin atau berdasarkan urutan rute. | TMS.S006-R06 poin 4 | AMBIGU (Q-14) |
| REQ-057 | Perubahan data tercatat pada riwayat. | TMS.S006-R06 poin 6 | AMBIGU (Q-13) |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-02, SEC-03 | Nama perusahaan | Wajib diisi | Tidak dinyatakan di spec (Q-12) | TMS.S006-R03 poin 2; TMS.S006-R04 poin 3 |
| VAL-002 | SEC-02, SEC-03 | Trigger field opsional Bagian Perusahaan | Bila trigger diklik, setidaknya 1 field opsional terisi | "Jika memang tidak ada yang diisi, user perlu unchecklist." (pesan tidak dinyatakan) | TMS.S006-R03 poin 2 (catatan) |
| VAL-003 | SEC-02, SEC-05 | Nama Drop Point | Wajib, text field | Tidak dinyatakan di spec (Q-12) | TMS.S006-R03 poin 3; TMS.S006-R05 poin 5 |
| VAL-004 | SEC-02, SEC-05 | PIC Drop Point | Wajib, text field | Tidak dinyatakan di spec (Q-12) | TMS.S006-R03 poin 3; TMS.S006-R05 poin 5 |
| VAL-005 | SEC-02, SEC-05 | No PIC Drop Point | Wajib, "text field number min. 10" | Tidak dinyatakan di spec (Q-08, Q-12) | TMS.S006-R03 poin 3; TMS.S006-R05 poin 5 |
| VAL-006 | SEC-02, SEC-05 | Provinsi, Kota, Kecamatan, Kelurahan | Wajib, "drop point ambil dr master" | Tidak dinyatakan di spec (Q-06, Q-12) | TMS.S006-R03 poin 3; TMS.S006-R05 poin 5 |
| VAL-007 | SEC-02, SEC-05 | Alamat | Wajib, text box | Tidak dinyatakan di spec (Q-12) | TMS.S006-R03 poin 3; TMS.S006-R05 poin 5 |
| VAL-008 | SEC-02, SEC-05 | Baris data drop point | Minimal menyisakan 1 data drop point | Tidak dinyatakan di spec | TMS.S006-R03 poin 3; TMS.S006-R05 poin 5 |
| VAL-009 | SEC-01 | Hapus perusahaan | Tidak dapat dihapus jika sudah digunakan/memiliki drop point | "Data tidak dapat dihapus jika sudah digunakan/memiliki drop point." (teks alert tidak dinyatakan) | TMS.S006-R02 poin 4; TMS.S006-R06 poin 2 |
| VAL-010 | SEC-05, SEC-06 | Hapus drop point / data yang sudah digunakan | Hanya bisa dihapus jika belum digunakan | "data yang sudah digunakan tidak dapat dihapus (perlu alert)" (teks alert tidak dinyatakan) | TMS.S006-R05 poin 4; TMS.S006-R06 poin 2 |

## 5. Acceptance Criteria (AC)
### SEC-01 · Halaman Master Drop Point
- **AC-001** (REQ-001) — **Diberikan** Admin membuka menu Master Operasional **Ketika** melihat daftar menu **Maka** Master Drop Point tersedia di dalam Master Operasional · Sumber: TMS.S006-R02
- **AC-002** (REQ-002) — **Diberikan** halaman Master Drop Point terbuka **Ketika** tabel dimuat **Maka** tabel menampilkan kolom Nama Perusahaan, Alias, Nama PIC, No WA PIC, Aksi (Aktif/Tidak Aktif), dan tombol aksi · Sumber: TMS.S006-R02 poin 1
- **AC-003** (REQ-003, REQ-005) — **Diberikan** filter Nama Perusahaan/Alias/Nama PIC/No WA PIC (text field) atau Status (drop down) diisi **Ketika** tombol Terapkan diklik **Maka** tabel menampilkan data sesuai filter · Sumber: TMS.S006-R02 poin 2
- **AC-004** (REQ-004) — **Diberikan** filter terisi dan tabel terfilter **Ketika** tombol Reset diklik **Maka** filter dan data pada tabel tereset · Sumber: TMS.S006-R02 poin 2
- **AC-005** (REQ-007, REQ-008) — **Diberikan** baris perusahaan pada tabel **Ketika** aksi lihat / aksi edit diklik **Maka** masing-masing menuju halaman "Detail Perusahaan" / "Edit Informasi Perusahaan" · Sumber: TMS.S006-R02 poin 4
- **AC-006** (REQ-009, REQ-010, VAL-009) — **Diberikan** perusahaan yang belum digunakan dan tidak memiliki drop point **Ketika** aksi hapus dijalankan **Maka** data terhapus · Sumber: TMS.S006-R02 poin 4 (kondisi bergantung Q-04)
- **AC-007** (REQ-010, REQ-054, VAL-009) — **Diberikan** perusahaan yang sudah digunakan/memiliki drop point **Ketika** aksi hapus dijalankan **Maka** data tidak terhapus dan tampil alert · Sumber: TMS.S006-R02 poin 4; TMS.S006-R06 poin 2
- **AC-008** (REQ-011) — **Diberikan** beberapa data perusahaan **Ketika** tabel Master Drop Point dimuat **Maka** data terbaru berada di urutan teratas dan nomor urut ascending · Sumber: TMS.S006-R06 poin 5

### SEC-02 · Tambah Perusahaan
- **AC-009** (REQ-006, REQ-012, REQ-013, REQ-018) — **Diberikan** Admin memulai tambah perusahaan dari halaman Master Drop Point **Ketika** form terbuka **Maka** tampil Bagian Perusahaan dan Bagian Drop Point dengan field sesuai spec · Sumber: TMS.S006-R02 poin 3; TMS.S006-R03 poin 1–3
- **AC-010** (REQ-014, VAL-001) — **Diberikan** Nama perusahaan kosong **Ketika** Simpan diklik **Maka** data tidak tersimpan (perilaku error tidak dinyatakan, Q-12) · Sumber: TMS.S006-R03 poin 2
- **AC-011** (REQ-017, VAL-002) — **Diberikan** trigger field opsional diklik dan tidak ada field opsional yang diisi **Ketika** Simpan diklik **Maka** data tidak dapat disimpan sampai minimal 1 field opsional terisi atau user melakukan unchecklist · Sumber: TMS.S006-R03 poin 2 (catatan)
- **AC-012** (REQ-018, VAL-003–VAL-007) — **Diberikan** salah satu field required Bagian Drop Point (Nama Drop Point, PIC Drop Point, No PIC Drop Point, Provinsi, Kota, Kecamatan, Kelurahan, Alamat) kosong **Ketika** Simpan diklik **Maka** data tidak tersimpan · Sumber: TMS.S006-R03 poin 3
- **AC-013** (REQ-021, REQ-022, VAL-008) — **Diberikan** Bagian Drop Point berisi 2 baris atau lebih **Ketika** salah satu baris (termasuk baris pertama) dihapus **Maka** baris terhapus dan minimal tersisa 1 data drop point · Sumber: TMS.S006-R03 poin 3
- **AC-014** (REQ-022, VAL-008) — **Diberikan** Bagian Drop Point hanya berisi 1 baris **Ketika** Admin mencoba menghapus baris tersebut **Maka** baris tidak dapat dihapus (minimal 1 data) · Sumber: TMS.S006-R03 poin 3
- **AC-015** (REQ-015, REQ-020) — **Diberikan** form valid **Ketika** Simpan diklik **Maka** perusahaan dan drop point baru berstatus aktif · Sumber: TMS.S006-R03 poin 2–3
- **AC-016** (REQ-024, REQ-025) — **Diberikan** form valid **Ketika** Simpan diklik **Maka** data tersimpan, user menuju halaman master drop point, dan tampil alert data tersimpan · Sumber: TMS.S006-R03 poin 4
- **AC-017** (REQ-023) — **Diberikan** form Tambah Perusahaan terbuka **Ketika** Batal diklik **Maka** user kembali ke halaman master drop point · Sumber: TMS.S006-R03 poin 4
- **AC-018** (REQ-019) — **Diberikan** wilayah drop point dipilih **Ketika** field Kode Pos diperiksa **Maka** Kode Pos terisi "auto draft" · Sumber: TMS.S006-R03 poin 3 (bergantung Q-07)

### SEC-03 · Edit Informasi Perusahaan
- **AC-019** (REQ-026, REQ-027) — **Diberikan** perusahaan tersedia **Ketika** aksi edit di halaman Master Drop Point atau tombol edit di halaman Detail Perusahaan diklik **Maka** halaman "Edit Informasi Perusahaan" terbuka · Sumber: TMS.S006-R04 poin 1
- **AC-020** (REQ-030, REQ-031) — **Diberikan** perusahaan dengan field opsional tidak terisi **Ketika** halaman edit terbuka **Maka** bagian selain nama perusahaan terhide sampai trigger dipilih; **dan diberikan** field opsional sudah terisi pada data awal **Maka** field tersebut tetap muncul · Sumber: TMS.S006-R04 poin 3
- **AC-021** (REQ-032) — **Diberikan** perusahaan memiliki n drop point **Ketika** halaman edit terbuka **Maka** tampil informasi jumlah drop point perusahaan tersebut · Sumber: TMS.S006-R04 poin 4
- **AC-022** (REQ-028) — **Diberikan** perusahaan sudah digunakan **Ketika** data diubah dan disimpan **Maka** perubahan tersimpan dan data yang sudah berjalan sebelumnya tidak berubah · Sumber: TMS.S006-R04 poin 2
- **AC-023** (REQ-034) — **Diberikan** perubahan valid **Ketika** Simpan diklik **Maka** data tersimpan, user menuju halaman master drop point, dan tampil alert data tersimpan · Sumber: TMS.S006-R04 poin 5
- **AC-024** (REQ-033) — **Diberikan** halaman edit terbuka **Ketika** Batal diklik **Maka** user kembali ke halaman master drop point · Sumber: TMS.S006-R04 poin 5

### SEC-04 · Detail Perusahaan
- **AC-025** (REQ-035, REQ-036, REQ-037) — **Diberikan** perusahaan tersedia **Ketika** button mata diklik **Maka** halaman "Detail Perusahaan" menampilkan informasi perusahaan, tabel daftar drop point milik perusahaan, dan button edit informasi perusahaan · Sumber: TMS.S006-R05 poin 1–2
- **AC-026** (REQ-038, REQ-039) — **Diberikan** perusahaan dengan sebagian field opsional kosong **Ketika** Detail Perusahaan dibuka **Maka** hanya field yang diisi (dari daftar Nama perusahaan … Status) yang tampil; field kosong tidak tampil sama sekali · Sumber: TMS.S006-R05 poin 3
- **AC-027** (REQ-040) — **Diberikan** perusahaan memiliki drop point **Ketika** Detail Perusahaan dibuka **Maka** tabel Drop Point menampilkan kolom No, Nama Drop Point, Kota/Kab., Status, tombol aksi · Sumber: TMS.S006-R05 poin 4
- **AC-028** (REQ-041) — **Diberikan** beberapa drop point **Ketika** tabel Drop Point dimuat **Maka** data terbaru teratas dan nomor urut ascending · Sumber: TMS.S006-R06 poin 5

### SEC-05 · Drawer Drop Point
- **AC-029** (REQ-042) — **Diberikan** baris drop point **Ketika** aksi lihat diklik **Maka** right drawer menampilkan nama drop point, PIC, No PIC, Provinsi, Kota, Kecamatan, Kelurahan, Alamat, status · Sumber: TMS.S006-R05 poin 4
- **AC-030** (REQ-043, REQ-044) — **Diberikan** drop point yang sudah digunakan **Ketika** diedit melalui right drawer dan disimpan **Maka** perubahan tersimpan hanya untuk penggunaan berikutnya; data yang sebelumnya menggunakan drop point tidak berubah · Sumber: TMS.S006-R05 poin 4
- **AC-031** (REQ-045, VAL-010) — **Diberikan** drop point belum digunakan **Ketika** aksi hapus dijalankan **Maka** drop point terhapus · Sumber: TMS.S006-R05 poin 4
- **AC-032** (REQ-045, REQ-054, VAL-010) — **Diberikan** drop point sudah digunakan **Ketika** aksi hapus dijalankan **Maka** drop point tidak terhapus dan tampil alert · Sumber: TMS.S006-R05 poin 4; TMS.S006-R06 poin 2
- **AC-033** (REQ-046, REQ-047, VAL-003–VAL-007) — **Diberikan** drawer Tambah Drop Point terbuka dengan seluruh field required terisi **Ketika** Simpan diklik **Maka** drop point tersimpan berstatus aktif · Sumber: TMS.S006-R05 poin 5
- **AC-034** (REQ-048, VAL-008) — **Diberikan** drawer Tambah Drop Point berisi lebih dari 1 baris **Ketika** baris dihapus **Maka** baris terhapus dengan minimal menyisakan 1 data drop point · Sumber: TMS.S006-R05 poin 5
- **AC-035** (REQ-050) — **Diberikan** data drawer valid **Ketika** Simpan diklik **Maka** data tersimpan, drawer tertutup, dan tampil alert data tersimpan · Sumber: TMS.S006-R05 poin 6
- **AC-036** (REQ-049) — **Diberikan** drawer terbuka **Ketika** Batal diklik **Maka** drawer tertutup · Sumber: TMS.S006-R05 poin 6

### SEC-06 · Ketentuan umum & lainnya
- **AC-037** (REQ-052) — **Diberikan** drop point berstatus aktif **Ketika** user membuat order **Maka** drop point tersebut tersedia sebagai pilihan · Sumber: TMS.S006-R06 poin 1
- **AC-038** (REQ-055) — **Diberikan** sudah ada drop point di suatu kota **Ketika** drop point lain dengan kota yang sama ditambahkan **Maka** data tersimpan (satu kota dapat memiliki lebih dari satu drop point) · Sumber: TMS.S006-R06 poin 3
- **AC-039** (REQ-057) — **Diberikan** data perusahaan/drop point diubah **Ketika** riwayat diperiksa **Maka** perubahan tercatat pada riwayat · Sumber: TMS.S006-R06 poin 6 (lokasi riwayat: Q-13)

## 6. State / transisi
| Objek | Status | Kondisi / aksi | Sumber |
|---|---|---|---|
| Perusahaan | Aktif | Otomatis saat tambah data baru | TMS.S006-R03 poin 2 |
| Drop point | Aktif | Otomatis saat tambah data baru | TMS.S006-R03 poin 3; TMS.S006-R05 poin 5 |
| Perusahaan / Drop point | Tidak Aktif | Nilai muncul pada kolom "Aksi (Aktif/Tidak Aktif)" dan filter Status; cara transisi tidak dinyatakan (Q-10) | TMS.S006-R02 poin 1–2 |
| Drop point | (dipakai di order) | Hanya drop point aktif yang tampil sebagai pilihan order | TMS.S006-R06 poin 1 |

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Order FTL/FCL/LTL-LCL (S011/S012/S013) Step 1 | Drop point aktif menjadi pilihan saat membuat order; S011 menyebut "Drop Point Asal/Tujuan => Dropdown, wajib diisi dan mengambil data dari Master Droppoint" | TMS.S006-R06 poin 1; spec-index §3 |
| Batch Order (S019) | Rule drop point pada template batch order (Drop Point Asal/Tujuan) | TMS.S019-R04 poin 4 (rujukan) |
| Penugasan Tracking (S015) | Urutan drop point dalam penugasan (manual / urutan rute) | TMS.S006-R06 poin 4 (Q-14) |
| Pengaturan Akun (S021) | Hak akses Master Drop Point di kategori Master Operasional (3-level) | TMS.S021-R08 poin 8 |
| Master wilayah (Provinsi/Kota/Kec/Kel) | Sumber dropdown wilayah drop point "ambil dr master" | TMS.S006-R03 poin 3 (Q-06) |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | Kolom tabel tertulis "Aksi (Aktif/Tidak Aktif)" terpisah dari "tombol aksi", sedangkan filter memakai "Status". Apakah kolom ini adalah kolom Status (badge) atau kontrol aksi aktif/nonaktif? | TMS.S006-R02 poin 1–2 | REQ-002 | Baru |
| Q-02 | Kolom dan filter "Alias" ada di tabel, tetapi field Alias tidak ada di Bagian Perusahaan (Tambah Perusahaan) maupun Informasi Perusahaan. Dari mana nilai Alias berasal? | TMS.S006-R02 poin 1–2; TMS.S006-R03 poin 2; TMS.S006-R05 poin 3 | REQ-002, REQ-003 | Baru |
| Q-03 | Cakupan (kolom B) memakai istilah "customer" ("child dari informasi customer", "hapus customer"), sedangkan rule memakai "Perusahaan". Apakah sama? | Cakupan kolom B; TMS.S006-R02–R05 | Seluruh SEC-01–SEC-04 | Baru |
| Q-04 | Perusahaan "tidak dapat dihapus jika sudah digunakan/memiliki drop point", padahal Tambah Perusahaan mensyaratkan minimal 1 drop point dan baris drop point minimal menyisakan 1. Dalam kondisi apa perusahaan dapat dihapus? | TMS.S006-R02 poin 4; TMS.S006-R03 poin 3; TMS.S006-R05 poin 5 | REQ-009, REQ-010, REQ-022, REQ-048 | Baru |
| Q-05 | Bentuk "trigger" field opsional (checkbox? — teks menyebut "unchecklist") dan cakupannya (seluruh field selain Nama perusahaan sekaligus atau per field) tidak dijelaskan; pesan bila trigger aktif tanpa isian tidak ada. | TMS.S006-R03 poin 2 (catatan); TMS.S006-R04 poin 3 | REQ-016, REQ-017, REQ-030 | Baru |
| Q-06 | "drop point ambil dr master" pada Provinsi/Kota/Kecamatan/Kelurahan: apakah maksudnya dropdown dari master wilayah? Master mana? | TMS.S006-R03 poin 3; TMS.S006-R05 poin 5 | REQ-018, REQ-046 | Baru |
| Q-07 | "Kode Pos (auto draft)": diisi otomatis dari field apa, dan apakah dapat diubah? | TMS.S006-R03 poin 3; TMS.S006-R05 poin 5 | REQ-019, REQ-046 | Baru |
| Q-08 | "No PIC Drop Point (text field number min. 10)": min. 10 digit? Ada batas maksimal/format (awalan)? | TMS.S006-R03 poin 3; TMS.S006-R05 poin 5 | REQ-018, REQ-046 | Baru |
| Q-09 | Halaman Edit Informasi Perusahaan "Field yang tampil sama seperti saat tambah perusahaan": apakah Bagian Drop Point ikut tampil di halaman edit? | TMS.S006-R04 poin 3 | REQ-029 | Baru |
| Q-10 | Tidak ada rule cara mengubah Status perusahaan atau drop point menjadi Tidak Aktif (form tambah/edit tidak mencantumkan field Status), padahal Status tampil di tabel, filter, detail, dan drawer. | TMS.S006-R02 poin 1–2; TMS.S006-R05 poin 3–4 | REQ-002, REQ-038, REQ-042, REQ-043 | Baru |
| Q-11 | Tombol/entry point untuk membuka drawer "Tambah Drop Point" di halaman Detail Perusahaan tidak disebut namanya. | TMS.S006-R05 poin 5 | REQ-046 | Baru |
| Q-12 | Teks alert "data tersimpan", alert "data tidak dapat dihapus", perilaku error field required, serta ada/tidaknya pop up konfirmasi hapus dan konfirmasi Batal tidak dicantumkan. | TMS.S006-R02 poin 4; TMS.S006-R03 poin 4; TMS.S006-R04 poin 5; TMS.S006-R05 poin 6; TMS.S006-R06 poin 2 | REQ-025, REQ-034, REQ-050, REQ-054 | Baru |
| Q-13 | "Perubahan data tercatat pada riwayat": riwayat ditampilkan di mana dan berisi apa? | TMS.S006-R06 poin 6 | REQ-057 | Baru |
| Q-14 | "Urutan drop point dalam penugasan ditentukan secara manual oleh admin atau berdasarkan urutan rute": di halaman mana dan kapan masing-masing cara berlaku? Tidak ada rule di Penugasan Tracking yang menjelaskan. | TMS.S006-R06 poin 4 | REQ-056 | Baru |
| Q-15 | Aktor "Admin" pada R06 poin 2: apakah akun Shipper (dan sub user dengan hak akses Master Drop Point)? Apakah vendor memiliki akses? | TMS.S006-R06 poin 2 | REQ-053 | Baru |
| Q-16 | Kolom Spesifikasi Selesai/Versi kosong untuk seluruh baris rule (hanya pendahuluan terisi). | TMS.S006-R02–R06 | Semua | spec-index §4 no.6 |

## 9. Catatan testability (bukan requirement)
- REQ-052 (drop point aktif sebagai pilihan order) dan REQ-056 (urutan drop point dalam penugasan) diverifikasi di modul lain (Order, Penugasan Tracking).
- REQ-028 / REQ-044 ("tidak mengubah data yang sudah berjalan") memerlukan data order/penugasan yang sudah memakai perusahaan/drop point.

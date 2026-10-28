# TMS.S024 — Master Customer Service · Analysis (REQ / VAL / AC)

> Sumber: [`master-customer-service_spec.md`](master-customer-service_spec.md) (verbatim `Spek TMS-S` baris 161–169) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Master Customer Service (List & filter) | TMS.S024-R01, TMS.S024-R02 | Shipper | REQ-001–REQ-015 | VAL-005 | AC-001–AC-008 |
| SEC-02 | Detail Jumlah Vendor (popup) | TMS.S024-R03 | Shipper | REQ-016–REQ-019 | — | AC-009–AC-011 |
| SEC-03 | Tambah Customer Service | TMS.S024-R04 poin 1–12, 14 | Shipper | REQ-020–REQ-035 | VAL-001–VAL-006 | AC-012–AC-022 |
| SEC-04 | Edit Customer Service & pengalihan CS | TMS.S024-R05 | Shipper | REQ-036–REQ-049 | VAL-007–VAL-009 | AC-023–AC-032 |
| SEC-05 | Hapus Customer Service | TMS.S024-R06 | Shipper | REQ-050–REQ-053 | VAL-010 | AC-033–AC-035 |
| SEC-06 | Import data (template) | TMS.S024-R04 poin 13, TMS.S024-R07 | Shipper | REQ-054–REQ-055 | — | AC-036 |
| SEC-07 | Integrasi form Vendor & Manajemen Vendor | TMS.S024-R08, TMS.S024-R09 | Shipper | REQ-056–REQ-063 | — | AC-037–AC-043 |

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Shipper (user) | Halaman menampilkan "list data master CS milik shipper"; user dapat tambah, edit, hapus CS | TMS.S024-R02 poin 1; TMS.S024-R04 poin 1; TMS.S024-R05 poin 1; TMS.S024-R06 poin 1 |
| Vendor Pengelola = Vendor | Nomor CS diisi manual (CS milik vendor), tidak mengambil dari master CS | TMS.S024-R08 poin 2 |
| (Hak akses sub user) | S021-R08 poin 8 (Master Operasional) tidak mencantumkan Master Customer Service | spec-index §4 no.12 (Q-02) |
| Driver (apps driver) | Data CS "nantinya akan tampil di apps driver" | TMS.S024-R01 (Q-09) |

## 3. Requirement (REQ)
### SEC-01 · Master Customer Service (List)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Master Customer Service digunakan untuk menambahkan data customer service yang dimiliki, yang nantinya tampil di apps driver. | TMS.S024-R01 | AMBIGU (Q-09) |
| REQ-002 | Halaman menampilkan list data master CS milik shipper. | TMS.S024-R02 poin 1 | TERTULIS |
| REQ-003 | Default data yang tampil sebanyak 20 data per halaman. | TMS.S024-R02 poin 2 | TERTULIS |
| REQ-004 | Tersedia pagination untuk membagi data per halaman. | TMS.S024-R02 poin 3 | AMBIGU (Q-12) |
| REQ-005 | Urutan data default berdasarkan data terbaru yang ditambahkan. | TMS.S024-R02 poin 4 | TERTULIS |
| REQ-006 | Kolom list: No, Nama CS, No. WhatsApp CS, Jumlah Vendor, Status (Aktif / Tidak Aktif), Button Aksi (Edit, Hapus). | TMS.S024-R02 poin 5 | TERTULIS |
| REQ-007 | CS berstatus default menampilkan badge "Default" pada kolom Nama CS. | TMS.S024-R02 poin 6 | TERTULIS |
| REQ-008 | Hanya boleh ada satu CS default dalam satu waktu. | TMS.S024-R02 poin 7 | TERTULIS |
| REQ-009 | Kolom "Jumlah Vendor" berupa link yang menampilkan nama-nama vendor pemakai CS tersebut. | TMS.S024-R02 poin 8 | TERTULIS |
| REQ-010 | Terdapat button filter untuk membuka area filter. | TMS.S024-R02 poin 9 | TERTULIS |
| REQ-011 | Secara default field filter dalam kondisi kosong. | TMS.S024-R02 poin 10 | TERTULIS |
| REQ-012 | Placeholder field filter mengikuti desain. | TMS.S024-R02 poin 11 | REF-EKSTERNAL |
| REQ-013 | Field filter: Nama CS, No. WhatsApp CS, Status. | TMS.S024-R02 poin 12 | TERTULIS |
| REQ-014 | Button Terapkan menampilkan data sesuai filter. | TMS.S024-R02 poin 13 | TERTULIS |
| REQ-015 | Button Reset mengosongkan seluruh field filter & mengembalikan list ke kondisi default. | TMS.S024-R02 poin 14 | TERTULIS |

### SEC-02 · Detail Jumlah Vendor (popup)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-016 | Klik link "Jumlah Vendor" menampilkan pop up berisi daftar vendor pemakai CS tersebut. | TMS.S024-R03 poin 1 | TERTULIS |
| REQ-017 | Isi popup: Nama vendor, Alias vendor, Status vendor (Aktif / Tidak Aktif). | TMS.S024-R03 poin 2 | TERTULIS |
| REQ-018 | Yang dihitung sebagai pemakai adalah vendor berpengelola Shipper yang mereferensikan CS ini. | TMS.S024-R03 poin 3 | TERTULIS |
| REQ-019 | Jika belum ada pemakai, tampil status kosong (0 Vendor) dan popup menampilkan pesan tidak ada vendor. | TMS.S024-R03 poin 4 | AMBIGU (Q-05) |

### SEC-03 · Tambah Customer Service
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-020 | User dapat menambahkan lebih dari satu CS dalam satu proses input. | TMS.S024-R04 poin 1 | TERTULIS |
| REQ-021 | Halaman tambah secara default menampilkan field Nama CS, No. WhatsApp CS, dan checkbox "Jadikan CS default perusahaan". | TMS.S024-R04 poin 2 | TERTULIS |
| REQ-022 | User dapat menambah baris input menggunakan button "Tambah Baris Input". | TMS.S024-R04 poin 3 | TERTULIS |
| REQ-023 | Setiap baris input dapat dihapus menggunakan button delete. | TMS.S024-R04 poin 4 | TERTULIS |
| REQ-024 | Minimal harus terdapat 1 baris input; saat hanya 1 baris, button delete tidak tampil. | TMS.S024-R04 poin 5 | TERTULIS |
| REQ-025 | Saat terdapat lebih dari 1 baris input, button delete tampil di semua baris. | TMS.S024-R04 poin 6 | TERTULIS |
| REQ-026 | Field Nama CS wajib diisi, input berupa text. | TMS.S024-R04 poin 7 | TERTULIS |
| REQ-027 | Field No. WhatsApp CS wajib diisi, input berupa angka, mengikuti format nomor WhatsApp. | TMS.S024-R04 poin 8 | AMBIGU (Q-03) |
| REQ-028 | Jika checkbox "Jadikan CS default perusahaan" dicentang, CS tersebut menjadi default dan otomatis melepas status default dari CS lain. | TMS.S024-R04 poin 9 | AMBIGU (Q-04) |
| REQ-029 | Jika belum ada CS sama sekali di database, CS pertama yang disimpan otomatis dijadikan default. | TMS.S024-R04 poin 9 | TERTULIS |
| REQ-030 | "No. WhatsApp CS tidak boleh duplikat (satu nomor dapat dipakai beberapa label CS)". | TMS.S024-R04 poin 10 | KONFLIK (Q-01) |
| REQ-031 | Nama CS tidak boleh duplikat. | TMS.S024-R04 poin 10 | TERTULIS |
| REQ-032 | Jika field required tidak diisi: tampil helper error & border field berubah ke warna error. | TMS.S024-R04 poin 11 | TERTULIS |
| REQ-033 | Jika Nama CS duplikat: tampil alert/helper bahwa nama CS sudah digunakan. | TMS.S024-R04 poin 12 | AMBIGU (Q-05) |
| REQ-034 | Button Batal membatalkan proses dan menampilkan alert konfirmasi. | TMS.S024-R04 poin 14 | TERTULIS |
| REQ-035 | Button Simpan menyimpan data dan menampilkan alert success. | TMS.S024-R04 poin 14 | AMBIGU (Q-05, Q-14) |

### SEC-04 · Edit Customer Service & pengalihan CS
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-036 | User dapat melakukan edit data CS. | TMS.S024-R05 poin 1 | TERTULIS |
| REQ-037 | Tampilan edit berupa pop up. | TMS.S024-R05 poin 2 | TERTULIS |
| REQ-038 | Data existing otomatis terisi pada field. | TMS.S024-R05 poin 3 | TERTULIS |
| REQ-039 | Field pada edit: Nama CS, No. WhatsApp CS, Status (Aktif / Tidak Aktif), checkbox default. | TMS.S024-R05 poin 4 | TERTULIS |
| REQ-040 | Validasi Nama CS dan No CS sama dengan proses tambah (tidak boleh duplikat dengan data lain). | TMS.S024-R05 poin 5 | KONFLIK (Q-01) |
| REQ-041 | Perubahan data CS langsung berlaku ke seluruh vendor yang mereferensikan CS tersebut tanpa edit vendor satu per satu. | TMS.S024-R05 poin 6 | TERTULIS |
| REQ-042 | CS default tidak dapat diubah menjadi Tidak Aktif sebelum ada CS default pengganti. | TMS.S024-R05 poin 7 | AMBIGU (Q-06) |
| REQ-043 | CS yang masih digunakan vendor tidak dapat diubah menjadi Tidak Aktif sebelum vendornya dialihkan ke CS lain. | TMS.S024-R05 poin 7 | TERTULIS |
| REQ-044 | Saat status diubah menjadi Tidak Aktif pada CS yang masih dipakai, tampil proses pengalihan CS. | TMS.S024-R05 poin 8 | TERTULIS |
| REQ-045 | Sistem tidak memindahkan vendor ke CS default secara otomatis; CS pengganti wajib dipilih user. | TMS.S024-R05 poin 8 | TERTULIS |
| REQ-046 | Tersedia opsi "alihkan semua ke satu CS" dan "atur per vendor" (satu CS lama dapat dibagi ke beberapa CS berbeda). | TMS.S024-R05 poin 8 | TERTULIS |
| REQ-047 | Proses pengalihan tidak dapat disimpan selama masih ada vendor yang belum memiliki CS pengganti. | TMS.S024-R05 poin 8 | TERTULIS |
| REQ-048 | Button Batal membatalkan proses dan menampilkan alert konfirmasi. | TMS.S024-R05 poin 9 | TERTULIS |
| REQ-049 | Button Simpan menyimpan perubahan dan menampilkan alert success. | TMS.S024-R05 poin 9 | AMBIGU (Q-05) |

### SEC-05 · Hapus Customer Service
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-050 | Data master CS dapat dihapus. | TMS.S024-R06 poin 1 | TERTULIS |
| REQ-051 | Hapus hanya dapat dilakukan selama CS belum digunakan vendor mana pun dan bukan CS default. | TMS.S024-R06 poin 2 | TERTULIS |
| REQ-052 | Saat hapus dilakukan pada CS yang masih digunakan / berstatus default, tampil alert "Data Customer Service tidak dapat dihapus, data sedang digunakan". | TMS.S024-R06 poin 3 | TERTULIS |
| REQ-053 | Saat melakukan proses hapus, tampil pop up konfirmasi. | TMS.S024-R06 poin 4 | AMBIGU (Q-07) |

### SEC-06 · Import data (template)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-054 | Tersedia button Download Template dan Import Data untuk input massal, mengikuti format template. | TMS.S024-R04 poin 13 | AMBIGU (Q-15) |
| REQ-055 | Template import: "Template Import Data Master TMS-S.xlsx" (isi template tidak ada di workbook). | TMS.S024-R07 | REF-EKSTERNAL (Q-02) |

### SEC-07 · Integrasi form Vendor & Manajemen Vendor
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-056 | Sumber nomor CS pada penugasan ditentukan oleh field Pengelola vendor. | TMS.S024-R08 poin 1 | AMBIGU (Q-09) |
| REQ-057 | Pengelola = Vendor: nomor CS diisi manual (CS milik vendor), tidak mengambil dari master CS. | TMS.S024-R08 poin 2 | TERTULIS |
| REQ-058 | Pengelola = Shipper dan master CS memiliki lebih dari satu data: tampil dropdown pilih CS, terisi otomatis dengan CS default, dan user dapat mengganti. | TMS.S024-R08 poin 3 | AMBIGU (Q-08) |
| REQ-059 | Pengelola = Shipper dan master CS hanya memiliki satu data: tampil read-only tanpa perlu memilih. | TMS.S024-R08 poin 3 | AMBIGU (Q-08) |
| REQ-060 | Pengelola = Shipper dan master CS masih kosong: tersedia input cepat untuk menambah CS yang otomatis tersimpan ke master dan dijadikan default. | TMS.S024-R08 poin 3 | TERTULIS |
| REQ-061 | Tersedia opsi menambah CS baru langsung dari form vendor (tersimpan ke master). | TMS.S024-R08 poin 4 | TERTULIS |
| REQ-062 | Kolom CS penanggung jawab tampil pada list Manajemen Vendor (Nama CS + No WA CS). | TMS.S024-R09 poin 1 | TERTULIS |
| REQ-063 | Tersedia filter berdasarkan Nama dan No WA CS pada list Manajemen Vendor. | TMS.S024-R09 poin 2 | TERTULIS |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-03, SEC-04 | Nama CS | Wajib, text | "tampilkan helper error & border field berubah ke warna error" | TMS.S024-R04 poin 7, 11; TMS.S024-R05 poin 5 |
| VAL-002 | SEC-03, SEC-04 | No. WhatsApp CS | Wajib, angka, "mengikuti format nomor WhatsApp" | "tampilkan helper error & border field berubah ke warna error" (untuk kosong); format salah: tidak dinyatakan (Q-03) | TMS.S024-R04 poin 8, 11; TMS.S024-R05 poin 5 |
| VAL-003 | SEC-03, SEC-04 | Nama CS | Tidak boleh duplikat dengan data lain | "tampilkan alert/helper bahwa nama CS sudah digunakan" (teks persis tidak dicantumkan) | TMS.S024-R04 poin 10, 12; TMS.S024-R05 poin 5 |
| VAL-004 | SEC-03, SEC-04 | No. WhatsApp CS | "tidak boleh duplikat (satu nomor dapat dipakai beberapa label CS)" | Tidak dinyatakan (Q-01, Q-05) | TMS.S024-R04 poin 10; TMS.S024-R05 poin 5 |
| VAL-005 | SEC-01, SEC-03, SEC-04 | CS default | Hanya satu CS default; mencentang default melepas default CS lain | Otomatis melepas default CS lain | TMS.S024-R02 poin 7; TMS.S024-R04 poin 9 |
| VAL-006 | SEC-03 | Baris input | Minimal 1 baris | Button delete tidak tampil saat 1 baris | TMS.S024-R04 poin 5 |
| VAL-007 | SEC-04 | Status → Tidak Aktif pada CS default | Tidak dapat sebelum ada CS default pengganti | Tidak dinyatakan (Q-06) | TMS.S024-R05 poin 7 |
| VAL-008 | SEC-04 | Status → Tidak Aktif pada CS yang dipakai vendor | Tidak dapat sebelum vendor dialihkan ke CS lain | Tampil proses pengalihan CS | TMS.S024-R05 poin 7–8 |
| VAL-009 | SEC-04 | Proses pengalihan CS | Seluruh vendor harus memiliki CS pengganti | "Proses tidak dapat disimpan selama masih ada vendor yang belum memiliki CS pengganti." | TMS.S024-R05 poin 8 |
| VAL-010 | SEC-05 | Hapus CS | Hanya bila belum digunakan vendor mana pun dan bukan CS default | "Data Customer Service tidak dapat dihapus, data sedang digunakan" | TMS.S024-R06 poin 2–3 |

## 5. Acceptance Criteria (AC)
### SEC-01 · List
- **AC-001** (REQ-002, REQ-006) — **Diberikan** shipper membuka Master Customer Service **Ketika** list dimuat **Maka** tampil data CS milik shipper dengan kolom No, Nama CS, No. WhatsApp CS, Jumlah Vendor, Status (Aktif / Tidak Aktif), Button Aksi (Edit, Hapus) · Sumber: TMS.S024-R02 poin 1, 5
- **AC-002** (REQ-003, REQ-004) — **Diberikan** data CS lebih dari 20 **Ketika** list dimuat **Maka** tampil 20 data per halaman dan pagination tersedia · Sumber: TMS.S024-R02 poin 2–3
- **AC-003** (REQ-005) — **Diberikan** beberapa CS ditambahkan pada waktu berbeda **Ketika** list dimuat **Maka** data terbaru yang ditambahkan tampil lebih dulu · Sumber: TMS.S024-R02 poin 4
- **AC-004** (REQ-007, REQ-008, VAL-005) — **Diberikan** terdapat CS default **Ketika** list dimuat **Maka** hanya satu CS yang menampilkan badge "Default" pada kolom Nama CS · Sumber: TMS.S024-R02 poin 6–7
- **AC-005** (REQ-010, REQ-011) — **Diberikan** list tampil **Ketika** button filter diklik **Maka** area filter terbuka dengan field dalam kondisi kosong · Sumber: TMS.S024-R02 poin 9–10
- **AC-006** (REQ-013, REQ-014) — **Diberikan** filter Nama CS / No. WhatsApp CS / Status diisi **Ketika** Terapkan diklik **Maka** list menampilkan data sesuai filter · Sumber: TMS.S024-R02 poin 12–13
- **AC-007** (REQ-015) — **Diberikan** filter terisi dan list terfilter **Ketika** Reset diklik **Maka** seluruh field filter kosong dan list kembali ke kondisi default · Sumber: TMS.S024-R02 poin 14
- **AC-008** (REQ-009) — **Diberikan** CS dipakai vendor **Ketika** kolom Jumlah Vendor dilihat **Maka** nilai berupa link · Sumber: TMS.S024-R02 poin 8

### SEC-02 · Detail Jumlah Vendor
- **AC-009** (REQ-016, REQ-017) — **Diberikan** CS dipakai ≥ 1 vendor **Ketika** link "Jumlah Vendor" diklik **Maka** pop up menampilkan Nama vendor, Alias vendor, Status vendor (Aktif / Tidak Aktif) untuk setiap vendor pemakai · Sumber: TMS.S024-R03 poin 1–2
- **AC-010** (REQ-018) — **Diberikan** CS direferensikan oleh vendor berpengelola Shipper **Ketika** Jumlah Vendor dihitung **Maka** vendor tersebut terhitung sebagai pemakai · Sumber: TMS.S024-R03 poin 3
- **AC-011** (REQ-019) — **Diberikan** CS belum dipakai vendor **Ketika** list dan popup dilihat **Maka** Jumlah Vendor menampilkan status kosong (0 Vendor) dan popup menampilkan pesan tidak ada vendor · Sumber: TMS.S024-R03 poin 4

### SEC-03 · Tambah
- **AC-012** (REQ-021) — **Diberikan** halaman tambah CS dibuka **Ketika** halaman tampil **Maka** tersedia field Nama CS, No. WhatsApp CS, dan checkbox "Jadikan CS default perusahaan" · Sumber: TMS.S024-R04 poin 2
- **AC-013** (REQ-022, REQ-025) — **Diberikan** 1 baris input **Ketika** "Tambah Baris Input" diklik **Maka** baris bertambah dan button delete tampil di semua baris · Sumber: TMS.S024-R04 poin 3, 6
- **AC-014** (REQ-024, VAL-006) — **Diberikan** hanya 1 baris input **Ketika** halaman tampil **Maka** button delete tidak tampil · Sumber: TMS.S024-R04 poin 5
- **AC-015** (REQ-023) — **Diberikan** lebih dari 1 baris input **Ketika** button delete pada salah satu baris diklik **Maka** baris tersebut terhapus · Sumber: TMS.S024-R04 poin 4
- **AC-016** (REQ-026, REQ-027, REQ-032, VAL-001, VAL-002) — **Diberikan** Nama CS atau No. WhatsApp CS kosong **Ketika** Simpan diklik **Maka** tampil helper error dan border field berubah ke warna error · Sumber: TMS.S024-R04 poin 7, 8, 11
- **AC-017** (REQ-031, REQ-033, VAL-003) — **Diberikan** Nama CS sudah ada di master **Ketika** Nama CS yang sama disimpan **Maka** tampil alert/helper bahwa nama CS sudah digunakan dan data tidak tersimpan · Sumber: TMS.S024-R04 poin 10, 12
- **AC-018** (REQ-028, VAL-005) — **Diberikan** sudah ada CS default **Ketika** CS baru disimpan dengan checkbox "Jadikan CS default perusahaan" dicentang **Maka** CS baru menjadi default dan status default CS lama terlepas · Sumber: TMS.S024-R04 poin 9
- **AC-019** (REQ-029) — **Diberikan** belum ada CS sama sekali di database **Ketika** CS pertama disimpan (checkbox tidak dicentang) **Maka** CS tersebut otomatis menjadi default · Sumber: TMS.S024-R04 poin 9
- **AC-020** (REQ-020, REQ-035) — **Diberikan** beberapa baris input valid **Ketika** Simpan diklik **Maka** seluruh CS tersimpan dan tampil alert success · Sumber: TMS.S024-R04 poin 1, 14
- **AC-021** (REQ-034) — **Diberikan** halaman tambah terisi **Ketika** Batal diklik **Maka** tampil alert konfirmasi pembatalan · Sumber: TMS.S024-R04 poin 14
- **AC-022** (REQ-027, VAL-002) — **Diberikan** No. WhatsApp CS berisi karakter non-angka **Ketika** diinput/disimpan **Maka** input tidak diterima sebagai valid · Sumber: TMS.S024-R04 poin 8 (perilaku/pesan: Q-03)

### SEC-04 · Edit & pengalihan
- **AC-023** (REQ-037, REQ-038, REQ-039) — **Diberikan** baris CS pada list **Ketika** aksi Edit diklik **Maka** pop up edit tampil dengan Nama CS, No. WhatsApp CS, Status, dan checkbox default terisi data existing · Sumber: TMS.S024-R05 poin 2–4
- **AC-024** (REQ-040, VAL-003) — **Diberikan** CS lain dengan Nama CS N sudah ada **Ketika** Nama CS diubah menjadi N dan disimpan **Maka** tampil alert/helper nama CS sudah digunakan · Sumber: TMS.S024-R05 poin 5; TMS.S024-R04 poin 12
- **AC-025** (REQ-041) — **Diberikan** CS direferensikan beberapa vendor **Ketika** Nama/No. WhatsApp CS diubah dan disimpan **Maka** perubahan langsung berlaku di seluruh vendor tersebut tanpa edit vendor satu per satu · Sumber: TMS.S024-R05 poin 6
- **AC-026** (REQ-042, VAL-007) — **Diberikan** CS berstatus default dan belum ada CS default pengganti **Ketika** status diubah menjadi Tidak Aktif **Maka** perubahan tidak dapat dilakukan · Sumber: TMS.S024-R05 poin 7
- **AC-027** (REQ-043, REQ-044, VAL-008) — **Diberikan** CS masih digunakan vendor **Ketika** status diubah menjadi Tidak Aktif **Maka** tampil proses pengalihan CS · Sumber: TMS.S024-R05 poin 7–8
- **AC-028** (REQ-045) — **Diberikan** proses pengalihan tampil **Ketika** user belum memilih CS pengganti **Maka** vendor tidak dipindahkan otomatis ke CS default · Sumber: TMS.S024-R05 poin 8
- **AC-029** (REQ-046) — **Diberikan** proses pengalihan tampil **Ketika** opsi "alihkan semua ke satu CS" dipilih / opsi "atur per vendor" dipilih **Maka** seluruh vendor dialihkan ke satu CS / setiap vendor dapat dialihkan ke CS berbeda · Sumber: TMS.S024-R05 poin 8
- **AC-030** (REQ-047, VAL-009) — **Diberikan** masih ada vendor yang belum memiliki CS pengganti **Ketika** Simpan diklik **Maka** proses tidak dapat disimpan · Sumber: TMS.S024-R05 poin 8
- **AC-031** (REQ-049) — **Diberikan** perubahan valid (termasuk seluruh vendor memiliki CS pengganti) **Ketika** Simpan diklik **Maka** perubahan tersimpan dan tampil alert success · Sumber: TMS.S024-R05 poin 8–9
- **AC-032** (REQ-048) — **Diberikan** pop up edit terbuka **Ketika** Batal diklik **Maka** tampil alert konfirmasi pembatalan · Sumber: TMS.S024-R05 poin 9

### SEC-05 · Hapus
- **AC-033** (REQ-050, REQ-051, REQ-053) — **Diberikan** CS bukan default dan belum digunakan vendor mana pun **Ketika** aksi Hapus diklik dan pop up konfirmasi disetujui **Maka** data CS terhapus · Sumber: TMS.S024-R06 poin 1, 2, 4
- **AC-034** (REQ-052, VAL-010) — **Diberikan** CS masih digunakan vendor **Ketika** hapus dilakukan **Maka** tampil alert "Data Customer Service tidak dapat dihapus, data sedang digunakan" dan data tidak terhapus · Sumber: TMS.S024-R06 poin 3
- **AC-035** (REQ-052, VAL-010) — **Diberikan** CS berstatus default **Ketika** hapus dilakukan **Maka** tampil alert "Data Customer Service tidak dapat dihapus, data sedang digunakan" dan data tidak terhapus · Sumber: TMS.S024-R06 poin 3

### SEC-06 · Import
- **AC-036** (REQ-054, REQ-055) — **Diberikan** halaman tambah CS **Ketika** halaman tampil **Maka** tersedia button Download Template dan Import Data; import mengikuti format template "Template Import Data Master TMS-S.xlsx" · Sumber: TMS.S024-R04 poin 13; TMS.S024-R07

### SEC-07 · Integrasi form Vendor & Manajemen Vendor
- **AC-037** (REQ-057) — **Diberikan** form tambah/edit vendor dengan Pengelola = Vendor **Ketika** field CS diisi **Maka** nomor CS diisi manual dan tidak mengambil dari master CS · Sumber: TMS.S024-R08 poin 2
- **AC-038** (REQ-058) — **Diberikan** Pengelola = Shipper dan master CS berisi lebih dari satu data **Ketika** form vendor dibuka **Maka** tampil dropdown pilih CS yang terisi otomatis dengan CS default dan dapat diganti · Sumber: TMS.S024-R08 poin 3
- **AC-039** (REQ-059) — **Diberikan** Pengelola = Shipper dan master CS berisi satu data **Ketika** form vendor dibuka **Maka** CS tampil read-only tanpa perlu memilih · Sumber: TMS.S024-R08 poin 3
- **AC-040** (REQ-060) — **Diberikan** Pengelola = Shipper dan master CS kosong **Ketika** CS ditambahkan melalui input cepat pada form vendor **Maka** CS tersimpan ke master dan dijadikan default · Sumber: TMS.S024-R08 poin 3
- **AC-041** (REQ-061) — **Diberikan** form vendor **Ketika** CS baru ditambahkan langsung dari form vendor **Maka** CS tersimpan ke master CS · Sumber: TMS.S024-R08 poin 4
- **AC-042** (REQ-062) — **Diberikan** vendor memiliki CS penanggung jawab **Ketika** list Manajemen Vendor dibuka **Maka** kolom CS penanggung jawab menampilkan Nama CS + No WA CS · Sumber: TMS.S024-R09 poin 1
- **AC-043** (REQ-063) — **Diberikan** list Manajemen Vendor **Ketika** filter Nama / No WA CS diterapkan **Maka** list vendor tersaring sesuai CS · Sumber: TMS.S024-R09 poin 2

## 6. State / transisi
| Objek | Status / atribut | Kondisi / aksi | Sumber |
|---|---|---|---|
| CS | Aktif / Tidak Aktif | Diubah melalui field Status pada pop up edit; status awal saat tambah tidak dinyatakan (Q-13) | TMS.S024-R05 poin 4 |
| CS | Aktif → Tidak Aktif (dipakai vendor) | Wajib proses pengalihan CS; tidak dapat disimpan sampai semua vendor memiliki CS pengganti | TMS.S024-R05 poin 7–8 |
| CS | Default → Tidak Aktif | Tidak dapat sebelum ada CS default pengganti | TMS.S024-R05 poin 7 |
| CS | Non-default → Default | Checkbox default dicentang (tambah/edit); CS pertama di database otomatis default; input cepat dari form vendor saat master kosong otomatis default | TMS.S024-R04 poin 9; TMS.S024-R05 poin 4; TMS.S024-R08 poin 3 |
| CS | Default → Non-default | Otomatis saat CS lain dijadikan default | TMS.S024-R04 poin 9 |
| CS | Dihapus | Hanya bila tidak digunakan vendor dan bukan default | TMS.S024-R06 poin 2 |

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Manajemen Vendor (S003) — form tambah/edit | Field CS bergantung pada Pengelola (Vendor: manual; Shipper: dari master CS); tambah CS dari form vendor | TMS.S024-R08; spec-index §3 |
| Manajemen Vendor (S003) — list | Kolom CS penanggung jawab & filter Nama/No WA CS | TMS.S024-R09; spec-index §3 |
| Manajemen Vendor (S003-R05/R06/R07) | Konsep Pengelola = Shipper menentukan vendor pemakai CS | TMS.S024-R03 poin 3; spec-index §3 |
| Penugasan Tracking (S015) | "Sumber nomor CS pada penugasan ditentukan oleh field Pengelola vendor" | TMS.S024-R08 poin 1 (Q-09) |
| Driver Hub / apps driver (S016) | Data CS "nantinya akan tampil di apps driver" | TMS.S024-R01 (Q-09) |
| Pengaturan Akun (S021) | Master Operasional di Hak Akses tidak mencantumkan Master Customer Service | spec-index §4 no.12 |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | "No. WhatsApp CS tidak boleh duplikat (satu nomor dapat dipakai beberapa label CS)" saling bertentangan — nomor boleh sama atau tidak? | TMS.S024-R04 poin 10; TMS.S024-R05 poin 5 | REQ-030, REQ-040 | spec-index §4 no.11 |
| Q-02 | Template "Template Import Data Master TMS-S.xlsx" tidak ada di workbook; S021-R08 poin 8 (Master Operasional di Hak Akses) tidak mencantumkan Master Customer Service. | TMS.S024-R07; TMS.S021-R08 poin 8 | REQ-055 | spec-index §4 no.12 |
| Q-03 | "mengikuti format nomor WhatsApp": format apa (awalan 08/62/+62, panjang minimal/maksimal)? Pesan bila format salah? | TMS.S024-R04 poin 8 | REQ-027 | Baru |
| Q-04 | Pada tambah multi-baris, bagaimana bila checkbox "Jadikan CS default perusahaan" dicentang di lebih dari satu baris? Apakah duplikat Nama CS/No. WhatsApp antar baris dalam satu proses input juga divalidasi? | TMS.S024-R04 poin 1, 9, 10 | REQ-028, REQ-031 | Baru |
| Q-05 | Teks pesan tidak dicantumkan untuk: popup "tidak ada vendor", alert/helper Nama CS duplikat, No. WhatsApp duplikat, alert konfirmasi Batal, alert success Simpan. | TMS.S024-R03 poin 4; TMS.S024-R04 poin 12, 14; TMS.S024-R05 poin 9 | REQ-019, REQ-033, REQ-035, REQ-049 | Baru |
| Q-06 | "CS default tidak dapat diubah menjadi Tidak Aktif sebelum ada CS default pengganti": bagaimana pengganti ditetapkan (mencentang default pada CS lain?); apakah checkbox default pada CS default sendiri dapat di-uncheck; perilaku/pesan saat user mencoba menonaktifkan CS default? | TMS.S024-R05 poin 4, 7 | REQ-042 | Baru |
| Q-07 | Urutan pada hapus: pop up konfirmasi (poin 4) tampil sebelum atau sesudah pengecekan alert "Data Customer Service tidak dapat dihapus, data sedang digunakan" (poin 3)? | TMS.S024-R06 poin 3–4 | REQ-052, REQ-053 | Baru |
| Q-08 | Apakah CS berstatus Tidak Aktif ikut dihitung/ditampilkan pada dropdown CS form vendor (kondisi "lebih dari satu data" / "hanya satu data")? Apakah CS Tidak Aktif dapat dijadikan default? | TMS.S024-R08 poin 3; TMS.S024-R05 poin 4 | REQ-058, REQ-059 | Baru |
| Q-09 | R01 "akan tampil di apps driver" dan R08 poin 1 "Sumber nomor CS pada penugasan": tidak ada rule di Penugasan Tracking (S015) maupun Driver Hub (S016) yang menjelaskan tampilan/penggunaan nomor CS. | TMS.S024-R01; TMS.S024-R08 poin 1 | REQ-001, REQ-056 | Baru |
| Q-10 | Apakah Pengelola vendor berubah (S003-R06) memengaruhi referensi CS vendor (mis. Shipper → Vendor: referensi master CS dilepas)? | TMS.S024-R08 poin 2–3; TMS.S003-R06 | REQ-057–REQ-059 | Baru |
| Q-11 | Status CS yang sudah dipakai vendor lalu vendornya menjadi Tidak Aktif: apakah tetap dihitung pemakai (popup menampilkan Status vendor Aktif/Tidak Aktif) sehingga CS tidak dapat dihapus/dinonaktifkan? | TMS.S024-R03 poin 2–3; TMS.S024-R06 poin 2 | REQ-018, REQ-051 | Baru |
| Q-12 | Pilihan jumlah data per halaman (selain default 20) tidak dinyatakan. | TMS.S024-R02 poin 2–3 | REQ-004 | Baru |
| Q-13 | Status awal CS yang baru ditambahkan (Aktif?) tidak dinyatakan; form tambah tidak memiliki field Status. | TMS.S024-R04 poin 2 | REQ-021 | Baru |
| Q-14 | Untuk tambah multi-baris, bila sebagian baris valid dan sebagian tidak (mis. duplikat), apakah seluruh proses gagal atau hanya baris invalid yang ditolak? | TMS.S024-R04 poin 1, 10–12 | REQ-020, REQ-035 | Baru |
| Q-15 | Aturan validasi Import Data (duplikat, penetapan default, baris gagal, batas jumlah baris) tidak dinyatakan. | TMS.S024-R04 poin 13; TMS.S024-R07 | REQ-054 | Baru |

## 9. Catatan testability (bukan requirement)
- REQ-001 / REQ-056 (tampilan CS di apps driver & nomor CS pada penugasan) memerlukan aplikasi Driver Hub, di luar UI web OPS.
- REQ-029 dan REQ-060 memerlukan kondisi database master CS kosong untuk shipper uji.
- REQ-055 memerlukan file template yang tidak ada di workbook.
- SEC-07 diverifikasi pada modul Manajemen Vendor (form tambah/edit & list).

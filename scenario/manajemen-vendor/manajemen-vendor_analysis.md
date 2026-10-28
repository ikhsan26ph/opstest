# TMS.S003 — Manajemen Vendor · Analysis (REQ / VAL / AC)

> Sumber: [`manajemen-vendor_spec.md`](manajemen-vendor_spec.md) (verbatim `Spek TMS-S` baris 2–10) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Struktur & Akses Menu | TMS.S003-R02 | Shipper (akun utama & sub user), Vendor | REQ-001–REQ-004 | — | AC-001–AC-003 |
| SEC-02 | Halaman Daftar Vendor | TMS.S003-R03 | Shipper | REQ-005–REQ-012 | — | AC-004–AC-009 |
| SEC-03 | Action Menu pada Daftar Vendor | TMS.S003-R04 (+R08 poin 1) | Shipper | REQ-013–REQ-019 | VAL-004 | AC-010–AC-012 |
| SEC-04 | Halaman Tambah Vendor (Invite Vendor) | TMS.S003-R05 | Shipper, Sistem | REQ-020–REQ-036 | VAL-001–VAL-003 | AC-013–AC-020 |
| SEC-05 | Perubahan Pengelola (Edit Vendor) | TMS.S003-R06 | Shipper, Sistem, Vendor | REQ-037–REQ-042 | — | AC-021–AC-022 |
| SEC-06 | Status Vendor & Transisi | TMS.S003-R07 | Shipper, Sistem, Vendor | REQ-043–REQ-050 | — | AC-023–AC-026 |
| SEC-07 | Kirim Undangan Ulang (Resend) | TMS.S003-R08 | Shipper, Sistem | REQ-051–REQ-053 | VAL-005 | AC-027–AC-028 |
| SEC-08 | Notifikasi Email | TMS.S003-R09 | Sistem | REQ-054–REQ-057 | — | AC-029–AC-030 |

TMS.S003-R01 (Pendahuluan) tidak menghasilkan REQ; isinya: manajemen vendor yang diundang ke TMS, "Mulai dari proses invite, pengiriman email, hingga pengisian data registrasi".

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Shipper — akun utama | Mengakses menu "Manajemen Vendor" | TMS.S003-R02 poin 2 |
| Shipper — sub user | Mengakses menu bila memiliki "hak akses sesuai" (detail hak akses di TMS.S021-R08) | TMS.S003-R02 poin 2 |
| Vendor | "Vendor tidak memiliki akses ke menu ini." | TMS.S003-R02 poin 2 |
| Sistem | Mengirim email, membuat akun vendor, transisi Menunggu → Aktif otomatis | TMS.S003-R05 poin 6, R07 poin 2, R09 |

## 3. Requirement (REQ)
### SEC-01 · Struktur & Akses Menu
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Menu "Manajemen Vendor" berdiri sendiri di sidebar utama, sejajar dengan menu operasional lain (Order, Penugasan Tracking, dll). | TMS.S003-R02 poin 1 | TERTULIS |
| REQ-002 | Menu hanya dapat diakses oleh akun shipper (akun utama & sub user dengan hak akses sesuai). | TMS.S003-R02 poin 2 | TERTULIS |
| REQ-003 | Vendor tidak memiliki akses ke menu "Manajemen Vendor". | TMS.S003-R02 poin 2 | TERTULIS |
| REQ-004 | Saat menu dibuka, halaman default adalah daftar seluruh vendor yang pernah diundang/didaftarkan oleh shipper tersebut. | TMS.S003-R02 poin 3 | TERTULIS |

### SEC-02 · Halaman Daftar Vendor
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-005 | Urutan default data berdasarkan tanggal undangan/pendaftaran terbaru (vendor paling baru ditambahkan tampil paling atas). | TMS.S003-R03 poin 1 | TERTULIS |
| REQ-006 | Default data yang tampil sebanyak 20 data per halaman. | TMS.S003-R03 poin 2 | TERTULIS |
| REQ-007 | Tersedia pagination & dropdown jumlah data per halaman (opsi dropdown tidak disebut, lihat Q-10). | TMS.S003-R03 poin 2 | AMBIGU |
| REQ-008 | Kolom "No. WhatsApp" dan "Alias Perusahaan" tampil kosong ("-") apabila vendor belum menyelesaikan proses registrasi mandiri (status "Menunggu"). | TMS.S003-R03 poin 3 | TERTULIS |
| REQ-009 | Kolom "Pengelola" menampilkan badge "Vendor" atau "Shipper" sesuai pengaturan yang dipilih. | TMS.S003-R03 poin 4 | TERTULIS |
| REQ-010 | Kolom "Status" menampilkan badge sesuai status vendor: "Menunggu", "Aktif", "Tidak Aktif". | TMS.S003-R03 poin 5 | TERTULIS |
| REQ-011 | Badge "Menunggu" hanya ada saat kondisi registrasi dilakukan oleh vendor. | TMS.S003-R03 poin 5 | TERTULIS |
| REQ-012 | Tombol "+ Tambah Vendor" mengarahkan ke halaman tambah vendor. | TMS.S003-R03 poin 6 | TERTULIS |

### SEC-03 · Action Menu pada Daftar Vendor
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-013 | Pengelola "Vendor", status "Menunggu": action Detail, Edit, Kirim Undangan (resend, via email). | TMS.S003-R04 poin 1 | KONFLIK (Q-03) |
| REQ-014 | Pengelola "Vendor", status "Aktif": action Detail, Edit. | TMS.S003-R04 poin 1 | TERTULIS |
| REQ-015 | Pengelola "Vendor", status "Tidak Aktif": action Detail, Edit. | TMS.S003-R04 poin 1 | TERTULIS |
| REQ-016 | Pengelola "Shipper", status "Aktif": action Detail, Edit. | TMS.S003-R04 poin 2 | TERTULIS |
| REQ-017 | Pengelola "Shipper", status "Tidak Aktif": action Detail, Edit. | TMS.S003-R04 poin 2 | TERTULIS |
| REQ-018 | Action "Kirim Undangan" hanya tampil/tersedia selama status masih "Menunggu". | TMS.S003-R04 poin 3; TMS.S003-R08 poin 1 | TERTULIS |
| REQ-019 | Status "Menunggu" hanya mungkin terjadi pada Pengelola "Vendor" dengan Metode Registrasi "Mandiri" yang belum diselesaikan vendor. | TMS.S003-R04 poin 3 | TERTULIS |

### SEC-04 · Halaman Tambah Vendor (Invite Vendor)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-020 | Shipper wajib memilih Metode Registrasi ("Registrasi Mandiri" / "Registrasi Dibantu Admin") sebelum melanjutkan mengisi data. | TMS.S003-R05 poin 1 | TERTULIS (label lihat Q-08) |
| REQ-021 | Shipper wajib memilih Pengelola ("Vendor" / "Shipper") sebelum melanjutkan mengisi data. | TMS.S003-R05 poin 1 | TERTULIS |
| REQ-022 | Metode "Registrasi Mandiri" hanya menampilkan 2 field (Nama Perusahaan, Email); field lainnya dilengkapi vendor saat registrasi. | TMS.S003-R05 poin 2 | TERTULIS |
| REQ-023 | Metode "Registrasi Dibantu Admin" menampilkan seluruh field Informasi Perusahaan secara lengkap, diisi langsung oleh shipper atas nama vendor. | TMS.S003-R05 poin 2 | AMBIGU (Q-05) |
| REQ-024 | Section "Akses" (Manajemen Sub User, Jenis Pengiriman FCL/FTL) selalu ditampilkan & dapat diatur shipper pada kedua Metode Registrasi, terlepas dari Pengelola yang dipilih. | TMS.S003-R05 poin 3 | AMBIGU (Q-06) |
| REQ-025 | Satu alamat Email hanya dapat diinput/diundang satu kali oleh shipper yang sama; jika sudah terdaftar sebagai vendor pada shipper tersebut tampil error "Email ini sudah terdaftar sebagai vendor Anda." | TMS.S003-R05 poin 4 | TERTULIS (lingkup lihat Q-11) |
| REQ-026 | Tombol "Batal" kembali ke halaman Daftar Vendor tanpa menyimpan/mengirim apapun. | TMS.S003-R05 poin 5 | TERTULIS |
| REQ-027 | Tombol "Batal" menampilkan pop up konfirmasi. | TMS.S003-R05 poin 5 | AMBIGU (Q-07) |
| REQ-028 | "Registrasi Mandiri" + Pengelola "Vendor": setelah submit, sistem mengirim email undangan registrasi berisi link aktivasi. | TMS.S003-R05 poin 6 | TERTULIS |
| REQ-029 | "Registrasi Mandiri" + Pengelola "Vendor": status vendor otomatis "Menunggu" sampai vendor menyelesaikan registrasi. | TMS.S003-R05 poin 6 | TERTULIS |
| REQ-030 | "Registrasi Mandiri" + Pengelola "Vendor": registrasi & pengelolaan operasional (armada, sopir, penugasan) sepenuhnya oleh vendor; shipper tidak dapat membantu proses penugasan. | TMS.S003-R05 poin 6 | TERTULIS |
| REQ-031 | "Registrasi Dibantu Admin" + Pengelola "Vendor": begitu shipper menyimpan data, sistem otomatis membuat akun vendor (email & password sementara) dan mengirim email informasi akun. | TMS.S003-R05 poin 6 | TERTULIS |
| REQ-032 | "Registrasi Dibantu Admin" + Pengelola "Vendor": status vendor otomatis "Aktif". | TMS.S003-R05 poin 6 | TERTULIS |
| REQ-033 | "Registrasi Dibantu Admin" + Pengelola "Vendor": pengelolaan operasional sepenuhnya oleh vendor; shipper tidak dapat membantu proses penugasan. | TMS.S003-R05 poin 6 | TERTULIS |
| REQ-034 | "Registrasi Dibantu Admin" + Pengelola "Shipper": registrasi & pengelolaan operasional sepenuhnya oleh shipper; vendor tidak memiliki akses login ke sistem. | TMS.S003-R05 poin 6 | TERTULIS |
| REQ-035 | "Registrasi Dibantu Admin" + Pengelola "Shipper": status vendor otomatis "Aktif" begitu data disimpan. | TMS.S003-R05 poin 6 | TERTULIS |
| REQ-036 | Kombinasi "Registrasi Mandiri" + Pengelola "Shipper" tidak didefinisikan oleh spec (hanya 3 kombinasi dijelaskan). | TMS.S003-R05 poin 6 | AMBIGU (Q-01) |

### SEC-05 · Perubahan Pengelola (Edit Vendor)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-037 | Data vendor dapat diubah setelah vendor berstatus aktif, melalui action "Edit". | TMS.S003-R06 poin 1 | KONFLIK (Q-03) |
| REQ-038 | Perubahan Pengelola Shipper → Vendor: sistem membuat akun baru untuk vendor & mengirim email informasi akun (email & password sementara). | TMS.S003-R06 poin 2 | TERTULIS |
| REQ-039 | Perubahan Pengelola Vendor → Shipper: akun vendor yang sudah ada tetap aktif dan tetap dapat login. | TMS.S003-R06 poin 3 | TERTULIS |
| REQ-040 | Perubahan Pengelola Vendor → Shipper: akses vendor berubah menjadi read-only (hanya dapat melihat data, tidak dapat melakukan penugasan/operasional). | TMS.S003-R06 poin 3 | TERTULIS |
| REQ-041 | Perubahan Pengelola Vendor → Shipper: sistem mengirim email notifikasi pengalihan pengelolaan ke vendor. | TMS.S003-R06 poin 3 | TERTULIS |
| REQ-042 | Kontrol penugasan/operasional hanya dapat dipegang oleh salah satu pihak (vendor atau shipper) dalam satu waktu, tidak dapat aktif bersamaan. | TMS.S003-R06 poin 4 | TERTULIS |

### SEC-06 · Status Vendor & Transisi
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-043 | Terdapat 3 status vendor: Menunggu, Aktif, Tidak Aktif. | TMS.S003-R07 poin 1 | TERTULIS (label lihat Q-04) |
| REQ-044 | Menunggu: undangan sudah dikirim (khusus Metode "Registrasi Mandiri"), vendor belum mengklik link aktivasi/belum menyelesaikan registrasi. | TMS.S003-R07 poin 1 | TERTULIS |
| REQ-045 | Aktif: vendor sudah menyelesaikan registrasi mandiri, ATAU data vendor selesai diinput shipper via "Registrasi Dibantu Admin"; vendor (jika Pengelola Vendor) dapat login dan menggunakan sistem. | TMS.S003-R07 poin 1 | TERTULIS |
| REQ-046 | Tidak Aktif: shipper menonaktifkan vendor secara manual; vendor (jika sebelumnya punya akses) tidak dapat login. | TMS.S003-R07 poin 1 | TERTULIS |
| REQ-047 | Tidak Aktif: seluruh data tetap tersimpan. | TMS.S003-R07 poin 1 | TERTULIS |
| REQ-048 | Transisi Menunggu → Aktif terjadi otomatis oleh sistem mengikuti progres registrasi vendor. | TMS.S003-R07 poin 2 | TERTULIS |
| REQ-049 | Transisi Aktif ↔ Tidak Aktif hanya dapat dikendalikan manual oleh shipper melalui action pada tabel/detail vendor. | TMS.S003-R07 poin 3 | AMBIGU (Q-02) |
| REQ-050 | Status "Menunggu" tidak berlaku untuk Metode "Registrasi Dibantu Admin" (baik Pengelola Vendor maupun Shipper). | TMS.S003-R07 poin 4 | TERTULIS |

### SEC-07 · Kirim Undangan Ulang (Resend)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-051 | Setiap resend men-generate link aktivasi baru. | TMS.S003-R08 poin 2 | TERTULIS |
| REQ-052 | Setiap resend menonaktifkan link sebelumnya (link lama tidak dapat lagi diakses). | TMS.S003-R08 poin 2 | TERTULIS |
| REQ-053 | Timestamp acuan perhitungan masa berlaku expired ter-reset mengikuti waktu resend. | TMS.S003-R08 poin 3 | TERTULIS |

### SEC-08 · Notifikasi Email
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-054 | Email "Undangan Registrasi Mandiri" dikirim saat invite dengan Metode "Registrasi Mandiri"; berisi link aktivasi & informasi masa berlaku link. | TMS.S003-R09 poin 1 | TERTULIS |
| REQ-055 | Email "Informasi Akun (Registrasi Dibantu Admin + Pengelola Vendor)" dikirim otomatis saat shipper menyimpan data vendor lengkap; berisi email & password sementara. | TMS.S003-R09 poin 2 | TERTULIS |
| REQ-056 | Email "Notifikasi Pengalihan Pengelolaan dari Shipper ke Vendor" dikirim saat Pengelola diubah dari Shipper menjadi Vendor; berisi email & password sementara (akun baru). | TMS.S003-R09 poin 3 | TERTULIS |
| REQ-057 | Email "Notifikasi Pengalihan Pengelolaan dari Vendor ke Shipper" dikirim saat Pengelola diubah dari Vendor menjadi Shipper; berisi informasi pengalihan (tanpa akun baru). | TMS.S003-R09 poin 4 | TERTULIS |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-04 | Metode Registrasi | Wajib dipilih ("Registrasi Mandiri" / "Registrasi Dibantu Admin") sebelum melanjutkan mengisi data | Tidak disebut di spec | TMS.S003-R05 poin 1 |
| VAL-002 | SEC-04 | Pengelola | Wajib dipilih ("Vendor" / "Shipper") sebelum melanjutkan mengisi data | Tidak disebut di spec | TMS.S003-R05 poin 1 |
| VAL-003 | SEC-04 | Email | Hanya dapat diinput/diundang satu kali oleh shipper yang sama | "Email ini sudah terdaftar sebagai vendor Anda." | TMS.S003-R05 poin 4 |
| VAL-004 | SEC-03 | Action "Kirim Undangan" | Hanya tersedia untuk vendor berstatus "Menunggu" | Action tidak tampil pada status selain "Menunggu" ("hanya tampil selama status masih "Menunggu"") | TMS.S003-R04 poin 3; TMS.S003-R08 poin 1 |
| VAL-005 | SEC-07 | Link aktivasi lama (sebelum resend) | Link sebelumnya dinonaktifkan setiap resend | "link lama tidak dapat lagi diakses" | TMS.S003-R08 poin 2 |

## 5. Acceptance Criteria (AC)
### SEC-01 · Struktur & Akses Menu
- **AC-001** (REQ-001, REQ-002, REQ-004) — **Diberikan** login sebagai akun utama shipper **Ketika** membuka menu "Manajemen Vendor" dari sidebar utama **Maka** halaman default menampilkan daftar seluruh vendor yang pernah diundang/didaftarkan oleh shipper tersebut · Sumber: TMS.S003-R02 poin 1–3
- **AC-002** (REQ-002) — **Diberikan** login sebagai sub user shipper dengan hak akses sesuai **Ketika** membuka menu "Manajemen Vendor" **Maka** menu dapat diakses · Sumber: TMS.S003-R02 poin 2
- **AC-003** (REQ-003) — **Diberikan** login sebagai vendor **Ketika** mencari/mengakses menu "Manajemen Vendor" **Maka** vendor tidak memiliki akses ke menu tersebut · Sumber: TMS.S003-R02 poin 2

### SEC-02 · Halaman Daftar Vendor
- **AC-004** (REQ-005) — **Diberikan** shipper memiliki beberapa vendor dengan tanggal undangan/pendaftaran berbeda **Ketika** membuka Daftar Vendor **Maka** vendor paling baru ditambahkan tampil paling atas · Sumber: TMS.S003-R03 poin 1
- **AC-005** (REQ-006, REQ-007) — **Diberikan** shipper memiliki lebih dari 20 vendor **Ketika** membuka Daftar Vendor **Maka** tampil 20 data per halaman serta tersedia pagination & dropdown jumlah data per halaman · Sumber: TMS.S003-R03 poin 2
- **AC-006** (REQ-008) — **Diberikan** vendor berstatus "Menunggu" (belum menyelesaikan registrasi mandiri) **Ketika** melihat barisnya di Daftar Vendor **Maka** kolom "No. WhatsApp" dan "Alias Perusahaan" tampil "-" · Sumber: TMS.S003-R03 poin 3
- **AC-007** (REQ-009) — **Diberikan** vendor dengan Pengelola "Vendor" dan vendor dengan Pengelola "Shipper" **Ketika** melihat Daftar Vendor **Maka** kolom "Pengelola" menampilkan badge "Vendor" atau "Shipper" sesuai pengaturan · Sumber: TMS.S003-R03 poin 4
- **AC-008** (REQ-010, REQ-011) — **Diberikan** vendor berstatus Menunggu/Aktif/Tidak Aktif **Ketika** melihat Daftar Vendor **Maka** kolom "Status" menampilkan badge sesuai status; badge "Menunggu" hanya muncul untuk registrasi yang dilakukan vendor · Sumber: TMS.S003-R03 poin 5
- **AC-009** (REQ-012) — **Diberikan** shipper di Daftar Vendor **Ketika** klik "+ Tambah Vendor" **Maka** diarahkan ke halaman tambah vendor · Sumber: TMS.S003-R03 poin 6

### SEC-03 · Action Menu pada Daftar Vendor
- **AC-010** (REQ-013, REQ-018, VAL-004) — **Diberikan** vendor Pengelola "Vendor" berstatus "Menunggu" **Ketika** membuka action menu **Maka** tersedia Detail, Edit, Kirim Undangan · Sumber: TMS.S003-R04 poin 1, poin 3
- **AC-011** (REQ-014, REQ-015, REQ-018, VAL-004) — **Diberikan** vendor Pengelola "Vendor" berstatus "Aktif" atau "Tidak Aktif" **Ketika** membuka action menu **Maka** tersedia Detail, Edit, dan "Kirim Undangan" tidak tampil · Sumber: TMS.S003-R04 poin 1, poin 3
- **AC-012** (REQ-016, REQ-017) — **Diberikan** vendor Pengelola "Shipper" berstatus "Aktif" atau "Tidak Aktif" **Ketika** membuka action menu **Maka** tersedia Detail, Edit · Sumber: TMS.S003-R04 poin 2

### SEC-04 · Halaman Tambah Vendor (Invite Vendor)
- **AC-013** (REQ-020, REQ-021, REQ-022, VAL-001, VAL-002) — **Diberikan** shipper di halaman tambah vendor **Ketika** memilih Metode "Registrasi Mandiri" dan Pengelola **Maka** hanya tampil 2 field (Nama Perusahaan, Email) · Sumber: TMS.S003-R05 poin 1–2
- **AC-014** (REQ-023) — **Diberikan** shipper di halaman tambah vendor **Ketika** memilih Metode "Registrasi Dibantu Admin" **Maka** tampil seluruh field Informasi Perusahaan secara lengkap untuk diisi shipper · Sumber: TMS.S003-R05 poin 2
- **AC-015** (REQ-024) — **Diberikan** shipper di halaman tambah vendor **Ketika** memilih Metode apa pun dengan Pengelola apa pun **Maka** section "Akses" (Manajemen Sub User, Jenis Pengiriman FCL/FTL) tampil dan dapat diatur · Sumber: TMS.S003-R05 poin 3
- **AC-016** (REQ-025, VAL-003) — **Diberikan** email X sudah terdaftar sebagai vendor pada shipper tersebut **Ketika** shipper menginput email X pada form tambah vendor **Maka** tampil error "Email ini sudah terdaftar sebagai vendor Anda." · Sumber: TMS.S003-R05 poin 4
- **AC-017** (REQ-026, REQ-027) — **Diberikan** shipper sedang mengisi form tambah vendor **Ketika** klik "Batal" **Maka** tampil pop up konfirmasi, dan shipper kembali ke Daftar Vendor tanpa data tersimpan/terkirim · Sumber: TMS.S003-R05 poin 5
- **AC-018** (REQ-028, REQ-029, REQ-030, REQ-054) — **Diberikan** Metode "Registrasi Mandiri" + Pengelola "Vendor" dengan data valid **Ketika** shipper submit form **Maka** sistem mengirim email undangan registrasi berisi link aktivasi dan status vendor "Menunggu" · Sumber: TMS.S003-R05 poin 6; TMS.S003-R09 poin 1
- **AC-019** (REQ-031, REQ-032, REQ-033, REQ-055) — **Diberikan** Metode "Registrasi Dibantu Admin" + Pengelola "Vendor" dengan data lengkap **Ketika** shipper menyimpan data **Maka** sistem membuat akun vendor (email & password sementara), mengirim email informasi akun, dan status vendor "Aktif" · Sumber: TMS.S003-R05 poin 6; TMS.S003-R09 poin 2
- **AC-020** (REQ-034, REQ-035) — **Diberikan** Metode "Registrasi Dibantu Admin" + Pengelola "Shipper" **Ketika** shipper menyimpan data **Maka** status vendor "Aktif" dan vendor tidak memiliki akses login ke sistem · Sumber: TMS.S003-R05 poin 6

### SEC-05 · Perubahan Pengelola (Edit Vendor)
- **AC-021** (REQ-038, REQ-042, REQ-056) — **Diberikan** vendor Aktif dengan Pengelola "Shipper" **Ketika** shipper mengubah Pengelola menjadi "Vendor" melalui "Edit" dan menyimpan **Maka** sistem membuat akun baru untuk vendor dan mengirim email berisi email & password sementara · Sumber: TMS.S003-R06 poin 2, poin 4; TMS.S003-R09 poin 3
- **AC-022** (REQ-039, REQ-040, REQ-041, REQ-042, REQ-057) — **Diberikan** vendor Aktif dengan Pengelola "Vendor" **Ketika** shipper mengubah Pengelola menjadi "Shipper" dan menyimpan **Maka** akun vendor tetap dapat login dengan akses read-only (tidak dapat melakukan penugasan/operasional) dan sistem mengirim email notifikasi pengalihan pengelolaan ke vendor · Sumber: TMS.S003-R06 poin 3–4; TMS.S003-R09 poin 4

### SEC-06 · Status Vendor & Transisi
- **AC-023** (REQ-044, REQ-045, REQ-048) — **Diberikan** vendor berstatus "Menunggu" **Ketika** vendor menyelesaikan registrasi **Maka** status berubah otomatis menjadi "Aktif" · Sumber: TMS.S003-R07 poin 1–2
- **AC-024** (REQ-046, REQ-047, REQ-049) — **Diberikan** vendor berstatus "Aktif" yang sebelumnya punya akses login **Ketika** shipper menonaktifkan vendor secara manual **Maka** status "Tidak Aktif", vendor tidak dapat login, dan seluruh data tetap tersimpan · Sumber: TMS.S003-R07 poin 1, poin 3
- **AC-025** (REQ-049) — **Diberikan** vendor berstatus "Tidak Aktif" **Ketika** shipper mengaktifkan kembali secara manual melalui action pada tabel/detail vendor **Maka** status menjadi "Aktif" · Sumber: TMS.S003-R07 poin 3 (lihat Q-02)
- **AC-026** (REQ-050) — **Diberikan** vendor ditambahkan dengan Metode "Registrasi Dibantu Admin" (Pengelola Vendor maupun Shipper) **Ketika** data disimpan **Maka** vendor tidak pernah berstatus "Menunggu" · Sumber: TMS.S003-R07 poin 4

### SEC-07 · Kirim Undangan Ulang (Resend)
- **AC-027** (REQ-051, REQ-052, VAL-005) — **Diberikan** vendor berstatus "Menunggu" dengan link aktivasi L1 **Ketika** shipper klik "Kirim Undangan" **Maka** link aktivasi baru L2 dikirim dan L1 tidak dapat lagi diakses · Sumber: TMS.S003-R08 poin 1–2
- **AC-028** (REQ-053) — **Diberikan** undangan di-resend **Ketika** masa berlaku dihitung **Maka** acuan perhitungan expired dimulai dari waktu resend · Sumber: TMS.S003-R08 poin 3

### SEC-08 · Notifikasi Email
- **AC-029** (REQ-054) — **Diberikan** invite dengan Metode "Registrasi Mandiri" **Ketika** email undangan diterima **Maka** email berisi link aktivasi & informasi masa berlaku link · Sumber: TMS.S003-R09 poin 1
- **AC-030** (REQ-055, REQ-056, REQ-057) — **Diberikan** masing-masing pemicu (simpan Dibantu Admin + Vendor; ubah Shipper → Vendor; ubah Vendor → Shipper) **Ketika** pemicu terjadi **Maka** email yang sesuai terkirim dengan isi: email & password sementara (dua pemicu pertama) / informasi pengalihan tanpa akun baru (pemicu ketiga) · Sumber: TMS.S003-R09 poin 2–4

## 6. State / transisi
| Status | Berlaku untuk | Masuk ke status | Keluar dari status | Action di daftar | Sumber |
|---|---|---|---|---|---|
| Menunggu | Pengelola Vendor + "Registrasi Mandiri" | Submit invite Mandiri; resend tetap Menunggu | → Aktif otomatis saat vendor menyelesaikan registrasi | Detail, Edit, Kirim Undangan | R04 poin 1, 3; R05 poin 6; R07 poin 1–2; R08 |
| Aktif | Semua kombinasi | Registrasi mandiri selesai; simpan "Registrasi Dibantu Admin"; manual dari Tidak Aktif | → Tidak Aktif (manual oleh shipper) | Detail, Edit | R04; R05 poin 6; R07 poin 1, 3 |
| Tidak Aktif | Semua kombinasi | Shipper menonaktifkan manual | → Aktif (manual oleh shipper) | Detail, Edit | R04; R07 poin 1, 3 |

Aksi untuk transisi Aktif ↔ Tidak Aktif tidak tercantum pada daftar action R04 (Q-02).

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Registrasi Vendor (TMS.S004) | Undangan Registrasi Mandiri, resend, status Menunggu → Aktif | TMS.S003-R05, R07, R08; TMS.S004-R02, R06; spec-index §3 |
| Pengaturan Sistem (TMS.S020) | Durasi Kedaluwarsa Undangan Vendor (default 2 Jam) menentukan masa berlaku link undangan | TMS.S020-R03 poin 1; spec-index §3 |
| Master Unit (TMS.S009-R02), Master Sopir (TMS.S010-R02), Penugasan Tracking (TMS.S015-R02), Master CS (TMS.S024-R03) | Tab/menu & hak penugasan shipper bergantung pada adanya vendor dengan Pengelola = Shipper | spec-index §3 |
| Master Customer Service (TMS.S024-R08/R09) | Field CS pada form tambah/edit vendor; kolom CS (Nama CS + No WA CS) & filter CS pada list Manajemen Vendor | TMS.S024-R08, R09 |
| Pengaturan Akun (TMS.S021-R08) | Hak akses sub user untuk Manajemen Vendor (kontrol 3-level, tanpa Cakupan Data) | TMS.S021-R08 poin 1; TMS.S003-R02 poin 2 |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | Kombinasi "Registrasi Mandiri" + Pengelola "Shipper" tidak dijelaskan — boleh dipilih atau tidak, dan bagaimana perilakunya? | TMS.S003-R05 poin 1, 6 | REQ-036, REQ-021 | §4 no.1 |
| Q-02 | Transisi Aktif ↔ Tidak Aktif "melalui action pada tabel/detail vendor", tetapi daftar action R04 hanya Detail, Edit, Kirim Undangan. Action apa yang dipakai, dan apakah ada konfirmasi? | TMS.S003-R07 poin 3; R04 | REQ-049 | §4 no.2 |
| Q-03 | R06 poin 1 "dapat diubah setelah vendor berstatus aktif" vs R04 memberi action Edit pada status "Menunggu". Apa yang dapat diedit saat "Menunggu"? | TMS.S003-R04 poin 1; R06 poin 1 | REQ-013, REQ-037 | §4 no.3 |
| Q-04 | Label status di S004-R06 poin 4 ("Menunggu Registrasi / Terdaftar") berbeda dengan S003 (Menunggu/Aktif/Tidak Aktif). Label mana yang tampil? | TMS.S003-R03 poin 5, R07 poin 1; TMS.S004-R06 poin 4 | REQ-010, REQ-043 | §4 no.4 |
| Q-05 | "Seluruh field Informasi Perusahaan secara lengkap" untuk "Registrasi Dibantu Admin" tidak dirinci di S003 (daftar field, wajib/tidak, validasi). Apakah sama dengan field Step 2 registrasi vendor (S004-R05)? | TMS.S003-R05 poin 2 | REQ-023 | Baru |
| Q-06 | Section "Akses" hanya menyebut "Manajemen Sub User, Jenis Pengiriman FCL/FTL" — apakah LTL/LCL termasuk, dan apa bentuk kontrol serta nilai default-nya? | TMS.S003-R05 poin 3 | REQ-024 | Baru |
| Q-07 | "Batal" kembali ke Daftar Vendor "Dan menampilkan pop up konfirmasi" — urutan (konfirmasi dulu lalu kembali?) dan teks pop up tidak disebut. | TMS.S003-R05 poin 5 | REQ-026, REQ-027 | Baru |
| Q-08 | Cakupan kolom B memakai "Registrasi dibantu shipper", sedangkan rule R05/R07 memakai label "Registrasi Dibantu Admin". Label mana yang dipakai di UI? | TMS.S003 Cakupan; R05 poin 1 | REQ-020 | Baru |
| Q-09 | Kewajiban & validasi format field Nama Perusahaan dan Email pada form tambah vendor (Mandiri) tidak disebut; hanya pesan email duplikat yang tertulis. | TMS.S003-R05 poin 2, 4 | REQ-022, REQ-025 | Baru |
| Q-10 | Opsi dropdown jumlah data per halaman dan daftar kolom lengkap tabel Daftar Vendor tidak disebut (R03 hanya menyebut kolom No. WhatsApp, Alias Perusahaan, Pengelola, Status; S024-R09 menambah kolom CS). | TMS.S003-R03 poin 2–5; TMS.S024-R09 | REQ-007 | Baru |
| Q-11 | Lingkup keunikan email: S003-R05 poin 4 per shipper yang sama ("sebagai vendor Anda"), sedangkan S004-R04 poin 2 "tidak boleh sama dengan email yang sudah terdaftar sebagai akun vendor lain". Apakah email yang sama boleh diundang oleh shipper lain? | TMS.S003-R05 poin 4; TMS.S004-R04 poin 2 | REQ-025 | Baru |

## 9. Catatan testability (bukan requirement)
- Pengiriman & isi 4 jenis email (REQ-054–REQ-057, AC-018–AC-022, AC-029–AC-030) memerlukan akses kotak masuk email vendor.
- Akses link aktivasi lama/baru dan masa berlaku link (REQ-051–REQ-053) memerlukan link dari email dan waktu yang berjalan sesuai durasi TMS.S020-R03 poin 1.
- Login vendor (REQ-039, REQ-040, REQ-046) memerlukan kredensial vendor (password sementara dari email).

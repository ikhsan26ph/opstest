# TMS.S008 — Master Waktu Perjalanan · Analysis (REQ / VAL / AC)

> Sumber: [`master-waktu-perjalanan_spec.md`](master-waktu-perjalanan_spec.md) (verbatim `Spek TMS-S` baris 26–32) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.
> Catatan sumber: kolom Spesifikasi Selesai/Versi hanya terisi pada baris pendahuluan (spec-index §4 no.6).

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Definisi general & penggunaan data | TMS.S008-R01, TMS.S008-R02 | Tidak dinyatakan (Q-14) | REQ-001–REQ-010 | — | AC-001–AC-004 |
| SEC-02 | Halaman Master Waktu Perjalanan (tabel, filter, pagination) | TMS.S008-R03 poin 1–3 | Tidak dinyatakan | REQ-011–REQ-016 | — | AC-005–AC-009 |
| SEC-03 | Perbarui Waktu Perjalanan (massal) | TMS.S008-R03 poin 4 | Tidak dinyatakan | REQ-017–REQ-025 | VAL-003 | AC-010–AC-016 |
| SEC-04 | Tambah Waktu Perjalanan | TMS.S008-R04 | Tidak dinyatakan | REQ-026–REQ-043 | VAL-001, VAL-002, VAL-005 | AC-017–AC-027 |
| SEC-05 | Edit Waktu Perjalanan | TMS.S008-R05 | Tidak dinyatakan | REQ-044–REQ-051 | VAL-001, VAL-005 | AC-028–AC-032 |
| SEC-06 | Hapus Data | TMS.S008-R03 poin 1, TMS.S008-R06 | Tidak dinyatakan | REQ-052–REQ-053 | VAL-004 | AC-033–AC-034 |
| SEC-07 | Konversi waktu perjalanan | TMS.S008-R07, TMS.S008-R02 poin 2 | Sistem | REQ-054–REQ-056 | — | AC-035–AC-037 |

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| (Tidak disebut di S008) | Rule S008 tidak menyebut aktor/role. | TMS.S008-R01–R07 (Q-14) |
| (Hak akses sub user) | Master Waktu Perjalanan tercantum pada kategori Master Operasional di Hak Akses, "masing-masing kontrol 3-level, tanpa Cakupan Data" | TMS.S021-R08 poin 8 (rujukan lintas modul) |
| Sistem | Menyimpan dalam jam, mengonversi tampilan, menghitung rata-rata riwayat, memakai data untuk keterlambatan | TMS.S008-R02 poin 2, poin 6; TMS.S008-R04 poin 2; TMS.S008-R07 |

## 3. Requirement (REQ)
### SEC-01 · Definisi general & penggunaan data
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Menu master mengelola data rute pengiriman beserta target waktu perjalanan yang digunakan sistem untuk memicu peringatan pada Dashboard Monitoring. | TMS.S008-R01 | TERTULIS |
| REQ-002 | Target waktu perjalanan didefinisikan dari kota ke kota. | TMS.S008-R02 poin 1 | TERTULIS |
| REQ-003 | Target waktu perjalanan disimpan dalam satuan jam (contoh: "Surabaya - Jakarta = 48 jam") sebagai acuan sistem menghitung keterlambatan pengiriman. | TMS.S008-R02 poin 2 | TERTULIS |
| REQ-004 | Target waktu perjalanan tampil di sistem dalam satuan "H dan J" sesuai aturan konversi. | TMS.S008-R02 poin 2 | AMBIGU (Q-01) |
| REQ-005 | Waktu perjalanan dapat ditambah melalui menu Master Waktu Perjalanan. | TMS.S008-R02 poin 3 | TERTULIS |
| REQ-006 | Waktu perjalanan dapat ditambahkan saat membuat order (jika belum ada di master) dan tersimpan sebagai data baru di master. | TMS.S008-R02 poin 3 | AMBIGU (Q-09) |
| REQ-007 | Data dapat diedit tanpa mengubah historical data yang digunakan sebelumnya. | TMS.S008-R02 poin 4 | TERTULIS |
| REQ-008 | Semua perubahan tercatat pada riwayat. | TMS.S008-R02 poin 5 | AMBIGU (Q-12) |
| REQ-009 | Data Waktu Perjalanan digunakan sebagai informasi di Order dan untuk menghitung keterlambatan di Dashboard Monitoring, Operasional. | TMS.S008-R02 poin 6 | TERTULIS |
| REQ-010 | Master Waktu Perjalanan berada pada Master Operasional. | TMS.S008-R03 (bagian "Master Waktu Perjalanan ada pada Master Operasional") | TERTULIS |

### SEC-02 · Halaman Master Waktu Perjalanan
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-011 | Tabel data berkolom: No, Rute, Waktu Perjalanan, Sumber Data (Input Manual/Riwayat Data), Status (Aktif/Tidak Aktif), aksi (edit dan hapus). | TMS.S008-R03 poin 1 | AMBIGU (Q-04, Q-08) |
| REQ-012 | Filter tersedia: Rute (text field), Waktu Perjalanan (text field), Sumber Data (dropdown), Status (dropdown). | TMS.S008-R03 poin 2 | AMBIGU (Q-13) |
| REQ-013 | Tombol Reset mereset filter dan data pada tabel. | TMS.S008-R03 poin 2 | TERTULIS |
| REQ-014 | Tombol Terapkan menampilkan data pada tabel sesuai filter. | TMS.S008-R03 poin 2 | TERTULIS |
| REQ-015 | Tabel tampil default 20 baris dan terdapat pagination. | TMS.S008-R03 poin 3 | TERTULIS |
| REQ-016 | Jumlah baris tabel dapat disesuaikan ke 10/20/50/100 baris data. | TMS.S008-R03 poin 3 | TERTULIS |

### SEC-03 · Perbarui Waktu Perjalanan (massal)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-017 | Tersedia button "Perbarui Waktu Perjalanan" untuk memperbarui waktu perjalanan secara bersamaan. | TMS.S008-R03 poin 4 | TERTULIS |
| REQ-018 | Saat button diklik, baris data memunculkan checkbox dan dapat dipilih 1 atau lebih untuk diperbarui. | TMS.S008-R03 poin 4 | TERTULIS |
| REQ-019 | Hanya data yang memiliki riwayat perjalanan > 5 kali yang dapat diperbarui. | TMS.S008-R03 poin 4 | AMBIGU (Q-07) |
| REQ-020 | Memperbarui mengubah waktu perjalanan sesuai nilai rata-rata terbaru per saat aksi dilakukan. | TMS.S008-R03 poin 4 | TERTULIS |
| REQ-021 | Selama aksi pembaruan, data dapat difilter. | TMS.S008-R03 poin 4 | TERTULIS |
| REQ-022 | Jika data sudah dipilih, tampil informasi jumlah data terpilih berikut detail sumber data terpilih. | TMS.S008-R03 poin 4 | AMBIGU (Q-07) |
| REQ-023 | Tombol "Batal" membatalkan aksi dan kembali ke halaman normal. | TMS.S008-R03 poin 4 | TERTULIS |
| REQ-024 | Saat akan melakukan pembaruan, muncul konfirmasi yang menampilkan jumlah data terpilih berikut jenis sumber datanya. | TMS.S008-R03 poin 4 | TERTULIS |
| REQ-025 | Tombol "Perbarui Waktu Perjalanan" memperbarui data lalu kembali ke halaman normal. | TMS.S008-R03 poin 4 | TERTULIS |

### SEC-04 · Tambah Waktu Perjalanan
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-026 | Tombol "Tambah Waktu Perjalanan" menuju halaman tambah waktu perjalanan. | TMS.S008-R04 poin 1 | TERTULIS |
| REQ-027 | Halaman tambah secara default menampilkan bagian Detail Rute dan Target Waktu Perjalanan. | TMS.S008-R04 poin 2 | TERTULIS |
| REQ-028 | Kota Asal berupa drop down dari master kota. | TMS.S008-R04 poin 2 | TERTULIS |
| REQ-029 | Kota Tujuan berupa drop down dari master kota. | TMS.S008-R04 poin 2 | TERTULIS |
| REQ-030 | Dapat menambah kota transit (drop down, kota di antara origin & destination). | TMS.S008-R04 poin 2 | AMBIGU (Q-04) |
| REQ-031 | Kota transit dapat dihapus. | TMS.S008-R04 poin 2 | TERTULIS |
| REQ-032 | Urutan kota transit dapat diubah. | TMS.S008-R04 poin 2 | TERTULIS |
| REQ-033 | Target Waktu Perjalanan memilih "Input Manual" atau "Berdasarkan Riwayat". | TMS.S008-R04 poin 2 | TERTULIS |
| REQ-034 | Saat memilih Input Manual tampil field number dengan satuan "Jam" beserta informasi contoh penggunaan data. | TMS.S008-R04 poin 2 | TERTULIS |
| REQ-035 | Saat memilih Berdasarkan Riwayat tampil informasi jumlah trip rute tersebut, rata-rata waktu perjalanan dibulatkan ke atas dalam satuan jam, dan periode data diambil. | TMS.S008-R04 poin 2 | AMBIGU (Q-05) |
| REQ-036 | Terdapat informasi penjelasan riwayat data. | TMS.S008-R04 poin 2 | TERTULIS |
| REQ-037 | Data baru yang tersimpan berstatus otomatis 'Aktif'. | TMS.S008-R04 poin 2 | TERTULIS |
| REQ-038 | Saat pindah dari Input Manual ke Berdasarkan Riwayat, isian Input Manual tidak terhapus (kembali ke Input Manual, isian masih ada). | TMS.S008-R04 poin 2 | TERTULIS |
| REQ-039 | Data yang tersimpan final adalah bagian yang terakhir dipilih (Input Manual atau Berdasarkan Riwayat). | TMS.S008-R04 poin 2 | TERTULIS |
| REQ-040 | Data waktu perjalanan dapat menambah baris input. | TMS.S008-R04 poin 3 | TERTULIS |
| REQ-041 | Baris data ("kedua data") dapat dihapus hingga minimal menyisakan 1 data. | TMS.S008-R04 poin 3 | AMBIGU (Q-06) |
| REQ-042 | Tombol Batal membatalkan proses dengan konfirmasi, lalu kembali ke halaman Master Waktu Perjalanan. | TMS.S008-R04 poin 4 | TERTULIS |
| REQ-043 | Tombol Simpan menyimpan data, kembali ke halaman Master Waktu Perjalanan, dan muncul informasi data tersimpan. | TMS.S008-R04 poin 4 | AMBIGU (Q-10) |

### SEC-05 · Edit Waktu Perjalanan
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-044 | Setiap baris data dapat diedit dan aksi edit menuju halaman edit. | TMS.S008-R05 poin 1 | TERTULIS |
| REQ-045 | Halaman edit secara default menampilkan data terpilih pada bagian Detail Rute dan Target Waktu Perjalanan. | TMS.S008-R05 poin 2 | TERTULIS |
| REQ-046 | Detail Rute pada edit: Kota Asal & Kota Tujuan (drop down dari master kota), kota transit dapat ditambah, dihapus, dan diubah urutannya. | TMS.S008-R05 poin 2 | AMBIGU (Q-04) |
| REQ-047 | Target Waktu Perjalanan pada edit: memilih form "Input Manual" (field number satuan "Jam" + contoh penggunaan) atau "Berdasarkan Riwayat" (jumlah trip, rata-rata dibulatkan ke atas dalam jam, periode data) + informasi penjelasan riwayat data. | TMS.S008-R05 poin 2 | AMBIGU (Q-05) |
| REQ-048 | Halaman edit menyediakan field Status (drop down). | TMS.S008-R05 poin 2 | AMBIGU (Q-11) |
| REQ-049 | Data dapat diedit tanpa mengubah data yang sebelumnya sudah digunakan; hanya mengubah data yang akan digunakan. | TMS.S008-R05 poin 3 | TERTULIS |
| REQ-050 | Tombol Batal membatalkan proses dengan konfirmasi, lalu kembali ke halaman Master Waktu Perjalanan. | TMS.S008-R05 poin 4 | TERTULIS |
| REQ-051 | Tombol Simpan menyimpan data, kembali ke halaman Master Waktu Perjalanan, dan muncul informasi data berhasil diubah. | TMS.S008-R05 poin 4 | AMBIGU (Q-10) |

### SEC-06 · Hapus Data
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-052 | Setiap baris tabel memiliki aksi hapus. | TMS.S008-R03 poin 1 | TERTULIS |
| REQ-053 | Data yang sudah digunakan pada order tidak dapat dihapus. | TMS.S008-R06 poin 1 | AMBIGU (Q-10) |

### SEC-07 · Konversi waktu perjalanan
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-054 | Saat data tersimpan, satuan jam di atas 23 jam terkonversi menjadi hari (contoh: 24 jam = 1 hari; 38 jam = 1 hari 14 jam). | TMS.S008-R07 (bagian "Konversi waktu perjalanan", butir ke-1) | TERTULIS |
| REQ-055 | Konversi tampil pada tabel data master dan pada informasi waktu perjalanan di Order. | TMS.S008-R07 (bagian "Konversi waktu perjalanan", butir ke-2) | TERTULIS |
| REQ-056 | Pada tabel master, satuan dapat disingkat menjadi h dan j (contoh: "1h 14j"). | TMS.S008-R07 (bagian "Konversi waktu perjalanan", butir ke-3) | AMBIGU (Q-01) |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-04, SEC-05 | Target Waktu Perjalanan — Input Manual | Field number, satuan "Jam" | Tidak dinyatakan di spec (Q-02) | TMS.S008-R04 poin 2; TMS.S008-R05 poin 2 |
| VAL-002 | SEC-04 | Baris input data waktu perjalanan | Minimal menyisakan 1 data | Tidak dinyatakan di spec | TMS.S008-R04 poin 3 |
| VAL-003 | SEC-03 | Pemilihan data pada Perbarui Waktu Perjalanan | Hanya data dengan riwayat perjalanan > 5 kali yang dapat diperbarui | Tidak dinyatakan di spec (Q-07) | TMS.S008-R03 poin 4 |
| VAL-004 | SEC-06 | Hapus data | Tidak dapat dihapus jika sudah digunakan pada order | Tidak dinyatakan di spec (Q-10) | TMS.S008-R06 poin 1 |
| VAL-005 | SEC-04, SEC-05 | Kota transit | "kota di antara origin & destination" | Tidak dinyatakan di spec (Q-04) | TMS.S008-R04 poin 2; TMS.S008-R05 poin 2 |

## 5. Acceptance Criteria (AC)
### SEC-01 · Definisi general
- **AC-001** (REQ-003, REQ-054) — **Diberikan** target waktu perjalanan diinput 48 jam **Ketika** data tersimpan **Maka** nilai tersimpan dalam jam dan ditampilkan terkonversi sesuai aturan R07 · Sumber: TMS.S008-R02 poin 2; TMS.S008-R07
- **AC-002** (REQ-006) — **Diberikan** rute belum ada di master **Ketika** waktu perjalanan diisi saat membuat order dan order disimpan **Maka** waktu perjalanan tersimpan sebagai data baru di Master Waktu Perjalanan · Sumber: TMS.S008-R02 poin 3
- **AC-003** (REQ-007, REQ-049) — **Diberikan** data waktu perjalanan sudah dipakai order **Ketika** data diedit dan disimpan **Maka** data historis yang memakai nilai lama tidak berubah; perubahan berlaku untuk penggunaan berikutnya · Sumber: TMS.S008-R02 poin 4; TMS.S008-R05 poin 3
- **AC-004** (REQ-008) — **Diberikan** data ditambah/diedit **Ketika** riwayat diperiksa **Maka** perubahan tercatat pada riwayat · Sumber: TMS.S008-R02 poin 5 (lokasi riwayat: Q-12)

### SEC-02 · Halaman Master Waktu Perjalanan
- **AC-005** (REQ-010, REQ-011) — **Diberikan** user membuka Master Operasional > Master Waktu Perjalanan **Ketika** halaman dimuat **Maka** tabel menampilkan kolom No, Rute, Waktu Perjalanan, Sumber Data, Status, aksi (edit dan hapus) · Sumber: TMS.S008-R03 poin 1
- **AC-006** (REQ-012, REQ-014) — **Diberikan** filter Rute/Waktu Perjalanan (text field) atau Sumber Data/Status (dropdown) diisi **Ketika** Terapkan diklik **Maka** tabel menampilkan data sesuai filter · Sumber: TMS.S008-R03 poin 2
- **AC-007** (REQ-013) — **Diberikan** filter terisi **Ketika** Reset diklik **Maka** filter dan data tabel tereset · Sumber: TMS.S008-R03 poin 2
- **AC-008** (REQ-015) — **Diberikan** data lebih dari 20 **Ketika** halaman dimuat **Maka** tabel menampilkan 20 baris dan pagination tersedia · Sumber: TMS.S008-R03 poin 3
- **AC-009** (REQ-016) — **Diberikan** tabel tampil **Ketika** jumlah baris diubah ke 10/20/50/100 **Maka** tabel menampilkan jumlah baris sesuai pilihan · Sumber: TMS.S008-R03 poin 3

### SEC-03 · Perbarui Waktu Perjalanan
- **AC-010** (REQ-017, REQ-018) — **Diberikan** halaman Master Waktu Perjalanan **Ketika** button "Perbarui Waktu Perjalanan" diklik **Maka** baris data memunculkan checkbox dan 1 atau lebih baris dapat dipilih · Sumber: TMS.S008-R03 poin 4
- **AC-011** (REQ-019, VAL-003) — **Diberikan** data dengan riwayat perjalanan ≤ 5 kali **Ketika** mode pembaruan aktif **Maka** data tersebut tidak dapat diperbarui · Sumber: TMS.S008-R03 poin 4 (bentuk pembatasan: Q-07)
- **AC-012** (REQ-021) — **Diberikan** mode pembaruan aktif **Ketika** filter diterapkan **Maka** data dapat difilter · Sumber: TMS.S008-R03 poin 4
- **AC-013** (REQ-022) — **Diberikan** mode pembaruan aktif **Ketika** 1 atau lebih data dipilih **Maka** tampil informasi jumlah data terpilih berikut detail sumber data terpilih · Sumber: TMS.S008-R03 poin 4
- **AC-014** (REQ-024) — **Diberikan** data terpilih **Ketika** tombol "Perbarui Waktu Perjalanan" diklik untuk memperbarui **Maka** muncul konfirmasi berisi jumlah data terpilih berikut jenis sumber datanya · Sumber: TMS.S008-R03 poin 4
- **AC-015** (REQ-020, REQ-025) — **Diberikan** konfirmasi pembaruan disetujui **Ketika** proses selesai **Maka** waktu perjalanan data terpilih berubah sesuai nilai rata-rata terbaru saat aksi dilakukan dan halaman kembali ke tampilan normal · Sumber: TMS.S008-R03 poin 4
- **AC-016** (REQ-023) — **Diberikan** mode pembaruan aktif **Ketika** tombol "Batal" diklik **Maka** aksi dibatalkan dan halaman kembali normal tanpa perubahan data · Sumber: TMS.S008-R03 poin 4

### SEC-04 · Tambah Waktu Perjalanan
- **AC-017** (REQ-026, REQ-027) — **Diberikan** halaman Master Waktu Perjalanan **Ketika** tombol "Tambah Waktu Perjalanan" diklik **Maka** halaman tambah terbuka dengan bagian Detail Rute dan Target Waktu Perjalanan · Sumber: TMS.S008-R04 poin 1–2
- **AC-018** (REQ-028, REQ-029) — **Diberikan** halaman tambah **Ketika** field Kota Asal/Kota Tujuan dibuka **Maka** pilihan berupa drop down dari master kota · Sumber: TMS.S008-R04 poin 2
- **AC-019** (REQ-030, REQ-031, REQ-032) — **Diberikan** Kota Asal & Kota Tujuan terisi **Ketika** kota transit ditambah, dihapus, atau diubah urutannya **Maka** daftar kota transit berubah sesuai aksi · Sumber: TMS.S008-R04 poin 2
- **AC-020** (REQ-034) — **Diberikan** "Input Manual" dipilih **Ketika** bagian Target Waktu Perjalanan tampil **Maka** tampil field number bersatuan "Jam" dan informasi contoh penggunaan data · Sumber: TMS.S008-R04 poin 2
- **AC-021** (REQ-035, REQ-036) — **Diberikan** "Berdasarkan Riwayat" dipilih **Ketika** bagian Target Waktu Perjalanan tampil **Maka** tampil jumlah trip rute, rata-rata waktu perjalanan dibulatkan ke atas dalam jam, periode data, dan informasi penjelasan riwayat data · Sumber: TMS.S008-R04 poin 2
- **AC-022** (REQ-038) — **Diberikan** Input Manual sudah diisi **Ketika** user pindah ke Berdasarkan Riwayat lalu kembali ke Input Manual **Maka** isian Input Manual masih ada · Sumber: TMS.S008-R04 poin 2
- **AC-023** (REQ-039) — **Diberikan** Input Manual terisi lalu user memilih Berdasarkan Riwayat sebagai pilihan terakhir **Ketika** Simpan diklik **Maka** nilai yang tersimpan berasal dari Berdasarkan Riwayat (dan sebaliknya) · Sumber: TMS.S008-R04 poin 2
- **AC-024** (REQ-040, REQ-041, VAL-002) — **Diberikan** lebih dari 1 baris input **Ketika** baris dihapus **Maka** baris terhapus dan minimal tersisa 1 data; baris terakhir tidak dapat dihapus · Sumber: TMS.S008-R04 poin 3
- **AC-025** (REQ-037, REQ-043) — **Diberikan** data valid **Ketika** Simpan diklik **Maka** data tersimpan berstatus 'Aktif', user kembali ke halaman Master Waktu Perjalanan, dan muncul informasi data tersimpan · Sumber: TMS.S008-R04 poin 2, poin 4
- **AC-026** (REQ-042) — **Diberikan** halaman tambah terisi **Ketika** Batal diklik **Maka** muncul konfirmasi; setelah dikonfirmasi user kembali ke halaman Master Waktu Perjalanan · Sumber: TMS.S008-R04 poin 4
- **AC-027** (REQ-054) — **Diberikan** Input Manual 38 jam **Ketika** data tersimpan **Maka** tabel master menampilkan 1 hari 14 jam (dapat disingkat "1h 14j") · Sumber: TMS.S008-R07

### SEC-05 · Edit Waktu Perjalanan
- **AC-028** (REQ-044, REQ-045) — **Diberikan** baris data pada tabel **Ketika** aksi edit diklik **Maka** halaman edit terbuka dengan data terpilih terisi pada Detail Rute dan Target Waktu Perjalanan · Sumber: TMS.S008-R05 poin 1–2
- **AC-029** (REQ-048) — **Diberikan** halaman edit **Ketika** field ditampilkan **Maka** tersedia field Status (drop down) · Sumber: TMS.S008-R05 poin 2
- **AC-030** (REQ-046, REQ-047) — **Diberikan** halaman edit **Ketika** user mengubah kota/kota transit atau memilih "Input Manual"/"Berdasarkan Riwayat" **Maka** field berperilaku sama seperti pada halaman tambah · Sumber: TMS.S008-R05 poin 2
- **AC-031** (REQ-051) — **Diberikan** perubahan valid **Ketika** Simpan diklik **Maka** data tersimpan, user kembali ke halaman Master Waktu Perjalanan, dan muncul informasi data berhasil diubah · Sumber: TMS.S008-R05 poin 4
- **AC-032** (REQ-050) — **Diberikan** halaman edit **Ketika** Batal diklik **Maka** muncul konfirmasi; setelah dikonfirmasi user kembali ke halaman Master Waktu Perjalanan · Sumber: TMS.S008-R05 poin 4

### SEC-06 · Hapus Data
- **AC-033** (REQ-052, REQ-053, VAL-004) — **Diberikan** data belum digunakan pada order **Ketika** aksi hapus dijalankan **Maka** data terhapus · Sumber: TMS.S008-R03 poin 1; TMS.S008-R06 poin 1
- **AC-034** (REQ-053, VAL-004) — **Diberikan** data sudah digunakan pada order **Ketika** aksi hapus dijalankan **Maka** data tidak terhapus · Sumber: TMS.S008-R06 poin 1 (pesan: Q-10)

### SEC-07 · Konversi
- **AC-035** (REQ-054) — **Diberikan** nilai 24 jam **Ketika** data tersimpan **Maka** tampil 1 hari · Sumber: TMS.S008-R07
- **AC-036** (REQ-054) — **Diberikan** nilai ≤ 23 jam **Ketika** data tersimpan **Maka** nilai tidak dikonversi ke hari · Sumber: TMS.S008-R07 ("satuan jam di atas 23 jam akan terkonversi menjadi hari")
- **AC-037** (REQ-055) — **Diberikan** order memakai rute dengan waktu perjalanan 38 jam **Ketika** informasi waktu perjalanan di Order ditampilkan **Maka** tampil hasil konversi (1 hari 14 jam) · Sumber: TMS.S008-R07

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Order FTL/LTL (S011/S013) Step 3 | Waktu perjalanan dari master tampil sebagai informasi bila rute sudah ada; bila belum ada tampil textfield wajib dan tersimpan ke master | TMS.S008-R02 poin 3/6; TMS.S011 (Waktu Perjalanan, 2 kondisi); spec-index §3 |
| Batch Order (S019) | Rule kolom Waktu Perjalanan; teks terpotong "…tersimpan di mas" | TMS.S019-R04 poin 6; spec-index §4 no.18 |
| Dashboard Operasional (S014) | Perhitungan Terlambat dibandingkan Target Waktu Perjalanan; S014-R09 menduplikasi teks konversi | TMS.S008-R02 poin 6; spec-index §4 no.28 |
| Dashboard Monitoring (S018) | Peringatan/keterlambatan berdasarkan target waktu perjalanan | TMS.S008-R01; TMS.S008-R02 poin 6 |
| Pembatasan Pajak & KIR (S025) | Dasar Perhitungan "Target Waktu Perjalanan" mengambil nilai dari data order | TMS.S025-R03 poin 5 (rujukan) |
| Pengaturan Akun (S021) | Hak akses Master Waktu Perjalanan di kategori Master Operasional | TMS.S021-R08 poin 8 |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | Format tampilan: R02 poin 2 "satuan H dan J" (huruf besar) vs R07 "dapat disingkat menjadi h dan j" (contoh "1h 14j") vs contoh "1 hari 14 jam". Format mana yang wajib di tabel master dan di Order? "dapat disingkat" = opsional? | TMS.S008-R02 poin 2; TMS.S008-R07 | REQ-004, REQ-056 | Baru |
| Q-02 | Field wajib pada form Tambah/Edit (Kota Asal, Kota Tujuan, nilai Jam) serta perilaku error/pesannya tidak dinyatakan. Apakah nilai Jam harus bilangan bulat/positif? | TMS.S008-R04 poin 2; TMS.S008-R05 poin 2 | REQ-028, REQ-029, REQ-034 | Baru |
| Q-03 | Apakah rute (Kota Asal–Kota Tujuan, termasuk transit) harus unik di master? Tidak ada validasi duplikat tertulis. | TMS.S008-R04; TMS.S008-R02 poin 3 | REQ-026–REQ-043 | Baru |
| Q-04 | Kota transit "kota di antara origin & destination": bagaimana sistem menentukan kota yang berada "di antara"? Ada batas jumlah transit? Bagaimana rute dengan transit ditampilkan pada kolom/filter "Rute"? | TMS.S008-R03 poin 1; TMS.S008-R04 poin 2; TMS.S008-R05 poin 2 | REQ-011, REQ-030, REQ-046 | Baru |
| Q-05 | "Berdasarkan Riwayat": perilaku bila rute belum memiliki riwayat trip (0 trip); apakah batas "> 5 kali" (R03 poin 4) juga berlaku saat tambah/edit; periode data diambil sejak kapan? | TMS.S008-R04 poin 2; TMS.S008-R05 poin 2 | REQ-035, REQ-047 | Baru |
| Q-06 | R04 poin 3 "kedua data bisa dihapus hingga minimal menyisakan 1 data": maksud "kedua" (baris pertama dan kedua? semua baris)? | TMS.S008-R04 poin 3 | REQ-041 | Baru |
| Q-07 | Perbarui Waktu Perjalanan: bagaimana baris dengan riwayat ≤ 5 kali ditampilkan (checkbox disable/tidak muncul)? Apa isi "detail sumber data terpilih"? Apakah Sumber Data berubah menjadi "Riwayat Data" setelah diperbarui (termasuk data Input Manual)? | TMS.S008-R03 poin 4 | REQ-019, REQ-020, REQ-022 | Baru |
| Q-08 | Label Sumber Data di tabel "Input Manual/Riwayat Data" vs pilihan form "Input Manual"/"Berdasarkan Riwayat" — apakah "Riwayat Data" = "Berdasarkan Riwayat"? | TMS.S008-R03 poin 1; TMS.S008-R04 poin 2 | REQ-011 | Baru |
| Q-09 | Data yang ditambahkan dari order (R02 poin 3): Sumber Data dan Status apa yang tercatat? | TMS.S008-R02 poin 3 | REQ-006 | Baru |
| Q-10 | Teks "informasi data tersimpan"/"data berhasil diubah", teks konfirmasi Batal, ada/tidaknya konfirmasi hapus, dan pesan saat hapus diblok tidak dicantumkan. | TMS.S008-R04 poin 4; TMS.S008-R05 poin 4; TMS.S008-R06 poin 1 | REQ-043, REQ-051, REQ-053 | Baru |
| Q-11 | Pengaruh Status Tidak Aktif: apakah data Tidak Aktif tetap dipakai sebagai informasi Order dan perhitungan keterlambatan Dashboard? | TMS.S008-R03 poin 1; TMS.S008-R05 poin 2 | REQ-048 | Baru |
| Q-12 | "Semua perubahan tercatat pada riwayat": riwayat ditampilkan di mana dan berisi apa? | TMS.S008-R02 poin 5 | REQ-008 | Baru |
| Q-13 | Filter "Waktu Perjalanan (text field)": nilai diinput dalam jam atau format hari/jam ("1h 14j")? | TMS.S008-R03 poin 2 | REQ-012 | Baru |
| Q-14 | Aktor/role pengguna menu tidak disebut di S008 (hanya hak akses Master Operasional di S021-R08 poin 8). | TMS.S008-R01–R07 | Semua | Baru |
| Q-15 | Kolom Spesifikasi Selesai/Versi kosong untuk baris rule. | TMS.S008-R02–R07 | Semua | spec-index §4 no.6 |
| Q-16 | S014-R09 menduplikasi teks konversi S008-R07 — sumber acuan tunggal? | TMS.S008-R07 | REQ-054–REQ-056 | spec-index §4 no.28 |
| Q-17 | FCL/LCL tidak memiliki input waktu perjalanan, sedangkan S018-R10 menyebut SLA "input user saat order dibuat". | TMS.S008-R02 poin 3, poin 6 | REQ-006, REQ-009 | spec-index §4 no.17 |
| Q-18 | S019-R04 poin 6 (Batch Order, kolom Waktu Perjalanan) terpotong "…tersimpan di mas". | TMS.S008-R02 poin 3 | REQ-006 | spec-index §4 no.18 |

## 9. Catatan testability (bukan requirement)
- REQ-019/REQ-020/REQ-035 membutuhkan data riwayat perjalanan (trip selesai) pada rute tertentu; jumlah > 5 kali untuk pembaruan massal.
- REQ-001/REQ-009 (peringatan & keterlambatan di Dashboard Monitoring/Operasional) diverifikasi di modul Dashboard.
- REQ-006 diverifikasi melalui alur pembuatan Order.

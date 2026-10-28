# TMS.S014 — Improve Dashboard Operasional · Analysis (REQ / VAL / AC)

> Sumber: [`dashboard-operasional_spec.md`](dashboard-operasional_spec.md) (verbatim `Spek TMS-S` baris 81–89) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.
> Catatan sumber: kolom Versi & Spesifikasi Selesai kosong untuk seluruh baris S014 (spec-index §4 no.6).

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Pendahuluan & definisi general | TMS.S014-R01, R02 | Tidak disebut di S014 | REQ-001–REQ-004 | VAL-001 | AC-001–AC-002 |
| SEC-02 | Filter | TMS.S014-R03 | Tidak disebut | REQ-005–REQ-012 | — | AC-003–AC-008 |
| SEC-03 | Ekspor | TMS.S014-R04 | Tidak disebut | REQ-013–REQ-014 | VAL-002 | AC-009 |
| SEC-04 | Laporan Bagian 1 "Volume dan Aktivitas" | TMS.S014-R05 | Tidak disebut | REQ-015–REQ-027 | VAL-001 | AC-010–AC-016 |
| SEC-05 | Laporan Bagian 2 "Produktivitas Vendor" | TMS.S014-R06 | Tidak disebut | REQ-028–REQ-035 | VAL-003, VAL-004 | AC-017–AC-021 |
| SEC-06 | Laporan Bagian 3 "Performa Pengiriman" — scorecard & Ketepatan Waktu | TMS.S014-R07 poin 1–4 | Tidak disebut | REQ-036–REQ-045 | — | AC-022–AC-027 |
| SEC-07 | Tabel "Daftar Keterlambatan Pengiriman" & Detail Keterlambatan | TMS.S014-R07 poin 5–6 | Tidak disebut | REQ-046–REQ-060 | VAL-005–VAL-007 | AC-028–AC-036 |
| SEC-08 | Perbandingan Data (utk scorecard) | TMS.S014-R08 | Tidak disebut | REQ-061–REQ-068 | — | AC-037–AC-043 |
| SEC-09 | Pembulatan Satuan Waktu | TMS.S014-R09 | Tidak disebut | REQ-069–REQ-071 | VAL-008 | AC-044 |

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Tidak disebut | S014 tidak menyebut aktor/role yang mengakses halaman. | TMS.S014-R01 |
| Sub user (lintas modul) | Dashboard → "Operasional" termasuk struktur hak akses dan "tidak memiliki Cakupan Data". Level akses 3-level tidak dinyatakan eksplisit untuk item Dashboard (lihat analysis S021). | TMS.S021-R08 poin 5 |
| Tgl Muat diset oleh Shipper | "tanggal pemuatan yang diset Shipper saat membuat order" | TMS.S014-R07 poin 6 |

## 3. Requirement (REQ)
### SEC-01 · Pendahuluan & definisi general
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Halaman adalah laporan operasional dari data historis yang menampilkan: jumlah order dan/atau armada dijalankan, jumlah vendor/subcon yang jalankan pengiriman, delivery on time, isu pengiriman, dan kinerja vendor. | TMS.S014-R01 | TERTULIS |
| REQ-002 | Order valid = ID order yang ada di sistem dengan status selain 'Dibatalkan'. | TMS.S014-R02 poin 1 | TERTULIS |
| REQ-003 | Terlambat = proses pengiriman lebih lama dari target waktu perjalanan. | TMS.S014-R02 poin 2 | TERTULIS |
| REQ-004 | Perhitungan Terlambat = Tanggal selesai bongkar − Tanggal selesai muat, dibandingkan dengan Target Waktu Perjalanan (terlambat bila selisih > target, per REQ-003). | TMS.S014-R02 poin 3 | TERTULIS (lihat Q-15) |

### SEC-02 · Filter
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-005 | Filter Periode Permintaan Muat ditampilkan dalam chips dengan pilihan: Harian, Mingguan, Bulanan, Tahunan, Custom tanggal. | TMS.S014-R03 poin 1 | TERTULIS (default terpilih tidak disebut, Q-14) |
| REQ-006 | Chip Harian = current date. | TMS.S014-R03 poin 1 | TERTULIS |
| REQ-007 | Chip Mingguan = current ISO Week (Mon-Sun). | TMS.S014-R03 poin 1 | TERTULIS |
| REQ-008 | Chip Bulanan = current month (start 1st). | TMS.S014-R03 poin 1 | TERTULIS |
| REQ-009 | Chip Tahunan = current year. | TMS.S014-R03 poin 1 | TERTULIS |
| REQ-010 | Chip Custom tanggal = bebas memilih range tanggal pada calendar. | TMS.S014-R03 poin 1 | TERTULIS |
| REQ-011 | Filter Tipe Order dalam dropdown dengan opsi FTL, LTL, FCL, LCL. | TMS.S014-R03 poin 2 | TERTULIS (single/multi & default tidak disebut, Q-14) |
| REQ-012 | Periode permintaan muat diambil dari data 'Tanggal Permintaan Muat'. | TMS.S014-R03 poin 3 | TERTULIS |

### SEC-03 · Ekspor
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-013 | Laporan dapat diekspor dalam bentuk PDF saja. | TMS.S014-R04 poin 1 | TERTULIS |
| REQ-014 | Bentuk ekspor laporan adalah visualnya. | TMS.S014-R04 poin 2 | TERTULIS |

### SEC-04 · Laporan Bagian 1 "Volume dan Aktivitas"
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-015 | Scorecard "Total Order" = jumlah order valid yang dibuat dalam periode terpilih. | TMS.S014-R05 poin 1 | AMBIGU (Q-05) |
| REQ-016 | Scorecard "Total Order" menampilkan persentase perbandingan vs periode sebelumnya (rumus SEC-08). | TMS.S014-R05 poin 1 | TERTULIS |
| REQ-017 | Line chart "Tren Volume Order" menampilkan tren volume order valid per waktu dalam periode yang dipilih. | TMS.S014-R05 poin 2 | TERTULIS |
| REQ-018 | Periode muat harian → muncul data 1 hari. | TMS.S014-R05 poin 2 | TERTULIS |
| REQ-019 | Periode muat mingguan → muncul data per hari dari Senin pada current week. | TMS.S014-R05 poin 2 | TERTULIS |
| REQ-020 | Periode muat bulanan ("peride muat bulanan") → muncul data per pekan dalam current month. | TMS.S014-R05 poin 2 | AMBIGU (Q-07) |
| REQ-021 | Periode muat tahunan → muncul data per bulan dalam current year. | TMS.S014-R05 poin 2 | TERTULIS |
| REQ-022 | Periode muat custom → menyesuaikan jumlah hari terpilih dan mengikuti aturan di atas. | TMS.S014-R05 poin 2 | AMBIGU (Q-08) |
| REQ-023 | Dimensi (sumbu X) = Periode waktu muat yang dikelompokkan; Metriks (sumbu Y) = Jumlah order valid. | TMS.S014-R05 poin 2 | TERTULIS |
| REQ-024 | Data label = "jumlah order berjalan". | TMS.S014-R05 poin 2 | AMBIGU (Q-06) |
| REQ-025 | "Saat hover pada bar, muncul data jumlah seperti di desain" (chart disebut line chart; desain tidak ada di file). | TMS.S014-R05 poin 2 | KONFLIK; REF-EKSTERNAL (Q-01) |
| REQ-026 | Donut chart "Jenis Pengiriman" menampilkan breakdown jumlah pengiriman per jenis shipment: FTL, LTL, FCL, LCL. | TMS.S014-R05 poin 3 | TERTULIS |
| REQ-027 | Semua data Bagian 1 adalah data valid — tidak termasuk yang sudah dihapus/dibatalkan (*Order valid = Order dengan status selain "Dibatalkan"). | TMS.S014-R05 poin 4 | TERTULIS (Q-13) |

### SEC-05 · Laporan Bagian 2 "Produktivitas Vendor"
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-028 | Scorecard "Total Vendor Digunakan" = jumlah vendor yang digunakan dalam periode terpilih. | TMS.S014-R06 poin 1 | TERTULIS |
| REQ-029 | Scorecard "Total Vendor Digunakan" menampilkan persentase perbandingan vs periode sebelumnya. | TMS.S014-R06 poin 1 | TERTULIS |
| REQ-030 | Scorecard "Rata-rata Trip per Vendor" = jumlah trip dibagi jumlah vendor dalam periode terpilih ("jumlah trip dilakukan tiap vendor dalam periode terpilih"), maks 2 angka di belakang koma. | TMS.S014-R06 poin 2 | TERTULIS |
| REQ-031 | Scorecard "Rata-rata Trip per Vendor" menampilkan persentase perbandingan vs periode sebelumnya. | TMS.S014-R06 poin 2 | TERTULIS |
| REQ-032 | Tabel "5 Vendor Paling Produktif" hanya menampilkan 5 baris data. | TMS.S014-R06 poin 3 | TERTULIS |
| REQ-033 | Tabel mengambil data 5 vendor dengan jumlah trip paling banyak dalam periode waktu terpilih. | TMS.S014-R06 poin 3 | TERTULIS |
| REQ-034 | Kolom tabel: "No."; "Nomor Polisi"; "Jenis Armada"; "Trip Selesai"; "Order Terkirim" (tabel vendor tetapi kolom berbasis armada). | TMS.S014-R06 poin 3 | KONFLIK (Q-02) |
| REQ-035 | Data Bagian 2 = semua data yang masuk dengan status sudah berjalan/proses ataupun sudah selesai; data dihapus/dibatalkan tidak termasuk. | TMS.S014-R06 poin 4 | TERTULIS (Q-13) |

### SEC-06 · Laporan Bagian 3 "Performa Pengiriman" — scorecard & Ketepatan Waktu
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-036 | Scorecard "Jumlah Order Tepat Waktu" = angka absolut, jumlah order selesai bongkar ≤ SLA atau target waktu perjalanan. | TMS.S014-R07 poin 1 | AMBIGU (Q-09) |
| REQ-037 | Scorecard "Jumlah Order Tepat Waktu" menampilkan persentase perbandingan vs periode sebelumnya. | TMS.S014-R07 poin 1 | TERTULIS |
| REQ-038 | Scorecard "Jumlah Order Terlambat" = angka absolut, jumlah order selesai bongkar > SLA atau target waktu perjalanan. | TMS.S014-R07 poin 2 | AMBIGU (Q-09) |
| REQ-039 | Scorecard "Jumlah Order Terlambat" menampilkan persentase perbandingan vs periode sebelumnya. | TMS.S014-R07 poin 2 | TERTULIS |
| REQ-040 | Scorecard "Jumlah Kendala Pengiriman" = jumlah kendala yang terjadi dalam periode waktu terpilih, masih berjalan maupun sudah selesai. | TMS.S014-R07 poin 3 | TERTULIS |
| REQ-041 | Scorecard "Jumlah Kendala Pengiriman" menampilkan persentase perbandingan vs periode sebelumnya. | TMS.S014-R07 poin 3 | TERTULIS |
| REQ-042 | Circular progress bar "Ketepatan Waktu" = nilai persentase order yang tepat waktu dalam periode waktu terpilih. | TMS.S014-R07 poin 4 | AMBIGU (Q-10) |
| REQ-043 | Ketepatan Waktu 0-50% → berwarna merah. | TMS.S014-R07 poin 4 | TERTULIS (Q-11) |
| REQ-044 | Ketepatan Waktu 51-75% → berwarna kuning/oren. | TMS.S014-R07 poin 4 | TERTULIS (Q-11) |
| REQ-045 | Ketepatan Waktu 76-100% → berwarna hijau. | TMS.S014-R07 poin 4 | TERTULIS (Q-11) |

### SEC-07 · Tabel "Daftar Keterlambatan Pengiriman" & Detail Keterlambatan
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-046 | Tabel "Daftar Keterlambatan Pengiriman" berkolom: No; Vendor; Keterlambatan; Persentase Keterlambatan. | TMS.S014-R07 poin 5 | AMBIGU (isi kolom Keterlambatan & Persentase Keterlambatan tidak didefinisikan, Q-12) |
| REQ-047 | Tabel memiliki search bar; keyword dapat memunculkan semua hasil dari kolom manapun. | TMS.S014-R07 poin 5 | TERTULIS |
| REQ-048 | Jika keyword dihapus, tabel langsung kembali default. | TMS.S014-R07 poin 5 | TERTULIS |
| REQ-049 | Tidak ada button enter/filter/submit; data langsung tampil setelah user mengetik keyword. | TMS.S014-R07 poin 5 | TERTULIS |
| REQ-050 | Tabel bisa di-scroll. | TMS.S014-R07 poin 5 | TERTULIS |
| REQ-051 | Default data di tabel 20, dan ada pagination. | TMS.S014-R07 poin 5 | TERTULIS |
| REQ-052 | Data yang tampil hanya vendor dengan order yang terlambat pada periode terpilih. | TMS.S014-R07 poin 5 | TERTULIS |
| REQ-053 | Perhitungan: Tanggal selesai bongkar − Tanggal selesai muat, dibandingkan dengan Target Waktu Perjalanan. | TMS.S014-R07 poin 5 | TERTULIS |
| REQ-054 | Ada aksi untuk melihat Detail Keterlambatan (right drawer). | TMS.S014-R07 poin 5 | TERTULIS |
| REQ-055 | Detail Keterlambatan menampilkan tabel keterlambatan tiap Vendor dengan kolom: No.; ID Order; Tanggal Muat; Keterangan. | TMS.S014-R07 poin 6 | TERTULIS |
| REQ-056 | ID Order = ID Order yang mengalami keterlambatan. | TMS.S014-R07 poin 6 | TERTULIS |
| REQ-057 | Tgl Muat = tanggal pemuatan yang diset Shipper saat membuat order. | TMS.S014-R07 poin 6 | TERTULIS |
| REQ-058 | Keterangan = keterangan jumlah waktu keterlambatan; jika selisih waktu melewati 23 jam, dibulatkan menjadi hari. | TMS.S014-R07 poin 6 | AMBIGU (Q-16) |
| REQ-059 | Tabel Detail Keterlambatan default 5 data, dan ada pagination. | TMS.S014-R07 poin 6 | TERTULIS |
| REQ-060 | Line Chart "Tren Keterlambatan" menampilkan tren keterlambatan dengan ketentuan sama seperti line chart "Tren Volume Order" (REQ-017–REQ-025), menggunakan data keterlambatan. | TMS.S014-R07 poin 6 | TERTULIS (mewarisi Q-01, Q-06–Q-08) |

### SEC-08 · Perbandingan Data (utk scorecard)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-061 | Periode Harian dibandingkan vs 1 hari sebelumnya. | TMS.S014-R08 poin 1 | TERTULIS |
| REQ-062 | Periode Mingguan dibandingkan vs 1 pekan sebelumnya (contoh sumber: "Week 12 2026 vs Week 13 2026"). | TMS.S014-R08 poin 1 | TERTULIS |
| REQ-063 | Periode Bulanan dibandingkan vs 1 bulan sebelumnya (contoh: "Mei 2026 vs Juni 2026"). | TMS.S014-R08 poin 1 | TERTULIS |
| REQ-064 | Periode Tahunan dibandingkan vs 1 tahun sebelumnya (contoh: "2025 vs 2026"). | TMS.S014-R08 poin 1 | TERTULIS |
| REQ-065 | Periode Custom tanggal dibandingkan vs jumlah hari sebelumnya (contoh: "21-31 Mei 2026 vs 1-10 Juni 2026"; contoh berisi 11 hari vs 10 hari). | TMS.S014-R08 poin 1 | KONFLIK (Q-17) |
| REQ-066 | Nilai perbandingan = ((Nilai baru − Nilai lama) ÷ Nilai lama) × 100%. | TMS.S014-R08 poin 2 | TERTULIS (Nilai lama = 0 tidak didefinisikan, Q-18) |
| REQ-067 | Hasil positif → nilai bertambah, berwarna hijau. | TMS.S014-R08 poin 2 | TERTULIS |
| REQ-068 | Hasil negatif → nilai berkurang, berwarna merah. | TMS.S014-R08 poin 2 | TERTULIS (hasil 0 tidak didefinisikan, Q-18) |

Rumus sesuai sumber (dikutip): `((Nilai baru - Nilai lama) ÷ Nilai lama) × 100%`. Rumus lain yang tertulis di modul ini:
- Terlambat: `Tanggal selesai bongkar - (dikurangi) Tanggal selesai muat, dibandingkan dengan Target Waktu Perjalanan` (R02 poin 3; R07 poin 5).
- Rata-rata Trip per Vendor: `jumlah trip dibagi jumlah vendor dalam periode terpilih (maks 2 angka di belakang koma)` (R06 poin 2).
- Tepat Waktu: `jumlah order selesai bongkar ≤ SLA atau target waktu perjalanan`; Terlambat: `jumlah order selesai bongkar > SLA atau target waktu perjalanan` (R07 poin 1–2).
- Warna Ketepatan Waktu: `0-50% : berwarna merah`, `51-75%: berwarna kuning/oren`, `76-100%: berwarna hijau` (R07 poin 4).

### SEC-09 · Pembulatan Satuan Waktu
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-069 | Saat data tersimpan, satuan jam di atas 23 jam terkonversi menjadi hari. Contoh: 24 jam = 1 hari; 38 jam = 1 hari 14 jam. | TMS.S014-R09 | AMBIGU (duplikasi S008-R07; spec-index §4 no.28, Q-03) |
| REQ-070 | Konversi tampil pada tabel data master, dan informasi waktu perjalanan di Order. | TMS.S014-R09 | AMBIGU (lokasi di luar dashboard; Q-03) |
| REQ-071 | Pada tabel master, satuan dapat disingkat menjadi h dan j. Contoh: "1h 14j". | TMS.S014-R09 | AMBIGU (Q-03) |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-01, SEC-04 | Data order Bagian 1 | Hanya order dengan status selain "Dibatalkan"; tidak termasuk yang sudah dihapus/dibatalkan | Tidak dihitung (pesan tidak disebut) | TMS.S014-R02 poin 1; R05 poin 4 |
| VAL-002 | SEC-03 | Format ekspor | Hanya PDF | Tidak disebut | TMS.S014-R04 poin 1 |
| VAL-003 | SEC-05 | Nilai "Rata-rata Trip per Vendor" | Maks 2 angka di belakang koma | Tidak disebut | TMS.S014-R06 poin 2 |
| VAL-004 | SEC-05 | Baris tabel "5 Vendor Paling Produktif" | Hanya 5 baris data | Tidak disebut | TMS.S014-R06 poin 3 |
| VAL-005 | SEC-07 | Search bar Daftar Keterlambatan | Pencarian pada kolom manapun; keyword kosong → default | Tidak disebut (hasil kosong tidak didefinisikan) | TMS.S014-R07 poin 5 |
| VAL-006 | SEC-07 | Data tabel Daftar Keterlambatan | Hanya vendor dengan order terlambat pada periode terpilih | Tidak disebut | TMS.S014-R07 poin 5 |
| VAL-007 | SEC-07 | Kolom Keterangan (Detail) | Selisih > 23 jam dibulatkan menjadi hari | Tidak disebut | TMS.S014-R07 poin 6 |
| VAL-008 | SEC-09 | Satuan waktu perjalanan | Jam > 23 terkonversi ke hari (24 jam = 1 hari; 38 jam = 1 hari 14 jam) | Tidak disebut | TMS.S014-R09 |

## 5. Acceptance Criteria (AC)
### SEC-01 · Pendahuluan & definisi general
- **AC-001** (REQ-002, VAL-001) — **Diberikan** order berstatus "Dibatalkan" dan order berstatus lain dalam periode terpilih **Ketika** dashboard ditampilkan **Maka** order "Dibatalkan" tidak dihitung sebagai order valid. · Sumber: TMS.S014-R02 poin 1; R05 poin 4
- **AC-002** (REQ-003, REQ-004) — **Diberikan** order dengan (Tanggal selesai bongkar − Tanggal selesai muat) lebih lama dari Target Waktu Perjalanan **Ketika** dashboard dihitung **Maka** order tersebut tergolong Terlambat. · Sumber: TMS.S014-R02 poin 2–3

### SEC-02 · Filter
- **AC-003** (REQ-005) — **Diberikan** halaman Dashboard Operasional **Ketika** user melihat filter periode **Maka** tampil chips Harian, Mingguan, Bulanan, Tahunan, Custom tanggal. · Sumber: TMS.S014-R03 poin 1
- **AC-004** (REQ-006) — **Diberikan** chip Harian dipilih **Ketika** data dimuat **Maka** data mengacu current date. · Sumber: TMS.S014-R03 poin 1
- **AC-005** (REQ-007) — **Diberikan** chip Mingguan dipilih **Ketika** data dimuat **Maka** data mengacu current ISO Week Senin–Minggu. · Sumber: TMS.S014-R03 poin 1
- **AC-006** (REQ-008, REQ-009) — **Diberikan** chip Bulanan / Tahunan dipilih **Ketika** data dimuat **Maka** data mengacu current month mulai tanggal 1 / current year. · Sumber: TMS.S014-R03 poin 1
- **AC-007** (REQ-010, REQ-012) — **Diberikan** chip Custom tanggal **Ketika** user memilih range tanggal pada calendar **Maka** data difilter berdasarkan 'Tanggal Permintaan Muat' dalam range tersebut. · Sumber: TMS.S014-R03 poin 1, 3
- **AC-008** (REQ-011) — **Diberikan** dropdown Tipe Order **Ketika** dibuka **Maka** tersedia opsi FTL, LTL, FCL, LCL dan data mengikuti tipe terpilih. · Sumber: TMS.S014-R03 poin 2

### SEC-03 · Ekspor
- **AC-009** (REQ-013, REQ-014, VAL-002) — **Diberikan** laporan tampil **Ketika** user melakukan ekspor **Maka** hasil berbentuk PDF berisi visual laporan, tanpa pilihan format lain. · Sumber: TMS.S014-R04 poin 1–2

### SEC-04 · Laporan Bagian 1
- **AC-010** (REQ-015, REQ-016) — **Diberikan** periode terpilih **Ketika** Bagian 1 tampil **Maka** scorecard "Total Order" menampilkan jumlah order valid beserta persentase perbandingan vs periode sebelumnya. · Sumber: TMS.S014-R05 poin 1
- **AC-011** (REQ-018) — **Diberikan** periode Harian **Ketika** line chart "Tren Volume Order" tampil **Maka** muncul data 1 hari. · Sumber: TMS.S014-R05 poin 2
- **AC-012** (REQ-019) — **Diberikan** periode Mingguan **Ketika** chart tampil **Maka** muncul data per hari mulai Senin pada current week. · Sumber: TMS.S014-R05 poin 2
- **AC-013** (REQ-020) — **Diberikan** periode Bulanan **Ketika** chart tampil **Maka** muncul data per pekan dalam current month. · Sumber: TMS.S014-R05 poin 2
- **AC-014** (REQ-021) — **Diberikan** periode Tahunan **Ketika** chart tampil **Maka** muncul data per bulan dalam current year. · Sumber: TMS.S014-R05 poin 2
- **AC-015** (REQ-023) — **Diberikan** chart "Tren Volume Order" **Ketika** tampil **Maka** sumbu X = periode waktu muat yang dikelompokkan dan sumbu Y = jumlah order valid. · Sumber: TMS.S014-R05 poin 2
- **AC-016** (REQ-026) — **Diberikan** periode terpilih **Ketika** donut chart "Jenis Pengiriman" tampil **Maka** menampilkan breakdown jumlah pengiriman FTL, LTL, FCL, LCL. · Sumber: TMS.S014-R05 poin 3

### SEC-05 · Laporan Bagian 2
- **AC-017** (REQ-028, REQ-029) — **Diberikan** periode terpilih **Ketika** Bagian 2 tampil **Maka** scorecard "Total Vendor Digunakan" menampilkan jumlah vendor digunakan dan persentase perbandingan vs periode sebelumnya. · Sumber: TMS.S014-R06 poin 1
- **AC-018** (REQ-030, VAL-003) — **Diberikan** jumlah trip dan jumlah vendor pada periode terpilih **Ketika** scorecard "Rata-rata Trip per Vendor" tampil **Maka** nilainya = jumlah trip ÷ jumlah vendor dengan maks 2 angka di belakang koma. · Sumber: TMS.S014-R06 poin 2
- **AC-019** (REQ-032, REQ-033, VAL-004) — **Diberikan** lebih dari 5 vendor memiliki trip pada periode terpilih **Ketika** tabel "5 Vendor Paling Produktif" tampil **Maka** hanya 5 baris vendor dengan jumlah trip terbanyak yang tampil. · Sumber: TMS.S014-R06 poin 3
- **AC-020** (REQ-034) — **Diberikan** tabel "5 Vendor Paling Produktif" **Ketika** tampil **Maka** berkolom No.; Nomor Polisi; Jenis Armada; Trip Selesai; Order Terkirim (menunggu Q-02). · Sumber: TMS.S014-R06 poin 3
- **AC-021** (REQ-035) — **Diberikan** order berjalan/proses, selesai, dan dibatalkan/dihapus **Ketika** Bagian 2 dihitung **Maka** order berjalan/proses & selesai ikut dihitung, order dihapus/dibatalkan tidak. · Sumber: TMS.S014-R06 poin 4

### SEC-06 · Laporan Bagian 3 — scorecard & Ketepatan Waktu
- **AC-022** (REQ-036, REQ-037) — **Diberikan** order selesai bongkar ≤ SLA atau target waktu perjalanan **Ketika** Bagian 3 tampil **Maka** order dihitung pada "Jumlah Order Tepat Waktu" (angka absolut) dengan persentase perbandingan. · Sumber: TMS.S014-R07 poin 1
- **AC-023** (REQ-038, REQ-039) — **Diberikan** order selesai bongkar > SLA atau target waktu perjalanan **Ketika** Bagian 3 tampil **Maka** order dihitung pada "Jumlah Order Terlambat" dengan persentase perbandingan. · Sumber: TMS.S014-R07 poin 2
- **AC-024** (REQ-040, REQ-041) — **Diberikan** kendala yang masih berjalan dan yang sudah selesai dalam periode terpilih **Ketika** Bagian 3 tampil **Maka** keduanya dihitung pada "Jumlah Kendala Pengiriman" dengan persentase perbandingan. · Sumber: TMS.S014-R07 poin 3
- **AC-025** (REQ-042, REQ-043) — **Diberikan** nilai Ketepatan Waktu pada rentang 0-50% **Ketika** circular progress bar tampil **Maka** berwarna merah. · Sumber: TMS.S014-R07 poin 4
- **AC-026** (REQ-044) — **Diberikan** nilai Ketepatan Waktu 51-75% **Ketika** tampil **Maka** berwarna kuning/oren. · Sumber: TMS.S014-R07 poin 4
- **AC-027** (REQ-045) — **Diberikan** nilai Ketepatan Waktu 76-100% **Ketika** tampil **Maka** berwarna hijau. · Sumber: TMS.S014-R07 poin 4

### SEC-07 · Daftar Keterlambatan & Detail
- **AC-028** (REQ-046, REQ-052, VAL-006) — **Diberikan** periode terpilih **Ketika** tabel "Daftar Keterlambatan Pengiriman" tampil **Maka** berkolom No; Vendor; Keterlambatan; Persentase Keterlambatan dan hanya memuat vendor dengan order terlambat pada periode tersebut. · Sumber: TMS.S014-R07 poin 5
- **AC-029** (REQ-047, REQ-049, VAL-005) — **Diberikan** tabel berisi data **Ketika** user mengetik keyword yang ada di kolom manapun **Maka** hasil langsung tampil tanpa menekan enter/filter/submit. · Sumber: TMS.S014-R07 poin 5
- **AC-030** (REQ-048, VAL-005) — **Diberikan** keyword terisi **Ketika** keyword dihapus **Maka** tabel langsung kembali default. · Sumber: TMS.S014-R07 poin 5
- **AC-031** (REQ-050, REQ-051) — **Diberikan** data lebih dari 20 **Ketika** tabel tampil **Maka** default 20 data tampil, tersedia pagination, dan tabel bisa di-scroll. · Sumber: TMS.S014-R07 poin 5
- **AC-032** (REQ-054) — **Diberikan** baris vendor pada tabel **Ketika** user memilih aksi Detail Keterlambatan **Maka** tampil right drawer Detail Keterlambatan. · Sumber: TMS.S014-R07 poin 5
- **AC-033** (REQ-055–REQ-057) — **Diberikan** drawer Detail Keterlambatan terbuka **Ketika** tabel tampil **Maka** berkolom No.; ID Order; Tanggal Muat; Keterangan, berisi ID Order yang terlambat dan tanggal pemuatan yang diset Shipper saat membuat order. · Sumber: TMS.S014-R07 poin 6
- **AC-034** (REQ-058, VAL-007) — **Diberikan** order dengan selisih keterlambatan melewati 23 jam **Ketika** Keterangan tampil **Maka** nilai dibulatkan menjadi hari (menunggu Q-16). · Sumber: TMS.S014-R07 poin 6
- **AC-035** (REQ-059) — **Diberikan** vendor dengan lebih dari 5 order terlambat **Ketika** drawer tampil **Maka** default 5 data dengan pagination. · Sumber: TMS.S014-R07 poin 6
- **AC-036** (REQ-060) — **Diberikan** drawer Detail Keterlambatan **Ketika** line chart "Tren Keterlambatan" tampil **Maka** pengelompokan waktu mengikuti ketentuan "Tren Volume Order" dengan data keterlambatan. · Sumber: TMS.S014-R07 poin 6

### SEC-08 · Perbandingan Data
- **AC-037** (REQ-061, REQ-066) — **Diberikan** periode Harian **Ketika** scorecard menghitung perbandingan **Maka** nilai dibandingkan dengan 1 hari sebelumnya memakai ((Nilai baru − Nilai lama) ÷ Nilai lama) × 100%. · Sumber: TMS.S014-R08 poin 1–2
- **AC-038** (REQ-062) — **Diberikan** periode Mingguan **Ketika** perbandingan dihitung **Maka** pembanding adalah 1 pekan sebelumnya. · Sumber: TMS.S014-R08 poin 1
- **AC-039** (REQ-063) — **Diberikan** periode Bulanan **Ketika** perbandingan dihitung **Maka** pembanding adalah 1 bulan sebelumnya. · Sumber: TMS.S014-R08 poin 1
- **AC-040** (REQ-064) — **Diberikan** periode Tahunan **Ketika** perbandingan dihitung **Maka** pembanding adalah 1 tahun sebelumnya. · Sumber: TMS.S014-R08 poin 1
- **AC-041** (REQ-065) — **Diberikan** periode Custom tanggal **Ketika** perbandingan dihitung **Maka** pembanding adalah rentang sejumlah hari sebelumnya (jumlah hari menunggu Q-17). · Sumber: TMS.S014-R08 poin 1
- **AC-042** (REQ-066, REQ-067) — **Diberikan** Nilai baru > Nilai lama (Nilai lama ≠ 0) **Ketika** scorecard tampil **Maka** persentase positif berwarna hijau. · Sumber: TMS.S014-R08 poin 2
- **AC-043** (REQ-066, REQ-068) — **Diberikan** Nilai baru < Nilai lama **Ketika** scorecard tampil **Maka** persentase negatif berwarna merah. · Sumber: TMS.S014-R08 poin 2

### SEC-09 · Pembulatan Satuan Waktu
- **AC-044** (REQ-069, REQ-071, VAL-008) — **Diberikan** waktu perjalanan 38 jam tersimpan **Ketika** tampil pada tabel master **Maka** tampil "1 hari 14 jam" / disingkat "1h 14j" (relevansi terhadap dashboard menunggu Q-03). · Sumber: TMS.S014-R09

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Order FTL/FCL/LTL-LCL (S011–S013) | Sumber data 'Tanggal Permintaan Muat', status order ('Dibatalkan'), Tgl Muat diset Shipper | TMS.S014-R03 poin 3; R02 poin 1; R07 poin 6 |
| Master Waktu Perjalanan (S008) | Target Waktu Perjalanan; teks konversi R09 identik dengan S008-R07 | TMS.S014-R02 poin 3; R09; spec-index §3 (S008-R02 poin 3/6) |
| Penugasan Tracking (S015) | Tanggal selesai muat / selesai bongkar, kendala | TMS.S014-R02 poin 3; R07 poin 3 (tidak disebut eksplisit nama modulnya) |
| Pengaturan Akun (S021) | Dashboard "Operasional" pada struktur hak akses, tanpa Cakupan Data | TMS.S021-R08 poin 5 |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | Chart "Tren Volume Order" disebut line chart tetapi hover "pada bar"; isi hover mengacu desain yang tidak ada di file. | R05 poin 2 | REQ-025, REQ-060 | §4 no.26 |
| Q-02 | Tabel "5 Vendor Paling Produktif" berkolom Nomor Polisi & Jenis Armada, bukan nama vendor — unit datanya vendor atau armada? | R06 poin 3 | REQ-034 | §4 no.27 |
| Q-03 | R09 menduplikasi S008-R07 (tabel master & Order) — apakah ada ketentuan konversi yang berlaku di dashboard? | R09 | REQ-069–REQ-071 | §4 no.28 |
| Q-04 | Versi & Spesifikasi Selesai kosong untuk seluruh S014 — status finalisasi spek? | Metadata | Semua | §4 no.6 |
| Q-05 | "Total Order" = order valid "yang dibuat dalam periode terpilih", sedangkan filter periode memakai 'Tanggal Permintaan Muat' — tanggal mana yang dipakai? | R05 poin 1; R03 poin 3 | REQ-015 | Baru |
| Q-06 | Data label line chart = "jumlah order berjalan", sedangkan sumbu Y = jumlah order valid — apakah sama? | R05 poin 2 | REQ-024 | Baru |
| Q-07 | Definisi "per pekan dalam current month" (pekan ISO atau pekan ke-n bulan; perlakuan pekan yang terpotong awal/akhir bulan). | R05 poin 2 | REQ-020 | Baru |
| Q-08 | Periode custom "menyesuaikan jumlah hari terpilih" — batas jumlah hari untuk tampilan per hari / per pekan / per bulan tidak disebut. | R05 poin 2 | REQ-022 | Baru |
| Q-09 | "SLA atau target waktu perjalanan": apakah SLA dan Target Waktu Perjalanan sama? Jika berbeda, mana yang dipakai? (R02 hanya menyebut Target Waktu Perjalanan.) | R07 poin 1–2; R02 | REQ-036, REQ-038 | Baru |
| Q-10 | Pembagi persentase "Ketepatan Waktu" tidak disebut (order valid, order selesai bongkar, atau tepat waktu + terlambat?). | R07 poin 4 | REQ-042 | Baru |
| Q-11 | Ambang warna ditulis bilangan bulat (0-50, 51-75, 76-100); warna untuk nilai desimal di antara ambang (mis. 50,5% atau 75,5%) tidak disebut. | R07 poin 4 | REQ-043–REQ-045 | Baru |
| Q-12 | Rumus kolom "Keterlambatan" dan "Persentase Keterlambatan" per vendor tidak didefinisikan (jumlah order? durasi? pembagi persentase?). | R07 poin 5 | REQ-046 | Baru |
| Q-13 | Cakupan data berbeda antar bagian: Bagian 1 "data yang valid" (status selain Dibatalkan), Bagian 2 "status sudah berjalan/proses ataupun sudah selesai"; Bagian 3 tidak punya catatan cakupan. Apakah order yang belum berjalan dihitung di Bagian 1 dan Bagian 3? | R05 poin 4; R06 poin 4; R07 | REQ-027, REQ-035, REQ-036–REQ-042 | Baru |
| Q-14 | Nilai default filter (chip periode terpilih saat pertama buka; Tipe Order single/multi-select, ada opsi semua atau tidak) tidak disebut. | R03 | REQ-005, REQ-011 | Baru |
| Q-15 | Perhitungan memakai "Tanggal" selesai bongkar/muat, sedangkan Keterangan keterlambatan dalam satuan jam — granularitas tanggal atau tanggal+jam? | R02 poin 3; R07 poin 5–6 | REQ-004, REQ-053, REQ-058 | Baru |
| Q-16 | Keterangan: "melewati 23 jam, maka dibulatkan menjadi hari" vs R09 konversi "38 jam = 1 hari 14 jam" — dibulatkan (mis. 1 hari) atau dikonversi (1 hari 14 jam)? Arah pembulatan? | R07 poin 6; R09 | REQ-058 | Baru |
| Q-17 | Contoh custom "21-31 Mei 2026 vs 1-10 Juni 2026" berisi 11 hari vs 10 hari, tidak sesuai "vs jumlah hari sebelumnya". | R08 poin 1 | REQ-065 | Baru |
| Q-18 | Hasil perbandingan bila Nilai lama = 0 (pembagian nol) dan warna bila hasil = 0% tidak didefinisikan. | R08 poin 2 | REQ-066–REQ-068 | Baru |

## 9. Catatan testability (bukan requirement)
- Verifikasi angka (Total Order, trip, tepat waktu/terlambat, kendala, perbandingan periode) membutuhkan data order historis dengan tanggal selesai muat/bongkar pada periode berjalan dan periode sebelumnya; pembentukan data tersebut melibatkan proses tracking/Driver Hub di luar dashboard.
- Isi PDF hasil ekspor perlu diperiksa sebagai file unduhan.

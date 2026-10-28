# TMS.S015 — Penugasan Tracking · Analysis (REQ / VAL / AC)

> Sumber: [`penugasan-tracking_spec.md`](penugasan-tracking_spec.md) (verbatim `Spek TMS-S` baris 91–101) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Akses | TMS.S015-R02 | Shipper, Vendor | REQ-001–REQ-003 | — | AC-001–AC-003 |
| SEC-02 | Halaman Daftar Penugasan Tracking (list, status, filter) | TMS.S015-R03, TMS.S015-R06 poin 7 | Shipper, Vendor | REQ-004–REQ-018 | — | AC-004–AC-014 |
| SEC-03 | Aksi pada Daftar Penugasan Tracking | TMS.S015-R04, TMS.S015-R06 poin 2, TMS.S015-R11 (judul) | Shipper, Vendor | REQ-019–REQ-021 | — | AC-015–AC-018 |
| SEC-04 | Tambah Penugasan — Ketentuan Umum (seluruh jenis) | TMS.S015-R05 (bagian "Ketentuan Umum") | Shipper (vendor kelolaan), Vendor | REQ-022–REQ-039 | VAL-001 | AC-019–AC-030 |
| SEC-05 | Tambah Penugasan FTL & LTL | TMS.S015-R05 (bagian "Tambah Penugasan FTL&LTL") | Shipper (vendor kelolaan), Vendor | REQ-040 | VAL-002–VAL-004 | AC-031 |
| SEC-06 | Tambah Penugasan FCL & LCL (termasuk jadwal kapal) | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") | Shipper (vendor kelolaan), Vendor | REQ-041–REQ-047 | VAL-005–VAL-012 | AC-032–AC-036 |
| SEC-07 | Tugaskan Sopir Bongkar (FCL & LCL) | TMS.S015-R06 | Shipper (vendor kelolaan), Vendor | REQ-048–REQ-055 | VAL-013–VAL-015, VAL-021 | AC-037–AC-042 |
| SEC-08 | Edit Penugasan | TMS.S015-R07 | Shipper (vendor kelolaan), Vendor | REQ-056–REQ-061 | VAL-022 | AC-043–AC-046 |
| SEC-09 | Isi Data Tracking — ketentuan umum | TMS.S015-R08 poin 1–4, poin 7 (pertama & kedua) | Shipper (vendor kelolaan), Vendor | REQ-062–REQ-070 | — | AC-047–AC-051 |
| SEC-10 | Isi Data Tracking — step FTL/LTL | TMS.S015-R08 poin 5 | Shipper (vendor kelolaan), Vendor | REQ-071–REQ-074 | VAL-016 | AC-052–AC-054 |
| SEC-11 | Isi Data Tracking — step FCL/LCL | TMS.S015-R08 poin 6 | Shipper (vendor kelolaan), Vendor | REQ-075–REQ-080 | VAL-016–VAL-018 | AC-055–AC-058 |
| SEC-12 | Isi Kendala | TMS.S015-R09 | Shipper (vendor kelolaan), Vendor | REQ-081–REQ-090 | — | AC-059–AC-063 |
| SEC-13 | Detail Penugasan Tracking | TMS.S015-R10 | Shipper, Vendor | REQ-091–REQ-099 | — | AC-064–AC-069 |
| SEC-14 | Alihkan Armada (FTL & LTL) | TMS.S015-R11 | Shipper (vendor kelolaan), Vendor | REQ-100–REQ-110 | VAL-019–VAL-020 | AC-070–AC-076 |

Catatan aktor: "Shipper (vendor kelolaan)" = shipper hanya untuk order yang ditujukan ke vendor yang dikelola shipper (admin), sesuai TMS.S015-R02 poin 1. Rule SEC-04 s.d. SEC-14 tidak menyebut aktor secara eksplisit.

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Shipper — ada vendor yang dikelola shipper (admin) | Menu penugasan dapat dijalankan shipper saat penugasan ke vendor yang dihandle; "hak akses penuh pada penugasan tracking" untuk order vendor tersebut (contoh vendor JNE) | TMS.S015-R02 poin 1 butir 1–2 |
| Shipper — tidak ada vendor yang dikelola shipper (admin) | "hanya lihat pada menu penugasan tracking" | TMS.S015-R02 poin 1 butir 3 |
| Vendor | "memiliki akses penuh pada penugasan tracking" (di akun vendor) | TMS.S015-R02 poin 2 |
| Sopir (Driver Hub) | Menerima penugasan bila Mode Penugasan "Tugaskan ke Sopir"; FCL/LCL hanya tahap muat, tahap bongkar setelah "Tugaskan Sopir Bongkar" | TMS.S015-R05 (Ketentuan Umum) poin 8, poin 10 |
| Pengurus | Mengelola penugasan melalui web (kedua mode) | TMS.S015-R05 (Ketentuan Umum) poin 8 |

## 3. Requirement (REQ)
### SEC-01 · Akses
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Jika ada vendor yang dikelola oleh shipper (admin), menu penugasan tracking dapat dijalankan oleh shipper untuk order yang ditujukan ke vendor tersebut, dengan hak akses penuh pada penugasan tracking order vendor tersebut. | TMS.S015-R02 poin 1 butir 1–2 | TERTULIS (lihat Q-01) |
| REQ-002 | Jika tidak ada vendor yang dikelola shipper (admin), akses shipper hanya lihat pada menu penugasan tracking. | TMS.S015-R02 poin 1 butir 3 | TERTULIS |
| REQ-003 | Di akun vendor, vendor memiliki akses penuh pada penugasan tracking. | TMS.S015-R02 poin 2 | TERTULIS |

### SEC-02 · Halaman Daftar Penugasan Tracking
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-004 | Default data yang tampil 20 data per halaman, tersedia pagination. | TMS.S015-R03 poin 1 | TERTULIS |
| REQ-005 | Urutan list default berdasarkan data yang paling baru ditambahkan. | TMS.S015-R03 poin 2 | TERTULIS |
| REQ-006 | Kolom "Sopir" dapat menampilkan lebih dari 1 nama (badge "+1") apabila penugasan memiliki lebih dari 1 sopir (misal sopir muat & sopir bongkar berbeda pada FCL/LCL). | TMS.S015-R03 poin 3 | TERTULIS |
| REQ-007 | Hover pada badge menampilkan detail "Sopir Asal" dan "Sopir Tujuan". | TMS.S015-R03 poin 4 (tertulis menyambung di poin 3) | TERTULIS |
| REQ-008 | Ikon kendala tampil pada kolom Status saat penugasan memiliki kendala yang dilaporkan, dengan tooltip "Terdapat Kendala". | TMS.S015-R03 poin 5 | TERTULIS |
| REQ-009 | Ikon alert "Siap tugaskan sopir bongkar" tampil pada kolom Status saat penugasan FCL/LCL sudah mencapai step "Kapal Berlayar" namun belum ditugaskan sopir/armada bongkar. | TMS.S015-R03 poin 6; TMS.S015-R06 poin 7 | TERTULIS (lihat Q-10) |
| REQ-010 | Untuk FTL/LTL, step "Kapal Berlayar" dan "Kapal Sandar" tidak berlaku (dilewati); urutan status: Belum Berangkat → Berangkat Muat → Selesai Muat → Berangkat Bongkar → Pengiriman Selesai. | TMS.S015-R03 poin 7 butir 1 | TERTULIS |
| REQ-011 | Untuk FCL/LCL, seluruh step berlaku: Belum Berangkat → Berangkat Muat → Selesai Muat → Kapal Berlayar → Kapal Sandar → Berangkat Bongkar → Pengiriman Selesai. | TMS.S015-R03 poin 7 butir 2 | TERTULIS |
| REQ-012 | Status "Pengiriman Selesai" digunakan sebagai label step terakhir (menggantikan istilah "Selesai Bongkar" pada proses input di Isi Data Tracking). | TMS.S015-R03 poin 7 butir 3 | TERTULIS (lihat Q-02) |
| REQ-013 | "Dialihkan" adalah status override yang menggantikan status manapun saat armada dialihkan. | TMS.S015-R03 poin 7 butir 4 | TERTULIS |
| REQ-014 | Dropdown filter "Status" menggunakan daftar value yang sama dengan definisi kolom Status. | TMS.S015-R03 poin 7 butir 5 | AMBIGU (Q-12) |
| REQ-015 | Field filter: ID Order, Kota Asal, Kota Tujuan, Jenis Shipment, No. Polisi/No. Kontainer, Nama Sopir, Tanggal Mulai Tracking, Status. | TMS.S015-R03 poin 8 butir 1 | TERTULIS |
| REQ-016 | Secara default seluruh field filter kosong. | TMS.S015-R03 poin 8 butir 2 | TERTULIS |
| REQ-017 | Button "Terapkan" menampilkan data sesuai filter. | TMS.S015-R03 poin 8 butir 3 | TERTULIS |
| REQ-018 | Button "Reset" mengosongkan filter & mengembalikan ke kondisi default. | TMS.S015-R03 poin 8 butir 3 | TERTULIS |

### SEC-03 · Aksi pada Daftar Penugasan Tracking
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-019 | Menu titik tiga per baris menyediakan aksi: "Detail Penugasan", "Edit Penugasan", "Isi Data Tracking", "Isi Kendala", "Alihkan Armada", "Tugaskan Sopir Bongkar", "Riwayat Perubahan". | TMS.S015-R04 poin 1 | TERTULIS (perilaku "Riwayat Perubahan" tidak dirinci — Q-03) |
| REQ-020 | "Alihkan Armada" hanya tersedia untuk jenis pengiriman FTL & LTL. | TMS.S015-R04 poin 2 butir 1; TMS.S015-R11 (judul "khusus FTL & LTL") | TERTULIS |
| REQ-021 | "Tugaskan Sopir Bongkar" hanya tersedia untuk jenis pengiriman FCL & LCL yang membutuhkan penugasan armada pada step bongkar (Metode Pengiriman Door to Door atau CY to Door). | TMS.S015-R04 poin 2 butir 2; TMS.S015-R06 poin 2 | TERTULIS |

### SEC-04 · Tambah Penugasan — Ketentuan Umum
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-022 | Pada list "Pilih Order", hanya tampil order yang belum dilakukan penugasan. | TMS.S015-R05 (bagian "Ketentuan Umum") poin 1 | TERTULIS |
| REQ-023 | Setelah memilih order, Kota Asal, Kota Tujuan, Jenis Armada/Kontainer, dan Jumlah Armada/Kontainer otomatis terdraft dari data order (read-only). | TMS.S015-R05 (bagian "Ketentuan Umum") poin 2 | TERTULIS |
| REQ-024 | Kota Asal & Kota Tujuan hasil draft menyertakan prefix "Kota" atau "Kab." (contoh card order "Surabaya - Semarang" → Kota Asal "Kota Surabaya", Kota Tujuan "Kota Semarang"). | TMS.S015-R05 (bagian "Ketentuan Umum") poin 3 | TERTULIS |
| REQ-025 | Jumlah card input Armada/Kontainer (misal "Armada 1", "Kontainer 1", dst.) mengikuti Jumlah Armada/Kontainer pada order yang dipilih. | TMS.S015-R05 (bagian "Ketentuan Umum") poin 4 | TERTULIS |
| REQ-026 | Untuk jenis LTL & LCL selalu 1 card. | TMS.S015-R05 (bagian "Ketentuan Umum") poin 5 | TERTULIS |
| REQ-027 | Field No. Polisi/Jenis Armada dan Sopir memiliki 2 metode pengisian per card: "Pilih Dari Master" (dropdown dari data master) dan "Isi Data Manual" (text field). | TMS.S015-R05 (bagian "Ketentuan Umum") poin 6 | TERTULIS |
| REQ-028 | Untuk Sopir manual, field No. WhatsApp bersifat opsional (tidak wajib). | TMS.S015-R05 (bagian "Ketentuan Umum") poin 6 | TERTULIS |
| REQ-029 | Saat memilih armada dari master, seluruh jenis armada ditampilkan sebagai pilihan (tidak difilter jenis tertentu). | TMS.S015-R05 (bagian "Ketentuan Umum") poin 7 | TERTULIS |
| REQ-030 | Mode Penugasan "Tugaskan ke Sopir": penugasan tampil di aplikasi Driver Hub dan tetap dapat dikelola pengurus melalui web. | TMS.S015-R05 (bagian "Ketentuan Umum") poin 8 | TERTULIS |
| REQ-031 | Mode Penugasan "Tugaskan ke Pengurus": penugasan hanya dapat dikelola melalui web oleh pengurus, tidak tampil pada aplikasi Driver Hub. | TMS.S015-R05 (bagian "Ketentuan Umum") poin 8 | TERTULIS |
| REQ-032 | Opsi "Tugaskan ke Sopir" menjadi disable hanya jika field Sopir diisi manual. | TMS.S015-R05 (bagian "Ketentuan Umum") poin 9 butir 1 | TERTULIS |
| REQ-033 | Jika Armada diisi manual namun Sopir dipilih dari master, opsi "Tugaskan ke Sopir" tetap dapat dipilih. | TMS.S015-R05 (bagian "Ketentuan Umum") poin 9 butir 2 | TERTULIS |
| REQ-034 | "Tugaskan ke Pengurus" selalu tersedia terlepas dari kondisi manual/master. | TMS.S015-R05 (bagian "Ketentuan Umum") poin 9 butir 3 | TERTULIS |
| REQ-035 | Untuk FCL & LCL yang ditugaskan ke sopir, sopir hanya dapat mengelola tahap "Berangkat Muat" dan "Selesai Muat" melalui Driver Hub. | TMS.S015-R05 (bagian "Ketentuan Umum") poin 10 | TERTULIS |
| REQ-036 | Untuk FCL & LCL, penugasan sopir bongkar dilakukan terpisah melalui menu "Tugaskan Sopir Bongkar"; setelah itu sopir dapat mengelola tahap "Berangkat Bongkar" dan "Selesai Bongkar". | TMS.S015-R05 (bagian "Ketentuan Umum") poin 10 | TERTULIS |
| REQ-037 | Jika field required tidak diisi: tampil helper error & border field berubah warna error. | TMS.S015-R05 (bagian "Ketentuan Umum") poin 11 | TERTULIS |
| REQ-038 | Button Batal membatalkan proses dan menampilkan alert konfirmasi. | TMS.S015-R05 (bagian "Ketentuan Umum") poin 12 | TERTULIS |
| REQ-039 | Button Simpan menyimpan data penugasan. | TMS.S015-R05 (bagian "Ketentuan Umum") poin 12 | TERTULIS |

### SEC-05 · Tambah Penugasan FTL & LTL
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-040 | Field required saat tambah penugasan FTL&LTL: No. Polisi (pilih master/manual), Sopir (pilih master/manual), Mode Penugasan. | TMS.S015-R05 (bagian "Tambah Penugasan FTL&LTL") poin 1 | TERTULIS |

### SEC-06 · Tambah Penugasan FCL & LCL
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-041 | Field required saat tambah penugasan FCL&LCL: No. Kontainer, No. Segel, Armada Muat (Nopol) (pilih master/manual), Sopir Muat (pilih master/manual), Mode Penugasan, Pilih jadwal kapal. | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 1 | TERTULIS |
| REQ-042 | Jadwal kapal bukan per-kontainer. | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 2 butir 1 | TERTULIS |
| REQ-043 | Jenis Jadwal Kapal wajib dipilih salah satu: Direct atau Connecting. | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 2 butir 2 | TERTULIS |
| REQ-044 | Jenis Direct: tidak dapat menambahkan baris data kapal connecting. | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 2 butir 3 | TERTULIS |
| REQ-045 | Jenis Connecting: dapat menambahkan baris data kapal connecting. | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 2 butir 4 | TERTULIS |
| REQ-046 | Pada Connecting, ETD Connecting tidak boleh melebihi ETA kapal utama. | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 2 butir 4 | TERTULIS (perilaku bila dilanggar tidak disebut — Q-13) |
| REQ-047 | Field "Data Kapal Connecting" muncul saat pilih Connecting, dapat lebih dari 1 baris (kalimat sumber tidak selesai). | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 2 butir 5 | TERPOTONG (Q-05) |

### SEC-07 · Tugaskan Sopir Bongkar
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-048 | Aksi "Tugaskan Sopir Bongkar" digunakan untuk menugaskan sopir/armada untuk step "Berangkat Bongkar" dan "Selesai Bongkar". | TMS.S015-R06 poin 1 | TERTULIS |
| REQ-049 | Data No. Kontainer, No. Segel, dan Mode Penugasan dari proses Tambah Penugasan ditampilkan read-only (tidak dapat diubah di sini). | TMS.S015-R06 poin 3 | TERTULIS |
| REQ-050 | Field Tanggal Permintaan Bongkar wajib diisi. | TMS.S015-R06 poin 4 | TERTULIS |
| REQ-051 | Field Armada Bongkar wajib, pilih master/manual. | TMS.S015-R06 poin 4 | TERTULIS |
| REQ-052 | Field Sopir Bongkar wajib, pilih master/manual. | TMS.S015-R06 poin 4 | TERTULIS |
| REQ-053 | Aksi "Tugaskan Sopir Bongkar" juga berfungsi sebagai aksi edit penugasan sopir bongkar. | TMS.S015-R06 poin 5 | TERTULIS |
| REQ-054 | Edit penugasan sopir bongkar hanya dapat dilakukan sampai status "Berangkat Bongkar"; setelah step tersebut ter-update, edit tidak dapat dilakukan lagi. | TMS.S015-R06 poin 5 | TERTULIS |
| REQ-055 | Selama pengiriman membutuhkan armada bongkar namun belum ditugaskan sopir/armada bongkar, "Isi Data Tracking" pada step Berangkat bongkar tidak dapat dilakukan. | TMS.S015-R06 poin 6 | TERTULIS |

### SEC-08 · Edit Penugasan
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-056 | Dapat mengedit seluruh data penugasan tracking. | TMS.S015-R07 poin 1 | TERTULIS |
| REQ-057 | Edit hanya dapat dilakukan selama status tracking masih "Belum Berangkat". | TMS.S015-R07 poin 2 | TERTULIS |
| REQ-058 | Setelah tidak dapat diedit, aksi "Edit Penugasan" tetap tampil pada menu aksi; saat diklik menampilkan pop up informasi bahwa proses edit tidak dapat dilakukan karena sudah masuk proses pengiriman. | TMS.S015-R07 poin 3 | TERTULIS (copy pop up tidak dikutip — Q-13) |
| REQ-059 | Tampilan Edit berupa halaman penuh, sama dengan tampilan Tambah Penugasan. | TMS.S015-R07 poin 4 | TERTULIS |
| REQ-060 | Button Batal menampilkan alert konfirmasi. | TMS.S015-R07 poin 5 | TERTULIS |
| REQ-061 | Button Simpan menyimpan perubahan. | TMS.S015-R07 poin 5 | TERTULIS |

### SEC-09 · Isi Data Tracking — ketentuan umum
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-062 | Step pengisian memilih alamat muat/bongkar hanya pada step Berangkat Muat & Berangkat Bongkar (untuk kebutuhan multipickup/multidrop). | TMS.S015-R08 poin 1 butir 1 | TERTULIS |
| REQ-063 | Step pengisian "Upload foto (wajib)". | TMS.S015-R08 poin 1 butir 2 | AMBIGU (Q-06) |
| REQ-064 | Step pengisian "Isi keterangan (tidak wajib)". | TMS.S015-R08 poin 1 butir 3 | TERTULIS |
| REQ-065 | Alamat yang sudah pernah dipilih tidak tampil lagi pada pilihan alamat berikutnya. | TMS.S015-R08 poin 2 | TERTULIS |
| REQ-066 | Pengisian data tracking tidak dibedakan menjadi card per kota, dibagi per tahapan tracking saja. | TMS.S015-R08 poin 3 | TERTULIS |
| REQ-067 | Status awal seluruh penugasan tracking adalah "Belum Berangkat". | TMS.S015-R08 poin 4 | TERTULIS |
| REQ-068 | Jika memiliki data sopir, data sopir ditampilkan; jika tidak, dihilangkan. | TMS.S015-R08 poin 7 (pertama) | TERTULIS |
| REQ-069 | Button Batal menampilkan alert konfirmasi. | TMS.S015-R08 poin 7 (kedua) | TERTULIS |
| REQ-070 | Button Simpan menyimpan data dan menampilkan alert berhasil update tracking. | TMS.S015-R08 poin 7 (kedua) | TERTULIS (copy alert tidak dikutip — Q-13) |

### SEC-10 · Isi Data Tracking — step FTL/LTL
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-071 | Step Berangkat Muat (FTL/LTL): Pilih alamat (Kondisi: Multipickup), tampil text info (sopir, wa sopir, nopol). | TMS.S015-R08 poin 5 butir 1 | TERTULIS (lihat Q-06, Q-07) |
| REQ-072 | Step Selesai Muat (FTL/LTL): Foto (Required), Keterangan (Opsional), tampil text info (alamat, sopir, wa sopir, nopol). | TMS.S015-R08 poin 5 butir 2 | TERTULIS |
| REQ-073 | Step Berangkat Bongkar (FTL/LTL): Pilih alamat (Kondisi: Multidrop), Foto (Required), Keterangan (Opsional), tampil text info (sopir, wa sopir, nopol). | TMS.S015-R08 poin 5 butir 3 | TERTULIS |
| REQ-074 | Step Selesai Bongkar (FTL/LTL): Foto (Required), Keterangan (Opsional), tampil text info (alamat, sopir, wa sopir, nopol). | TMS.S015-R08 poin 5 butir 4 | TERTULIS |

### SEC-11 · Isi Data Tracking — step FCL/LCL
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-075 | Step Berangkat Muat (FCL/LCL): tampil text info (no kontainer, no segel, sopir, wa sopir, nopol), Pilih alamat (Kondisi: Multipickup), dengan catatan "*[LTL tidak bisa pilih alamat]". | TMS.S015-R08 poin 6 butir 1 | AMBIGU (Q-07) |
| REQ-076 | Step Selesai Muat (FCL/LCL): tampil text info (alamat, no kontainer, no segel, sopir, wa sopir, nopol), Foto (Required), Keterangan (Opsional). | TMS.S015-R08 poin 6 butir 2 | TERTULIS |
| REQ-077 | Step Kapal Berlayar: tampil field info kapal utama (bisa diubah), voyage (bisa diubah), field input Tanggal Kapal Layar (Required), Foto (Opsional), Keterangan (Opsional). | TMS.S015-R08 poin 6 (bagian "Kapal Berlayar") | TERTULIS |
| REQ-078 | Step Kapal Sandar: tampil field info kapal utama (disable) / connecting terakhir (bisa diubah), voyage kapal utama (disable) / voyage connecting terakhir (bisa diubah), field input Tanggal Kapal Sandar (Required), Foto (Opsional), Keterangan (Opsional). | TMS.S015-R08 poin 6 (bagian "Kapal Sandar") | AMBIGU (Q-08) |
| REQ-079 | Step Berangkat Bongkar (FCL/LCL): tampil text info (no kontainer, no segel, sopir, wa sopir, nopol), Pilih alamat (Kondisi: Multipickup), dengan catatan "*[LTL tidak bisa pilih alamat]". | TMS.S015-R08 poin 6 (bagian "Berangkat Bongkar") | AMBIGU (Q-07) |
| REQ-080 | Step Selesai Bongkar (FCL/LCL): tampil text info (alamat, no kontainer, no segel, sopir, wa sopir, nopol), Foto (Required), Keterangan (Opsional). | TMS.S015-R08 poin 6 (bagian "Selesai Bongkar") | TERTULIS |

### SEC-12 · Isi Kendala
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-081 | Step pengisian: Input foto (tidak wajib). | TMS.S015-R09 poin 1 | TERTULIS |
| REQ-082 | Step pengisian: Input keterangan (status wajib/tidak tidak disebut). | TMS.S015-R09 poin 1 | AMBIGU (Q-09) |
| REQ-083 | Halaman menampilkan Card Detail Data Order dan Card Pengisian Data Tracking berjudul "Kendala". | TMS.S015-R09 poin 2 | TERTULIS |
| REQ-084 | Card Detail Armada/Kontainer tampil dengan default tertutup. | TMS.S015-R09 poin 2 | TERTULIS |
| REQ-085 | Card History Tracking tampil dengan default tertutup dan hanya dapat melihat detail. | TMS.S015-R09 poin 2 | TERTULIS |
| REQ-086 | Card Detail Armada/Kontainer FTL/LTL: No. Polisi, Nama Sopir, No. WhatsApp Sopir, Jenis Armada. | TMS.S015-R09 poin 3 | TERTULIS |
| REQ-087 | Card Detail Armada/Kontainer FCL/LCL: No. Polisi, Nama Sopir, No. WhatsApp Sopir, Jenis Armada (masing-masing jika menggunakan armada), Jenis Kontainer, No. Kontainer, No. Segel. | TMS.S015-R09 poin 3 | TERTULIS |
| REQ-088 | Kendala melekat pada step tracking yang sedang berjalan; status tracking tetap menampilkan step berjalan disertai ikon kendala. | TMS.S015-R09 poin 4 | TERTULIS |
| REQ-089 | Button Batal menampilkan alert konfirmasi. | TMS.S015-R09 poin 5 | TERTULIS |
| REQ-090 | Button Simpan menyimpan data dan menampilkan alert berhasil. | TMS.S015-R09 poin 5 | TERTULIS (copy alert tidak dikutip — Q-13) |

### SEC-13 · Detail Penugasan Tracking
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-091 | Dari detail dapat: lihat detail data penugasan, edit tracking tiap step, lihat detail tracking tiap step. | TMS.S015-R10 poin 1 | TERTULIS |
| REQ-092 | Data yang tampil: Card Detail Data Order, Card Informasi Penugasan, Card History Tracking. | TMS.S015-R10 poin 2 | TERTULIS |
| REQ-093 | Untuk FCL/LCL, Card Informasi Penugasan terpisah menjadi "Informasi Penugasan Muat" dan "Informasi Penugasan Bongkar". | TMS.S015-R10 poin 3 | TERTULIS |
| REQ-094 | Untuk FTL/LTL, tetap 1 card "Informasi Penugasan" (tidak dipisah Muat/Bongkar). | TMS.S015-R10 poin 3 | TERTULIS |
| REQ-095 | Card History Tracking tampil per step tracking; step yang tampil menyesuaikan tracking yang ada pada order tersebut. | TMS.S015-R10 poin 4 butir 1–2 | TERTULIS |
| REQ-096 | Setiap step menampilkan Nopol/No. Kontainer dan waktu update tracking format DD/MM/YYYY hh:mm. | TMS.S015-R10 poin 4 butir 3 | TERTULIS |
| REQ-097 | Terdapat text link "Detail" dan "Edit" pada tiap step. | TMS.S015-R10 poin 4 butir 4 | TERTULIS |
| REQ-098 | "Detail" menampilkan pop up berisi data step terpilih; data yang tidak terisi ditampilkan strip (-). | TMS.S015-R10 poin 5 butir 1 | TERTULIS |
| REQ-099 | "Edit" menampilkan pop up untuk mengedit data step tersebut; data ter-draft sesuai inputan sebelumnya. | TMS.S015-R10 poin 5 butir 2 | TERTULIS |

### SEC-14 · Alihkan Armada (khusus FTL & LTL)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-100 | Data yang tampil: Card Detail Order, Card Total Berat (total berat keseluruhan order yang dibawa), Card Total Kubikasi (total volume keseluruhan order yang dibawa), Card Detail Armada Saat Ini, Card Armada Pengganti. | TMS.S015-R11 poin 1 | TERTULIS |
| REQ-101 | Section Armada Pengganti secara default hanya menampilkan field Jenis Armada, Jumlah Armada, Berat Maks., Kubikasi Maks. | TMS.S015-R11 poin 2 | TERTULIS |
| REQ-102 | Section detail Armada 1 dst. muncul setelah field Jumlah Armada diisi. | TMS.S015-R11 poin 2 | TERTULIS |
| REQ-103 | Armada dan Sopir wajib dipilih. | TMS.S015-R11 poin 3 | AMBIGU (Q-11) |
| REQ-104 | Hasil pengalihan menghasilkan data baru pada list Penugasan Tracking dengan ID Order yang sama. | TMS.S015-R11 poin 4 | TERTULIS |
| REQ-105 | Step tracking pada data baru melanjutkan dari step armada sebelumnya (tidak mulai dari awal), menyesuaikan titik muat/bongkar. | TMS.S015-R11 poin 5 | TERTULIS |
| REQ-106 | Tracking mengikat setiap titik muat/bongkar: armada pengganti mengisi kembali step yang sedang berjalan untuk titik yang sama (contoh: Armada A sudah berangkat bongkar ke gudang jkt, dialihkan → armada B mengisi kembali berangkat bongkar untuk ke gudang jkt). | TMS.S015-R11 poin 8 | TERTULIS |
| REQ-107 | Pada detail penugasan, armada lama memiliki penanda telah dialihkan ke armada apa saja. | TMS.S015-R11 poin 6 | TERTULIS |
| REQ-108 | Pada detail penugasan, armada hasil pengalihan memiliki penanda hasil pengalihan dari armada apa. | TMS.S015-R11 poin 7 | TERTULIS |
| REQ-109 | History Tracking pada detail penugasan data baru hanya berisi segment lanjutan armada pengganti; history armada sebelumnya tidak ditampilkan pada data baru. | TMS.S015-R11 poin 9 | TERTULIS |
| REQ-110 | History tracking pada detail order menggabungkan data armada lama & baru. | TMS.S015-R11 poin 9 | TERTULIS |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-04 | Seluruh field required form Tambah Penugasan | Wajib diisi | "tampilkan helper error & border field berubah warna error" (teks helper tidak disebut) | TMS.S015-R05 (bagian "Ketentuan Umum") poin 11 |
| VAL-002 | SEC-05 | No. Polisi (pilih master/manual) | Required | Mengikuti VAL-001 | TMS.S015-R05 (bagian "Tambah Penugasan FTL&LTL") poin 1 |
| VAL-003 | SEC-05 | Sopir (pilih master/manual) | Required; untuk Sopir manual No. WhatsApp opsional | Mengikuti VAL-001 | TMS.S015-R05 (bagian "Tambah Penugasan FTL&LTL") poin 1; (bagian "Ketentuan Umum") poin 6 |
| VAL-004 | SEC-05 | Mode Penugasan | Required | Mengikuti VAL-001 | TMS.S015-R05 (bagian "Tambah Penugasan FTL&LTL") poin 1 |
| VAL-005 | SEC-06 | No. Kontainer | Required | Mengikuti VAL-001 | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 1 |
| VAL-006 | SEC-06 | No. Segel | Required | Mengikuti VAL-001 | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 1 |
| VAL-007 | SEC-06 | Armada Muat (Nopol) (pilih master/manual) | Required | Mengikuti VAL-001 | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 1 |
| VAL-008 | SEC-06 | Sopir Muat (pilih master/manual) | Required | Mengikuti VAL-001 | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 1 |
| VAL-009 | SEC-06 | Mode Penugasan | Required | Mengikuti VAL-001 | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 1 |
| VAL-010 | SEC-06 | Pilih jadwal kapal | Required | Mengikuti VAL-001 | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 1 |
| VAL-011 | SEC-06 | Jenis Jadwal Kapal | Wajib, pilih salah satu: Direct atau Connecting | Mengikuti VAL-001 | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 2 butir 2 |
| VAL-012 | SEC-06 | ETD Connecting | Tidak boleh melebihi ETA kapal utama | Tidak disebut (Q-13) | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 2 butir 4 |
| VAL-013 | SEC-07 | Tanggal Permintaan Bongkar | Wajib | Tidak disebut di R06 (Q-13) | TMS.S015-R06 poin 4 |
| VAL-014 | SEC-07 | Armada Bongkar (pilih master/manual) | Wajib | Tidak disebut di R06 (Q-13) | TMS.S015-R06 poin 4 |
| VAL-015 | SEC-07 | Sopir Bongkar (pilih master/manual) | Wajib | Tidak disebut di R06 (Q-13) | TMS.S015-R06 poin 4 |
| VAL-016 | SEC-10, SEC-11 | Foto pada step Selesai Muat, Berangkat Bongkar (FTL/LTL), Selesai Bongkar | Required | Tidak disebut (Q-13) | TMS.S015-R08 poin 5, poin 6 |
| VAL-017 | SEC-11 | Tanggal Kapal Layar | Required | Tidak disebut (Q-13) | TMS.S015-R08 poin 6 (bagian "Kapal Berlayar") |
| VAL-018 | SEC-11 | Tanggal Kapal Sandar | Required | Tidak disebut (Q-13) | TMS.S015-R08 poin 6 (bagian "Kapal Sandar") |
| VAL-019 | SEC-14 | Armada (Armada Pengganti) | Wajib dipilih | Tidak disebut (Q-11) | TMS.S015-R11 poin 3 |
| VAL-020 | SEC-14 | Sopir (Armada Pengganti) | Wajib dipilih | Tidak disebut (Q-11) | TMS.S015-R11 poin 3 |
| VAL-021 | SEC-07 | Isi Data Tracking step Berangkat bongkar (FCL/LCL yang butuh armada bongkar) | Sopir/armada bongkar harus sudah ditugaskan | "tidak dapat dilakukan" (bentuk UI tidak disebut) | TMS.S015-R06 poin 6 |
| VAL-022 | SEC-08 | Aksi Edit Penugasan | Status tracking harus "Belum Berangkat" | Pop up informasi bahwa proses edit tidak dapat dilakukan karena sudah masuk proses pengiriman (copy tidak dikutip) | TMS.S015-R07 poin 2–3 |

## 5. Acceptance Criteria (AC)
### SEC-01 · Akses
- **AC-001** (REQ-001) — **Diberikan** shipper memiliki vendor yang dikelola shipper (admin) **Ketika** membuka penugasan tracking untuk order yang ditujukan ke vendor tersebut **Maka** shipper dapat menjalankan menu penugasan (hak akses penuh) · Sumber: TMS.S015-R02 poin 1 butir 1–2
- **AC-002** (REQ-002) — **Diberikan** shipper tidak memiliki vendor yang dikelola shipper (admin) **Ketika** membuka menu penugasan tracking **Maka** akses shipper hanya lihat · Sumber: TMS.S015-R02 poin 1 butir 3
- **AC-003** (REQ-003) — **Diberikan** user login di akun vendor **Ketika** membuka penugasan tracking **Maka** vendor memiliki akses penuh · Sumber: TMS.S015-R02 poin 2

### SEC-02 · Halaman Daftar Penugasan Tracking
- **AC-004** (REQ-004, REQ-005) — **Diberikan** data penugasan lebih dari 20 **Ketika** halaman Daftar Penugasan Tracking dibuka **Maka** tampil 20 data per halaman dengan pagination, diurutkan dari data paling baru ditambahkan · Sumber: TMS.S015-R03 poin 1–2
- **AC-005** (REQ-006, REQ-007) — **Diberikan** penugasan FCL/LCL dengan sopir muat & sopir bongkar berbeda **Ketika** daftar ditampilkan dan user hover pada badge "+1" di kolom "Sopir" **Maka** tampil detail "Sopir Asal" dan "Sopir Tujuan" · Sumber: TMS.S015-R03 poin 3–4
- **AC-006** (REQ-008, REQ-088) — **Diberikan** penugasan memiliki kendala yang dilaporkan **Ketika** daftar ditampilkan **Maka** kolom Status tetap menampilkan step berjalan disertai ikon kendala dengan tooltip "Terdapat Kendala" · Sumber: TMS.S015-R03 poin 5; TMS.S015-R09 poin 4
- **AC-007** (REQ-009) — **Diberikan** penugasan FCL/LCL sudah mencapai step "Kapal Berlayar" dan belum ditugaskan sopir/armada bongkar **Ketika** daftar ditampilkan **Maka** kolom Status menampilkan ikon alert "Siap tugaskan sopir bongkar" · Sumber: TMS.S015-R03 poin 6; TMS.S015-R06 poin 7
- **AC-008** (REQ-009) — **Diberikan** penugasan FCL/LCL pada step "Kapal Berlayar" yang sudah ditugaskan sopir/armada bongkar **Ketika** daftar ditampilkan **Maka** ikon alert "Siap tugaskan sopir bongkar" tidak tampil · Sumber: TMS.S015-R03 poin 6
- **AC-009** (REQ-010) — **Diberikan** penugasan FTL/LTL **Ketika** status berjalan **Maka** urutan status Belum Berangkat → Berangkat Muat → Selesai Muat → Berangkat Bongkar → Pengiriman Selesai, tanpa "Kapal Berlayar" dan "Kapal Sandar" · Sumber: TMS.S015-R03 poin 7 butir 1
- **AC-010** (REQ-011, REQ-012) — **Diberikan** penugasan FCL/LCL **Ketika** status berjalan hingga akhir **Maka** urutan status Belum Berangkat → Berangkat Muat → Selesai Muat → Kapal Berlayar → Kapal Sandar → Berangkat Bongkar → Pengiriman Selesai, dengan label akhir "Pengiriman Selesai" · Sumber: TMS.S015-R03 poin 7 butir 2–3
- **AC-011** (REQ-013) — **Diberikan** penugasan berstatus apa pun **Ketika** armada dialihkan **Maka** status penugasan tersebut menjadi "Dialihkan" · Sumber: TMS.S015-R03 poin 7 butir 4
- **AC-012** (REQ-015, REQ-016) — **Diberikan** halaman daftar dibuka **Ketika** panel filter ditampilkan **Maka** tersedia field ID Order, Kota Asal, Kota Tujuan, Jenis Shipment, No. Polisi/No. Kontainer, Nama Sopir, Tanggal Mulai Tracking, Status, seluruhnya kosong · Sumber: TMS.S015-R03 poin 8 butir 1–2
- **AC-013** (REQ-017) — **Diberikan** user mengisi satu atau lebih field filter **Ketika** klik "Terapkan" **Maka** data yang tampil sesuai filter · Sumber: TMS.S015-R03 poin 8 butir 3
- **AC-014** (REQ-018) — **Diberikan** filter sedang terisi **Ketika** klik "Reset" **Maka** filter dikosongkan dan list kembali ke kondisi default · Sumber: TMS.S015-R03 poin 8 butir 3

### SEC-03 · Aksi pada Daftar Penugasan Tracking
- **AC-015** (REQ-019) — **Diberikan** baris penugasan **Ketika** membuka menu titik tiga **Maka** aksi yang tersedia termasuk dalam daftar "Detail Penugasan", "Edit Penugasan", "Isi Data Tracking", "Isi Kendala", "Alihkan Armada", "Tugaskan Sopir Bongkar", "Riwayat Perubahan" · Sumber: TMS.S015-R04 poin 1
- **AC-016** (REQ-020) — **Diberikan** penugasan FCL atau LCL **Ketika** membuka menu titik tiga **Maka** aksi "Alihkan Armada" tidak tersedia · Sumber: TMS.S015-R04 poin 2 butir 1
- **AC-017** (REQ-021) — **Diberikan** penugasan FCL/LCL dengan Metode Pengiriman Door to Door atau CY to Door **Ketika** membuka menu titik tiga **Maka** aksi "Tugaskan Sopir Bongkar" tersedia · Sumber: TMS.S015-R04 poin 2 butir 2; TMS.S015-R06 poin 2
- **AC-018** (REQ-021) — **Diberikan** penugasan FTL atau LTL **Ketika** membuka menu titik tiga **Maka** aksi "Tugaskan Sopir Bongkar" tidak tersedia · Sumber: TMS.S015-R04 poin 2 butir 2

### SEC-04 · Tambah Penugasan — Ketentuan Umum
- **AC-019** (REQ-022) — **Diberikan** terdapat order yang sudah dan belum dilakukan penugasan **Ketika** membuka list "Pilih Order" **Maka** hanya order yang belum dilakukan penugasan yang tampil · Sumber: TMS.S015-R05 (bagian "Ketentuan Umum") poin 1
- **AC-020** (REQ-023, REQ-024) — **Diberikan** order dengan card "Surabaya - Semarang" **Ketika** order dipilih **Maka** Kota Asal terisi "Kota Surabaya", Kota Tujuan "Kota Semarang", serta Jenis Armada/Kontainer dan Jumlah Armada/Kontainer terdraft dari order, seluruhnya read-only · Sumber: TMS.S015-R05 (bagian "Ketentuan Umum") poin 2–3
- **AC-021** (REQ-025) — **Diberikan** order FTL/FCL dengan Jumlah Armada/Kontainer n **Ketika** order dipilih **Maka** tampil n card input ("Armada 1"/"Kontainer 1" dst.) · Sumber: TMS.S015-R05 (bagian "Ketentuan Umum") poin 4
- **AC-022** (REQ-026) — **Diberikan** order LTL atau LCL **Ketika** order dipilih **Maka** tampil 1 card input · Sumber: TMS.S015-R05 (bagian "Ketentuan Umum") poin 5
- **AC-023** (REQ-027, REQ-029) — **Diberikan** card input armada **Ketika** memilih metode "Pilih Dari Master" pada No. Polisi/Jenis Armada **Maka** tampil dropdown data master berisi seluruh jenis armada (tidak difilter); metode "Isi Data Manual" menampilkan text field · Sumber: TMS.S015-R05 (bagian "Ketentuan Umum") poin 6–7
- **AC-024** (REQ-028) — **Diberikan** Sopir diisi dengan "Isi Data Manual" **Ketika** No. WhatsApp dikosongkan dan form lain lengkap lalu Simpan **Maka** No. WhatsApp tidak menimbulkan error wajib · Sumber: TMS.S015-R05 (bagian "Ketentuan Umum") poin 6
- **AC-025** (REQ-032) — **Diberikan** field Sopir diisi manual **Ketika** melihat Mode Penugasan **Maka** opsi "Tugaskan ke Sopir" disable dan "Tugaskan ke Pengurus" tetap tersedia · Sumber: TMS.S015-R05 (bagian "Ketentuan Umum") poin 9 butir 1, 3
- **AC-026** (REQ-033, REQ-034) — **Diberikan** Armada diisi manual dan Sopir dipilih dari master **Ketika** melihat Mode Penugasan **Maka** "Tugaskan ke Sopir" dan "Tugaskan ke Pengurus" dapat dipilih · Sumber: TMS.S015-R05 (bagian "Ketentuan Umum") poin 9 butir 2–3
- **AC-027** (REQ-030, REQ-031) — **Diberikan** penugasan disimpan **Ketika** Mode Penugasan "Tugaskan ke Sopir" **Maka** penugasan tampil di Driver Hub dan tetap dapat dikelola via web; **Ketika** "Tugaskan ke Pengurus" **Maka** penugasan tidak tampil di Driver Hub dan hanya dikelola via web · Sumber: TMS.S015-R05 (bagian "Ketentuan Umum") poin 8
- **AC-028** (REQ-037, VAL-001) — **Diberikan** form Tambah Penugasan dengan field required kosong **Ketika** klik Simpan **Maka** field tersebut menampilkan helper error dan border berwarna error · Sumber: TMS.S015-R05 (bagian "Ketentuan Umum") poin 11
- **AC-029** (REQ-038) — **Diberikan** form Tambah Penugasan sedang diisi **Ketika** klik Batal **Maka** tampil alert konfirmasi pembatalan · Sumber: TMS.S015-R05 (bagian "Ketentuan Umum") poin 12
- **AC-030** (REQ-039) — **Diberikan** seluruh field required terisi valid **Ketika** klik Simpan **Maka** data penugasan tersimpan · Sumber: TMS.S015-R05 (bagian "Ketentuan Umum") poin 12

### SEC-05 · Tambah Penugasan FTL & LTL
- **AC-031** (REQ-040, VAL-002–VAL-004) — **Diberikan** order FTL/LTL dipilih **Ketika** No. Polisi, Sopir, atau Mode Penugasan kosong lalu Simpan **Maka** field kosong menampilkan helper error & border error dan penugasan tidak tersimpan · Sumber: TMS.S015-R05 (bagian "Tambah Penugasan FTL&LTL") poin 1; (bagian "Ketentuan Umum") poin 11

### SEC-06 · Tambah Penugasan FCL & LCL
- **AC-032** (REQ-041, VAL-005–VAL-010) — **Diberikan** order FCL/LCL dipilih **Ketika** salah satu dari No. Kontainer, No. Segel, Armada Muat (Nopol), Sopir Muat, Mode Penugasan, Pilih jadwal kapal kosong lalu Simpan **Maka** field kosong menampilkan helper error & border error · Sumber: TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 1; (bagian "Ketentuan Umum") poin 11
- **AC-033** (REQ-042) — **Diberikan** order FCL dengan lebih dari 1 kontainer **Ketika** mengisi jadwal kapal **Maka** jadwal kapal diisi satu kali (bukan per card kontainer) · Sumber: TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 2 butir 1
- **AC-034** (REQ-043, REQ-044, VAL-011) — **Diberikan** Jenis Jadwal Kapal "Direct" dipilih **Ketika** user mencoba menambah baris data kapal connecting **Maka** penambahan baris tidak dapat dilakukan · Sumber: TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 2 butir 2–3
- **AC-035** (REQ-045, REQ-047) — **Diberikan** Jenis Jadwal Kapal "Connecting" dipilih **Ketika** melihat form **Maka** field "Data Kapal Connecting" muncul dan dapat ditambah lebih dari 1 baris · Sumber: TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 2 butir 4–5
- **AC-036** (REQ-046, VAL-012) — **Diberikan** Jenis Jadwal Kapal "Connecting" **Ketika** ETD Connecting diisi melebihi ETA kapal utama **Maka** input tersebut tidak diterima (bentuk penolakan tidak disebut — Q-13) · Sumber: TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 2 butir 4

### SEC-07 · Tugaskan Sopir Bongkar
- **AC-037** (REQ-048, REQ-049) — **Diberikan** penugasan FCL/LCL Door to Door atau CY to Door **Ketika** membuka "Tugaskan Sopir Bongkar" **Maka** No. Kontainer, No. Segel, dan Mode Penugasan tampil read-only · Sumber: TMS.S015-R06 poin 1, 3
- **AC-038** (REQ-050–REQ-052, VAL-013–VAL-015) — **Diberikan** form Tugaskan Sopir Bongkar **Ketika** Tanggal Permintaan Bongkar, Armada Bongkar, atau Sopir Bongkar kosong lalu simpan **Maka** penugasan bongkar tidak tersimpan (tampilan error tidak disebut) · Sumber: TMS.S015-R06 poin 4
- **AC-039** (REQ-053, REQ-054) — **Diberikan** sopir bongkar sudah ditugaskan dan step "Berangkat Bongkar" belum ter-update **Ketika** membuka "Tugaskan Sopir Bongkar" **Maka** data sopir bongkar dapat diedit · Sumber: TMS.S015-R06 poin 5
- **AC-040** (REQ-054) — **Diberikan** step "Berangkat Bongkar" sudah ter-update **Ketika** mencoba mengedit melalui "Tugaskan Sopir Bongkar" **Maka** proses edit tidak dapat dilakukan · Sumber: TMS.S015-R06 poin 5
- **AC-041** (REQ-055, VAL-021) — **Diberikan** penugasan FCL/LCL yang membutuhkan armada bongkar belum ditugaskan sopir/armada bongkar **Ketika** melakukan "Isi Data Tracking" step Berangkat bongkar **Maka** proses tidak dapat dilakukan · Sumber: TMS.S015-R06 poin 6
- **AC-042** (REQ-035, REQ-036) — **Diberikan** penugasan FCL/LCL mode "Tugaskan ke Sopir" **Ketika** sopir bongkar belum ditugaskan **Maka** sopir hanya dapat mengelola "Berangkat Muat" dan "Selesai Muat" di Driver Hub; setelah "Tugaskan Sopir Bongkar" disimpan, sopir dapat mengelola "Berangkat Bongkar" dan "Selesai Bongkar" · Sumber: TMS.S015-R05 (bagian "Ketentuan Umum") poin 10

### SEC-08 · Edit Penugasan
- **AC-043** (REQ-056, REQ-057, REQ-059) — **Diberikan** penugasan berstatus "Belum Berangkat" **Ketika** klik "Edit Penugasan" **Maka** tampil halaman penuh sama dengan Tambah Penugasan dan seluruh data penugasan dapat diedit · Sumber: TMS.S015-R07 poin 1, 2, 4
- **AC-044** (REQ-058, VAL-022) — **Diberikan** penugasan berstatus selain "Belum Berangkat" **Ketika** klik "Edit Penugasan" (aksi tetap tampil) **Maka** tampil pop up informasi bahwa edit tidak dapat dilakukan karena sudah masuk proses pengiriman · Sumber: TMS.S015-R07 poin 2–3
- **AC-045** (REQ-060) — **Diberikan** halaman Edit Penugasan **Ketika** klik Batal **Maka** tampil alert konfirmasi · Sumber: TMS.S015-R07 poin 5
- **AC-046** (REQ-061) — **Diberikan** perubahan valid di halaman Edit **Ketika** klik Simpan **Maka** perubahan tersimpan · Sumber: TMS.S015-R07 poin 5

### SEC-09 · Isi Data Tracking — ketentuan umum
- **AC-047** (REQ-067) — **Diberikan** penugasan baru disimpan **Ketika** dilihat di daftar **Maka** status awal "Belum Berangkat" · Sumber: TMS.S015-R08 poin 4
- **AC-048** (REQ-062, REQ-065) — **Diberikan** order multipickup dan satu alamat muat sudah dipilih pada pengisian sebelumnya **Ketika** mengisi step Berangkat Muat berikutnya **Maka** alamat yang sudah dipilih tidak tampil pada pilihan · Sumber: TMS.S015-R08 poin 1 butir 1, poin 2
- **AC-049** (REQ-068) — **Diberikan** penugasan tanpa data sopir **Ketika** membuka Isi Data Tracking **Maka** info sopir dihilangkan; bila ada data sopir, info sopir ditampilkan · Sumber: TMS.S015-R08 poin 7 (pertama)
- **AC-050** (REQ-069) — **Diberikan** form Isi Data Tracking **Ketika** klik Batal **Maka** tampil alert konfirmasi · Sumber: TMS.S015-R08 poin 7 (kedua)
- **AC-051** (REQ-070) — **Diberikan** data step valid **Ketika** klik Simpan **Maka** data tersimpan dan tampil alert berhasil update tracking · Sumber: TMS.S015-R08 poin 7 (kedua)

### SEC-10 · Isi Data Tracking — step FTL/LTL
- **AC-052** (REQ-071) — **Diberikan** penugasan FTL/LTL status "Belum Berangkat" **Ketika** Isi Data Tracking step Berangkat Muat **Maka** tampil pilihan alamat (multipickup) dan text info sopir, wa sopir, nopol · Sumber: TMS.S015-R08 poin 5 butir 1
- **AC-053** (REQ-072, REQ-074, VAL-016) — **Diberikan** step Selesai Muat atau Selesai Bongkar FTL/LTL **Ketika** Foto tidak diunggah lalu Simpan **Maka** data tidak tersimpan (Foto Required); Keterangan boleh kosong · Sumber: TMS.S015-R08 poin 5 butir 2, 4
- **AC-054** (REQ-073, VAL-016) — **Diberikan** step Berangkat Bongkar FTL/LTL **Ketika** form dibuka **Maka** tampil pilihan alamat (multidrop), Foto (Required), Keterangan (Opsional), text info sopir, wa sopir, nopol · Sumber: TMS.S015-R08 poin 5 butir 3

### SEC-11 · Isi Data Tracking — step FCL/LCL
- **AC-055** (REQ-076, REQ-080, VAL-016) — **Diberikan** step Selesai Muat atau Selesai Bongkar FCL/LCL **Ketika** form dibuka **Maka** tampil text info alamat, no kontainer, no segel, sopir, wa sopir, nopol, dengan Foto (Required) dan Keterangan (Opsional) · Sumber: TMS.S015-R08 poin 6
- **AC-056** (REQ-077, VAL-017) — **Diberikan** step Kapal Berlayar **Ketika** Tanggal Kapal Layar kosong lalu Simpan **Maka** data tidak tersimpan; info kapal utama dan voyage dapat diubah; Foto & Keterangan opsional · Sumber: TMS.S015-R08 poin 6 (bagian "Kapal Berlayar")
- **AC-057** (REQ-078, VAL-018) — **Diberikan** step Kapal Sandar **Ketika** Tanggal Kapal Sandar kosong lalu Simpan **Maka** data tidak tersimpan; Foto & Keterangan opsional · Sumber: TMS.S015-R08 poin 6 (bagian "Kapal Sandar")
- **AC-058** (REQ-075, REQ-079) — **Diberikan** step Berangkat Muat atau Berangkat Bongkar FCL/LCL **Ketika** form dibuka **Maka** tampil text info no kontainer, no segel, sopir, wa sopir, nopol, dan pilihan alamat (perlakuan untuk LCL/"LTL" menunggu Q-07) · Sumber: TMS.S015-R08 poin 6

### SEC-12 · Isi Kendala
- **AC-059** (REQ-083–REQ-085) — **Diberikan** penugasan berjalan **Ketika** membuka "Isi Kendala" **Maka** tampil Card Detail Data Order, Card Pengisian berjudul "Kendala", Card Detail Armada/Kontainer (tertutup), Card History Tracking (tertutup, hanya lihat detail) · Sumber: TMS.S015-R09 poin 2
- **AC-060** (REQ-086) — **Diberikan** penugasan FTL/LTL **Ketika** Card Detail Armada/Kontainer dibuka **Maka** tampil No. Polisi, Nama Sopir, No. WhatsApp Sopir, Jenis Armada · Sumber: TMS.S015-R09 poin 3
- **AC-061** (REQ-087) — **Diberikan** penugasan FCL/LCL **Ketika** Card Detail Armada/Kontainer dibuka **Maka** tampil Jenis Kontainer, No. Kontainer, No. Segel, serta No. Polisi, Nama Sopir, No. WhatsApp Sopir, Jenis Armada bila menggunakan armada · Sumber: TMS.S015-R09 poin 3
- **AC-062** (REQ-081, REQ-088, REQ-090) — **Diberikan** form kendala diisi tanpa foto **Ketika** klik Simpan **Maka** data tersimpan, tampil alert berhasil, dan status tetap step berjalan disertai ikon kendala · Sumber: TMS.S015-R09 poin 1, 4, 5
- **AC-063** (REQ-089) — **Diberikan** form Isi Kendala **Ketika** klik Batal **Maka** tampil alert konfirmasi · Sumber: TMS.S015-R09 poin 5

### SEC-13 · Detail Penugasan Tracking
- **AC-064** (REQ-092, REQ-094) — **Diberikan** penugasan FTL/LTL **Ketika** membuka Detail Penugasan **Maka** tampil Card Detail Data Order, 1 card "Informasi Penugasan", Card History Tracking · Sumber: TMS.S015-R10 poin 2–3
- **AC-065** (REQ-093) — **Diberikan** penugasan FCL/LCL **Ketika** membuka Detail Penugasan **Maka** tampil card "Informasi Penugasan Muat" dan "Informasi Penugasan Bongkar" · Sumber: TMS.S015-R10 poin 3
- **AC-066** (REQ-095, REQ-096, REQ-097) — **Diberikan** penugasan dengan step tracking terisi **Ketika** melihat Card History Tracking **Maka** tampil per step sesuai tracking order, tiap step menampilkan Nopol/No. Kontainer, waktu update format DD/MM/YYYY hh:mm, serta text link "Detail" dan "Edit" · Sumber: TMS.S015-R10 poin 4
- **AC-067** (REQ-098) — **Diberikan** step tracking dengan sebagian data tidak terisi **Ketika** klik "Detail" **Maka** tampil pop up data step dan data kosong ditampilkan "-" · Sumber: TMS.S015-R10 poin 5 butir 1
- **AC-068** (REQ-099) — **Diberikan** step tracking terisi **Ketika** klik "Edit" **Maka** tampil pop up edit dengan data ter-draft sesuai inputan sebelumnya · Sumber: TMS.S015-R10 poin 5 butir 2
- **AC-069** (REQ-091) — **Diberikan** halaman Detail Penugasan **Ketika** user berinteraksi **Maka** dapat melihat detail data penugasan, mengedit tracking tiap step, dan melihat detail tracking tiap step · Sumber: TMS.S015-R10 poin 1

### SEC-14 · Alihkan Armada
- **AC-070** (REQ-100, REQ-101) — **Diberikan** penugasan FTL/LTL **Ketika** membuka "Alihkan Armada" **Maka** tampil Card Detail Order, Card Total Berat, Card Total Kubikasi, Card Detail Armada Saat Ini, Card Armada Pengganti; Armada Pengganti default hanya field Jenis Armada, Jumlah Armada, Berat Maks., Kubikasi Maks. · Sumber: TMS.S015-R11 poin 1–2
- **AC-071** (REQ-102) — **Diberikan** Card Armada Pengganti **Ketika** Jumlah Armada diisi **Maka** section detail Armada 1 dst. muncul · Sumber: TMS.S015-R11 poin 2
- **AC-072** (REQ-103, VAL-019, VAL-020) — **Diberikan** section detail armada pengganti **Ketika** Armada atau Sopir tidak dipilih lalu simpan **Maka** pengalihan tidak tersimpan · Sumber: TMS.S015-R11 poin 3
- **AC-073** (REQ-104, REQ-013) — **Diberikan** pengalihan armada berhasil **Ketika** melihat list Penugasan Tracking **Maka** muncul data baru dengan ID Order yang sama, dan data armada lama berstatus "Dialihkan" · Sumber: TMS.S015-R11 poin 4; TMS.S015-R03 poin 7 butir 4
- **AC-074** (REQ-105, REQ-106) — **Diberikan** Armada A sudah "Berangkat Bongkar" ke gudang jkt lalu dialihkan ke Armada B **Ketika** melihat tracking data baru **Maka** step tidak mulai dari awal dan Armada B mengisi kembali Berangkat Bongkar untuk gudang jkt · Sumber: TMS.S015-R11 poin 5, 8
- **AC-075** (REQ-107, REQ-108) — **Diberikan** pengalihan selesai **Ketika** membuka detail penugasan armada lama dan baru **Maka** armada lama menampilkan penanda dialihkan ke armada apa saja, armada baru menampilkan penanda hasil pengalihan dari armada apa · Sumber: TMS.S015-R11 poin 6–7
- **AC-076** (REQ-109, REQ-110) — **Diberikan** pengalihan selesai **Ketika** membuka History Tracking pada detail penugasan data baru **Maka** hanya segment lanjutan armada pengganti yang tampil; **Ketika** membuka history tracking di detail order **Maka** data armada lama & baru digabung · Sumber: TMS.S015-R11 poin 9

## 6. State / transisi

### 6.1 Urutan status tracking per jenis shipment
| # | FTL / LTL | FCL / LCL | Sumber |
|---|---|---|---|
| 1 | Belum Berangkat (status awal) | Belum Berangkat (status awal) | TMS.S015-R03 poin 7; TMS.S015-R08 poin 4 |
| 2 | Berangkat Muat | Berangkat Muat | TMS.S015-R03 poin 7 |
| 3 | Selesai Muat | Selesai Muat | TMS.S015-R03 poin 7 |
| 4 | — (Kapal Berlayar dilewati) | Kapal Berlayar (ikon alert "Siap tugaskan sopir bongkar" bila belum ditugaskan sopir/armada bongkar) | TMS.S015-R03 poin 6–7; TMS.S015-R06 poin 7 |
| 5 | — (Kapal Sandar dilewati) | Kapal Sandar | TMS.S015-R03 poin 7 |
| 6 | Berangkat Bongkar | Berangkat Bongkar (tidak dapat diisi bila armada bongkar dibutuhkan namun belum ditugaskan) | TMS.S015-R03 poin 7; TMS.S015-R06 poin 6 |
| 7 | Pengiriman Selesai (input step: "Selesai Bongkar") | Pengiriman Selesai (input step: "Selesai Bongkar") | TMS.S015-R03 poin 7 butir 3 |
| Override | "Dialihkan" — menggantikan status manapun saat armada dialihkan | Tidak berlaku (Alihkan Armada khusus FTL & LTL) | TMS.S015-R03 poin 7 butir 4; TMS.S015-R04 poin 2; TMS.S015-R11 |
| Penanda | Ikon kendala + tooltip "Terdapat Kendala" pada step berjalan | Sama | TMS.S015-R03 poin 5; TMS.S015-R09 poin 4 |

### 6.2 Ketersediaan aksi per jenis shipment
| Aksi | FTL | LTL | FCL | LCL | Batasan status | Sumber |
|---|---|---|---|---|---|---|
| Detail Penugasan | Tidak dibatasi per jenis di spec | idem | idem | idem | Tidak disebut | TMS.S015-R04 poin 1 |
| Edit Penugasan | Ya | Ya | Ya | Ya | Hanya saat "Belum Berangkat"; setelahnya aksi tetap tampil, klik → pop up informasi | TMS.S015-R07 poin 2–3 |
| Isi Data Tracking | Ya | Ya | Ya | Ya | FCL/LCL butuh armada bongkar: step Berangkat bongkar terkunci sampai sopir/armada bongkar ditugaskan | TMS.S015-R04 poin 1; TMS.S015-R06 poin 6 |
| Isi Kendala | Tidak dibatasi per jenis di spec | idem | idem | idem | Tidak disebut | TMS.S015-R04 poin 1 |
| Alihkan Armada | Ya | Ya | Tidak | Tidak | Tidak disebut | TMS.S015-R04 poin 2 butir 1 |
| Tugaskan Sopir Bongkar | Tidak | Tidak | Hanya Metode Door to Door / CY to Door | Hanya Metode Door to Door / CY to Door | Edit hanya sampai step "Berangkat Bongkar" ter-update | TMS.S015-R04 poin 2 butir 2; TMS.S015-R06 poin 2, 5 |
| Riwayat Perubahan | Tidak dibatasi per jenis di spec | idem | idem | idem | Tidak disebut (Q-03) | TMS.S015-R04 poin 1 |

### 6.3 Step yang dikelola sopir di Driver Hub (Mode "Tugaskan ke Sopir")
| Jenis | Step via Driver Hub | Sumber |
|---|---|---|
| FCL & LCL — penugasan muat | "Berangkat Muat", "Selesai Muat" | TMS.S015-R05 (bagian "Ketentuan Umum") poin 10 |
| FCL & LCL — setelah "Tugaskan Sopir Bongkar" | "Berangkat Bongkar", "Selesai Bongkar" | TMS.S015-R05 (bagian "Ketentuan Umum") poin 10; TMS.S015-R06 poin 1 |
| Mode "Tugaskan ke Pengurus" | Tidak tampil di Driver Hub | TMS.S015-R05 (bagian "Ketentuan Umum") poin 8 |

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Manajemen Vendor (TMS.S003) | Hak akses penuh shipper bergantung pada vendor yang dikelola shipper (admin) | TMS.S015-R02; spec-index §3 (S003-R05/R06/R07) |
| Order FTL/FCL/LTL-LCL (TMS.S011–S013) | Sumber data "Pilih Order" (order belum ditugaskan), Kota Asal/Tujuan, Jenis & Jumlah Armada/Kontainer; Metode Pengiriman (Door to Door / CY to Door) menentukan "Tugaskan Sopir Bongkar"; status order mengikuti penugasan | TMS.S015-R05 poin 1–2; TMS.S015-R04 poin 2; spec-index §3 |
| Master Unit/Armada (TMS.S009) & Master Sopir (TMS.S010) | Sumber dropdown "Pilih Dari Master" | TMS.S015-R05 (bagian "Ketentuan Umum") poin 6–7 |
| Driver Hub (TMS.S016) | Mode "Tugaskan ke Sopir" tampil di Driver Hub; FCL/LCL dipisah muat/bongkar; kendala Driver Hub merujuk Isi Kendala | TMS.S015-R05 poin 8, 10; spec-index §3 (S016-R05 poin 3) |
| Pembatasan Pajak & KIR (TMS.S025) | Badge status dokumen pada dropdown armada, pop up, disable "Isi Data Manual" pada field Armada sesuai Mode Pengecekan | spec-index §3 (S025-R05/R07/R08) |
| Dashboard Monitoring (TMS.S018) | Label step akhir ("Selesai Bongkar" pada legenda S018-R05) | spec-index §4 no.24 |
| Pengaturan Akun (TMS.S021) | Level akses & Cakupan Data untuk Penugasan Tracking | spec-index §3 (S021-R08/R09) |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | Bila shipper mengelola sebagian vendor, apakah akses shipper pada penugasan order vendor lain (tidak dikelola) adalah "hanya lihat"? Spec hanya menyebut dua kondisi ekstrem (ada / tidak ada vendor kelolaan). | TMS.S015-R02 poin 1 | REQ-001, REQ-002 | BARU |
| Q-02 | Label step akhir "Pengiriman Selesai" (S015) vs legenda "Selesai Bongkar" (S018-R05). | TMS.S015-R03 poin 7 butir 3 | REQ-012 | no.24 |
| Q-03 | Aksi "Riwayat Perubahan" tidak memiliki rule rinci (isi, tampilan, batasan). | TMS.S015-R04 poin 1 | REQ-019 | BARU |
| Q-04 | Cakupan (kolom B) poin 3 "Ganti armada, ganti sopir, ganti armada + sopir" tidak memiliki rule tersendiri; apakah tercakup di Edit Penugasan / Alihkan Armada? | Cakupan kolom B; TMS.S015-R07; TMS.S015-R11 | REQ-056, REQ-100–REQ-110 | BARU |
| Q-05 | Kalimat Field "Data Kapal Connecting" terpotong; field isi baris connecting tidak disebut. | TMS.S015-R05 (bagian "Tambah Penugasan FCL&LCL") poin 2 butir 5 | REQ-047 | no.21 |
| Q-06 | R08 poin 1 menyatakan "Upload foto (wajib)" secara umum, tetapi poin 5/6 tidak mencantumkan Foto pada Berangkat Muat (FTL/LTL & FCL/LCL) dan Berangkat Bongkar FCL/LCL, serta menyatakan Foto "Opsional" pada Kapal Berlayar/Kapal Sandar. Mana yang berlaku? | TMS.S015-R08 poin 1, 5, 6 | REQ-063, REQ-071, REQ-075, REQ-077–REQ-079 | BARU |
| Q-07 | Catatan "*[LTL tidak bisa pilih alamat]" berada di step FCL/LCL, padahal step FTL/LTL (poin 5) mencantumkan Pilih alamat; Berangkat Bongkar FCL/LCL bertanda "Multipickup" (bukan Multidrop); poin 7 ganda. | TMS.S015-R08 poin 5, 6, 7 | REQ-071, REQ-075, REQ-079 | no.22 |
| Q-08 | Step Kapal Sandar: "kapal utama (disable) / connecting terakhir (bisa diubah)" — kondisi pemakaian masing-masing alternatif (Direct vs Connecting?) tidak dinyatakan. | TMS.S015-R08 poin 6 (bagian "Kapal Sandar") | REQ-078 | BARU |
| Q-09 | Isi Kendala: status wajib "Input keterangan" tidak disebut; S016-R05 poin 3 menyatakan keterangan wajib. | TMS.S015-R09 poin 1 | REQ-082 | no.23 |
| Q-10 | FCL/LCL dengan Metode Pengiriman selain Door to Door / CY to Door: apakah ikon "Siap tugaskan sopir bongkar" tetap tampil (R03 poin 6 tidak membatasi metode) dan bagaimana step Berangkat Bongkar diisi tanpa armada bongkar? R06 poin 7 juga tidak menyebut syarat "belum ditugaskan". | TMS.S015-R03 poin 6; TMS.S015-R06 poin 2, 6, 7 | REQ-009, REQ-021, REQ-055 | BARU |
| Q-11 | Alihkan Armada: "Armada dan Sopir wajib dipilih" — apakah hanya dari master atau juga dapat manual, dan tampilan error bila kosong? | TMS.S015-R11 poin 3 | REQ-103 | BARU |
| Q-12 | Dropdown filter "Status" "menggunakan daftar value yang sama seperti di atas" — apakah termasuk "Kapal Berlayar", "Kapal Sandar", dan "Dialihkan"? | TMS.S015-R03 poin 7 butir 5 | REQ-014 | BARU |
| Q-13 | Teks/copy pesan tidak dikutip: helper error, alert konfirmasi Batal, alert berhasil, pop up informasi Edit, penolakan ETD Connecting, error wajib di Tugaskan Sopir Bongkar & Isi Data Tracking. | TMS.S015-R05 poin 2 butir 4, poin 11–12; R06 poin 4; R07 poin 3; R08 poin 5–7; R09 poin 5 | REQ-046, REQ-058, REQ-070, REQ-090 | BARU |
| Q-14 | Prefix Kota Asal/Tujuan untuk kabupaten: spec menyebut "Kab." tetapi contoh hanya "Kota"; data master kota memakai "Kabupaten ..." (evidence explore/pt-2026-09-23T13-28-49-199Z-acct1). Apakah "Kabupaten" memenuhi REQ-024? | TMS.S015-R05 (bagian "Ketentuan Umum") poin 3 | REQ-024 | BARU (2026-09-23, dari evidence) |

## 9. Catatan testability (bukan requirement)
- Mode "Tugaskan ke Sopir" dan pembagian step muat/bongkar FCL/LCL (TMS.S015-R05 poin 8, 10) diverifikasi di aplikasi Driver Hub (TMS.S016), bukan UI web OPS.
- Kondisi akses shipper (TMS.S015-R02) membutuhkan data vendor dengan Pengelola = Shipper dan vendor yang dikelola sendiri.
- Skenario multipickup/multidrop, Kapal Berlayar/Sandar, dan Alihkan Armada membutuhkan order dengan data titik muat/bongkar dan jadwal kapal yang sesuai.

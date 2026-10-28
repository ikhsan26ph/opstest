# TMS.S013 — Order LTL & LCL · Analysis (REQ / VAL / AC)

> Sumber: [`order-ltl-lcl_spec.md`](order-ltl-lcl_spec.md) (verbatim `Spek TMS-S` baris 70–79) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.
>
> Konvensi lingkup: setiap REQ/VAL diberi tag **[LTL]**, **[LCL]**, atau **[Umum]** persis sesuai pembagian di sumber. Pembagian eksplisit di sumber hanya: TMS.S013-R03 poin 1 (LTL) & poin 2 (LCL); TMS.S013-R04 bagian "LCL", "LTL", "Rule Umum"; TMS.S013-R06 poin 1 field Waktu Perjalanan ("Pada LTL …", "Sedangkan pada LCL …"). Rule lain tidak diberi label LTL/LCL di sumber sehingga ditandai [Umum].

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Akses Vendor & Shipper pada menu Order [Umum] | TMS.S013-R02 | Vendor, Shipper | REQ-001–REQ-002 | — | AC-001–AC-002 |
| SEC-02 | Ketentuan Umum Order LTL & LCL [LTL]/[LCL]/[Umum] | TMS.S013-R01, TMS.S013-R03 | Shipper | REQ-003–REQ-007 | — | AC-003–AC-004 |
| SEC-03 | Step 1 - Data Pengiriman — khusus LCL | TMS.S013-R04 (bagian "LCL") | Shipper | REQ-008–REQ-012 | VAL-001–VAL-004 | AC-005–AC-007 |
| SEC-04 | Step 1 - Data Pengiriman — khusus LTL | TMS.S013-R04 (bagian "LTL") | Shipper | REQ-013–REQ-015 | VAL-005–VAL-007 | AC-008–AC-009 |
| SEC-05 | Step 1 - Data Pengiriman — Rule Umum | TMS.S013-R04 (bagian "Rule Umum") | Shipper | REQ-016–REQ-025 | VAL-008–VAL-011 | AC-010–AC-017 |
| SEC-06 | Step 2 - Data Barang [Umum] | TMS.S013-R05 | Shipper | REQ-026–REQ-039 | VAL-012–VAL-015 | AC-018–AC-023 |
| SEC-07 | Step 3 - Vendor & Harga — Waktu Perjalanan khusus LTL | TMS.S013-R06 poin 1 | Shipper | REQ-040 | — | AC-024 |
| SEC-08 | Step 3 - Vendor & Harga — Waktu Perjalanan khusus LCL | TMS.S013-R06 poin 1 | Shipper | REQ-041 | — | AC-025 |
| SEC-09 | Step 3 - Vendor & Harga [Umum] | TMS.S013-R06 poin 1–8 | Shipper | REQ-042–REQ-057 | VAL-016–VAL-020 | AC-026–AC-032 |
| SEC-10 | Step 4 - Review (judul sumber: "Review Order FCL") [Umum] | TMS.S013-R07 | Shipper | REQ-058–REQ-062 | — | AC-033–AC-035 |
| SEC-11 | Status Order [Umum] | TMS.S013-R08 | Shipper, Vendor, Admin shipper | REQ-063–REQ-073 | — | AC-036–AC-043 |
| SEC-12 | Hak Edit Order LTL & LCL [Umum] | TMS.S013-R09 (bagian "Hak Edit Order LTL & LCL") | Shipper | REQ-074–REQ-079 | — | AC-044–AC-047 |
| SEC-13 | Pembatalan Order [Umum] | TMS.S013-R09 (bagian "Pembatalan Order") | Admin shipper, Vendor | REQ-080–REQ-083 | VAL-021 | AC-048–AC-051 |
| SEC-14 | Aksi pada Daftar Order LTL & LCL [Umum] | TMS.S013-R10 | Shipper | REQ-084–REQ-088 | — | AC-052–AC-056 |

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Vendor | Hanya bisa melihat detail data order ("Vendor: Lihat Detail") | TMS.S013-R02 poin 1; Cakupan kolom B poin 4 |
| Vendor | Melakukan penugasan (pemicu status "Ditugaskan") | TMS.S013-R08 poin 1 |
| Vendor | Tidak melakukan pembatalan order | TMS.S013-R09 (bagian "Pembatalan Order") poin 2 |
| Shipper | Mengakses keseluruhan aksi pada order ("Shipper: Seluruh Aksi") | TMS.S013-R02 poin 2; Cakupan kolom B poin 4 |
| Admin shipper | Melakukan pembatalan order | TMS.S013-R08 poin 1 ("Dibatalkan"); TMS.S013-R09 (bagian "Pembatalan Order") poin 2 |

## 3. Requirement (REQ)
### SEC-01 · Akses Vendor & Shipper pada menu Order [Umum]
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | [Umum] Vendor hanya bisa melihat detail data order. | TMS.S013-R02 poin 1 | TERTULIS |
| REQ-002 | [Umum] Shipper mengakses keseluruhan aksi pada order. | TMS.S013-R02 poin 2 | TERTULIS |

### SEC-02 · Ketentuan Umum Order LTL & LCL
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-003 | [LTL] LTL (Less Than Truck Load) adalah mode pengiriman menggunakan truk, namun tidak penuh (dapat digabung dengan pengirim lain). | TMS.S013-R03 poin 1 | AMBIGU (Q-22) |
| REQ-004 | [LCL] LCL (Less Than Container Load) adalah mode pengiriman menggunakan kontainer via laut, namun tidak penuh (dapat digabung dengan pengirim lain). | TMS.S013-R03 poin 2 | AMBIGU (Q-22) |
| REQ-005 | [Umum] Order dapat diinput manual melalui form "Buat Order". | TMS.S013-R03 poin 3 | TERTULIS |
| REQ-006 | [Umum] Order dapat diinput secara batch melalui upload template Excel (tombol "Batch Order"); rincian batch dijelaskan pada modul terpisah (TMS.S019). | TMS.S013-R03 poin 3 | TERTULIS |
| REQ-007 | [Umum] Pengisian order terbagi menjadi 4 step: Data Pengiriman, Data Barang, Vendor & Harga, Review (teks sumber: "Pengisian order FCL"). | TMS.S013-R03 poin 4; TMS.S013-R01 | AMBIGU (Q-02) |

### SEC-03 · Step 1 - Data Pengiriman — khusus LCL
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-008 | [LCL] Field "Pelabuhan Asal": dropdown, wajib diisi, data dari Master Pelabuhan. | TMS.S013-R04 (bagian "LCL") poin 1 | TERTULIS |
| REQ-009 | [LCL] Field "Pelabuhan Tujuan": dropdown, wajib diisi, data dari Master Pelabuhan. | TMS.S013-R04 (bagian "LCL") poin 1 | TERTULIS |
| REQ-010 | [LCL] Field "Jumlah Kontainer" selalu terkunci 1 (field disable). | TMS.S013-R04 (bagian "LCL") poin 1 | TERTULIS |
| REQ-011 | [LCL] Field "Metode Pengiriman": pilihan wajib salah satu (Door to Door / Door to CY / CY to Door / CY to CY). | TMS.S013-R04 (bagian "LCL") poin 1 | TERTULIS |
| REQ-012 | [LCL] Metode Pengiriman yang dipilih memengaruhi tampilan pada menu Penugasan Tracking. | TMS.S013-R04 (bagian "LCL") poin 2 | TERTULIS |

### SEC-04 · Step 1 - Data Pengiriman — khusus LTL
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-013 | [LTL] Field "Kota Asal": dropdown, wajib diisi, data dari Master Kota. | TMS.S013-R04 (bagian "LTL") poin 1 | TERTULIS |
| REQ-014 | [LTL] Field "Kota Tujuan": dropdown, wajib diisi, data dari Master Kota. | TMS.S013-R04 (bagian "LTL") poin 1 | TERTULIS |
| REQ-015 | [LTL] Kota terpilih memengaruhi pilihan dropdown droppoint (sesuai dengan kota terpilih). | TMS.S013-R04 (bagian "LTL") poin 2 | TERTULIS |

### SEC-05 · Step 1 - Data Pengiriman — Rule Umum
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-016 | [Umum] Data Pengirim & Data Penerima: "Drop Point Asal/Tujuan" berupa dropdown, wajib diisi, mengambil data dari Master Droppoint. | TMS.S013-R04 (bagian "Rule Umum") poin 1 | TERTULIS |
| REQ-017 | [Umum] Saat Drop Point dipilih, sistem auto-draft: detail alamat, nama perusahaan, Nama PIC, dan No. PIC. | TMS.S013-R04 (bagian "Rule Umum") poin 1 | AMBIGU (Q-10) |
| REQ-018 | [Umum] Field PIC dan No. WhatsApp bersifat draft namun tetap dapat diubah manual oleh user. | TMS.S013-R04 (bagian "Rule Umum") poin 1 | TERTULIS |
| REQ-019 | [Umum] Tipe pengiriman untuk LTL LCL adalah normal: Data Pengirim & Data Penerima masing-masing hanya 1 baris, tidak dapat ditambah baris. | TMS.S013-R04 (bagian "Rule Umum") poin 2 | TERTULIS |
| REQ-020 | [Umum] Jika field wajib tidak diisi: tampil helper error & border field berubah warna error. | TMS.S013-R04 (bagian "Rule Umum") poin 3 | TERTULIS |
| REQ-021 | [Umum] Untuk ke next step wajib mengisi seluruh field; bila ada field kosong, tidak dapat klik button selanjutnya dan tampil alert pada keseluruhan field yang kosong. | TMS.S013-R04 (bagian "Rule Umum") poin 4 | AMBIGU (Q-12) |
| REQ-022 | [Umum] Dapat menyimpan sebagai draft data yang sudah diisi walaupun seluruh field belum diisi; tampil pop up konfirmasi alert. | TMS.S013-R04 (bagian "Rule Umum") poin 5 | TERTULIS |
| REQ-023 | [Umum] Button "Batal": membatalkan pengisian data; tampil pop up konfirmasi. | TMS.S013-R04 (bagian "Rule Umum") poin 6 | TERTULIS |
| REQ-024 | [Umum] Button "Draf": menyimpan sebagai draf data yang sudah diisi. | TMS.S013-R04 (bagian "Rule Umum") poin 6 | TERTULIS |
| REQ-025 | [Umum] Button "Selanjutnya": beralih ke next step. | TMS.S013-R04 (bagian "Rule Umum") poin 6 | TERTULIS |

### SEC-06 · Step 2 - Data Barang [Umum]
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-026 | [Umum] Hanya dapat memasukkan 1 data barang untuk LTL & LCL. | TMS.S013-R05 poin 1 | TERTULIS |
| REQ-027 | [Umum] Field "Deskripsi Barang": wajib diisi. | TMS.S013-R05 poin 2 | TERTULIS |
| REQ-028 | [Umum] Field "Nomor DO": tidak wajib, dapat diisi lebih dari satu, dipisahkan dengan koma. | TMS.S013-R05 poin 2 | TERTULIS |
| REQ-029 | [Umum] Field "Berat (kg)": tidak wajib diisi. | TMS.S013-R05 poin 2 | TERTULIS |
| REQ-030 | [Umum] Field "Kubikasi (m3)": tidak wajib diisi. | TMS.S013-R05 poin 2 | TERTULIS |
| REQ-031 | [Umum] Tidak ada pengecekan kelebihan berat / kubikasi pada step ini. | TMS.S013-R05 poin 3 | TERTULIS |
| REQ-032 | [Umum] Data Barang (koli/karungan) tidak mengikat spesifikasi rinci jenis barang di dalamnya, hanya mencatat pada level koli. | TMS.S013-R05 poin 4 | TERTULIS |
| REQ-033 | [Umum] Jika field wajib tidak diisi: tampil helper error & border field berubah warna error. | TMS.S013-R05 poin 5 | TERTULIS |
| REQ-034 | [Umum] Untuk ke next step wajib mengisi seluruh field; bila ada field kosong, tidak dapat klik button selanjutnya dan tampil alert pada keseluruhan field yang kosong. | TMS.S013-R05 poin 6 | KONFLIK (Q-13, Q-12) |
| REQ-035 | [Umum] Dapat menyimpan sebagai draft walaupun seluruh field belum diisi; tampil pop up konfirmasi alert. | TMS.S013-R05 poin 7 | TERTULIS |
| REQ-036 | [Umum] Button "Batal": membatalkan pengisian data; tampil pop up konfirmasi. | TMS.S013-R05 poin 8 | TERTULIS |
| REQ-037 | [Umum] Button "Draf": menyimpan sebagai draf. | TMS.S013-R05 poin 8 | TERTULIS |
| REQ-038 | [Umum] Button "Sebelumnya": kembali ke step sebelumnya; data tetap terdraft (tidak hilang). | TMS.S013-R05 poin 8 | TERTULIS |
| REQ-039 | [Umum] Button "Selanjutnya": beralih ke next step. | TMS.S013-R05 poin 8 | TERTULIS |

### SEC-07 · Step 3 - Waktu Perjalanan — khusus LTL
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-040 | [LTL] Field "Waktu Perjalanan" dapat berupa text field, atau hanya text only. | TMS.S013-R06 poin 1 | AMBIGU (Q-05) |

### SEC-08 · Step 3 - Waktu Perjalanan — khusus LCL
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-041 | [LCL] Tidak terdapat inputan Waktu Perjalanan, karena menggunakan perhitungan "ETA - ETD + 4 hari". | TMS.S013-R06 poin 1 | AMBIGU (Q-06) |

### SEC-09 · Step 3 - Vendor & Harga [Umum]
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-042 | [Umum] Field "Vendor": dropdown, wajib diisi. | TMS.S013-R06 poin 1 | TERTULIS |
| REQ-043 | [Umum] Field "Tanggal Permintaan Muat": wajib diisi. | TMS.S013-R06 poin 1 | TERTULIS |
| REQ-044 | [Umum] Field "Harga": wajib diisi, input manual. | TMS.S013-R06 poin 1 | TERTULIS |
| REQ-045 | [Umum — sumber menulis "FCL"] Waktu perjalanan baru diketahui saat penugasan ditambahkan (Isi jadwal kapal); waktu perjalanan baru tampil pada informasi detail saat status "Ditugaskan". | TMS.S013-R06 poin 2 | AMBIGU (Q-02) |
| REQ-046 | [Umum] Kalkulasi PPN & PPH bersifat opsional, diaktifkan melalui checkbox "Gunakan Komponen Harga". | TMS.S013-R06 poin 3 | TERTULIS |
| REQ-047 | [Umum] Field PPN/PPH baru ditampilkan saat "Gunakan Komponen Harga" dicentang. | TMS.S013-R06 poin 4 | TERTULIS |
| REQ-048 | [Umum] Field PPN/PPH bersifat required saat ditampilkan. | TMS.S013-R06 poin 4 | TERTULIS |
| REQ-049 | [Umum] Besaran persentase PPN/PPH mengambil dari data terakhir yang digunakan. | TMS.S013-R06 poin 4 | AMBIGU (Q-14) |
| REQ-050 | [Umum] Bila belum ada data terakhir yang bisa digunakan, persentase PPN/PPH tampil kosong. | TMS.S013-R06 poin 4 | TERTULIS |
| REQ-051 | [Umum] Saat menggunakan komponen harga, sistem menghitung Total Harga = Harga DPP + Nilai PPN - Nilai PPH. | TMS.S013-R06 poin 5 | AMBIGU (Q-15) |
| REQ-052 | [Umum] Untuk ke next step wajib mengisi seluruh field; bila ada field kosong, tidak dapat klik button selanjutnya dan tampil alert pada keseluruhan field yang kosong. | TMS.S013-R06 poin 6 | AMBIGU (Q-12) |
| REQ-053 | [Umum] Dapat menyimpan sebagai draft walaupun seluruh field belum diisi; tampil pop up konfirmasi alert. | TMS.S013-R06 poin 7 | TERTULIS |
| REQ-054 | [Umum] Button "Batal": membatalkan pengisian data; tampil pop up konfirmasi. | TMS.S013-R06 poin 8 | TERTULIS |
| REQ-055 | [Umum] Button "Draf": menyimpan sebagai draf. | TMS.S013-R06 poin 8 | TERTULIS |
| REQ-056 | [Umum] Button "Sebelumnya": kembali ke step sebelumnya; data tetap terdraft (tidak hilang). | TMS.S013-R06 poin 8 | TERTULIS |
| REQ-057 | [Umum] Button "Selanjutnya": beralih ke next step. | TMS.S013-R06 poin 8 | TERTULIS |

### SEC-10 · Step 4 - Review (judul sumber: "Review Order FCL") [Umum]
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-058 | [Umum] Step Review menampilkan ringkasan seluruh data Step 1–3 secara read-only. | TMS.S013-R07 poin 1 | AMBIGU (Q-02) |
| REQ-059 | [Umum] Button "Batal": membatalkan pengisian data; tampil pop up konfirmasi. | TMS.S013-R07 poin 2 | TERTULIS |
| REQ-060 | [Umum] Button "Draf": menyimpan sebagai draf. | TMS.S013-R07 poin 2 | TERTULIS |
| REQ-061 | [Umum] Button "Sebelumnya": kembali ke step sebelumnya; data tetap terdraft (tidak hilang). | TMS.S013-R07 poin 2 | TERTULIS |
| REQ-062 | [Umum] Button "Simpan": menyelesaikan proses pembuatan order dan mengubah status menjadi "Menunggu Penugasan". | TMS.S013-R07 poin 2 | TERTULIS |

### SEC-11 · Status Order [Umum]
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-063 | [Umum] Terdapat 9 status order LTL & LCL: "Isi Data Pengiriman", "Isi Data Muatan", "Isi Data Vendor", "Review Order", "Menunggu Penugasan", "Ditugaskan", "Proses Pengiriman", "Selesai", "Dibatalkan". | TMS.S013-R08 poin 1 | TERTULIS |
| REQ-064 | [Umum] "Isi Data Pengiriman" = pengisian data order belum selesai di step "Data Pengiriman". | TMS.S013-R08 poin 1 | TERTULIS |
| REQ-065 | [Umum] "Isi Data Muatan" = pengisian data order belum selesai di step "Data Barang". | TMS.S013-R08 poin 1 | TERTULIS |
| REQ-066 | [Umum] "Isi Data Vendor" = pengisian data order belum selesai di step "Vendor & Harga". | TMS.S013-R08 poin 1 | TERTULIS |
| REQ-067 | [Umum] "Review Order" = seluruh step sudah terisi namun order belum di-submit (masih di step Review). | TMS.S013-R08 poin 1 | TERTULIS |
| REQ-068 | [Umum] "Menunggu Penugasan" = seluruh data order sudah lengkap & disubmit, menunggu proses penugasan vendor. | TMS.S013-R08 poin 1 | TERTULIS |
| REQ-069 | [Umum] "Ditugaskan" = vendor sudah melakukan penugasan. | TMS.S013-R08 poin 1 | AMBIGU (Q-20) |
| REQ-070 | [Umum] "Proses Pengiriman" = status penugasan armada "Dalam Perjalanan". | TMS.S013-R08 poin 1 | AMBIGU (Q-16) |
| REQ-071 | [Umum] "Selesai" = seluruh armada sudah selesai bongkar (status penugasan "Selesai"). | TMS.S013-R08 poin 1 | AMBIGU (Q-16) |
| REQ-072 | [Umum] "Dibatalkan" = order dibatalkan oleh admin shipper. | TMS.S013-R08 poin 1 | TERTULIS |
| REQ-073 | [Umum] Status 1–4 (Isi Data Pengiriman s.d. Review Order) merupakan kondisi draft, tersimpan otomatis melalui aksi "Simpan ke Draf" pada step manapun. | TMS.S013-R08 poin 2 | AMBIGU (Q-17) |

### SEC-12 · Hak Edit Order LTL & LCL [Umum]
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-074 | [Umum] Shipper dapat mengubah data order selama status dalam rentang draft (Isi Data Pengiriman s.d. Review Order) hingga "Menunggu Penugasan". | TMS.S013-R09 (bagian "Hak Edit Order LTL & LCL") poin 1 | TERTULIS |
| REQ-075 | [Umum] Shipper tidak dapat lagi mengubah data order setelah status berubah menjadi "Ditugaskan". | TMS.S013-R09 (bagian "Hak Edit Order LTL & LCL") poin 2 | TERTULIS |
| REQ-076 | [Umum] Pada halaman Edit Order, field Jenis Pengiriman locked/read-only dan tidak dapat diubah. | TMS.S013-R09 (bagian "Hak Edit Order LTL & LCL") poin 3 | AMBIGU (Q-11) |
| REQ-077 | [Umum] Daftar field yang tetap dapat diubah pada Edit Order tidak disebut; penomoran melompat dari poin 3 ke poin 5 (poin 4 tidak ada). | TMS.S013-R09 (bagian "Hak Edit Order LTL & LCL") | TERPOTONG (Q-03) |
| REQ-078 | [Umum] Button "Batal" (Edit): membatalkan pengisian data; tampil pop up konfirmasi. | TMS.S013-R09 (bagian "Hak Edit Order LTL & LCL") poin 5 | TERTULIS |
| REQ-079 | [Umum] Button "Simpan" (Edit): menyelesaikan proses pengeditan; tampil pop up konfirmasi. | TMS.S013-R09 (bagian "Hak Edit Order LTL & LCL") poin 5 | TERTULIS |

### SEC-13 · Pembatalan Order [Umum]
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-080 | [Umum] Order dapat dibatalkan selama status dalam rentang draft hingga "Ditugaskan". | TMS.S013-R09 (bagian "Pembatalan Order") poin 1 | TERTULIS |
| REQ-081 | [Umum] Order tidak dapat dibatalkan setelah status "Proses Pengiriman". | TMS.S013-R09 (bagian "Pembatalan Order") poin 1 | TERTULIS |
| REQ-082 | [Umum] Pembatalan order dilakukan oleh admin shipper (bukan oleh vendor). | TMS.S013-R09 (bagian "Pembatalan Order") poin 2 | TERTULIS |
| REQ-083 | [Umum] Field "Alasan Pembatalan" wajib diisi saat melakukan pembatalan. | TMS.S013-R09 (bagian "Pembatalan Order") poin 3 | AMBIGU (Q-21) |

### SEC-14 · Aksi pada Daftar Order LTL & LCL [Umum]
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-084 | [Umum] Status Isi Data Pengiriman/Muatan/Vendor – Review Order: aksi "Detail", "Lanjutkan Pengisian", "Batalkan Order", "Riwayat Perubahan". | TMS.S013-R10 poin 1 | TERTULIS |
| REQ-085 | [Umum] Status Menunggu Penugasan: aksi "Detail", "Edit", "Batalkan Order", "Riwayat Perubahan". | TMS.S013-R10 poin 1 | TERTULIS |
| REQ-086 | [Umum] Status Ditugaskan: aksi "Detail", "Batalkan Order", "Riwayat Perubahan" (aksi Edit tidak tersedia). | TMS.S013-R10 poin 1 | TERTULIS |
| REQ-087 | [Umum] Tombol "Riwayat Pembatalan" pada toolbar halaman Daftar Order menampilkan daftar seluruh order yang pernah dibatalkan. | TMS.S013-R10 poin 2 | TERTULIS |
| REQ-088 | [Umum] Aksi per-baris "Riwayat Perubahan" menampilkan histori perubahan order tertentu (terpisah dari "Riwayat Pembatalan"). | TMS.S013-R10 poin 2 | TERTULIS |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-03 | [LCL] Pelabuhan Asal | Wajib (dropdown dari Master Pelabuhan) | "tampilkan helper error & border field berubah warna error" | TMS.S013-R04 (bagian "LCL") poin 1; (bagian "Rule Umum") poin 3 |
| VAL-002 | SEC-03 | [LCL] Pelabuhan Tujuan | Wajib (dropdown dari Master Pelabuhan) | "tampilkan helper error & border field berubah warna error" | TMS.S013-R04 (bagian "LCL") poin 1; (bagian "Rule Umum") poin 3 |
| VAL-003 | SEC-03 | [LCL] Jumlah Kontainer | Selalu terkunci 1 (field disable) | Tidak berlaku (field tidak dapat diubah) | TMS.S013-R04 (bagian "LCL") poin 1 |
| VAL-004 | SEC-03 | [LCL] Metode Pengiriman | Wajib pilih salah satu (Door to Door / Door to CY / CY to Door / CY to CY) | "tampilkan helper error & border field berubah warna error" | TMS.S013-R04 (bagian "LCL") poin 1; (bagian "Rule Umum") poin 3 |
| VAL-005 | SEC-04 | [LTL] Kota Asal | Wajib (dropdown dari Master Kota) | "tampilkan helper error & border field berubah warna error" | TMS.S013-R04 (bagian "LTL") poin 1; (bagian "Rule Umum") poin 3 |
| VAL-006 | SEC-04 | [LTL] Kota Tujuan | Wajib (dropdown dari Master Kota) | "tampilkan helper error & border field berubah warna error" | TMS.S013-R04 (bagian "LTL") poin 1; (bagian "Rule Umum") poin 3 |
| VAL-007 | SEC-04 | [LTL] Pilihan Drop Point | Pilihan dropdown droppoint sesuai kota terpilih | Tidak disebut | TMS.S013-R04 (bagian "LTL") poin 2 |
| VAL-008 | SEC-05 | [Umum] Drop Point Asal | Wajib (dropdown dari Master Droppoint) | "tampilkan helper error & border field berubah warna error" | TMS.S013-R04 (bagian "Rule Umum") poin 1, 3 |
| VAL-009 | SEC-05 | [Umum] Drop Point Tujuan | Wajib (dropdown dari Master Droppoint) | "tampilkan helper error & border field berubah warna error" | TMS.S013-R04 (bagian "Rule Umum") poin 1, 3 |
| VAL-010 | SEC-05 | [Umum] Baris Data Pengirim/Penerima | Masing-masing hanya 1 baris; tidak dapat ditambah | Tidak disebut | TMS.S013-R04 (bagian "Rule Umum") poin 2 |
| VAL-011 | SEC-05 | [Umum] Seluruh field Step 1 (lanjut step) | Seluruh field harus terisi | "tidak dapat klik button selanjutnya => akan tampil alert pada keseluruhan field yang kosong" | TMS.S013-R04 (bagian "Rule Umum") poin 4 |
| VAL-012 | SEC-06 | [Umum] Deskripsi Barang | Wajib; hanya 1 data barang | "tampilkan helper error & border field berubah warna error" | TMS.S013-R05 poin 1, 2, 5 |
| VAL-013 | SEC-06 | [Umum] Nomor DO | Tidak wajib; boleh lebih dari satu, dipisahkan koma | Tidak disebut | TMS.S013-R05 poin 2 |
| VAL-014 | SEC-06 | [Umum] Berat (kg) / Kubikasi (m3) | Tidak wajib; tidak ada pengecekan kelebihan berat/kubikasi | Tidak ada (tidak dicek) | TMS.S013-R05 poin 2, 3 |
| VAL-015 | SEC-06 | [Umum] Seluruh field Step 2 (lanjut step) | "wajib mengisi seluruh field" (KONFLIK dengan field tidak wajib, Q-13) | "tidak dapat klik button selanjutnya => akan tampil alert pada keseluruhan field yang kosong" | TMS.S013-R05 poin 6 |
| VAL-016 | SEC-09 | [Umum] Vendor | Wajib (dropdown) | Mengikuti VAL-020 (helper error tidak disebut untuk Step 3) | TMS.S013-R06 poin 1, 6 |
| VAL-017 | SEC-09 | [Umum] Tanggal Permintaan Muat | Wajib | Mengikuti VAL-020 | TMS.S013-R06 poin 1, 6 |
| VAL-018 | SEC-09 | [Umum] Harga | Wajib, input manual | Mengikuti VAL-020 | TMS.S013-R06 poin 1, 6 |
| VAL-019 | SEC-09 | [Umum] PPN / PPH | Required bila "Gunakan Komponen Harga" dicentang | Mengikuti VAL-020 | TMS.S013-R06 poin 4, 6 |
| VAL-020 | SEC-09 | [Umum] Seluruh field Step 3 (lanjut step) | Seluruh field harus terisi | "tidak dapat klik button selanjutnya => akan tampil alert pada keseluruhan field yang kosong" | TMS.S013-R06 poin 6 |
| VAL-021 | SEC-13 | [Umum] Alasan Pembatalan | Wajib diisi saat pembatalan | Tidak disebut | TMS.S013-R09 (bagian "Pembatalan Order") poin 3 |

## 5. Acceptance Criteria (AC)
### SEC-01 · Akses Vendor & Shipper pada menu Order [Umum]
- **AC-001** (REQ-001) — **Diberikan** user Vendor membuka menu Order **Ketika** melihat order LTL/LCL **Maka** Vendor hanya dapat melihat detail data order. · Sumber: TMS.S013-R02 poin 1
- **AC-002** (REQ-002) — **Diberikan** user Shipper membuka menu Order **Ketika** mengelola order LTL/LCL **Maka** Shipper dapat mengakses keseluruhan aksi pada order. · Sumber: TMS.S013-R02 poin 2

### SEC-02 · Ketentuan Umum Order LTL & LCL
- **AC-003** (REQ-005, REQ-007) — **Diberikan** Shipper di menu Order **Ketika** membuat order LTL atau LCL melalui form "Buat Order" **Maka** pengisian terbagi 4 step: Data Pengiriman, Data Barang, Vendor & Harga, Review. · Sumber: TMS.S013-R03 poin 3, 4
- **AC-004** (REQ-006) — **Diberikan** Shipper di menu Order **Ketika** memilih input batch **Maka** tersedia tombol "Batch Order" untuk upload template Excel (rincian di TMS.S019). · Sumber: TMS.S013-R03 poin 3

### SEC-03 · Step 1 — khusus LCL
- **AC-005** (REQ-008, REQ-009) — **Diberikan** order LCL di Step 1 **Ketika** user membuka dropdown Pelabuhan Asal / Pelabuhan Tujuan **Maka** pilihan diambil dari Master Pelabuhan. · Sumber: TMS.S013-R04 (bagian "LCL") poin 1
- **AC-006** (REQ-010, VAL-003) — **Diberikan** order LCL di Step 1 **Ketika** user melihat field Jumlah Kontainer **Maka** nilai terkunci 1 dan field disable. · Sumber: TMS.S013-R04 (bagian "LCL") poin 1
- **AC-007** (REQ-011, VAL-004) — **Diberikan** order LCL di Step 1 **Ketika** user mengisi Metode Pengiriman **Maka** tersedia pilihan Door to Door / Door to CY / CY to Door / CY to CY dan wajib dipilih salah satu. · Sumber: TMS.S013-R04 (bagian "LCL") poin 1

### SEC-04 · Step 1 — khusus LTL
- **AC-008** (REQ-013, REQ-014) — **Diberikan** order LTL di Step 1 **Ketika** user membuka dropdown Kota Asal / Kota Tujuan **Maka** pilihan diambil dari Master Kota. · Sumber: TMS.S013-R04 (bagian "LTL") poin 1
- **AC-009** (REQ-015, VAL-007) — **Diberikan** order LTL dengan Kota Asal/Tujuan terpilih **Ketika** user membuka dropdown Drop Point Asal/Tujuan **Maka** pilihan droppoint sesuai dengan kota terpilih. · Sumber: TMS.S013-R04 (bagian "LTL") poin 2

### SEC-05 · Step 1 — Rule Umum
- **AC-010** (REQ-016, REQ-017) — **Diberikan** Step 1 **Ketika** user memilih Drop Point Asal/Tujuan dari Master Droppoint **Maka** detail alamat, nama perusahaan, Nama PIC, dan No. PIC ter-auto-draft. · Sumber: TMS.S013-R04 (bagian "Rule Umum") poin 1
- **AC-011** (REQ-018) — **Diberikan** PIC dan No. WhatsApp ter-draft dari Drop Point **Ketika** user mengubahnya manual **Maka** nilai dapat diubah. · Sumber: TMS.S013-R04 (bagian "Rule Umum") poin 1
- **AC-012** (REQ-019, VAL-010) — **Diberikan** order LTL atau LCL di Step 1 **Ketika** user melihat Data Pengirim & Data Penerima **Maka** masing-masing hanya 1 baris dan tidak dapat ditambah baris. · Sumber: TMS.S013-R04 (bagian "Rule Umum") poin 2
- **AC-013** (REQ-020, VAL-001, VAL-002, VAL-004, VAL-005, VAL-006, VAL-008, VAL-009) — **Diberikan** salah satu field wajib Step 1 kosong **Ketika** validasi berjalan **Maka** tampil helper error & border field berubah warna error. · Sumber: TMS.S013-R04 (bagian "Rule Umum") poin 3
- **AC-014** (REQ-021, VAL-011) — **Diberikan** masih ada field Step 1 kosong **Ketika** user mencoba lanjut dengan button "Selanjutnya" **Maka** tidak dapat lanjut dan tampil alert pada keseluruhan field yang kosong (lihat Q-12). · Sumber: TMS.S013-R04 (bagian "Rule Umum") poin 4
- **AC-015** (REQ-025) — **Diberikan** seluruh field Step 1 terisi **Ketika** klik "Selanjutnya" **Maka** beralih ke Step 2 - Data Barang. · Sumber: TMS.S013-R04 (bagian "Rule Umum") poin 4, 6
- **AC-016** (REQ-022, REQ-024) — **Diberikan** Step 1 terisi sebagian **Ketika** klik "Draf" **Maka** tampil pop up konfirmasi alert dan data yang sudah diisi tersimpan sebagai draf. · Sumber: TMS.S013-R04 (bagian "Rule Umum") poin 5, 6
- **AC-017** (REQ-023) — **Diberikan** Step 1 **Ketika** klik "Batal" **Maka** tampil pop up konfirmasi pembatalan pengisian data. · Sumber: TMS.S013-R04 (bagian "Rule Umum") poin 6

### SEC-06 · Step 2 - Data Barang [Umum]
- **AC-018** (REQ-026, VAL-012) — **Diberikan** order LTL atau LCL di Step 2 **Ketika** user mengisi data barang **Maka** hanya dapat memasukkan 1 data barang. · Sumber: TMS.S013-R05 poin 1
- **AC-019** (REQ-027, REQ-033, VAL-012) — **Diberikan** Deskripsi Barang kosong **Ketika** validasi berjalan **Maka** tampil helper error & border field berubah warna error. · Sumber: TMS.S013-R05 poin 2, 5
- **AC-020** (REQ-028, VAL-013) — **Diberikan** Step 2 **Ketika** user mengisi Nomor DO lebih dari satu dipisahkan koma **Maka** input diterima. · Sumber: TMS.S013-R05 poin 2
- **AC-021** (REQ-031, VAL-014) — **Diberikan** Step 2 **Ketika** user mengisi Berat/Kubikasi berapa pun **Maka** tidak ada pengecekan kelebihan berat/kubikasi. · Sumber: TMS.S013-R05 poin 3
- **AC-022** (REQ-038) — **Diberikan** Step 2 **Ketika** klik "Sebelumnya" **Maka** kembali ke Step 1 dan data tetap terdraft (tidak hilang). · Sumber: TMS.S013-R05 poin 8
- **AC-023** (REQ-035, REQ-036, REQ-037) — **Diberikan** Step 2 **Ketika** klik "Draf" / "Batal" **Maka** "Draf" menyimpan draf dengan pop up konfirmasi alert; "Batal" menampilkan pop up konfirmasi. · Sumber: TMS.S013-R05 poin 7, 8

### SEC-07 · Step 3 — Waktu Perjalanan khusus LTL
- **AC-024** (REQ-040) — **Diberikan** order LTL di Step 3 **Ketika** user melihat Waktu Perjalanan **Maka** tampil sebagai text field atau text only (kondisi pemilihan tidak disebut, lihat Q-05). · Sumber: TMS.S013-R06 poin 1

### SEC-08 · Step 3 — Waktu Perjalanan khusus LCL
- **AC-025** (REQ-041) — **Diberikan** order LCL di Step 3 **Ketika** user melihat field **Maka** tidak terdapat inputan Waktu Perjalanan. · Sumber: TMS.S013-R06 poin 1

### SEC-09 · Step 3 - Vendor & Harga [Umum]
- **AC-026** (REQ-046, REQ-047) — **Diberikan** checkbox "Gunakan Komponen Harga" tidak dicentang **Ketika** user melihat Step 3 **Maka** field PPN/PPH tidak ditampilkan. · Sumber: TMS.S013-R06 poin 3, 4
- **AC-027** (REQ-047, REQ-048, REQ-049, VAL-019) — **Diberikan** ada data PPN/PPH terakhir yang digunakan **Ketika** "Gunakan Komponen Harga" dicentang **Maka** field PPN/PPH tampil, bersifat required, dan persentase terisi dari data terakhir. · Sumber: TMS.S013-R06 poin 4
- **AC-028** (REQ-050) — **Diberikan** belum ada data PPN/PPH yang bisa digunakan **Ketika** "Gunakan Komponen Harga" dicentang **Maka** persentase PPN/PPH tampil kosong. · Sumber: TMS.S013-R06 poin 4
- **AC-029** (REQ-051) — **Diberikan** komponen harga digunakan **Ketika** Harga, PPN, PPH terisi **Maka** Total Harga = Harga DPP + Nilai PPN - Nilai PPH. · Sumber: TMS.S013-R06 poin 5
- **AC-030** (REQ-052, VAL-016–VAL-020) — **Diberikan** Vendor/Tanggal Permintaan Muat/Harga (atau PPN/PPH saat wajib) kosong **Ketika** user mencoba lanjut **Maka** tidak dapat lanjut dan tampil alert pada keseluruhan field yang kosong. · Sumber: TMS.S013-R06 poin 6
- **AC-031** (REQ-053–REQ-057) — **Diberikan** Step 3 **Ketika** klik "Sebelumnya" **Maka** kembali ke Step 2 dan data tetap terdraft; "Draf" menyimpan draf dengan pop up konfirmasi alert; "Batal" menampilkan pop up konfirmasi. · Sumber: TMS.S013-R06 poin 7, 8
- **AC-032** (REQ-045) — **Diberikan** order yang penugasannya sudah ditambahkan (Isi jadwal kapal) **Ketika** status "Ditugaskan" dan user membuka informasi detail **Maka** waktu perjalanan tampil (lingkup LTL/LCL belum jelas karena sumber menulis "FCL", lihat Q-02). · Sumber: TMS.S013-R06 poin 2

### SEC-10 · Step 4 - Review [Umum]
- **AC-033** (REQ-058) — **Diberikan** Step 1–3 lengkap **Ketika** user membuka Step Review **Maka** tampil ringkasan seluruh data Step 1–3 secara read-only. · Sumber: TMS.S013-R07 poin 1
- **AC-034** (REQ-062) — **Diberikan** Step Review **Ketika** klik "Simpan" **Maka** proses pembuatan order selesai dan status order menjadi "Menunggu Penugasan". · Sumber: TMS.S013-R07 poin 2
- **AC-035** (REQ-059, REQ-060, REQ-061) — **Diberikan** Step Review **Ketika** klik "Sebelumnya" / "Draf" / "Batal" **Maka** masing-masing kembali ke Step 3 dengan data tetap terdraft / menyimpan draf / menampilkan pop up konfirmasi. · Sumber: TMS.S013-R07 poin 2

### SEC-11 · Status Order [Umum]
- **AC-036** (REQ-064, REQ-073) — **Diberikan** pengisian belum selesai di step "Data Pengiriman" **Ketika** order disimpan sebagai draf **Maka** status order "Isi Data Pengiriman". · Sumber: TMS.S013-R08 poin 1, 2
- **AC-037** (REQ-065, REQ-073) — **Diberikan** pengisian belum selesai di step "Data Barang" **Ketika** order disimpan sebagai draf **Maka** status order "Isi Data Muatan". · Sumber: TMS.S013-R08 poin 1, 2
- **AC-038** (REQ-066, REQ-073) — **Diberikan** pengisian belum selesai di step "Vendor & Harga" **Ketika** order disimpan sebagai draf **Maka** status order "Isi Data Vendor". · Sumber: TMS.S013-R08 poin 1, 2
- **AC-039** (REQ-067, REQ-073) — **Diberikan** seluruh step terisi dan user di step Review **Ketika** order disimpan sebagai draf tanpa submit **Maka** status order "Review Order". · Sumber: TMS.S013-R08 poin 1, 2
- **AC-040** (REQ-069) — **Diberikan** order "Menunggu Penugasan" **Ketika** vendor melakukan penugasan **Maka** status order "Ditugaskan". · Sumber: TMS.S013-R08 poin 1
- **AC-041** (REQ-070) — **Diberikan** order "Ditugaskan" **Ketika** status penugasan armada menjadi "Dalam Perjalanan" **Maka** status order "Proses Pengiriman" (lihat Q-16). · Sumber: TMS.S013-R08 poin 1
- **AC-042** (REQ-071) — **Diberikan** order "Proses Pengiriman" **Ketika** seluruh armada berstatus penugasan "Selesai" **Maka** status order "Selesai" (lihat Q-16). · Sumber: TMS.S013-R08 poin 1
- **AC-043** (REQ-072) — **Diberikan** order dapat dibatalkan **Ketika** admin shipper membatalkan order **Maka** status order "Dibatalkan". · Sumber: TMS.S013-R08 poin 1

### SEC-12 · Hak Edit Order LTL & LCL [Umum]
- **AC-044** (REQ-074, REQ-076, REQ-085) — **Diberikan** order "Menunggu Penugasan" **Ketika** Shipper membuka Edit Order **Maka** field Jenis Pengiriman locked/read-only (field lain yang dapat diubah tidak disebut, lihat Q-03). · Sumber: TMS.S013-R09 (bagian "Hak Edit Order LTL & LCL") poin 1, 3
- **AC-045** (REQ-075, REQ-086) — **Diberikan** order "Ditugaskan" **Ketika** Shipper melihat aksi pada Daftar Order **Maka** aksi Edit tidak tersedia dan data tidak dapat diubah. · Sumber: TMS.S013-R09 (bagian "Hak Edit Order LTL & LCL") poin 2; TMS.S013-R10 poin 1
- **AC-046** (REQ-079) — **Diberikan** halaman Edit Order **Ketika** klik "Simpan" **Maka** tampil pop up konfirmasi untuk menyelesaikan pengeditan. · Sumber: TMS.S013-R09 (bagian "Hak Edit Order LTL & LCL") poin 5
- **AC-047** (REQ-078) — **Diberikan** halaman Edit Order **Ketika** klik "Batal" **Maka** tampil pop up konfirmasi pembatalan pengisian. · Sumber: TMS.S013-R09 (bagian "Hak Edit Order LTL & LCL") poin 5

### SEC-13 · Pembatalan Order [Umum]
- **AC-048** (REQ-080, REQ-083, REQ-072) — **Diberikan** order berstatus draft, "Menunggu Penugasan", atau "Ditugaskan" **Ketika** admin shipper membatalkan dengan mengisi "Alasan Pembatalan" **Maka** order dibatalkan dan berstatus "Dibatalkan". · Sumber: TMS.S013-R09 (bagian "Pembatalan Order") poin 1, 3; TMS.S013-R08 poin 1
- **AC-049** (REQ-083, VAL-021) — **Diberikan** proses pembatalan **Ketika** "Alasan Pembatalan" tidak diisi **Maka** field diperlakukan wajib (perilaku tampilan tidak disebut, lihat Q-21). · Sumber: TMS.S013-R09 (bagian "Pembatalan Order") poin 3
- **AC-050** (REQ-081) — **Diberikan** order berstatus "Proses Pengiriman" (atau setelahnya) **Ketika** user mencari aksi pembatalan **Maka** order tidak dapat dibatalkan. · Sumber: TMS.S013-R09 (bagian "Pembatalan Order") poin 1
- **AC-051** (REQ-082, REQ-001) — **Diberikan** user Vendor **Ketika** melihat order **Maka** Vendor tidak dapat membatalkan order. · Sumber: TMS.S013-R09 (bagian "Pembatalan Order") poin 2; TMS.S013-R02 poin 1

### SEC-14 · Aksi pada Daftar Order LTL & LCL [Umum]
- **AC-052** (REQ-084) — **Diberikan** order LTL/LCL berstatus Isi Data Pengiriman/Isi Data Muatan/Isi Data Vendor/Review Order **Ketika** Shipper melihat aksi baris **Maka** tersedia "Detail", "Lanjutkan Pengisian", "Batalkan Order", "Riwayat Perubahan". · Sumber: TMS.S013-R10 poin 1
- **AC-053** (REQ-085) — **Diberikan** order LTL/LCL "Menunggu Penugasan" **Ketika** Shipper melihat aksi baris **Maka** tersedia "Detail", "Edit", "Batalkan Order", "Riwayat Perubahan". · Sumber: TMS.S013-R10 poin 1
- **AC-054** (REQ-086) — **Diberikan** order LTL/LCL "Ditugaskan" **Ketika** Shipper melihat aksi baris **Maka** tersedia "Detail", "Batalkan Order", "Riwayat Perubahan" dan aksi Edit tidak tersedia. · Sumber: TMS.S013-R10 poin 1
- **AC-055** (REQ-087) — **Diberikan** halaman Daftar Order **Ketika** klik tombol "Riwayat Pembatalan" di toolbar **Maka** tampil daftar seluruh order yang pernah dibatalkan. · Sumber: TMS.S013-R10 poin 2
- **AC-056** (REQ-088) — **Diberikan** satu order di Daftar Order **Ketika** klik aksi "Riwayat Perubahan" **Maka** tampil histori perubahan order tersebut. · Sumber: TMS.S013-R10 poin 2

## 6. State / transisi
### 6.1 Status order (berlaku untuk LTL & LCL; sumber tidak membedakan)
| # | Status | Definisi (spec) | Kategori | Masuk dari / pemicu | Sumber |
|---|---|---|---|---|---|
| 1 | "Isi Data Pengiriman" | Pengisian belum selesai di step "Data Pengiriman" | Draft | Simpan draf di step Data Pengiriman | TMS.S013-R08 poin 1, 2 |
| 2 | "Isi Data Muatan" | Pengisian belum selesai di step "Data Barang" | Draft | Simpan draf di step Data Barang | TMS.S013-R08 poin 1, 2 |
| 3 | "Isi Data Vendor" | Pengisian belum selesai di step "Vendor & Harga" | Draft | Simpan draf di step Vendor & Harga | TMS.S013-R08 poin 1, 2 |
| 4 | "Review Order" | Seluruh step terisi, belum di-submit (masih di step Review) | Draft | Simpan draf di step Review | TMS.S013-R08 poin 1, 2 |
| 5 | "Menunggu Penugasan" | Data lengkap & disubmit, menunggu penugasan vendor | — | "Simpan" di Step Review | TMS.S013-R07 poin 2; TMS.S013-R08 poin 1 |
| 6 | "Ditugaskan" | Vendor sudah melakukan penugasan | — | Penugasan oleh vendor | TMS.S013-R08 poin 1 |
| 7 | "Proses Pengiriman" | Status penugasan armada "Dalam Perjalanan" | — | Status penugasan (Penugasan Tracking) | TMS.S013-R08 poin 1 |
| 8 | "Selesai" | Seluruh armada selesai bongkar (status penugasan "Selesai") | — | Status penugasan (Penugasan Tracking) | TMS.S013-R08 poin 1 |
| 9 | "Dibatalkan" | Order dibatalkan oleh admin shipper | — | Pembatalan dari status 1–6 | TMS.S013-R08 poin 1; TMS.S013-R09 (bagian "Pembatalan Order") poin 1 |

### 6.2 Aksi & hak per status
| Status | Aksi pada Daftar Order | Dapat diedit | Dapat dibatalkan | Sumber |
|---|---|---|---|---|
| Isi Data Pengiriman / Isi Data Muatan / Isi Data Vendor / Review Order | "Detail", "Lanjutkan Pengisian", "Batalkan Order", "Riwayat Perubahan" | Ya | Ya | TMS.S013-R10 poin 1; TMS.S013-R09 (Hak Edit poin 1; Pembatalan poin 1) |
| Menunggu Penugasan | "Detail", "Edit", "Batalkan Order", "Riwayat Perubahan" | Ya | Ya | TMS.S013-R10 poin 1; TMS.S013-R09 (Hak Edit poin 1; Pembatalan poin 1) |
| Ditugaskan | "Detail", "Batalkan Order", "Riwayat Perubahan" (Edit tidak tersedia) | Tidak | Ya | TMS.S013-R10 poin 1; TMS.S013-R09 (Hak Edit poin 2; Pembatalan poin 1) |
| Proses Pengiriman | Tidak disebut (Q-18) | Tidak | Tidak | TMS.S013-R09 (Hak Edit poin 2; Pembatalan poin 1) |
| Selesai | Tidak disebut (Q-18) | Tidak (setelah Ditugaskan) | Tidak (setelah Proses Pengiriman) | TMS.S013-R09 (Hak Edit poin 2; Pembatalan poin 1) |
| Dibatalkan | Tidak disebut (Q-18); tercantum pada "Riwayat Pembatalan" | Tidak disebut | — | TMS.S013-R10 poin 2 |

Toolbar Daftar Order: tombol "Riwayat Pembatalan" (TMS.S013-R10 poin 2); tombol "Batch Order" (TMS.S013-R03 poin 3).

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Master Pelabuhan (tidak ada ID spesifikasi di workbook) | [LCL] Sumber dropdown Pelabuhan Asal/Tujuan | TMS.S013-R04 (bagian "LCL") poin 1 |
| Master Kota (tidak ada ID spesifikasi di workbook; hanya disebut di TMS.S021-R08 poin 7) | [LTL] Sumber dropdown Kota Asal/Tujuan; memfilter pilihan droppoint | TMS.S013-R04 (bagian "LTL") poin 1, 2 |
| Master Drop Point (TMS.S006) | [Umum] Sumber Drop Point Asal/Tujuan; drop point aktif ditampilkan sebagai pilihan saat membuat order | TMS.S013-R04 (bagian "Rule Umum") poin 1; TMS.S006-R06 poin 1 (spec-index §3) |
| Master Waktu Perjalanan (TMS.S008) | [LTL] Waktu perjalanan dari master / tersimpan ke master dari order (disebut di S008; S013 tidak merinci kondisinya) | spec-index §3 (S008-R02 poin 3/6); TMS.S013-R06 poin 1 |
| Penugasan Tracking (TMS.S015) | [LCL] Metode Pengiriman memengaruhi tampilan (Tugaskan Sopir Bongkar); [Umum] status Ditugaskan / Proses Pengiriman / Selesai mengikuti penugasan; LTL & LCL selalu 1 card penugasan | TMS.S013-R04 (bagian "LCL") poin 2; TMS.S013-R08 poin 1; spec-index §3 (S015-R04/R06) |
| Batch Order (TMS.S019) | [Umum] Input order secara batch melalui tombol "Batch Order" | TMS.S013-R03 poin 3 |
| Dashboard Monitoring (TMS.S018) | SLA "input user saat order dibuat" | spec-index §4 no.17 |
| Pengaturan Akun / Pusat Notifikasi (TMS.S021, TMS.S022) | Level akses & Cakupan Data Order; checkbox Jenis Pengiriman; notifikasi Kapal Berlayar/Sandar kondisional FCL/LCL | spec-index §3 (S021-R08/R09/R10, S022-R02/R03) |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | Kolom E R02 tertulis "No Desain: 0770 - 079" (kemungkinan typo). Nomor desain yang benar? | TMS.S013-R02 | — | §4 no.13 |
| Q-02 | Di modul LTL & LCL tertulis "Pengisian order FCL" (R03 poin 4), "Waktu perjalanan FCL" (R06 poin 2), dan judul "Review Order FCL" (R07). Apakah berlaku untuk LTL & LCL; khususnya R06 poin 2 berlaku untuk LCL saja atau keduanya? | TMS.S013-R03 poin 4; R06 poin 2; R07 | REQ-007, REQ-045, REQ-058 | §4 no.15 |
| Q-03 | Hak Edit tidak menyebut field yang tetap dapat diubah (berbeda dengan S011/S012 poin 4); penomoran lompat ke 5. | TMS.S013-R09 (Hak Edit) | REQ-077 | §4 no.16 |
| Q-04 | SLA Dashboard "input user saat order dibuat", padahal LCL tidak punya input waktu perjalanan dan LTL dapat berupa text only. | TMS.S013-R06 poin 1 | REQ-040, REQ-041 | §4 no.17 |
| Q-05 | [LTL] Kondisi kapan Waktu Perjalanan berupa text field vs text only tidak dijelaskan di S013 (tidak ada rincian kondisi master seperti di S011-R07 poin 2), dan tidak disebut apakah text field wajib diisi. | TMS.S013-R06 poin 1 | REQ-040 | Baru |
| Q-06 | [LCL] "ETA - ETD + 4 hari": ETA/ETD diambil dari jadwal kapal di penugasan? Satuan hasil dan apakah tersimpan ke Master Waktu Perjalanan tidak disebut. | TMS.S013-R06 poin 1, 2 | REQ-041 | Baru |
| Q-07 | Step 1 LCL tidak memiliki field Jenis Kontainer dan Step 1 LTL tidak memiliki Jenis Armada/Jumlah Armada, sedangkan TMS.S015-R05 poin 2 men-draft "Jenis Armada/Kontainer, dan Jumlah Armada/Kontainer" dari data order. Apakah field tersebut memang tidak ada pada order LTL/LCL? | TMS.S013-R04 (bagian "LCL", "LTL"); TMS.S015-R05 poin 2 | REQ-008–REQ-015 | Baru |
| Q-08 | [LCL] Untuk LTL, kota terpilih memfilter pilihan droppoint; untuk LCL tidak disebut apakah Pelabuhan memfilter pilihan droppoint. | TMS.S013-R04 (bagian "LCL", "LTL") poin 2 | REQ-015, REQ-016 | Baru |
| Q-09 | "Master Pelabuhan" dan "Master Kota" tidak memiliki ID spesifikasi di workbook; sumber dan cakupan datanya perlu dikonfirmasi. | TMS.S013-R04 (bagian "LCL", "LTL") poin 1 | REQ-008, REQ-009, REQ-013, REQ-014 | Baru |
| Q-10 | Auto-draft menyebut "Nama PIC, dan No. PIC", sedangkan field yang dapat diubah disebut "PIC dan No. WhatsApp". Apakah "No. PIC" = "No. WhatsApp"? | TMS.S013-R04 (bagian "Rule Umum") poin 1 | REQ-017, REQ-018 | Baru |
| Q-11 | Edit Order mengunci field "Jenis Pengiriman", tetapi field Jenis Pengiriman tidak tercantum pada Step 1. Di mana dan kapan Jenis Pengiriman (LTL/LCL) dipilih? | TMS.S013-R09 (Hak Edit) poin 3; TMS.S013-R04 | REQ-076 | Baru |
| Q-12 | "tidak dapat klik button selanjutnya => akan tampil alert": apakah button disabled, atau button dapat diklik lalu alert tampil? | TMS.S013-R04 (Rule Umum) poin 4; R05 poin 6; R06 poin 6 | REQ-021, REQ-034, REQ-052 | Baru |
| Q-13 | Step 2 poin 6 "wajib mengisi seluruh field" bertentangan dengan poin 2 (Nomor DO, Berat, Kubikasi "Tidak Wajib diisi"). Mana yang berlaku? | TMS.S013-R05 poin 2, 6 | REQ-028–REQ-030, REQ-034 | Baru |
| Q-14 | "Besaran presentase ppn/pph mengambil dari data terakhir yang digunakan": data terakhir milik siapa (per user, per shipper, per vendor)? | TMS.S013-R06 poin 4 | REQ-049 | Baru |
| Q-15 | Rumus memakai "Harga DPP", "Nilai PPN", "Nilai PPH" sedangkan field bernama "Harga" dan PPN/PPH berupa persentase. Apakah Harga = DPP dan Nilai = persentase × DPP? | TMS.S013-R06 poin 1, 4, 5 | REQ-051 | Baru |
| Q-16 | Definisi status memakai "armada" ("status penugasan armada 'Dalam Perjalanan'", "seluruh armada sudah selesai bongkar"). Bagaimana untuk LCL (kontainer, penugasan muat/bongkar terpisah)? | TMS.S013-R08 poin 1 | REQ-070, REQ-071 | Baru |
| Q-17 | Status draft "tersimpan otomatis melalui aksi 'Simpan ke Draf'", sedangkan button bernama "Draf". Apakah label sama, dan apa arti "otomatis"? | TMS.S013-R08 poin 2; R04–R07 (Fungsi button) | REQ-073 | Baru |
| Q-18 | Aksi pada Daftar Order untuk status "Proses Pengiriman", "Selesai", "Dibatalkan" dan aksi sisi Vendor tidak disebut. | TMS.S013-R10 poin 1; TMS.S013-R02 | REQ-084–REQ-086 | Baru |
| Q-19 | Cakupan kolom B menyebut "Detail order", tetapi tidak ada rule isi halaman Detail order. | Cakupan kolom B poin 2 | REQ-001, REQ-045 | Baru |
| Q-20 | "Ditugaskan => vendor sudah melakukan penugasan", sedangkan TMS.S015-R02 membolehkan shipper menjalankan penugasan untuk vendor yang dikelola shipper. Apakah penugasan oleh shipper juga memicu "Ditugaskan"? | TMS.S013-R08 poin 1; TMS.S015-R02 | REQ-069 | Baru |
| Q-21 | Alur UI pembatalan (pop up/form) dan perilaku saat "Alasan Pembatalan" kosong tidak disebut. | TMS.S013-R09 (Pembatalan) poin 3 | REQ-083 | Baru |
| Q-22 | LTL/LCL "dapat digabung dengan pengirim lain": mekanisme penggabungan (di order atau di penugasan) tidak dijelaskan di S013. | TMS.S013-R03 poin 1, 2 | REQ-003, REQ-004 | Baru |

## 9. Catatan testability (bukan requirement)
- Transisi "Ditugaskan", "Proses Pengiriman", "Selesai" dan tampilnya waktu perjalanan (REQ-045) bergantung pada Penugasan Tracking (TMS.S015) dan status penugasan dari Driver Hub (TMS.S016).
- REQ-012 (pengaruh Metode Pengiriman LCL) hanya dapat diamati di menu Penugasan Tracking.
- REQ-001 memerlukan akun Vendor (portal vendor) di samping akun Shipper.
- REQ-008/REQ-009/REQ-013/REQ-014 memerlukan data Master Pelabuhan/Master Kota yang spesifikasinya tidak ada di workbook (Q-09).
- REQ-049/REQ-050 memerlukan riwayat penggunaan PPN/PPH sebelumnya (atau kondisi tanpa riwayat).

# TMS.S012 — Order FCL · Analysis (REQ / VAL / AC)

> Sumber: [`order-fcl_spec.md`](order-fcl_spec.md) (verbatim `Spek TMS-S` baris 58–68) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Akses Vendor & Shipper pada menu Order | TMS.S012-R02 | Vendor, Shipper | REQ-001–REQ-002 | — | AC-001–AC-002 |
| SEC-02 | Ketentuan Umum Order FCL | TMS.S012-R01, TMS.S012-R03 | Shipper | REQ-003–REQ-008 | — | AC-003–AC-005 |
| SEC-03 | Tipe Pengiriman pada Order FCL | TMS.S012-R04 | Shipper | REQ-009–REQ-017 | VAL-001 | AC-006–AC-012 |
| SEC-04 | Step 1 - Data Pengiriman | TMS.S012-R05 | Shipper | REQ-018–REQ-033 | VAL-002–VAL-010 | AC-013–AC-022 |
| SEC-05 | Step 2 - Data Barang | TMS.S012-R06 | Shipper | REQ-034–REQ-057 | VAL-011–VAL-014 | AC-023–AC-033 |
| SEC-06 | Step 3 - Vendor & Harga | TMS.S012-R07 | Shipper | REQ-058–REQ-077 | VAL-015–VAL-019 | AC-034–AC-042 |
| SEC-07 | Step 4 - Review | TMS.S012-R08 | Shipper | REQ-078–REQ-082 | — | AC-043–AC-045 |
| SEC-08 | Status Order | TMS.S012-R09 | Shipper, Vendor, Admin shipper | REQ-083–REQ-093 | — | AC-046–AC-053 |
| SEC-09 | Hak Edit Order FCL | TMS.S012-R10 (bagian "Hak Edit Order FCL") | Shipper | REQ-094–REQ-099 | — | AC-054–AC-057 |
| SEC-10 | Pembatalan Order | TMS.S012-R10 (bagian "Pembatalan Order") | Admin shipper, Vendor | REQ-100–REQ-103 | VAL-020 | AC-058–AC-061 |
| SEC-11 | Aksi pada Daftar Order (judul sumber: "Aksi pada Daftar Order FTL") | TMS.S012-R11 | Shipper | REQ-104–REQ-108 | — | AC-062–AC-066 |

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Vendor | Hanya bisa melihat detail data order ("Vendor: Lihat Detail") | TMS.S012-R02 poin 1; Cakupan kolom B poin 5 |
| Vendor | Melakukan penugasan (pemicu status "Ditugaskan") | TMS.S012-R09 poin 1 |
| Vendor | Tidak melakukan pembatalan order | TMS.S012-R10 (bagian "Pembatalan Order") poin 2 |
| Shipper | Mengakses keseluruhan aksi pada order ("Shipper: Seluruh Aksi") | TMS.S012-R02 poin 2; Cakupan kolom B poin 5 |
| Admin shipper | Melakukan pembatalan order | TMS.S012-R09 poin 1 ("Dibatalkan"); TMS.S012-R10 (bagian "Pembatalan Order") poin 2 |

## 3. Requirement (REQ)
### SEC-01 · Akses Vendor & Shipper pada menu Order
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Vendor hanya bisa melihat detail data order. | TMS.S012-R02 poin 1 | TERTULIS |
| REQ-002 | Shipper mengakses keseluruhan aksi pada order. | TMS.S012-R02 poin 2 | TERTULIS |

### SEC-02 · Ketentuan Umum Order FCL
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-003 | FCL (Full Container Load) adalah mode pengiriman menggunakan satu kontainer penuh khusus untuk satu pengirim saja (tidak digabung dengan pengirim lain). | TMS.S012-R03 poin 1 | TERTULIS |
| REQ-004 | FCL menggunakan satuan "Kontainer" (field: Jenis Kontainer, Jumlah Kontainer). | TMS.S012-R03 poin 2 | TERTULIS |
| REQ-005 | Order dapat diinput manual melalui form "Buat Order". | TMS.S012-R03 poin 3 | TERTULIS |
| REQ-006 | Order dapat diinput secara batch melalui upload template Excel (tombol "Batch Order"); rincian batch dijelaskan pada modul terpisah (TMS.S019). | TMS.S012-R03 poin 3 | TERTULIS |
| REQ-007 | Jumlah Kontainer diinput manual oleh shipper tanpa batasan. | TMS.S012-R03 poin 4 | AMBIGU (Q-18) |
| REQ-008 | Pengisian order FCL terbagi menjadi 4 step: Data Pengiriman, Data Barang, Vendor & Harga, Review. | TMS.S012-R03 poin 5; TMS.S012-R01 | TERTULIS |

### SEC-03 · Tipe Pengiriman pada Order FCL
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-009 | Satu order FCL dapat merepresentasikan lebih dari 1 kota asal dan/atau kota tujuan melalui pemilihan Tipe Pengiriman. | TMS.S012-R04 poin 1 | TERTULIS |
| REQ-010 | Tipe "Normal": Data Pengirim & Data Penerima masing-masing hanya 1 baris dan tidak dapat ditambah baris. | TMS.S012-R04 poin 2 | TERTULIS |
| REQ-011 | Tipe "Multipickup": Data Pengirim dapat ditambah baris (minimal 2 baris Pick Up); Data Penerima tetap 1 baris. | TMS.S012-R04 poin 2 | TERTULIS |
| REQ-012 | Tipe "Multidrop": Data Penerima dapat ditambah baris (minimal 2 baris Drop Off); Data Pengirim tetap 1 baris. | TMS.S012-R04 poin 2 | TERTULIS |
| REQ-013 | Tipe "Multipoint" (kombinasi Multipickup & Multidrop): Data Pengirim & Data Penerima keduanya dapat ditambah baris (minimal 2 baris Pick Up dan 2 baris Drop Off). | TMS.S012-R04 poin 2 | TERTULIS |
| REQ-014 | Saat Tipe Pengiriman dipilih Multipickup/Multidrop/Multipoint, sistem otomatis menampilkan baris pickup/drop sejumlah minimal yang disyaratkan tanpa user klik "Tambah Baris Input". | TMS.S012-R04 poin 7 | TERTULIS |
| REQ-015 | Tombol delete (hapus baris) baru tampil saat terdapat lebih dari 2 baris drop/pickup. | TMS.S012-R04 poin 8 | TERTULIS |
| REQ-016 | Sistem wajib memvalidasi agar jumlah baris tidak dapat dikurangi hingga di bawah minimal yang disyaratkan tipe pengiriman saat user menghapus baris tambahan. | TMS.S012-R04 poin 9 | TERTULIS |
| REQ-017 | Penomoran rule melompat dari poin 2 ke poin 7; poin 3–6 tidak ada di sumber. | TMS.S012-R04 | TERPOTONG (Q-02) |

### SEC-04 · Step 1 - Data Pengiriman
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-018 | Field "Pelabuhan Asal": dropdown, wajib diisi, data dari Master Pelabuhan. | TMS.S012-R05 poin 1 | TERTULIS |
| REQ-019 | Field "Pelabuhan Tujuan": dropdown, wajib diisi, data dari Master Pelabuhan. | TMS.S012-R05 poin 1 | TERTULIS |
| REQ-020 | Field "Jenis Kontainer": dropdown, wajib diisi, data dari Master Unit (Jenis Kontainer). | TMS.S012-R05 poin 1 | AMBIGU (Q-10) |
| REQ-021 | Field "Jumlah Kontainer": input angka, wajib diisi. | TMS.S012-R05 poin 1 | TERTULIS |
| REQ-022 | Field "Tipe Pengiriman": dropdown, wajib diisi, pilihan Normal/Multipickup/Multidrop/Multipoint. | TMS.S012-R05 poin 1 | TERTULIS |
| REQ-023 | Field "Metode Pengiriman": pilihan wajib salah satu (Door to Door / Door to CY / CY to Door / CY to CY). | TMS.S012-R05 poin 1 | TERTULIS |
| REQ-024 | Metode Pengiriman yang dipilih memengaruhi tampilan pada menu Penugasan Tracking. | TMS.S012-R05 poin 2 | TERTULIS |
| REQ-025 | Data Pengirim & Data Penerima: "Drop Point Asal/Tujuan" berupa dropdown, wajib diisi, mengambil data dari Master Droppoint. | TMS.S012-R05 poin 3 | TERTULIS |
| REQ-026 | Saat Drop Point dipilih, sistem auto-draft: detail alamat, nama perusahaan, Nama PIC, dan No. PIC. | TMS.S012-R05 poin 3 | AMBIGU (Q-04) |
| REQ-027 | Field PIC dan No. WhatsApp bersifat draft namun tetap dapat diubah manual oleh user. | TMS.S012-R05 poin 3 | TERTULIS |
| REQ-028 | Jika field wajib tidak diisi: tampil helper error & border field berubah warna error. | TMS.S012-R05 poin 4 | TERTULIS |
| REQ-029 | Untuk ke next step wajib mengisi seluruh field; bila ada field kosong, tidak dapat klik button selanjutnya dan tampil alert pada keseluruhan field yang kosong. | TMS.S012-R05 poin 5 | AMBIGU (Q-06) |
| REQ-030 | Dapat menyimpan sebagai draft data yang sudah diisi walaupun seluruh field belum diisi; tampil pop up konfirmasi alert. | TMS.S012-R05 poin 6 | TERTULIS |
| REQ-031 | Button "Batal": membatalkan pengisian data; tampil pop up konfirmasi. | TMS.S012-R05 poin 7 | TERTULIS |
| REQ-032 | Button "Draf": menyimpan sebagai draf data yang sudah diisi. | TMS.S012-R05 poin 7 | TERTULIS |
| REQ-033 | Button "Selanjutnya": beralih ke next step. | TMS.S012-R05 poin 7 | TERTULIS |

### SEC-05 · Step 2 - Data Barang
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-034 | Halaman menampilkan card per kontainer sesuai Jumlah Kontainer di Step 1 (contoh: 3 kontainer = Kontainer 1, Kontainer 2, Kontainer 3). | TMS.S012-R06 poin 1 | TERTULIS |
| REQ-035 | Header card menampilkan nomor Kontainer dan jenis Kontainer. | TMS.S012-R06 poin 1 | TERTULIS |
| REQ-036 | Kondisi Multipickup/Multidrop/Multipoint: seluruh alamat pickup/drop yang diinput di Step 1 auto-terdraft pada setiap kontainer. | TMS.S012-R06 poin 2 | TERTULIS |
| REQ-037 | Penambahan barang dilakukan per kombinasi alamat pada tiap kontainer. | TMS.S012-R06 poin 2 | AMBIGU (Q-08) |
| REQ-038 | Setiap kontainer dalam 1 order wajib melewati seluruh alamat asal & tujuan yang sama. | TMS.S012-R06 poin 2 | TERTULIS |
| REQ-039 | Setiap kombinasi alamat pada tiap kontainer menampilkan label "Alamat Pick Up" dan "Alamat Drop Off" di bagian atas area input barang. | TMS.S012-R06 poin 3 | TERTULIS |
| REQ-040 | Alamat asal & tujuan pada Data Barang otomatis ter-draft dari Step 1 dan bersifat disable/read only. | TMS.S012-R06 poin 4 | TERTULIS |
| REQ-041 | Hanya dapat memasukkan 1 data deskripsi barang di tiap kontainer. | TMS.S012-R06 poin 5 | AMBIGU (Q-08) |
| REQ-042 | Field "Deskripsi Barang" per card kontainer: wajib diisi. | TMS.S012-R06 poin 6 | TERTULIS |
| REQ-043 | Field "Nomor DO": tidak wajib, dapat diisi lebih dari satu, dipisahkan dengan koma. | TMS.S012-R06 poin 6 | TERTULIS |
| REQ-044 | Field "Berat (kg)": tidak wajib diisi. | TMS.S012-R06 poin 6 | TERTULIS |
| REQ-045 | Field "Kubikasi (m3)": tidak wajib diisi. | TMS.S012-R06 poin 6 | TERTULIS |
| REQ-046 | Sistem menampilkan alert bila Berat melebihi kapasitas maksimal kontainer (variasi pesan "melebihi Berat saja"). | TMS.S012-R06 poin 7 | AMBIGU (Q-09) |
| REQ-047 | Sistem menampilkan alert bila Kubikasi melebihi kapasitas maksimal kontainer (variasi pesan "melebihi Kubikasi saja"). | TMS.S012-R06 poin 7 | AMBIGU (Q-09) |
| REQ-048 | Sistem menampilkan alert bila Berat dan Kubikasi melebihi kapasitas maksimal kontainer (variasi pesan "melebihi keduanya"). | TMS.S012-R06 poin 7 | AMBIGU (Q-09) |
| REQ-049 | Alert kapasitas bersifat informasi saja (tidak memblokir); user tetap dapat melanjutkan ke step berikutnya. | TMS.S012-R06 poin 8 | TERTULIS |
| REQ-050 | Data Barang (koli/karungan) tidak mengikat spesifikasi rinci jenis barang di dalamnya, hanya mencatat pada level koli. | TMS.S012-R06 poin 9 | TERTULIS |
| REQ-051 | Jika field wajib tidak diisi: tampil helper error & border field berubah warna error. | TMS.S012-R06 poin 10 | TERTULIS |
| REQ-052 | Untuk ke next step wajib mengisi seluruh field; bila ada field kosong, tidak dapat klik button selanjutnya dan tampil alert pada keseluruhan field yang kosong. | TMS.S012-R06 poin 11 | KONFLIK (Q-07, Q-06) |
| REQ-053 | Dapat menyimpan sebagai draft walaupun seluruh field belum diisi; tampil pop up konfirmasi alert. | TMS.S012-R06 poin 12 | TERTULIS |
| REQ-054 | Button "Batal": membatalkan pengisian data; tampil pop up konfirmasi. | TMS.S012-R06 poin 13 | TERTULIS |
| REQ-055 | Button "Draf": menyimpan sebagai draf. | TMS.S012-R06 poin 13 | TERTULIS |
| REQ-056 | Button "Sebelumnya": kembali ke step sebelumnya; data tetap terdraft (tidak hilang). | TMS.S012-R06 poin 13 | TERTULIS |
| REQ-057 | Button "Selanjutnya": beralih ke next step. | TMS.S012-R06 poin 13 | TERTULIS |

### SEC-06 · Step 3 - Vendor & Harga
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-058 | Field "Vendor": dropdown, wajib diisi. | TMS.S012-R07 poin 1 | TERTULIS |
| REQ-059 | Field "Tanggal Permintaan Muat": wajib diisi. | TMS.S012-R07 poin 1 | TERTULIS |
| REQ-060 | Field "Harga": wajib diisi, input manual. | TMS.S012-R07 poin 1 | TERTULIS |
| REQ-061 | Pada FCL tidak terdapat inputan Waktu Perjalanan, karena menggunakan perhitungan "ETA - ETD + 4 hari". | TMS.S012-R07 poin 1 | AMBIGU (Q-11) |
| REQ-062 | Waktu perjalanan FCL baru diketahui saat penugasan ditambahkan (Isi jadwal kapal); waktu perjalanan baru tampil pada informasi detail saat status "Ditugaskan". | TMS.S012-R07 poin 2 | TERTULIS |
| REQ-063 | Penomoran rule melompat dari poin 2 ke poin 4; poin 3 tidak ada di sumber. | TMS.S012-R07 | TERPOTONG (Q-03) |
| REQ-064 | Tipe Multipickup/Multidrop/Multipoint: detail alamat asal/tujuan tidak ditampilkan penuh, hanya diringkas sebagai label sesuai Tipe Pengiriman. | TMS.S012-R07 poin 4 | TERTULIS |
| REQ-065 | Label ringkas berupa text link yang saat dibuka berisi daftar alamat lengkap per titik pickup/drop off. | TMS.S012-R07 poin 4 | TERTULIS |
| REQ-066 | Kalkulasi PPN & PPH bersifat opsional, diaktifkan melalui checkbox "Gunakan Komponen Harga". | TMS.S012-R07 poin 5 | TERTULIS |
| REQ-067 | Field PPN/PPH baru ditampilkan saat "Gunakan Komponen Harga" dicentang. | TMS.S012-R07 poin 6 | TERTULIS |
| REQ-068 | Field PPN/PPH bersifat required saat ditampilkan. | TMS.S012-R07 poin 6 | TERTULIS |
| REQ-069 | Besaran persentase PPN/PPH mengambil dari data terakhir yang digunakan. | TMS.S012-R07 poin 6 | AMBIGU (Q-12) |
| REQ-070 | Bila belum ada data terakhir yang bisa digunakan, persentase PPN/PPH tampil kosong. | TMS.S012-R07 poin 6 | TERTULIS |
| REQ-071 | Saat menggunakan komponen harga, sistem menghitung Total Harga = Harga DPP + Nilai PPN - Nilai PPH. | TMS.S012-R07 poin 7 | AMBIGU (Q-13) |
| REQ-072 | Untuk ke next step wajib mengisi seluruh field; bila ada field kosong, tidak dapat klik button selanjutnya dan tampil alert pada keseluruhan field yang kosong. | TMS.S012-R07 poin 8 | AMBIGU (Q-06) |
| REQ-073 | Dapat menyimpan sebagai draft walaupun seluruh field belum diisi; tampil pop up konfirmasi alert. | TMS.S012-R07 poin 9 | TERTULIS |
| REQ-074 | Button "Batal": membatalkan pengisian data; tampil pop up konfirmasi. | TMS.S012-R07 poin 10 | TERTULIS |
| REQ-075 | Button "Draf": menyimpan sebagai draf. | TMS.S012-R07 poin 10 | TERTULIS |
| REQ-076 | Button "Sebelumnya": kembali ke step sebelumnya; data tetap terdraft (tidak hilang). | TMS.S012-R07 poin 10 | TERTULIS |
| REQ-077 | Button "Selanjutnya": beralih ke next step. | TMS.S012-R07 poin 10 | TERTULIS |

### SEC-07 · Step 4 - Review
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-078 | Step Review menampilkan ringkasan seluruh data Step 1–3 secara read-only. | TMS.S012-R08 poin 1 | TERTULIS |
| REQ-079 | Button "Batal": membatalkan pengisian data; tampil pop up konfirmasi. | TMS.S012-R08 poin 2 | TERTULIS |
| REQ-080 | Button "Draf": menyimpan sebagai draf. | TMS.S012-R08 poin 2 | TERTULIS |
| REQ-081 | Button "Sebelumnya": kembali ke step sebelumnya; data tetap terdraft (tidak hilang). | TMS.S012-R08 poin 2 | TERTULIS |
| REQ-082 | Button "Simpan": menyelesaikan proses pembuatan order dan mengubah status menjadi "Menunggu Penugasan". | TMS.S012-R08 poin 2 | TERTULIS |

### SEC-08 · Status Order
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-083 | Terdapat 9 status order FCL: "Isi Data Pengiriman", "Isi Data Muatan", "Isi Data Vendor", "Review Order", "Menunggu Penugasan", "Ditugaskan", "Proses Pengiriman", "Selesai", "Dibatalkan". | TMS.S012-R09 poin 1 | TERTULIS |
| REQ-084 | "Isi Data Pengiriman" = pengisian data order belum selesai di step "Data Pengiriman". | TMS.S012-R09 poin 1 | TERTULIS |
| REQ-085 | "Isi Data Muatan" = pengisian data order belum selesai di step "Data Barang". | TMS.S012-R09 poin 1 | TERTULIS |
| REQ-086 | "Isi Data Vendor" = pengisian data order belum selesai di step "Vendor & Harga". | TMS.S012-R09 poin 1 | TERTULIS |
| REQ-087 | "Review Order" = seluruh step sudah terisi namun order belum di-submit (masih di step Review). | TMS.S012-R09 poin 1 | TERTULIS |
| REQ-088 | "Menunggu Penugasan" = seluruh data order sudah lengkap & disubmit, menunggu proses penugasan vendor. | TMS.S012-R09 poin 1 | TERTULIS |
| REQ-089 | "Ditugaskan" = vendor sudah melakukan penugasan. | TMS.S012-R09 poin 1 | AMBIGU (Q-20) |
| REQ-090 | "Proses Pengiriman" = status penugasan armada "Dalam Perjalanan". | TMS.S012-R09 poin 1 | AMBIGU (Q-14) |
| REQ-091 | "Selesai" = seluruh armada sudah selesai bongkar (status penugasan "Selesai"). | TMS.S012-R09 poin 1 | AMBIGU (Q-14) |
| REQ-092 | "Dibatalkan" = order dibatalkan oleh admin shipper. | TMS.S012-R09 poin 1 | TERTULIS |
| REQ-093 | Status 1–4 (Isi Data Pengiriman s.d. Review Order) merupakan kondisi draft, tersimpan otomatis melalui aksi "Simpan ke Draf" pada step manapun. | TMS.S012-R09 poin 2 | AMBIGU (Q-15) |

### SEC-09 · Hak Edit Order FCL
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-094 | Shipper dapat mengubah data order selama status dalam rentang draft (Isi Data Pengiriman s.d. Review Order) hingga "Menunggu Penugasan". | TMS.S012-R10 (bagian "Hak Edit Order FCL") poin 1 | TERTULIS |
| REQ-095 | Shipper tidak dapat lagi mengubah data order setelah status berubah menjadi "Ditugaskan". | TMS.S012-R10 (bagian "Hak Edit Order FCL") poin 2 | TERTULIS |
| REQ-096 | Pada halaman Edit Order, field Jenis Pengiriman dan Tipe Pengiriman locked/read-only dan tidak dapat diubah. | TMS.S012-R10 (bagian "Hak Edit Order FCL") poin 3 | AMBIGU (Q-05) |
| REQ-097 | Field Jenis Kontainer, Jumlah Kontainer, Data Pengirim, Data Penerima, Data Barang, dan Vendor & Harga tetap dapat diubah selama order berstatus dapat diedit. | TMS.S012-R10 (bagian "Hak Edit Order FCL") poin 4 | TERTULIS |
| REQ-098 | Button "Batal" (Edit): membatalkan pengisian data; tampil pop up konfirmasi. | TMS.S012-R10 (bagian "Hak Edit Order FCL") poin 5 | TERTULIS |
| REQ-099 | Button "Simpan" (Edit): menyelesaikan proses pengeditan; tampil pop up konfirmasi. | TMS.S012-R10 (bagian "Hak Edit Order FCL") poin 5 | TERTULIS |

### SEC-10 · Pembatalan Order
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-100 | Order dapat dibatalkan selama status dalam rentang draft hingga "Ditugaskan". | TMS.S012-R10 (bagian "Pembatalan Order") poin 1 | TERTULIS |
| REQ-101 | Order tidak dapat dibatalkan setelah status "Proses Pengiriman". | TMS.S012-R10 (bagian "Pembatalan Order") poin 1 | TERTULIS |
| REQ-102 | Pembatalan order dilakukan oleh admin shipper (bukan oleh vendor). | TMS.S012-R10 (bagian "Pembatalan Order") poin 2 | TERTULIS |
| REQ-103 | Field "Alasan Pembatalan" wajib diisi saat melakukan pembatalan. | TMS.S012-R10 (bagian "Pembatalan Order") poin 3 | AMBIGU (Q-21) |

### SEC-11 · Aksi pada Daftar Order (judul sumber: "Aksi pada Daftar Order FTL")
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-104 | Status Isi Data Pengiriman/Muatan/Vendor – Review Order: aksi "Detail", "Lanjutkan Pengisian", "Batalkan Order", "Riwayat Perubahan". | TMS.S012-R11 poin 1 | AMBIGU (Q-01) |
| REQ-105 | Status Menunggu Penugasan: aksi "Detail", "Edit", "Batalkan Order", "Riwayat Perubahan". | TMS.S012-R11 poin 1 | AMBIGU (Q-01) |
| REQ-106 | Status Ditugaskan: aksi "Detail", "Batalkan Order", "Riwayat Perubahan" (aksi Edit tidak tersedia). | TMS.S012-R11 poin 1 | AMBIGU (Q-01) |
| REQ-107 | Tombol "Riwayat Pembatalan" pada toolbar halaman Daftar Order menampilkan daftar seluruh order yang pernah dibatalkan. | TMS.S012-R11 poin 2 | TERTULIS |
| REQ-108 | Aksi per-baris "Riwayat Perubahan" menampilkan histori perubahan order tertentu (terpisah dari "Riwayat Pembatalan"). | TMS.S012-R11 poin 2 | TERTULIS |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-03 | Baris Data Pengirim/Penerima | Jumlah baris tidak boleh kurang dari minimal tipe (Multipickup ≥2 Pick Up; Multidrop ≥2 Drop Off; Multipoint ≥2 & ≥2); tombol delete hanya tampil bila >2 baris | Tidak disebut selain "Sistem wajib memvalidasi agar jumlah baris tidak dapat dikurangi hingga di bawah minimal" | TMS.S012-R04 poin 2, 8, 9 |
| VAL-002 | SEC-04 | Pelabuhan Asal | Wajib (dropdown dari Master Pelabuhan) | "tampilkan helper error & border field berubah warna error" | TMS.S012-R05 poin 1, 4 |
| VAL-003 | SEC-04 | Pelabuhan Tujuan | Wajib (dropdown dari Master Pelabuhan) | "tampilkan helper error & border field berubah warna error" | TMS.S012-R05 poin 1, 4 |
| VAL-004 | SEC-04 | Jenis Kontainer | Wajib (dropdown dari Master Unit (Jenis Kontainer)) | "tampilkan helper error & border field berubah warna error" | TMS.S012-R05 poin 1, 4 |
| VAL-005 | SEC-04 | Jumlah Kontainer | Wajib; input angka | "tampilkan helper error & border field berubah warna error" | TMS.S012-R05 poin 1, 4 |
| VAL-006 | SEC-04 | Tipe Pengiriman | Wajib (Normal/Multipickup/Multidrop/Multipoint) | "tampilkan helper error & border field berubah warna error" | TMS.S012-R05 poin 1, 4 |
| VAL-007 | SEC-04 | Metode Pengiriman | Wajib pilih salah satu (Door to Door / Door to CY / CY to Door / CY to CY) | "tampilkan helper error & border field berubah warna error" | TMS.S012-R05 poin 1, 4 |
| VAL-008 | SEC-04 | Drop Point Asal | Wajib (dropdown dari Master Droppoint) | "tampilkan helper error & border field berubah warna error" | TMS.S012-R05 poin 3, 4 |
| VAL-009 | SEC-04 | Drop Point Tujuan | Wajib (dropdown dari Master Droppoint) | "tampilkan helper error & border field berubah warna error" | TMS.S012-R05 poin 3, 4 |
| VAL-010 | SEC-04 | Seluruh field Step 1 (lanjut step) | Seluruh field harus terisi | "tidak dapat klik button selanjutnya => akan tampil alert pada keseluruhan field yang kosong" | TMS.S012-R05 poin 5 |
| VAL-011 | SEC-05 | Deskripsi Barang | Wajib; hanya 1 per kontainer | "tampilkan helper error & border field berubah warna error" | TMS.S012-R06 poin 5, 6, 10 |
| VAL-012 | SEC-05 | Nomor DO | Tidak wajib; boleh lebih dari satu, dipisahkan koma | Tidak disebut | TMS.S012-R06 poin 6 |
| VAL-013 | SEC-05 | Berat (kg) / Kubikasi (m3) vs kapasitas maksimal kontainer | Informasi bila melebihi; tidak memblokir | Alert 3 variasi (melebihi Berat saja / Kubikasi saja / keduanya); teks tidak disebut | TMS.S012-R06 poin 7, 8 |
| VAL-014 | SEC-05 | Seluruh field Step 2 (lanjut step) | "wajib mengisi seluruh field" (KONFLIK dengan field tidak wajib, Q-07) | "tidak dapat klik button selanjutnya => akan tampil alert pada keseluruhan field yang kosong" | TMS.S012-R06 poin 11 |
| VAL-015 | SEC-06 | Vendor | Wajib (dropdown) | Mengikuti VAL-019 (helper error tidak disebut untuk Step 3) | TMS.S012-R07 poin 1, 8 |
| VAL-016 | SEC-06 | Tanggal Permintaan Muat | Wajib | Mengikuti VAL-019 | TMS.S012-R07 poin 1, 8 |
| VAL-017 | SEC-06 | Harga | Wajib, input manual | Mengikuti VAL-019 | TMS.S012-R07 poin 1, 8 |
| VAL-018 | SEC-06 | PPN / PPH | Required bila "Gunakan Komponen Harga" dicentang | Mengikuti VAL-019 | TMS.S012-R07 poin 6, 8 |
| VAL-019 | SEC-06 | Seluruh field Step 3 (lanjut step) | Seluruh field harus terisi | "tidak dapat klik button selanjutnya => akan tampil alert pada keseluruhan field yang kosong" | TMS.S012-R07 poin 8 |
| VAL-020 | SEC-10 | Alasan Pembatalan | Wajib diisi saat pembatalan | Tidak disebut | TMS.S012-R10 (bagian "Pembatalan Order") poin 3 |

## 5. Acceptance Criteria (AC)
### SEC-01 · Akses Vendor & Shipper pada menu Order
- **AC-001** (REQ-001) — **Diberikan** user Vendor membuka menu Order **Ketika** melihat order FCL **Maka** Vendor hanya dapat melihat detail data order. · Sumber: TMS.S012-R02 poin 1
- **AC-002** (REQ-002) — **Diberikan** user Shipper membuka menu Order **Ketika** mengelola order FCL **Maka** Shipper dapat mengakses keseluruhan aksi pada order. · Sumber: TMS.S012-R02 poin 2

### SEC-02 · Ketentuan Umum Order FCL
- **AC-003** (REQ-005, REQ-008) — **Diberikan** Shipper di menu Order **Ketika** membuat order FCL melalui form "Buat Order" **Maka** pengisian terbagi 4 step: Data Pengiriman, Data Barang, Vendor & Harga, Review. · Sumber: TMS.S012-R03 poin 3, 5
- **AC-004** (REQ-006) — **Diberikan** Shipper di menu Order **Ketika** memilih input batch **Maka** tersedia tombol "Batch Order" untuk upload template Excel (rincian di TMS.S019). · Sumber: TMS.S012-R03 poin 3
- **AC-005** (REQ-004, REQ-007) — **Diberikan** Shipper di Step 1 **Ketika** mengisi Jumlah Kontainer secara manual **Maka** input diterima tanpa batasan (lihat Q-18). · Sumber: TMS.S012-R03 poin 2, 4

### SEC-03 · Tipe Pengiriman pada Order FCL
- **AC-006** (REQ-010) — **Diberikan** Tipe Pengiriman "Normal" **Ketika** user melihat Data Pengirim & Data Penerima **Maka** masing-masing hanya 1 baris dan tidak dapat ditambah baris. · Sumber: TMS.S012-R04 poin 2
- **AC-007** (REQ-011, REQ-014) — **Diberikan** Step 1 **Ketika** Tipe Pengiriman dipilih "Multipickup" **Maka** otomatis tampil minimal 2 baris Pick Up tanpa klik "Tambah Baris Input", dan Data Penerima tetap 1 baris. · Sumber: TMS.S012-R04 poin 2, 7
- **AC-008** (REQ-012, REQ-014) — **Diberikan** Step 1 **Ketika** Tipe Pengiriman dipilih "Multidrop" **Maka** otomatis tampil minimal 2 baris Drop Off tanpa klik "Tambah Baris Input", dan Data Pengirim tetap 1 baris. · Sumber: TMS.S012-R04 poin 2, 7
- **AC-009** (REQ-013, REQ-014) — **Diberikan** Step 1 **Ketika** Tipe Pengiriman dipilih "Multipoint" **Maka** otomatis tampil minimal 2 baris Pick Up dan 2 baris Drop Off. · Sumber: TMS.S012-R04 poin 2, 7
- **AC-010** (REQ-015, VAL-001) — **Diberikan** bagian pickup/drop berisi tepat 2 baris **Ketika** user melihat baris tersebut **Maka** tombol delete (hapus baris) tidak tampil. · Sumber: TMS.S012-R04 poin 8
- **AC-011** (REQ-015) — **Diberikan** bagian pickup/drop berisi lebih dari 2 baris **Ketika** user melihat baris tersebut **Maka** tombol delete (hapus baris) tampil. · Sumber: TMS.S012-R04 poin 8
- **AC-012** (REQ-016, VAL-001) — **Diberikan** Tipe Multipickup/Multidrop/Multipoint dengan baris tambahan **Ketika** user menghapus baris **Maka** jumlah baris tidak dapat berkurang di bawah minimal tipe pengiriman. · Sumber: TMS.S012-R04 poin 9

### SEC-04 · Step 1 - Data Pengiriman
- **AC-013** (REQ-018, REQ-019) — **Diberikan** Step 1 **Ketika** user membuka dropdown Pelabuhan Asal / Pelabuhan Tujuan **Maka** pilihan diambil dari Master Pelabuhan. · Sumber: TMS.S012-R05 poin 1
- **AC-014** (REQ-020) — **Diberikan** Step 1 **Ketika** user membuka dropdown Jenis Kontainer **Maka** pilihan diambil dari Master Unit (Jenis Kontainer). · Sumber: TMS.S012-R05 poin 1
- **AC-015** (REQ-023, VAL-007) — **Diberikan** Step 1 **Ketika** user mengisi Metode Pengiriman **Maka** tersedia pilihan Door to Door / Door to CY / CY to Door / CY to CY dan wajib dipilih salah satu. · Sumber: TMS.S012-R05 poin 1
- **AC-016** (REQ-025, REQ-026) — **Diberikan** Step 1 **Ketika** user memilih Drop Point Asal/Tujuan dari Master Droppoint **Maka** detail alamat, nama perusahaan, Nama PIC, dan No. PIC ter-auto-draft. · Sumber: TMS.S012-R05 poin 3
- **AC-017** (REQ-027) — **Diberikan** PIC dan No. WhatsApp ter-draft dari Drop Point **Ketika** user mengubahnya manual **Maka** nilai dapat diubah. · Sumber: TMS.S012-R05 poin 3
- **AC-018** (REQ-028, VAL-002–VAL-009) — **Diberikan** salah satu field wajib Step 1 kosong **Ketika** validasi berjalan **Maka** tampil helper error & border field berubah warna error. · Sumber: TMS.S012-R05 poin 4
- **AC-019** (REQ-029, VAL-010) — **Diberikan** masih ada field Step 1 kosong **Ketika** user mencoba lanjut dengan button "Selanjutnya" **Maka** tidak dapat lanjut dan tampil alert pada keseluruhan field yang kosong (lihat Q-06). · Sumber: TMS.S012-R05 poin 5
- **AC-020** (REQ-033) — **Diberikan** seluruh field Step 1 terisi **Ketika** klik "Selanjutnya" **Maka** beralih ke Step 2 - Data Barang. · Sumber: TMS.S012-R05 poin 5, 7
- **AC-021** (REQ-030, REQ-032) — **Diberikan** Step 1 terisi sebagian **Ketika** klik "Draf" **Maka** tampil pop up konfirmasi alert dan data yang sudah diisi tersimpan sebagai draf. · Sumber: TMS.S012-R05 poin 6, 7
- **AC-022** (REQ-031) — **Diberikan** Step 1 **Ketika** klik "Batal" **Maka** tampil pop up konfirmasi pembatalan pengisian data. · Sumber: TMS.S012-R05 poin 7

### SEC-05 · Step 2 - Data Barang
- **AC-023** (REQ-034, REQ-035) — **Diberikan** Jumlah Kontainer 3 di Step 1 **Ketika** user membuka Step 2 **Maka** tampil card Kontainer 1, Kontainer 2, Kontainer 3 dengan header nomor Kontainer dan jenis Kontainer. · Sumber: TMS.S012-R06 poin 1
- **AC-024** (REQ-036, REQ-039) — **Diberikan** Tipe Multipickup/Multidrop/Multipoint **Ketika** user membuka Step 2 **Maka** seluruh alamat pickup/drop Step 1 ter-draft pada setiap kontainer dengan label "Alamat Pick Up" dan "Alamat Drop Off" di atas area input barang. · Sumber: TMS.S012-R06 poin 2, 3
- **AC-025** (REQ-040) — **Diberikan** Step 2 **Ketika** user mencoba mengubah alamat asal/tujuan **Maka** alamat bersifat disable/read only. · Sumber: TMS.S012-R06 poin 4
- **AC-026** (REQ-042, REQ-051, VAL-011) — **Diberikan** Deskripsi Barang kosong **Ketika** validasi berjalan **Maka** tampil helper error & border field berubah warna error. · Sumber: TMS.S012-R06 poin 6, 10
- **AC-027** (REQ-043, VAL-012) — **Diberikan** Step 2 **Ketika** user mengisi Nomor DO lebih dari satu dipisahkan koma **Maka** input diterima. · Sumber: TMS.S012-R06 poin 6
- **AC-028** (REQ-046, VAL-013) — **Diberikan** Berat melebihi kapasitas maksimal kontainer, Kubikasi tidak **Ketika** diinput **Maka** tampil alert variasi melebihi Berat saja. · Sumber: TMS.S012-R06 poin 7
- **AC-029** (REQ-047, VAL-013) — **Diberikan** Kubikasi melebihi kapasitas maksimal kontainer, Berat tidak **Ketika** diinput **Maka** tampil alert variasi melebihi Kubikasi saja. · Sumber: TMS.S012-R06 poin 7
- **AC-030** (REQ-048, VAL-013) — **Diberikan** Berat dan Kubikasi melebihi kapasitas maksimal kontainer **Ketika** diinput **Maka** tampil alert variasi melebihi keduanya. · Sumber: TMS.S012-R06 poin 7
- **AC-031** (REQ-049) — **Diberikan** alert kapasitas tampil **Ketika** user klik "Selanjutnya" dengan field lain lengkap **Maka** user tetap dapat melanjutkan ke step berikutnya. · Sumber: TMS.S012-R06 poin 8
- **AC-032** (REQ-056) — **Diberikan** Step 2 **Ketika** klik "Sebelumnya" **Maka** kembali ke Step 1 dan data tetap terdraft (tidak hilang). · Sumber: TMS.S012-R06 poin 13
- **AC-033** (REQ-053, REQ-054, REQ-055) — **Diberikan** Step 2 **Ketika** klik "Draf" / "Batal" **Maka** "Draf" menyimpan draf dengan pop up konfirmasi alert; "Batal" menampilkan pop up konfirmasi. · Sumber: TMS.S012-R06 poin 12, 13

### SEC-06 · Step 3 - Vendor & Harga
- **AC-034** (REQ-061) — **Diberikan** order FCL di Step 3 **Ketika** user melihat field **Maka** tidak terdapat inputan Waktu Perjalanan. · Sumber: TMS.S012-R07 poin 1
- **AC-035** (REQ-062) — **Diberikan** order FCL yang penugasannya sudah ditambahkan (Isi jadwal kapal) **Ketika** status "Ditugaskan" dan user membuka informasi detail order **Maka** waktu perjalanan tampil. · Sumber: TMS.S012-R07 poin 2
- **AC-036** (REQ-064, REQ-065) — **Diberikan** Tipe Multipickup/Multidrop/Multipoint **Ketika** user membuka Step 3 **Maka** alamat asal/tujuan tampil ringkas sebagai label text link yang saat dibuka berisi daftar alamat lengkap per titik pickup/drop off. · Sumber: TMS.S012-R07 poin 4
- **AC-037** (REQ-066, REQ-067) — **Diberikan** checkbox "Gunakan Komponen Harga" tidak dicentang **Ketika** user melihat Step 3 **Maka** field PPN/PPH tidak ditampilkan. · Sumber: TMS.S012-R07 poin 5, 6
- **AC-038** (REQ-067, REQ-068, REQ-069, VAL-018) — **Diberikan** ada data PPN/PPH terakhir yang digunakan **Ketika** "Gunakan Komponen Harga" dicentang **Maka** field PPN/PPH tampil, bersifat required, dan persentase terisi dari data terakhir. · Sumber: TMS.S012-R07 poin 6
- **AC-039** (REQ-070) — **Diberikan** belum ada data PPN/PPH yang bisa digunakan **Ketika** "Gunakan Komponen Harga" dicentang **Maka** persentase PPN/PPH tampil kosong. · Sumber: TMS.S012-R07 poin 6
- **AC-040** (REQ-071) — **Diberikan** komponen harga digunakan **Ketika** Harga, PPN, PPH terisi **Maka** Total Harga = Harga DPP + Nilai PPN - Nilai PPH. · Sumber: TMS.S012-R07 poin 7
- **AC-041** (REQ-072, VAL-015–VAL-019) — **Diberikan** Vendor/Tanggal Permintaan Muat/Harga (atau PPN/PPH saat wajib) kosong **Ketika** user mencoba lanjut **Maka** tidak dapat lanjut dan tampil alert pada keseluruhan field yang kosong. · Sumber: TMS.S012-R07 poin 8
- **AC-042** (REQ-073–REQ-077) — **Diberikan** Step 3 **Ketika** klik "Sebelumnya" **Maka** kembali ke Step 2 dan data tetap terdraft; "Draf" menyimpan draf dengan pop up konfirmasi alert; "Batal" menampilkan pop up konfirmasi. · Sumber: TMS.S012-R07 poin 9, 10

### SEC-07 · Step 4 - Review
- **AC-043** (REQ-078) — **Diberikan** Step 1–3 lengkap **Ketika** user membuka Step Review **Maka** tampil ringkasan seluruh data Step 1–3 secara read-only. · Sumber: TMS.S012-R08 poin 1
- **AC-044** (REQ-082) — **Diberikan** Step Review **Ketika** klik "Simpan" **Maka** proses pembuatan order selesai dan status order menjadi "Menunggu Penugasan". · Sumber: TMS.S012-R08 poin 2
- **AC-045** (REQ-079, REQ-080, REQ-081) — **Diberikan** Step Review **Ketika** klik "Sebelumnya" / "Draf" / "Batal" **Maka** masing-masing kembali ke Step 3 dengan data tetap terdraft / menyimpan draf / menampilkan pop up konfirmasi. · Sumber: TMS.S012-R08 poin 2

### SEC-08 · Status Order
- **AC-046** (REQ-084, REQ-093) — **Diberikan** pengisian belum selesai di step "Data Pengiriman" **Ketika** order disimpan sebagai draf **Maka** status order "Isi Data Pengiriman". · Sumber: TMS.S012-R09 poin 1, 2
- **AC-047** (REQ-085, REQ-093) — **Diberikan** pengisian belum selesai di step "Data Barang" **Ketika** order disimpan sebagai draf **Maka** status order "Isi Data Muatan". · Sumber: TMS.S012-R09 poin 1, 2
- **AC-048** (REQ-086, REQ-093) — **Diberikan** pengisian belum selesai di step "Vendor & Harga" **Ketika** order disimpan sebagai draf **Maka** status order "Isi Data Vendor". · Sumber: TMS.S012-R09 poin 1, 2
- **AC-049** (REQ-087, REQ-093) — **Diberikan** seluruh step terisi dan user di step Review **Ketika** order disimpan sebagai draf tanpa submit **Maka** status order "Review Order". · Sumber: TMS.S012-R09 poin 1, 2
- **AC-050** (REQ-089) — **Diberikan** order "Menunggu Penugasan" **Ketika** vendor melakukan penugasan **Maka** status order "Ditugaskan". · Sumber: TMS.S012-R09 poin 1
- **AC-051** (REQ-090) — **Diberikan** order "Ditugaskan" **Ketika** status penugasan armada menjadi "Dalam Perjalanan" **Maka** status order "Proses Pengiriman" (lihat Q-14). · Sumber: TMS.S012-R09 poin 1
- **AC-052** (REQ-091) — **Diberikan** order "Proses Pengiriman" **Ketika** seluruh armada berstatus penugasan "Selesai" **Maka** status order "Selesai" (lihat Q-14). · Sumber: TMS.S012-R09 poin 1
- **AC-053** (REQ-092) — **Diberikan** order dapat dibatalkan **Ketika** admin shipper membatalkan order **Maka** status order "Dibatalkan". · Sumber: TMS.S012-R09 poin 1

### SEC-09 · Hak Edit Order FCL
- **AC-054** (REQ-094, REQ-096, REQ-097, REQ-105) — **Diberikan** order "Menunggu Penugasan" **Ketika** Shipper membuka Edit Order **Maka** Jenis Pengiriman & Tipe Pengiriman locked/read-only, sedangkan Jenis Kontainer, Jumlah Kontainer, Data Pengirim, Data Penerima, Data Barang, Vendor & Harga dapat diubah. · Sumber: TMS.S012-R10 (bagian "Hak Edit Order FCL") poin 1, 3, 4
- **AC-055** (REQ-095, REQ-106) — **Diberikan** order "Ditugaskan" **Ketika** Shipper melihat aksi pada Daftar Order **Maka** aksi Edit tidak tersedia dan data tidak dapat diubah. · Sumber: TMS.S012-R10 (bagian "Hak Edit Order FCL") poin 2; TMS.S012-R11 poin 1
- **AC-056** (REQ-099) — **Diberikan** halaman Edit Order **Ketika** klik "Simpan" **Maka** tampil pop up konfirmasi untuk menyelesaikan pengeditan. · Sumber: TMS.S012-R10 (bagian "Hak Edit Order FCL") poin 5
- **AC-057** (REQ-098) — **Diberikan** halaman Edit Order **Ketika** klik "Batal" **Maka** tampil pop up konfirmasi pembatalan pengisian. · Sumber: TMS.S012-R10 (bagian "Hak Edit Order FCL") poin 5

### SEC-10 · Pembatalan Order
- **AC-058** (REQ-100, REQ-103, REQ-092) — **Diberikan** order berstatus draft, "Menunggu Penugasan", atau "Ditugaskan" **Ketika** admin shipper membatalkan dengan mengisi "Alasan Pembatalan" **Maka** order dibatalkan dan berstatus "Dibatalkan". · Sumber: TMS.S012-R10 (bagian "Pembatalan Order") poin 1, 3; TMS.S012-R09 poin 1
- **AC-059** (REQ-103, VAL-020) — **Diberikan** proses pembatalan **Ketika** "Alasan Pembatalan" tidak diisi **Maka** field diperlakukan wajib (perilaku tampilan tidak disebut, lihat Q-21). · Sumber: TMS.S012-R10 (bagian "Pembatalan Order") poin 3
- **AC-060** (REQ-101) — **Diberikan** order berstatus "Proses Pengiriman" (atau setelahnya) **Ketika** user mencari aksi pembatalan **Maka** order tidak dapat dibatalkan. · Sumber: TMS.S012-R10 (bagian "Pembatalan Order") poin 1
- **AC-061** (REQ-102, REQ-001) — **Diberikan** user Vendor **Ketika** melihat order **Maka** Vendor tidak dapat membatalkan order. · Sumber: TMS.S012-R10 (bagian "Pembatalan Order") poin 2; TMS.S012-R02 poin 1

### SEC-11 · Aksi pada Daftar Order
- **AC-062** (REQ-104) — **Diberikan** order FCL berstatus Isi Data Pengiriman/Isi Data Muatan/Isi Data Vendor/Review Order **Ketika** Shipper melihat aksi baris **Maka** tersedia "Detail", "Lanjutkan Pengisian", "Batalkan Order", "Riwayat Perubahan". · Sumber: TMS.S012-R11 poin 1
- **AC-063** (REQ-105) — **Diberikan** order FCL "Menunggu Penugasan" **Ketika** Shipper melihat aksi baris **Maka** tersedia "Detail", "Edit", "Batalkan Order", "Riwayat Perubahan". · Sumber: TMS.S012-R11 poin 1
- **AC-064** (REQ-106) — **Diberikan** order FCL "Ditugaskan" **Ketika** Shipper melihat aksi baris **Maka** tersedia "Detail", "Batalkan Order", "Riwayat Perubahan" dan aksi Edit tidak tersedia. · Sumber: TMS.S012-R11 poin 1
- **AC-065** (REQ-107) — **Diberikan** halaman Daftar Order **Ketika** klik tombol "Riwayat Pembatalan" di toolbar **Maka** tampil daftar seluruh order yang pernah dibatalkan. · Sumber: TMS.S012-R11 poin 2
- **AC-066** (REQ-108) — **Diberikan** satu order di Daftar Order **Ketika** klik aksi "Riwayat Perubahan" **Maka** tampil histori perubahan order tersebut. · Sumber: TMS.S012-R11 poin 2

## 6. State / transisi
### 6.1 Status order
| # | Status | Definisi (spec) | Kategori | Masuk dari / pemicu | Sumber |
|---|---|---|---|---|---|
| 1 | "Isi Data Pengiriman" | Pengisian belum selesai di step "Data Pengiriman" | Draft | Simpan draf di step Data Pengiriman | TMS.S012-R09 poin 1, 2 |
| 2 | "Isi Data Muatan" | Pengisian belum selesai di step "Data Barang" | Draft | Simpan draf di step Data Barang | TMS.S012-R09 poin 1, 2 |
| 3 | "Isi Data Vendor" | Pengisian belum selesai di step "Vendor & Harga" | Draft | Simpan draf di step Vendor & Harga | TMS.S012-R09 poin 1, 2 |
| 4 | "Review Order" | Seluruh step terisi, belum di-submit (masih di step Review) | Draft | Simpan draf di step Review | TMS.S012-R09 poin 1, 2 |
| 5 | "Menunggu Penugasan" | Data lengkap & disubmit, menunggu penugasan vendor | — | "Simpan" di Step Review | TMS.S012-R08 poin 2; TMS.S012-R09 poin 1 |
| 6 | "Ditugaskan" | Vendor sudah melakukan penugasan; waktu perjalanan FCL mulai tampil di detail | — | Penugasan (Isi jadwal kapal) | TMS.S012-R09 poin 1; TMS.S012-R07 poin 2 |
| 7 | "Proses Pengiriman" | Status penugasan armada "Dalam Perjalanan" | — | Status penugasan (Penugasan Tracking) | TMS.S012-R09 poin 1 |
| 8 | "Selesai" | Seluruh armada selesai bongkar (status penugasan "Selesai") | — | Status penugasan (Penugasan Tracking) | TMS.S012-R09 poin 1 |
| 9 | "Dibatalkan" | Order dibatalkan oleh admin shipper | — | Pembatalan dari status 1–6 | TMS.S012-R09 poin 1; TMS.S012-R10 (bagian "Pembatalan Order") poin 1 |

### 6.2 Aksi & hak per status
| Status | Aksi pada Daftar Order | Dapat diedit | Dapat dibatalkan | Sumber |
|---|---|---|---|---|
| Isi Data Pengiriman / Isi Data Muatan / Isi Data Vendor / Review Order | "Detail", "Lanjutkan Pengisian", "Batalkan Order", "Riwayat Perubahan" | Ya | Ya | TMS.S012-R11 poin 1; TMS.S012-R10 (Hak Edit poin 1; Pembatalan poin 1) |
| Menunggu Penugasan | "Detail", "Edit", "Batalkan Order", "Riwayat Perubahan" | Ya | Ya | TMS.S012-R11 poin 1; TMS.S012-R10 (Hak Edit poin 1; Pembatalan poin 1) |
| Ditugaskan | "Detail", "Batalkan Order", "Riwayat Perubahan" (Edit tidak tersedia) | Tidak | Ya | TMS.S012-R11 poin 1; TMS.S012-R10 (Hak Edit poin 2; Pembatalan poin 1) |
| Proses Pengiriman | Tidak disebut (Q-16) | Tidak | Tidak | TMS.S012-R10 (Hak Edit poin 2; Pembatalan poin 1) |
| Selesai | Tidak disebut (Q-16) | Tidak (setelah Ditugaskan) | Tidak (setelah Proses Pengiriman) | TMS.S012-R10 (Hak Edit poin 2; Pembatalan poin 1) |
| Dibatalkan | Tidak disebut (Q-16); tercantum pada "Riwayat Pembatalan" | Tidak disebut | — | TMS.S012-R11 poin 2 |

Catatan: tabel aksi bersumber dari TMS.S012-R11 yang berjudul "Aksi pada Daftar Order FTL" (Q-01). Toolbar Daftar Order: tombol "Riwayat Pembatalan" (TMS.S012-R11 poin 2); tombol "Batch Order" (TMS.S012-R03 poin 3).

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Master Pelabuhan (tidak ada ID spesifikasi di workbook) | Sumber dropdown Pelabuhan Asal/Tujuan | TMS.S012-R05 poin 1 |
| Master Unit (TMS.S009) | Sumber dropdown Jenis Kontainer ("Master Unit (Jenis Kontainer)") | TMS.S012-R05 poin 1 |
| Master Drop Point (TMS.S006) | Sumber Drop Point Asal/Tujuan; drop point aktif ditampilkan sebagai pilihan saat membuat order | TMS.S012-R05 poin 3; TMS.S006-R06 poin 1 (spec-index §3) |
| Penugasan Tracking (TMS.S015) | Metode Pengiriman memengaruhi tampilan (Tugaskan Sopir Bongkar); waktu perjalanan dari jadwal kapal saat penugasan; status Ditugaskan / Proses Pengiriman / Selesai mengikuti penugasan | TMS.S012-R05 poin 2; TMS.S012-R07 poin 2; TMS.S012-R09 poin 1 (spec-index §3: S015-R04/R06) |
| Batch Order (TMS.S019) | Input order secara batch melalui tombol "Batch Order" | TMS.S012-R03 poin 3 |
| Dashboard Monitoring (TMS.S018) | SLA "input user saat order dibuat" padahal FCL tidak punya input waktu perjalanan | spec-index §4 no.17 |
| Pusat Notifikasi / Pengaturan Akun (TMS.S022, TMS.S021) | Notifikasi Kapal Berlayar/Sandar kondisional pada Jenis Pengiriman FCL/LCL; level akses & Cakupan Data Order; checkbox Jenis Pengiriman | spec-index §3 (S021-R08/R09/R10, S022-R02/R03) |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | R11 berjudul "Aksi pada Daftar Order FTL" padahal berada di modul FCL. Apakah aturan aksi ini berlaku untuk order FCL? | TMS.S012-R11 | REQ-104–REQ-106 | §4 no.14 |
| Q-02 | Penomoran R04 melompat dari poin 2 ke poin 7. Apakah poin 3–6 hilang/terpotong atau hanya salah penomoran? | TMS.S012-R04 | REQ-017 | Baru |
| Q-03 | Penomoran R07 melompat dari poin 2 ke poin 4. Apakah poin 3 hilang (mis. aturan tertentu Waktu Perjalanan)? | TMS.S012-R07 | REQ-063 | Baru |
| Q-04 | Auto-draft menyebut "Nama PIC, dan No. PIC", sedangkan field yang dapat diubah disebut "PIC dan No. WhatsApp". Apakah "No. PIC" = "No. WhatsApp"? | TMS.S012-R05 poin 3 | REQ-026, REQ-027 | Baru |
| Q-05 | Edit Order mengunci field "Jenis Pengiriman", tetapi field Jenis Pengiriman tidak tercantum pada daftar field Step 1. Di mana dan kapan Jenis Pengiriman (FCL) dipilih? | TMS.S012-R10 (Hak Edit) poin 3; TMS.S012-R05 poin 1 | REQ-096 | Baru |
| Q-06 | "tidak dapat klik button selanjutnya => akan tampil alert": apakah button disabled, atau button dapat diklik lalu alert tampil? | TMS.S012-R05 poin 5; R06 poin 11; R07 poin 8 | REQ-029, REQ-052, REQ-072 | Baru |
| Q-07 | Step 2 poin 11 "wajib mengisi seluruh field" bertentangan dengan poin 6 (Nomor DO, Berat, Kubikasi "Tidak Wajib diisi"). Mana yang berlaku? | TMS.S012-R06 poin 6, 11 | REQ-043–REQ-045, REQ-052 | Baru |
| Q-08 | Poin 5 "Hanya dapat memasukkan 1 data deskripsi barang di tiap kontainer" vs poin 2 "Penambahan barang dilakukan per kombinasi alamat pada tiap kontainer". Untuk Multi, 1 deskripsi per kontainer atau per kombinasi alamat? | TMS.S012-R06 poin 2, 5 | REQ-037, REQ-041 | Baru |
| Q-09 | Teks 3 variasi pesan alert kapasitas tidak ditulis; sumber "kapasitas maksimal kontainer" tidak disebut. | TMS.S012-R06 poin 7 | REQ-046–REQ-048 | Baru |
| Q-10 | "Master Pelabuhan" tidak memiliki ID spesifikasi di workbook, dan spesifikasi Master Unit (TMS.S009) tidak menyebut "Jenis Kontainer". Sumber data dropdown Jenis Kontainer & Pelabuhan perlu dikonfirmasi. | TMS.S012-R05 poin 1 | REQ-018–REQ-020 | Baru |
| Q-11 | "ETA - ETD + 4 hari": ETA/ETD diambil dari jadwal kapal di penugasan? Satuan hasil (hari/jam) dan apakah tersimpan ke Master Waktu Perjalanan tidak disebut. | TMS.S012-R07 poin 1, 2 | REQ-061, REQ-062 | Baru |
| Q-12 | "Besaran presentase ppn/pph mengambil dari data terakhir yang digunakan": data terakhir milik siapa (per user, per shipper, per vendor)? | TMS.S012-R07 poin 6 | REQ-069 | Baru |
| Q-13 | Rumus memakai "Harga DPP", "Nilai PPN", "Nilai PPH" sedangkan field bernama "Harga" dan PPN/PPH berupa persentase. Apakah Harga = DPP dan Nilai = persentase × DPP? | TMS.S012-R07 poin 1, 6, 7 | REQ-071 | Baru |
| Q-14 | Definisi status FCL memakai istilah "armada" ("status penugasan armada 'Dalam Perjalanan'", "seluruh armada sudah selesai bongkar"). Untuk FCL dengan beberapa kontainer dan penugasan muat/bongkar terpisah, satu armada/kontainer cukup atau harus seluruhnya? | TMS.S012-R09 poin 1 | REQ-090, REQ-091 | Baru |
| Q-15 | Status draft "tersimpan otomatis melalui aksi 'Simpan ke Draf'", sedangkan button bernama "Draf". Apakah label sama, dan apa arti "otomatis"? | TMS.S012-R09 poin 2; R05–R08 (Fungsi button) | REQ-093 | Baru |
| Q-16 | Aksi pada Daftar Order untuk status "Proses Pengiriman", "Selesai", "Dibatalkan" dan aksi sisi Vendor tidak disebut. | TMS.S012-R11 poin 1; TMS.S012-R02 | REQ-104–REQ-106 | Baru |
| Q-17 | Cakupan kolom B menyebut "Detail order", tetapi tidak ada rule isi halaman Detail order (selain waktu perjalanan tampil saat "Ditugaskan"). | Cakupan kolom B poin 3; TMS.S012-R07 poin 2 | REQ-001, REQ-062 | Baru |
| Q-18 | "Jumlah Kontainer diinput manual oleh shipper tanpa batasan": apakah nilai 0/negatif diperbolehkan; batas bawah? | TMS.S012-R03 poin 4 | REQ-007 | Baru |
| Q-19 | SLA pada Dashboard disebut "input user saat order dibuat", padahal FCL tidak punya input waktu perjalanan. | TMS.S012-R07 poin 1 | REQ-061 | §4 no.17 |
| Q-20 | "Ditugaskan => vendor sudah melakukan penugasan", sedangkan TMS.S015-R02 membolehkan shipper menjalankan penugasan untuk vendor yang dikelola shipper. Apakah penugasan oleh shipper juga memicu "Ditugaskan"? | TMS.S012-R09 poin 1; TMS.S015-R02 | REQ-089 | Baru |
| Q-21 | Alur UI pembatalan (pop up/form) dan perilaku saat "Alasan Pembatalan" kosong tidak disebut. | TMS.S012-R10 (Pembatalan) poin 3 | REQ-103 | Baru |

## 9. Catatan testability (bukan requirement)
- Transisi "Ditugaskan", "Proses Pengiriman", "Selesai" dan tampilnya waktu perjalanan (REQ-062) bergantung pada Penugasan Tracking (TMS.S015, isi jadwal kapal) dan status penugasan dari Driver Hub (TMS.S016).
- REQ-024 (pengaruh Metode Pengiriman) hanya dapat diamati di menu Penugasan Tracking.
- REQ-001 memerlukan akun Vendor (portal vendor) di samping akun Shipper.
- REQ-018–REQ-020 memerlukan data Master Pelabuhan dan Jenis Kontainer yang spesifikasinya tidak ada di workbook (Q-10).
- REQ-069/REQ-070 memerlukan riwayat penggunaan PPN/PPH sebelumnya (atau kondisi tanpa riwayat).

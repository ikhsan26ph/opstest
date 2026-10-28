# TMS.S011 — Order FTL · Analysis (REQ / VAL / AC)

> Sumber: [`order-ftl_spec.md`](order-ftl_spec.md) (verbatim `Spek TMS-S` baris 46–56) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Akses Vendor & Shipper pada menu Order | TMS.S011-R02 | Vendor, Shipper | REQ-001–REQ-002 | — | AC-001–AC-002 |
| SEC-02 | Ketentuan Umum Order FTL | TMS.S011-R01, TMS.S011-R03 | Shipper | REQ-003–REQ-008 | — | AC-003–AC-005 |
| SEC-03 | Tipe Pengiriman pada Order FTL | TMS.S011-R04 | Shipper | REQ-009–REQ-017 | VAL-001 | AC-006–AC-012 |
| SEC-04 | Step 1 - Data Pengiriman | TMS.S011-R05 | Shipper | REQ-018–REQ-029 | VAL-002–VAL-007 | AC-013–AC-020 |
| SEC-05 | Step 2 - Data Barang | TMS.S011-R06 | Shipper | REQ-030–REQ-053 | VAL-008–VAL-011 | AC-021–AC-031 |
| SEC-06 | Step 3 - Vendor & Harga | TMS.S011-R07 | Shipper | REQ-054–REQ-073 | VAL-012–VAL-017 | AC-032–AC-040 |
| SEC-07 | Step 4 - Review | TMS.S011-R08 | Shipper | REQ-074–REQ-078 | — | AC-041–AC-043 |
| SEC-08 | Status Order | TMS.S011-R09 | Shipper, Vendor, Admin shipper | REQ-079–REQ-089 | — | AC-044–AC-051 |
| SEC-09 | Hak Edit Order FTL | TMS.S011-R10 (bagian "Hak Edit Order FTL") | Shipper | REQ-090–REQ-095 | — | AC-052–AC-055 |
| SEC-10 | Pembatalan Order | TMS.S011-R10 (bagian "Pembatalan Order") | Admin shipper, Vendor | REQ-096–REQ-099 | VAL-018 | AC-056–AC-059 |
| SEC-11 | Aksi pada Daftar Order FTL | TMS.S011-R11 | Shipper | REQ-100–REQ-104 | — | AC-060–AC-064 |

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Vendor | Hanya bisa melihat detail data order ("Vendor: Lihat Detail") | TMS.S011-R02 poin 1; Cakupan kolom B poin 5 |
| Vendor | Melakukan penugasan (pemicu status "Ditugaskan") | TMS.S011-R09 poin 1 |
| Vendor | Tidak melakukan pembatalan order | TMS.S011-R10 (bagian "Pembatalan Order") poin 2 |
| Shipper | Mengakses keseluruhan aksi pada order ("Shipper: Seluruh Aksi") | TMS.S011-R02 poin 2; Cakupan kolom B poin 5 |
| Admin shipper | Melakukan pembatalan order | TMS.S011-R09 poin 1 ("Dibatalkan"); TMS.S011-R10 (bagian "Pembatalan Order") poin 2 |

## 3. Requirement (REQ)
### SEC-01 · Akses Vendor & Shipper pada menu Order
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Vendor hanya bisa melihat detail data order. | TMS.S011-R02 poin 1 | TERTULIS |
| REQ-002 | Shipper mengakses keseluruhan aksi pada order. | TMS.S011-R02 poin 2 | TERTULIS |

### SEC-02 · Ketentuan Umum Order FTL
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-003 | FTL (Full Truck Load) adalah mode pengiriman menggunakan satu truk penuh khusus untuk satu pengirim saja (tidak digabung dengan pengirim lain). | TMS.S011-R03 poin 1 | TERTULIS |
| REQ-004 | FTL menggunakan satuan "Armada" (field: Jenis Armada, Jumlah Armada). | TMS.S011-R03 poin 2 | TERTULIS |
| REQ-005 | Order dapat diinput manual melalui form "Buat Order". | TMS.S011-R03 poin 3 | TERTULIS |
| REQ-006 | Order dapat diinput secara batch melalui upload template Excel (tombol "Batch Order"); rincian batch dijelaskan pada modul terpisah (TMS.S019). | TMS.S011-R03 poin 3 | TERTULIS |
| REQ-007 | Jumlah Armada diinput manual oleh shipper tanpa batasan. | TMS.S011-R03 poin 4 | AMBIGU (Q-16) |
| REQ-008 | Pengisian order FTL terbagi menjadi 4 step: Data Pengiriman, Data Barang, Vendor & Harga, Review. | TMS.S011-R03 poin 5; TMS.S011-R01 | TERTULIS |

### SEC-03 · Tipe Pengiriman pada Order FTL
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-009 | Satu order FTL dapat merepresentasikan lebih dari 1 kota asal dan/atau kota tujuan melalui pemilihan Tipe Pengiriman. | TMS.S011-R04 poin 1 | TERTULIS |
| REQ-010 | Tipe "Normal": Data Pengirim & Data Penerima masing-masing hanya 1 baris dan tidak dapat ditambah baris. | TMS.S011-R04 poin 2 | TERTULIS |
| REQ-011 | Tipe "Multipickup": Data Pengirim dapat ditambah baris (minimal 2 baris Pick Up); Data Penerima tetap 1 baris. | TMS.S011-R04 poin 2 | TERTULIS |
| REQ-012 | Tipe "Multidrop": Data Penerima dapat ditambah baris (minimal 2 baris Drop Off); Data Pengirim tetap 1 baris. | TMS.S011-R04 poin 2 | TERTULIS |
| REQ-013 | Tipe "Multipoint" (kombinasi Multipickup & Multidrop): Data Pengirim & Data Penerima keduanya dapat ditambah baris (minimal 2 baris Pick Up dan 2 baris Drop Off). | TMS.S011-R04 poin 2 | TERTULIS |
| REQ-014 | Saat Tipe Pengiriman dipilih Multipickup/Multidrop/Multipoint, sistem otomatis menampilkan baris pickup/drop sejumlah minimal yang disyaratkan tanpa user klik "Tambah Baris Input". | TMS.S011-R04 poin 7 | TERTULIS |
| REQ-015 | Tombol delete (hapus baris) baru tampil saat terdapat lebih dari 2 baris drop/pickup. | TMS.S011-R04 poin 8 | TERTULIS |
| REQ-016 | Sistem wajib memvalidasi agar jumlah baris tidak dapat dikurangi hingga di bawah minimal yang disyaratkan tipe pengiriman saat user menghapus baris tambahan. | TMS.S011-R04 poin 9 | TERTULIS |
| REQ-017 | Penomoran rule melompat dari poin 2 ke poin 7; poin 3–6 tidak ada di sumber. | TMS.S011-R04 | TERPOTONG (Q-02) |

### SEC-04 · Step 1 - Data Pengiriman
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-018 | Field "Jenis Armada": dropdown, wajib diisi, data diambil dari Master Unit (Jenis Armada). | TMS.S011-R05 poin 1 | TERTULIS |
| REQ-019 | Field "Jumlah Armada": input angka, wajib diisi. | TMS.S011-R05 poin 1 | TERTULIS |
| REQ-020 | Field "Tipe Pengiriman": dropdown, wajib diisi, pilihan Normal/Multipickup/Multidrop/Multipoint. | TMS.S011-R05 poin 1 | TERTULIS |
| REQ-021 | Data Pengirim & Data Penerima: "Drop Point Asal/Tujuan" berupa dropdown, wajib diisi, mengambil data dari Master Droppoint. | TMS.S011-R05 poin 2 | TERTULIS |
| REQ-022 | Saat Drop Point dipilih, sistem auto-draft: detail alamat, nama perusahaan, Nama PIC, dan No. PIC. | TMS.S011-R05 poin 2 | AMBIGU (Q-03) |
| REQ-023 | Field PIC dan No. WhatsApp bersifat draft namun tetap dapat diubah manual oleh user. | TMS.S011-R05 poin 2 | TERTULIS |
| REQ-024 | Jika field wajib tidak diisi: tampil helper error & border field berubah warna error. | TMS.S011-R05 poin 3 | TERTULIS |
| REQ-025 | Untuk ke next step wajib mengisi seluruh field; bila ada field kosong, tidak dapat klik button selanjutnya dan tampil alert pada keseluruhan field yang kosong. | TMS.S011-R05 poin 4 | AMBIGU (Q-05) |
| REQ-026 | Dapat menyimpan sebagai draft data yang sudah diisi walaupun seluruh field belum diisi; tampil pop up konfirmasi alert. | TMS.S011-R05 poin 5 | TERTULIS |
| REQ-027 | Button "Batal": membatalkan pengisian data; tampil pop up konfirmasi. | TMS.S011-R05 poin 6 | TERTULIS |
| REQ-028 | Button "Draf": menyimpan sebagai draf data yang sudah diisi. | TMS.S011-R05 poin 6 | TERTULIS |
| REQ-029 | Button "Selanjutnya": beralih ke next step. | TMS.S011-R05 poin 6 | TERTULIS |

### SEC-05 · Step 2 - Data Barang
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-030 | Halaman menampilkan card per armada sesuai Jumlah Armada di Step 1 (contoh: 3 armada = Armada 1, Armada 2, Armada 3). | TMS.S011-R06 poin 1 | TERTULIS |
| REQ-031 | Header card menampilkan nomor armada dan jenis armada. | TMS.S011-R06 poin 1 | TERTULIS |
| REQ-032 | Kondisi Multipickup/Multidrop/Multipoint: seluruh alamat pickup/drop yang diinput di Step 1 auto-terdraft pada setiap armada. | TMS.S011-R06 poin 2 | TERTULIS |
| REQ-033 | Penambahan barang dilakukan per kombinasi alamat pada tiap armada. | TMS.S011-R06 poin 2 | AMBIGU (Q-07) |
| REQ-034 | Setiap armada dalam 1 order wajib melewati seluruh alamat asal & tujuan yang sama. | TMS.S011-R06 poin 2 | TERTULIS |
| REQ-035 | Setiap kombinasi alamat pada tiap armada menampilkan label "Alamat Pick Up" dan "Alamat Drop Off" di bagian atas area input barang. | TMS.S011-R06 poin 3 | TERTULIS |
| REQ-036 | Alamat asal & tujuan pada Data Barang otomatis ter-draft dari Step 1 dan bersifat disable/read only. | TMS.S011-R06 poin 4 | TERTULIS |
| REQ-037 | Hanya dapat memasukkan 1 data deskripsi barang di tiap armada. | TMS.S011-R06 poin 5 | AMBIGU (Q-07) |
| REQ-038 | Field "Deskripsi Barang" per card armada: wajib diisi. | TMS.S011-R06 poin 6 | TERTULIS |
| REQ-039 | Field "Nomor DO": tidak wajib, dapat diisi lebih dari satu, dipisahkan dengan koma. | TMS.S011-R06 poin 6 | TERTULIS |
| REQ-040 | Field "Berat (kg)": tidak wajib diisi. | TMS.S011-R06 poin 6 | TERTULIS |
| REQ-041 | Field "Kubikasi (m3)": tidak wajib diisi. | TMS.S011-R06 poin 6 | TERTULIS |
| REQ-042 | Sistem menampilkan alert bila Berat melebihi kapasitas maksimal armada (variasi pesan "melebihi Berat saja"). | TMS.S011-R06 poin 7 | AMBIGU (Q-08) |
| REQ-043 | Sistem menampilkan alert bila Kubikasi melebihi kapasitas maksimal armada (variasi pesan "melebihi Kubikasi saja"). | TMS.S011-R06 poin 7 | AMBIGU (Q-08) |
| REQ-044 | Sistem menampilkan alert bila Berat dan Kubikasi melebihi kapasitas maksimal armada (variasi pesan "melebihi keduanya"). | TMS.S011-R06 poin 7 | AMBIGU (Q-08) |
| REQ-045 | Alert kapasitas bersifat informasi saja (tidak memblokir); user tetap dapat melanjutkan ke step berikutnya. | TMS.S011-R06 poin 8 | TERTULIS |
| REQ-046 | Data Barang (koli/karungan) tidak mengikat spesifikasi rinci jenis barang di dalamnya, hanya mencatat pada level koli. | TMS.S011-R06 poin 9 | TERTULIS |
| REQ-047 | Jika field wajib tidak diisi: tampil helper error & border field berubah warna error. | TMS.S011-R06 poin 10 | TERTULIS |
| REQ-048 | Untuk ke next step wajib mengisi seluruh field; bila ada field kosong, tidak dapat klik button selanjutnya dan tampil alert pada keseluruhan field yang kosong. | TMS.S011-R06 poin 11 | KONFLIK (Q-06, Q-05) |
| REQ-049 | Dapat menyimpan sebagai draft walaupun seluruh field belum diisi; tampil pop up konfirmasi alert. | TMS.S011-R06 poin 12 | TERTULIS |
| REQ-050 | Button "Batal": membatalkan pengisian data; tampil pop up konfirmasi. | TMS.S011-R06 poin 13 | TERTULIS |
| REQ-051 | Button "Draf": menyimpan sebagai draf. | TMS.S011-R06 poin 13 | TERTULIS |
| REQ-052 | Button "Sebelumnya": kembali ke step sebelumnya; data tetap terdraft (tidak hilang). | TMS.S011-R06 poin 13 | TERTULIS |
| REQ-053 | Button "Selanjutnya": beralih ke next step. | TMS.S011-R06 poin 13 | TERTULIS |

### SEC-06 · Step 3 - Vendor & Harga
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-054 | Field "Vendor": dropdown, wajib diisi. | TMS.S011-R07 poin 1 | TERTULIS |
| REQ-055 | Field "Tanggal Permintaan Muat": wajib diisi. | TMS.S011-R07 poin 1 | TERTULIS |
| REQ-056 | Field "Harga": wajib diisi, input manual. | TMS.S011-R07 poin 1 | TERTULIS |
| REQ-057 | Field "Waktu Perjalanan" dapat berupa text field atau hanya text only. | TMS.S011-R07 poin 1 | TERTULIS |
| REQ-058 | Bila di master waktu perjalanan data dengan rute yang sama belum tersedia: Waktu Perjalanan tampil sebagai textfield yang wajib diisi. | TMS.S011-R07 poin 2 | AMBIGU (Q-09) |
| REQ-059 | Bila di master waktu perjalanan data dengan rute yang sama sudah tersedia: tampilan hanya berupa text informasi waktu perjalanan. | TMS.S011-R07 poin 2 | AMBIGU (Q-09) |
| REQ-060 | Tipe Multipickup/Multidrop/Multipoint: detail alamat asal/tujuan tidak ditampilkan penuh, hanya diringkas sebagai label sesuai Tipe Pengiriman. | TMS.S011-R07 poin 3 | TERTULIS |
| REQ-061 | Label ringkas berupa text link yang saat dibuka berisi daftar alamat lengkap per titik pickup/drop off. | TMS.S011-R07 poin 3 | TERTULIS |
| REQ-062 | Kalkulasi PPN & PPH bersifat opsional, diaktifkan melalui checkbox "Gunakan Komponen Harga". | TMS.S011-R07 poin 4 | TERTULIS |
| REQ-063 | Field PPN/PPH baru ditampilkan saat "Gunakan Komponen Harga" dicentang. | TMS.S011-R07 poin 5 | TERTULIS |
| REQ-064 | Field PPN/PPH bersifat required saat ditampilkan. | TMS.S011-R07 poin 5 | TERTULIS |
| REQ-065 | Besaran persentase PPN/PPH mengambil dari data terakhir yang digunakan. | TMS.S011-R07 poin 5 | AMBIGU (Q-10) |
| REQ-066 | Bila belum ada data terakhir yang bisa digunakan, persentase PPN/PPH tampil kosong. | TMS.S011-R07 poin 5 | TERTULIS |
| REQ-067 | Saat menggunakan komponen harga, sistem menghitung Total Harga = Harga DPP + Nilai PPN - Nilai PPH. | TMS.S011-R07 poin 6 | AMBIGU (Q-11) |
| REQ-068 | Untuk ke next step wajib mengisi seluruh field; bila ada field kosong, tidak dapat klik button selanjutnya dan tampil alert pada keseluruhan field yang kosong. | TMS.S011-R07 poin 7 | AMBIGU (Q-05) |
| REQ-069 | Dapat menyimpan sebagai draft walaupun seluruh field belum diisi; tampil pop up konfirmasi alert. | TMS.S011-R07 poin 8 | TERTULIS |
| REQ-070 | Button "Batal": membatalkan pengisian data; tampil pop up konfirmasi. | TMS.S011-R07 poin 9 | TERTULIS |
| REQ-071 | Button "Draf": menyimpan sebagai draf. | TMS.S011-R07 poin 9 | TERTULIS |
| REQ-072 | Button "Sebelumnya": kembali ke step sebelumnya; data tetap terdraft (tidak hilang). | TMS.S011-R07 poin 9 | TERTULIS |
| REQ-073 | Button "Selanjutnya": beralih ke next step. | TMS.S011-R07 poin 9 | TERTULIS |

### SEC-07 · Step 4 - Review
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-074 | Step Review menampilkan ringkasan seluruh data Step 1–3 secara read-only. | TMS.S011-R08 poin 1 | TERTULIS |
| REQ-075 | Button "Batal": membatalkan pengisian data; tampil pop up konfirmasi. | TMS.S011-R08 poin 2 | TERTULIS |
| REQ-076 | Button "Draf": menyimpan sebagai draf. | TMS.S011-R08 poin 2 | TERTULIS |
| REQ-077 | Button "Sebelumnya": kembali ke step sebelumnya; data tetap terdraft (tidak hilang). | TMS.S011-R08 poin 2 | TERTULIS |
| REQ-078 | Button "Simpan": menyelesaikan proses pembuatan order dan mengubah status menjadi "Menunggu Penugasan". | TMS.S011-R08 poin 2 | TERTULIS |

### SEC-08 · Status Order
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-079 | Terdapat 9 status order FTL: "Isi Data Pengiriman", "Isi Data Muatan", "Isi Data Vendor", "Review Order", "Menunggu Penugasan", "Ditugaskan", "Proses Pengiriman", "Selesai", "Dibatalkan". | TMS.S011-R09 poin 1 | TERTULIS |
| REQ-080 | "Isi Data Pengiriman" = pengisian data order belum selesai di step "Data Pengiriman". | TMS.S011-R09 poin 1 | TERTULIS |
| REQ-081 | "Isi Data Muatan" = pengisian data order belum selesai di step "Data Barang". | TMS.S011-R09 poin 1 | TERTULIS |
| REQ-082 | "Isi Data Vendor" = pengisian data order belum selesai di step "Vendor & Harga". | TMS.S011-R09 poin 1 | TERTULIS |
| REQ-083 | "Review Order" = seluruh step sudah terisi namun order belum di-submit (masih di step Review). | TMS.S011-R09 poin 1 | TERTULIS |
| REQ-084 | "Menunggu Penugasan" = seluruh data order sudah lengkap & disubmit, menunggu proses penugasan vendor. | TMS.S011-R09 poin 1 | TERTULIS |
| REQ-085 | "Ditugaskan" = vendor sudah melakukan penugasan. | TMS.S011-R09 poin 1 | AMBIGU (Q-18) |
| REQ-086 | "Proses Pengiriman" = status penugasan armada "Dalam Perjalanan". | TMS.S011-R09 poin 1 | AMBIGU (Q-12) |
| REQ-087 | "Selesai" = seluruh armada sudah selesai bongkar (status penugasan "Selesai"). | TMS.S011-R09 poin 1 | TERTULIS |
| REQ-088 | "Dibatalkan" = order dibatalkan oleh admin shipper. | TMS.S011-R09 poin 1 | TERTULIS |
| REQ-089 | Status 1–4 (Isi Data Pengiriman s.d. Review Order) merupakan kondisi draft, tersimpan otomatis melalui aksi "Simpan ke Draf" pada step manapun. | TMS.S011-R09 poin 2 | AMBIGU (Q-13) |

### SEC-09 · Hak Edit Order FTL
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-090 | Shipper dapat mengubah data order selama status dalam rentang draft (Isi Data Pengiriman s.d. Review Order) hingga "Menunggu Penugasan". | TMS.S011-R10 (bagian "Hak Edit Order FTL") poin 1 | TERTULIS |
| REQ-091 | Shipper tidak dapat lagi mengubah data order setelah status berubah menjadi "Ditugaskan". | TMS.S011-R10 (bagian "Hak Edit Order FTL") poin 2 | TERTULIS |
| REQ-092 | Pada halaman Edit Order, field Jenis Pengiriman dan Tipe Pengiriman locked/read-only dan tidak dapat diubah. | TMS.S011-R10 (bagian "Hak Edit Order FTL") poin 3 | AMBIGU (Q-04) |
| REQ-093 | Field Jenis Armada, Jumlah Armada, Data Pengirim, Data Penerima, Data Barang, dan Vendor & Harga tetap dapat diubah selama order berstatus dapat diedit. | TMS.S011-R10 (bagian "Hak Edit Order FTL") poin 4 | TERTULIS |
| REQ-094 | Button "Batal" (Edit): membatalkan pengisian data; tampil pop up konfirmasi. | TMS.S011-R10 (bagian "Hak Edit Order FTL") poin 5 | TERTULIS |
| REQ-095 | Button "Simpan" (Edit): menyelesaikan proses pengeditan; tampil pop up konfirmasi. | TMS.S011-R10 (bagian "Hak Edit Order FTL") poin 5 | TERTULIS |

### SEC-10 · Pembatalan Order
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-096 | Order dapat dibatalkan selama status dalam rentang draft hingga "Ditugaskan". | TMS.S011-R10 (bagian "Pembatalan Order") poin 1 | TERTULIS |
| REQ-097 | Order tidak dapat dibatalkan setelah status "Proses Pengiriman". | TMS.S011-R10 (bagian "Pembatalan Order") poin 1 | TERTULIS |
| REQ-098 | Pembatalan order dilakukan oleh admin shipper (bukan oleh vendor). | TMS.S011-R10 (bagian "Pembatalan Order") poin 2 | TERTULIS |
| REQ-099 | Field "Alasan Pembatalan" wajib diisi saat melakukan pembatalan. | TMS.S011-R10 (bagian "Pembatalan Order") poin 3 | AMBIGU (Q-19) |

### SEC-11 · Aksi pada Daftar Order FTL
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-100 | Status Isi Data Pengiriman/Muatan/Vendor – Review Order: aksi "Detail", "Lanjutkan Pengisian", "Batalkan Order", "Riwayat Perubahan". | TMS.S011-R11 poin 1 | TERTULIS |
| REQ-101 | Status Menunggu Penugasan: aksi "Detail", "Edit", "Batalkan Order", "Riwayat Perubahan". | TMS.S011-R11 poin 1 | TERTULIS |
| REQ-102 | Status Ditugaskan: aksi "Detail", "Batalkan Order", "Riwayat Perubahan" (aksi Edit tidak tersedia). | TMS.S011-R11 poin 1 | TERTULIS |
| REQ-103 | Tombol "Riwayat Pembatalan" pada toolbar halaman Daftar Order menampilkan daftar seluruh order yang pernah dibatalkan. | TMS.S011-R11 poin 2 | TERTULIS |
| REQ-104 | Aksi per-baris "Riwayat Perubahan" menampilkan histori perubahan order tertentu (terpisah dari "Riwayat Pembatalan"). | TMS.S011-R11 poin 2 | TERTULIS |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-03 | Baris Data Pengirim/Penerima | Jumlah baris tidak boleh kurang dari minimal tipe (Multipickup ≥2 Pick Up; Multidrop ≥2 Drop Off; Multipoint ≥2 & ≥2); tombol delete hanya tampil bila >2 baris | Tidak disebut selain "Sistem wajib memvalidasi agar jumlah baris tidak dapat dikurangi hingga di bawah minimal" | TMS.S011-R04 poin 2, 8, 9 |
| VAL-002 | SEC-04 | Jenis Armada | Wajib (dropdown dari Master Unit) | "tampilkan helper error & border field berubah warna error" | TMS.S011-R05 poin 1, 3 |
| VAL-003 | SEC-04 | Jumlah Armada | Wajib; input angka | "tampilkan helper error & border field berubah warna error" | TMS.S011-R05 poin 1, 3 |
| VAL-004 | SEC-04 | Tipe Pengiriman | Wajib (Normal/Multipickup/Multidrop/Multipoint) | "tampilkan helper error & border field berubah warna error" | TMS.S011-R05 poin 1, 3 |
| VAL-005 | SEC-04 | Drop Point Asal | Wajib (dropdown dari Master Droppoint) | "tampilkan helper error & border field berubah warna error" | TMS.S011-R05 poin 2, 3 |
| VAL-006 | SEC-04 | Drop Point Tujuan | Wajib (dropdown dari Master Droppoint) | "tampilkan helper error & border field berubah warna error" | TMS.S011-R05 poin 2, 3 |
| VAL-007 | SEC-04 | Seluruh field Step 1 (lanjut step) | Seluruh field harus terisi | "tidak dapat klik button selanjutnya => akan tampil alert pada keseluruhan field yang kosong" | TMS.S011-R05 poin 4 |
| VAL-008 | SEC-05 | Deskripsi Barang | Wajib; hanya 1 per armada | "tampilkan helper error & border field berubah warna error" | TMS.S011-R06 poin 5, 6, 10 |
| VAL-009 | SEC-05 | Nomor DO | Tidak wajib; boleh lebih dari satu, dipisahkan koma | Tidak disebut | TMS.S011-R06 poin 6 |
| VAL-010 | SEC-05 | Berat (kg) / Kubikasi (m3) vs kapasitas maksimal armada | Informasi bila melebihi; tidak memblokir | Alert 3 variasi (melebihi Berat saja / Kubikasi saja / keduanya); teks tidak disebut | TMS.S011-R06 poin 7, 8 |
| VAL-011 | SEC-05 | Seluruh field Step 2 (lanjut step) | "wajib mengisi seluruh field" (KONFLIK dengan field tidak wajib, Q-06) | "tidak dapat klik button selanjutnya => akan tampil alert pada keseluruhan field yang kosong" | TMS.S011-R06 poin 11 |
| VAL-012 | SEC-06 | Vendor | Wajib (dropdown) | Mengikuti VAL-017 (helper error tidak disebut untuk Step 3) | TMS.S011-R07 poin 1, 7 |
| VAL-013 | SEC-06 | Tanggal Permintaan Muat | Wajib | Mengikuti VAL-017 | TMS.S011-R07 poin 1, 7 |
| VAL-014 | SEC-06 | Harga | Wajib, input manual | Mengikuti VAL-017 | TMS.S011-R07 poin 1, 7 |
| VAL-015 | SEC-06 | Waktu Perjalanan | Wajib diisi bila rute belum ada di master waktu perjalanan (textfield); bila sudah ada hanya text informasi | Mengikuti VAL-017 | TMS.S011-R07 poin 2, 7 |
| VAL-016 | SEC-06 | PPN / PPH | Required bila "Gunakan Komponen Harga" dicentang | Mengikuti VAL-017 | TMS.S011-R07 poin 5, 7 |
| VAL-017 | SEC-06 | Seluruh field Step 3 (lanjut step) | Seluruh field harus terisi | "tidak dapat klik button selanjutnya => akan tampil alert pada keseluruhan field yang kosong" | TMS.S011-R07 poin 7 |
| VAL-018 | SEC-10 | Alasan Pembatalan | Wajib diisi saat pembatalan | Tidak disebut | TMS.S011-R10 (bagian "Pembatalan Order") poin 3 |

## 5. Acceptance Criteria (AC)
### SEC-01 · Akses Vendor & Shipper pada menu Order
- **AC-001** (REQ-001) — **Diberikan** user Vendor membuka menu Order **Ketika** melihat order FTL **Maka** Vendor hanya dapat melihat detail data order. · Sumber: TMS.S011-R02 poin 1
- **AC-002** (REQ-002) — **Diberikan** user Shipper membuka menu Order **Ketika** mengelola order FTL **Maka** Shipper dapat mengakses keseluruhan aksi pada order. · Sumber: TMS.S011-R02 poin 2

### SEC-02 · Ketentuan Umum Order FTL
- **AC-003** (REQ-005, REQ-008) — **Diberikan** Shipper di menu Order **Ketika** membuat order FTL melalui form "Buat Order" **Maka** pengisian terbagi 4 step: Data Pengiriman, Data Barang, Vendor & Harga, Review. · Sumber: TMS.S011-R03 poin 3, 5
- **AC-004** (REQ-006) — **Diberikan** Shipper di menu Order **Ketika** memilih input batch **Maka** tersedia tombol "Batch Order" untuk upload template Excel (rincian di TMS.S019). · Sumber: TMS.S011-R03 poin 3
- **AC-005** (REQ-004, REQ-007) — **Diberikan** Shipper di Step 1 **Ketika** mengisi Jumlah Armada secara manual **Maka** input diterima tanpa batasan (lihat Q-16). · Sumber: TMS.S011-R03 poin 2, 4

### SEC-03 · Tipe Pengiriman pada Order FTL
- **AC-006** (REQ-010) — **Diberikan** Tipe Pengiriman "Normal" **Ketika** user melihat Data Pengirim & Data Penerima **Maka** masing-masing hanya 1 baris dan tidak dapat ditambah baris. · Sumber: TMS.S011-R04 poin 2
- **AC-007** (REQ-011, REQ-014) — **Diberikan** Step 1 **Ketika** Tipe Pengiriman dipilih "Multipickup" **Maka** otomatis tampil minimal 2 baris Pick Up tanpa klik "Tambah Baris Input", dan Data Penerima tetap 1 baris. · Sumber: TMS.S011-R04 poin 2, 7
- **AC-008** (REQ-012, REQ-014) — **Diberikan** Step 1 **Ketika** Tipe Pengiriman dipilih "Multidrop" **Maka** otomatis tampil minimal 2 baris Drop Off tanpa klik "Tambah Baris Input", dan Data Pengirim tetap 1 baris. · Sumber: TMS.S011-R04 poin 2, 7
- **AC-009** (REQ-013, REQ-014) — **Diberikan** Step 1 **Ketika** Tipe Pengiriman dipilih "Multipoint" **Maka** otomatis tampil minimal 2 baris Pick Up dan 2 baris Drop Off. · Sumber: TMS.S011-R04 poin 2, 7
- **AC-010** (REQ-015, VAL-001) — **Diberikan** bagian pickup/drop berisi tepat 2 baris **Ketika** user melihat baris tersebut **Maka** tombol delete (hapus baris) tidak tampil. · Sumber: TMS.S011-R04 poin 8
- **AC-011** (REQ-015) — **Diberikan** bagian pickup/drop berisi lebih dari 2 baris **Ketika** user melihat baris tersebut **Maka** tombol delete (hapus baris) tampil. · Sumber: TMS.S011-R04 poin 8
- **AC-012** (REQ-016, VAL-001) — **Diberikan** Tipe Multipickup/Multidrop/Multipoint dengan baris tambahan **Ketika** user menghapus baris **Maka** jumlah baris tidak dapat berkurang di bawah minimal tipe pengiriman. · Sumber: TMS.S011-R04 poin 9

### SEC-04 · Step 1 - Data Pengiriman
- **AC-013** (REQ-018) — **Diberikan** Step 1 **Ketika** user membuka dropdown Jenis Armada **Maka** pilihan diambil dari Master Unit (Jenis Armada). · Sumber: TMS.S011-R05 poin 1
- **AC-014** (REQ-021, REQ-022) — **Diberikan** Step 1 **Ketika** user memilih Drop Point Asal/Tujuan dari Master Droppoint **Maka** detail alamat, nama perusahaan, Nama PIC, dan No. PIC ter-auto-draft. · Sumber: TMS.S011-R05 poin 2
- **AC-015** (REQ-023) — **Diberikan** PIC dan No. WhatsApp ter-draft dari Drop Point **Ketika** user mengubahnya manual **Maka** nilai dapat diubah. · Sumber: TMS.S011-R05 poin 2
- **AC-016** (REQ-024, VAL-002–VAL-006) — **Diberikan** salah satu field wajib Step 1 kosong **Ketika** validasi berjalan **Maka** tampil helper error & border field berubah warna error. · Sumber: TMS.S011-R05 poin 3
- **AC-017** (REQ-025, VAL-007) — **Diberikan** masih ada field Step 1 kosong **Ketika** user mencoba lanjut dengan button "Selanjutnya" **Maka** tidak dapat lanjut dan tampil alert pada keseluruhan field yang kosong (lihat Q-05). · Sumber: TMS.S011-R05 poin 4
- **AC-018** (REQ-029) — **Diberikan** seluruh field Step 1 terisi **Ketika** klik "Selanjutnya" **Maka** beralih ke Step 2 - Data Barang. · Sumber: TMS.S011-R05 poin 4, 6
- **AC-019** (REQ-026, REQ-028) — **Diberikan** Step 1 terisi sebagian **Ketika** klik "Draf" **Maka** tampil pop up konfirmasi alert dan data yang sudah diisi tersimpan sebagai draf. · Sumber: TMS.S011-R05 poin 5, 6
- **AC-020** (REQ-027) — **Diberikan** Step 1 **Ketika** klik "Batal" **Maka** tampil pop up konfirmasi pembatalan pengisian data. · Sumber: TMS.S011-R05 poin 6

### SEC-05 · Step 2 - Data Barang
- **AC-021** (REQ-030, REQ-031) — **Diberikan** Jumlah Armada 3 di Step 1 **Ketika** user membuka Step 2 **Maka** tampil card Armada 1, Armada 2, Armada 3 dengan header nomor armada dan jenis armada. · Sumber: TMS.S011-R06 poin 1
- **AC-022** (REQ-032, REQ-035) — **Diberikan** Tipe Multipickup/Multidrop/Multipoint **Ketika** user membuka Step 2 **Maka** seluruh alamat pickup/drop Step 1 ter-draft pada setiap armada dengan label "Alamat Pick Up" dan "Alamat Drop Off" di atas area input barang. · Sumber: TMS.S011-R06 poin 2, 3
- **AC-023** (REQ-036) — **Diberikan** Step 2 **Ketika** user mencoba mengubah alamat asal/tujuan **Maka** alamat bersifat disable/read only. · Sumber: TMS.S011-R06 poin 4
- **AC-024** (REQ-038, REQ-047, VAL-008) — **Diberikan** Deskripsi Barang kosong **Ketika** validasi berjalan **Maka** tampil helper error & border field berubah warna error. · Sumber: TMS.S011-R06 poin 6, 10
- **AC-025** (REQ-039, VAL-009) — **Diberikan** Step 2 **Ketika** user mengisi Nomor DO lebih dari satu dipisahkan koma **Maka** input diterima. · Sumber: TMS.S011-R06 poin 6
- **AC-026** (REQ-042, VAL-010) — **Diberikan** Berat melebihi kapasitas maksimal armada, Kubikasi tidak **Ketika** diinput **Maka** tampil alert variasi melebihi Berat saja. · Sumber: TMS.S011-R06 poin 7
- **AC-027** (REQ-043, VAL-010) — **Diberikan** Kubikasi melebihi kapasitas maksimal armada, Berat tidak **Ketika** diinput **Maka** tampil alert variasi melebihi Kubikasi saja. · Sumber: TMS.S011-R06 poin 7
- **AC-028** (REQ-044, VAL-010) — **Diberikan** Berat dan Kubikasi melebihi kapasitas maksimal armada **Ketika** diinput **Maka** tampil alert variasi melebihi keduanya. · Sumber: TMS.S011-R06 poin 7
- **AC-029** (REQ-045) — **Diberikan** alert kapasitas tampil **Ketika** user klik "Selanjutnya" dengan field lain lengkap **Maka** user tetap dapat melanjutkan ke step berikutnya. · Sumber: TMS.S011-R06 poin 8
- **AC-030** (REQ-052) — **Diberikan** Step 2 **Ketika** klik "Sebelumnya" **Maka** kembali ke Step 1 dan data tetap terdraft (tidak hilang). · Sumber: TMS.S011-R06 poin 13
- **AC-031** (REQ-049, REQ-050, REQ-051) — **Diberikan** Step 2 **Ketika** klik "Draf" / "Batal" **Maka** "Draf" menyimpan draf dengan pop up konfirmasi alert; "Batal" menampilkan pop up konfirmasi. · Sumber: TMS.S011-R06 poin 12, 13

### SEC-06 · Step 3 - Vendor & Harga
- **AC-032** (REQ-058, VAL-015) — **Diberikan** rute order belum tersedia di master waktu perjalanan **Ketika** user membuka Step 3 **Maka** Waktu Perjalanan tampil sebagai textfield wajib diisi. · Sumber: TMS.S011-R07 poin 2
- **AC-033** (REQ-059) — **Diberikan** rute order sudah tersedia di master waktu perjalanan **Ketika** user membuka Step 3 **Maka** Waktu Perjalanan tampil hanya sebagai text informasi. · Sumber: TMS.S011-R07 poin 2
- **AC-034** (REQ-060, REQ-061) — **Diberikan** Tipe Multipickup/Multidrop/Multipoint **Ketika** user membuka Step 3 **Maka** alamat asal/tujuan tampil ringkas sebagai label text link yang saat dibuka berisi daftar alamat lengkap per titik pickup/drop off. · Sumber: TMS.S011-R07 poin 3
- **AC-035** (REQ-062, REQ-063) — **Diberikan** checkbox "Gunakan Komponen Harga" tidak dicentang **Ketika** user melihat Step 3 **Maka** field PPN/PPH tidak ditampilkan. · Sumber: TMS.S011-R07 poin 4, 5
- **AC-036** (REQ-063, REQ-064, REQ-065, VAL-016) — **Diberikan** ada data PPN/PPH terakhir yang digunakan **Ketika** "Gunakan Komponen Harga" dicentang **Maka** field PPN/PPH tampil, bersifat required, dan persentase terisi dari data terakhir. · Sumber: TMS.S011-R07 poin 5
- **AC-037** (REQ-066) — **Diberikan** belum ada data PPN/PPH yang bisa digunakan **Ketika** "Gunakan Komponen Harga" dicentang **Maka** persentase PPN/PPH tampil kosong. · Sumber: TMS.S011-R07 poin 5
- **AC-038** (REQ-067) — **Diberikan** komponen harga digunakan **Ketika** Harga, PPN, PPH terisi **Maka** Total Harga = Harga DPP + Nilai PPN - Nilai PPH. · Sumber: TMS.S011-R07 poin 6
- **AC-039** (REQ-068, VAL-012–VAL-017) — **Diberikan** Vendor/Tanggal Permintaan Muat/Harga (atau Waktu Perjalanan/PPN/PPH saat wajib) kosong **Ketika** user mencoba lanjut **Maka** tidak dapat lanjut dan tampil alert pada keseluruhan field yang kosong. · Sumber: TMS.S011-R07 poin 7
- **AC-040** (REQ-069–REQ-073) — **Diberikan** Step 3 **Ketika** klik "Sebelumnya" **Maka** kembali ke Step 2 dan data tetap terdraft; "Draf" menyimpan draf dengan pop up konfirmasi alert; "Batal" menampilkan pop up konfirmasi. · Sumber: TMS.S011-R07 poin 8, 9

### SEC-07 · Step 4 - Review
- **AC-041** (REQ-074) — **Diberikan** Step 1–3 lengkap **Ketika** user membuka Step Review **Maka** tampil ringkasan seluruh data Step 1–3 secara read-only. · Sumber: TMS.S011-R08 poin 1
- **AC-042** (REQ-078) — **Diberikan** Step Review **Ketika** klik "Simpan" **Maka** proses pembuatan order selesai dan status order menjadi "Menunggu Penugasan". · Sumber: TMS.S011-R08 poin 2
- **AC-043** (REQ-075, REQ-076, REQ-077) — **Diberikan** Step Review **Ketika** klik "Sebelumnya" / "Draf" / "Batal" **Maka** masing-masing kembali ke Step 3 dengan data tetap terdraft / menyimpan draf / menampilkan pop up konfirmasi. · Sumber: TMS.S011-R08 poin 2

### SEC-08 · Status Order
- **AC-044** (REQ-080, REQ-089) — **Diberikan** pengisian belum selesai di step "Data Pengiriman" **Ketika** order disimpan sebagai draf **Maka** status order "Isi Data Pengiriman". · Sumber: TMS.S011-R09 poin 1, 2
- **AC-045** (REQ-081, REQ-089) — **Diberikan** pengisian belum selesai di step "Data Barang" **Ketika** order disimpan sebagai draf **Maka** status order "Isi Data Muatan". · Sumber: TMS.S011-R09 poin 1, 2
- **AC-046** (REQ-082, REQ-089) — **Diberikan** pengisian belum selesai di step "Vendor & Harga" **Ketika** order disimpan sebagai draf **Maka** status order "Isi Data Vendor". · Sumber: TMS.S011-R09 poin 1, 2
- **AC-047** (REQ-083, REQ-089) — **Diberikan** seluruh step terisi dan user di step Review **Ketika** order disimpan sebagai draf tanpa submit **Maka** status order "Review Order". · Sumber: TMS.S011-R09 poin 1, 2
- **AC-048** (REQ-085) — **Diberikan** order "Menunggu Penugasan" **Ketika** vendor melakukan penugasan **Maka** status order "Ditugaskan". · Sumber: TMS.S011-R09 poin 1
- **AC-049** (REQ-086) — **Diberikan** order "Ditugaskan" **Ketika** status penugasan armada menjadi "Dalam Perjalanan" **Maka** status order "Proses Pengiriman" (lihat Q-12). · Sumber: TMS.S011-R09 poin 1
- **AC-050** (REQ-087) — **Diberikan** order "Proses Pengiriman" **Ketika** seluruh armada berstatus penugasan "Selesai" **Maka** status order "Selesai". · Sumber: TMS.S011-R09 poin 1
- **AC-051** (REQ-088) — **Diberikan** order dapat dibatalkan **Ketika** admin shipper membatalkan order **Maka** status order "Dibatalkan". · Sumber: TMS.S011-R09 poin 1

### SEC-09 · Hak Edit Order FTL
- **AC-052** (REQ-090, REQ-092, REQ-093, REQ-101) — **Diberikan** order "Menunggu Penugasan" **Ketika** Shipper membuka Edit Order **Maka** Jenis Pengiriman & Tipe Pengiriman locked/read-only, sedangkan Jenis Armada, Jumlah Armada, Data Pengirim, Data Penerima, Data Barang, Vendor & Harga dapat diubah. · Sumber: TMS.S011-R10 (bagian "Hak Edit Order FTL") poin 1, 3, 4
- **AC-053** (REQ-091, REQ-102) — **Diberikan** order "Ditugaskan" **Ketika** Shipper melihat aksi pada Daftar Order **Maka** aksi Edit tidak tersedia dan data tidak dapat diubah. · Sumber: TMS.S011-R10 (bagian "Hak Edit Order FTL") poin 2; TMS.S011-R11 poin 1
- **AC-054** (REQ-095) — **Diberikan** halaman Edit Order **Ketika** klik "Simpan" **Maka** tampil pop up konfirmasi untuk menyelesaikan pengeditan. · Sumber: TMS.S011-R10 (bagian "Hak Edit Order FTL") poin 5
- **AC-055** (REQ-094) — **Diberikan** halaman Edit Order **Ketika** klik "Batal" **Maka** tampil pop up konfirmasi pembatalan pengisian. · Sumber: TMS.S011-R10 (bagian "Hak Edit Order FTL") poin 5

### SEC-10 · Pembatalan Order
- **AC-056** (REQ-096, REQ-099, REQ-088) — **Diberikan** order berstatus draft, "Menunggu Penugasan", atau "Ditugaskan" **Ketika** admin shipper membatalkan dengan mengisi "Alasan Pembatalan" **Maka** order dibatalkan dan berstatus "Dibatalkan". · Sumber: TMS.S011-R10 (bagian "Pembatalan Order") poin 1, 3; TMS.S011-R09 poin 1
- **AC-057** (REQ-099, VAL-018) — **Diberikan** proses pembatalan **Ketika** "Alasan Pembatalan" tidak diisi **Maka** field diperlakukan wajib (perilaku tampilan tidak disebut, lihat Q-19). · Sumber: TMS.S011-R10 (bagian "Pembatalan Order") poin 3
- **AC-058** (REQ-097) — **Diberikan** order berstatus "Proses Pengiriman" (atau setelahnya) **Ketika** user mencari aksi pembatalan **Maka** order tidak dapat dibatalkan. · Sumber: TMS.S011-R10 (bagian "Pembatalan Order") poin 1
- **AC-059** (REQ-098, REQ-001) — **Diberikan** user Vendor **Ketika** melihat order **Maka** Vendor tidak dapat membatalkan order. · Sumber: TMS.S011-R10 (bagian "Pembatalan Order") poin 2; TMS.S011-R02 poin 1

### SEC-11 · Aksi pada Daftar Order FTL
- **AC-060** (REQ-100) — **Diberikan** order berstatus Isi Data Pengiriman/Isi Data Muatan/Isi Data Vendor/Review Order **Ketika** Shipper melihat aksi baris **Maka** tersedia "Detail", "Lanjutkan Pengisian", "Batalkan Order", "Riwayat Perubahan". · Sumber: TMS.S011-R11 poin 1
- **AC-061** (REQ-101) — **Diberikan** order "Menunggu Penugasan" **Ketika** Shipper melihat aksi baris **Maka** tersedia "Detail", "Edit", "Batalkan Order", "Riwayat Perubahan". · Sumber: TMS.S011-R11 poin 1
- **AC-062** (REQ-102) — **Diberikan** order "Ditugaskan" **Ketika** Shipper melihat aksi baris **Maka** tersedia "Detail", "Batalkan Order", "Riwayat Perubahan" dan aksi Edit tidak tersedia. · Sumber: TMS.S011-R11 poin 1
- **AC-063** (REQ-103) — **Diberikan** halaman Daftar Order **Ketika** klik tombol "Riwayat Pembatalan" di toolbar **Maka** tampil daftar seluruh order yang pernah dibatalkan. · Sumber: TMS.S011-R11 poin 2
- **AC-064** (REQ-104) — **Diberikan** satu order di Daftar Order **Ketika** klik aksi "Riwayat Perubahan" **Maka** tampil histori perubahan order tersebut. · Sumber: TMS.S011-R11 poin 2

## 6. State / transisi
### 6.1 Status order
| # | Status | Definisi (spec) | Kategori | Masuk dari / pemicu | Sumber |
|---|---|---|---|---|---|
| 1 | "Isi Data Pengiriman" | Pengisian belum selesai di step "Data Pengiriman" | Draft | Simpan draf di step Data Pengiriman | TMS.S011-R09 poin 1, 2 |
| 2 | "Isi Data Muatan" | Pengisian belum selesai di step "Data Barang" | Draft | Simpan draf di step Data Barang | TMS.S011-R09 poin 1, 2 |
| 3 | "Isi Data Vendor" | Pengisian belum selesai di step "Vendor & Harga" | Draft | Simpan draf di step Vendor & Harga | TMS.S011-R09 poin 1, 2 |
| 4 | "Review Order" | Seluruh step terisi, belum di-submit (masih di step Review) | Draft | Simpan draf di step Review | TMS.S011-R09 poin 1, 2 |
| 5 | "Menunggu Penugasan" | Data lengkap & disubmit, menunggu penugasan vendor | — | "Simpan" di Step Review | TMS.S011-R08 poin 2; TMS.S011-R09 poin 1 |
| 6 | "Ditugaskan" | Vendor sudah melakukan penugasan | — | Penugasan oleh vendor | TMS.S011-R09 poin 1 |
| 7 | "Proses Pengiriman" | Status penugasan armada "Dalam Perjalanan" | — | Status penugasan (Penugasan Tracking) | TMS.S011-R09 poin 1 |
| 8 | "Selesai" | Seluruh armada selesai bongkar (status penugasan "Selesai") | — | Status penugasan (Penugasan Tracking) | TMS.S011-R09 poin 1 |
| 9 | "Dibatalkan" | Order dibatalkan oleh admin shipper | — | Pembatalan dari status 1–6 | TMS.S011-R09 poin 1; TMS.S011-R10 (bagian "Pembatalan Order") poin 1 |

### 6.2 Aksi & hak per status
| Status | Aksi pada Daftar Order | Dapat diedit | Dapat dibatalkan | Sumber |
|---|---|---|---|---|
| Isi Data Pengiriman / Isi Data Muatan / Isi Data Vendor / Review Order | "Detail", "Lanjutkan Pengisian", "Batalkan Order", "Riwayat Perubahan" | Ya | Ya | TMS.S011-R11 poin 1; TMS.S011-R10 (Hak Edit poin 1; Pembatalan poin 1) |
| Menunggu Penugasan | "Detail", "Edit", "Batalkan Order", "Riwayat Perubahan" | Ya | Ya | TMS.S011-R11 poin 1; TMS.S011-R10 (Hak Edit poin 1; Pembatalan poin 1) |
| Ditugaskan | "Detail", "Batalkan Order", "Riwayat Perubahan" (Edit tidak tersedia) | Tidak | Ya | TMS.S011-R11 poin 1; TMS.S011-R10 (Hak Edit poin 2; Pembatalan poin 1) |
| Proses Pengiriman | Tidak disebut (Q-14) | Tidak | Tidak | TMS.S011-R10 (Hak Edit poin 2; Pembatalan poin 1) |
| Selesai | Tidak disebut (Q-14) | Tidak (setelah Ditugaskan) | Tidak (setelah Proses Pengiriman) | TMS.S011-R10 (Hak Edit poin 2; Pembatalan poin 1) |
| Dibatalkan | Tidak disebut (Q-14); tercantum pada "Riwayat Pembatalan" | Tidak disebut | — | TMS.S011-R11 poin 2 |

Toolbar Daftar Order: tombol "Riwayat Pembatalan" (TMS.S011-R11 poin 2); tombol "Batch Order" (TMS.S011-R03 poin 3).

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Master Unit (TMS.S009) | Sumber pilihan dropdown Jenis Armada | TMS.S011-R05 poin 1 |
| Master Drop Point (TMS.S006) | Sumber Drop Point Asal/Tujuan; drop point aktif ditampilkan sebagai pilihan saat membuat order | TMS.S011-R05 poin 2; TMS.S006-R06 poin 1 (spec-index §3) |
| Master Waktu Perjalanan (TMS.S008) | Menentukan tampilan Waktu Perjalanan di Step 3; waktu perjalanan yang ditambahkan saat order tersimpan sebagai data baru di master | TMS.S011-R07 poin 2; TMS.S008-R02 poin 3, 6 (spec-index §3) |
| Batch Order (TMS.S019) | Input order secara batch melalui tombol "Batch Order" | TMS.S011-R03 poin 3 |
| Penugasan Tracking (TMS.S015) | Status Ditugaskan / Proses Pengiriman / Selesai mengikuti penugasan | TMS.S011-R09 poin 1 (spec-index §3) |
| Dashboard Monitoring (TMS.S018) | SLA "input user saat order dibuat" | spec-index §3 & §4 no.17 |
| Pengaturan Akun (TMS.S021) | Level akses & Cakupan Data pada modul Order; checkbox Jenis Pengiriman (FTL, LTL, FCL, LCL) | TMS.S021-R08/R09 (spec-index §3) |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | Kolom E R02 "No Desain: 080 - 083" sama dengan nomor desain Registrasi Vendor (S004). Nomor desain Order FTL yang benar? | TMS.S011-R02 | — | §4 no.13 |
| Q-02 | Penomoran R04 melompat dari poin 2 ke poin 7. Apakah poin 3–6 hilang/terpotong atau hanya salah penomoran? | TMS.S011-R04 | REQ-017 | Baru |
| Q-03 | Auto-draft menyebut "Nama PIC, dan No. PIC", sedangkan field yang dapat diubah disebut "PIC dan No. WhatsApp". Apakah "No. PIC" = "No. WhatsApp"? | TMS.S011-R05 poin 2 | REQ-022, REQ-023 | Baru |
| Q-04 | Edit Order mengunci field "Jenis Pengiriman", tetapi field Jenis Pengiriman tidak tercantum pada daftar field Step 1. Di mana dan kapan Jenis Pengiriman (FTL) dipilih? | TMS.S011-R10 (Hak Edit) poin 3; TMS.S011-R05 poin 1 | REQ-092 | Baru |
| Q-05 | "tidak dapat klik button selanjutnya => akan tampil alert": apakah button disabled, atau button dapat diklik lalu alert tampil? | TMS.S011-R05 poin 4; R06 poin 11; R07 poin 7 | REQ-025, REQ-048, REQ-068 | Baru |
| Q-06 | Step 2 poin 11 "wajib mengisi seluruh field" bertentangan dengan poin 6 (Nomor DO, Berat, Kubikasi "Tidak Wajib diisi"). Mana yang berlaku? | TMS.S011-R06 poin 6, 11 | REQ-039–REQ-041, REQ-048 | Baru |
| Q-07 | Poin 5 "Hanya dapat memasukkan 1 data deskripsi barang di tiap armadanya" vs poin 2 "Penambahan barang dilakukan per kombinasi alamat pada tiap armada". Untuk Multi, 1 deskripsi per armada atau per kombinasi alamat? | TMS.S011-R06 poin 2, 5 | REQ-033, REQ-037 | Baru |
| Q-08 | Teks 3 variasi pesan alert kapasitas tidak ditulis; sumber "kapasitas maksimal armada" (mis. master) tidak disebut. | TMS.S011-R06 poin 7 | REQ-042–REQ-044 | Baru |
| Q-09 | Untuk Multipickup/Multidrop/Multipoint, "rute yang sama" mana yang dicek ke master waktu perjalanan (satu rute atau per kombinasi kota)? | TMS.S011-R07 poin 2 | REQ-058, REQ-059 | Baru |
| Q-10 | "Besaran presentase ppn/pph mengambil dari data terakhir yang digunakan": data terakhir milik siapa (per user, per shipper, per vendor)? | TMS.S011-R07 poin 5 | REQ-065 | Baru |
| Q-11 | Rumus memakai "Harga DPP", "Nilai PPN", "Nilai PPH" sedangkan field bernama "Harga" dan PPN/PPH berupa persentase. Apakah Harga = DPP dan Nilai = persentase × DPP? | TMS.S011-R07 poin 1, 5, 6 | REQ-067 | Baru |
| Q-12 | "Proses Pengiriman => status penugasan armada 'Dalam Perjalanan'": untuk order >1 armada, cukup satu armada atau seluruh armada? | TMS.S011-R09 poin 1 | REQ-086 | Baru |
| Q-13 | Status draft "tersimpan otomatis melalui aksi 'Simpan ke Draf'", sedangkan button bernama "Draf". Apakah label sama, dan apa arti "otomatis" (autosave atau hanya saat klik)? | TMS.S011-R09 poin 2; R05–R08 (Fungsi button) | REQ-089 | Baru |
| Q-14 | Aksi pada Daftar Order untuk status "Proses Pengiriman", "Selesai", "Dibatalkan" dan aksi sisi Vendor tidak disebut. | TMS.S011-R11 poin 1; TMS.S011-R02 | REQ-100–REQ-102 | Baru |
| Q-15 | Cakupan kolom B menyebut "Detail order", tetapi tidak ada rule isi halaman Detail order. | Cakupan kolom B poin 3 | REQ-001, REQ-100–REQ-102 | Baru |
| Q-16 | "Jumlah Armada diinput manual oleh shipper tanpa batasan": apakah nilai 0/negatif diperbolehkan; batas bawah? | TMS.S011-R03 poin 4 | REQ-007 | Baru |
| Q-17 | SLA pada Dashboard disebut "input user saat order dibuat", padahal Waktu Perjalanan FTL dapat berupa text only (dari master). | TMS.S011-R07 poin 1–2 | REQ-057–REQ-059 | §4 no.17 |
| Q-18 | "Ditugaskan => vendor sudah melakukan penugasan", sedangkan TMS.S015-R02 membolehkan shipper menjalankan penugasan untuk vendor yang dikelola shipper. Apakah penugasan oleh shipper juga memicu "Ditugaskan"? | TMS.S011-R09 poin 1; TMS.S015-R02 | REQ-085 | Baru |
| Q-19 | Alur UI pembatalan (pop up/form) dan perilaku saat "Alasan Pembatalan" kosong tidak disebut. | TMS.S011-R10 (Pembatalan) poin 3 | REQ-099 | Baru |

## 9. Catatan testability (bukan requirement)
- Transisi "Ditugaskan", "Proses Pengiriman", "Selesai" bergantung pada Penugasan Tracking (TMS.S015) dan status penugasan armada (Driver Hub TMS.S016) — perlu data penugasan di luar form order.
- REQ-001 memerlukan akun Vendor (portal vendor) di samping akun Shipper.
- REQ-058/REQ-059 memerlukan kondisi data Master Waktu Perjalanan (rute ada / belum ada).
- REQ-065/REQ-066 memerlukan riwayat penggunaan PPN/PPH sebelumnya (atau kondisi tanpa riwayat).
- REQ-042–REQ-044 memerlukan data kapasitas maksimal armada yang sumbernya tidak disebut (Q-08).

# TMS.S019 — Batch Order · Analysis (REQ / VAL / AC)

> Sumber: [`batch-order_spec.md`](batch-order_spec.md) (verbatim `Spek TMS-S` baris 122–125) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Akses & navigasi Batch Order | TMS.S019-R01, TMS.S019-R02 poin 1–2 | Admin (Shipper) | REQ-001–REQ-004 | — | AC-001 |
| SEC-02 | Halaman Batch Order: pilihan tipe, template, upload | TMS.S019-R02 poin 3–5 | Admin (Shipper) | REQ-005–REQ-009 | — | AC-002–AC-004 |
| SEC-03 | Preview Data Order | TMS.S019-R03 | Admin (Shipper) | REQ-010–REQ-024 | VAL-020–VAL-021 | AC-005–AC-013 |
| SEC-04 | Ketentuan Template & Kolom | TMS.S019-R04 poin 1–6 | Admin (Shipper) | REQ-025–REQ-038 | VAL-019 | AC-014–AC-021 |
| SEC-05 | Rule validasi per kolom | TMS.S019-R04 poin 7 | Admin (Shipper) | REQ-039–REQ-045 | VAL-001–VAL-018 | AC-022–AC-041 |

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Admin | "Admin dapat membuat Batch Order" (judul/cakupan). Nama template menyebut "TMS Shipper". Hubungan Admin ↔ Shipper tidak dinyatakan eksplisit (Q-06) | Cakupan kolom B; TMS.S019-R02 (bagian "Template") |
| Vendor | Tidak disebut di TMS.S019 | — |

## 3. Requirement (REQ)
### SEC-01 · Akses & navigasi Batch Order
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Batch order adalah proses upload excel yang dapat langsung tercreate menjadi order. | TMS.S019-R01 | TERTULIS |
| REQ-002 | Template excel beserta aturannya tersedia pada sistem. | TMS.S019-R01 | TERTULIS |
| REQ-003 | Batch order dilakukan melalui menu "Order" dengan klik button "Batch Order". | TMS.S019-R02 poin 1 | TERTULIS |
| REQ-004 | Saat button "Batch Order" diklik, sistem direct ke halaman Batch Order. | TMS.S019-R02 poin 2 | TERTULIS |

### SEC-02 · Halaman Batch Order: pilihan tipe, template, upload
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-005 | Default halaman menampilkan pilihan Tipe pengiriman yang ada (FTL, FCL, LTL, LCL). | TMS.S019-R02 poin 3 | AMBIGU (Q-07) |
| REQ-006 | Template terpisah untuk masing-masing FTL, FCL, LTL, LCL. | TMS.S019-R02 poin 4 | TERTULIS |
| REQ-007 | Template diunduh melalui textlink "Download Template Excel". | TMS.S019-R02 poin 4 | TERTULIS |
| REQ-008 | Terdapat tempat untuk upload dokumen. | TMS.S019-R02 poin 5 | AMBIGU (Q-08) |
| REQ-009 | Template yang dirujuk: "Template Batch Order TMS Shipper.xlsx" (tidak ada di workbook). | TMS.S019-R02 (bagian "Template"); TMS.S019-R03 (bagian "Template") | REF-EKSTERNAL (Q-02) |

### SEC-03 · Preview Data Order
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-010 | Setelah file berhasil diupload, ditampilkan section Preview Data Order. | TMS.S019-R03 poin 1 | TERTULIS |
| REQ-011 | Section Preview berisi ringkasan: Tanggal Upload, Total Data, Jumlah Data Sesuai, Jumlah Data Tidak Sesuai, Customer, dan Nama File. | TMS.S019-R03 poin 1 | AMBIGU (Q-09) |
| REQ-012 | Hanya data gagal/tidak sesuai yang ditampilkan pada tabel preview; data valid tidak ditampilkan. | TMS.S019-R03 poin 2 | TERTULIS |
| REQ-013 | Data tidak sesuai ditandai highlight warna merah pada kolom yang bermasalah. | TMS.S019-R03 poin 3 | TERTULIS |
| REQ-014 | Kolom bermasalah disertai tooltip penjelasan kesalahan. | TMS.S019-R03 poin 3 | TERTULIS |
| REQ-015 | Kesalahan pada satu baris tidak menggagalkan baris lain; setiap baris divalidasi secara independen. | TMS.S019-R03 poin 4 | AMBIGU (Q-19) |
| REQ-016 | Jika masih terdapat data tidak valid lalu user klik "Lanjutkan", tampil pop up konfirmasi bahwa proses tidak dapat dilanjutkan selama masih ada data tidak valid. | TMS.S019-R03 poin 5 | TERTULIS |
| REQ-017 | Data tidak valid tidak dapat lolos ke tahap create shipment. | TMS.S019-R03 poin 6 | TERTULIS |
| REQ-018 | Jika seluruh data valid, klik "Lanjutkan" membuat seluruh order berhasil terbuat. | TMS.S019-R03 poin 7 | AMBIGU (Q-11) |
| REQ-019 | Setelah order terbuat, sistem redirect ke halaman Daftar Order dengan seluruh data hasil batch upload ditampilkan. | TMS.S019-R03 poin 7 | TERTULIS |
| REQ-020 | Pada alur "Lanjutkan" dengan seluruh data valid tampil pop up konfirmasi. | TMS.S019-R03 poin 7 | AMBIGU (Q-10) |
| REQ-021 | Button "Batal" membatalkan proses dan kembali ke halaman Daftar order. | TMS.S019-R03 poin 8 | TERTULIS |
| REQ-022 | Button "Batal" menampilkan pop up konfirmasi. | TMS.S019-R03 poin 8 | TERTULIS |
| REQ-023 | Harus terdapat alert batch order berhasil tercreate menjadi shipment. | TMS.S019-R03 poin 9 | TERTULIS |
| REQ-024 | Harus terdapat pop up alert saat file tidak sesuai. | TMS.S019-R03 poin 10 | AMBIGU (Q-08) |

### SEC-04 · Ketentuan Template & Kolom
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-025 | Satu baris Excel = satu data shipment. | TMS.S019-R04 poin 1 | TERTULIS |
| REQ-026 | Kolom bertanda bintang (*) pada template adalah kolom wajib diisi. | TMS.S019-R04 poin 2 | AMBIGU (Q-12) |
| REQ-027 | Semicolon (;) sebagai pemisah antar data dalam satu kolom. | TMS.S019-R04 poin 3 | TERTULIS |
| REQ-028 | Semicolon (;) sebagai pemisah antar alamat pada data barang. | TMS.S019-R04 poin 3 | TERTULIS |
| REQ-029 | Pagar (##) sebagai pemisah antar armada. | TMS.S019-R04 poin 3 | TERTULIS |
| REQ-030 | Rule drop point menggunakan template yang sama (tidak ada template khusus multi). | TMS.S019-R04 poin 4 | TERTULIS |
| REQ-031 | Drop Point Asal lebih dari satu = multipickup. | TMS.S019-R04 poin 4 | AMBIGU (Q-16) |
| REQ-032 | Drop Point Tujuan lebih dari satu = multidrop. | TMS.S019-R04 poin 4 | AMBIGU (Q-16) |
| REQ-033 | Drop Point Asal dan Tujuan keduanya lebih dari satu = multipickup & multidrop. | TMS.S019-R04 poin 4 | AMBIGU (Q-16) |
| REQ-034 | Kolom PIC & No Whatsapp: jika diisi, sistem mengambil data dari hasil pengisian. | TMS.S019-R04 poin 5 | TERTULIS |
| REQ-035 | Kolom PIC & No Whatsapp: jika tidak diisi, sistem mengambil dari data master droppoint. | TMS.S019-R04 poin 5 | TERTULIS |
| REQ-036 | Jika dalam satu order sebagian ingin memakai PIC / No WhatsApp dari inputan dan sebagian tidak, kolom tersebut diisi dengan strip (-). | TMS.S019-R04 poin 5 | AMBIGU (Q-13) |
| REQ-037 | Kolom Waktu Perjalanan: jika di master sudah ada, meskipun diinputkan tidak akan berubah. | TMS.S019-R04 poin 6 | TERTULIS |
| REQ-038 | Kolom Waktu Perjalanan: jika di master belum ada, saat diinputkan akan "tersimpan di mas" (kalimat terpotong). | TMS.S019-R04 poin 6 | TERPOTONG (Q-01) |

### SEC-05 · Rule validasi per kolom
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-039 | Setiap kolom divalidasi sesuai rule per kolom; hasil tidak valid ditampilkan dengan tooltip (rincian VAL-001–VAL-018). | TMS.S019-R04 poin 7 | TERTULIS |
| REQ-040 | No WA PIC Pengirim/Penerima: input diawali 62 atau +62 dibaca sistem sebagai 0. | TMS.S019-R04 poin 7 (bagian "No WA PIC Pengirim & No WA PIC Penerima") | AMBIGU (Q-14) |
| REQ-041 | No WA PIC Pengirim/Penerima: input diawali 0 tetap terbaca 0. | TMS.S019-R04 poin 7 (bagian "No WA PIC Pengirim & No WA PIC Penerima") | TERTULIS |
| REQ-042 | PIC Pengirim & PIC Penerima serta No WA PIC Pengirim & No WA PIC Penerima tidak wajib diisi. | TMS.S019-R04 poin 7 (bagian "PIC Pengirim & PIC Penerima"; bagian "No WA PIC Pengirim & No WA PIC Penerima") | TERTULIS |
| REQ-043 | Berat, No DO & Kubikasi ("semua dalam satuan") tidak wajib diisi. | TMS.S019-R04 poin 7 (bagian "Berat, No DO & Kubikasi") | AMBIGU (Q-20) |
| REQ-044 | Waktu Perjalanan tidak wajib diisi (kecuali data belum tersedia di master, lihat VAL-015). | TMS.S019-R04 poin 7 (bagian "Waktu Perjalanan") | AMBIGU (Q-17) |
| REQ-045 | PPN (%) dan PPH (%) tidak wajib diisi. | TMS.S019-R04 poin 7 (bagian "PPN (%), PPH (%)") | TERTULIS |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-05 | Pelabuhan Asal / Pelabuhan Tujuan | Harus terdaftar pada master | tooltip "Tidak ada data pada master" | TMS.S019-R04 poin 7 (bagian "Pelabuhan Asal / Pelabuhan Tujuan") |
| VAL-002 | SEC-05 | Kota Asal / Kota Tujuan | Harus terdaftar pada master | tooltip "Tidak ada data pada master" | TMS.S019-R04 poin 7 (bagian "Kota Asal / Kota Tujuan") |
| VAL-003 | SEC-05 | Metode Pengiriman | Harus sesuai pilihan yang tersedia pada sistem | tooltip "Tidak ada data pada pilihan yang tersedia" | TMS.S019-R04 poin 7 (bagian "Metode Pengiriman") |
| VAL-004 | SEC-05 | Jenis Armada/Kontainer | Harus terdaftar pada master | tooltip "Tidak ada data pada master" | TMS.S019-R04 poin 7 (bagian "Jenis Armada/Kontainer") |
| VAL-005 | SEC-05 | Jumlah Armada/Kontainer | Harus berupa angka | tooltip "Format data tidak sesuai" | TMS.S019-R04 poin 7 (bagian "Jumlah Armada/Kontainer") |
| VAL-006 | SEC-05 | Drop Point Asal & Drop Point Tujuan | Harus terdaftar pada master | tooltip "Tidak ada data pada master" | TMS.S019-R04 poin 7 (bagian "Drop Point Asal & Drop Point Tujuan") |
| VAL-007 | SEC-05 | PIC Pengirim & PIC Penerima | Tidak wajib; harus berupa text | tooltip "Format data tidak sesuai" | TMS.S019-R04 poin 7 (bagian "PIC Pengirim & PIC Penerima") |
| VAL-008 | SEC-05 | No WA PIC Pengirim & No WA PIC Penerima | Tidak wajib; harus berupa angka; awalan 62/+62 dibaca 0; awalan 0 tetap 0 | tooltip "Format data tidak sesuai" | TMS.S019-R04 poin 7 (bagian "No WA PIC Pengirim & No WA PIC Penerima") |
| VAL-009 | SEC-05 | Deskripsi Barang (format) | Harus berupa text | tooltip "Format data tidak sesuai" | TMS.S019-R04 poin 7 (bagian "Deskripsi Barang") |
| VAL-010 | SEC-05 | Deskripsi Barang (kelengkapan) | Harus sesuai jumlah berdasarkan droppoint & armada yang ada | tooltip "Deskripsi Barang tidak Lengkap" | TMS.S019-R04 poin 7 (bagian "Deskripsi Barang") |
| VAL-011 | SEC-05 | Berat, No DO & Kubikasi (format) | Tidak wajib; harus berupa angka | tooltip "Format data tidak sesuai" | TMS.S019-R04 poin 7 (bagian "Berat, No DO & Kubikasi") |
| VAL-012 | SEC-05 | Berat, No DO & Kubikasi (kelengkapan) | Harus sesuai jumlah berdasarkan droppoint & armada yang ada | tooltip "Berat / No DO / Kubikasi tidak Lengkap" | TMS.S019-R04 poin 7 (bagian "Berat, No DO & Kubikasi") |
| VAL-013 | SEC-05 | Vendor | Harus terdaftar pada Manajemen Vendor | tooltip "Tidak ada data pada Manajemen Vendor" | TMS.S019-R04 poin 7 (bagian "Vendor") |
| VAL-014 | SEC-05 | Tgl Permintaan Muat | Harus berupa angka dan berformat DD/MM/YYYY | tooltip "Format data tidak sesuai" | TMS.S019-R04 poin 7 (bagian "Tgl Permintaan Muat") |
| VAL-015 | SEC-05 | Waktu Perjalanan (ketersediaan master) | Tidak wajib; bila tidak diisi namun data pada master belum tersedia → tidak valid | tooltip "Tidak ada data pada master" | TMS.S019-R04 poin 7 (bagian "Waktu Perjalanan") |
| VAL-016 | SEC-05 | Waktu Perjalanan (format) | Harus berupa angka | tooltip "Format data tidak sesuai" | TMS.S019-R04 poin 7 (bagian "Waktu Perjalanan") |
| VAL-017 | SEC-05 | Harga Barang | Harus berupa angka | tooltip "Format data tidak sesuai" | TMS.S019-R04 poin 7 (bagian "Harga Barang") |
| VAL-018 | SEC-05 | PPN (%), PPH (%) | Tidak wajib; jika diisi harus berupa angka | tooltip "Format data tidak sesuai" | TMS.S019-R04 poin 7 (bagian "PPN (%), PPH (%)") |
| VAL-019 | SEC-04 | Kolom bertanda (*) | Wajib diisi | Tidak disebut (Q-12) | TMS.S019-R04 poin 2 |
| VAL-020 | SEC-03 | File upload | File harus sesuai (kriteria tidak disebut) | "Harus terdapat pop up alert saat file tidak sesuai" (isi pop up tidak disebut) | TMS.S019-R03 poin 10 |
| VAL-021 | SEC-03 | Aksi "Lanjutkan" saat masih ada data tidak valid | Proses tidak boleh lanjut; data tidak valid tidak lolos ke create shipment | Pop up konfirmasi bahwa proses tidak dapat dilanjutkan selama masih ada data tidak valid | TMS.S019-R03 poin 5, 6 |

## 5. Acceptance Criteria (AC)
### SEC-01 · Akses & navigasi Batch Order
- **AC-001** (REQ-003, REQ-004) — **Diberikan** user di menu "Order" **Ketika** klik button "Batch Order" **Maka** sistem direct ke halaman Batch Order. · Sumber: TMS.S019-R02 poin 1, 2

### SEC-02 · Halaman Batch Order
- **AC-002** (REQ-005) — **Diberikan** user membuka halaman Batch Order **Ketika** halaman tampil pertama kali (default) **Maka** tampil pilihan Tipe pengiriman FTL, FCL, LTL, LCL. · Sumber: TMS.S019-R02 poin 3
- **AC-003** (REQ-006, REQ-007) — **Diberikan** halaman Batch Order **Ketika** user memilih salah satu dari FTL/FCL/LTL/LCL **Maka** tersedia textlink "Download Template Excel" untuk template yang terpisah per tipe tersebut. · Sumber: TMS.S019-R02 poin 4
- **AC-004** (REQ-008) — **Diberikan** halaman Batch Order **Ketika** user melihat halaman **Maka** terdapat tempat untuk upload dokumen. · Sumber: TMS.S019-R02 poin 5

### SEC-03 · Preview Data Order
- **AC-005** (REQ-010, REQ-011) — **Diberikan** file berhasil diupload **Ketika** proses upload selesai **Maka** tampil section Preview Data Order berisi Tanggal Upload, Total Data, Jumlah Data Sesuai, Jumlah Data Tidak Sesuai, Customer, dan Nama File. · Sumber: TMS.S019-R03 poin 1
- **AC-006** (REQ-012) — **Diberikan** file berisi baris valid dan baris tidak sesuai **Ketika** Preview tampil **Maka** tabel preview hanya menampilkan baris yang gagal/tidak sesuai; baris valid tidak ditampilkan. · Sumber: TMS.S019-R03 poin 2
- **AC-007** (REQ-013, REQ-014) — **Diberikan** baris dengan kolom bermasalah pada tabel preview **Ketika** user melihat/hover kolom tersebut **Maka** kolom ber-highlight merah dan tersedia tooltip penjelasan kesalahan. · Sumber: TMS.S019-R03 poin 3
- **AC-008** (REQ-015) — **Diberikan** satu baris memiliki kesalahan **Ketika** file divalidasi **Maka** baris lain tetap divalidasi secara independen dan tidak ikut gagal karena kesalahan baris tersebut. · Sumber: TMS.S019-R03 poin 4
- **AC-009** (REQ-016, REQ-017, VAL-021) — **Diberikan** masih ada data tidak valid di preview **Ketika** user klik "Lanjutkan" **Maka** tampil pop up konfirmasi bahwa proses tidak dapat dilanjutkan selama masih ada data tidak valid, dan data tidak valid tidak lolos ke tahap create shipment. · Sumber: TMS.S019-R03 poin 5, 6
- **AC-010** (REQ-018, REQ-019, REQ-020) — **Diberikan** seluruh data valid **Ketika** user klik "Lanjutkan" **Maka** tampil pop up konfirmasi, seluruh order berhasil terbuat, dan sistem redirect ke halaman Daftar Order dengan seluruh data hasil batch upload ditampilkan (urutan pop up lihat Q-10). · Sumber: TMS.S019-R03 poin 7
- **AC-011** (REQ-023) — **Diberikan** batch order berhasil diproses **Ketika** order tercreate **Maka** tampil alert bahwa batch order berhasil tercreate menjadi shipment. · Sumber: TMS.S019-R03 poin 9
- **AC-012** (REQ-021, REQ-022) — **Diberikan** halaman Batch Order/Preview **Ketika** user klik "Batal" **Maka** tampil pop up konfirmasi dan setelah dikonfirmasi proses dibatalkan serta kembali ke halaman Daftar order. · Sumber: TMS.S019-R03 poin 8
- **AC-013** (REQ-024, VAL-020) — **Diberikan** user mengupload file yang tidak sesuai **Ketika** upload diproses **Maka** tampil pop up alert. · Sumber: TMS.S019-R03 poin 10

### SEC-04 · Ketentuan Template & Kolom
- **AC-014** (REQ-025) — **Diberikan** template berisi N baris data **Ketika** diupload dan seluruhnya valid **Maka** setiap baris diperlakukan sebagai satu data shipment (Total Data = N). · Sumber: TMS.S019-R04 poin 1; TMS.S019-R03 poin 1
- **AC-015** (REQ-027, REQ-031) — **Diberikan** kolom Drop Point Asal berisi lebih dari satu drop point dipisah ";" **Ketika** file diproses **Maka** baris dibaca sebagai multipickup. · Sumber: TMS.S019-R04 poin 3, 4
- **AC-016** (REQ-027, REQ-032) — **Diberikan** kolom Drop Point Tujuan berisi lebih dari satu drop point dipisah ";" **Ketika** file diproses **Maka** baris dibaca sebagai multidrop. · Sumber: TMS.S019-R04 poin 3, 4
- **AC-017** (REQ-033) — **Diberikan** Drop Point Asal dan Drop Point Tujuan masing-masing lebih dari satu **Ketika** file diproses **Maka** baris dibaca sebagai multipickup & multidrop. · Sumber: TMS.S019-R04 poin 4
- **AC-018** (REQ-028, REQ-029) — **Diberikan** data barang untuk lebih dari satu armada/alamat **Ketika** diisi dengan pemisah "##" antar armada dan ";" antar alamat **Maka** data dibaca per armada dan per alamat. · Sumber: TMS.S019-R04 poin 3
- **AC-019** (REQ-034) — **Diberikan** kolom PIC & No Whatsapp diisi **Ketika** order terbuat **Maka** PIC & No Whatsapp mengambil data dari hasil pengisian. · Sumber: TMS.S019-R04 poin 5
- **AC-020** (REQ-035) — **Diberikan** kolom PIC & No Whatsapp tidak diisi **Ketika** order terbuat **Maka** PIC & No Whatsapp mengambil dari data master droppoint. · Sumber: TMS.S019-R04 poin 5
- **AC-021** (REQ-037) — **Diberikan** Waktu Perjalanan untuk rute tersebut sudah ada di master **Ketika** kolom Waktu Perjalanan diisi nilai lain **Maka** data waktu perjalanan di master tidak berubah. · Sumber: TMS.S019-R04 poin 6

### SEC-05 · Rule validasi per kolom
- **AC-022** (VAL-001) — **Diberikan** Pelabuhan Asal/Tujuan tidak terdaftar di master **Ketika** file divalidasi **Maka** kolom ditandai tidak sesuai dengan tooltip "Tidak ada data pada master". · Sumber: TMS.S019-R04 poin 7 (bagian "Pelabuhan Asal / Pelabuhan Tujuan")
- **AC-023** (VAL-002) — **Diberikan** Kota Asal/Tujuan tidak terdaftar di master **Ketika** file divalidasi **Maka** tooltip "Tidak ada data pada master". · Sumber: TMS.S019-R04 poin 7 (bagian "Kota Asal / Kota Tujuan")
- **AC-024** (VAL-003) — **Diberikan** Metode Pengiriman tidak sesuai pilihan yang tersedia pada sistem **Ketika** file divalidasi **Maka** tooltip "Tidak ada data pada pilihan yang tersedia". · Sumber: TMS.S019-R04 poin 7 (bagian "Metode Pengiriman")
- **AC-025** (VAL-004) — **Diberikan** Jenis Armada/Kontainer tidak terdaftar di master **Ketika** file divalidasi **Maka** tooltip "Tidak ada data pada master". · Sumber: TMS.S019-R04 poin 7 (bagian "Jenis Armada/Kontainer")
- **AC-026** (VAL-005) — **Diberikan** Jumlah Armada/Kontainer bukan angka **Ketika** file divalidasi **Maka** tooltip "Format data tidak sesuai". · Sumber: TMS.S019-R04 poin 7 (bagian "Jumlah Armada/Kontainer")
- **AC-027** (VAL-006) — **Diberikan** Drop Point Asal/Tujuan tidak terdaftar di master **Ketika** file divalidasi **Maka** tooltip "Tidak ada data pada master". · Sumber: TMS.S019-R04 poin 7 (bagian "Drop Point Asal & Drop Point Tujuan")
- **AC-028** (VAL-007) — **Diberikan** PIC Pengirim/Penerima diisi bukan text **Ketika** file divalidasi **Maka** tooltip "Format data tidak sesuai". · Sumber: TMS.S019-R04 poin 7 (bagian "PIC Pengirim & PIC Penerima")
- **AC-029** (VAL-008) — **Diberikan** No WA PIC Pengirim/Penerima diisi bukan angka **Ketika** file divalidasi **Maka** tooltip "Format data tidak sesuai". · Sumber: TMS.S019-R04 poin 7 (bagian "No WA PIC Pengirim & No WA PIC Penerima")
- **AC-030** (REQ-040, REQ-041) — **Diberikan** No WA diawali 62, +62, atau 0 **Ketika** file diproses **Maka** awalan 62/+62 dibaca sebagai 0 dan awalan 0 tetap terbaca 0. · Sumber: TMS.S019-R04 poin 7 (bagian "No WA PIC Pengirim & No WA PIC Penerima")
- **AC-031** (REQ-042, REQ-045) — **Diberikan** kolom PIC, No WA, PPN (%), PPH (%) dikosongkan **Ketika** file divalidasi **Maka** kolom tersebut tidak dianggap tidak sesuai karena tidak wajib. · Sumber: TMS.S019-R04 poin 7 (bagian "PIC Pengirim & PIC Penerima"; "No WA …"; "PPN (%), PPH (%)")
- **AC-032** (VAL-009) — **Diberikan** Deskripsi Barang bukan text **Ketika** file divalidasi **Maka** tooltip "Format data tidak sesuai". · Sumber: TMS.S019-R04 poin 7 (bagian "Deskripsi Barang")
- **AC-033** (VAL-010) — **Diberikan** jumlah Deskripsi Barang tidak sesuai jumlah droppoint & armada **Ketika** file divalidasi **Maka** tooltip "Deskripsi Barang tidak Lengkap". · Sumber: TMS.S019-R04 poin 7 (bagian "Deskripsi Barang")
- **AC-034** (VAL-011) — **Diberikan** Berat/No DO/Kubikasi diisi bukan angka **Ketika** file divalidasi **Maka** tooltip "Format data tidak sesuai". · Sumber: TMS.S019-R04 poin 7 (bagian "Berat, No DO & Kubikasi")
- **AC-035** (VAL-012) — **Diberikan** jumlah Berat/No DO/Kubikasi tidak sesuai jumlah droppoint & armada **Ketika** file divalidasi **Maka** tooltip "Berat / No DO / Kubikasi tidak Lengkap". · Sumber: TMS.S019-R04 poin 7 (bagian "Berat, No DO & Kubikasi")
- **AC-036** (VAL-013) — **Diberikan** Vendor tidak terdaftar pada Manajemen Vendor **Ketika** file divalidasi **Maka** tooltip "Tidak ada data pada Manajemen Vendor". · Sumber: TMS.S019-R04 poin 7 (bagian "Vendor")
- **AC-037** (VAL-014) — **Diberikan** Tgl Permintaan Muat tidak berformat DD/MM/YYYY **Ketika** file divalidasi **Maka** tooltip "Format data tidak sesuai". · Sumber: TMS.S019-R04 poin 7 (bagian "Tgl Permintaan Muat")
- **AC-038** (VAL-015) — **Diberikan** Waktu Perjalanan tidak diisi dan data rute pada master belum tersedia **Ketika** file divalidasi **Maka** tooltip "Tidak ada data pada master". · Sumber: TMS.S019-R04 poin 7 (bagian "Waktu Perjalanan")
- **AC-039** (VAL-016) — **Diberikan** Waktu Perjalanan diisi bukan angka **Ketika** file divalidasi **Maka** tooltip "Format data tidak sesuai". · Sumber: TMS.S019-R04 poin 7 (bagian "Waktu Perjalanan")
- **AC-040** (VAL-017) — **Diberikan** Harga Barang bukan angka **Ketika** file divalidasi **Maka** tooltip "Format data tidak sesuai". · Sumber: TMS.S019-R04 poin 7 (bagian "Harga Barang")
- **AC-041** (VAL-018) — **Diberikan** PPN (%)/PPH (%) diisi bukan angka **Ketika** file divalidasi **Maka** tooltip "Format data tidak sesuai". · Sumber: TMS.S019-R04 poin 7 (bagian "PPN (%), PPH (%)")

## 6. State / transisi
Spec TMS.S019 tidak mendefinisikan status order baru; status order hasil batch tidak disebut (Q-11). Status order yang berlaku didefinisikan di TMS.S011-R09 / TMS.S012-R09 / TMS.S013-R08. Alur halaman yang tertulis:

| Kondisi / tahap | Aksi tersedia (tertulis) | Hasil | Sumber |
|---|---|---|---|
| Halaman Batch Order (default) | Pilih Tipe pengiriman (FTL, FCL, LTL, LCL); "Download Template Excel"; upload dokumen | — | TMS.S019-R02 poin 3–5 |
| File tidak sesuai diupload | — | Pop up alert | TMS.S019-R03 poin 10 |
| File berhasil diupload | — | Section Preview Data Order tampil (ringkasan + tabel data tidak sesuai) | TMS.S019-R03 poin 1–3 |
| Preview: masih ada data tidak valid | "Lanjutkan" | Pop up konfirmasi bahwa proses tidak dapat dilanjutkan; data tidak valid tidak lolos ke create shipment | TMS.S019-R03 poin 5, 6 |
| Preview: seluruh data valid | "Lanjutkan" | Pop up konfirmasi; seluruh order terbuat; redirect ke Daftar Order menampilkan data hasil batch; alert berhasil tercreate menjadi shipment | TMS.S019-R03 poin 7, 9 |
| Halaman Batch Order / Preview | "Batal" | Pop up konfirmasi; proses dibatalkan; kembali ke Daftar order | TMS.S019-R03 poin 8 |

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Order FTL / FCL / LTL & LCL (TMS.S011, S012, S013) | Button "Batch Order" berada di menu Order; order hasil batch tampil di Daftar Order; S011–S013 menyatakan batch "dijelaskan pada modul terpisah" | TMS.S019-R02 poin 1; TMS.S019-R03 poin 7; TMS.S011-R03 poin 3; TMS.S012-R03 poin 3; TMS.S013-R03 poin 3 |
| Master Waktu Perjalanan (TMS.S008) | Waktu perjalanan dari master tidak berubah bila sudah ada; bila belum ada tersimpan ke master (terpotong) | TMS.S019-R04 poin 6; spec-index §3 (S008-R02 poin 3/6) |
| Master Drop Point (TMS.S006) | Validasi Drop Point terdaftar di master; PIC/No WA default dari master droppoint | TMS.S019-R04 poin 5, 7 |
| Manajemen Vendor (TMS.S003) | Validasi Vendor harus terdaftar pada Manajemen Vendor | TMS.S019-R04 poin 7 (bagian "Vendor") |
| Master Unit (TMS.S009), Master Pelabuhan, Master Kota | Validasi Jenis Armada/Kontainer, Pelabuhan, Kota terdaftar pada master (nama master tidak disebut spesifik di S019) | TMS.S019-R04 poin 7 |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | Kalimat Waktu Perjalanan terpotong: "Jika di master belum ada, saat di inputkan maka akan tersimpan di mas". | TMS.S019-R04 poin 6 | REQ-038 | §4 no.18 |
| Q-02 | Template "Template Batch Order TMS Shipper.xlsx" tidak ada di workbook; daftar kolom, urutan, dan penanda (*) tidak dapat diketahui. | TMS.S019-R02, R03 (bagian "Template") | REQ-009, REQ-026 | §4 no.18 |
| Q-03 | "No DO harus berupa angka", sedangkan form order mengizinkan beberapa No DO dipisah koma. | TMS.S019-R04 poin 7 (bagian "Berat, No DO & Kubikasi") | REQ-043 | §4 no.19 |
| Q-04 | Kolom "Harga Barang" di batch vs field "Harga" di form order — sama? | TMS.S019-R04 poin 7 (bagian "Harga Barang") | — | §4 no.19 |
| Q-05 | Kolom E "Desain duplikat Saat ini" — tidak ada nomor desain. | TMS.S019-R01 | — | §4 no.20 |
| Q-06 | Cakupan menyebut "Admin dapat membuat Batch Order", sedangkan modul Order memberi seluruh aksi ke Shipper dan template bernama "TMS Shipper". Aktor yang dimaksud? Apakah Vendor dapat mengakses Batch Order? | Cakupan kolom B; TMS.S019-R02 | REQ-003 | Baru |
| Q-07 | R02 poin 3 menyebut "Tipe pengiriman" untuk FTL/FCL/LTL/LCL, sedangkan di S011–S013 "Tipe Pengiriman" = Normal/Multipickup/Multidrop/Multipoint dan FTL/FCL/LTL/LCL disebut "Jenis Pengiriman". Label mana yang tampil? | TMS.S019-R02 poin 3 | REQ-005 | Baru |
| Q-08 | Format, ekstensi, ukuran, dan jumlah file upload tidak disebut; kriteria "file tidak sesuai" serta isi pop up alert tidak disebut. | TMS.S019-R02 poin 5; TMS.S019-R03 poin 10 | REQ-008, REQ-024 | Baru |
| Q-09 | Ringkasan Preview memuat "Customer", tetapi tidak ada kolom/field Customer di aturan template maupun form order. Isi "Customer" berasal dari mana? | TMS.S019-R03 poin 1 | REQ-011 | Baru |
| Q-10 | R03 poin 7 "Tampil pop up konfirmasi" — sebelum order dibuat (konfirmasi) atau setelahnya? Hubungannya dengan alert berhasil di poin 9? | TMS.S019-R03 poin 7, 9 | REQ-020, REQ-023 | Baru |
| Q-11 | Status awal order hasil batch (mis. salah satu dari 9 status S011–S013) tidak disebut; R03 juga memakai istilah "shipment" dan "order" bergantian. | TMS.S019-R01; TMS.S019-R03 poin 6, 7, 9 | REQ-018 | Baru |
| Q-12 | Daftar kolom bertanda (*) dan tooltip/perilaku saat kolom wajib kosong tidak disebut. | TMS.S019-R04 poin 2 | REQ-026 | Baru |
| Q-13 | Aturan strip (-) untuk PIC/No WhatsApp ambigu: strip diisi pada titik yang ingin memakai data master, atau sebaliknya? Bagaimana dengan pemisah ";" per drop point? | TMS.S019-R04 poin 5 | REQ-036 | Baru |
| Q-14 | No WA "Harus berupa angka", tetapi input diawali "+62" (mengandung "+") dinyatakan dibaca sebagai 0. Apakah "+62" lolos validasi format? | TMS.S019-R04 poin 7 (bagian "No WA …") | REQ-040 | Baru |
| Q-15 | Tgl Permintaan Muat "Harus berupa angka dan berformat DD/MM/YYYY" — format mengandung "/"; apakah sel bertipe tanggal Excel diterima? | TMS.S019-R04 poin 7 (bagian "Tgl Permintaan Muat") | — | Baru |
| Q-16 | Rule multi drop point dan pemisah "##" antar armada: apakah berlaku untuk template LTL/LCL, mengingat S013-R04 (Rule Umum poin 2) menyatakan LTL/LCL hanya normal dan Jumlah Kontainer LCL terkunci 1? | TMS.S019-R04 poin 3, 4; TMS.S013-R04 | REQ-031–REQ-033 | Baru |
| Q-17 | Kolom Waktu Perjalanan: apakah ada di template FCL/LCL (S012-R07/S013-R06 menyatakan FCL/LCL tidak punya input waktu perjalanan) dan apakah VAL-015 berlaku untuk FCL/LCL? | TMS.S019-R04 poin 6, 7 | REQ-044 | Baru |
| Q-18 | Validasi Vendor hanya "terdaftar pada Manajemen Vendor" dan Drop Point "terdaftar pada master" — apakah status Aktif disyaratkan (S006-R06 poin 1 menyebut "Drop point aktif")? | TMS.S019-R04 poin 7 (bagian "Vendor", "Drop Point …") | — | Baru |
| Q-19 | R03 poin 4 "Kesalahan pada satu baris tidak menggagalkan baris lain" vs poin 5–6 "proses tidak dapat dilanjutkan selama masih ada data tidak valid". Apakah baris valid dapat dibuat terpisah, atau seluruh batch tertahan? | TMS.S019-R03 poin 4, 5, 6 | REQ-015, REQ-016 | Baru |
| Q-20 | Frasa "(semua dalam satuan)" pada Berat, No DO & Kubikasi tidak jelas maksudnya (satuan kg/m3? tanpa satuan?). | TMS.S019-R04 poin 7 (bagian "Berat, No DO & Kubikasi") | REQ-043 | Baru |

## 9. Catatan testability (bukan requirement)
- Seluruh VAL/AC SEC-04–SEC-05 memerlukan file template xlsx ("Template Batch Order TMS Shipper.xlsx") yang tidak tersedia di workbook (Q-02); file uji harus disusun dari template yang diunduh dari sistem (REQ-002, REQ-007).
- REQ-037/REQ-038 memerlukan kondisi data Master Waktu Perjalanan (rute ada / belum ada).
- VAL-001–VAL-006, VAL-013 memerlukan data master (Pelabuhan, Kota, Unit, Drop Point, Manajemen Vendor) yang ada dan yang tidak ada.

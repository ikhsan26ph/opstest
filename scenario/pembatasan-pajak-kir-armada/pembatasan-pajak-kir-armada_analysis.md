# TMS.S025 — Pembatasan Pajak dan KIR Armada · Analysis (REQ / VAL / AC)

> Sumber: [`pembatasan-pajak-kir-armada_spec.md`](pembatasan-pajak-kir-armada_spec.md) (verbatim `Spek TMS-S` baris 171–182) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Ketentuan Umum | TMS.S025-R02 | Shipper, Vendor, Sistem | REQ-001–REQ-005 | — | AC-001–AC-002 |
| SEC-02 | Pengaturan Sistem — Pembatasan Kelayakan Armada | TMS.S025-R03 | Shipper | REQ-006–REQ-040 | VAL-001–VAL-010 | AC-003–AC-020 |
| SEC-03 | Perhitungan Batas Akhir Berlaku Dokumen | TMS.S025-R04 | Sistem | REQ-041–REQ-048 | — | AC-021–AC-026 |
| SEC-04 | Status Dokumen Armada — Penugasan Tracking | TMS.S025-R05 | Sistem | REQ-049–REQ-057 | — | AC-027–AC-032 |
| SEC-05 | Master Armada (sisi vendor) | TMS.S025-R06 | Vendor | REQ-058–REQ-063 | VAL-011–VAL-013 | AC-033–AC-037 |
| SEC-06 | Penugasan Tracking — Pilih Armada | TMS.S025-R07 | Pengguna penugasan (Shipper vendor kelolaan / Vendor — sesuai S015-R02) | REQ-064–REQ-076 | VAL-014–VAL-016 | AC-038–AC-046 |
| SEC-07 | Pop up alert | TMS.S025-R08, TMS.S025-R12 | Pengguna penugasan, Shipper | REQ-077–REQ-085 | VAL-015 | AC-047–AC-051 |
| SEC-08 | Reminder Masa Berlaku Dokumen | TMS.S025-R09 | Sistem (job), Shipper, Vendor | REQ-086–REQ-097 | — | AC-052–AC-059 |
| SEC-09 | Isi Email Reminder | TMS.S025-R10 | Shipper, Vendor (penerima) | REQ-098–REQ-107 | — | AC-060–AC-065 |
| SEC-10 | Pusat Notifikasi | TMS.S025-R11 | Shipper, Vendor (penerima) | REQ-108–REQ-113 | — | AC-066–AC-070 |

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Shipper | Melakukan pengaturan melalui menu Pengaturan Sistem, section Pembatasan Kelayakan Armada | TMS.S025-R02 poin 2 |
| Shipper | Tidak dapat mengubah data masa berlaku dokumen armada | TMS.S025-R02 poin 4 |
| Vendor | Menginput data masa berlaku dokumen pada Master Armada | TMS.S025-R02 poin 4; TMS.S025-R06 |
| Sistem | Menghitung status dokumen real-time; menjalankan job reminder sekali sehari | TMS.S025-R05 poin 1; TMS.S025-R09 poin 1 |
| Penerima reminder | Sesuai setting Penerima Reminder (Shipper / Vendor / Shipper & Vendor) | TMS.S025-R09 poin 5; TMS.S025-R11 poin 6 |

Pengguna yang melakukan penugasan tidak disebut di S025; hak akses penugasan diatur di TMS.S015-R02.

## 3. Requirement (REQ)
### SEC-01 · Ketentuan Umum
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Fitur memeriksa masa berlaku dokumen armada (KIR dan Pajak/STNK) pada saat proses penugasan. | TMS.S025-R02 poin 1 | TERTULIS |
| REQ-002 | Pengaturan dilakukan oleh Shipper melalui menu Pengaturan Sistem, section Pembatasan Kelayakan Armada. | TMS.S025-R02 poin 2 | TERTULIS |
| REQ-003 | Pengaturan bersifat global, berlaku untuk seluruh vendor dan seluruh armada "yang pengelola nya vendor". | TMS.S025-R02 poin 3 | AMBIGU (Q-02) |
| REQ-004 | Data masa berlaku dokumen diinput oleh vendor pada Master Armada; Shipper tidak dapat mengubah data tersebut. | TMS.S025-R02 poin 4 | TERTULIS |
| REQ-005 | Perhitungan selisih tanggal memakai satuan hari kalender penuh, mengabaikan jam, timezone Asia/Jakarta. | TMS.S025-R02 poin 5 | TERTULIS |

### SEC-02 · Pengaturan Sistem — Pembatasan Kelayakan Armada
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-006 | Section berada di halaman Pengaturan Sistem dan dapat di-collapse seperti section lainnya. | TMS.S025-R03 poin 1 | TERTULIS |
| REQ-007 | Field Dokumen yang Diperiksa berupa checkbox dengan pilihan KIR & Pajak (STNK). | TMS.S025-R03 poin 2 butir 1 | TERTULIS |
| REQ-008 | Dokumen yang Diperiksa wajib dipilih minimal 1 bila Mode Pengecekan bukan Tidak Ada Pengecekan. | TMS.S025-R03 poin 2 butir 2 | TERTULIS |
| REQ-009 | Dokumen yang tidak dicentang tidak diperiksa, tidak menghasilkan badge, dan tidak menghasilkan reminder. | TMS.S025-R03 poin 2 butir 3 | TERTULIS |
| REQ-010 | Field Mode Pengecekan berupa radio, wajib dipilih, dengan 3 pilihan: Armada Dibatasi, Peringatan, Tidak Ada Pengecekan. | TMS.S025-R03 poin 3 | TERTULIS |
| REQ-011 | Mode Armada Dibatasi: armada dengan dokumen yang tidak memenuhi syarat tidak dapat dipilih saat penugasan. | TMS.S025-R03 poin 3 butir 1 | KONFLIK (Q-01) |
| REQ-012 | Mode Armada Dibatasi dan Peringatan: data masa berlaku dokumen pada Master Armada menjadi wajib. | TMS.S025-R03 poin 3 butir 1–2 | TERTULIS |
| REQ-013 | Mode Armada Dibatasi dan Peringatan: badge status dokumen tampil pada dropdown armada. | TMS.S025-R03 poin 3 butir 1–2 | TERTULIS |
| REQ-014 | Mode Armada Dibatasi dan Peringatan: reminder dikirim. | TMS.S025-R03 poin 3 butir 1–2 | TERTULIS |
| REQ-015 | Mode Peringatan: armada tetap dapat dipilih, namun sistem menampilkan alert kedaluwarsa. | TMS.S025-R03 poin 3 butir 2 | TERTULIS |
| REQ-016 | Mode Tidak Ada Pengecekan: sistem tidak memeriksa masa berlaku dokumen sama sekali. | TMS.S025-R03 poin 3 butir 3 | TERTULIS |
| REQ-017 | Mode Tidak Ada Pengecekan: data masa berlaku dokumen pada Master Armada tidak wajib. | TMS.S025-R03 poin 3 butir 3 | TERTULIS |
| REQ-018 | Mode Tidak Ada Pengecekan: badge status dokumen tidak tampil pada dropdown armada. | TMS.S025-R03 poin 3 butir 3 | TERTULIS |
| REQ-019 | Mode Tidak Ada Pengecekan: reminder tidak dikirim. | TMS.S025-R03 poin 3 butir 3 | TERTULIS |
| REQ-020 | Saat Mode Pengecekan = Tidak Ada Pengecekan, field Dasar Perhitungan FTL & LTL, Dasar Perhitungan FCL & LCL, Toleransi Hari, Waktu Reminder, Penerima Reminder, dan Jenis Notifikasi disembunyikan. | TMS.S025-R03 poin 4 | TERTULIS |
| REQ-021 | Nilai terakhir field yang disembunyikan tetap disimpan dan tidak hilang bila mode dikembalikan. | TMS.S025-R03 poin 4 | TERTULIS |
| REQ-022 | Field Dasar Perhitungan FTL & LTL berupa radio, wajib, 2 pilihan: Target Waktu Perjalanan (dokumen harus berlaku sampai muatan tiba di lokasi bongkar; nilai target dari data order) dan Tanggal Permintaan Muat (dokumen harus berlaku saat armada melakukan proses muat). | TMS.S025-R03 poin 5 | TERTULIS |
| REQ-023 | Field Dasar Perhitungan FCL & LCL hanya memiliki 1 pilihan "Tanggal Permintaan Muat / Bongkar", terpilih otomatis dan tidak dapat diubah. | TMS.S025-R03 poin 6 | TERTULIS |
| REQ-024 | Field Toleransi Hari bersifat opsional, input angka dengan satuan hari, nilai minimal 0. | TMS.S025-R03 poin 7 | TERTULIS (lihat Q-05) |
| REQ-025 | Bila Dasar Perhitungan FTL & LTL = Target Waktu Perjalanan: Toleransi Hari tidak tampil pada section FTL & LTL; Toleransi Hari tampil sebagai field tersendiri pada section FCL & LCL dan dapat diisi bebas. | TMS.S025-R03 poin 7 butir 1 | TERTULIS |
| REQ-026 | Bila Dasar Perhitungan FTL & LTL = Tanggal Permintaan Muat: Toleransi Hari tampil sebagai field pada section FTL & LTL; pada section FCL & LCL tidak tampil sebagai field, nilainya mengikuti Toleransi Hari FTL & LTL dan ditampilkan sebagai informasi read-only. | TMS.S025-R03 poin 7 butir 2 | TERTULIS |
| REQ-027 | Setiap Dasar Perhitungan menampilkan kotak contoh perhitungan; nilai contoh mengikuti isi field secara dinamis (tanggal contoh, nilai toleransi atau target waktu perjalanan, hasil minimal akhir berlaku dokumen). | TMS.S025-R03 poin 8 | TERTULIS |
| REQ-028 | Field Waktu Reminder berupa daftar input H- yang dapat ditambah. | TMS.S025-R03 poin 9 | TERTULIS |
| REQ-029 | Waktu Reminder wajib terdapat minimal 1 baris. | TMS.S025-R03 poin 9 butir 1 | TERTULIS |
| REQ-030 | Waktu Reminder default terisi 3 baris: H-30, H-14, H-7. | TMS.S025-R03 poin 9 butir 2 | TERTULIS |
| REQ-031 | Baris tambahan ditambahkan melalui button tambah. | TMS.S025-R03 poin 9 butir 3 | TERTULIS |
| REQ-032 | Baris dapat dihapus, kecuali bila hanya tersisa 1 baris. | TMS.S025-R03 poin 9 butir 4 | TERTULIS |
| REQ-033 | Input Waktu Reminder berupa angka bulat, nilai minimal 0. | TMS.S025-R03 poin 9 butir 5 | TERTULIS |
| REQ-034 | Nilai antar baris Waktu Reminder tidak boleh duplikat. | TMS.S025-R03 poin 9 butir 6 | TERTULIS |
| REQ-035 | Nilai Waktu Reminder wajib diurutkan dari terbesar ke terkecil; bila tidak sesuai tampil helper error. | TMS.S025-R03 poin 9 butir 7 | TERTULIS |
| REQ-036 | Field Penerima Reminder berupa segmented, wajib, pilihan: Shipper, Vendor, Shipper & Vendor. | TMS.S025-R03 poin 10 | TERTULIS |
| REQ-037 | Field Jenis Notifikasi berupa segmented, wajib, pilihan: Email, Push Notifikasi, Email & Push Notifikasi. | TMS.S025-R03 poin 11 | TERTULIS |
| REQ-038 | Jika field required tidak diisi, tampil helper error dan border field berubah ke warna error. | TMS.S025-R03 poin 12 | TERTULIS |
| REQ-039 | Perubahan pengaturan berlaku segera setelah disimpan. | TMS.S025-R03 poin 13 | TERTULIS |
| REQ-040 | Perubahan pengaturan tidak mengubah penugasan yang sudah tersimpan sebelumnya. | TMS.S025-R03 poin 13; TMS.S025-R07 poin 9 | TERTULIS |

### SEC-03 · Perhitungan Batas Akhir Berlaku Dokumen
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-041 | Sistem menghitung tanggal batas untuk setiap penugasan, lalu membandingkannya dengan tanggal akhir berlaku dokumen armada. | TMS.S025-R04 poin 1 | TERTULIS |
| REQ-042 | Armada memenuhi syarat bila tanggal akhir berlaku dokumen ≥ tanggal batas. | TMS.S025-R04 poin 2 | TERTULIS |
| REQ-043 | Order FTL & LTL, Dasar Perhitungan Target Waktu Perjalanan: tanggal batas = tanggal permintaan muat + target waktu perjalanan dari order. | TMS.S025-R04 poin 3 butir 1 | TERTULIS (lihat Q-06) |
| REQ-044 | Order FTL & LTL, Dasar Perhitungan Tanggal Permintaan Muat: tanggal batas = tanggal permintaan muat + Toleransi Hari. | TMS.S025-R04 poin 3 butir 2 | TERTULIS (lihat Q-05) |
| REQ-045 | Order FCL & LCL: tanggal batas = tanggal permintaan yang dinilai + Toleransi Hari. | TMS.S025-R04 poin 3 butir 3 | TERTULIS (lihat Q-05) |
| REQ-046 | Order FCL & LCL: penugasan muat memakai tanggal permintaan muat; penugasan bongkar memakai tanggal permintaan bongkar. | TMS.S025-R04 poin 4 | TERTULIS (lihat Q-11) |
| REQ-047 | Pengecekan dilakukan terhadap seluruh dokumen yang dicentang; armada tidak memenuhi syarat bila salah satu dokumen tidak memenuhi. | TMS.S025-R04 poin 5 | TERTULIS |
| REQ-048 | Bila tanggal akhir berlaku dokumen kosong, armada dinyatakan Data Belum Lengkap dan belum bisa dilakukan perhitungan rumus. | TMS.S025-R04 poin 6 | TERTULIS |

### SEC-04 · Status Dokumen Armada — Penugasan Tracking
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-049 | Status dihitung sistem secara real-time dan tidak disimpan sebagai kolom statis. | TMS.S025-R05 poin 1 | TERTULIS |
| REQ-050 | Status Berlaku: akhir berlaku ≥ tanggal batas; badge hijau. | TMS.S025-R05 poin 2 butir 1 | TERTULIS |
| REQ-051 | Status Segera Berakhir: akhir berlaku ≥ tanggal hari ini namun < tanggal batas; badge kuning. | TMS.S025-R05 poin 2 butir 2 | TERTULIS |
| REQ-052 | Status Tidak Berlaku: akhir berlaku < tanggal hari ini; badge merah. | TMS.S025-R05 poin 2 butir 3 | TERTULIS |
| REQ-053 | Status Data Belum Lengkap: akhir berlaku kosong; badge kuning. | TMS.S025-R05 poin 2 butir 4 | TERTULIS |
| REQ-054 | Label badge mengikuti nama dokumen, contoh "KIR Berlaku", "KIR Segera Berakhir", "KIR Tidak Berlaku", "Data KIR Belum Lengkap". | TMS.S025-R05 poin 3 | TERTULIS (label Pajak — Q-07) |
| REQ-055 | Bila lebih dari satu dokumen diperiksa dan lebih dari satu bermasalah, badge ditampilkan per dokumen bermasalah dengan urutan prioritas: Data Belum Lengkap, Tidak Berlaku, Segera Berakhir. | TMS.S025-R05 poin 4 | TERTULIS (lihat Q-08) |
| REQ-056 | Bila seluruh dokumen yang diperiksa berstatus Berlaku, cukup tampil satu badge Berlaku. | TMS.S025-R05 poin 5 | TERTULIS (lihat Q-07) |
| REQ-057 | Status dokumen tampil hanya saat mode pengecekan Armada Dibatasi atau Peringatan. | TMS.S025-R05 poin 6 | TERTULIS |

### SEC-05 · Master Armada (sisi vendor)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-058 | Field Akhir Berlaku KIR dan Akhir Berlaku Pajak menjadi wajib bila Mode Pengecekan = Armada Dibatasi atau Peringatan dan dokumen tersebut dicentang pada Dokumen yang Diperiksa. | TMS.S025-R06 poin 1 | TERTULIS |
| REQ-059 | Ketentuan wajib berlaku pada proses tambah armada, edit armada, dan import data armada. | TMS.S025-R06 poin 2 | TERTULIS (import — Q-09) |
| REQ-060 | Field yang berubah menjadi wajib menampilkan tanda required beserta keterangan penyebabnya. | TMS.S025-R06 poin 3 | TERTULIS (copy keterangan — Q-16) |
| REQ-061 | Data armada existing yang tanggalnya kosong tidak dipaksa terisi; berstatus Data Belum Lengkap dan mengikuti perlakuan mode yang berlaku saat penugasan. | TMS.S025-R06 poin 4 | TERTULIS |
| REQ-062 | Armada dengan dokumen kedaluwarsa tetap dapat disimpan; sistem tidak memblokir simpan pada Master Armada; pembatasan hanya pada proses penugasan. | TMS.S025-R06 poin 5 | TERTULIS |
| REQ-063 | Template import master armada mengikuti rule proses tambah armada (sesuai mode pengecekan). | TMS.S025-R06 poin 6 | REF-EKSTERNAL (Q-09) |

### SEC-06 · Penugasan Tracking — Pilih Armada
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-064 | Pengecekan dijalankan pada 2 titik: saat dropdown armada dimuat dan saat button Simpan ditekan. | TMS.S025-R07 poin 1 | TERTULIS (lihat Q-11) |
| REQ-065 | Dasar perhitungan mengikuti jenis order yang dipilih (FTL, LTL, FCL, atau LCL). | TMS.S025-R07 poin 2 | TERTULIS |
| REQ-066 | Badge status dokumen ditampilkan pada setiap item di dropdown armada. | TMS.S025-R07 poin 3 | TERTULIS |
| REQ-067 | Mode Armada Dibatasi: armada tidak memenuhi syarat dan armada data belum lengkap tetap tampil di dropdown, seluruh armada tetap dapat dipilih; setelah dipilih tampil alert sesuai status dokumennya. | TMS.S025-R07 poin 4 butir 1 | KONFLIK (Q-01) |
| REQ-068 | Mode Peringatan: seluruh armada tetap dapat dipilih; setelah dipilih tampil alert sesuai status dokumennya. | TMS.S025-R07 poin 4 butir 2 | TERTULIS |
| REQ-069 | Mode Tidak Ada Pengecekan: dropdown tampil tanpa badge apa pun dan tanpa pembatasan. | TMS.S025-R07 poin 4 butir 3 | TERTULIS |
| REQ-070 | Pengecekan dilakukan per baris armada; bila penugasan berisi lebih dari satu armada, setiap baris dievaluasi terpisah. | TMS.S025-R07 poin 5 | TERTULIS |
| REQ-071 | Pada mode Armada Dibatasi & Peringatan, user wajib melakukan pengisian data dan konfirmasi pada pop up peringatan sebelum penugasan dapat disimpan. | TMS.S025-R07 poin 6 | AMBIGU (Q-12) |
| REQ-072 | Saat Simpan ditekan, sistem mengevaluasi ulang seluruh armada terpilih; bila ada armada yang berubah menjadi tidak memenuhi syarat pada mode Armada Dibatasi, simpan dibatalkan dan tampil alert error. | TMS.S025-R07 poin 7 | TERTULIS (mode Peringatan — Q-13) |
| REQ-073 | Mode Armada Dibatasi: opsi Isi Data Manual pada field Armada tampil disable, dengan keterangan bahwa armada wajib dipilih dari master. | TMS.S025-R07 poin 8 butir 1 | TERTULIS |
| REQ-074 | Mode Peringatan: opsi Isi Data Manual pada field Armada tampil disable, dengan keterangan bahwa armada wajib dipilih dari master. | TMS.S025-R07 poin 8 butir 2 | TERTULIS |
| REQ-075 | Mode Tidak Ada Pengecekan: tidak ada perubahan perilaku opsi Isi Data Manual. | TMS.S025-R07 poin 8 butir 3 | TERTULIS |
| REQ-076 | Perubahan pengaturan tidak mencabut penugasan tersimpan; armada yang dokumennya kedaluwarsa di tengah perjalanan tidak dihentikan sistem. | TMS.S025-R07 poin 9 | TERTULIS |

### SEC-07 · Pop up alert
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-077 | Seluruh copy, judul, dan susunan button pop up mengikuti file desain "Katalog Pop Up Kelayakan Armada" pada claude. | TMS.S025-R08 poin 1 | REF-EKSTERNAL (Q-03) |
| REQ-078 | Pop up: armada tidak dapat dipilih karena dokumen tidak berlaku, pada mode Armada Dibatasi. | TMS.S025-R08 poin 2 butir 1 | KONFLIK (Q-01) |
| REQ-079 | Pop up: armada tidak dapat dipilih karena data dokumen belum lengkap, pada mode Armada Dibatasi. | TMS.S025-R08 poin 2 butir 2 | KONFLIK (Q-01) |
| REQ-080 | Pop up: peringatan dokumen tidak berlaku, dengan konfirmasi untuk tetap melanjutkan, pada mode Peringatan. | TMS.S025-R08 poin 2 butir 3 | TERTULIS |
| REQ-081 | Pop up: peringatan dokumen segera berakhir sebelum tanggal batas, dengan konfirmasi untuk tetap melanjutkan, pada mode Peringatan. | TMS.S025-R08 poin 2 butir 4 | TERTULIS |
| REQ-082 | Pop up: peringatan data dokumen belum lengkap, dengan konfirmasi untuk tetap melanjutkan, pada mode Peringatan. | TMS.S025-R08 poin 2 butir 5 | TERTULIS |
| REQ-083 | Pop up: konfirmasi penyimpanan perubahan Mode Pengecekan pada Pengaturan Sistem. | TMS.S025-R08 poin 2 butir 6 | TERTULIS |
| REQ-084 | Pop up peringatan wajib memuat aksi konfirmasi; tanpa konfirmasi, penugasan tidak dapat disimpan. | TMS.S025-R08 poin 3 | TERTULIS |
| REQ-085 | Link desain pop up: https://claude.ai/code/artifact/d5a1bce2-9ba1-4540-8703-aac1f019f95d | TMS.S025-R12 | REF-EKSTERNAL (Q-03) |

### SEC-08 · Reminder Masa Berlaku Dokumen
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-086 | Sistem menjalankan job pengecekan sekali sehari. | TMS.S025-R09 poin 1 | TERTULIS |
| REQ-087 | Job hanya berjalan bila Mode Pengecekan bukan Tidak Ada Pengecekan. | TMS.S025-R09 poin 2 | TERTULIS |
| REQ-088 | Job memeriksa seluruh armada dari seluruh vendor, untuk setiap dokumen yang dicentang pada Dokumen yang Diperiksa. | TMS.S025-R09 poin 3 | AMBIGU (Q-02) |
| REQ-089 | Armada masuk reminder bila sisa hari menuju tanggal akhir berlaku tepat sama dengan salah satu nilai Waktu Reminder. | TMS.S025-R09 poin 4 butir 1 | TERTULIS (lihat Q-14) |
| REQ-090 | Armada masuk reminder bila tanggal akhir berlaku sudah terlewati dan selisih hari terlewatinya tepat sama dengan salah satu nilai Waktu Reminder (dihitung sebagai H+). | TMS.S025-R09 poin 4 butir 2 | TERTULIS |
| REQ-091 | Penerima Shipper: hanya user shipper, memuat armada dari seluruh vendor. | TMS.S025-R09 poin 5 butir 1 | TERTULIS |
| REQ-092 | Penerima Vendor: hanya user vendor pemilik armada, memuat armada miliknya sendiri. | TMS.S025-R09 poin 5 butir 2 | TERTULIS |
| REQ-093 | Penerima Shipper & Vendor: keduanya, dengan isi sesuai cakupan masing-masing. | TMS.S025-R09 poin 5 butir 3 | TERTULIS |
| REQ-094 | Jenis Notifikasi Email: digabung per hari; seluruh armada dan dokumen yang jatuh tempo pada hari itu dikirim dalam satu email. | TMS.S025-R09 poin 6 butir 1 | TERTULIS |
| REQ-095 | Jenis Notifikasi Push Notifikasi: dipisah per deadline; satu push per tahapan Waktu Reminder, memuat jumlah armada pada tahapan tersebut. | TMS.S025-R09 poin 6 butir 2 | TERTULIS |
| REQ-096 | Bila pada hari tersebut tidak ada armada yang jatuh tempo, tidak ada email maupun push yang dikirim. | TMS.S025-R09 poin 7 | TERTULIS |
| REQ-097 | Reminder berhenti otomatis begitu tanggal akhir berlaku dokumen diperbarui oleh vendor. | TMS.S025-R09 poin 8 | TERTULIS |

### SEC-09 · Isi Email Reminder
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-098 | Subject dan layout email mengikuti desain nomor 194. | TMS.S025-R10 poin 1 | REF-EKSTERNAL (Q-03) |
| REQ-099 | Email memuat tabel dengan kolom: No, Nopol, Vendor, Akhir Berlaku Dokumen, Sisa Waktu. | TMS.S025-R10 poin 2 | TERTULIS |
| REQ-100 | Kolom Akhir Berlaku Dokumen diawali nama dokumennya, contoh "KIR: 01/08/2026" dan "Pajak: 03/08/2026". | TMS.S025-R10 poin 3 | TERTULIS |
| REQ-101 | Satu armada dengan lebih dari satu dokumen jatuh tempo ditampilkan sebagai satu grup baris, kolom No, Nopol, dan Vendor di-merge. | TMS.S025-R10 poin 4 | TERTULIS |
| REQ-102 | Kolom Sisa Waktu belum terlewati tampil "n hari lagi". | TMS.S025-R10 poin 5 butir 1 | TERTULIS |
| REQ-103 | Kolom Sisa Waktu sudah terlewati tampil "Lewat n hari" dengan warna error. | TMS.S025-R10 poin 5 butir 2 | TERTULIS |
| REQ-104 | Urutan baris berdasarkan sisa waktu paling kritis di atas: yang sudah terlewati lebih dahulu, kemudian H- terkecil. | TMS.S025-R10 poin 6 | TERTULIS |
| REQ-105 | Kalimat penutup mode Peringatan menyebutkan armada masih dapat ditugaskan namun akan memunculkan peringatan. | TMS.S025-R10 poin 7 butir 1 | TERTULIS (copy — Q-16) |
| REQ-106 | Kalimat penutup mode Armada Dibatasi menyebutkan armada tidak dapat ditugaskan sampai dokumennya diperbarui. | TMS.S025-R10 poin 7 butir 2 | KONFLIK (Q-01) |
| REQ-107 | Salam pembuka dan cakupan data menyesuaikan penerima: Shipper memuat data armada seluruh vendor; Vendor hanya data armada miliknya. | TMS.S025-R10 poin 8 | TERTULIS (copy salam — Q-16) |

### SEC-10 · Pusat Notifikasi
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-108 | Ditambahkan kategori/tab baru "KIR Armada" pada halaman Notifikasi, mengikuti pola tab yang sudah ada. | TMS.S025-R11 poin 1 | TERTULIS (lihat Q-15) |
| REQ-109 | Satu item notifikasi mewakili satu tahapan deadline, memuat jumlah armada yang memerlukan perhatian beserta tahapannya; contoh "Reminder: Akhir masa berlaku KIR : 3 armada memerlukan perhatian (H+7 lewat akhir masa berlaku)". | TMS.S025-R11 poin 2 | TERTULIS |
| REQ-110 | Item notifikasi mengikuti ketentuan existing: dapat dipilih, ditandai dibaca, dan dihapus. | TMS.S025-R11 poin 3 | TERTULIS |
| REQ-111 | Button "Cek Disini" mengarahkan ke halaman Master Armada dengan filter Status Dokumen sesuai tahapan notifikasinya. | TMS.S025-R11 poin 4 | AMBIGU (Q-10) |
| REQ-112 | Notifikasi mengikuti ketentuan existing auto terhapus 3 bulan sekali. | TMS.S025-R11 poin 5 | TERTULIS |
| REQ-113 | Notifikasi hanya dibuat untuk role yang termasuk dalam setting Penerima Reminder. | TMS.S025-R11 poin 6 | TERTULIS |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-02 | Dokumen yang Diperiksa | Minimal 1 dicentang bila Mode Pengecekan bukan Tidak Ada Pengecekan | "tampilkan helper error dan border field berubah ke warna error" (teks helper tidak disebut) | TMS.S025-R03 poin 2 butir 2, poin 12 |
| VAL-002 | SEC-02 | Mode Pengecekan | Wajib dipilih | Idem VAL-001 | TMS.S025-R03 poin 3, poin 12 |
| VAL-003 | SEC-02 | Dasar Perhitungan FTL & LTL | Wajib dipilih | Idem VAL-001 | TMS.S025-R03 poin 5, poin 12 |
| VAL-004 | SEC-02 | Toleransi Hari | Opsional; angka; satuan hari; minimal 0 | Tidak disebut | TMS.S025-R03 poin 7 |
| VAL-005 | SEC-02 | Waktu Reminder (jumlah baris) | Minimal 1 baris; baris tidak dapat dihapus bila tinggal 1 | Tidak disebut (hapus tidak dapat dilakukan) | TMS.S025-R03 poin 9 butir 1, 4 |
| VAL-006 | SEC-02 | Waktu Reminder (nilai) | Angka bulat, minimal 0 | Tidak disebut | TMS.S025-R03 poin 9 butir 5 |
| VAL-007 | SEC-02 | Waktu Reminder (nilai) | Tidak boleh duplikat antar baris | Tidak disebut | TMS.S025-R03 poin 9 butir 6 |
| VAL-008 | SEC-02 | Waktu Reminder (urutan) | Terbesar → terkecil | "tampilkan helper error" (teks tidak disebut) | TMS.S025-R03 poin 9 butir 7 |
| VAL-009 | SEC-02 | Penerima Reminder | Wajib dipilih | Idem VAL-001 | TMS.S025-R03 poin 10, poin 12 |
| VAL-010 | SEC-02 | Jenis Notifikasi | Wajib dipilih | Idem VAL-001 | TMS.S025-R03 poin 11, poin 12 |
| VAL-011 | SEC-05 | Akhir Berlaku KIR (Master Armada vendor) | Wajib bila mode Armada Dibatasi/Peringatan dan KIR dicentang | Tanda required beserta keterangan penyebab; perilaku saat kosong tidak disebut di S025 | TMS.S025-R06 poin 1, 3 |
| VAL-012 | SEC-05 | Akhir Berlaku Pajak (Master Armada vendor) | Wajib bila mode Armada Dibatasi/Peringatan dan Pajak dicentang | Idem VAL-011 | TMS.S025-R06 poin 1, 3 |
| VAL-013 | SEC-05 | Import data armada | Mengikuti ketentuan wajib VAL-011/VAL-012 | Tidak disebut (Q-09) | TMS.S025-R06 poin 2, 6 |
| VAL-014 | SEC-06 | Simpan penugasan (mode Armada Dibatasi) | Seluruh armada dievaluasi ulang; armada yang berubah tidak memenuhi syarat | "proses simpan dibatalkan dan tampil alert error" (copy tidak disebut) | TMS.S025-R07 poin 7 |
| VAL-015 | SEC-06, SEC-07 | Simpan penugasan (mode Armada Dibatasi & Peringatan) | Wajib konfirmasi pada pop up peringatan | Penugasan tidak dapat disimpan | TMS.S025-R07 poin 6; TMS.S025-R08 poin 3 |
| VAL-016 | SEC-06 | Opsi Isi Data Manual (field Armada) | Disable pada mode Armada Dibatasi & Peringatan | Keterangan bahwa armada wajib dipilih dari master (copy tidak disebut) | TMS.S025-R07 poin 8 |

## 5. Acceptance Criteria (AC)
### SEC-01 · Ketentuan Umum
- **AC-001** (REQ-004) — **Diberikan** user Shipper **Ketika** melihat data masa berlaku dokumen armada vendor **Maka** Shipper tidak dapat mengubah data tersebut · Sumber: TMS.S025-R02 poin 4
- **AC-002** (REQ-005) — **Diberikan** tanggal akhir berlaku dan tanggal pembanding pada hari kalender yang sama dengan jam berbeda (Asia/Jakarta) **Ketika** sistem menghitung selisih **Maka** selisih = 0 hari (jam diabaikan) · Sumber: TMS.S025-R02 poin 5

### SEC-02 · Pengaturan Sistem
- **AC-003** (REQ-006) — **Diberikan** Shipper membuka halaman Pengaturan Sistem **Ketika** melihat section Pembatasan Kelayakan Armada **Maka** section dapat di-collapse seperti section lainnya · Sumber: TMS.S025-R03 poin 1
- **AC-004** (REQ-007, REQ-010) — **Diberikan** section Pembatasan Kelayakan Armada **Ketika** ditampilkan **Maka** tersedia checkbox Dokumen yang Diperiksa (KIR, Pajak (STNK)) dan radio Mode Pengecekan (Armada Dibatasi, Peringatan, Tidak Ada Pengecekan) · Sumber: TMS.S025-R03 poin 2–3
- **AC-005** (REQ-008, VAL-001) — **Diberikan** Mode Pengecekan Armada Dibatasi atau Peringatan **Ketika** tidak ada dokumen dicentang lalu Simpan **Maka** tampil helper error dan border error, pengaturan tidak tersimpan · Sumber: TMS.S025-R03 poin 2 butir 2, poin 12
- **AC-006** (REQ-009) — **Diberikan** hanya KIR yang dicentang **Ketika** pengecekan/badge/reminder dijalankan **Maka** Pajak tidak diperiksa, tidak menghasilkan badge, dan tidak menghasilkan reminder · Sumber: TMS.S025-R03 poin 2 butir 3
- **AC-007** (REQ-020) — **Diberikan** Mode Pengecekan diubah ke Tidak Ada Pengecekan **Ketika** section ditampilkan **Maka** field Dasar Perhitungan FTL & LTL, Dasar Perhitungan FCL & LCL, Toleransi Hari, Waktu Reminder, Penerima Reminder, Jenis Notifikasi disembunyikan · Sumber: TMS.S025-R03 poin 4
- **AC-008** (REQ-021) — **Diberikan** field-field tersebut telah bernilai lalu mode diubah ke Tidak Ada Pengecekan dan disimpan **Ketika** mode dikembalikan ke Armada Dibatasi/Peringatan **Maka** nilai terakhir tampil kembali · Sumber: TMS.S025-R03 poin 4
- **AC-009** (REQ-022, VAL-003) — **Diberikan** mode selain Tidak Ada Pengecekan **Ketika** Dasar Perhitungan FTL & LTL tidak dipilih lalu Simpan **Maka** tampil helper error dan border error · Sumber: TMS.S025-R03 poin 5, poin 12
- **AC-010** (REQ-023) — **Diberikan** section Dasar Perhitungan FCL & LCL **Ketika** ditampilkan **Maka** hanya ada pilihan "Tanggal Permintaan Muat / Bongkar", terpilih otomatis dan tidak dapat diubah · Sumber: TMS.S025-R03 poin 6
- **AC-011** (REQ-025) — **Diberikan** Dasar Perhitungan FTL & LTL = Target Waktu Perjalanan **Ketika** section ditampilkan **Maka** Toleransi Hari tidak tampil di section FTL & LTL dan tampil sebagai field yang dapat diisi di section FCL & LCL · Sumber: TMS.S025-R03 poin 7 butir 1
- **AC-012** (REQ-026) — **Diberikan** Dasar Perhitungan FTL & LTL = Tanggal Permintaan Muat dan Toleransi Hari FTL & LTL diisi n **Ketika** section ditampilkan **Maka** Toleransi Hari tampil sebagai field di FTL & LTL, dan section FCL & LCL menampilkan nilai n sebagai informasi read-only · Sumber: TMS.S025-R03 poin 7 butir 2
- **AC-013** (REQ-024, VAL-004) — **Diberikan** field Toleransi Hari **Ketika** dikosongkan lalu Simpan **Maka** tidak ada error wajib; nilai di bawah 0 tidak diterima (bentuk penolakan tidak disebut) · Sumber: TMS.S025-R03 poin 7
- **AC-014** (REQ-027) — **Diberikan** kotak contoh perhitungan tampil **Ketika** nilai Toleransi Hari atau pilihan Dasar Perhitungan diubah **Maka** nilai contoh (tanggal contoh, toleransi/target waktu perjalanan, hasil minimal akhir berlaku) berubah mengikuti isi field · Sumber: TMS.S025-R03 poin 8
- **AC-015** (REQ-028, REQ-030, REQ-031) — **Diberikan** section dibuka pertama kali **Ketika** melihat Waktu Reminder **Maka** terisi 3 baris H-30, H-14, H-7, dan baris baru dapat ditambah melalui button tambah · Sumber: TMS.S025-R03 poin 9 butir 2–3
- **AC-016** (REQ-029, REQ-032, VAL-005) — **Diberikan** Waktu Reminder tinggal 1 baris **Ketika** user mencoba menghapus baris tersebut **Maka** baris tidak dapat dihapus; dengan ≥2 baris, baris dapat dihapus · Sumber: TMS.S025-R03 poin 9 butir 1, 4
- **AC-017** (REQ-033, REQ-034, VAL-006, VAL-007) — **Diberikan** Waktu Reminder **Ketika** diisi nilai non-bulat, negatif, atau nilai sama pada dua baris **Maka** nilai tersebut tidak diterima (bentuk penolakan tidak disebut) · Sumber: TMS.S025-R03 poin 9 butir 5–6
- **AC-018** (REQ-035, VAL-008) — **Diberikan** Waktu Reminder berurutan H-7, H-14 **Ketika** disimpan/divalidasi **Maka** tampil helper error urutan · Sumber: TMS.S025-R03 poin 9 butir 7
- **AC-019** (REQ-036, REQ-037, VAL-009, VAL-010) — **Diberikan** mode selain Tidak Ada Pengecekan **Ketika** Penerima Reminder atau Jenis Notifikasi tidak dipilih lalu Simpan **Maka** tampil helper error dan border error; pilihan yang tersedia masing-masing Shipper / Vendor / Shipper & Vendor dan Email / Push Notifikasi / Email & Push Notifikasi · Sumber: TMS.S025-R03 poin 10–12
- **AC-020** (REQ-039, REQ-040, REQ-083) — **Diberikan** Shipper mengubah Mode Pengecekan **Ketika** klik Simpan dan mengonfirmasi pop up konfirmasi perubahan Mode Pengecekan **Maka** pengaturan berlaku segera untuk penugasan berikutnya, dan penugasan yang sudah tersimpan tidak berubah · Sumber: TMS.S025-R03 poin 13; TMS.S025-R08 poin 2 butir 6

### SEC-03 · Perhitungan
- **AC-021** (REQ-043, REQ-042) — **Diberikan** order FTL/LTL, Dasar Perhitungan = Target Waktu Perjalanan **Ketika** sistem menghitung **Maka** tanggal batas = tanggal permintaan muat + target waktu perjalanan order, dan armada memenuhi syarat bila akhir berlaku ≥ tanggal batas · Sumber: TMS.S025-R04 poin 2, 3 butir 1
- **AC-022** (REQ-044) — **Diberikan** order FTL/LTL, Dasar Perhitungan = Tanggal Permintaan Muat, Toleransi Hari = n **Ketika** sistem menghitung **Maka** tanggal batas = tanggal permintaan muat + n hari · Sumber: TMS.S025-R04 poin 3 butir 2
- **AC-023** (REQ-045, REQ-046) — **Diberikan** order FCL/LCL, Toleransi Hari = n **Ketika** penugasan muat **Maka** tanggal batas = tanggal permintaan muat + n; **Ketika** penugasan bongkar **Maka** tanggal batas = tanggal permintaan bongkar + n · Sumber: TMS.S025-R04 poin 3 butir 3, poin 4
- **AC-024** (REQ-042) — **Diberikan** akhir berlaku dokumen tepat sama dengan tanggal batas **Ketika** dievaluasi **Maka** armada memenuhi syarat · Sumber: TMS.S025-R04 poin 2
- **AC-025** (REQ-047) — **Diberikan** KIR dan Pajak dicentang, KIR memenuhi dan Pajak tidak memenuhi **Ketika** dievaluasi **Maka** armada tidak memenuhi syarat · Sumber: TMS.S025-R04 poin 5
- **AC-026** (REQ-048) — **Diberikan** akhir berlaku dokumen yang dicentang kosong **Ketika** dievaluasi **Maka** armada berstatus Data Belum Lengkap tanpa perhitungan rumus · Sumber: TMS.S025-R04 poin 6

### SEC-04 · Status Dokumen
- **AC-027** (REQ-050) — **Diberikan** akhir berlaku KIR ≥ tanggal batas **Ketika** dropdown armada dimuat (mode Armada Dibatasi/Peringatan) **Maka** tampil badge hijau "KIR Berlaku" · Sumber: TMS.S025-R05 poin 2 butir 1, poin 3
- **AC-028** (REQ-051) — **Diberikan** akhir berlaku KIR ≥ hari ini namun < tanggal batas **Ketika** dropdown dimuat **Maka** tampil badge kuning "KIR Segera Berakhir" · Sumber: TMS.S025-R05 poin 2 butir 2, poin 3
- **AC-029** (REQ-052) — **Diberikan** akhir berlaku KIR < hari ini **Ketika** dropdown dimuat **Maka** tampil badge merah "KIR Tidak Berlaku" · Sumber: TMS.S025-R05 poin 2 butir 3, poin 3
- **AC-030** (REQ-053) — **Diberikan** akhir berlaku KIR kosong **Ketika** dropdown dimuat **Maka** tampil badge kuning "Data KIR Belum Lengkap" · Sumber: TMS.S025-R05 poin 2 butir 4, poin 3
- **AC-031** (REQ-055, REQ-056) — **Diberikan** KIR dan Pajak dicentang **Ketika** keduanya bermasalah (mis. satu Data Belum Lengkap, satu Tidak Berlaku) **Maka** tampil badge per dokumen dengan urutan Data Belum Lengkap, Tidak Berlaku, Segera Berakhir; **Ketika** keduanya Berlaku **Maka** tampil satu badge Berlaku · Sumber: TMS.S025-R05 poin 4–5
- **AC-032** (REQ-057, REQ-018, REQ-069) — **Diberikan** Mode Pengecekan = Tidak Ada Pengecekan **Ketika** dropdown armada dimuat **Maka** tidak ada badge status dokumen · Sumber: TMS.S025-R05 poin 6; TMS.S025-R07 poin 4 butir 3

### SEC-05 · Master Armada (sisi vendor)
- **AC-033** (REQ-058, REQ-060, VAL-011, VAL-012) — **Diberikan** mode Armada Dibatasi/Peringatan dengan KIR dan Pajak dicentang **Ketika** vendor membuka form tambah/edit armada **Maka** Akhir Berlaku KIR dan Akhir Berlaku Pajak bertanda required beserta keterangan penyebabnya · Sumber: TMS.S025-R06 poin 1–3
- **AC-034** (REQ-017, REQ-058) — **Diberikan** mode Tidak Ada Pengecekan (atau dokumen tidak dicentang) **Ketika** vendor membuka form tambah/edit armada **Maka** field akhir berlaku dokumen tersebut tidak wajib · Sumber: TMS.S025-R03 poin 3 butir 3; TMS.S025-R06 poin 1
- **AC-035** (REQ-059, VAL-013) — **Diberikan** mode Armada Dibatasi/Peringatan **Ketika** vendor mengimport data armada tanpa akhir berlaku dokumen yang dicentang **Maka** ketentuan wajib diterapkan pada import (perilaku penolakan tidak disebut) · Sumber: TMS.S025-R06 poin 2, 6
- **AC-036** (REQ-061) — **Diberikan** armada existing dengan akhir berlaku kosong dan mode diubah ke Armada Dibatasi/Peringatan **Ketika** data armada dilihat/dipilih saat penugasan **Maka** data tidak dipaksa diisi dan armada berstatus Data Belum Lengkap · Sumber: TMS.S025-R06 poin 4
- **AC-037** (REQ-062) — **Diberikan** vendor mengisi akhir berlaku dokumen yang sudah lewat **Ketika** klik Simpan pada Master Armada **Maka** data tersimpan tanpa diblokir · Sumber: TMS.S025-R06 poin 5

### SEC-06 · Penugasan Tracking — Pilih Armada
- **AC-038** (REQ-064, REQ-066) — **Diberikan** mode Armada Dibatasi/Peringatan **Ketika** dropdown armada di form penugasan dimuat **Maka** setiap item menampilkan badge status dokumen · Sumber: TMS.S025-R07 poin 1, 3
- **AC-039** (REQ-065) — **Diberikan** order FCL/LCL penugasan muat **Ketika** dropdown dimuat **Maka** badge dihitung dengan dasar Tanggal Permintaan Muat + Toleransi Hari; untuk order FTL/LTL dengan dasar sesuai setting FTL & LTL · Sumber: TMS.S025-R07 poin 2; TMS.S025-R04 poin 3–4
- **AC-040** (REQ-068, REQ-080–REQ-082) — **Diberikan** mode Peringatan **Ketika** user memilih armada berstatus Tidak Berlaku / Segera Berakhir / Data Belum Lengkap **Maka** armada dapat dipilih dan tampil pop up peringatan sesuai status dengan konfirmasi untuk tetap melanjutkan · Sumber: TMS.S025-R07 poin 4 butir 2; TMS.S025-R08 poin 2 butir 3–5
- **AC-041** (REQ-084, VAL-015) — **Diberikan** mode Armada Dibatasi/Peringatan dan pop up peringatan tampil **Ketika** user tidak mengonfirmasi lalu mencoba menyimpan penugasan **Maka** penugasan tidak dapat disimpan · Sumber: TMS.S025-R07 poin 6; TMS.S025-R08 poin 3
- **AC-042** (REQ-067, REQ-011, REQ-078, REQ-079) — **Diberikan** mode Armada Dibatasi dan armada Tidak Berlaku / Data Belum Lengkap **Ketika** user membuka dropdown dan memilih armada tersebut **Maka** hasil yang diharapkan belum dapat ditetapkan: R03 poin 3 & R08 poin 2 menyatakan "tidak dapat dipilih", R07 poin 4 menyatakan "tetap dapat dipilih" lalu tampil alert — KONFLIK, menunggu Q-01 · Sumber: TMS.S025-R03 poin 3; TMS.S025-R07 poin 4; TMS.S025-R08 poin 2
- **AC-043** (REQ-070) — **Diberikan** penugasan FTL dengan 2 card armada, armada 1 Berlaku dan armada 2 Tidak Berlaku **Ketika** dievaluasi **Maka** tiap baris dievaluasi terpisah (badge/alert per baris) · Sumber: TMS.S025-R07 poin 5
- **AC-044** (REQ-072, VAL-014) — **Diberikan** mode Armada Dibatasi dan armada terpilih berubah menjadi tidak memenuhi syarat sebelum Simpan **Ketika** klik Simpan **Maka** proses simpan dibatalkan dan tampil alert error · Sumber: TMS.S025-R07 poin 7
- **AC-045** (REQ-073–REQ-075, VAL-016) — **Diberikan** mode Armada Dibatasi atau Peringatan **Ketika** melihat field Armada di form penugasan **Maka** opsi Isi Data Manual disable dengan keterangan bahwa armada wajib dipilih dari master; pada mode Tidak Ada Pengecekan opsi tidak berubah · Sumber: TMS.S025-R07 poin 8
- **AC-046** (REQ-076) — **Diberikan** penugasan tersimpan dengan armada yang dokumennya kemudian kedaluwarsa atau pengaturan diubah **Ketika** perjalanan berlangsung **Maka** penugasan tidak dicabut dan tidak dihentikan sistem · Sumber: TMS.S025-R07 poin 9

### SEC-07 · Pop up alert
- **AC-047** (REQ-080) — **Diberikan** mode Peringatan **Ketika** armada dengan dokumen Tidak Berlaku dipilih **Maka** tampil pop up peringatan dokumen tidak berlaku dengan aksi konfirmasi melanjutkan · Sumber: TMS.S025-R08 poin 2 butir 3, poin 3
- **AC-048** (REQ-081) — **Diberikan** mode Peringatan **Ketika** armada dengan dokumen Segera Berakhir dipilih **Maka** tampil pop up peringatan dokumen segera berakhir sebelum tanggal batas dengan aksi konfirmasi · Sumber: TMS.S025-R08 poin 2 butir 4, poin 3
- **AC-049** (REQ-082) — **Diberikan** mode Peringatan **Ketika** armada Data Belum Lengkap dipilih **Maka** tampil pop up peringatan data dokumen belum lengkap dengan aksi konfirmasi · Sumber: TMS.S025-R08 poin 2 butir 5, poin 3
- **AC-050** (REQ-083) — **Diberikan** Shipper mengubah Mode Pengecekan di Pengaturan Sistem **Ketika** klik Simpan **Maka** tampil pop up konfirmasi penyimpanan perubahan Mode Pengecekan · Sumber: TMS.S025-R08 poin 2 butir 6
- **AC-051** (REQ-077, REQ-085) — **Diberikan** pop up kelayakan armada tampil **Ketika** diverifikasi **Maka** copy, judul, dan susunan button sesuai "Katalog Pop Up Kelayakan Armada" (dokumen eksternal — Q-03) · Sumber: TMS.S025-R08 poin 1; TMS.S025-R12

### SEC-08 · Reminder
- **AC-052** (REQ-087, REQ-019) — **Diberikan** Mode Pengecekan = Tidak Ada Pengecekan **Ketika** jadwal job harian tiba **Maka** job tidak berjalan dan tidak ada reminder · Sumber: TMS.S025-R09 poin 2; TMS.S025-R03 poin 3 butir 3
- **AC-053** (REQ-089) — **Diberikan** Waktu Reminder H-30, H-14, H-7 dan sisa hari akhir berlaku KIR armada = 14 **Ketika** job harian berjalan **Maka** armada masuk reminder; bila sisa hari = 13 armada tidak masuk reminder · Sumber: TMS.S025-R09 poin 4 butir 1
- **AC-054** (REQ-090) — **Diberikan** Waktu Reminder berisi 7 dan akhir berlaku sudah terlewati 7 hari **Ketika** job berjalan **Maka** armada masuk reminder sebagai H+7 · Sumber: TMS.S025-R09 poin 4 butir 2
- **AC-055** (REQ-091–REQ-093) — **Diberikan** Penerima Reminder = Vendor **Ketika** reminder dikirim **Maka** hanya user vendor pemilik armada yang menerima dan hanya armadanya sendiri; Shipper menerima armada seluruh vendor; Shipper & Vendor keduanya sesuai cakupan · Sumber: TMS.S025-R09 poin 5
- **AC-056** (REQ-094) — **Diberikan** Jenis Notifikasi Email dan beberapa armada/dokumen jatuh tempo pada hari yang sama **Ketika** job berjalan **Maka** seluruhnya dikirim dalam satu email · Sumber: TMS.S025-R09 poin 6 butir 1
- **AC-057** (REQ-095) — **Diberikan** Jenis Notifikasi Push Notifikasi dan armada jatuh tempo pada dua tahapan berbeda (mis. H-30 dan H-7) **Ketika** job berjalan **Maka** terkirim satu push per tahapan berisi jumlah armada tahapan tersebut · Sumber: TMS.S025-R09 poin 6 butir 2
- **AC-058** (REQ-096) — **Diberikan** tidak ada armada jatuh tempo pada hari itu **Ketika** job berjalan **Maka** tidak ada email maupun push terkirim · Sumber: TMS.S025-R09 poin 7
- **AC-059** (REQ-097) — **Diberikan** armada sedang masuk reminder **Ketika** vendor memperbarui tanggal akhir berlaku dokumennya **Maka** reminder untuk dokumen tersebut berhenti otomatis · Sumber: TMS.S025-R09 poin 8

### SEC-09 · Isi Email Reminder
- **AC-060** (REQ-099, REQ-100) — **Diberikan** email reminder terkirim **Ketika** dibuka **Maka** memuat tabel kolom No, Nopol, Vendor, Akhir Berlaku Dokumen, Sisa Waktu, dengan nilai Akhir Berlaku diawali nama dokumen (mis. "KIR: 01/08/2026") · Sumber: TMS.S025-R10 poin 2–3
- **AC-061** (REQ-101) — **Diberikan** satu armada dengan KIR dan Pajak jatuh tempo **Ketika** email dibuka **Maka** armada tampil sebagai satu grup baris dengan kolom No, Nopol, Vendor di-merge · Sumber: TMS.S025-R10 poin 4
- **AC-062** (REQ-102, REQ-103) — **Diberikan** dokumen belum terlewati n hari dan dokumen lain terlewati n hari **Ketika** email dibuka **Maka** Sisa Waktu tampil "n hari lagi" dan "Lewat n hari" (warna error) · Sumber: TMS.S025-R10 poin 5
- **AC-063** (REQ-104) — **Diberikan** email berisi dokumen terlewati dan belum terlewati **Ketika** email dibuka **Maka** baris terlewati tampil lebih dahulu, kemudian H- terkecil · Sumber: TMS.S025-R10 poin 6
- **AC-064** (REQ-105, REQ-106) — **Diberikan** mode Peringatan **Ketika** email dibuka **Maka** kalimat penutup menyebut armada masih dapat ditugaskan namun memunculkan peringatan; pada mode Armada Dibatasi menyebut armada tidak dapat ditugaskan sampai dokumen diperbarui (lihat Q-01) · Sumber: TMS.S025-R10 poin 7
- **AC-065** (REQ-107) — **Diberikan** email untuk penerima Vendor **Ketika** dibuka **Maka** hanya memuat armada milik vendor tersebut; email untuk Shipper memuat armada seluruh vendor · Sumber: TMS.S025-R10 poin 8

### SEC-10 · Pusat Notifikasi
- **AC-066** (REQ-108) — **Diberikan** halaman Notifikasi **Ketika** dibuka **Maka** terdapat kategori/tab "KIR Armada" · Sumber: TMS.S025-R11 poin 1
- **AC-067** (REQ-109) — **Diberikan** 3 armada KIR pada tahapan H+7 **Ketika** notifikasi dibuat **Maka** satu item memuat jumlah armada dan tahapannya, seperti "Reminder: Akhir masa berlaku KIR : 3 armada memerlukan perhatian (H+7 lewat akhir masa berlaku)" · Sumber: TMS.S025-R11 poin 2
- **AC-068** (REQ-110) — **Diberikan** item notifikasi KIR Armada **Ketika** user memilih, menandai dibaca, atau menghapus **Maka** aksi berjalan sesuai ketentuan existing · Sumber: TMS.S025-R11 poin 3
- **AC-069** (REQ-111) — **Diberikan** item notifikasi KIR Armada **Ketika** klik "Cek Disini" **Maka** diarahkan ke halaman Master Armada dengan filter Status Dokumen sesuai tahapan notifikasi · Sumber: TMS.S025-R11 poin 4
- **AC-070** (REQ-113) — **Diberikan** Penerima Reminder = Shipper **Ketika** notifikasi dibuat **Maka** user vendor tidak menerima notifikasi KIR Armada · Sumber: TMS.S025-R11 poin 6

## 6. State / transisi

### 6.1 Mode Pengecekan × perilaku
| Perilaku | Armada Dibatasi | Peringatan | Tidak Ada Pengecekan | Sumber |
|---|---|---|---|---|
| Pemeriksaan masa berlaku dokumen | Ya | Ya | Tidak sama sekali | TMS.S025-R03 poin 3 |
| Dokumen yang Diperiksa minimal 1 | Wajib | Wajib | Tidak disyaratkan | TMS.S025-R03 poin 2 butir 2 |
| Field Dasar Perhitungan, Toleransi Hari, Waktu Reminder, Penerima Reminder, Jenis Notifikasi | Tampil | Tampil | Disembunyikan; nilai terakhir disimpan | TMS.S025-R03 poin 4 |
| Akhir Berlaku KIR/Pajak di Master Armada (dokumen dicentang) | Wajib | Wajib | Tidak wajib | TMS.S025-R03 poin 3; TMS.S025-R06 poin 1 |
| Simpan Master Armada dengan dokumen kedaluwarsa | Tetap dapat disimpan | Tetap dapat disimpan | Tidak disebut | TMS.S025-R06 poin 5 |
| Badge status dokumen di dropdown armada | Tampil | Tampil | Tidak tampil | TMS.S025-R03 poin 3; TMS.S025-R05 poin 6; TMS.S025-R07 poin 4 |
| Armada tidak memenuhi syarat / data belum lengkap di dropdown | **KONFLIK**: R03 poin 3 "tidak dapat dipilih" & R08 poin 2 pop up "tidak dapat dipilih" vs R07 poin 4 "tetap tampil… seluruh armada tetap dapat dipilih… menampilkan alert" (Q-01) | Tetap dapat dipilih; tampil alert/pop up peringatan sesuai status | Tanpa pembatasan | TMS.S025-R03 poin 3; TMS.S025-R07 poin 4; TMS.S025-R08 poin 2 |
| Pop up yang dibutuhkan | Tidak dapat dipilih — dokumen tidak berlaku; tidak dapat dipilih — data belum lengkap (tidak ada pop up untuk Segera Berakhir — Q-04) | Peringatan tidak berlaku / segera berakhir / data belum lengkap, masing-masing dengan konfirmasi | Tidak disebut | TMS.S025-R08 poin 2 |
| Konfirmasi pop up wajib sebelum simpan penugasan | Ya (R07 poin 6; lihat Q-12) | Ya | — | TMS.S025-R07 poin 6; TMS.S025-R08 poin 3 |
| Evaluasi ulang saat Simpan | Armada yang berubah tidak memenuhi syarat → simpan dibatalkan + alert error | Evaluasi ulang dijalankan; hasil tidak disebut (Q-13) | Tidak disebut | TMS.S025-R07 poin 1, 7 |
| Opsi Isi Data Manual pada field Armada | Disable + keterangan wajib dari master | Disable + keterangan wajib dari master | Tidak ada perubahan | TMS.S025-R07 poin 8 |
| Job reminder harian | Berjalan | Berjalan | Tidak berjalan | TMS.S025-R03 poin 3; TMS.S025-R09 poin 2 |
| Kalimat penutup email | Armada tidak dapat ditugaskan sampai dokumen diperbarui (terkait KONFLIK Q-01) | Armada masih dapat ditugaskan namun memunculkan peringatan | — (tidak ada email) | TMS.S025-R10 poin 7 |
| Penugasan yang sudah tersimpan | Tidak diubah/dicabut | Tidak diubah/dicabut | Tidak diubah/dicabut | TMS.S025-R03 poin 13; TMS.S025-R07 poin 9 |

### 6.2 Status dokumen (per dokumen yang dicentang; hanya mode Armada Dibatasi / Peringatan)
| Status | Kondisi | Warna badge | Contoh label | Prioritas tampil (bila >1 bermasalah) | Sumber |
|---|---|---|---|---|---|
| Data Belum Lengkap | Akhir berlaku kosong | Kuning | "Data KIR Belum Lengkap" | 1 | TMS.S025-R05 poin 2–4; TMS.S025-R04 poin 6 |
| Tidak Berlaku | Akhir berlaku < hari ini | Merah | "KIR Tidak Berlaku" | 2 | TMS.S025-R05 poin 2–4 |
| Segera Berakhir | Hari ini ≤ akhir berlaku < tanggal batas | Kuning | "KIR Segera Berakhir" | 3 | TMS.S025-R05 poin 2–4 |
| Berlaku | Akhir berlaku ≥ tanggal batas | Hijau | "KIR Berlaku" (satu badge bila semua Berlaku) | — | TMS.S025-R05 poin 2–5 |

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Pengaturan Sistem (TMS.S020) | Section baru "Pembatasan Kelayakan Armada" di halaman Pengaturan Sistem | TMS.S025-R02 poin 2; TMS.S025-R03; spec-index §3 |
| Master Unit/Armada sisi vendor (TMS.S009-R03/R04) | Akhir Berlaku KIR/Pajak berubah dari "tidak wajib" (S009-R03 sisi Vendor poin 1) menjadi wajib sesuai mode; import armada (S009-R03 sisi Vendor poin 4: kolom No, Jenis Armada, Nomor Polisi, No. KIR); filter Status Dokumen tujuan "Cek Disini" | TMS.S025-R06; TMS.S025-R11 poin 4; spec-index §3, §4 no.7 |
| Penugasan Tracking (TMS.S015-R05, R06) | Badge di dropdown armada, pop up, disable "Isi Data Manual" pada field Armada; penugasan muat/bongkar FCL & LCL memakai tanggal permintaan muat/bongkar | TMS.S025-R04 poin 4; TMS.S025-R07; TMS.S025-R08; spec-index §3 |
| Order FTL/FCL/LTL-LCL (TMS.S011–S013) | Tanggal permintaan muat/bongkar dan target waktu perjalanan dari data order | TMS.S025-R03 poin 5–6; TMS.S025-R04 poin 3 |
| Pusat Notifikasi (TMS.S022) | Tab baru "KIR Armada"; ketentuan existing pilih/baca/hapus dan auto terhapus 3 bulan | TMS.S025-R11; spec-index §3 |
| Manajemen Vendor (TMS.S003) | Cakupan "armada yang pengelola nya vendor" | TMS.S025-R02 poin 3; spec-index §4 no.36 |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | Mode Armada Dibatasi: armada tidak memenuhi syarat "tidak dapat dipilih" (R03 poin 3, R08 poin 2 butir 1–2, kalimat penutup email R10 poin 7) vs "tetap tampil… seluruh armada tetap dapat dipilih… menampilkan alert" (R07 poin 4). Mana yang berlaku? | TMS.S025-R03 poin 3; R07 poin 4; R08 poin 2; R10 poin 7 | REQ-011, REQ-067, REQ-078, REQ-079, REQ-106 | no.35 |
| Q-02 | Cakupan armada: R02 poin 3 "yang pengelola nya vendor" vs R09 poin 3 "seluruh armada dari seluruh vendor". Perlakuan armada vendor dengan Pengelola = Shipper tidak dijelaskan. | TMS.S025-R02 poin 3; R09 poin 3 | REQ-003, REQ-088 | no.36 |
| Q-03 | "Katalog Pop Up Kelayakan Armada" (link claude.ai artifact) dan "desain nomor 194" tidak ada di workbook; copy pop up dan email tidak dapat diturunkan. | TMS.S025-R08 poin 1; R10 poin 1; R12 | REQ-077, REQ-085, REQ-098 | no.37 |
| Q-04 | Mode Armada Dibatasi: armada berstatus Segera Berakhir tidak memenuhi syarat menurut R04 poin 2 (akhir berlaku < tanggal batas), tetapi R08 poin 2 tidak menyediakan pop up untuk kondisi ini di mode Armada Dibatasi. Bagaimana perlakuannya? | TMS.S025-R04 poin 2; R05 poin 2; R08 poin 2 | REQ-011, REQ-067, REQ-078 | BARU |
| Q-05 | Toleransi Hari opsional: nilai yang dipakai pada rumus bila field dikosongkan tidak disebut. | TMS.S025-R03 poin 7; R04 poin 3 | REQ-024, REQ-044, REQ-045 | BARU |
| Q-06 | Satuan/konversi "target waktu perjalanan dari order" ke hari kalender pada rumus tanggal batas tidak disebut. | TMS.S025-R02 poin 5; R04 poin 3 butir 1 | REQ-043 | BARU |
| Q-07 | Label badge hanya dicontohkan untuk KIR; label untuk Pajak ("Pajak" atau "STNK") dan label badge tunggal saat semua dokumen Berlaku (dengan/tanpa nama dokumen) tidak disebut. | TMS.S025-R05 poin 3, 5 | REQ-054, REQ-056 | BARU |
| Q-08 | Bila dua dokumen diperiksa, satu bermasalah dan satu Berlaku: badge apa yang tampil (hanya yang bermasalah, atau keduanya)? R05 poin 4–5 hanya mengatur ">1 bermasalah" dan "seluruh Berlaku". | TMS.S025-R05 poin 4–5 | REQ-055, REQ-056 | BARU |
| Q-09 | Import armada wajib mengikuti mode (R06 poin 2, 6), tetapi kolom template import vendor di S009-R03 (No, Jenis Armada, Nomor Polisi, No. KIR) tidak memuat Akhir Berlaku KIR/Pajak; file template tidak ada di workbook. | TMS.S025-R06 poin 2, 6; TMS.S009-R03 (sisi Vendor) poin 4 | REQ-059, REQ-063 | BARU (terkait no.7) |
| Q-10 | Filter "Status Dokumen" pada halaman Master Armada (tujuan button "Cek Disini") tidak didefinisikan di S009 maupun S025. | TMS.S025-R11 poin 4 | REQ-111 | BARU |
| Q-11 | Titik pengecekan hanya disebut "Penugasan Tracking - Pilih Armada"; apakah juga berlaku pada "Tugaskan Sopir Bongkar" (R04 poin 4 menyebut penugasan bongkar), "Edit Penugasan", dan "Alihkan Armada" (S015)? | TMS.S025-R04 poin 4; R07 poin 1 | REQ-046, REQ-064 | BARU |
| Q-12 | R07 poin 6 mewajibkan "pengisian data dan konfirmasi pada pop up peringatan" juga untuk mode Armada Dibatasi, sedangkan pop up Armada Dibatasi di R08 poin 2 bukan pop up konfirmasi; "pengisian data" apa yang dimaksud tidak disebut. | TMS.S025-R07 poin 6; R08 poin 2–3 | REQ-071 | BARU |
| Q-13 | Evaluasi ulang saat Simpan (R07 poin 7) hanya menyebut hasil untuk mode Armada Dibatasi; perilaku pada mode Peringatan bila status armada berubah tidak disebut. | TMS.S025-R07 poin 1, 7 | REQ-072 | BARU |
| Q-14 | Apakah armada berstatus Data Belum Lengkap (tanggal kosong) ikut masuk reminder? R09 poin 4 hanya berbasis sisa hari/terlewati terhadap tanggal akhir berlaku. | TMS.S025-R09 poin 4; R04 poin 6 | REQ-089, REQ-090 | BARU |
| Q-15 | Tab bernama "KIR Armada", padahal reminder juga mencakup Pajak — apakah notifikasi Pajak masuk tab yang sama? Hubungan notifikasi Pusat Notifikasi dengan setting Jenis Notifikasi (Email / Push Notifikasi) tidak dijelaskan. | TMS.S025-R11 poin 1, 6; R03 poin 11 | REQ-108, REQ-113 | BARU |
| Q-16 | Teks tidak dikutip di spec: helper error, keterangan penyebab field wajib (Master Armada), keterangan Isi Data Manual disable, alert error simpan, kalimat penutup & salam pembuka email. | TMS.S025-R03 poin 9, 12; R06 poin 3; R07 poin 7–8; R10 poin 7–8 | REQ-060, REQ-072–REQ-074, REQ-105, REQ-107 | BARU |

## 9. Catatan testability (bukan requirement)
- Reminder bergantung pada job terjadwal sekali sehari (TMS.S025-R09 poin 1) dan tanggal relatif terhadap hari ini (Asia/Jakarta).
- Isi email reminder (TMS.S025-R10) memerlukan akses kotak masuk email penerima shipper/vendor.
- Push notifikasi dan item Pusat Notifikasi (TMS.S025-R09 poin 6, R11) memerlukan akun penerima sesuai setting Penerima Reminder.
- Copy pop up dan layout email merujuk artefak eksternal (claude.ai artifact, desain nomor 194) yang tidak ada di workbook.
- Skenario memerlukan data armada vendor dengan akhir berlaku KIR/Pajak kosong, lewat, dan di antara hari ini dan tanggal batas, serta akun vendor untuk Master Armada sisi vendor.

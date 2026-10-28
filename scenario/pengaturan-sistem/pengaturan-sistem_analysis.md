# TMS.S020 — Pengaturan Sistem · Analysis (REQ / VAL / AC)

> Sumber: [`pengaturan-sistem_spec.md`](pengaturan-sistem_spec.md) (verbatim `Spek TMS-S` baris 127–130) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.
> Section "Pembatasan Kelayakan Armada" pada halaman Pengaturan Sistem didefinisikan di TMS.S025-R03 dan tidak disalin di sini (lihat §7).

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Ketentuan Umum | TMS.S020-R02 | Shipper | REQ-001–REQ-002 | — | AC-006, AC-008 |
| SEC-02 | Durasi Kedaluwarsa Undangan Vendor | TMS.S020-R03 poin 1 | Shipper | REQ-003–REQ-006 | VAL-001–VAL-002 | AC-001, AC-002, AC-009 |
| SEC-03 | Radius Notifikasi Lokasi Muat/Bongkar | TMS.S020-R03 poin 2 | Shipper | REQ-007–REQ-009 | VAL-003 | AC-001, AC-003, AC-011 |
| SEC-04 | Deteksi Tidak Update (Batas Tidak Update) | TMS.S020-R03 poin 3 | Shipper | REQ-010–REQ-013 | VAL-004–VAL-005 | AC-001, AC-002, AC-010 |
| SEC-05 | Deteksi Keluar Jalur (Batas Koridor Sekeliling Jalur) | TMS.S020-R03 poin 4 | Shipper | REQ-014–REQ-016 | VAL-006 | AC-001, AC-003, AC-012 |
| SEC-06 | Rule Validasi & Button | TMS.S020-R04 | Shipper | REQ-017–REQ-021 | VAL-001–VAL-006 | AC-004–AC-007 |

TMS.S020-R01 (Pendahuluan) tidak menghasilkan REQ; isinya: pengaturan sistem "untuk mengatur beberapa hal yang bisa disesuaikan dengan kebutuhan penggunaan".

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Shipper | Parameter "dapat disesuaikan sesuai kebutuhan shipper"; perubahan berlaku global untuk sistem milik shipper tersebut. Pembedaan akun utama/sub user dan akses vendor tidak disebut (Q-05). | TMS.S020-R02 poin 1–2 |

## 3. Requirement (REQ)
### SEC-01 · Ketentuan Umum
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Seluruh parameter Pengaturan Sistem tersimpan dalam 1 form dengan 1 tombol Simpan untuk seluruh parameter sekaligus. | TMS.S020-R02 poin 1 | TERTULIS |
| REQ-002 | Perubahan pengaturan berlaku secara global untuk seluruh sistem milik shipper tersebut (bukan per-vendor atau per-order). | TMS.S020-R02 poin 2 | TERTULIS |

### SEC-02 · Durasi Kedaluwarsa Undangan Vendor
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-003 | Field Durasi berupa angka, wajib. | TMS.S020-R03 poin 1 | TERTULIS |
| REQ-004 | Field Satuan berupa dropdown dengan pilihan Menit/Jam, wajib. | TMS.S020-R03 poin 1 | TERTULIS |
| REQ-005 | Nilai default: 2 Jam. | TMS.S020-R03 poin 1 | TERTULIS |
| REQ-006 | Parameter menentukan masa berlaku link undangan registrasi vendor sebelum kedaluwarsa — terhubung dengan fitur Manajemen Vendor. | TMS.S020-R03 poin 1 | AMBIGU (Q-06) |

### SEC-03 · Radius Notifikasi Lokasi Muat/Bongkar
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-007 | Field input angka dengan satuan tetap km (tidak ada pilihan satuan lain). | TMS.S020-R03 poin 2 | TERTULIS |
| REQ-008 | Nilai default: 5 Km. | TMS.S020-R03 poin 2 | TERTULIS |
| REQ-009 | Parameter menentukan jarak dari lokasi muat/bongkar di mana notifikasi "Armada Mendekat" mulai dikirim. | TMS.S020-R03 poin 2 | AMBIGU (Q-02) |

### SEC-04 · Deteksi Tidak Update (Batas Tidak Update)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-010 | Field Durasi berupa angka, wajib. | TMS.S020-R03 poin 3 | TERTULIS |
| REQ-011 | Field Satuan berupa dropdown dengan pilihan Menit/Jam, wajib. | TMS.S020-R03 poin 3 | TERTULIS |
| REQ-012 | Nilai default: 30 Menit. | TMS.S020-R03 poin 3 | TERTULIS |
| REQ-013 | Parameter menentukan batas waktu armada/kontainer tidak bergerak sebelum ditandai status "Tidak Update" pada menu Monitoring. | TMS.S020-R03 poin 3 | TERTULIS |

### SEC-05 · Deteksi Keluar Jalur (Batas Koridor Sekeliling Jalur)
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-014 | Field input angka dengan satuan tetap km. | TMS.S020-R03 poin 4 | TERTULIS |
| REQ-015 | Nilai default: 3 Km. | TMS.S020-R03 poin 4 | TERTULIS |
| REQ-016 | Parameter menentukan lebar koridor toleransi di sekitar prediksi rute perjalanan; posisi GPS di luar batas koridor "secara persisten" ditandai status "Keluar Jalur". | TMS.S020-R03 poin 4 | AMBIGU (Q-01) |

### SEC-06 · Rule Validasi & Button
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-017 | Seluruh field bersifat wajib diisi (ditandai *). | TMS.S020-R04 poin 1 | TERTULIS |
| REQ-018 | Jika field wajib tidak diisi/kosong: tampil helper error & border error. | TMS.S020-R04 poin 2 | TERTULIS |
| REQ-019 | Button "Batal" membatalkan perubahan. | TMS.S020-R04 poin 3 | AMBIGU (Q-04) |
| REQ-020 | Button "Batal" menampilkan alert konfirmasi. | TMS.S020-R04 poin 3 | AMBIGU (Q-04) |
| REQ-021 | Button "Simpan" menyimpan seluruh parameter pengaturan sekaligus. | TMS.S020-R04 poin 3 | TERTULIS |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-02 | Durasi Kedaluwarsa Undangan Vendor — Durasi | Angka, wajib | "tampilkan helper error & border error" (bila kosong); input non-angka tidak disebut | TMS.S020-R03 poin 1; R04 poin 1–2 |
| VAL-002 | SEC-02 | Durasi Kedaluwarsa Undangan Vendor — Satuan | Dropdown Menit/Jam, wajib | "tampilkan helper error & border error" | TMS.S020-R03 poin 1; R04 poin 1–2 |
| VAL-003 | SEC-03 | Radius Notifikasi Lokasi Muat/Bongkar | Angka (km), wajib | "tampilkan helper error & border error" (bila kosong) | TMS.S020-R03 poin 2; R04 poin 1–2 |
| VAL-004 | SEC-04 | Batas Tidak Update — Durasi | Angka, wajib | "tampilkan helper error & border error" (bila kosong) | TMS.S020-R03 poin 3; R04 poin 1–2 |
| VAL-005 | SEC-04 | Batas Tidak Update — Satuan | Dropdown Menit/Jam, wajib | "tampilkan helper error & border error" | TMS.S020-R03 poin 3; R04 poin 1–2 |
| VAL-006 | SEC-05 | Batas Koridor Sekeliling Jalur | Angka (km), wajib | "tampilkan helper error & border error" (bila kosong) | TMS.S020-R03 poin 4; R04 poin 1–2 |

Batas nilai (minimum/maksimum, nol, negatif, desimal) tidak disebut untuk seluruh field (Q-03).

## 5. Acceptance Criteria (AC)
### SEC-02 s.d. SEC-05 · Field & default
- **AC-001** (REQ-005, REQ-008, REQ-012, REQ-015) — **Diberikan** parameter Pengaturan Sistem belum pernah diubah **Ketika** shipper membuka form Pengaturan Sistem **Maka** nilai field: Durasi Kedaluwarsa Undangan Vendor 2 Jam, Radius Notifikasi 5 Km, Batas Tidak Update 30 Menit, Batas Koridor 3 Km · Sumber: TMS.S020-R03 poin 1–4
- **AC-002** (REQ-003, REQ-004, REQ-010, REQ-011) — **Diberikan** form Pengaturan Sistem terbuka **Ketika** shipper membuka dropdown Satuan pada Durasi Kedaluwarsa Undangan Vendor dan Batas Tidak Update **Maka** pilihan yang tersedia Menit/Jam · Sumber: TMS.S020-R03 poin 1, 3
- **AC-003** (REQ-007, REQ-014) — **Diberikan** form Pengaturan Sistem terbuka **Ketika** shipper melihat field Radius Notifikasi dan Batas Koridor **Maka** satuan tetap km tanpa pilihan satuan lain · Sumber: TMS.S020-R03 poin 2, 4

### SEC-06 · Rule Validasi & Button
- **AC-004** (REQ-017) — **Diberikan** form Pengaturan Sistem terbuka **Ketika** shipper melihat label field **Maka** seluruh field ditandai * · Sumber: TMS.S020-R04 poin 1
- **AC-005** (REQ-018, VAL-001–VAL-006) — **Diberikan** form Pengaturan Sistem terbuka **Ketika** salah satu field wajib tidak diisi/kosong **Maka** tampil helper error & border error pada field tersebut · Sumber: TMS.S020-R04 poin 1–2
- **AC-006** (REQ-001, REQ-021) — **Diberikan** shipper mengubah lebih dari satu parameter dengan nilai valid **Ketika** klik "Simpan" (satu-satunya tombol simpan) **Maka** seluruh parameter tersimpan sekaligus · Sumber: TMS.S020-R02 poin 1; R04 poin 3
- **AC-007** (REQ-019, REQ-020) — **Diberikan** shipper telah mengubah parameter tanpa menyimpan **Ketika** klik "Batal" **Maka** tampil alert konfirmasi dan perubahan dibatalkan · Sumber: TMS.S020-R04 poin 3

### SEC-01 · Ketentuan Umum
- **AC-008** (REQ-002) — **Diberikan** shipper menyimpan perubahan parameter **Ketika** fitur terkait dipakai untuk vendor/order mana pun milik shipper tersebut **Maka** nilai baru berlaku global (bukan per-vendor atau per-order) · Sumber: TMS.S020-R02 poin 2

### Dampak parameter (lintas modul)
- **AC-009** (REQ-006) — **Diberikan** Durasi Kedaluwarsa Undangan Vendor disimpan dengan nilai N satuan S **Ketika** undangan registrasi vendor dikirim **Maka** masa berlaku link undangan mengikuti N S · Sumber: TMS.S020-R03 poin 1; TMS.S004-R03 poin 1
- **AC-010** (REQ-013) — **Diberikan** Batas Tidak Update tersimpan **Ketika** armada/kontainer tidak bergerak melebihi batas tersebut **Maka** ditandai status "Tidak Update" pada menu Monitoring · Sumber: TMS.S020-R03 poin 3
- **AC-011** (REQ-009) — **Diberikan** Radius Notifikasi tersimpan **Ketika** armada berada dalam jarak radius dari lokasi muat/bongkar **Maka** notifikasi "Armada Mendekat" mulai dikirim · Sumber: TMS.S020-R03 poin 2
- **AC-012** (REQ-016) — **Diberikan** Batas Koridor tersimpan **Ketika** posisi GPS berada di luar koridor di sekitar prediksi rute secara persisten **Maka** ditandai status "Keluar Jalur" · Sumber: TMS.S020-R03 poin 4 (definisi "persisten" lihat Q-01)

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Manajemen Vendor (TMS.S003) / Registrasi Vendor (TMS.S004) | Durasi Kedaluwarsa Undangan Vendor menentukan masa berlaku link undangan; resend me-reset acuan waktu | TMS.S020-R03 poin 1; TMS.S003-R08 poin 3; TMS.S004-R03 poin 1; spec-index §3 |
| Dashboard Monitoring & Tracking (TMS.S018-R04/R07/R09) | Radius armada terdekat (default 5 km), batas Tidak Update (30 menit), koridor keluar jalur (3 km) | TMS.S020-R03 poin 2–4; TMS.S018-R07 poin 7; spec-index §3 |
| Pembatasan Pajak dan KIR Armada (TMS.S025-R03) | Menambah section "Pembatasan Kelayakan Armada" pada halaman Pengaturan Sistem. REQ section tersebut dikelola di analysis TMS.S025, tidak disalin di sini. | TMS.S025-R03; spec-index §3 |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | "Secara persisten" tidak didefinisikan di S020; S018-R09 poin 5/7 menyatakan ambang persisten & nilai (n) "dapat diatur melalui Pengaturan Sistem", tetapi field-nya tidak ada di S020-R03. | TMS.S020-R03 poin 4; TMS.S018-R09 | REQ-016 | §4 no.31 |
| Q-02 | S020 menyebut notifikasi "Armada Mendekat", sedangkan S018-R07 poin 7 memakai "Radius armada terdekat mengikuti pengaturan radius (default 5 km)" untuk Card Armada Terdekat. Apakah satu field yang sama dipakai untuk keduanya? Notifikasi "Armada Mendekat" (kanal, penerima) tidak didefinisikan di file. | TMS.S020-R03 poin 2; TMS.S018-R07 poin 7 | REQ-009 | Baru |
| Q-03 | Batas nilai field (minimum/maksimum, nol, negatif, desimal) dan perilaku input non-angka tidak disebut. | TMS.S020-R03; R04 | REQ-003, REQ-007, REQ-010, REQ-014 | Baru |
| Q-04 | Teks alert konfirmasi "Batal" dan umpan balik setelah "Simpan" tidak disebut; "membatalkan perubahan" — kembali ke nilai tersimpan terakhir atau keluar halaman? | TMS.S020-R04 poin 3 | REQ-019, REQ-020, REQ-021 | Baru |
| Q-05 | Siapa yang dapat mengakses/mengubah Pengaturan Sistem (akun utama shipper, sub user, vendor) tidak disebut di S020. | TMS.S020-R02 | REQ-001 | Baru |
| Q-06 | Apakah perubahan Durasi Kedaluwarsa Undangan Vendor berlaku untuk undangan yang sudah terkirim, atau hanya untuk undangan/resend berikutnya? | TMS.S020-R03 poin 1; TMS.S003-R08 poin 3 | REQ-006 | Baru |
| Q-07 | S025-R03 poin 1 menyatakan section "dapat di-collapse seperti section lainnya", sedangkan S020 tidak mendefinisikan pembagian section maupun perilaku collapse untuk 4 parameter di atas. | TMS.S020-R02 poin 1; TMS.S025-R03 poin 1 | REQ-001 | Baru |

## 9. Catatan testability (bukan requirement)
- Dampak parameter (AC-009–AC-012) memerlukan email undangan vendor, pergerakan/posisi GPS armada, dan waktu berjalan; tidak dapat diverifikasi hanya dari form Pengaturan Sistem.
- Notifikasi "Armada Mendekat" (REQ-009) memerlukan sarana penerima notifikasi yang belum didefinisikan (Q-02).

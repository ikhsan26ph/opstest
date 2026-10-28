# TMS.S016 — Penyesuaian APK Tracking FCL LCL (Driver Hub) · Analysis (REQ / VAL / AC)

> Sumber: [`driver-hub-tracking-fcl-lcl_spec.md`](driver-hub-tracking-fcl-lcl_spec.md) (verbatim `Spek TMS-S` baris 103–107) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.
> Catatan: modul ini adalah aplikasi Driver Hub (aplikasi driver), bukan UI web OPS — lihat bagian 9.

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | Konsep Dasar Penugasan FCL & LCL di Driver Hub | TMS.S016-R02 | Sopir (Driver Hub) | REQ-001–REQ-004 | — | AC-001–AC-003 |
| SEC-02 | Halaman Beranda | TMS.S016-R03 | Sopir (Driver Hub) | REQ-005–REQ-009 | — | AC-004–AC-009 |
| SEC-03 | Halaman Detail Tracking | TMS.S016-R04 | Sopir (Driver Hub) | REQ-010–REQ-016 | — | AC-010–AC-015 |
| SEC-04 | Halaman Laporan Kendala | TMS.S016-R05 | Sopir (Driver Hub) | REQ-017–REQ-021 | VAL-001–VAL-002 | AC-016–AC-019 |

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Sopir (pengguna aplikasi driver / Driver Hub) | Menerima penugasan FCL & LCL di aplikasi driver (sisi Muat atau sisi Bongkar) | TMS.S016-R01; TMS.S016-R02 poin 1 |
| Sopir — prasyarat dari web | Penugasan tampil di Driver Hub hanya bila Mode Penugasan "Tugaskan ke Sopir"; sisi Bongkar FCL/LCL setelah "Tugaskan Sopir Bongkar" | TMS.S015-R05 (bagian "Ketentuan Umum") poin 8, 10 (rujukan lintas modul) |

S016 tidak menyebut hak akses lain secara eksplisit.

## 3. Requirement (REQ)
### SEC-01 · Konsep Dasar Penugasan FCL & LCL di Driver Hub
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Penugasan FCL & LCL yang masuk ke Driver Hub selalu terpisah menjadi penugasan sisi Muat saja atau sisi Bongkar saja — tidak pernah berupa 1 perjalanan penuh dari titik muat hingga titik bongkar. | TMS.S016-R02 poin 1 | TERTULIS |
| REQ-002 | Penugasan FTL/LTL di Driver Hub selalu berupa 1 perjalanan penuh. | TMS.S016-R02 poin 1 | TERTULIS |
| REQ-003 | Step yang tampil untuk penugasan sisi Muat: Berangkat Muat, Selesai Muat. | TMS.S016-R02 poin 2 | TERTULIS |
| REQ-004 | Step yang tampil untuk penugasan sisi Bongkar: Berangkat Bongkar, Selesai Bongkar. | TMS.S016-R02 poin 3 | TERTULIS |

### SEC-02 · Halaman Beranda
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-005 | Card penugasan FCL/LCL hanya menampilkan kota pada sisi yang relevan (kota muat untuk sisi Muat, kota bongkar untuk sisi Bongkar), tidak menampilkan format 2 sisi (asal-tujuan). | TMS.S016-R03 poin 1 | TERTULIS |
| REQ-006 | Bila terdapat lebih dari 1 titik muat/bongkar pada sisi yang relevan, label kota diganti menjadi "Multipickup" (sisi muat) atau "Multidrop" (sisi bongkar) saja, tanpa detail nama kota. | TMS.S016-R03 poin 2 | TERTULIS |
| REQ-007 | Informasi tanggal pada card: "Permintaan Muat" untuk sisi Muat, "Permintaan Bongkar" untuk sisi Bongkar. | TMS.S016-R03 poin 3 | TERTULIS |
| REQ-008 | Button "Mulai Perjalanan" mendapat tambahan icon panah (→); label teks tidak berubah. | TMS.S016-R03 poin 4 | TERTULIS |
| REQ-009 | Card FTL/LTL tetap menampilkan format 2 sisi (Kota Asal - Kota Tujuan, dengan "Multipickup"/"Multidrop" menggantikan sisi yang memiliki >1 titik) seperti desain sebelumnya — tidak terdampak perubahan. | TMS.S016-R03 poin 5 | REF-EKSTERNAL (Q-03) |

### SEC-03 · Halaman Detail Tracking
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-010 | Untuk penugasan FCL/LCL terdapat tambahan informasi No. Kontainer dan No. Segel pada data order. | TMS.S016-R04 poin 1 | TERTULIS |
| REQ-011 | Field Alamat & PIC menyesuaikan sisi: "Alamat Muat"/"PIC Muat" untuk sisi Muat, "Alamat Bongkar"/"PIC Bongkar" untuk sisi Bongkar. | TMS.S016-R04 poin 2 | TERTULIS |
| REQ-012 | Step "Berangkat Muat" dan "Berangkat Bongkar": label button aksi mengikuti nama step ("Berangkat Muat" / "Berangkat Bongkar"), tidak lagi "Simpan". | TMS.S016-R04 poin 3 | TERTULIS |
| REQ-013 | Step "Selesai Muat" dan "Selesai Bongkar": tetap menggunakan label "Simpan". | TMS.S016-R04 poin 4 | TERTULIS |
| REQ-014 | Step "Selesai Muat" dan "Selesai Bongkar": tetap menampilkan field "Status Saat Ini". | TMS.S016-R04 poin 4 | TERTULIS |
| REQ-015 | Section "Status Pengiriman" (history tracking) menampilkan tiap entry dengan format "{Nama Step} - {Alamat}" (contoh: "Selesai Bongkar - Kota Surabaya Jl. Majapahit No.10"). | TMS.S016-R04 (kalimat "Section \"Status Pengiriman\"…" setelah poin 4) | TERTULIS |
| REQ-016 | "Rule di atas (poin 3-5)" berlaku sama untuk FTL/LTL maupun FCL/LCL (bukan perubahan khusus FCL/LCL). Cakupan "poin 3-5" tidak pasti karena penomoran sumber tidak urut. | TMS.S016-R04 poin 5 | AMBIGU (Q-01) |

### SEC-04 · Halaman Laporan Kendala
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-017 | Untuk penugasan FCL/LCL, informasi data order turut menampilkan No. Kontainer dan No. Segel. | TMS.S016-R05 poin 1 | TERTULIS |
| REQ-018 | Informasi tanggal permintaan mengikuti sisi penugasan (Muat/Bongkar). | TMS.S016-R05 poin 2 | TERTULIS |
| REQ-019 | Field Foto bersifat opsional. | TMS.S016-R05 poin 3 | TERTULIS |
| REQ-020 | Field Keterangan bersifat wajib. | TMS.S016-R05 poin 3 | TERTULIS |
| REQ-021 | Rule Foto/Keterangan "sama dengan Isi Kendala FTL/LTL". | TMS.S016-R05 poin 3 | AMBIGU (Q-02) |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-04 | Keterangan (Laporan Kendala) | Wajib | Tidak disebut (Q-04) | TMS.S016-R05 poin 3 |
| VAL-002 | SEC-04 | Foto (Laporan Kendala) | Opsional (boleh kosong) | — | TMS.S016-R05 poin 3 |

## 5. Acceptance Criteria (AC)
### SEC-01 · Konsep Dasar
- **AC-001** (REQ-001, REQ-003) — **Diberikan** penugasan FCL/LCL sisi Muat ditugaskan ke sopir **Ketika** sopir membuka penugasan di Driver Hub **Maka** step yang tampil hanya Berangkat Muat dan Selesai Muat · Sumber: TMS.S016-R02 poin 1–2
- **AC-002** (REQ-001, REQ-004) — **Diberikan** penugasan FCL/LCL sisi Bongkar ditugaskan ke sopir **Ketika** sopir membuka penugasan **Maka** step yang tampil hanya Berangkat Bongkar dan Selesai Bongkar · Sumber: TMS.S016-R02 poin 1, 3
- **AC-003** (REQ-002) — **Diberikan** penugasan FTL/LTL ditugaskan ke sopir **Ketika** sopir membuka penugasan **Maka** penugasan berupa 1 perjalanan penuh dari titik muat hingga titik bongkar · Sumber: TMS.S016-R02 poin 1

### SEC-02 · Halaman Beranda
- **AC-004** (REQ-005) — **Diberikan** penugasan FCL/LCL sisi Muat dengan 1 titik muat **Ketika** Beranda ditampilkan **Maka** card hanya menampilkan kota muat (bukan format asal-tujuan) · Sumber: TMS.S016-R03 poin 1
- **AC-005** (REQ-005) — **Diberikan** penugasan FCL/LCL sisi Bongkar dengan 1 titik bongkar **Ketika** Beranda ditampilkan **Maka** card hanya menampilkan kota bongkar · Sumber: TMS.S016-R03 poin 1
- **AC-006** (REQ-006) — **Diberikan** penugasan FCL/LCL sisi Muat dengan >1 titik muat (atau sisi Bongkar dengan >1 titik bongkar) **Ketika** Beranda ditampilkan **Maka** label kota menjadi "Multipickup" (atau "Multidrop") tanpa nama kota · Sumber: TMS.S016-R03 poin 2
- **AC-007** (REQ-007) — **Diberikan** card penugasan FCL/LCL **Ketika** Beranda ditampilkan **Maka** informasi tanggal berlabel "Permintaan Muat" untuk sisi Muat dan "Permintaan Bongkar" untuk sisi Bongkar · Sumber: TMS.S016-R03 poin 3
- **AC-008** (REQ-008) — **Diberikan** card penugasan **Ketika** Beranda ditampilkan **Maka** button "Mulai Perjalanan" menampilkan icon panah (→) dengan label teks tetap "Mulai Perjalanan" · Sumber: TMS.S016-R03 poin 4
- **AC-009** (REQ-009) — **Diberikan** penugasan FTL/LTL **Ketika** Beranda ditampilkan **Maka** card tetap berformat "Kota Asal - Kota Tujuan", dengan "Multipickup"/"Multidrop" pada sisi yang memiliki >1 titik · Sumber: TMS.S016-R03 poin 5

### SEC-03 · Halaman Detail Tracking
- **AC-010** (REQ-010) — **Diberikan** penugasan FCL/LCL **Ketika** membuka Detail Tracking **Maka** data order menampilkan No. Kontainer dan No. Segel · Sumber: TMS.S016-R04 poin 1
- **AC-011** (REQ-011) — **Diberikan** penugasan sisi Muat (atau sisi Bongkar) **Ketika** membuka Detail Tracking **Maka** field berlabel "Alamat Muat"/"PIC Muat" (atau "Alamat Bongkar"/"PIC Bongkar") · Sumber: TMS.S016-R04 poin 2
- **AC-012** (REQ-012) — **Diberikan** step berjalan "Berangkat Muat" (atau "Berangkat Bongkar") **Ketika** Detail Tracking ditampilkan **Maka** label button aksi "Berangkat Muat" (atau "Berangkat Bongkar"), bukan "Simpan" · Sumber: TMS.S016-R04 poin 3
- **AC-013** (REQ-013, REQ-014) — **Diberikan** step berjalan "Selesai Muat" atau "Selesai Bongkar" **Ketika** Detail Tracking ditampilkan **Maka** label button "Simpan" dan field "Status Saat Ini" tampil · Sumber: TMS.S016-R04 poin 4
- **AC-014** (REQ-015) — **Diberikan** penugasan dengan history tracking **Ketika** melihat section "Status Pengiriman" **Maka** tiap entry berformat "{Nama Step} - {Alamat}" (mis. "Selesai Bongkar - Kota Surabaya Jl. Majapahit No.10") · Sumber: TMS.S016-R04 (kalimat setelah poin 4)
- **AC-015** (REQ-016) — **Diberikan** penugasan FTL/LTL **Ketika** Detail Tracking ditampilkan **Maka** rule label button dan format "Status Pengiriman" (AC-012–AC-014) berlaku sama seperti FCL/LCL (cakupan tepat menunggu Q-01) · Sumber: TMS.S016-R04 poin 5

### SEC-04 · Halaman Laporan Kendala
- **AC-016** (REQ-017) — **Diberikan** penugasan FCL/LCL **Ketika** membuka Laporan Kendala **Maka** informasi data order menampilkan No. Kontainer dan No. Segel · Sumber: TMS.S016-R05 poin 1
- **AC-017** (REQ-018) — **Diberikan** penugasan sisi Muat (atau sisi Bongkar) **Ketika** membuka Laporan Kendala **Maka** informasi tanggal permintaan mengikuti sisi Muat (atau Bongkar) · Sumber: TMS.S016-R05 poin 2
- **AC-018** (REQ-019, REQ-020, VAL-001, VAL-002) — **Diberikan** form Laporan Kendala **Ketika** Keterangan diisi dan Foto dikosongkan lalu dikirim **Maka** laporan dapat disimpan · Sumber: TMS.S016-R05 poin 3
- **AC-019** (REQ-020, VAL-001) — **Diberikan** form Laporan Kendala **Ketika** Keterangan dikosongkan lalu dikirim **Maka** laporan tidak dapat disimpan (tampilan error tidak disebut) · Sumber: TMS.S016-R05 poin 3

## 6. State / transisi
| Jenis penugasan di Driver Hub | Step yang tampil (urut) | Button aksi per step | Sumber |
|---|---|---|---|
| FCL/LCL — sisi Muat | Berangkat Muat → Selesai Muat | "Berangkat Muat" → "Simpan" (dengan field "Status Saat Ini") | TMS.S016-R02 poin 2; TMS.S016-R04 poin 3–4 |
| FCL/LCL — sisi Bongkar | Berangkat Bongkar → Selesai Bongkar | "Berangkat Bongkar" → "Simpan" (dengan field "Status Saat Ini") | TMS.S016-R02 poin 3; TMS.S016-R04 poin 3–4 |
| FTL/LTL | 1 perjalanan penuh (daftar step tidak dirinci di S016) | Rule label button berlaku sama (Q-01) | TMS.S016-R02 poin 1; TMS.S016-R04 poin 5 |

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Penugasan Tracking (TMS.S015) | Penugasan masuk Driver Hub hanya bila Mode "Tugaskan ke Sopir"; opsi disable bila Sopir manual; FCL/LCL sisi Bongkar setelah "Tugaskan Sopir Bongkar" | TMS.S015-R05 (bagian "Ketentuan Umum") poin 8–10; TMS.S015-R06; spec-index §3 |
| Penugasan Tracking — Isi Kendala (TMS.S015-R09) | Laporan Kendala "rule sama dengan Isi Kendala FTL/LTL" | TMS.S016-R05 poin 3; spec-index §3 |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | R04 poin 5 merujuk "poin 3-5", padahal poin 5 adalah dirinya sendiri dan kalimat "Section Status Pengiriman" tidak bernomor. Rule mana saja yang berlaku sama untuk FTL/LTL? | TMS.S016-R04 poin 3–5 | REQ-012–REQ-016 | no.25 |
| Q-02 | Laporan Kendala menyatakan Keterangan wajib "rule sama dengan Isi Kendala FTL/LTL", sedangkan S015-R09 poin 1 tidak menyebut status wajib keterangan. Apakah yang dirujuk Isi Kendala web (S015-R09) atau Laporan Kendala FTL/LTL existing di Driver Hub? | TMS.S016-R05 poin 3; TMS.S015-R09 poin 1 | REQ-020, REQ-021 | no.23 |
| Q-03 | Rujukan "desain sebelumnya" / "seperti sebelumnya" (tampilan FTL/LTL existing di Driver Hub, label "Simpan" lama) tidak ada di file; baseline untuk membandingkan perubahan tidak tersedia. | TMS.S016-R03 poin 4–5; TMS.S016-R04 poin 1, 3 | REQ-008, REQ-009, REQ-012 | BARU |
| Q-04 | Pesan/tampilan bila Keterangan Laporan Kendala kosong tidak disebut. | TMS.S016-R05 poin 3 | REQ-020 | BARU |

## 9. Catatan testability (bukan requirement)
- Seluruh modul ini berada di aplikasi Driver Hub (aplikasi driver/mobile, TMS.S016-R01); spec-index §2 mencatat tidak ada route web OPS yang teramati. Verifikasi memerlukan aplikasi Driver Hub dan akun sopir, di luar UI web OPS.
- Prasyarat data dibuat dari web OPS (TMS.S015): penugasan FCL/LCL dengan Mode "Tugaskan ke Sopir" dan Sopir dari master; sisi Bongkar memerlukan "Tugaskan Sopir Bongkar"; kasus Multipickup/Multidrop memerlukan order dengan >1 titik muat/bongkar.

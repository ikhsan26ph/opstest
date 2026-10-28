# Laporan Uji — Penugasan Tracking (TMS.S015) · 2026-09-24

Run final: `20260924-final` → [results/penugasan-tracking__20260924-final.json](../../results/penugasan-tracking__20260924-final.json) · Excel: [reports/penugasan-tracking__20260924-final.xlsx](../../reports/penugasan-tracking__20260924-final.xlsx)
Environment: https://ops-staging.prahu-hub.com · akun 1 (Admin Utama, shipper, vendor kelolaan Nusantara Logistik Utama) · akun 2 (Vendor PT. Ikatan Kuat). Otomasi Playwright Chromium, bukan uji manual.

## 1. Ringkasan

| Total | Passed | Failed | Blocked | Skipped |
|---:|---:|---:|---:|---:|
| 71 | 44 | 25 | 2 | 0 |

Semua failed sudah diverifikasi dengan snapshot aksesibilitas/screenshot; kegagalan skrip yang ditemukan selama run (modal konfirmasi custom, panel filter tertutup, parser header, date picker) diperbaiki dan skenario diulang — tidak dihitung sebagai temuan aplikasi. Verdict berdasarkan requirement tertulis (spec TMS.S015); bagian ambigu (Q-01…Q-14) tidak dijadikan dasar failed.

## 2. Triase temuan (failed)

Severity tidak ditetapkan (dampak bisnis belum diketahui) — hanya klasifikasi.

### A. Probable bug fungsional (perilaku/data)
| SCN | REQ | Temuan | Evidence |
|---|---|---|---|
| SCN-0062 (+0067) | REQ-055 | FCL Door to Door: Berangkat & Selesai Bongkar dapat disimpan tanpa sopir/armada bongkar pernah ditugaskan; ORD0173502745 berstatus Selesai tanpa penugasan bongkar | batch K20260924-014137, log mutasi (tanpa PUT /bongkar) |
| SCN-0019 | REQ-029 | Dropdown armada master difilter jenis armada order; order Fuso Box → "Tidak ada armada" (armada master tidak dapat dipilih) | batch 20260923-135455b |
| SCN-0052 | REQ-106 | Alihkan Armada: data armada pengganti mewarisi "Berangkat Bongkar" armada lama; armada pengganti tidak mengisi ulang Berangkat Bongkar | G20260924-013528 snapshot SCN-0052 |
| SCN-0054 | REQ-109, REQ-110 | History data baru memuat step armada lama; detail order tidak menggabungkan riwayat armada lama | G20260924-013528 |
| SCN-0069 | REQ-087 | Isi Kendala (LCL): card Informasi Penugasan menampilkan No. Polisi/Jenis Armada/Sopir/WA = "-" padahal armada & sopir muat ada; data kontainer tidak tampil | K20260924-014928b |

### B. Deviasi alur/validasi terhadap spec (UX)
| SCN | REQ | Temuan |
|---|---|---|
| SCN-0024 | REQ-038 | Batal di Tambah Penugasan tanpa alert konfirmasi (form tetap) |
| SCN-0032 | REQ-060 | Batal di Edit Penugasan langsung ke list tanpa konfirmasi |
| SCN-0036 / SCN-0039 | REQ-069 / REQ-089 | Isi Data Tracking & Isi Kendala tidak punya tombol Batal (hanya "Kembali", tanpa konfirmasi) |
| SCN-0034 | REQ-058 | Edit setelah berangkat: item menu disabled + tooltip "Tidak bisa edit karena sudah proses pengiriman", bukan pop up informasi |
| SCN-0041 / SCN-0042 | REQ-073 | Berangkat Bongkar FTL tanpa field Foto (spec Foto Required) |

### C. Struktur/konten tampilan berbeda dari spec
| SCN | REQ | Temuan |
|---|---|---|
| SCN-0033, SCN-0058 | REQ-071, REQ-075 | Text info Isi Data Tracking tanpa WA sopir; FCL/LCL tanpa No. Kontainer/No. Segel pada Berangkat Muat |
| SCN-0038 | REQ-085 | Isi Kendala tanpa card History Tracking |
| SCN-0044 | REQ-096, REQ-097 | History Tracking: format "24 Sep 2026, 08.28", tanpa Nopol per step, link Edit hanya di step Selesai |
| SCN-0049 | REQ-101 | Armada Pengganti tanpa field Berat Maks./Kubikasi Maks. |
| SCN-0064 | REQ-006, REQ-007 | Kolom Sopir menampilkan "Muat: … Bongkar: …" eksplisit, bukan badge "+1" + hover Sopir Asal/Tujuan |
| SCN-0068 | REQ-093 | Detail FCL: 1 card dengan sub-bagian Penugasan Muat/Bongkar, bukan 2 card |
| SCN-0005 | REQ-014 | Filter Status berisi Belum Berangkat/Dalam Perjalanan/Selesai; step dipisah ke filter "Tahapan Tracking" |
| SCN-0002 | REQ-015 | Filter "Tanggal Permintaan Muat" bukan "Tanggal Mulai Tracking" |

### D. Perbedaan teks/label (copy)
| SCN | REQ | Spec | Aktual |
|---|---|---|---|
| SCN-0040 | REQ-008 | "Terdapat Kendala" | "Ada kendala" |
| SCN-0060 | REQ-009 | "Siap tugaskan sopir bongkar" | "Sopir bongkar belum ditugaskan" |
| SCN-0043, SCN-0067 | REQ-012 | "Pengiriman Selesai" | "Selesai" |
| (observasi) | REQ-019/021 | "Detail Penugasan", "Edit Penugasan", "Tugaskan Sopir Bongkar" | "Detail", "Edit", "Penugasan Sopir Bongkar" (tidak dijadikan failed) |

## 3. Blocked (butuh input user)
- **SCN-0012 / BLK-04** — tidak ada akun shipper tanpa vendor kelolaan; mengubah pengelola Nusantara berdampak ke data tenant bersama. Butuh akun lain atau izin eksplisit.
- **SCN-0048 / BLK-05** — verifikasi di aplikasi Driver Hub (mobile) butuh akses aplikasi + akun sopir. Sisi web (SCN-0047) passed.

## 4. Blocker yang berhasil dilepas (Investigasi Blocked)
| Blocker awal | Penyebab aktual | Resolusi |
|---|---|---|
| Data LCL/multi/2 armada/Door to CY tidak ada | Data | Order QA dibuat (DS-02…DS-10) — tervalidasi read-only |
| DS-04 gagal dibuat | Data uji salah (drop point tujuan = asal) | Diganti BB WH Rungkut → ORD0212503970 |
| Tombol Tambah Penugasan tidak ada di akun vendor | Vendor tidak punya order belum ditugaskan | Order DS-10 untuk PT. Ikatan Kuat → tombol muncul, SCN-0013 passed |
| Penugasan "tidak tersimpan" | Skrip tidak mengenali modal custom "Konfirmasi Penugasan" | Deteksi overlay → tersimpan |
| SCN-0010 menu Door to CY | Tidak ada penugasan Door to CY aktif | DS-08 ditugaskan → passed |
| Staging lambat | Environment berselang | Preflight curl, tanpa retry login otomatis |

## 5. Data yang dimutasi di staging (akun 1/2, semua ber-marker QA-PT-*)
- Order baru: ORD0212503970 (DS-04) + master Waktu Perjalanan "Kota Surabaya → Kota Bandung → Kota Surabaya" 24 jam (efek samping yang disetujui).
- Penugasan dibuat & dijalankan: ORD0173057559 (Selesai), ORD0173105981 (dialihkan; data baru Dalam Perjalanan), ORD0173206791 & ORD0212503970 (Dalam Perjalanan), ORD0173502745 (Selesai, tanpa sopir bongkar), ORD0173587094 (Selesai), ORD0173560594 (Belum Berangkat), ORD0173180342 (vendor, Belum Berangkat), ORD0173131181 (mode Sopir, Berangkat Muat).
- Order cadangan tidak diubah: ORD0173297592, ORD0211382256, ORD0173323143, ORD0173348181, ORD0173372926, ORD0173400693, ORD0173155789, ORD0173474018, ORD0173531560.
- Seluruh request non-GET dicatat di `artifacts/evidence/*/mutations.json`; tidak ada mutasi di luar order target.

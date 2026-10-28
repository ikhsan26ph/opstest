# TMS.S015 — Penugasan Tracking · Prasyarat, Data Uji & Investigasi Blocked

> **Update 2026-09-24:** status data “tidak ada/belum dibuat” pada inventaris awal di bawah harus dibaca sebagai historis. Rekonsiliasi menemukan 16 order QA lama dan satu pilot baru yang disetujui (ORD0211382256); lihat [inventaris dan preflight terbaru](penugasan-tracking_pilot-20260924.md). Jangan membuat batch otomatis; periksa kesesuaian data existing terlebih dahulu. DS-04 belum memiliki evidence sukses, sedangkan akses vendor dan requirement ambigu tetap perlu investigasi sesuai aturan Blocked.

> Dibuat 2026-09-23. Dasar: [`penugasan-tracking_analysis.md`](penugasan-tracking_analysis.md), evidence live read-only
> [`explore/pt-2026-09-23T13-28-49-199Z-acct1`](../../explore/pt-2026-09-23T13-28-49-199Z-acct1/) (UI + API admin),
> [`explore/pt-inv-2026-09-23T13-30-33-815Z-acct1`](../../explore/pt-inv-2026-09-23T13-30-33-815Z-acct1/inventory.json) (inventaris GET admin),
> [`explore/pt-inv-2026-09-23T13-30-50-459Z-acct2`](../../explore/pt-inv-2026-09-23T13-30-50-459Z-acct2/inventory.json) (inventaris GET vendor),
> serta [`shared/selector-map-penugasan-tracking.md`](../../shared/selector-map-penugasan-tracking.md).
> Aturan: docs/agent-guide.md §"Investigasi Blocked". Blocked tidak diterima tanpa penyebab aktual + upaya pelepasan.

## 1. Akun (config/env.md; credential tidak ditulis di sini)

| Kode | Akun | Identitas aktual (evidence) | Dipakai untuk |
|---|---|---|---|
| ACC-ADM | Akun 1 "Admin Utama" | Login 200; shipper; akses `/api/vendors`, `/api/order`; header "Admin / Administrator" | Shipper dengan vendor kelolaan (REQ-001), seluruh flow shipper |
| ACC-VEN | Akun 2 "Vendor" | Login 200; token vendor (`/api/vendor/*` 200, `/api/vendors` 401 INVALID_TOKEN); vendor **PT. Ikatan Kuat**, pengelola **VENDOR** | Akses vendor (REQ-003) |
| ACC-3 | Akun 3 label "Sub user" | Header aktual "Jaya Administrator" (explore 2026-09-23) — role belum jelas | **Tidak dipakai** sampai role diklarifikasi user |

## 2. Kondisi environment teramati (13:28–13:31 UTC)

| Kode | Kondisi | Nilai teramati | Evidence | Relevansi |
|---|---|---|---|---|
| ENV-01 | Vendor dengan pengelola ADMIN (dikelola shipper) | 1: **Nusantara Logistik Utama** (AKTIF); 7 vendor lain pengelola VENDOR | inventory acct1 `/api/vendors` | REQ-001 bisa diuji; REQ-002 (tanpa vendor kelolaan) tidak ada kondisinya |
| ENV-02 | Master armada/sopir vendor kelolaan | Nusantara: 4 armada, 4 sopir | `/api/armadas/vendors`, `/api/sopirs/vendors` | "Pilih Dari Master" shipper |
| ENV-03 | Master armada/sopir vendor PT. Ikatan Kuat | 0 armada, 1 sopir (Julian) | inventory acct2 `/api/vendor/armadas`, `/api/vendor/sopirs` | "Pilih Dari Master" armada di akun vendor belum mungkin |
| ENV-04 | Order belum ditugaskan (list "Pilih Order") | 4 order milik vendor Nusantara: FTL ORD0065597914, FTL ORD0059547619, FCL Door to Door ORD0059771455, LTL ORD8939717339 (semua Normal, jumlah 1). **LCL: 0 order di seluruh data.** | form `/penugasan-tracking/tambah` (02-pt-tambah.yml) + `/api/orders?hasPenugasan=false…` | Sumber penugasan baru |
| ENV-05 | Filter API "Pilih Order" | `status=DRAFT,ASSIGNED,MENUNGGU_PENUGASAN&hasPenugasan=false` | api.json admin | Perlu diverifikasi vs REQ-022 (hanya order belum ditugaskan); **observasi, bukan verdict** |
| ENV-06 | Penugasan existing (admin) | 32 baris: FTL 22, FCL 6 (DOOR_TO_DOOR, CY_TO_DOOR, DOOR_TO_CY), LTL 4; status SELESAI/IN_PROGRESS/BELUM_BERANGKAT/DIALIHKAN; 2 kendala aktif; 3 `perluTugaskanBongkar`; 7 mode pengurus | inventory acct1 | >20 baris → pagination dapat diuji read-only |
| ENV-07 | Penugasan di akun vendor | 1 (ORD0135699597 FTL, Belum Berangkat); order vendor: 1 (DITUGASKAN); order belum ditugaskan: 0 | inventory acct2 | Akses vendor penuh belum dapat diuji tanpa data baru |
| ENV-08 | Tombol "Tambah Penugasan" | Ada di admin & akun 3; **tidak ada** di akun vendor (harvest 03:18Z) | selector-map-penugasan-tracking | Perlu investigasi (lihat BLK-03) |
| ENV-09 | Pembatasan Pajak/KIR (TMS.S025) | `mode: NONE` | `/api/setting/fleet-eligibility`, `/api/setting/system` | Dropdown armada tanpa badge/pembatasan; skenario ini mengasumsikan mode tetap NONE — cek ulang sebelum run |
| ENV-10 | Kuota order | 21/5000 | sidebar "Kuota Order" | Tidak membatasi pembuatan order uji |
| ENV-11 | Stabilitas staging | 13:31–13:34 UTC: timeout 30 s berselang-seling di frontend & API (curl), 1 login tanpa respons, 1 page.goto timeout | log sesi ini | Eksekusi live ditunda sampai stabil; bukan defect aplikasi |

## 3. Katalog data uji (setup) — dibuat oleh test flow bila tidak ada

Semua data baru dibuat oleh ACC-ADM (kecuali DS-10) dengan penanda `QA-PT-<runId>` pada field teks bebas yang tersedia (mis. Deskripsi Barang / Catatan / No. Segel). Data existing milik pihak lain **tidak diubah**; order existing (ENV-04) hanya dipakai untuk observasi read-only (membuka form tanpa Simpan).

| Kode | Data | Status saat ini | Cara menyiapkan (modul & rule) | Untuk SCN |
|---|---|---|---|---|
| DS-01 | Order FTL Normal, vendor Nusantara, jumlah armada 1, status Menunggu Penugasan | Ada (ENV-04) tetapi bukan milik run | Buat via Order FTL 4 step lalu Simpan → status "Menunggu Penugasan" (TMS.S011-R05..R08) | Flow FTL utama, Alihkan |
| DS-02 | Order FTL jumlah armada 2 | Tidak ada | Order FTL, Jumlah Armada = 2 (TMS.S011-R05) | n card |
| DS-03 | Order FTL Multipickup (≥2 pick up) | Tidak ada | Order FTL, Tipe Pengiriman Multipickup (TMS.S011-R04) | Pilih alamat muat |
| DS-04 | Order FTL Multidrop (≥2 drop off) | Tidak ada | Order FTL, Tipe Multidrop | Pilih alamat bongkar |
| DS-05 | Order LTL | Ada (ENV-04) bukan milik run | Order LTL (TMS.S013-R04 bagian LTL) | Flow LTL |
| DS-06 | Order FCL Door to Door, 1 kontainer | Ada (ENV-04) bukan milik run | Order FCL, Metode Door to Door (TMS.S012-R05) | Flow FCL utama |
| DS-07 | Order FCL Door to Door, 2 kontainer | Tidak ada | Order FCL, Jumlah Kontainer 2 | n card, jadwal kapal sekali |
| DS-08 | Order FCL Door to CY (atau CY to CY) | Tidak ada yang belum ditugaskan; ada penugasan DOOR_TO_CY Selesai (ENV-06) | Order FCL Metode Door to CY, lalu Tambah Penugasan | Aksi Tugaskan Sopir Bongkar tidak tersedia |
| DS-09 | Order LCL Door to Door | **Tidak ada sama sekali** | Order LCL (TMS.S013-R04 bagian LCL: Pelabuhan Asal/Tujuan, Metode) | Flow LCL |
| DS-10 | Order untuk vendor PT. Ikatan Kuat (pengelola VENDOR), Menunggu Penugasan | Tidak ada | ACC-ADM buat order dengan Vendor = PT. Ikatan Kuat (TMS.S011-R07) | Akses vendor penuh |
| DS-11 | Armada master milik PT. Ikatan Kuat | 0 (ENV-03) | ACC-VEN tambah armada di Master Armada vendor (TMS.S009-R03 sisi Vendor: Jenis Armada, Nomor Polisi, No. KIR, Foto STNK, Foto Kendaraan wajib) — **atau** pakai "Isi Data Manual" (TMS.S015-R05 poin 6) | Vendor pilih armada dari master |
| DS-12 | File foto uji | Tidak ada di repo | Buat PNG kecil lokal `artifacts/fixtures/qa-foto.png` (bukan data pribadi) | Isi Data Tracking, Isi Kendala |
| DS-13 | Penugasan pada state tertentu (Belum Berangkat → … → Pengiriman Selesai, Kapal Berlayar, kendala, dialihkan) | Dibentuk oleh flow | Rantai aksi: Tambah Penugasan → Isi Data Tracking per step → Isi Kendala / Tugaskan Sopir Bongkar / Alihkan Armada | Hampir semua SCN mutasi |
| DS-14 | Penugasan FCL tanpa data sopir | Ada: ORD0061555399 FCL CY to Door, kolom sopir kosong (01-pt-list) | Read-only: buka form Isi Data Tracking tanpa Simpan | REQ-068 |
| DS-15 | >20 penugasan | Ada: 32 (ENV-06) | Read-only | Pagination |

Urutan setup: DS-12 → DS-01..DS-10 (Order) → DS-11 (opsional) → flow penugasan (DS-13). Setup order adalah **proses modul lain** (Order FTL/FCL/LTL-LCL): kegagalannya dicatat sebagai blocker setup dengan evidence, bukan sebagai kegagalan Penugasan Tracking.

## 4. Investigasi Blocked

| Kode | Kondisi yang tampak blocked | Penyebab aktual (evidence) | Dapat dilepas? | Resolusi / kebutuhan | SCN |
|---|---|---|---|---|---|
| BLK-01 | Flow LCL (Tambah, Isi Data Tracking, Tugaskan Sopir Bongkar LCL) | Tidak ada order LCL di data (ENV-04, ENV-06) | **Ya — data** | Buat DS-09 via Order LCL | SCN-LCL |
| BLK-02 | Multipickup/multidrop, jumlah armada/kontainer >1 | Semua order belum ditugaskan bertipe Normal, jumlah 1 (ENV-04) | **Ya — data** | DS-02, DS-03, DS-04, DS-07 | SCN terkait |
| BLK-03 | Akses penuh vendor (REQ-003); tombol "Tambah Penugasan" tidak ada di akun vendor (ENV-08) | Akun vendor hanya punya 1 order (sudah DITUGASKAN) dan 0 order belum ditugaskan (ENV-07); 0 armada master (ENV-03). Belum terbukti apakah tombol absen karena desain, karena data, atau defect | **Sebagian — data + proses modul lain** | Buat DS-10 (order ke PT. Ikatan Kuat) lalu cek ulang UI vendor; aksi lain (Isi Data Tracking, Isi Kendala, Edit) diuji pada penugasan vendor existing ORD0135699597 hanya bila milik akun vendor tersebut — penugasan ini dibuat 03:54Z oleh pihak lain, jadi **dipakai read-only**; mutasi dilakukan pada penugasan dari DS-10. Bila setelah DS-10 tombol tetap tidak ada: failed terhadap REQ-003 (bukan blocked) | SCN akses vendor |
| BLK-04 | Shipper tanpa vendor kelolaan → hanya lihat (REQ-002) | Tenant shipper yang tersedia memiliki 1 vendor pengelola ADMIN (ENV-01). Hanya ada 1 akun shipper yang terverifikasi | **Tidak dengan data yang aman.** Satu-satunya cara dalam spec: ubah Pengelola Nusantara Shipper→Vendor (TMS.S003-R06 poin 2: sistem membuat akun baru & mengirim email) — mengubah 30 penugasan existing milik tenant bersama dan tidak dapat dipastikan reversibel | Butuh dari user: akun shipper lain tanpa vendor kelolaan, **atau** izin eksplisit mengubah pengelola Nusantara (beserta dampaknya) | SCN REQ-002 tetap blocked |
| BLK-05 | Verifikasi di Driver Hub (REQ-030 sisi aplikasi, REQ-031, REQ-035, REQ-036) | Driver Hub = aplikasi mobile (TMS.S016); tidak ada akses/akun sopir di config | **Tidak** dari web | Butuh akses Driver Hub + akun sopir (mis. sopir master Nusantara). Bagian web (penugasan "Tugaskan ke Sopir" tetap dapat dikelola via web; penanda title "Ditugaskan ke sopir — tampil di aplikasi Driver Hub" teramati di list) diuji di web | SCN Driver Hub |
| BLK-06 | Edit tidak boleh setelah Belum Berangkat, Tugaskan Sopir Bongkar edit setelah Berangkat Bongkar, dll. | Membutuhkan penugasan pada state lanjut | **Ya — proses berantai** | Jalankan DS-13 berurutan dalam satu flow | SCN flow |
| BLK-07 | Upload foto wajib di Isi Data Tracking | Butuh file | **Ya — data** | DS-12 | SCN tracking |
| BLK-08 | Isi Kendala / ikon kendala | Butuh penugasan berjalan | **Ya — proses** | Flow FTL setelah Berangkat Muat | SCN kendala |
| BLK-09 | Requirement ambigu/konflik: foto di Berangkat Muat (Q-06), "[LTL tidak bisa pilih alamat]" & Multipickup di bongkar FCL/LCL (Q-07), Kapal Sandar utama/connecting (Q-08), keterangan kendala wajib? (Q-09), ikon bongkar untuk metode lain (Q-10), Alihkan manual? (Q-11), value filter Status (Q-12), copy pesan (Q-13), Riwayat Perubahan (Q-03) | Keputusan requirement, bukan data | **Tidak** dengan data | Butuh jawaban user. Skenario tetap dijalankan hanya untuk bagian yang tertulis jelas; bagian ambigu **dicatat sebagai observasi** tanpa verdict | Ditandai `ambiguousParts` |
| BLK-10 | Staging tidak stabil (ENV-11) | Timeout berselang-seling | **Ya — waktu/environment** | Tunggu stabil; cek `curl` sebelum run; tidak retry login otomatis | Semua |
| BLK-11 | Akun 3 (Sub user) untuk Cakupan Data | Role aktual tidak sesuai label | Tidak relevan untuk REQ modul ini | — | — |

## 5. Pemeriksaan sebelum run (pre-flight)
1. `curl` frontend & API 3× berturut-turut < 5 s.
2. GET `/api/setting/fleet-eligibility` → `mode` masih `NONE` (ENV-09); jika berubah, catat dan sesuaikan ekspektasi dropdown armada ke TMS.S025.
3. GET `/api/vendors` → Nusantara masih pengelola ADMIN (ENV-01).
4. Master armada/sopir Nusantara ≥ 2 sopir berbeda (untuk badge "+1" sopir muat ≠ bongkar).

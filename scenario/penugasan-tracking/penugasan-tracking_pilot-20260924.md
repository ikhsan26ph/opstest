# Pilot setup Penugasan Tracking — 24 September 2026

Run: `S20260924-005236`. Otorisasi user: satu order DS-01b baru sesuai rencana; tidak mencakup batch lanjutan atau penyimpanan penugasan/tracking. Akun yang dipakai: Admin Utama (akun 1). Akun 3 tidak dipakai.

## Hasil pilot

**Berhasil dibuat satu order: ORD0211382256**, ID `4d44cd30-f1d8-4d30-8757-4aa4ccd66f85`, POST /api/order 201 pada 2026-09-24 00:56:22 UTC. Status respons dan list: `MENUNGGU_PENUGASAN`.

| Field | Hasil |
|---|---|
| Jenis / tipe | FTL / Normal |
| Armada | Truck Trailer 40ft, jumlah 1 |
| Vendor | Nusantara Logistik Utama |
| Rute | EL - Gudang Surabaya → EL - Gudang Bandung [Gudang Surya] |
| Jadwal UI | 25/09/2026 08:00 |
| Jadwal API | 2026-09-25T01:00:00.000Z |
| Harga / DPP | Rp1.000.000 |
| Komponen harga default | PPN 1,1% Rp11.000; PPh 2% dikurangi Rp20.000 |
| Total harga | Rp991.000 |
| Penanda Catatan/Deskripsi | QA-PT-S20260924-005236 DS-01b |

Ringkasan Step 4 diperiksa sebelum Simpan. Response create, GET daftar Order setelah navigasi ulang, dan snapshot daftar menunjukkan order tersimpan. Validasi service/tipe, jumlah, jadwal, DPP, total, marker, dan status pada response create semuanya sesuai. Tepat satu POST bisnis berhasil tercatat; guard runner membatasi satu POST /api/order dan memblokir mutasi lain di sesi pembuatan. Ini validasi setup modul Order, bukan verdict skenario bisnis TMS.S015.

Evidence:

- [Preflight curl](../../artifacts/evidence/S20260924-005236/preflight-curl.json)
- [Rekonsiliasi live](../../artifacts/evidence/S20260924-005236/reconciliation.json)
- [Review sebelum Simpan](../../artifacts/evidence/S20260924-005236/setup-batch-1790211325907/07-DS-01b-step4.yml)
- [Request/response bisnis](../../artifacts/evidence/S20260924-005236/setup-batch-1790211325907/api.json)
- [Daftar setelah Simpan](../../artifacts/evidence/S20260924-005236/setup-batch-1790211325907/10-DS-01b-list-verification.yml)
- [Hasil validasi terstruktur](../../artifacts/evidence/S20260924-005236/pilot-validation.json)
- [Metadata logout](../../artifacts/evidence/S20260924-005236/setup-batch-1790211325907/meta.json)

## Koreksi penting atas checkpoint lama

Checkpoint 23 September menyebut hanya 1 order dibuat. Audit log batch lain dan GET live pada 24 September menemukan **16 order lama masih ada**. Ada lima key setup yang masing-masing sudah dibuat dua kali. Ringkasan sebelumnya yang mengandalkan checkpoint saja tidak lengkap.

| Key | Order lama yang ditemukan live |
|---|---|
| DS-01a | ORD0173057559 |
| DS-01b | ORD0173105981, ORD0173297592 |
| DS-01c | ORD0173131181, ORD0173323143 |
| DS-02 | ORD0173155789, ORD0173348181 |
| DS-10 | ORD0173180342, ORD0173372926 |
| DS-03 | ORD0173206791, ORD0173400693 |
| DS-05 | ORD0173474018 |
| DS-06 | ORD0173502745 |
| DS-07 | ORD0173531560 |
| DS-08 | ORD0173560594 |
| DS-09 | ORD0173587094 |

Semua 16 berstatus Menunggu Penugasan pada GET daftar. Dua DS-10 tidak muncul pada query Pilih Order akun Admin; sisanya muncul. Ini observasi scope akun, belum verdict akses vendor. Keberadaan order tidak membuktikan seluruh detail/varian sesuai skenario—perlu validasi sebelum dipakai. DS-04 belum memiliki evidence berhasil dibuat; log terdahulu berhenti ketika menunggu tombol Pilih Vendor.

Pilot baru tetap dibuat sebagai satu data terisolasi dengan penanda run baru sesuai persetujuan user. Total inventaris QA yang diketahui kini **17 order** (16 lama + 1 pilot), bukan berarti seluruh varian setup telah tervalidasi. Tidak ada penghapusan, penggantian, atau perubahan terhadap 16 order lama. **Jangan menjalankan specs-rest.json secara batch berdasarkan checkpoint lama.**

## Precondition dan investigasi blocker

| Pemeriksaan | Evidence / hasil | Resolusi |
|---|---|---|
| Staging lambat (BLK-10) | Curl frontend dan API masing-masing 3 kali: HTTP 200, 0,195–2,025 detik | Lolos untuk run ini; bukan jaminan stabilitas berikutnya |
| Akun/login | Sesi rekonsiliasi dan sesi pilot masing-masing satu login sukses, tanpa retry | Kedua sesi logout; rekonsiliasi POST logout 200, pilot URL /login terverifikasi |
| Vendor kelolaan | Nusantara ADMIN, AKTIF | Memenuhi precondition vendor |
| Master | Nusantara 4 armada, 4 sopir pada endpoint summary | Detail sopir berbeda untuk flow bongkar belum diuji di pilot ini |
| Pajak/KIR | fleet-eligibility mode NONE | Sesuai precondition ENV-09 |
| Data dianggap belum ada | Checkpoint tertinggal; 16 order lama ditemukan live | Inventaris dikoreksi; validasi dan pilih data existing sebelum usulan setup berikutnya |

BLK-04, BLK-05 dan keputusan requirement BLK-09 tetap memerlukan input/akses terpisah. Tidak ada confirmed defect baru dari pilot ini. Hasil bisnis terdahulu tetap 17 passed, 4 failed, 1 blocked; tidak ditambah verdict buatan dari setup Order.

## Batas berhenti / pekerjaan berikutnya

Satu pilot selesai. Belum ada tambahan batch, penugasan, update tracking, kendala, pengalihan, atau perubahan master. Tidak ada commit/push. Langkah berikutnya yang disarankan: validasi kesesuaian 16 order lama dan pilih satu order kanonis per kebutuhan skenario; investigasi setup DS-04 secara read-only. Setelah rencana koreksi data/flow konkret, minta persetujuan user sebelum mutasi berikutnya. Rencana lama “buat 10 sisanya” tidak lagi layak dijalankan tanpa rekonsiliasi ini.

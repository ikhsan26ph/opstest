# Checkpoint — Penugasan Tracking (TMS.S015)

## Pembaruan 2026-09-24 — status terkini

User menyetujui **satu pilot DS-01b baru**. Berhasil dibuat **ORD0211382256**, marker `QA-PT-S20260924-005236 DS-01b`, POST order 201, Menunggu Penugasan. DPP Rp1.000.000, total Rp991.000 mengikuti PPN/PPh default. Sesi rekonsiliasi dan pilot sudah logout; tidak ada proses run aktif atau mutasi penugasan/tracking.

**Koreksi checkpoint:** audit log dan GET staging menemukan **16 order QA lama**, termasuk duplikasi DS-01b/DS-01c/DS-02/DS-10/DS-03. Dengan pilot baru, inventaris yang diketahui 17 order. Pernyataan historis “1/12 dibuat; 11 belum dibuat” di bawah sudah tidak berlaku. DS-04 belum punya evidence berhasil dibuat; varian lainnya perlu validasi detail sebelum reuse. Jangan menjalankan batch specs-rest.json berdasarkan instruksi historis.

Laporan, daftar ID lengkap, batas otorisasi, evidence dan tindak lanjut: [pilot 24 September](penugasan-tracking_pilot-20260924.md). Tahap selanjutnya: validasi/reuse data lama, investigasi DS-04, kemudian persetujuan terpisah sebelum mutasi lanjutan. Hasil bisnis tetap 17 passed / 4 failed / 1 blocked dari 22 SCN sebelumnya.

## Checkpoint historis 2026-09-23 (dipertahankan sebagai riwayat)

Dihentikan atas permintaan user: 2026-09-23 ±14:20 UTC. Tidak ada proses yang sedang berjalan. Semua sesi browser sudah ditutup (logout sukses pada run terakhir).

## 1. Sudah selesai
| Tahap | Hasil | Lokasi |
|---|---|---|
| Aturan "Investigasi Blocked" | Ditambahkan ke agent-guide + role planner/executor/triager | docs/agent-guide.md, docs/roles/*.md |
| Prasyarat, data uji, matriks blocker | ACC/ENV/DS/BLK | penugasan-tracking_preconditions.md |
| Skenario | 71 SCN (RO 23, SETUP 46, BLOCKED 2) + feature + coverage | _scenarios.json, .feature, _coverage.md (generator: artifacts/scenario-gen/pt_gen.py) |
| Eksekusi fase read-only | 22 SCN: 17 passed, 4 failed, 1 blocked; 0 mutasi | results/_batch01__penugasan-tracking__20260923-135455.json; evidence artifacts/evidence/20260923-135455*/ |
| Pemetaan form Buat Order (Step 1–4, FTL/FCL/LTL/LCL) | DOM terpetakan; form menyimpan di klien sampai Simpan (tidak ada draft tertinggal) | artifacts/evidence/S20260923-1411/ |
| Setup order uji | **1 dari 12 dibuat**: DS-01a = **ORD0173057559** (FTL Normal, Truck Trailer 40ft, EL - Gudang Surabaya → EL - Gudang Bandung, vendor Nusantara, 25/09/2026 08:00, Rp 1.000.000, penanda Catatan/Deskripsi `QA-PT-S20260923-1411`), status MENUNGGU_PENUGASAN, POST /api/order 201 | artifacts/evidence/S20260923-1411/setup-batch-1790173029180/log.json |

Hasil failed fase read-only (sudah didiagnosis, bukan masalah skrip):
- SCN-0002: label filter "Tanggal Permintaan Muat", spec "Tanggal Mulai Tracking".
- SCN-0005: dropdown Status berisi Belum Berangkat/Dalam Perjalanan/Selesai (tahapan dipisah ke "Tahapan Tracking"), spec: value status = step.
- SCN-0019: dropdown armada master difilter jenis armada order (L1111LO "Trailer 20 FT" tidak tampil; order Fuso Box → "Tidak ada armada"), spec REQ-029 tidak difilter.
- SCN-0024: Batal di Tambah Penugasan tidak menampilkan alert konfirmasi (konsisten 3 run, termasuk navigasi via UI).
Blocked: SCN-0010 (tidak ada penugasan FCL Door to CY aktif → dilepas oleh DS-08).
Observasi: label menu "Detail"/"Edit"/"Penugasan Sopir Bongkar" ≠ spec; shipper pada order vendor pengelola VENDOR hanya punya Detail & Riwayat Perubahan (Q-01); Mode Penugasan default "Tugaskan ke Sopir"; LTL Step 1 Order tanpa dropdown Kota (modul Order); prefix "Kabupaten" (Q-14).

## 2. Belum dikerjakan (urutan lanjut)
1. **Konfirmasi user** sebelum membuat 11 order sisa (dua kali ditolak user pada langkah ini).
2. Setup 11 order sisa — spec siap: `artifacts/runner/specs-rest.json` (DS-01b, DS-01c, DS-02, DS-10 [vendor PT. Ikatan Kuat], DS-03 multipickup, DS-04 multidrop, DS-05 LTL, DS-06 FCL D2D, DS-07 FCL 2 kontainer, DS-08 FCL Door to CY, DS-09 LCL).
   Perintah: `node artifacts/runner/pt-order-setup.cjs S20260923-1411 artifacts/runner/specs-rest.json`
   Catatan: parsing `orderCode` via regex sudah ada di runner (log.created).
   Belum tervalidasi: Tambah Lokasi Muat/Bongkar (multi), Step 3 FCL/LCL/LTL, waktu perjalanan untuk rute multi.
3. Runner flow mutasi (SETUP 46 SCN) belum ditulis: F-FTL-1 (pakai ORD0173057559), F-FTL-2, F-FTL-3, F-MP, F-MD, F-FCL, F-LCL, akses vendor (DS-10), SCN-0010 (DS-08).
4. Merge & report: `python3 scripts/merge_batches.py penugasan-tracking <runId>` lalu `python3 scripts/generate_report.py results/penugasan-tracking__<runId>.json`.

## 3. Tetap blocked (butuh input user)
- BLK-04 / SCN-0012: akun shipper tanpa vendor kelolaan, atau izin mengubah pengelola Nusantara.
- BLK-05 / SCN-0048: akses Driver Hub + akun sopir.
- BLK-09: Q-01…Q-14 (requirement ambigu).

## 4. Catatan environment
- Staging berselang lambat (timeout 30 s; login 200 tapi tetap di /login > 45 s). Cek `curl` sebelum run; tidak retry login otomatis.
- Beberapa run awal berhenti tanpa logout (sesi server mungkin masih hidup).
- Helper: artifacts/explore-run/pt-lib.cjs (login satu kali, redaksi credential/token), artifacts/runner/pt-run-ro.cjs (read-only), artifacts/runner/pt-order-setup.cjs (setup order).

## Pembaruan 2026-09-24 01:10Z (Claude) — validasi read-only data lama
- **17 order QA divalidasi** (GET, non-GET di-abort): semua MENUNGGU_PENUGASAN, belum ada penugasan, jenis/tipe/metode/jumlah/vendor sesuai DS. Evidence: artifacts/evidence/V20260924-010902/validate-orders/orders.json.
- **Order kanonis** (dipakai flow): F-FTL-1 ORD0173057559 · F-FTL-2 ORD0173105981 · F-FTL-3 ORD0173131181 · DS-02 ORD0173155789 · DS-03 ORD0173206791 · DS-05 ORD0173474018 · DS-06/F-FCL ORD0173502745 · DS-07 ORD0173531560 · DS-08 ORD0173560594 · DS-09/F-LCL ORD0173587094 · DS-10 ORD0173180342.
  Cadangan (tidak dipakai): ORD0173297592, ORD0211382256, ORD0173323143, ORD0173348181, ORD0173372926, ORD0173400693.
- **DS-04 akar masalah**: data uji salah — drop point tujuan kedua = drop point asal ("EL - Gudang Surabaya"); aplikasi menolak "Drop Point Tujuan tidak boleh sama dengan Drop Point Asal". Perbaikan: tujuan kedua berbeda (mis. "BB WH Rungkut"). Bukan defect.
- **Read-only baru** (results/_batch02__penugasan-tracking__R20260924-011001.json): SCN-0016 passed, SCN-0018 passed, SCN-0027 passed.
- **BLK-03 dilepas sebagian**: akun Vendor kini melihat tombol "Tambah Penugasan" dan kedua order DS-10 di Pilih Order (sebelumnya absen karena tidak ada order vendor yang belum ditugaskan). Penyimpanan penugasan vendor (REQ-003 penuh) belum dijalankan. Evidence artifacts/evidence/R20260924-011001/vendor-ro/.
- Menunggu persetujuan user untuk rencana mutasi (penugasan/tracking).

## Pembaruan 2026-09-24 01:40Z (Claude) — DS-04 + pilot F-FTL-1
- Persetujuan user: DS-04 dibuat (cadangan dibiarkan), waktu perjalanan 24 jam; mutasi penugasan **bertahap** (pilot F-FTL-1 dulu).
- **DS-04 = ORD0212503970** (FTL Multidrop: EL - Gudang Bandung + BB WH Rungkut). Efek samping: master Waktu Perjalanan baru "Kota Surabaya → Kota Bandung → Kota Surabaya" 24 jam (sesuai S008-R02 poin 3).
- **Pilot F-FTL-1 selesai** pada ORD0173057559 (run F20260924-012742): 7 mutasi, semuanya ke penugasan target (create, edit sopir, 4 event tracking, 1 kendala); status akhir Selesai. Hasil: results/_batch03__penugasan-tracking__F20260924-012742.json — 7 passed / 11 failed.
- Temuan pilot (failed, terverifikasi snapshot): Batal di Edit Penugasan tanpa konfirmasi (SCN-0032); header Isi Data Tracking tanpa WA sopir (SCN-0033); Edit disabled + tooltip, bukan pop up (SCN-0034); Isi Data Tracking & Isi Kendala tanpa tombol Batal (SCN-0036/0039); Isi Kendala tanpa card History Tracking (SCN-0038); tooltip kendala "Ada kendala" ≠ "Terdapat Kendala" (SCN-0040); Berangkat Bongkar FTL tanpa field Foto (SCN-0041/0042); label akhir "Selesai" ≠ "Pengiriman Selesai" (SCN-0043); History Tracking format waktu "24 Sep 2026, 08.28", tanpa Nopol per step, Edit hanya di step Selesai (SCN-0044).
- Pelajaran skrip: konfirmasi Simpan berupa modal custom "Konfirmasi Penugasan" tanpa role dialog → deteksi overlay ditambahkan; SCN-0024 diverifikasi ulang via snapshot (tetap tanpa modal). SCN-0070 verdict lama tidak sah → diulang dengan data termuat (tetap passed).
- Berikutnya (butuh persetujuan per flow): F-FTL-2 (ORD0173105981, alihkan armada), F-FCL (ORD0173502745), F-LCL (ORD0173587094), F-MP (ORD0173206791), F-MD (ORD0212503970), DS-08 (ORD0173560594), DS-10 via vendor (ORD0173180342), F-FTL-3 mode sopir (ORD0173131181).

## Pembaruan 2026-09-24 ~02:00Z (Claude) — SELESAI dieksekusi
Semua flow disetujui user dan dijalankan. Run final `20260924-final`: 71 SCN → 44 passed, 25 failed, 2 blocked (SCN-0012 BLK-04, SCN-0048 BLK-05), 0 skipped.
Laporan & triase: [penugasan-tracking_test-report-20260924.md](penugasan-tracking_test-report-20260924.md) · Excel reports/penugasan-tracking__20260924-final.xlsx.
Sisa: jawaban Q-01…Q-14, akun shipper tanpa vendor kelolaan, akses Driver Hub; verifikasi ulang REQ-107 (penanda di detail armada lama — bukti lemah).

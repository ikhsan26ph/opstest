# Pemeriksaan ulang SLA berhenti pada Selesai Bongkar

Run `SLAEND-20261027-021902` — OPS staging, Admin, 2026-10-27T02:20:26.434Z sampai 2026-10-27T02:26:12.178Z (UTC).

**Hasil: 3 blocked, 0 failed, 0 passed.** Ketiga event Selesai Bongkar dan status selesai terverifikasi, tetapi batas akhir durasi hasil sistem belum bisa diverifikasi. Tidak ada data order/penugasan/tracking yang dibuat atau diubah.

| Case | Order | Acuan awal → Selesai Bongkar (WIB) | Durasi acuan | Durasi final sistem |
|---|---|---|---|---|
| Normal | ORD3065530524 | 08:58:01.575 → 09:05:24.095 | 7 menit 22.520 detik | Tidak tersedia |
| Multipickup satu kota | ORD3065572668 | 09:04:31.507 → 09:05:30.300 | 0 menit 58.793 detik | Tidak tersedia |
| Multipickup beda kota | ORD3065617875 | 08:58:17.289 → 09:05:35.993 | 7 menit 18.704 detik | Tidak tersedia |

Durasi acuan dihitung dari event tersimpan sesuai pemicu yang dijelaskan user. Angka tersebut bukan hasil perhitungan SLA final dari sistem. Event ID dan timestamp sama dengan run sebelumnya.

## Bukti investigasi

- Progres Pengiriman: GET exact order ketiganya HTTP200, `data: []`, `total: 0`, `requiresFilter: false`, `orsQuotaExhausted: false`, pada 02:25:18–20 UTC. Run sebelumnya juga kosong segera setelah selesai dan pada 02:08 UTC. Jadi bukan filter belum diterapkan atau kuota rute habis.
- Penugasan Tracking: `detail`, `events`, `stops/context`, `tracking-context` HTTP200 untuk ketiganya; assignment SELESAI, seluruh stop event DONE, 4/6/6 event tetap tersimpan. Timeline UI menampilkan Selesai Bongkar tanpa durasi SLA. Inventaris field memuat seluruh leaf path; `targetWaktuJam` adalah target, bukan realisasi final.
- Riwayat Tracking: API daftar history HTTP200 berisi 75 pilihan, ketiga order tidak tercantum; pencarian UI masing-masing menampilkan “Tidak ada pilihan”. GET endpoint track terobservasi memakai orderCode dan nopol sendiri mengembalikan HTTP404 `ASSIGNMENT_PENGURUS`: tracking manual melalui Penugasan Tracking, tidak dilacak di Tracking & Location. Ini penyebab pengecualian yang dikonfirmasi API, bukan asumsi.
- Dashboard Operasional: halaman dialihkan ke Akun Saya dengan “Halaman ini tidak tersedia”; tiga GET otomatis HTTP404 `FEATURE_DISABLED`, pesan “Fitur tidak aktif pada environment ini”. Tidak mengaktifkan fitur atau mencoba bypass.

## Resolusi blocker

Diperlukan output per assignment yang memperlihatkan durasi SLA hasil sistem setelah selesai (UI/API/backend/log perhitungan), agar dapat dibandingkan dengan timestamp Selesai Bongkar dan dibaca ulang setelah jeda. Mengganti Pengurus menjadi Sopir tidak terbukti membuka nilai SLA final dan akan mengubah fixture, sehingga tidak dilakukan.

Tidak ada bukti bahwa mengganti jenis penugasan atau membuat ulang order akan membuka hasil perhitungan final. Scope user adalah memeriksa tiga order ini, sehingga seluruh pemeriksaan dilakukan read-only. Lima failed sebelumnya tetap pada laporan asal; run ini tidak menambah defect.

## Evidence dan lifecycle

- JSON: `results/sla-final-cap__SLAEND-20261027-021902.json`
- Evidence: `artifacts/evidence/SLAEND-20261027-021902/` (`reconciliation.json`, `field-inventory.json`, `history-investigation.json`, `network.json`, `reads.json`, Timeline PNG/YAML).
- Login 200 sekali; logout 200; browser ditutup. Guard menolak non-GET selain autentikasi. Tidak ada business write dan tidak ada request yang diblok guard.
- Kredensial/token/kode akses tidak dicetak ke report. Tidak ada commit/push.

Excel: `reports/sla-final-cap__SLAEND-20261027-021902.xlsx` (6 sheet, termasuk jumlah aktual dan blocker). Metadata skenario, path evidence, identitas event, serta 3 baris blocked sudah divalidasi; pemindaian teks artifact tidak menemukan password/JWT/kode akses tanpa redaksi.

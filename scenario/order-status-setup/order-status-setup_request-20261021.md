# Request pembuatan order per status — 2026-10-21

**Koreksi cakupan terbaru dari user:** Ditolak, Menunggu Konfirmasi, dan Konfirmasi Jadwal tidak berlaku pada Order OPS. Target aktif menjadi **18 kombinasi ×3 status draft =54 order**, seluruhnya sudah tersedia dan verified. Sebanyak 54 sel tiga status tersebut pada matriks awal dikeluarkan dari cakupan; tidak lagi menjadi blocker dan tidak membutuhkan AMS. Teks request awal di bawah dipertahankan sebagai riwayat, bukan instruksi untuk melanjutkan setup tiga status yang dikecualikan.

Sumber: instruksi user setelah laporan blocker pengujian edit Order.

> buat order baru :
> FTL : Normal, Multipickup, Multidrop, Multipoint
> FCL Door to Door : Normal, Multipickup, Multidrop, Multipoint
> FCL Door to CY : Normal, Multipickup
> FCL CY to Door : Normal, Multidrop
> FCL CY to CY : Normal
> LTL
> LCL : Door to Door, CY to Door, Door to CY dan CY to CY
>
> dengan Status Ditolak, Isi Data Muatan, Isi Data Vendor, Review Order, Menunggu Konfirmasi, Konfirmasi Jadwal

## Matriks dan otorisasi

18 kombinasi pengiriman × 6 status = 108 target, satu order unik per sel. Instruksi user ini mengotorisasi pembuatan batch dan setup status pada data QA baru; tidak perlu meminta ulang izin pembuatan batch. Target hanya OPS staging; tidak mengubah data lama atau membuat penugasan sopir.

| ID | Requirement setup |
|---|---|
| OS-REQ-001 | Kombinasi pengiriman/tipe/metode sesuai daftar user. |
| OS-REQ-002 | Setiap kombinasi memiliki satu order pada masing-masing enam status yang diminta. |
| OS-REQ-003 | Identitas dan status persisten order baru dicatat untuk melepas blocker pengujian sebelumnya. |

Normal = 1 muat × 1 bongkar; Multipickup = 2 × 1, Multidrop = 1 × 2, Multipoint = 2 × 2 pada data uji run ini. FTL/FCL memakai satu unit. LTL/LCL memakai struktur existing satu baris asal/tujuan. Definisi tipe berdasarkan UI/flow OPS yang sudah teramati.

Manifest konkret, marker unik, ID dan bukti GET: artifacts/evidence/OS20261021032243/manifest.json. Skenario setup: order-status-setup_scenarios.json. Setup tidak otomatis meluluskan requirement edit/audit/Driver Hub.

# Improvement History Tracking dan orientasi foto

Sumber: pesan user 2026-10-21. Tambahan ini terpisah dari spesifikasi Excel historis TMS.S018.

## Requirement dari user

> Di halaman Dashboard Tracking & Location, pada bagian History Tracking hanya ada detail per Lokasi.
> Jika ada kendala yang dilaporkan oleh Driver, saat ini hanya dapat dilihat di Halaman Penugasan Tracking bagian Timeline.
> Admin jadinya harus bolak-balik halaman hanya untuk melihat detail kendala yang terjadi dan harus menginputkan lagi nomor order jika ingin tracking lagi.
> Jadi perlu detail Timeline di halaman Dashboard Tracking & Location pada bagian History Tracking untuk melihat detail kendala apabila terjadi kendala tanpa harus bolak-balik halaman.
> TAMBAHAN:
> Foto dokumentasi buat orientasinya sesuai dengan yang difoto oleh sopir di app. Jika di foto vertikal, tetap vertikal. Jika di foto horizontal maka tetap horizontal.

| ID | Acceptance criteria dari requirement |
|---|---|
| HT-REQ-001 | Timeline tersedia di History Tracking Dashboard Tracking & Location. |
| HT-REQ-002 | Detail kendala dapat dibaca langsung dari Timeline Dashboard. |
| HT-REQ-003 | Melihat detail kendala/foto tidak memerlukan pindah halaman dan input ulang order. |
| HT-REQ-004 | Foto dokumentasi vertikal dan horizontal mempertahankan orientasi aslinya. |

## Precondition dan cakupan

Akun Admin dari config/env.md. Eksplorasi dan verifikasi desktop read-only dengan Chromium 1440 × 1000. Data kendala: ORD0150788933 / L 1098 POL, tab Riwayat Tracking. Sampel horizontal: ORD0327836588 / L1090EL, Tracking Terkini. Pengambilan foto baru di aplikasi sopir, upload, dan proses EXIF sebelum tersimpan tidak termasuk bukti yang tersedia.

Hasil dan batasan: reports/history-tracking-timeline_test-report-20261021.md. Metadata skenario: history-timeline_scenarios.json.

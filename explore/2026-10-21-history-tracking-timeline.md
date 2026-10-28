# Observasi History Tracking — 2026-10-21

Target https://ops-staging.prahu-hub.com, akun 1 config/env.md (header Admin / Administrator). Metode: Playwright Chromium live, read-only. Waktu 08:44–08:53 WIB; run HT20261021-0147. Sidebar Tracking & Location → /tracking-location. Tab teramati Tracking Terkini dan Riwayat Tracking; keduanya menampilkan History Tracking setelah memilih order/nopol dan Cari. History memiliki Per Lokasi dan Timeline.

ORD0327836588 / L1090EL (Tracking Terkini) memiliki 2 event dan 2 foto horizontal. ORD0150788933 / L 1098 POL (Riwayat Tracking) memiliki 7 event: 4 tahapan dan 3 kendala. Timeline menampilkan waktu, keterangan kendala dan foto. Per Lokasi menampilkan badge APK pada tahap tracking. Penugasan Tracking difilter ke order yang sama; baris APP → Aksi → Detail → Timeline membuka /penugasan-tracking/d6be9745-038b-40d5-878c-f9073d11a6a1. Ketiga kendala identik antara Dashboard dan Detail Penugasan.

Foto kendala vertikal 720x1280 dan foto tracking horizontal 563x402 mempertahankan orientasi thumbnail/preview. Setelah preview ditutup, URL dan order tetap pada Dashboard. Preview menggunakan object-fit contain, image-orientation from-image, transform none. Tidak menguji capture/upload foto baru di app sopir.

Login UI 1 kali berhasil; auth refresh sempat terblok guard harness, lalu allowlist diperbaiki dan sesi sama pulih (refresh/me 200), tanpa login ulang. Logout UI 200 dan /login. Tidak ada mutasi bisnis. Masalah filter tertutup saat pembandingan diselesaikan dengan membuka Filter sebelum Terapkan.

Evidence: artifacts/evidence/HT20261021-0147. Snapshot state siap: 02-order-history, 03-timeline, 09-kendala-timeline, 10-kendala-photo-preview, 11-kendala-per-lokasi, 12-assignment-filter, 14-assignment-timeline-ready. Snapshot 05 adalah diagnosis harness; 13 masih loading. Peta selector: shared/selector-map-history-tracking.md. Hasil: reports/history-tracking-timeline_test-report-20261021.md.

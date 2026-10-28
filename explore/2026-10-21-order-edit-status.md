# Observasi edit Order per status — 2026-10-21

Klarifikasi user terbaru: Ditolak, Menunggu Konfirmasi, Konfirmasi Jadwal tidak berlaku pada Order OPS. Daftar label dropdown di snapshot lama adalah observasi UI historis, bukan dasar cakupan bisnis. Jangan menyiapkan data tiga status itu untuk OPS atau meminta aktivasi AMS. Rekap aktif dan koreksi: reports/order-ops_scope-correction-20261021.md.

Target https://ops-staging.prahu-hub.com, Admin akun 1, Chromium 1600×1100. Run OE20261021025544; waktu aktual dan metadata pada artifacts/evidence/OE20261021025544/run-meta.json. Satu login berhasil, logout 200, tidak ada mutasi bisnis.

Navigasi teramati:

- Sidebar Order → /order. Filter berisi ID Order, Jenis Order, Vendor, Nomor DO, kota, tipe, Drop Point, tanggal dan Status. Pilihan status: Isi Data Pengiriman, Isi Data Muatan, Isi Data Vendor, Review Order, Menunggu Penugasan, Menunggu Konfirmasi, Ditolak, Konfirmasi Jadwal, Ditugaskan, Proses Pengiriman, Terkirim, Dibatalkan.
- Aksi > Edit membuka /order/<id terobservasi>/edit. Empat belas order berbeda dibuka lewat UI, tanpa menebak ID route. Detail masing-masing ada pada *-fields.json dan snapshot.
- Aksi > Lanjutkan Pengisian untuk ORD2506282223 membuka /order/buat?id=adea7e6d-2c44-43e2-b111-3d21f3ff4450.
- Order Tidak Aktif → /order/riwayat-pembatalan; satu order Dibatalkan, Aksi hanya Detail dan Riwayat Perubahan.
- Aksi > Riwayat Perubahan → /order/4d44cd30-f1d8-4d30-8757-4aa4ccd66f85/riwayat; GET /api/audit/order/<id>/changes 200, baseline kosong.

Daftar lengkap 101 order diambil melalui dropdown 100 dan Halaman terakhir. Enam status tidak memiliki data berdasarkan filter GET 200 (missing-status-survey.json). LCL hanya Ditugaskan dan Terkirim. UI Terkirim berpasangan dengan status API SELESAI pada order yang sama.

Ditugaskan: jumlah unit dan vendor locked, kelompok lain dapat diakses. Proses Pengiriman/Terkirim: jenis/jumlah unit, port/kontainer/metode dan vendor terkunci; data pengirim/penerima, barang, tanggal muat dan harga dapat diakses; tambah lokasi tidak tampil. Detail batas field turunan/master tercatat di laporan.

Metode FCL Multipoint dibatasi kombinasi lokasi, title menyebut ketidaktersediaan untuk Multipoint. Local-only 3×3 → 1×1 mengubah tipe otomatis ke Normal dan membuka semua metode. Reload membuktikan server tetap 3×3. Perubahan input PIC, barang dan harga lokal juga dipulihkan, tanpa Simpan.

Pilot audit disiapkan pada QA ORD0211382256 tetapi belum disimpan; persetujuan pending. Order ini tidak memiliki penugasan. Kandidat APP untuk Driver Hub: QA ORD0173131181, marker QA-PT-S20260923-1411 DS-01c. Tidak ada perangkat ADB terhubung/tool mobile; akses/bantuan user pending. Jangan menyimpulkan sinkronisasi dari data OPS saja.

Sumber selector: shared/selector-map-order-edit-status.md. Hasil dan blocker: reports/order-edit-status_test-report-20261021.md. Knowledge OMS tidak digunakan.

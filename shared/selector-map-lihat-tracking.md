# Selector Lihat Tracking — 26 Oktober 2026

Sumber live LT20261026-035459; OPS staging Admin/Administrator,1440×1000,Asia/Jakarta. Evidence artifacts/evidence/LT20261026-035459/01–09 snapshots. DOM siap ditunggu sebelum test. Tidak ada selector dari OMS.

| State | Elemen/locator aktual | Match/batas |
|---|---|---|
| Sidebar | aside link Penugasan Tracking |1; pakai aside agar tidak ambigu dengan breadcrumb |
| Daftar | button Filter / Filter N filter aktif |1; panel collapsed tetap ada di accessibilitytree; trial-click Terapkan lalu buka jika perlu |
| Filter | placeholder Masukkan ID Order; button Terapkan |1 masing-masing; GET /api/penugasan-tracking?…&orderId=ORD… |
| Baris | table tbody tr hasText order + unit.label |1 pada sampel; source status column4 |
| Aksi | scoped row button Aksi → button Detail |1 setelah menu terbuka. Lakukan berurutan; jangan reuse menu yang sudah tertutup akibat rerender |
| Detail | heading Informasi Penugasan; link Lihat Tracking |1; enabled link /tracking-location?orderCode=…&nopol=… pada Sopir |
| Detail Pengurus | button Lihat Tracking disabled; tooltip Tersedia jika ditugaskan ke sopir |1 masing-masing pada ownQA aktif; jangan force-enable |
| Tujuan | tab Tracking Terkini / Riwayat Tracking |1 masing-masing; tunggu aria-selected=true |
| Filter tujuan | button berlabel identitas nopol/no.kontainer dan ID order |1 masing-masing pada sampel; tanpa perlu klik Cari |
| Hasil | heading Detail Armada; paragraf ID/nopol/kontainer |Sampel source & target cocok; GET /api/monitoring-tracking/track?orderCode=…&nopol=… memiliki detail.assignmentId |
| Loading | button Mencari... → Cari; Memuat data tracking... hilang |Tunggu selesai; snapshot loading bukan verdict |

Navigasi/link target diamati melalui klik asli, bukan URL buatan. Scope aktif: GET track/orders?scope=active. Scope history masih akan dipastikan live. Guard bisnis non-GET read-only; auth login/refresh/logout diizinkan.

Final live validation: scope history GET /track/orders?scope=history. Link selesai menambah `tab=riwayat`, bukan menebak parameter. Source row harus has child text unit exact (KO123 berbeda KO1234), bukan substring. FCL/LCL href memakai muat.nopol (nopol truk aktual), sedangkan unit.label adalah kontainer; label filter bisa `nopol / kontainer`. Nopol dengan spasi di-encode otomatis, nilai hasil tetap spasi. Saat menunggu hasil, tunggu respons /track kedua identitas dan loading aktif atau riwayat selesai; tombol Cari lama saja belum membuktikan load baru selesai. Apply filter identik dapat memakai cache: jangan mewajibkan HTTP baru sebagai oracle bisnis. Empat regresi refresh/BackForward/tab shortcut lulus. Semua keterangan source-count pada sampel terkait, bukan jaminan semua role.

2026-10-26 — pembaruan setelah klarifikasi user LT20261026-035459: “oke untuk yang sekarang sudah sesuai”. User menerima perilaku Lihat Tracking hanya bagi penugasan ke Sopir; Pengurus disabled sesuai. SCN-0019 dinilai passed berdasarkan bukti existing dua state Pengurus dan pembanding Sopir, tanpa rerun atau mutasi. Rekap aktif19passed/0failed/0blocked/0skipped menggantikan18P/1B pada catatan historis. Teks tooltip terdeteksi pada elemen; kemunculan visual saat hover belum diuji, tidak diklaim terverifikasi. Catatan label kontainer tambahan tetap disimpan tanpa dijadikan defect requirement nopol/ID order. JSON, skenario, coverage, laporan dan Excel diperbarui.

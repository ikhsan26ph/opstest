# Eksplorasi dan pemeriksaan SLA — SLA20261026-1532

Target OPS staging, 26 Oktober 2026; akun1 config/env.md, header aktual Admin Administrator. Peran explorer→planner→executor→triager berurutan pada agent utama. Browser Playwright lokal terpisah dari browser MCP publik; kredensial dibaca di memori, tidak disimpan pada artifact. Tidak memakai knowledge OMS.

Login form terobservasi, satu submit HTTP200. Via link Progres Pengiriman: /progres-pengiriman. Halaman awal tidak memuat data sebelum pencarian; isi ID Order lalu Terapkan mengirim GET /api/monitoring-tracking/progres-pengiriman. Exact order selesai ORD2984503817 mengembalikan200 data[]. Prefix ORD menampilkan10 armada aktif, semuanya Normal.

Census GET /api/penugasan-tracking?page=1&limit=100 dan page2:138 ID unik.14IN_PROGRESS semuanya Normal;20 multi semuanya BELUM_BERANGKAT atau SELESAI. Ini batas akun1 pada waktu observasi, bukan klaim semua data/role. Sepuluh kartu progres bukan seluruh14aktif; FCL/LCL tertentu tidak ditampilkan. Perbedaan cakupan layanan tersebut belum dinilai terhadap requirement exception.

Detail, stops/context dan events delapan sampel dibaca fresh. Sampel normal ORD2996154854 dipastikan lewat UI Aksi>Detail>Timeline. Milestone tampil Berangkat Muat13:35, Selesai Muat13:38, Berangkat Bongkar13:39 WIB. Timestamp API berpresisi milidetik.

Temuan SLA-FND-01 terkonfirmasi: pada15:35:23.948Z normal tersebut waktuBerjalanMenit540 dan MELEWATI_SLA, padahal selisih BerangkatBongkar hanya536.393menit. Selisih dariBerangkatMuat540.147menit; durasi muat225.230detik masih ikut terhitung. Sampel lain QAST26N2 belum BerangkatBongkar tetapi sudah729menit/540 danMelewatiSLA. Ini satu masalah requirement dengan dua skenario gagal, bukan dua bug independen. UI memformat field API; akar penyebab implementasi backend tidak diperiksa.

MP1, MD dan Xlintaskota punya event selesai lengkap, tetapi perhitungan SLA final tidak diekspos pada respons yang diperiksa. X1 completed hanya eventSELESAI, tanpa start. MP>1 tidak ada di census. Opsi status UI dan loaded client tidak menyediakan kontrol riwayat pada Progres. Tidak menebak endpoint/parameterhistory. Hitungan expected disimpan di completed-oracles.json dan tidak diberi passed.

Prasyarat yang diajukan:6orderQAFTL/6assignment khususNormal,MP1,MP>1,MD,X1,X>1, lalu trackingbertahap. Pengujian aktif diperlukan untuk membedakan jumlahalamat dan jumlahkota serta awal yang tidak direset. Otorisasi diminta async, belum diterima pada penulisan ini; tidak ada mutasi bisnis. Panduan proyek membatasi exploration read-only. Tidak mengubah data lama, master existing atau setting.

Evidence: artifacts/evidence/SLA20261026-1532; selector shared/selector-map-progres-pengiriman-sla.md; plan results/_plan__progres-pengiriman-sla__SLA20261026-1532.md. Laporan reports/progres-pengiriman-sla_test-report-20261026.md. Status pekerjaan: temuan normal terbukti; seluruh cabang belum selesai. Tidak commit/push.

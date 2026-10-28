# Retest SLA empat case

**Titik awal SLA masih belum sesuai pada keempat case.** Rekap15 pemeriksaan: **8 failed, 3 passed, 4 blocked**. Delapan failed mendukung satu temuan SLA-FND-01; tiga passed hanya aspek kontinuitas. Empat pemeriksaan berhenti pada SB terakhir belum dapat diverifikasi dari output final sistem.

OPS staging; run `SLAR4-20261027-025001`; 09:50:57.162–10:06:19.674 WIB, 27 Oktober 2026. Admin Administrator. Semua waktu tabel WIB; perhitungan selisih memakai UTC dari API.

## Hasil dan bukti titik awal

| Case / order | Pemicu yang benar | Jam observasi | Durasi acuan saat observasi | Aktual UI/API |
|---|---|---|---|---|
|Normal / ORD3069576344|BB menuju Semarang (pertama untuk MD), 09:57:09.942|09:57:37.741|0 menit 27.799 detik|2 menit|
|Multipickup satu kota / ORD3069598468|BB menuju Semarang (pertama untuk MD), 09:58:29.291|09:58:34.928|0 menit 5.637 detik|3 menit|
|Multipickup beda kota / ORD3069612588|BM menuju Gresik, 09:57:23.938|09:57:50.033|0 menit 26.095 detik|2 menit|
|Multidrop / ORD3069641264|BB menuju Semarang (pertama untuk MD), 09:57:16.623|09:57:44.175|0 menit 27.552 detik|2 menit|

Semua aktual cocok dengan durasi sejak **Berangkat Muat pertama menuju pickup Surabaya**, setelah pembulatan menit. Sebelum pemicu benar tersimpan, durasi sudah berjalan pada keempat case. MP1 juga diperiksa setelah kedua pickup Surabaya selesai: masih belum BB tetapi aktual3menit. Jumlah row pickup tidak disamakan dengan jumlah kota; cityId MP1 sama, cityId MP2 berbeda.

## Multidrop: hasil baru yang perlu dibedakan

- Rute: QA Muat Surabaya → Warehouse Gunung Pati → IK - SMG Ayam Goreng; dua lokasi bongkar berbeda di Kota Semarang, keduanya berkoordinat.
- SB pertama09:58:42.510, BB kedua10:00:30.603: jeda108.093 detik.
- Setelah SB pertama, dua pembacaan Progres HTTP200 data[] pada09:58:47.337 dan09:59:06.720. Order tetap PROSES_PENGIRIMAN, assignment IN_PROGRESS, drop pertama DONE, drop kedua PENDING. UI Penugasan menunjukkan Semarang1/2alamat selesai.
- Setelah BB kedua kartu muncul kembali:10:00:35.820 aktual5menit, sedangkan acuan sejak BB pertama3menit19.197detik. Asal durasi tetap salah dari BM pertama.
- Delta SLA marker dari sebelum SB pertama sampai sesudah BB kedua171.573detik, selisih waktu aktual171.645detik (residu−0.072detik). Jadi seluruh waktu jeda antarbongkar tercakup pada hasil sesudah BB2; tidak ada pengurangan waktu jeda atau reset ke BB2.
- Ini lulus hanya cakupan durasi jeda dan kontinuitas. Counter saat jeda tidak terlihat. Kartu hilang sementara dicatat sebagai **SLA-OBS-01**, perilaku terobservasi untuk review produk; bukan bukti counter berhenti atau bug final cap.

## Batas akhir: Selesai Bongkar TERAKHIR

| Case / order | Awal sesuai requirement | SB terakhir | Acuan final dari event | Nilai final sistem |
|---|---|---|---|---|
|Normal / ORD3069576344|09:57:09.942|10:01:50.456|4 menit 40.514 detik|Tidak tersedia / blocked|
|Multipickup satu kota / ORD3069598468|09:58:29.291|10:02:03.808|3 menit 34.517 detik|Tidak tersedia / blocked|
|Multipickup beda kota / ORD3069612588|09:57:23.938|10:02:17.921|4 menit 53.983 detik|Tidak tersedia / blocked|
|Multidrop / ORD3069641264|09:57:16.623|10:02:33.042|5 menit 16.419 detik|Tidak tersedia / blocked|

Angka acuan final hanya selisih timestamp event sesuai requirement, bukan hasil hitung SLA final sistem. Seluruh Order/Assignment SELESAI, semua stop DONE,22event unik dan11foto sintetis tersimpan. Multidrop memiliki dua SB berbeda; final oracle memakai SB kedua.

Pemeriksaan keluaran akhir:

- Progres exact order kosong segera sesudah SB terakhir dan saat recheck (jeda tercatat di final-oracles.json).
- Detail, events, stops/context, tracking-context, dan Order dibaca ulang; tidak memuat calculated final SLA. Inventaris leaf field dan kandidat durasi tersedia. `targetWaktuJam=1` adalah target, bukan realisasi. Endpoint steps ditemukan dari client, empat GET200 data[].
- Riwayat Tracking tidak memasukkan empat order; GETtrack per order/nopol mengembalikan ASSIGNMENT_PENGURUS. Pembatasan ini tidak disamakan dengan kemampuan Progres, yang menampilkan Pengurus saat aktif.
- Feature dashboard-operasional=false pada system/status; tidak mengaktifkan fitur atau bypass role. Rute /riwayat-tracking dari loadedclient dialihkan ke /tracking-location?tab=riwayat; tab Pengiriman Selesai, tanpa keluaran SLA final. Bukti setelah halaman selesai memuat: riwayat-route-after-reads.json.
- Diperlukan hasil perhitungan final per assignment dari UI/API/backend/log agar akhir pada SB terakhir dan kestabilan nilainya dapat dibuktikan. Tidak mengubah fixture menjadi Sopir tanpa bukti bahwa itu membuka nilai final.

## Bukti kontinuitas MP2

Durasi mencakup proses muat di Gresik dan tidak reset saat BB menuju Semarang. Delta marker mengikuti selisih waktu sebelum/sesudah Selesai Muat Gresik dan BB; residu<3detik. Titik awal tetap gagal karena Surabaya pertama masih ikut dihitung.

## Langkah reproduksi untuk developer

Prasyarat: FTL, satu armada, target waktu perjalanan terisi, penugasan selesai. Buat fixture baru bila ingin mengulang; empat order bukti di atas sudahSELESAI. Beri jeda antarstatus.

1. Normal: BM Surabaya → SM Surabaya → periksa Progres sebelum BB → BB Semarang → periksa durasi. Expected baru mulai pada penyimpanan BB.
2. MP1: BM/SM Surabaya lokasi1 → BM/SM Surabaya lokasi2 → periksa Progres sebelum BB → BB Semarang → periksa durasi. Expected baru mulai BB menuju Semarang setelah kedua pickup selesai.
3. MP2: BM/SM Surabaya → periksa Progres → BM menuju Gresik → periksa durasi → SM Gresik → BB Semarang → periksa ulang. Expected mulai BM menuju Gresik, mencakup muat Gresik, tanpa reset pada BB.
4. MD: BM/SM Surabaya → periksa sebelum BB → BB menuju bongkar1 → periksa → SB1 → periksa saat bongkar2masihpending → BB2 → periksa → SB2 terakhir. Expected awalBB1, mencakup seluruh jeda dan bongkar berikutnya, berhenti padaSB2.
5. Setelah SB terakhir, baca hasil durasi final sistem dan ulang setelah jeda. Pada environment saat ini langkah pembuktian nilai final masih blocked karena output tidak tersedia.

## Hasil per skenario

| ID | Pemeriksaan | Status |
|---|---|---|
|SCN-0001|N: SLA belum berjalan sebelum Berangkat Bongkar|failed|
|SCN-0002|N: SLA mulai saat Berangkat Bongkar menuju Semarang|failed|
|SCN-0003|N: SLA berhenti pada Selesai Bongkar terakhir|blocked|
|SCN-0004|MP1: SLA belum berjalan sebelum Berangkat Bongkar|failed|
|SCN-0005|MP1: SLA mulai saat Berangkat Bongkar menuju Semarang|failed|
|SCN-0006|MP1: SLA berhenti pada Selesai Bongkar terakhir|blocked|
|SCN-0007|MP2: SLA belum berjalan sebelum Berangkat Muat menuju Gresik|failed|
|SCN-0008|MP2: SLA mulai saat Berangkat Muat menuju Gresik|failed|
|SCN-0009|MP2: SLA berlanjut selama muat Gresik dan keberangkatan bongkar|passed|
|SCN-0010|MP2: SLA berhenti pada Selesai Bongkar terakhir|blocked|
|SCN-0011|MD: SLA belum berjalan sebelum Berangkat Bongkar pertama|failed|
|SCN-0012|MD: SLA mulai saat Berangkat Bongkar pertama|failed|
|SCN-0013|MD: SLA tetap berjalan setelah Selesai Bongkar pertama|passed|
|SCN-0014|MD: SLA tidak reset saat Berangkat Bongkar kedua|passed|
|SCN-0015|MD: SLA berhenti pada Selesai Bongkar terakhir|blocked|

## Aktivitas, batas cakupan dan artifact

- Empat POSTorder201, empat POSTassignment201,22POSTevent200 =30businesswrites; guarddenied0. Semua hanya fixture QA baru. Tidak mengubah master, setting, fixture lama atau data pengguna lain; tidak mengirim pesan.
- Satu login200, logout200, browser ditutup. Automatic refresh401 sebelum login adalah pemeriksaan sesi kosong, bukan percobaan login ulang.
- Target1jam adalah QA; tidak menunggu ambang1jam. Hasil hanya empat case FTL manual/Pengurus ini; multidrop dua alamat satu kota, belum multidrop beda kota/multipoint.
- Tidak commit/push. Header akun dimask pada screenshot; token/password/kodeakses disensor sebelum evidence disimpan.

- JSON: `results/sla-four-cases__SLAR4-20261027-025001.json`
- Excel: `reports/sla-four-cases__SLAR4-20261027-025001.xlsx`
- Evidence: `artifacts/evidence/SLAR4-20261027-025001/` (calculation-proof, continuity-proof, final-oracles, final-field-inventory, md-between-unloads, reconciliation, observations, network).

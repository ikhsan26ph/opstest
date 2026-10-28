# Improvement SLA Progres Pengiriman — sumber user 26 Oktober 2026

Sumber normatif: pesan user pada sesi ini. Berlaku di OPS staging. Aturan ini menggantikan titik awal Berangkat Muat di TMS.S018-R10 poin 3 untuk SLA keterlambatan dalam scope ini. Spec sumber lama dipertahankan.

| ID | Jenis | Titik awal | Titik akhir |
|---|---|---|---|
| REQ-001 | Normal | Berangkat Bongkar | Selesai Bongkar |
| REQ-002 | Multipickup satu kota muat | Berangkat Bongkar ke kota tujuan, setelah rangkaian pickup | Selesai Bongkar |
| REQ-003 | Multipickup >1 kota muat | Berangkat Muat ke kota kedua | Selesai Bongkar terakhir |
| REQ-004 | Multidrop | Berangkat Bongkar | Selesai Bongkar terakhir |
| REQ-005 | Multipoint satu kota muat | Sesuai REQ-002 | Selesai Bongkar terakhir |
| REQ-006 | Multipoint >1 kota muat | Sesuai REQ-003 | Selesai Bongkar terakhir |

Durasi final = timestamp akhir − timestamp awal. Alasan Selesai Bongkar dipakai: sistem belum memiliki data tiba lokasi bongkar, menurut user. Kota harus dibuktikan dari lokasi muat dan grouping kota; jumlah alamat tidak sama dengan jumlah kota. Tidak memilih timestamp Berangkat Bongkar terakhir pada multidrop tanpa bukti aturan.

Pemeriksaan tambahan terkait requirement: sebelum titik awal tidak memakai Berangkat Muat awal sebagai fallback; saat berjalan timestamp yang dipakai sesuai cabang; setelah semua bongkar selesai durasi berhenti; tiap assignment dihitung sendiri; event/gap pickup awal tidak dihitung pada cabang satu kota; lintas kota tidak mulai ulang pada keberangkatan bongkar berikutnya. Batas durasi terhadap SLA, precision, missing/invalid timestamp, rute >2 kota dan perbedaan jenis layanan tetap dilaporkan sesuai bukti/data yang tersedia, bukan dianggap lulus.

Pertanyaan terbuka hanya bila menghalangi verdict: interpretasi layanan tanpa bongkar (Door to CY/CY to CY), histori assignment dialihkan, serta titik akhir bila waktu event tidak kronologis. Requirement tidak menetapkan perilaku kasus tersebut.

## Klarifikasi user, 27 Oktober 2026

Contoh konkret yang menjadi acuan setup berikutnya:

1. Normal: muat Surabaya, bongkar Semarang. SLA mulai setelah proses muat selesai dan pengguna berhasil menyimpan status **Berangkat Bongkar menuju Semarang**.
2. Multipickup satu kota: dua lokasi muat di Surabaya, bongkar Semarang. SLA mulai setelah muat di kedua lokasi selesai dan pengguna berhasil menyimpan **Berangkat Bongkar menuju Semarang**.
3. Multipickup beda kota: muat Surabaya lalu Gresik, bongkar Semarang. SLA mulai setelah muat Surabaya selesai dan pengguna berhasil menyimpan **Berangkat Muat menuju Gresik**. Tidak menunggu Berangkat Bongkar; perjalanan ke Gresik dan proses muat berikutnya ikut dihitung.

Selesai Muat saja belum merupakan pemicu awal. Setelah klarifikasi, user meminta: “oke sekarang coba buatkan order baru dengan 3 case tersebut!” Ini mengotorisasi pembuatan tepat tiga order baru untuk contoh di atas, menggantikan usulan setup enam order pada fase sebelumnya. Belum ada permintaan baru untuk menjalankan tracking ketiga order tersebut pada tahap pembuatan ini.

## Lanjutan pengujian, 27 Oktober 2026

Setelah tiga order dibuat, user meminta “lanjutkan!”. Instruksi ini mengotorisasi kelanjutan penugasan/tracking dan pemeriksaan ketiga case tersebut. Run SLAT-20261027-015203 menjalankan tiga assignment dan seluruh16milestone sampai Selesai. Hasil dan batas perhitunganfinal dicatat terpisah di scenario/sla-three-cases-tracking dan reports/sla-three-cases-tracking_test-report-20261027.md. Catatan sebelumnya tentang belum adanya permintaan tracking bersifat historis dan telah digantikan instruksi lanjutan ini.

# Improvement edit Order per status — 2026-10-21

## Klarifikasi cakupan OPS terbaru

User menegaskan: **“Ditolak, Menunggu Konfirmasi, Konfirmasi Jadwal — status ini pada order ops tidak ada!”** Klarifikasi ini menggantikan cakupan sebelumnya. Ketiga status dikeluarkan dari pengujian Order OPS; SCN-0017/0021/0022 skipped karena tidak berlaku, bukan blocked data. Tidak perlu aktivasi AMS atau membuat data tiga status tersebut untuk tugas OPS ini. Sumber awal dan evidence runtime lama dipertahankan sebagai riwayat, bukan dasar cakupan aktif.

Sumber utama: pesan user 2026-10-21. Requirement baru mengesampingkan larangan edit setelah Ditugaskan pada spesifikasi historis. Aturan sebelum Ditugaskan merujuk baseline OPS di TMS.S011-R10, TMS.S012-R10, TMS.S013-R09, dengan penyesuaian requirement multilokasi yang telah diuji pada reports/order-multilokasi_test-report-20260924.md. Tipe FTL/FCL kini berupa info otomatis dari jumlah lokasi; LTL/LCL tidak memiliki tambah lokasi maupun jumlah unit seperti FTL/FCL.

## Teks user

> Order dapat diubah pada status apapun kecuali 'Ditolak', 'Dibatalkan'.
> Hal yang tidak dapat diedit sebelum status 'Ditugaskan' mengikuti aturan existing
> Hal yang dapat diedit pada status 'Ditugaskan': semua kecuali jenis pengiriman, jumlah armada, vendor
> Hal yang dapat diedit pada status 'Proses Pengiriman', dan 'Terkirim': hanya data pengirim, penerima (tidak bisa tambah baris input), data barang, tgl muat, harga.
> Semua perubahan wajib tersimpan di audit trail
> Perubahan akan reflect juga ke Driver Hub

| ID | Expected dari requirement |
|---|---|
| OE-REQ-001 | Order dapat diedit pada status OPS yang berlaku selain Dibatalkan. Ditolak dikeluarkan dari cakupan sesuai klarifikasi terbaru user. |
| OE-REQ-002 | Sebelum Ditugaskan, field terkunci mengikuti aturan existing OPS. Pada Edit: Jenis Pengiriman tetap; tipe FTL/FCL mengikuti baseline multilokasi, tidak ada dropdown tipe manual. Draft menggunakan Lanjutkan Pengisian pada wizard existing, dibedakan dari halaman Edit. |
| OE-REQ-003 | Ditugaskan: semua dapat diedit selain jenis pengiriman, jumlah armada, vendor. |
| OE-REQ-004 | Proses Pengiriman/Terkirim: hanya data pengirim, penerima, barang, tanggal muat, harga dapat diedit. |
| OE-REQ-005 | Pada Proses Pengiriman/Terkirim tidak boleh tambah baris data pengirim/penerima. |
| OE-REQ-006 | Semua perubahan yang disimpan masuk audit trail. |
| OE-REQ-007 | Perubahan tersimpan tercermin pada Driver Hub. |

## Batas interpretasi

- UI status dan field harus dicatat dari DOM aktual; jangan menyamakan Selesai dengan Terkirim tanpa evidence status.
- Jumlah kontainer pada FCL/LCL perlu dicatat terpisah dari jumlah armada; jangan menetapkan equivalence yang tidak diberikan user.
- Tidak mengasumsikan price internal tampil untuk sopir; sinkronisasi Driver Hub dibandingkan untuk data order yang memang ditampilkan app.
- Pengujian awal read-only: akses Edit, enabled/disabled field, row control, riwayat tersimpan. Pembuktian edit → Simpan → audit baru → Driver Hub membutuhkan mutasi terbatas pada order QA yang teridentifikasi serta akses aplikasi sopir.

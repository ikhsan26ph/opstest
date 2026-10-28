# Lihat Tracking — requirement user 26 Oktober 2026

Sumber: empat poin improvement user dalam percakapan aktif. Halaman asal ditemukan melalui eksplorasi aktual: Detail Penugasan. Lokasi tombol tidak disebut eksplisit oleh user; keberadaannya di detail adalah observasi, bukan syarat tambahan untuk daftar.

| ID | Requirement |
|---|---|
| REQ-001 | Menambah tombol untuk menuju ke halaman Tracking & Location. |
| REQ-002 | Armada sedang perjalanan menuju Tracking Terkini; pengiriman sudah selesai menuju Riwayat Tracking. Expected per armada terkait, tidak disimpulkan dari semua armada order. |
| REQ-003 | Halaman tujuan sudah langsung terfilter sesuai nopol dan ID order terkait. Cocokkan field dan hasil/API terhadap identitas sumber; URL saja belum cukup. |
| REQ-004 | Nama tombol persis Lihat Tracking. Elemen link yang ditampilkan sebagai tombol tidak dinyatakan salah hanya karena semantic role link. |

Klarifikasi user: “oke untuk yang sekarang sudah sesuai”, setelah pembahasan tombol Pengurus nonaktif dan keterangan terkait Sopir. Pembatasan hanya untuk penugasan ke Sopir diterima; tombol Pengurus disabled sesuai. Teks tooltip terdeteksi pada elemen halaman; kemunculan visual saat hover belum diverifikasi. Tidak mengklaim konfirmasi user sebagai runtime baru.

Batas tidak ditentukan user: perilaku Belum Berangkat / Dialihkan, refresh/back, akun/role lain, SLA loading. Boleh mengamati atau memeriksa kesinambungan filter sebagai regresi; jangan menciptakan aturan tujuan tab untuk status yang tidak disebut user.

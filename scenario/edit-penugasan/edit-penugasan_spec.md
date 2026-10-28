# Edit Penugasan — improvement user 26 Oktober 2026

Sumber utama: lima poin user pada percakapan aktif. Ketentuan terbaru menggantikan batas lama pada penugasan-tracking_spec.md / REQ-057, REQ-058 dan VAL-022 yang melarang edit sesudah perjalanan dimulai. Jangan menguji larangan lama sebagai expected terbaru.

| Requirement | Expected |
|---|---|
| REQ-001 | Edit penugasan dapat dilakukan pada status Belum Berangkat dan Dalam Perjalanan. Poin1 user adalah latar belakang, bukan aturan larangan aktif. |
| REQ-002 | Nopol, Sopir dan mode penugasan dapat diedit serta tersimpan. Uji perubahan masing-masing, master/manual bila kontrol tersedia, navigasi ulang dan data yang terisolasi per assignment. |
| REQ-003 | Klarifikasi terbaru user: sopir Master pengganti menerima penugasan dan melanjutkan tahap terakhir pengiriman; tidak mulai dari awal. Penugasan DH sopir lama hilang. Hasil DH harus diamati langsung, bukan disimpulkan dari PUT OPS. |
| REQ-004 | Jika sopir edited diisi manual, tidak masuk ke DH sopir baru dan penugasan DH sopir lama hilang. Verifikasi aplikasi DH lama/baru; manual field yang tersimpan saja bukan bukti DH. |
| REQ-005 | Regresi existing yang dirujuk user: manual Sopir tidak memiliki akun DH, mode Tugaskan ke Sopir disabled; armada manual dengan Sopir master tetap boleh mode Sopir; mode Pengurus hanya web. Sumber pendukung TMS.S015-R05 poin8–9. |

Tidak dinyatakan dalam improvement: penghapusan/reset history OPS, perlakuan edit tanpa mengganti sopir, status Selesai/Dialihkan, spesifikasi audit/alert, atau SLA sinkronisasi DH. Catat perilaku aktual/regresi; jangan menambah expected reset OPS atau menghapus history. Klarifikasi user terbaru menyatakan sopir pengganti melanjutkan tahap pengiriman.

Akses DH awalnya blocked karena perangkat belum terhubung. Pada lanjutan EPDH20261026-072815, satu perangkat/sesi DH terhubung dipakai sebagai penerima baru dan sopir lama pada transaksi terpisah. Master→Master lulus setelah klarifikasi tahap melanjutkan; manual tetap failed karena penugasan DH lama tidak hilang. Akun manual sintetis terpisah tidak dibuka.

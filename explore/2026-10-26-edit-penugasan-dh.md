> Koreksi terbaru berdasarkan klarifikasi user: sopir Master pengganti melanjutkan tahap terakhir. SCN-0031 passed; EP-FND-02 ditarik. Rekap aktif30P/2F/1B. Catatan gagal Master di bawah adalah histori penilaian sebelum klarifikasi; tidak ada runtime rerun/mutasi tambahan.

# Edit Penugasan — lanjutan DH, 26 Oktober 2026

Run EPDH20261026-072815, setelah user menghubungkan perangkat. Target OPS staging dan DH package com.phbid_darat.supir.stg versi2.3.5-stg(28), SM_A528B. ADB, activity, Home dan Profile diperiksa langsung. Sesi Ikhsan cocok dengan Master Julian berdasarkan nomor akhir1881. Tidak login ulang, logout, atau reset aplikasi mobile.

Smoke: Home memuat daftar, Profile dapat dibuka dan kembali ke Home. Card tidak mengekspos ID order pada XML awal; resource-id tombol Isi Penugasan memuat assignmentUUID. Setelah membuka own QA, identitas exact TSH-ORD3000173723 diperiksa. Home bertuliskan Mulai Perjalanan, tetapi form menawarkan Berangkat Bongkar dan BM/SM sudah dicentang. Screenshot form diperiksa visual; tidak menekan Simpan DH.

Setup melalui Admin lalu Vendor IK: order baru ORD3000173723/QADH26101 dan satu Master QA pembanding berpenanda run/nomor sintetis. Vendor hanya memiliki Master Julian pada opsi yang diamati. DS10 lama ternyata SELESAI, sehingga tidak dimutasi. Guard memblok bulk endpoint awal sampai path aktual diketahui; hanya satu create Master201 sukses. Create order201 berhasil walaupun oracle modal lama timeout setelah redirect; tidak membuat order ulang.

Cold reopen memakai force-stop/start package staging dengan sesi tetap tersimpan. Census menyimpan XML tiap halaman sampai fingerprint node/bounds sama dua kali. Semua20ID pada census relevan dicocokkan ke GET detail OPS secara read-only untuk memastikan order QA ada atau tidak. Jumlah20 adalah observasi, bukan requirement fixed count; staging aktif selama pengujian.

SCN31 gagal EP-FND-02: Master pengganti menerima tetapi melanjutkan Berangkat Bongkar, bukan mulai dari awal. Penghilangan dari DH lama pada Master→Master lulus. SCN32 gagal EP-FND-03: Master→manual tidak menghilangkan penugasan dari DH lama, baik nomor sama maupun berbeda. Penggantian langsung Master→manual nomor berbeda diulang dari baseline Master yang terlihat; UUID dan form tetap tersedia. Akun DH terpisah untuk nomor manual sintetis tidak tersedia, sehingga nondistribusi ke akun itu tidak diklaim.

Dua belas request bisnis sukses dan dua request diblok guard; dua event BM/SM ditemukan kembali tanpa event tambahan, satu foto sintetis, tujuh PUT Edit200. Dua sesi web terpisah masing-masing login200/logout200 dan browser ditutup. Sesi DH dipertahankan. QA akhir IN_PROGRESS, manual dengan nomor sintetis berbeda, mode Pengurus; masih terlihat pada DH lama sebagai reproduksi bug. Kode akses diredaksi di text/network; screenshot Master list dengan posisi mask tidak stabil dihapus.

Laporan terbaru: reports/edit-penugasan_dh-test-report-20261026.md. Rekap aktif29P/3F/1B:31kasus web/scope dibawa dari run awal dan dua kasus DH dieksekusi. Raw run awal tetap tersimpan.

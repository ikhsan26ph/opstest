# Selector status tahap Penugasan — live 26 Oktober2026

Sumber run ST20261026-030049, Chromium desktop1440×1000, Asia/Jakarta, akun1 Admin/Administrator OPS staging. Route daftar /penugasan-tracking; actual action route diamati /penugasan-tracking/<assignmentId>/isi-tracking. Snapshot artifacts/evidence/ST20261026-030049.

| State / elemen | Locator teramati | Match dan batas |
|---|---|---|
| Daftar | heading Penugasan Tracking; button Tambah Penugasan | Masing-masing1 |
| Filter | button Filter; button Terapkan | Masing-masing1. CSS collapsed tetap ada di accessibility tree dan isVisible dapat true; pakai trial click untuk readiness, buka panel jika tidak clickable. Jangan force-click. |
| ID order | getByPlaceholder('Masukkan ID Order',{exact:true}) |1; label accessible ID Order. Isi lalu Tab, Terapkan, tunggu response dengan code. |
| Baris unit | locator('table tbody tr').filter(hasText: orderCode).filter(hasText: uniqueNopol) |1 pada ownQA. table tbody bisa memuat row kosong; jangan menghitung tanpa identitas. |
| Kolom status | scopedRow.getByRole('cell').nth(3) | Kolom ke4 dari table5kolom; berisi badge umum dan paragraf tahap aktual. |
| Aksi | scopedRow.getByRole('button',{name:'Aksi',exact:true}) |1 perrow |
| Menu tracking | getByRole('button',{name:'Isi Data Tracking',exact:true}) |1 sesudah menu dibuka; pastikan enabled |
| Judul tracking | getByRole('heading',{name:'Kembali Isi Data Tracking',exact:true}) |1. Setelah navigasi tunggu combobox dan Simpan, bukan heading saja. |
| Alamat tracking | getByRole('combobox') pada form tracking |1 native select. Option label memuat namaDP — alamat (Muat/Bongkar) — 0/2 atau1/2. Disabled saat alamat sedang dalam proses. |
| Pilih alamat nonurut | combobox.selectOption(value) dari observed option | Jangan tebak stopID. Nilai dibaca dari option label unik berdasarkanDP, hanya yang enabled. |
| Foto | locator('input[type=file]') |1 pada step Selesai; fixture artifacts/fixtures/qa-foto.png; foto dikirim dalam multipart request event ownassignment. |
| Simpan tracking | getByRole('button',{name:'Simpan',exact:true}) |1 pada form; POST langsung, tanpa konfirmasi kedua. Response200 Event berhasil dicatat. |
| Status multi | cell text Berangkat Muat N / Selesai Muat N / Berangkat Bongkar N / Selesai Bongkar N | Format aktual angka tanpa denominator; bukan mensyaratkan1/3. N diuji terhadap jumlah lokasi diproses. |
| Paginasi jumlah | getByRole('combobox') pada daftar | Native select10/20/50/100; jangan gunakan locator global pada trackingdanlist tanpa membedakanstate. |

GET aktual: /api/penugasan-tracking?page=1&limit=100 (meta.totalData105 saat baseline), page2 untuk5sisa; filter request diamati setelah Terapkan. latestTracking memiliki tahapan, occurredAt, recordedAddressCount, totalAddressCount. Oracle utama untuk counting berasal urutan submit lokasi ownQA, bukan menerima APIcounter sebagai expected. Endpoint history/context/detail diobservasi ketika Isi Data Tracking dibuka: /api/penugasan-tracking/<id>/events, /stops/context, /detail. Mutasi memakai /api/penugasan-tracking/<assignmentId>/stops/<stopId>/events dengan milestone BERANGKAT/SELESAI.

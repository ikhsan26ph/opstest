# Selector edit Order — live 2026-10-21

Pembaruan mobile OPSRECHECK20261021073853: `home_isi_penugasan_button_d8329159-d74f-4884-a596-1ab56e10b05f` kini enabled=true. Klik membuka Detail Pengiriman, cocokkan TSH-ORD2557653613 sebelum membaca data. Label Pengirim/Tanggal Permintaan Muat/Alamat Muat/PIC Muat memuat nilai read-only. PIC Muat menggabungkan nama dan WA dengan pemisah ` - `. Tombol Back hanya navigasi; `detail_simpan_button` melakukan submit tracking dan tidak digunakan dalam recheck. Scroll bawah memperlihatkan Media/Keterangan/Status Pengiriman; jangan menyamakannya dengan komponen Catatan Order atau detail barang. Buka ulang detail setelah edit dan sesudah restore memuat data terbaru, sedangkan kartu Beranda masih tanggal lama; dokumentasikan kedua surface terpisah. Sumber XML/PNG appstest/report/OPSRECHECK20261021073853. Enabled state lama tidak boleh dipakai sebagai fakta kondisi sekarang.

Klarifikasi user terbaru: Ditolak, Menunggu Konfirmasi, dan Konfirmasi Jadwal dikeluarkan dari cakupan bisnis Order OPS. Keberadaan label/selector historis tidak membuktikan status berlaku pada OPS. Metadata kasus terkait ditandai skipped, bukan blocked; jangan menjadikan akses AMS sebagai prasyarat tugas ini. Lihat reports/order-ops_scope-correction-20261021.md.

Sumber: artifacts/evidence/OE20261021025544/*.yml dan *-fields.json; Admin, Chromium 1600×1100, https://ops-staging.prahu-hub.com. Count sesuai state sampel, tidak digeneralisasi ke semua role/data. Seluruh route detail/edit/riwayat didapat dari klik UI.

| State | Locator teramati | Match | Catatan |
|---|---|---|---|
| /order | getByRole('heading', {name:'Daftar Order', exact:true}) | 1 | Tunggu row data, heading saja belum menjamin data siap. |
| /order awal | getByRole('button', {name:'Filter', exact:true}) | 1 | Sesudah filter aktif namanya memuat jumlah filter. Buka panel sebelum input/Terapkan. |
| Filter | getByPlaceholder('Masukkan ID Order', {exact:true}) | 1 | Terapkan men-trigger GET /api/order; tunggu respons filter yang sesuai. |
| Filter | getByRole('button', {name:'Status', exact:true}) | 1 | Dropdown memakai role option. |
| Dropdown status | getByRole('option', {name:'Ditolak', exact:true}) | 1 | Daftar pilihan lengkap pada 02-order-status-options.yml. |
| Filter | getByRole('button', {name:'Terapkan', exact:true}) | 1 | Jangan klik ketika panel tertutup. |
| Baris order | getByRole('row').filter({has:getByRole('button',{name:'Salin <kode order teramati>',exact:true})}) | 1 | Scope Aksi ke baris; jangan memakai Aksi.first(). |
| Menu Aksi | getByRole('button', {name:'Edit', exact:true}) | 1 pada sampel editable | Pilih langsung setelah membuka menu; screenshot full-page/scroll dapat menutup popover. |
| Menu draft | getByRole('button', {name:'Lanjutkan Pengisian', exact:true}) | 1 | Draft memakai wizard, bukan form Edit. |
| Edit | getByRole('heading', {name:'Edit Order', exact:true}) | 1 | Tunggu ID order yang sesuai tampil. |
| Edit FTL | getByPlaceholder('Masukkan Jumlah Armada', {exact:true}) | 1 | Disabled pada Ditugaskan/Proses/Terkirim. |
| Edit FCL | getByPlaceholder('Masukkan Jumlah Kontainer', {exact:true}) | 1 | LTL/LCL tidak memiliki input jumlah unit ini. |
| Edit | getByPlaceholder('Masukkan PIC Pengirim', {exact:true}) | 1 per lokasi | Multipoint dapat lebih dari satu; scope berdasarkan baris. |
| Edit | getByPlaceholder('Masukkan PIC Penerima', {exact:true}) | 1 per lokasi | Multipoint dapat lebih dari satu. |
| Edit | getByPlaceholder('Masukkan Deskripsi Barang', {exact:true}) | 1 pada FTL normal QA; 2 pada FCL dua kontainer | Scope ke card barang bila lebih dari satu. |
| Edit tanggal muat | getByRole('button', {name:/^\d{2}\/\d{2}\/\d{4}/}) | 1 pada sampel normal | Node DIV role=button, tabindex=0; tidak terliput inventory native button. Picker diuji pada 32-delivered-date-picker-open.yml. |
| Edit | getByRole('button', {name:'Simpan', exact:true}) | 1 | Tidak diklik; butuh persetujuan pilot sesuai batas guide. |
| Riwayat | heading berisi Kembali Riwayat Perubahan | 1 | Halaman /order/<id>/riwayat, bukan dialog. |

Untuk memeriksa metode FCL gunakan teks/role tombol yang teramati; disabled alternatif pada Multipoint memiliki title `Tidak tersedia untuk Tipe Pengiriman Multipoint`. Jangan menyimpulkan restriction status dari disabled tanpa memeriksa dependency data. Field inventory juga mencakup elemen native tersembunyi; verdict hanya memakai visible=true dan snapshot state terlihat.

Pembaruan OEALL20261021042339: Riwayat Perubahan menampilkan event sebagai button bernama `1. <tanggal> Edit Order <aktor> 8 Perubahan`; klik event untuk membuka tabel field sebelum/sesudah. Label Harga (DPP) tidak terlihat sebelum event dibuka. Menunggu label tersebut pada event tertutup adalah masalah locator/state otomasi, bukan defect aplikasi. Filter kode pada hard navigation perlu menunggu baris data, membuka panel secara trial, blur input sebelum Terapkan agar controlled state committed; request idOrder tetap dicocokkan.

Date picker: setelah memverifikasi textbox Waktu (24 jam), klik heading Edit Order untuk menutup popover. Escape saja tidak menjamin popover tertutup; klik tombol tanggal lagi dapat malah menutup popup yang masih terbuka. Penugasan Vendor: POST create UI aktual /api/penugasan; event stop memakai /api/penugasan-tracking/<assignment>/stops/<stop>/events dengan multipart. ID hanya dari own QA hasil create/GET, jangan menebak atau mengganti endpoint dengan enum status.

Mobile observation sumber XML run OEALL: app com.phbid_darat.supir.stg; Lihat Data Order membuka identitas order/nopol, teks Isi Penugasan memiliki parent enabled=false pada QA Belum Berangkat. Koordinat Android hanya valid pada bounds snapshot terkini; periksa ancestor enabled, bukan teks anak saja. Kontrol global Sinkronkan(2) bukan kontrol per-order yang terbukti; jangan mem-flush tanpa mengetahui scope antrean.

Recheck OPSSYNC20261021064105 melalui appstest: resource-id `home_isi_penugasan_button_<assignment-id>` mengikat kartu pada assignment; full ID ada pada XML, parser uitree dapat memotong string ID. QA assignment d8329159-d74f-4884-a596-1ab56e10b05f enabled=false walaupun clickable=true. Pilih Lihat Data Order di kartu yang sama menggunakan bounds XML terkini untuk membaca TSH-ORD2557653613 / QA 4233 LC. `home_sinkronkan_button` adalah kontrol global, bukan milik kartu walaupun overlap. Jangan memakai koordinat lama. Tanggal dibaca sebagai teks dari kartu assignment yang identitasnya telah dicocokkan. Evidence mobile ada di appstest/report/OPSSYNC20261021064105; tidak ada kredensial/session web di project mobile.

OPSCOMP20261021070908: pada QA LCL Proses Pengiriman ada19kontrol editable (pengirim/penerima masing-masing perusahaan/drop point/PIC/WA/catatan, DO/deskripsi/berat/kubikasi, tanggal/harga/PPN/PPh/checkbox komponen harga). getByPlaceholder('0',{exact:true}) berurutan berat,kubikasi,harga,PPN,PPh pada form ini; jangan generalisasi urutan ke service/form lain. Desimal input memakai koma (2,75→2.75 API); titik diperlakukan pemisah ribuan. DO ditambahkan dengan Enter, setelah ada tag textbox Nomor DO placeholder kosong dan button Hapus <nomor> tersedia. Mengganti perusahaan membersihkan drop point/PIC/alamat, pilih ulang drop point sebelum mengisi override PIC/WA/catatan. Tunggu opsi master siap setelah hard navigation; snapshot awal dapat masih placeholder. Checkbox komponen harga off menyembunyikan persen dan save menyimpan PPN/PPh0. Semua selectors diobservasi dan dipakai save/pemulihan QA, bukan persetujuan pending lagi. Snapshot form dan matriks19 ada artifacts/evidence/OPSCOMP20261021070908; mobile panel expanded hanya tiga field identitas, tombol proses QA masih disabled. Setelah am start tunggu Beranda siap; capture05 splash bukan bukti nilai order.

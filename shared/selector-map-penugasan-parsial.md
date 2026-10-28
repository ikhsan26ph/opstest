# Selector live — Simpan Parsial Penugasan Tracking

Sumber: Playwright Chromium lokal, run PS20261026, OPS staging,26Oktober2026, akun1 Admin/Administrator. URL utama `/penugasan-tracking/tambah`, daftar `/penugasan-tracking`. Evidence artifacts/evidence/PS20261026. Count tergantung selectedOrder/state; tidak memakai selector OMS. Locator lama Cari Order tidak cocok; currentDOM Cari order....

| State/elemen | Locator live | Count teramati / batas |
|---|---|---|
| Daftar tambah | getByRole('button',{name:'Tambah Penugasan',exact:true}) |1|
| Cari order | getByPlaceholder('Cari order...',{exact:true}) |1|
| Pilih order | getByRole('button',{name:/^ORD2978558197/}) |1 saat QA belum lengkap;0sesudah selesai|
| Judul card | getByRole('heading',{name:'Armada 2',exact:true}) atau Kontainer2 |1selama card tampil;0jika disimpan. Nomor berubah saat reload, jangan cache label lama.|
| Scope card | heading exact.locator('..') |1 divcard aktual; memuat tepat1Simpan|
| Simpan card | scopedCard.getByRole('button',{name:'Simpan',exact:true}) |1 percard; global ambigu jika dialog terbuka|
| Simpan Semua | getByRole('button',{name:'Simpan Semua',exact:true}) |1;disabled bila jadwalFCL belum lengkap|
| Radio manual | scopedCard.getByRole('radio',{name:'Isi Data Manual',exact:true}) |2 padaFTL danFCL Door-origin;index0armada,index1sopir sesuaiDOM|
| Radio master | scopedCard.getByRole('radio',{name:'Pilih Dari Master',exact:true}) |2;scope wajib|
| Nopol master | scopedCard.getByRole('button',{name:'Pilih No. Polisi/Jenis Armada',exact:true}) |1sebelum dipilih|
| Sopir master | scopedCard.getByRole('button',{name:'Pilih Sopir/No. WhatsApp',exact:true}) |1sebelum dipilih|
| Nopol manual | scopedCard.getByPlaceholder('Masukkan No. Polisi',{exact:true}) |1setelah mode manual|
| Nama sopir FTL | scopedCard.getByPlaceholder('Masukkan Nama Sopir',{exact:true}) |1manual|
| Nama sopir FCL | scopedCard.getByPlaceholder('Nama Sopir',{exact:true}) |1manual; berbeda denganFTL|
| WhatsApp manual | scopedCard.getByPlaceholder('Contoh: 081234567898',{exact:true}) |1manual|
| No kontainer/segel | scopedCard.getByPlaceholder('Masukkan No. Kontainer'/'Masukkan No. Segel',{exact:true}) |1masing-masing|
| Mode | scopedCard.getByRole('button',{name:/^Tugaskan ke Sopir /}) / /^Tugaskan ke Pengurus / |1masing-masing;Sopir disabled pada manualtanpaWA dan CY-origin|
| Direct / Connecting | getByRole('button',{name:/^Direct Satu kapal/}) / /^Connecting Kapal/ |1masing-masing,hilang saatread-only|
| Pelayaran | getByRole('button',{name:'Pilih Pelayaran',exact:true}) |1sebelumdipilih;Meratus sesudahdipilih|
| Dropdown option | getByRole('option',{name:observedLabel,exact:true}) |1sesuaiopsi; tunggu opsi loaded|
| Opsi pelabuhan Connecting | Makassar / Balikpapan |tanpakode; opsi Buat Order Makassar(MAK) berbeda|
| Nama kapal/Voyage | getByPlaceholder('Masukkan Nama Kapal'/'Masukkan Voyage',{exact:true}) |1Direct;3dengan2connecting; index0utama1/2connecting sesuaiDOM|
| Fieldtanggal | locator('label').filter({hasText:'Closing Time'/'Berangkat (ETD)'/'Tiba (ETA)'/'ETD Connecting'}).locator('..').getByRole('button') |1perlabel kecualiETDConnectingNrow|
| Clear tanggal | dateField.locator('svg.lucide-x') |1ketikaterisi,0ketikakosong;observedDOM|
| Hari kalender | locator('div.grid.grid-cols-7').getByRole('button',{name:'26',exact:true}) |1untuk26Oktober;27–30duplikat bulanbersebelahan, pilihyangbulanaktualsesuaibukti|
| Waktu | getByRole('textbox',{name:'Waktu (24 jam)',exact:true}) |1datetimepicker;Entercommit;blur sendiri tidakcukup|
| Tambahconnecting | getByRole('button',{name:'+ Tambah Kapal Connecting',exact:true}) |1Connecting|
| Hapusconnecting | getByRole('button',{name:'Hapus',exact:true}) |2ketika2row;scope/indexsesuaibukti|
| Jadwalread-only | getByRole('button',{name:'Jadwal Kapal',exact:true}) |1;togglecollapse|
| Dialogsebelumsave | getByRole('heading',{name:'Konfirmasi Penugasan',exact:true}).locator('..') |1;h4,memuatPeriksaKembali/Simpan|
| Pop-upsesudahsave | getByRole('heading',{name:'Penugasan Berhasil',exact:true}).locator('..') |1;h4.partial2buttons,final1button|
| Navigasipartial | getByRole('button',{name:'Tugaskan Armada Lain'/'Daftar Penugasan',exact:true}) |1partial;Tugaskan0final|
| Logout | getByRole('button',{name:'Logout',exact:true}) |1;HTTP200 /login|

Basis count/state tersimpan pada snapshot SCN-0001/0002/0012/0014/0015/0019/0020/0030/0036/0042 dan snapshot11,14,17,18,20. Count bukan jaminan state berikutnya; currentcardindex direkonsiliasi kembali sesudah refresh. Simpan bisnis hanya ownQA; selectorstate read-only existing tidak dipakai untuk menyimpan orderoranglain.

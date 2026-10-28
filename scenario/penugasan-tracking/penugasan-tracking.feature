# language: id
# Dihasilkan dari penugasan-tracking_scenarios.json (artifacts/scenario-gen/pt_gen.py)
Fitur: TMS.S015 Penugasan Tracking

  @SCN-0001 @positive @high @ro @REQ-004 @REQ-005
  Skenario: SCN-0001: Daftar penugasan menampilkan 20 data per halaman dengan pagination, terbaru di atas
    Dengan prasyarat DS-15
    Ketika Login ACC-ADM
    Dan Buka menu Penugasan Tracking
    Dan Hitung baris pada halaman 1 dan periksa kontrol pagination
    Dan Bandingkan urutan baris dengan waktu pembuatan (createdAt) data
    Maka Tampil 20 baris pada halaman 1
    Dan Pagination tersedia
    Dan Urutan dari data paling baru ditambahkan

  @SCN-0002 @positive @medium @ro @REQ-015 @REQ-016
  Skenario: SCN-0002: Panel filter memuat field sesuai spec dan kosong secara default
    Ketika Buka Daftar Penugasan Tracking
    Dan Buka panel Filter
    Dan Periksa field filter dan nilainya
    Maka Tersedia field ID Order, Kota Asal, Kota Tujuan, Jenis Shipment, No. Polisi/No. Kontainer, Nama Sopir, Tanggal Mulai Tracking, Status
    Dan Seluruh field kosong
    # Ambigu/observasi: UI teramati juga memuat "Pilih Tahapan" dan "Semua Vendor" yang tidak disebut spec — dicatat sebagai observasi, bukan failed

  @SCN-0003 @positive @high @ro @REQ-017
  Skenario: SCN-0003: Filter ID Order + Terapkan menampilkan data sesuai filter
    Dengan prasyarat DS-15
    Ketika Buka panel Filter
    Dan Isi ID Order dengan ID order existing yang teramati di list
    Dan Klik "Terapkan"
    Maka Hanya baris dengan ID Order tersebut yang tampil

  @SCN-0004 @positive @medium @ro @REQ-018
  Skenario: SCN-0004: Reset mengosongkan filter dan mengembalikan list default
    Ketika Terapkan filter ID Order
    Dan Klik "Reset"
    Maka Field filter kosong
    Dan List kembali ke kondisi default (20 data halaman 1)

  @SCN-0005 @edge @low @ro @BLK-09 @REQ-014
  Skenario: SCN-0005: Opsi dropdown filter Status mengikuti daftar status
    Ketika Buka panel Filter
    Dan Buka dropdown Status
    Dan Catat seluruh opsi
    Maka Opsi memuat status Belum Berangkat, Berangkat Muat, Selesai Muat, Berangkat Bongkar, Pengiriman Selesai
    # Ambigu/observasi: Q-12: apakah Kapal Berlayar, Kapal Sandar, Dialihkan termasuk — dicatat tanpa verdict

  @SCN-0006 @positive @high @ro @REQ-019 @REQ-020 @REQ-021
  Skenario: SCN-0006: Menu Aksi baris FTL: Alihkan Armada tersedia, Tugaskan Sopir Bongkar tidak tersedia
    Ketika Buka menu Aksi (titik tiga) pada baris FTL milik vendor Nusantara
    Dan Catat item menu
    Maka Item menu termasuk dalam: Detail Penugasan, Edit Penugasan, Isi Data Tracking, Isi Kendala, Alihkan Armada, Tugaskan Sopir Bongkar, Riwayat Perubahan
    Dan "Alihkan Armada" tersedia
    Dan "Tugaskan Sopir Bongkar" tidak tersedia
    # Ambigu/observasi: Riwayat Perubahan tidak dirinci (Q-03): hanya keberadaan item yang dicek

  @SCN-0007 @positive @medium @ro @REQ-020 @REQ-021
  Skenario: SCN-0007: Menu Aksi baris LTL: Alihkan Armada tersedia, Tugaskan Sopir Bongkar tidak tersedia
    Ketika Buka menu Aksi pada baris LTL
    Dan Catat item menu
    Maka "Alihkan Armada" tersedia
    Dan "Tugaskan Sopir Bongkar" tidak tersedia

  @SCN-0008 @positive @high @ro @REQ-020 @REQ-021
  Skenario: SCN-0008: Menu Aksi baris FCL Door to Door: Tugaskan Sopir Bongkar tersedia, Alihkan Armada tidak
    Ketika Buka menu Aksi pada baris FCL dengan Metode Door to Door
    Dan Catat item menu
    Maka "Tugaskan Sopir Bongkar" tersedia
    Dan "Alihkan Armada" tidak tersedia

  @SCN-0009 @positive @medium @ro @REQ-021
  Skenario: SCN-0009: Menu Aksi baris FCL CY to Door: Tugaskan Sopir Bongkar tersedia
    Ketika Buka menu Aksi pada baris FCL Metode CY to Door (ORD0061555399 teramati)
    Dan Catat item menu
    Maka "Tugaskan Sopir Bongkar" tersedia
    Dan "Alihkan Armada" tidak tersedia

  @SCN-0010 @negative @medium @ro @REQ-021
  Skenario: SCN-0010: Menu Aksi baris FCL Door to CY: Tugaskan Sopir Bongkar tidak tersedia
    Ketika Buka menu Aksi pada baris FCL Metode Door to CY (penugasan Selesai teramati, ENV-06)
    Dan Catat item menu
    Maka "Tugaskan Sopir Bongkar" tidak tersedia
    # Ambigu/observasi: Data existing berstatus Selesai; bila hasil dipengaruhi status, ulangi pada DS-08 (Belum Berangkat)

  @SCN-0011 @positive @high @setup @REQ-001
  Skenario: SCN-0011: Shipper dengan vendor kelolaan dapat menjalankan penugasan untuk order vendor tersebut
    Dengan prasyarat DS-01
    Dengan prasyarat F-FTL-1:1
    Ketika Login ACC-ADM
    Dan Buka Tambah Penugasan
    Dan Pilih order milik vendor Nusantara (pengelola ADMIN) dari setup DS-01
    Dan Lengkapi field wajib dan Simpan
    Maka Tombol "Tambah Penugasan" tersedia
    Dan Penugasan untuk order vendor kelolaan tersimpan

  @SCN-0012 @negative @high @blocked @BLK-04 @REQ-002
  Skenario: SCN-0012: Shipper tanpa vendor kelolaan hanya dapat melihat penugasan tracking
    Ketika Login shipper yang tidak memiliki vendor pengelola ADMIN
    Dan Buka Penugasan Tracking
    Maka Akses hanya lihat (tidak dapat menambah/mengubah penugasan)

  @SCN-0013 @positive @high @setup @BLK-03 @REQ-003
  Skenario: SCN-0013: Vendor memiliki akses penuh penugasan tracking di akun vendor
    Dengan prasyarat DS-10
    Dengan prasyarat DS-11
    Ketika ACC-ADM membuat order untuk vendor PT. Ikatan Kuat (DS-10)
    Dan Login ACC-VEN
    Dan Buka Penugasan Tracking
    Dan Tambah penugasan untuk order DS-10 (armada Isi Data Manual atau master DS-11), Simpan
    Dan Buka menu Aksi penugasan tersebut
    Maka Vendor dapat menambah penugasan
    Dan Aksi penugasan (Detail, Edit, Isi Data Tracking, Isi Kendala) tersedia bagi vendor
    # Ambigu/observasi: ENV-08: tombol Tambah Penugasan tidak teramati di akun vendor sebelum DS-10; bila tetap absen setelah DS-10 → failed REQ-003

  @SCN-0014 @positive @high @ro @REQ-022
  Skenario: SCN-0014: List Pilih Order hanya menampilkan order yang belum dilakukan penugasan
    Ketika Buka Tambah Penugasan
    Dan Catat order pada list "Pilih Order"
    Dan Bandingkan dengan order yang sudah memiliki penugasan di Daftar Penugasan dan status order di menu Order
    Maka Tidak ada order yang sudah memiliki penugasan pada list "Pilih Order"
    # Ambigu/observasi: ENV-05: request list memakai status DRAFT,ASSIGNED,MENUNGGU_PENUGASAN — status order yang boleh tampil tidak dibatasi spec; dicatat sebagai observasi

  @SCN-0015 @positive @high @ro @REQ-023 @REQ-024
  Skenario: SCN-0015: Pilih order mendraft Kota Asal/Tujuan berprefix Kota/Kab. dan jenis/jumlah armada read-only
    Ketika Buka Tambah Penugasan
    Dan Pilih order FTL existing (tanpa Simpan)
    Dan Periksa Kota Asal, Kota Tujuan, Jenis Armada, Jumlah Armada
    Maka Kota Asal/Tujuan terisi dengan prefix "Kota" atau "Kab."
    Dan Jenis Armada & Jumlah Armada terisi dari order
    Dan Seluruh field hasil draft read-only
    # Ambigu/observasi: Q-14 (baru): data kota memakai "Kabupaten ..." (mis. "Kabupaten Mojokerto"), spec menyebut prefix "Kab." dengan contoh hanya "Kota" — bentuk prefix Kabupaten dicatat sebagai observasi tanpa verdict

  @SCN-0016 @positive @medium @setup @REQ-025
  Skenario: SCN-0016: Order FTL jumlah armada 2 menampilkan 2 card input armada
    Dengan prasyarat DS-02
    Ketika Siapkan DS-02
    Dan Buka Tambah Penugasan, pilih order DS-02
    Maka Tampil card "Armada 1" dan "Armada 2"

  @SCN-0017 @positive @medium @ro @REQ-026
  Skenario: SCN-0017: Order LTL menampilkan 1 card input
    Ketika Buka Tambah Penugasan
    Dan Pilih order LTL existing (tanpa Simpan)
    Maka Tampil tepat 1 card input

  @SCN-0018 @positive @medium @setup @BLK-01 @REQ-026
  Skenario: SCN-0018: Order LCL menampilkan 1 card input
    Dengan prasyarat DS-09
    Ketika Siapkan DS-09
    Dan Buka Tambah Penugasan, pilih order LCL
    Maka Tampil tepat 1 card input

  @SCN-0019 @positive @medium @ro @REQ-027 @REQ-029
  Skenario: SCN-0019: Metode Pilih Dari Master menampilkan seluruh jenis armada; Isi Data Manual menampilkan text field
    Ketika Pilih order FTL existing (tanpa Simpan)
    Dan Pilih metode "Pilih Dari Master" pada No. Polisi, buka dropdown
    Dan Bandingkan jenis armada pada opsi dengan master armada Nusantara
    Dan Ganti ke "Isi Data Manual"
    Maka Dropdown berisi armada master tanpa difilter jenis tertentu
    Dan "Isi Data Manual" menampilkan text field

  @SCN-0020 @positive @high @ro @REQ-032 @REQ-034
  Skenario: SCN-0020: Sopir Isi Data Manual: opsi Tugaskan ke Sopir disable, Tugaskan ke Pengurus tersedia
    Ketika Pilih order FTL existing (tanpa Simpan)
    Dan Isi Sopir dengan "Isi Data Manual"
    Dan Periksa opsi Mode Penugasan
    Maka "Tugaskan ke Sopir" disable
    Dan "Tugaskan ke Pengurus" dapat dipilih

  @SCN-0021 @positive @high @ro @REQ-033 @REQ-034
  Skenario: SCN-0021: Armada manual + Sopir master: kedua mode penugasan dapat dipilih
    Ketika Pilih order FTL existing (tanpa Simpan)
    Dan Isi No. Polisi dengan "Isi Data Manual"
    Dan Pilih Sopir dari master
    Dan Periksa opsi Mode Penugasan
    Maka "Tugaskan ke Sopir" dan "Tugaskan ke Pengurus" dapat dipilih

  @SCN-0022 @edge @medium @setup @REQ-028
  Skenario: SCN-0022: Sopir manual tanpa No. WhatsApp tidak menimbulkan error wajib
    Dengan prasyarat DS-01
    Dengan prasyarat F-FTL-2:1
    Ketika Pilih order DS-01
    Dan Isi No. Polisi (master), Sopir "Isi Data Manual" hanya Nama, kosongkan No. WhatsApp
    Dan Pilih "Tugaskan ke Pengurus"
    Dan Simpan
    Maka Tidak ada helper error pada No. WhatsApp sopir
    Dan Penugasan tersimpan

  @SCN-0023 @negative @high @ro @REQ-037 @REQ-040
  Skenario: SCN-0023: Simpan Tambah Penugasan FTL tanpa field wajib menampilkan helper error
    Ketika Pilih order FTL existing
    Dan Kosongkan No. Polisi, Sopir, Mode Penugasan
    Dan Klik Simpan
    Maka Field kosong menampilkan helper error dan border berwarna error
    Dan Penugasan tidak tersimpan (order tetap ada di list Pilih Order)
    # Ambigu/observasi: Teks helper tidak disebut spec (Q-13); hanya keberadaan helper & border error yang dicek

  @SCN-0024 @positive @medium @ro @REQ-038
  Skenario: SCN-0024: Batal pada Tambah Penugasan menampilkan alert konfirmasi
    Ketika Buka Tambah Penugasan, pilih order
    Dan Klik Batal
    Maka Tampil alert konfirmasi pembatalan
    # Ambigu/observasi: Pada alert, pilih opsi untuk tetap/kembali tanpa menyimpan; copy tidak dicek (Q-13)

  @SCN-0025 @positive @high @setup @REQ-039 @REQ-040 @REQ-067 @REQ-031
  Skenario: SCN-0025: Simpan Tambah Penugasan FTL valid (mode pengurus) → status awal Belum Berangkat
    Dengan prasyarat DS-01
    Dengan prasyarat F-FTL-1:1
    Ketika Pilih order DS-01
    Dan Isi No. Polisi dan Sopir dari master Nusantara
    Dan Pilih "Tugaskan ke Pengurus"
    Dan Simpan
    Dan Cari penugasan di Daftar
    Maka Penugasan tersimpan
    Dan Status penugasan "Belum Berangkat"
    Dan Order tidak lagi muncul di list Pilih Order

  @SCN-0026 @negative @high @ro @REQ-037 @REQ-041
  Skenario: SCN-0026: Simpan Tambah Penugasan FCL tanpa field wajib menampilkan helper error
    Ketika Pilih order FCL existing (tanpa menyimpan data valid)
    Dan Kosongkan No. Kontainer, No. Segel, Armada Muat, Sopir Muat, Mode Penugasan, Pilih jadwal kapal
    Dan Klik Simpan
    Maka Setiap field wajib kosong menampilkan helper error & border error
    Dan Penugasan tidak tersimpan

  @SCN-0027 @positive @medium @setup @REQ-042 @REQ-025
  Skenario: SCN-0027: Jadwal kapal FCL 2 kontainer diisi satu kali (bukan per kontainer)
    Dengan prasyarat DS-07
    Ketika Siapkan DS-07
    Dan Pilih order DS-07 di Tambah Penugasan
    Maka Tampil card "Kontainer 1" dan "Kontainer 2"
    Dan Section jadwal kapal hanya satu, tidak ada di tiap card

  @SCN-0028 @negative @medium @ro @REQ-043 @REQ-044
  Skenario: SCN-0028: Jenis Jadwal Kapal Direct tidak dapat menambah baris kapal connecting
    Ketika Pilih order FCL existing (tanpa Simpan)
    Dan Pilih Jenis Jadwal Kapal "Direct"
    Dan Cari kontrol tambah baris kapal connecting
    Maka Baris kapal connecting tidak dapat ditambahkan

  @SCN-0029 @positive @medium @ro @REQ-045 @REQ-047
  Skenario: SCN-0029: Jenis Jadwal Kapal Connecting menampilkan Data Kapal Connecting dan dapat >1 baris
    Ketika Pilih order FCL existing (tanpa Simpan)
    Dan Pilih "Connecting"
    Dan Tambah 2 baris data kapal connecting
    Maka Field "Data Kapal Connecting" muncul
    Dan Dapat lebih dari 1 baris
    # Ambigu/observasi: REQ-047 TERPOTONG (Q-05): isi field tiap baris tidak diverifikasi

  @SCN-0030 @negative @medium @ro @REQ-046
  Skenario: SCN-0030: ETD Connecting melebihi ETA kapal utama tidak diterima
    Dengan prasyarat DS-06
    Ketika Pilih order FCL existing (tanpa Simpan)
    Dan Pilih "Connecting", isi ETA kapal utama
    Dan Isi ETD Connecting setelah ETA kapal utama
    Dan Klik Simpan
    Maka Input ditolak / penugasan tidak tersimpan
    # Ambigu/observasi: Bentuk penolakan tidak disebut (Q-13); bila ternyata tersimpan → failed, lalu penugasan dibatalkan tidak mungkin — jalankan hanya pada order milik run (DS-06 buatan run)

  @SCN-0031 @positive @high @setup @REQ-056 @REQ-057 @REQ-059 @REQ-061
  Skenario: SCN-0031: Edit Penugasan saat Belum Berangkat membuka halaman penuh dan menyimpan perubahan
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-1:2
    Ketika Pada penugasan F-FTL-1 (Belum Berangkat) klik "Edit Penugasan"
    Dan Ganti sopir ke sopir master lain
    Dan Simpan
    Maka Tampil halaman penuh sama dengan Tambah Penugasan
    Dan Perubahan tersimpan dan tampil di list/detail

  @SCN-0032 @positive @low @setup @REQ-060
  Skenario: SCN-0032: Batal pada Edit Penugasan menampilkan alert konfirmasi
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-1:3
    Ketika Buka Edit Penugasan F-FTL-1
    Dan Klik Batal
    Maka Tampil alert konfirmasi

  @SCN-0033 @positive @high @setup @REQ-071 @REQ-068 @REQ-070
  Skenario: SCN-0033: Isi Data Tracking Berangkat Muat FTL menampilkan info sopir, wa sopir, nopol lalu tersimpan
    Dengan prasyarat DS-13
    Dengan prasyarat DS-12
    Dengan prasyarat F-FTL-1:4
    Ketika Klik "Isi Data Tracking" pada F-FTL-1
    Dan Periksa text info
    Dan Simpan step Berangkat Muat
    Maka Tampil text info sopir, wa sopir, nopol
    Dan Tersimpan dan tampil alert berhasil update tracking
    Dan Status menjadi "Berangkat Muat"
    # Ambigu/observasi: Q-06: kewajiban foto di Berangkat Muat tidak jelas — bila form meminta foto, unggah DS-12 dan catat

  @SCN-0034 @negative @high @setup @REQ-057 @REQ-058
  Skenario: SCN-0034: Edit Penugasan setelah Berangkat Muat menampilkan pop up tidak dapat diedit
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-1:5
    Ketika Pada F-FTL-1 (status Berangkat Muat) buka menu Aksi
    Dan Klik "Edit Penugasan"
    Maka Aksi "Edit Penugasan" tetap tampil
    Dan Tampil pop up informasi edit tidak dapat dilakukan karena sudah masuk proses pengiriman
    Dan Halaman edit tidak terbuka

  @SCN-0035 @negative @high @setup @REQ-072
  Skenario: SCN-0035: Selesai Muat FTL tanpa foto tidak tersimpan
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-1:6
    Ketika Isi Data Tracking F-FTL-1 step Selesai Muat
    Dan Jangan unggah foto
    Dan Simpan
    Maka Data tidak tersimpan (Foto Required)
    Dan Status tetap "Berangkat Muat"

  @SCN-0036 @positive @low @setup @REQ-069
  Skenario: SCN-0036: Batal pada Isi Data Tracking menampilkan alert konfirmasi
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-1:7
    Ketika Buka Isi Data Tracking F-FTL-1
    Dan Klik Batal
    Maka Tampil alert konfirmasi

  @SCN-0037 @positive @high @setup @REQ-072 @REQ-064 @REQ-070
  Skenario: SCN-0037: Selesai Muat FTL dengan foto, keterangan kosong → tersimpan
    Dengan prasyarat DS-13
    Dengan prasyarat DS-12
    Dengan prasyarat F-FTL-1:8
    Ketika Isi Data Tracking F-FTL-1 step Selesai Muat
    Dan Periksa text info
    Dan Unggah DS-12, kosongkan keterangan
    Dan Simpan
    Maka Tampil text info alamat, sopir, wa sopir, nopol
    Dan Tersimpan dengan alert berhasil
    Dan Status "Selesai Muat"

  @SCN-0038 @positive @medium @setup @REQ-083 @REQ-084 @REQ-085 @REQ-086
  Skenario: SCN-0038: Isi Kendala: halaman menampilkan card sesuai spec
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-1:9
    Ketika Klik "Isi Kendala" pada F-FTL-1
    Dan Periksa card
    Dan Buka Card Detail Armada/Kontainer
    Maka Tampil Card Detail Data Order, card berjudul "Kendala", Card Detail Armada/Kontainer (default tertutup), Card History Tracking (default tertutup, hanya lihat)
    Dan Card armada memuat No. Polisi, Nama Sopir, No. WhatsApp Sopir, Jenis Armada

  @SCN-0039 @positive @low @setup @REQ-089
  Skenario: SCN-0039: Batal pada Isi Kendala menampilkan alert konfirmasi
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-1:10
    Ketika Buka Isi Kendala F-FTL-1
    Dan Klik Batal
    Maka Tampil alert konfirmasi

  @SCN-0040 @positive @high @setup @REQ-081 @REQ-088 @REQ-090 @REQ-008
  Skenario: SCN-0040: Simpan kendala tanpa foto → tersimpan, status tetap step berjalan dengan ikon kendala
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-1:11
    Ketika Isi Kendala F-FTL-1: keterangan "QA-PT-<runId> kendala uji", tanpa foto
    Dan Simpan
    Dan Kembali ke Daftar, hover ikon di kolom Status
    Maka Tersimpan dengan alert berhasil
    Dan Status tetap "Selesai Muat"
    Dan Ikon kendala tampil dengan tooltip "Terdapat Kendala"
    # Ambigu/observasi: Q-09: keterangan diisi karena status wajib tidak jelas; tidak menguji keterangan kosong

  @SCN-0041 @negative @medium @setup @REQ-073
  Skenario: SCN-0041: Berangkat Bongkar FTL tanpa foto tidak tersimpan
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-1:12
    Ketika Isi Data Tracking F-FTL-1 step Berangkat Bongkar tanpa foto
    Dan Simpan
    Maka Data tidak tersimpan (Foto Required)

  @SCN-0042 @positive @high @setup @REQ-073
  Skenario: SCN-0042: Berangkat Bongkar FTL dengan foto → tersimpan
    Dengan prasyarat DS-13
    Dengan prasyarat DS-12
    Dengan prasyarat F-FTL-1:13
    Ketika Isi step Berangkat Bongkar: periksa field, unggah DS-12
    Dan Simpan
    Maka Form memuat Foto (Required), Keterangan (Opsional), text info sopir, wa sopir, nopol
    Dan Status "Berangkat Bongkar"

  @SCN-0043 @positive @high @setup @REQ-074 @REQ-010 @REQ-012
  Skenario: SCN-0043: Selesai Bongkar FTL → status Pengiriman Selesai; urutan status tanpa step kapal
    Dengan prasyarat DS-13
    Dengan prasyarat DS-12
    Dengan prasyarat F-FTL-1:14
    Ketika Isi step Selesai Bongkar dengan DS-12
    Dan Simpan
    Dan Lihat status di Daftar dan riwayat step di Detail
    Maka Status "Pengiriman Selesai"
    Dan Riwayat step: Berangkat Muat → Selesai Muat → Berangkat Bongkar → Selesai Bongkar tanpa Kapal Berlayar/Kapal Sandar

  @SCN-0044 @positive @high @setup @REQ-091 @REQ-092 @REQ-094 @REQ-095 @REQ-096 @REQ-097
  Skenario: SCN-0044: Detail Penugasan FTL: card, history per step, format waktu, link Detail/Edit
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-1:15
    Ketika Buka "Detail Penugasan" F-FTL-1
    Maka Tampil Card Detail Data Order, 1 card "Informasi Penugasan", Card History Tracking
    Dan History per step dengan Nopol dan waktu format DD/MM/YYYY hh:mm
    Dan Tiap step punya text link "Detail" dan "Edit"

  @SCN-0045 @positive @medium @setup @REQ-098
  Skenario: SCN-0045: Detail step: pop up data, data kosong ditampilkan "-"
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-1:16
    Ketika Pada History Tracking F-FTL-1 klik "Detail" step Selesai Muat (keterangan kosong)
    Maka Pop up berisi data step
    Dan Keterangan kosong ditampilkan "-"

  @SCN-0046 @positive @medium @setup @REQ-099
  Skenario: SCN-0046: Edit step: pop up ter-draft sesuai input sebelumnya
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-1:17
    Ketika Pada History Tracking F-FTL-1 klik "Edit" step Berangkat Bongkar
    Dan Tutup tanpa menyimpan
    Maka Pop up edit terisi data yang diinput sebelumnya

  @SCN-0047 @positive @medium @setup @REQ-030
  Skenario: SCN-0047: Penugasan mode Tugaskan ke Sopir tetap dapat dikelola melalui web
    Dengan prasyarat DS-01
    Dengan prasyarat F-FTL-3:1
    Ketika Tambah penugasan order DS-05/DS-01 kedua dengan Sopir dari master dan mode "Tugaskan ke Sopir"
    Dan Dari web lakukan Isi Data Tracking step Berangkat Muat
    Maka Penugasan tersimpan
    Dan Baris list bertanda penugasan ke sopir
    Dan Step dapat diisi dari web
    # Ambigu/observasi: Penanda teramati: title "Ditugaskan ke sopir — tampil di aplikasi Driver Hub" (tidak disebut spec; observasi)

  @SCN-0048 @positive @medium @blocked @BLK-05 @REQ-030 @REQ-031 @REQ-035 @REQ-036
  Skenario: SCN-0048: Penugasan tampil/tidak tampil di aplikasi Driver Hub sesuai Mode Penugasan
    Ketika Login Driver Hub sebagai sopir master
    Dan Periksa penugasan mode Sopir vs mode Pengurus
    Dan FCL: periksa step yang dapat dikelola sebelum/sesudah Tugaskan Sopir Bongkar
    Maka Mode Sopir tampil, mode Pengurus tidak tampil
    Dan FCL/LCL: hanya Berangkat/Selesai Muat sebelum sopir bongkar ditugaskan

  @SCN-0049 @positive @high @setup @REQ-100 @REQ-101
  Skenario: SCN-0049: Alihkan Armada: tampilan card dan section Armada Pengganti default
    Dengan prasyarat DS-13
    Dengan prasyarat DS-12
    Dengan prasyarat F-FTL-2:2
    Ketika Pada F-FTL-2 isi Berangkat Muat, Selesai Muat, Berangkat Bongkar
    Dan Klik "Alihkan Armada"
    Maka Tampil Card Detail Order, Total Berat, Total Kubikasi, Detail Armada Saat Ini, Armada Pengganti
    Dan Armada Pengganti default hanya Jenis Armada, Jumlah Armada, Berat Maks., Kubikasi Maks.

  @SCN-0050 @positive @medium @setup @REQ-102
  Skenario: SCN-0050: Alihkan Armada: detail Armada 1 muncul setelah Jumlah Armada diisi
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-2:3
    Ketika Isi Jenis Armada dan Jumlah Armada = 1
    Maka Section detail "Armada 1" muncul

  @SCN-0051 @negative @medium @setup @REQ-103
  Skenario: SCN-0051: Alihkan Armada tanpa armada/sopir tidak tersimpan
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-2:4
    Ketika Kosongkan Armada dan Sopir pada Armada 1
    Dan Simpan
    Maka Pengalihan tidak tersimpan
    # Ambigu/observasi: Q-11: master vs manual dan tampilan error tidak disebut

  @SCN-0052 @positive @high @setup @REQ-104 @REQ-105 @REQ-106 @REQ-013
  Skenario: SCN-0052: Alihkan Armada berhasil: data baru ID Order sama, lama "Dialihkan", step melanjutkan
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-2:5
    Ketika Pilih Armada dan Sopir master lain pada Armada 1
    Dan Simpan
    Dan Lihat Daftar
    Dan Buka Isi Data Tracking pada data baru
    Maka Muncul baris baru dengan ID Order sama
    Dan Baris lama berstatus "Dialihkan"
    Dan Data baru tidak mulai dari awal; armada pengganti mengisi kembali Berangkat Bongkar untuk titik bongkar yang sama

  @SCN-0053 @positive @medium @setup @REQ-107 @REQ-108
  Skenario: SCN-0053: Penanda pengalihan pada detail armada lama & baru
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-2:6
    Ketika Buka Detail Penugasan armada lama dan armada baru
    Maka Armada lama: penanda dialihkan ke armada apa saja
    Dan Armada baru: penanda hasil pengalihan dari armada apa

  @SCN-0054 @positive @medium @setup @REQ-109 @REQ-110
  Skenario: SCN-0054: History tracking setelah pengalihan: detail penugasan baru vs detail order
    Dengan prasyarat DS-13
    Dengan prasyarat F-FTL-2:7
    Ketika Buka History Tracking di Detail Penugasan data baru
    Dan Buka detail order (menu Order) untuk ID Order yang sama
    Maka Detail penugasan baru hanya segment lanjutan armada pengganti
    Dan Detail order menggabungkan history armada lama & baru

  @SCN-0055 @positive @medium @setup @REQ-062 @REQ-065 @REQ-071
  Skenario: SCN-0055: Berangkat Muat multipickup: pilih alamat; alamat terpilih tidak muncul lagi
    Dengan prasyarat DS-03
    Dengan prasyarat DS-12
    Dengan prasyarat F-MP:1
    Ketika Siapkan DS-03 dan tambah penugasan
    Dan Isi Berangkat Muat memilih alamat pick up 1, Simpan
    Dan Lanjut Selesai Muat
    Dan Isi Berangkat Muat berikutnya
    Maka Step Berangkat Muat menampilkan pilihan alamat muat
    Dan Alamat pick up 1 tidak muncul lagi pada pilihan berikutnya
    # Ambigu/observasi: Urutan step multipickup (kembali ke Berangkat Muat setelah Selesai Muat) tidak dijabarkan spec; dicatat hasil aktual

  @SCN-0056 @positive @medium @setup @REQ-062 @REQ-073
  Skenario: SCN-0056: Berangkat Bongkar multidrop: pilih alamat bongkar
    Dengan prasyarat DS-04
    Dengan prasyarat DS-12
    Dengan prasyarat F-MD:1
    Ketika Siapkan DS-04, tambah penugasan, jalankan sampai Berangkat Bongkar
    Maka Step Berangkat Bongkar menampilkan pilihan alamat bongkar

  @SCN-0057 @positive @high @setup @REQ-041 @REQ-043 @REQ-067
  Skenario: SCN-0057: Tambah Penugasan FCL Door to Door valid (Direct) → Belum Berangkat
    Dengan prasyarat DS-06
    Dengan prasyarat F-FCL:1
    Ketika Pilih order DS-06
    Dan Isi No. Kontainer & No. Segel (QA-PT-<runId>), Armada Muat & Sopir Muat dari master, Mode "Tugaskan ke Pengurus", jadwal kapal Direct
    Dan Simpan
    Maka Penugasan tersimpan, status "Belum Berangkat"

  @SCN-0058 @positive @high @setup @REQ-075 @REQ-076
  Skenario: SCN-0058: Isi Data Tracking FCL Berangkat/Selesai Muat menampilkan info kontainer
    Dengan prasyarat DS-13
    Dengan prasyarat DS-12
    Dengan prasyarat F-FCL:2
    Ketika Isi Berangkat Muat F-FCL
    Dan Isi Selesai Muat dengan DS-12
    Maka Text info memuat no kontainer, no segel, sopir, wa sopir, nopol
    Dan Selesai Muat: Foto Required, Keterangan Opsional
    # Ambigu/observasi: Q-07 catatan "[LTL tidak bisa pilih alamat]" tidak diverifikasi

  @SCN-0059 @negative @high @setup @REQ-077
  Skenario: SCN-0059: Kapal Berlayar tanpa tanggal tidak tersimpan
    Dengan prasyarat DS-13
    Dengan prasyarat F-FCL:3
    Ketika Isi step Kapal Berlayar F-FCL tanpa Tanggal Kapal Layar
    Dan Simpan
    Maka Data tidak tersimpan

  @SCN-0060 @positive @high @setup @REQ-077 @REQ-009 @REQ-011
  Skenario: SCN-0060: Kapal Berlayar valid → ikon "Siap tugaskan sopir bongkar" di list
    Dengan prasyarat DS-13
    Dengan prasyarat F-FCL:4
    Ketika Isi Kapal Berlayar: tanggal diisi, info kapal & voyage dapat diubah, foto & keterangan kosong
    Dan Simpan
    Dan Lihat baris di Daftar
    Maka Tersimpan; status "Kapal Berlayar"
    Dan Ikon alert "Siap tugaskan sopir bongkar" tampil di kolom Status

  @SCN-0061 @positive @high @setup @REQ-078
  Skenario: SCN-0061: Kapal Sandar tanpa tanggal tidak tersimpan; dengan tanggal tersimpan
    Dengan prasyarat DS-13
    Dengan prasyarat F-FCL:5
    Ketika Isi Kapal Sandar tanpa tanggal → Simpan
    Dan Isi tanggal → Simpan
    Maka Tanpa tanggal: tidak tersimpan
    Dan Dengan tanggal: status "Kapal Sandar"
    # Ambigu/observasi: Q-08: perilaku field kapal utama/connecting hanya dicatat

  @SCN-0062 @negative @high @setup @REQ-055
  Skenario: SCN-0062: Berangkat Bongkar FCL tidak dapat diisi sebelum sopir bongkar ditugaskan
    Dengan prasyarat DS-13
    Dengan prasyarat F-FCL:6
    Ketika Pada F-FCL (Kapal Sandar, belum ada sopir bongkar) klik Isi Data Tracking
    Maka Step Berangkat Bongkar tidak dapat dilakukan

  @SCN-0063 @negative @high @setup @REQ-048 @REQ-049 @REQ-050 @REQ-051 @REQ-052
  Skenario: SCN-0063: Tugaskan Sopir Bongkar: field read-only dan field wajib
    Dengan prasyarat DS-13
    Dengan prasyarat F-FCL:7
    Ketika Klik "Tugaskan Sopir Bongkar" pada F-FCL
    Dan Periksa No. Kontainer, No. Segel, Mode Penugasan
    Dan Simpan dengan Tanggal Permintaan Bongkar, Armada Bongkar, Sopir Bongkar kosong
    Maka No. Kontainer, No. Segel, Mode Penugasan read-only
    Dan Penugasan bongkar tidak tersimpan

  @SCN-0064 @positive @high @setup @REQ-053 @REQ-006 @REQ-007 @REQ-009
  Skenario: SCN-0064: Tugaskan Sopir Bongkar valid dengan sopir berbeda → ikon hilang, badge +1, hover Sopir Asal/Tujuan
    Dengan prasyarat DS-13
    Dengan prasyarat F-FCL:8
    Ketika Isi Tanggal Permintaan Bongkar, Armada Bongkar & Sopir Bongkar (master, sopir berbeda dari sopir muat)
    Dan Simpan
    Dan Lihat baris di Daftar, hover badge sopir
    Maka Tersimpan
    Dan Ikon "Siap tugaskan sopir bongkar" tidak tampil
    Dan Kolom Sopir menampilkan badge "+1"
    Dan Hover menampilkan "Sopir Asal" dan "Sopir Tujuan"

  @SCN-0065 @positive @medium @setup @REQ-053 @REQ-054
  Skenario: SCN-0065: Tugaskan Sopir Bongkar dapat diedit sebelum Berangkat Bongkar
    Dengan prasyarat DS-13
    Dengan prasyarat F-FCL:9
    Ketika Buka lagi "Tugaskan Sopir Bongkar" F-FCL
    Dan Ubah Tanggal Permintaan Bongkar
    Dan Simpan
    Maka Perubahan tersimpan

  @SCN-0066 @negative @high @setup @REQ-054
  Skenario: SCN-0066: Tugaskan Sopir Bongkar tidak dapat diedit setelah Berangkat Bongkar
    Dengan prasyarat DS-13
    Dengan prasyarat DS-12
    Dengan prasyarat F-FCL:10
    Ketika Isi Berangkat Bongkar F-FCL
    Dan Buka "Tugaskan Sopir Bongkar"
    Maka Proses edit tidak dapat dilakukan
    # Ambigu/observasi: Q-07: Berangkat Bongkar FCL bertanda "Multipickup" — hanya dicatat

  @SCN-0067 @positive @high @setup @REQ-080 @REQ-011 @REQ-012
  Skenario: SCN-0067: Selesai Bongkar FCL → Pengiriman Selesai; urutan status FCL lengkap
    Dengan prasyarat DS-13
    Dengan prasyarat DS-12
    Dengan prasyarat F-FCL:11
    Ketika Isi Selesai Bongkar dengan DS-12
    Dan Lihat status & history
    Maka Status "Pengiriman Selesai"
    Dan Urutan: Belum Berangkat → Berangkat Muat → Selesai Muat → Kapal Berlayar → Kapal Sandar → Berangkat Bongkar → Pengiriman Selesai

  @SCN-0068 @positive @high @setup @REQ-093
  Skenario: SCN-0068: Detail Penugasan FCL: card Informasi Penugasan Muat & Bongkar
    Dengan prasyarat DS-13
    Dengan prasyarat F-FCL:12
    Ketika Buka Detail Penugasan F-FCL
    Maka Tampil card "Informasi Penugasan Muat" dan "Informasi Penugasan Bongkar"

  @SCN-0069 @positive @medium @setup @REQ-087
  Skenario: SCN-0069: Isi Kendala FCL: card armada/kontainer memuat data kontainer
    Dengan prasyarat DS-13
    Dengan prasyarat F-FCL:3b
    Ketika Pada F-FCL (sebelum selesai) buka "Isi Kendala", buka Card Detail Armada/Kontainer
    Dan Batal tanpa menyimpan
    Maka Card memuat Jenis Kontainer, No. Kontainer, No. Segel, dan No. Polisi, Nama Sopir, No. WhatsApp Sopir, Jenis Armada

  @SCN-0070 @edge @low @ro @REQ-068
  Skenario: SCN-0070: Isi Data Tracking penugasan tanpa data sopir menghilangkan info sopir
    Dengan prasyarat DS-14
    Ketika Buka Isi Data Tracking pada penugasan FCL CY to Door tanpa sopir (DS-14)
    Dan Tutup tanpa Simpan
    Maka Info sopir tidak ditampilkan

  @SCN-0071 @positive @medium @setup @BLK-01 @REQ-026 @REQ-041 @REQ-021 @REQ-011
  Skenario: SCN-0071: Flow LCL Door to Door: tambah, muat, kapal, tugaskan sopir bongkar
    Dengan prasyarat DS-09
    Dengan prasyarat DS-12
    Dengan prasyarat F-LCL:1
    Ketika Siapkan DS-09
    Dan Tambah penugasan LCL (1 card), Simpan
    Dan Isi Berangkat Muat, Selesai Muat, Kapal Berlayar, Kapal Sandar
    Dan Cek menu Aksi
    Dan Tugaskan Sopir Bongkar, lalu Berangkat & Selesai Bongkar
    Maka 1 card input
    Dan "Tugaskan Sopir Bongkar" tersedia; "Alihkan Armada" tidak
    Dan Urutan status sama dengan FCL

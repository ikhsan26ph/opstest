# TMS.S015 — Penugasan Tracking

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 91–101.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S015 |
| PIC | EL |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-09 |
| Jenis Fitur / No Desain (kolom E) | 127. Daftar Penugasan Tracking FTL & LTL; No Desain: 127 - 141 |
| Jumlah blok rule | 11 |

## Cakupan (kolom B)

```
Penugasan Tracking 
1. List dan filter
2. Form tambah, edit, isi data tracking, isi kendala, alihkan armada
3. Ganti armada, ganti sopir, ganti armada + sopir
4. Pilih armada, sopir, dan data order
5. Kondisi FTL, FCL, LTL, LCL
```

## Rincian spesifikasi

### TMS.S015-R01 · Pendahuluan

Ref: `Spek TMS-S!A91:I91` · No: 1 · Tipe: Pendahuluan · Kolom E: 127. Daftar Penugasan Tracking FTL & LTL · Spesifikasi Selesai: 2026-07-09

```text
Pada ID ini menjelaskan terkait penugasan tracking
```

### TMS.S015-R02 · Akses:

Ref: `Spek TMS-S!A92:I92` · No: 2 · Tipe: Rule · Spesifikasi Selesai: 2026-07-09

```text
Akses: 
1. Shipper: 
- Jika ada vendor yang dikelolah oleh shipper (admin) maka menu penugasan bisa dijalankan oleh shipper tersebut saat penugasan ke vendor yang dihandle 
- Contoh: Vendor JNE dikelolah oleh admin. Sehingga setiap order yang ditujukan ke JNE, maka menu penugasan tracking untuk order JNE bisa dijalankan shipper. Sehingga shipper memiliki hak akses penuh pada penugasan tracking pada order JNE 
- Jika tidak ada vendor yang dikelolah shipper (admin), maka akses shipper hanya lihat pada menu penugasan tracking 

2. Vendor:
- Di akun vendor, mereka memiliki akses penuh pada penugasan tracking
```

### TMS.S015-R03 · Halaman Daftar Penugasan Tracking

Ref: `Spek TMS-S!A93:I93` · No: 3 · Tipe: Rule · Kolom E: No Desain: 127 - 141 · Spesifikasi Selesai: 2026-07-09

```text
Halaman Daftar Penugasan Tracking Terdapat rule:

1. Default data yang tampil 20 data per halaman, tersedia pagination.
2. Urutan list data default berdasarkan data yang paling baru ditambahkan.
3. Kolom "Sopir" dapat menampilkan lebih dari 1 nama (badge "+1") apabila penugasan memiliki lebih dari 1 sopir (misal sopir muat & sopir bongkar berbeda pada FCL/LCL) 4. Hover pada badge menampilkan detail "Sopir Asal" dan "Sopir Tujuan".
5. Ikon kendala tampil pada kolom Status saat penugasan memiliki kendala yang dilaporkan - tooltip "Terdapat Kendala".
6. Ikon alert "Siap tugaskan sopir bongkar" tampil pada kolom Status saat penugasan FCL/LCL sudah mencapai step "Kapal Berlayar" namun belum ditugaskan sopir/armada bongkar.
7. Definisi Kolom "Status"
- Untuk FTL/LTL, step "Kapal Berlayar" dan "Kapal Sandar" tidak berlaku (dilewati) - urutan status: Belum Berangkat → Berangkat Muat → Selesai Muat → Berangkat Bongkar → Pengiriman Selesai.
- Untuk FCL/LCL, seluruh step berlaku: Belum Berangkat → Berangkat Muat → Selesai Muat → Kapal Berlayar → Kapal Sandar → Berangkat Bongkar → Pengiriman Selesai.
- Status "Pengiriman Selesai" digunakan sebagai label step terakhir (menggantikan istilah "Selesai Bongkar" pada proses input di Isi Data Tracking).
- "Dialihkan" adalah status override yang menggantikan status manapun saat armada dialihkan.
- Dropdown filter "Status" pada Daftar Penugasan Tracking menggunakan daftar value yang sama seperti di atas.
8. Filter penugasan tracking:
- Field filter: ID Order, Kota Asal, Kota Tujuan, Jenis Shipment, No. Polisi/No. Kontainer, Nama Sopir, Tanggal Mulai Tracking, Status.
- Secara default seluruh field filter kosong.
- Button "Terapkan" menampilkan data sesuai filter; button "Reset" mengosongkan filter & mengembalikan ke kondisi default.
```

### TMS.S015-R04 · Aksi pada Daftar Penugasan Tracking

Ref: `Spek TMS-S!A94:I94` · No: 4 · Tipe: Rule · Spesifikasi Selesai: 2026-07-09

```text
Aksi pada Daftar Penugasan Tracking Terdapat Rule:

1. Aksi yang tersedia (menu titik tiga per baris): 
- Detail Penugasan
- Edit Penugasan
- Isi Data Tracking
- Isi Kendala
- Alihkan Armada
- Tugaskan Sopir Bongkar
- Riwayat Perubahan.

2. Terdapat rule ketersediaan aksi per jenis shipment:
- "Alihkan Armada" hanya tersedia untuk jenis pengiriman FTL & LTL.
- "Tugaskan Sopir Bongkar" hanya tersedia untuk jenis pengiriman FCL & LCL yang membutuhkan penugasan armada pada step bongkar (Metode Pengiriman Door to Door atau CY to Door).
```

### TMS.S015-R05 · Tambah Penugasan - Ketentuan Umum (Seluruh Jenis Pengiriman)

Ref: `Spek TMS-S!A95:I95` · No: 5 · Tipe: Rule · Spesifikasi Selesai: 2026-07-09

```text
Tambah Penugasan - Ketentuan Umum (Seluruh Jenis Pengiriman) Terdapat rule:

1. Pada list "Pilih Order", hanya tampil order yang belum dilakukan penugasan.
2. Setelah memilih order, Kota Asal, Kota Tujuan, Jenis Armada/Kontainer, dan Jumlah Armada/Kontainer otomatis terdraft dari data order (read-only).
3. Kota Asal & Kota Tujuan hasil draft harus menyertakan prefix "Kota" atau "Kab." (contoh: jika di card order tertulis "Surabaya - Semarang", maka Kota Asal terisi "Kota Surabaya" dan Kota Tujuan "Kota Semarang").
4.Jumlah card input Armada/Kontainer (misal "Armada 1", "Kontainer 1", dst.) mengikuti Jumlah Armada/Kontainer pada order yang dipilih 
5. Untuk jenis LTL & LCL selalu 1 card
6. Untuk field No. Polisi/Jenis Armada dan Sopir, tersedia 2 metode pengisian per card:
"Pilih Dari Master" => dropdown mengambil dari data master.
"Isi Data Manual" => text field, diisi manual. Untuk Sopir manual, field No. WhatsApp bersifat opsional (tidak wajib).
7. Saat memilih armada dari master, seluruh jenis armada yang ada ditampilkan sebagai pilihan (tidak difilter jenis tertentu).
8. Mode Penugasan tersedia 2 pilihan:
- Tugaskan ke Sopir => penugasan tampil di aplikasi Driver Hub, dan tetap dapat dikelola pengurus melalui web.
- Tugaskan ke Pengurus => penugasan hanya dapat dikelola melalui web oleh pengurus, tidak tampil pada aplikasi Driver Hub.
9. Rule disable Mode Penugasan: 
- Opsi "Tugaskan ke Sopir" menjadi disable hanya jika field Sopir diisi manual (karena tidak ada akun sopir untuk menerima penugasan di Driver Hub). 
- Jika Armada diisi manual namun Sopir tetap dipilih dari master, opsi "Tugaskan ke Sopir" tetap dapat dipilih. 
- "Tugaskan ke Pengurus" selalu tersedia terlepas dari kondisi manual/master.
10. Untuk jenis pengiriman FCL & LCL Jika ditugaskan ke sopir, sopir hanya dapat mengelola tahap "Berangkat Muat" dan "Selesai Muat" melalui Driver Hub. Penugasan sopir bongkar dilakukan terpisah melalui menu "Tugaskan Sopir Bongkar". Baru sopir bisa mengelolah tahap "Berangkat Bongkar dan "Selesai Bongkar". 
11. Jika field required tidak diisi: tampilkan helper error & border field berubah warna error.
12. Fungsi button: Batal (membatalkan proses, tampil alert konfirmasi), Simpan (menyimpan data penugasan).

Tambah Penugasan FTL&LTL:
1. Field yang harus dilengkapi saat tambah penugasan:
- No. Polisi (pilih master/manual)  => Required
- Sopir (pilih master/manual)  => Required
- Mode Penugasan  => Required

Tambah Penugasan FCL&LCL:
1. Field yang harus dilengkapi saat tambah penugasan:
- No. Kontainer => Required
- No. Segel  => Required
- Armada Muat (Nopol) (pilih master/manual)  => Required
- Sopir Muat (pilih master/manual)  => Required
- Mode Penugasan  => Required
- Pilih jadwal kapal  => Required
2. Rule Jadwal kapal:
- Jadwal kapal bukan per-kontainer
- Jenis Jadwal Kapal (wajib, pilih salah satu): Direct atau Connecting.
- Direct => tidak dapat menambahkan baris data kapal connecting.
- Connecting => dapat menambahkan baris data kapal connecting, dengan syarat ETD Connecting tidak boleh melebihi ETA kapal utama.
- Field "Data Kapal Connecting" (muncul saat pilih Connecting, dapat lebih dari 1 baris
```

### TMS.S015-R06 · Tugaskan Sopir Bongkar

Ref: `Spek TMS-S!A96:I96` · No: 6 · Tipe: Rule · Spesifikasi Selesai: 2026-07-09

```text
Tugaskan Sopir Bongkar Terdapat rule:

1. Action menu ini digunakan untuk menugaskan sopir/armada untuk step "Berangkat Bongkar" dan "Selesai Bongkar".
2. Hanya muncul pada jenis pengiriman FCL & LCL yang membutuhkan armada pada step bongkar (Metode Pengiriman Door to Door atau CY to Door).
3. Data No. Kontainer, No. Segel, dan Mode Penugasan yang sudah diisi pada proses Tambah Penugasan ditampilkan read-only (tidak dapat diubah di sini).
4. Field yang diisi: Tanggal Permintaan Bongkar (wajib), Armada Bongkar (wajib, pilih master/manual), Sopir Bongkar (wajib, pilih master/manual).
5. Action menu ini juga berfungsi sebagai aksi edit penugasan sopir bongkar, dengan batasan hanya dapat diedit sampai status "Berangkat Bongkar" - setelah step tersebut ter-update, proses edit tidak dapat dilakukan lagi.
6. Selama pengiriman membutuhkan armada bongkar namun belum ditugaskan sopir/armada bongkar, proses "Isi Data Tracking" pada step Berangkat bongkar tidak dapat dilakukan.
7. Saat status sudah masuk "Kapal Berlayar", list penugasan menampilkan ikon alert "Siap tugaskan sopir bongkar" sebagai pengingat.
```

### TMS.S015-R07 · Edit Penugasan

Ref: `Spek TMS-S!A97:I97` · No: 7 · Tipe: Rule · Spesifikasi Selesai: 2026-07-09

```text
Edit Penugasan Terdapat rule:

1. Dapat melakukan pengeditan pada seluruh data penugasan tracking.
2. Hanya dapat dilakukan selama status tracking masih "Belum Berangkat".
3. Setelah tidak dapat diedit lagi, aksi "Edit Penugasan" tetap tampil pada menu aksi, namun saat diklik menampilkan pop up informasi bahwa proses edit tidak dapat dilakukan karena sudah masuk proses pengiriman.
4. Tampilan Edit berupa halaman penuh, sama dengan tampilan proses Tambah Penugasan.
5. Fungsi button: Batal (alert konfirmasi), Simpan (menyimpan perubahan).
```

### TMS.S015-R08 · Isi Data Tracking

Ref: `Spek TMS-S!A98:I98` · No: 8 · Tipe: Rule · Spesifikasi Selesai: 2026-07-09

```text
Isi Data Tracking Terdapat rule:

1. Step pengisian: 
- Memilih alamat muat/bongkar (khusus step Berangkat Muat & Berangkat Bongkar, untuk mengcover kebutuhan multipickup/multidrop)
- Upload foto (wajib)
- Isi keterangan (tidak wajib).
2. Alamat yang sudah pernah dipilih tidak akan tampil lagi pada pilihan alamat berikutnya.
3. Pengisian data tracking tidak dibedakan menjadi card per kota - dibagi per tahapan tracking saja (mengikuti pola FCL/LCL yang sudah ada).
4. Status awal seluruh penugasan tracking adalah "Belum Berangkat".
5. Step tracking FTL/LTL: 
- Berangkat Muat => Pilih alamat (Kondisi: Multipickup), Tampil text info (sopir, wa sopir, nopol)
- Selesai Muat =>  Foto (Required), Keterangan (Opsional), Tampil text info (alamat, sopir, wa sopir, nopol)
- Berangkat Bongkar => Pilih alamat (Kondisi: Multidrop), Foto (Required), Keterangan (Opsional), Tampil text info (sopir, wa sopir, nopol)
- Selesai Bongkar =>  Foto (Required), Keterangan (Opsional), Tampil text info (alamat, sopir, wa sopir, nopol)
6. Step tracking FCL/LCL: 
- Berangkat Muat => Tampil text info (no kontainer,  no segel, sopir, wa sopir, nopol), Pilih alamat (Kondisi: Multipickup), *[LTL tidak bisa pilih alamat]
- Selesai Muat =>Tampil text info (alamat, no kontainer,  no segel, sopir, wa sopir, nopol), Foto (Required), Keterangan (Opsional)
Kapal Berlayar => Tampil field info kapal utama (bisa diubah), voyage (Bisa diubah), Field  inputan Tanggal Kapal Layar (Required), Foto (Opsional), Keterangan (Opsional)
Kapal Sandar => Tampil field info kapal utama (disable) / connecting terakhir (bisa diubah), voyage kapal utama (disable) / voyaga connecting terakhir  (Bisa diubah), Field  inputan Tanggal Kapal Sandar (Required), Foto (Opsional), Keterangan (Opsional)
Berangkat Bongkar  => Tampil text info (no kontainer,  no segel, sopir, wa sopir, nopol), Pilih alamat (Kondisi: Multipickup), *[LTL tidak bisa pilih alamat]
Selesai Bongkar =>Tampil text info (alamat, no kontainer,  no segel, sopir, wa sopir, nopol), Foto (Required), Keterangan (Opsional)
7. Jika memiliki data sopir tampilkan, jika tidak dihilangkan
7. Fungsi button: Batal (alert konfirmasi), Simpan (menyimpan data, tampil alert berhasil update tracking).
```

### TMS.S015-R09 · Isi Kendala

Ref: `Spek TMS-S!A99:I99` · No: 9 · Tipe: Rule · Spesifikasi Selesai: 2026-07-09

```text
Isi Kendala Terdapat rule:

1. Step pengisian: Input foto (tidak wajib), Input keterangan.
2. Data yang tampil pada halaman: Card Detail Data Order, Card Pengisian Data Tracking (judul "Kendala"), Card Detail Armada/Kontainer (default tertutup), Card History Tracking (default tertutup, hanya dapat melihat detail).
3. Rule Card Detail Armada/Kontainer:
FTL/LTL => No. Polisi, Nama Sopir, No. WhatsApp Sopir, Jenis Armada.
FCL/LCL => No. Polisi (jika menggunakan armada), Nama Sopir (jika menggunakan armada), No. WhatsApp Sopir (jika menggunakan armada), Jenis Armada (jika menggunakan armada), Jenis Kontainer, No. Kontainer, No. Segel.
4. Kendala melekat pada step tracking yang sedang berjalan saat itu - status tracking tetap menampilkan step yang sedang berjalan, namun disertai ikon kendala.
5. Fungsi button: Batal (alert konfirmasi), Simpan (menyimpan data, tampil alert berhasil).
```

### TMS.S015-R10 · Detail Penugasan Tracking

Ref: `Spek TMS-S!A100:I100` · No: 10 · Tipe: Rule · Spesifikasi Selesai: 2026-07-09

```text
Detail Penugasan Tracking Terdapat rule:

1. Dapat melakukan: 
- Lihat detail data penugasan
- Edit tracking tiap step
- Lihat detail tracking tiap step.

2. Data yang tampil: Card Detail Data Order, Card Informasi Penugasan, Card History Tracking.
3. Untuk FCL/LCL, Card Informasi Penugasan terpisah menjadi 2: "Informasi Penugasan Muat" dan "Informasi Penugasan Bongkar". Untuk FTL/LTL, tetap 1 card "Informasi Penugasan" (tidak dipisah Muat/Bongkar karena penugasan armada hanya sekali).
4. Rule Card History Tracking:
- Tampil per step tracking.
- Step tracking yang tampil menyesuaikan tracking yang ada pada order tersebut.
- Setiap step menampilkan Nopol/No. Kontainer dan waktu update tracking (format DD/MM/YYYY hh:mm).
- Terdapat text link "Detail" dan "Edit" pada tiap step.
5. Lihat Detail & Edit pada Step Tracking (History Tracking) Terdapat rule:
- Lihat Detail => menampilkan pop up berisi data pada step tracking terpilih. Data yang tidak terisi ditampilkan strip (-).
- Edit => menampilkan pop up untuk mengedit data pada step tersebut. Data ter-draft sesuai inputan sebelumnya pada step tracking tersebut.
```

### TMS.S015-R11 · Alihkan Armada

Ref: `Spek TMS-S!A101:I101` · No: 11 · Tipe: Rule · Spesifikasi Selesai: 2026-07-09

```text
Alihkan Armada Terdapat rule (khusus FTL & LTL):

1. Data yang tampil: Card Detail Order, Card Total Berat (total berat keseluruhan order yang dibawa), Card Total Kubikasi (total volume keseluruhan order yang dibawa), Card Detail Armada Saat Ini, Card Armada Pengganti
2. Section Armada Pengganti secara default hanya menampilkan field Jenis Armada, Jumlah Armada, Berat Maks., Kubikasi Maks. Section detail Armada 1 dst. muncul setelah field Jumlah Armada diisi.
3. Armada dan Sopir wajib dipilih.
4. Hasil pengalihan armada menghasilkan data baru pada list Penugasan Tracking, dengan ID Order yang sama.
5. Step tracking pada data baru melanjutkan dari step tracking armada sebelumnya (tidak mulai dari awal) namun menyesuaikan titik muat / bongkar nya. 
6. Pada detail penugasan, Armada lama akan ada penanda bahwa armada ini telah dialihkan ke armada apa saja 
7. Pada detail penugasan,  Armada hasil pengalihan akan ada penanda bahwa armada ini hasil pengalihan dari armada apa 
8. Tracking akan melanjutkan dari armada sebelumnya, mengikat setiap titik muat / bongkar. Contoh: Armada A sudah berangkat bongkar ke gudang jkt. Ternyata ada proses langsir armada di tengah perjalanan ke tempat bongkar, sehingga melakukan pengalihan armada. Sehingga armada B harus mengisi kembali berangkat bongkar untuk ke gudang jkt 
9. History Tracking pada detail penugasan pada data baru hanya berisi segment lanjutan yang akan diantarkan armada pengganti - history tracking armada sebelumnya tidak ditampilkan pada data baru ini. Namun history tracking pada detail order menggabungkan keduanya (data armada lama & baru)
```

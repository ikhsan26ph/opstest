# TMS.S018 — Dashboard Monitoring & Tracking Location

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 109–120.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S018 |
| PIC | EL |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-13 |
| Jenis Fitur / No Desain (kolom E) | 158. Dashboard Monitoring; No Desain: 158 - 160 |
| Jumlah blok rule | 12 |

## Cakupan (kolom B)

```
Dashboard Monitoring & Tracking Location
1. Terdapat Prediksi Line 
2. Alert Armada Keluar Jalur
3. Armada mendekati lokasi muat & lokasi bongkar. Tau armada lagi di posisi mana
```

## Rincian spesifikasi

### TMS.S018-R01 · Pendahuluan

Ref: `Spek TMS-S!A109:I109` · No: 1 · Tipe: Pendahuluan · Kolom E: 158. Dashboard Monitoring · Spesifikasi Selesai: 2026-07-13

```text
Pada ID ini menjelaskan terkait penyesuaian pada menu dashboard. Mulai dari adanya penambahan informasi yang tampil, hingga penambahan sub menu
```

### TMS.S018-R02 · Perubahan Utama:

Ref: `Spek TMS-S!A110:I110` · No: 2 · Tipe: Rule · Kolom E: No Desain: 158 - 160 · Spesifikasi Selesai: 2026-07-13

```text
Perubahan Utama:

1. Terdapat 2 scorecard dan jenis kasus baru pada Monitoring: Keluar Jalur & Potensi Terlambat.
2. Terdapat submenu baru pada Dashboard: Progres Pengiriman (bar chart progres perjalanan).
3. Tracking & Location menampilkan segmen jalur di luar prediksi rute.
4. Data FTL & LTL mengambil data nopol; FCL & LCL mengambil data no. kontainer.
```

### TMS.S018-R03 · General Rules:

Ref: `Spek TMS-S!A111:I111` · No: 3 · Tipe: Rule · Spesifikasi Selesai: 2026-07-13

```text
General Rules:

1. Order yang masuk dashboard: FTL, FCL, LTL, LCL.
2. Data yang tampil pada dashboard adalah armada untuk darat, dan kontainer untuk laut.
3. Meskipun kontainer menggunakan armada, data yang tampil saat hover tetap data kontainer. Namun saat pengiriman terdapat armada yang digunakan maka akan tampil nopol nya 
4. Seluruh rule general sebelumnya tetap berlaku (auto-update, last update timestamp, threshold GPS offline, refresh manual, zoom, fullscreen, filter by customer).
```

### TMS.S018-R04 · Scorecard Monitoring:

Ref: `Spek TMS-S!A112:I112` · No: 4 · Tipe: Rule · Spesifikasi Selesai: 2026-07-13

```text
Scorecard Monitoring:

1. Scorecard yang ditampilkan:
- Total Armada
- Tidak Update
- Melewati SLA
- Jumlah Kendala
- Keluar Jalur (baru)
- Potensi Terlambat (baru)

2. Rule Scorecard Total Armada, Tidak Update, Melewati SLA, dan Kendala mengikuti spesifikasi sebelumnya.

3. Rule Scorecard Keluar Jalur:
- Armada/kontainer dihitung "Keluar Jalur" apabila status keluar jalur terkonfirmasi (lihat Rule Deteksi Keluar Jalur).
- Data otomatis hilang dari scorecard apabila: 
=> Armada kembali masuk ke koridor toleransi prediksi rute
=> Status order selesai / completed.

4. Rule Scorecard Potensi Terlambat:
- Armada/kontainer dihitung "Potensi Terlambat" apabila proyeksi waktu tiba > SLA, sedangkan waktu berjalan belum melewati SLA.
- Data otomatis hilang dari scorecard apabila:
=> Proyeksi waktu tiba kembali ≤ SLA.
=> Waktu berjalan sudah melewati SLA => berpindah ke scorecard "Melewati SLA".
=> Status order selesai / completed.
```

### TMS.S018-R05 · Legenda Status / Filter Tahapan:

Ref: `Spek TMS-S!A113:I113` · No: 5 · Tipe: Rule · Spesifikasi Selesai: 2026-07-13

```text
Legenda Status / Filter Tahapan:

1. Legenda status pada Monitoring ditambah 2 status baru: Keluar Jalur & Potensi Terlambat.
2. Daftar legenda status:
- Semua Tahapan => tampilan default terpilih
- Berangkat Muat
- Selesai Muat
- Berangkat Bongkar
- Selesai Bongkar
- Kendala
- Keluar Jalur (baru)
- Potensi Terlambat (baru)
- Tidak Update
- Melewati SLA
3. Legenda menampilkan warna status, nama status, dan jumlah armada per status.
4. Digunakan untuk memfilter armada mana yang ditampilkan pada maps.
```

### TMS.S018-R06 · Card Data Kasus

Ref: `Spek TMS-S!A114:I114` · No: 6 · Tipe: Rule · Spesifikasi Selesai: 2026-07-13

```text
Card Data Kasus

1. Jenis kasus yang tampil pada Data Kasus:
- Kendala (issue dari driver)
- Tidak Update
- Melewati SLA
- Keluar Jalur (baru)
- Berisiko Terlambat (baru)

2. Data yang ditampilkan per kasus:
- Nopol / No. Kontainer
- Nama driver
- Deskripsi kasus
- Waktu laporan
- Badge jenis kasus
- Button Lacak

3. Rule Deskripsi Kasus:
- Kendala => deskripsi issue dari driver.
- Tidak Update => default text berdasarkan durasi offline.
- Melewati SLA => default text berdasarkan durasi keterlambatan.
- Keluar Jalur => default text berdasarkan durasi keluar jalur + jarak dari titik prediksi rute terdekat.
- Berisiko Terlambat => default text berdasarkan proyeksi durasi keterlambatan terhadap SLA.

4. Dropdown filter jenis kasus:
- Semua Kasus => default
- Kendala
- Tidak Update
- Melewati SLA
- Keluar Jalur
- Berisiko Terlambat

5. Filter hanya berlaku pada card Data Kasus, dan data otomatis terfilter saat pilihan filter berubah.
6. Terdapat button "Riwayat" untuk melihat histori kasus.
7. Rule Button Lacak:
- Saat diklik => redirect ke halaman Tracking & Location berdasarkan armada/order terkait.
- Untuk kontainer yang tidak menggunakan armada (tidak ditugaskan ke sopir) => button Lacak disable dan saat hover tampil tooltip "Tersedia jika ditugaskan ke sopir".
8. Satu armada/kontainer dapat memiliki lebih dari satu kasus, dan tampil sebagai baris kasus terpisah.
```

### TMS.S018-R07 · Card Armada Terdekat

Ref: `Spek TMS-S!A115:I115` · No: 7 · Tipe: Rule · Spesifikasi Selesai: 2026-07-13

```text
Card Armada Terdekat

1. Card menampilkan armada/kontainer yang mendekati lokasi muat dan lokasi bongkar.
2. Terdapat filter tab: Semua (default) / Lokasi Muat / Lokasi Bongkar.
3. Terdapat dropdown pencarian nopol/no. kontainer.
4. Data yang ditampilkan per armada:
- Nopol / No. Kontainer
- Jarak ke lokasi muat / lokasi bongkar
- Lokasi Muat atau Lokasi Bongkar (sesuai tujuan terdekat)
- Lokasi Saat Ini => alamat lengkap posisi armada saat ini (baru)
5. Alamat pada "Lokasi Saat Ini" dapat di-expand/collapse (Lihat / Tutup).
6. Data kontainer juga tampil pada card ini.
7. Radius armada terdekat mengikuti pengaturan radius (default 5 km).
8. Data Barang (Armada Terdekat)
- Data barang hanya ada satu di setiap order, tetap menggunakan pop up.
- Data yang ditampilkan: ID Order, Deskripsi Barang, Nomor DO
```

### TMS.S018-R08 · Rule Prediksi Rute

Ref: `Spek TMS-S!A116:I116` · No: 8 · Tipe: Rule · Spesifikasi Selesai: 2026-07-13

```text
Rule Prediksi Rute

1. Saat order dibuat, alamat muat & alamat bongkar menghasilkan prediksi rute ke tujuan.
2. Sistem menyimpan hasil prediksi rute sebagai acuan pemantauan:
- Geometri rute (garis prediksi rute ke tujuan)
- Prediksi jarak tempuh
- Prediksi waktu tempuh
3 Prediksi rute digunakan oleh dua fitur: Deteksi Keluar Jalur dan Progres Pengiriman.
```

### TMS.S018-R09 · Rule Deteksi Keluar Jalur

Ref: `Spek TMS-S!A117:I117` · No: 9 · Tipe: Rule · Spesifikasi Selesai: 2026-07-13

```text
Rule Deteksi Keluar Jalur

1. Di sekeliling prediksi rute dibuat koridor toleransi, yaitu jarak simpang yang masih dianggap wajar (mengakomodasi noise GPS, pindah lajur, mampir rest area).
2. Lebar koridor toleransi dapat diatur melalui Pengaturan Sistem.
3. Posisi GPS armada dibandingkan terhadap prediksi rute + koridor toleransi.
4. Armada dinyatakan keluar jalur apabila berada di luar koridor secara persisten (bukan sesaat), yaitu memenuhi ambang:
- Jumlah titik GPS berturut-turut di luar koridor, ATAU
- Durasi minimum di luar koridor, ATAU
- Menjauh dari titik tujuan
5. Ambang persisten pada poin 4 dapat diatur melalui Pengaturan Sistem.
6. Referensi tambahan dari record perjalanan sebelumnya pada rute yang sama (koridor historis):
- Keluar dari prediksi rute, tetapi masih sesuai pola perjalanan sebelumnya => tidak tampil sebagai alert.
- Keluar dari prediksi rute dan keluar dari pola perjalanan sebelumnya => tampil sebagai alert.
7. Koridor historis aktif apabila rute sudah memiliki minimal (n) perjalanan selesai. Nilai (n) dapat diatur melalui Pengaturan Sistem.
8. Apabila jumlah perjalanan belum mencapai (n), penilaian menggunakan prediksi rute + koridor toleransi saja, dan fitur tetap berjalan.
9. Perjalanan yang terflag keluar jalur tidak digunakan sebagai data pembentuk koridor historis.
10. Kondisi yang TIDAK dihitung sebagai keluar jalur:
- Sinyal GPS hilang / tidak update => masuk kasus "Tidak Update", bukan "Keluar Jalur".
- Armada masih berada di dalam koridor historis.
11. Status keluar jalur:
- Terkonfirmasi Keluar Jalur => saat kondisi persisten terpenuhi.
- Kembali ke Rute => saat armada kembali masuk koridor toleransi.
12. Data yang disimpan saat keluar jalur terkonfirmasi:
- Waktu mulai keluar jalur
- Titik mulai menyimpang (koordinat)
- Jarak dari titik prediksi rute terdekat
- Lokasi terakhir armada
13. Seluruh perubahan status keluar jalur tersimpan pada audit trail dan histori tracking.
```

### TMS.S018-R10 · Rule Progres Pengiriman (Perhitungan)

Ref: `Spek TMS-S!A118:I118` · No: 10 · Tipe: Rule · Spesifikasi Selesai: 2026-07-13

```text
Rule Progres Pengiriman (Perhitungan)

1. Data yang digunakan:
- SLA waktu perjalanan => input user saat order dibuat (KPI pengiriman)
- Prediksi jarak tempuh => dari prediksi rute
- Prediksi waktu tempuh => dari prediksi rute
- Jarak tempuh aktual & posisi => dari GPS armada
2. Jarak tempuh aktual dihitung sebagai panjang lintasan sepanjang rute (posisi GPS diproyeksikan ke prediksi rute), bukan jarak garis lurus dari titik muat.
3. Waktu berjalan dihitung dari selisih current time dengan waktu mulai perjalanan (status Berangkat Muat).

4. Perhitungan sistem:
- Laju perkiraan rute = prediksi jarak ÷ prediksi waktu
- Laju minimal SLA = prediksi jarak ÷ SLA
- Target posisi perjalanan (saat ini) = laju perkiraan rute × waktu berjalan
- Target minimum SLA (saat ini) = laju minimal SLA × waktu berjalan
- Kecepatan aktual = dihitung dari data GPS terkini (rata-rata beberapa waktu terakhir, bukan sejak berangkat)
- Sisa jarak = prediksi jarak − jarak tempuh aktual
- Proyeksi waktu tiba = waktu berjalan + (sisa jarak ÷ kecepatan aktual)

5. Status Progres:
- Sesuai perkiraan rute => proyeksi tiba ≤ prediksi waktu rute
- Lebih lambat, masih sesuai SLA => proyeksi tiba > prediksi waktu rute, namun masih ≤ SLA
- Berisiko melewati SLA => proyeksi tiba > SLA, dan waktu berjalan masih ≤ SLA
- Melewati SLA => waktu berjalan sudah melebihi SLA dan armada belum tiba

6. Notifikasi dini dikeluarkan saat status "Berisiko melewati SLA", dengan ambang minimal proyeksi keterlambatan (agar tidak muncul saat selisih masih sangat kecil).
7. Apabila GPS tidak update, progres menggunakan data GPS terakhir dan armada tetap dihitung pada kasus "Tidak Update".
8. Catatan asumsi: prediksi rute saat ini hanya menghasilkan total jarak & total waktu (belum per ruas jalan), sehingga target posisi dihitung dengan asumsi laju rata konstan.
```

### TMS.S018-R11 · Halaman Progres Pengiriman

Ref: `Spek TMS-S!A119:I119` · No: 11 · Tipe: Rule · Spesifikasi Selesai: 2026-07-13

```text
Halaman Progres Pengiriman

1. Halaman berada pada submenu Dashboard => Progres Pengiriman.
2. Halaman menampilkan list armada yang sedang berjalan, masing-masing dengan satu bar progres perjalanan.
3. Bar menampilkan progres jarak tempuh aktual terhadap prediksi jarak (0 s/d total jarak).
4. Terdapat 2 penanda pada bar:
- Target minimum SLA => posisi minimal agar armada tetap memenuhi SLA
- Target posisi perjalanan => posisi yang seharusnya sudah dicapai menurut prediksi waktu rute
5. Warna bar mengikuti Status Progres.
6. Data yang ditampilkan per armada:
- Nopol, Nama Sopir, ID Order
- Rute (asal → tujuan)
- Jarak tempuh: aktual / total
- Waktu berjalan / SLA
- Prediksi durasi perjalanan
- Badge Status Progres
- Button Lacak
7. Button Lacak => redirect ke halaman Tracking & Location berdasarkan armada/order terkait.
8. Terdapat filter: Status, Nopol, Nama Sopir, ID Order. Terdapat button Reset & Terapkan.
9. Default data yang tampil 20 data per halaman, dengan pagination. Jumlah data per halaman dapat diubah.
10. Terdapat last update timestamp dan button Refresh.
11. Data bersifat auto-update mengikuti interval refresh system.
```

### TMS.S018-R12 · Maps Tracking & Location

Ref: `Spek TMS-S!A120:I120` · No: 12 · Tipe: Rule · Spesifikasi Selesai: 2026-07-13

```text
Maps Tracking & Location

1. Rule maps tracking sebelumnya tetap berlaku.
2. Legenda maps ditambah item baru:
- Prediksi rute ke tujuan
- Jalur dilalui (GPS)
- Jalur di luar prediksi rute (baru)
3. Pada peta ditampilkan segmen "Jalur di luar prediksi rute" yang menandai bagian jalur GPS yang menyimpang dari prediksi rute, beserta titik mulai menyimpang.
4. Segmen keluar jalur hanya tampil apabila armada memiliki status keluar jalur terkonfirmasi.
```

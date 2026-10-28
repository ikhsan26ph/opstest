# TMS.S014 — Improve Dashboard Operasional

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 81–89.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S014 |
| PIC | BB |
| Versi | (kosong di sumber) |
| Spesifikasi Selesai | (kosong di sumber) |
| Jenis Fitur / No Desain (kolom E) | Dashboard Operasional |
| Jumlah blok rule | 9 |

## Cakupan (kolom B)

```
Improve Dashboard Operasional
```

## Rincian spesifikasi

### TMS.S014-R01 · Pendahuluan

Ref: `Spek TMS-S!A81:I81` · No: 1 · Tipe: Pendahuluan · Kolom E: Dashboard Operasional · Spesifikasi Selesai: (kosong)

```text
ID ini menjelaskan terkait laporan operasional dari data historis. 
Pada halaman ini menampilkan informasi, yaitu jumlah order dan/atau armada dijalankan, jumlah vendor/subcon yang jalankan pengiriman, delivery on time, isu pengiriman, dan kinerja vendor
```

### TMS.S014-R02 · Definisi General

Ref: `Spek TMS-S!A82:I82` · No: 2 · Tipe: Rule · Spesifikasi Selesai: (kosong)

```text
Definisi General
1. Order valid = ID order yang ada di sistem dengan status selain 'Dibatalkan'
2. Terlambat = Proses pengiriman lebih lama dari target waktu perjalanan
3. Perhitungan Terlambat = Tanggal selesai bongkar - (dikurangi) Tanggal selesai muat, dibandingkan dengan Target Waktu Perjalanan
```

### TMS.S014-R03 · Filter:

Ref: `Spek TMS-S!A83:I83` · No: 3 · Tipe: Rule · Spesifikasi Selesai: (kosong)

```text
Filter:
Dapat dilakukan pemfilteran berdasarkan:
 1. Periode Permintaan Muat (dalam chips)
   -Harian, current date
   -Mingguan, current ISO Week (Mon-Sun)
   -Bulanan, current month (start 1st)
   -Tahunan, current year
   -Custom tanggal, bebas memilih range tanggal pada calendar
 2. Tipe Order dalam dropdown (FTL, LTL, FCL, LCL)
 3. Periode permintaan muat diambil dari data 'Tanggal Permintaan Muat'
```

### TMS.S014-R04 · Ekspor:

Ref: `Spek TMS-S!A84:I84` · No: 4 · Tipe: Rule · Spesifikasi Selesai: (kosong)

```text
Ekspor:
1. Laporan ini dapat diekspor dalam bentuk PDF saja
2. Bentuk ekspor dari laporan ini adalah visualnya
```

### TMS.S014-R05 · Laporan Bagian 1 - "Volume dan Aktivitas"

Ref: `Spek TMS-S!A85:I85` · No: 5 · Tipe: Rule · Spesifikasi Selesai: (kosong)

```text
Laporan Bagian 1 - "Volume dan Aktivitas"
1. Scorecard "Total Order"
  - jumlah order valid yang dibuat dalam periode terpilih
  - persentase perbandingan vs periode sebelumnya
2. Line chart "Tren Volume Order"
  - menampilkan tren volume order valid per waktu dalam periode yang dipilih.
    > jika periode muat harian, maka muncul data 1 hari
    > jika periode muat mingguan, maka muncul data per hari dari Senin pada current week
    > jika peride muat bulanan, maka muncul data per pekan dalam current month
    > jika periode muat tahunan, maka muncul data per bulan dalam current year
    > jika periode muat custom, maka menyesuaikan jumlah hari terpilih dan mengikuti aturan di atas
  - Dimensi (sumbu X) = Periode waktu muat yang dikelompokkan
  - Metriks (sumbu Y) = Jumlah order valid
  - Data label = jumlah order berjalan
  - Saat hover pada bar, muncul data jumlah seperti di desain
3. Donut chart "Jenis Pengiriman"
  - breakdown jumlah pengiriman per jenis shipment, menampilkan: FTL, LTL, FCL, LCL
4. Catatan:
  - Semua data yang tampil adalah data yang valid, atau tidak termasuk yang sudah dihapus/dibatalkan
  *Order valid = Order dengan status selain "Dibatalkan"
```

### TMS.S014-R06 · Laporan Bagian 2 - "Produktivitas Vendor"

Ref: `Spek TMS-S!A86:I86` · No: 6 · Tipe: Rule · Spesifikasi Selesai: (kosong)

```text
Laporan Bagian 2 - "Produktivitas Vendor"
1. Scorecard "Total Vendor Digunakan"
  - jumlah vendor yang digunakan dalam periode terpilih
  - persentase perbandingan vs periode sebelumnya
2. Scorecard "Rata-rata Trip per Vendor"
  - jumlah trip dilakukan tiap vendor dalam periode terpilih
  - jumlah trip dibagi jumlah vendor dalam periode terpilih (maks 2 angka di belakang koma)
  - persentase perbandingan vs periode sebelumnya
3. Tabel "5 Vendor Paling Produktif"
  - tampil tabel dengan hanya menampilkan 5 baris data
  - mengambil data 5 vendor dengan jumlah trip paling banyak dalam periode waktu terpilih
  - Kolom: No.; Nomor Polisi; Jenis Armada; Trip Selesai; Order Terkirim
4. Catatan:
  - Semua data yang tampil adalah semua data yang masuk, status sudah berjalan/proses ataupun sudah selesai
  - Data yang dihapus/dibatalkan tidak termasuk
```

### TMS.S014-R07 · Laporan Bagian 3 - "Performa Pengiriman"

Ref: `Spek TMS-S!A87:I87` · No: 7 · Tipe: Rule · Spesifikasi Selesai: (kosong)

```text
Laporan Bagian 3 - "Performa Pengiriman"
1. Scorecard "Jumlah Order Tepat Waktu"
  - angka absolut, jumlah order selesai bongkar ≤ SLA atau target waktu perjalanan
  - persentase perbandingan vs periode sebelumnya
2. Scorecard "Jumlah Order Terlambat"
  - angka absolut, jumlah order selesai bongkar > SLA atau target waktu perjalanan
  - persentase perbandingan vs periode sebelumnya
3. Scorecard "Jumlah Kendala Pengiriman"
  - jumlah kendala yang terjadi dalam periode waktu terpilih, masih berjalan maupun sudah selesai
  - persentase perbandingan vs periode sebelumnya
4. Circular progress bar "Ketepatan Waktu"
  - nilai persentase order yang tepat waktu dalam periode waktu terpilih
  - 0-50% : berwarna merah
  - 51-75%: berwarna kuning/oren
  - 76-100%: berwarna hijau
5. Tabel "Daftar Keterlambatan Pengiriman"
  - tampil tabel dengan kolom No; Vendor; Keterlambatan; Persentase Keterlambatan
  - Tabel ini ada search bar. Keyword bisa munculkan semua hasil dari kolom manapun. Jika dihapus, langsung kembali default. Tidak ada button enter/filter/submit, data langsung tampil setelah user mengetik keyword
  - tabel bisa di scroll
  - default data muncul di tabel adalah 20, dan ada pagination
  - data yang tampil hanya vendor dengan order yang terlambat pada periode terpilih
  - Perhitungan: Tanggal selesai bongkar - Tanggal selesai muat, dibandingkan dengan Target Waktu Perjalanan
  - Ada aksi untuk melihat Detail Keterlambatan (right drawer)
6. Detail Keterlambatan
  - tampil tabel keterlambatan tiap Vendor dengan kolom: No.; ID Order; Tanggal Muat; Keterangan
   * ID Order = ID Order yang mengalami keterlambatan
   * Tgl Muat = tanggal pemuatan yang diset Shipper saat membuat order
   * Keterangan = keterangan jumlah waktu keterlambatan. Jika selisih waktu melewati 23 jam, maka dibulatkan menjadi hari.
   * default data muncul di tabel adalah 5, dan ada pagination
  - Line Chart "Tren Keterlambatan"
   * menampilkan data tren keterlambatan. Ketentuan sama seperti line chart "Tren Volume Order", tapi ini menggunakan data keterlambatan
```

### TMS.S014-R08 · Perbandingan Data (utk scorecard):

Ref: `Spek TMS-S!A88:I88` · No: 8 · Tipe: Rule · Spesifikasi Selesai: (kosong)

```text
Perbandingan Data (utk scorecard):
1. Periode
   -Harian, vs 1 hari sebelumnya
   -Mingguan, vs 1 pekan sebelumnya (Week 12 2026 vs Week 13 2026)
   -Bulanan, vs 1 bulan sebelumnya (Mei 2026 vs Juni 2026)
   -Tahunan, vs 1 tahun sebelumnya (2025 vs 2026)
   -Custom tanggal, vs jumlah hari sebelumnya (21-31 Mei 2026 vs 1-10 Juni 2026)
2. Perhitungan nilainya
   - ((Nilai baru - Nilai lama) ÷ Nilai lama) × 100%
   - Jika hasil positif, artinya nilai bertambah, berwarna hijau
   - Jika hasil negatif, artinya nilai berkurang, berwarna merah
```

### TMS.S014-R09 · Pembulatan Satuan Waktu - konversi waktu perjalanan:

Ref: `Spek TMS-S!A89:I89` · No: 9 · Tipe: Rule · Spesifikasi Selesai: (kosong)

```text
Pembulatan Satuan Waktu - konversi waktu perjalanan: 
  *Saat data tersimpan, satuan jam di atas 23 jam akan terkonversi menjadi hari. Contoh: 24 jam = 1 hari; 38 jam = 1 hari 14 jam.
  *konversi ini tampil pada tabel data master, dan informasi waktu perjalanan di Order.
  *pada tabel master ini, satuan dapat disingkat menjadi h dan j. Contoh: 1h 14j
```

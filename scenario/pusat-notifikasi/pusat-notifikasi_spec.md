# TMS.S022 — Pusat Notifikasi

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 148–152.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S022 |
| PIC | EL |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-15, 2026-07-17 |
| Jenis Fitur / No Desain (kolom E) | Desain duplikat Saat ini; 180. VENDOR - NOTIFIKASI EMAIL - ORDER BARU |
| Jumlah blok rule | 5 |

## Cakupan (kolom B)

```
Pusat Notifikasi
1. Setting notifikasi global
2. Setting preferensi notifikasi
3. Push Notifikasi
4. Notifikasi Wa & email
```

## Rincian spesifikasi

### TMS.S022-R01 · Pendahuluan

Ref: `Spek TMS-S!A148:I148` · No: 1 · Tipe: Pendahuluan · Kolom E: Desain duplikat Saat ini · Spesifikasi Selesai: 2026-07-15

```text
Fitur ini menjelasakan pengaturan notifikasi
```

### TMS.S022-R02 · Rule umum pusat notifikasi:

Ref: `Spek TMS-S!A149:I149` · No: 2 · Tipe: Rule · Spesifikasi Selesai: 2026-07-15

```text
Rule umum pusat notifikasi:
1. Duplikat dari fitur yang ada pada TMS LKL
2. Penyesuaian hanya ada pada list notifikasi saja yang perlu disesuaikan
3. Diterapkan pada shipper & vendor

List Notifikasi TMS Shipper:
Akun: Jangan ditampilkan pada list, berjalan dibelakang pengirimannya
Lupa Password => Email & Whatsapp
Ubah Password => Email & Whatsapp

Order: 
Order Selesai => Push
Order Dibatalkan => Push
Order Telah Ditugaskan => Push

Tracking:
Tahap Pengiriman - Berangkat Muat => Push
Tahap Pengiriman - Selesai Muat => Push
Tahap Pengiriman - Kapal Berlayar => Push
Tahap Pengiriman - Kapal Sandar => Push
Tahap Pengiriman - Berangkat Bongkar => Push
Tahap Pengiriman - Selesai Bongkar => Push
Tahap Pengiriman - Alihkan Armada => Push

Monitoring & Tracking:
Reminder Kendala Armada => Push
Reminder Armada Tidak Update => Push
Reminder Armada Melewati SLA => Push
Reminder Armada Keluar Jalur => Push
Reminder Armada Berpotensi Terlambat => Push
```

### TMS.S022-R03 · List Notifikasi TMS Vendor:

Ref: `Spek TMS-S!A150:I150` · No: - · Tipe: Rule · Spesifikasi Selesai: 2026-07-17

```text
List Notifikasi TMS Vendor:
Akun: Jangan ditampilkan pada list, berjalan dibelakang pengirimannya
Lupa Password => Email & Whatsapp
Ubah Password => Email & Whatsapp

Order: 
Order Baru => Push & email
Order Selesai => Push
Order Dibatalkan => Push (tidak ada button "cek disini", karena baris order itu akan hilang di sisi vendor jika dibatalkan / assign ke vendor lain)
Order Telah Ditugaskan => Push

Tracking:
Tahap Pengiriman - Berangkat Muat => Push
Tahap Pengiriman - Selesai Muat => Push
Tahap Pengiriman - Kapal Berlayar => Push
Tahap Pengiriman - Kapal Sandar => Push
Tahap Pengiriman - Berangkat Bongkar => Push
Tahap Pengiriman - Selesai Bongkar => Push
Tahap Pengiriman - Alihkan Armada => Push

Monitoring & Tracking:
Reminder Kendala Armada => Push
```

### TMS.S022-R04 · Halaman Notifikasi

Ref: `Spek TMS-S!A151:I151` · No: - · Tipe: Rule · Spesifikasi Selesai: 2026-07-17

```text
Halaman Notifikasi terdapat rule penulisan:
1. Order Masuk : "Order [ID Order] baru ditujukan untuk Anda. Segera lakukan penugasan tracking untuk order tersebut"
2. Kapal Berlayar: "Kapal [Nama Kapal] - [No voyage] untuk order [ID Order] telah berlayar.
3. Kapal Sandar: "Kapal [Nama Kapal] - [No voyage] untuk order [ID Order] telah sandar.
4. Armada Keluar Jalur: "Armada [Nopol] pada order [ID Order] terdeteksi keluar jalur dari rute yang dipredikasi pada perjalanan [Rute]. Periksa kondisi pengiriman"
5. Armada Berpotensi Terlambat: "Armada [Nopol] pada order [ID Order] diprediksi terlambat tiba di [Kota Tujuan] sekitar [Durasi Keterlambatan] melebihi SLA. Periksa kondisi pengiriman."
```

### TMS.S022-R05 · Email "Order Baru" untuk vendor

Ref: `Spek TMS-S!A152:I152` · No: - · Tipe: Rule · Kolom E: 180. VENDOR - NOTIFIKASI EMAIL - ORDER BARU · Spesifikasi Selesai: 2026-07-17

```text
Email "Order Baru" untuk vendor terdapat rule:
1. Notifikasi email ini hanya terkirim ke vendor, saat pengelola dilakukan oleh vendor itu sendiri 
2. Dapat direct ke halaman detail order yang dimaksut 
3. No Desain: 180-182
```

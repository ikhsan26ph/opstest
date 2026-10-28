# TMS.S016 — Penyesuaian APK Tracking FCL LCL

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 103–107.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S016 |
| PIC | EL |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-10 |
| Jenis Fitur / No Desain (kolom E) | 142. List Penugasan; No Desain: 142 - 157 |
| Jumlah blok rule | 5 |

## Cakupan (kolom B)

```
Penyesuaian APK Tracking FCL LCL
1. List
2. Penugasan FCL & LCL
3. Normal, Multidrop, Multipickup
4. Kendala
```

## Rincian spesifikasi

### TMS.S016-R01 · Pendahuluan

Ref: `Spek TMS-S!A103:I103` · No: 1 · Tipe: Pendahuluan · Kolom E: 142. List Penugasan · Spesifikasi Selesai: 2026-07-10

```text
Pada ID ini menjelaskan terkait penyesuaian aplikasi tracking, untuk penugasan FCL & LCL bisa masuk ke aplikasi driver
```

### TMS.S016-R02 · Konsep Dasar Penugasan FCL & LCL di Driver Hub

Ref: `Spek TMS-S!A104:I104` · No: 2 · Tipe: Rule · Kolom E: No Desain: 142 - 157 · Spesifikasi Selesai: 2026-07-10

```text
Konsep Dasar Penugasan FCL & LCL di Driver Hub Terdapat rule:

1. Penugasan FCL & LCL yang masuk ke Driver Hub selalu terpisah menjadi 2 jenis penugasan: penugasan sisi Muat saja, atau penugasan sisi Bongkar saja - tidak pernah berupa 1 perjalanan penuh dari titik muat hingga titik bongkar (berbeda dengan FTL/LTL yang selalu berupa 1 perjalanan penuh).
2. Step yang tampil untuk penugasan sisi Muat: Berangkat Muat, Selesai Muat.
3. Step yang tampil untuk penugasan sisi Bongkar: Berangkat Bongkar, Selesai Bongkar.
```

### TMS.S016-R03 · Halaman Beranda

Ref: `Spek TMS-S!A105:I105` · No: 3 · Tipe: Rule · Spesifikasi Selesai: 2026-07-10

```text
Halaman Beranda Terdapat rule:

1. Card penugasan FCL/LCL hanya menampilkan kota pada sisi yang relevan saja (kota muat untuk penugasan sisi Muat, kota bongkar untuk penugasan sisi Bongkar) - tidak menampilkan format 2 sisi (asal-tujuan) seperti pada card FTL/LTL.
2. Saat terdapat lebih dari 1 titik muat/bongkar pada sisi yang relevan, label kota diganti menjadi "Multipickup" (sisi muat) atau "Multidrop" (sisi bongkar) saja, tanpa detail nama kota.
3. Informasi tanggal pada card menyesuaikan sisi penugasan: "Permintaan Muat" untuk penugasan sisi Muat, "Permintaan Bongkar" untuk penugasan sisi Bongkar.
4. Button "Mulai Perjalanan" mendapat tambahan icon panah (→) - label teks tidak berubah dari sebelumnya.
5. Card FTL/LTL tetap menampilkan format 2 sisi (Kota Asal - Kota Tujuan, dengan "Multipickup"/"Multidrop" menggantikan sisi yang memiliki >1 titik) seperti desain sebelumnya - tidak terdampak perubahan ini.
```

### TMS.S016-R04 · Halaman Detail Tracking

Ref: `Spek TMS-S!A106:I106` · No: 4 · Tipe: Rule · Spesifikasi Selesai: 2026-07-10

```text
Halaman Detail Tracking Terdapat rule:

1. Untuk penugasan FCL/LCL, terdapat tambahan informasi No. Kontainer dan No. Segel pada data order (tidak ada pada tampilan FTL/LTL sebelumnya).
2. Field Alamat & PIC menyesuaikan sisi penugasan: "Alamat Muat"/"PIC Muat" untuk penugasan sisi Muat, "Alamat Bongkar"/"PIC Bongkar" untuk penugasan sisi Bongkar.
3. Untuk step "Berangkat Muat" dan "Berangkat Bongkar": label button aksi mengikuti nama step tersebut secara langsung ("Berangkat Muat" / "Berangkat Bongkar"), tidak lagi menggunakan diksi generik "Simpan" seperti sebelumnya.
4. Untuk step "Selesai Muat" dan "Selesai Bongkar": tetap menggunakan label generik "Simpan", dan tetap menampilkan field "Status Saat Ini".
Section "Status Pengiriman" (history tracking) menampilkan tiap entry dengan format "{Nama Step} - {Alamat}" (contoh: "Selesai Bongkar - Kota Surabaya Jl. Majapahit No.10").
5. Rule di atas (poin 3-5) berlaku sama untuk FTL/LTL maupun FCL/LCL (bukan perubahan khusus FCL/LCL saja).
```

### TMS.S016-R05 · Halaman Laporan Kendala

Ref: `Spek TMS-S!A107:I107` · No: 5 · Tipe: Rule · Spesifikasi Selesai: 2026-07-10

```text
Halaman Laporan Kendala Terdapat rule:

1. Untuk penugasan FCL/LCL, turut menampilkan No. Kontainer dan No. Segel pada informasi data order.
2. Informasi tanggal permintaan mengikuti sisi penugasan (Muat/Bongkar).
3. Field Foto bersifat opsional, field Keterangan bersifat wajib pada form Laporan Kendala ini (rule sama dengan Isi Kendala FTL/LTL).
```

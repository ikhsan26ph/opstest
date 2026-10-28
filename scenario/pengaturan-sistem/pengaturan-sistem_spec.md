# TMS.S020 — Pengaturan Sistem

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 127–130.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S020 |
| PIC | EL |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-15 |
| Jenis Fitur / No Desain (kolom E) | 162. Pengaturan Sistem; No Desain: 162 - 162a |
| Jumlah blok rule | 4 |

## Cakupan (kolom B)

```
Pengaturan Sistem
1. Form pengaturan sistem
2. Cakupan secara global
```

## Rincian spesifikasi

### TMS.S020-R01 · Pendahuluan

Ref: `Spek TMS-S!A127:I127` · No: 1 · Tipe: Pendahuluan · Kolom E: 162. Pengaturan Sistem · Spesifikasi Selesai: 2026-07-15

```text
Fitur ini menjelasakan terkait adanya pengaturan sistem, untuk mengatur beberapa hal yang bisa disesuaikan dengan kebutuhan penggunaan
```

### TMS.S020-R02 · Ketentuan Umum

Ref: `Spek TMS-S!A128:I128` · No: 2 · Tipe: Rule · Kolom E: No Desain: 162 - 162a · Spesifikasi Selesai: 2026-07-15

```text
Ketentuan Umum Terdapat rule:

1. Pengaturan Sistem berisi parameter yang dapat disesuaikan sesuai kebutuhan shipper, tersimpan dalam 1 form dengan 1 tombol Simpan untuk seluruh parameter sekaligus.
2. Perubahan pengaturan berlaku secara global untuk seluruh sistem milik shipper tersebut (bukan per-vendor atau per-order).
```

### TMS.S020-R03 · Field & Rule:

Ref: `Spek TMS-S!A129:I129` · No: 3 · Tipe: Rule · Spesifikasi Selesai: 2026-07-15

```text
Field & Rule:

1. Durasi Kedaluwarsa Undangan Vendor
- Field: Durasi (angka, wajib) + Satuan (dropdown: Menit/Jam, wajib).
- Default Field: 2 Jam 
- Menentukan masa berlaku link undangan registrasi vendor sebelum kedaluwarsa - terhubung dengan fitur Manajemen Vendor.

2. Radius Notifikasi Lokasi Muat/Bongkar
- Field: input angka dengan satuan tetap km (tidak ada pilihan satuan lain).
- Default Field: 5 Km
- Menentukan jarak dari lokasi muat/bongkar di mana notifikasi "Armada Mendekat" mulai dikirim.

3. Deteksi Tidak Update (Batas Tidak Update)
- Field: Durasi (angka, wajib) + Satuan (dropdown: Menit/Jam, wajib).
- Default Field: 30 Menit 
- Menentukan batas waktu armada/kontainer tidak bergerak sebelum ditandai status "Tidak Update" pada menu Monitoring.

4. Deteksi Keluar Jalur (Batas Koridor Sekeliling Jalur)
- Field: input angka dengan satuan tetap km.
- Default Field: 3 Km
- Menentukan lebar koridor toleransi di sekitar prediksi rute perjalanan. Posisi GPS yang berada di luar batas koridor ini secara persisten akan ditandai status "Keluar Jalur".
```

### TMS.S020-R04 · Rule Validasi:

Ref: `Spek TMS-S!A130:I130` · No: 4 · Tipe: Rule · Spesifikasi Selesai: 2026-07-15

```text
Rule Validasi: 

1. Seluruh field bersifat wajib diisi (ditandai *).
2. Jika field wajib tidak diisi/kosong: tampilkan helper error & border error.
3. Button:
- Batal => membatalkan perubahan, tampil alert konfirmasi.
- Simpan => menyimpan seluruh parameter pengaturan sekaligus.
```

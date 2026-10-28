# TMS.S024 — Master Customer Service

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 161–169.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S024 |
| PIC | EL |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-28 |
| Jenis Fitur / No Desain (kolom E) | 183. Master Customer Service; No Desain: 183 - 190; Batch Master CS |
| Jumlah blok rule | 9 |

## Cakupan (kolom B)

```
Master Customer Service 
1. List master customer service
2. Vendor yang menggunakan
3. Tambah, edit, hapus
4. Hapus tidak bisa jika masih ada vendor yang menggunakan
```

## Rincian spesifikasi

### TMS.S024-R01 · Pendahuluan

Ref: `Spek TMS-S!A161:I161` · No: 1 · Tipe: Pendahuluan · Kolom E: 183. Master Customer Service · Spesifikasi Selesai: 2026-07-28

```text
Fitur ini menjelasakan adanya tambahan master customer service. Master ini digunakan untuk menambahkan data customer service yang dimiliki. yang nantinya akan tampil di apps driver
```

### TMS.S024-R02 · Master Customer Service (List)

Ref: `Spek TMS-S!A162:I162` · No: 2 · Tipe: Rule · Kolom E: No Desain: 183 - 190 · Spesifikasi Selesai: 2026-07-28

```text
Master Customer Service (List) terdapat rules:

1. Halaman menampilkan list data master CS milik shipper.
2. Default data yang tampil sebanyak 20 data per halaman.
3. Tersedia pagination untuk membagi data per halaman.
4. Urutan data default berdasarkan data terbaru yang ditambahkan.
5. Kolom List: 
- No 
- Nama CS 
- No. WhatsApp CS 
- Jumlah Vendor 
- Status (Aktif / Tidak Aktif) 
- Button Aksi (Edit, Hapus)
6. CS yang berstatus default menampilkan badge "Default" pada kolom Nama CS.
7. Hanya boleh ada satu CS default dalam satu waktu.
8. Kolom "Jumlah Vendor" berupa link yang menampilkan nama-nama vendor pemakai CS tersebut.
9. Terdapat button filter untuk membuka area filter.
10. Secara default field filter dalam kondisi kosong.
11. Placeholder field mengikuti desain.
12. Field filter → Nama CS, No. WhatsApp CS, Status.
13. Button Terapkan → menampilkan data sesuai filter.
14. Button Reset → mengosongkan seluruh field filter & mengembalikan list ke kondisi default.
```

### TMS.S024-R03 · Detail Jumlah Vendor (popup)

Ref: `Spek TMS-S!A163:I163` · No: 4 · Tipe: Rule · Spesifikasi Selesai: 2026-07-28

```text
Detail Jumlah Vendor (popup) terdapat rules:

1. Klik pada link "Jumlah Vendor" menampilkan pop up berisi daftar vendor pemakai CS tersebut.
2. Isi popup → Nama vendor, Alias vendor, Status vendor (Aktif / Tidak Aktif).
3. Yang dihitung sebagai pemakai adalah vendor berpengelola Shipper yang mereferensikan CS ini.
4. Jika belum ada pemakai, tampilkan status kosong (0 Vendor) dan popup menampilkan pesan tidak ada vendor.
```

### TMS.S024-R04 · Tambah Customer Service

Ref: `Spek TMS-S!A164:I164` · No: 5 · Tipe: Rule · Spesifikasi Selesai: 2026-07-28

```text
Tambah Customer Service terdapat rules:

1. User dapat menambahkan lebih dari satu CS dalam satu proses input.
2. Secara default halaman tambah menampilkan field → Nama CS, No. WhatsApp CS, checkbox "Jadikan CS default perusahaan".
3. User dapat menambahkan baris input menggunakan button "Tambah Baris Input".
4. Setiap baris input dapat dihapus menggunakan button delete.
5.Minimal harus terdapat 1 baris input → button delete tidak tampil.
6. Saat terdapat lebih dari 1 baris input, button delete tampil di semua baris.
7. Field Nama CS → wajib diisi, input berupa text.
8. Field No. WhatsApp CS → wajib diisi, input berupa angka, mengikuti format nomor WhatsApp.
9. Checkbox "Jadikan CS default perusahaan":
- Jika dicentang, CS ini menjadi default dan otomatis melepas status default dari CS lain (default hanya boleh satu).
- Jika belum ada CS sama sekali di database, CS pertama yang disimpan otomatis dijadikan default.
10. No. WhatsApp CS tidak boleh duplikat (satu nomor dapat dipakai beberapa label CS), Nama CS juga tidak boleh duplikat
11. Jika field required tidak diisi → tampilkan helper error & border field berubah ke warna error.
12. Jika Nama CS duplikat → tampilkan alert/helper bahwa nama CS sudah digunakan.
13. Tersedia button Download Template dan Import Data untuk input massal, mengikuti format template.
14. Button action → Batal (membatalkan proses, tampil alert konfirmasi), Simpan (menyimpan data, tampil alert success).
```

### TMS.S024-R05 · Edit Customer Service

Ref: `Spek TMS-S!A165:I165` · No: 6 · Tipe: Rule · Spesifikasi Selesai: 2026-07-28

```text
Edit Customer Service terdapat rules:

1. User dapat melakukan edit data CS.
2. Tampilan edit berupa pop up.
3. Data existing otomatis terisi pada field.
4. Field pada edit → Nama CS, No. WhatsApp CS, Status (Aktif / Tidak Aktif), checkbox default.
5. Validasi Nama CS dan No CS sama dengan proses tambah (tidak boleh duplikat dengan data lain).
6. Perubahan data CS langsung berlaku ke seluruh vendor yang mereferensikan CS ini tanpa perlu edit vendor satu per satu (vendor menyimpan referensi ke CS).
7. Aturan status:
- CS default tidak dapat diubah menjadi Tidak Aktif sebelum ada CS default pengganti.
- CS yang masih digunakan vendor tidak dapat diubah menjadi Tidak Aktif sebelum vendornya dialihkan ke CS lain.
8. Saat user mengubah status menjadi Tidak Aktif pada CS yang masih dipakai, tampilkan proses pengalihan CS:
- Sistem tidak memindahkan vendor ke CS default secara otomatis; CS pengganti wajib dipilih user.
- Tersedia opsi "alihkan semua ke satu CS" dan "atur per vendor" (memungkinkan satu CS lama dibagi ke beberapa CS berbeda).
- Proses tidak dapat disimpan selama masih ada vendor yang belum memiliki CS pengganti.
9. Button action → Batal (membatalkan proses, tampil alert konfirmasi), Simpan (menyimpan perubahan, tampil alert success).
```

### TMS.S024-R06 · Hapus Customer Service

Ref: `Spek TMS-S!A166:I166` · No: 7 · Tipe: Rule · Spesifikasi Selesai: 2026-07-28

```text
Hapus Customer Service terdapat rules:

1. Data master CS dapat dilakukan proses hapus.
2. Hapus hanya dapat dilakukan selama CS tersebut belum digunakan vendor mana pun dan bukan CS default.
3. Saat hapus dilakukan pada CS yang masih digunakan / berstatus default, tampil alert "Data Customer Service tidak dapat dihapus, data sedang digunakan".
4. Saat melakukan proses hapus, tampil pop up konfirmasi.
```

### TMS.S024-R07 · Template Import Data Master TMS-S.xlsx

Ref: `Spek TMS-S!A167:I167` · No: 8 · Tipe: Rule · Kolom E: Batch Master CS · Spesifikasi Selesai: 2026-07-28

```text
Template Import Data Master TMS-S.xlsx
```

### TMS.S024-R08 · Integrasi dengan form Vendor (Tambah / Edit Vendor)

Ref: `Spek TMS-S!A168:I168` · No: 9 · Tipe: Rule · Spesifikasi Selesai: 2026-07-28

```text
Integrasi dengan form Vendor (Tambah / Edit Vendor) terdapat rules:

1. Sumber nomor CS pada penugasan ditentukan oleh field Pengelola vendor.
2. Pengelola = Vendor → nomor CS diisi manual (CS milik vendor), tidak mengambil dari master CS.
3. Pengelola = Shipper → field CS mengambil dari master CS:
- Jika master CS memiliki lebih dari satu data → tampil dropdown pilih CS, terisi otomatis dengan CS default; user dapat mengganti.
- Jika master CS hanya memiliki satu data → tampil read-only tanpa perlu memilih.
- Jika master CS masih kosong → sediakan input cepat untuk menambah CS yang otomatis tersimpan ke master dan dijadikan default.
4. Tersedia opsi menambah CS baru langsung dari form vendor (tersimpan ke master).
```

### TMS.S024-R09 · Pengelolaan CS pada Manajemen Vendor

Ref: `Spek TMS-S!A169:I169` · No: 10 · Tipe: Rule · Spesifikasi Selesai: 2026-07-28

```text
Pengelolaan CS pada Manajemen Vendor terdapat rules:

1. Kolom CS penanggung jawab tampil pada list Manajemen Vendor (Nama CS + No WA CS)
2. Tersedia filter berdasarkan Nama dan No WA CS
```

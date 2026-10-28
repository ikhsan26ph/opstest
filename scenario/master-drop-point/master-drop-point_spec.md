# TMS.S006 — Master Drop Point

> Sumber: `scenario/Spek Glogal OPS.xlsx`, sheet `Spek TMS-S`, baris 19–24.
> Isi di bawah disalin apa adanya dari Excel (termasuk typo/penomoran asli). Tidak ada penambahan asumsi.
> Status: requirement tertulis dari user; belum divalidasi terhadap aplikasi OPS staging.

## Metadata

| Field | Nilai |
|---|---|
| ID | TMS.S006 |
| PIC | BB |
| Versi | TMS-S 1.0.0 |
| Spesifikasi Selesai | 2026-07-02 |
| Jenis Fitur / No Desain (kolom E) | MASTER DROP POINT |
| Jumlah blok rule | 6 |

## Cakupan (kolom B)

```
Master Drop Point
1. Informasi perusahaan dan data drop point
2. Data drop point merupakan child dari informasi customer
3. Tambah, edit, detail, hapus customer
4. Tambah, edit, detail, hapus drop point
```

## Rincian spesifikasi

### TMS.S006-R01 · Pendahuluan

Ref: `Spek TMS-S!A19:I19` · No: 1 · Tipe: Pendahuluan · Kolom E: MASTER DROP POINT · Spesifikasi Selesai: 2026-07-02

```text
ID ini menjelaskan mengenai menu master untuk mengelola drop point yang dapat digunakan sebagai lokasi muat atau bongkar dalam proses pengiriman.
```

### TMS.S006-R02 · Master Drop Point ada pada Master Operasional

Ref: `Spek TMS-S!A20:I20` · No: 2 · Tipe: (kosong) · Spesifikasi Selesai: (kosong)

```text
Master Drop Point ada pada Master Operasional
1. Halaman utama menampilkan tabel dengan informasi:
  - Nama Perusahaan
  - Alias
  - Nama PIC
  - No WA PIC
  - Aksi (Aktif/Tidak Aktif)
  - tombol aksi

2. Tabel dapat difilter:
  - Nama Perusahaan (text field)
  - Alias (text field)
  - Nama PIC (text field)
  - No WA PIC (text field)
  - Status (drop down)
  - Tombol Reset: mereset filter dan data pada tabel.
  - Tombol Terapkan: menampilkan data pada tabel sesuai filter.

3. Pada halaman ini dapat menambah perusahaan.

4. Data setiap baris dapat dilihat detail, edit, dan hapus.
  *aksi lihat: menuju halaman "Detail Perusahaan"
  *aksi edit: menuju halaman "Edit Informasi Perusahaan"
  *aksi hapus: menghapus data. Data tidak dapat dihapus jika sudah digunakan/memiliki drop point.
```

### TMS.S006-R03 · Tambah Perusahaan:

Ref: `Spek TMS-S!A21:I21` · No: 3 · Tipe: (kosong) · Spesifikasi Selesai: (kosong)

```text
Tambah Perusahaan:
1. Form yang diisi ada dua bagian. Bagian Perusahaan dan bagian Drop Point

2. Bagian Perusahaan:
  - Nama perusahaan (required)
  - Email
  - Nama PIC
  - No Whatsapp PIC
  - Provinsi 
  - Kota 
  - Kec.
  - Kel.
  - Alamat Perusahaan
  - Dokumen Tambahan 
  *jika tambah data baru, status auto aktif
  *catatan: untuk opsional, akan ada trigger untuk mengisi field opsional. perlu ada pengecekan jika klik trigger tersebut, setidaknya 1 field terisi. Jika memang tidak ada yang diisi, user perlu unchecklist.

3. Bagian Drop Point:
  - Nama Drop Point (required, text field)
  - PIC Drop Point (required, text field)
  - No PIC Drop Point (required, text field number min. 10)
  - Provinsi (required, drop point ambil dr master)
  - Kota (required, drop point ambil dr master)
  - Kecamatan (required, drop point ambil dr master)
  - Kelurahan (required, drop point ambil dr master)
  - Kode Pos (auto draft)
  - Alamat (required, text box)
  - Catatan (text box)
  *jika tambah data baru, status auto aktif
  *bisa tambah baris data. Jika sudah ditambah, data pertama atau setelahnya dapat dihapus. Minimal menyisakan 1 data drop point.

4. Button tersedia:
  - Batal: kembali ke halaman master drop point
  - Simpan: menyimpan data, dan ke halaman master drop point. Saat tersimpan perlu ada alert kalau data tersimpan.
```

### TMS.S006-R04 · Edit Informasi Perusahaan

Ref: `Spek TMS-S!A22:I22` · No: 4 · Tipe: (kosong) · Spesifikasi Selesai: (kosong)

```text
Edit Informasi Perusahaan
1. Menuju halaman "Edit Informasi Perusahaan" dapat dilakukan melalui dua cara:
  - Jika aksi edit diklik (pada halaman Master Drop Point)
  - jika tombol edit diklik (pada halaman Detail Perusahaan)

2. Data dapat diubah meskipun sudah digunakan, tapi tidak mengubah data yang sudah berjalan sebelumnya.

3. Field yang tampil sama seperti saat tambah perusahaan. Bagian selain nama perusahaan terhide sampai trigger dipilih. Tapi jika saat data awalnya field opsional sudah terisi, maka pada halaman edit data tersebut tetap muncul.

4. Pada halaman edit informasi perusahaan ini, akan tampil informasi jumlah drop point yang dimiliki perusahaan tersebut.

5. Button tersedia:
  - Batal: kembali ke halaman master drop point
  - Simpan: menyimpan data, dan ke halaman master drop point. Saat tersimpan perlu ada alert kalau data tersimpan.
```

### TMS.S006-R05 · Cara menambah Drop Point:

Ref: `Spek TMS-S!A23:I23` · No: 5 · Tipe: (kosong) · Spesifikasi Selesai: (kosong)

```text
Cara menambah Drop Point:
1. Pastikan sudah membuat data perusahaan sebelumnya.  Jika sudah ada nama perusahaan terkait, klik button mata untuk lihat detail. Menuju halaman "Detail Perusahaan"

2. Pada halaman Detail Perusahaan, akan tampil informasi perusahaan dan tabel daftar drop point milik perusahaan tersebut. Ada button utk melakukan edit informasi perusahaan juga pada halaman ini.

3. Informasi perusahaan yang tampil: 
  - Nama perusahaan
  - Email
  - Nama PIC
  - No Whatsapp PIC
  - Provinsi 
  - Kota 
  - Kec.
  - Kel.
  - Alamat Perusahaan
  - Dokumen Tambahan 
  - Status
   *Catatan: Data yang tampil hanya data yang diisi. Jika data tidak diisi, maka tidak akan tampil sama sekali pada Informasi Perusahaan.

4. Tabel Drop Point:
  - No
  - Nama Drop Point
  - Kota/Kab.
  - Status
  - tombol aksi
  *aksi lihat: right drawer informasi drop point (nama drop point, PIC, No PIC, Provinsi, Kota, Kecamatan, Kelurahan, Alamat, status)
  *aksi edit: right drawer edit drop point. Bisa edit semua, tapi tidak mengubah data yang sebelumnya sudah digunakan, hanya mengubah yang akan digunakan.
  *aksi hapus: hanya bisa dihapus jika belum digunakan

5. Tambah Drop Point (right drawer):
  - Nama Drop Point (required, text field)
  - PIC Drop Point (required, text field)
  - No PIC Drop Point (required, text field number min. 10)
  - Provinsi (required, drop point ambil dr master)
  - Kota (required, drop point ambil dr master)
  - Kecamatan (required, drop point ambil dr master)
  - Kelurahan (required, drop point ambil dr master)
  - Kode Pos (auto draft)
  - Alamat (required, text box)
  - Catatan (text box)
  *jika tambah data baru, status auto aktif
  *bisa tambah baris data. Jika sudah ditambah, data pertama atau setelahnya dapat dihapus. Minimal menyisakan 1 data drop point.
 
6. Button tersedia pada setiap drawer:
   - Batal: menutup drawer
   - Simpan: menyimpan data, lalu menutup drawer. Saat tersimpan perlu ada alert kalau data tersimpan.
```

### TMS.S006-R06 · Lainnya:

Ref: `Spek TMS-S!A24:I24` · No: 6 · Tipe: (kosong) · Spesifikasi Selesai: (kosong)

```text
Lainnya:
1. Drop point aktif akan ditampilkan sebagai pilihan saat membuat order.
2. Admin bisa lihat, tambah, edit, dan hapus data. Tapi data yang sudah digunakan tidak dapat dihapus (perlu alert).
3. Satu kota dapat memiliki lebih dari satu dropping point (misalnya dua gudang di kota yang sama).
4. Urutan drop point dalam penugasan ditentukan secara manual oleh admin atau berdasarkan urutan rute
5. Data pada tabel di halaman Master Drop Point maupun Detail Perusahaan memiliki urutan yang terbaru teratas. Nomor urut ascending.
6. Perubahan data tercatat pada riwayat
```

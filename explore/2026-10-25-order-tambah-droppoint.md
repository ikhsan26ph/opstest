# Observasi Shortcut Tambah Drop Point (Order) & Master Drop Point — 2026-10-25

Target https://ops-staging.prahu-hub.com, akun 1 config/env.md (header Admin / Administrator). Playwright Chromium 1440×1000 read-only; guard memblok semua non-GET kecuali auth. Run DP20261025 (08:33–08:50 WIB). Evidence: artifacts/evidence/DP20261025. Login 200 (setelah daemon direstart karena ERR_INTERNET_DISCONNECTED sesaat di browser), logout 200. Tidak ada Simpan/upload/mutasi; request terblok hanya `POST /api/system/client-error` (laporan Network Error client).

Sumber requirement: teks user 2026-10-25 + 4 frame desain (role Shipper/Staff Operasional). Spec pembanding: TMS.S006 Master Drop Point, TMS.S011 Order FTL (Produk/OPS/Modul).

## Buat Order (/order/buat), FTL default
- Tipe Pengiriman bukan dropdown: teks "Tipe Pengiriman: Normal — mengikuti jumlah baris Data Pengirim & Data Penerima". +Lokasi Muat → Multipickup; +Lokasi Bongkar juga → Multipoint. (Spec S011 masih dropdown pilihan user → spec usang.) (d09-tipe-multipoint)
- Card Pengirim: Drop Point Asal*, "Pengirim" (dropdown "Semua Pengirim" = 11 perusahaan + Semua), button "Tambah Drop Point". Penerima sama ("Semua Penerima"). Satu button Tambah Drop Point per baris lokasi (4 button pada 2 muat + 2 bongkar). (d01)

## Drawer Tambah Drop Point (dari order)
- Bukan role=dialog. Isi: Nama Perusahaan* (dropdown "Pilih Nama Perusahaan", search "Cari Nama Perusahaan...", 11 perusahaan + "Lainnya"), Download Template, Import Data, card "Drop Point 1" (minimize), field: Nama Drop Point*, Nama PIC* (helper "Nama PIC Pengirim"), No. WhatsApp PIC* (contoh 081234567898), Link Maps (placeholder "Tempel link Google Maps di sini", helper "Masukkan link maps yang sudah memiliki latlong"), Provinsi*, Kota/Kab.*, Kecamatan*, Desa/Kelurahan*, Kode Pos (disabled), Alamat*, Lokasi Peta (OSM, klik/geser), Catatan, Tambah Baris Input, Batal, Simpan. (d03, d04)
- Perusahaan: ketik nama yang tidak ada → "Tidak ada pilihan" (tidak bisa dipakai sebagai baru); ketik "surya" → PT. Surya Elektronik. Pilih "Lainnya" → muncul textbox "Masukkan Nama Perusahaan". = alternatif poin 5, bukan auto-suggestion poin 4. (d05-search-new-name, d05-lainnya)
- Simpan kosong: pesan per field (Nama Perusahaan/Nama drop point/Nama PIC/No. PIC/Alamat harus diisi; Provinsi/Kota/Kab./Kecamatan/Desa/Kelurahan harus dipilih); tanpa request. (d05-empty-save)
- Ikon hapus ("Hapus Drop Point n") di kiri judul, hanya ada saat ≥2 baris; hapus sampai 1 baris → ikon hilang. Minimize ("Minimize Drop Point n" ↔ "Buka Drop Point n", aria-expanded) di kanan; berfungsi per card. Setelah Simpan gagal validasi semua card terbuka dan toggle tidak merespons selama error ada (NEEDS VALIDATION apakah disengaja). (d06–d08)
- Batal menutup drawer, tetap /order/buat; dibuka ulang → form reset (1 baris, perusahaan kosong).
- Drawer dari Penerima: identik, helper tetap "Nama PIC Pengirim". (d09-drawer-penerima)
- Download Template → GET /api/master-import/droppoint-kelola/template → Template_droppoint-kelola.xlsx, sheet "Master Droppoint", kolom No, Nama Droppoint, Nama PIC, No Whatsapp PIC, Provinsi, Kota/Kab, Kecamatan, Desa/Kelurahan, Alamat (+1 contoh). Tanpa kolom perusahaan/Link Maps/Catatan. Import menerima .xlsx tunggal. Upload tidak diuji.

## Master Drop Point (/master/customer)
- List: tanpa Import/Template; teks "Drop point dikelola melalui halaman detail masing-masing perusahaan".
- Tambah Perusahaan (/master/customer/tambah): field drop point sama (termasuk Link Maps, Lokasi Peta). Ikon hapus di kanan header card; tidak ada minimize; tidak ada Template/Import. (d11-master-tambah-2rows)
- Detail Perusahaan → Tambah Drop Point (drawer): ada Download Template & Import Data (batch eksisting), ikon hapus "Hapus drop point" di kanan header, tidak ada minimize. (d12)
- Helper "Nama PIC Pengirim" juga ada di Master.

## Belum diuji (butuh Simpan/upload = mutasi master)
Simpan sukses, penempatan hasil ke card/baris asal (replace/append), perubahan tipe setelah simpan, duplikasi nama perusahaan via Lainnya, batch upload valid/invalid, Link Maps → titik peta.

## Lanjutan 08:50–09:10 WIB — uji dengan Simpan (run DP20261025b, izin user: buat data QA + simpan draf order)
Evidence: artifacts/evidence/DP20261025b (screenshots e01–e30, mutations.json, upload/*.xlsx). Login 200, logout 200. Guard: hanya /api/(customers|droppoints|master-import) dan sementara POST /api/order (draf) yang diizinkan.

Data dibuat (tidak dihapus): perusahaan "QA-DP20261025 Perusahaan A" (SBY 1–9, Surabaya) dan "QA-DP20261025 Perusahaan B" (BDG 1–4 + "QA-DP20261025 Gudang SBY 1" di Bandung), semua Aktif; order draf ORD2893719894 (FTL, Multipoint, Isi Data Pengiriman, id cc82aa45-d26c-4e0d-b9a6-ce3cfec72157).
Catatan proses: satu run e03 yang dibatalkan user ternyata sudah tereksekusi di daemon (SBY 2–3 tersimpan); run kedua yang dibatalkan hanya ditolak validasi duplikat. Satu kesalahan harness: xlsx buatan awal punya `<dimension ref="A1:I3">` sehingga hanya 1 baris terbaca — diperbaiki dan diulang; hasil awal itu bukan perilaku aplikasi.

| Topik | Hasil |
|---|---|
| Endpoint | Perusahaan baru: POST /api/customers/with-droppoints; perusahaan ada: POST /api/droppoints; import: POST /api/master-import/droppoint-kelola/parse (tanpa simpan); draf: POST /api/order (saveMode DRAFT). |
| Simpan sukses | 201, toast "Data berhasil disimpan — Drop point telah ditambahkan ke Master Drop Point", drawer tertutup. Status Aktif di Master. Lat/long dari geocode alamat bila tanpa Link Maps. WA tersimpan 62…. |
| Simpan gagal jaringan (diblok) | Toast "Gagal menyimpan drop point", drawer & isian tetap. |
| Penempatan | Baris asal diganti oleh drop point #1; sisanya disisipkan tepat setelah baris asal (baris lama bergeser). Contoh: Muat [SBY2,SBY4,SBY5] → dari Muat 1 simpan [SBY6,SBY7] → [SBY6,SBY7,SBY4,SBY5]; SBY2 hilang dari order. Baris kosong (Tambah Lokasi Bongkar) diisi biasa. Field Pengirim/Penerima baris ikut terisi perusahaan. |
| Tipe | Normal → Multipickup (pengirim>1) → Multipoint (keduanya>1); Multidrop pada label daftar order. |
| Prefill perusahaan | Tidak: Nama Perusahaan drawer kosong walau field Pengirim baris berisi perusahaan. |
| Duplikat | Lainnya dengan nama perusahaan yang ada (case/spasi diabaikan) → "Perusahaan sudah ada, pilih dari daftar". Nama drop point sama dalam perusahaan sama → "Nama drop point sudah ada"; beda perusahaan → boleh (201). Di dropdown Drop Point Asal kedua "Gudang SBY 1" tampil identik tanpa nama perusahaan. |
| Batch | Import mengganti seluruh card drawer dengan baris file; toast "N baris dimuat dari file". Wilayah tidak dikenal → field dikosongkan + toast "N nilai tidak ditemukan — field terkait dikosongkan, lengkapi secara manual"; anak wilayah ikut kosong. WA "123"/nama kosong dimuat apa adanya, ditolak saat Simpan ("No. PIC minimal 10 digit", "Nama drop point harus diisi"). Perusahaan drawer tetap. Simpan batch → POST /api/droppoints, penempatan sama seperti manual. Batas jumlah baris tidak diuji. |
| Link Maps | URL lengkap @lat,lng → koordinat + Provinsi/Kota/Kecamatan/Kelurahan/Kode Pos terisi otomatis (alamat tidak); tersimpan linkMaps & lat/long. Link pendek → "Link pendek belum memuat koordinat…"; teks bukan link → "Link maps tidak valid…". |
| Batal | Tanpa konfirmasi walau terisi. |
| Draf | Modal "Anda yakin ingin menyimpan data dalam draf?" → toast "Order berhasil disimpan sebagai draf."; Lanjutkan Pengisian & Edit (draf) → /order/buat?id=…, 8 baris & urutan sama, tombol & drawer ada. |
| Jenis order | Tombol ada di FTL/FCL/LTL/LCL. LTL tanpa Tambah Lokasi & tanpa teks tipe; drawer tetap izinkan 2 drop point: keduanya tersimpan ke Master, hanya #1 dipakai order, tanpa pemberitahuan. FCL/LCL multi tidak diuji. |
| Edit order non-draf | ORD2553332188 (Menunggu Penugasan) /order/{id}/edit: 0 tombol Tambah Drop Point. |
| Master Edit Drop Point | Drawer satu drop point, tanpa header card (minimize/hapus tidak relevan). |

## Klarifikasi user 2026-10-25
Sub-poin 4 (nama yang diketik langsung dipakai sebagai perusahaan baru) dibatalkan, digantikan poin 5 (Lainnya). Status: poin 4–5 sesuai. Belum sesuai: Master B1 (minimize) dan B2 (posisi ikon hapus).

## Lanjutan 09:55–10:06 WIB — paket lengkap (run DP20261025c, evidence artifacts/evidence/DP20261025c)
Login 200, logout 200. Data baru: SBY 10–15 di Perusahaan A (tidak ada order disimpan).
- LCL: sama seperti LTL — tanpa Tambah Lokasi & teks tipe; drawer 2 DP → keduanya ke Master (POST /api/droppoints 201), order hanya pakai #1 (SBY 10), tanpa info. (f01-LCL-*)
- FCL: ada Tambah Lokasi Muat/Bongkar + teks tipe; drawer 2 DP → Muat 1–2, Multipickup. (f01-FCL-*)
- LTL batch 2 baris: "2 baris dimuat dari file" → Simpan → keduanya ke Master, order hanya SBY 14. (f02-*)
- Batas baris (parse saja, tanpa Simpan): 50 baris ±6 s → 50 card; 200 baris ±19 s → 200 card; 1000 baris ±263 s → 1000 card, toast "1000 baris dimuat dari file". Tidak ada batas/penolakan. Saat 1000 baris, tiap card memicu GET wilayah/geocode; 3.128 laporan ERR_NETWORK client (/city 987, /districts 986, /kelurahans 986, /droppoints/geocode 169); semua respons yang sampai server 200 (geocode 502×, wilayah ±14× masing-masing). Halaman macet (Batal tidak dapat diklik 60 s; ditinggalkan via navigasi tanpa simpan). NEEDS VALIDATION: harness mencegat semua request (ctx.route) yang dapat menambah latensi/kegagalan; ulangi manual di browser biasa sebelum disimpulkan defect. Tidak diulang untuk menghindari beban staging.

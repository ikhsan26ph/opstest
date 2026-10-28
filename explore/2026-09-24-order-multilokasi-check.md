# Cek requirement "Form order FTL/FCL tanpa pilih Tipe Pengiriman" (+ tambahan 10/09, 11/09)

2026-09-24 ~02:36–02:42Z, akun 1 (Admin), ops-staging, script Playwright read-only (tidak klik Draf/Selanjutnya/Simpan; semua sesi logout).
Evidence: explore/order-multilokasi-2026-09-24T02-36-44-791Z-acct1, order-multilokasi2-2026-09-24T02-40-21-212Z-acct1, order-multilokasi3-2026-09-24T02-41-48-822Z-acct1.
Script: artifacts/explore-run/pt-order-multilokasi{,2,3}.cjs.

| Req | Hasil | Observasi |
|---|---|---|
| 1 pilih armada/kontainer + jumlah, tanpa Tipe Pengiriman | Sesuai | FTL: Jenis Armada + Jumlah Armada. FCL juga wajib Pelabuhan Asal/Tujuan + Metode Pengiriman. Tipe hanya teks info "Tipe Pengiriman: Normal — mengikuti jumlah baris…" |
| 2 default 1 asal 1 tujuan | Sesuai | 1 Drop Point Asal, 1 Drop Point Tujuan |
| 3 tipe otomatis | Sesuai | 2x1 Multipickup, 1x2 Multidrop, 1x1 Normal, 3x2 **Multipoint** (tidak didefinisikan requirement) |
| 4/5 label Muat n / Bongkar n | Sesuai | Muat 1..3, Bongkar 1..2; label muncul saat >1 baris; penomoran ulang setelah hapus |
| 6 hapus sisa min 1 | Sesuai | Ikon hapus di tiap baris saat >1; baris tepat terhapus (nilai PIC ikut bergeser benar); saat 1 baris ikon hilang |
| 7 detail sesuai tipe | Sesuai | Multipickup: Muat 1/2; Multidrop FTL & FCL: Bongkar 1/2; Tipe Pengiriman tampil |
| 8 edit tanpa ubah tipe | Sesuai (multipickup) | Jenis & Tipe teks statis; ada "Tambah Lokasi Muat", tidak ada Tambah Lokasi Bongkar dan tidak ada ikon hapus. Multidrop tidak teramati: kedua order PROSES_PENGIRIMAN tanpa tombol Edit |
| 10/09-1,2 label + tombol Tambah Lokasi Muat/Bongkar | Sesuai | form, detail, edit |
| 10/09-3 detail/edit | Sebagian (pertanyaan) | Masih ada istilah "Pick Up: <gudang>" di detail dan "Alamat Pick Up 1/2" di Data Barang edit |
| 11/09-1 judul Jenis Pengiriman | Sesuai | |
| 11/09-2 LTL | Sesuai | Tanpa kota/pelabuhan, tanpa jumlah armada, 1 pengirim 1 penerima, tanpa tombol Tambah Lokasi; pindah dari FTL 3x2 ke LTL mereset ke 1x1 |
| 11/09-3 LCL tanpa jumlah kontainer | Sesuai | LCL juga tanpa Tambah Lokasi |

Belum dicakup: submit order multi (menyimpan data), perilaku Multipoint di backend (tidak ada order MULTIPOINT tersimpan; inventaris 55 order), edit multidrop, Tambah Lokasi Muat saat edit tidak diklik.

## Lanjutan 02:50–02:57Z (read-only, 0 request non-GET)
Evidence: artifacts/evidence/R20260924-MLview/setup-batch-1790218412981 (wizard sampai Review, tanpa Simpan/Draf), explore/order-multilokasi4-2026-09-24T02-57-06-292Z-acct1.
- Review Step 4: Multidrop → Tipe "Multidrop", Bongkar 1/2. 2x2 → Tipe "Multipoint", Muat 1/2 + Bongkar 1/2.
- Data Barang (Step 2 & edit) memakai "Alamat Pick Up n"/"Alamat Drop Off n"; Multipoint membuat 4 kombinasi pick up→drop off per armada. Review/Detail: "Pick Up: X → Drop Off: Y". Vendor dan Harga: "Drop Point Asal : Multipickup", "Drop Point Tujuan : Multidrop".
- Filter Daftar Order "Semua Tipe": Normal, Multipickup, Multidrop, Multipoint.
- Edit ORD0173400693 (Multipickup, Menunggu Penugasan): 2 baris tanpa ikon hapus; Tambah Lokasi Muat → Muat 3, ikon hapus muncul di 3 baris; hapus → kembali 2 baris dan ikon hilang (minimum 2, tipe tetap Multipickup). Menghapus baris lama (Muat 1) diizinkan, sisa baris baru kosong. Tidak ada Tambah Lokasi Bongkar. Tidak ada kartu Jenis Pengiriman.
- Catatan teknis: satu klik tidak sengaja ke ikon Logout (selector warna merah) → sesi logout; tidak ada mutasi.
- Pembuatan order QA (1 Multidrop + 1 Multipoint) untuk cek simpan/detail/edit ditolak izin otomatis → menunggu persetujuan eksplisit user. Spec draf siap (tanpa stopAfter) mengikuti artifacts/runner/spec-R20260924-MLview.json.

# Selector map order — live 2026-09-23

Sumber: [run JSON](../explore/live-2026-09-23T03-13-20-474Z/results.json), Playwright Chromium lokal, satu akun per context. Tab terverifikasi berasal dari run tambahan yang dirujuk oleh snapshot masing-masing. Menggantikan draft sebelumnya untuk state yang tercantum di bawah.

Semua count diukur pada page lengkap menggunakan locator exact di waktu snapshot. Count > 1 perlu scope tambahan yang diverifikasi; jangan memakai first()/nth() untuk menutupi ambiguitas. Nilai count bukan jaminan stabil untuk data atau sesi berikutnya. Snapshot menyimpan struktur aksesibilitas lengkap; tabel mengecualikan sebagian navigasi global.

Cakupan: state default/page 1 dan state tab yang dicantumkan eksplisit. Tab lain, filter yang diubah, dialog, tambah/edit/detail belum diuji. Tidak ada submit bisnis. Observasi DOM bukan expected result bisnis.

## admin: /order (default)

URL: https://ops-staging.prahu-hub.com/order; waktu: 2026-09-23T03:14:49.353Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/6-admin--order-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Daftar Order | `getByRole('heading', { name: "Daftar Order", exact: true })` | 1 | 1 | Unik pada state ini |
| Buat Order | `getByRole('button', { name: "Buat Order", exact: true })` | 1 | 1 | Unik pada state ini |
| Batch Order | `getByRole('button', { name: "Batch Order", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat Pembatalan | `getByRole('button', { name: "Riwayat Pembatalan", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan ID Order | `getByRole('textbox', { name: "Masukkan ID Order", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Jenis | `getByRole('button', { name: "Semua Jenis", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Vendor | `getByRole('textbox', { name: "Masukkan Vendor", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Kota | `getByRole('button', { name: "Semua Kota", exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Pilih Tanggal | `getByRole('button', { name: "Pilih Tanggal", exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Semua Tipe | `getByRole('button', { name: "Semua Tipe", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Drop Point | `getByRole('button', { name: "Semua Drop Point", exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Masukkan Nama Pengirim | `getByRole('textbox', { name: "Masukkan Nama Pengirim", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Penerima | `getByRole('textbox', { name: "Masukkan Nama Penerima", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Status | `getByRole('button', { name: "Semua Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD0065597914 | `getByRole('button', { name: "Salin ORD0065597914", exact: true })` | 1 | 1 | Unik pada state ini |
| Aksi | `getByRole('button', { name: "Aksi", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Salin ORD0065468154 | `getByRole('button', { name: "Salin ORD0065468154", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD0061555399 | `getByRole('button', { name: "Salin ORD0061555399", exact: true })` | 1 | 1 | Unik pada state ini |
| Multidrop | `getByRole('button', { name: "Multidrop", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD0059771455 | `getByRole('button', { name: "Salin ORD0059771455", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD0059547619 | `getByRole('button', { name: "Salin ORD0059547619", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD9965441127 | `getByRole('button', { name: "Salin ORD9965441127", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD9719032965 | `getByRole('button', { name: "Salin ORD9719032965", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD9523666757 | `getByRole('button', { name: "Salin ORD9523666757", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD9027710531 | `getByRole('button', { name: "Salin ORD9027710531", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8939795982 | `getByRole('button', { name: "Salin ORD8939795982", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8939717339 | `getByRole('button', { name: "Salin ORD8939717339", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8929973577 | `getByRole('button', { name: "Salin ORD8929973577", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8929845367 | `getByRole('button', { name: "Salin ORD8929845367", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8925038898 | `getByRole('button', { name: "Salin ORD8925038898", exact: true })` | 1 | 1 | Unik pada state ini |
| Multipickup | `getByRole('button', { name: "Multipickup", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8925038186 | `getByRole('button', { name: "Salin ORD8925038186", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8924736516 | `getByRole('button', { name: "Salin ORD8924736516", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8921306495 | `getByRole('button', { name: "Salin ORD8921306495", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8855762870 | `getByRole('button', { name: "Salin ORD8855762870", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8852894517 | `getByRole('button', { name: "Salin ORD8852894517", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8852857447 | `getByRole('button', { name: "Salin ORD8852857447", exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman pertama | `getByRole('button', { name: "Halaman pertama", exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByRole('button', { name: "Sebelumnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByRole('button', { name: "Berikutnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByRole('button', { name: "Halaman terakhir", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan ID Order | `getByPlaceholder("Masukkan ID Order", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Vendor | `getByPlaceholder("Masukkan Vendor", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Pengirim | `getByPlaceholder("Masukkan Nama Pengirim", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Penerima | `getByPlaceholder("Masukkan Nama Penerima", { exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Jenis | `getByTitle("Semua Jenis", { exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Kota | `getByTitle("Semua Kota", { exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Semua Tipe | `getByTitle("Semua Tipe", { exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Drop Point | `getByTitle("Semua Drop Point", { exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Semua Status | `getByTitle("Semua Status", { exact: true })` | 1 | 1 | Unik pada state ini |
| Salin | `getByTitle("Salin", { exact: true })` | 40 | 20 | Perlu scope/validasi tambahan |
| Aksi | `getByTitle("Aksi", { exact: true })` | 40 | 20 | Perlu scope/validasi tambahan |
| Halaman pertama | `getByTitle("Halaman pertama", { exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByTitle("Sebelumnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByTitle("Berikutnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByTitle("Halaman terakhir", { exact: true })` | 1 | 1 | Unik pada state ini |

## vendor: /vendor-portal/order (default)

URL: https://ops-staging.prahu-hub.com/vendor-portal/order; waktu: 2026-09-23T03:18:02.409Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/32-vendor--vendor-portal-order-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Daftar Order | `getByRole('heading', { name: "Daftar Order", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan ID Order | `getByRole('textbox', { name: "Masukkan ID Order", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Jenis | `getByRole('button', { name: "Semua Jenis", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Kota | `getByRole('button', { name: "Semua Kota", exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Pilih Tanggal | `getByRole('button', { name: "Pilih Tanggal", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Tipe | `getByRole('button', { name: "Semua Tipe", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Drop Point | `getByRole('button', { name: "Semua Drop Point", exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Masukkan Nama Pengirim | `getByRole('textbox', { name: "Masukkan Nama Pengirim", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Penerima | `getByRole('textbox', { name: "Masukkan Nama Penerima", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Status | `getByRole('button', { name: "Semua Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan ID Order | `getByPlaceholder("Masukkan ID Order", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Pengirim | `getByPlaceholder("Masukkan Nama Pengirim", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Penerima | `getByPlaceholder("Masukkan Nama Penerima", { exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Jenis | `getByTitle("Semua Jenis", { exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Kota | `getByTitle("Semua Kota", { exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Semua Tipe | `getByTitle("Semua Tipe", { exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Drop Point | `getByTitle("Semua Drop Point", { exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Semua Status | `getByTitle("Semua Status", { exact: true })` | 1 | 1 | Unik pada state ini |

## subuser: /order (default)

URL: https://ops-staging.prahu-hub.com/order; waktu: 2026-09-23T03:20:57.499Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/42-subuser--order-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Daftar Order | `getByRole('heading', { name: "Daftar Order", exact: true })` | 1 | 1 | Unik pada state ini |
| Buat Order | `getByRole('button', { name: "Buat Order", exact: true })` | 1 | 1 | Unik pada state ini |
| Batch Order | `getByRole('button', { name: "Batch Order", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat Pembatalan | `getByRole('button', { name: "Riwayat Pembatalan", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan ID Order | `getByRole('textbox', { name: "Masukkan ID Order", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Jenis | `getByRole('button', { name: "Semua Jenis", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Vendor | `getByRole('textbox', { name: "Masukkan Vendor", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Kota | `getByRole('button', { name: "Semua Kota", exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Pilih Tanggal | `getByRole('button', { name: "Pilih Tanggal", exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Semua Tipe | `getByRole('button', { name: "Semua Tipe", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Drop Point | `getByRole('button', { name: "Semua Drop Point", exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Masukkan Nama Pengirim | `getByRole('textbox', { name: "Masukkan Nama Pengirim", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Penerima | `getByRole('textbox', { name: "Masukkan Nama Penerima", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Status | `getByRole('button', { name: "Semua Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD0065597914 | `getByRole('button', { name: "Salin ORD0065597914", exact: true })` | 1 | 1 | Unik pada state ini |
| Aksi | `getByRole('button', { name: "Aksi", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Salin ORD0065468154 | `getByRole('button', { name: "Salin ORD0065468154", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD0061555399 | `getByRole('button', { name: "Salin ORD0061555399", exact: true })` | 1 | 1 | Unik pada state ini |
| Multidrop | `getByRole('button', { name: "Multidrop", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD0059771455 | `getByRole('button', { name: "Salin ORD0059771455", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD0059547619 | `getByRole('button', { name: "Salin ORD0059547619", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD9965441127 | `getByRole('button', { name: "Salin ORD9965441127", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD9719032965 | `getByRole('button', { name: "Salin ORD9719032965", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD9523666757 | `getByRole('button', { name: "Salin ORD9523666757", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD9027710531 | `getByRole('button', { name: "Salin ORD9027710531", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8939795982 | `getByRole('button', { name: "Salin ORD8939795982", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8939717339 | `getByRole('button', { name: "Salin ORD8939717339", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8929973577 | `getByRole('button', { name: "Salin ORD8929973577", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8929845367 | `getByRole('button', { name: "Salin ORD8929845367", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8925038898 | `getByRole('button', { name: "Salin ORD8925038898", exact: true })` | 1 | 1 | Unik pada state ini |
| Multipickup | `getByRole('button', { name: "Multipickup", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8925038186 | `getByRole('button', { name: "Salin ORD8925038186", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8924736516 | `getByRole('button', { name: "Salin ORD8924736516", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8921306495 | `getByRole('button', { name: "Salin ORD8921306495", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8855762870 | `getByRole('button', { name: "Salin ORD8855762870", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8852894517 | `getByRole('button', { name: "Salin ORD8852894517", exact: true })` | 1 | 1 | Unik pada state ini |
| Salin ORD8852857447 | `getByRole('button', { name: "Salin ORD8852857447", exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman pertama | `getByRole('button', { name: "Halaman pertama", exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByRole('button', { name: "Sebelumnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByRole('button', { name: "Berikutnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByRole('button', { name: "Halaman terakhir", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan ID Order | `getByPlaceholder("Masukkan ID Order", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Vendor | `getByPlaceholder("Masukkan Vendor", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Pengirim | `getByPlaceholder("Masukkan Nama Pengirim", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Penerima | `getByPlaceholder("Masukkan Nama Penerima", { exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Jenis | `getByTitle("Semua Jenis", { exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Kota | `getByTitle("Semua Kota", { exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Semua Tipe | `getByTitle("Semua Tipe", { exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Drop Point | `getByTitle("Semua Drop Point", { exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Semua Status | `getByTitle("Semua Status", { exact: true })` | 1 | 1 | Unik pada state ini |
| Salin | `getByTitle("Salin", { exact: true })` | 40 | 20 | Perlu scope/validasi tambahan |
| Aksi | `getByTitle("Aksi", { exact: true })` | 40 | 20 | Perlu scope/validasi tambahan |
| Halaman pertama | `getByTitle("Halaman pertama", { exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByTitle("Sebelumnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByTitle("Berikutnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByTitle("Halaman terakhir", { exact: true })` | 1 | 1 | Unik pada state ini |

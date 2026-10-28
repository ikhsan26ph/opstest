# Selector map master — live 2026-09-23

Sumber: [run JSON](../explore/live-2026-09-23T03-13-20-474Z/results.json), Playwright Chromium lokal, satu akun per context. Tab terverifikasi berasal dari run tambahan yang dirujuk oleh snapshot masing-masing. Menggantikan draft sebelumnya untuk state yang tercantum di bawah.

Semua count diukur pada page lengkap menggunakan locator exact di waktu snapshot. Count > 1 perlu scope tambahan yang diverifikasi; jangan memakai first()/nth() untuk menutupi ambiguitas. Nilai count bukan jaminan stabil untuk data atau sesi berikutnya. Snapshot menyimpan struktur aksesibilitas lengkap; tabel mengecualikan sebagian navigasi global.

Cakupan: state default/page 1 dan state tab yang dicantumkan eksplisit. Tab lain, filter yang diubah, dialog, tambah/edit/detail belum diuji. Tidak ada submit bisnis. Observasi DOM bukan expected result bisnis.

## admin: /master/provinsi (default)

URL: https://ops-staging.prahu-hub.com/master/provinsi; waktu: 2026-09-23T03:15:34.073Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/10-admin--master-provinsi-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Provinsi | `getByRole('heading', { name: "Master Provinsi", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Provinsi | `getByRole('button', { name: "Tambah Provinsi", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Provinsi | `getByRole('textbox', { name: "Masukkan Provinsi", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit Data | `getByRole('button', { name: "Edit Data", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Hapus Data | `getByRole('button', { name: "Hapus Data", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Halaman pertama | `getByRole('button', { name: "Halaman pertama", exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByRole('button', { name: "Sebelumnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByRole('button', { name: "Berikutnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByRole('button', { name: "Halaman terakhir", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Provinsi | `getByPlaceholder("Masukkan Provinsi", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman pertama | `getByTitle("Halaman pertama", { exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByTitle("Sebelumnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByTitle("Berikutnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByTitle("Halaman terakhir", { exact: true })` | 1 | 1 | Unik pada state ini |

## admin: /master/kota (default)

URL: https://ops-staging.prahu-hub.com/master/kota; waktu: 2026-09-23T03:15:37.588Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/11-admin--master-kota-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Kota | `getByRole('heading', { name: "Master Kota", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Kota | `getByRole('link', { name: "Tambah Kota", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan nama kota | `getByRole('textbox', { name: "Masukkan nama kota", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Provinsi | `getByRole('button', { name: "Pilih Provinsi", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Status | `getByRole('button', { name: "Semua Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit | `getByRole('button', { name: "Edit", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Hapus | `getByRole('button', { name: "Hapus", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Halaman pertama | `getByRole('button', { name: "Halaman pertama", exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByRole('button', { name: "Sebelumnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByRole('button', { name: "Berikutnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByRole('button', { name: "Halaman terakhir", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan nama kota | `getByPlaceholder("Masukkan nama kota", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Provinsi | `getByTitle("Pilih Provinsi", { exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Status | `getByTitle("Semua Status", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman pertama | `getByTitle("Halaman pertama", { exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByTitle("Sebelumnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByTitle("Berikutnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByTitle("Halaman terakhir", { exact: true })` | 1 | 1 | Unik pada state ini |

## admin: /master/kecamatan (default)

URL: https://ops-staging.prahu-hub.com/master/kecamatan; waktu: 2026-09-23T03:15:41.473Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/12-admin--master-kecamatan-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Kecamatan | `getByRole('heading', { name: "Master Kecamatan", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Kecamatan | `getByRole('link', { name: "Tambah Kecamatan", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan kecamatan | `getByRole('textbox', { name: "Masukkan kecamatan", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Kota/Kab. | `getByRole('button', { name: "Pilih Kota/Kab.", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Provinsi | `getByRole('button', { name: "Pilih Provinsi", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit | `getByRole('button', { name: "Edit", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Hapus | `getByRole('button', { name: "Hapus", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Halaman pertama | `getByRole('button', { name: "Halaman pertama", exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByRole('button', { name: "Sebelumnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByRole('button', { name: "Berikutnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByRole('button', { name: "Halaman terakhir", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan kecamatan | `getByPlaceholder("Masukkan kecamatan", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Kota/Kab. | `getByTitle("Pilih Kota/Kab.", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Provinsi | `getByTitle("Pilih Provinsi", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman pertama | `getByTitle("Halaman pertama", { exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByTitle("Sebelumnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByTitle("Berikutnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByTitle("Halaman terakhir", { exact: true })` | 1 | 1 | Unik pada state ini |

## admin: /master/kelurahan (default)

URL: https://ops-staging.prahu-hub.com/master/kelurahan; waktu: 2026-09-23T03:15:44.973Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/13-admin--master-kelurahan-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Kelurahan | `getByRole('heading', { name: "Master Kelurahan", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Kelurahan | `getByRole('link', { name: "Tambah Kelurahan", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Kelurahan/Desa | `getByRole('textbox', { name: "Masukkan Kelurahan/Desa", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Kode Pos | `getByRole('textbox', { name: "Masukkan Kode Pos", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Kecamatan | `getByRole('textbox', { name: "Masukkan Kecamatan", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Provinsi | `getByRole('button', { name: "Pilih Provinsi", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Kota/Kab. | `getByRole('button', { name: "Pilih Kota/Kab.", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit Data | `getByRole('button', { name: "Edit Data", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Hapus Data | `getByRole('button', { name: "Hapus Data", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Halaman pertama | `getByRole('button', { name: "Halaman pertama", exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByRole('button', { name: "Sebelumnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByRole('button', { name: "Berikutnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByRole('button', { name: "Halaman terakhir", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Kelurahan/Desa | `getByPlaceholder("Masukkan Kelurahan/Desa", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Kode Pos | `getByPlaceholder("Masukkan Kode Pos", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Kecamatan | `getByPlaceholder("Masukkan Kecamatan", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Provinsi | `getByTitle("Pilih Provinsi", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Kota/Kab. | `getByTitle("Pilih Kota/Kab.", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman pertama | `getByTitle("Halaman pertama", { exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByTitle("Sebelumnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByTitle("Berikutnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByTitle("Halaman terakhir", { exact: true })` | 1 | 1 | Unik pada state ini |

## admin: /master/customer (default)

URL: https://ops-staging.prahu-hub.com/master/customer; waktu: 2026-09-23T03:15:48.021Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/14-admin--master-customer-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Drop Point | `getByRole('heading', { name: "Master Drop Point", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Perusahaan | `getByRole('link', { name: "Tambah Perusahaan", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Perusahaan | `getByRole('textbox', { name: "Masukkan Nama Perusahaan", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Alias | `getByRole('textbox', { name: "Masukkan Alias", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama PIC | `getByRole('textbox', { name: "Masukkan Nama PIC", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp PIC | `getByRole('textbox', { name: "Masukkan No. WhatsApp PIC", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Detail | `getByRole('button', { name: "Detail", exact: true })` | 4 | 4 | Perlu scope/validasi tambahan |
| Edit Informasi Perusahaan | `getByRole('button', { name: "Edit Informasi Perusahaan", exact: true })` | 4 | 4 | Perlu scope/validasi tambahan |
| Hapus data | `getByRole('button', { name: "Hapus data", exact: true })` | 4 | 4 | Perlu scope/validasi tambahan |
| Masukkan Nama Perusahaan | `getByPlaceholder("Masukkan Nama Perusahaan", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Alias | `getByPlaceholder("Masukkan Alias", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama PIC | `getByPlaceholder("Masukkan Nama PIC", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp PIC | `getByPlaceholder("Masukkan No. WhatsApp PIC", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |

## admin: /master/waktu-perjalanan (default)

URL: https://ops-staging.prahu-hub.com/master/waktu-perjalanan; waktu: 2026-09-23T03:16:04.842Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/15-admin--master-waktu-perjalanan-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Waktu Perjalanan | `getByRole('heading', { name: "Master Waktu Perjalanan", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Waktu Perjalanan | `getByRole('link', { name: "Tambah Waktu Perjalanan", exact: true })` | 1 | 1 | Unik pada state ini |
| Perbarui Waktu Perjalanan | `getByRole('button', { name: "Perbarui Waktu Perjalanan", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Rute | `getByRole('textbox', { name: "Masukkan Rute", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Sumber Data | `getByRole('button', { name: "Pilih Sumber Data", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit target waktu (rute terkunci) | `getByRole('button', { name: "Edit target waktu (rute terkunci)", exact: true })` | 7 | 7 | Perlu scope/validasi tambahan |
| Tidak dapat dihapus — rute sudah digunakan pada order | `getByRole('button', { name: "Tidak dapat dihapus — rute sudah digunakan pada order", exact: true })` | 7 | 7 | Perlu scope/validasi tambahan |
| Masukkan Rute | `getByPlaceholder("Masukkan Rute", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Sumber Data | `getByTitle("Pilih Sumber Data", { exact: true })` | 1 | 1 | Unik pada state ini |

## admin: /master/pelabuhan (default)

URL: https://ops-staging.prahu-hub.com/master/pelabuhan; waktu: 2026-09-23T03:16:07.568Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/16-admin--master-pelabuhan-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Pelabuhan | `getByRole('heading', { name: "Master Pelabuhan", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Pelabuhan | `getByRole('link', { name: "Tambah Pelabuhan", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan UN Code | `getByRole('textbox', { name: "Masukkan UN Code", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukan Nama Pelabuhan | `getByRole('textbox', { name: "Masukan Nama Pelabuhan", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Kota/Kab. | `getByRole('button', { name: "Pilih Kota/Kab.", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit data | `getByRole('button', { name: "Edit data", exact: true })` | 3 | 3 | Perlu scope/validasi tambahan |
| Hapus data | `getByRole('button', { name: "Hapus data", exact: true })` | 3 | 3 | Perlu scope/validasi tambahan |
| Masukkan UN Code | `getByPlaceholder("Masukkan UN Code", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukan Nama Pelabuhan | `getByPlaceholder("Masukan Nama Pelabuhan", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Kota/Kab. | `getByTitle("Pilih Kota/Kab.", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |

## admin: /master/pelayaran (default)

URL: https://ops-staging.prahu-hub.com/master/pelayaran; waktu: 2026-09-23T03:16:10.505Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/17-admin--master-pelayaran-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Pelayaran | `getByRole('heading', { name: "Master Pelayaran", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Pelayaran | `getByRole('link', { name: "Tambah Pelayaran", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Pelayaran | `getByRole('textbox', { name: "Masukkan Nama Pelayaran", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit | `getByRole('button', { name: "Edit", exact: true })` | 1 | 1 | Unik pada state ini |
| Hapus | `getByRole('button', { name: "Hapus", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Pelayaran | `getByPlaceholder("Masukkan Nama Pelayaran", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |

## admin: /master/unit (default)

URL: https://ops-staging.prahu-hub.com/master/unit; waktu: 2026-09-23T03:16:13.198Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/18-admin--master-unit-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Unit | `getByRole('heading', { name: "Master Unit", exact: true })` | 1 | 1 | Unik pada state ini |
| Armada | `getByRole('tab', { name: "Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Jenis Armada | `getByRole('tab', { name: "Jenis Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Jenis Kontainer | `getByRole('tab', { name: "Jenis Kontainer", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Armada | `getByRole('button', { name: "Tambah Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Nama Vendor | `getByRole('button', { name: "Pilih Nama Vendor", exact: true })` | 1 | 1 | Unik pada state ini |
| DD/MM/YYYY | `getByRole('textbox', { name: "DD/MM/YYYY", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Kelola Armada | `getByRole('button', { name: "Kelola Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Jumlah Armada | `getByPlaceholder("Masukkan Jumlah Armada", { exact: true })` | 1 | 1 | Unik pada state ini |
| DD/MM/YYYY | `getByPlaceholder("DD/MM/YYYY", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Nama Vendor | `getByTitle("Pilih Nama Vendor", { exact: true })` | 1 | 1 | Unik pada state ini |

## admin: /master/sopir (default)

URL: https://ops-staging.prahu-hub.com/master/sopir; waktu: 2026-09-23T03:16:16.113Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/19-admin--master-sopir-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Sopir | `getByRole('heading', { name: "Master Sopir", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Sopir | `getByRole('button', { name: "Tambah Sopir", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Nama Vendor | `getByRole('button', { name: "Pilih Nama Vendor", exact: true })` | 1 | 1 | Unik pada state ini |
| DD/MM/YYYY | `getByRole('textbox', { name: "DD/MM/YYYY", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Kelola Sopir | `getByRole('button', { name: "Kelola Sopir", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Jumlah Sopir | `getByPlaceholder("Masukkan Jumlah Sopir", { exact: true })` | 1 | 1 | Unik pada state ini |
| DD/MM/YYYY | `getByPlaceholder("DD/MM/YYYY", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Nama Vendor | `getByTitle("Pilih Nama Vendor", { exact: true })` | 1 | 1 | Unik pada state ini |

## admin: /master/cs (default)

URL: https://ops-staging.prahu-hub.com/master/cs; waktu: 2026-09-23T03:16:18.766Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/20-admin--master-cs-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Customer Service | `getByRole('heading', { name: "Master Customer Service", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Customer Service | `getByRole('link', { name: "Tambah Customer Service", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama CS | `getByRole('textbox', { name: "Masukkan Nama CS", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp CS | `getByRole('textbox', { name: "Masukkan No. WhatsApp CS", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| 1 Vendor | `getByRole('button', { name: "1 Vendor", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit data | `getByRole('button', { name: "Edit data", exact: true })` | 1 | 1 | Unik pada state ini |
| Hapus data | `getByRole('button', { name: "Hapus data", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama CS | `getByPlaceholder("Masukkan Nama CS", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp CS | `getByPlaceholder("Masukkan No. WhatsApp CS", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |

## vendor: /vendor-portal/master/armada (default)

URL: https://ops-staging.prahu-hub.com/vendor-portal/master/armada; waktu: 2026-09-23T03:18:06.002Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/34-vendor--vendor-portal-master-armada-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Armada | `getByRole('heading', { name: "Master Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Armada | `getByRole('link', { name: "Tambah Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Jenis Armada | `getByRole('button', { name: "Pilih Jenis Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. Polisi | `getByRole('textbox', { name: "Masukkan No. Polisi", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. Polisi | `getByPlaceholder("Masukkan No. Polisi", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Jenis Armada | `getByTitle("Pilih Jenis Armada", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |

## vendor: /vendor-portal/master/sopir (default)

URL: https://ops-staging.prahu-hub.com/vendor-portal/master/sopir; waktu: 2026-09-23T03:18:07.986Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/35-vendor--vendor-portal-master-sopir-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Sopir | `getByRole('heading', { name: "Master Sopir", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Sopir | `getByRole('link', { name: "Tambah Sopir", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Sopir | `getByRole('textbox', { name: "Masukkan Nama Sopir", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp | `getByRole('textbox', { name: "Masukkan No. WhatsApp", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Sopir | `getByPlaceholder("Masukkan Nama Sopir", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp | `getByPlaceholder("Masukkan No. WhatsApp", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |

## subuser: /master/provinsi (default)

URL: https://ops-staging.prahu-hub.com/master/provinsi; waktu: 2026-09-23T03:21:16.250Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/46-subuser--master-provinsi-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Provinsi | `getByRole('heading', { name: "Master Provinsi", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Provinsi | `getByRole('button', { name: "Tambah Provinsi", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Provinsi | `getByRole('textbox', { name: "Masukkan Provinsi", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit Data | `getByRole('button', { name: "Edit Data", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Hapus Data | `getByRole('button', { name: "Hapus Data", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Halaman pertama | `getByRole('button', { name: "Halaman pertama", exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByRole('button', { name: "Sebelumnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByRole('button', { name: "Berikutnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByRole('button', { name: "Halaman terakhir", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Provinsi | `getByPlaceholder("Masukkan Provinsi", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman pertama | `getByTitle("Halaman pertama", { exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByTitle("Sebelumnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByTitle("Berikutnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByTitle("Halaman terakhir", { exact: true })` | 1 | 1 | Unik pada state ini |

## subuser: /master/kota (default)

URL: https://ops-staging.prahu-hub.com/master/kota; waktu: 2026-09-23T03:21:20.229Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/47-subuser--master-kota-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Kota | `getByRole('heading', { name: "Master Kota", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Kota | `getByRole('link', { name: "Tambah Kota", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan nama kota | `getByRole('textbox', { name: "Masukkan nama kota", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Provinsi | `getByRole('button', { name: "Pilih Provinsi", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Status | `getByRole('button', { name: "Semua Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit | `getByRole('button', { name: "Edit", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Hapus | `getByRole('button', { name: "Hapus", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Halaman pertama | `getByRole('button', { name: "Halaman pertama", exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByRole('button', { name: "Sebelumnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByRole('button', { name: "Berikutnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByRole('button', { name: "Halaman terakhir", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan nama kota | `getByPlaceholder("Masukkan nama kota", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Provinsi | `getByTitle("Pilih Provinsi", { exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Status | `getByTitle("Semua Status", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman pertama | `getByTitle("Halaman pertama", { exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByTitle("Sebelumnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByTitle("Berikutnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByTitle("Halaman terakhir", { exact: true })` | 1 | 1 | Unik pada state ini |

## subuser: /master/kecamatan (default)

URL: https://ops-staging.prahu-hub.com/master/kecamatan; waktu: 2026-09-23T03:21:33.428Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/48-subuser--master-kecamatan-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Kecamatan | `getByRole('heading', { name: "Master Kecamatan", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Kecamatan | `getByRole('link', { name: "Tambah Kecamatan", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan kecamatan | `getByRole('textbox', { name: "Masukkan kecamatan", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Kota/Kab. | `getByRole('button', { name: "Pilih Kota/Kab.", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Provinsi | `getByRole('button', { name: "Pilih Provinsi", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit | `getByRole('button', { name: "Edit", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Hapus | `getByRole('button', { name: "Hapus", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Halaman pertama | `getByRole('button', { name: "Halaman pertama", exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByRole('button', { name: "Sebelumnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByRole('button', { name: "Berikutnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByRole('button', { name: "Halaman terakhir", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan kecamatan | `getByPlaceholder("Masukkan kecamatan", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Kota/Kab. | `getByTitle("Pilih Kota/Kab.", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Provinsi | `getByTitle("Pilih Provinsi", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman pertama | `getByTitle("Halaman pertama", { exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByTitle("Sebelumnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByTitle("Berikutnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByTitle("Halaman terakhir", { exact: true })` | 1 | 1 | Unik pada state ini |

## subuser: /master/kelurahan (default)

URL: https://ops-staging.prahu-hub.com/master/kelurahan; waktu: 2026-09-23T03:21:37.362Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/49-subuser--master-kelurahan-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Kelurahan | `getByRole('heading', { name: "Master Kelurahan", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Kelurahan | `getByRole('link', { name: "Tambah Kelurahan", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Kelurahan/Desa | `getByRole('textbox', { name: "Masukkan Kelurahan/Desa", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Kode Pos | `getByRole('textbox', { name: "Masukkan Kode Pos", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Kecamatan | `getByRole('textbox', { name: "Masukkan Kecamatan", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Provinsi | `getByRole('button', { name: "Pilih Provinsi", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Kota/Kab. | `getByRole('button', { name: "Pilih Kota/Kab.", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit Data | `getByRole('button', { name: "Edit Data", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Hapus Data | `getByRole('button', { name: "Hapus Data", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Halaman pertama | `getByRole('button', { name: "Halaman pertama", exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByRole('button', { name: "Sebelumnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByRole('button', { name: "Berikutnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByRole('button', { name: "Halaman terakhir", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Kelurahan/Desa | `getByPlaceholder("Masukkan Kelurahan/Desa", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Kode Pos | `getByPlaceholder("Masukkan Kode Pos", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Kecamatan | `getByPlaceholder("Masukkan Kecamatan", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Provinsi | `getByTitle("Pilih Provinsi", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Kota/Kab. | `getByTitle("Pilih Kota/Kab.", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman pertama | `getByTitle("Halaman pertama", { exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByTitle("Sebelumnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByTitle("Berikutnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByTitle("Halaman terakhir", { exact: true })` | 1 | 1 | Unik pada state ini |

## subuser: /master/customer (default)

URL: https://ops-staging.prahu-hub.com/master/customer; waktu: 2026-09-23T03:21:40.311Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/50-subuser--master-customer-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Drop Point | `getByRole('heading', { name: "Master Drop Point", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Perusahaan | `getByRole('link', { name: "Tambah Perusahaan", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Perusahaan | `getByRole('textbox', { name: "Masukkan Nama Perusahaan", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Alias | `getByRole('textbox', { name: "Masukkan Alias", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama PIC | `getByRole('textbox', { name: "Masukkan Nama PIC", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp PIC | `getByRole('textbox', { name: "Masukkan No. WhatsApp PIC", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Detail | `getByRole('button', { name: "Detail", exact: true })` | 4 | 4 | Perlu scope/validasi tambahan |
| Edit Informasi Perusahaan | `getByRole('button', { name: "Edit Informasi Perusahaan", exact: true })` | 4 | 4 | Perlu scope/validasi tambahan |
| Hapus data | `getByRole('button', { name: "Hapus data", exact: true })` | 4 | 4 | Perlu scope/validasi tambahan |
| Masukkan Nama Perusahaan | `getByPlaceholder("Masukkan Nama Perusahaan", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Alias | `getByPlaceholder("Masukkan Alias", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama PIC | `getByPlaceholder("Masukkan Nama PIC", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp PIC | `getByPlaceholder("Masukkan No. WhatsApp PIC", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |

## subuser: /master/waktu-perjalanan (default)

URL: https://ops-staging.prahu-hub.com/master/waktu-perjalanan; waktu: 2026-09-23T03:21:43.423Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/51-subuser--master-waktu-perjalanan-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Waktu Perjalanan | `getByRole('heading', { name: "Master Waktu Perjalanan", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Waktu Perjalanan | `getByRole('link', { name: "Tambah Waktu Perjalanan", exact: true })` | 1 | 1 | Unik pada state ini |
| Perbarui Waktu Perjalanan | `getByRole('button', { name: "Perbarui Waktu Perjalanan", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Rute | `getByRole('textbox', { name: "Masukkan Rute", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Sumber Data | `getByRole('button', { name: "Pilih Sumber Data", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit target waktu (rute terkunci) | `getByRole('button', { name: "Edit target waktu (rute terkunci)", exact: true })` | 7 | 7 | Perlu scope/validasi tambahan |
| Tidak dapat dihapus — rute sudah digunakan pada order | `getByRole('button', { name: "Tidak dapat dihapus — rute sudah digunakan pada order", exact: true })` | 7 | 7 | Perlu scope/validasi tambahan |
| Masukkan Rute | `getByPlaceholder("Masukkan Rute", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Sumber Data | `getByTitle("Pilih Sumber Data", { exact: true })` | 1 | 1 | Unik pada state ini |

## subuser: /master/pelabuhan (default)

URL: https://ops-staging.prahu-hub.com/master/pelabuhan; waktu: 2026-09-23T03:21:46.420Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/52-subuser--master-pelabuhan-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Pelabuhan | `getByRole('heading', { name: "Master Pelabuhan", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Pelabuhan | `getByRole('link', { name: "Tambah Pelabuhan", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan UN Code | `getByRole('textbox', { name: "Masukkan UN Code", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukan Nama Pelabuhan | `getByRole('textbox', { name: "Masukan Nama Pelabuhan", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Kota/Kab. | `getByRole('button', { name: "Pilih Kota/Kab.", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit data | `getByRole('button', { name: "Edit data", exact: true })` | 3 | 3 | Perlu scope/validasi tambahan |
| Hapus data | `getByRole('button', { name: "Hapus data", exact: true })` | 3 | 3 | Perlu scope/validasi tambahan |
| Masukkan UN Code | `getByPlaceholder("Masukkan UN Code", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukan Nama Pelabuhan | `getByPlaceholder("Masukan Nama Pelabuhan", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Kota/Kab. | `getByTitle("Pilih Kota/Kab.", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |

## subuser: /master/pelayaran (default)

URL: https://ops-staging.prahu-hub.com/master/pelayaran; waktu: 2026-09-23T03:21:49.336Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/53-subuser--master-pelayaran-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Pelayaran | `getByRole('heading', { name: "Master Pelayaran", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Pelayaran | `getByRole('link', { name: "Tambah Pelayaran", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Pelayaran | `getByRole('textbox', { name: "Masukkan Nama Pelayaran", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit | `getByRole('button', { name: "Edit", exact: true })` | 1 | 1 | Unik pada state ini |
| Hapus | `getByRole('button', { name: "Hapus", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Pelayaran | `getByPlaceholder("Masukkan Nama Pelayaran", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |

## subuser: /master/unit (default)

URL: https://ops-staging.prahu-hub.com/master/unit; waktu: 2026-09-23T03:23:45.923Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/64-subuser--master-unit-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Unit | `getByRole('heading', { name: "Master Unit", exact: true })` | 1 | 1 | Unik pada state ini |
| Armada | `getByRole('tab', { name: "Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Jenis Armada | `getByRole('tab', { name: "Jenis Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Jenis Kontainer | `getByRole('tab', { name: "Jenis Kontainer", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Armada | `getByRole('button', { name: "Tambah Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Nama Vendor | `getByRole('button', { name: "Pilih Nama Vendor", exact: true })` | 1 | 1 | Unik pada state ini |
| DD/MM/YYYY | `getByRole('textbox', { name: "DD/MM/YYYY", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Kelola Armada | `getByRole('button', { name: "Kelola Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Jumlah Armada | `getByPlaceholder("Masukkan Jumlah Armada", { exact: true })` | 1 | 1 | Unik pada state ini |
| DD/MM/YYYY | `getByPlaceholder("DD/MM/YYYY", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Nama Vendor | `getByTitle("Pilih Nama Vendor", { exact: true })` | 1 | 1 | Unik pada state ini |

## subuser: /master/sopir (default)

URL: https://ops-staging.prahu-hub.com/master/sopir; waktu: 2026-09-23T03:22:10.577Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/55-subuser--master-sopir-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Sopir | `getByRole('heading', { name: "Master Sopir", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Sopir | `getByRole('button', { name: "Tambah Sopir", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Nama Vendor | `getByRole('button', { name: "Pilih Nama Vendor", exact: true })` | 1 | 1 | Unik pada state ini |
| DD/MM/YYYY | `getByRole('textbox', { name: "DD/MM/YYYY", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Kelola Sopir | `getByRole('button', { name: "Kelola Sopir", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Jumlah Sopir | `getByPlaceholder("Masukkan Jumlah Sopir", { exact: true })` | 1 | 1 | Unik pada state ini |
| DD/MM/YYYY | `getByPlaceholder("DD/MM/YYYY", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Nama Vendor | `getByTitle("Pilih Nama Vendor", { exact: true })` | 1 | 1 | Unik pada state ini |

## subuser: /master/cs (default)

URL: https://ops-staging.prahu-hub.com/master/cs; waktu: 2026-09-23T03:22:13.514Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/56-subuser--master-cs-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Customer Service | `getByRole('heading', { name: "Master Customer Service", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Customer Service | `getByRole('link', { name: "Tambah Customer Service", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama CS | `getByRole('textbox', { name: "Masukkan Nama CS", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp CS | `getByRole('textbox', { name: "Masukkan No. WhatsApp CS", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| 1 Vendor | `getByRole('button', { name: "1 Vendor", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit data | `getByRole('button', { name: "Edit data", exact: true })` | 1 | 1 | Unik pada state ini |
| Hapus data | `getByRole('button', { name: "Hapus data", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama CS | `getByPlaceholder("Masukkan Nama CS", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp CS | `getByPlaceholder("Masukkan No. WhatsApp CS", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |

## subuser: /master/unit (tab-Jenis Armada)

URL: https://ops-staging.prahu-hub.com/master/unit; waktu: 2026-09-23T03:26:18.229Z. [Aria snapshot](../explore/tabs-2026-09-23T03-26-10-026Z/-master-unit-Jenis-Armada.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Unit | `getByRole('heading', { name: "Master Unit", exact: true })` | 1 | 1 | Unik pada state ini |
| Armada | `getByRole('tab', { name: "Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Jenis Armada | `getByRole('tab', { name: "Jenis Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Jenis Kontainer | `getByRole('tab', { name: "Jenis Kontainer", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Jenis Armada | `getByRole('link', { name: "Tambah Jenis Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Jenis Armada | `getByRole('textbox', { name: "Masukkan Jenis Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Panjang | `getByRole('textbox', { name: "Panjang", exact: true })` | 1 | 1 | Unik pada state ini |
| Lebar | `getByRole('textbox', { name: "Lebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Tinggi | `getByRole('textbox', { name: "Tinggi", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Kapasitas | `getByRole('textbox', { name: "Masukkan Kapasitas", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Edit | `getByRole('button', { name: "Edit", exact: true })` | 18 | 18 | Perlu scope/validasi tambahan |
| Hapus | `getByRole('button', { name: "Hapus", exact: true })` | 18 | 18 | Perlu scope/validasi tambahan |
| Masukkan Jenis Armada | `getByPlaceholder("Masukkan Jenis Armada", { exact: true })` | 1 | 1 | Unik pada state ini |
| Panjang | `getByPlaceholder("Panjang", { exact: true })` | 1 | 1 | Unik pada state ini |
| Lebar | `getByPlaceholder("Lebar", { exact: true })` | 1 | 1 | Unik pada state ini |
| Tinggi | `getByPlaceholder("Tinggi", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Kapasitas | `getByPlaceholder("Masukkan Kapasitas", { exact: true })` | 1 | 1 | Unik pada state ini |

## subuser: /master/unit (tab-Jenis Kontainer)

URL: https://ops-staging.prahu-hub.com/master/unit; waktu: 2026-09-23T03:26:19.162Z. [Aria snapshot](../explore/tabs-2026-09-23T03-26-10-026Z/-master-unit-Jenis-Kontainer.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Master Unit | `getByRole('heading', { name: "Master Unit", exact: true })` | 1 | 1 | Unik pada state ini |
| Armada | `getByRole('tab', { name: "Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Jenis Armada | `getByRole('tab', { name: "Jenis Armada", exact: true })` | 1 | 1 | Unik pada state ini |
| Jenis Kontainer | `getByRole('tab', { name: "Jenis Kontainer", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Jenis Kontainer | `getByRole('link', { name: "Tambah Jenis Kontainer", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Jenis Kontainer | `getByRole('textbox', { name: "Masukkan Jenis Kontainer", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Volume | `getByRole('textbox', { name: "Masukkan Volume", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Jenis Kontainer | `getByPlaceholder("Masukkan Jenis Kontainer", { exact: true })` | 1 | 1 | Unik pada state ini |
| Panjang | `getByPlaceholder("Panjang", { exact: true })` | 1 | 1 | Unik pada state ini |
| Lebar | `getByPlaceholder("Lebar", { exact: true })` | 1 | 1 | Unik pada state ini |
| Tinggi | `getByPlaceholder("Tinggi", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Volume | `getByPlaceholder("Masukkan Volume", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Kapasitas | `getByPlaceholder("Masukkan Kapasitas", { exact: true })` | 1 | 1 | Unik pada state ini |

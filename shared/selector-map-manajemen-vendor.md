# Selector map manajemen-vendor — live 2026-09-23

Sumber: [run JSON](../explore/live-2026-09-23T03-13-20-474Z/results.json), Playwright Chromium lokal, satu akun per context. Tab terverifikasi berasal dari run tambahan yang dirujuk oleh snapshot masing-masing. Menggantikan draft sebelumnya untuk state yang tercantum di bawah.

Semua count diukur pada page lengkap menggunakan locator exact di waktu snapshot. Count > 1 perlu scope tambahan yang diverifikasi; jangan memakai first()/nth() untuk menutupi ambiguitas. Nilai count bukan jaminan stabil untuk data atau sesi berikutnya. Snapshot menyimpan struktur aksesibilitas lengkap; tabel mengecualikan sebagian navigasi global.

Cakupan: state default/page 1 dan state tab yang dicantumkan eksplisit. Tab lain, filter yang diubah, dialog, tambah/edit/detail belum diuji. Tidak ada submit bisnis. Observasi DOM bukan expected result bisnis.

## admin: /manajemen-vendor (default)

URL: https://ops-staging.prahu-hub.com/manajemen-vendor; waktu: 2026-09-23T03:14:59.301Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/8-admin--manajemen-vendor-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Manajemen Vendor | `getByRole('heading', { name: "Manajemen Vendor", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Vendor | `getByRole('link', { name: "Tambah Vendor", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Vendor | `getByRole('textbox', { name: "Masukkan Nama Vendor", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Alias | `getByRole('textbox', { name: "Masukkan Alias", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Email | `getByRole('textbox', { name: "Masukkan Email", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp | `getByRole('textbox', { name: "Masukkan No. WhatsApp", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Pengelola | `getByRole('button', { name: "Pilih Pengelola", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih CS Penanggung Jawab | `getByRole('button', { name: "Pilih CS Penanggung Jawab", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp CS | `getByRole('textbox', { name: "Masukkan No. WhatsApp CS", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Aksi | `getByRole('button', { name: "Aksi", exact: true })` | 8 | 8 | Perlu scope/validasi tambahan |
| Masukkan Nama Vendor | `getByPlaceholder("Masukkan Nama Vendor", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Alias | `getByPlaceholder("Masukkan Alias", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Email | `getByPlaceholder("Masukkan Email", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp | `getByPlaceholder("Masukkan No. WhatsApp", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp CS | `getByPlaceholder("Masukkan No. WhatsApp CS", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Pengelola | `getByTitle("Pilih Pengelola", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih CS Penanggung Jawab | `getByTitle("Pilih CS Penanggung Jawab", { exact: true })` | 1 | 1 | Unik pada state ini |
| Aksi | `getByTitle("Aksi", { exact: true })` | 16 | 8 | Perlu scope/validasi tambahan |

## subuser: /manajemen-vendor (default)

URL: https://ops-staging.prahu-hub.com/manajemen-vendor; waktu: 2026-09-23T03:21:08.892Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/44-subuser--manajemen-vendor-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Manajemen Vendor | `getByRole('heading', { name: "Manajemen Vendor", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Vendor | `getByRole('link', { name: "Tambah Vendor", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Vendor | `getByRole('textbox', { name: "Masukkan Nama Vendor", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Alias | `getByRole('textbox', { name: "Masukkan Alias", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Email | `getByRole('textbox', { name: "Masukkan Email", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp | `getByRole('textbox', { name: "Masukkan No. WhatsApp", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Pengelola | `getByRole('button', { name: "Pilih Pengelola", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih CS Penanggung Jawab | `getByRole('button', { name: "Pilih CS Penanggung Jawab", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp CS | `getByRole('textbox', { name: "Masukkan No. WhatsApp CS", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Aksi | `getByRole('button', { name: "Aksi", exact: true })` | 8 | 8 | Perlu scope/validasi tambahan |
| Masukkan Nama Vendor | `getByPlaceholder("Masukkan Nama Vendor", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Alias | `getByPlaceholder("Masukkan Alias", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Email | `getByPlaceholder("Masukkan Email", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp | `getByPlaceholder("Masukkan No. WhatsApp", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. WhatsApp CS | `getByPlaceholder("Masukkan No. WhatsApp CS", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Pengelola | `getByTitle("Pilih Pengelola", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih CS Penanggung Jawab | `getByTitle("Pilih CS Penanggung Jawab", { exact: true })` | 1 | 1 | Unik pada state ini |
| Aksi | `getByTitle("Aksi", { exact: true })` | 16 | 8 | Perlu scope/validasi tambahan |

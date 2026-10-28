# Selector map pengaturan-akun — live 2026-09-23

Sumber: [run JSON](../explore/live-2026-09-23T03-13-20-474Z/results.json), Playwright Chromium lokal, satu akun per context. Tab terverifikasi berasal dari run tambahan yang dirujuk oleh snapshot masing-masing. Menggantikan draft sebelumnya untuk state yang tercantum di bawah.

Semua count diukur pada page lengkap menggunakan locator exact di waktu snapshot. Count > 1 perlu scope tambahan yang diverifikasi; jangan memakai first()/nth() untuk menutupi ambiguitas. Nilai count bukan jaminan stabil untuk data atau sesi berikutnya. Snapshot menyimpan struktur aksesibilitas lengkap; tabel mengecualikan sebagian navigasi global.

Cakupan: state default/page 1 dan state tab yang dicantumkan eksplisit. Tab lain, filter yang diubah, dialog, tambah/edit/detail belum diuji. Tidak ada submit bisnis. Observasi DOM bukan expected result bisnis.

## admin: /pengaturan-akun (default)

URL: https://ops-staging.prahu-hub.com/pengaturan-akun; waktu: 2026-09-23T03:15:02.798Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/9-admin--pengaturan-akun-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Pengaturan Akun | `getByRole('heading', { name: "Pengaturan Akun", exact: true })` | 1 | 1 | Unik pada state ini |
| Sub User | `getByRole('button', { name: "Sub User", exact: true })` | 1 | 1 | Unik pada state ini |
| Hak Akses | `getByRole('button', { name: "Hak Akses", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Sub User | `getByRole('button', { name: "Tambah Sub User", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Sub User | `getByRole('textbox', { name: "Masukkan Nama Sub User", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Email | `getByRole('textbox', { name: "Masukkan Email", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Bagian Staff | `getByRole('textbox', { name: "Masukkan Bagian Staff", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Lihat detail | `getByRole('button', { name: "Lihat detail", exact: true })` | 4 | 4 | Perlu scope/validasi tambahan |
| Edit data | `getByRole('button', { name: "Edit data", exact: true })` | 4 | 4 | Perlu scope/validasi tambahan |
| Hapus data | `getByRole('button', { name: "Hapus data", exact: true })` | 4 | 4 | Perlu scope/validasi tambahan |
| Masukkan Nama Sub User | `getByPlaceholder("Masukkan Nama Sub User", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Email | `getByPlaceholder("Masukkan Email", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Bagian Staff | `getByPlaceholder("Masukkan Bagian Staff", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |

## subuser: /pengaturan-akun (default)

URL: https://ops-staging.prahu-hub.com/pengaturan-akun; waktu: 2026-09-23T03:21:11.575Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/45-subuser--pengaturan-akun-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Pengaturan Akun | `getByRole('heading', { name: "Pengaturan Akun", exact: true })` | 1 | 1 | Unik pada state ini |
| Sub User | `getByRole('button', { name: "Sub User", exact: true })` | 1 | 1 | Unik pada state ini |
| Hak Akses | `getByRole('button', { name: "Hak Akses", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Sub User | `getByRole('button', { name: "Tambah Sub User", exact: true })` | 1 | 1 | Unik pada state ini |
| Riwayat | `getByRole('button', { name: "Riwayat", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Sub User | `getByRole('textbox', { name: "Masukkan Nama Sub User", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Email | `getByRole('textbox', { name: "Masukkan Email", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Bagian Staff | `getByRole('textbox', { name: "Masukkan Bagian Staff", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Lihat detail | `getByRole('button', { name: "Lihat detail", exact: true })` | 4 | 4 | Perlu scope/validasi tambahan |
| Edit data | `getByRole('button', { name: "Edit data", exact: true })` | 4 | 4 | Perlu scope/validasi tambahan |
| Hapus data | `getByRole('button', { name: "Hapus data", exact: true })` | 4 | 4 | Perlu scope/validasi tambahan |
| Masukkan Nama Sub User | `getByPlaceholder("Masukkan Nama Sub User", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Email | `getByPlaceholder("Masukkan Email", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Bagian Staff | `getByPlaceholder("Masukkan Bagian Staff", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |

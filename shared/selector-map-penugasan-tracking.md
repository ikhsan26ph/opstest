# Selector map penugasan-tracking — live 2026-09-23

Sumber: [run JSON](../explore/live-2026-09-23T03-13-20-474Z/results.json), Playwright Chromium lokal, satu akun per context. Tab terverifikasi berasal dari run tambahan yang dirujuk oleh snapshot masing-masing. Menggantikan draft sebelumnya untuk state yang tercantum di bawah.

Semua count diukur pada page lengkap menggunakan locator exact di waktu snapshot. Count > 1 perlu scope tambahan yang diverifikasi; jangan memakai first()/nth() untuk menutupi ambiguitas. Nilai count bukan jaminan stabil untuk data atau sesi berikutnya. Snapshot menyimpan struktur aksesibilitas lengkap; tabel mengecualikan sebagian navigasi global.

Cakupan: state default/page 1 dan state tab yang dicantumkan eksplisit. Tab lain, filter yang diubah, dialog, tambah/edit/detail belum diuji. Tidak ada submit bisnis. Observasi DOM bukan expected result bisnis.

## admin: /penugasan-tracking (default)

URL: https://ops-staging.prahu-hub.com/penugasan-tracking; waktu: 2026-09-23T03:14:54.971Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/7-admin--penugasan-tracking-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Penugasan Tracking | `getByRole('heading', { name: "Penugasan Tracking", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Penugasan | `getByRole('button', { name: "Tambah Penugasan", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan ID Order | `getByRole('textbox', { name: "Masukkan ID Order", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Jenis Order | `getByRole('button', { name: "Pilih Jenis Order", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Rute | `getByRole('button', { name: "Pilih Rute", exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Masukkan No. Polisi/No. Kontainer | `getByRole('textbox', { name: "Masukkan No. Polisi/No. Kontainer", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Sopir/Petugas | `getByRole('textbox', { name: "Masukkan Nama Sopir/Petugas", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Tahapan | `getByRole('button', { name: "Pilih Tahapan", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Tanggal | `getByRole('button', { name: "Pilih Tanggal", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Vendor | `getByRole('button', { name: "Semua Vendor", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Aksi | `getByRole('button', { name: "Aksi", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Multidrop | `getByRole('button', { name: "Multidrop", exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman pertama | `getByRole('button', { name: "Halaman pertama", exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByRole('button', { name: "Sebelumnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByRole('button', { name: "Berikutnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByRole('button', { name: "Halaman terakhir", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan ID Order | `getByPlaceholder("Masukkan ID Order", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. Polisi/No. Kontainer | `getByPlaceholder("Masukkan No. Polisi/No. Kontainer", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Sopir/Petugas | `getByPlaceholder("Masukkan Nama Sopir/Petugas", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Jenis Order | `getByTitle("Pilih Jenis Order", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Rute | `getByTitle("Pilih Rute", { exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Tahapan | `getByTitle("Pilih Tahapan", { exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Vendor | `getByTitle("Semua Vendor", { exact: true })` | 1 | 1 | Unik pada state ini |
| Ditugaskan ke sopir — tampil di aplikasi Driver Hub | `getByTitle("Ditugaskan ke sopir — tampil di aplikasi Driver Hub", { exact: true })` | 28 | 14 | Perlu scope/validasi tambahan |
| Aksi | `getByTitle("Aksi", { exact: true })` | 40 | 20 | Perlu scope/validasi tambahan |
| Sopir bongkar belum ditugaskan | `getByTitle("Sopir bongkar belum ditugaskan", { exact: true })` | 6 | 3 | Perlu scope/validasi tambahan |
| Halaman pertama | `getByTitle("Halaman pertama", { exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByTitle("Sebelumnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByTitle("Berikutnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByTitle("Halaman terakhir", { exact: true })` | 1 | 1 | Unik pada state ini |

## vendor: /penugasan-tracking (default)

URL: https://ops-staging.prahu-hub.com/penugasan-tracking; waktu: 2026-09-23T03:18:04.269Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/33-vendor--penugasan-tracking-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Penugasan Tracking | `getByRole('heading', { name: "Penugasan Tracking", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan ID Order | `getByRole('textbox', { name: "Masukkan ID Order", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Jenis Order | `getByRole('button', { name: "Pilih Jenis Order", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Rute | `getByRole('button', { name: "Pilih Rute", exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Masukkan No. Polisi/No. Kontainer | `getByRole('textbox', { name: "Masukkan No. Polisi/No. Kontainer", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Sopir/Petugas | `getByRole('textbox', { name: "Masukkan Nama Sopir/Petugas", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Tahapan | `getByRole('button', { name: "Pilih Tahapan", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Tanggal | `getByRole('button', { name: "Pilih Tanggal", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan ID Order | `getByPlaceholder("Masukkan ID Order", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. Polisi/No. Kontainer | `getByPlaceholder("Masukkan No. Polisi/No. Kontainer", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Sopir/Petugas | `getByPlaceholder("Masukkan Nama Sopir/Petugas", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Jenis Order | `getByTitle("Pilih Jenis Order", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Rute | `getByTitle("Pilih Rute", { exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Tahapan | `getByTitle("Pilih Tahapan", { exact: true })` | 1 | 1 | Unik pada state ini |

## subuser: /penugasan-tracking (default)

URL: https://ops-staging.prahu-hub.com/penugasan-tracking; waktu: 2026-09-23T03:21:04.884Z. [Aria snapshot](../explore/live-2026-09-23T03-13-20-474Z/43-subuser--penugasan-tracking-default.yml). data-testid: 0.

| Elemen | Locator exact | Match | Visible | Catatan |
|---|---|---:|---:|---|
| Toggle Sidebar | `getByRole('button', { name: "Toggle Sidebar", exact: true })` | 1 | 1 | Unik pada state ini |
| Beranda | `getByRole('link', { name: "Beranda", exact: true })` | 1 | 1 | Unik pada state ini |
| Penugasan Tracking | `getByRole('heading', { name: "Penugasan Tracking", exact: true })` | 1 | 1 | Unik pada state ini |
| Tambah Penugasan | `getByRole('button', { name: "Tambah Penugasan", exact: true })` | 1 | 1 | Unik pada state ini |
| Filter | `getByRole('button', { name: "Filter", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan ID Order | `getByRole('textbox', { name: "Masukkan ID Order", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Jenis Order | `getByRole('button', { name: "Pilih Jenis Order", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Rute | `getByRole('button', { name: "Pilih Rute", exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Masukkan No. Polisi/No. Kontainer | `getByRole('textbox', { name: "Masukkan No. Polisi/No. Kontainer", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Sopir/Petugas | `getByRole('textbox', { name: "Masukkan Nama Sopir/Petugas", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Status | `getByRole('button', { name: "Pilih Status", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Tahapan | `getByRole('button', { name: "Pilih Tahapan", exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Tanggal | `getByRole('button', { name: "Pilih Tanggal", exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Vendor | `getByRole('button', { name: "Semua Vendor", exact: true })` | 1 | 1 | Unik pada state ini |
| Reset | `getByRole('button', { name: "Reset", exact: true })` | 1 | 1 | Unik pada state ini |
| Terapkan | `getByRole('button', { name: "Terapkan", exact: true })` | 1 | 1 | Unik pada state ini |
| Aksi | `getByRole('button', { name: "Aksi", exact: true })` | 20 | 20 | Perlu scope/validasi tambahan |
| Multidrop | `getByRole('button', { name: "Multidrop", exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman pertama | `getByRole('button', { name: "Halaman pertama", exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByRole('button', { name: "Sebelumnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByRole('button', { name: "Berikutnya", exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByRole('button', { name: "Halaman terakhir", exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan ID Order | `getByPlaceholder("Masukkan ID Order", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan No. Polisi/No. Kontainer | `getByPlaceholder("Masukkan No. Polisi/No. Kontainer", { exact: true })` | 1 | 1 | Unik pada state ini |
| Masukkan Nama Sopir/Petugas | `getByPlaceholder("Masukkan Nama Sopir/Petugas", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Jenis Order | `getByTitle("Pilih Jenis Order", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Rute | `getByTitle("Pilih Rute", { exact: true })` | 2 | 2 | Perlu scope/validasi tambahan |
| Pilih Status | `getByTitle("Pilih Status", { exact: true })` | 1 | 1 | Unik pada state ini |
| Pilih Tahapan | `getByTitle("Pilih Tahapan", { exact: true })` | 1 | 1 | Unik pada state ini |
| Semua Vendor | `getByTitle("Semua Vendor", { exact: true })` | 1 | 1 | Unik pada state ini |
| Ditugaskan ke sopir — tampil di aplikasi Driver Hub | `getByTitle("Ditugaskan ke sopir — tampil di aplikasi Driver Hub", { exact: true })` | 28 | 14 | Perlu scope/validasi tambahan |
| Aksi | `getByTitle("Aksi", { exact: true })` | 40 | 20 | Perlu scope/validasi tambahan |
| Sopir bongkar belum ditugaskan | `getByTitle("Sopir bongkar belum ditugaskan", { exact: true })` | 6 | 3 | Perlu scope/validasi tambahan |
| Halaman pertama | `getByTitle("Halaman pertama", { exact: true })` | 1 | 1 | Unik pada state ini |
| Sebelumnya | `getByTitle("Sebelumnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Berikutnya | `getByTitle("Berikutnya", { exact: true })` | 1 | 1 | Unik pada state ini |
| Halaman terakhir | `getByTitle("Halaman terakhir", { exact: true })` | 1 | 1 | Unik pada state ini |

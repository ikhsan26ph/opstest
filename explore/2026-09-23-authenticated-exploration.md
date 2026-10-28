# Authenticated exploration OPS (read-only) — 2026-09-23

Pembaruan status 03:26Z: [laporan Codex terbaru](2026-09-23-auth-diagnosis-and-smoke.md) mencatat login akun 3 berhasil, peta sidebar selesai, logout Vendor tidak direproduksi sebagai kegagalan, serta harvest/smoke live. Isi berikut adalah evidence historis run Claude; blocker lama tidak otomatis menjadi status terkini.

Status: DIHENTIKAN oleh user pada 2026-09-23 ~02:56Z untuk dilanjutkan di Codex.
Metode: Playwright MCP (Chromium), navigasi GET + login yang diotorisasi saja. Tidak ada submit/simpan/hapus/ubah setting. Tidak ada data yang diubah.
Credential: config/env.md (gitignored), 3 akun dari user. Label role dari user; role aktual diverifikasi dari UI header (lihat bawah).

## Ringkasan per akun
| No | Label user | Login | Landing aktual | Header UI (verified) | Sidebar | Evidence |
|---|---|---|---|---|---|---|
| 1 | Admin Utama | Sukses 02:41:18Z, 1 percobaan | `/` → redirect `/monitoring` | "Admin / Administrator", email akun 1 | 24 route (5 grup) | explore/2026-09-23-admin-route-map.md, explore/2026-09-23-admin-routes.json, explore/snapshots/2026-09-23-admin-monitoring.yml, screenshots admin-*.png |
| 2 | Vendor | Sukses 02:48:44Z, 1 percobaan | `/vendor-portal/order` | "PT. Ikatan Kuat / Vendor", inisial "IKIK", email akun 2 | 6 route | explore/2026-09-23-vendor-route-map.md, explore/2026-09-23-vendor-routes.json, screenshots vendor-*.png |
| 3 | Sub user | BELUM BERHASIL (lihat diagnosis) | tetap `/login` | - | - | screenshots/2026-09-23-subuser-login-attempt.png |

## Sinyal login sukses (runtime observation, akun 1 dan 2)
- Klik `getByRole('button', { name: 'Login' })` → `POST /api/auth/login` 200 → `GET /api/auth/me` 200 → URL berpindah dari `/login`.
- Admin: title `Prahu Hub - TMS` di `/` lalu `Monitoring | Prahu Hub - TMS` di `/monitoring`. Vendor: title tetap `Prahu Hub - TMS` di `/vendor-portal/order` (title tidak per halaman di vendor portal).
- Cookie non-httpOnly setelah login: admin `tmsUserKind`, `tmsCanSubUser`, `tmsCanVendor`; vendor hanya `tmsUserKind`. Nilai tidak dibaca (ditolak classifier); token/session utama diduga httpOnly. NEEDS VALIDATION.
- Setiap page load memanggil `POST /api/auth/refresh` (200 saat login, 401 saat tidak) lalu `GET /api/auth/me`. `/api/auth/refresh` 401 di halaman login adalah kondisi normal, bukan bug.
- Logout admin: klik `getByRole('button', { name: 'Logout' })` (button ikon dengan `title="Logout"`) → `POST /api/auth/logout` 200 → redirect `/login`, cookie tms* hilang.

## Sidebar Admin (akun 1) — semua terlihat dan diakses 200
- Dashboard (group button): Monitoring `/monitoring`, Tracking & Location `/tracking-location`, Progres Pengiriman `/progres-pengiriman`, Operasional `/dashboard-operasional`
- Order `/order`; Penugasan Tracking `/penugasan-tracking`
- Master Wilayah: `/master/provinsi`, `/master/kota`, `/master/kecamatan`, `/master/kelurahan`
- Master Operasional: Master Drop Point `/master/customer`, `/master/waktu-perjalanan`, `/master/pelabuhan`, `/master/pelayaran`, `/master/unit` (tabs Armada/Jenis Armada/Jenis Kontainer), `/master/sopir`, `/master/cs`
- Manajemen Vendor `/manajemen-vendor`; Pengaturan Akun `/pengaturan-akun` (tabs Sub User/Hak Akses); Akun Saya `/akun-saya`; Pengaturan Sistem `/setting/sistem`
- Pusat Notifikasi: Pengaturan Notifikasi `/setting/general`, Preferensi Notifikasi `/setting/preferensi-notifikasi`
- Sidebar footer: "Kuota Order 18/5000 (0,36%)", "Prahu Hub - TMS - Versi 1.0.0"; tombol "Aktifkan mode gelap".
- Link sekunder terlihat (belum dibuka): `/monitoring/riwayat` (dibuka, 200), `/master/kota/tambah`, `/master/kecamatan/tambah`, `/master/kelurahan/tambah`, `/master/customer/tambah`, `/master/waktu-perjalanan/tambah`, `/master/pelabuhan/tambah`, `/master/pelayaran/tambah`, `/master/cs/tambah`, `/manajemen-vendor/tambah`, `/tracking-location?orderCode=...&nopol=...`.

## Sidebar Vendor (akun 2) — semua 200
- Order `/vendor-portal/order`; Penugasan Tracking `/penugasan-tracking` (route yang sama dengan admin; memanggil `/api/penugasan-tracking`, `/api/vendors/options`, `/api/orders?...`)
- Master Operasional: Master Armada `/vendor-portal/master/armada`, Master Sopir `/vendor-portal/master/sopir`
- Akun Saya `/vendor-portal/akun-saya`; Pusat Notifikasi `/vendor-portal/setting/preferensi-notifikasi`
- Link sekunder terlihat (belum dibuka): `/vendor-portal/master/armada/tambah`, `/vendor-portal/master/sopir/tambah`, `/vendor-portal/notifikasi`.
- List order/armada/sopir vendor menampilkan "Tidak ada data." (rows=2 = header+empty row).

## Temuan / bug candidate (NEEDS VALIDATION manual)
1. **Vendor portal: tombol Logout tidak merespons.** 4 klik (2 halaman: `/vendor-portal/setting/preferensi-notifikasi`, `/vendor-portal/order`) via `getByRole('button',{name:'Logout'})` dan `header button[title="Logout"]`: tidak ada request API, dialog, console error, toast, atau navigasi. Elemen visible, enabled, punya React onClick. Admin Logout dengan selector sama bekerja. Klasifikasi: bug candidate, belum confirmed (perlu verifikasi manual dengan mouse).
2. **Login Sub user (akun 3) belum berhasil — bukan penolakan server.** 3 percobaan otomatis (02:53:08Z, 02:54:24Z, 02:55:47Z): tidak pernah ada `POST /api/auth/login` terkirim, tidak ada pesan error di UI, URL tetap `/login`. Percobaan 2 memakai ketikan keyboard dan nilai input tidak tersimpan; test tambahan: `keyboard.type('a')` → value tetap kosong, sedangkan `fill()` tersimpan. Percobaan 3: form terhidrasi, value terisi (27/11 karakter), klik Login tetap tanpa request. Klasifikasi: automation/timing/environment, NEEDS VALIDATION manual. Credential akun 3 belum pernah diverifikasi server. Catatan: sesi sebelumnya dibersihkan lewat `context.clearCookies()` (fallback karena Logout vendor tidak bekerja), bukan logout aplikasi.
3. `/api/system/status` dipanggil sangat sering di halaman login (polling). Observasi saja.

## Batasan
- Tidak ada aria snapshot per route selain monitoring (run_code MCP tidak punya akses fs). Pemetaan memakai ringkasan DOM (heading/tab/button/th/input/link/API) di JSON.
- Semua halaman list hanya page 1 default; filter/tab/detail tidak dibuka. Halaman `tambah`, detail, edit, `/lupa-password`, `/vendor-portal/notifikasi` belum dibuka.
- Vendor: sesi server mungkin masih hidup karena logout tidak terjadi.
- Profil browser MCP (`.playwright-mcp/`, gitignored) mungkin menyimpan state; jangan dibagikan.

## Pekerjaan tersisa (untuk dilanjutkan di Codex)
1. Verifikasi manual login akun 3 (Sub user) dan Logout vendor; putuskan bug vs environment.
2. Bila akun 3 bisa login: petakan sidebar-nya (skrip generik: artifacts/explore-run/subuser-0.js, gitignored, membaca `aside a[href]` lalu navigasi read-only).
3. harvest-selectors untuk modul prioritas (Order, Penugasan Tracking, Manajemen Vendor, Pengaturan Akun, Master *): ambil aria snapshot per halaman (browser_snapshot filename) karena belum ada data-testid sama sekali (semua halaman: testids=[]).
4. Auth fixture masih fail-closed; implementasi berdasarkan sinyal di atas (POST /api/auth/login 200 + URL keluar dari /login) tetap NEEDS VALIDATION untuk storageState.

# Diagnosis auth, harvest live, dan smoke OPS — 2026-09-23

## Hasil

Ketiga akun berhasil login melalui UI dan logout melalui tombol aplikasi. Smoke read-only mencakup **53 kombinasi akun–route**: Admin 24, Vendor 6, akun 3 berlabel Sub user 23. Tambahan 3 state tab akun 3 tervalidasi: Jenis Armada, Jenis Kontainer, Riwayat Tracking. Semua 56 state akhir menunjukkan heading konten visible; 51 navigasi dokumen berstatus HTTP 200. Dua landing SPA dan tiga perpindahan tab tidak diberi status HTTP dokumen buatan.

Verifikasi dilakukan dengan Playwright Chromium lokal yang diarahkan bertahap, bukan verifikasi manual manusia. Instruksi user terbaru “oke lanjutkan proses 1 sampai 4” menjadi cakupan untuk pemeriksaan akun 3 setelah diagnosis kesiapan form. Tidak ada retry otomatis setelah kegagalan login. Satu login per akun pada run utama; satu sesi akun 3 tambahan setelah logout sukses untuk memperbaiki pengambilan snapshot tab. Tidak ada perubahan data bisnis.

## Bukti auth dan triase

| Akun | Login UI | Logout UI | Kesimpulan terbatas |
|---|---|---|---|
| Admin (1) | POST login 200 pada 03:13:50Z, GET me 200; / lalu /monitoring | POST logout 200, /login pada 03:17:01Z | Kegagalan login sebelumnya tidak direproduksi |
| Vendor (2) | POST login 200 pada 03:17:27Z, GET me 200; /vendor-portal/order | Dari preferensi notifikasi: satu klik, POST logout 200, /login pada 03:18:31Z | Bug candidate logout sebelumnya **tidak direproduksi**, bukan bukti masalah intermiten mustahil |
| Akun 3, label konfigurasi Sub user | POST login 200 pada 03:19:02Z, GET me 200; / lalu /monitoring | POST logout 200, /login pada 03:24:20Z | Credential berhasil diverifikasi server melalui UI; header aktual berbeda dari label konfigurasi |

Semua waktu UTC. [Run utama](live-2026-09-23T03-13-20-474Z/results.json) merekam request/response path, method/status, input-retention boolean, dan snapshot tanpa payload credential. [Run tab tambahan](tabs-2026-09-23T03-26-10-026Z/results.json) mencatat login 200 pada 03:26:14Z dan logout 200 pada 03:26:22Z.

**Akun 3:** konfigurasi berlabel “Sub user”, tetapi [header aktual](live-2026-09-23T03-13-20-474Z/41-subuser--monitoring-default.yml) menampilkan `Jaya Administrator`. Sidebar berisi menu administrasi. Ini perbedaan label yang perlu klarifikasi requirement/konfigurasi akun; belum menjadi defect otorisasi. Tidak ada percobaan mutasi atau pembuktian akses di luar menu teramati.

Logout sukses membuktikan respons aplikasi pada sesi run ini. Sesi Vendor dari run Claude/Codex terdahulu yang context-nya ditutup tanpa logout belum dibuktikan telah dibatalkan. Tidak menyimpulkan global session revocation, storageState, expiry, atau concurrency.

## Diagnosis automation

1. **Form terlihat belum cukup sebagai readiness.** Run baru menunggu handler submit React terpasang, mengecek input tetap berisi nilai yang dimaksud setelah blur, baru melakukan satu submit. Ketiga akun berhasil. Ini mendukung hipotesis timing/state pada kegagalan sebelumnya, tetapi bukan eksperimen A/B yang membuktikan akar masalah tunggal. Kegagalan lama tanpa respons tidak membuktikan request tidak terkirim.
2. **Locator judul pada skrip lama terlalu umum.** `page.locator('h2').first()` mengarah ke heading sidebar kosong, sedangkan judul konten muncul setelah dua h2 kosong. DOM diagnosis membuktikan urutan tersebut; ini kandidat kuat penyebab timeout lama. Error lama hanya menyimpan `TimeoutError`, tanpa stack/DOM saat gagal, sehingga penyebab pastinya tidak dapat dipastikan secara retrospektif. Run baru tidak memakai heading pertama sebagai sinyal judul modul.
3. **Snapshot tab harus menunggu state UI.** Run utama sempat mengambil snapshot segera setelah klik: snapshot masih memperlihatkan tab sebelumnya. Tiga hasil awal ini dianggap superseded/inconclusive, bukan passed dan bukan bug aplikasi. Run tambahan menunggu `aria-selected=true`, memeriksa nama tab selected di snapshot, lalu mengukur locator dan memeriksa selected kembali. Hanya tiga state run tambahan yang masuk hasil akhir.
4. **Role aktual harus dipakai.** Pengaturan Akun memiliki tombol `Sub User`/`Hak Akses`, bukan role tab. Master Unit dan Tracking & Location benar-benar memiliki role tab. Nama UI mirip tidak cukup untuk memilih role locator.

Run utama tidak merekam pageerror atau respons HTTP error selain refresh 401 pada kondisi unauthenticated. Sejumlah request non-API dibatalkan dengan ERR_ABORTED saat navigasi; tanpa impact teramati, ini tidak diklasifikasikan sebagai defect. Tidak ada confirmed application defect dari cakupan ini.

## Hasil harvest dan smoke

- [Order](../shared/selector-map-order.md)
- [Penugasan Tracking](../shared/selector-map-penugasan-tracking.md)
- [Manajemen Vendor](../shared/selector-map-manajemen-vendor.md)
- [Pengaturan Akun](../shared/selector-map-pengaturan-akun.md)
- [Master](../shared/selector-map-master.md)

Lima peta tersebut menggantikan draft untuk state tercantum: **836 baris locator terukur**, termasuk pengulangan elemen antar akun/state; bukan 836 selector unik global. **76 baris memiliki match > 1**, ditandai perlu scope tambahan. Count/visible diukur pada page lengkap selama interval harvest, bukan transaksi snapshot atomik; tidak menjamin keunikan pada data atau sesi berikutnya. Bukti setiap route/state, waktu, locator, jumlah match, visible count, dan batasan tercantum. Semua state final tidak memiliki data-testid teramati.

[Smoke per state](2026-09-23-live-smoke.md), [summary JSON](live-2026-09-23T03-13-20-474Z/smoke-summary.json), dan [peta akun 3](2026-09-23-subuser-route-map.md) menyimpan hasil lengkap. Render/navigation merupakan observasi teknis, bukan verdict requirement bisnis.

## Batasan dan handoff

- List default/page 1 dan tiga tab yang disebutkan saja; perubahan filter, dialog, tambah/edit/detail, pagination, permission enforcement, expiry, dan stress belum diuji.
- Fixture authenticated tetap fail-closed karena lifecycle storageState belum diuji. Tidak ada bypass guard.
- scenario/ masih hanya berisi README; tidak membuat skenario bisnis, verdict bisnis, atau Excel synthetic tanpa requirement sumber.
- Peran explorer/planner/executor/triager dikerjakan berurutan di agent utama; tidak ada sub-agent. Tidak ada commit/push.
- Skrip lokal gitignored: `artifacts/explore-run/diagnose-live.cjs`, `verify-tabs.cjs`, `publish-live.cjs`. Action tab skrip diagnosis utama telah diperbaiki memakai pola selected-state yang divalidasi pada run verify-tabs; skrip utama tidak dijalankan ulang. Jangan memakai networkidle saja sebagai bukti perubahan tab.

Langkah berikutnya: klarifikasi role yang diharapkan untuk akun 3, pilih modul dan requirement bisnis, lalu scope locator ambigu serta susun skenario dari requirement tersebut.

## Pemeriksaan artefak

Scan 89 file laporan/evidence tidak menemukan password terkonfigurasi, pola JWT, atau header Authorization Bearer/Set-Cookie. Semua tautan lokal yang diperiksa valid. Seluruh locator pada state final memiliki match > 0; keunikan tetap dibatasi oleh 76 baris ambigu yang telah ditandai. Tiga skrip lokal lulus pemeriksaan sintaks Node. Ini validasi artefak, bukan pengujian bisnis tambahan.

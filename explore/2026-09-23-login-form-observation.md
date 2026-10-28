# Observasi form login OPS (publik, read-only) — 2026-09-23

Permintaan user: authenticated exploration read-only.
Status: BERHENTI SEBELUM LOGIN. config/env.md tidak berisi akun (baris 1 kosong, "Belum tersedia").
Sesuai docs/agent-guide.md: tanpa credential hanya public exploration tanpa submit; tidak ada credential buatan.

## Metode
- Tool: Playwright MCP (browser_navigate, browser_snapshot, browser_evaluate, browser_network_requests, browser_console_messages).
- Waktu navigasi: 2026-09-23T02:28:53Z. Viewport default MCP.
- Cakupan: hanya base URL. Tidak ada input credential, tidak ada klik tombol/link, tidak ada submit.
- Screenshot tanpa secret: explore/screenshots/2026-09-23-login-public.png.

## Runtime observation (verified pada waktu di atas)
- Request https://ops-staging.prahu-hub.com → final URL https://ops-staging.prahu-hub.com/login.
- Title literal: `Login | Prahu Hub - TMS`. Meta description literal: `Masuk ke akun Prahu Hub - TMS`. html lang=`en`.
- Framework FE: Next.js (chunk /_next/static/, turbopack, next-route-announcer). Cloudflare beacon/challenge terlihat.
- localStorage key sebelum login: `theme`. sessionStorage kosong. document.cookie kosong (cookie httpOnly tidak terlihat dari JS).

## Accessibility snapshot (locator kandidat, hanya yang terobservasi)
| Elemen | Locator yang terobservasi | Catatan |
|---|---|---|
| Heading | `getByRole('heading', { name: 'Selamat Datang', level: 1 })` | |
| Paragraf | text `Silakan masukkan informasi akun anda` | |
| Label email | text `Email *` (generic, bukan `<label for>`; input.labels kosong) | |
| Input email | `getByPlaceholder('Masukkan Email')` / `getByRole('textbox', { name: 'Masukkan Email' })` | type=text, tanpa name/id/aria-label/data-testid/autocomplete, required=false |
| Label password | text `Password *` (generic) | |
| Input password | `getByPlaceholder('Masukkan Password')` / `getByRole('textbox', { name: 'Masukkan Password' })` | type=password, tanpa name/id/testid |
| Ikon di samping password | generic cursor=pointer (ref e27 pada snapshot) | Fungsi TIDAK diverifikasi (tidak diklik). NEEDS VALIDATION |
| Link lupa password | `getByRole('link', { name: 'Lupa Password?' })` href `/lupa-password` | Tidak dibuka |
| Tombol login | `getByRole('button', { name: 'Login' })` | type=submit, enabled |
| Tombol tanpa teks | `button` kedua, type=submit, class rounded-full size-14, di luar blok form | Fungsi TIDAK diverifikasi. NEEDS VALIDATION |
| Region notifikasi | region `Notifications alt+T` + `alert` kosong | Kemungkinan container toast; belum ada pesan |

- `<form>` ada satu, tanpa attribute action/method/id (submit ditangani JS). Tidak ada data-testid di seluruh form login.
- Rekomendasi locator sementara: placeholder/role di atas. Tidak ada testid untuk di-harvest.

## Network non-static saat halaman login dimuat (tanpa interaksi)
| Method | URL | Status |
|---|---|---|
| GET | https://apiops-staging.prahu-hub.com/api/system/status | 200 |
| GET | https://apiops-staging.prahu-hub.com/api/setting/site | 200 |
| POST | https://apiops-staging.prahu-hub.com/api/auth/refresh | 401 |
| GET | /lupa-password?_rsc=... (2x) | 200 (prefetch RSC Next.js, bukan navigasi) |
| POST | /cdn-cgi/rum, /cdn-cgi/challenge-platform/... | 204/200 (Cloudflare) |

- Console: 1 error, yaitu 401 pada /api/auth/refresh. Ini kondisi unauthenticated yang wajar; BUKAN bug candidate.
- Host API backend terobservasi: apiops-staging.prahu-hub.com. Mekanisme session (cookie/token, refresh) BELUM diverifikasi.

## Blocker dan langkah berikut
1. User mengisi baris akun di config/env.md (email, password, role sesuai sumber). Jangan akun buatan.
2. Jalankan ulang workflow explore: observasi form (sudah ada di sini), login SATU kali, catat sinyal sukses aktual, URL, state, waktu.
3. Bila login gagal: berhenti, diagnosis, tanpa retry otomatis.
4. Setelah authenticated: petakan menu/route yang benar-benar terlihat ke explore/module-map.md.

## NEEDS VALIDATION
Redirect pasca login, success signal, authenticated home, session lifecycle (refresh endpoint), storageState, roles, menu/modul/route, fungsi dua kontrol tanpa nama, halaman /lupa-password.

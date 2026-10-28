# Selector live History Tracking — 2026-10-21

Sumber DOM: `artifacts/evidence/HT20261021-0147/*.yml`. URL Dashboard: https://ops-staging.prahu-hub.com/tracking-location. Akun Admin, Chromium desktop. Count di bawah berasal dari state live yang digunakan; bukan jaminan semua data atau role.

| State | Locator Playwright | Match | Evidence |
|---|---|---|---|
| Awal | getByRole('tab', {name:'Tracking Terkini', exact:true}) | 1 | 01-tracking |
| Awal | getByRole('tab', {name:'Riwayat Tracking', exact:true}) | 1 | 01-tracking |
| Filter kosong | getByRole('button', {name:'Pilih ID Order', exact:true}) | 1 | 01-tracking |
| Order dropdown terbuka | getByRole('textbox', {name:'Cari ID Order...', exact:true}) | 1 | runtime eksplorasi dropdown |
| Filter kosong | getByRole('button', {name:'Pilih Nopol/No. Kontainer', exact:true}) | 1 | 01-tracking |
| Order ditemukan | getByRole('button', {name:'Cari', exact:true}) | 1 | 02-order-history |
| History tersedia | getByRole('heading', {name:'History Tracking', exact:true}) | 1 | 02-order-history |
| History tersedia | getByRole('button', {name:'Per Lokasi', exact:true}) | 1 | 02-order-history |
| History tersedia | getByRole('button', {name:'Timeline', exact:true}) | 1 | 03-timeline |
| Timeline kendala | getByRole('listitem').filter({hasText:'Kendala •'}) | 3 | 09-kendala-timeline |
| Timeline kendala | getByRole('button', {name:'Perbesar foto 1', exact:true}) | 5 | 09-kendala-timeline; ambigu, scope ke event kendala |
| Preview | getByRole('dialog', {name:'Pratinjau foto', exact:true}) | 1 | 10-kendala-photo-preview |
| Preview | getByRole('button', {name:'Tutup', exact:true}) | 1 | 10-kendala-photo-preview |

Tunggu aria-selected=true setelah mengganti tab; tunggu aria-pressed=true setelah memilih Timeline Dashboard. Untuk Timeline Penugasan, tunggu teks Memuat timeline... hilang. Buka panel Filter sebelum Terapkan. Route detail penugasan terobservasi lewat Aksi > Detail: `/penugasan-tracking/d6be9745-038b-40d5-878c-f9073d11a6a1`; jangan menggeneralisasi ID atau state dari sampel ini.

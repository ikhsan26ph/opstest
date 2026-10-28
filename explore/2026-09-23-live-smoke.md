# Smoke navigasi OPS — 2026-09-23

Observasi teknis render/navigation; bukan pengujian aturan bisnis. HTTP 200 dicatat dari respons dokumen navigasi. Tanda — berarti landing SPA setelah login atau perpindahan tab; status HTTP dokumen terpisah tidak direkam, bukan dianggap 200.

| Akun | Route | State | HTTP dokumen | Heading visible | Hasil observasi | Evidence |
|---|---|---|---:|---|---|---|
| admin | /monitoring | default | — | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/5-admin--monitoring-default.yml) |
| admin | /order | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/6-admin--order-default.yml) |
| admin | /penugasan-tracking | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/7-admin--penugasan-tracking-default.yml) |
| admin | /manajemen-vendor | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/8-admin--manajemen-vendor-default.yml) |
| admin | /pengaturan-akun | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/9-admin--pengaturan-akun-default.yml) |
| admin | /master/provinsi | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/10-admin--master-provinsi-default.yml) |
| admin | /master/kota | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/11-admin--master-kota-default.yml) |
| admin | /master/kecamatan | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/12-admin--master-kecamatan-default.yml) |
| admin | /master/kelurahan | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/13-admin--master-kelurahan-default.yml) |
| admin | /master/customer | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/14-admin--master-customer-default.yml) |
| admin | /master/waktu-perjalanan | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/15-admin--master-waktu-perjalanan-default.yml) |
| admin | /master/pelabuhan | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/16-admin--master-pelabuhan-default.yml) |
| admin | /master/pelayaran | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/17-admin--master-pelayaran-default.yml) |
| admin | /master/unit | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/18-admin--master-unit-default.yml) |
| admin | /master/sopir | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/19-admin--master-sopir-default.yml) |
| admin | /master/cs | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/20-admin--master-cs-default.yml) |
| admin | /tracking-location | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/21-admin--tracking-location-default.yml) |
| admin | /progres-pengiriman | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/22-admin--progres-pengiriman-default.yml) |
| admin | /dashboard-operasional | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/23-admin--dashboard-operasional-default.yml) |
| admin | /akun-saya | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/24-admin--akun-saya-default.yml) |
| admin | /setting/sistem | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/25-admin--setting-sistem-default.yml) |
| admin | /setting/general | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/26-admin--setting-general-default.yml) |
| admin | /setting/preferensi-notifikasi | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/27-admin--setting-preferensi-notifikasi-default.yml) |
| admin | /monitoring/riwayat | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/28-admin--monitoring-riwayat-default.yml) |
| vendor | /vendor-portal/order | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/32-vendor--vendor-portal-order-default.yml) |
| vendor | /penugasan-tracking | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/33-vendor--penugasan-tracking-default.yml) |
| vendor | /vendor-portal/master/armada | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/34-vendor--vendor-portal-master-armada-default.yml) |
| vendor | /vendor-portal/master/sopir | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/35-vendor--vendor-portal-master-sopir-default.yml) |
| vendor | /vendor-portal/akun-saya | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/36-vendor--vendor-portal-akun-saya-default.yml) |
| vendor | /vendor-portal/setting/preferensi-notifikasi | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/37-vendor--vendor-portal-setting-preferensi-notifikasi-default.yml) |
| subuser | /monitoring | default | — | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/41-subuser--monitoring-default.yml) |
| subuser | /order | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/42-subuser--order-default.yml) |
| subuser | /penugasan-tracking | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/43-subuser--penugasan-tracking-default.yml) |
| subuser | /manajemen-vendor | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/44-subuser--manajemen-vendor-default.yml) |
| subuser | /pengaturan-akun | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/45-subuser--pengaturan-akun-default.yml) |
| subuser | /master/provinsi | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/46-subuser--master-provinsi-default.yml) |
| subuser | /master/kota | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/47-subuser--master-kota-default.yml) |
| subuser | /master/kecamatan | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/48-subuser--master-kecamatan-default.yml) |
| subuser | /master/kelurahan | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/49-subuser--master-kelurahan-default.yml) |
| subuser | /master/customer | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/50-subuser--master-customer-default.yml) |
| subuser | /master/waktu-perjalanan | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/51-subuser--master-waktu-perjalanan-default.yml) |
| subuser | /master/pelabuhan | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/52-subuser--master-pelabuhan-default.yml) |
| subuser | /master/pelayaran | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/53-subuser--master-pelayaran-default.yml) |
| subuser | /master/unit | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/64-subuser--master-unit-default.yml) |
| subuser | /master/sopir | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/55-subuser--master-sopir-default.yml) |
| subuser | /master/cs | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/56-subuser--master-cs-default.yml) |
| subuser | /tracking-location | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/67-subuser--tracking-location-default.yml) |
| subuser | /progres-pengiriman | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/58-subuser--progres-pengiriman-default.yml) |
| subuser | /dashboard-operasional | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/59-subuser--dashboard-operasional-default.yml) |
| subuser | /akun-saya | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/60-subuser--akun-saya-default.yml) |
| subuser | /setting/sistem | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/61-subuser--setting-sistem-default.yml) |
| subuser | /setting/general | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/62-subuser--setting-general-default.yml) |
| subuser | /setting/preferensi-notifikasi | default | 200 | ya | observed | [snapshot](live-2026-09-23T03-13-20-474Z/63-subuser--setting-preferensi-notifikasi-default.yml) |
| subuser | /master/unit | tab-Jenis Armada | — | ya | observed | [snapshot](tabs-2026-09-23T03-26-10-026Z/-master-unit-Jenis-Armada.yml) |
| subuser | /master/unit | tab-Jenis Kontainer | — | ya | observed | [snapshot](tabs-2026-09-23T03-26-10-026Z/-master-unit-Jenis-Kontainer.yml) |
| subuser | /tracking-location | tab-Riwayat Tracking | — | ya | observed | [snapshot](tabs-2026-09-23T03-26-10-026Z/-tracking-location-Riwayat-Tracking.yml) |

Sumber lengkap: [summary](live-2026-09-23T03-13-20-474Z/smoke-summary.json) dan [run](live-2026-09-23T03-13-20-474Z/results.json). Hanya tab yang tercantum diuji; filter/dialog dan mutasi tidak tercakup; storageState/concurrency belum diuji.

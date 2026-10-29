# Onboarding customer baru

Tidak ada perubahan logika inti (resolver, fixture, check) untuk customer yang memakai capability existing.

## Langkah

1. **Requirement**: kumpulkan ID requirement customer dan sumbernya. Tandai yang ambigu sebagai klarifikasi BA/PO; jangan mengisi ekspektasi dari tebakan.
2. **Paket**: tentukan paket di `profiles/packages/`. Bila paket baru, definisikan SEMUA capability katalog; nilai yang belum terverifikasi = `null` dengan `source` yang menjelaskan.
3. **Profil**: buat `profiles/customers/<id>.json`:
   - `kind: "customer"`, `package`, `manifestVersion` (naikkan setiap perubahan ekspektasi), `scenarioFile`.
   - `requiredCapabilities`: semua capability yang diuji untuk customer ini (wajib non-null setelah merge).
   - `overrides`: hanya perbedaan dari paket, tiap leaf punya `source` (ID requirement atau evidence).
   - `requirements`: `{ "<REQ>": { "title", "capabilities": [...] } }`.
4. **Registry**: tambah `profiles.<id>` dan, bila ada, `defaultTargets.<id>`.
5. **Target**: gunakan target existing (tambahkan `<id>` ke `allowedProfiles`) atau buat target baru dengan `environment`, `tenant`, `account.secretRef` (baris `config/env.md`) + `envOverride` (nama env var CI), `expectedRole`, `settings.scope`, `settings.lockKey`. Jangan menulis email/password di target.
6. **Skenario**: buat `scenario/profile-capabilities/<id>_scenarios.json` (skema `scenario/README.md` + field `capability`). Setiap requirement × capability wajib punya skenario; validasi menolak bila tidak.
7. **Capability baru** (hanya bila perilaku belum ada di katalog): tambah ke `profiles/catalog.json`, definisikan di semua paket, tambah check di `tests/capabilities/index.js` dengan kesiapan halaman/data sebelum assertion. Selector dari DOM teramati; tandai NEEDS LIVE VALIDATION bila hanya dari bundle.
8. **Suite unik**: alur yang hanya ada pada satu customer boleh dibuat sebagai spec modul biasa (`tests/<modul>.spec.js`), tetap memakai fixture profil.
9. **Validasi**: `npm run validate:profiles`, `npm run test:list:profile -- <id>`, lalu run live setelah konfigurasi target dikonfirmasi.
10. **CI**: tambah `<id>` ke pilihan `profile` di `.github/workflows/profile-tests.yml`; bila target baru, tambah opsi target dan pemetaan `concurrency.group` ke `lockKey`.

Profil `example-local` + target `example-offline` (domain `.invalid`) adalah contoh sintetis, bukan tenant nyata; dipakai `validate-profiles.js` untuk membuktikan registrasi customer.

## Checklist konfigurasi target

- Scope setting terverifikasi (session/akun/tenant/environment) dengan evidence.
- Konfigurasi aktual dibaca dari sumber independen (`system/status`), bukan dari UI fitur yang diuji.
- Bila scope environment dan konfigurasi customer berbeda dari profil lain: environment khusus, atau jadwal bergantian dengan lock + snapshot + restore terverifikasi.

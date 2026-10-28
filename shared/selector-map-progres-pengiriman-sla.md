# Selector Progres Pengiriman — SLA20261026-1532

Live 26 Oktober 2026, 15:29–15:36 UTC; OPS staging, akun1 config/env.md, header Admin Administrator. Chromium 1440×1000, Asia/Jakarta. Sumber DOM: artifacts/evidence/SLA20261026-1532. Tidak memakai selector OMS.

| State/elemen | Locator terobservasi | Match dan batas | Bukti |
|---|---|---|---|
| Navigasi | link Progres Pengiriman → /progres-pengiriman | 1; submenu Dashboard harus terbuka | 01-progres-smoke.yml |
| Halaman | heading Progres Pengiriman exact | 1; level2 | 01-progres-smoke.yml |
| Filter order | placeholder Masukkan ID Order exact | 1; free text, exact atau prefix | 02,04,05,07,08 snapshots |
| Eksekusi filter | button Terapkan exact | 1; GET /api/monitoring-tracking/progres-pengiriman?page=1&pageSize=20&orderId=... | 02,04,05,08 |
| Refresh | button Refresh exact | 1; disabled sebelum pencarian pertama | 01 vs 07 |
| Reset | button Reset exact | 1; tidak digunakan untuk verdict SLA | 01 |
| Status | button Pilih Status exact → listbox option | 1; opsi Pilih Status/Sesuai perkiraan rute/Lebih lambat, masih sesuai SLA/Berisiko melewati SLA/Melewati SLA | 06-status-options.yml |
| Identitas armada | text memuat nopol, sopir, ID Order | 1 untuk exact filter ORD2996154854; cocokkan assignmentId API | 05,07 |
| Durasi | text Waktu berjalan: ... / SLA: ... | 1 per kartu; API waktuBerjalanMenit dan slaMenit; frontend memformat ke jam/menit | 05,07,08 + client-snippets.json |
| Target | tooltip Target minimum SLA — ... km | 1 per kartu; jangan pakai posisi visual yang di-clamp sebagai angka mentah | 07 |
| Empty completed | paragraph Tidak ada data progres pengiriman | 1 pada ORD2984503817 | 02 |
| Penugasan | row memuat order dan exact nopol → button Aksi → button Detail | 1 pada sampel normal aktif | 09-normal-history-timeline.yml, network.json |
| Timeline | button Timeline exact; tunggu Memuat timeline... hidden | 1; milestone dan jam WIB tampil | 09-normal-history-timeline.yml |
| Logout | button Logout exact | 1; verifikasi response /api/auth/logout dan kembali ke form login | lifecycle meta setelah run |

Route detail dibuka melalui UI Aksi>Detail: /penugasan-tracking/3b69c0fb-e085-4b35-acde-219772e8bbad. Endpoint detail, events dan stops/context sebelumnya terobservasi di evidence OPS dan dibaca ulang saat run ini. GET langsung disimpan terpisah, bukan dipresentasikan sebagai UI click.

Initial halaman hanya menampilkan instruksi filter; belum melakukan perhitungan. Smoke render sukses bukan verdict requirement SLA. Klik link Dashboard yang collapsed pada daftar Penugasan sempat intercepted; resolusi goto href yang telah diamati, tanpa force click. Unduh script dengan urllib mendapat403, sedangkan GET melalui context sesi yang sama200; algoritma backend tidak tersedia dan tidak diinfer dari source frontend.

## Validasi ulang SLAT-20261027-015203 — 27 Oktober 2026

Akun1/Admin, Chromium1440×1000 Asia/Jakarta. Selector Progres di atas tetap terobservasi pada tiga order exact: satu textbox IDOrder, satuTerapkan, satu kartu/Lacak ketika aktif; setelahSELESAI paragraphTidakadaData, response200data[]. Screenshotcase N/MP1/MP2 di artifacts/evidence/SLAT-20261027-015203. ModePengurus menampilkan kartuProgres; tidak menyamakan pembatasan LihatTracking dengan Progres.

Form tracking diamati via Aksi>IsiDataTracking. Nativecomboboxoption value adalah stopUUID; labelnamaDP—alamat—Muat/Bongkar—0/2. Awalform menampilkan “Berangkat ke Alamat”, sedangkan responseevents mengembalikan milestoneLabel BerangkatMuat/BerangkatBongkar. Verifikasi berdasarkan kind/stop dan event persisted, bukan teks nextstep saja. Foto satuinput[type=file], hanya padaSELESAI;16savePOST200 tanpa konfirmasi kedua,8foto sintetis.

Masterprasyarat: linkMasterDropPoint /master/customer; rowperusahaanQA buttonDetail→/master/customer/b8168dad-c4fe-48ae-8aec-6364cce3dc17. Scope row dengan has getByRole(cell,{name:'QA-SLA3-20261027-014121 Muat Gresik',exact:true}), lalu buttonEdit. getByTextnamaDPglobal ambigu karena duplikasirow/cardmobile. ModalheadingEditDropPoint, placeholderTempel link GoogleMaps di sini, MasukkanAlamat, buttonSimpan. Linkmaps memicu resolvewilayah; pasangwaitresponse sebelumfill bila request diperlukan, atau verifikasi statefinal yang sudahtersedia. Jangan menunggu requestbaru ketika nilailinksama tidakberubah.

Timelinefinal: rowownQA pada daftar (ketigaownassignment terlihat di halamanawal)→Aksi>Detail→buttonTimeline. Tunggu Memuattimeline... hidden dan listitemSelesaiBongkar visible. Finalrekonsiliasi memakai APIevents/detail/context/Order, bukan hanya screenshot. Filter rekonsiliasi sempat takmengirimrequestbaru; gunakan rowexactownID/nopol yang sudahterlihat, tanpa forceclick atau looseningassertion.

## Pemeriksaan akhir SLAEND-20261027-021902 — 27 Oktober 2026

Admin, Chromium1440×1000 Asia/Jakarta. `/tracking-location` tab RiwayatTracking (role tab/name exact), button Pilih ID Order exact, textbox Cari ID Order... exact: satu match per state. Pencarian setiap own order menampilkan listbox paragraph “Tidak ada pilihan”. Sumber DOM YAML `N/MP1/MP2-05-history-search.yml`. Client termuat `0794h0rh7qhep.js` mengungkap GET `/api/monitoring-tracking/track/orders?scope=history` dan GET `/api/monitoring-tracking/track?orderCode=...&nopol=...`, tersimpan tracking-client-snippets.json; jangan menggunakan prefix `/api/track` yang keliru. History20075pilihan; exact ownQA track404ASSIGNMENT_PENGURUS. Tidak memakai tombol LihatTracking disabled atau memalsukan jenispenugasan.

Route historis `/dashboard-operasional` saat ini redirect `/akun-saya`; otomatis GETsummary dan keterlambatan404FEATURE_DISABLED, “Fitur tidak aktif pada environment ini”. Tidak tersedia sebagai selector akses hasilakhir.

Detail assignment tetap memakai buttonTimeline exact dan textSelesaiBongkar setelah orderCode exact visible; eventakhir terlihat pada ketiganya, tanpa teks SLA/Durasi/WaktuTempuh. Field-inventory memuat12response read-only detail/events/stops/context/tracking-context; tidak ada realisasiSLAfinal. Scope bukti hanya output, bukan kodebackend.

## Retest empat case SLAR4-20261027-025001 — 27 Oktober 2026

Tambah Lokasi Bongkar exact button satu match pada formFTL; setiap penambahan menampilkan Pilih Drop Point Tujuan untuk rowkosong berikutnya. MasterDP response `/api/droppoints?status=true&limit=999` memverifikasi WarehouseGunungPati dan IK-SMGAyamGoreng cityIdSemarang sama dan koordinat terisi. RouteMDtypeMULTIDROP tersimpan, duaDPidberbeda. Selector form/assignment/tracking sebelumnya tetapterobservasi dan dipakaiUI, tidakmengarangparameter.

MD sesudahSB1: Progres paragraphTidakadaData; GETexact200data[], tidaklulus/gagalcap dariabsence. Penugasan detailgroup KotaSemarang(1/2alamatselesai),secondDP0/2,contextDONE/PENDING,assignmentIN_PROGRESS. SetelahBB2 Progreskembali. Bukti MD-12/13/14/15/16 dan md-between-unloads.json. Tidak mengubah status agar kartu tampil; hanya statusberikutnyasesuaiflow.

Loadedclientmengandung GETsteps perassignment; snippets steps-client-snippets.json, empatread200data[]. Rute `/riwayat-tracking` terlihat diclient dan setelahsettle redirect `/tracking-location?tab=riwayat`; tab aktual PengirimanBerjalan/PengirimanSelesai, headingRiwayatTrackingArmada. Awalshellsaja bukanfinalDOM; bukti31-riwayat-route-after-reads.yml. Tidakmenggunakanoldtabnamessebagaiasumsi. Endpointtrack/exacthistory terverifikasiulangdanmenolakPengurus denganASSIGNMENT_PENGURUS.

Screenshotmaskbanneruntukprivasiakun. APIgetfilename memakaihash dan cap100karakter. Guardscope4create+4assign+22eventownQA, tidakPATCH. Harvest/read-onlysmokesebelumsetup;15skenarioberdasarkanrequirementuser.

# Selector Edit Penugasan — live 26 Oktober 2026

Sumber EP20261026-062548, OPS staging Admin/Administrator, Chromium1440×1000 Asia/Jakarta. Evidence artifacts/evidence/EP20261026-062548. Bukan selector OMS. UI awal edit ownQA aktif /penugasan-tracking/df01d574-dfe9-4f10-a277-e742736340c9/edit; route didapat melalui Aksi>Edit.

| State / elemen | Locator live | Jumlah / batas |
|---|---|---|
| Daftar | heading Penugasan Tracking; button Filter / Filter N filter aktif |1. Terapkan trial-click lalu buka Filter bila collapsed |
| Filter | placeholder Masukkan ID Order; button Terapkan |1; GET query orderId=ORD... |
| Baris | table tbody tr hasText exact order dan has child text exact nopol |1 pada sampel; jangan substring KO123 yang juga cocok KO1234 |
| Aksi | row button Aksi → button Edit |1 setelah menu terbuka; cek enabled pada status aktual |
| Edit | heading Kembali Edit Penugasan; heading Info Order; heading Armada1 |1 pada FTL, tunggu data field siap |
| Master/manual | getByRole('radio',{name:'Pilih Dari Master'/'Isi Data Manual',exact:true}) |2 per pilihan pada FTL:0armada,1sopir; urutan dari DOM diamati |
| Nopol manual | placeholder Masukkan No. Polisi |1 |
| Sopir manual | placeholder Masukkan Nama Sopir; placeholder Contoh: 081234567898 |1 masing-masing; WA opsional |
| Sopir master | button Pilih Sopir/No. WhatsApp atau label pilihan tersimpan; option nama - WA |1button dan exactoption;7masterSopir vendorNusantara teramati. Tidak menyimpulkan akunDH dari absennya field userId |
| Mode | button /^Tugaskan ke Sopir / dan /^Tugaskan ke Pengurus / |1masing-masing; modeSopir disabled untukmanualSopir, enabled untukmanualArmada+masterSopir |
| Save | button Simpan padaform → heading Konfirmasi Penugasan parent button Simpan |2button setelahkonfirmasi; perlu scope. PUT /api/penugasan/<assignmentId> HTTP200; response Penugasan berhasil diupdate. Tidak menganggap klikpertama langsungmutasi |
| Konfirmasi | button Periksa Kembali |1; modal bukan role dialog pada DOM aktual |
| Validasi Nopol | paragraph No. Polisi harus diisi |1setelah Savekosong; tidakada PUT |

Prasyarat setup Order: kalender Oktober2026 memiliki dua tombol27 (Sept27 abu-abu danOct27). Currentmonth27 class text-gray-700 diamati, discope ke div.grid.grid-cols-7. Pilih lalu periksa review27/10/202610:00 sebelum create. Ambiguitas selector diperbaiki sebelum mutasi; bukan defect aplikasi.

FCL live: label heading Kontainer1, placeholder Nama Sopir (berbeda dari FTL Masukkan Nama Sopir); ArmadaMuat/SopirMuat digunakan. Detail.sopirMuat hanya name/WA, tanpa id; master ID dibaca GET /api/penugasan-tracking/<id>/tracking-context .data.assignment.sopirStuffing.id. Request PUT menggunakan sopirStuffingId / sopirStuffingManualName. NoKontainer/Segel/Kapal/Voyage editable; scope dipertanyakan. Source row discope NoKontainer exact, bukan nopoltruk.

Date actual ownQA PS: Editprefill ETD26/10 danETA28/10 dariGETbaseline27/10/29/10. KlikSavehelpererror Berangkat (ETD) harus setelah Closing Time. Tidakmencapaiheadingkonfirmasi; bukan langsung timeout aplikasi. Workaround kalenderisi27/29 sesuai baseline; validatorGETmemastikaninstantidentik. FCLnormalcasefailedtetapdipertahankan.

Master-armada readiness: bila sourcedetail.armada.id ataucontext.armadaStuffing.id terisi, field nopolberupa dropdownberlabelnopol; janganmenunggutextboxmanual. Bila MasterSopir, tungguradioMasterchecked danbuttonnamasesuaisebelumberinteraksi, sertaoptionaktualsiap. DataVendorIK diaksesviaakunVendor, loginhomepage /vendor-portal/order; routepenugasaneditaktualberhasilmelaluidaftar. Case28/29Vendorreadonlypassed, seluruhpercobaanlamaakundatawrongscopedisimpan.

## Lanjutan DH — EPDH20261026-072815

XML/PNG live package staging2.3.5-stg(28), SM_A528B1080×2400. Baca bounds ulang tiap state; jangan memakai koordinat tetap lintas perangkat.

| Elemen | Selector teramati | Batas |
|---|---|---|
| Own card | resource-id home_isi_penugasan_button_40dc22f3-da9b-483c-87c1-82e949618805 |1 exactUUID; periksa enabled/bounds sebelum tap |
| Daftar | android.view.View scrollable=true, bounds awal[0,315][1080,2040] |Batas bawah berubah saat navigasi tersembunyi; census sampai fingerprint sama dua kali |
| Profile | resource-id bottom_nav_profile |1; profil Ikhsan/nomor akhir1881 cocok Master Julian |
| Home navigation | resource-id bottom_nav_home |1 pada Profile; tidak logout |
| Detail own order | TextView exact TSH-ORD3000173723 |Cocokkan sesudah membuka Isi Penugasan |
| Next action | resource-id detail_simpan_button, descendant TextView Berangkat Bongkar |Enabled, tetapi tidak ditap pada seluruh run DH |
| Detail Back | child content-desc Back, wrapper clickable |Bounds dibaca dari XML; Lapor/Sinkronkan global tidak digunakan |

Home Mulai Perjalanan bukan oracle mulai dari awal; periksa form dan screenshot BM/SM centang. Census UUID direkonsiliasi ke GET detail OPS untuk membuktikan order ada/tidak ada, bukan hanya dua card pertama. Cold reopen memakai activity staging terverifikasi tanpa clear data/logout.

Setup Master Vendor: link Master Sopir /vendor-portal/master/sopir dan Tambah Sopir /vendor-portal/master/sopir/tambah. Placeholder Masukkan Nama Sopir dan Masukkan Nomor WhatsApp; button Simpan. Actual POST/api/vendor/sopirs/bulk201. Kode Akses pada list harus diredaksi dari text/network; hindari screenshot list. Dropdown sopir aktual Pilih Sopir/No. WhatsApp, bukan Cari Sopir. Opsi Julian dan QA-run PEMBANDING dipilih dari DOM aktual setelah data siap.

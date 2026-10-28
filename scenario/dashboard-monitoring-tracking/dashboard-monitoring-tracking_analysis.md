# TMS.S018 — Dashboard Monitoring & Tracking Location · Analysis (REQ / VAL / AC)

> Sumber: [`dashboard-monitoring-tracking_spec.md`](dashboard-monitoring-tracking_spec.md) (verbatim `Spek TMS-S` baris 109–120) · [`spec-index.md`](../spec-index.md).
> Status: requirement tertulis dari user; belum divalidasi terhadap OPS staging. Tidak ada asumsi di luar spec.
> Rujukan lintas modul yang dibaca: `pengaturan-sistem_spec.md` (TMS.S020-R03) karena disebut eksplisit ("Pengaturan Sistem", "pengaturan radius").

## 1. Breakdown section
| SEC | Section | Rule sumber | Aktor | REQ | VAL | AC |
|---|---|---|---|---|---|---|
| SEC-01 | General Rules & perubahan utama | TMS.S018-R01, R02, R03 | Tidak disebut | REQ-001–REQ-005 | — | AC-001–AC-003 |
| SEC-02 | Monitoring — Scorecard | TMS.S018-R04 | Tidak disebut | REQ-006–REQ-014 | VAL-001 | AC-004–AC-011 |
| SEC-03 | Monitoring — Legenda Status / Filter Tahapan | TMS.S018-R05 | Tidak disebut | REQ-015–REQ-019 | — | AC-012–AC-014 |
| SEC-04 | Monitoring — Card Data Kasus | TMS.S018-R06 | Driver (sumber Kendala) | REQ-020–REQ-033 | VAL-002 | AC-015–AC-023 |
| SEC-05 | Monitoring — Card Armada Terdekat | TMS.S018-R07 | Tidak disebut | REQ-034–REQ-042 | VAL-003 | AC-024–AC-029 |
| SEC-06 | Prediksi Rute | TMS.S018-R08 | Sistem | REQ-043–REQ-045 | — | AC-030 |
| SEC-07 | Deteksi Keluar Jalur | TMS.S018-R09 | Sistem | REQ-046–REQ-061 | VAL-004–VAL-006 | AC-031–AC-039 |
| SEC-08 | Progres Pengiriman — Perhitungan | TMS.S018-R10 | Sistem | REQ-062–REQ-079 | VAL-007 | AC-040–AC-046 |
| SEC-09 | Progres Pengiriman — Halaman | TMS.S018-R11 | Tidak disebut | REQ-080–REQ-092 | — | AC-047–AC-053 |
| SEC-10 | Maps Tracking & Location | TMS.S018-R12 | Tidak disebut | REQ-093–REQ-096 | — | AC-054–AC-056 |

## 2. Aktor & hak akses (sesuai spec)
| Aktor | Akses | Sumber |
|---|---|---|
| Tidak disebut di S018 | S018 tidak menyebut role pengguna dashboard. | TMS.S018-R01–R12 |
| Driver | Sumber "issue" untuk kasus Kendala. | TMS.S018-R06 poin 1, 3 |
| Sub user (lintas modul) | Dashboard → Monitoring, Progres Pengiriman, Tracking & Location memiliki Cakupan Data turunan dari Order. | TMS.S021-R08 poin 5; R09 |
| Pengatur Pengaturan Sistem | Lebar koridor, ambang persisten, nilai (n), radius diatur melalui Pengaturan Sistem. | TMS.S018-R07 poin 7; R09 poin 2, 5, 7; TMS.S020-R03 |

## 3. Requirement (REQ)
### SEC-01 · General Rules & perubahan utama
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-001 | Order yang masuk dashboard: FTL, FCL, LTL, LCL. | TMS.S018-R03 poin 1 | TERTULIS |
| REQ-002 | Data yang tampil pada dashboard adalah armada untuk darat, dan kontainer untuk laut. | TMS.S018-R03 poin 2 | TERTULIS |
| REQ-003 | Data FTL & LTL mengambil data nopol; FCL & LCL mengambil data no. kontainer. | TMS.S018-R02 poin 4 | TERTULIS |
| REQ-004 | Meskipun kontainer menggunakan armada, data saat hover tetap data kontainer; namun saat pengiriman terdapat armada yang digunakan maka tampil nopolnya. | TMS.S018-R03 poin 3 | AMBIGU (Q-06) |
| REQ-005 | Seluruh rule general sebelumnya tetap berlaku: auto-update, last update timestamp, threshold GPS offline, refresh manual, zoom, fullscreen, filter by customer. | TMS.S018-R03 poin 4 | REF-EKSTERNAL (Q-01) |

### SEC-02 · Monitoring — Scorecard
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-006 | Scorecard yang ditampilkan: Total Armada, Tidak Update, Melewati SLA, Jumlah Kendala, Keluar Jalur (baru), Potensi Terlambat (baru). | TMS.S018-R04 poin 1; R02 poin 1 | TERTULIS |
| REQ-007 | Rule scorecard Total Armada, Tidak Update, Melewati SLA, dan Kendala mengikuti spesifikasi sebelumnya. | TMS.S018-R04 poin 2 | REF-EKSTERNAL (Q-01) |
| REQ-008 | Armada/kontainer dihitung "Keluar Jalur" apabila status keluar jalur terkonfirmasi (Rule Deteksi Keluar Jalur). | TMS.S018-R04 poin 3 | TERTULIS |
| REQ-009 | Data Keluar Jalur otomatis hilang dari scorecard apabila armada kembali masuk ke koridor toleransi prediksi rute. | TMS.S018-R04 poin 3 | TERTULIS (Q-09) |
| REQ-010 | Data Keluar Jalur otomatis hilang dari scorecard apabila status order selesai / completed. | TMS.S018-R04 poin 3 | TERTULIS |
| REQ-011 | Armada/kontainer dihitung "Potensi Terlambat" apabila proyeksi waktu tiba > SLA, sedangkan waktu berjalan belum melewati SLA. | TMS.S018-R04 poin 4 | TERTULIS (istilah, Q-02) |
| REQ-012 | Data Potensi Terlambat otomatis hilang apabila proyeksi waktu tiba kembali ≤ SLA. | TMS.S018-R04 poin 4 | TERTULIS |
| REQ-013 | Apabila waktu berjalan sudah melewati SLA, data hilang dari Potensi Terlambat dan berpindah ke scorecard "Melewati SLA". | TMS.S018-R04 poin 4 | TERTULIS |
| REQ-014 | Data Potensi Terlambat otomatis hilang apabila status order selesai / completed. | TMS.S018-R04 poin 4 | TERTULIS |

### SEC-03 · Monitoring — Legenda Status / Filter Tahapan
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-015 | Legenda status Monitoring ditambah 2 status baru: Keluar Jalur & Potensi Terlambat. | TMS.S018-R05 poin 1 | TERTULIS |
| REQ-016 | Daftar legenda: Semua Tahapan, Berangkat Muat, Selesai Muat, Berangkat Bongkar, Selesai Bongkar, Kendala, Keluar Jalur (baru), Potensi Terlambat (baru), Tidak Update, Melewati SLA. | TMS.S018-R05 poin 2 | TERTULIS (label "Selesai Bongkar", Q-05) |
| REQ-017 | "Semua Tahapan" adalah tampilan default terpilih. | TMS.S018-R05 poin 2 | TERTULIS |
| REQ-018 | Legenda menampilkan warna status, nama status, dan jumlah armada per status. | TMS.S018-R05 poin 3 | TERTULIS (warna tidak disebut) |
| REQ-019 | Legenda digunakan untuk memfilter armada yang ditampilkan pada maps. | TMS.S018-R05 poin 4 | TERTULIS |

### SEC-04 · Monitoring — Card Data Kasus
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-020 | Jenis kasus pada Data Kasus: Kendala (issue dari driver), Tidak Update, Melewati SLA, Keluar Jalur (baru), Berisiko Terlambat (baru). | TMS.S018-R06 poin 1 | AMBIGU ("Berisiko Terlambat" vs "Potensi Terlambat", Q-02) |
| REQ-021 | Data per kasus: Nopol / No. Kontainer, Nama driver, Deskripsi kasus, Waktu laporan, Badge jenis kasus, Button Lacak. | TMS.S018-R06 poin 2 | TERTULIS (Q-15) |
| REQ-022 | Deskripsi Kendala = deskripsi issue dari driver. | TMS.S018-R06 poin 3 | TERTULIS |
| REQ-023 | Deskripsi Tidak Update = default text berdasarkan durasi offline. | TMS.S018-R06 poin 3 | TERTULIS (teks tidak diberikan, Q-07) |
| REQ-024 | Deskripsi Melewati SLA = default text berdasarkan durasi keterlambatan. | TMS.S018-R06 poin 3 | TERTULIS (Q-07) |
| REQ-025 | Deskripsi Keluar Jalur = default text berdasarkan durasi keluar jalur + jarak dari titik prediksi rute terdekat. | TMS.S018-R06 poin 3 | TERTULIS (Q-07) |
| REQ-026 | Deskripsi Berisiko Terlambat = default text berdasarkan proyeksi durasi keterlambatan terhadap SLA. | TMS.S018-R06 poin 3 | TERTULIS (Q-07) |
| REQ-027 | Dropdown filter jenis kasus: Semua Kasus (default), Kendala, Tidak Update, Melewati SLA, Keluar Jalur, Berisiko Terlambat. | TMS.S018-R06 poin 4 | TERTULIS |
| REQ-028 | Filter jenis kasus hanya berlaku pada card Data Kasus. | TMS.S018-R06 poin 5 | TERTULIS |
| REQ-029 | Data otomatis terfilter saat pilihan filter berubah. | TMS.S018-R06 poin 5 | TERTULIS |
| REQ-030 | Terdapat button "Riwayat" untuk melihat histori kasus. | TMS.S018-R06 poin 6 | TERTULIS (isi halaman tidak dijelaskan, Q-17) |
| REQ-031 | Button Lacak diklik → redirect ke halaman Tracking & Location berdasarkan armada/order terkait. | TMS.S018-R06 poin 7 | TERTULIS |
| REQ-032 | Kontainer yang tidak menggunakan armada (tidak ditugaskan ke sopir) → button Lacak disable; saat hover tampil tooltip "Tersedia jika ditugaskan ke sopir". | TMS.S018-R06 poin 7 | TERTULIS |
| REQ-033 | Satu armada/kontainer dapat memiliki lebih dari satu kasus dan tampil sebagai baris kasus terpisah. | TMS.S018-R06 poin 8 | TERTULIS |

### SEC-05 · Monitoring — Card Armada Terdekat
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-034 | Card menampilkan armada/kontainer yang mendekati lokasi muat dan lokasi bongkar. | TMS.S018-R07 poin 1 | TERTULIS |
| REQ-035 | Terdapat filter tab: Semua (default) / Lokasi Muat / Lokasi Bongkar. | TMS.S018-R07 poin 2 | TERTULIS |
| REQ-036 | Terdapat dropdown pencarian nopol/no. kontainer. | TMS.S018-R07 poin 3 | TERTULIS |
| REQ-037 | Data per armada: Nopol / No. Kontainer; Jarak ke lokasi muat / lokasi bongkar; Lokasi Muat atau Lokasi Bongkar (sesuai tujuan terdekat); Lokasi Saat Ini = alamat lengkap posisi armada saat ini (baru). | TMS.S018-R07 poin 4 | TERTULIS |
| REQ-038 | Alamat "Lokasi Saat Ini" dapat di-expand/collapse ("Lihat" / "Tutup"). | TMS.S018-R07 poin 5 | TERTULIS |
| REQ-039 | Data kontainer juga tampil pada card ini. | TMS.S018-R07 poin 6 | TERTULIS |
| REQ-040 | Radius armada terdekat mengikuti pengaturan radius (default 5 km). | TMS.S018-R07 poin 7; TMS.S020-R03 poin 2 | TERTULIS (Q-14) |
| REQ-041 | Data Barang (Armada Terdekat): data barang hanya ada satu di setiap order, tetap menggunakan pop up. | TMS.S018-R07 poin 8 | TERTULIS (pemicu pop up tidak disebut, Q-16) |
| REQ-042 | Pop up Data Barang menampilkan: ID Order, Deskripsi Barang, Nomor DO. | TMS.S018-R07 poin 8 | TERTULIS |

### SEC-06 · Prediksi Rute
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-043 | Saat order dibuat, alamat muat & alamat bongkar menghasilkan prediksi rute ke tujuan. | TMS.S018-R08 poin 1 | TERTULIS |
| REQ-044 | Sistem menyimpan hasil prediksi rute sebagai acuan pemantauan: geometri rute (garis prediksi rute ke tujuan), prediksi jarak tempuh, prediksi waktu tempuh. | TMS.S018-R08 poin 2 | TERTULIS |
| REQ-045 | Prediksi rute digunakan oleh Deteksi Keluar Jalur dan Progres Pengiriman. | TMS.S018-R08 poin 3 | TERTULIS |

### SEC-07 · Deteksi Keluar Jalur
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-046 | Di sekeliling prediksi rute dibuat koridor toleransi (jarak simpang yang masih dianggap wajar: noise GPS, pindah lajur, mampir rest area). | TMS.S018-R09 poin 1 | TERTULIS |
| REQ-047 | Lebar koridor toleransi dapat diatur melalui Pengaturan Sistem (S020-R03 poin 4: satuan tetap km, Default "3 Km"). | TMS.S018-R09 poin 2; TMS.S020-R03 poin 4 | TERTULIS |
| REQ-048 | Posisi GPS armada dibandingkan terhadap prediksi rute + koridor toleransi. | TMS.S018-R09 poin 3 | TERTULIS |
| REQ-049 | Armada dinyatakan keluar jalur apabila berada di luar koridor secara persisten (bukan sesaat), memenuhi ambang: jumlah titik GPS berturut-turut di luar koridor, ATAU durasi minimum di luar koridor, ATAU menjauh dari titik tujuan. | TMS.S018-R09 poin 4 | TERTULIS (nilai ambang tidak disebut, Q-08) |
| REQ-050 | Ambang persisten (poin 4) dapat diatur melalui Pengaturan Sistem. | TMS.S018-R09 poin 5 | KONFLIK (field tidak ada di S020-R03; Q-03) |
| REQ-051 | Keluar dari prediksi rute, tetapi masih sesuai pola perjalanan sebelumnya (koridor historis) → tidak tampil sebagai alert. | TMS.S018-R09 poin 6 | TERTULIS |
| REQ-052 | Keluar dari prediksi rute dan keluar dari pola perjalanan sebelumnya → tampil sebagai alert. | TMS.S018-R09 poin 6 | TERTULIS |
| REQ-053 | Koridor historis aktif apabila rute sudah memiliki minimal (n) perjalanan selesai; nilai (n) dapat diatur melalui Pengaturan Sistem. | TMS.S018-R09 poin 7 | KONFLIK (field (n) tidak ada di S020-R03; Q-03) |
| REQ-054 | Apabila jumlah perjalanan belum mencapai (n), penilaian menggunakan prediksi rute + koridor toleransi saja, dan fitur tetap berjalan. | TMS.S018-R09 poin 8 | TERTULIS |
| REQ-055 | Perjalanan yang terflag keluar jalur tidak digunakan sebagai data pembentuk koridor historis. | TMS.S018-R09 poin 9 | TERTULIS |
| REQ-056 | Sinyal GPS hilang / tidak update → masuk kasus "Tidak Update", bukan "Keluar Jalur". | TMS.S018-R09 poin 10 | TERTULIS (Q-19) |
| REQ-057 | Armada yang masih berada di dalam koridor historis tidak dihitung keluar jalur. | TMS.S018-R09 poin 10 | TERTULIS |
| REQ-058 | Status "Terkonfirmasi Keluar Jalur" saat kondisi persisten terpenuhi. | TMS.S018-R09 poin 11 | TERTULIS |
| REQ-059 | Status "Kembali ke Rute" saat armada kembali masuk koridor toleransi. | TMS.S018-R09 poin 11 | TERTULIS (Q-09) |
| REQ-060 | Saat keluar jalur terkonfirmasi, disimpan: waktu mulai keluar jalur, titik mulai menyimpang (koordinat), jarak dari titik prediksi rute terdekat, lokasi terakhir armada. | TMS.S018-R09 poin 12 | TERTULIS |
| REQ-061 | Seluruh perubahan status keluar jalur tersimpan pada audit trail dan histori tracking. | TMS.S018-R09 poin 13 | TERTULIS |

### SEC-08 · Progres Pengiriman — Perhitungan
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-062 | SLA waktu perjalanan = input user saat order dibuat (KPI pengiriman). | TMS.S018-R10 poin 1 | KONFLIK (FCL/LCL tanpa input waktu perjalanan; Q-04) |
| REQ-063 | Prediksi jarak tempuh & prediksi waktu tempuh diambil dari prediksi rute; jarak tempuh aktual & posisi dari GPS armada. | TMS.S018-R10 poin 1 | TERTULIS |
| REQ-064 | Jarak tempuh aktual = panjang lintasan sepanjang rute (posisi GPS diproyeksikan ke prediksi rute), bukan jarak garis lurus dari titik muat. | TMS.S018-R10 poin 2 | TERTULIS |
| REQ-065 | Waktu berjalan = current time − waktu mulai perjalanan (status Berangkat Muat). | TMS.S018-R10 poin 3 | TERTULIS |
| REQ-066 | Laju perkiraan rute = prediksi jarak ÷ prediksi waktu. | TMS.S018-R10 poin 4 | TERTULIS |
| REQ-067 | Laju minimal SLA = prediksi jarak ÷ SLA. | TMS.S018-R10 poin 4 | TERTULIS |
| REQ-068 | Target posisi perjalanan (saat ini) = laju perkiraan rute × waktu berjalan. | TMS.S018-R10 poin 4 | TERTULIS |
| REQ-069 | Target minimum SLA (saat ini) = laju minimal SLA × waktu berjalan. | TMS.S018-R10 poin 4 | TERTULIS |
| REQ-070 | Kecepatan aktual = dihitung dari data GPS terkini (rata-rata beberapa waktu terakhir, bukan sejak berangkat). | TMS.S018-R10 poin 4 | AMBIGU (Q-10) |
| REQ-071 | Sisa jarak = prediksi jarak − jarak tempuh aktual. | TMS.S018-R10 poin 4 | TERTULIS |
| REQ-072 | Proyeksi waktu tiba = waktu berjalan + (sisa jarak ÷ kecepatan aktual). | TMS.S018-R10 poin 4 | TERTULIS (kecepatan 0, Q-10) |
| REQ-073 | Status Progres "Sesuai perkiraan rute" → proyeksi tiba ≤ prediksi waktu rute. | TMS.S018-R10 poin 5 | TERTULIS |
| REQ-074 | Status Progres "Lebih lambat, masih sesuai SLA" → proyeksi tiba > prediksi waktu rute, namun masih ≤ SLA. | TMS.S018-R10 poin 5 | TERTULIS |
| REQ-075 | Status Progres "Berisiko melewati SLA" → proyeksi tiba > SLA, dan waktu berjalan masih ≤ SLA. | TMS.S018-R10 poin 5 | TERTULIS (istilah, Q-02) |
| REQ-076 | Status Progres "Melewati SLA" → waktu berjalan sudah melebihi SLA dan armada belum tiba. | TMS.S018-R10 poin 5 | TERTULIS (Q-18) |
| REQ-077 | Notifikasi dini dikeluarkan saat status "Berisiko melewati SLA", dengan ambang minimal proyeksi keterlambatan (agar tidak muncul saat selisih masih sangat kecil). | TMS.S018-R10 poin 6 | AMBIGU (nilai ambang tidak ada; Q-03) |
| REQ-078 | Apabila GPS tidak update, progres menggunakan data GPS terakhir dan armada tetap dihitung pada kasus "Tidak Update". | TMS.S018-R10 poin 7 | TERTULIS |
| REQ-079 | Catatan asumsi: prediksi rute hanya menghasilkan total jarak & total waktu (belum per ruas jalan), sehingga target posisi dihitung dengan asumsi laju rata konstan. | TMS.S018-R10 poin 8 | TERTULIS |

Rumus sesuai sumber (dikutip dari R10 poin 4):
- `Laju perkiraan rute = prediksi jarak ÷ prediksi waktu`
- `Laju minimal SLA = prediksi jarak ÷ SLA`
- `Target posisi perjalanan (saat ini) = laju perkiraan rute × waktu berjalan`
- `Target minimum SLA (saat ini) = laju minimal SLA × waktu berjalan`
- `Kecepatan aktual = dihitung dari data GPS terkini (rata-rata beberapa waktu terakhir, bukan sejak berangkat)`
- `Sisa jarak = prediksi jarak − jarak tempuh aktual`
- `Proyeksi waktu tiba = waktu berjalan + (sisa jarak ÷ kecepatan aktual)`

### SEC-09 · Progres Pengiriman — Halaman
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-080 | Halaman berada pada submenu Dashboard → Progres Pengiriman. | TMS.S018-R11 poin 1; R02 poin 2 | TERTULIS |
| REQ-081 | Halaman menampilkan list armada yang sedang berjalan, masing-masing dengan satu bar progres perjalanan. | TMS.S018-R11 poin 2 | AMBIGU (Q-12) |
| REQ-082 | Bar menampilkan progres jarak tempuh aktual terhadap prediksi jarak (0 s/d total jarak). | TMS.S018-R11 poin 3 | TERTULIS |
| REQ-083 | Penanda "Target minimum SLA" pada bar = posisi minimal agar armada tetap memenuhi SLA. | TMS.S018-R11 poin 4 | TERTULIS |
| REQ-084 | Penanda "Target posisi perjalanan" pada bar = posisi yang seharusnya sudah dicapai menurut prediksi waktu rute. | TMS.S018-R11 poin 4 | TERTULIS |
| REQ-085 | Warna bar mengikuti Status Progres. | TMS.S018-R11 poin 5 | TERTULIS (warna per status tidak disebut, Q-11) |
| REQ-086 | Data per armada: Nopol, Nama Sopir, ID Order; Rute (asal → tujuan); Jarak tempuh: aktual / total; Waktu berjalan / SLA; Prediksi durasi perjalanan; Badge Status Progres; Button Lacak. | TMS.S018-R11 poin 6 | TERTULIS (Nopol vs no. kontainer, Q-12) |
| REQ-087 | Button Lacak → redirect ke halaman Tracking & Location berdasarkan armada/order terkait. | TMS.S018-R11 poin 7 | TERTULIS |
| REQ-088 | Terdapat filter: Status, Nopol, Nama Sopir, ID Order. | TMS.S018-R11 poin 8 | TERTULIS (opsi Status tidak disebut, Q-11) |
| REQ-089 | Terdapat button "Reset" & "Terapkan" pada filter. | TMS.S018-R11 poin 8 | TERTULIS |
| REQ-090 | Default 20 data per halaman, dengan pagination; jumlah data per halaman dapat diubah. | TMS.S018-R11 poin 9 | TERTULIS |
| REQ-091 | Terdapat last update timestamp dan button Refresh. | TMS.S018-R11 poin 10 | TERTULIS |
| REQ-092 | Data bersifat auto-update mengikuti interval refresh system. | TMS.S018-R11 poin 11 | REF-EKSTERNAL (nilai interval tidak disebut; Q-01) |

### SEC-10 · Maps Tracking & Location
| ID | Requirement | Sumber | Status |
|---|---|---|---|
| REQ-093 | Rule maps tracking sebelumnya tetap berlaku. | TMS.S018-R12 poin 1 | REF-EKSTERNAL (Q-01) |
| REQ-094 | Legenda maps ditambah item: Prediksi rute ke tujuan, Jalur dilalui (GPS), Jalur di luar prediksi rute (baru). | TMS.S018-R12 poin 2 | TERTULIS |
| REQ-095 | Peta menampilkan segmen "Jalur di luar prediksi rute" yang menandai bagian jalur GPS yang menyimpang dari prediksi rute, beserta titik mulai menyimpang. | TMS.S018-R12 poin 3; R02 poin 3 | TERTULIS |
| REQ-096 | Segmen keluar jalur hanya tampil apabila armada memiliki status keluar jalur terkonfirmasi. | TMS.S018-R12 poin 4 | AMBIGU (setelah "Kembali ke Rute", Q-13) |

## 4. Validasi field/data (VAL)
| ID | Section | Field/Objek | Aturan | Perilaku bila tidak valid (kutip) | Sumber |
|---|---|---|---|---|---|
| VAL-001 | SEC-02 | Keanggotaan scorecard Potensi Terlambat | proyeksi waktu tiba > SLA DAN waktu berjalan belum melewati SLA | Tidak memenuhi → hilang dari scorecard; waktu berjalan > SLA → pindah ke "Melewati SLA" | TMS.S018-R04 poin 4 |
| VAL-002 | SEC-04 | Button Lacak (kontainer tanpa armada) | Aktif hanya bila kontainer ditugaskan ke sopir | Disable + tooltip "Tersedia jika ditugaskan ke sopir" | TMS.S018-R06 poin 7 |
| VAL-003 | SEC-05 | Jarak armada ke lokasi muat/bongkar | Dalam radius pengaturan (default 5 km) | Tidak tampil di card (tidak dinyatakan eksplisit) | TMS.S018-R07 poin 7 |
| VAL-004 | SEC-07 | Posisi GPS terhadap koridor toleransi | Di dalam koridor (lebar dari Pengaturan Sistem, default 3 Km) | Di luar secara persisten → "Terkonfirmasi Keluar Jalur" | TMS.S018-R09 poin 3–4, 11; TMS.S020-R03 poin 4 |
| VAL-005 | SEC-07 | Koridor historis | Aktif bila rute ≥ (n) perjalanan selesai; perjalanan terflag keluar jalur dikecualikan | < (n) → penilaian hanya prediksi rute + koridor toleransi | TMS.S018-R09 poin 7–9 |
| VAL-006 | SEC-07 | Sinyal GPS | GPS hilang / tidak update bukan Keluar Jalur | Masuk kasus "Tidak Update" | TMS.S018-R09 poin 10 |
| VAL-007 | SEC-08 | Status Progres | Batas: proyeksi tiba vs prediksi waktu rute vs SLA; waktu berjalan vs SLA | Lihat §6 tabel Status Progres | TMS.S018-R10 poin 5 |

## 5. Acceptance Criteria (AC)
### SEC-01 · General
- **AC-001** (REQ-001, REQ-002) — **Diberikan** order FTL, FCL, LTL, LCL yang berjalan **Ketika** dashboard dibuka **Maka** keempat tipe order masuk dashboard; darat sebagai armada, laut sebagai kontainer. · Sumber: TMS.S018-R03 poin 1–2
- **AC-002** (REQ-003) — **Diberikan** order FTL/LTL dan FCL/LCL **Ketika** data ditampilkan **Maka** FTL/LTL memakai nopol dan FCL/LCL memakai no. kontainer. · Sumber: TMS.S018-R02 poin 4
- **AC-003** (REQ-004) — **Diberikan** kontainer yang menggunakan armada **Ketika** user hover **Maka** data kontainer tetap tampil, dan nopol armada tampil bila pada pengiriman terdapat armada (menunggu Q-06). · Sumber: TMS.S018-R03 poin 3

### SEC-02 · Scorecard
- **AC-004** (REQ-006) — **Diberikan** halaman Monitoring **Ketika** dimuat **Maka** tampil scorecard Total Armada, Tidak Update, Melewati SLA, Jumlah Kendala, Keluar Jalur, Potensi Terlambat. · Sumber: TMS.S018-R04 poin 1
- **AC-005** (REQ-008) — **Diberikan** armada dengan status "Terkonfirmasi Keluar Jalur" **Ketika** scorecard dihitung **Maka** armada terhitung pada "Keluar Jalur". · Sumber: TMS.S018-R04 poin 3
- **AC-006** (REQ-009) — **Diberikan** armada terhitung Keluar Jalur **Ketika** armada kembali masuk koridor toleransi **Maka** data otomatis hilang dari scorecard Keluar Jalur. · Sumber: TMS.S018-R04 poin 3
- **AC-007** (REQ-010, REQ-014) — **Diberikan** armada terhitung Keluar Jalur / Potensi Terlambat **Ketika** status order selesai / completed **Maka** data otomatis hilang dari scorecard tersebut. · Sumber: TMS.S018-R04 poin 3–4
- **AC-008** (REQ-011, VAL-001) — **Diberikan** proyeksi waktu tiba > SLA dan waktu berjalan belum melewati SLA **Ketika** scorecard dihitung **Maka** armada/kontainer terhitung "Potensi Terlambat". · Sumber: TMS.S018-R04 poin 4
- **AC-009** (REQ-011, VAL-001) — **Diberikan** proyeksi waktu tiba ≤ SLA **Ketika** scorecard dihitung **Maka** armada tidak terhitung "Potensi Terlambat". · Sumber: TMS.S018-R04 poin 4
- **AC-010** (REQ-012) — **Diberikan** armada terhitung Potensi Terlambat **Ketika** proyeksi waktu tiba kembali ≤ SLA **Maka** data otomatis hilang dari scorecard. · Sumber: TMS.S018-R04 poin 4
- **AC-011** (REQ-013) — **Diberikan** armada terhitung Potensi Terlambat **Ketika** waktu berjalan melewati SLA **Maka** data hilang dari Potensi Terlambat dan berpindah ke scorecard "Melewati SLA". · Sumber: TMS.S018-R04 poin 4

### SEC-03 · Legenda
- **AC-012** (REQ-016, REQ-017) — **Diberikan** halaman Monitoring dibuka **Ketika** legenda tampil **Maka** berisi 10 item sesuai daftar dengan "Semua Tahapan" terpilih default. · Sumber: TMS.S018-R05 poin 2
- **AC-013** (REQ-018) — **Diberikan** legenda tampil **Ketika** user melihat item **Maka** setiap item menampilkan warna status, nama status, dan jumlah armada per status. · Sumber: TMS.S018-R05 poin 3
- **AC-014** (REQ-019) — **Diberikan** maps menampilkan armada **Ketika** user memilih salah satu status legenda **Maka** maps hanya menampilkan armada pada status tersebut. · Sumber: TMS.S018-R05 poin 4

### SEC-04 · Card Data Kasus
- **AC-015** (REQ-021) — **Diberikan** terdapat kasus **Ketika** card Data Kasus tampil **Maka** setiap baris menampilkan Nopol / No. Kontainer, Nama driver, Deskripsi kasus, Waktu laporan, Badge jenis kasus, Button Lacak. · Sumber: TMS.S018-R06 poin 2
- **AC-016** (REQ-022) — **Diberikan** driver melaporkan issue **Ketika** kasus Kendala tampil **Maka** deskripsi berisi deskripsi issue dari driver. · Sumber: TMS.S018-R06 poin 3
- **AC-017** (REQ-025) — **Diberikan** kasus Keluar Jalur **Ketika** tampil **Maka** deskripsi berbasis durasi keluar jalur + jarak dari titik prediksi rute terdekat. · Sumber: TMS.S018-R06 poin 3
- **AC-018** (REQ-027) — **Diberikan** card Data Kasus **Ketika** dropdown filter dibuka **Maka** opsi: Semua Kasus (default), Kendala, Tidak Update, Melewati SLA, Keluar Jalur, Berisiko Terlambat. · Sumber: TMS.S018-R06 poin 4
- **AC-019** (REQ-028, REQ-029) — **Diberikan** filter "Semua Kasus" **Ketika** user memilih jenis kasus lain **Maka** card Data Kasus otomatis terfilter tanpa aksi tambahan, dan komponen lain (scorecard, legenda, maps, Armada Terdekat) tidak ikut terfilter. · Sumber: TMS.S018-R06 poin 5
- **AC-020** (REQ-030) — **Diberikan** card Data Kasus **Ketika** user melihat card **Maka** terdapat button "Riwayat" untuk histori kasus. · Sumber: TMS.S018-R06 poin 6
- **AC-021** (REQ-031) — **Diberikan** kasus dengan armada **Ketika** user klik Lacak **Maka** redirect ke halaman Tracking & Location untuk armada/order terkait. · Sumber: TMS.S018-R06 poin 7
- **AC-022** (REQ-032, VAL-002) — **Diberikan** kasus kontainer yang tidak ditugaskan ke sopir **Ketika** user hover button Lacak **Maka** button disable dan tampil tooltip "Tersedia jika ditugaskan ke sopir". · Sumber: TMS.S018-R06 poin 7
- **AC-023** (REQ-033) — **Diberikan** satu armada memiliki dua kasus (mis. Kendala dan Tidak Update) **Ketika** card tampil **Maka** keduanya tampil sebagai baris terpisah. · Sumber: TMS.S018-R06 poin 8

### SEC-05 · Card Armada Terdekat
- **AC-024** (REQ-034, REQ-039, REQ-040, VAL-003) — **Diberikan** armada dan kontainer dalam radius pengaturan (default 5 km) dari lokasi muat/bongkar **Ketika** card tampil **Maka** armada dan kontainer tersebut tampil. · Sumber: TMS.S018-R07 poin 1, 6, 7
- **AC-025** (REQ-035) — **Diberikan** card Armada Terdekat **Ketika** user memilih tab Lokasi Muat / Lokasi Bongkar **Maka** data terfilter sesuai tab; default tab Semua. · Sumber: TMS.S018-R07 poin 2
- **AC-026** (REQ-036) — **Diberikan** card Armada Terdekat **Ketika** user memilih nopol/no. kontainer pada dropdown pencarian **Maka** data sesuai pilihan tampil. · Sumber: TMS.S018-R07 poin 3
- **AC-027** (REQ-037) — **Diberikan** armada tampil di card **Ketika** user melihat baris **Maka** tampil Nopol/No. Kontainer, Jarak, Lokasi Muat atau Lokasi Bongkar (tujuan terdekat), Lokasi Saat Ini. · Sumber: TMS.S018-R07 poin 4
- **AC-028** (REQ-038) — **Diberikan** alamat "Lokasi Saat Ini" **Ketika** user klik "Lihat" lalu "Tutup" **Maka** alamat ter-expand lalu ter-collapse. · Sumber: TMS.S018-R07 poin 5
- **AC-029** (REQ-041, REQ-042) — **Diberikan** armada di card **Ketika** pop up Data Barang dibuka **Maka** tampil ID Order, Deskripsi Barang, Nomor DO. · Sumber: TMS.S018-R07 poin 8

### SEC-06 · Prediksi Rute
- **AC-030** (REQ-043, REQ-044) — **Diberikan** order dibuat dengan alamat muat & bongkar **Ketika** order tersimpan **Maka** sistem menyimpan geometri rute, prediksi jarak tempuh, dan prediksi waktu tempuh. · Sumber: TMS.S018-R08 poin 1–2

### SEC-07 · Deteksi Keluar Jalur
- **AC-031** (REQ-047) — **Diberikan** lebar koridor diubah di Pengaturan Sistem **Ketika** deteksi berjalan **Maka** koridor toleransi memakai nilai tersebut. · Sumber: TMS.S018-R09 poin 2; TMS.S020-R03 poin 4
- **AC-032** (REQ-049, REQ-058, VAL-004) — **Diberikan** armada di luar koridor dan memenuhi salah satu ambang persisten **Ketika** deteksi dievaluasi **Maka** status "Terkonfirmasi Keluar Jalur". · Sumber: TMS.S018-R09 poin 4, 11
- **AC-033** (REQ-049) — **Diberikan** armada di luar koridor hanya sesaat (tidak memenuhi ambang) **Ketika** deteksi dievaluasi **Maka** armada tidak dinyatakan keluar jalur. · Sumber: TMS.S018-R09 poin 4
- **AC-034** (REQ-051, REQ-057) — **Diberikan** koridor historis aktif dan armada keluar prediksi rute tetapi sesuai pola perjalanan sebelumnya **Ketika** dievaluasi **Maka** tidak tampil sebagai alert. · Sumber: TMS.S018-R09 poin 6, 10
- **AC-035** (REQ-052) — **Diberikan** koridor historis aktif dan armada keluar prediksi rute serta keluar pola sebelumnya **Ketika** dievaluasi **Maka** tampil sebagai alert. · Sumber: TMS.S018-R09 poin 6
- **AC-036** (REQ-054, VAL-005) — **Diberikan** rute dengan perjalanan selesai < (n) **Ketika** dievaluasi **Maka** penilaian hanya memakai prediksi rute + koridor toleransi dan fitur tetap berjalan. · Sumber: TMS.S018-R09 poin 8
- **AC-037** (REQ-056, VAL-006) — **Diberikan** sinyal GPS armada hilang / tidak update **Ketika** dievaluasi **Maka** armada masuk kasus "Tidak Update", bukan "Keluar Jalur". · Sumber: TMS.S018-R09 poin 10
- **AC-038** (REQ-059) — **Diberikan** status "Terkonfirmasi Keluar Jalur" **Ketika** armada kembali masuk koridor toleransi **Maka** status menjadi "Kembali ke Rute". · Sumber: TMS.S018-R09 poin 11
- **AC-039** (REQ-060, REQ-061) — **Diberikan** keluar jalur terkonfirmasi **Ketika** status berubah **Maka** waktu mulai, titik mulai menyimpang, jarak dari titik prediksi rute terdekat, dan lokasi terakhir tersimpan; perubahan tercatat di audit trail dan histori tracking. · Sumber: TMS.S018-R09 poin 12–13

### SEC-08 · Perhitungan Progres
- **AC-040** (REQ-065) — **Diberikan** armada berstatus Berangkat Muat **Ketika** progres dihitung **Maka** waktu berjalan = current time − waktu mulai Berangkat Muat. · Sumber: TMS.S018-R10 poin 3
- **AC-041** (REQ-066–REQ-069) — **Diberikan** prediksi jarak, prediksi waktu, SLA, waktu berjalan **Ketika** target dihitung **Maka** Target posisi = (prediksi jarak ÷ prediksi waktu) × waktu berjalan dan Target minimum SLA = (prediksi jarak ÷ SLA) × waktu berjalan. · Sumber: TMS.S018-R10 poin 4
- **AC-042** (REQ-073) — **Diberikan** proyeksi tiba ≤ prediksi waktu rute **Ketika** status dihitung **Maka** status "Sesuai perkiraan rute". · Sumber: TMS.S018-R10 poin 5
- **AC-043** (REQ-074) — **Diberikan** prediksi waktu rute < proyeksi tiba ≤ SLA **Ketika** status dihitung **Maka** status "Lebih lambat, masih sesuai SLA". · Sumber: TMS.S018-R10 poin 5
- **AC-044** (REQ-075) — **Diberikan** proyeksi tiba > SLA dan waktu berjalan ≤ SLA **Ketika** status dihitung **Maka** status "Berisiko melewati SLA". · Sumber: TMS.S018-R10 poin 5
- **AC-045** (REQ-076) — **Diberikan** waktu berjalan > SLA dan armada belum tiba **Ketika** status dihitung **Maka** status "Melewati SLA". · Sumber: TMS.S018-R10 poin 5
- **AC-046** (REQ-078) — **Diberikan** GPS armada tidak update **Ketika** progres dihitung **Maka** progres memakai data GPS terakhir dan armada tetap terhitung pada kasus "Tidak Update". · Sumber: TMS.S018-R10 poin 7

### SEC-09 · Halaman Progres Pengiriman
- **AC-047** (REQ-080, REQ-081) — **Diberikan** user membuka Dashboard → Progres Pengiriman **Ketika** halaman dimuat **Maka** tampil list armada yang sedang berjalan, masing-masing dengan satu bar progres. · Sumber: TMS.S018-R11 poin 1–2
- **AC-048** (REQ-082–REQ-085) — **Diberikan** satu baris armada **Ketika** bar tampil **Maka** bar menunjukkan jarak aktual terhadap total prediksi jarak, memuat penanda "Target minimum SLA" dan "Target posisi perjalanan", dengan warna sesuai Status Progres. · Sumber: TMS.S018-R11 poin 3–5
- **AC-049** (REQ-086) — **Diberikan** satu baris armada **Ketika** tampil **Maka** memuat Nopol, Nama Sopir, ID Order, Rute (asal → tujuan), Jarak tempuh aktual / total, Waktu berjalan / SLA, Prediksi durasi perjalanan, Badge Status Progres, Button Lacak. · Sumber: TMS.S018-R11 poin 6
- **AC-050** (REQ-087) — **Diberikan** baris armada **Ketika** user klik Lacak **Maka** redirect ke Tracking & Location untuk armada/order terkait. · Sumber: TMS.S018-R11 poin 7
- **AC-051** (REQ-088, REQ-089) — **Diberikan** filter Status, Nopol, Nama Sopir, ID Order **Ketika** user mengisi filter lalu klik "Terapkan" / "Reset" **Maka** data mengikuti filter / filter dikembalikan. · Sumber: TMS.S018-R11 poin 8
- **AC-052** (REQ-090) — **Diberikan** data > 20 **Ketika** halaman dimuat **Maka** default 20 data per halaman dengan pagination dan jumlah per halaman dapat diubah. · Sumber: TMS.S018-R11 poin 9
- **AC-053** (REQ-091) — **Diberikan** halaman Progres Pengiriman **Ketika** user klik "Refresh" **Maka** data dimuat ulang dan last update timestamp tampil. · Sumber: TMS.S018-R11 poin 10

### SEC-10 · Maps Tracking & Location
- **AC-054** (REQ-094) — **Diberikan** halaman Tracking & Location **Ketika** legenda maps tampil **Maka** memuat item "Prediksi rute ke tujuan", "Jalur dilalui (GPS)", "Jalur di luar prediksi rute". · Sumber: TMS.S018-R12 poin 2
- **AC-055** (REQ-095, REQ-096) — **Diberikan** armada berstatus keluar jalur terkonfirmasi **Ketika** peta ditampilkan **Maka** segmen "Jalur di luar prediksi rute" dan titik mulai menyimpang tampil. · Sumber: TMS.S018-R12 poin 3–4
- **AC-056** (REQ-096) — **Diberikan** armada yang tidak pernah berstatus keluar jalur terkonfirmasi **Ketika** peta ditampilkan **Maka** segmen keluar jalur tidak tampil. · Sumber: TMS.S018-R12 poin 4

## 6. State / transisi (bila spec mendefinisikan status)
**Status keluar jalur (R09 poin 11; R04 poin 3; R12 poin 4)**
| Status | Kondisi masuk | Efek tertulis |
|---|---|---|
| Terkonfirmasi Keluar Jalur | Kondisi persisten di luar koridor terpenuhi (R09 poin 4) dan tidak dikecualikan R09 poin 10 | Terhitung scorecard Keluar Jalur; data R09 poin 12 tersimpan; segmen di peta tampil; tercatat audit trail |
| Kembali ke Rute | Armada kembali masuk koridor toleransi | Hilang dari scorecard Keluar Jalur; tercatat audit trail |
| (Order selesai / completed) | Status order selesai | Hilang dari scorecard Keluar Jalur |

**Status Progres (R10 poin 5)**
| Status Progres | Kondisi |
|---|---|
| Sesuai perkiraan rute | proyeksi tiba ≤ prediksi waktu rute |
| Lebih lambat, masih sesuai SLA | proyeksi tiba > prediksi waktu rute, namun masih ≤ SLA |
| Berisiko melewati SLA | proyeksi tiba > SLA, dan waktu berjalan masih ≤ SLA (memicu notifikasi dini dengan ambang minimal, R10 poin 6) |
| Melewati SLA | waktu berjalan sudah melebihi SLA dan armada belum tiba |

**Scorecard Potensi Terlambat (R04 poin 4)**: masuk bila proyeksi > SLA & waktu berjalan belum melewati SLA → keluar bila proyeksi ≤ SLA, atau pindah ke "Melewati SLA" bila waktu berjalan melewati SLA, atau order selesai / completed.

## 7. Dependensi lintas modul
| Modul terkait | Hubungan | Sumber |
|---|---|---|
| Pengaturan Sistem (S020) | Radius armada terdekat (default 5 km), lebar koridor keluar jalur (default 3 Km), batas Tidak Update (default 30 Menit); ambang persisten & (n) disebut di S018 tetapi tidak ada di S020-R03 | TMS.S018-R07 poin 7; R09 poin 2, 5, 7; TMS.S020-R03 poin 2–4; spec-index §3 |
| Order FTL/FCL/LTL-LCL (S011–S013) | Prediksi rute dibentuk saat order dibuat; SLA dari input user saat order dibuat; Data Barang (ID Order, Deskripsi Barang, Nomor DO) | TMS.S018-R08 poin 1; R10 poin 1; R07 poin 8 |
| Penugasan Tracking (S015) / Driver Hub (S016) | Status Berangkat Muat / Selesai Muat / Berangkat Bongkar / Selesai Bongkar; issue Kendala dari driver; kontainer "ditugaskan ke sopir" | TMS.S018-R05 poin 2; R06 poin 1, 7; R10 poin 3 |
| Pengaturan Akun (S021) | Cakupan Data turunan Order untuk Monitoring, Progres Pengiriman, Tracking & Location | TMS.S021-R08 poin 5; R09 |
| Pusat Notifikasi (S022) | Reminder Armada Tidak Update / Melewati SLA / Keluar Jalur / Berpotensi Terlambat (Push, shipper); template kalimat Keluar Jalur & Berpotensi Terlambat | TMS.S022-R02; R04 poin 4–5 |

## 8. Pertanyaan terbuka / NEEDS CLARIFICATION
| ID | Pertanyaan | Rule terkait | REQ terdampak | Ref spec-index §4 |
|---|---|---|---|---|
| Q-01 | "Spesifikasi sebelumnya" / "rule sebelumnya" (auto-update, last update timestamp, threshold GPS offline, refresh manual, zoom, fullscreen, filter by customer; rule scorecard Total Armada, Tidak Update, Melewati SLA, Kendala; rule maps tracking; interval refresh system) tidak ada di file. | R03 poin 4; R04 poin 2; R11 poin 11; R12 poin 1 | REQ-005, REQ-007, REQ-092, REQ-093 | §4 no.29 |
| Q-02 | "Potensi Terlambat" vs "Berisiko Terlambat" vs "Berisiko melewati SLA" — sama atau berbeda? | R04, R05, R06, R10 | REQ-011, REQ-020, REQ-075 | §4 no.30 |
| Q-03 | Nilai "ambang minimal proyeksi keterlambatan" tidak ada; ambang persisten & nilai (n) "dapat diatur melalui Pengaturan Sistem" tetapi field-nya tidak ada di S020-R03. | R09 poin 5, 7; R10 poin 6 | REQ-050, REQ-053, REQ-077 | §4 no.31 |
| Q-04 | SLA "input user saat order dibuat", padahal FCL/LCL tidak punya input waktu perjalanan. | R10 poin 1 | REQ-062 | §4 no.17 |
| Q-05 | Label step akhir "Selesai Bongkar" (legenda) vs "Pengiriman Selesai" (S015-R03). | R05 poin 2 | REQ-016 | §4 no.24 |
| Q-06 | R03 poin 3: saat hover kontainer yang memakai armada, kapan data kontainer saja dan kapan nopol ikut tampil (keduanya bersamaan atau bergantian)? | R03 poin 3 | REQ-004 | Baru |
| Q-07 | Teks default deskripsi kasus (Tidak Update, Melewati SLA, Keluar Jalur, Berisiko Terlambat) tidak diberikan — kalimat/format durasi & jarak? | R06 poin 3 | REQ-023–REQ-026 | Baru |
| Q-08 | Nilai default ambang persisten (jumlah titik GPS berturut-turut, durasi minimum) dan definisi terukur "Menjauh dari titik tujuan" tidak disebut. | R09 poin 4 | REQ-049 | Baru |
| Q-09 | Keluar Jalur hilang saat armada kembali masuk "koridor toleransi"; bila armada masuk koridor historis tetapi tetap di luar koridor toleransi (R09 poin 10: tidak dihitung keluar jalur), apakah status/scorecard ikut hilang? | R04 poin 3; R09 poin 10–11 | REQ-009, REQ-059 | Baru |
| Q-10 | "Kecepatan aktual … rata-rata beberapa waktu terakhir": rentang waktunya tidak disebut; proyeksi waktu tiba saat kecepatan aktual = 0 (armada berhenti) tidak didefinisikan (pembagian nol). | R10 poin 4 | REQ-070, REQ-072 | Baru |
| Q-11 | Warna bar per Status Progres dan opsi pada filter "Status" di halaman Progres Pengiriman tidak disebut. | R11 poin 5, 8 | REQ-085, REQ-088 | Baru |
| Q-12 | "Armada yang sedang berjalan" — batas status mulai/akhir tidak didefinisikan; untuk FCL/LCL (data no. kontainer, R02 poin 4) data per baris hanya menyebut "Nopol". | R11 poin 2, 6; R02 poin 4 | REQ-081, REQ-086 | Baru |
| Q-13 | Setelah status "Kembali ke Rute", apakah segmen "Jalur di luar prediksi rute" tetap tampil sebagai histori atau hilang? | R12 poin 4; R09 poin 11 | REQ-096 | Baru |
| Q-14 | "Pengaturan radius (default 5 km)" dipetakan ke S020-R03 poin 2 "Radius Notifikasi Lokasi Muat/Bongkar" yang didefinisikan untuk notifikasi "Armada Mendekat" — setting yang sama? (Notifikasi "Armada Mendekat" tidak ada di daftar S022.) | R07 poin 7; S020-R03 poin 2 | REQ-040 | Baru |
| Q-15 | "Waktu laporan" untuk kasus yang dibentuk sistem (Tidak Update, Melewati SLA, Keluar Jalur, Berisiko Terlambat) — waktu apa yang dipakai? | R06 poin 2 | REQ-021 | Baru |
| Q-16 | Pemicu pop up Data Barang pada card Armada Terdekat tidak disebut. | R07 poin 8 | REQ-041 | Baru |
| Q-17 | Isi/tampilan histori kasus dari button "Riwayat" tidak dijelaskan. | R06 poin 6 | REQ-030 | Baru |
| Q-18 | "Armada belum tiba" pada status "Melewati SLA" — tiba ditandai status apa (Selesai Bongkar?), dan status progres setelah armada tiba tidak didefinisikan. | R10 poin 5 | REQ-076 | Baru |
| Q-19 | S020-R03 poin 3 mendefinisikan "Tidak Update" sebagai armada/kontainer "tidak bergerak", sedangkan S018 memakai "sinyal GPS hilang / tidak update"/"durasi offline" — definisi mana yang berlaku? | R06 poin 3; R09 poin 10; S020-R03 poin 3 | REQ-023, REQ-056, REQ-078 | Baru |

## 9. Catatan testability (bukan requirement)
- Deteksi keluar jalur, kecepatan aktual, proyeksi waktu tiba, Tidak Update, dan armada terdekat bergantung pada data GPS armada (Driver Hub/perangkat) — perlu sarana di luar UI web OPS.
- Koridor historis membutuhkan (n) perjalanan selesai pada rute yang sama.
- Auto-update / interval refresh system, audit trail, dan notifikasi dini (R10 poin 6) bersifat proses latar/terjadwal.

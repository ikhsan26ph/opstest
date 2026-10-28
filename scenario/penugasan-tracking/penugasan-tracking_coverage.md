# TMS.S015 — Penugasan Tracking · Coverage

Skenario: 71 (RO siap read-only: 23, SETUP siap setelah setup/flow: 46, BLOCKED: 2).
REQ tercakup: 106/110 · AC tercakup: 76/76.

## REQ tanpa skenario

- REQ-063: AMBIGU Q-06 (foto wajib umum vs per step) — diamati di SCN Berangkat Muat, tanpa verdict
- REQ-066: Tidak ada hasil terukur tertulis ("tidak dibedakan card per kota"); diamati pada flow multipickup/multidrop
- REQ-079: AMBIGU Q-07 (Multipickup pada Berangkat Bongkar FCL/LCL) — diamati di flow FCL
- REQ-082: AMBIGU Q-09 (keterangan kendala wajib?) — keterangan selalu diisi, tidak diuji kosong

## AC tanpa skenario


## Skenario per readiness

| SCN | Judul | Readiness | Blocker | Setup | Flow |
|---|---|---|---|---|---|
| SCN-0001 | Daftar penugasan menampilkan 20 data per halaman dengan pagination, terbaru di atas | RO |  | DS-15 |  |
| SCN-0002 | Panel filter memuat field sesuai spec dan kosong secara default | RO |  |  |  |
| SCN-0003 | Filter ID Order + Terapkan menampilkan data sesuai filter | RO |  | DS-15 |  |
| SCN-0004 | Reset mengosongkan filter dan mengembalikan list default | RO |  |  |  |
| SCN-0005 | Opsi dropdown filter Status mengikuti daftar status | RO | BLK-09 |  |  |
| SCN-0006 | Menu Aksi baris FTL: Alihkan Armada tersedia, Tugaskan Sopir Bongkar tidak tersedia | RO |  |  |  |
| SCN-0007 | Menu Aksi baris LTL: Alihkan Armada tersedia, Tugaskan Sopir Bongkar tidak tersedia | RO |  |  |  |
| SCN-0008 | Menu Aksi baris FCL Door to Door: Tugaskan Sopir Bongkar tersedia, Alihkan Armada tidak | RO |  |  |  |
| SCN-0009 | Menu Aksi baris FCL CY to Door: Tugaskan Sopir Bongkar tersedia | RO |  |  |  |
| SCN-0010 | Menu Aksi baris FCL Door to CY: Tugaskan Sopir Bongkar tidak tersedia | RO |  |  |  |
| SCN-0011 | Shipper dengan vendor kelolaan dapat menjalankan penugasan untuk order vendor tersebut | SETUP |  | DS-01 | F-FTL-1:1 |
| SCN-0012 | Shipper tanpa vendor kelolaan hanya dapat melihat penugasan tracking | BLOCKED | BLK-04 |  |  |
| SCN-0013 | Vendor memiliki akses penuh penugasan tracking di akun vendor | SETUP | BLK-03 | DS-10, DS-11 |  |
| SCN-0014 | List Pilih Order hanya menampilkan order yang belum dilakukan penugasan | RO |  |  |  |
| SCN-0015 | Pilih order mendraft Kota Asal/Tujuan berprefix Kota/Kab. dan jenis/jumlah armada read-only | RO |  |  |  |
| SCN-0016 | Order FTL jumlah armada 2 menampilkan 2 card input armada | SETUP |  | DS-02 |  |
| SCN-0017 | Order LTL menampilkan 1 card input | RO |  |  |  |
| SCN-0018 | Order LCL menampilkan 1 card input | SETUP | BLK-01 | DS-09 |  |
| SCN-0019 | Metode Pilih Dari Master menampilkan seluruh jenis armada; Isi Data Manual menampilkan text field | RO |  |  |  |
| SCN-0020 | Sopir Isi Data Manual: opsi Tugaskan ke Sopir disable, Tugaskan ke Pengurus tersedia | RO |  |  |  |
| SCN-0021 | Armada manual + Sopir master: kedua mode penugasan dapat dipilih | RO |  |  |  |
| SCN-0022 | Sopir manual tanpa No. WhatsApp tidak menimbulkan error wajib | SETUP |  | DS-01 | F-FTL-2:1 |
| SCN-0023 | Simpan Tambah Penugasan FTL tanpa field wajib menampilkan helper error | RO |  |  |  |
| SCN-0024 | Batal pada Tambah Penugasan menampilkan alert konfirmasi | RO |  |  |  |
| SCN-0025 | Simpan Tambah Penugasan FTL valid (mode pengurus) → status awal Belum Berangkat | SETUP |  | DS-01 | F-FTL-1:1 |
| SCN-0026 | Simpan Tambah Penugasan FCL tanpa field wajib menampilkan helper error | RO |  |  |  |
| SCN-0027 | Jadwal kapal FCL 2 kontainer diisi satu kali (bukan per kontainer) | SETUP |  | DS-07 |  |
| SCN-0028 | Jenis Jadwal Kapal Direct tidak dapat menambah baris kapal connecting | RO |  |  |  |
| SCN-0029 | Jenis Jadwal Kapal Connecting menampilkan Data Kapal Connecting dan dapat >1 baris | RO |  |  |  |
| SCN-0030 | ETD Connecting melebihi ETA kapal utama tidak diterima | RO |  | DS-06 |  |
| SCN-0031 | Edit Penugasan saat Belum Berangkat membuka halaman penuh dan menyimpan perubahan | SETUP |  | DS-13 | F-FTL-1:2 |
| SCN-0032 | Batal pada Edit Penugasan menampilkan alert konfirmasi | SETUP |  | DS-13 | F-FTL-1:3 |
| SCN-0033 | Isi Data Tracking Berangkat Muat FTL menampilkan info sopir, wa sopir, nopol lalu tersimpan | SETUP |  | DS-13, DS-12 | F-FTL-1:4 |
| SCN-0034 | Edit Penugasan setelah Berangkat Muat menampilkan pop up tidak dapat diedit | SETUP |  | DS-13 | F-FTL-1:5 |
| SCN-0035 | Selesai Muat FTL tanpa foto tidak tersimpan | SETUP |  | DS-13 | F-FTL-1:6 |
| SCN-0036 | Batal pada Isi Data Tracking menampilkan alert konfirmasi | SETUP |  | DS-13 | F-FTL-1:7 |
| SCN-0037 | Selesai Muat FTL dengan foto, keterangan kosong → tersimpan | SETUP |  | DS-13, DS-12 | F-FTL-1:8 |
| SCN-0038 | Isi Kendala: halaman menampilkan card sesuai spec | SETUP |  | DS-13 | F-FTL-1:9 |
| SCN-0039 | Batal pada Isi Kendala menampilkan alert konfirmasi | SETUP |  | DS-13 | F-FTL-1:10 |
| SCN-0040 | Simpan kendala tanpa foto → tersimpan, status tetap step berjalan dengan ikon kendala | SETUP |  | DS-13 | F-FTL-1:11 |
| SCN-0041 | Berangkat Bongkar FTL tanpa foto tidak tersimpan | SETUP |  | DS-13 | F-FTL-1:12 |
| SCN-0042 | Berangkat Bongkar FTL dengan foto → tersimpan | SETUP |  | DS-13, DS-12 | F-FTL-1:13 |
| SCN-0043 | Selesai Bongkar FTL → status Pengiriman Selesai; urutan status tanpa step kapal | SETUP |  | DS-13, DS-12 | F-FTL-1:14 |
| SCN-0044 | Detail Penugasan FTL: card, history per step, format waktu, link Detail/Edit | SETUP |  | DS-13 | F-FTL-1:15 |
| SCN-0045 | Detail step: pop up data, data kosong ditampilkan "-" | SETUP |  | DS-13 | F-FTL-1:16 |
| SCN-0046 | Edit step: pop up ter-draft sesuai input sebelumnya | SETUP |  | DS-13 | F-FTL-1:17 |
| SCN-0047 | Penugasan mode Tugaskan ke Sopir tetap dapat dikelola melalui web | SETUP |  | DS-01 | F-FTL-3:1 |
| SCN-0048 | Penugasan tampil/tidak tampil di aplikasi Driver Hub sesuai Mode Penugasan | BLOCKED | BLK-05 |  |  |
| SCN-0049 | Alihkan Armada: tampilan card dan section Armada Pengganti default | SETUP |  | DS-13, DS-12 | F-FTL-2:2 |
| SCN-0050 | Alihkan Armada: detail Armada 1 muncul setelah Jumlah Armada diisi | SETUP |  | DS-13 | F-FTL-2:3 |
| SCN-0051 | Alihkan Armada tanpa armada/sopir tidak tersimpan | SETUP |  | DS-13 | F-FTL-2:4 |
| SCN-0052 | Alihkan Armada berhasil: data baru ID Order sama, lama "Dialihkan", step melanjutkan | SETUP |  | DS-13 | F-FTL-2:5 |
| SCN-0053 | Penanda pengalihan pada detail armada lama & baru | SETUP |  | DS-13 | F-FTL-2:6 |
| SCN-0054 | History tracking setelah pengalihan: detail penugasan baru vs detail order | SETUP |  | DS-13 | F-FTL-2:7 |
| SCN-0055 | Berangkat Muat multipickup: pilih alamat; alamat terpilih tidak muncul lagi | SETUP |  | DS-03, DS-12 | F-MP:1 |
| SCN-0056 | Berangkat Bongkar multidrop: pilih alamat bongkar | SETUP |  | DS-04, DS-12 | F-MD:1 |
| SCN-0057 | Tambah Penugasan FCL Door to Door valid (Direct) → Belum Berangkat | SETUP |  | DS-06 | F-FCL:1 |
| SCN-0058 | Isi Data Tracking FCL Berangkat/Selesai Muat menampilkan info kontainer | SETUP |  | DS-13, DS-12 | F-FCL:2 |
| SCN-0059 | Kapal Berlayar tanpa tanggal tidak tersimpan | SETUP |  | DS-13 | F-FCL:3 |
| SCN-0060 | Kapal Berlayar valid → ikon "Siap tugaskan sopir bongkar" di list | SETUP |  | DS-13 | F-FCL:4 |
| SCN-0061 | Kapal Sandar tanpa tanggal tidak tersimpan; dengan tanggal tersimpan | SETUP |  | DS-13 | F-FCL:5 |
| SCN-0062 | Berangkat Bongkar FCL tidak dapat diisi sebelum sopir bongkar ditugaskan | SETUP |  | DS-13 | F-FCL:6 |
| SCN-0063 | Tugaskan Sopir Bongkar: field read-only dan field wajib | SETUP |  | DS-13 | F-FCL:7 |
| SCN-0064 | Tugaskan Sopir Bongkar valid dengan sopir berbeda → ikon hilang, badge +1, hover Sopir Asal/Tujuan | SETUP |  | DS-13 | F-FCL:8 |
| SCN-0065 | Tugaskan Sopir Bongkar dapat diedit sebelum Berangkat Bongkar | SETUP |  | DS-13 | F-FCL:9 |
| SCN-0066 | Tugaskan Sopir Bongkar tidak dapat diedit setelah Berangkat Bongkar | SETUP |  | DS-13, DS-12 | F-FCL:10 |
| SCN-0067 | Selesai Bongkar FCL → Pengiriman Selesai; urutan status FCL lengkap | SETUP |  | DS-13, DS-12 | F-FCL:11 |
| SCN-0068 | Detail Penugasan FCL: card Informasi Penugasan Muat & Bongkar | SETUP |  | DS-13 | F-FCL:12 |
| SCN-0069 | Isi Kendala FCL: card armada/kontainer memuat data kontainer | SETUP |  | DS-13 | F-FCL:3b |
| SCN-0070 | Isi Data Tracking penugasan tanpa data sopir menghilangkan info sopir | RO |  | DS-14 |  |
| SCN-0071 | Flow LCL Door to Door: tambah, muat, kapal, tugaskan sopir bongkar | SETUP | BLK-01 | DS-09, DS-12 | F-LCL:1 |

## Matriks REQ → SCN

| REQ | SCN |
|---|---|
| REQ-001 | SCN-0011 |
| REQ-002 | SCN-0012 |
| REQ-003 | SCN-0013 |
| REQ-004 | SCN-0001 |
| REQ-005 | SCN-0001 |
| REQ-006 | SCN-0064 |
| REQ-007 | SCN-0064 |
| REQ-008 | SCN-0040 |
| REQ-009 | SCN-0060, SCN-0064 |
| REQ-010 | SCN-0043 |
| REQ-011 | SCN-0060, SCN-0067, SCN-0071 |
| REQ-012 | SCN-0043, SCN-0067 |
| REQ-013 | SCN-0052 |
| REQ-014 | SCN-0005 |
| REQ-015 | SCN-0002 |
| REQ-016 | SCN-0002 |
| REQ-017 | SCN-0003 |
| REQ-018 | SCN-0004 |
| REQ-019 | SCN-0006 |
| REQ-020 | SCN-0006, SCN-0007, SCN-0008 |
| REQ-021 | SCN-0006, SCN-0007, SCN-0008, SCN-0009, SCN-0010, SCN-0071 |
| REQ-022 | SCN-0014 |
| REQ-023 | SCN-0015 |
| REQ-024 | SCN-0015 |
| REQ-025 | SCN-0016, SCN-0027 |
| REQ-026 | SCN-0017, SCN-0018, SCN-0071 |
| REQ-027 | SCN-0019 |
| REQ-028 | SCN-0022 |
| REQ-029 | SCN-0019 |
| REQ-030 | SCN-0047, SCN-0048 |
| REQ-031 | SCN-0025, SCN-0048 |
| REQ-032 | SCN-0020 |
| REQ-033 | SCN-0021 |
| REQ-034 | SCN-0020, SCN-0021 |
| REQ-035 | SCN-0048 |
| REQ-036 | SCN-0048 |
| REQ-037 | SCN-0023, SCN-0026 |
| REQ-038 | SCN-0024 |
| REQ-039 | SCN-0025 |
| REQ-040 | SCN-0023, SCN-0025 |
| REQ-041 | SCN-0026, SCN-0057, SCN-0071 |
| REQ-042 | SCN-0027 |
| REQ-043 | SCN-0028, SCN-0057 |
| REQ-044 | SCN-0028 |
| REQ-045 | SCN-0029 |
| REQ-046 | SCN-0030 |
| REQ-047 | SCN-0029 |
| REQ-048 | SCN-0063 |
| REQ-049 | SCN-0063 |
| REQ-050 | SCN-0063 |
| REQ-051 | SCN-0063 |
| REQ-052 | SCN-0063 |
| REQ-053 | SCN-0064, SCN-0065 |
| REQ-054 | SCN-0065, SCN-0066 |
| REQ-055 | SCN-0062 |
| REQ-056 | SCN-0031 |
| REQ-057 | SCN-0031, SCN-0034 |
| REQ-058 | SCN-0034 |
| REQ-059 | SCN-0031 |
| REQ-060 | SCN-0032 |
| REQ-061 | SCN-0031 |
| REQ-062 | SCN-0055, SCN-0056 |
| REQ-063 | — |
| REQ-064 | SCN-0037 |
| REQ-065 | SCN-0055 |
| REQ-066 | — |
| REQ-067 | SCN-0025, SCN-0057 |
| REQ-068 | SCN-0033, SCN-0070 |
| REQ-069 | SCN-0036 |
| REQ-070 | SCN-0033, SCN-0037 |
| REQ-071 | SCN-0033, SCN-0055 |
| REQ-072 | SCN-0035, SCN-0037 |
| REQ-073 | SCN-0041, SCN-0042, SCN-0056 |
| REQ-074 | SCN-0043 |
| REQ-075 | SCN-0058 |
| REQ-076 | SCN-0058 |
| REQ-077 | SCN-0059, SCN-0060 |
| REQ-078 | SCN-0061 |
| REQ-079 | — |
| REQ-080 | SCN-0067 |
| REQ-081 | SCN-0040 |
| REQ-082 | — |
| REQ-083 | SCN-0038 |
| REQ-084 | SCN-0038 |
| REQ-085 | SCN-0038 |
| REQ-086 | SCN-0038 |
| REQ-087 | SCN-0069 |
| REQ-088 | SCN-0040 |
| REQ-089 | SCN-0039 |
| REQ-090 | SCN-0040 |
| REQ-091 | SCN-0044 |
| REQ-092 | SCN-0044 |
| REQ-093 | SCN-0068 |
| REQ-094 | SCN-0044 |
| REQ-095 | SCN-0044 |
| REQ-096 | SCN-0044 |
| REQ-097 | SCN-0044 |
| REQ-098 | SCN-0045 |
| REQ-099 | SCN-0046 |
| REQ-100 | SCN-0049 |
| REQ-101 | SCN-0049 |
| REQ-102 | SCN-0050 |
| REQ-103 | SCN-0051 |
| REQ-104 | SCN-0052 |
| REQ-105 | SCN-0052 |
| REQ-106 | SCN-0052 |
| REQ-107 | SCN-0053 |
| REQ-108 | SCN-0053 |
| REQ-109 | SCN-0054 |
| REQ-110 | SCN-0054 |

# Selector setup status Order — 2026-10-21

Sumber live: artifacts/evidence/OS20261021032243/*.yml; OPS staging, Admin akun 1. Form empat tahap dan semua opsi di bawah diamati di DOM sebelum digunakan. Tidak menggeneralisasi route/status dari aplikasi lain.

| State | Locator / elemen teramati | Cardinality dan batasan |
|---|---|---|
| Daftar | button Buat Order | 1; membuka /order/buat |
| Tahap 1 | button FTL Full Truck Load / FCL Full Container Load / LTL Less Than Truck Load / LCL Less Than Container Load | Masing-masing 1 |
| FTL | button Pilih Jenis Armada → option Truck Trailer 40ft; placeholder Masukkan Jumlah Armada | 1 pada form kosong; jumlah diisi 1 |
| FCL/LCL | button Pilih Pelabuhan Asal/Tujuan → option Tanjung Perak (SUB)/Tanjung Priok (JKT) | Masing-masing 1 |
| FCL | button Pilih Jenis Kontainer → option 40 HC; placeholder Masukkan Jumlah Kontainer | 1; LCL tidak mempunyai jumlah/jenis kontainer ini |
| FCL/LCL | button dengan nama diawali Door to Door Kontainer / Door to CY Kontainer / CY to Door Kontainer / CY to CY Kontainer | Masing-masing 1; enabled mengikuti kombinasi jumlah lokasi |
| Lokasi | button Pilih Drop Point Asal/Tujuan, dropdown option nama exact | Setelah baris pertama terisi, placeholder tombol hanya dimiliki baris baru yang kosong; pastikan cardinality sebelum pick |
| Lokasi | button Tambah Lokasi Muat/Bongkar | Dipakai sesuai tipe dan kompatibilitas metode yang diminta |
| PIC/Catatan | placeholder Masukkan PIC Pengirim / Masukkan PIC Penerima / Masukkan No. WhatsApp PIC / Masukkan Catatan | Berulang per lokasi; isi semua elemen visible/enabled dengan marker/identitas QA |
| Tahap 2 | placeholder Masukkan Deskripsi Barang | Berulang menurut kombinasi lokasi; isi semua barang. FTL/FCL heading Armada/Kontainer 1; LTL/LCL heading Data Barang |
| Tahap 3 | button Pilih Vendor → option PT. Ikatan Kuat (IK) | 1; response options menyebut pengelola VENDOR |
| Tanggal muat | role button DD/MM/YYYY hh:mm | 1. Tombol tanggal 26 discoped ke .grid.grid-cols-7 agar tidak tertukar tombol menit 26 |
| Waktu | textbox Waktu (24 jam) | 1 saat date picker terbuka; isi 08:00 |
| Harga | input placeholder 0 yang value kosong pada tahap 3 | 1 pada seluruh kombinasi run; PPN/PPh sudah berisi nilai sehingga tidak dipakai indeks buta. Jika cardinality berubah, hentikan dan observasi ulang |
| Navigasi | button Selanjutnya / Sebelumnya | Tunggu heading/control tahap tujuan. Tidak menunggu networkidle yang terganggu polling |
| Draf | button Simpan ke Draf → heading Anda yakin ingin menyimpan data dalam draf? → button Simpan Draf | Masing-masing 1 pada state relevan; pasang listener respons POST sebelum konfirmasi |
| Review | heading Jenis Pengiriman dan Rute | 1; cocokkan marker/tipe/metode sebelum save |
| Vendor | row order → button Detail | Tidak ada Aksi pada sampel vendor saat ini. Heading Kembali Daftar Order, bukan exact Daftar Order |

Payload UI yang teramati: POST /api/order saveMode DRAFT step 2/3/4; SUBMIT step 4. Status final ditentukan server. Template API setup hanya berasal dari payload Review UI untuk kombinasi yang sama; tidak ada field status mentah. Detail baru di-GET menggunakan ID hasil create pada pola endpoint detail yang sudah teramati di evidence OPS sebelumnya.

Jangan menyimpulkan status Menunggu Konfirmasi/Tolak/Jadwal dapat dibentuk dari submit order manual: pilot menghasilkan Menunggu Penugasan dan Vendor hanya Detail. Kondisi client untuk aksi Lelang ada pada lelang-action-precondition.json; keberadaan label status tidak membuktikan flow pembentuk status tersedia untuk role saat ini.

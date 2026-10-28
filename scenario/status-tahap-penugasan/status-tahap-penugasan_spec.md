# Status aktual pada daftar Penugasan Tracking

Sumber: requirement user 26 Oktober2026, percakapan aktif. Expected improvement ini menggantikan asumsi bahwa hanya status umum diperlukan. Data/selector bersumber OPS staging; tidak memakai OMS.

| ID | Butir user | Expected |
|---|---|---|
| REQ-001 | Perbaikan1 | Daftar memperlihatkan tahap aktual Berangkat Muat, Selesai Muat, Berangkat Bongkar, Selesai Bongkar. |
| REQ-002 | Perbaikan2 | Multi pickup: hitungan Berangkat Muat dan Selesai Muat menunjukkan jumlah alamat akan/sudah diproses, mengabaikan nomor alamat pada detail order. |
| REQ-003 | Perbaikan3 | Multi drop: hitungan Berangkat Bongkar dan Selesai Bongkar menunjukkan jumlah alamat akan/sudah diproses, mengabaikan nomor alamat pada detail order. |
| REQ-004 | Perbaikan4 | User mengonfirmasi “poin 4 itu multipoint”. Untuk Multipoint, hitungan Berangkat/Selesai Muat mengikuti jumlah alamat muat dan Berangkat/Selesai Bongkar mengikuti jumlah alamat bongkar; mengabaikan nomor urut alamat detail order. |
| REQ-005 | Perbaikan5 | Daftar mengikuti tahap yang sedang terjadi, bukan next step atau tahap sebelumnya. |

Format badge, posisi label, delimiter, wajib menampilkan denominator, dan penghapusan badge status umum tidak ditetapkan. Jika label tahap aktual terlihat langsung di daftar bersama badge umum, ini memenuhi informasi tahap yang diminta. Angka yang dinilai adalah hitungan progres; bukan mengarang syarat visual 1/3 jika UI menampilkan angka1 saja.

Rencana pembuktian: tiga alamat muat/bongkar diproses dalam urutan asli3→1→2. Tahap Berangkat/Selesai pertama harus menunjukkan hitungan1 meski yang dipilih alamat3. Lalu hitungan2 saat alamat1, hitungan3 saat alamat2. Harus diuji pada kedua jenis milestone, bukan hanya statusakhir. Setelah seluruh muat selesai, pembaruan bongkar memakai total/jumlah bongkar dan tidak membawa angka muat. Seluruh submit memakai foto sintetis untuk milestone Selesai yang wajib foto. Catat tahap aktual dari event sukses, bukan hanya urutan UI form.

Batas: Normal2unit digunakan untuk isolasi status perunit. Jenis pengiriman lain disurvey read-only dari sampel live; tanpa sampel/transisi lengkap tidak mengklaim seluruh lintasjenis teruji. Tidak ada requirement tambahan tentang edit/delete/backdated tracking, retry, offline mobile atau stress.

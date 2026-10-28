# Simpan Parsial Penugasan Tracking — requirement user 2026-10-26

Sumber otoritatif: teks requirement dan enam gambar dalam percakapan. Bukan spesifikasi OMS dan bukan hasil September. Simpan menggunakan fitur penugasan existing; cakupan FTL & FCL.

| ID | Acuan requirement user | Expected |
|---|---|---|
| REQ-001 | Penyesuaian 1–3 | Dapat menyimpan unit lengkap tanpa seluruh order lengkap, fitur existing, FTL/FCL. |
| REQ-002 | Tombol Simpan 1–2 | Simpan tiap card; Simpan Semua pada form. |
| REQ-003 | Tombol Simpan 1 | Semua wajib card dipilih lengkap; card lain tidak divalidasi dan tidak disimpan. |
| REQ-004 | Tombol Simpan 2 | Simpan Semua seluruh unit belum ditugaskan; semua wajib pada sisa card lengkap sesuai rule existing. |
| REQ-005 | Tombol Simpan 3 | Unit tersimpan hilang; hanya unit belum ditugaskan tampil. |
| REQ-006 | Pop-up 1 | Setelah parsial berhasil dengan sisa: tampil pop-up dengan Tugaskan Armada Lain tetap di form dan Daftar Penugasan kembali daftar. Klarifikasi user: Konfirmasi Penugasan merujuk pop-up, bukan judul wajib. |
| REQ-007 | Pop-up 2–3 | Semua unit ditugaskan / Simpan Semua berhasil: Penugasan Berhasil, hanya Daftar Penugasan. |
| REQ-008 | FCL 1–2 | Jadwal sebelum form kontainer; form disembunyikan sampai jadwal lengkap. |
| REQ-009 | FCL 3 | Jadwal Direct/Connecting; field mengikuti desain. |
| REQ-010 | FCL 4–5 | Jadwal tersimpan menjadi informasi read-only, unit tersisa di bawahnya dan dapat disimpan parsial. |

Desain form Direct: Pelayaran, Nama Kapal, Voyage, Closing Time, Berangkat (ETD), Tiba (ETA). Connecting menambah Pelabuhan Connecting, Kapal Connecting, Voyage, ETD Connecting, Tambah Kapal Connecting. Semua bertanda wajib pada gambar. Desain card FTL: armada dan sopir dari master/manual, Mode Penugasan Sopir/Pengurus, Simpan. Desain card FCL menambah No. Kontainer/No. Segel, Armada Muat/Sopir Muat. Optional WhatsApp mengikuti rule existing.

Konflik sumber dicatat, tidak diselesaikan dengan asumsi:
- Klarifikasi user setelah run: Konfirmasi Penugasan adalah sebutan untuk pop-up, bukan ketentuan judulnya. Judul Penugasan Berhasil pada gambar/runtime diperbolehkan. Interpretasi judul wajib sebelumnya ditarik; REQ-006 dinilai dari keberadaan pop-up dan dua aksi setelah simpan parsial berhasil.
- Gambar pertama memilih FTL tetapi menampilkan jadwal kapal; teks membatasi penyesuaian jadwal untuk FCL. Tidak mewajibkan jadwal pada FTL.
- Contoh read-only menukar label singkatan ETA/ETD dibanding form. Pengujian semantik mengikuti Berangkat=ETD, Tiba=ETA sesuai form dan teks umum.
- Gambar ilustrasi memuat jumlah card yang tidak selalu sama dengan ringkasan jumlah unit. Data uji menggunakan jumlah aktual order, bukan menyalin inkonsistensi gambar.

Rule tambahan yang tidak dinyatakan (mis. batas maksimum connecting, rollback transaksi saat gangguan jaringan, double-submit/concurrency, cancel unsaved warning, urutan kronologis tanggal, perubahan nomor card setelah refresh) dicatat sebagai observasi/batasan, bukan mengarang expected bisnis baru.

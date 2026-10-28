# Coverage Simpan Parsial Penugasan Tracking — PS20261026

42 pemeriksaan, 41 passed, 1 failed, 0 blocked, 0 skipped. Satu temuan aktif: PS-FND-02. PS-FND-01 ditarik sesuai klarifikasi user tentang pop-up, tanpa runtime rerun. Batas cakupan bukan dianggap lulus.

| Requirement | Skenario | Hasil dalam cakupan |
|---|---|---|
| REQ-001 | SCN-0001, SCN-0008, SCN-0027, SCN-0033, SCN-0038, SCN-0042 | Fungsi simpan FTL/FCL teruji; master/mode Sopir hanya kontrol lokal. |
| REQ-002 | SCN-0001, SCN-0014 | Sesuai: Simpan tiap card dan Simpan Semua. |
| REQ-003 | SCN-0002, SCN-0004, SCN-0008, SCN-0015, SCN-0017, SCN-0027, SCN-0028, SCN-0035, SCN-0038 | Sesuai pada data QA: validasi/simpan hanya card terpilih; card lain kosong maupun lengkap. |
| REQ-004 | SCN-0003, SCN-0016, SCN-0021, SCN-0032, SCN-0033, SCN-0034, SCN-0037, SCN-0038 | Sesuai: semua sisa wajib lengkap; fresh order maupun sisa parsial. |
| REQ-005 | SCN-0007, SCN-0009, SCN-0010, SCN-0011, SCN-0017, SCN-0020, SCN-0030, SCN-0035, SCN-0038, SCN-0039 | Sesuai jumlah dan unit tersimpan; cold reopen/refresh/order selesai diuji. Penomoran card berubah dicatat observasi. |
| REQ-006 | SCN-0005, SCN-0006, SCN-0009, SCN-0018 | Sesuai: pop-up setelah parsial berhasil dengan dua navigasi. User menegaskan Konfirmasi Penugasan merujuk pop-up, bukan judul wajib; PS-FND-01 ditarik. |
| REQ-007 | SCN-0010, SCN-0021, SCN-0031, SCN-0032, SCN-0034, SCN-0037 | Sesuai: card terakhir dan Simpan Semua, final hanya Daftar Penugasan. |
| REQ-008 | SCN-0012, SCN-0013, SCN-0014, SCN-0022, SCN-0023, SCN-0024, SCN-0025, SCN-0026, SCN-0040, SCN-0041 | Sesuai: posisi jadwal di atas, gate tiap field Direct dan Connecting. |
| REQ-009 | SCN-0013, SCN-0014, SCN-0017, SCN-0022, SCN-0023, SCN-0024, SCN-0025, SCN-0026, SCN-0028, SCN-0034, SCN-0040, SCN-0041 | Direct dan dua Connecting tersimpan; field hadir. Presisi jam desain perlu keputusan. |
| REQ-010 | SCN-0019, SCN-0020, SCN-0021, SCN-0028, SCN-0029, SCN-0030, SCN-0031, SCN-0036, SCN-0037 | Read-only, letak, tabel, kelanjutan/persistensi sesuai; nilai tanggal buka ulang gagal PS-FND-02. |

Seluruh butir requirement dipetakan; ini tidak berarti seluruh kombinasi role/master/Sopir/metode/jadwal diuji silang. Lihat laporan utama untuk matriks data dan batasan.

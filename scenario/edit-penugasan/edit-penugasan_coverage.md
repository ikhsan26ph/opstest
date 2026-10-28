# Coverage Edit Penugasan

| Requirement | Skenario | Hasil / batas |
|---|---|---|
| REQ-001 | SCN-0001, SCN-0003, SCN-0004, SCN-0005, SCN-0006, SCN-0007, SCN-0008, SCN-0012, SCN-0013, SCN-0014, SCN-0015, SCN-0016, SCN-0017, SCN-0018, SCN-0019, SCN-0021, SCN-0022, SCN-0023, SCN-0024, SCN-0025, SCN-0027, SCN-0028, SCN-0029, SCN-0030 | FTL allowed dan save sebelum/perjalanan. FCL entry enabled tetapi save normal failed karena tanggal; save dengan workaround passed. LCL/LTL entry saja pada Admin/Vendor sesuai data. |
| REQ-002 | SCN-0001, SCN-0002, SCN-0003, SCN-0004, SCN-0005, SCN-0006, SCN-0007, SCN-0008, SCN-0009, SCN-0010, SCN-0011, SCN-0012, SCN-0013, SCN-0014, SCN-0015, SCN-0016, SCN-0017, SCN-0018, SCN-0019, SCN-0020, SCN-0021, SCN-0022, SCN-0023, SCN-0024, SCN-0025, SCN-0026, SCN-0027, SCN-0028, SCN-0029, SCN-0030, SCN-0033 | Nopol/Sopir/mode FTL persisted; FCL persisted dengan workaround. EP-FND-01 menghalangi save normal; batas field tambahan FCL pending klarifikasi SCN-0033. |
| REQ-003 | SCN-0031 | Passed sesuai klarifikasi user: Master pengganti menerima dan melanjutkan Berangkat Bongkar setelah BM/SM. Hilang dari DH lama pada Master→Master juga passed. EP-FND-02 ditarik; penilaian ulang bukti existing tanpa runtime rerun. |
| REQ-004 | SCN-0032 | SCN-0032 failed EP-FND-03: Master→manual tidak menghilangkan assignment DH lama, nomor manual sama maupun berbeda. Nondistribusi ke akun manual terpisah belum diamati. |
| REQ-005 | SCN-0002, SCN-0004, SCN-0005, SCN-0007, SCN-0008, SCN-0010, SCN-0015, SCN-0021, SCN-0023 | Manual Sopir disables mode Sopir; manual Armada dengan master Sopir mode Sopir allowed. Mode dua arah, required fields dan cancel diuji. DH existing tetap bukan kesimpulan web. |

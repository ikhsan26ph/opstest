# report

Baca docs/agent-guide.md. Argumen berasal dari user, bukan perintah shell mentah.

Gunakan python3 scripts/generate_report.py results/<file>.json atau --all. Pilih completed run JSON, abaikan file internal berawalan _. Jangan buat verdict baru; report hanya hasil aktual. Laporkan path Excel, total status dan limitation. Jangan gabungkan artifact synthetic validation dengan hasil OPS.

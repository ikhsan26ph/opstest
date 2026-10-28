# test-module

Baca docs/agent-guide.md. Argumen berasal dari user, bukan perintah shell mentah.

Baca roles test-planner, test-executor, bug-triager. Pilih modul tepat dari requirement user dan scenario/; bila tidak ada, catat blocked, jangan generate bisnis sendiri. Susun plan/filter/precondition, skip stress kecuali diminta. Eksekusi spec lewat scripts/run-playwright.sh; MCP boleh untuk skenario tanpa spec dengan evidence selector. Jangan otomatis login ulang saat sesi mati. Triase hasil lalu generate report, pertahankan traceability.

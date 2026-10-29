#!/usr/bin/env python3
"""Konversi JSON reporter Playwright -> skema results/ (CLAUDE.md).

Usage:
    python3 scripts/playwright_to_results.py results/_playwright/last-run.json <modul>
    python3 scripts/playwright_to_results.py <runDir>/playwright.json <modul> --run-dir <runDir>

Mode --run-dir (suite profil, scripts/run-profile.sh): metadata dari
scenario/<modul>/<profil>_scenarios.json, runId/profil/target/manifest/commit dari
<runDir>/run-meta.json, hasil ke results/<modul>__<profil>__<target>__<runId>.json.

- Judul test harus berformat "SCN-xxxx: ..." — ID dipakai untuk menyalin metadata
  (id/title/category/priority/requirements/screen) apa adanya dari scenario/<modul>/*_scenarios.json.
- Screenshot kegagalan disalin ke artifacts/screenshots/<runId>/<SCN-ID>.png.
- Jika setup login gagal, seluruh skenario ditandai blocked.

Baris terakhir stdout = path file hasil (dipakai scripts/run-playwright.sh).
"""
import json
import re
import shutil
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SCN_RE = re.compile(r"^(SCN-\d+)")
ANSI_RE = re.compile(r"\x1b\[[0-9;]*m")

# Kode setup/precondition/data -> blocked (bukan bug produk). Lihat docs/testing-profiles.md.
BLOCKED_CODES = ("[AUTH_NOT_VALIDATED]", "[AUTH_FAILURE]", "[AUTH_BLOCKED]", "[PRECONDITION_",
                 "[DATA_UNAVAILABLE]", "[PROFILE_RUN_CONTEXT]")

STATUS_MAP = {
    "passed": "passed",
    "failed": "failed",
    "timedOut": "failed",
    "interrupted": "blocked",
    "skipped": "skipped",
}


def parse_env_md():
    base_url, user, role = None, None, None
    for line in ((ROOT / "config" / "env.md") if (ROOT / "config" / "env.md").exists() else (ROOT / "config" / "env.example.md")).read_text(encoding="utf-8").splitlines():
        cells = [c.strip() for c in line.split("|")]
        if len(cells) >= 4 and cells[1] == "baseUrl":
            base_url = re.sub(r"\(contoh:[^)]*\)", "", cells[2], flags=re.I).strip()
        if len(cells) >= 6 and cells[1].isdigit() and user is None:
            if "@" in cells[2] and cells[3] and "ISI_DISINI" not in cells[3].upper():
                user, role = cells[2], cells[4]
    if base_url and not base_url.startswith("http"):
        base_url = "https://" + base_url
    return {"baseUrl": base_url, "user": user, "role": role}


def load_scenario_meta(module, profile=None):
    if profile:
        files = [ROOT / "scenario" / module / f"{profile}_scenarios.json"]
        if not files[0].exists():
            sys.exit(f"scenario/{module}/{profile}_scenarios.json tidak ditemukan")
    else:
        files = list((ROOT / "scenario" / module).glob("*_scenarios.json")) or \
            list((ROOT / "scenario" / module).glob("*.scenarios.json"))
    if not files:
        sys.exit(f"scenario/{module}/*_scenarios.json (atau *.scenarios.json) tidak ditemukan")
    data = json.loads(files[0].read_text(encoding="utf-8"))
    return {s["id"]: s for s in data.get("scenarios", [])}


def walk_specs(suite, out):
    for spec in suite.get("specs", []):
        out.append(spec)
    for child in suite.get("suites", []):
        walk_specs(child, out)


def clean(msg):
    return ANSI_RE.sub("", msg or "").strip() or None


def read_json(path, default=None):
    return json.loads(path.read_text(encoding="utf-8")) if path.exists() else default


def load_run_context(run_dir):
    """Metadata run profil yang aman ditampilkan (tanpa email/credential)."""
    run_meta = read_json(run_dir / "run-meta.json")
    if not run_meta:
        sys.exit(f"{run_dir}/run-meta.json tidak ditemukan")
    auth = read_json(run_dir / "auth-state.json", {})
    observed = sorted(run_dir.glob("observed-config-w*.json"))
    cleanup = [read_json(p) for p in sorted(run_dir.glob("cleanup-w*.json"))]
    return run_meta, {
        "profile": run_meta["profile"],
        "target": run_meta["target"],
        "manifestVersion": run_meta.get("manifestVersion"),
        "package": f"{run_meta.get('packageId')}@{run_meta.get('packageVersion')}",
        "commit": run_meta.get("commit"),
        "workingTreeDirty": run_meta.get("workingTreeDirty"),
        "runDir": run_meta.get("runDir"),
        "observedConfig": read_json(observed[0]) if observed else None,
        "configBefore": read_json(run_dir / "config-before.json"),
        "isolation": read_json(run_dir / "isolation.json"),
        "cleanup": cleanup,
        "suite": read_json(run_dir / "suite.json"),
    }, {
        "baseUrl": run_meta.get("baseUrl"),
        "target": run_meta["target"],
        "environmentId": run_meta.get("environmentId"),
        "tenantId": run_meta.get("tenantId"),
        "user": f"target:{run_meta['target']}",
        "role": auth.get("role") or f"expected {run_meta.get('expectedRole')} (tidak terverifikasi)",
        "settingScope": run_meta.get("settingScope"),
    }


def main():
    args = sys.argv[1:]
    run_dir = None
    if "--run-dir" in args:
        i = args.index("--run-dir")
        run_dir = Path(args[i + 1])
        args = args[:i] + args[i + 2:]
    if len(args) != 2:
        sys.exit(__doc__)
    report_path, module = Path(args[0]), args[1]
    report = json.loads(report_path.read_text(encoding="utf-8"))
    profile_ctx = None
    if run_dir:
        run_meta, profile_ctx, env = load_run_context(run_dir)
        meta = load_scenario_meta(module, run_meta["profile"])
    else:
        meta = load_scenario_meta(module)
        env = parse_env_md()

    stats = report.get("stats", {})
    started = stats.get("startTime")
    started_dt = datetime.fromisoformat(started.replace("Z", "+00:00")) if started else datetime.now(timezone.utc)
    run_id = profile_ctx and run_meta["runId"] or started_dt.astimezone().strftime("%Y%m%d-%H%M%S")
    duration_ms = stats.get("duration") or 0
    finished_dt = datetime.fromtimestamp(started_dt.timestamp() + duration_ms / 1000, tz=timezone.utc)

    specs = []
    for suite in report.get("suites", []):
        walk_specs(suite, specs)

    shot_dir = (ROOT / profile_ctx["runDir"] / "screenshots") if profile_ctx else ROOT / "artifacts" / "screenshots" / run_id
    scenarios = []
    for spec in specs:
        m = SCN_RE.match(spec.get("title", ""))
        if not m:
            continue  # test non-skenario (mis. setup login)
        scn_id = m.group(1)
        src = meta.get(scn_id, {})
        tests = spec.get("tests", [])
        result = (tests[0].get("results") or [{}])[-1] if tests else {}
        raw_status = result.get("status", "skipped")
        status = STATUS_MAP.get(raw_status, "blocked")

        errors = result.get("errors") or ([result["error"]] if result.get("error") else [])
        error = clean(" | ".join(e.get("message", "") for e in errors)[:1000]) if errors else None

        notes = []
        for t in tests:
            for a in t.get("annotations", []):
                if a.get("description"):
                    prefix = "[skip] " if a.get("type") == "skip" else ""
                    notes.append(prefix + a["description"])

        # Kegagalan login/precondition dari fixture (tests/helpers/fixtures.js) = environment, bukan bug skenario.
        if error and any(code in error for code in BLOCKED_CODES):
            status = "blocked"

        screenshot = None
        evidence = None
        for att in result.get("attachments", []):
            if att.get("name") == "screenshot" and att.get("path") and Path(att["path"]).exists() and screenshot is None:
                shot_dir.mkdir(parents=True, exist_ok=True)
                dest = shot_dir / f"{scn_id}.png"
                shutil.copyfile(att["path"], dest)
                screenshot = str(dest.relative_to(ROOT))
            if att.get("name") == "evidence" and att.get("path") and Path(att["path"]).exists():
                evidence = str(Path(att["path"]).resolve().relative_to(ROOT))

        scenarios.append({
            "id": src.get("id", scn_id),
            "title": src.get("title", spec.get("title", "")),
            "category": src.get("category", ""),
            "priority": src.get("priority", ""),
            "screen": src.get("screen", ""),
            "requirements": src.get("requirements", []),
            "status": status,
            "durationSec": round((result.get("duration") or 0) / 1000, 1),
            "error": error,
            "screenshot": screenshot,
            "bugCandidate": None,
            "notes": "; ".join(notes),
            **({"capability": src.get("capability"), "evidence": evidence} if profile_ctx else {}),
        })

    if profile_ctx:
        # Skenario profil yang tidak muncul di report: blocked bila run gagal di global setup
        # (lock/konfigurasi), selain itu skipped (mis. difilter --grep). Tidak pernah hilang diam-diam.
        global_errors = clean(" | ".join(e.get("message", "") for e in report.get("errors", []))[:1000]) if report.get("errors") else None
        seen = {s["id"] for s in scenarios}
        for sid, src in meta.items():
            if sid in seen:
                continue
            blocked = bool(global_errors)
            scenarios.append({
                "id": sid, "title": src.get("title", ""), "category": src.get("category", ""),
                "priority": src.get("priority", ""), "screen": src.get("screen", ""),
                "requirements": src.get("requirements", []),
                "status": "blocked" if blocked else "skipped", "durationSec": 0,
                "error": global_errors if blocked else None, "screenshot": None, "bugCandidate": None,
                "notes": "Run berhenti di global setup" if blocked else "Tidak dieksekusi pada run ini (filter)",
                "capability": src.get("capability"), "evidence": None,
            })

    scenarios.sort(key=lambda s: s["id"])
    out = {
        "module": module,
        "runId": run_id,
        **({"profileRun": profile_ctx} if profile_ctx else {}),
        "startedAt": started_dt.isoformat(),
        "finishedAt": finished_dt.isoformat(),
        "environment": {**env, "executor": "playwright-script"},
        "scenarios": scenarios,
    }
    stem = f"{module}__{profile_ctx['profile']}__{profile_ctx['target']}__{run_id}" if profile_ctx else f"{module}__{run_id}"
    out_path = ROOT / "results" / f"{stem}.json"
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    counts = {}
    for s in scenarios:
        counts[s["status"]] = counts.get(s["status"], 0) + 1
    print(f"{len(scenarios)} skenario -> {counts}", file=sys.stderr)
    print(out_path.relative_to(ROOT))


if __name__ == "__main__":
    main()

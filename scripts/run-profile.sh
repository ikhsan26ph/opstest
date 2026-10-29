#!/usr/bin/env bash
# Jalankan suite capability untuk SATU profil dan SATU target secara eksplisit.
# Usage: scripts/run-profile.sh <profil> [target] [argumen playwright tambahan]
# Artefak: artifacts/runs/<profil>/<target>/<runId>/ ; hasil: results/profile-capabilities__<profil>__<target>__<runId>.json
set -uo pipefail

PROFILE="${1:?Usage: run-profile.sh <profil> [target] [playwright args...]}"
shift
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

TARGET=""
if [ $# -gt 0 ] && [ "${1#-}" = "$1" ]; then TARGET="$1"; shift; fi
if [ -z "$TARGET" ]; then
  TARGET="$(node -e 'const r=require("./profiles/registry.json");process.stdout.write((r.defaultTargets||{})[process.argv[1]]||"")' "$PROFILE")"
fi
[ -n "$TARGET" ] || { echo "Target wajib untuk profil $PROFILE (tidak ada defaultTargets)" >&2; exit 2; }

NODE_MAJOR="$(node -e 'console.log(process.versions.node.split(".")[0])' 2>/dev/null || echo 0)"
[ "$NODE_MAJOR" -ge 22 ] || { echo "Butuh Node >= 22" >&2; exit 1; }

# Validasi profil/target sebelum menyentuh environment (gagal cepat bila manifest invalid).
META="$(node -e '
  const { resolveProfile, resolveTarget } = require("./profiles/resolver");
  const p = resolveProfile(process.argv[1]); const t = resolveTarget(process.argv[2], process.argv[1]);
  process.stdout.write(JSON.stringify({ manifestVersion: p.manifestVersion, packageId: p.packageId, packageVersion: p.packageVersion,
    catalogVersion: p.catalogVersion, kind: p.kind, environmentId: t.environment.id, baseUrl: t.environment.baseUrl,
    tenantId: t.tenant.id, expectedRole: t.account.expectedRole, settingScope: t.settings.scope, lockKey: t.settings.lockKey }));
' "$PROFILE" "$TARGET")" || exit 2

RUN_ID="${OPS_RUN_ID:-$(date -u +%Y%m%dT%H%M%SZ)-$$}"
RUN_DIR="artifacts/runs/$PROFILE/$TARGET/$RUN_ID"
mkdir -p "$RUN_DIR"
COMMIT="$(git rev-parse --short HEAD 2>/dev/null || echo unknown)"
DIRTY="$(git status --porcelain 2>/dev/null | grep -q . && echo true || echo false)"
node -e '
  const [meta, profile, target, runId, runDir, commit, dirty] = process.argv.slice(1);
  require("fs").writeFileSync(runDir + "/run-meta.json", JSON.stringify({ profile, target, runId, runDir, commit,
    workingTreeDirty: dirty === "true", startedAt: new Date().toISOString(), ...JSON.parse(meta) }, null, 2));
' "$META" "$PROFILE" "$TARGET" "$RUN_ID" "$RUN_DIR" "$COMMIT" "$DIRTY"

export OPS_PROFILE="$PROFILE" OPS_TARGET="$TARGET" OPS_RUN_ID="$RUN_ID" OPS_RUN_DIR="$ROOT/$RUN_DIR"
export PLAYWRIGHT_JSON_OUTPUT_FILE="$ROOT/$RUN_DIR/playwright.json"
npx playwright test tests/profile-capabilities.spec.js "$@"
PW_EXIT=$?
echo "{\"suiteExitCode\": $PW_EXIT, \"finishedAt\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}" > "$RUN_DIR/suite.json"

if [ ! -s "$RUN_DIR/playwright.json" ]; then
  echo "Reporter JSON tidak terbentuk (setup/lock/konfigurasi gagal). Lihat output di atas dan $RUN_DIR." >&2
  exit "${PW_EXIT:-1}"
fi
RESULT_FILE="$(python3 scripts/playwright_to_results.py "$RUN_DIR/playwright.json" profile-capabilities --run-dir "$RUN_DIR")" || exit 1
echo "Hasil run : $RESULT_FILE"
python3 scripts/generate_report.py "$RESULT_FILE"
node scripts/scan-run-secrets.js "$RUN_DIR" "$TARGET" "$RESULT_FILE" || PW_EXIT=3
echo "Artefak   : $RUN_DIR (isolation.json = lock/config drift; cleanup-w*.json = logout)"
exit "$PW_EXIT"

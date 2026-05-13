#!/usr/bin/env bash
set -u

DATE="$(date +%Y-%m-%d)"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SCRIPTS="$ROOT/scripts"
MON="$ROOT/seo-deliverables/monitoring"
mkdir -p "$MON"

LOG="$MON/run-all-${DATE}.log"
REPORT="$MON/00-WEEKLY-REPORT-${DATE}.md"

NODE_BIN="${NODE:-node}"

run_step() {
  local name="$1"
  local script="$2"
  shift 2
  echo "[$(date -u +%H:%M:%S)] START $name" | tee -a "$LOG"
  set +e
  "$NODE_BIN" "$script" "$@" >>"$LOG" 2>&1
  local code=$?
  set -e
  if [ $code -eq 0 ]; then
    echo "[$(date -u +%H:%M:%S)] OK    $name" | tee -a "$LOG"
  else
    echo "[$(date -u +%H:%M:%S)] FAIL  $name (exit $code)" | tee -a "$LOG"
  fi
  return $code
}

: > "$LOG"
echo "QUANT LAB USA — Weekly SEO Audit Run" | tee -a "$LOG"
echo "Date: $DATE" | tee -a "$LOG"
echo "Root: $ROOT" | tee -a "$LOG"
echo "" | tee -a "$LOG"

STATUS_INDEX=0
STATUS_LINKS=0
STATUS_CACHE=0
STATUS_DIFF=0
STATUS_FRESH=0
STATUS_LH=0
STATUS_SCHEMA=0

run_step "diff-sitemap"             "$SCRIPTS/diff-sitemap.ts"             || STATUS_DIFF=$?
run_step "check-indexing-status"    "$SCRIPTS/check-indexing-status.ts"    || STATUS_INDEX=$?
run_step "check-broken-links"       "$SCRIPTS/check-broken-links.ts"       || STATUS_LINKS=$?
run_step "warm-cache"               "$SCRIPTS/warm-cache.ts"               || STATUS_CACHE=$?
run_step "content-freshness-audit"  "$SCRIPTS/content-freshness-audit.ts"  || STATUS_FRESH=$?
run_step "check-schema"             "$SCRIPTS/check-schema.ts"             || STATUS_SCHEMA=$?

if [ "${SKIP_LIGHTHOUSE:-0}" = "1" ]; then
  echo "[$(date -u +%H:%M:%S)] SKIP  lighthouse-batch (SKIP_LIGHTHOUSE=1)" | tee -a "$LOG"
else
  run_step "lighthouse-batch"       "$SCRIPTS/lighthouse-batch.ts"         || STATUS_LH=$?
fi

{
  echo "# Weekly SEO Audit Report — $DATE"
  echo
  echo "## Run status"
  echo
  echo "| Step | Exit code |"
  echo "|---|---:|"
  echo "| diff-sitemap | $STATUS_DIFF |"
  echo "| check-indexing-status | $STATUS_INDEX |"
  echo "| check-broken-links | $STATUS_LINKS |"
  echo "| warm-cache | $STATUS_CACHE |"
  echo "| content-freshness-audit | $STATUS_FRESH |"
  echo "| check-schema | $STATUS_SCHEMA |"
  echo "| lighthouse-batch | $STATUS_LH |"
  echo
  echo "## Detail reports written"
  echo
  for f in \
    "sitemap-diff-$DATE.md" \
    "indexing-status-$DATE.md" \
    "broken-links-$DATE.md" \
    "cache-warm-$DATE.md" \
    "freshness-audit-$DATE.md" \
    "schema-validation-$DATE.md" \
    "lighthouse-trend-$DATE.md"
  do
    if [ -f "$MON/$f" ]; then
      echo "- [$f]($f)"
    else
      echo "- $f (NOT GENERATED)"
    fi
  done
  echo
  echo "## Headline numbers"
  echo
  for f in \
    "sitemap-diff-$DATE.md" \
    "indexing-status-$DATE.md" \
    "broken-links-$DATE.md" \
    "cache-warm-$DATE.md" \
    "freshness-audit-$DATE.md" \
    "schema-validation-$DATE.md" \
    "lighthouse-trend-$DATE.md"
  do
    if [ -f "$MON/$f" ]; then
      echo "### $f"
      echo
      awk '/^## Summary/,/^## /{ if ($0 !~ /^## Summary/ && $0 ~ /^## /) exit; print }' "$MON/$f" | tail -n +2
      echo
    fi
  done
  echo "## Log"
  echo
  echo '```'
  tail -n 200 "$LOG"
  echo '```'
} > "$REPORT"

echo ""
echo "Weekly report: $REPORT"
echo "Log: $LOG"

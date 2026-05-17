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
STATUS_CANO=0
STATUS_META=0
STATUS_GRAPH=0
STATUS_GSC=0
STATUS_RANK=0
STATUS_WEEKLY=0

run_step "diff-sitemap"             "$SCRIPTS/diff-sitemap.ts"                || STATUS_DIFF=$?
run_step "check-indexing-status"    "$SCRIPTS/check-indexing-status.ts"       || STATUS_INDEX=$?
run_step "check-broken-links"       "$SCRIPTS/check-broken-links.ts"          || STATUS_LINKS=$?
run_step "warm-cache"               "$SCRIPTS/warm-cache.ts"                  || STATUS_CACHE=$?
run_step "content-freshness-audit"  "$SCRIPTS/content-freshness-audit.ts"     || STATUS_FRESH=$?
run_step "check-schema"             "$SCRIPTS/check-schema.ts"                || STATUS_SCHEMA=$?
run_step "check-canonical"          "$SCRIPTS/check-canonical-consistency.ts" || STATUS_CANO=$?
run_step "check-meta-duplicates"    "$SCRIPTS/check-meta-duplicates.ts"       || STATUS_META=$?
run_step "check-link-graph"         "$SCRIPTS/check-internal-link-graph.ts"   || STATUS_GRAPH=$?

if [ "${SKIP_GSC:-0}" = "1" ]; then
  echo "[$(date -u +%H:%M:%S)] SKIP  gsc-api-snapshot (SKIP_GSC=1)" | tee -a "$LOG"
else
  run_step "gsc-api-snapshot"       "$SCRIPTS/gsc-api-snapshot.ts"            || STATUS_GSC=$?
fi

if [ "${SKIP_RANK:-0}" = "1" ]; then
  echo "[$(date -u +%H:%M:%S)] SKIP  seo-rank-check (SKIP_RANK=1)" | tee -a "$LOG"
else
  run_step "seo-rank-check"         "$SCRIPTS/seo-rank-check.ts"              || STATUS_RANK=$?
fi

if [ "${SKIP_LIGHTHOUSE:-0}" = "1" ]; then
  echo "[$(date -u +%H:%M:%S)] SKIP  lighthouse-batch (SKIP_LIGHTHOUSE=1)" | tee -a "$LOG"
else
  run_step "lighthouse-batch"       "$SCRIPTS/lighthouse-batch.ts"            || STATUS_LH=$?
fi

# Always run the aggregator last so it picks up everything from this run
run_step "seo-weekly-report"        "$SCRIPTS/seo-weekly-report.ts"           || STATUS_WEEKLY=$?

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
  echo "| check-canonical-consistency | $STATUS_CANO |"
  echo "| check-meta-duplicates | $STATUS_META |"
  echo "| check-internal-link-graph | $STATUS_GRAPH |"
  echo "| gsc-api-snapshot | $STATUS_GSC |"
  echo "| seo-rank-check | $STATUS_RANK |"
  echo "| lighthouse-batch | $STATUS_LH |"
  echo "| seo-weekly-report | $STATUS_WEEKLY |"
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
    "canonical-check-$DATE.md" \
    "meta-duplicates-$DATE.md" \
    "link-graph-$DATE.md" \
    "gsc-snapshot-$DATE.md" \
    "rank-check-$DATE.md" \
    "lighthouse-trend-$DATE.md" \
    "weekly-report-$DATE.md"
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
    "canonical-check-$DATE.md" \
    "meta-duplicates-$DATE.md" \
    "link-graph-$DATE.md" \
    "gsc-snapshot-$DATE.md" \
    "rank-check-$DATE.md" \
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
echo "Aggregated one-pager: $MON/weekly-report-$DATE.md"
echo "Log: $LOG"

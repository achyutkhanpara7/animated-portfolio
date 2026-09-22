#!/usr/bin/env bash
# Encode every raw recording under _raw/ into its web clip + poster.
#
#   _raw/7-eleven/store-manager.mov
#     ->  assets/case-studies/7-eleven/store-manager.mp4
#         assets/case-studies/7-eleven/store-manager.jpg
#
# Usage:
#   scripts/encode-all.sh              encode everything
#   scripts/encode-all.sh --dry-run    just show what would happen
#
# _raw/ is gitignored, so originals never reach the repo.

set -euo pipefail

cd "$(dirname "$0")/.."
DRY=${1:-}

[ -d _raw ] || { echo "no _raw/ folder — create _raw/<slug>/<name>.mov first"; exit 1; }

shopt -s nullglob
found=0

for dir in _raw/*/; do
  slug=$(basename "$dir")
  for src in "$dir"*.{mov,MOV,mp4,MP4,mkv,webm,m4v}; do
    found=$((found + 1))
    name=$(basename "$src"); name=${name%.*}
    out="assets/case-studies/$slug/$name.mp4"

    if [ "$DRY" = "--dry-run" ]; then
      printf '%-44s -> %s\n' "$src" "$out"
      continue
    fi

    echo "encoding $slug/$name …"
    scripts/encode-video.sh "$src" "$slug" "$name"
  done
done

if [ "$found" -eq 0 ]; then
  echo "found nothing to encode under _raw/ — expected _raw/<slug>/<name>.mov"
  exit 1
fi

[ "$DRY" = "--dry-run" ] && echo && echo "$found file(s) would be encoded — drop --dry-run to do it."
exit 0

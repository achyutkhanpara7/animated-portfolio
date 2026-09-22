#!/usr/bin/env bash
# Encode a raw screen recording into the web clip + poster the case
# studies expect, and report what it cost in bytes.
#
#   scripts/encode-video.sh raw.mov 7-eleven store-manager [width]
#
# Writes assets/case-studies/<slug>/<name>.mp4 and <name>.jpg.
# Width defaults to 1280 (enough for a ~535px slot on a 2x display).
# Use 1920 only for full-bleed hero clips.

set -euo pipefail

[ $# -ge 3 ] || { sed -n '2,9p' "$0" | sed 's/^# \?//'; exit 1; }

SRC=$1; SLUG=$2; NAME=$3; WIDTH=${4:-1280}
OUT="assets/case-studies/$SLUG"
mkdir -p "$OUT"

command -v ffmpeg >/dev/null || { echo "ffmpeg not found — brew install ffmpeg"; exit 1; }

# -an          strip audio: these are silent demos, and it drops a decode thread
# -crf 24      visually clean for flat UI; raise to 26-28 if a clip runs long
# +faststart   move the index to the front so playback starts while downloading
# -g 48        keyframe every ~2s, so looping and seeking stay snappy
ffmpeg -y -hide_banner -loglevel error -i "$SRC" \
  -vf "scale=$WIDTH:-2:flags=lanczos" \
  -c:v libx264 -profile:v high -crf 24 -preset slow \
  -pix_fmt yuv420p -g 48 -an -movflags +faststart \
  "$OUT/$NAME.mp4"

# Poster: first frame, what every visitor sees before the clip loads.
ffmpeg -y -hide_banner -loglevel error -i "$SRC" \
  -vf "scale=$WIDTH:-2:flags=lanczos" -frames:v 1 -q:v 6 \
  "$OUT/$NAME.jpg"

mp4=$(du -k "$OUT/$NAME.mp4" | cut -f1)
jpg=$(du -k "$OUT/$NAME.jpg" | cut -f1)
printf '%s.mp4  %s KB\n%s.jpg  %s KB\n' "$NAME" "$mp4" "$NAME" "$jpg"
[ "$mp4" -gt 1536 ] && echo "note: over the ~1.5 MB budget — trim the clip shorter before raising CRF."
exit 0

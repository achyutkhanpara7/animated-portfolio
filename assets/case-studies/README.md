# Case-study media

One folder per case study, named after its slug:

```
assets/case-studies/
  7-eleven/
    store-manager.mp4      # the clip
    store-manager.jpg      # its poster, same basename
    banner-store.png       # stills used by the page
  grc/
    …
```

Poster and clip always share a basename, so the markup stays predictable
and a missing poster is obvious at a glance.

## Adding a clip

1. Trim the recording to **8–12 seconds**. Length is the biggest lever on
   file size by far — trim before you touch encoder settings.
2. Drop the original into `_raw/<slug>/<name>.mov` and encode everything
   in one pass — each clip gets its poster alongside it:

   ```
   scripts/encode-all.sh --dry-run   # check the mapping first
   scripts/encode-all.sh
   ```

   For a single file without the `_raw/` layout:

   ```
   scripts/encode-video.sh ~/Desktop/raw.mov 7-eleven store-manager
   ```

3. Drop it into the page:

   ```html
   <video data-inview loop muted playsinline preload="none"
          poster="assets/case-studies/7-eleven/store-manager.jpg">
     <source src="assets/case-studies/7-eleven/store-manager.mp4" type="video/mp4" />
   </video>
   ```

4. Make sure the page loads the player once, before `</body>`:

   ```html
   <script src="assets/js/video-frame.js"></script>
   ```

`assets/js/video-frame.js` handles the rest: nothing downloads until a
clip is near the viewport, only on-screen clips keep decoding, a
backgrounded tab pauses everything, and anyone who asked for reduced
motion gets the poster with a play button.

## Budget

Aim for **under 1.5 MB per clip** and keep the whole folder under ~50 MB.
UI recordings are mostly flat colour with little motion, so a 10-second
clip at 1280px usually lands at 300–800 KB. If one comes out fat, shorten
it before raising CRF.

Raw footage (`.mov`, `_raw/`) is gitignored — keep originals outside the
repo or in a `_raw/` folder that never gets committed.

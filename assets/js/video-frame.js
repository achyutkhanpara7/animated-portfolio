/* ══════════════════════════════════════════════
   VIDEO FRAME
   Case-study videos are silent UI walkthroughs. Left to their own
   devices, six <video autoplay> tags on one page all download and
   decode at once, whether or not they are on screen. This drives them
   from the viewport instead: nothing is fetched until a clip is about
   to be seen, and only the clips actually on screen keep decoding.

   Markup contract:
     <video data-inview muted loop playsinline preload="none"
            poster="…/name.jpg">
       <source src="…/name.mp4" type="video/mp4" />
     </video>
   ══════════════════════════════════════════════ */
(function () {
  const videos = Array.from(document.querySelectorAll('video[data-inview]'));
  if (!videos.length) return;

  /* Autoplay is only permitted while muted — set it on the element too,
     since the attribute alone loses to a programmatic unmute. */
  videos.forEach(v => { v.muted = true; });

  /* Someone who asked for less motion gets the poster and a play button. */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    videos.forEach(v => { v.controls = true; });
    return;
  }

  /* No IntersectionObserver (very old browser): fall back to playing
     everything rather than showing six dead posters. */
  if (!('IntersectionObserver' in window)) {
    videos.forEach(v => v.play().catch(() => {}));
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const v = entry.target;
      if (entry.isIntersecting) {
        /* First approach: let it fetch. rootMargin gives it a head start
           so the first frame is ready by the time it scrolls into view. */
        if (v.preload === 'none') v.preload = 'auto';
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, { rootMargin: '300px 0px', threshold: 0.2 });

  videos.forEach(v => obs.observe(v));

  /* A backgrounded tab keeps decoding otherwise. */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) videos.forEach(v => v.pause());
  });
})();

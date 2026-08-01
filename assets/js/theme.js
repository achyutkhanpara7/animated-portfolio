/* ════════════════════════════════════════════════════════════
   Theme switch — light / dark
   The <html data-theme> attribute is already set by the inline
   bootstrap in <head>; this only wires up the toggle button and
   persists the choice.
   ════════════════════════════════════════════════════════════ */
(function () {
  var KEY = 'ak-theme';
  var root = document.documentElement;

  function current() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }

  function label(btn, theme) {
    var next = theme === 'dark' ? 'light' : 'dark';
    btn.setAttribute('aria-label', 'Switch to ' + next + ' theme');
    btn.setAttribute('title', 'Switch to ' + next + ' theme');
    btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
  }

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(KEY, theme); } catch (e) {}
    buttons().forEach(function (b) { label(b, theme); });
  }

  function buttons() {
    return Array.prototype.slice.call(document.querySelectorAll('.theme-toggle'));
  }

  function init() {
    var btns = buttons();
    btns.forEach(function (btn) {
      label(btn, current());
      btn.addEventListener('click', function () {
        // only animate colour changes on an intentional switch
        root.classList.add('theme-anim');
        apply(current() === 'dark' ? 'light' : 'dark');
        window.setTimeout(function () { root.classList.remove('theme-anim'); }, 400);
      });
    });

    // follow the OS while the visitor hasn't picked a side themselves
    if (window.matchMedia) {
      var mq = window.matchMedia('(prefers-color-scheme: dark)');
      var onChange = function (e) {
        var saved = null;
        try { saved = localStorage.getItem(KEY); } catch (err) {}
        if (!saved) {
          root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
          buttons().forEach(function (b) { label(b, current()); });
        }
      };
      if (mq.addEventListener) mq.addEventListener('change', onChange);
      else if (mq.addListener) mq.addListener(onChange);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

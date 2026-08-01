/* ════════════════════════════════════════════════════════════
   PASSWORD GATE
   A soft access barrier for confidential case studies.

   ⚠️  This is NOT real security. The page's HTML is already in the
   browser, so anyone who opens DevTools can read the case study
   without the password. It keeps the work out of search results
   and off casual browsing — nothing more. For work under NDA, use
   server-side protection (see README notes in the commit).

   ── Changing the password ──────────────────────────────────
   The password itself is not stored here, only its SHA-256 hash.
   To set a new one, run this in any browser console:

     crypto.subtle.digest('SHA-256', new TextEncoder().encode('yourpassword'))
       .then(b => console.log([...new Uint8Array(b)]
         .map(x => x.toString(16).padStart(2,'0')).join('')));

   ...then paste the result into PASSWORD_HASH on the page.
   ════════════════════════════════════════════════════════════ */
(function () {
  var root = document.documentElement;
  var gate = document.getElementById('gate');
  if (!gate) return;

  var KEY = gate.getAttribute('data-gate-key') || 'ak-gate';
  var HASH = (gate.getAttribute('data-gate-hash') || '').toLowerCase();

  var form = gate.querySelector('.gate-form');
  var input = gate.querySelector('.gate-input');
  var card = gate.querySelector('.gate-card');
  var error = gate.querySelector('.gate-error');
  var peek = gate.querySelector('.gate-peek');

  function sha256(text) {
    var bytes = new TextEncoder().encode(text);
    return crypto.subtle.digest('SHA-256', bytes).then(function (buf) {
      return Array.prototype.map
        .call(new Uint8Array(buf), function (b) { return b.toString(16).padStart(2, '0'); })
        .join('');
    });
  }

  function unlock(remember) {
    if (remember) {
      // sessionStorage: access lasts for the tab, not forever
      try { sessionStorage.setItem(KEY, HASH); } catch (e) {}
    }
    root.classList.remove('gated');
    gate.setAttribute('hidden', '');
    // let the page's own scroll-reveal observers see the real layout
    window.dispatchEvent(new Event('resize'));
    window.scrollTo(0, 0);
  }

  function reject() {
    error.textContent = "That password doesn't match. Try again, or email me for access.";
    error.classList.add('is-visible');
    card.classList.remove('is-wrong');
    void card.offsetWidth; // restart the shake
    card.classList.add('is-wrong');
    input.select();
  }

  // Already unlocked in this tab?
  var saved = null;
  try { saved = sessionStorage.getItem(KEY); } catch (e) {}
  if (saved && saved === HASH) {
    unlock(false);
    return;
  }

  // No Web Crypto (very old browser, or a non-secure origin that isn't
  // localhost) — fail open rather than locking the visitor out entirely.
  if (!window.crypto || !crypto.subtle) {
    unlock(false);
    return;
  }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var value = (input.value || '').trim();
      if (!value) { reject(); return; }
      sha256(value).then(function (digest) {
        if (digest === HASH) unlock(true);
        else reject();
      }).catch(function () { reject(); });
    });
  }

  if (input) {
    input.addEventListener('input', function () {
      error.classList.remove('is-visible');
      card.classList.remove('is-wrong');
    });
  }

  if (peek) {
    peek.addEventListener('click', function () {
      var showing = input.type === 'text';
      input.type = showing ? 'password' : 'text';
      peek.classList.toggle('is-shown', !showing);
      peek.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
      input.focus();
    });
  }

  // focus the field once the entrance animation has settled
  window.setTimeout(function () { if (input) input.focus(); }, 380);
})();

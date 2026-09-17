/* ============================================================
   NLOGA — Venture Studio · interactions
   ============================================================ */
(function () {
  'use strict';

  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ---------------- 0. Theme (white default, dark optional) ---------------- */
  (function () {
    var root = document.documentElement;
    var toggle = $('#theme-toggle');
    var drawerToggle = $('#theme-toggle-drawer');
    var drawerLabel = $('#theme-toggle-drawer-label');
    var meta = document.getElementById('meta-theme-color');

    function current() {
      return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }

    function lang() {
      if (typeof window.NLOGA_getLang === 'function') return window.NLOGA_getLang();
      return root.getAttribute('lang') === 'fr' ? 'fr' : 'en';
    }

    function apply(theme, silent) {
      var next = theme === 'dark' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('nloga-theme', next); } catch (e) {}
      if (meta) meta.setAttribute('content', next === 'dark' ? '#101415' : '#f8fafc');
      var isDark = next === 'dark';
      var isFr = lang() === 'fr';
      var toLight = isFr ? 'Passer au thème clair' : 'Switch to light theme';
      var toDark = isFr ? 'Passer au thème sombre' : 'Switch to dark theme';
      if (toggle) {
        toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
        toggle.setAttribute('aria-label', isDark ? toLight : toDark);
        toggle.setAttribute('title', isDark ? toLight : toDark);
      }
      if (drawerToggle) drawerToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
      if (drawerLabel) drawerLabel.textContent = isDark ? toLight : toDark;
      if (!silent && typeof window.triggerStudioPulse === 'function') {
        window.triggerStudioPulse(next === 'dark'
          ? (isFr ? 'Thème sombre activé' : 'Dark Theme Enabled')
          : (isFr ? 'Thème clair activé' : 'Light Theme Enabled'));
      }
    }

    function toggleTheme() { apply(current() === 'dark' ? 'light' : 'dark'); }

    if (toggle) toggle.addEventListener('click', toggleTheme);
    if (drawerToggle) drawerToggle.addEventListener('click', toggleTheme);

    /* Sync on load (inline head script already set the initial theme). */
    apply(current(), true);
    window.setNlogaTheme = apply;
  })();

  /* ---------------- 1. Blueprint preloader ---------------- */
  var loader = $('#route-pulse-overlay');
  var loaderMin = 1100;

  function hideLoader() {
    if (!loader || loader.dataset.done) return;
    loader.dataset.done = '1';
    loader.classList.remove('is-visible');
    setTimeout(function () { loader.classList.add('is-gone'); }, 700);
  }
  window.addEventListener('load', function () { setTimeout(hideLoader, loaderMin); });
  setTimeout(hideLoader, 3200); /* safety net if a resource stalls */

  /* ---------------- 2. Studio pulse overlay ---------------- */
  var pulse = $('#interactive-pulse');
  var pulseMessage = $('#pulse-message');
  var pulseTimer = null;

  function triggerStudioPulse(message) {
    if (!pulse) return;
    if (message && pulseMessage) pulseMessage.textContent = message;
    pulse.classList.add('is-visible');
    clearTimeout(pulseTimer);
    pulseTimer = setTimeout(function () { pulse.classList.remove('is-visible'); }, 1400);
  }
  window.triggerStudioPulse = triggerStudioPulse;

  $$('[data-pulse]').forEach(function (el) {
    el.addEventListener('click', function () {
      triggerStudioPulse(el.getAttribute('data-pulse'));
    });
  });

  /* ---------------- 3. Header scroll state ---------------- */
  var header = $('#site-header');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- 4. Mobile drawer ---------------- */
  var drawer = $('#mobile-drawer');
  var scrim = $('#drawer-scrim');
  var navToggle = $('#nav-toggle');

  function setDrawer(open) {
    if (!drawer || !navToggle) return;
    drawer.classList.toggle('open', open);
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    if (scrim) {
      if (open) { scrim.hidden = false; requestAnimationFrame(function () { scrim.classList.add('visible'); }); }
      else { scrim.classList.remove('visible'); setTimeout(function () { scrim.hidden = true; }, 300); }
    }
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (navToggle) navToggle.addEventListener('click', function () {
    setDrawer(!drawer.classList.contains('open'));
  });
  if (scrim) scrim.addEventListener('click', function () { setDrawer(false); });
  $$('.mobile-drawer a').forEach(function (link) {
    link.addEventListener('click', function () { setDrawer(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setDrawer(false);
  });

  /* ---------------- 5. Capabilities carousel ---------------- */
  (function () {
    var track = $('#capabilities-track');
    var prevBtn = $('#carousel-prev');
    var nextBtn = $('#carousel-next');
    var progress = $('#car-progress-bar');
    if (!track || !prevBtn || !nextBtn) return;

    var offset = 0;

    function metrics() {
      var gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 24;
      var card = track.children[0];
      var step = (card ? card.getBoundingClientRect().width : 460) + gap;
      var max = Math.max(0, track.scrollWidth - track.parentElement.clientWidth);
      return { step: step, max: max };
    }

    function render() {
      var m = metrics();
      offset = Math.min(0, Math.max(-m.max, offset));
      track.style.transform = 'translateX(' + offset + 'px)';
      prevBtn.disabled = offset >= -1;
      nextBtn.disabled = offset <= -(m.max + 1);
      if (progress) {
        var pct = m.max === 0 ? 100 : Math.round((1 + offset / m.max) * 100);
        progress.style.width = pct + '%';
      }
    }

    prevBtn.addEventListener('click', function () {
      offset += metrics().step;
      render();
    });
    nextBtn.addEventListener('click', function () {
      offset -= metrics().step;
      render();
    });

    /* Drag / swipe */
    var dragging = false, startX = 0, startOffset = 0;
    track.addEventListener('pointerdown', function (e) {
      dragging = true; startX = e.clientX; startOffset = offset;
      track.classList.add('dragging');
      track.setPointerCapture && track.setPointerCapture(e.pointerId);
    });
    track.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      offset = startOffset + (e.clientX - startX);
      render();
    });
    function endDrag() {
      if (!dragging) return;
      dragging = false;
      track.classList.remove('dragging');
      var m = metrics();
      var snapped = Math.round(offset / m.step) * m.step;
      offset = Math.min(0, Math.max(-m.max, snapped));
      render();
    }
    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);
    track.addEventListener('pointerleave', endDrag);
    track.addEventListener('dragstart', function (e) { e.preventDefault(); });

    window.addEventListener('resize', render);
    render();
  })();

  /* ---------------- 6. Project filter tabs ---------------- */
  (function () {
    var tabs = $$('.tab');
    var cards = $$('.work-card');
    if (!tabs.length || !cards.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        var target = tab.getAttribute('data-filter');
        cards.forEach(function (card) {
          var cat = card.getAttribute('data-category');
          var show = target === 'all' || target === cat;
          card.classList.toggle('is-hidden', !show);
        });
        if (typeof window.triggerStudioPulse === 'function') {
          var isFr = (typeof window.NLOGA_isFr === 'function' && window.NLOGA_isFr()) ||
            (typeof window.NLOGA_getLang === 'function' && window.NLOGA_getLang() === 'fr');
          window.triggerStudioPulse((isFr ? 'Projets · ' : 'Work Filter · ') + tab.textContent.trim());
        }
      });
    });
  })();

  /* ---------------- 7. FAQ accordion ---------------- */
  (function () {
    var items = $$('.faq-item');
    items.forEach(function (item) {
      var btn = $('.faq-q', item);
      var panel = $('.faq-a', item);
      if (!btn || !panel) return;
      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        items.forEach(function (other) {
          other.classList.remove('open');
          var q = $('.faq-q', other);
          var a = $('.faq-a', other);
          if (q) q.setAttribute('aria-expanded', 'false');
          if (a) a.style.maxHeight = '0px';
        });
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  })();

  /* ---------------- 8. Reveal on scroll ---------------- */
  (function () {
    var revealEls = $$('.reveal');
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach(function (el) { el.classList.add('in-view'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    revealEls.forEach(function (el) {
      var d = el.getAttribute('data-d');
      if (d) el.style.transitionDelay = d + 'ms';
      observer.observe(el);
    });
  })();

  /* ---------------- 9. Scroll-spy navigation ---------------- */
  (function () {
    var navLinks = $$('.nav-link');
    if (!navLinks.length || !('IntersectionObserver' in window)) return;
    var map = {};
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href.charAt(0) === '#') map[href.slice(1)] = link;
    });
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.id;
        navLinks.forEach(function (l) { l.classList.remove('active'); });
        var active = map[id];
        if (active) {
          active.classList.add('active');
          $$('.nav-link[href="#' + id + '"]').forEach(function (l) { l.classList.add('active'); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    Object.keys(map).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) spy.observe(section);
    });
  })();

  /* ---------------- 10. Language switcher (EN | FR) ---------------- */
  (function () {
    var toast = $('#toast');
    var toastTimer = null;
    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2600);
    }
    window.showToast = showToast;

    function currentLang() {
      if (typeof window.NLOGA_getLang === 'function') return window.NLOGA_getLang();
      return document.documentElement.getAttribute('lang') === 'fr' ? 'fr' : 'en';
    }

    $$('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = btn.getAttribute('data-lang') === 'fr' ? 'fr' : 'en';
        if (typeof window.setNlogaLang === 'function') {
          window.setNlogaLang(lang);
          return;
        }
        /* Fallback if i18n.js failed to load: toggle button state only. */
        $$('.lang-switch').forEach(function (group) {
          $$('.lang-btn', group).forEach(function (b) {
            b.classList.toggle('active', b.getAttribute('data-lang') === lang);
          });
        });
        document.documentElement.setAttribute('lang', lang);
        if (lang === 'fr') showToast('La version française arrive bientôt · French version coming soon');
        else showToast('Language: English');
      });
    });

    /* Expose for dynamic messages elsewhere in this file. */
    window.NLOGA_isFr = function () { return currentLang() === 'fr'; };
  })();

  /* ---------------- 11. Contact form ---------------- */
  (function () {
    var form = $('#contact-form');
    if (!form) return;
    var note = $('#form-note');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = $('#cf-name');
      var email = $('#cf-email');
      var msg = $('#cf-msg');
      var ok = true;
      [name, email, msg].forEach(function (f) {
        if (!f) return;
        var bad = !f.value || !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
        f.classList.toggle('field-error', bad);
        if (bad) ok = false;
      });
      var isFr = (typeof window.NLOGA_isFr === 'function' && window.NLOGA_isFr()) ||
        (typeof window.NLOGA_getLang === 'function' && window.NLOGA_getLang() === 'fr');
      if (!ok) {
        if (note) note.textContent = isFr
          ? 'Veuillez indiquer votre nom, un e-mail valide et quelques mots sur votre projet.'
          : 'Please complete your name, a valid email, and a short project note.';
        window.showToast && window.showToast(isFr ? 'Veuillez compléter les champs surlignés' : 'Please complete the highlighted fields');
        return;
      }
      if (note) note.textContent = isFr
        ? 'Merci. Nous avons bien reçu votre message et examinerons les détails de votre projet avant de revenir vers vous.'
        : "Thank you. We've received your message and will review your project details before getting back to you.";
      window.triggerStudioPulse && window.triggerStudioPulse(isFr ? 'Demande de projet reçue' : 'Project Enquiry Received');
      window.showToast && window.showToast(isFr ? 'Demande envoyée — merci' : 'Enquiry sent — thank you');
      form.reset();
    });
  })();

  /* ---------------- 12. Footer year ---------------- */
  (function () {
    var year = $('#year');
    if (year) year.textContent = String(new Date().getFullYear());
  })();

})();


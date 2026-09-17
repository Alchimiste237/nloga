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

  /* ---------------- 6b. Modal dialog (cases, articles, legal) ---------------- */
  (function () {
    var overlay = $('#modal-overlay');
    var body = $('#modal-body');
    var closeBtn = $('#modal-close');
    if (!overlay || !body) return;
    var lastFocus = null;

    function open(id) {
      var src = document.getElementById(id);
      if (!src) return;
      lastFocus = document.activeElement;
      body.innerHTML = src.innerHTML;
      overlay.hidden = false;
      requestAnimationFrame(function () { requestAnimationFrame(function () {
        overlay.classList.add('open');
      }); });
      document.body.style.overflow = 'hidden';
      if (closeBtn) closeBtn.focus({ preventScroll: true });
    }
    window.openNlogaModal = open;

    function close() {
      overlay.classList.remove('open');
      setTimeout(function () {
        overlay.hidden = true;
        body.innerHTML = '';
        document.body.style.overflow = '';
        if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
      }, 380);
    }
    window.closeNlogaModal = close;

    document.addEventListener('click', function (e) {
      var trigger = e.target.closest ? e.target.closest('[data-modal]') : null;
      if (trigger) {
        e.preventDefault();
        open(trigger.getAttribute('data-modal'));
        return;
      }
      /* In-modal anchor links (e.g. "Start a similar project") close first. */
      var anchor = e.target.closest ? e.target.closest('.modal-body a[href^="#"]') : null;
      if (anchor) { close(); return; } /* default anchor navigation proceeds */
      if (e.target === overlay) close();
    });
    if (closeBtn) closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !overlay.hidden) close();
    });
  })();

  /* ---------------- 6c. Animated counters ---------------- */
  (function () {
    var counters = $$('[data-count]');
    if (!counters.length) return;
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function render(el, value) {
      el.textContent = String(Math.round(value)) + (el.getAttribute('data-suffix') || '');
    }
    function animate(el) {
      var target = parseFloat(el.getAttribute('data-count')) || 0;
      if (reduced || !('requestAnimationFrame' in window)) { render(el, target); return; }
      var start = null, duration = 1400;
      function frame(ts) {
        if (start === null) start = ts;
        var p = Math.min(1, (ts - start) / duration);
        var eased = 1 - Math.pow(1 - p, 4);
        render(el, target * eased);
        if (p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }

    if (!('IntersectionObserver' in window)) {
      counters.forEach(animate);
      return;
    }
    var seen = new WeakSet();
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !seen.has(entry.target)) {
          seen.add(entry.target);
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { observer.observe(el); });
  })();

  /* ---------------- 6d. Lightbox gallery ---------------- */
  (function () {
    var box = $('#lightbox');
    if (!box) return;
    var img = $('#lb-img');
    var cap = $('#lb-cap');
    var count = $('#lb-count');
    var items = $$('.work-media img, .eco-grid .eco-media img, .about-side .eco-media img');
    if (!items.length || !img) return;
    var index = 0;
    var lastFocus = null;

    function render() {
      var el = items[index];
      img.classList.remove('zoomed');
      img.src = el.currentSrc || el.src;
      img.alt = el.alt || '';
      if (cap) cap.textContent = el.alt || '';
      if (count) count.textContent = (index + 1) + ' / ' + items.length;
    }
    function open(i) {
      index = (i + items.length) % items.length;
      lastFocus = document.activeElement;
      render();
      box.hidden = false;
      requestAnimationFrame(function () { requestAnimationFrame(function () {
        box.classList.add('open');
      }); });
      document.body.style.overflow = 'hidden';
    }
    function close() {
      box.classList.remove('open');
      setTimeout(function () {
        box.hidden = true;
        document.body.style.overflow = '';
        if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
      }, 380);
    }
    window.openNlogaLightbox = open;
    window.closeNlogaLightbox = close;

    items.forEach(function (el, i) {
      el.addEventListener('click', function () { open(i); });
    });
    img.addEventListener('click', function () { img.classList.toggle('zoomed'); });

    function prev() { index = (index - 1 + items.length) % items.length; render(); }
    function next() { index = (index + 1) % items.length; render(); }
    var prevBtn = $('#lb-prev');
    var nextBtn = $('#lb-next');
    var closeBtn = $('#lb-close');
    if (prevBtn) prevBtn.addEventListener('click', prev);
    if (nextBtn) nextBtn.addEventListener('click', next);
    if (closeBtn) closeBtn.addEventListener('click', close);
    box.addEventListener('click', function (e) { if (e.target === box) close(); });
    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    });
    var touchX = null;
    box.addEventListener('touchstart', function (e) {
      touchX = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : null;
    }, { passive: true });
    box.addEventListener('touchend', function (e) {
      if (touchX === null) return;
      var dx = (e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : touchX) - touchX;
      touchX = null;
      if (Math.abs(dx) < 40) return;
      if (dx > 0) prev(); else next();
    }, { passive: true });
  })();

  /* ---------------- 6e. Card tilt (fine pointers only) ---------------- */
  (function () {
    if (!window.matchMedia) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;
    $$('.work-card, .eco-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var r = card.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - 0.5;
        var py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform =
          'perspective(900px) rotateX(' + (-py * 5).toFixed(2) + 'deg)' +
          ' rotateY(' + (px * 5).toFixed(2) + 'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function () { card.style.transform = ''; });
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

  /* ---------------- 8b. Ambient scroll parallax ---------------- */
  (function () {
    if (!('requestAnimationFrame' in window)) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var layers = $$('.blueprint-layer');
    var ribbons = $$('.ribbon');
    var spots = $$('.spotlight');
    if (!layers.length && !spots.length && !ribbons.length) return;
    var target = 0, current = 0, running = false;
    function frame() {
      /* Ease toward the target for a slow, buttery drift. */
      current += (target - current) * 0.06;
      if (Math.abs(target - current) < 0.1) {
        current = target;
        running = false;
      } else {
        requestAnimationFrame(frame);
      }
      layers.forEach(function (l) { l.style.transform = 'translate3d(0,' + (current * -0.05) + 'px,0)'; });
      ribbons.forEach(function (r) { r.style.transform = 'translate3d(0,' + (current * -0.03) + 'px,0)'; });
      spots.forEach(function (s) { s.style.transform = 'translate3d(0,' + (current * 0.04) + 'px,0)'; });
    }
    window.addEventListener('scroll', function () {
      target = window.scrollY || window.pageYOffset || 0;
      if (!running) { running = true; requestAnimationFrame(frame); }
    }, { passive: true });
  })();

  /* ---------------- 8c. Scroll progress + back-to-top ---------------- */
  (function () {
    var bar = $('#scroll-progress-bar');
    var topBtn = $('#back-to-top');
    if (!bar && !topBtn) return;
    var ticking = false;
    function update() {
      ticking = false;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, (window.scrollY || 0) / max) : 0;
      if (bar) bar.style.width = (p * 100).toFixed(1) + '%';
      if (topBtn) topBtn.classList.toggle('visible', (window.scrollY || 0) > 600);
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
    if (topBtn) topBtn.addEventListener('click', function () {
      var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
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
    /* TODO: set your real WhatsApp business number (country code + number, no "+"). */
    /* Optional: paste a Formspree endpoint ID to also receive enquiries by email. */
    var CONTACT = { whatsapp: '237600000000', formspree: '' };
    window.NLOGA_CONTACT = CONTACT;

    /* Keep every WhatsApp entry point in sync with the config above. */
    ['contact-whatsapp', 'fab-whatsapp'].forEach(function (id) {
      var a = document.getElementById(id);
      if (a) a.href = 'https://wa.me/' + CONTACT.whatsapp;
    });

    function isFr() {
      return (typeof window.NLOGA_isFr === 'function' && window.NLOGA_isFr()) ||
        (typeof window.NLOGA_getLang === 'function' && window.NLOGA_getLang() === 'fr');
    }
    function waLink(name, email, org, need, msg) {
      var lines = [
        (isFr() ? 'Bonjour Nloga, je suis ' : 'Hello Nloga, I am ') + name + ' (' + email + ')',
        (org ? ((isFr() ? 'Organisation : ' : 'Organization: ') + org) : null),
        (isFr() ? 'Besoin : ' : 'Need: ') + need,
        '',
        msg
      ].filter(function (l) { return l !== null; });
      return 'https://wa.me/' + CONTACT.whatsapp + '?text=' + encodeURIComponent(lines.join('\n'));
    }

    var form = $('#contact-form');
    if (!form) return;
    var note = $('#form-note');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = $('#cf-name');
      var email = $('#cf-email');
      var org = $('#cf-org');
      var need = $('#cf-need');
      var msg = $('#cf-msg');
      var ok = true;
      [name, email, msg].forEach(function (f) {
        if (!f) return;
        var bad = !f.value || !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
        f.classList.toggle('field-error', bad);
        if (bad) ok = false;
      });
      if (!ok) {
        if (note) note.textContent = isFr()
          ? 'Veuillez indiquer votre nom, un e-mail valide et quelques mots sur votre projet.'
          : 'Please complete your name, a valid email, and a short project note.';
        window.showToast && window.showToast(isFr() ? 'Veuillez compléter les champs surlignés' : 'Please complete the highlighted fields');
        return;
      }
      var link = waLink(name.value.trim(), email.value.trim(),
        org && org.value.trim(), need && need.value, msg.value.trim());
      /* Optional email backend — skipped silently until configured. */
      if (CONTACT.formspree) {
        try {
          fetch('https://formspree.io/f/' + CONTACT.formspree, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
              name: name.value.trim(), email: email.value.trim(),
              organization: org && org.value.trim(), need: need && need.value,
              message: msg.value.trim()
            })
          }).catch(function () {});
        } catch (err) {}
      }
      window.open(link, '_blank', 'noopener');
      if (note) note.textContent = isFr()
        ? 'Merci ! WhatsApp s’ouvre avec votre message — envoyez-le pour nous le faire parvenir.'
        : 'Thank you! WhatsApp is opening with your message — press send to deliver it to us.';
      window.triggerStudioPulse && window.triggerStudioPulse(isFr() ? 'Demande de projet reçue' : 'Project Enquiry Received');
      window.showToast && window.showToast(isFr() ? 'Demande envoyée — merci' : 'Enquiry sent — thank you');
      form.reset();
    });
  })();

  /* ---------------- 12b. Service worker (PWA offline) ---------------- */
  (function () {
    if (!('serviceWorker' in navigator)) return;
    if (!/^https?:$/.test(window.location.protocol)) return; /* skip on file:// */
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  })();

  /* ---------------- 12. Footer year ---------------- */
  (function () {
    var year = $('#year');
    if (year) year.textContent = String(new Date().getFullYear());
  })();

})();


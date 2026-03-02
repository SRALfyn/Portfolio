function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function lockScrollAtCurrentPosition() {
  if (document.body.style.position === 'fixed') return;

  var scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = -scrollY + 'px';
  document.body.style.width = '100%';
  document.body.style.left = '0';
}

function unlockScrollFromLockedPosition() {
  var top = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  document.body.style.left = '';
  if (top) {
    requestAnimationFrame(function () {
      window.scrollTo({
        top: -parseInt(top),
        left: 0,
        behavior: 'instant'
      });
    });
  }
}

function lazyLoadCardMedia(card) {
  if (!card || card.dataset.mediaLoaded === 'true') return;

  const iframes = card.querySelectorAll('iframe[data-src]');
  iframes.forEach(iframe => {
    iframe.src = iframe.getAttribute('data-src');
    iframe.removeAttribute('data-src');
  });

  const imgs = card.querySelectorAll('img[data-video-mp4], img[data-gif-src]');
  imgs.forEach(img => {
    const mp4 = img.getAttribute('data-video-mp4');
    const webm = img.getAttribute('data-video-webm');
    const poster = img.getAttribute('data-poster') || img.getAttribute('src') || '';

    if (mp4 || webm) {
      const video = document.createElement('video');
      video.autoplay = false;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = 'auto';
      if (poster) video.poster = poster;
      video.className = img.className || '';
      video.style.cssText = img.style.cssText || '';

      const canPlayWebm = typeof video.canPlayType === 'function' && !!(video.canPlayType('video/webm; codecs="vp8, vorbis"') || video.canPlayType('video/webm'));

      if (webm && mp4) {
        if (canPlayWebm) {
          addSource(video, webm, 'video/webm');
          addSource(video, mp4, 'video/mp4');
        } else {
          addSource(video, mp4, 'video/mp4');
          addSource(video, webm, 'video/webm');
        }
      } else if (webm) addSource(video, webm, 'video/webm');
      else if (mp4) addSource(video, mp4, 'video/mp4');

      img.replaceWith(video);
      try { video.load(); } catch (e) { }
    } else if (img.getAttribute('data-gif-src')) {
      img.src = img.getAttribute('data-gif-src');
      img.removeAttribute('data-gif-src');
    }
  });
  card.dataset.mediaLoaded = 'true';
}

function addSource(video, src, type) {
  const source = document.createElement('source');
  source.src = src;
  source.type = type;
  video.appendChild(source);
}

const mediaObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      lazyLoadCardMedia(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { rootMargin: '200px 0px 200px 0px' });

document.querySelectorAll('.flip-card').forEach(card => {
  mediaObserver.observe(card);
});

function closeAllCards() {
  document.querySelectorAll('.flip-card.flipped').forEach(card => {
    pauseBackVideos(card);
    card.classList.remove('flipped');
  });
  unlockScrollFromLockedPosition();
  window._cardWasFlipped = false;
}

function openCardByIndex(index) {
  const cards = document.querySelectorAll('.flip-card');
  const card = cards[index];

  if (card) {
    document.querySelectorAll('.flip-card.flipped').forEach(c => {
      if (c !== card) {
        pauseBackVideos(c);
        c.classList.remove('flipped');
      }
    });

    lazyLoadCardMedia(card);
    card.classList.add('flipped');

    playBackVideos(card);

    window._cardWasFlipped = true;

    setTimeout(lockScrollAtCurrentPosition, 10);
  }
}

window.addEventListener('popstate', (event) => {
  if (event.state && event.state.cardOpen && event.state.cardIndex !== undefined) {
    openCardByIndex(event.state.cardIndex);
  }
  else {
    closeAllCards();
  }
});

document.querySelectorAll('.project-btn').forEach(btn => {
  if (btn.id === 'allGamesBtn') return;

  const card = btn.closest('.flip-card');
  if (!card) return;

  btn.addEventListener('mousedown', function () {
    lazyLoadCardMedia(card);
    window._lastScrollY = window.scrollY;
  });

  btn.addEventListener('click', function (e) {
    if (!btn.classList.contains('details-btn')) return;

    const allCards = Array.from(document.querySelectorAll('.flip-card'));
    const cardIndex = allCards.indexOf(card);

    lazyLoadCardMedia(card);

    history.pushState({ cardOpen: true, cardIndex: cardIndex }, "", null);

    card.classList.add('flipped');

    playBackVideos(card);

    window._cardWasFlipped = true;
    setTimeout(lockScrollAtCurrentPosition, 10);
  });
});

document.querySelectorAll('.exit-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();

    if (history.state && history.state.cardOpen) {
      history.back();
    } else {
      closeAllCards();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {

  const navLinks = document.querySelectorAll('.menu-links a, .nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");

      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        icon.classList.remove("open");
      }
    });
  });

});

const EYE_MOVE_LIMIT = 6;
const SMOOTH_FACTOR = 0.1;

let pookiState = {
  targetX: 0,
  targetY: 0,
  currentX: 0,
  currentY: 0
};

function updateTarget(clientX, clientY) {
  pookiState.mouseX = clientX;
  pookiState.mouseY = clientY;
}

document.addEventListener('mousemove', (e) => updateTarget(e.clientX, e.clientY));

document.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  updateTarget(touch.clientX, touch.clientY);
}, { passive: true });

document.addEventListener('touchstart', (e) => {
  const touch = e.touches[0];
  updateTarget(touch.clientX, touch.clientY);
}, { passive: true });


function animateEyes() {
  const eyes = document.querySelectorAll('.eye-socket');

  eyes.forEach(eye => {
    const pupil = eye.querySelector('.pupil');
    if (!pupil) return;

    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const targetMouseX = pookiState.mouseX || window.innerWidth / 2;
    const targetMouseY = pookiState.mouseY || window.innerHeight / 2;

    const angle = Math.atan2(targetMouseY - eyeCenterY, targetMouseX - eyeCenterX);

    const targetPupilX = Math.cos(angle) * EYE_MOVE_LIMIT;
    const targetPupilY = Math.sin(angle) * EYE_MOVE_LIMIT;

    if (!pupil.dataset.currentX) {
      pupil.dataset.currentX = 0;
      pupil.dataset.currentY = 0;
    }

    let currX = parseFloat(pupil.dataset.currentX);
    let currY = parseFloat(pupil.dataset.currentY);

    currX += (targetPupilX - currX) * SMOOTH_FACTOR;
    currY += (targetPupilY - currY) * SMOOTH_FACTOR;

    pupil.dataset.currentX = currX;
    pupil.dataset.currentY = currY;

    pupil.style.transform = `translate(-50%, -50%) translate(${currX}px, ${currY}px)`;
  });

  requestAnimationFrame(animateEyes);
}

requestAnimationFrame(animateEyes);

// Hilfsfunktion: Videos auf der Rückseite starten & zurücksetzen
function playBackVideos(card) {
  const videos = card.querySelectorAll('.flip-card-back video');
  videos.forEach(v => {
    v.currentTime = 0; // Immer von vorne starten
    v.play().catch(e => { /* Autoplay-Blocker vom Browser ignorieren */ });
  });
}

// Hilfsfunktion: Videos auf der Rückseite pausieren
function pauseBackVideos(card) {
  const videos = card.querySelectorAll('.flip-card-back video');
  videos.forEach(v => v.pause());
}

document.addEventListener("DOMContentLoaded", () => {
  const carSvg = document.querySelector(".car-on-btn");

  if (carSvg) {
    // Lässt das Auto direkt beim Laden der Seite spawnen
    carSvg.classList.add("spawn-animation");

    carSvg.addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault();

      if (carSvg.classList.contains("drive-off-animation")) return;

      // Entfernt den Spawn-Effekt und triggert den Fall
      carSvg.classList.remove("spawn-animation");

      // Kurzer Reflow-Hack, um sicherzustellen, dass die neue Animation sauber startet
      void carSvg.offsetWidth;

      carSvg.classList.add("drive-off-animation");

      setTimeout(() => {
        carSvg.style.visibility = "hidden";
      }, 700);

      // Nach 3 Sekunden wird das Auto zurückgesetzt und die Spawn-Animation erneut abgespielt
      setTimeout(() => {
        carSvg.classList.remove("drive-off-animation");
        carSvg.style.visibility = "visible";
        carSvg.classList.add("spawn-animation");
      }, 2000);
    });
  }
});


// Cult carousel - robust fix for modal always opening last image
(function () {
  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  class CultCarousel {
    constructor(root) {
      this.root = root;
      this.viewport = qs('.cult-carousel__viewport', root);
      this.slides = qsa('.cult-carousel__slide', this.viewport);
      this.leftBtn = qs('.cult-carousel__arrow--left', root);
      this.rightBtn = qs('.cult-carousel__arrow--right', root);
      this.dotsContainer = qs('.cult-carousel__dots', root);
      this.current = 0;
      this.modal = null;
      if (!this.slides.length) return;
      this.setup();
      this.show(0);
    }

    setup() {
      // make root focusable for keyboard nav
      this.root.tabIndex = 0;

      // viewport click opens modal at the currently tracked index
      this.viewport.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openModal(this.current);
      });

      if (this.leftBtn) this.leftBtn.addEventListener('click', (e) => { e.stopPropagation(); this.prev(); });
      if (this.rightBtn) this.rightBtn.addEventListener('click', (e) => { e.stopPropagation(); this.next(); });

      // dots in small (card) carousel
      this.dots = [];
      this.dotsContainer.innerHTML = '';
      this.slides.forEach((_, i) => {
        const d = document.createElement('button');
        d.className = 'cult-carousel__dot';
        d.type = 'button';
        d.title = `Slide ${i + 1}`;
        d.addEventListener('click', (ev) => { ev.stopPropagation(); this.show(i); });
        this.dotsContainer.appendChild(d);
        this.dots.push(d);
      });

      // keyboard navigation while focus inside root
      this.root.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); this.prev(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); this.next(); }
      });

      // Touch swipe support for main carousel
      let startX = 0;
      this.viewport.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].screenX;
      }, { passive: true });

      this.viewport.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].screenX;
        if (startX - endX > 50) this.next();
        if (endX - startX > 50) this.prev();
      }, { passive: true });

      // prevent flip/card click-through
      this.root.addEventListener('click', (e) => e.stopPropagation());
    }

    show(index) {
      const len = this.slides.length;
      this.current = ((index % len) + len) % len;
      this.slides.forEach((s, i) => s.classList.toggle('cult-active', i === this.current));
      this.dots.forEach((d, i) => d.classList.toggle('cult-dot-active', i === this.current));
    }

    prev() { this.show(this.current - 1); }
    next() { this.show(this.current + 1); }

    // open modal at clicked index; modal contains full carousel + dots + nav
    openModal(startIndex) {
      if (this.modal) return;

      // ensure startIndex is a valid number within range; fallback to 0
      let idx = Number(startIndex);
      if (!Number.isFinite(idx) || this.slides.length === 0) idx = 0;
      const len = this.slides.length;
      idx = ((idx % len) + len) % len;

      const images = this.slides.map(s => ({ src: s.src, alt: s.alt || '' }));

      const modal = document.createElement('div');
      modal.className = 'cult-modal';
      modal.tabIndex = -1;

      const inner = document.createElement('div');
      inner.className = 'cult-modal__inner';

      const left = document.createElement('button');
      left.className = 'cult-modal__arrow cult-modal__arrow--left';
      left.title = 'Previous';
      left.innerHTML = '‹';

      const right = document.createElement('button');
      right.className = 'cult-modal__arrow cult-modal__arrow--right';
      right.title = 'Next';
      right.innerHTML = '›';

      const modalViewport = document.createElement('div');
      modalViewport.className = 'cult-modal__viewport';

      const modalSlides = images.map((im, i) => {
        const el = document.createElement('img');
        el.className = 'cult-modal__slide';
        el.src = im.src;
        el.alt = im.alt;
        el.dataset.index = i;
        modalViewport.appendChild(el);
        return el;
      });

      const modalDots = document.createElement('div');
      modalDots.className = 'cult-modal__dots';
      const modalDotButtons = images.map((_, i) => {
        const b = document.createElement('button');
        b.className = 'cult-modal__dot';
        b.type = 'button';
        b.title = `Slide ${i + 1}`;
        b.addEventListener('click', (ev) => { ev.stopPropagation(); showSlide(i); });
        modalDots.appendChild(b);
        return b;
      });

      // append elements
      inner.appendChild(left);
      inner.appendChild(modalViewport);
      inner.appendChild(right);
      inner.appendChild(modalDots);
      modal.appendChild(inner);
      document.body.appendChild(modal);

      // showSlide function
      const showSlide = (newIndex) => {
        const n = modalSlides.length;
        idx = ((newIndex % n) + n) % n;
        modalSlides.forEach((s, i) => s.classList.toggle('cult-modal__slide--active', i === idx));
        modalDotButtons.forEach((d, i) => d.classList.toggle('cult-modal__dot--active', i === idx));

        // Sync the underlying carousel
        this.show(idx);
      };

      // attach arrow handlers (use showSlide closure)
      left.addEventListener('click', (e) => { e.stopPropagation(); showSlide(idx - 1); });
      right.addEventListener('click', (e) => { e.stopPropagation(); showSlide(idx + 1); });

      // initial
      showSlide(idx);

      // close handlers
      const escHandler = (e) => { if (e.key === 'Escape') closeModal(); };
      const backdropClick = () => { closeModal(); };

      modal.addEventListener('click', backdropClick);
      document.addEventListener('keydown', escHandler);

      modal.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); showSlide(idx - 1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); showSlide(idx + 1); }
      });

      modal.addEventListener('wheel', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.deltaY > 0) {
          showSlide(idx + 1);
        } else if (e.deltaY < 0) {
          showSlide(idx - 1);
        }
      });

      // Touch swipe support for modal
      let modalStartX = 0;
      modal.addEventListener('touchstart', (e) => {
        modalStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      modal.addEventListener('touchend', (e) => {
        const modalEndX = e.changedTouches[0].screenX;
        if (modalStartX - modalEndX > 50) showSlide(idx + 1);
        if (modalEndX - modalStartX > 50) showSlide(idx - 1);
      }, { passive: true });

      const closeModal = () => {
        document.removeEventListener('keydown', escHandler);
        modal.removeEventListener('click', backdropClick);
        modal.remove();
        this.modal = null;
      };

      this.modal = modal;
      modal.focus();
    }
  }

  // init on DOMContentLoaded or now
  function init() {
    qsa('.cult-carousel').forEach(root => new CultCarousel(root));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("mediaModal");
  const modalImg = document.getElementById("modalImg");
  const modalVideo = document.getElementById("modalVideo");
  const closeBtn = document.querySelector(".media-modal-close");

  // select page media, explicitly exclude modal elements;
  // then filter out media that live inside .cult-carousel or inside any modal
  const allMedia = Array.from(document.querySelectorAll("img:not(#modalImg), video:not(#modalVideo)"));
  const mediaElements = allMedia.filter(el => {
    if (el.closest('.cult-carousel')) return false; // exclude carousel media
    if (el.closest('.cult-modal')) return false;    // exclude carousel's own modal (if present)
    if (el.closest('#mediaModal')) return false;    // exclude the global modal itself
    return true;
  });

  // Open modal for each media element
  mediaElements.forEach(media => {
    // Exclude explicit small UI icons / controls:
    // - icons used for external links
    // - items inside nav/menu/language controls
    // - styled .btn / .project-btn icons (e.g. meta/itch icons)
    // - everything inside the contact section (#contact)
    if (media.classList.contains("link-icon")) return;
    if (media.closest('.menu-links, .nav-links, .hamburger-icon, .languageswitch')) return;
    if (media.closest('.btn, .project-btn')) return;
    if (media.closest('#contact, .contact-info-container, .contact-icon')) return;

    // Allow images even if they sit inside a <button> element,
    // unless excluded above. Mark as zoomable for styling if needed.
    media.classList.add("zoomable");

    media.addEventListener("click", (e) => {
      e.stopPropagation();
      modal.style.display = "flex";

      if (media.tagName === "IMG") {
        modalImg.style.display = "block";
        modalVideo.style.display = "none";

        // Prefer high-res / large versions if provided on the image element
        const largeSrc = media.dataset.largeSrc || media.dataset.large || media.dataset.hires || media.getAttribute('data-large-src');
        modalImg.src = largeSrc || media.src;
        modalImg.alt = media.alt || "";

      } else if (media.tagName === "VIDEO") {
        const currentTime = Number.isFinite(media.currentTime) ? media.currentTime : 0;
        const wasPlaying = !media.paused;
        const playbackRate = media.playbackRate || 1;

        modalImg.style.display = "none";
        modalVideo.style.display = "block";

        const sourceEl = media.querySelector("source");
        const src = sourceEl ? sourceEl.src : media.currentSrc || media.src || "";

        if (!modalVideo.src || modalVideo.src !== src) {
          try { modalVideo.pause(); } catch (e) { }
          modalVideo.removeAttribute("src");
          modalVideo.load();
          modalVideo.src = src;
        }

        modalVideo.playbackRate = playbackRate;

        const applySync = () => {
          const dur = modalVideo.duration;
          const target = (isFinite(dur) && dur > 0) ? Math.min(currentTime, dur) : currentTime;
          try { modalVideo.currentTime = target; } catch (err) { }
          if (wasPlaying) {
            modalVideo.play().catch(() => { });
          } else {
            try { modalVideo.pause(); } catch (e) { }
          }
        };

        if (modalVideo.readyState >= 1 && isFinite(modalVideo.duration)) {
          applySync();
        } else {
          modalVideo.addEventListener("loadedmetadata", function once() {
            applySync();
            modalVideo.removeEventListener("loadedmetadata", once);
          }, { once: true });
        }

        try { modalVideo.currentTime = currentTime; } catch (e) { }
      }
    });
  });


  const closeModal = () => {
    modal.style.display = "none";
    modalImg.src = "";
    try { modalVideo.pause(); } catch (e) { }
    try { modalVideo.currentTime = 0; } catch (e) { }
    modalVideo.removeAttribute("src");
    modalVideo.load();
  };

  if (closeBtn) closeBtn.addEventListener("click", (e) => { e.stopPropagation(); closeModal(); });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  modalImg.addEventListener("click", (e) => { e.stopPropagation(); closeModal(); });
  modalVideo.addEventListener("click", (e) => { e.stopPropagation(); closeModal(); });

  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
});


function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  if (!menu || !icon) return;

  const isOpen = menu.classList.toggle('open');
  icon.classList.toggle('open', isOpen);
  icon.setAttribute('aria-expanded', String(isOpen));
}

function lockScrollAtCurrentPosition() {
  if (document.body.style.position === 'fixed') return;

  const scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `${-scrollY}px`;
  document.body.style.width = '100%';
  document.body.style.left = '0';
}

function unlockScrollFromLockedPosition() {
  const top = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  document.body.style.left = '';

  if (top) {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: -parseInt(top, 10),
        left: 0,
        behavior: 'instant'
      });
    });
  }
}

function setBackgroundInert(activeCard) {
  const landmarkSelectors = ['#desktop-nav', '#hamburger-nav', '#profile', '#tools', '#insights', '#experience', '#contact', 'footer', '.store-links-container'];
  landmarkSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.inert = Boolean(activeCard);
    });
  });

  document.querySelectorAll('.flip-card').forEach(card => {
    const container = card.closest('.details-container') || card;
    container.inert = Boolean(activeCard && card !== activeCard);
  });
}

function lazyLoadCardMedia(card) {
  if (!card || card.dataset.mediaLoaded === 'true') return;

  card.querySelectorAll('iframe[data-src]').forEach(iframe => {
    iframe.src = iframe.getAttribute('data-src');
    iframe.removeAttribute('data-src');
  });

  card.dataset.mediaLoaded = 'true';
}

function playBackVideos(card) {
  card.querySelectorAll('.flip-card-back video').forEach(video => {
    video.preload = 'metadata';
    try { video.load(); } catch (e) { }
    video.currentTime = 0;
    video.play().catch(() => { });
  });
}

function pauseBackVideos(card) {
  card.querySelectorAll('.flip-card-back video').forEach(video => video.pause());
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

const showcaseVideoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;
    if (entry.isIntersecting) {
      video.play().catch(() => { });
    } else {
      video.pause();
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll('video[data-autoplay-on-visible]').forEach(video => {
  showcaseVideoObserver.observe(video);
});

let lastActiveCardTrigger = null;

function closeAllCards() {
  document.querySelectorAll('.flip-card.flipped').forEach(card => {
    pauseBackVideos(card);
    card.classList.remove('flipped');
  });

  setBackgroundInert(null);
  unlockScrollFromLockedPosition();
  window._cardWasFlipped = false;

  if (lastActiveCardTrigger) {
    lastActiveCardTrigger.focus({ preventScroll: true });
    lastActiveCardTrigger = null;
  }

  scheduleEyeAnimation();
}

function openCardByIndex(index) {
  const cards = document.querySelectorAll('.flip-card');
  const card = cards[index];
  if (!card) return;

  document.querySelectorAll('.flip-card.flipped').forEach(c => {
    if (c !== card) {
      pauseBackVideos(c);
      c.classList.remove('flipped');
    }
  });

  lazyLoadCardMedia(card);
  card.classList.add('flipped');
  window.syncLanguageLayout?.();
  setBackgroundInert(card);
  playBackVideos(card);
  window._cardWasFlipped = true;

  setTimeout(() => {
    lockScrollAtCurrentPosition();
    const exitBtn = card.querySelector('.exit-btn');
    exitBtn?.focus({ preventScroll: true });
  }, 10);
}

window.addEventListener('popstate', (event) => {
  if (event.state && event.state.cardOpen && event.state.cardIndex !== undefined) {
    openCardByIndex(event.state.cardIndex);
  } else {
    closeAllCards();
  }
});

document.querySelectorAll('.project-btn').forEach(btn => {
  const card = btn.closest('.flip-card');
  if (!card) return;

  btn.addEventListener('mousedown', () => {
    lazyLoadCardMedia(card);
    window._lastScrollY = window.scrollY;
  });

  if (btn.classList.contains('details-btn')) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      lastActiveCardTrigger = btn;
      const allCards = Array.from(document.querySelectorAll('.flip-card'));
      const cardIndex = allCards.indexOf(card);
      history.pushState({ cardOpen: true, cardIndex }, '', null);
      openCardByIndex(cardIndex);
    });
  }
});

document.querySelectorAll('.exit-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (history.state && history.state.cardOpen) {
      history.back();
    } else {
      closeAllCards();
    }
  });
});

// Pooki eye tracking (demand-driven & paused when off-screen)
const EYE_MOVE_LIMIT = 6;
const SMOOTH_FACTOR = 0.1;

const eyeSockets = Array.from(document.querySelectorAll('.eye-socket')).map(socket => ({
  socket,
  pupil: socket.querySelector('.pupil'),
  currX: 0,
  currY: 0
})).filter(item => item.pupil);

const pookiState = {
  mouseX: window.innerWidth / 2,
  mouseY: window.innerHeight / 2,
  isVisible: true,
  rafId: 0
};

function animateEyes() {
  pookiState.rafId = 0;
  if (!eyeSockets.length || !pookiState.isVisible || window._cardWasFlipped) return;

  let needsMoreFrames = false;

  eyeSockets.forEach(item => {
    const rect = item.socket.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(pookiState.mouseY - eyeCenterY, pookiState.mouseX - eyeCenterX);
    const targetPupilX = Math.cos(angle) * EYE_MOVE_LIMIT;
    const targetPupilY = Math.sin(angle) * EYE_MOVE_LIMIT;

    item.currX += (targetPupilX - item.currX) * SMOOTH_FACTOR;
    item.currY += (targetPupilY - item.currY) * SMOOTH_FACTOR;

    item.pupil.style.transform = `translate(-50%, -50%) translate(${item.currX.toFixed(2)}px, ${item.currY.toFixed(2)}px)`;

    if (Math.hypot(targetPupilX - item.currX, targetPupilY - item.currY) > 0.05) {
      needsMoreFrames = true;
    }
  });

  if (needsMoreFrames) {
    pookiState.rafId = requestAnimationFrame(animateEyes);
  }
}

function scheduleEyeAnimation() {
  if (!eyeSockets.length || !pookiState.isVisible || window._cardWasFlipped || pookiState.rafId) return;
  pookiState.rafId = requestAnimationFrame(animateEyes);
}

if (eyeSockets.length > 0) {
  const updateTarget = (clientX, clientY) => {
    pookiState.mouseX = clientX;
    pookiState.mouseY = clientY;
    scheduleEyeAnimation();
  };

  document.addEventListener('mousemove', (e) => updateTarget(e.clientX, e.clientY), { passive: true });
  document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    if (touch) updateTarget(touch.clientX, touch.clientY);
  }, { passive: true });
  document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    if (touch) updateTarget(touch.clientX, touch.clientY);
  }, { passive: true });

  const pookiContainer = document.querySelector('.pooki-head-container');
  if (pookiContainer) {
    const eyeVisibilityObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        pookiState.isVisible = entry.isIntersecting;
        if (pookiState.isVisible) {
          scheduleEyeAnimation();
        } else if (pookiState.rafId) {
          cancelAnimationFrame(pookiState.rafId);
          pookiState.rafId = 0;
        }
      });
    }, { rootMargin: '100px' });

    eyeVisibilityObserver.observe(pookiContainer);
  }

  scheduleEyeAnimation();
}

// Navigation, Hamburger menu & Car animation
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.querySelector('.hamburger-icon');
  hamburgerBtn?.addEventListener('click', toggleMenu);

  const navLinks = document.querySelectorAll('.menu-links a, .nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || !targetId.startsWith('#')) return;

      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      const menu = document.querySelector('.menu-links');
      const icon = document.querySelector('.hamburger-icon');
      if (menu?.classList.contains('open')) {
        menu.classList.remove('open');
        icon?.classList.remove('open');
        icon?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  const carSvg = document.querySelector('.car-on-btn');
  if (carSvg) {
    carSvg.classList.add('spawn-animation');

    carSvg.addEventListener('click', (event) => {
      event.stopPropagation();
      event.preventDefault();

      if (carSvg.classList.contains('drive-off-animation')) return;

      carSvg.classList.remove('spawn-animation');
      void carSvg.offsetWidth;
      carSvg.classList.add('drive-off-animation');

      setTimeout(() => {
        carSvg.style.visibility = 'hidden';
      }, 700);

      setTimeout(() => {
        carSvg.classList.remove('drive-off-animation');
        carSvg.style.visibility = 'visible';
        carSvg.classList.add('spawn-animation');
      }, 2000);
    });
  }
});

// Cult carousel
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
      this.root.tabIndex = 0;

      this.viewport.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openModal(this.current);
      });

      this.leftBtn?.addEventListener('click', (e) => { e.stopPropagation(); this.prev(); });
      this.rightBtn?.addEventListener('click', (e) => { e.stopPropagation(); this.next(); });

      this.dots = [];
      this.dotsContainer.innerHTML = '';
      this.slides.forEach((_, i) => {
        const d = document.createElement('button');
        d.className = 'cult-carousel__dot';
        d.type = 'button';
        d.setAttribute('aria-label', `Slide ${i + 1}`);
        d.addEventListener('click', (ev) => { ev.stopPropagation(); this.show(i); });
        this.dotsContainer.appendChild(d);
        this.dots.push(d);
      });

      this.root.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); this.prev(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); this.next(); }
      });

      let startX = 0;
      this.viewport.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].screenX;
      }, { passive: true });

      this.viewport.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].screenX;
        if (startX - endX > 50) this.next();
        if (endX - startX > 50) this.prev();
      }, { passive: true });

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

    openModal(startIndex) {
      if (this.modal) return;

      let idx = Number(startIndex);
      if (!Number.isFinite(idx) || this.slides.length === 0) idx = 0;
      const len = this.slides.length;
      idx = ((idx % len) + len) % len;

      const images = this.slides.map(s => ({ src: s.src, alt: s.alt || '' }));

      const modal = document.createElement('div');
      modal.className = 'cult-modal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-label', 'Carousel image viewer');
      modal.tabIndex = -1;

      const inner = document.createElement('div');
      inner.className = 'cult-modal__inner';

      const left = document.createElement('button');
      left.type = 'button';
      left.className = 'cult-modal__arrow cult-modal__arrow--left';
      left.setAttribute('aria-label', 'Previous slide');
      left.textContent = '‹';

      const right = document.createElement('button');
      right.type = 'button';
      right.className = 'cult-modal__arrow cult-modal__arrow--right';
      right.setAttribute('aria-label', 'Next slide');
      right.textContent = '›';

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
        b.setAttribute('aria-label', `Slide ${i + 1}`);
        b.addEventListener('click', (ev) => { ev.stopPropagation(); showSlide(i); });
        modalDots.appendChild(b);
        return b;
      });

      inner.appendChild(left);
      inner.appendChild(modalViewport);
      inner.appendChild(right);
      inner.appendChild(modalDots);
      modal.appendChild(inner);
      document.body.appendChild(modal);

      const showSlide = (newIndex) => {
        const n = modalSlides.length;
        idx = ((newIndex % n) + n) % n;
        modalSlides.forEach((s, i) => s.classList.toggle('cult-modal__slide--active', i === idx));
        modalDotButtons.forEach((d, i) => d.classList.toggle('cult-modal__dot--active', i === idx));
        this.show(idx);
      };

      left.addEventListener('click', (e) => { e.stopPropagation(); showSlide(idx - 1); });
      right.addEventListener('click', (e) => { e.stopPropagation(); showSlide(idx + 1); });

      showSlide(idx);

      const escHandler = (e) => {
        if (e.key === 'Escape') {
          e.stopPropagation();
          closeModal();
        }
      };
      const backdropClick = () => closeModal();

      modal.addEventListener('click', backdropClick);
      document.addEventListener('keydown', escHandler, true);

      modal.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); showSlide(idx - 1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); showSlide(idx + 1); }
      });

      modal.addEventListener('wheel', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.deltaY > 0) showSlide(idx + 1);
        else if (e.deltaY < 0) showSlide(idx - 1);
      }, { passive: false });

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
        document.removeEventListener('keydown', escHandler, true);
        modal.removeEventListener('click', backdropClick);
        modal.remove();
        this.modal = null;
        this.root.focus({ preventScroll: true });
      };

      this.modal = modal;
      modal.focus({ preventScroll: true });
    }
  }

  function init() {
    qsa('.cult-carousel').forEach(root => new CultCarousel(root));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

// Global media lightbox modal & Escape key handling
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('mediaModal');
  const modalImg = document.getElementById('modalImg');
  const modalVideo = document.getElementById('modalVideo');
  const closeBtn = document.querySelector('.media-modal-close');

  if (!modal || !modalImg || !modalVideo) return;

  const allMedia = Array.from(document.querySelectorAll('img:not(#modalImg), video:not(#modalVideo)'));
  const mediaElements = allMedia.filter(el => {
    if (el.closest('.resource-item a')) return false;
    if (el.closest('.cult-carousel')) return false;
    if (el.closest('.cult-modal')) return false;
    if (el.closest('#mediaModal')) return false;
    return true;
  });

  mediaElements.forEach(media => {
    if (media.classList.contains('link-icon')) return;
    if (media.closest('.menu-links, .nav-links, .hamburger-icon, .languageswitch')) return;
    if (media.closest('.btn, .project-btn')) return;
    if (media.closest('#profile, #experience, #contact, .contact-info-container, .contact-icon')) return;

    media.classList.add('zoomable');

    media.addEventListener('click', (e) => {
      e.stopPropagation();
      modal.style.display = 'flex';

      if (media.tagName === 'IMG') {
        modalImg.style.display = 'block';
        modalVideo.style.display = 'none';

        const largeSrc = media.dataset.largeSrc || media.dataset.large || media.dataset.hires || media.getAttribute('data-large-src');
        modalImg.src = largeSrc || media.src;
        modalImg.alt = media.alt || '';
      } else if (media.tagName === 'VIDEO') {
        const currentTime = Number.isFinite(media.currentTime) ? media.currentTime : 0;
        const wasPlaying = !media.paused;
        const playbackRate = media.playbackRate || 1;

        modalImg.style.display = 'none';
        modalVideo.style.display = 'block';

        const sourceEl = media.querySelector('source');
        const src = sourceEl ? sourceEl.src : media.currentSrc || media.src || '';

        if (!modalVideo.src || modalVideo.src !== src) {
          try { modalVideo.pause(); } catch (err) { }
          modalVideo.removeAttribute('src');
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
            try { modalVideo.pause(); } catch (err) { }
          }
        };

        if (modalVideo.readyState >= 1 && isFinite(modalVideo.duration)) {
          applySync();
        } else {
          modalVideo.addEventListener('loadedmetadata', applySync, { once: true });
        }

        try { modalVideo.currentTime = currentTime; } catch (err) { }
      }
    });
  });

  const closeModal = () => {
    modal.style.display = 'none';
    modalImg.src = '';
    try { modalVideo.pause(); } catch (e) { }
    try { modalVideo.currentTime = 0; } catch (e) { }
    modalVideo.removeAttribute('src');
    modalVideo.load();
  };

  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    closeModal();
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  modalImg.addEventListener('click', (e) => { e.stopPropagation(); closeModal(); });
  modalVideo.addEventListener('click', (e) => { e.stopPropagation(); closeModal(); });

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;

    if (modal.style.display === 'flex') {
      e.stopPropagation();
      closeModal();
      return;
    }

    if (document.querySelector('.flip-card.flipped') && !document.querySelector('.cult-modal')) {
      if (history.state && history.state.cardOpen) {
        history.back();
      } else {
        closeAllCards();
      }
    }
  });
});

// Scroll passthrough over fixed controls
document.querySelectorAll('.toggleLanguage, .exit-btn').forEach(button => {
  let startY = 0;
  let activeScrollArea = null;

  button.addEventListener('touchstart', (event) => {
    startY = event.touches[0].clientY;
    activeScrollArea = document.querySelector('.flip-card.flipped .flip-card-back');
  }, { passive: true });

  button.addEventListener('touchmove', (event) => {
    event.preventDefault();

    const currentY = event.touches[0].clientY;
    const deltaY = startY - currentY;

    if (activeScrollArea) {
      activeScrollArea.scrollTop += deltaY;
    } else {
      document.documentElement.scrollTop += deltaY;
      document.body.scrollTop += deltaY;
    }

    startY = currentY;
  }, { passive: false });

  button.addEventListener('mouseenter', () => {
    activeScrollArea = document.querySelector('.flip-card.flipped .flip-card-back');
  });

  button.addEventListener('wheel', (event) => {
    event.preventDefault();

    if (activeScrollArea) {
      activeScrollArea.scrollTop += event.deltaY;
    } else {
      document.documentElement.scrollTop += event.deltaY;
      document.body.scrollTop += event.deltaY;
    }
  }, { passive: false });
});

// Resources page tag filtering
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!filterBtns.length) return;

  const allResourceItems = document.querySelectorAll('.resource-list-section .resource-item');
  const resourceSections = document.querySelectorAll('.resource-list-section');
  let selectedFilter = null;

  const updateResources = () => {
    filterBtns.forEach(button => {
      const filterValue = button.getAttribute('data-filter');
      const isActive = filterValue === 'All' ? selectedFilter === null : selectedFilter === filterValue;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    allResourceItems.forEach(item => {
      const tagElements = item.querySelectorAll('.tag');
      const tags = tagElements.length > 0
        ? Array.from(tagElements, tag => tag.textContent.trim())
        : (item.getAttribute('data-tags') || '').split(',').map(tag => tag.trim());
      const isVisible = selectedFilter === null || tags.includes(selectedFilter);
      item.classList.toggle('hidden', !isVisible);
    });

    resourceSections.forEach(section => {
      section.classList.toggle('hidden', !section.querySelector('.resource-item:not(.hidden)'));
    });
  };

  filterBtns.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');
      if (filterValue === 'All' || selectedFilter === filterValue) {
        selectedFilter = null;
      } else {
        selectedFilter = filterValue;
      }
      updateResources();
    });
  });

  updateResources();
});

// Bot-Protected Contact Form (XOR-obfuscated destination + honeypot + human interaction guard)
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('contactFormStatus');
  const submitBtn = document.getElementById('contactSubmitBtn');

  if (!contactForm) return;

  // FormSubmit token (replaces raw email address)
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeaazejp';
  // XOR-encoded char codes (key = 21) for mailto fallback so the address never appears in plain text
  const encodedBytes = [114, 122, 125, 113, 112, 59, 121, 116, 103, 102, 85, 122, 96, 97, 121, 122, 122, 126, 59, 118, 122, 120];
  const decodeRecipient = () => String.fromCharCode(...encodedBytes.map(b => b ^ 21));

  let hasHumanInteraction = false;
  let firstInteractionTime = 0;

  const markInteraction = () => {
    if (!hasHumanInteraction) {
      hasHumanInteraction = true;
      firstInteractionTime = performance.now();
    }
  };

  contactForm.addEventListener('focusin', markInteraction, { once: true });
  contactForm.addEventListener('pointerdown', markInteraction, { once: true });
  contactForm.addEventListener('keydown', markInteraction, { once: true });

  const isJapanese = () =>
    document.documentElement.lang === 'ja' || localStorage.getItem('language') === 'active';

  const renderStatus = () => {
    if (!formStatus) return;
    const enText = formStatus.dataset.statusEn || '';
    const jaText = formStatus.dataset.statusJa || '';
    formStatus.textContent = isJapanese() ? jaText : enText;
  };

  const setStatus = (enText, jaText, type = 'info') => {
    if (!formStatus) return;
    formStatus.dataset.statusEn = enText;
    formStatus.dataset.statusJa = jaText;
    formStatus.dataset.statusType = type;
    renderStatus();
  };

  const langObserver = new MutationObserver(renderStatus);
  langObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang']
  });

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    // Block bots that fill the hidden honeypot or submit without real human interaction
    if (formData.get('_gotcha') || !hasHumanInteraction || (performance.now() - firstInteractionTime) < 1200) {
      return;
    }

    if (submitBtn) submitBtn.disabled = true;
    setStatus('Sending message...', '送信中...', 'info');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error((errorData && (errorData.error || (errorData.errors && errorData.errors.map(e => e.message).join(', ')))) || 'Submission failed');
      }

      contactForm.reset();
      setStatus(
        'Thank you! Your message has been sent successfully.',
        'ありがとうございます！メッセージが正常に送信されました。',
        'success'
      );
    } catch (err) {
      console.error('Contact form submission error:', err);
      const recipient = decodeRecipient();
      const subject = encodeURIComponent(String(formData.get('_subject') || 'Portfolio Contact'));
      const body = encodeURIComponent(
        `Name: ${formData.get('name') || ''}\nEmail: ${formData.get('email') || ''}\n\n${formData.get('message') || ''}`
      );
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
      setStatus(
        'Opened your email client to send the message directly.',
        'メールクライアントを開きました。直接送信してください。',
        'info'
      );
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
});

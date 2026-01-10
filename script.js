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
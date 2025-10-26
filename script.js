function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function lockScrollAtCurrentPosition() {
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
    // Instantly jump to the old position without animation
    requestAnimationFrame(function () {
      window.scrollTo({ top: -parseInt(top), left: 0, behavior: 'instant' });
    });
  }
}

// Funktion bleibt fast gleich (siehe Schritt 2 für WebM-Optimierung)
function lazyLoadCardMedia(card) {
  if (!card || card.dataset.mediaLoaded === 'true') return;

  const imgs = card.querySelectorAll('img[data-video-mp4], img[data-gif-src]');
  imgs.forEach(img => {
    const mp4 = img.getAttribute('data-video-mp4');
    const webm = img.getAttribute('data-video-webm'); // NEU: WebM-Prüfung
    const poster = img.getAttribute('data-poster') || img.getAttribute('src') || '';

    if (mp4 || webm) { // Geändert: Prüft auf MP4 oder WebM
      const video = document.createElement('video');
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = 'auto';
      if (poster) video.poster = poster;

      video.className = img.className || '';
      video.style.cssText = img.style.cssText || '';

      // Decide order based on browser capability: prefer WebM if supported
      const canPlayWebm = typeof video.canPlayType === 'function' && !!(video.canPlayType('video/webm; codecs="vp8, vorbis"') || video.canPlayType('video/webm'));
      if (webm && mp4) {
        if (canPlayWebm) {
          const sourceWebm = document.createElement('source');
          sourceWebm.src = webm;
          sourceWebm.type = 'video/webm';
          video.appendChild(sourceWebm);

          const sourceMp4 = document.createElement('source');
          sourceMp4.src = mp4;
          sourceMp4.type = 'video/mp4';
          video.appendChild(sourceMp4);
        } else {
          const sourceMp4 = document.createElement('source');
          sourceMp4.src = mp4;
          sourceMp4.type = 'video/mp4';
          video.appendChild(sourceMp4);

          const sourceWebm = document.createElement('source');
          sourceWebm.src = webm;
          sourceWebm.type = 'video/webm';
          video.appendChild(sourceWebm);
        }
      } else if (webm) {
        const sourceWebm = document.createElement('source');
        sourceWebm.src = webm;
        sourceWebm.type = 'video/webm';
        video.appendChild(sourceWebm);
      } else if (mp4) {
        const sourceMp4 = document.createElement('source');
        sourceMp4.src = mp4;
        sourceMp4.type = 'video/mp4';
        video.appendChild(sourceMp4);
      }

      img.replaceWith(video);

      try { video.load(); } catch (e) { /* ignore */ }
      video.addEventListener('canplaythrough', () => {
        video.play().catch(() => { /* autoplay blocked */ });
      }, { once: true });
    } else if (img.getAttribute('data-gif-src')) {
      // Fallback für GIF bleibt gleich
      img.src = img.getAttribute('data-gif-src');
      img.removeAttribute('data-gif-src');
    }
  });

  card.dataset.mediaLoaded = 'true';
}

// *** NEUER TEIL: IntersectionObserver ***
// Erstellt einen Observer, der die Ladefunktion aufruft
const mediaObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const card = entry.target;
      lazyLoadCardMedia(card);
      // Hör auf, diese Karte zu beobachten, sobald sie geladen wurde
      observer.unobserve(card);
    }
  });
}, {
  // Beginne mit dem Laden, wenn die Karte 200px VOR dem Viewport ist
  rootMargin: '200px 0px 200px 0px'
});

// Wende den Observer auf alle Flip-Karten an
document.querySelectorAll('.flip-card').forEach(card => {
  mediaObserver.observe(card);
});

// *** DEIN ANGEPASSTER TEIL: Event Listeners (jetzt als Fallback) ***
// Diese Listener sind jetzt nur noch ein Fallback, falls der Observer
// noch nicht ausgelöst hat, wenn der User klickt.
document.querySelectorAll('.project-btn').forEach(btn => {
  if (btn.id === 'allGamesBtn') return;

  const card = btn.closest('.flip-card');
  if (!card) return; // Sicherheitshalber

  btn.addEventListener('mousedown', function () {
    // Startet Ladevorgang (nur falls noch nicht geschehen)
    lazyLoadCardMedia(card);
    window._lastScrollY = window.scrollY;
    window._cardWasFlipped = true;
  });

  btn.addEventListener('click', function () {
    // Stellt sicher, dass geladen wurde (nur falls noch nicht geschehen)
    lazyLoadCardMedia(card);
    setTimeout(lockScrollAtCurrentPosition, 10);
  });
});

// Also listen for exit buttons or any element that unflips the card
document.querySelectorAll('.exit-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    unlockScrollFromLockedPosition();
    window._cardWasFlipped = false;
    var card = btn.closest('.flip-card');
    if (card) card.classList.remove('flipped');
  });
});
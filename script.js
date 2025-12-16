function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function lockScrollAtCurrentPosition() {
  // Verhindert doppeltes Locking
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

  const imgs = card.querySelectorAll('img[data-video-mp4], img[data-gif-src]');
  imgs.forEach(img => {
    const mp4 = img.getAttribute('data-video-mp4');
    const webm = img.getAttribute('data-video-webm');
    const poster = img.getAttribute('data-poster') || img.getAttribute('src') || '';

    if (mp4 || webm) {
      const video = document.createElement('video');
      video.autoplay = true;
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
      video.addEventListener('canplaythrough', () => { video.play().catch(() => { }); }, { once: true });
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

// Observer
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


// *** NAVIGATIONS-LOGIK (VOR & ZURÜCK) ***

function closeAllCards() {
  document.querySelectorAll('.flip-card.flipped').forEach(card => {
    card.classList.remove('flipped');
  });
  unlockScrollFromLockedPosition();
  window._cardWasFlipped = false;
}

function openCardByIndex(index) {
  const cards = document.querySelectorAll('.flip-card');
  const card = cards[index];

  if (card) {
    // Falls noch andere offen sind, erst schließen (Sicherheitshalber)
    document.querySelectorAll('.flip-card.flipped').forEach(c => {
      if (c !== card) c.classList.remove('flipped');
    });

    lazyLoadCardMedia(card);
    card.classList.add('flipped');
    window._cardWasFlipped = true;

    // Kurze Verzögerung für Scroll-Lock
    setTimeout(lockScrollAtCurrentPosition, 10);
  }
}

// Browser Navigation Listener (Back & Forward)
window.addEventListener('popstate', (event) => {
  // Fall 1: Wir haben einen State mit Index -> Karte öffnen (Vorwärts Button)
  if (event.state && event.state.cardOpen && event.state.cardIndex !== undefined) {
    openCardByIndex(event.state.cardIndex);
  }
  // Fall 2: Kein State oder cardOpen ist false -> Alles schließen (Zurück Button)
  else {
    closeAllCards();
  }
});

// Setup Project Buttons (Öffnen)
document.querySelectorAll('.project-btn').forEach(btn => {
  if (btn.id === 'allGamesBtn') return;

  const card = btn.closest('.flip-card');
  if (!card) return;

  btn.addEventListener('mousedown', function () {
    lazyLoadCardMedia(card);
    window._lastScrollY = window.scrollY;
  });

  btn.addEventListener('click', function (e) {
    // Hier KEIN preventDefault(), damit Links/Buttons normal reagieren,
    // es sei denn, es ist ein reiner JS-Button.

    // Ermittle den Index der aktuellen Karte in der Liste aller Karten
    const allCards = Array.from(document.querySelectorAll('.flip-card'));
    const cardIndex = allCards.indexOf(card);

    lazyLoadCardMedia(card);

    // Neuen History-Eintrag mit der Karten-ID (Index) erstellen
    history.pushState({ cardOpen: true, cardIndex: cardIndex }, "", "#details");

    card.classList.add('flipped');
    window._cardWasFlipped = true;
    setTimeout(lockScrollAtCurrentPosition, 10);
  });
});

// Setup Exit Buttons (Schließen via Zurück-Funktion)
document.querySelectorAll('.exit-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();

    // Wenn History State vorhanden, nutze Browser-Zurück
    if (history.state && history.state.cardOpen) {
      history.back();
    } else {
      // Fallback (z.B. bei direktem Aufruf oder Reload)
      closeAllCards();
    }
  });
});

// Warten, bis das Dokument geladen ist
document.addEventListener("DOMContentLoaded", function () {

  // Wähle alle Links in der Navigation (Desktop & Mobile), die mit # beginnen
  const navLinks = document.querySelectorAll('.menu-links a, .nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      // 1. Verhindert, dass #... in die URL geschrieben wird
      e.preventDefault();

      // 2. Ziel-ID aus dem href-Attribut holen (z.B. "#about")
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      // 3. Manuell weich hinscrollen
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      // 4. Prüfen, ob das Hamburger-Menü offen ist und ggf. schließen
      // (Falls dein inline 'onclick' mal nicht greift oder du es entfernst)
      const menu = document.querySelector(".menu-links");
      const icon = document.querySelector(".hamburger-icon");

      // Falls das Menü gerade offen ist -> schließen
      if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        icon.classList.remove("open");
      }
    });
  });

});
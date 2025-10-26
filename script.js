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

// Replace GIF-only loader with MP4-capable loader (falls back to GIF)
function lazyLoadCardMedia(card) {
  if (!card || card.dataset.mediaLoaded === 'true') return;

  const imgs = card.querySelectorAll('img[data-video-mp4], img[data-gif-src]');
  imgs.forEach(img => {
    const mp4 = img.getAttribute('data-video-mp4');
    const poster = img.getAttribute('data-poster') || img.getAttribute('src') || '';

    if (mp4) {
      // create a <video> element to replace the <img>
      const video = document.createElement('video');
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = 'auto';
      if (poster) video.poster = poster;

      // preserve classes/styles so layout doesn't break
      video.className = img.className || '';
      video.style.cssText = img.style.cssText || '';

      const source = document.createElement('source');
      source.src = mp4;
      source.type = 'video/mp4';
      video.appendChild(source);

      // Replace the image with the video element
      img.replaceWith(video);

      // start loading/playing as soon as possible
      try { video.load(); } catch (e) { /* ignore */ }
      video.addEventListener('canplaythrough', () => {
        video.play().catch(() => { /* autoplay blocked */ });
      }, { once: true });
    } else if (img.getAttribute('data-gif-src')) {
      // fallback: load GIF only when no MP4 provided
      img.src = img.getAttribute('data-gif-src');
      img.removeAttribute('data-gif-src');
    }
  });

  card.dataset.mediaLoaded = 'true';
}
// ...existing code...
// { changed code }
// Update listeners to use new loader
document.querySelectorAll('.project-btn').forEach(btn => {
  if (btn.id === 'allGamesBtn') return;
  btn.addEventListener('mousedown', function () {
    // start loading immediately on press
    const card = btn.closest('.flip-card');
    lazyLoadCardMedia(card);

    window._lastScrollY = window.scrollY;
    window._cardWasFlipped = true;
  });
  btn.addEventListener('click', function () {
    // ensure media are loaded (no-op if already loaded)
    const card = btn.closest('.flip-card');
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
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

// Lazy-load GIFs on the back of a flip-card (first time only)
function lazyLoadCardGifs(card) {
  if (!card || card.dataset.gifsLoaded === 'true') return;
  const gifImgs = card.querySelectorAll('img[data-gif-src]');
  gifImgs.forEach(img => {
    // transfer data-gif-src -> src to start loading the GIF
    img.src = img.getAttribute('data-gif-src');
    img.removeAttribute('data-gif-src');
  });
  card.dataset.gifsLoaded = 'true';
}

// Listen only for project detail buttons (prevents matching other .btn.btn-color-2)
document.querySelectorAll('.project-btn').forEach(btn => {
  if (btn.id === 'allGamesBtn') return;
  btn.addEventListener('mousedown', function () {
    // start loading immediately on press
    const card = btn.closest('.flip-card');
    lazyLoadCardGifs(card);

    window._lastScrollY = window.scrollY;
    window._cardWasFlipped = true;
  });
  btn.addEventListener('click', function () {
    // ensure gifs are loaded (no-op if already loaded)
    const card = btn.closest('.flip-card');
    lazyLoadCardGifs(card);

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
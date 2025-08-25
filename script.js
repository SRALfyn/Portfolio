function toggleMenu(){
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
    requestAnimationFrame(function() {
      window.scrollTo({top: -parseInt(top), left: 0, behavior: 'instant'});
    });
  }
}

// Listen for flip toggles
document.querySelectorAll('.btn.btn-color-2').forEach(btn => {
  btn.addEventListener('mousedown', function () {
    window._lastScrollY = window.scrollY;
    window._cardWasFlipped = true;
  });
  btn.addEventListener('click', function () {
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
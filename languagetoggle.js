const languageToggle = document.getElementById('language-switch');
const originalMarkup = new Map();
const measuredElements = new WeakSet();
const japaneseDisclaimer = '※注記：この日本語の翻訳はサイトを読みやすくするためにツールを使用して作成されたものであり、私の現在の実際の日本語能力を反映するものではありません。';
const englishDisclaimer = '*Note: The Japanese translation on this site was generated using tools to improve readability and does not reflect my actual current proficiency.';
const dictionaryUrl = new URL('language.json', document.currentScript.src);

let translationPromise = null;

function getTranslationData() {
  if (!translationPromise) {
    translationPromise = fetch(dictionaryUrl).then(response => {
      if (!response.ok) throw new Error(`Unable to load ${dictionaryUrl}`);
      return response.json();
    });
  }
  return translationPromise;
}

function resolveSelector(key) {
  return (key.startsWith('#') || key.startsWith('.') || key.startsWith('['))
    ? key
    : `[data-i18n="${key}"]`;
}

function collectTranslatableElements(dictionary) {
  const keys = [
    ...Object.keys(dictionary.text || {}),
    ...Object.keys(dictionary.html || {})
  ];

  keys.forEach(key => {
    const selector = resolveSelector(key);
    document.querySelectorAll(selector).forEach(element => {
      if (!originalMarkup.has(element)) {
        originalMarkup.set(element, element.innerHTML);
      }
    });
  });
}

function writeJapaneseDom(dictionary) {
  Object.entries(dictionary.text || {}).forEach(([key, value]) => {
    const selector = resolveSelector(key);
    document.querySelectorAll(selector).forEach((element, index) => {
      element.textContent = Array.isArray(value) ? value[index] || '' : value;
    });
  });

  Object.entries(dictionary.html || {}).forEach(([key, value]) => {
    const selector = resolveSelector(key);
    document.querySelectorAll(selector).forEach((element, index) => {
      element.innerHTML = Array.isArray(value) ? value[index] || '' : value;
    });
  });
}

function writeEnglishDom() {
  originalMarkup.forEach((markup, element) => {
    element.innerHTML = markup;
  });
}

function lockTranslatableDimensions(dictionary) {
  collectTranslatableElements(dictionary);

  const isJapaneseActive = localStorage.getItem('language') === 'active';
  const activeScrollBack = document.querySelector('.flip-card.flipped .flip-card-back');
  const savedCardScroll = activeScrollBack ? activeScrollBack.scrollTop : 0;
  const savedWindowScroll = window.scrollY;

  const targets = [];
  originalMarkup.forEach((_, el) => {
    if (measuredElements.has(el)) return;
    if (el.closest('.flip-card:not(.flipped) .flip-card-back')) return;
    if (el.getClientRects().length === 0) return;
    targets.push(el);
  });

  if (!targets.length) return;

  targets.forEach(el => {
    el.style.minHeight = '';
    el.style.minWidth = '';
  });

  const firstPass = targets.map(el => {
    const rect = el.getBoundingClientRect();
    const display = window.getComputedStyle(el).display;
    return { el, widthA: rect.width, heightA: rect.height, display };
  });

  if (isJapaneseActive) {
    writeEnglishDom();
  } else {
    writeJapaneseDom(dictionary);
  }

  const secondPass = firstPass.map(item => {
    const rect = item.el.getBoundingClientRect();
    return {
      ...item,
      widthB: rect.width,
      heightB: rect.height
    };
  });

  if (isJapaneseActive) {
    writeJapaneseDom(dictionary);
  } else {
    writeEnglishDom();
  }

  secondPass.forEach(({ el, widthA, heightA, widthB, heightB, display }) => {
    const maxW = Math.ceil(Math.max(widthA, widthB));
    const maxH = Math.ceil(Math.max(heightA, heightB));

    if (el.closest('.nav-links')) {
      el.style.display = 'inline-block';
      el.style.textAlign = 'center';
      if (maxW > 0) el.style.minWidth = `${maxW}px`;
    } else if (display !== 'inline') {
      if (maxH > 0) el.style.minHeight = `${maxH}px`;
    }

    measuredElements.add(el);
  });

  if (activeScrollBack) {
    activeScrollBack.scrollTop = savedCardScroll;
  } else if (document.body.style.position !== 'fixed') {
    window.scrollTo({ top: savedWindowScroll, left: 0, behavior: 'instant' });
  }
}

function applyDictionary(dictionary) {
  collectTranslatableElements(dictionary);

  const activeScrollBack = document.querySelector('.flip-card.flipped .flip-card-back');
  const savedCardScroll = activeScrollBack ? activeScrollBack.scrollTop : 0;
  const savedWindowScroll = window.scrollY;

  writeJapaneseDom(dictionary);
  localStorage.setItem('language', 'active');
  lockTranslatableDimensions(dictionary);

  if (activeScrollBack) {
    activeScrollBack.scrollTop = savedCardScroll;
  } else if (document.body.style.position !== 'fixed') {
    window.scrollTo({ top: savedWindowScroll, left: 0, behavior: 'instant' });
  }

  document.documentElement.lang = 'ja';
  languageToggle?.setAttribute('aria-pressed', 'true');
}

function restoreEnglish() {
  const activeScrollBack = document.querySelector('.flip-card.flipped .flip-card-back');
  const savedCardScroll = activeScrollBack ? activeScrollBack.scrollTop : 0;
  const savedWindowScroll = window.scrollY;

  writeEnglishDom();

  const disclaimer = document.getElementById('language-disclaimer');
  if (disclaimer) disclaimer.textContent = englishDisclaimer;

  document.documentElement.lang = 'en';
  languageToggle?.setAttribute('aria-pressed', 'false');
  localStorage.setItem('language', 'inactive');

  if (activeScrollBack) {
    activeScrollBack.scrollTop = savedCardScroll;
  } else if (document.body.style.position !== 'fixed') {
    window.scrollTo({ top: savedWindowScroll, left: 0, behavior: 'instant' });
  }
}

function showDisclaimer() {
  const languageButton = document.getElementById('language-switch');
  const existingDisclaimer = document.getElementById('language-disclaimer');
  if (!languageButton) return;

  if (existingDisclaimer) {
    existingDisclaimer.textContent = japaneseDisclaimer;
    return;
  }

  const disclaimer = document.createElement('div');
  disclaimer.id = 'language-disclaimer';
  disclaimer.className = 'language-disclaimer';
  disclaimer.setAttribute('role', 'status');
  disclaimer.setAttribute('aria-live', 'polite');
  disclaimer.textContent = japaneseDisclaimer;
  document.body.appendChild(disclaimer);

  const rect = languageButton.getBoundingClientRect();
  const spaceOnRight = window.innerWidth - rect.right - 25;
  disclaimer.style.left = `${rect.right + 15}px`;
  disclaimer.style.maxWidth = `${Math.min(280, Math.max(60, spaceOnRight))}px`;
  disclaimer.style.top = `${rect.top + rect.height / 2 - disclaimer.offsetHeight / 2}px`;

  requestAnimationFrame(() => {
    disclaimer.classList.add('visible');
  });

  setTimeout(() => {
    disclaimer.classList.remove('visible');
    setTimeout(() => disclaimer.remove(), 400);
  }, 10000);
}

function animateLanguageFlower() {
  if (!languageToggle) return;

  languageToggle.classList.remove('respawn-emoji');
  void languageToggle.offsetWidth;
  languageToggle.classList.add('respawn-emoji');

  const rect = languageToggle.getBoundingClientRect();
  const flower = document.createElement('span');
  flower.className = 'falling-emoji';
  flower.setAttribute('aria-hidden', 'true');
  flower.textContent = '🌸';
  flower.style.left = `${rect.right - 8}px`;
  flower.style.top = `${rect.top - 4}px`;
  flower.style.setProperty('--r-start', `${Math.random() * 30 - 15}deg`);
  flower.style.setProperty('--r-end', `${Math.random() * 180 - 90}deg`);
  flower.style.setProperty('--s-start', `${0.9 + Math.random() * 0.2}`);
  flower.style.setProperty('--s-end', `${0.7 + Math.random() * 0.2}`);
  flower.style.setProperty('--tx-end', `${Math.random() * 80 - 40}px`);
  document.body.appendChild(flower);
  flower.addEventListener('animationend', () => flower.remove(), { once: true });
}

async function enableLanguage() {
  try {
    const dictionary = await getTranslationData();
    applyDictionary(dictionary);
    const disclaimer = document.getElementById('language-disclaimer');
    if (disclaimer) {
      disclaimer.textContent = japaneseDisclaimer;
    } else if (!sessionStorage.getItem('disclaimerShown')) {
      showDisclaimer();
      sessionStorage.setItem('disclaimerShown', 'true');
    }
  } catch (err) {
    console.error('Failed to load language dictionary:', err);
  }
}

window.syncLanguageLayout = async () => {
  try {
    const dictionary = await getTranslationData();
    lockTranslatableDimensions(dictionary);
  } catch (err) { }
};

let lastViewportWidth = window.innerWidth;
window.addEventListener('resize', () => {
  if (window.innerWidth === lastViewportWidth) return;
  lastViewportWidth = window.innerWidth;
  originalMarkup.forEach((_, el) => {
    measuredElements.delete(el);
    el.style.minHeight = '';
    el.style.minWidth = '';
  });
  window.syncLanguageLayout();
});

if (localStorage.getItem('language') === 'active') {
  enableLanguage();
} else {
  window.addEventListener('load', () => {
    window.syncLanguageLayout();
  }, { once: true });
}

languageToggle?.addEventListener('click', async () => {
  animateLanguageFlower();
  if (localStorage.getItem('language') === 'active') {
    restoreEnglish();
  } else {
    await enableLanguage();
  }
});

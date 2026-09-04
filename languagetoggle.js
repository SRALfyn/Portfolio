const languageToggle = document.getElementById('language-switch');
const originalMarkup = new Map();
const japaneseDisclaimer = '※注記：この日本語の翻訳はサイトを読みやすくするためにツールを使用して作成されたものであり、私の現在の実際の日本語能力を反映するものではありません。';
const englishDisclaimer = '*Note: The Japanese translation on this site was generated using tools to improve readability and does not reflect my actual current proficiency.';
const dictionaryUrl = new URL('language.json', document.currentScript.src);
const translationData = fetch(dictionaryUrl).then(response => {
    if (!response.ok) throw new Error(`Unable to load ${dictionaryUrl}`);
    return response.json();
});

function collectTranslatableElements(dictionary) {
    const selectors = [...Object.keys(dictionary.text || {}), ...Object.keys(dictionary.html || {})];
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            if (!originalMarkup.has(element)) originalMarkup.set(element, element.innerHTML);
        });
    });
}

function applyDictionary(dictionary) {
    collectTranslatableElements(dictionary);

    Object.entries(dictionary.text || {}).forEach(([selector, value]) => {
        document.querySelectorAll(selector).forEach((element, index) => {
            element.textContent = Array.isArray(value) ? value[index] || '' : value;
        });
    });

    Object.entries(dictionary.html || {}).forEach(([selector, value]) => {
        document.querySelectorAll(selector).forEach((element, index) => {
            element.innerHTML = Array.isArray(value) ? value[index] || '' : value;
        });
    });

    localStorage.setItem('language', 'active');
}

function restoreEnglish() {
    originalMarkup.forEach((markup, element) => {
        element.innerHTML = markup;
    });
    const disclaimer = document.getElementById('language-disclaimer');
    if (disclaimer) disclaimer.textContent = englishDisclaimer;
    localStorage.setItem('language', 'inactive');
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
    disclaimer.textContent = japaneseDisclaimer;
    disclaimer.style.cssText = 'position:fixed;background:rgba(0,0,0,.8);color:#fff;padding:8px 12px;border-radius:4px;font-size:12px;line-height:1.4;white-space:normal;overflow-wrap:break-word;pointer-events:none;z-index:1000;opacity:0;transition:opacity .4s ease;';
    document.body.appendChild(disclaimer);

    const rect = languageButton.getBoundingClientRect();
    const spaceOnRight = window.innerWidth - rect.right - 25;
    disclaimer.style.left = `${rect.right + 15}px`;
    disclaimer.style.maxWidth = `${Math.min(280, Math.max(60, spaceOnRight))}px`;
    disclaimer.style.top = `${rect.top + rect.height / 2 - disclaimer.offsetHeight / 2}px`;
    requestAnimationFrame(() => { disclaimer.style.opacity = '1'; });
    setTimeout(() => {
        disclaimer.style.opacity = '0';
        setTimeout(() => disclaimer.remove(), 400);
    }, 10000);
}

async function enableLanguage() {
    const dictionary = await translationData;
    applyDictionary(dictionary);
    const disclaimer = document.getElementById('language-disclaimer');
    if (disclaimer) {
        disclaimer.textContent = japaneseDisclaimer;
    } else if (!sessionStorage.getItem('disclaimerShown')) {
        showDisclaimer();
        sessionStorage.setItem('disclaimerShown', 'true');
    }
}

if (localStorage.getItem('language') === 'active') enableLanguage();

languageToggle?.addEventListener('click', async () => {
    if (localStorage.getItem('language') === 'active') {
        restoreEnglish();
    } else {
        await enableLanguage();
    }
});

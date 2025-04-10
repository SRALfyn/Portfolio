let language = localStorage.getItem('language')
const languageToggle = document.getElementById('language-switch');


let aboutt = document.getElementById('aboutT');
let experienceE = document.getElementById('experienceE');
let projectsS = document.getElementById('projectsS');
let contactT = document.getElementById('contactT');

const enableLanguage = () => {
    localStorage.setItem('language', 'active')
    aboutt.innerText = "自己紹介"
    experienceE.innerText = "経験 "
    projectsS.innerText = "プロジェクト "
    contactT.innerText = "お問い合わせ"
}

const disableLanguage = () => {
    localStorage.setItem('language', null)
    aboutt.innerText = "About"
    experienceE.innerText = "Experience"
    projectsS.innerText = "Projects"
    contactT.innerText = "Contact"
}

if(language === "active") enableLanguage()

languageToggle.addEventListener("click", () =>{
    language = localStorage.getItem('language')
    language !== "active" ? enableLanguage() : disableLanguage()
    console.log(language)
})
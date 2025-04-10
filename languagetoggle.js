let language = localStorage.getItem('language')
const languageToggle = document.getElementById('language-switch');


let aboutt = document.getElementById('aboutT');
let experienceE = document.getElementById('experienceE');
let projectsS = document.getElementById('projectsS');
let contactT = document.getElementById('contactT');
let abouttt = document.getElementById('aboutTT');
let experienceEE = document.getElementById('experienceEE');
let projectsSS = document.getElementById('projectsSS');
let contactTT = document.getElementById('contactTT');
let Hello = document.getElementById('Hello');
let Name = document.getElementById('Name');
let Developer = document.getElementById('Developer');
let GetTo = document.getElementById('GetTo');
let AboutMe = document.getElementById('AboutMe');
let experienceEEE = document.getElementById('experienceEEE');
let Inall = document.getElementById('Inall');
let Started = document.getElementById('Started');
let Outline = document.getElementById('Outline');
let years = document.getElementById('years');
let bavaria = document.getElementById('Bavaria');
let Longtext = document.getElementById('Longtext');

const enableLanguage = () => {
    localStorage.setItem('language', 'active')
    aboutt.innerText = "自己紹介"
    experienceE.innerText = "経験"
    projectsS.innerText = "プロジェクト"
    contactT.innerText = "お問い合わせ"
    abouttt.innerText = "自己紹介"
    experienceEE.innerText = "経験"
    projectsSS.innerText = "プロジェクト"
    contactTT.innerText = "お問い合わせ"
    Hello.innerText = "こんにちは、"
    Name.innerText = "ラーズ・ゴーデです"
    Developer.innerText = "ゲーム開発者"
    GetTo.innerText = "もっと知る"
    AboutMe.innerText = "私について"
    experienceEEE.innerText = "経験"
    Inall.innerText = "インディー開発のあらゆる分野で"
    Started.innerText = "17歳で開発を始めました"
    Outline.innerText = "概要"
    years.innerText = "20歳"
    bavaria.innerText = "ドイツ・バイエルン"
    Longtext.innerText = "私はアンリアルエンジンとゲームデザインを専門とするゲーム開発の学生で、魅力的なゲーム体験を作ることに情熱を持っています。アンリアルエンジ の強力なツールを積極的に活用し、開発中のゲームに命を吹き込んでいます。学びを続けながら、複雑なシステムの統合やデザインスキルの向上にも力を入れており、楽しく、記憶に残るゲームを作りたいと考えています。この分野で成長し、毎回のプロジェクトで可能性の限界に挑戦しながら、常に学び、進化していきたいと思っています。"
}

const disableLanguage = () => {
    localStorage.setItem('language', null)
    aboutt.innerText = "About"
    experienceE.innerText = "Experience"
    projectsS.innerText = "Projects"
    contactT.innerText = "Contact"
    abouttt.innerText = "About"
    experienceEE.innerText = "Experience"
    projectsSS.innerText = "Projects"
    contactTT.innerText = "Contact"
    Hello.innerText = "Hello, I'm"
    Name.innerText = "Lars Gohde"
    Developer.innerText = "Game Developer"
    GetTo.innerText = "Get To Know More"
    AboutMe.innerText = "About Me"
    experienceEEE.innerText = "Experience "
    Inall.innerText = "In all Areas of indie Development"
    Started.innerText = "Started Developing at 17"
    Outline.innerText = "Outline"
    years.innerText = "20 years old"
    bavaria.innerText = "Bavaria, Germany"
    Longtext.innerText = "I’m a Game Development student specializing in Unreal Engine and Game Design, passionate about creating engaging gameplay experiences. I actively explore Unreal Engine’s powerful tools to bring the games I work on to life. As I continue my studies, I’m eager to learn more about integrating complex systems and refining my design skills to create games that are both fun and memorable. I’m excited to grow in this field, pushing the limits of what’s possible with each project, while learning and improving every step of the way."
}

if(language === "active") enableLanguage()

languageToggle.addEventListener("click", () =>{
    language = localStorage.getItem('language')
    language !== "active" ? enableLanguage() : disableLanguage()
    console.log(language)
})
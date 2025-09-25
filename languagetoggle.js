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
let Explore = document.getElementById('Explore');
let Achivements = document.getElementById('Achivements');
let A1 = document.getElementById('A1');
let B1 = document.getElementById('B1');
let C1 = document.getElementById('C1');
let D1 = document.getElementById('D1');
let E1 = document.getElementById('E1');
let E2 = document.getElementById('E2');
let F1 = document.getElementById('F1');
let F2 = document.getElementById('F2');
let Browse = document.getElementById('Browse');
let Projects = document.getElementById('Projects');
let Contact = document.getElementById('Contact');
let about3 = document.getElementById('about3');
let experience3 = document.getElementById('experience3');
let projects3 = document.getElementById('projects3');
let contact3 = document.getElementById('contact3');
let EE1 = document.getElementById('EE1');
let EE2 = document.getElementById('EE2');
let Support = document.getElementById('Support');
let Link = document.getElementById('Link');
let AE1 = document.getElementById('AE1');
let AE2 = document.getElementById('AE2');
let NominatedA = document.getElementById('NominatedA');
let LinkAward = document.getElementById('LinkAward');
let WinnerG = document.getElementById('WinnerG');

const enableLanguage = () => {
    if (WinnerG) WinnerG.innerText = "複数のゲームジャムと大学展示会で受賞";
    if (NominatedA) NominatedA.innerText = "ベスト学生ゲーム賞2025ノミネート";
    if (LinkAward) LinkAward.innerText = "ノミネート一覧を見る";
    // NEO TOKYO card back - multiple sections
    const neoProblemTitles = document.querySelectorAll('#neoProblemTitle');
    const neoProblemDescs = document.querySelectorAll('#neoProblemDesc');
    if (neoProblemTitles.length > 0) neoProblemTitles[0].innerText = "内容";
    if (neoProblemDescs.length > 0) neoProblemDescs[0].innerText = "コアシステムを最初に実装：ウェーブシステム、ラウンド間ショップ、イントロシーケンス。VRでは、プロシージャルな刀のスライスなど、速くて楽しいメカニクスに注力しました。";
        // All my Games button
        const allGamesBtn = document.getElementById('allGamesBtn');
        if (allGamesBtn) allGamesBtn.innerText = "全てのゲーム";
    if (neoProblemTitles.length > 1) neoProblemTitles[1].innerText = "妥協点";
    if (neoProblemDescs.length > 1) neoProblemDescs[1].innerText = "スコープを現実的に保つため、通貨システムなどの複雑な機能は省略しました。";
    if (neoProblemTitles.length > 2) neoProblemTitles[2].innerText = "振り返って";
    if (neoProblemDescs.length > 2) neoProblemDescs[2].innerText = "バージョン管理がなかったため、一人の負担が増え、実装できた機能が少なくなりました。";
    // God Of a Cult card back content
    const cultScopeTitle = document.getElementById('cultScopeTitle');
    const cultScopeDesc = document.getElementById('cultScopeDesc');
    const cultRoleTitle = document.getElementById('cultRoleTitle');
    const cultRoleDesc = document.getElementById('cultRoleDesc');
    const cultProblemTitle = document.getElementById('cultProblemTitle');
    const cultProblemDesc = document.getElementById('cultProblemDesc');
    if (cultScopeTitle) cultScopeTitle.innerText = "プロジェクト概要";
    if (cultScopeDesc) cultScopeDesc.innerHTML = "・2学期プロジェクト<br />・Thorben Gohdeによるボイス<br />th.gohde@gmail.com";
    if (cultRoleTitle) cultRoleTitle.innerText = "私の役割";
    if (cultRoleDesc) cultRoleDesc.innerHTML = "・ソロプロジェクト";
    if (cultProblemTitle) cultProblemTitle.innerText = "コードの背景";
    if (cultProblemDesc) cultProblemDesc.innerText = "できるだけ早くレベルを作成できるように、データテーブルだけで動作するシステムを作成しました。ゲームは完全にボイス付きで、シンプルなシステムで実装されています。";

    // UMBRA card back content
    const umbraScopeTitle = document.getElementById('umbraScopeTitle');
    const umbraScopeDesc = document.getElementById('umbraScopeDesc');
    const umbraRoleTitle = document.getElementById('umbraRoleTitle');
    const umbraRoleDesc = document.getElementById('umbraRoleDesc');
    const umbraProblemTitle = document.getElementById('umbraProblemTitle');
    const umbraProblemDesc = document.getElementById('umbraProblemDesc');
    if (umbraScopeTitle) umbraScopeTitle.innerText = "プロジェクト概要";
    if (umbraScopeDesc) umbraScopeDesc.innerHTML = "・48時間ゲームジャム<br />・拡張<br />・4人チーム";
    if (umbraRoleTitle) umbraRoleTitle.innerText = "私の役割";
    if (umbraRoleDesc) umbraRoleDesc.innerHTML = "・唯一のプログラマー<br />・シェーダー";
    if (umbraProblemTitle) umbraProblemTitle.innerText = "コードの背景";
    if (umbraProblemDesc) umbraProblemDesc.innerText = "このメインメニューのために複数のウィジェットを作成し、他のプロジェクトでも使えるようにしました。マクロで各サブウィジェットのオープンを管理しています。メインメニューは3D空間に配置され、マテリアルにはカメラが常に動いているような錯覚を生むための基本的なパナーを使用しています。";

    // NEO TOKYO card back content
    const neoScopeTitle = document.getElementById('neoScopeTitle');
    const neoScopeDesc = document.getElementById('neoScopeDesc');
    const neoRoleTitle = document.getElementById('neoRoleTitle');
    const neoRoleDesc = document.getElementById('neoRoleDesc');
    const neoProblemTitle = document.getElementById('neoProblemTitle');
    const neoProblemDesc = document.getElementById('neoProblemDesc');
    if (neoScopeTitle) neoScopeTitle.innerText = "プロジェクト概要";
    if (neoScopeDesc) neoScopeDesc.innerHTML = "・48時間ゲームジャム<br />・6人チーム";
    if (neoRoleTitle) neoRoleTitle.innerText = "私の役割";
    if (neoRoleDesc) neoRoleDesc.innerHTML = "・メインプログラマー";
    // The NEO TOKYO card has multiple ProblemTitle/ProblemDesc, so only translate the first instance for clarity
    if (neoProblemTitle) neoProblemTitle.innerText = "内容";
    if (neoProblemDesc) neoProblemDesc.innerText = "コアシステムを最初に実装：ウェーブシステム、ラウンド間ショップ、イントロシーケンス。VRでは、プロシージャルな刀のスライスなど、速くて楽しいメカニクスに注力しました。複雑な機能（通貨システムなど）はスコープを現実的に保つために省略。バージョン管理がなかったため、一人の負担が増え、実装できた機能が少なくなりました。";
    // FLOAT card back content
    const P1 = document.getElementById('P1');
    const P2 = document.getElementById('P2');
    const RoleTitle = document.getElementById('RoleTitle');
    const RoleDescription = document.getElementById('RoleDescription');
    const ProblemTitle = document.getElementById('ProblemTitle');
    const ProblemDesc = document.getElementById('ProblemDesc');
    const EmbedTitle = document.getElementById('EmbedTitle');
    const EmbedDesc = document.getElementById('EmbedDesc');
    if (P1) P1.innerText = "プロジェクト概要";
    if (P2) P2.innerHTML = "・3学期プロジェクト<br />・Gamescomのために1ヶ月延長<br />・6人チーム";
    if (RoleTitle) RoleTitle.innerText = "私の役割";
    if (RoleDescription) RoleDescription.innerHTML = "・メインプログラマー<br />・シェーダー<br />・エフェクト";
    if (ProblemTitle) ProblemTitle.innerText = "コードの背景";
    if (ProblemDesc) ProblemDesc.innerText = "フォリッジをインスタンススタティックメッシュとして配置する必要があり、ゲームデザイナーから各メッシュを個別に操作しなくても済む方法がないかと頼まれました。そこで、簡単なエディタユーティリティウィジェットを作成しました。";
    if (EmbedTitle) EmbedTitle.innerText = "コードの背景";
    if (EmbedDesc) EmbedDesc.innerText = "ゲーム内でさまざまな種類の障害物を作成するために水を使うことにしました。プレイヤーとのインタラクションなど、満たすべきさまざまな要件がありました。";
    // Details buttons
    const floatDetailsBtn = document.getElementById('floatDetailsBtn');
    const cultDetailsBtn = document.getElementById('cultDetailsBtn');
    const umbraDetailsBtn = document.getElementById('umbraDetailsBtn');
    const neoTokyoDetailsBtn = document.getElementById('neoTokyoDetailsBtn');
    if (floatDetailsBtn) floatDetailsBtn.innerText = "詳細";
    if (cultDetailsBtn) cultDetailsBtn.innerText = "詳細";
    if (umbraDetailsBtn) umbraDetailsBtn.innerText = "詳細";
    if (neoTokyoDetailsBtn) neoTokyoDetailsBtn.innerText = "詳細";
    localStorage.setItem('language', 'active');
    if (aboutt) aboutt.innerText = "自己紹介";
    if (experienceE) experienceE.innerText = "経験";
    if (projectsS) projectsS.innerText = "プロジェクト";
    if (contactT) contactT.innerText = "お問い合わせ";
    if (abouttt) abouttt.innerText = "自己紹介";
    if (experienceEE) experienceEE.innerText = "経験";
    if (projectsSS) projectsSS.innerText = "プロジェクト";
    if (contactTT) contactTT.innerText = "お問い合わせ";
    if (Hello) Hello.innerText = "こんにちは、";
    if (Name) Name.innerText = "ラーズ・ゴーデです";
    if (Developer) Developer.innerText = "ゲーム開発者";
    if (GetTo) GetTo.innerText = "もっと知る";
    if (AboutMe) AboutMe.innerText = "私について";
    if (experienceEEE) experienceEEE.innerText = "経験";
    if (Inall) Inall.innerText = "インディー開発のあらゆる分野で";
    if (Started) Started.innerText = "17歳で開発を始めました";
    if (Outline) Outline.innerText = "概要";
    if (years) years.innerText = "20歳";
    if (bavaria) bavaria.innerText = "ドイツ・バイエルン";
    if (Longtext) Longtext.innerText = "私は主にUnreal Engineでゲームプレイプログラマーとして活動し、シェーダー開発などのテックアートも担当しています。ゲーム開発に初めて触れたのは学校のプロジェクトで、自分の作ったものを他の人が遊んで楽しんでくれる姿を見て、忘れられない感動を覚えました。2023年に日本を訪れ、強い縁を感じ、それ以来毎日インスピレーションを受けています。今では、ゲーム制作へのモチベーションは、日本でキャリアと人生を築くという長期的な目標と深く結びついています。";
    if (Explore) Explore.innerText = "";
    if (Achivements) Achivements.innerText = "実績を見る";
    if (A1) A1.innerText = "複数のゲームジャムと大学展示会で受賞";
    if (B1) B1.innerText = "最優秀ゲーム賞・最優秀サウンド賞 受賞";
    if (C1) C1.innerText = "2024年から現在まで";
    if (D1) D1.innerText = "受賞";
    if (E1) E1.innerText = "神奈川大学（日本）で学ぶ";
    if (E2) E2.innerText = "2026年夏";
    if (F1) F1.innerText = "設立準備中";
    if (F2) F2.innerText = "スタジオ：LAKS";
    // For Japanese, combine Browse/Projects for a natural phrase
    if (Browse) Browse.innerText = "";
    if (Projects) Projects.innerText = "最近のプロジェクト";
    if (Contact) Contact.innerText = "お問い合わせ";
    if (about3) about3.innerText = "自己紹介";
    if (experience3) experience3.innerText = "経験";
    if (projects3) projects3.innerText = "プロジェクト";
    if (contact3) contact3.innerText = "お問い合わせ";
    if (EE1) EE1.innerText = "Gamescom 2025に参加";
    if (EE2) EE2.innerText = "ゲーム：FLOAT";
    if (AE1) AE1.innerText = "GermanDevDays 2025に参加";
    if (AE2) AE2.innerText = "ゲーム：FLOAT";
    if (Support) Support.innerText = "VarjoによるFLOATのサポート";
    if (Link) Link.innerText = " 投稿を見るにはここをクリック";
}

const disableLanguage = () => {
    if (WinnerG) WinnerG.innerText = "Winner of multiple Game Jams and University Exhibitions";
    if (NominatedA) NominatedA.innerText = "Nominated for Best Student Game Award 2025";
    if (LinkAward) LinkAward.innerText = "Click here to see the Nominees";
    // NEO TOKYO card back - multiple sections
    const neoProblemTitles = document.querySelectorAll('#neoProblemTitle');
    const neoProblemDescs = document.querySelectorAll('#neoProblemDesc');
    if (neoProblemTitles.length > 0) neoProblemTitles[0].innerText = "What’s in the Box?";
    if (neoProblemDescs.length > 0) neoProblemDescs[0].innerText = "Core systems first: wave system, between-round shop, intro sequence. For VR we focused on fast, fun mechanics like procedural katana slicing.";
        // All my Games button
        const allGamesBtn = document.getElementById('allGamesBtn');
        if (allGamesBtn) allGamesBtn.innerText = "All my Games";
    if (neoProblemTitles.length > 1) neoProblemTitles[1].innerText = "Compromises";
    if (neoProblemDescs.length > 1) neoProblemDescs[1].innerText = "Skipped complex features like a currency system to keep scope realistic.";
    if (neoProblemTitles.length > 2) neoProblemTitles[2].innerText = "In hindsight";
    if (neoProblemDescs.length > 2) neoProblemDescs[2].innerText = "No revision control → higher workload on one person, fewer features shipped.";
    // God Of a Cult card back content
    const cultScopeTitle = document.getElementById('cultScopeTitle');
    const cultScopeDesc = document.getElementById('cultScopeDesc');
    const cultRoleTitle = document.getElementById('cultRoleTitle');
    const cultRoleDesc = document.getElementById('cultRoleDesc');
    const cultProblemTitle = document.getElementById('cultProblemTitle');
    const cultProblemDesc = document.getElementById('cultProblemDesc');
    if (cultScopeTitle) cultScopeTitle.innerText = "Project Scope";
    if (cultScopeDesc) cultScopeDesc.innerHTML = "- 2nd Semester Project <br /> - Voiced by Thorben Gohde <br /> th.gohde@gmail.com";
    if (cultRoleTitle) cultRoleTitle.innerText = "My Role";
    if (cultRoleDesc) cultRoleDesc.innerHTML = "- Solo Project";
    if (cultProblemTitle) cultProblemTitle.innerText = "The Context of the Code";
    if (cultProblemDesc) cultProblemDesc.innerText = "To be able to create levels as fast as possible I created a System that works with only Datatables. The Game is fully voiced which is also implemented in a simple System.";

    // UMBRA card back content
    const umbraScopeTitle = document.getElementById('umbraScopeTitle');
    const umbraScopeDesc = document.getElementById('umbraScopeDesc');
    const umbraRoleTitle = document.getElementById('umbraRoleTitle');
    const umbraRoleDesc = document.getElementById('umbraRoleDesc');
    const umbraProblemTitle = document.getElementById('umbraProblemTitle');
    const umbraProblemDesc = document.getElementById('umbraProblemDesc');
    if (umbraScopeTitle) umbraScopeTitle.innerText = "Project Scope";
    if (umbraScopeDesc) umbraScopeDesc.innerHTML = "- 48-Hour Game Jam <br /> - Extended <br /> - Team of 4 People";
    if (umbraRoleTitle) umbraRoleTitle.innerText = "My Role";
    if (umbraRoleDesc) umbraRoleDesc.innerHTML = "- Only Programmer <br /> - Shader";
    if (umbraProblemTitle) umbraProblemTitle.innerText = "The Context of the Code";
    if (umbraProblemDesc) umbraProblemDesc.innerText = "For this Main Menu I created multiple Widgets so I could use them in diffrent Projects. A Macro handles the opening of the diffrent Sub-Widgets. The Main Menu is placed in a 3D Space and on the Materials is a basic Panner to create the Illusion of the Camera moving constantly.";

    // NEO TOKYO card back content
    const neoScopeTitle = document.getElementById('neoScopeTitle');
    const neoScopeDesc = document.getElementById('neoScopeDesc');
    const neoRoleTitle = document.getElementById('neoRoleTitle');
    const neoRoleDesc = document.getElementById('neoRoleDesc');
    const neoProblemTitle = document.getElementById('neoProblemTitle');
    const neoProblemDesc = document.getElementById('neoProblemDesc');
    if (neoScopeTitle) neoScopeTitle.innerText = "Project Scope";
    if (neoScopeDesc) neoScopeDesc.innerHTML = "- 48-Hour Game Jam <br /> - Team of 6 People";
    if (neoRoleTitle) neoRoleTitle.innerText = "My Role";
    if (neoRoleDesc) neoRoleDesc.innerHTML = "- Main Programmer";
    if (neoProblemTitle) neoProblemTitle.innerText = "What’s in the Box?";
    if (neoProblemDesc) neoProblemDesc.innerText = "Core systems first: wave system, between-round shop, intro sequence. For VR we focused on fast, fun mechanics like procedural katana slicing. Skipped complex features like a currency system to keep scope realistic. No revision control → higher workload on one person, fewer features shipped.";
    // FLOAT card back content
    const P1 = document.getElementById('P1');
    const P2 = document.getElementById('P2');
    const RoleTitle = document.getElementById('RoleTitle');
    const RoleDescription = document.getElementById('RoleDescription');
    const ProblemTitle = document.getElementById('ProblemTitle');
    const ProblemDesc = document.getElementById('ProblemDesc');
    const EmbedTitle = document.getElementById('EmbedTitle');
    const EmbedDesc = document.getElementById('EmbedDesc');
    if (P1) P1.innerText = "Project Scope";
    if (P2) P2.innerHTML = "- 3rd Semester Project <br /> - Extended by one month for Gamescom <br /> - Team of 6 People";
    if (RoleTitle) RoleTitle.innerText = "My Role";
    if (RoleDescription) RoleDescription.innerHTML = "- Main Programmer <br /> - Shader <br /> - Effects";
    if (ProblemTitle) ProblemTitle.innerText = "The Context of the Code";
    if (ProblemDesc) ProblemDesc.innerText = "We needed to place the Foliage as Instance Static Meshes and our Game Designer asked me if there is a way so he does't has to manipulate each Mesh individually. So I build him a simple Editor Utility Widget.";
    if (EmbedTitle) EmbedTitle.innerText = "The Context of the Code";
    if (EmbedDesc) EmbedDesc.innerText = "To create different types of obstacles in the game we decided to use Water. It had various requirements that needed to be met, like a form of interaction with the player.";
    // Details buttons
    const floatDetailsBtn = document.getElementById('floatDetailsBtn');
    const cultDetailsBtn = document.getElementById('cultDetailsBtn');
    const umbraDetailsBtn = document.getElementById('umbraDetailsBtn');
    const neoTokyoDetailsBtn = document.getElementById('neoTokyoDetailsBtn');
    if (floatDetailsBtn) floatDetailsBtn.innerText = "Details";
    if (cultDetailsBtn) cultDetailsBtn.innerText = "Details";
    if (umbraDetailsBtn) umbraDetailsBtn.innerText = "Details";
    if (neoTokyoDetailsBtn) neoTokyoDetailsBtn.innerText = "Details";
    localStorage.setItem('language', null);
    if (aboutt) aboutt.innerText = "About";
    if (experienceE) experienceE.innerText = "Experience";
    if (projectsS) projectsS.innerText = "Projects";
    if (contactT) contactT.innerText = "Contact";
    if (abouttt) abouttt.innerText = "About";
    if (experienceEE) experienceEE.innerText = "Experience";
    if (projectsSS) projectsSS.innerText = "Projects";
    if (contactTT) contactTT.innerText = "Contact";
    if (Hello) Hello.innerText = "Hello, I'm";
    if (Name) Name.innerText = "Lars Gohde";
    if (Developer) Developer.innerText = "Game Developer";
    if (GetTo) GetTo.innerText = "Get To Know More";
    if (AboutMe) AboutMe.innerText = "About Me";
    if (experienceEEE) experienceEEE.innerText = "Experience ";
    if (Inall) Inall.innerText = "In all Areas of indie Development";
    if (Started) Started.innerText = "Started Developing at 17";
    if (Outline) Outline.innerText = "Outline";
    if (years) years.innerText = "20 years old";
    if (bavaria) bavaria.innerText = "Bavaria, Germany";
    if (Longtext) Longtext.innerText = "I’m primarily a gameplay programmer in Unreal Engine, I also wear the tech-art hat for shader development. I first discovered game development in school through a class project. Seeing others play and enjoy what I had created sparked a feeling I never wanted to lose. In 2023 I visited Japan and developed a strong connection to the country, which continues to inspire me every day. Today, my motivation to create games is closely tied to my long-term ambition of building a career and life in Japan.";
    if (Explore) Explore.innerText = "Explore My";
    if (Achivements) Achivements.innerText = "Achievements";
    if (A1) A1.innerText = "Winner of multiple Game Jams and University Exhibitions";
    if (B1) B1.innerText = "Winner In the categories best game and best sound";
    if (C1) C1.innerText = "2024 until now";
    if (D1) D1.innerText = "Winner";
    if (E1) E1.innerText = "Studying at Kanagawa University, Japan";
    if (E2) E2.innerText = "Summer 2026";
    if (F1) F1.innerText = "Currently in the Process of Founding";
    if (F2) F2.innerText = "Studio: LAKS";
    // For English, keep split as in HTML
    if (Browse) Browse.innerText = "Browse My";
    if (Projects) Projects.innerText = "Recent Projects";
    if (Contact) Contact.innerText = "Contact Me";
    if (about3) about3.innerText = "About";
    if (experience3) experience3.innerText = "Experience";
    if (projects3) projects3.innerText = "Projects";
    if (contact3) contact3.innerText = "Contact";
    if (EE1) EE1.innerText = "Participated at Gamescom 2025";
    if (EE2) EE2.innerText = "Game: FLOAT";
    if (Support) Support.innerText = "Support for FLOAT by Varjo";
    if (Link) Link.innerText = " Click here to see the post";
    if (AE1) AE1.innerText = "Participated at GermanDevDays 2025";
    if (AE2) AE2.innerText = "Game: FLOAT";
}

if(language === "active") enableLanguage()

languageToggle.addEventListener("click", () =>{
    language = localStorage.getItem('language')
    language !== "active" ? enableLanguage() : disableLanguage()
    console.log(language)
})
let language = localStorage.getItem('language');
const languageToggle = document.getElementById('language-switch');

// --- DOM ELEMENTE HOLEN ---

// Nav & Footer
let aboutt = document.getElementById('aboutT');
let experienceE = document.getElementById('experienceE');
let projectsS = document.getElementById('projectsS');
let contactT = document.getElementById('contactT');
let abouttt = document.getElementById('aboutTT');
let experienceEE = document.getElementById('experienceEE');
let projectsSS = document.getElementById('projectsSS');
let contactTT = document.getElementById('contactTT');
let about3 = document.getElementById('about3');
let experience3 = document.getElementById('experience3');
let projects3 = document.getElementById('projects3');
let contact3 = document.getElementById('contact3');

// Profile
let Name = document.getElementById('Name');
let Developer = document.getElementById('Developer');
let StudentStatus = document.getElementById('StudentStatus');

// About
let GetTo = document.getElementById('GetTo');
let AboutMe = document.getElementById('AboutMe');
let Longtext = document.getElementById('Longtext');

// Projects Section
let Browse = document.getElementById('Browse');
let Projects = document.getElementById('Projects');

// Project Card Details Buttons
const floatDetailsBtn = document.getElementById('floatDetailsBtn');
const cultDetailsBtn = document.getElementById('cultDetailsBtn');
const umbraDetailsBtn = document.getElementById('umbraDetailsBtn');
const neoTokyoDetailsBtn = document.getElementById('neoTokyoDetailsBtn');
const mercuryDetailsBtn = document.getElementById('mercuryDetailsBtn');
const allGamesBtn = document.getElementById('allGamesBtn');
const AllSteamBtn = document.getElementById('AllSteamBtn');

// Taglines
let floattitle = document.getElementById('floattitle');
let godofaculttitle = document.getElementById('godofaculttitle');
let umbratitle = document.getElementById('umbratitle');
let neotokyotitle = document.getElementById('neotokyotitle');
let mercurytitle = document.getElementById('mercurytitle');

// FLOAT Card Back
let P1 = document.getElementById('P1');
let P2 = document.getElementById('P2');
let RoleTitle = document.getElementById('RoleTitle');
let RoleDescription = document.getElementById('RoleDescription');
let ProblemTitle = document.getElementById('ProblemTitle');
let ProblemDesc = document.getElementById('ProblemDesc');
let EmbedTitle = document.getElementById('EmbedTitle');
let EmbedDesc = document.getElementById('EmbedDesc');
let AchievementsTitle = document.getElementById('AchievementsTitle');
let AchievementsDesc = document.getElementById('AchievementsDesc');

// CULT Card Back
let cultScopeTitle = document.getElementById('cultScopeTitle');
let cultScopeDesc = document.getElementById('cultScopeDesc');
let cultRoleTitle = document.getElementById('cultRoleTitle');
let cultRoleDesc = document.getElementById('cultRoleDesc');
let cultProblemTitle = document.getElementById('cultProblemTitle');
let cultProblemDesc = document.getElementById('cultProblemDesc');
let CultAchievementsTitle = document.getElementById('CultAchievementsTitle');
let CultAchievementsDesc = document.getElementById('CultAchievementsDesc');

// UMBRA Card Back
let umbraScopeTitle = document.getElementById('umbraScopeTitle');
let umbraScopeDesc = document.getElementById('umbraScopeDesc');
let umbraRoleTitle = document.getElementById('umbraRoleTitle');
let umbraRoleDesc = document.getElementById('umbraRoleDesc');
let umbraProblemTitle = document.getElementById('umbraProblemTitle');
let umbraProblemDesc = document.getElementById('umbraProblemDesc');
let UmbraAchievementsTitle = document.getElementById('UmbraAchievementsTitle');
let UmbraAchievementsDesc = document.getElementById('UmbraAchievementsDesc');

// NEO TOKYO Card Back
let neoScopeTitle = document.getElementById('neoScopeTitle');
let neoScopeDesc = document.getElementById('neoScopeDesc');
let neoRoleTitle = document.getElementById('neoRoleTitle');
let neoRoleDesc = document.getElementById('neoRoleDesc');
let NeoAchievementsTitle = document.getElementById('NeoAchievementsTitle');
let NeoAchievementsDesc = document.getElementById('NeoAchievementsDesc');
// NEO Problem Texte werden über querySelectorAll geholt (siehe unten)

// MERCURY Card Back
let mercuryScopeTitle = document.getElementById('mercuryScopeTitle');
let mercuryScopeDesc = document.getElementById('mercuryScopeDesc');
let mercuryRoleTitle = document.getElementById('mercuryRoleTitle');
let mercuryRoleDesc = document.getElementById('mercuryRoleDesc');

// Spezielle Listen für doppelte IDs
const mercuryTitles = document.querySelectorAll('#mercuryProblemTitle');
const mercuryDescs = document.querySelectorAll('#mercuryProblemDesc');
const mercuryDescs2 = document.querySelectorAll('#mercuryProblemDesc2');
const neoProblemTitles = document.querySelectorAll('#neoProblemTitle');
const neoProblemDescs = document.querySelectorAll('#neoProblemDesc');

// Contact
let Contact = document.getElementById('Contact');
let cvLink = document.getElementById('cvLink');

// Descriptions
let FloatDescribtionTitle = document.getElementById('FloatDescribtionTitle');
let FloatDescription = document.getElementById('FloatDescription');
let mercuryDescribtionTitle = document.getElementById('mercuryDescribtionTitle');
let mercuryDescription = document.getElementById('mercuryDescription');
let gofofacultDescribtionTitle = document.getElementById('gofofacultDescribtionTitle');
let gofofacultDescription = document.getElementById('gofofacultDescription');


// Style-Definition Global verfügbar machen
const subStyle = 'style="display: block; line-height: 1.1; margin-top: 5px;"';

const postMortemBtn = document.getElementById("post_mortem");
const postMortemBtn2 = document.getElementById("post_mortem2");
const postMortemBtn3 = document.getElementById("post_mortem3");


let mercuryApproaches = document.getElementById('mercuryApproaches');

let cultProblemTitle2 = document.getElementById('cultProblemTitle2');
let cultProblemDesc2 = document.getElementById('cultProblemDesc2');


const translatableElements = [
    // Nav & Footer
    aboutt, experienceE, projectsS, contactT,
    abouttt, experienceEE, projectsSS, contactTT,
    about3, experience3, projects3, contact3,

    // Profile & About
    Name, Developer, StudentStatus,
    GetTo, AboutMe, Longtext,

    // Projects Section
    Browse, Projects, Contact, cvLink,

    // Project Card Details Buttons
    floatDetailsBtn, cultDetailsBtn, umbraDetailsBtn,
    neoTokyoDetailsBtn, mercuryDetailsBtn, allGamesBtn, AllSteamBtn,

    // Taglines
    floattitle, godofaculttitle, umbratitle, neotokyotitle, mercurytitle,

    // FLOAT
    P1, P2, RoleTitle, RoleDescription, ProblemTitle, ProblemDesc,
    EmbedTitle, EmbedDesc, AchievementsTitle, AchievementsDesc,
    FloatDescribtionTitle, FloatDescription,

    // CULT
    cultScopeTitle, cultScopeDesc, cultRoleTitle, cultRoleDesc,
    cultProblemTitle, cultProblemDesc, CultAchievementsTitle, CultAchievementsDesc,
    gofofacultDescribtionTitle, gofofacultDescription, cultProblemTitle2, cultProblemDesc2,

    // UMBRA
    umbraScopeTitle, umbraScopeDesc, umbraRoleTitle, umbraRoleDesc,
    umbraProblemTitle, umbraProblemDesc, UmbraAchievementsTitle, UmbraAchievementsDesc,

    // NEO TOKYO
    neoScopeTitle, neoScopeDesc, neoRoleTitle, neoRoleDesc,
    NeoAchievementsTitle, NeoAchievementsDesc,
    ...neoProblemTitles, ...neoProblemDescs,

    // MERCURY
    mercuryScopeTitle, mercuryScopeDesc, mercuryRoleTitle, mercuryRoleDesc,
    mercuryDescribtionTitle, mercuryDescription, mercuryApproaches,
    ...mercuryTitles, ...mercuryDescs, ...mercuryDescs2,

    // Post Mortem Buttons
    postMortemBtn, postMortemBtn2, postMortemBtn3,

    // Im Skript referenzierte globale Variablen/IDs (falls sie auf der Seite existieren)
    typeof InsightsSubtitle !== 'undefined' ? InsightsSubtitle : null,
    typeof InsightsTitle !== 'undefined' ? InsightsTitle : null,
    typeof cpuTitle !== 'undefined' ? cpuTitle : null,
    typeof cpuList !== 'undefined' ? cpuList : null,
    typeof gpuTitle !== 'undefined' ? gpuTitle : null,
    typeof gpuList !== 'undefined' ? gpuList : null,
    typeof memTitle !== 'undefined' ? memTitle : null,
    typeof memList !== 'undefined' ? memList : null,
    typeof pdfBtn !== 'undefined' ? pdfBtn : null,
    typeof insightsS !== 'undefined' ? insightsS : null,
    typeof insightsSS !== 'undefined' ? insightsSS : null,
    typeof insights3 !== 'undefined' ? insights3 : null,
    typeof MercuryAchTitle !== 'undefined' ? MercuryAchTitle : null,
    typeof MercuryAchDesc !== 'undefined' ? MercuryAchDesc : null,
    typeof EmbedTitle1 !== 'undefined' ? EmbedTitle1 : null,
    typeof EmbedDesc1 !== 'undefined' ? EmbedDesc1 : null
];

const originalEnglishTexts = new Map();

// 3. Originaltexte beim Start speichern
translatableElements.forEach(el => {
    if (el) {
        originalEnglishTexts.set(el, el.innerHTML);
    }
});

const showDisclaimer = () => {
    const languageToggle = document.getElementById('language-switch');
    if (!languageToggle) return;

    const disclaimer = document.createElement('div');

    disclaimer.innerHTML = '※注記：この翻訳はサイトを読みやすくするためにツールを使用して作成されたものであり、私の現在の実際の日本語能力を反映するものではありません。';

    // Fixed Positionierung für mitscrollende Elemente
    disclaimer.style.position = 'fixed';
    disclaimer.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    disclaimer.style.color = '#fff';
    disclaimer.style.padding = '8px 12px';
    disclaimer.style.borderRadius = '4px';
    disclaimer.style.fontSize = '12px';
    disclaimer.style.whiteSpace = 'normal';
    disclaimer.style.lineHeight = '1.4';
    disclaimer.style.pointerEvents = 'none';
    disclaimer.style.zIndex = '1000';
    disclaimer.style.opacity = '0';
    disclaimer.style.transition = 'opacity 0.4s ease';

    document.body.appendChild(disclaimer);

    const rect = languageToggle.getBoundingClientRect();

    const spaceOnRight = window.innerWidth - rect.right - 25;
    disclaimer.style.maxWidth = `${Math.min(280, Math.max(60, spaceOnRight))}px`;

    // Immer rechts positionieren
    disclaimer.style.left = `${rect.right + 15}px`;

    // Vertikal zentrieren (ohne window.scrollY, da position: fixed)
    const topPosition = rect.top + (rect.height / 2) - (disclaimer.offsetHeight / 2);
    disclaimer.style.top = `${topPosition}px`;

    // Fade-in
    requestAnimationFrame(() => {
        disclaimer.style.opacity = '1';
    });

    // Nach 6 Sekunden ausblenden und entfernen
    setTimeout(() => {
        disclaimer.style.opacity = '0';
        setTimeout(() => disclaimer.remove(), 400);
    }, 10000);
};


// --- JAPANISCH AKTIVIEREN ---
const enableLanguage = () => {
    // Insights Section Titles
    if (InsightsSubtitle) InsightsSubtitle.innerHTML = "技術的方法論"; // Technical Methodology
    if (InsightsTitle) InsightsTitle.innerHTML = "パフォーマンスガイド"; // Performance Guide

    // Card 1: Profiling & CPU
    if (cpuTitle) cpuTitle.innerHTML = "プロファイリング & CPU";
    if (cpuList) cpuList.innerHTML =
        "<li style='margin-bottom: 0.5rem;'><strong>プロファイリング:</strong> <em>stat unit</em>、<em>stat scenerendering</em>、Unreal Insightsを用いたボトルネック分析</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>スレッド:</strong> ゲームスレッド、レンダースレッド、GPU時間の明確な区別</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>Tick処理:</strong> 条件付きTickの有効化と更新頻度の削減</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>ロジック最適化:</strong> ロジックフローの簡略化、高頻度処理のC++化</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>プーリング:</strong> 頻繁にスポーンされるオブジェクトの再利用</li>";

    // Card 2: GPU & Rendering
    if (gpuTitle) gpuTitle.innerHTML = "GPU & レンダリング";
    if (gpuList) gpuList.innerHTML =
        "<li style='margin-bottom: 0.5rem;'><strong>ドローコール:</strong> インスタンシング (ISM/HISM) と階層化LOD (HLOD)</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>マテリアル:</strong> スロット数の最小化、マスターマテリアルの活用、シェーダーコストの削減</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>ライティング:</strong> 動的ライトの抑制、影設定、減衰半径 (Attenuation) の調整</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>VFX:</strong> 固定バウンズを用いたGPUシミュレーションとエフェクトのプール化</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>VR:</strong> Instanced Stereo、Multi-View、効率的なフォワードレンダリング</li>";

    // Card 3: Workflow & Memory
    if (memTitle) memTitle.innerHTML = "ワークフロー & メモリ管理";
    if (memList) memList.innerHTML =
        "<li style='margin-bottom: 0.5rem;'><strong>参照関係:</strong> ソフト参照 (Soft References) と非同期ロードの活用</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>ビルドサイズ:</strong> 未使用プラグインの削除、マップの選択的インクルード</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>計画:</strong> ゲームデザイン段階からの早期パフォーマンス計画</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>保守:</strong> 継続的なプロファイリングと全体的な変更の文書化</li>";

    // PDF Button
    if (pdfBtn) pdfBtn.innerHTML = "完全なPDFガイドを見る (英語のみ)";
    if (postMortemBtn) postMortemBtn.innerHTML = "ポストモーテムを見る (英語のみ)";
    if (postMortemBtn2) postMortemBtn2.innerHTML = "ポストモーテムを見る (英語のみ)";
    if (postMortemBtn3) postMortemBtn3.innerHTML = "ポストモーテムを見る (英語のみ)";

    // --- TAGLINES ---
    if (floattitle) floattitle.innerHTML = `<span ${subStyle}>義肢データを収集する、受賞歴のあるMR</span>`;
    if (godofaculttitle) godofaculttitle.innerHTML = `<span ${subStyle}>拡張型コミカル・ポイント＆クリック</span>`;
    if (umbratitle) umbratitle.innerHTML = `<span ${subStyle}>独特な雰囲気の、容赦ないスピードラン</span>`;
    if (neotokyotitle) neotokyotitle.innerHTML = `<span ${subStyle}>エンドレスなウェーブ制アクション</span>`;
    if (mercurytitle) mercurytitle.innerHTML = `<span ${subStyle}>世界初、疾走感あるハンドトラッキング格闘ゲーム</span>`;

    // --- MERCURY ---
    if (mercuryScopeTitle) mercuryScopeTitle.innerText = "プロジェクト概要";
    if (mercuryScopeDesc) mercuryScopeDesc.innerHTML = "<li>2ヶ月</li><li>6人のチーム</li>";
    if (mercuryRoleTitle) mercuryRoleTitle.innerText = "主な役割";
    if (mercuryRoleDesc) mercuryRoleDesc.innerHTML = "<li>プレイヤーメカニクス</li>";

    // Mercury Context (Index 0)
    if (mercuryTitles[0]) mercuryTitles[0].innerText = "実装の背景";
    if (mercuryDescs[0]) {
        mercuryDescs[0].innerText = "Mercuryは、純粋なハンドジェスチャー操作による初のVRメカ格闘ゲームです。コントローラー不要のゴリラ移動（ロコモーション）を採用し、ペースの速い戦闘でハンドトラッキングの限界に挑んでいます。わずか5週間で開発されたこのプロジェクトでは、独自の移動システムと都市環境における課題を解決するために、徹底的な反復実装が必要でした。";
    }
    // Mercury Locomotion (Index 1) - REIN JAPANISCH
    if (mercuryTitles[1]) mercuryTitles[1].innerText = "ゴリラロコモーションシステム";
    if (mercuryDescs[1]) {
        mercuryDescs[1].innerHTML = `
        <h3 style="margin-bottom: 2px; font-size: 1.1em;">手と表面のインタラクション</h3>
        <p style="margin-top: 0; margin-bottom: 15px;">ライントレースによりメカの手を表面に直接配置し、一貫した接触と明確なフィードバックを提供します。</p>

        <h3 style="margin-bottom: 2px; margin-top: 15px; font-size: 1.1em;">掴み判定</h3>
        <ul style="margin-top: 0; margin-bottom: 15px; padding-left: 20px;">
            <li>意図しない掴み/離しを防ぐ安全策を備えたポーズベースの検出</li>
            <li>床と垂直面（壁）の文脈に応じたチェック</li>
        </ul>`;
    }

    if (mercuryDescs2[0]) {
        mercuryDescs2[0].innerHTML = `
        <h3 style="margin-bottom: 2px; margin-top: 15px; font-size: 1.1em;">表面の検証</h3>
        <p style="margin-top: 0; margin-bottom: 15px;">スフィアトレースで掴みコンポーネントを識別し、手の向きと表面法線の整合性を通じて意図を検証します。</p>

        <h3 style="margin-bottom: 2px; margin-top: 15px; font-size: 1.1em;">クライミングと移動の反応</h3>
        <ul style="margin-top: 0; margin-bottom: 15px; padding-left: 20px;">
            <li>プレイヤーの移動は、高い応答性のために直近の入力を重み付けした相対的な手の動きから導き出されます。</li>
            <li>掴んでいる間、重力、カプセルのスケーリング、移動オフセットを処理する適応的な遷移を行います。</li>
        </ul>

        <h3 style="margin-bottom: 2px; font-size: 1.1em;">リリースのダイナミクス</h3>
        <ul style="margin-top: 0; margin-bottom: 0; padding-left: 20px;">
            <li>最終的な発射速度は、カメラの照準、移動の意図、表面タイプをブレンドして計算されます。</li>
            <li>短時間のロックアウト（操作禁止）により、誤った再掴みを防ぎ、流動的な勢いを維持します。</li>
        </ul>`;
    }

    // --- NEO TOKYO ---
    if (neoProblemTitles.length > 0) neoProblemTitles[0].innerText = "内容";
    if (neoProblemDescs.length > 0) neoProblemDescs[0].innerText = "コアシステムを最初に実装：ウェーブシステム、ラウンド間ショップ、イントロシーケンス。VRでは、プロシージャルな刀のスライスなど、速くて楽しいメカニクスに注力しました。";
    if (neoProblemTitles.length > 1) neoProblemTitles[1].innerText = "妥協点";
    if (neoProblemDescs.length > 1) neoProblemDescs[1].innerText = "スコープを現実的に保つため、通貨システムなどの複雑な機能は省略しました。";
    if (neoProblemTitles.length > 2) neoProblemTitles[2].innerText = "振り返って";
    if (neoProblemDescs.length > 2) neoProblemDescs[2].innerText = "バージョン管理がなかったため、一人の負担が増え、実装できた機能が少なくなりました。";

    if (neoScopeTitle) neoScopeTitle.innerText = "プロジェクト概要";
    if (neoScopeDesc) neoScopeDesc.innerHTML = "・48時間ゲームジャム<br />・6人チーム";
    if (neoRoleTitle) neoRoleTitle.innerText = "主な役割";
    if (neoRoleDesc) neoRoleDesc.innerHTML = "・メインプログラマー";
    if (NeoAchievementsTitle) NeoAchievementsTitle.innerHTML = "実績";
    if (NeoAchievementsDesc) NeoAchievementsDesc.innerHTML = "<ul>" +
        "<li>出展者: HNU Werkschau</li>" +
        "<li><a href='https://events.games-bavaria.com/event/🎮-hessen-meets-bayern-game-connect-2025/' target='_blank' rel='noopener noreferrer'>出展者: Game Connect 2025 - Bayern meets Hessen<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +
        "<li>受賞者: 第2回 HNU Game Jam</li>" +
        "</ul>";

    // Mercury Achievements
    if (MercuryAchTitle) MercuryAchTitle.innerHTML = "実績"; // Jisseki (Achievements)
    if (MercuryAchDesc) MercuryAchDesc.innerHTML = "<ul><li>" +
        "<a href='https://devpost.com/software/mercury-05i6ty' target='_blank' rel='noopener noreferrer'>" +
        "参加者: Meta Horizon Start Developer Competition" +
        "<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a>" +
        "</li><li>受賞者: HNU Werkschau | ベストメカニクス賞</li></ul>";


    // --- GOD OF A CULT ---
    if (cultScopeTitle) cultScopeTitle.innerText = "プロジェクト概要";
    if (cultScopeDesc) cultScopeDesc.innerHTML = "<li>第2セメスターのプロジェクト</li><li><a href='https://www.filmmakers.eu/en/actors/thorben-gohde' target='_blank' rel='noopener noreferrer'>声：Thorben Gohde <img src='./assets/hyperlink_icon.png' alt='外部リンク' class='link-icon' /></a></li>";
    if (cultRoleTitle) cultRoleTitle.innerText = "主な役割";
    if (cultRoleDesc) cultRoleDesc.innerHTML = "<li>ソロプロジェクト</li>";
    if (cultProblemTitle) cultProblemTitle.innerText = "コードの背景";
    if (cultProblemDesc) cultProblemDesc.innerText = "可能な限り早くレベルを作成できるよう、データテーブルのみで機能するシステムを開発しました。ゲームはフルボイスで、会話、現実の時間を表示する時計、そして画面の前にいるプレイヤーこそが「時間の神」であることを明かす演出によって、第四の壁を越えます。";
    if (CultAchievementsTitle) CultAchievementsTitle.innerText = "実績";
    if (CultAchievementsDesc) CultAchievementsDesc.innerHTML = "<ul><li>出展者: HNU Werkschau</li><li>新学期のためのショーケースプロジェクト</li></ul>";

    // --- UMBRA ---
    if (umbraScopeTitle) umbraScopeTitle.innerText = "プロジェクト概要";
    if (umbraScopeDesc) umbraScopeDesc.innerHTML = "- 48時間ゲームジャム <br /> - 2週間の延長 <br /> - 4人のチーム";
    if (umbraRoleTitle) umbraRoleTitle.innerText = "主な役割";
    if (umbraRoleDesc) umbraRoleDesc.innerHTML = "・唯一のプログラマー<br />・シェーダー";
    if (umbraProblemTitle) umbraProblemTitle.innerText = "コードの背景";
    if (umbraProblemDesc) umbraProblemDesc.innerText = "このメインメニューのために複数のウィジェットを作成し、他のプロジェクトでも使えるようにしました。マクロで各サブウィジェットのオープンを管理しています。メインメニューは3D空間に配置され、マテリアルにはカメラが常に動いているような錯覚を生むための基本的なパナーを使用しています。";
    if (UmbraAchievementsTitle) UmbraAchievementsTitle.innerText = "実績";
    if (UmbraAchievementsDesc) UmbraAchievementsDesc.innerHTML = "<ul>" +
        "<li>出展者: HNU Werkschau</li>" +
        "<li><a href='https://events.games-bavaria.com/event/🎮-hessen-meets-bayern-game-connect-2025/' target='_blank' rel='noopener noreferrer'>出展者: Game Connect 2025 - Bayern meets Hessen<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +
        "<li>受賞者: 第1回 HNU Game Jam</li>" +
        "<li>受賞者: HNU Werkschau | ベストサウンド賞</li>" +
        "</ul>";

    // --- FLOAT ---
    if (P1) P1.innerText = "プロジェクト概要";
    if (P2) P2.innerHTML = "<li>6ヶ月</li><li>6人のチーム</li>";
    if (RoleTitle) RoleTitle.innerText = "主な役割";
    if (RoleDescription) RoleDescription.innerHTML = "<li>メインプログラマー</li><li>シェーダー</li><li>エフェクト</li>";
    if (ProblemTitle) ProblemTitle.innerText = "コードの背景";
    if (ProblemDesc) ProblemDesc.innerText = "フォリッジをインスタンススタティックメッシュとして配置する必要があり、ゲームデザイナーから各メッシュを個別に操作しなくても済む方法がないかと頼まれました。そこで、簡単なエディタユーティリティウィジェットを作成しました。";
    if (EmbedTitle) EmbedTitle.innerText = "コードの背景";
    if (EmbedDesc) EmbedDesc.innerText = "ゲーム内でさまざまな種類の障害物を作成するために水を使うことにしました。プレイヤーとのインタラクションなど、満たすべきさまざまな要件がありました。";
    if (AchievementsTitle) AchievementsTitle.innerText = "実績";
    if (AchievementsDesc) AchievementsDesc.innerHTML = "<ul>" +
        // Winners
        "<li><a href='https://www.mb21.de/wettbewerbsjahr_2025.html?articles=float' target='_blank' rel='noopener noreferrer'>受賞者: Deutscher Multimediapreis mb21<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li><a href='https://www.studentgamesfestival.com/2025-winners' target='_blank' rel='noopener noreferrer'>受賞者: Best Student Games Award | Meaningful Game<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li><a href='https://www.bvdw.org/events/digital-responsibility-award/' target = '_blank' rel = 'noopener noreferrer' >受賞者: Digital Responsibility Award 2026 | Digital well - being & inclusion <img src = './assets/hyperlink_icon.png' alt = 'Link' class='link-icon' /> </a ></li > " +

        "<li><a href='https://www.linkedin.com/feed/update/urn:li:activity:7334126257871175680/' target='_blank' rel='noopener noreferrer'>受賞者: Varjoアカデミックギブアウェイキャンペーン<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li>受賞者: HNU Werkschau | ベストゲーム賞</li>" +

        // Nominees (mit margin-top)
        "<li style='margin-top: 20px;'><a href='https://nextrealitycontest.de/de/nominierte/nominierte-2025/' target='_blank' rel='noopener noreferrer'>ノミネート: XRC25 | ヤングタレント<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li><a href='https://nextrealitycontest.de/de/nominierte/nominierte-2025/' target='_blank' rel='noopener noreferrer'>ノミネート: XRC25 | コミュニティアワード<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        // Exhibitors (mit margin-top bei Business Area)
        "<li style='margin-top: 20px;'><a href='https://www.games-bavaria.com/gamescom-2025/' target='_blank' rel='noopener noreferrer'>出展者: Gamescom 2025 | ビジネスエリア<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li><a href='https://rawtalentbooth.com' target='_blank' rel='noopener noreferrer'>出展者: Gamescom 2025 | エンターテインメントエリア<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li><a href='https://germandevdays.com/exhibitors' target='_blank' rel='noopener noreferrer'>出展者: GermanDevDays 2025<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li><a href='https://play-con.de/ausstellerinnen-2025-neuulm/' target='_blank' rel='noopener noreferrer'>出展者: Play! Con 2025<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li>出展者: Hackerkiste Augsburg 2025</li>" +
        "<li>出展者: TINCON 2025</li>" +

        // Member (mit margin-top)
        "<li style='margin-top: 20px;'>メンバー: Meta Horizonスタートコミュニティ</li>" +
        "</ul>";

    // --- GENERAL UI ---
    if (allGamesBtn) {
        allGamesBtn.innerHTML = `
      <img src="./assets/itch_red.png" alt="itch_logo" style="width: 1.2rem; height: auto; margin-right: 0.5rem; vertical-align: middle;">
      全てのゲーム
    `;
    }
    if (AllSteamBtn) {
        AllSteamBtn.innerHTML = `
      <img src="./assets/steam.png" alt="steam_logo" style="width: 1.2rem; height: auto; margin-right: 0.5rem; vertical-align: middle;">
      Steam配信タイトル
    `;
    }
    if (floatDetailsBtn) floatDetailsBtn.innerText = "詳細";
    if (cultDetailsBtn) cultDetailsBtn.innerText = "詳細";
    if (umbraDetailsBtn) umbraDetailsBtn.innerText = "詳細";
    if (neoTokyoDetailsBtn) neoTokyoDetailsBtn.innerText = "詳細";
    if (mercuryDetailsBtn) mercuryDetailsBtn.innerText = "詳細";

    localStorage.setItem('language', 'active');

    if (aboutt) aboutt.innerText = "自己紹介";
    if (experienceE) experienceE.innerText = "経験";
    if (projectsS) projectsS.innerText = "プロジェクト";
    if (contactT) contactT.innerText = "お問い合わせ";
    if (abouttt) abouttt.innerText = "自己紹介";
    if (experienceEE) experienceEE.innerText = "経験";
    if (projectsSS) projectsSS.innerText = "プロジェクト";
    if (contactTT) contactTT.innerText = "お問い合わせ";
    if (insightsS) insightsS.innerHTML = "パフォーマンスガイド";
    if (insightsSS) insightsSS.innerHTML = "パフォーマンスガイド";


    if (Name) Name.innerText = "ラーズ・ゴーデ";
    if (Developer) Developer.innerText = "ゲーム＆シェーダープログラマー";
    if (StudentStatus) StudentStatus.innerText = "神奈川大学 交換留学生 (2026年3月〜8月)";

    if (GetTo) GetTo.innerText = "もっと知る";
    if (AboutMe) AboutMe.innerText = "私について";
    if (Longtext) Longtext.innerHTML = "初めてゲーム開発に触れたのは、高校時代のプロジェクトです。自分が作ったものを他の人が楽しんでいる姿を見て、忘れられないほど感動し、この情熱を持ち続けたいと思いました。2023年に日本を訪れ、この国に強く惹かれました。<br /> <br /> 現在、日本の文化は私の日常生活に深く根付いています。ビデオゲーム、漫画、アニメへの情熱に加え、生き甲斐という哲学もこれに含まれます。さらに、武神館での稽古を始め、そこから日本の歴史について多くのことを学んでいます。 <br /> <br /> 日本のゲームスタジオで特に印象的なのは、プレイヤーの期待に応える、完成された高品質な体験を提供しようとする開発者の献身的な姿勢です。私は、最高のプレイヤー体験を創り出すことに尽力する環境の一員になりたいと考えています。";


    if (Browse) Browse.innerText = "";
    if (Projects) Projects.innerText = "最近のプロジェクト";
    if (Contact) Contact.innerText = "お問い合わせ";

    if (about3) about3.innerText = "自己紹介";
    if (experience3) experience3.innerText = "経験";
    if (projects3) projects3.innerText = "プロジェクト";
    if (contact3) contact3.innerText = "お問い合わせ";
    if (insights3) insights3.innerHTML = "パフォーマンスガイド";

    if (cvLink) cvLink.innerText = "CVを見る";

    // --- DESCRIPTIONS (JAPANISCH) ---
    if (FloatDescribtionTitle) FloatDescribtionTitle.innerText = "概要";
    if (FloatDescription) FloatDescription.innerText = "FLOATは、医療データ収集をゲーム化したMixed Reality（複合現実）シリアスゲームです。プレイヤーはハンドジェスチャーのみを使って断片化された世界でPookisを助け、同時にシステムが筋肉の動きを記録することで、AI搭載義手の開発に貢献します。";

    if (mercuryDescribtionTitle) mercuryDescribtionTitle.innerText = "概要";
    if (mercuryDescription) mercuryDescription.innerText = "MERCURYは、世界初のコントローラー不要VRメカ格闘アクションです。プレイヤーは自身の身体の動きを使って都市をよじ登り、ハイスピードなアリーナ戦闘を繰り広げます。移動と戦闘のすべてが、ハンドトラッキングのみによって操作されます。";

    if (gofofacultDescribtionTitle) gofofacultDescribtionTitle.innerText = "概要";
    if (gofofacultDescription) gofofacultDescription.innerText = "God of a Cultは、コメディ要素のあるポイント＆クリックアドベンチャーです。プレイヤーはパズルを解き、主人公が次なる「時間の神」の化身となって行方不明の妹を見つけ出せるよう導きます。ゲームはフルボイス対応で、翻訳テキストと拡張性のあるセーブシステムが実装されています。";
    if (mercuryApproaches) {
        // Titel (h3)
        mercuryApproaches.querySelector('h3').innerText = "移動アプローチの検討";
        // Text (p)
        mercuryApproaches.querySelector('p').innerText = "移動システムについて複数のアイデアを検討していたため、それぞれのプロトタイプをUnityで作成しました。";
    }


    if (EmbedTitle1) EmbedTitle1.innerText = "コードの背景";
    if (EmbedDesc1) EmbedDesc1.innerText = "ゲーム内のすべての障害物はコアクラスを継承しており、ゲームデザイナーがエディタ内で調整可能なパラメータを備えています。各障害物は複数のPookiを処理できるように設計されています。";


    if (cultProblemDesc) cultProblemDesc.innerText = "可能な限り早くレベルを作成できるよう、データテーブルのみで機能するシステムを開発しました。ゲームはフルボイスで、会話、現実の時間を表示する時計、そして画面の前にいるプレイヤーこそが「時間の神」であることを明かす演出によって、第四の壁を越えます。";
    if (gofofacultDescription) gofofacultDescription.innerText = "God of a Cultは、コメディ要素のあるポイント＆クリックアドベンチャーです。プレイヤーはパズルを解き、主人公が次なる「時間の神」の化身となって行方不明の妹を見つけ出せるよう導きます。ゲームはフルボイス対応で、翻訳テキストと拡張性のあるセーブシステムが実装されています。";

    if (cultProblemTitle2) cultProblemTitle2.innerText = "チュートリアルシリーズの作成";
    if (cultProblemDesc2) cultProblemDesc2.innerHTML = "他の開発者の助けになるよう、Unreal Engine 5で必要なコアシステムを構築する方法を解説する7時間以上のシリーズを録画しました。視聴は<a href='https://www.youtube.com/playlist?list=PLSStU8YtITKfY5ivtE77u5DZma00sIdtf' target='_blank' rel='noopener noreferrer' class='tutorial-link'>こちら</a>から可能です。";

    if (!sessionStorage.getItem('disclaimerShown')) {
        showDisclaimer();
        sessionStorage.setItem('disclaimerShown', 'true');
    }


}

// --- ENGLISCH AKTIVIEREN (Disable Japanese) ---
const disableLanguage = () => {
    // 4. Gespeicherte Originaltexte aus dem HTML wiederherstellen
    translatableElements.forEach(el => {
        if (el && originalEnglishTexts.has(el)) {
            el.innerHTML = originalEnglishTexts.get(el);
        }
    });

    localStorage.setItem('language', 'inactive');
};

// --- INIT ---
if (language === "active") {
    enableLanguage();
}
if (languageToggle) {
    const rand = (min, max) => Math.random() * (max - min) + min;

    languageToggle.addEventListener("click", (event) => {
        // --- Language toggle logic ---
        let language = localStorage.getItem("language");
        language !== "active" ? enableLanguage() : disableLanguage();

        // --- Emoji spawn logic ---
        const rect = languageToggle.getBoundingClientRect();

        const fallingEmoji = document.createElement("div");
        fallingEmoji.textContent = "🌸";
        fallingEmoji.className = "falling-emoji";

        fallingEmoji.style.left = `${rect.right - 25}px`;
        fallingEmoji.style.top = `${rect.top - 6}px`;

        const rStart = Math.round(rand(-40, 40));
        const rEnd = Math.round(rand(-720, 720));
        const sStart = +(rand(0.8, 1.6).toFixed(2));
        const sEnd = +(rand(0.2, 1.2).toFixed(2));
        const txEnd = Math.round(rand(-100, 100));
        const duration = +(rand(1.8, 3.2).toFixed(2));

        fallingEmoji.style.setProperty("--r-start", `${rStart}deg`);
        fallingEmoji.style.setProperty("--r-end", `${rEnd}deg`);
        fallingEmoji.style.setProperty("--s-start", sStart);
        fallingEmoji.style.setProperty("--s-end", sEnd);
        fallingEmoji.style.setProperty("--tx-end", `${txEnd}px`);

        fallingEmoji.style.transform =
            `translate(0, 0) rotate(${rStart}deg) scale(${sStart})`;

        fallingEmoji.style.animation =
            `fallSwingFade ${duration}s linear forwards`;

        document.body.appendChild(fallingEmoji);

        fallingEmoji.addEventListener("animationend", () => {
            fallingEmoji.remove();
        });
    });
}

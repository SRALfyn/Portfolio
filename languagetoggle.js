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
let Hello = document.getElementById('Hello');
let Name = document.getElementById('Name');
let Developer = document.getElementById('Developer');

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
const neoProblemTitles = document.querySelectorAll('#neoProblemTitle');
const neoProblemDescs = document.querySelectorAll('#neoProblemDesc');

// Contact
let Contact = document.getElementById('Contact');

// Style-Definition Global verfügbar machen
const subStyle = 'style="display: block; font-size: 0.7em; line-height: 1.1; margin-top: 5px;"';


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


    // --- TAGLINES ---
    if (floattitle) floattitle.innerHTML = `FLOAT <span ${subStyle}>義肢データを収集する、受賞歴のあるMR</span>`;
    if (godofaculttitle) godofaculttitle.innerHTML = `GOD OF A CULT <span ${subStyle}>拡張型コミカル・ポイント＆クリック</span>`;
    if (umbratitle) umbratitle.innerHTML = `UMBRA <span ${subStyle}>独特な雰囲気の、容赦ないスピードラン</span>`;
    if (neotokyotitle) neotokyotitle.innerHTML = `NEO TOKYO <span ${subStyle}>エンドレスなウェーブ制アクション</span>`;
    if (mercurytitle) mercurytitle.innerHTML = `MERCURY <span ${subStyle}>世界初、疾走感あるハンドトラッキング格闘ゲーム</span>`;

    // --- MERCURY ---
    if (mercuryScopeTitle) mercuryScopeTitle.innerText = "プロジェクト概要";
    if (mercuryScopeDesc) mercuryScopeDesc.innerHTML = "- 開発中 <br />- 6人のチーム <br />";
    if (mercuryRoleTitle) mercuryRoleTitle.innerText = "担当";
    if (mercuryRoleDesc) mercuryRoleDesc.innerText = "- プレイヤーメカニクス";

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
        </ul>

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
    if (neoRoleTitle) neoRoleTitle.innerText = "私の役割";
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
        "</li></ul>";


    // --- GOD OF A CULT ---
    if (cultScopeTitle) cultScopeTitle.innerText = "プロジェクト概要";
    if (cultScopeDesc) cultScopeDesc.innerHTML = "- 第2セメスターのプロジェクト <br /> <a href='https://www.filmmakers.eu/en/actors/thorben-gohde' target='_blank' rel='noopener noreferrer'> - 声：Thorben Gohde <img src='./assets/hyperlink_icon.png' alt='外部リンク' class='link-icon' /></a>";
    if (cultRoleTitle) cultRoleTitle.innerText = "私の役割";
    if (cultRoleDesc) cultRoleDesc.innerHTML = "・ソロプロジェクト";
    if (cultProblemTitle) cultProblemTitle.innerText = "コードの背景";
    if (cultProblemDesc) cultProblemDesc.innerText = "できるだけ早くレベルを作成できるように、データテーブルだけで動作するシステムを作成しました。ゲームは完全にボイス付きで、シンプルなシステムで実装されています。";
    if (CultAchievementsTitle) CultAchievementsTitle.innerText = "実績";
    if (CultAchievementsDesc) CultAchievementsDesc.innerHTML = "<ul><li>出展者: HNU Werkschau</li><li>新学期のためのショーケースプロジェクト</li></ul>";

    // --- UMBRA ---
    if (umbraScopeTitle) umbraScopeTitle.innerText = "プロジェクト概要";
    if (umbraScopeDesc) umbraScopeDesc.innerHTML = "- 48時間ゲームジャム <br /> - 2週間の延長 <br /> - 4人のチーム";
    if (umbraRoleTitle) umbraRoleTitle.innerText = "私の役割";
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
    if (P2) P2.innerHTML = "- 6ヶ月 <br /> - 6人のチーム";
    if (RoleTitle) RoleTitle.innerText = "私の役割";
    if (RoleDescription) RoleDescription.innerHTML = "・メインプログラマー<br />・シェーダー<br />・エフェクト";
    if (ProblemTitle) ProblemTitle.innerText = "コードの背景";
    if (ProblemDesc) ProblemDesc.innerText = "フォリッジをインスタンススタティックメッシュとして配置する必要があり、ゲームデザイナーから各メッシュを個別に操作しなくても済む方法がないかと頼まれました。そこで、簡単なエディタユーティリティウィジェットを作成しました。";
    if (EmbedTitle) EmbedTitle.innerText = "コードの背景";
    if (EmbedDesc) EmbedDesc.innerText = "ゲーム内でさまざまな種類の障害物を作成するために水を使うことにしました。プレイヤーとのインタラクションなど、満たすべきさまざまな要件がありました。";
    if (AchievementsTitle) AchievementsTitle.innerText = "実績";
    if (AchievementsDesc) AchievementsDesc.innerHTML = "<ul>" +
        // Winners
        "<li><a href='https://www.mb21.de/wettbewerbsjahr_2025.html?articles=float' target='_blank' rel='noopener noreferrer'>受賞者: Deutscher Multimediapreis mb21<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li><a href='https://www.studentgamesfestival.com/2025-winners' target='_blank' rel='noopener noreferrer'>受賞者: Best Student Games Award | Meaningful Game<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

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
    if (allGamesBtn) allGamesBtn.innerText = "全てのゲーム";
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
    if (insightsS) insightsS.innerHTML = "技術的知見";
    if (insightsSS) insightsSS.innerHTML = "技術的知見";

    if (Hello) Hello.innerText = "こんにちは、";
    if (Name) Name.innerText = "ラーズ・ゴーデです";
    if (Developer) Developer.innerText = "ゲーム開発者";

    if (GetTo) GetTo.innerText = "もっと知る";
    if (AboutMe) AboutMe.innerText = "私について";
    if (Longtext) Longtext.innerText = "ゲーム開発に初めて触れたのは学校のプロジェクトで、自分の作ったものを他の人が遊んで楽しんでくれる姿を見て、忘れられない感動を覚えました。2023年に日本を訪れ、強い縁を感じ、それ以来毎日インスピレーションを受けています。今では、ゲーム制作へのモチベーションは、日本でキャリアと人生を築くという長期的な目標と深く結びついています。";

    if (Browse) Browse.innerText = "";
    if (Projects) Projects.innerText = "最近のプロジェクト";
    if (Contact) Contact.innerText = "お問い合わせ";

    if (about3) about3.innerText = "自己紹介";
    if (experience3) experience3.innerText = "経験";
    if (projects3) projects3.innerText = "プロジェクト";
    if (contact3) contact3.innerText = "お問い合わせ";
    if (insights3) insights3.innerHTML = "技術的知見";
}

// --- ENGLISCH AKTIVIEREN (Disable Japanese) ---
const disableLanguage = () => {

    // Insights Section Titles
    if (InsightsSubtitle) InsightsSubtitle.innerHTML = "Technical Methodology";
    if (InsightsTitle) InsightsTitle.innerHTML = "Performance Guide";

    // Card 1: Profiling & CPU
    if (cpuTitle) cpuTitle.innerHTML = "Profiling & CPU";
    if (cpuList) cpuList.innerHTML =
        "<li style='margin-bottom: 0.5rem;'><strong>Profiling:</strong> Bottleneck-analysis using <em>stat unit</em>, <em>stat scenerendering</em>, Unreal Insights</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>Threads:</strong> Distinguishing Game Thread, Render Thread, and GPU time</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>Ticks:</strong> Conditional ticking and reduced update rates</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>Logic:</strong> Simplified logic flow; high-frequency operations moved to C++</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>Pooling:</strong> Reuse of frequently spawned objects</li>";

    // Card 2: GPU & Rendering
    if (gpuTitle) gpuTitle.innerHTML = "GPU & Rendering";
    if (gpuList) gpuList.innerHTML =
        "<li style='margin-bottom: 0.5rem;'><strong>Draw Calls:</strong> Instancing (ISM/HISM) and Hierarchical LODs (HLOD)</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>Materials:</strong> Minimal slots, master-material workflow, reduced shader cost</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>Lighting:</strong> Controlled dynamic lights, shadow settings, attenuation</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>VFX:</strong> GPU simulations with fixed bounds and pooled effects</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>VR:</strong> Instanced Stereo, Multi-View, efficient forward rendering</li>";

    // Card 3: Workflow & Memory
    if (memTitle) memTitle.innerHTML = "Workflow & Memory";
    if (memList) memList.innerHTML =
        "<li style='margin-bottom: 0.5rem;'><strong>References:</strong> Use of soft references and async loading</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>Build Size:</strong> Removal of unused plugins; selective map inclusion</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>Planning:</strong> Early performance planning in game design</li>" +
        "<li style='margin-bottom: 0.5rem;'><strong>Maintenance:</strong> Continuous profiling and documenting global changes</li>";

    // PDF Button
    if (pdfBtn) pdfBtn.innerHTML = "View Full PDF Guide (Only English)";

    // --- TAGLINES ---
    if (floattitle) floattitle.innerHTML = `FLOAT <span ${subStyle}>Award-winning MR for prosthetics research</span>`;
    if (godofaculttitle) godofaculttitle.innerHTML = `GOD OF A CULT <span ${subStyle}>Expandable comedic point-and-click cult sim</span>`;
    if (umbratitle) umbratitle.innerHTML = `UMBRA <span ${subStyle}>Atmospheric, unforgiving speedrun</span>`;
    if (neotokyotitle) neotokyotitle.innerHTML = `NEO TOKYO <span ${subStyle}>Endless wave-based action</span>`;
    if (mercurytitle) mercurytitle.innerHTML = `MERCURY <span ${subStyle}>World's first fast-paced hand-tracking brawler</span>`;

    // --- MERCURY ---
    if (mercuryScopeTitle) mercuryScopeTitle.innerText = "Project Scope";
    if (mercuryScopeDesc) mercuryScopeDesc.innerHTML = "- Under Development <br />- Team of 6 People <br />";
    if (mercuryRoleTitle) mercuryRoleTitle.innerText = "My Role";
    if (mercuryRoleDesc) mercuryRoleDesc.innerText = "- Player Mechanics";

    // Mercury Context
    if (mercuryTitles[0]) mercuryTitles[0].innerText = "The Context of the Code";
    if (mercuryDescs[0]) {
        mercuryDescs[0].innerText = "Mercury is the first VR mecha brawler with pure hand-gesture controls. It utilizes controller-free gorilla locomotion, pushing hand tracking to its limits with fast-paced combat. Developed in just five weeks, the project required extensive iteration to solve the challenges of the unique movement system in the city environment.";
    }
    // Mercury Locomotion (HTML Reset)
    if (mercuryTitles[1]) mercuryTitles[1].innerText = "Gorilla Locomotion System";
    if (mercuryDescs[1]) {
        mercuryDescs[1].innerHTML = `
        <h3 style="margin-bottom: 2px; font-size: 1.1em;">Hand-Surface Interaction</h3>
        <p style="margin-top: 0; margin-bottom: 15px;">Linetraces position the mecha hands directly on surfaces for consistent contact and clear player feedback.</p>

        <h3 style="margin-bottom: 2px; margin-top: 15px; font-size: 1.1em;">Grab Recognition</h3>
        <ul style="margin-top: 0; margin-bottom: 15px; padding-left: 20px;">
          <li>Pose-based detection with safeguards against unintended grabs/releases.</li>
          <li>Context-aware checks for floors vs. vertical surfaces.</li>
        </ul>

        <h3 style="margin-bottom: 2px; margin-top: 15px; font-size: 1.1em;">Surface Validation</h3>
        <p style="margin-top: 0; margin-bottom: 15px;">Sphere traces identify grab components and validate intent through hand-direction vs. surface-normal alignment.</p>

        <h3 style="margin-bottom: 2px; margin-top: 15px; font-size: 1.1em;">Climbing & Movement Response</h3>
        <ul style="margin-top: 0; margin-bottom: 15px; padding-left: 20px;">
          <li>Player movement is derived from relative hand motion with weighted recent input for high responsiveness.</li>
          <li>Adaptive transitions handle gravity, capsule scaling, and movement offsets during grabs.</li>
        </ul>

        <h3 style="margin-bottom: 2px; font-size: 1.1em;">Release Dynamics</h3>
        <ul style="margin-top: 0; margin-bottom: 0; padding-left: 20px;">
          <li>Final launch velocity blends camera aim, movement intent, and surface type.</li>
          <li>Short lockouts prevent accidental re-grabs and maintain fluid momentum.</li>
        </ul>`;
    }

    // --- NEO TOKYO ---
    if (neoProblemTitles.length > 0) neoProblemTitles[0].innerText = "What’s in the Box?";
    if (neoProblemDescs.length > 0) neoProblemDescs[0].innerText = "Core systems first: wave system, between-round shop, intro sequence. For VR we focused on fast, fun mechanics like procedural katana slicing.";
    if (neoProblemTitles.length > 1) neoProblemTitles[1].innerText = "Compromises";
    if (neoProblemDescs.length > 1) neoProblemDescs[1].innerText = "Skipped complex features like a currency system to keep scope realistic.";
    if (neoProblemTitles.length > 2) neoProblemTitles[2].innerText = "In hindsight";
    if (neoProblemDescs.length > 2) neoProblemDescs[2].innerText = "No revision control → higher workload on one person, fewer features shipped.";

    if (neoScopeTitle) neoScopeTitle.innerText = "Project Scope";
    if (neoScopeDesc) neoScopeDesc.innerHTML = "- 48-Hour Game Jam <br /> - Team of 6 People";
    if (neoRoleTitle) neoRoleTitle.innerText = "My Role";
    if (neoRoleDesc) neoRoleDesc.innerHTML = "- Main Programmer";
    if (NeoAchievementsTitle) NeoAchievementsTitle.innerHTML = "Achievements";
    if (NeoAchievementsDesc) NeoAchievementsDesc.innerHTML = "<ul>" +
        "<li>Exhibitor: HNU Werkschau</li>" +
        "<li><a href='https://events.games-bavaria.com/event/🎮-hessen-meets-bayern-game-connect-2025/' target='_blank' rel='noopener noreferrer'>Exhibitor: Game Connect 2025 - Bayern meets Hessen<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +
        "<li>Winner: 2. HNU Game Jam</li>" +
        "</ul>";

    // Mercury Achievements
    if (MercuryAchTitle) MercuryAchTitle.innerHTML = "Achievements";
    if (MercuryAchDesc) MercuryAchDesc.innerHTML = "<ul><li>" +
        "<a href='https://devpost.com/software/mercury-05i6ty' target='_blank' rel='noopener noreferrer'>" +
        "Participant: Meta Horizon Start Developer Competition" +
        "<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a>" +
        "</li></ul>";

    // --- GOD OF A CULT ---
    if (cultScopeTitle) cultScopeTitle.innerText = "Project Scope";
    if (cultScopeDesc) cultScopeDesc.innerHTML = "- 2nd Semester Project <br /> <a href='https://www.filmmakers.eu/en/actors/thorben-gohde' target='_blank' rel='noopener noreferrer'> - Voiced by Thorben Gohde <img src='./assets/hyperlink_icon.png' alt='External link' class='link-icon' /></a>";
    if (cultRoleTitle) cultRoleTitle.innerText = "My Role";
    if (cultRoleDesc) cultRoleDesc.innerHTML = "- Solo Project";
    if (cultProblemTitle) cultProblemTitle.innerText = "The Context of the Code";
    if (cultProblemDesc) cultProblemDesc.innerText = "To be able to create levels as fast as possible I created a System that works with only Datatables. The Game is fully voiced which is also implemented in a simple System.";
    if (CultAchievementsTitle) CultAchievementsTitle.innerText = "Achievements";
    if (CultAchievementsDesc) CultAchievementsDesc.innerHTML = "<ul><li>Exhibitor: HNU Werkschau</li><li>Showcase project for new semester</li></ul>";

    // --- UMBRA ---
    if (umbraScopeTitle) umbraScopeTitle.innerText = "Project Scope";
    if (umbraScopeDesc) umbraScopeDesc.innerHTML = "- 48-Hour Game Jam <br /> - Extended by 2 Weeks <br /> - Team of 4 People";
    if (umbraRoleTitle) umbraRoleTitle.innerText = "My Role";
    if (umbraRoleDesc) umbraRoleDesc.innerHTML = "- Only Programmer <br /> - Shader";
    if (umbraProblemTitle) umbraProblemTitle.innerText = "The Context of the Code";
    if (umbraProblemDesc) umbraProblemDesc.innerText = "For this Main Menu I created multiple Widgets so I could use them in different Projects. A Macro handles the opening of the different Sub-Widgets. The Main Menu is placed in a 3D Space and on the Materials is a basic Panner to create the Illusion of the Camera moving constantly.";
    if (UmbraAchievementsTitle) UmbraAchievementsTitle.innerText = "Achievements";
    if (UmbraAchievementsDesc) UmbraAchievementsDesc.innerHTML = "<ul>" +
        "<li>Exhibitor: HNU Werkschau</li>" +
        "<li><a href='https://events.games-bavaria.com/event/🎮-hessen-meets-bayern-game-connect-2025/' target='_blank' rel='noopener noreferrer'>Exhibitor: Game Connect 2025 - Bayern meets Hessen<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +
        "<li>Winner: 1. HNU Game Jam</li>" +
        "<li>Winner: HNU Werkschau | Best Sound</li>" +
        "</ul>";

    // --- FLOAT ---
    if (P1) P1.innerText = "Project Scope";
    if (P2) P2.innerHTML = "- 6 Months <br /> - Team of 6 People";
    if (RoleTitle) RoleTitle.innerText = "My Role";
    if (RoleDescription) RoleDescription.innerHTML = "- Main Programmer <br /> - Shader <br /> - Effects";
    if (ProblemTitle) ProblemTitle.innerText = "The Context of the Code";
    if (ProblemDesc) ProblemDesc.innerText = "We needed to place the Foliage as Instance Static Meshes and our Game Designer asked me if there is a way so he doesn’t have to manipulate each mesh individually. So I build him a simple Editor Utility Widget.";
    if (EmbedTitle) EmbedTitle.innerText = "The Context of the Code";
    if (EmbedDesc) EmbedDesc.innerText = "To create different types of obstacles in the game we decided to use Water. It had various requirements that needed to be met, like a form of interaction with the player.";
    if (AchievementsTitle) AchievementsTitle.innerText = "Achievements";
    if (AchievementsDesc) AchievementsDesc.innerHTML = "<ul>" +
        // Winners
        "<li><a href='https://www.mb21.de/wettbewerbsjahr_2025.html?articles=float' target='_blank' rel='noopener noreferrer'>Winner: Deutscher Multimediapreis mb21<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li><a href='https://www.studentgamesfestival.com/2025-winners' target='_blank' rel='noopener noreferrer'>Winner: Best Student Games Award | Meaningful Game<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li><a href='https://www.linkedin.com/feed/update/urn:li:activity:7334126257871175680/' target='_blank' rel='noopener noreferrer'>Winner: Varjo Academic Giveaway Campaign<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li>Winner: HNU Werkschau | Best Game-Award</li>" +

        // Nominees (mit margin-top)
        "<li style='margin-top: 20px;'><a href='https://nextrealitycontest.de/de/nominierte/nominierte-2025/' target='_blank' rel='noopener noreferrer'>Nominee: XRC25 | Young Talent<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li><a href='https://nextrealitycontest.de/de/nominierte/nominierte-2025/' target='_blank' rel='noopener noreferrer'>Nominee: XRC25 | Community Award<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        // Exhibitors (mit margin-top bei Business Area)
        "<li style='margin-top: 20px;'><a href='https://www.games-bavaria.com/gamescom-2025/' target='_blank' rel='noopener noreferrer'>Exhibitor: Gamescom 2025 | Business Area<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li><a href='https://rawtalentbooth.com' target='_blank' rel='noopener noreferrer'>Exhibitor: Gamescom 2025 | Entertainment Area<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li><a href='https://germandevdays.com/exhibitors' target='_blank' rel='noopener noreferrer'>Exhibitor: GermanDevDays 2025<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li><a href='https://play-con.de/ausstellerinnen-2025-neuulm/' target='_blank' rel='noopener noreferrer'>Exhibitor: Play! Con 2025<img src='./assets/hyperlink_icon.png' alt='Link' class='link-icon' /></a></li>" +

        "<li>Exhibitor: Hackerkiste Augsburg 2025</li>" +
        "<li>Exhibitor: TINCON 2025</li>" +

        // Member (mit margin-top)
        "<li style='margin-top: 20px;'>Member: Meta Horizon Start Community</li>" +
        "</ul>";

    // --- GENERAL UI ---
    if (allGamesBtn) allGamesBtn.innerText = "All my Games";
    if (floatDetailsBtn) floatDetailsBtn.innerText = "Details";
    if (cultDetailsBtn) cultDetailsBtn.innerText = "Details";
    if (umbraDetailsBtn) umbraDetailsBtn.innerText = "Details";
    if (neoTokyoDetailsBtn) neoTokyoDetailsBtn.innerText = "Details";
    if (mercuryDetailsBtn) mercuryDetailsBtn.innerText = "Details";

    localStorage.setItem('language', null);

    if (aboutt) aboutt.innerText = "About";
    if (experienceE) experienceE.innerText = "Experience";
    if (projectsS) projectsS.innerText = "Projects";
    if (contactT) contactT.innerText = "Contact";
    if (abouttt) abouttt.innerText = "About";
    if (experienceEE) experienceEE.innerText = "Experience";
    if (projectsSS) projectsSS.innerText = "Projects";
    if (contactTT) contactTT.innerText = "Contact";
    if (insightsS) insightsS.innerHTML = "Insights";
    if (insightsSS) insightsSS.innerHTML = "Insights";


    if (Hello) Hello.innerText = "Hello, I'm";
    if (Name) Name.innerText = "Lars Gohde";
    if (Developer) Developer.innerText = "Game and Shader Programmer";
    if (GetTo) GetTo.innerText = "Get To Know More";
    if (AboutMe) AboutMe.innerText = "About Me";
    if (Longtext) Longtext.innerText = "I first discovered game development in school through a class project. Seeing others play and enjoy what I had created sparked a feeling I never wanted to lose. In 2023 I visited Japan and developed a strong connection to the country, which continues to inspire me every day. Today, my motivation to create games is closely tied to my long-term ambition of building a career and life in Japan.";
    if (Browse) Browse.innerText = "Browse My";
    if (Projects) Projects.innerText = "Recent Projects";
    if (Contact) Contact.innerText = "Contact Me";
    if (about3) about3.innerText = "About";
    if (experience3) experience3.innerText = "Experience";
    if (projects3) projects3.innerText = "Projects";
    if (contact3) contact3.innerText = "Contact";
    if (insights3) insights3.innerHTML = "Insights";
}

// --- INIT ---
if (language === "active") {
    enableLanguage();
}

languageToggle.addEventListener("click", () => {
    language = localStorage.getItem('language');
    language !== "active" ? enableLanguage() : disableLanguage();
});
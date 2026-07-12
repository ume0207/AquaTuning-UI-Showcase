const roomData = {
  welcome: {
    title: "1.0 はじめに",
    description: "最初にご覧いただきたいAqua Tuningのご案内です。",
    pinned: "プロフィール設定と通知を確認してから、自己紹介へお進みください。",
    messages: [
      {
        avatar: "AT",
        author: "Aqua Tuning運営",
        time: "10:00",
        text: "Aqua Tuningへようこそ。\n\n1. お名前とアイコンを設定\n2. 通知を受け取りたいトークを確認\n3. 『3.1 自己紹介』でひとことご挨拶\n\n迷ったときは『1.2 よくあるご質問』をご覧ください。",
        image: "/assets/aqua-community.webp",
        imageAlt: "Aqua Tuningのメンバーが集まったコミュニティ写真",
        reactions: [["♡", 12], ["確認", 8]]
      },
      { avatar: "美", author: "美咲", time: "10:18", text: "よろしくお願いします。今日から少しずつ試してみます。", member: true, reactions: [["♡", 4]] }
    ]
  },
  notice: {
    title: "1.1 運営からのお知らせ",
    description: "更新情報や大切なご案内をお届けします。",
    pinned: "運営からのお知らせ専用トークです。",
    readonly: true,
    messages: [
      { avatar: "AT", author: "Aqua Tuning運営", time: "09:30", text: "新しいコンテンツ『朝の3分チューニング』を追加しました。コンテンツ内の『日々のセルフケア』からご覧いただけます。", reactions: [["♡", 16], ["見ました", 9]] }
    ]
  },
  faq: {
    title: "1.2 よくあるご質問",
    description: "ご利用方法について、よくいただく質問をまとめています。",
    pinned: "質問前に同じ内容がないか検索してみてください。",
    messages: [
      { avatar: "AT", author: "Aqua Tuning運営", time: "11:05", text: "Q. どこから始めればよいですか？\nA. 決まった順番はありません。最初は『Aqua Tuningのご案内』をご覧いただき、その日の気分に合う内容からお試しください。", reactions: [["参考になった", 11]] }
    ]
  },
  questions: {
    title: "2.1 なんでも質問ルーム",
    description: "Aqua Tuningについて気軽に質問できる場所です。",
    pinned: "どんな小さなことでも大丈夫です。",
    messages: [
      { avatar: "彩", author: "彩", time: "08:42", text: "夜に行う場合、時間はどれくらいが目安でしょうか？", member: true },
      { avatar: "AT", author: "Aqua Tuning運営", time: "09:12", text: "最初は3分ほどで十分です。心地よく続けられる長さを大切にしてください。", reactions: [["♡", 7]] }
    ]
  },
  practice: {
    title: "2.2 実践シェア",
    description: "試して感じたことや小さな気づきを共有しましょう。",
    pinned: "できたことも難しかったことも、そのままで大丈夫です。",
    messages: [
      { avatar: "由", author: "由佳", time: "07:58", text: "今朝は呼吸がいつもより深く入る感じがしました。短い時間でも、終わったあとの静けさが心地よかったです。", member: true, reactions: [["♡", 14], ["わかります", 3]] }
    ]
  },
  voice: {
    title: "2.3 受講生の声",
    description: "Aqua Tuningを続けて感じたことを読むことができます。",
    pinned: "掲載内容はご本人の了承をいただいています。",
    readonly: true,
    messages: [
      { avatar: "沙", author: "沙織", time: "12:24", text: "自分のために立ち止まる時間ができました。以前よりも、疲れていることに早く気づけるようになったと思います。", member: true, reactions: [["♡", 22]] }
    ]
  },
  profile: {
    title: "3.1 自己紹介",
    description: "運営と参加する皆さまの自己紹介トークです。",
    pinned: "お名前・参加のきっかけ・楽しみにしていることをお書きください。",
    messages: [
      {
        avatar: "AT",
        author: "Aqua Tuning運営",
        time: "17:45",
        text: "はじめまして、Aqua Tuning運営です。\n\n透明な音叉の響きを通して、自分の感覚へ静かに戻れる時間をお届けしています。大切にしているのは、正解に合わせることではなく、一人ひとりのペースを尊重すること。\n\n学び・実践・対話を安心して重ねられる場所を、皆さまと一緒につくっていきたいと思っています。",
        image: "/assets/aqua-navigator.webp",
        imageAlt: "透明な音叉を手にするAqua Tuningナビゲーター",
        reactions: [["♡", 18]]
      },
      { avatar: "奈", author: "奈々", time: "18:02", text: "忙しい日にも自分を整える習慣をつくりたくて参加しました。よろしくお願いします。", member: true, reactions: [["♡", 9]] }
    ]
  },
  daily: {
    title: "3.2 今日のセルフケア",
    description: "今日できた小さなセルフケアを残す場所です。",
    pinned: "ひとことだけでも大丈夫です。",
    messages: [
      { avatar: "恵", author: "恵", time: "21:10", text: "眠る前に『夜のリセット』を3分だけ。静かに呼吸できました。", member: true, reactions: [["♡", 6]] }
    ]
  },
  event: {
    title: "3.3 イベント・交流",
    description: "イベントのお知らせと参加者同士の交流ルームです。",
    pinned: "次回のオンライン交流会は、このトークでお知らせします。",
    messages: [
      { avatar: "AT", author: "Aqua Tuning運営", time: "15:00", text: "今月のオンライン交流会は、日々の取り入れ方をテーマに開催します。参加方法は後日ご案内します。", reactions: [["参加したい", 13]] }
    ]
  }
};

const contentData = {
  guide: {
    title: "0. Aqua Tuningのご案内",
    description: "最初にご覧いただきたい案内と基本の使い方です。",
    items: [
      ["Aqua Tuningへようこそ", "03分26秒", "video", "/assets/aqua-community.webp", 100],
      ["このコミュニティの使い方", "08分12秒", "video", "/assets/aqua-training.webp", 35],
      ["トークとコンテンツの歩き方", "記事", "article", "/assets/aqua-tool-sky.webp", 0],
      ["プロフィール・通知の設定", "資料", "article", "/assets/aqua-tool-detail.webp", 0],
      ["よくあるご質問", "記事", "article", "/assets/aqua-navigator.webp", 0]
    ]
  },
  basic: {
    title: "1. 基本の使い方",
    description: "心地よく始めるための基本を順番にご紹介します。",
    items: [
      ["Aqua Tuningの考え方", "06分40秒", "video", "/assets/aqua-philosophy.webp", 15],
      ["始める前に整えること", "05分18秒", "video", "/assets/aqua-session.webp", 0],
      ["音と振動を受け取る感覚", "09分02秒", "video", "/assets/aqua-tool-sky.webp", 0],
      ["無理なく続けるためのヒント", "記事", "article", "/assets/aqua-navigator.webp", 0]
    ]
  },
  care: {
    title: "2. 日々のセルフケア",
    description: "朝・昼・夜、暮らしのリズムに合わせて選べます。",
    items: [
      ["朝の3分チューニング", "03分08秒", "video", "/assets/aqua-hero.webp", 0],
      ["仕事の合間のリセット", "04分35秒", "video", "/assets/aqua-session.webp", 0],
      ["眠る前の静かな呼吸", "07分10秒", "video", "/assets/aqua-philosophy.webp", 0],
      ["今日の感覚を記録する", "ワークシート", "article", "/assets/aqua-tool-detail.webp", 0]
    ]
  },
  salon: {
    title: "3. サロンでの活用",
    description: "お客様への案内や空間づくりに取り入れるポイントです。",
    items: [
      ["セッション前の準備", "08分20秒", "video", "/assets/aqua-session.webp", 0],
      ["安心感のあるご案内方法", "記事", "article", "/assets/aqua-navigator.webp", 0],
      ["実践後の声かけと記録", "06分45秒", "video", "/assets/aqua-training.webp", 0]
    ]
  },
  faq: {
    title: "4. 質問・FAQ",
    description: "つまずきやすいポイントとよくある質問への回答です。",
    items: [
      ["最初はどの内容から見ればよいですか？", "記事", "article", "/assets/aqua-community.webp", 0],
      ["おすすめの実践時間はありますか？", "記事", "article", "/assets/aqua-tool-sky.webp", 0],
      ["感覚をつかみにくいときは？", "05分12秒", "video", "/assets/aqua-navigator.webp", 0],
      ["運営へのお問い合わせ方法", "記事", "article", "/assets/aqua-training.webp", 0]
    ]
  }
};

const concept = document.body.dataset.concept === "ripple" ? "ripple" : "guild";
const conceptLabel = concept === "ripple" ? "Ripple Studio" : "Soft Guild";

document.getElementById("app").innerHTML = `
  <svg class="svg-sprite" aria-hidden="true">
    <symbol id="i-talk" viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h.01M12 9h.01M16 9h.01"/></symbol>
    <symbol id="i-file" viewBox="0 0 24 24"><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></symbol>
    <symbol id="i-book" viewBox="0 0 24 24"><path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3z"/><path d="M8 8h6M8 12h6"/></symbol>
    <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></symbol>
    <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></symbol>
    <symbol id="i-close" viewBox="0 0 24 24"><path d="m5 5 14 14M19 5 5 19"/></symbol>
    <symbol id="i-send" viewBox="0 0 24 24"><path d="m3 3 18 9-18 9 4-9zM7 12h14"/></symbol>
    <symbol id="i-pin" viewBox="0 0 24 24"><path d="m14 4 6 6-3 1-4 4-1 5-2-2-2-2 5-1 4-4zM8 16l-5 5"/></symbol>
    <symbol id="i-chevron" viewBox="0 0 24 24"><path d="m7 9 5 5 5-5"/></symbol>
    <symbol id="i-play" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="m10 8 6 4-6 4z"/></symbol>
    <symbol id="i-check" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></symbol>
    <symbol id="i-bell" viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></symbol>
    <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M14 7l5 5-5 5"/></symbol>
  </svg>
  <div class="portal-shell">
    <aside class="module-rail" aria-label="メインメニュー">
      <a class="rail-logo" href="/" aria-label="UI選択へ戻る"><img src="/assets/aqua-tuning-mark.png" alt="" /></a>
      <div class="rail-line"></div>
      <button class="module-button is-active" data-tab="talk" type="button" aria-label="トーク"><svg><use href="#i-talk"/></svg><span>トーク</span><i></i></button>
      <button class="module-button" data-tab="content" type="button" aria-label="コンテンツ"><svg><use href="#i-file"/></svg><span>コンテンツ</span></button>
      <button class="module-button" data-tab="intro" type="button" aria-label="講座紹介"><svg><use href="#i-book"/></svg><span>講座紹介</span></button>
      <a class="rail-compare" href="/" title="UIを比較"><span>2</span><small>UI</small></a>
    </aside>

    <aside class="context-sidebar" id="contextSidebar">
      <header class="sidebar-brand">
        <div><p>AQUA COMMUNITY</p><h1>Aqua Tuning</h1></div>
        <button id="sidebarClose" type="button" aria-label="サイドバーを閉じる"><svg><use href="#i-close"/></svg></button>
      </header>

      <section class="side-panel is-active" data-side="talk">
        <label class="side-search"><svg><use href="#i-search"/></svg><input id="roomSearch" type="search" placeholder="トークを検索" /></label>
        <div class="channel-groups" id="channelGroups">
          <div class="channel-group">
            <button class="group-title" type="button" aria-expanded="true"><span><svg><use href="#i-chevron"/></svg>01 はじめに・ご案内</span><b>＋</b></button>
            <div class="channel-list">
              <button class="channel-row is-selected" data-room="welcome" type="button"><span>#</span>1.0 はじめに<i></i></button>
              <button class="channel-row" data-room="notice" type="button"><span>#</span>1.1 運営からのお知らせ<i></i></button>
              <button class="channel-row" data-room="faq" type="button"><span>#</span>1.2 よくあるご質問</button>
            </div>
          </div>
          <div class="channel-group">
            <button class="group-title" type="button" aria-expanded="true"><span><svg><use href="#i-chevron"/></svg>02 Aqua Tuning</span><b>＋</b></button>
            <div class="channel-list">
              <button class="channel-row" data-room="questions" type="button"><span>#</span>2.1 なんでも質問ルーム</button>
              <button class="channel-row" data-room="practice" type="button"><span>#</span>2.2 実践シェア<i></i></button>
              <button class="channel-row" data-room="voice" type="button"><span>#</span>2.3 受講生の声</button>
            </div>
          </div>
          <div class="channel-group">
            <button class="group-title" type="button" aria-expanded="true"><span><svg><use href="#i-chevron"/></svg>03 交流・日々の投稿</span><b>＋</b></button>
            <div class="channel-list">
              <button class="channel-row" data-room="profile" type="button"><span>#</span>3.1 自己紹介</button>
              <button class="channel-row" data-room="daily" type="button"><span>#</span>3.2 今日のセルフケア<i></i></button>
              <button class="channel-row" data-room="event" type="button"><span>#</span>3.3 イベント・交流</button>
            </div>
          </div>
        </div>
      </section>

      <section class="side-panel" data-side="content">
        <p class="side-eyebrow">LEARNING PATH</p>
        <nav class="content-nav">
          <button class="content-nav-row is-selected" data-section="guide" type="button"><span>00</span><div><b>Aqua Tuningのご案内</b><small>5 contents</small></div></button>
          <button class="content-nav-row" data-section="basic" type="button"><span>01</span><div><b>基本の使い方</b><small>4 contents</small></div></button>
          <button class="content-nav-row" data-section="care" type="button"><span>02</span><div><b>日々のセルフケア</b><small>4 contents</small></div></button>
          <button class="content-nav-row" data-section="salon" type="button"><span>03</span><div><b>サロンでの活用</b><small>3 contents</small></div></button>
          <button class="content-nav-row" data-section="faq" type="button"><span>04</span><div><b>質問・FAQ</b><small>4 contents</small></div></button>
        </nav>
      </section>

      <section class="side-panel" data-side="intro">
        <p class="side-eyebrow">ABOUT THE COURSE</p>
        <nav class="intro-nav">
          <button data-anchor="introTop" type="button"><span>01</span>この講座について</button>
          <button data-anchor="philosophy" type="button"><span>02</span>大切にしていること</button>
          <button data-anchor="navigator" type="button"><span>03</span>ナビゲーター</button>
          <button data-anchor="community" type="button"><span>04</span>学びのコミュニティ</button>
        </nav>
        <figure class="sidebar-photo"><img src="/assets/aqua-tool-detail.webp" alt="透明な音叉" /><figcaption>Listen to your own rhythm.</figcaption></figure>
      </section>

      <footer class="sidebar-profile"><span>ME</span><div><b>あなた</b><small>オンライン</small></div><button type="button" aria-label="通知"><svg><use href="#i-bell"/></svg></button></footer>
    </aside>

    <main class="workspace">
      <header class="workspace-topbar">
        <button class="mobile-menu" id="sidebarOpen" type="button" aria-label="サイドバーを開く"><svg><use href="#i-menu"/></svg></button>
        <div class="breadcrumb"><span id="viewMark">#</span><div><b id="viewTitle">1.0 はじめに</b><small id="viewDescription">最初にご覧いただきたいAqua Tuningのご案内です。</small></div></div>
        <div class="top-actions"><a href="/">2 UI</a><span class="concept-badge">${conceptLabel}</span><button type="button" aria-label="通知"><svg><use href="#i-bell"/></svg></button></div>
      </header>

      <section class="workspace-panel talk-panel is-active" data-panel="talk">
        <div class="pinned-note"><svg><use href="#i-pin"/></svg><p id="pinnedText"></p></div>
        <div class="message-stream" id="messageStream" aria-live="polite"></div>
        <form class="message-composer" id="messageForm"><button type="button" aria-label="添付">＋</button><input id="messageInput" type="text" placeholder="メッセージを入力…" autocomplete="off" /><button class="composer-send" type="submit" aria-label="送信"><svg><use href="#i-send"/></svg></button></form>
      </section>

      <section class="workspace-panel content-panel" data-panel="content" hidden>
        <header class="content-heading"><p>CONTENTS / LEARNING PATH</p><h2 id="contentTitle"></h2><span id="contentDescription"></span></header>
        <ol class="lesson-list" id="lessonList"></ol>
      </section>

      <section class="workspace-panel intro-panel" data-panel="intro" hidden>
        <article class="course-article">
          <section class="course-hero" id="introTop"><img src="/assets/aqua-hero.webp" alt="海辺で透明な音叉を手にするAqua Tuningナビゲーター" /><div><p>TUNE YOUR NATURAL RHYTHM</p><h2>Aqua<br />Tuning</h2><span>響きで、自分の感覚へ還る。</span></div></section>
          <section class="course-about"><div><p class="course-kicker">ABOUT</p><h3>透明な響きと、<br />静かな時間。</h3></div><div><p>Aqua Tuningは、透明な音叉の響きと振動を通して、自分の内側にある感覚へ静かに意識を向けるための時間です。</p><p>正しさや速さを求めるのではなく、水が器に合わせて形を変えるように、一人ひとりのリズムを大切にします。</p></div></section>
          <section class="course-philosophy" id="philosophy"><figure><img src="/assets/aqua-philosophy.webp" alt="水辺に置かれた透明な音叉" /></figure><div><p class="course-kicker">PHILOSOPHY</p><h3>水のように、<br />しなやかに。</h3><p>何かを無理に変えるのではなく、今ここにある感覚に気づくこと。その人らしいリズムを尊重し、日常へ戻ったあとも自分をいたわる余白を育てます。</p><ol><li><span>01</span><b>感じる</b><small>小さな感覚に耳を澄ませる</small></li><li><span>02</span><b>尊重する</b><small>一人ひとりのペースを大切に</small></li><li><span>03</span><b>つなげる</b><small>心地よさを日々の暮らしへ</small></li></ol></div></section>
          <section class="course-navigator" id="navigator"><div><p class="course-kicker">NAVIGATOR</p><h3>講師・ナビゲーター</h3><p>透明な音叉の響きを通して、目の前の方が自分の感覚へ静かに戻れる時間をお届けします。安心して学びと実践を重ねられるよう、丁寧にご案内します。</p><blockquote>“自分自身のリズムを、もう一度聴く。”</blockquote></div><figure><img src="/assets/aqua-navigator.webp" alt="Aqua Tuningナビゲーター" /><figcaption>Aqua Tuning 運営</figcaption></figure></section>
          <section class="course-community" id="community"><img src="/assets/aqua-community.webp" alt="Aqua Tuningコミュニティの皆さま" /><div><p class="course-kicker">COMMUNITY</p><h3>学び、実践し、<br />響き合う場所。</h3><p>講座の内容だけでなく、日々の気づきや実践を安心して共有できるコミュニティです。</p><button data-jump-tab="talk" type="button">トークへ参加する <svg><use href="#i-arrow"/></svg></button></div></section>
        </article>
      </section>
    </main>

    <aside class="presence-rail" aria-label="参加メンバー"><p>ONLINE — 4</p><div><span class="avatar at">AT</span><b>Aqua Tuning運営</b><small>運営</small></div><div><span class="avatar rose">美</span><b>美咲</b><small>オンライン</small></div><div><span class="avatar mint">奈</span><b>奈々</b><small>オンライン</small></div><div><span class="avatar lilac">彩</span><b>彩</b><small>オンライン</small></div></aside>
    <button class="sidebar-scrim" id="sidebarScrim" type="button" aria-label="サイドバーを閉じる"></button>
    <div class="toast" id="toast" role="status"></div>
  </div>
`;

const icon = (id) => `<svg><use href="#${id}"/></svg>`;
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

let activeTab = "talk";
let activeRoom = "welcome";
let activeSection = "guide";
let toastTimer;

function updateUrl(values, replace = false) {
  const url = new URL(location.href);
  Object.entries(values).forEach(([key, value]) => value ? url.searchParams.set(key, value) : url.searchParams.delete(key));
  history[replace ? "replaceState" : "pushState"]({}, "", url);
}

function showToast(text) {
  const toast = $("#toast");
  clearTimeout(toastTimer);
  toast.textContent = text;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function closeSidebar() { document.body.classList.remove("sidebar-open"); }

function setTab(tab, updateHistory = true) {
  if (!["talk", "content", "intro"].includes(tab)) tab = "talk";
  activeTab = tab;
  $$(".module-button").forEach((button) => button.classList.toggle("is-active", button.dataset.tab === tab));
  $$(".side-panel").forEach((panel) => panel.classList.toggle("is-active", panel.dataset.side === tab));
  $$(".workspace-panel").forEach((panel) => {
    const selected = panel.dataset.panel === tab;
    panel.hidden = !selected;
    panel.classList.toggle("is-active", selected);
  });
  if (tab === "talk") setTopbar(roomData[activeRoom].title, roomData[activeRoom].description, "#");
  if (tab === "content") setTopbar(contentData[activeSection].title, contentData[activeSection].description, "□");
  if (tab === "intro") setTopbar("講座の紹介", "Aqua Tuningが大切にしている理念と学びについて。", "○");
  if (updateHistory) updateUrl({ tab, room: tab === "talk" ? activeRoom : null });
  closeSidebar();
}

function setTopbar(title, description, mark) {
  $("#viewTitle").textContent = title;
  $("#viewDescription").textContent = description;
  $("#viewMark").textContent = mark;
}

function createMessage(message) {
  const article = document.createElement("article");
  article.className = `message${message.member ? " is-member" : ""}`;
  const avatar = document.createElement("span");
  avatar.className = "message-avatar";
  avatar.textContent = message.avatar;
  const content = document.createElement("div");
  content.className = "message-content";
  const meta = document.createElement("header");
  const author = document.createElement("b");
  author.textContent = message.author;
  const time = document.createElement("time");
  time.textContent = message.time;
  meta.append(author, time);
  const body = document.createElement("p");
  body.textContent = message.text;
  content.append(meta, body);
  if (message.image) {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    image.src = message.image;
    image.alt = message.imageAlt || "";
    image.loading = "lazy";
    figure.append(image);
    content.append(figure);
  }
  if (message.reactions?.length) {
    const reactions = document.createElement("div");
    reactions.className = "reactions";
    message.reactions.forEach(([label, count]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.label = label;
      button.dataset.count = count;
      button.textContent = `${label} ${count}`;
      reactions.append(button);
    });
    content.append(reactions);
  }
  article.append(avatar, content);
  return article;
}

function renderRoom(roomId, updateHistory = true) {
  const room = roomData[roomId] || roomData.welcome;
  activeRoom = roomData[roomId] ? roomId : "welcome";
  $$(".channel-row").forEach((row) => row.classList.toggle("is-selected", row.dataset.room === activeRoom));
  $("#pinnedText").textContent = room.pinned;
  const stream = $("#messageStream");
  stream.replaceChildren();
  const divider = document.createElement("div");
  divider.className = "date-divider";
  divider.innerHTML = "<span>7月13日</span>";
  stream.append(divider);
  room.messages.forEach((message) => stream.append(createMessage(message)));
  const input = $("#messageInput");
  input.disabled = Boolean(room.readonly);
  input.placeholder = room.readonly ? "このトークには投稿できません" : "メッセージを入力…";
  $("#messageForm").classList.toggle("is-readonly", Boolean(room.readonly));
  setTopbar(room.title, room.description, "#");
  if (updateHistory) updateUrl({ tab: "talk", room: activeRoom });
  closeSidebar();
}

function renderLessons(sectionId) {
  const section = contentData[sectionId] || contentData.guide;
  activeSection = contentData[sectionId] ? sectionId : "guide";
  $$(".content-nav-row").forEach((row) => row.classList.toggle("is-selected", row.dataset.section === activeSection));
  $("#contentTitle").textContent = section.title;
  $("#contentDescription").textContent = section.description;
  setTopbar(section.title, section.description, "□");
  const list = $("#lessonList");
  list.replaceChildren();
  section.items.forEach(([title, duration, type, image, progress], index) => {
    const item = document.createElement("li");
    item.tabIndex = 0;
    item.innerHTML = `
      <span class="lesson-number">${String(index + 1).padStart(2, "0")}</span>
      <figure><img src="${image}" alt="" loading="lazy" /></figure>
      <div class="lesson-copy"><p>${type === "video" ? icon("i-play") : icon("i-file")}<b>${title}</b></p><span>${duration}</span><div class="lesson-progress"><i style="width:${progress}%"></i></div></div>
      <strong>${progress}%</strong><button type="button" aria-label="開く">${icon("i-arrow")}</button>`;
    const open = () => showToast(`「${title}」を選択しました。`);
    item.addEventListener("click", open);
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); }
    });
    list.append(item);
  });
}

function initialise() {
  const params = new URLSearchParams(location.search);
  const tab = ["talk", "content", "intro"].includes(params.get("tab")) ? params.get("tab") : "talk";
  const room = roomData[params.get("room")] ? params.get("room") : "welcome";
  renderRoom(room, false);
  renderLessons("guide");
  setTab(tab, false);
  updateUrl({ tab, room: tab === "talk" ? room : null }, true);
}

$$(".module-button").forEach((button) => button.addEventListener("click", () => setTab(button.dataset.tab)));
$$(".channel-row").forEach((button) => button.addEventListener("click", () => renderRoom(button.dataset.room)));
$$(".content-nav-row").forEach((button) => button.addEventListener("click", () => { renderLessons(button.dataset.section); closeSidebar(); }));
$$(".group-title").forEach((button) => button.addEventListener("click", () => {
  const group = button.closest(".channel-group");
  const collapsed = group.classList.toggle("is-collapsed");
  button.setAttribute("aria-expanded", String(!collapsed));
}));

$("#roomSearch").addEventListener("input", (event) => {
  const query = event.target.value.trim().toLocaleLowerCase("ja");
  $$(".channel-group").forEach((group) => {
    const rows = $$(".channel-row", group);
    rows.forEach((row) => { row.hidden = Boolean(query) && !row.textContent.toLocaleLowerCase("ja").includes(query); });
    group.hidden = rows.every((row) => row.hidden);
  });
});

$("#messageStream").addEventListener("click", (event) => {
  const button = event.target.closest(".reactions button");
  if (!button) return;
  const active = button.classList.toggle("is-active");
  const count = Number(button.dataset.count) + (active ? 1 : 0);
  button.textContent = `${button.dataset.label} ${count}`;
});

$("#messageForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = $("#messageInput");
  const text = input.value.trim();
  if (!text || roomData[activeRoom].readonly) return;
  const message = { avatar: "私", author: "あなた", time: new Date().toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" }), text, member: true };
  roomData[activeRoom].messages.push(message);
  $("#messageStream").append(createMessage(message));
  input.value = "";
  $("#messageStream").scrollTop = $("#messageStream").scrollHeight;
});

$$("[data-anchor]").forEach((button) => button.addEventListener("click", () => {
  closeSidebar();
  setTimeout(() => document.getElementById(button.dataset.anchor)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
}));

$$("[data-jump-tab]").forEach((button) => button.addEventListener("click", () => setTab(button.dataset.jumpTab)));
$("#sidebarOpen").addEventListener("click", () => document.body.classList.add("sidebar-open"));
$("#sidebarClose").addEventListener("click", closeSidebar);
$("#sidebarScrim").addEventListener("click", closeSidebar);

window.addEventListener("popstate", () => {
  const params = new URLSearchParams(location.search);
  const tab = params.get("tab") || "talk";
  if (params.get("room") && roomData[params.get("room")]) renderRoom(params.get("room"), false);
  setTab(tab, false);
});

initialise();

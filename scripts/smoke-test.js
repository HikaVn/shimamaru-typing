// 手動回帰テスト: 制限時間 / 経験値(XP) / ワシ(鷲) のゲーム配線を
// jsdom 上で index.html + shimamaru-xp.js + game.js を実際に読み込んで検証する。
//
// 使い方:  npm i jsdom   (初回のみ。node_modules は .gitignore 済み)
//          node scripts/smoke-test.js
const { JSDOM } = require("jsdom");
const fs = require("fs");
const dir = __dirname + "/..";

const dom = new JSDOM(fs.readFileSync(dir + "/index.html", "utf8"), {
  url: "https://hikavn.github.io/shimamaru-typing/",
  runScripts: "dangerously",
  pretendToBeVisual: true,
  beforeParse(window) {
    // jsdom に無いブラウザ API をスタブ（本物のブラウザでは存在する）。
    window.Audio = function () {
      return { play() {}, pause() {}, load() {}, addEventListener() {}, removeEventListener() {},
        set src(v) {}, get src() { return ""; }, volume: 0, loop: false, currentTime: 0 };
    };
    window.indexedDB = { open() { const r = {}; setTimeout(() => r.onerror && r.onerror({}), 0); return r; } };
    window.matchMedia = function () { return { matches: false, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} }; };
  }
});

const w = dom.window;
const doc = w.document;
const $ = (id) => doc.getElementById(id);
const assert = (cond, msg) => { if (!cond) throw new Error("FAIL: " + msg); console.log("ok -", msg); };

try {
  // 外部スクリプトはネットワークではなくローカルから注入する。
  w.eval(fs.readFileSync(dir + "/shimamaru-xp.js", "utf8"));
  w.eval(fs.readFileSync(dir + "/game.js", "utf8"));

  assert(w.ShimamaruXp, "経験値モジュールが読み込まれる");
  w.localStorage.removeItem(w.ShimamaruXp.STORAGE_KEY);

  // 全モードに制限時間: 練習モードでもタイマー開始＆60秒表示
  w.startGame("practice");
  assert($("timeLeft").textContent === "60", "開始時 残り時間=60 (" + $("timeLeft").textContent + ")");
  assert(!$("eagle").className.includes("eagle--chasing"), "開始時はワシは出ない");

  // 正解打鍵で XP が貯まる
  for (let i = 0; i < 20; i++) {
    const k = w.getNextTypingKey();
    if (!k) break;
    w.handleInput({ key: k, preventDefault() {} });
  }
  assert(/^\+[1-9]/.test($("xpGain").textContent), "打鍵で経験値が加算: " + $("xpGain").textContent);

  // 残り時間が半分を切るとワシが追ってくる
  for (let i = 0; i < 31 && $("resultScreen").className.includes("hidden"); i++) w.tick();
  assert($("eagle").className.includes("eagle--chasing"), "残り半分でワシが追跡開始");

  // 時間切れで終了 → リザルトに経験値とレベル
  for (let i = 0; i < 40 && $("resultScreen").className.includes("hidden"); i++) w.tick();
  assert(!$("resultScreen").className.includes("hidden"), "時間切れでリザルト表示");
  assert(/^\+[1-9]/.test($("finalXp").textContent), "リザルトに獲得XP: " + $("finalXp").textContent);
  assert($("resultLevel").textContent.length > 0, "リザルトにレベル: " + $("resultLevel").textContent);

  // 共有ストアに 1 回だけ確定保存
  const s = w.ShimamaruXp.load();
  assert(s.plays === 1, "終了は1回だけ確定 (plays=" + s.plays + ")");
  assert(s.totalXp > 0 && s.source.typing === s.totalXp, "XPが二重計上されない: " + s.totalXp);

  // 端末間マージ用 import（totalが大きい方を採用）
  const merged = w.ShimamaruXp.importJson(JSON.stringify({ version: 1, totalXp: 99999, level: 1, plays: 9, source: { task: 99999 } }));
  assert(merged.totalXp === 99999 && merged.level > 1, "import(大きい方)でマージ: Lv" + merged.level);

  console.log("\nALL SMOKE TESTS PASSED");
  process.exit(0);
} catch (e) {
  console.error("\nSMOKE TEST ERROR:", e.message);
  process.exit(1);
}

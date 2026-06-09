let WORDS = {
  easy: [
    { display: "ゆき", kana: "ゆき" },
    { display: "もり", kana: "もり" },
    { display: "そら", kana: "そら" },
    { display: "えだ", kana: "えだ" },
    { display: "はね", kana: "はね" },
    { display: "しろ", kana: "しろ" },
    { display: "こえ", kana: "こえ" },
    { display: "まめ", kana: "まめ" },
    { display: "くも", kana: "くも" },
    { display: "あさ", kana: "あさ" },
    { display: "よる", kana: "よる" },
    { display: "みず", kana: "みず" },
    { display: "きのみ", kana: "きのみ" },
    { display: "こなゆき", kana: "こなゆき" },
    { display: "ふゆ", kana: "ふゆ" },
    { display: "つき", kana: "つき" },
    { display: "てん", kana: "てん" },
    { display: "ゆめ", kana: "ゆめ" },
    { display: "はる", kana: "はる" },
    { display: "こおり", kana: "こおり" },
    { display: "みち", kana: "みち" },
    { display: "かぜ", kana: "かぜ" },
    { display: "ほし", kana: "ほし" },
    { display: "おと", kana: "おと" },
    { display: "あし", kana: "あし" },
    { display: "うた", kana: "うた" },
    { display: "たね", kana: "たね" },
    { display: "はな", kana: "はな" },
    { display: "いえ", kana: "いえ" }
  ],
  normal: [
    { display: "シマエナガ", kana: "しまえなが" },
    { display: "しらかば", kana: "しらかば" },
    { display: "ゆきのもり", kana: "ゆきのもり" },
    { display: "まつぼっくり", kana: "まつぼっくり" },
    { display: "こおりみず", kana: "こおりみず" },
    { display: "あさひ", kana: "あさひ" },
    { display: "こえだ", kana: "こえだ" },
    { display: "はばたき", kana: "はばたき" },
    { display: "まっしろ", kana: "まっしろ" },
    { display: "ゆきあそび", kana: "ゆきあそび" },
    { display: "ほっかいどう", kana: "ほっかいどう" },
    { display: "ふわふわ", kana: "ふわふわ" },
    { display: "つめたい", kana: "つめたい" },
    { display: "ひだまり", kana: "ひだまり" },
    { display: "おさんぽ", kana: "おさんぽ" },
    { display: "ゆきだるま", kana: "ゆきだるま" },
    { display: "しろいはね", kana: "しろいはね" },
    { display: "こもれび", kana: "こもれび" },
    { display: "もりのこえ", kana: "もりのこえ" },
    { display: "ちいさなて", kana: "ちいさなて" },
    { display: "きらきら", kana: "きらきら" },
    { display: "ふゆぞら", kana: "ふゆぞら" },
    { display: "ゆきみち", kana: "ゆきみち" },
    { display: "まるいからだ", kana: "まるいからだ" },
    { display: "ジュリリ", kana: "じゅりり" },
    { display: "あたたかい", kana: "あたたかい" },
    { display: "おひさま", kana: "おひさま" }
  ],
  hard: [
    { display: "ちいさなあしあと", kana: "ちいさなあしあと" },
    { display: "しずかなゆきげしき", kana: "しずかなゆきげしき" },
    { display: "ふわっととびたつ", kana: "ふわっととびたつ" },
    { display: "まっしろなはね", kana: "まっしろなはね" },
    { display: "こなゆきがまう", kana: "こなゆきがまう" },
    { display: "しらかばのこみち", kana: "しらかばのこみち" },
    { display: "きのみをあつめる", kana: "きのみをあつめる" },
    { display: "ゆきあかりのもり", kana: "ゆきあかりのもり" },
    { display: "そっとえだにとまる", kana: "そっとえだにとまる" },
    { display: "なかまとならんでねむる", kana: "なかまとならんでねむる" },
    { display: "ふわふわのしままる", kana: "ふわふわのしままる" },
    { display: "ゆきのうえをあるく", kana: "ゆきのうえをあるく" },
    { display: "まるいあしあとがつづく", kana: "まるいあしあとがつづく" },
    { display: "きらめくこおりのこみち", kana: "きらめくこおりのこみち" },
    { display: "ジュリリとげんきにうたう", kana: "じゅりりとげんきにうたう" },
    { display: "ふゆのもりでひとやすみ", kana: "ふゆのもりでひとやすみ" },
    { display: "しずかにまうこなゆき", kana: "しずかにまうこなゆき" },
    { display: "あさひにひかるしらかば", kana: "あさひにひかるしらかば" },
    { display: "ちいさなくちばしでつつく", kana: "ちいさなくちばしでつつく" },
    { display: "しままるといっしょにすすむ", kana: "しままるといっしょにすすむ" }
  ]
};

let LONG_TEXTS = [
  {
    display: "シマエナガが まっしろな雪の上を とびました",
    kana: "しまえなががまっしろなゆきのうえをとびました"
  },
  {
    display: "こな雪の森で 小さな足あとを 見つけました",
    kana: "こなゆきのもりでちいさなあしあとをみつけました"
  },
  {
    display: "しらかばの枝に とまって ジュリリと鳴きました",
    kana: "しらかばのえだにとまってじゅりりとなきました"
  },
  {
    display: "朝日がさすころ 仲間と木の実を集めました",
    kana: "あさひがさすころなかまときのみをあつめました"
  },
  {
    display: "しままるは 雪の小道で 小さな足あとを数えました",
    kana: "しままるはゆきのこみちでちいさなあしあとをかぞえました"
  },
  {
    display: "白い森の奥から やさしいジュリリという声が聞こえました",
    kana: "しろいもりのおくからやさしいじゅりりというこえがきこえました"
  },
  {
    display: "木の実を見つけたしままるは うれしくて雪の上をはねました",
    kana: "きのみをみつけたしままるはうれしくてゆきのうえをはねました"
  },
  {
    display: "風が吹いても ホームポジションに戻れば落ち着いて打てます",
    kana: "かぜがふいてもほーむぽじしょんにもどればおちついてうてます"
  },
  {
    display: "今日の練習を終えるころ 森には星あかりがともりました",
    kana: "きょうのれんしゅうをおえるころもりにはほしあかりがともりました"
  }
];

let SYMBOL_NUMBER_TEXTS = [
  "12345",
  "67890",
  "2026",
  "10-20",
  "3.14",
  "7,890",
  "1/2/3",
  "a1 s2 d3",
  "j7 k8 l9",
  "snow-01",
  "juri. juri.",
  "typing, go!",
  "A+B=C",
  "5*5=25",
  "100%",
  "1:30",
  "Q1-Q4",
  "no.1",
  "shift?",
  "ready!"
].map((text) => ({ display: text, direct: text.toLowerCase(), focusKeys: [...new Set(text.toLowerCase().replace(/\s/g, "").split(""))] }));

let KEY_FOCUS_TEXTS = [
  "aqaz",
  "swsx",
  "dedc",
  "frftfgfvfb",
  "juyhjnhm",
  "kik,",
  "lol.",
  ";p;/",
  "qaz qaz",
  "wsx wsx",
  "edc edc",
  "rfv tgb",
  "yhn ujm",
  "ik, ik,",
  "ol. ol.",
  "p;/ p;/"
].map((text) => ({ display: text.toUpperCase(), direct: text.toLowerCase(), focusKeys: [...new Set(text.toLowerCase().replace(/\s/g, "").split(""))] }));

let STORY_STAGES = [
  {
    id: "snow-path",
    title: "雪の小道",
    subtitle: "はじめてのおさんぽ",
    type: "words",
    difficulty: "easy",
    targetCount: 8,
    reward: "雪の結晶",
    intro: "まずは雪の小道を歩くジュリ。短い言葉から、ゆっくり打ってみるジュリ。",
    outro: "ジュリリ〜！ 足あとがまっすぐ続いているジュリ。しらかばの森へ進むジュリ。"
  },
  {
    id: "birch-forest",
    title: "しらかばの森",
    subtitle: "木の実をさがして",
    type: "words",
    difficulty: "normal",
    targetCount: 10,
    reward: "木の実",
    intro: "しらかばの森に入るジュリ。木の実を見つけながら、落ち着いて打つジュリ。",
    outro: "木の実をたくさん集めたジュリリ〜。こな雪の丘が見えてきたジュリ。"
  },
  {
    id: "powder-hill",
    title: "こな雪の丘",
    subtitle: "飛ばされた地図",
    type: "words",
    difficulty: "hard",
    targetCount: 8,
    reward: "小さな地図",
    intro: "風が少し強いジュリ。長めの言葉も、ひとつずつ確かめるジュリ。",
    outro: "地図を見つけたジュリ！ 夕暮れの枝まで、あと少しジュリ。"
  },
  {
    id: "sunset-branch",
    title: "夕暮れの枝",
    subtitle: "仲間の声をたどる",
    type: "long",
    targetCount: 2,
    reward: "仲間の羽",
    intro: "ジュリリ〜、仲間の声が聞こえるジュリ。短い文章を最後まで打つジュリ。",
    outro: "声が近づいてきたジュリ。星あかりの巣へ向かうジュリ。"
  },
  {
    id: "starlit-nest",
    title: "星あかりの巣",
    subtitle: "みんなで帰ろう",
    type: "long",
    targetCount: 3,
    reward: "星あかり",
    intro: "最後のおさんぽジュリ。深呼吸して、文章をなめらかに打つジュリ。",
    outro: "ジュリリ〜！ みんなと合流できたジュリ。また一緒におさんぽするジュリ♪"
  }
];

const ROMAN_TABLE = {
  きゃ: ["kya"], きゅ: ["kyu"], きょ: ["kyo"],
  しゃ: ["sha", "sya"], しゅ: ["shu", "syu"], しょ: ["sho", "syo"],
  ちゃ: ["cha", "tya", "cya"], ちゅ: ["chu", "tyu", "cyu"], ちょ: ["cho", "tyo", "cyo"],
  にゃ: ["nya"], にゅ: ["nyu"], にょ: ["nyo"],
  ひゃ: ["hya"], ひゅ: ["hyu"], ひょ: ["hyo"],
  みゃ: ["mya"], みゅ: ["myu"], みょ: ["myo"],
  りゃ: ["rya"], りゅ: ["ryu"], りょ: ["ryo"],
  ぎゃ: ["gya"], ぎゅ: ["gyu"], ぎょ: ["gyo"],
  じゃ: ["ja", "jya", "zya"], じゅ: ["ju", "jyu", "zyu"], じょ: ["jo", "jyo", "zyo"],
  びゃ: ["bya"], びゅ: ["byu"], びょ: ["byo"],
  ぴゃ: ["pya"], ぴゅ: ["pyu"], ぴょ: ["pyo"],
  ふぁ: ["fa"], ふぃ: ["fi"], ふぇ: ["fe"], ふぉ: ["fo"],
  あ: ["a"], い: ["i"], う: ["u"], え: ["e"], お: ["o"],
  か: ["ka"], き: ["ki"], く: ["ku"], け: ["ke"], こ: ["ko"],
  さ: ["sa"], し: ["shi", "si"], す: ["su"], せ: ["se"], そ: ["so"],
  た: ["ta"], ち: ["chi", "ti"], つ: ["tsu", "tu"], て: ["te"], と: ["to"],
  な: ["na"], に: ["ni"], ぬ: ["nu"], ね: ["ne"], の: ["no"],
  は: ["ha"], ひ: ["hi"], ふ: ["fu", "hu"], へ: ["he"], ほ: ["ho"],
  ま: ["ma"], み: ["mi"], む: ["mu"], め: ["me"], も: ["mo"],
  や: ["ya"], ゆ: ["yu"], よ: ["yo"],
  ら: ["ra"], り: ["ri"], る: ["ru"], れ: ["re"], ろ: ["ro"],
  わ: ["wa"], を: ["wo", "o"], ん: ["nn", "n"],
  が: ["ga"], ぎ: ["gi"], ぐ: ["gu"], げ: ["ge"], ご: ["go"],
  ざ: ["za"], じ: ["ji", "zi"], ず: ["zu"], ぜ: ["ze"], ぞ: ["zo"],
  だ: ["da"], ぢ: ["di"], づ: ["du"], で: ["de"], ど: ["do"],
  ば: ["ba"], び: ["bi"], ぶ: ["bu"], べ: ["be"], ぼ: ["bo"],
  ぱ: ["pa"], ぴ: ["pi"], ぷ: ["pu"], ぺ: ["pe"], ぽ: ["po"],
  ー: ["-"]
};

const CONTENT_DATA_PATH = "typing-content.json";

async function loadContentData() {
  try {
    const response = await fetch(CONTENT_DATA_PATH, { cache: "no-store" });
    if (!response.ok) throw new Error(`Failed to load content: ${response.status}`);
    const data = await response.json();
    applyContentData(data);
  } catch (error) {
    console.warn("コンテンツJSONの読み込みに失敗したため、既定データを使います。", error);
  }
}

function applyContentData(data) {
  if (!data || typeof data !== "object") return;

  if (data.words?.easy && data.words?.normal && data.words?.hard) {
    WORDS = data.words;
  }

  if (Array.isArray(data.longTexts) && data.longTexts.length) {
    LONG_TEXTS = data.longTexts;
  }

  if (Array.isArray(data.symbolNumberTexts) && data.symbolNumberTexts.length) {
    SYMBOL_NUMBER_TEXTS = data.symbolNumberTexts.map((text) => ({
      display: text,
      direct: text.toLowerCase(),
      focusKeys: [...new Set(text.toLowerCase().replace(/\s/g, "").split(""))]
    }));
  }

  if (Array.isArray(data.keyFocusTexts) && data.keyFocusTexts.length) {
    KEY_FOCUS_TEXTS = data.keyFocusTexts.map((text) => ({
      display: text.toUpperCase(),
      direct: text.toLowerCase(),
      focusKeys: [...new Set(text.toLowerCase().replace(/\s/g, "").split(""))]
    }));
  }

  if (Array.isArray(data.storyStages) && data.storyStages.length) {
    STORY_STAGES = data.storyStages;
  }

  if (Array.isArray(data.fingerGroups) && data.fingerGroups.length) {
    FINGER_GROUPS = data.fingerGroups;
  }

  if (Array.isArray(data.tutorialSteps) && data.tutorialSteps.length) {
    TUTORIAL_STEPS = data.tutorialSteps;
  }

  if (Array.isArray(data.weeklyPlan) && data.weeklyPlan.length) {
    WEEKLY_PLAN = data.weeklyPlan;
  }
}

const MODE_SECONDS = {
  practice: 0,
  longform: 0,
  pastedText: 0,
  challenge: 60,
  longformChallenge: 90,
  weakKeys: 0,
  symbols: 0
};

const PRACTICE_WORDS = 15;
const LONGFORM_LINES = 3;
const WEAK_KEY_LINES = 16;
const SYMBOL_LINES = 18;
let pastedTextItems = [];

let FINGER_GROUPS = [
  { id: "left-pinky", label: "左小指", keys: "A Q Z 1" },
  { id: "left-ring", label: "左薬指", keys: "S W X 2" },
  { id: "left-middle", label: "左中指", keys: "D E C 3" },
  { id: "left-index", label: "左人差し指", keys: "F G R T V B 4 5" },
  { id: "right-index", label: "右人差し指", keys: "J H U Y M N 6 7" },
  { id: "right-middle", label: "右中指", keys: "K I , 8" },
  { id: "right-ring", label: "右薬指", keys: "L O . 9" },
  { id: "right-pinky", label: "右小指", keys: "; P / 0" }
];

const FINGER_KEY_MAP = {
  "1": "left-pinky",
  q: "left-pinky",
  a: "left-pinky",
  z: "left-pinky",
  "!": "left-pinky",
  "2": "left-ring",
  w: "left-ring",
  s: "left-ring",
  x: "left-ring",
  "@": "left-ring",
  "3": "left-middle",
  e: "left-middle",
  d: "left-middle",
  c: "left-middle",
  "#": "left-middle",
  "4": "left-index",
  "5": "left-index",
  r: "left-index",
  t: "left-index",
  f: "left-index",
  g: "left-index",
  v: "left-index",
  b: "left-index",
  "$": "left-index",
  "%": "left-index",
  "6": "right-index",
  "7": "right-index",
  y: "right-index",
  u: "right-index",
  h: "right-index",
  j: "right-index",
  n: "right-index",
  m: "right-index",
  "^": "right-index",
  "&": "right-index",
  "8": "right-middle",
  i: "right-middle",
  k: "right-middle",
  ",": "right-middle",
  "*": "right-middle",
  "9": "right-ring",
  o: "right-ring",
  l: "right-ring",
  ".": "right-ring",
  "(": "right-ring",
  "0": "right-pinky",
  p: "right-pinky",
  ";": "right-pinky",
  "/": "right-pinky",
  "-": "right-pinky",
  "=": "right-pinky",
  "[": "right-pinky",
  "]": "right-pinky",
  "'": "right-pinky",
  "\\": "right-pinky",
  ")": "right-pinky",
  "_": "right-pinky",
  "+": "right-pinky",
  "{": "right-pinky",
  "}": "right-pinky",
  ":": "right-pinky",
  "\"": "right-pinky",
  "?": "right-pinky",
  "|": "right-pinky",
  " ": "thumb"
};

const FINGER_HOME_KEYS = {
  "left-pinky": "a",
  "left-ring": "s",
  "left-middle": "d",
  "left-index": "f",
  "right-index": "j",
  "right-middle": "k",
  "right-ring": "l",
  "right-pinky": ";",
  thumb: " "
};

const HAND_FINGERS = {
  left: ["left-pinky", "left-ring", "left-middle", "left-index"],
  right: ["right-index", "right-middle", "right-ring", "right-pinky"]
};

const FINGER_REACH_LIMITS = {
  "left-pinky": { angle: 52, height: 3.05, minHeight: 1.42 },
  "left-ring": { angle: 42, height: 2.7, minHeight: 1.62 },
  "left-middle": { angle: 38, height: 2.55, minHeight: 1.82 },
  "left-index": { angle: 46, height: 2.85, minHeight: 1.7 },
  "right-index": { angle: 46, height: 2.85, minHeight: 1.7 },
  "right-middle": { angle: 38, height: 2.55, minHeight: 1.82 },
  "right-ring": { angle: 42, height: 2.7, minHeight: 1.62 },
  "right-pinky": { angle: 52, height: 3.05, minHeight: 1.42 }
};

const FINGER_REST_ANGLES = {
  "left-pinky": 30,
  "left-ring": 30,
  "left-middle": 30,
  "left-index": 30,
  "right-index": -30,
  "right-middle": -30,
  "right-ring": -30,
  "right-pinky": -30
};

const KEYBOARD_LAYOUTS = {
  jis: {
    label: "日本語配列",
    shortLabel: "JIS",
    keys: {
      "`": { main: "半/全", chars: ["`"] },
      "1": { main: "1", sub: "!", chars: ["1", "!"] },
      "2": { main: "2", sub: "\"", chars: ["2", "\""] },
      "3": { main: "3", sub: "#", chars: ["3", "#"] },
      "4": { main: "4", sub: "$", chars: ["4", "$"] },
      "5": { main: "5", sub: "%", chars: ["5", "%"] },
      "6": { main: "6", sub: "&", chars: ["6", "&"] },
      "7": { main: "7", sub: "'", chars: ["7", "'"] },
      "8": { main: "8", sub: "(", chars: ["8", "("] },
      "9": { main: "9", sub: ")", chars: ["9", ")"] },
      "0": { main: "0", chars: ["0"] },
      "-": { main: "-", sub: "=", chars: ["-", "="] },
      "=": { main: "^", sub: "~", chars: ["^", "~"] },
      "[": { main: "@", sub: "`", chars: ["@", "`"] },
      "]": { main: "[", sub: "{", chars: ["[", "{"] },
      ";": { main: ";", sub: "+", chars: [";", "+"] },
      "'": { main: ":", sub: "*", chars: [":", "*"] },
      ",": { main: ",", sub: "<", chars: [",", "<"] },
      ".": { main: ".", sub: ">", chars: [".", ">"] },
      "/": { main: "/", sub: "?", chars: ["/", "?"] },
      " ": { main: "Space", chars: [" "] }
    }
  },
  us: {
    label: "英語配列",
    shortLabel: "US",
    keys: {
      "`": { main: "`", sub: "~", chars: ["`", "~"] },
      "1": { main: "1", sub: "!", chars: ["1", "!"] },
      "2": { main: "2", sub: "@", chars: ["2", "@"] },
      "3": { main: "3", sub: "#", chars: ["3", "#"] },
      "4": { main: "4", sub: "$", chars: ["4", "$"] },
      "5": { main: "5", sub: "%", chars: ["5", "%"] },
      "6": { main: "6", sub: "^", chars: ["6", "^"] },
      "7": { main: "7", sub: "&", chars: ["7", "&"] },
      "8": { main: "8", sub: "*", chars: ["8", "*"] },
      "9": { main: "9", sub: "(", chars: ["9", "("] },
      "0": { main: "0", sub: ")", chars: ["0", ")"] },
      "-": { main: "-", sub: "_", chars: ["-", "_"] },
      "=": { main: "=", sub: "+", chars: ["=", "+"] },
      "[": { main: "[", sub: "{", chars: ["[", "{"] },
      "]": { main: "]", sub: "}", chars: ["]", "}"] },
      ";": { main: ";", sub: ":", chars: [";", ":"] },
      "'": { main: "'", sub: "\"", chars: ["'", "\""] },
      ",": { main: ",", sub: "<", chars: [",", "<"] },
      ".": { main: ".", sub: ">", chars: [".", ">"] },
      "/": { main: "/", sub: "?", chars: ["/", "?"] },
      " ": { main: "Space", chars: [" "] }
    }
  }
};

let TUTORIAL_STEPS = [
  {
    label: "ホームポジション",
    title: "F と J に人差し指を置く",
    body: "左手の人差し指を F、右手の人差し指を J に置きます。A S D F と J K L ; が基本の待機場所です。",
    active: ["left-index", "right-index"],
    sequence: ["f", "j", "f", "j"]
  },
  {
    label: "左手の人差し指",
    title: "F から近いキーを鳴らす",
    body: "F に戻る感覚を残しながら、上、内側、下の近いキーへ指を動かします。",
    active: ["left-index"],
    sequence: ["f", "r", "f", "t", "f", "g", "f", "v", "f", "b"]
  },
  {
    label: "右手の人差し指",
    title: "J から近いキーを押し分ける",
    body: "J を基準にして、U、Y、H、N、M へ少しずつ動かします。",
    active: ["right-index"],
    sequence: ["j", "u", "j", "y", "j", "h", "j", "n", "j", "m"]
  },
  {
    label: "中指",
    title: "D と K の上下を練習",
    body: "中指はホーム列から上下へまっすぐ動かします。大きく手をずらさないのがコツです。",
    active: ["left-middle", "right-middle"],
    sequence: ["d", "e", "d", "c", "k", "i", "k", ","]
  },
  {
    label: "薬指",
    title: "S と L の上下を練習",
    body: "薬指は動きが固くなりやすいので、ゆっくり正確に押します。",
    active: ["left-ring", "right-ring"],
    sequence: ["s", "w", "s", "x", "l", "o", "l", "."]
  },
  {
    label: "小指",
    title: "端のキーをそっと押す",
    body: "小指は力を入れすぎず、ホームポジションに戻ることを優先します。",
    active: ["left-pinky", "right-pinky"],
    sequence: ["a", "q", "a", "z", ";", "p", ";", "/"]
  },
  {
    label: "確認",
    title: "ホーム列をなめらかに打つ",
    body: "最後にホーム列を左から右へ。指の場所を見失わずに打てたら完了です。",
    active: FINGER_GROUPS.map((group) => group.id),
    sequence: ["a", "s", "d", "f", "j", "k", "l", ";"]
  }
];

const els = {
  keyboardSetup: document.querySelector("#keyboardSetup"),
  keyboardChoiceButtons: document.querySelectorAll("[data-keyboard-choice]"),
  keyboardOptionButtons: document.querySelectorAll("[data-keyboard-option]"),
  keyboardLayoutStatus: document.querySelector("#keyboardLayoutStatus"),
  title: document.querySelector("#titleScreen"),
  game: document.querySelector("#gameScreen"),
  result: document.querySelector("#resultScreen"),
  startPractice: document.querySelector("#startPractice"),
  startWeakKeys: document.querySelector("#startWeakKeys"),
  startSymbols: document.querySelector("#startSymbols"),
  startChallenge: document.querySelector("#startChallenge"),
  startLongform: document.querySelector("#startLongform"),
  startPastedText: document.querySelector("#startPastedText"),
  startLongformChallenge: document.querySelector("#startLongformChallenge"),
  startStory: document.querySelector("#startStory"),
  story: document.querySelector("#storyScreen"),
  storyToTitle: document.querySelector("#storyToTitle"),
  storyProgress: document.querySelector("#storyProgress"),
  storyStars: document.querySelector("#storyStars"),
  storyNext: document.querySelector("#storyNext"),
  storyMap: document.querySelector("#storyMap"),
  paste: document.querySelector("#pasteScreen"),
  pasteToTitle: document.querySelector("#pasteToTitle"),
  pasteText: document.querySelector("#pasteText"),
  pastePreview: document.querySelector("#pastePreview"),
  pasteCount: document.querySelector("#pasteCount"),
  startPastedPractice: document.querySelector("#startPastedPractice"),
  clearPastedText: document.querySelector("#clearPastedText"),
  startTutorial: document.querySelector("#startTutorial"),
  tutorial: document.querySelector("#tutorialScreen"),
  tutorialToTitle: document.querySelector("#tutorialToTitle"),
  tutorialStep: document.querySelector("#tutorialStep"),
  tutorialHits: document.querySelector("#tutorialHits"),
  tutorialMisses: document.querySelector("#tutorialMisses"),
  tutorialLabel: document.querySelector("#tutorialLabel"),
  tutorialTitle: document.querySelector("#tutorialTitle"),
  tutorialBody: document.querySelector("#tutorialBody"),
  tutorialTarget: document.querySelector("#tutorialTarget"),
  tutorialFeedback: document.querySelector("#tutorialFeedback"),
  tutorialNext: document.querySelector("#tutorialNext"),
  tutorialRestart: document.querySelector("#tutorialRestart"),
  fingerStrip: document.querySelector("#fingerStrip"),
  backToTitle: document.querySelector("#backToTitle"),
  retry: document.querySelector("#retry"),
  resultToTitle: document.querySelector("#resultToTitle"),
  modeLabel: document.querySelector("#modeLabel"),
  difficultyLabel: document.querySelector("#difficultyLabel"),
  wordDisplay: document.querySelector("#wordDisplay"),
  storyNote: document.querySelector("#storyNote"),
  gameKeyboard: document.querySelector("#gameKeyboard"),
  readingDisplay: document.querySelector("#readingDisplay"),
  typedDisplay: document.querySelector("#typedDisplay"),
  input: document.querySelector("#typingInput"),
  timeLeft: document.querySelector("#timeLeft"),
  timeLabel: document.querySelector("#timeLabel"),
  score: document.querySelector("#score"),
  combo: document.querySelector("#combo"),
  accuracy: document.querySelector("#accuracy"),
  runner: document.querySelector("#runner"),
  progress: document.querySelector("#walkProgress"),
  bestScore: document.querySelector("#bestScore"),
  bestWpm: document.querySelector("#bestWpm"),
  avgAccuracy: document.querySelector("#avgAccuracy"),
  todayMenu: document.querySelector("#todayMenu"),
  todayGoal: document.querySelector("#todayGoal"),
  practiceStreak: document.querySelector("#practiceStreak"),
  weeklyGoal: document.querySelector("#weeklyGoal"),
  targetWpm: document.querySelector("#targetWpm"),
  weekPlan: document.querySelector("#weekPlan"),
  practiceLog: document.querySelector("#practiceLog"),
  wpmChart: document.querySelector("#wpmChart"),
  wpmModeBest: document.querySelector("#wpmModeBest"),
  wpmModeAvg: document.querySelector("#wpmModeAvg"),
  wpmTrendSummary: document.querySelector("#wpmTrendSummary"),
  weakKeysSummary: document.querySelector("#weakKeysSummary"),
  startTodayPlan: document.querySelector("#startTodayPlan"),
  reminderStatus: document.querySelector("#reminderStatus"),
  reminderTime: document.querySelector("#reminderTime"),
  toggleReminder: document.querySelector("#toggleReminder"),
  bgmStatus: document.querySelector("#bgmStatus"),
  bgmDrop: document.querySelector("#bgmDrop"),
  bgmCount: document.querySelector("#bgmCount"),
  bgmList: document.querySelector("#bgmList"),
  bgmPrev: document.querySelector("#bgmPrev"),
  bgmPlay: document.querySelector("#bgmPlay"),
  bgmPause: document.querySelector("#bgmPause"),
  bgmStop: document.querySelector("#bgmStop"),
  bgmNext: document.querySelector("#bgmNext"),
  bgmLoopMode: document.querySelector("#bgmLoopMode"),
  bgmVolume: document.querySelector("#bgmVolume"),
  bgmClearAll: document.querySelector("#bgmClearAll"),
  miniBgmStatus: document.querySelector("#miniBgmStatus"),
  miniBgmPrev: document.querySelector("#miniBgmPrev"),
  miniBgmToggle: document.querySelector("#miniBgmToggle"),
  miniBgmNext: document.querySelector("#miniBgmNext"),
  miniBgmLoop: document.querySelector("#miniBgmLoop"),
  rank: document.querySelector("#rank"),
  finalScore: document.querySelector("#finalScore"),
  finalWpm: document.querySelector("#finalWpm"),
  finalAccuracy: document.querySelector("#finalAccuracy"),
  finalMisses: document.querySelector("#finalMisses"),
  finalMaxCombo: document.querySelector("#finalMaxCombo"),
  finalNuts: document.querySelector("#finalNuts"),
  resultTip: document.querySelector("#resultTip"),
  resultNextStory: document.querySelector("#resultNextStory"),
  difficultyButtons: document.querySelectorAll("[data-difficulty]")
};

const storeKey = "shimaenagaTypingRecords";
const storyStoreKey = "shimaenagaTypingStory";
const scheduleStoreKey = "shimaenagaTypingSchedule";
const reminderStoreKey = "shimaenagaTypingReminder";
const keyStatsStoreKey = "shimaenagaTypingKeyStats";
const wpmTrendModeStoreKey = "shimaenagaTypingWpmTrendMode";
const keyboardLayoutStoreKey = "shimaenagaTypingKeyboardLayout";

let WEEKLY_PLAN = [
  { day: "日", title: "ストーリーさんぽ", mode: "story", goal: "1ステージ", note: "物語を進める日" },
  { day: "月", title: "指ならし", mode: "tutorial", goal: "1周", note: "ホームポジション確認" },
  { day: "火", title: "やさしい単語", mode: "practice", difficulty: "easy", goal: "10分", note: "正確率90%" },
  { day: "水", title: "ふつう単語", mode: "practice", difficulty: "normal", goal: "10分", note: "コンボ10" },
  { day: "木", title: "ながぶん", mode: "longform", goal: "3文", note: "最後まで打つ" },
  { day: "金", title: "チャレンジ", mode: "challenge", difficulty: "normal", goal: "1回", note: "WPM更新" },
  { day: "土", title: "ながぶんチャレンジ", mode: "longformChallenge", goal: "1回", note: "週のまとめ" }
];

let state = createInitialState();
let tutorialState = createTutorialState();
let timerId = null;
let reminderTimerId = null;
let bgmTracks = [];
let bgmIndex = -1;
let bgmLoopMode = "all";
let bgmShuffleQueue = [];
const bgmAudio = new Audio();
bgmAudio.loop = false;
bgmAudio.volume = 0.35;
let wpmTrendMode = loadWpmTrendMode();
let keyboardLayout = loadKeyboardLayout();

function setupGameKeyboard() {
  const tutorialKeyboard = document.querySelector(".tutorial .keyboard");
  if (!tutorialKeyboard || !els.gameKeyboard) return;
  els.gameKeyboard.innerHTML = tutorialKeyboard.innerHTML;
  setupKeyboardFingerOverlay();
  applyKeyboardLayout();
}

function setupKeyboardFingerOverlay() {
  const overlay = document.createElement("div");
  overlay.className = "keyboard-hand-overlay";
  overlay.setAttribute("aria-hidden", "true");

  Object.keys(HAND_FINGERS).forEach((handSide) => {
    const hand = document.createElement("div");
    hand.className = `keyboard-hand ${handSide}-keyboard-hand`;
    hand.dataset.hand = handSide;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("keyboard-hand-svg");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("overflow", "visible");
    ["palm", ...HAND_FINGERS[handSide], "thumb"].forEach((part) => {
      const shape = document.createElementNS("http://www.w3.org/2000/svg", "path");
      shape.classList.add("keyboard-hand-shape");
      shape.dataset.part = part;
      svg.append(shape);
    });
    hand.append(svg);
    overlay.append(hand);
  });

  const status = document.createElement("div");
  status.className = "keyboard-hand-status";
  status.setAttribute("aria-live", "polite");
  status.innerHTML = '<span>次キー</span><strong>-</strong>';
  els.gameKeyboard.append(overlay, status);
}

function loadKeyboardLayout() {
  const saved = localStorage.getItem(keyboardLayoutStoreKey);
  return KEYBOARD_LAYOUTS[saved] ? saved : "jis";
}

function hasSavedKeyboardLayout() {
  return KEYBOARD_LAYOUTS[localStorage.getItem(keyboardLayoutStoreKey)];
}

function saveKeyboardLayout(layout) {
  localStorage.setItem(keyboardLayoutStoreKey, layout);
}

function setKeyboardLayout(layout, options = {}) {
  keyboardLayout = KEYBOARD_LAYOUTS[layout] ? layout : "jis";
  saveKeyboardLayout(keyboardLayout);
  applyKeyboardLayout();
  renderKeyboardTarget(TUTORIAL_STEPS[tutorialState.stepIndex]?.sequence[tutorialState.sequenceIndex] || "");
  if (!els.game.classList.contains("hidden")) renderGameKeyboardTarget();
  if (options.closeSetup !== false) els.keyboardSetup.classList.add("hidden");
  focusInput();
}

function applyKeyboardLayout() {
  const layout = KEYBOARD_LAYOUTS[keyboardLayout] || KEYBOARD_LAYOUTS.jis;
  document.body.dataset.keyboardLayout = keyboardLayout;
  document.querySelectorAll(".keyboard .key").forEach((keyEl) => applyKeyLegend(keyEl, layout));
  els.keyboardLayoutStatus.textContent = layout.label;
  els.keyboardOptionButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.keyboardOption === keyboardLayout);
  });
  els.keyboardChoiceButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.keyboardChoice === keyboardLayout);
  });
}

function applyKeyLegend(keyEl, layout) {
  const key = keyEl.dataset.key;
  if (!key) return;
  const legend = layout.keys[key] || { main: formatKey(key), chars: [key] };
  keyEl.dataset.keyChars = (legend.chars || [key]).join("\u0001");
  keyEl.replaceChildren();
  const main = document.createElement("span");
  main.className = "key-main";
  main.textContent = legend.main || formatKey(key);
  keyEl.append(main);
  if (legend.sub) {
    const sub = document.createElement("span");
    sub.className = "key-sub";
    sub.textContent = legend.sub;
    keyEl.append(sub);
  }
}

function keyMatchesTarget(keyEl, target) {
  if (!target) return false;
  const chars = keyEl.dataset.keyChars?.split("\u0001").filter(Boolean);
  if (chars?.length) return chars.includes(target);
  return keyEl.dataset.key === target;
}

function showKeyboardSetupIfNeeded() {
  if (hasSavedKeyboardLayout()) return;
  els.keyboardSetup.classList.remove("hidden");
  applyKeyboardLayout();
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function createTutorialState() {
  return {
    stepIndex: 0,
    sequenceIndex: 0,
    hits: 0,
    misses: 0,
    finished: false,
    pendingAdvance: false
  };
}

function buildRomanCandidates(kana) {
  return expandKana(kana);
}

function expandKana(kana) {
  if (!kana) return [""];

  const first = kana[0];
  if (first === "っ") {
    const restCandidates = expandKana(kana.slice(1));
    const doubled = [];
    for (const rest of restCandidates) {
      const consonant = rest[0];
      if (consonant && !["a", "i", "u", "e", "o", "n", "-"].includes(consonant)) {
        doubled.push(consonant + rest);
      }
      doubled.push(`ltu${rest}`, `xtu${rest}`);
    }
    return unique(doubled);
  }

  const pair = kana.slice(0, 2);
  const pairOptions = ROMAN_TABLE[pair];
  if (pairOptions) {
    return combine(pairOptions, expandKana(kana.slice(2)));
  }

  const options = ROMAN_TABLE[first];
  if (!options) {
    return expandKana(kana.slice(1));
  }

  return combine(options, expandKana(kana.slice(1)));
}

function combine(prefixes, suffixes) {
  const combined = [];
  for (const prefix of prefixes) {
    for (const suffix of suffixes) {
      combined.push(prefix + suffix);
    }
  }
  return unique(combined);
}

function unique(items) {
  return [...new Set(items)];
}

function getGuideRoman() {
  if (!state.word) return "";
  const exactPrefix = state.word.candidates.find((candidate) => candidate.startsWith(state.typed));
  return exactPrefix || state.word.candidates[0];
}

function canAcceptTyped(nextTyped) {
  return state.word.candidates.some((candidate) => candidate.startsWith(nextTyped));
}

function isWordComplete() {
  return state.word.candidates.includes(state.typed);
}

function createInitialState() {
  return {
    mode: "practice",
    difficulty: "easy",
    word: null,
    typed: "",
    score: 0,
    combo: 0,
    maxCombo: 0,
    correctChars: 0,
    mistakes: 0,
    totalKeys: 0,
    completedWords: 0,
    startedAt: 0,
    secondsLeft: 0,
    lastWordIndex: -1,
    wordOrder: [],
    wordOrderSource: "",
    longTextOrder: [],
    storyStageId: null,
    storyStage: null
  };
}

function showPasteScreen() {
  clearInterval(timerId);
  els.title.classList.add("hidden");
  els.tutorial.classList.add("hidden");
  els.story.classList.add("hidden");
  els.game.classList.add("hidden");
  els.result.classList.add("hidden");
  els.paste.classList.remove("hidden");
  updatePastePreview();
  requestAnimationFrame(() => els.pasteText.focus());
}

function updatePastePreview() {
  const items = parsePastedText(els.pasteText.value);
  els.pasteCount.textContent = `${items.length}文`;
  els.pastePreview.textContent = items.length
    ? `先頭: ${items.slice(0, 3).map((item) => item.display).join(" / ")}`
    : "まだ文章がありません。";
}

function startPastedPractice() {
  const items = parsePastedText(els.pasteText.value);
  if (!items.length) {
    els.pastePreview.textContent = "1文以上貼り付けるジュリ。短い見出しでも大丈夫ジュリ。";
    return;
  }
  pastedTextItems = items;
  startGame("pastedText");
}

function clearPastedText() {
  els.pasteText.value = "";
  pastedTextItems = [];
  updatePastePreview();
}

function parsePastedText(text) {
  return text
    .replace(/\r/g, "\n")
    .split(/(?<=[。！？!?])\s*|\n+/)
    .map((line) => line.trim())
    .filter((line) => line.length >= 2)
    .flatMap(splitLongPastedLine)
    .slice(0, 20)
    .map(toPastedTextItem);
}

function splitLongPastedLine(line) {
  if (line.length <= 42) return [line];
  const chunks = [];
  for (let index = 0; index < line.length; index += 34) {
    chunks.push(line.slice(index, index + 34));
  }
  return chunks;
}

function toPastedTextItem(text) {
  const normalized = text.replace(/\s+/g, " ").trim();
  const kana = normalized.replace(/\s/g, "");
  const canRomanize = /^[ぁ-んァ-ンー]+$/.test(kana);
  if (canRomanize) {
    return {
      display: normalized,
      kana: kana.replace(/[ァ-ン]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60))
    };
  }
  return {
    display: normalized,
    direct: normalized.toLowerCase()
  };
}

function loadRecords() {
  try {
    return JSON.parse(localStorage.getItem(storeKey)) || {
      bestScore: 0,
      bestWpm: 0,
      plays: 0,
      accuracyTotal: 0
    };
  } catch {
    return { bestScore: 0, bestWpm: 0, plays: 0, accuracyTotal: 0 };
  }
}

function saveRecords(result) {
  const records = loadRecords();
  records.bestScore = Math.max(records.bestScore, result.score);
  records.bestWpm = Math.max(records.bestWpm, result.wpm);
  records.plays += 1;
  records.accuracyTotal += result.accuracy;
  localStorage.setItem(storeKey, JSON.stringify(records));
  saveScheduleProgress(result);
  renderRecords();
  renderSchedule();
}

function loadKeyStats() {
  try {
    return JSON.parse(localStorage.getItem(keyStatsStoreKey)) || {};
  } catch {
    return {};
  }
}

function saveKeyStats(stats) {
  localStorage.setItem(keyStatsStoreKey, JSON.stringify(stats));
}

function recordKeyAttempt(targetKey, hit) {
  if (!targetKey) return;
  const stats = loadKeyStats();
  const key = targetKey.toLowerCase();
  const item = stats[key] || { attempts: 0, misses: 0 };
  item.attempts += 1;
  if (!hit) item.misses += 1;
  stats[key] = item;
  saveKeyStats(stats);
}

function getWeakKeys(limit = 5) {
  return Object.entries(loadKeyStats())
    .filter(([, stats]) => stats.attempts >= 3 && stats.misses > 0)
    .map(([key, stats]) => ({
      key,
      attempts: stats.attempts,
      misses: stats.misses,
      rate: stats.misses / stats.attempts
    }))
    .sort((a, b) => b.rate - a.rate || b.misses - a.misses)
    .slice(0, limit);
}

function renderWeakKeysSummary() {
  if (!els.weakKeysSummary) return;
  const weakKeys = getWeakKeys(5);
  els.weakKeysSummary.textContent = weakKeys.length
    ? weakKeys.map((item) => `${formatKey(item.key)} ${Math.round(item.rate * 100)}%`).join(" / ")
    : "まだ記録がありません";
}

function renderRecords() {
  const records = loadRecords();
  els.bestScore.textContent = records.bestScore;
  els.bestWpm.textContent = Math.round(records.bestWpm);
  els.avgAccuracy.textContent = records.plays ? `${Math.round(records.accuracyTotal / records.plays)}%` : "0%";
}

function loadScheduleProgress() {
  try {
    return JSON.parse(localStorage.getItem(scheduleStoreKey)) || { days: {} };
  } catch {
    return { days: {} };
  }
}

function saveScheduleProgress(result) {
  const progress = loadScheduleProgress();
  const today = getDateKey(new Date());
  const day = progress.days[today] || {
    plays: 0,
    bestScore: 0,
    bestWpm: 0,
    wpmTotal: 0,
    accuracyTotal: 0,
    minutes: 0,
    modes: {}
  };
  day.plays += 1;
  day.bestScore = Math.max(day.bestScore, result.score);
  day.bestWpm = Math.max(day.bestWpm, result.wpm);
  day.wpmTotal = (day.wpmTotal || 0) + result.wpm;
  day.accuracyTotal += result.accuracy;
  day.minutes += Math.max(1, Math.round((Date.now() - state.startedAt) / 60000));
  day.modes[state.mode] = (day.modes[state.mode] || 0) + 1;
  progress.days[today] = day;
  localStorage.setItem(scheduleStoreKey, JSON.stringify(progress));
}

function renderSchedule() {
  if (!els.todayMenu) return;
  const now = new Date();
  const todayPlan = WEEKLY_PLAN[now.getDay()];
  const progress = loadScheduleProgress();
  const records = loadRecords();
  const todayKey = getDateKey(now);
  const today = progress.days[todayKey];
  const weekKeys = getCurrentWeekKeys(now);
  const practicedThisWeek = weekKeys.filter((key) => progress.days[key]?.plays).length;
  const targetWpm = Math.max(80, Math.ceil((records.bestWpm + 10) / 10) * 10);

  els.todayMenu.textContent = `${todayPlan.day}曜日: ${todayPlan.title}`;
  els.todayGoal.textContent = today ? `${today.plays}回 / ${todayPlan.goal}` : todayPlan.goal;
  els.practiceStreak.textContent = `${getPracticeStreak(progress, now)}日`;
  els.weeklyGoal.textContent = `${Math.min(practicedThisWeek, 5)}/5日`;
  els.targetWpm.textContent = targetWpm;

  els.weekPlan.replaceChildren(...WEEKLY_PLAN.map((plan, index) => {
    const key = weekKeys[index];
    const day = progress.days[key];
    const card = document.createElement("article");
    card.className = `week-day${index === now.getDay() ? " today" : ""}${day?.plays ? " done" : ""}`;
    card.innerHTML = `
      <span>${plan.day}</span>
      <strong>${day?.plays ? "完了" : plan.title}</strong>
    `;
    return card;
  }));

  els.practiceLog.innerHTML = getRecentPracticeLogs(progress)
    .map((log) => `<span>${log.date} ${log.summary}</span>`)
    .join("") || "まだ練習記録がありません。";
  renderWpmChart(progress, now);
  renderWeakKeysSummary();
}

function renderWpmChart(progress, now = new Date()) {
  if (!els.wpmChart || !els.wpmTrendSummary) return;
  renderWpmModeButtons();
  const days = getRecentDayKeys(now, 14);
  const points = days.map((date) => {
    const day = progress.days[date];
    return {
      date,
      wpm: getDayWpmValue(day),
      played: Boolean(day?.plays)
    };
  });

  const playedPoints = points.filter((point) => point.played);
  if (!playedPoints.length) {
    els.wpmTrendSummary.textContent = "まだ記録がありません";
    els.wpmChart.textContent = "まだ記録がありません。";
    return;
  }

  const maxWpm = Math.max(40, ...playedPoints.map((point) => point.wpm));
  const avgWpm = Math.round(playedPoints.reduce((sum, point) => sum + point.wpm, 0) / playedPoints.length);
  const todayKey = getDateKey(now);
  const modeLabel = wpmTrendMode === "avg" ? "日次平均WPM" : "日次最高WPM";
  els.wpmTrendSummary.textContent = `${modeLabel} 直近14日 最高${Math.round(maxWpm)} / 平均${avgWpm}`;

  els.wpmChart.replaceChildren(...points.map((point) => {
    const bar = document.createElement("article");
    bar.className = `wpm-bar${point.played ? "" : " empty"}${point.date === todayKey ? " today" : ""}`;
    const barHeight = point.played ? Math.max(6, Math.round((point.wpm / maxWpm) * 100)) : 4;
    bar.style.setProperty("--bar", `${barHeight}%`);
    bar.innerHTML = `
      <strong>${point.played ? Math.round(point.wpm) : "-"}</strong>
      <span>${formatChartDate(point.date)}</span>
    `;
    return bar;
  }));
}

function getDayWpmValue(day) {
  if (!day?.plays) return 0;
  if (wpmTrendMode === "avg") {
    const total = Number.isFinite(day.wpmTotal) ? day.wpmTotal : day.bestWpm * day.plays;
    return Math.round(total / day.plays);
  }
  return day.bestWpm || 0;
}

function loadWpmTrendMode() {
  const saved = localStorage.getItem(wpmTrendModeStoreKey);
  return saved === "avg" ? "avg" : "best";
}

function saveWpmTrendMode(mode) {
  localStorage.setItem(wpmTrendModeStoreKey, mode);
}

function setWpmTrendMode(mode) {
  wpmTrendMode = mode === "avg" ? "avg" : "best";
  saveWpmTrendMode(wpmTrendMode);
  renderSchedule();
}

function renderWpmModeButtons() {
  if (!els.wpmModeBest || !els.wpmModeAvg) return;
  els.wpmModeBest.classList.toggle("active", wpmTrendMode === "best");
  els.wpmModeAvg.classList.toggle("active", wpmTrendMode === "avg");
}

function getRecentDayKeys(date, length) {
  return Array.from({ length }, (_, offset) => {
    const day = new Date(date);
    day.setHours(0, 0, 0, 0);
    day.setDate(day.getDate() - (length - 1 - offset));
    return getDateKey(day);
  });
}

function formatChartDate(dateKey) {
  const [, month, day] = dateKey.split("-");
  return `${Number(month)}/${Number(day)}`;
}

function getDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getCurrentWeekKeys(date) {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - start.getDay());
  return WEEKLY_PLAN.map((_, index) => {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    return getDateKey(day);
  });
}

function getPracticeStreak(progress, date) {
  let streak = 0;
  const cursor = new Date(date);
  cursor.setHours(0, 0, 0, 0);
  while (progress.days[getDateKey(cursor)]?.plays) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function getRecentPracticeLogs(progress) {
  return Object.entries(progress.days)
    .sort(([dateA], [dateB]) => dateB.localeCompare(dateA))
    .slice(0, 3)
    .map(([date, day]) => {
      const avgAccuracy = day.plays ? Math.round(day.accuracyTotal / day.plays) : 0;
      return {
        date,
        summary: `${day.plays}回 / ${day.minutes}分 / 最高${day.bestScore}点 / 正確率${avgAccuracy}%`
      };
    });
}

function loadReminder() {
  try {
    return JSON.parse(localStorage.getItem(reminderStoreKey)) || {
      enabled: false,
      time: "18:00",
      lastNotifiedDate: ""
    };
  } catch {
    return { enabled: false, time: "18:00", lastNotifiedDate: "" };
  }
}

function saveReminderSettings(settings) {
  localStorage.setItem(reminderStoreKey, JSON.stringify(settings));
  renderReminder();
}

function renderReminder() {
  if (!els.reminderStatus) return;
  const reminder = loadReminder();
  els.reminderTime.value = reminder.time || "18:00";
  els.reminderStatus.textContent = reminder.enabled ? `${reminder.time}に通知します` : "リマインドはオフです";
  els.toggleReminder.textContent = reminder.enabled ? "オフ" : "オン";
}

async function setReminderEnabled(enabled) {
  const reminder = loadReminder();
  const next = {
    ...reminder,
    enabled,
    time: els.reminderTime.value || reminder.time || "18:00"
  };

  if (enabled && "Notification" in window && Notification.permission === "default") {
    await Notification.requestPermission();
  }

  saveReminderSettings(next);
  checkReminder();
}

function saveReminderFromForm() {
  const reminder = loadReminder();
  saveReminderSettings({
    ...reminder,
    time: els.reminderTime.value || "18:00"
  });
}

function startReminderWatcher() {
  clearInterval(reminderTimerId);
  checkReminder();
  reminderTimerId = setInterval(checkReminder, 30000);
}

function checkReminder() {
  const reminder = loadReminder();
  if (!reminder.enabled) return;

  const now = new Date();
  const todayKey = getDateKey(now);
  if (reminder.lastNotifiedDate === todayKey) return;

  const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  if (currentTime < reminder.time) return;

  const scheduleProgress = loadScheduleProgress();
  if (scheduleProgress.days[todayKey]?.plays) {
    saveReminderSettings({ ...reminder, lastNotifiedDate: todayKey });
    return;
  }

  notifyPracticeReminder();
  saveReminderSettings({ ...reminder, lastNotifiedDate: todayKey });
}

function notifyPracticeReminder() {
  const plan = WEEKLY_PLAN[new Date().getDay()];
  const title = "しままるタイピング";
  const body = `ジュリリ〜、今日の「${plan.title}」をする時間ジュリ。`;

  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, { body });
    return;
  }

  els.practiceLog.innerHTML = `<span>${body}</span>${els.practiceLog.innerHTML}`;
}

function addBgmFiles(files) {
  const audioFiles = [...files].filter((file) => file.type.startsWith("audio/"));
  if (!audioFiles.length) {
    renderBgm();
    return;
  }

  const newTracks = audioFiles.map((file) => ({
    name: file.name,
    url: URL.createObjectURL(file)
  }));
  const firstNewIndex = bgmTracks.length;
  bgmTracks = [...bgmTracks, ...newTracks];
  if (bgmLoopMode === "shuffle") {
    const newIndexes = shuffleIndexes(newTracks.length).map((index) => firstNewIndex + index);
    bgmShuffleQueue = [...bgmShuffleQueue, ...newIndexes];
  }
  if (bgmIndex === -1) {
    selectBgmTrack(0, false);
  }
  renderBgm();
}

function selectBgmTrack(index, shouldPlay = !bgmAudio.paused) {
  if (!bgmTracks.length) return;
  bgmIndex = (index + bgmTracks.length) % bgmTracks.length;
  bgmAudio.src = bgmTracks[bgmIndex].url;
  bgmAudio.currentTime = 0;
  if (shouldPlay) {
    playBgm();
  }
  renderBgm();
}

function setBgmLoopMode(mode) {
  bgmLoopMode = mode;
  bgmAudio.loop = bgmLoopMode === "one";
  if (bgmLoopMode === "shuffle") {
    bgmShuffleQueue = buildBgmShuffleQueue();
  }
  renderBgm();
}

function toggleBgmLoopMode() {
  const nextMode = bgmLoopMode === "one" ? "all" : bgmLoopMode === "all" ? "shuffle" : "one";
  setBgmLoopMode(nextMode);
}

function handleBgmEnded() {
  if (bgmLoopMode === "all" && bgmTracks.length) {
    selectBgmTrack(bgmIndex + 1, true);
    return;
  }
  if (bgmLoopMode === "shuffle" && bgmTracks.length) {
    playNextShuffledBgm();
  }
}

function buildBgmShuffleQueue() {
  const indexes = shuffleIndexes(bgmTracks.length).filter((index) => index !== bgmIndex);
  if (indexes.length || bgmIndex === -1) return indexes;
  return shuffleIndexes(bgmTracks.length);
}

function playNextShuffledBgm() {
  if (!bgmShuffleQueue.length) {
    bgmShuffleQueue = buildBgmShuffleQueue();
  }
  const nextIndex = bgmShuffleQueue.shift();
  selectBgmTrack(Number.isInteger(nextIndex) ? nextIndex : 0, true);
}

function removeBgmTrack(index) {
  if (index < 0 || index >= bgmTracks.length) return;
  const wasPlaying = !bgmAudio.paused;
  const wasCurrent = index === bgmIndex;
  URL.revokeObjectURL(bgmTracks[index].url);
  bgmTracks.splice(index, 1);

  if (!bgmTracks.length) {
    bgmAudio.pause();
    bgmAudio.removeAttribute("src");
    bgmIndex = -1;
    bgmShuffleQueue = [];
    renderBgm();
    return;
  }

  bgmShuffleQueue = bgmShuffleQueue
    .filter((queuedIndex) => queuedIndex !== index)
    .map((queuedIndex) => queuedIndex > index ? queuedIndex - 1 : queuedIndex);

  if (index < bgmIndex) {
    bgmIndex -= 1;
  }

  if (wasCurrent) {
    selectBgmTrack(Math.min(index, bgmTracks.length - 1), wasPlaying);
    return;
  }

  renderBgm();
}

function clearBgmTracks() {
  bgmTracks.forEach((track) => URL.revokeObjectURL(track.url));
  bgmTracks = [];
  bgmIndex = -1;
  bgmShuffleQueue = [];
  bgmAudio.pause();
  bgmAudio.removeAttribute("src");
  renderBgm();
}

function playBgm() {
  if (bgmIndex === -1 && bgmTracks.length) {
    selectBgmTrack(0, false);
  }
  if (bgmIndex === -1) return;
  bgmAudio.play().catch(() => {
    els.bgmStatus.textContent = "再生できません";
  });
  renderBgm();
}

function pauseBgm() {
  bgmAudio.pause();
  renderBgm();
}

function stopBgm() {
  bgmAudio.pause();
  bgmAudio.currentTime = 0;
  renderBgm();
}

function toggleMiniBgm() {
  if (bgmAudio.paused) {
    playBgm();
    return;
  }
  pauseBgm();
}

function renderBgm() {
  if (!els.bgmStatus) return;
  const current = bgmTracks[bgmIndex];
  els.bgmStatus.textContent = current ? `${bgmAudio.paused ? "停止中" : "再生中"}: ${current.name}` : "未追加";
  els.miniBgmStatus.textContent = current ? current.name : "BGMなし";
  els.miniBgmToggle.textContent = bgmAudio.paused ? "▶" : "⏸";
  const loopLabel = getBgmLoopLabel();
  els.bgmLoopMode.textContent = loopLabel.text;
  els.miniBgmLoop.textContent = loopLabel.text;
  els.bgmLoopMode.setAttribute("aria-label", loopLabel.aria);
  els.miniBgmLoop.setAttribute("aria-label", loopLabel.aria);
  els.bgmCount.textContent = `${bgmTracks.length}曲`;
  els.bgmList.replaceChildren();

  if (!bgmTracks.length) {
    els.bgmList.textContent = "リストは空です。";
    return;
  }

  bgmTracks.forEach((track, index) => {
    const row = document.createElement("div");
    const title = document.createElement("button");
    const remove = document.createElement("button");
    row.className = `bgm-track${index === bgmIndex ? " active" : ""}`;
    title.innerHTML = `<span>${track.name}</span>`;
    title.setAttribute("aria-label", `${track.name}を選択`);
    remove.textContent = "×";
    remove.setAttribute("aria-label", `${track.name}を削除`);
    title.addEventListener("click", () => selectBgmTrack(index));
    remove.addEventListener("click", () => removeBgmTrack(index));
    row.append(title, remove);
    els.bgmList.append(row);
  });
}

function getBgmLoopLabel() {
  if (bgmLoopMode === "one") return { text: "↻1", aria: "1曲ループ中" };
  if (bgmLoopMode === "all") return { text: "↻全", aria: "全曲ループ中" };
  return { text: "⇄", aria: "ランダム全曲ループ中" };
}

function handleBgmDrag(event) {
  event.preventDefault();
  els.bgmDrop.classList.add("dragover");
}

function handleBgmDrop(event) {
  event.preventDefault();
  els.bgmDrop.classList.remove("dragover");
  addBgmFiles(event.dataTransfer.files);
}

function loadStoryProgress() {
  try {
    return JSON.parse(localStorage.getItem(storyStoreKey)) || {
      clearedStages: [],
      stars: {},
      lastStageId: STORY_STAGES[0].id
    };
  } catch {
    return { clearedStages: [], stars: {}, lastStageId: STORY_STAGES[0].id };
  }
}

function saveStoryProgress(stageId, stars) {
  const progress = loadStoryProgress();
  if (!progress.clearedStages.includes(stageId)) {
    progress.clearedStages.push(stageId);
  }
  progress.stars[stageId] = Math.max(progress.stars[stageId] || 0, stars);
  const currentIndex = STORY_STAGES.findIndex((stage) => stage.id === stageId);
  const nextStage = STORY_STAGES[currentIndex + 1];
  progress.lastStageId = nextStage?.id || stageId;
  localStorage.setItem(storyStoreKey, JSON.stringify(progress));
  return progress;
}

function getUnlockedStageCount(progress = loadStoryProgress()) {
  return Math.min(STORY_STAGES.length, progress.clearedStages.length + 1);
}

function startStorySelect() {
  clearInterval(timerId);
  els.title.classList.add("hidden");
  els.tutorial.classList.add("hidden");
  els.paste.classList.add("hidden");
  els.game.classList.add("hidden");
  els.result.classList.add("hidden");
  els.story.classList.remove("hidden");
  renderStorySelect();
}

function renderStorySelect() {
  const progress = loadStoryProgress();
  const unlockedCount = getUnlockedStageCount(progress);
  const totalStars = Object.values(progress.stars).reduce((sum, stars) => sum + stars, 0);
  const nextStage = STORY_STAGES[Math.min(unlockedCount - 1, STORY_STAGES.length - 1)];

  els.storyProgress.textContent = `${Math.min(progress.clearedStages.length + 1, STORY_STAGES.length)}/${STORY_STAGES.length}`;
  els.storyStars.textContent = totalStars;
  els.storyNext.textContent = nextStage.title;
  els.storyMap.replaceChildren(...STORY_STAGES.map((stage, index) => {
    const unlocked = index < unlockedCount;
    const cleared = progress.clearedStages.includes(stage.id);
    const card = document.createElement("article");
    card.className = `story-card${unlocked ? "" : " locked"}`;
    card.innerHTML = `
      <span>${index + 1}</span>
      <h3>${stage.title}</h3>
      <p>${stage.subtitle}</p>
      <strong>${renderStars(progress.stars[stage.id] || 0)}</strong>
      <button class="${unlocked ? "primary" : "secondary"}" ${unlocked ? "" : "disabled"}>
        ${cleared ? "もう一度" : unlocked ? "はじめる" : "未解放"}
      </button>
    `;
    card.querySelector("button").addEventListener("click", () => startStoryStage(stage.id));
    return card;
  }));
}

function startStoryStage(stageId) {
  const stage = STORY_STAGES.find((item) => item.id === stageId) || STORY_STAGES[0];
  state = createInitialState();
  state.mode = "story";
  state.storyStageId = stage.id;
  state.storyStage = stage;
  state.difficulty = stage.difficulty || "hard";
  state.longTextOrder = shuffleIndexes(LONG_TEXTS.length);
  state.startedAt = Date.now();
  els.title.classList.add("hidden");
  els.tutorial.classList.add("hidden");
  els.story.classList.add("hidden");
  els.paste.classList.add("hidden");
  els.result.classList.add("hidden");
  els.game.classList.remove("hidden");
  els.game.classList.toggle("longform-mode", isLongformMode());
  els.modeLabel.textContent = stage.title;
  els.timeLabel.textContent = "残り";
  els.difficultyLabel.textContent = stage.type === "long" ? "ストーリー文章" : "ストーリー単語";
  els.storyNote.textContent = stage.intro;
  els.storyNote.classList.remove("hidden");
  pickNextWord();
  renderHud();
  clearInterval(timerId);
  focusInput();
}

function renderStars(count) {
  return `${"★".repeat(count)}${"☆".repeat(3 - count)}`;
}

function startTutorial() {
  clearInterval(timerId);
  tutorialState = createTutorialState();
  els.title.classList.add("hidden");
  els.story.classList.add("hidden");
  els.paste.classList.add("hidden");
  els.game.classList.add("hidden");
  els.result.classList.add("hidden");
  els.tutorial.classList.remove("hidden");
  renderTutorial();
}

function renderTutorial() {
  const step = TUTORIAL_STEPS[tutorialState.stepIndex];
  const target = step.sequence[tutorialState.sequenceIndex];
  const isLastStep = tutorialState.stepIndex === TUTORIAL_STEPS.length - 1;

  els.tutorialStep.textContent = `${tutorialState.stepIndex + 1}/${TUTORIAL_STEPS.length}`;
  els.tutorialHits.textContent = tutorialState.hits;
  els.tutorialMisses.textContent = tutorialState.misses;
  els.tutorialLabel.textContent = step.label;
  els.tutorialTitle.textContent = step.title;
  els.tutorialBody.textContent = step.body;
  els.tutorialTarget.textContent = tutorialState.finished ? "OK" : formatKey(target);
  els.tutorialNext.textContent = tutorialState.finished ? "タイトルへ" : isLastStep ? "確認を終える" : "次へ";

  els.fingerStrip.replaceChildren(...FINGER_GROUPS.map((group) => {
    const card = document.createElement("div");
    card.className = `finger-card${step.active.includes(group.id) ? " active" : ""}`;
    const title = document.createElement("strong");
    const keys = document.createElement("span");
    title.textContent = group.label;
    keys.textContent = group.keys;
    card.append(title, keys);
    return card;
  }));

  renderKeyboardTarget(target);
}

function renderKeyboardTarget(target) {
  document.querySelectorAll(".keyboard .key").forEach((key) => {
    key.classList.remove("target", "hit", "miss");
    key.classList.toggle("target", !tutorialState.finished && keyMatchesTarget(key, target));
  });
}

function renderGameKeyboardTarget() {
  const nextKey = getNextTypingKey();
  els.gameKeyboard.querySelectorAll(".key").forEach((key) => {
    key.classList.remove("target", "hit", "miss");
    key.classList.toggle("target", keyMatchesTarget(key, nextKey));
  });
  renderFingerGuide(nextKey);
}

function getNextTypingKey() {
  const guide = getGuideRoman();
  return guide[state.typed.length] || "";
}

function getFingerForKey(key) {
  const physicalKey = getPhysicalKeyForTarget(key);
  return FINGER_KEY_MAP[physicalKey] || FINGER_KEY_MAP[physicalKey?.toLowerCase()] || "";
}

function getPhysicalKeyForTarget(target) {
  if (!target || !els.gameKeyboard) return target;
  const keyEl = [...els.gameKeyboard.querySelectorAll(".key")].find((key) => keyMatchesTarget(key, target));
  return keyEl?.dataset.key || target;
}

function renderFingerGuide(nextKey) {
  const overlay = els.gameKeyboard.querySelector(".keyboard-hand-overlay");
  if (!overlay) return;
  const activeFingerId = getFingerForKey(nextKey);
  const targetKeyEl = getTargetKeyElement(nextKey);
  const keyboardRect = els.gameKeyboard.getBoundingClientRect();

  overlay.querySelectorAll(".keyboard-hand").forEach((hand) => {
    const handSide = hand.dataset.hand;
    const layout = getHandLayout(handSide);
    if (!layout) return;
    const svg = hand.querySelector(".keyboard-hand-svg");
    const shapes = [...hand.querySelectorAll(".keyboard-hand-shape")];
    const partPaths = buildHandPaths(handSide, activeFingerId, targetKeyEl, layout);
    svg.setAttribute("viewBox", `0 0 ${keyboardRect.width} ${keyboardRect.height}`);
    shapes.forEach((shape, index) => {
      const path = partPaths[index] || "";
      shape.setAttribute("d", path);
      shape.classList.toggle("hidden", !path);
    });
    hand.classList.remove("hit", "miss");
    hand.classList.toggle("active", isFingerOnHand(activeFingerId, handSide));
  });
  renderKeyboardFingerStatus(nextKey);
}

function getTargetKeyElement(target) {
  if (!target) return null;
  return [...els.gameKeyboard.querySelectorAll(".key")].find((key) => keyMatchesTarget(key, target)) || null;
}

function getHomeKeyElement(fingerId) {
  const homeKey = FINGER_HOME_KEYS[fingerId];
  return [...els.gameKeyboard.querySelectorAll(".key")].find((key) => key.dataset.key === homeKey) || null;
}

function getKeyboardRelativeRect(element) {
  const keyboardRect = els.gameKeyboard.getBoundingClientRect();
  const rect = element.getBoundingClientRect();
  return {
    left: rect.left - keyboardRect.left,
    right: rect.right - keyboardRect.left,
    top: rect.top - keyboardRect.top,
    bottom: rect.bottom - keyboardRect.top,
    width: rect.width,
    height: rect.height,
    centerX: rect.left - keyboardRect.left + rect.width / 2,
    centerY: rect.top - keyboardRect.top + rect.height / 2
  };
}

function getHandLayout(handSide) {
  const fingerIds = HAND_FINGERS[handSide];
  const homeRects = fingerIds
    .map((fingerId) => getHomeKeyElement(fingerId))
    .filter(Boolean)
    .map(getKeyboardRelativeRect);
  if (!homeRects.length) return null;
  const keyHeight = homeRects[0].height;
  const minX = Math.min(...homeRects.map((rect) => rect.left));
  const maxX = Math.max(...homeRects.map((rect) => rect.right));
  const keyboardHeight = els.gameKeyboard.getBoundingClientRect().height;
  const knuckleY = keyboardHeight - keyHeight * 0.22;
  const baseY = knuckleY + keyHeight * 0.98;
  const outerPalmPad = keyHeight * 1.05;
  const innerPalmPad = keyHeight * 0.08;
  const palmWidth = maxX - minX + outerPalmPad + innerPalmPad;
  const palmHeight = keyHeight * 2.25;
  const palmLeft = handSide === "left" ? minX - outerPalmPad : minX - innerPalmPad;
  const palmTop = knuckleY - keyHeight * 0.08;
  return { baseY, knuckleY, palmLeft, palmTop, palmWidth, palmHeight, keyHeight };
}

function isFingerOnHand(fingerId, handSide) {
  if (fingerId === "thumb") return true;
  return HAND_FINGERS[handSide].includes(fingerId);
}

function buildHandPaths(handSide, activeFingerId, targetKeyEl, layout) {
  const fingerShapes = HAND_FINGERS[handSide]
    .map((fingerId) => getFingerShape(fingerId, fingerId === activeFingerId ? targetKeyEl : null, layout))
    .filter(Boolean)
    .sort((a, b) => a.baseX - b.baseX);
  const thumbShape = getThumbShape(handSide, activeFingerId === "thumb" ? targetKeyEl : null, layout);
  if (!fingerShapes.length) return [];

  return [
    buildPalmBlobPath(layout),
    ...fingerShapes.map(segmentToRoundedPath),
    thumbShape ? segmentToRoundedPath(thumbShape) : ""
  ].filter(Boolean);
}

function getFingerShape(fingerId, targetKeyEl, layout) {
  const homeKeyEl = getHomeKeyElement(fingerId);
  if (!homeKeyEl || !layout) return null;
  const homeRect = getKeyboardRelativeRect(homeKeyEl);
  const targetRect = getKeyboardRelativeRect(targetKeyEl || homeKeyEl);
  const isPinky = fingerId.endsWith("pinky");
  const width = isPinky
    ? Math.max(24, Math.min(40, homeRect.width * 0.58))
    : Math.max(30, Math.min(58, homeRect.width * 0.82));
  const baseX = homeRect.centerX;
  const baseY = layout.knuckleY;
  const targetX = targetRect.centerX;
  const targetY = targetRect.centerY + targetRect.height * 0.08;
  const dx = targetX - baseX;
  const dy = targetY - baseY;
  const distance = Math.hypot(dx, dy);
  if (targetKeyEl) {
    return createSegmentShapeBetween(baseX, baseY, targetX, targetY, width);
  }
  const limits = FINGER_REACH_LIMITS[fingerId] || { angle: 42, height: 2.65 };
  const minHeight = layout.keyHeight * (limits.minHeight || 1.42);
  const maxHeight = layout.keyHeight * limits.height;
  const height = clamp(distance + layout.keyHeight * 0.28, minHeight, maxHeight);
  const restAngle = FINGER_REST_ANGLES[fingerId] || 0;
  const angle = clamp(restAngle, -limits.angle, limits.angle);
  return createSegmentShape(baseX, baseY, width, height, angle);
}

function getThumbShape(handSide, targetKeyEl, layout) {
  if (!layout) return null;
  const spaceKeyEl = targetKeyEl || getHomeKeyElement("thumb");
  if (!spaceKeyEl) return null;
  const spaceRect = getKeyboardRelativeRect(spaceKeyEl);
  const isLeft = handSide === "left";
  const baseX = layout.palmLeft + layout.palmWidth * 0.5;
  const baseY = layout.palmTop + layout.palmHeight * 1.02;
  const targetX = targetKeyEl
    ? spaceRect.centerX + spaceRect.width * (isLeft ? -0.18 : 0.18)
    : baseX + layout.keyHeight * (isLeft ? 0.36 : -0.36);
  const targetY = targetKeyEl
    ? spaceRect.centerY + layout.keyHeight * 0.04
    : baseY - layout.keyHeight * 0.98;
  const dx = targetX - baseX;
  const dy = targetY - baseY;
  const distance = Math.hypot(dx, dy);
  const baseWidth = Math.max(38, Math.min(62, layout.keyHeight * 0.96));
  const tipWidth = Math.max(26, Math.min(44, layout.keyHeight * 0.68));
  if (targetKeyEl) {
    return createTaperedSegmentShapeBetween(baseX, baseY, targetX, targetY, baseWidth, tipWidth);
  }
  const maxReach = layout.keyHeight * 1.25;
  const reach = clamp(distance, layout.keyHeight * 0.78, maxReach);
  const scale = distance ? reach / distance : 1;
  return createTaperedSegmentShapeBetween(baseX, baseY, baseX + dx * scale, baseY + dy * scale, baseWidth, tipWidth);
}

function createSegmentShape(baseX, baseY, width, height, angle) {
  const radians = angle * Math.PI / 180;
  const directionX = Math.sin(radians);
  const directionY = -Math.cos(radians);
  const normalX = Math.cos(radians);
  const normalY = Math.sin(radians);
  const halfWidth = width / 2;
  const tipX = baseX + directionX * height;
  const tipY = baseY + directionY * height;
  const capLift = width * 0.45;
  return {
    baseX,
    baseY,
    tipX,
    tipY,
    leftBaseX: baseX - normalX * halfWidth,
    leftBaseY: baseY - normalY * halfWidth,
    rightBaseX: baseX + normalX * halfWidth,
    rightBaseY: baseY + normalY * halfWidth,
    leftTipX: tipX - normalX * halfWidth,
    leftTipY: tipY - normalY * halfWidth,
    rightTipX: tipX + normalX * halfWidth,
    rightTipY: tipY + normalY * halfWidth,
    leftCapX: tipX - normalX * halfWidth + directionX * capLift,
    leftCapY: tipY - normalY * halfWidth + directionY * capLift,
    rightCapX: tipX + normalX * halfWidth + directionX * capLift,
    rightCapY: tipY + normalY * halfWidth + directionY * capLift,
    innerBaseX: baseX - normalX * halfWidth,
    innerBaseY: baseY - normalY * halfWidth,
    outerBaseX: baseX + normalX * halfWidth,
    outerBaseY: baseY + normalY * halfWidth,
    innerTipX: tipX - normalX * halfWidth,
    innerTipY: tipY - normalY * halfWidth,
    outerTipX: tipX + normalX * halfWidth,
    outerTipY: tipY + normalY * halfWidth
  };
}

function createSegmentShapeBetween(baseX, baseY, tipX, tipY, width) {
  const dx = tipX - baseX;
  const dy = tipY - baseY;
  const distance = Math.hypot(dx, dy) || 1;
  const directionX = dx / distance;
  const directionY = dy / distance;
  const normalX = -directionY;
  const normalY = directionX;
  const halfWidth = width / 2;
  const capLift = width * 0.45;
  return {
    baseX,
    baseY,
    tipX,
    tipY,
    leftBaseX: baseX - normalX * halfWidth,
    leftBaseY: baseY - normalY * halfWidth,
    rightBaseX: baseX + normalX * halfWidth,
    rightBaseY: baseY + normalY * halfWidth,
    leftTipX: tipX - normalX * halfWidth,
    leftTipY: tipY - normalY * halfWidth,
    rightTipX: tipX + normalX * halfWidth,
    rightTipY: tipY + normalY * halfWidth,
    leftCapX: tipX - normalX * halfWidth + directionX * capLift,
    leftCapY: tipY - normalY * halfWidth + directionY * capLift,
    rightCapX: tipX + normalX * halfWidth + directionX * capLift,
    rightCapY: tipY + normalY * halfWidth + directionY * capLift
  };
}

function createTaperedSegmentShapeBetween(baseX, baseY, tipX, tipY, baseWidth, tipWidth) {
  const dx = tipX - baseX;
  const dy = tipY - baseY;
  const distance = Math.hypot(dx, dy) || 1;
  const directionX = dx / distance;
  const directionY = dy / distance;
  const normalX = -directionY;
  const normalY = directionX;
  const baseHalfWidth = baseWidth / 2;
  const tipHalfWidth = tipWidth / 2;
  const capLift = tipWidth * 0.52;
  return {
    baseX,
    baseY,
    tipX,
    tipY,
    leftBaseX: baseX - normalX * baseHalfWidth,
    leftBaseY: baseY - normalY * baseHalfWidth,
    rightBaseX: baseX + normalX * baseHalfWidth,
    rightBaseY: baseY + normalY * baseHalfWidth,
    leftTipX: tipX - normalX * tipHalfWidth,
    leftTipY: tipY - normalY * tipHalfWidth,
    rightTipX: tipX + normalX * tipHalfWidth,
    rightTipY: tipY + normalY * tipHalfWidth,
    leftCapX: tipX - normalX * tipHalfWidth + directionX * capLift,
    leftCapY: tipY - normalY * tipHalfWidth + directionY * capLift,
    rightCapX: tipX + normalX * tipHalfWidth + directionX * capLift,
    rightCapY: tipY + normalY * tipHalfWidth + directionY * capLift
  };
}

function buildPalmBlobPath(layout) {
  const left = layout.palmLeft;
  const top = layout.knuckleY + layout.keyHeight * 0.04;
  const width = layout.palmWidth;
  const height = layout.palmHeight * 0.82;
  const right = left + width;
  const bottom = top + height;
  const rx = width * 0.22;
  const ry = height * 0.42;
  return [
    `M ${left + rx} ${top}`,
    `C ${left + width * 0.08} ${top} ${left} ${top + height * 0.18} ${left} ${top + ry}`,
    `L ${left} ${bottom - ry}`,
    `C ${left} ${bottom - height * 0.12} ${left + width * 0.08} ${bottom} ${left + rx} ${bottom}`,
    `L ${right - rx} ${bottom}`,
    `C ${right - width * 0.08} ${bottom} ${right} ${bottom - height * 0.12} ${right} ${bottom - ry}`,
    `L ${right} ${top + ry}`,
    `C ${right} ${top + height * 0.18} ${right - width * 0.08} ${top} ${right - rx} ${top}`,
    "Z"
  ].join(" ");
}

function segmentToRoundedPath(segment) {
  const baseCap = Math.min(18, Math.max(8, Math.hypot(segment.rightBaseX - segment.leftBaseX, segment.rightBaseY - segment.leftBaseY) * 0.28));
  const directionX = (segment.tipX - segment.baseX) / (Math.hypot(segment.tipX - segment.baseX, segment.tipY - segment.baseY) || 1);
  const directionY = (segment.tipY - segment.baseY) / (Math.hypot(segment.tipX - segment.baseX, segment.tipY - segment.baseY) || 1);
  return [
    `M ${segment.leftBaseX} ${segment.leftBaseY}`,
    `L ${segment.leftTipX} ${segment.leftTipY}`,
    `C ${segment.leftCapX} ${segment.leftCapY} ${segment.rightCapX} ${segment.rightCapY} ${segment.rightTipX} ${segment.rightTipY}`,
    `L ${segment.rightBaseX} ${segment.rightBaseY}`,
    `C ${segment.rightBaseX - directionX * baseCap} ${segment.rightBaseY - directionY * baseCap} ${segment.leftBaseX - directionX * baseCap} ${segment.leftBaseY - directionY * baseCap} ${segment.leftBaseX} ${segment.leftBaseY}`,
    "Z"
  ].join(" ");
}

function renderKeyboardFingerStatus(nextKey) {
  const status = els.gameKeyboard.querySelector(".keyboard-hand-status");
  if (!status) return;
  status.querySelector("strong").textContent = nextKey ? formatKey(nextKey) : "-";
}

function getKeyElements(target, scope = document) {
  return [...scope.querySelectorAll(".key")].filter((key) => keyMatchesTarget(key, target));
}

function flashTutorialKey(target, className) {
  const keyEls = getKeyElements(target, els.tutorial);
  keyEls.forEach((keyEl) => keyEl.classList.add(className));
  setTimeout(() => keyEls.forEach((keyEl) => keyEl.classList.remove(className)), 220);
}

function flashGameKey(target, className) {
  const keyEls = getKeyElements(target, els.gameKeyboard);
  keyEls.forEach((keyEl) => keyEl.classList.add(className));
  setTimeout(() => keyEls.forEach((keyEl) => keyEl.classList.remove(className)), 220);
  flashFingerGuide(target, className);
}

function flashFingerGuide(target, className) {
  const fingerId = getFingerForKey(target);
  if (!fingerId) return;
  const hands = [...els.gameKeyboard.querySelectorAll(".keyboard-hand")]
    .filter((hand) => isFingerOnHand(fingerId, hand.dataset.hand));
  hands.forEach((hand) => hand.classList.add(className));
  setTimeout(() => hands.forEach((hand) => hand.classList.remove(className)), 220);
}

function handleTutorialInput(event) {
  if (els.tutorial.classList.contains("hidden")) return;
  if (tutorialState.finished || event.key.length !== 1) return;
  event.preventDefault();

  const key = event.key.toLowerCase();
  const step = TUTORIAL_STEPS[tutorialState.stepIndex];
  const target = step.sequence[tutorialState.sequenceIndex];

  if (key === target) {
    tutorialState.hits += 1;
    tutorialState.sequenceIndex += 1;
    els.tutorialFeedback.textContent = "ジュリリ〜、いい感じジュリ。ホームポジションへ戻す意識で続けるジュリ。";
    els.tutorialFeedback.className = "typed tutorial-feedback good";

    if (tutorialState.sequenceIndex >= step.sequence.length) {
      completeTutorialStep();
      flashTutorialKey(target, "hit");
      return;
    }
  } else {
    tutorialState.misses += 1;
    els.tutorialFeedback.textContent = `ジュリ？ ${formatKey(target)} を押すジュリ。急がず、担当の指だけを動かすジュリ。`;
    els.tutorialFeedback.className = "typed tutorial-feedback bad";
  }

  renderTutorial();
  flashTutorialKey(target, key === target ? "hit" : "miss");
}

function completeTutorialStep() {
  const isLastStep = tutorialState.stepIndex === TUTORIAL_STEPS.length - 1;
  if (isLastStep) {
    tutorialState.finished = true;
    els.tutorialFeedback.textContent = "ジュリリ〜！ チュートリアル完了ジュリ。れんしゅうモードで短い単語から始めるジュリ。";
    els.tutorialFeedback.className = "typed tutorial-feedback good";
    renderTutorial();
    return;
  }

  tutorialState.pendingAdvance = true;
  els.tutorialFeedback.textContent = "できたジュリ。次の指へ進むジュリリ〜。";
  els.tutorialFeedback.className = "typed tutorial-feedback good";
  setTimeout(() => {
    if (tutorialState.pendingAdvance && !els.tutorial.classList.contains("hidden")) {
      advanceTutorialStep();
    }
  }, 650);
}

function advanceTutorialStep() {
  if (tutorialState.finished) {
    showTitle();
    return;
  }
  if (tutorialState.stepIndex === TUTORIAL_STEPS.length - 1) {
    completeTutorialStep();
    return;
  }
  tutorialState.pendingAdvance = false;
  tutorialState.stepIndex = Math.min(TUTORIAL_STEPS.length - 1, tutorialState.stepIndex + 1);
  tutorialState.sequenceIndex = 0;
  els.tutorialFeedback.textContent = "";
  els.tutorialFeedback.className = "typed tutorial-feedback";
  renderTutorial();
}

function restartTutorialStep() {
  tutorialState.sequenceIndex = 0;
  tutorialState.finished = false;
  tutorialState.pendingAdvance = false;
  els.tutorialFeedback.textContent = "";
  els.tutorialFeedback.className = "typed tutorial-feedback";
  renderTutorial();
}

function formatKey(key) {
  if (key === " ") return "Space";
  return key.length === 1 ? key.toUpperCase() : key;
}

function startGame(mode, options = {}) {
  state = createInitialState();
  state.mode = mode;
  state.difficulty = options.difficulty || state.difficulty;
  state.secondsLeft = MODE_SECONDS[mode];
  state.startedAt = Date.now();
  els.title.classList.add("hidden");
  els.tutorial.classList.add("hidden");
  els.story.classList.add("hidden");
  els.paste.classList.add("hidden");
  els.result.classList.add("hidden");
  els.game.classList.remove("hidden");
  els.game.classList.toggle("longform-mode", isLongformMode());
  els.storyNote.classList.add("hidden");
  els.modeLabel.textContent = getModeLabel(mode);
  els.timeLabel.textContent = isTimedMode() ? "時間" : "残り";
  if (isLongformMode()) {
    els.difficultyLabel.textContent = isPastedTextMode() ? "貼り付け文章" : "文章";
    state.longTextOrder = shuffleIndexes(getCurrentSource().length);
  } else if (isWeakKeyMode()) {
    els.difficultyLabel.textContent = "苦手キー";
    clearDifficultyButtons();
  } else if (isSymbolMode()) {
    els.difficultyLabel.textContent = "記号・数字";
    clearDifficultyButtons();
  } else {
    setDifficulty(state.difficulty);
  }
  pickNextWord();
  renderHud();
  focusInput();

  clearInterval(timerId);
  if (isTimedMode()) {
    timerId = setInterval(tick, 1000);
  }
}

function getModeLabel(mode) {
  if (mode === "challenge") return "チャレンジ";
  if (mode === "longformChallenge") return "ながぶんチャレンジ";
  if (mode === "longform") return "ながぶん";
  if (mode === "pastedText") return "話題でながぶん";
  if (mode === "weakKeys") return "苦手キー";
  if (mode === "symbols") return "記号・数字";
  return "れんしゅう";
}

function startTodayPlan() {
  const plan = WEEKLY_PLAN[new Date().getDay()];
  if (plan.mode === "tutorial") {
    startTutorial();
    return;
  }
  if (plan.mode === "story") {
    startStorySelect();
    return;
  }
  startGame(plan.mode, { difficulty: plan.difficulty || "easy" });
}

function isLongformMode() {
  return state.mode === "longform" || state.mode === "longformChallenge" || isPastedTextMode() || state.storyStage?.type === "long";
}

function isPastedTextMode() {
  return state.mode === "pastedText";
}

function isTimedMode() {
  return state.mode === "challenge" || state.mode === "longformChallenge";
}

function isStoryMode() {
  return state.mode === "story";
}

function isWeakKeyMode() {
  return state.mode === "weakKeys";
}

function isSymbolMode() {
  return state.mode === "symbols";
}

function setDifficulty(difficulty) {
  state.difficulty = difficulty;
  const labels = { easy: "やさしい", normal: "ふつう", hard: "むずかしい" };
  els.difficultyLabel.textContent = labels[difficulty];
  els.difficultyButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.difficulty === difficulty);
  });
}

function clearDifficultyButtons() {
  els.difficultyButtons.forEach((button) => button.classList.remove("active"));
}

function pickNextWord() {
  const source = getCurrentSource();
  const sourceKey = getCurrentSourceKey();
  let index;
  if (isLongformMode()) {
    index = state.longTextOrder[state.completedWords % state.longTextOrder.length];
  } else {
    if (state.wordOrderSource !== sourceKey || state.wordOrder.length === 0) {
      state.wordOrder = shuffleIndexes(source.length);
      state.wordOrderSource = sourceKey;
    }
    index = state.wordOrder.shift();
  }
  state.lastWordIndex = index;
  const item = source[index];
  state.word = {
    display: item.display,
    kana: item.kana || item.direct,
    direct: Boolean(item.direct),
    candidates: item.direct ? [item.direct] : buildRomanCandidates(item.kana)
  };
  state.typed = "";
  els.input.value = "";
  renderWord();
}

function getCurrentSource() {
  if (isStoryMode()) {
    return state.storyStage.type === "long" ? LONG_TEXTS : WORDS[state.storyStage.difficulty || "easy"];
  }
  if (isPastedTextMode()) return pastedTextItems.length ? pastedTextItems : LONG_TEXTS;
  if (isWeakKeyMode()) return getWeakKeySource();
  if (isSymbolMode()) return SYMBOL_NUMBER_TEXTS;
  return isLongformMode() ? LONG_TEXTS : WORDS[state.difficulty];
}

function getCurrentSourceKey() {
  if (isStoryMode()) return `story-${state.storyStageId}`;
  if (isPastedTextMode()) return `pasted-${pastedTextItems.length}`;
  if (isWeakKeyMode()) return `weak-${getWeakKeys(5).map((item) => item.key).join("") || "default"}`;
  if (isSymbolMode()) return "symbols";
  if (isLongformMode()) return "longform";
  return `words-${state.difficulty}`;
}

function getWeakKeySource() {
  const weakKeys = getWeakKeys(5).map((item) => item.key);
  if (!weakKeys.length) return KEY_FOCUS_TEXTS;
  const focused = KEY_FOCUS_TEXTS.filter((item) => item.focusKeys.some((key) => weakKeys.includes(key)));
  const merged = [...focused, ...KEY_FOCUS_TEXTS];
  return [...new Map(merged.map((item) => [item.direct, item])).values()];
}

function renderWord() {
  els.wordDisplay.textContent = state.word.display;
  els.wordDisplay.classList.toggle("long-word", isLongformMode());
  els.readingDisplay.textContent = getGuideRoman();
  els.typedDisplay.textContent = state.typed;
  renderGameKeyboardTarget();
}

function renderHud() {
  const accuracy = getAccuracy();
  const targetCount = getTargetCount();
  const remaining = targetCount - state.completedWords;
  els.timeLeft.textContent = isTimedMode() ? state.secondsLeft : Math.max(0, remaining);
  els.score.textContent = state.score;
  els.combo.textContent = state.combo;
  els.accuracy.textContent = `${Math.round(accuracy)}%`;
  const walk = Math.min(92, state.completedWords * 5 + state.combo * 1.2);
  els.progress.style.setProperty("--walk", `${walk}%`);
  els.runner.style.left = `${Math.min(86, 4 + walk * 0.88)}%`;
}

function getAccuracy() {
  if (state.totalKeys === 0) return 100;
  return Math.max(0, (state.correctChars / state.totalKeys) * 100);
}

function tick() {
  state.secondsLeft -= 1;
  renderHud();
  if (state.secondsLeft <= 0) {
    finishGame();
  }
}

function handleInput(event) {
  if (els.game.classList.contains("hidden")) return;
  if (event.key.length !== 1) return;
  event.preventDefault();

  const key = event.key.toLowerCase();
  const targetKey = getNextTypingKey();
  const nextTyped = state.typed + key;
  state.totalKeys += 1;

  if (canAcceptTyped(nextTyped)) {
    recordKeyAttempt(targetKey, true);
    state.typed = nextTyped;
    state.correctChars += 1;
    state.score += 10 + Math.floor(state.combo / 10);
    bounceRunner("happy");

    if (isWordComplete()) {
      state.combo += 1;
      state.maxCombo = Math.max(state.maxCombo, state.combo);
      state.completedWords += 1;
      state.score += 30 + state.combo * 2;
      if (!isTimedMode() && !isStoryMode() && state.completedWords >= getTargetCount()) {
        finishGame();
        return;
      }
      if (isStoryMode() && state.completedWords >= state.storyStage.targetCount) {
        finishGame();
        return;
      }
      pickNextWord();
    } else {
      renderWord();
    }
    flashGameKey(targetKey, "hit");
  } else {
    recordKeyAttempt(targetKey, false);
    state.mistakes += 1;
    state.combo = 0;
    state.score = Math.max(0, state.score - 5);
    bounceRunner("miss");
    flashGameKey(targetKey, "miss");
  }

  renderHud();
}

function getTargetCount() {
  if (isStoryMode()) return state.storyStage.targetCount;
  if (isLongformMode()) return LONGFORM_LINES;
  if (isWeakKeyMode()) return WEAK_KEY_LINES;
  if (isSymbolMode()) return SYMBOL_LINES;
  return PRACTICE_WORDS;
}

function shuffleIndexes(length) {
  const indexes = Array.from({ length }, (_, index) => index);
  for (let index = indexes.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [indexes[index], indexes[swapIndex]] = [indexes[swapIndex], indexes[index]];
  }
  return indexes;
}

function bounceRunner(className) {
  els.runner.classList.remove("happy", "miss");
  void els.runner.offsetWidth;
  els.runner.classList.add(className);
  setTimeout(() => els.runner.classList.remove(className), 240);
}

function finishGame() {
  clearInterval(timerId);
  const elapsedMinutes = Math.max(1 / 60, (Date.now() - state.startedAt) / 60000);
  const wpm = Math.round((state.correctChars / 5) / elapsedMinutes);
  const accuracy = Math.round(getAccuracy());
  const result = {
    score: state.score,
    wpm,
    accuracy,
    mistakes: state.mistakes,
    maxCombo: state.maxCombo,
    nuts: state.completedWords
  };
  if (isStoryMode()) {
    const stars = getStoryStars(result.accuracy);
    saveStoryProgress(state.storyStageId, stars);
    saveRecords(result);
    renderStoryResult(result, stars);
    return;
  }
  saveRecords(result);
  renderResult(result);
}

function renderResult(result) {
  els.game.classList.add("hidden");
  els.story.classList.add("hidden");
  els.paste.classList.add("hidden");
  els.result.classList.remove("hidden");
  els.resultNextStory.classList.add("hidden");
  els.rank.textContent = getRank(result);
  els.finalScore.textContent = result.score;
  els.finalWpm.textContent = result.wpm;
  els.finalAccuracy.textContent = `${result.accuracy}%`;
  els.finalMisses.textContent = result.mistakes;
  els.finalMaxCombo.textContent = result.maxCombo;
  els.finalNuts.textContent = result.nuts;
  els.resultTip.textContent = getTip(result);
}

function renderStoryResult(result, stars) {
  els.game.classList.add("hidden");
  els.story.classList.add("hidden");
  els.paste.classList.add("hidden");
  els.result.classList.remove("hidden");
  els.resultNextStory.classList.remove("hidden");
  els.rank.textContent = renderStars(stars);
  els.finalScore.textContent = result.score;
  els.finalWpm.textContent = result.wpm;
  els.finalAccuracy.textContent = `${result.accuracy}%`;
  els.finalMisses.textContent = result.mistakes;
  els.finalMaxCombo.textContent = result.maxCombo;
  els.finalNuts.textContent = result.nuts;
  els.resultTip.textContent = `${state.storyStage.outro} ${state.storyStage.reward}を見つけたジュリ。`;
}

function getStoryStars(accuracy) {
  if (accuracy >= 95) return 3;
  if (accuracy >= 85) return 2;
  return 1;
}

function goNextStory() {
  if (!isStoryMode()) return;
  const currentIndex = STORY_STAGES.findIndex((stage) => stage.id === state.storyStageId);
  const nextStage = STORY_STAGES[currentIndex + 1];
  if (nextStage) {
    startStoryStage(nextStage.id);
    return;
  }
  startStorySelect();
}

function getRank(result) {
  if (result.accuracy >= 97 && result.wpm >= 180) return "S";
  if (result.accuracy >= 93 && result.wpm >= 130) return "A";
  if (result.accuracy >= 85) return "B";
  return "C";
}

function getTip(result) {
  const weakKeys = getWeakKeys(3);
  const weakText = weakKeys.length ? ` 苦手キーは ${weakKeys.map((item) => formatKey(item.key)).join("、")} ジュリ。苦手キーモードで整えるジュリ。` : "";
  if (result.accuracy < 85) return "ジュリ？ 次は速さより正確さを意識するジュリ。もっと遠くまで進めるジュリ。";
  if (result.wpm < 120) return `ジュリリ〜、安定してるジュリ。短い単語でリズムを作ると、自然に速くなるジュリ。${weakText}`;
  if (result.maxCombo < 10) return `連続正解が伸びると木の実も増えるジュリ。目指せ10コンボジュリリ〜。${weakText}`;
  return `ジュリリ〜！ すばらしいおさんぽジュリ。むずかしい単語にも挑戦できるジュリ。${weakText}`;
}

function showTitle() {
  clearInterval(timerId);
  els.title.classList.remove("hidden");
  els.tutorial.classList.add("hidden");
  els.story.classList.add("hidden");
  els.paste.classList.add("hidden");
  els.game.classList.add("hidden");
  els.result.classList.add("hidden");
  renderRecords();
  renderSchedule();
}

function retryCurrentMode() {
  if (isStoryMode()) {
    startStoryStage(state.storyStageId);
    return;
  }
  startGame(state.mode);
}

function focusInput() {
  requestAnimationFrame(() => els.input.focus());
}

document.addEventListener("keydown", handleInput);
  document.addEventListener("keydown", handleTutorialInput);
document.addEventListener("click", focusInput);
window.addEventListener("resize", () => {
  if (!els.game.classList.contains("hidden")) renderGameKeyboardTarget();
});
setupGameKeyboard();
els.keyboardChoiceButtons.forEach((button) => {
  button.addEventListener("click", () => setKeyboardLayout(button.dataset.keyboardChoice));
});
els.keyboardOptionButtons.forEach((button) => {
  button.addEventListener("click", () => setKeyboardLayout(button.dataset.keyboardOption));
});
els.startTutorial.addEventListener("click", startTutorial);
els.startStory.addEventListener("click", startStorySelect);
els.startPractice.addEventListener("click", () => startGame("practice"));
els.startWeakKeys.addEventListener("click", () => startGame("weakKeys"));
els.startLongform.addEventListener("click", () => startGame("longform"));
els.startPastedText.addEventListener("click", showPasteScreen);
els.startChallenge.addEventListener("click", () => startGame("challenge"));
els.startLongformChallenge.addEventListener("click", () => startGame("longformChallenge"));
els.startSymbols.addEventListener("click", () => startGame("symbols"));
els.pasteToTitle.addEventListener("click", showTitle);
els.pasteText.addEventListener("input", updatePastePreview);
els.startPastedPractice.addEventListener("click", startPastedPractice);
els.clearPastedText.addEventListener("click", clearPastedText);
els.startTodayPlan.addEventListener("click", startTodayPlan);
els.wpmModeBest.addEventListener("click", () => setWpmTrendMode("best"));
els.wpmModeAvg.addEventListener("click", () => setWpmTrendMode("avg"));
els.reminderTime.addEventListener("change", saveReminderFromForm);
els.toggleReminder.addEventListener("click", () => setReminderEnabled(!loadReminder().enabled));
els.bgmDrop.addEventListener("dragover", handleBgmDrag);
els.bgmDrop.addEventListener("dragleave", () => els.bgmDrop.classList.remove("dragover"));
els.bgmDrop.addEventListener("drop", handleBgmDrop);
els.bgmPlay.addEventListener("click", playBgm);
els.bgmPause.addEventListener("click", pauseBgm);
els.bgmStop.addEventListener("click", stopBgm);
els.bgmPrev.addEventListener("click", () => selectBgmTrack(bgmIndex - 1));
els.bgmNext.addEventListener("click", () => selectBgmTrack(bgmIndex + 1));
els.bgmLoopMode.addEventListener("click", toggleBgmLoopMode);
els.miniBgmToggle.addEventListener("click", toggleMiniBgm);
els.miniBgmPrev.addEventListener("click", () => selectBgmTrack(bgmIndex - 1));
els.miniBgmNext.addEventListener("click", () => selectBgmTrack(bgmIndex + 1));
els.miniBgmLoop.addEventListener("click", toggleBgmLoopMode);
els.bgmClearAll.addEventListener("click", clearBgmTracks);
els.bgmVolume.addEventListener("input", () => {
  bgmAudio.volume = Number(els.bgmVolume.value);
});
bgmAudio.addEventListener("play", renderBgm);
bgmAudio.addEventListener("pause", renderBgm);
bgmAudio.addEventListener("ended", handleBgmEnded);
els.backToTitle.addEventListener("click", showTitle);
els.tutorialToTitle.addEventListener("click", showTitle);
els.storyToTitle.addEventListener("click", showTitle);
els.resultToTitle.addEventListener("click", showTitle);
els.retry.addEventListener("click", retryCurrentMode);
els.resultNextStory.addEventListener("click", goNextStory);
els.tutorialNext.addEventListener("click", advanceTutorialStep);
els.tutorialRestart.addEventListener("click", restartTutorialStep);
els.difficultyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (isLongformMode() || isWeakKeyMode() || isSymbolMode()) return;
    setDifficulty(button.dataset.difficulty);
    pickNextWord();
    focusInput();
  });
});

renderRecords();
renderSchedule();
renderReminder();
renderBgm();
startReminderWatcher();
showKeyboardSetupIfNeeded();
loadContentData().then(() => {
  renderSchedule();
  if (!els.story.classList.contains("hidden")) {
    renderStorySelect();
  }
});

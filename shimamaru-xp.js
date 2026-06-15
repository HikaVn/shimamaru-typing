// しままるシリーズ共有の経験値(XP)モジュール（単独ファイル・依存なし）。
//
// 目的: タイピング / タスク など「しままる」系の各アプリで、レベルと経験値を
// 持ち回るための共通ロジック。GitHub Pages のプロジェクトページは
// リポジトリが別でも同一オリジン(例 https://hikavn.github.io)で配信されるため、
// localStorage はパスをまたいで共有される。各リポジトリにこのファイルをそのまま
// コピーし、同じ STORAGE_KEY / スキーマを使えば XP を共有できる。
//
// スキーマ(STORAGE_KEY = "shimamaru:xp:v1"):
//   { version:1, totalXp:number, level:number, plays:number,
//     updatedAt:number(ms), source:{ [name:string]: number } }
//
// 端末・ブラウザをまたぐ共有は localStorage では不可能なので、保険として
// exportJson()/importJson() を用意（JSONで書き出し／取り込み）。
(function (global) {
  "use strict";

  var STORAGE_KEY = "shimamaru:xp:v1";
  var PROFILE_KEY = "shimamaru:profile";    // 現在アクティブなプロファイルID(共有)
  var PROFILES_KEY = "shimamaru:profiles";  // プロファイルID→名前 のマップ(共有)
  var BASE = 300;     // レベル1→2 に必要な XP
  var GROWTH = 1.3;   // 1レベルごとの必要 XP 倍率

  // ---- プロファイル(複数ユーザー) ----
  // 同一オリジンの各アプリで同じ PROFILE_KEY を読むので、誰がプレイ中かを共有できる。
  // "default" プロファイルは旧来の素のキーを使う（既存セーブの後方互換）。
  function getActiveProfile() {
    try { return global.localStorage.getItem(PROFILE_KEY) || "default"; } catch (e) { return "default"; }
  }
  function setActiveProfile(id) {
    try { global.localStorage.setItem(PROFILE_KEY, id || "default"); } catch (e) { /* ignore */ }
    return getActiveProfile();
  }
  function loadProfileMap() {
    try { return JSON.parse(global.localStorage.getItem(PROFILES_KEY)) || {}; } catch (e) { return {}; }
  }
  function saveProfileMap(map) {
    try { global.localStorage.setItem(PROFILES_KEY, JSON.stringify(map)); } catch (e) { /* ignore */ }
  }
  function listProfiles() {
    var map = loadProfileMap();
    var out = [{ id: "default", name: map["default"] || "プレイヤー1" }];
    Object.keys(map).forEach(function (id) { if (id !== "default") out.push({ id: id, name: map[id] }); });
    return out;
  }
  function addProfile(name) {
    var map = loadProfileMap();
    var id = "p" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    map[id] = name || ("プレイヤー" + (listProfiles().length + 1));
    saveProfileMap(map);
    return { id: id, name: map[id] };
  }
  function renameProfile(id, name) {
    if (!name) return;
    var map = loadProfileMap();
    map[id || "default"] = name;
    saveProfileMap(map);
  }
  function removeProfile(id) {
    if (!id || id === "default") return;
    var map = loadProfileMap();
    delete map[id];
    saveProfileMap(map);
    try { global.localStorage.removeItem(STORAGE_KEY + "::" + id); } catch (e) { /* ignore */ }
    if (getActiveProfile() === id) setActiveProfile("default");
  }
  // アクティブプロファイルの XP 保存キー（default は後方互換で素のキー）。
  function activeKey() {
    var id = getActiveProfile();
    return id === "default" ? STORAGE_KEY : STORAGE_KEY + "::" + id;
  }

  // レベル level に到達するのに必要な累計 XP（level>=1 で 0 から）。
  function xpToReachLevel(level) {
    var total = 0;
    for (var l = 1; l < level; l++) total += Math.round(BASE * Math.pow(GROWTH, l - 1));
    return total;
  }

  function levelForXp(totalXp) {
    var level = 1;
    while (totalXp >= xpToReachLevel(level + 1)) level++;
    return level;
  }

  function defaultState() {
    return { version: 1, totalXp: 0, level: 1, plays: 0, updatedAt: 0, source: {} };
  }

  function load() {
    try {
      var raw = JSON.parse(global.localStorage.getItem(activeKey()));
      if (!raw || typeof raw.totalXp !== "number") return defaultState();
      var state = Object.assign(defaultState(), raw);
      state.source = Object.assign({}, raw.source);
      return state;
    } catch (e) {
      return defaultState();
    }
  }

  function save(state) {
    state.version = 1;
    state.totalXp = Math.max(0, Math.round(state.totalXp));
    state.level = levelForXp(state.totalXp);
    state.updatedAt = Date.now();
    try { global.localStorage.setItem(activeKey(), JSON.stringify(state)); } catch (e) { /* 容量超過などは無視 */ }
    return state;
  }

  // XP を加算して保存。{ state, gained, leveledUp, from, to } を返す。
  function addXp(amount, meta) {
    var gained = Math.max(0, Math.round(amount || 0));
    var state = load();
    var from = state.level;
    state.totalXp += gained;
    if (meta && meta.source) {
      state.source[meta.source] = (state.source[meta.source] || 0) + gained;
    }
    if (meta && meta.play) state.plays += 1;
    save(state);
    return { state: state, gained: gained, leveledUp: state.level > from, from: from, to: state.level };
  }

  // 現在レベル内の進捗。{ level, into, need, ratio, toNext }
  function progress(state) {
    var s = state || load();
    var cur = xpToReachLevel(s.level);
    var next = xpToReachLevel(s.level + 1);
    var into = s.totalXp - cur;
    var need = next - cur;
    return {
      level: s.level,
      into: into,
      need: need,
      ratio: need ? Math.min(1, into / need) : 0,
      toNext: Math.max(0, need - into)
    };
  }

  // 「速いほど多い」: 直近の打鍵間隔(ms)とコンボから 1 打あたりの XP を算出。
  // 1打=1文字=1/5語 なので WPM = 60000/(5*interval) = 12000/interval。
  function xpForKeystroke(intervalMs, combo) {
    var wpm = intervalMs > 0 ? Math.min(220, 12000 / intervalMs) : 0;
    var speed = 1 + Math.floor(wpm / 60);            // 速度ボーナス(1〜)
    var comboBonus = 1 + Math.floor((combo || 0) / 50); // コンボボーナス(1〜)
    return speed * comboBonus;
  }

  function exportJson() {
    return JSON.stringify(load());
  }

  // mode: "replace" で上書き、それ以外は totalXp が大きい方を採用（端末間マージ向け）。
  function importJson(json, mode) {
    var incoming;
    try { incoming = typeof json === "string" ? JSON.parse(json) : json; } catch (e) { return load(); }
    if (!incoming || typeof incoming.totalXp !== "number") return load();
    var current = load();
    var winner = mode === "replace" ? incoming : (incoming.totalXp > current.totalXp ? incoming : current);
    var merged = Object.assign(defaultState(), winner);
    merged.source = Object.assign({}, winner.source);
    return save(merged);
  }

  var api = {
    STORAGE_KEY: STORAGE_KEY,
    PROFILE_KEY: PROFILE_KEY,
    PROFILES_KEY: PROFILES_KEY,
    load: load,
    save: save,
    addXp: addXp,
    levelForXp: levelForXp,
    xpToReachLevel: xpToReachLevel,
    progress: progress,
    xpForKeystroke: xpForKeystroke,
    exportJson: exportJson,
    importJson: importJson,
    getActiveProfile: getActiveProfile,
    setActiveProfile: setActiveProfile,
    listProfiles: listProfiles,
    addProfile: addProfile,
    renameProfile: renameProfile,
    removeProfile: removeProfile
  };

  global.ShimamaruXp = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);

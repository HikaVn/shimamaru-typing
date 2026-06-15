# しままる共有 経験値(XP) — 連携メモ

「しままる」シリーズの各アプリ（タイピング / タスク / その他）でレベルと経験値を
**持ち回る**ための共有モジュール `shimamaru-xp.js` の使い方です。リポジトリは
分けたまま（GitHub Pages もそのまま）連携できます。

## なぜリポジトリを分けたままで連携できるか

GitHub Pages のプロジェクトページは、リポジトリが別でも **同一オリジン**で配信されます。

| アプリ | URL | オリジン |
| --- | --- | --- |
| タイピング | `https://hikavn.github.io/shimamaru-typing/` | `https://hikavn.github.io` |
| タスク | `https://hikavn.github.io/shimamaru-task/` | `https://hikavn.github.io` |

`localStorage` は **オリジン単位**（パスは無関係）なので、同じ `hikavn.github.io`
配下のアプリ同士なら **localStorage は共有**されます。よって各アプリが同じキー・
同じスキーマで読み書きすれば、レベルと経験値を共有できます。

- ✅ リポジトリ統合は不要、GitHub Pages もそのまま
- ⚠️ 共有は「同じブラウザ・同じ端末」内のみ（localStorage は端末間で同期しない）
- ⚠️ 独自ドメインや別サブドメインに分けるとオリジンが変わり共有されなくなる

端末をまたぐ受け渡しが必要なときは、後述の `exportJson()/importJson()`（JSONの
書き出し／取り込み）を使ってください。

## 導入方法（タスク側など、他リポジトリ）

1. `shimamaru-xp.js` をそのリポジトリへコピー（vendoring）。
2. HTML で読み込む。

```html
<script src="shimamaru-xp.js"></script>
```

3. JS から使う。

```js
// 何かを達成したら経験値を加算（source は内訳の名前。例: "task"）
const res = ShimamaruXp.addXp(50, { source: "task", play: true });
console.log(res.leveledUp, res.to); // レベルアップしたか / 新レベル

// 現在の状態と進捗
const state = ShimamaruXp.load();          // { totalXp, level, plays, source, ... }
const p = ShimamaruXp.progress();          // { level, into, need, ratio, toNext }
```

各リポジトリの `shimamaru-xp.js` は **同一内容**に保ってください（特に
`STORAGE_KEY`・`BASE`・`GROWTH`・スキーマ）。差異が出るとレベル計算がずれます。

## 共有スキーマ

`localStorage["shimamaru:xp:v1"]`:

```json
{
  "version": 1,
  "totalXp": 1234,
  "level": 5,
  "plays": 7,
  "updatedAt": 1718000000000,
  "source": { "typing": 1000, "task": 234 }
}
```

- `totalXp` が一次情報。`level` は `totalXp` から算出され保存される。
- `source` はどのアプリ由来の XP かの内訳（任意・表示用）。

## API

| 関数 | 説明 |
| --- | --- |
| `load()` | 共有ストアから状態を読む（無ければ初期値） |
| `addXp(amount, { source, play })` | XPを加算して保存。`{ state, gained, leveledUp, from, to }` を返す |
| `progress(state?)` | 現レベル内の進捗 `{ level, into, need, ratio, toNext }` |
| `levelForXp(totalXp)` | 累計XPからレベルを算出 |
| `xpToReachLevel(level)` | そのレベル到達に必要な累計XP |
| `xpForKeystroke(intervalMs, combo)` | 「速いほど多い」1打あたりXP（タイピング用） |
| `exportJson()` / `importJson(json, mode)` | 端末間用のJSON書き出し／取り込み（`mode="replace"`で上書き、既定は大きい方を採用） |

## レベル曲線

- レベル 1→2 に必要: `BASE = 300` XP
- 以降 1レベルごとに `GROWTH = 1.3` 倍

タイピング側では正解打鍵ごとに `xpForKeystroke()` 分を加算し、セッション終了時に
合計を `addXp(..., { source: "typing", play: true })` で確定保存しています。

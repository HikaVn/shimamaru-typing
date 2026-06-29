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

## プロファイル（複数ユーザー）

同じブラウザを家族で共有しても、人ごとにレベル・XP・記録を分けられます。**切り替えは
内部処理だけで、子どもが操作するUIはありません**（Webは「今打っているのが誰か」を自動
検出できないため、誰かを指定する“きっかけ”だけが要ります）。

- 「いまの人」は共有キー `localStorage["shimamaru:profile"]`（プロファイルID）に保存。
  3アプリすべてがこれを読むので、**一度決めれば全アプリが自動で同じ人に追従**します。
- 各プロファイルの保存先は `shimamaru:xp:v1::<id>`（XP）など、IDで名前空間化されます。
  `"default"` は後方互換で**素のキー**（`shimamaru:xp:v1`）を使うため、既存セーブはそのまま。
- 名前→ID の対応は `localStorage["shimamaru:profiles"]`（共有）。

誰を選ぶかの「きっかけ」の作り方（いずれか）:

1. **アプリ間リンク**にパラメータを付ける（タイピング側で自動取り込み）:
   - `…/shimamaru-typing/?player=<なまえ>` … 名前で指定。無ければ自動作成して以後継続。
   - `…/shimamaru-typing/?profile=<id>` … IDを直接指定（アプリ間の確実な連携用）。
2. どこか一箇所（例: タスク側のサインイン）で `ShimamaruXp.setActiveProfile(id)` を呼ぶ。

一度決まれば共有キーに残るので、次回プレーンURLで開いても同じ人が続きます。

## API

| 関数 | 説明 |
| --- | --- |
| `load()` | 共有ストアから状態を読む（**アクティブなプロファイル**。無ければ初期値） |
| `addXp(amount, { source, play })` | XPを加算して保存。`{ state, gained, leveledUp, from, to }` を返す |
| `progress(state?)` | 現レベル内の進捗 `{ level, into, need, ratio, toNext }` |
| `levelForXp(totalXp)` | 累計XPからレベルを算出 |
| `xpToReachLevel(level)` | そのレベル到達に必要な累計XP |
| `xpForKeystroke(intervalMs, combo)` | 「速いほど多い」1打あたりXP（タイピング用） |
| `exportJson()` / `importJson(json, mode)` | 端末間用のJSON書き出し／取り込み（`mode="replace"`で上書き、既定は大きい方を採用） |
| `getActiveProfile()` / `setActiveProfile(id)` | いまの人のID取得／設定（共有キー `shimamaru:profile`） |
| `listProfiles()` | `[{ id, name }]` の一覧（先頭は `default`） |
| `addProfile(name)` | プロファイルを作成し `{ id, name }` を返す |
| `renameProfile(id, name)` / `removeProfile(id)` | 名前変更／削除（`default` は削除不可） |

## レベル曲線

- レベル 1→2 に必要: `BASE = 300` XP
- 以降 1レベルごとに `GROWTH = 1.3` 倍

タイピング側では正解打鍵ごとに `xpForKeystroke()` 分を加算し、セッション終了時に
合計を `addXp(..., { source: "typing", play: true })` で確定保存しています。

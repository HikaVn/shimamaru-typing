// 実際の styles.css ＋ index.html のキーボード節から、単体プレビューHTMLを作る。
const fs = require("fs");
const css = fs.readFileSync(__dirname + "/../styles.css", "utf8");
const html = fs.readFileSync(__dirname + "/../index.html", "utf8");
const m = html.match(/<section class="keyboard" aria-label="[^"]*">([\s\S]*?)<\/section>/);
if (!m) { console.error("keyboard section not found"); process.exit(1); }
const inner = m[1];
const out = `<!doctype html><html lang="ja"><head><meta charset="utf-8">
<style>
${css}
body{ margin:0; background:#dfe7ea; padding:24px; }
.preview-wrap{ max-width:1140px; margin:0 auto; }
</style></head>
<body>
<div class="preview-wrap">
  <section class="keyboard game-keyboard" aria-label="preview">${inner}</section>
</div>
</body></html>`;
fs.writeFileSync(__dirname + "/../keyboard-preview.html", out);
console.log("wrote keyboard-preview.html");

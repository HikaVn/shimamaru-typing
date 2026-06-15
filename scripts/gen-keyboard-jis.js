// JIS コンパクトキーボード（Logitech 風）の単一グリッド配置を生成する。
// 出力: (1) index.html 用のキーHTMLスニペット (2) 検証用PNG
// グリッド: 64列(=16u, 1u=4列) × 6行。Enter は行3-4をまたぐ縦長キー。
const zlib = require("zlib");
const fs = require("fs");

const COLS = 64;   // 16u
const ROWS = 6;

// ---- キー定義ヘルパ ----
// 1行ぶんのキーを左から積む。w は列数(1u=4)。code があれば打鍵キー(data-key)。
function layoutRow(row, items) {
  let c = 0;
  const out = [];
  for (const it of items) {
    out.push({ r0: row, c0: c, r1: row + 1, c1: c + it.w, ...it });
    c += it.w;
  }
  return { keys: out, end: c };
}

// 仮名（JIS かな配列）
const kana = {
  q:"た", w:"て", e:"い", r:"す", t:"か", y:"ん", u:"な", i:"に", o:"ら", p:"せ",
  a:"ち", s:"と", d:"し", f:"は", g:"き", h:"く", j:"ま", k:"の", l:"り",
  z:"つ", x:"さ", c:"そ", v:"ひ", b:"こ", n:"み", m:"も"
};
const L = (ch) => ({ w:4, code: ch, label: ch.toUpperCase(), sub: kana[ch] });

const rows = [];

// 行1: ファンクション行（装飾）。K380 風にデバイス切替(①②③)＋メディアアイコンを併記（近似）。
const fnIcons = ["①","②","③","🔆","🔍","😊","📷","⏮","⏯","⏭","🔉","🔇"]; // F1..F12
rows.push(layoutRow(1, [
  { w:6, label:"esc", cls:"kb-fn", deco:true },
  ...fnIcons.map((ic, i) => ({ w:4, label: ic, sub: `F${i+1}`, cls:"kb-fn kb-fnmedia", deco:true })),
  { w:6, label:"🔒", sub:"del", cls:"kb-fn", deco:true },
]));

// 行2: 数字行
rows.push(layoutRow(2, [
  { w:4, code:"`", label:"半/全", cls:"kb-jp", deco:false },
  { w:4, code:"1", label:"1", sub:"ぬ" },
  { w:4, code:"2", label:"2", sub:"ふ" },
  { w:4, code:"3", label:"3", sub:"あ" },
  { w:4, code:"4", label:"4", sub:"う" },
  { w:4, code:"5", label:"5", sub:"え" },
  { w:4, code:"6", label:"6", sub:"お" },
  { w:4, code:"7", label:"7", sub:"や" },
  { w:4, code:"8", label:"8", sub:"ゆ" },
  { w:4, code:"9", label:"9", sub:"よ" },
  { w:4, code:"0", label:"0", sub:"わ" },
  { w:4, code:"-", label:"-", sub:"ほ" },
  { w:4, code:"=", label:"^", sub:"へ" },
  { w:4, label:"¥", sub:"ー", cls:"kb-jp", deco:true },
  { w:8, label:"back", cls:"kb-fn", deco:true },
]));

// 行3: 上段（Tab + QWERTY + @ [）。Enter は別途配置。
rows.push(layoutRow(3, [
  { w:6, label:"tab", cls:"kb-fn", deco:true },
  L("q"), L("w"), L("e"), L("r"), L("t"), L("y"), L("u"), L("i"), L("o"), L("p"),
  { w:4, code:"[", label:"@", sub:"゛" },
  { w:4, code:"]", label:"[", sub:"゜" },
]));

// 行4: ホーム段（Caps + ASDF... + ; : ］）
rows.push(layoutRow(4, [
  { w:7, label:"caps", cls:"kb-fn", deco:true },
  L("a"), L("s"), L("d"), L("f"), L("g"), L("h"), L("j"), L("k"), L("l"),
  { w:4, code:";", label:";", sub:"れ" },
  { w:4, code:"'", label:":", sub:"け" },
  { w:4, label:"]", sub:"む", cls:"kb-jp", deco:true },
]));

// 行5: 下段（Shift + ZXCV... + \ろ）。右側に矢印▲。
rows.push(layoutRow(5, [
  { w:8, label:"shift", cls:"kb-fn", deco:true },
  L("z"), L("x"), L("c"), L("v"), L("b"), L("n"), L("m"),
  { w:4, code:",", label:",", sub:"ね" },
  { w:4, code:".", label:".", sub:"る" },
  { w:4, code:"/", label:"/", sub:"め" },
  { w:4, label:"\\", sub:"ろ", cls:"kb-jp", deco:true },
  { w:4, label:"shift", cls:"kb-fn", deco:true },
]));

// 行6: スペース行（JIS の親指まわり）
rows.push(layoutRow(6, [
  { w:6, label:"ctrl", cls:"kb-fn", deco:true },
  { w:5, label:"⌘", sub:"opt", cls:"kb-fn", deco:true },
  { w:5, label:"alt", sub:"⌘", cls:"kb-fn", deco:true },
  { w:5, label:"無変換", sub:"英数", cls:"kb-fn", deco:true },
  { w:20, code:" ", label:"space", cls:"kb-space", deco:false },
  { w:5, label:"変換", sub:"かな", cls:"kb-fn", deco:true },
  { w:6, label:"かな", sub:"ｶﾅ/英", cls:"kb-fn", deco:true },
]));

// すべてのキーを集約
let keys = rows.flatMap(r => r.keys);

// Enter（行3-4をまたぐ縦長キー）。ホーム最終キー(]む, c1=55)と被らないよう c0=55。
keys.push({ r0:3, c0:55, r1:5, c1:64, label:"enter", cls:"kb-enter", deco:true });

// 矢印クラスタ（逆T字）。行5に▲、行6に◀▼▶。列52-64。
keys.push({ r0:5, c0:56, r1:6, c1:60, label:"▲", cls:"kb-arrow", deco:true });
keys.push({ r0:6, c0:52, r1:7, c1:56, label:"◀", cls:"kb-arrow", deco:true });
keys.push({ r0:6, c0:56, r1:7, c1:60, label:"▼", cls:"kb-arrow", deco:true });
keys.push({ r0:6, c0:60, r1:7, c1:64, label:"▶", cls:"kb-arrow", deco:true });

// ---- HTML 生成 ----
const homeKeys = new Set(["f", "j"]);
function keyHtml(k) {
  const cls = ["key", k.cls, k.code && homeKeys.has(k.code) ? "home-key" : ""].filter(Boolean).join(" ");
  const style = `grid-area:${k.r0}/${k.c0 + 1}/${k.r1}/${k.c1 + 1}`;
  const data = k.code != null ? ` data-key="${k.code === " " ? " " : k.code.replace(/"/g, "&quot;")}"` : "";
  const inner = k.sub
    ? `<span class="key-main">${k.label}</span><span class="key-sub">${k.sub}</span>`
    : `<span class="key-main">${k.label}</span>`;
  return `            <span class="${cls}" style="${style}"${data}>${inner}</span>`;
}
const html = keys.map(keyHtml).join("\n");
fs.writeFileSync(__dirname + "/../keyboard-jis-snippet.html", html);
console.log("wrote keyboard-jis-snippet.html  keys=", keys.length);

// ---- 検証用PNG ----
const W = 1100, H = 560, PAD = 20;
const gapPx = 6;
const colW = (W - PAD * 2 - gapPx * (COLS - 1)) / COLS;
const rowHpx = [30, 50, 50, 50, 50, 50]; // 行ごとの高さ
const rowY = []; let yy = PAD; for (let i = 0; i < ROWS; i++){ rowY.push(yy); yy += rowHpx[i] + gapPx; }
const buf = Buffer.alloc(W * H * 4);
for (let i=0;i<W*H;i++){ buf[i*4]=238;buf[i*4+1]=243;buf[i*4+2]=245;buf[i*4+3]=255; }
function px(x,y,r,g,b){ x|=0;y|=0; if(x<0||y<0||x>=W||y>=H)return; const i=(y*W+x)*4; buf[i]=r;buf[i+1]=g;buf[i+2]=b;buf[i+3]=255; }
function fill(x,y,w,h,r,g,b){ for(let j=y;j<y+h;j++)for(let i=x;i<x+w;i++)px(i,j,r,g,b); }
function rrectFill(x,y,w,h,rad,r,g,b){ for(let j=0;j<h;j++)for(let i=0;i<w;i++){ const dx=Math.min(i,w-1-i),dy=Math.min(j,h-1-j); if(dx>=rad||dy>=rad||((rad-dx)**2+(rad-dy)**2)<=rad*rad) px(x+i,y+j,r,g,b);} }
function rrectStroke(x,y,w,h,rad,r,g,b){ rrectFill(x,y,w,h,rad,r,g,b); rrectFill(x+2,y+2,w-4,h-4,Math.max(0,rad-2), 255,255,255); }
function rectFor(k){
  const x = PAD + k.c0 * (colW + gapPx);
  const x1 = PAD + k.c1 * (colW + gapPx) - gapPx;
  const y = rowY[k.r0 - 1];
  const y1 = rowY[k.r1 - 2] + rowHpx[k.r1 - 2];
  return { x: Math.round(x), y: Math.round(y), w: Math.round(x1 - x), h: Math.round(y1 - y) };
}
for (const k of keys) {
  const { x, y, w, h } = rectFor(k);
  const rad = Math.min(w, h) / 2;
  let bg = [255,255,255];
  if (k.code && homeKeys.has(k.code)) bg = [222,242,233];
  else if (k.cls === "kb-fn" || k.cls === "kb-arrow") bg = [228,234,238];
  else if (k.cls === "kb-space") bg = [246,248,249];
  rrectStroke(x, y, w, h, rad, 150,164,172);
  rrectFill(x+2, y+2, w-4, h-4, Math.max(0,rad-2), ...bg);
}
// PNGエンコード
function crc32(b){let c=~0;for(let i=0;i<b.length;i++){c^=b[i];for(let k=0;k<8;k++)c=(c>>>1)^(0xEDB88320&-(c&1));}return ~c>>>0;}
function chunk(t,d){const l=Buffer.alloc(4);l.writeUInt32BE(d.length);const ty=Buffer.from(t);const cr=Buffer.alloc(4);cr.writeUInt32BE(crc32(Buffer.concat([ty,d])));return Buffer.concat([l,ty,d,cr]);}
const ih=Buffer.alloc(13);ih.writeUInt32BE(W,0);ih.writeUInt32BE(H,4);ih[8]=8;ih[9]=6;
const raw=Buffer.alloc((W*4+1)*H);for(let j=0;j<H;j++){raw[j*(W*4+1)]=0;buf.copy(raw,j*(W*4+1)+1,j*W*4,(j+1)*W*4);}
fs.writeFileSync(__dirname+"/../keyboard-jis.png",Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk("IHDR",ih),chunk("IDAT",zlib.deflateSync(raw)),chunk("IEND",Buffer.alloc(0))]));
console.log("wrote keyboard-jis.png");

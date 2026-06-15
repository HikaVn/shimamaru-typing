// 手ガイド（キーボード上の指オーバーレイ）を、ブラウザのCSSグリッド幾何を
// 再現してPNGに描き出す検証ツール。game.js の getHandLayout / getFingerShape /
// getThumbShape と同じ計算をミラーし、ホームポジション（休憩時）の見た目を確認する。
//
// 使い方: node scripts/render-hands.js [出力PNGパス]
const zlib = require("zlib");
const fs = require("fs");

// ---- キーボード幾何（styles.css の .keyboard/.game-keyboard を再現）----
// 64列 × 6行。1u = 4列。col は 1fr 等幅。行1=ファンクション(低い)、行2-6=通常段。
const PAD = 14;          // .game-keyboard padding
const GAP = 6;           // grid gap
const ELEM_W = 1120;     // .game-keyboard max-width（box-sizing: border-box）
const COLS = 64;
const ROW1_H = 37.76;    // clamp(24,3.2vw,38) ≒
const ROW_H = 57;        // clamp(34,5.2vw,57)
const CONTENT_W = ELEM_W - PAD * 2;
const COL_W = (CONTENT_W - (COLS - 1) * GAP) / COLS;

// 行 r(1-6) の上端Y（要素左上を原点）。
function rowTop(r) {
  let y = PAD;
  for (let i = 1; i < r; i++) y += (i === 1 ? ROW1_H : ROW_H) + GAP;
  return y;
}
function rowHeight(r) { return r === 1 ? ROW1_H : ROW_H; }
const KEYBOARD_H = PAD * 2 + ROW1_H + 5 * ROW_H + 5 * GAP;

// 列span [c0,c1) の左端/幅（要素左上原点）。
function spanLeft(c0) { return PAD + c0 * (COL_W + GAP); }
function spanWidth(c0, c1) { return (c1 - c0) * COL_W + (c1 - c0 - 1) * GAP; }

// キー定義（必要なものだけ）。code があるものは打鍵キー。
// 1u キーは正円（直径 = 行高）でspan内中央寄せ。
const KEYS = [
  // 上段 q..p（文脈用）
  ...row3Letters(),
  // ホーム段 a..; （指のホーム）+ 文脈キー
  ...row4Letters(),
  // スペース行
  { r0: 6, c0: 24, c1: 40, label: "space", wide: true },
  { r0: 6, c0: 19, c1: 24, label: "無変換", wide: true, deco: true },
  { r0: 6, c0: 40, c1: 46, label: "変換", wide: true, deco: true },
];
function row3Letters() {
  const cols = [["q",6],["w",10],["e",14],["r",18],["t",22],["y",26],["u",30],["i",34],["o",38],["p",42]];
  return cols.map(([ch,c0]) => ({ r0: 3, c0, c1: c0+4, code: ch, label: ch.toUpperCase() }));
}
function row4Letters() {
  const cols = [["a",7],["s",11],["d",15],["f",19],["g",23],["h",27],["j",31],["k",35],["l",39],[";",43],["'",47]];
  return cols.map(([ch,c0]) => ({ r0: 4, c0, c1: c0+4, code: ch, label: ch === ";" ? ";" : (ch === "'" ? ":" : ch.toUpperCase()) }));
}

function keyRect(code) {
  const k = KEYS.find((x) => x.code === code) || KEYS.find((x) => x.label === code);
  if (!k) throw new Error("no key " + code);
  const sLeft = spanLeft(k.c0);
  const sWidth = spanWidth(k.c0, k.c1);
  const top = rowTop(k.r0);
  const h = rowHeight(k.r0);
  if (k.wide) {
    return { left: sLeft, right: sLeft + sWidth, top, bottom: top + h, width: sWidth, height: h,
             centerX: sLeft + sWidth / 2, centerY: top + h / 2 };
  }
  // 1u は正円: 直径 = 行高, span内で中央寄せ
  const d = h;
  const cx = sLeft + sWidth / 2;
  return { left: cx - d / 2, right: cx + d / 2, top, bottom: top + d, width: d, height: d,
           centerX: cx, centerY: top + d / 2 };
}

// ---- game.js ミラー: 指・親指の形状計算 ----
const FINGER_HOME = {
  "left-pinky": "a", "left-ring": "s", "left-middle": "d", "left-index": "f",
  "right-index": "j", "right-middle": "k", "right-ring": "l", "right-pinky": ";",
};
const HAND_FINGERS = {
  left: ["left-pinky", "left-ring", "left-middle", "left-index"],
  right: ["right-index", "right-middle", "right-ring", "right-pinky"],
};
const FINGER_REST_ANGLES = {
  "left-pinky": 30, "left-ring": 30, "left-middle": 30, "left-index": 30,
  "right-index": -30, "right-middle": -30, "right-ring": -30, "right-pinky": -30,
};

function getHandLayout(handSide) {
  const rects = HAND_FINGERS[handSide].map((f) => keyRect(FINGER_HOME[f]));
  const keyHeight = rects[0].height;
  const minX = Math.min(...rects.map((r) => r.left));
  const maxX = Math.max(...rects.map((r) => r.right));
  const knuckleY = KEYBOARD_H - keyHeight * 0.22;
  const baseY = knuckleY + keyHeight * 0.98;
  const outerPalmPad = keyHeight * 1.05;
  const innerPalmPad = keyHeight * 0.08;
  const palmWidth = maxX - minX + outerPalmPad + innerPalmPad;
  const palmHeight = keyHeight * 2.25;
  const palmLeft = handSide === "left" ? minX - outerPalmPad : minX - innerPalmPad;
  const palmTop = knuckleY - keyHeight * 0.08;
  return { baseY, knuckleY, palmLeft, palmTop, palmWidth, palmHeight, keyHeight };
}

function getFixedFingerBaseX(fingerId, tipX, tipY, baseY) {
  const angle = FINGER_REST_ANGLES[fingerId] || 0;
  const radians = angle * Math.PI / 180;
  const directionX = Math.sin(radians);
  const directionY = -Math.cos(radians) || -1;
  const height = (tipY - baseY) / directionY;
  return tipX - directionX * height;
}

function getFingerShape(fingerId, layout) {
  const homeRect = keyRect(FINGER_HOME[fingerId]);
  const isPinky = fingerId.endsWith("pinky");
  const width = isPinky
    ? Math.max(24, Math.min(40, homeRect.width * 0.58))
    : Math.max(30, Math.min(58, homeRect.width * 0.82));
  const baseY = layout.knuckleY;
  const homeTargetX = homeRect.centerX;
  const homeTargetY = homeRect.centerY + homeRect.height * 0.08;
  const baseX = getFixedFingerBaseX(fingerId, homeTargetX, homeTargetY, baseY);
  return createSegmentShapeBetween(baseX, baseY, homeTargetX, homeTargetY, width);
}

// ==== ここが調整対象: ホームポジション時の親指 ====
function getThumbShape(handSide, layout, variant) {
  const spaceRect = keyRect("space");
  const isLeft = handSide === "left";
  const baseWidth = Math.max(38, Math.min(62, layout.keyHeight * 0.96));
  const tipWidth = Math.max(26, Math.min(44, layout.keyHeight * 0.68));
  return variant(handSide, layout, spaceRect, isLeft, baseWidth, tipWidth);
}

// 現状(PR #2)の親指
function thumbCurrent(handSide, layout, spaceRect, isLeft, baseWidth, tipWidth) {
  const thumbInwardShift = layout.keyHeight * 0.82 * (isLeft ? 1 : -1);
  const baseX = layout.palmLeft + layout.palmWidth * 0.5 + thumbInwardShift;
  const baseY = layout.palmTop + layout.palmHeight * 1.02;
  const targetX = spaceRect.centerX + spaceRect.width * (isLeft ? -0.18 : 0.18) + thumbInwardShift;
  return createTaperedSegmentShapeBetween(baseX, baseY, targetX, layout.knuckleY, baseWidth, tipWidth);
}

// 自然なホームポジションの親指: 左右で離して、スペースバー上に先端を置く。
function thumbNatural(handSide, layout, spaceRect, isLeft, baseWidth, tipWidth) {
  const inward = isLeft ? 1 : -1;            // 中央へ向かう向き
  const tipX = spaceRect.centerX - inward * spaceRect.width * 0.18;
  const tipY = spaceRect.centerY + layout.keyHeight * 0.02;
  // 付け根は手のひら内側・やや下（人差し指の付け根あたりの真下）。
  const baseX = spaceRect.centerX - inward * (spaceRect.width * 0.5 + layout.keyHeight * 0.85);
  const baseY = layout.knuckleY + layout.keyHeight * 1.05;
  return createTaperedSegmentShapeBetween(baseX, baseY, tipX, tipY, baseWidth, tipWidth);
}

const VARIANTS = { current: thumbCurrent, natural: thumbNatural, idx: thumbIdx, sym: thumbSym, idxsym: thumbIdxSym };

// idxsym: 人差し指基準・クランプ無し（左右の手の中心で対称になる）
function thumbIdxSym(handSide, layout, spaceRect, isLeft, baseWidth, tipWidth) {
  const inward = isLeft ? 1 : -1;
  const indexRect = keyRect(isLeft ? "f" : "j");
  const tipX = indexRect.centerX + inward * layout.keyHeight * 0.55;
  return thumbFromAngle(layout, spaceRect, inward, tipX, 24);
}

// 親指を「人差し指の真下よりちょい内側」「４指より少し垂直」に。
// idx: 人差し指Xを基準に内寄せ（スペースバー上にクランプ）
function thumbIdx(handSide, layout, spaceRect, isLeft, baseWidth, tipWidth) {
  const inward = isLeft ? 1 : -1;
  const indexRect = keyRect(isLeft ? "f" : "j");
  const inset = layout.keyHeight * 0.55;     // 真下より「ちょい内側」
  let tipX = indexRect.centerX + inward * inset;
  const margin = layout.keyHeight * 0.2;
  tipX = isLeft ? Math.max(spaceRect.left + margin, tipX) : Math.min(spaceRect.right - margin, tipX);
  return thumbFromAngle(layout, spaceRect, inward, tipX, 24);
}
// sym: スペース中央対称で外側へ広げる
function thumbSym(handSide, layout, spaceRect, isLeft, baseWidth, tipWidth) {
  const inward = isLeft ? 1 : -1;
  const tipX = spaceRect.centerX - inward * spaceRect.width * 0.34;
  return thumbFromAngle(layout, spaceRect, inward, tipX, 24);
}
function thumbFromAngle(layout, spaceRect, inward, tipX, angleDeg) {
  const baseWidth = Math.max(38, Math.min(62, layout.keyHeight * 0.96));
  const tipWidth = Math.max(26, Math.min(44, layout.keyHeight * 0.68));
  const tipY = spaceRect.centerY + layout.keyHeight * 0.02;
  const baseY = layout.knuckleY + layout.keyHeight * 1.05;
  const theta = angleDeg * Math.PI / 180;
  const baseX = tipX - inward * Math.tan(theta) * (baseY - tipY);
  return createTaperedSegmentShapeBetween(baseX, baseY, tipX, tipY, baseWidth, tipWidth);
}

function createSegmentShapeBetween(baseX, baseY, tipX, tipY, width) {
  const dx = tipX - baseX, dy = tipY - baseY;
  const distance = Math.hypot(dx, dy) || 1;
  const directionX = dx / distance, directionY = dy / distance;
  const normalX = -directionY, normalY = directionX;
  const halfWidth = width / 2;
  const capLift = width * 0.45;
  return seg(baseX, baseY, tipX, tipY, halfWidth, halfWidth, normalX, normalY, directionX, directionY, capLift, true);
}
function createTaperedSegmentShapeBetween(baseX, baseY, tipX, tipY, baseWidth, tipWidth) {
  const dx = tipX - baseX, dy = tipY - baseY;
  const distance = Math.hypot(dx, dy) || 1;
  const directionX = dx / distance, directionY = dy / distance;
  const normalX = -directionY, normalY = directionX;
  const capLift = tipWidth * 0.52;
  return seg(baseX, baseY, tipX, tipY, baseWidth / 2, tipWidth / 2, normalX, normalY, directionX, directionY, capLift, false);
}
function seg(baseX, baseY, tipX, tipY, baseHalf, tipHalf, nX, nY, dX, dY, capLift, flatBase) {
  return {
    baseX, baseY, tipX, tipY,
    leftBaseX: flatBase ? baseX - baseHalf : baseX - nX * baseHalf,
    leftBaseY: flatBase ? baseY : baseY - nY * baseHalf,
    rightBaseX: flatBase ? baseX + baseHalf : baseX + nX * baseHalf,
    rightBaseY: flatBase ? baseY : baseY + nY * baseHalf,
    leftTipX: tipX - nX * tipHalf, leftTipY: tipY - nY * tipHalf,
    rightTipX: tipX + nX * tipHalf, rightTipY: tipY + nY * tipHalf,
    leftCapX: tipX - nX * tipHalf + dX * capLift, leftCapY: tipY - nY * tipHalf + dY * capLift,
    rightCapX: tipX + nX * tipHalf + dX * capLift, rightCapY: tipY + nY * tipHalf + dY * capLift,
  };
}

// セグメント → 多角形（ベジェを折れ線化）
function segmentToPolygon(s) {
  const baseCap = Math.min(18, Math.max(8, Math.hypot(s.rightBaseX - s.leftBaseX, s.rightBaseY - s.leftBaseY) * 0.28));
  const dlen = Math.hypot(s.tipX - s.baseX, s.tipY - s.baseY) || 1;
  const dX = (s.tipX - s.baseX) / dlen, dY = (s.tipY - s.baseY) / dlen;
  const pts = [];
  pts.push([s.leftBaseX, s.leftBaseY]);
  pts.push([s.leftTipX, s.leftTipY]);
  bezier(pts, s.leftTipX, s.leftTipY, s.leftCapX, s.leftCapY, s.rightCapX, s.rightCapY, s.rightTipX, s.rightTipY);
  pts.push([s.rightBaseX, s.rightBaseY]);
  bezier(pts, s.rightBaseX, s.rightBaseY,
    s.rightBaseX - dX * baseCap, s.rightBaseY - dY * baseCap,
    s.leftBaseX - dX * baseCap, s.leftBaseY - dY * baseCap,
    s.leftBaseX, s.leftBaseY);
  return pts;
}
function bezier(pts, x0, y0, x1, y1, x2, y2, x3, y3) {
  const N = 24;
  for (let i = 1; i <= N; i++) {
    const t = i / N, u = 1 - t;
    const x = u*u*u*x0 + 3*u*u*t*x1 + 3*u*t*t*x2 + t*t*t*x3;
    const y = u*u*u*y0 + 3*u*u*t*y1 + 3*u*t*t*y2 + t*t*t*y3;
    pts.push([x, y]);
  }
}

// ---- ラスタライズ ----
const SCALE = 1;
const W = Math.round(ELEM_W * SCALE), H = Math.round(KEYBOARD_H * SCALE);
const buf = Buffer.alloc(W * H * 4);
for (let i = 0; i < W * H; i++) { buf[i*4]=245; buf[i*4+1]=248; buf[i*4+2]=249; buf[i*4+3]=255; }
function px(x, y, r, g, b, a) {
  x|=0; y|=0; if (x<0||y<0||x>=W||y>=H) return;
  const i=(y*W+x)*4; const ia=a/255;
  buf[i]=buf[i]*(1-ia)+r*ia; buf[i+1]=buf[i+1]*(1-ia)+g*ia; buf[i+2]=buf[i+2]*(1-ia)+b*ia; buf[i+3]=255;
}
function fillPoly(poly, r, g, b, a) {
  let minY=Infinity, maxY=-Infinity;
  for (const [,y] of poly) { minY=Math.min(minY,y); maxY=Math.max(maxY,y); }
  minY=Math.max(0, Math.floor(minY)); maxY=Math.min(H-1, Math.ceil(maxY));
  for (let y=minY; y<=maxY; y++) {
    const yc = y + 0.5; const xs=[];
    for (let i=0;i<poly.length;i++){
      const [x1,y1]=poly[i], [x2,y2]=poly[(i+1)%poly.length];
      if ((y1<=yc&&y2>yc)||(y2<=yc&&y1>yc)) xs.push(x1+(yc-y1)/(y2-y1)*(x2-x1));
    }
    xs.sort((a,b)=>a-b);
    for (let i=0;i+1<xs.length;i+=2){
      for (let x=Math.floor(xs[i]); x<=Math.ceil(xs[i+1]); x++) px(x,y,r,g,b,a);
    }
  }
}
function strokeRect(x,y,w,h,r,g,b){ for(let i=0;i<w;i++){px(x+i,y,r,g,b,255);px(x+i,y+h,r,g,b,255);} for(let j=0;j<h;j++){px(x,y+j,r,g,b,255);px(x+w,y+j,r,g,b,255);} }
function circle(cx,cy,rad,r,g,b){ for(let y=cy-rad;y<=cy+rad;y++)for(let x=cx-rad;x<=cx+rad;x++){const dx=x-cx,dy=y-cy;if(dx*dx+dy*dy<=rad*rad)px(x,y,r,g,b,255);} }
function hline(y,r,g,b){ for(let x=0;x<W;x++)px(x,y,r,g,b,90); }
function dot(x,y,r,g,b){ circle(x*SCALE,y*SCALE,4,r,g,b); }

// キーボード描画（文脈）
for (const k of KEYS) {
  const rc = keyRect(k.code || k.label);
  if (k.wide) {
    strokeRect(Math.round(rc.left*SCALE), Math.round(rc.top*SCALE), Math.round(rc.width*SCALE), Math.round(rc.height*SCALE), 150,164,172);
  } else {
    const cx=Math.round(rc.centerX*SCALE), cy=Math.round(rc.centerY*SCALE), rad=Math.round(rc.width/2*SCALE);
    circle(cx,cy,rad,255,255,255); // 白丸
    // 輪郭
    for(let a=0;a<360;a+=2){const rad2=rad;const x=cx+Math.cos(a*Math.PI/180)*rad2,y=cy+Math.sin(a*Math.PI/180)*rad2;px(x,y,150,164,172,255);}
    const isHome = ["f","j"].includes(k.code);
    if (isHome) circle(cx,cy,rad-3,222,242,233);
  }
}

// 参考線: knuckleY
const layoutL = getHandLayout("left");
hline(Math.round(layoutL.knuckleY*SCALE), 200,120,120);

// 手の描画
const variantName = process.argv[3] || "current";
const variant = VARIANTS[variantName] || thumbCurrent;
for (const handSide of ["left","right"]) {
  const layout = getHandLayout(handSide);
  for (const f of HAND_FINGERS[handSide]) {
    const s = getFingerShape(f, layout);
    fillPoly(segmentToPolygon(s).map(([x,y])=>[x*SCALE,y*SCALE]), 104,181,196,150);
    dot(s.tipX, s.tipY, 40,90,120); // 指先
  }
  const t = getThumbShape(handSide, layout, variant);
  fillPoly(segmentToPolygon(t).map(([x,y])=>[x*SCALE,y*SCALE]), 104,181,196,170);
  dot(t.tipX, t.tipY, 200,60,70);   // 親指先(赤)
  dot(t.baseX, t.baseY, 120,60,160); // 親指付け根(紫)
}

// ---- PNG ----
function crc32(b){let c=~0;for(let i=0;i<b.length;i++){c^=b[i];for(let k=0;k<8;k++)c=(c>>>1)^(0xEDB88320&-(c&1));}return ~c>>>0;}
function chunk(t,d){const l=Buffer.alloc(4);l.writeUInt32BE(d.length);const ty=Buffer.from(t);const cr=Buffer.alloc(4);cr.writeUInt32BE(crc32(Buffer.concat([ty,d])));return Buffer.concat([l,ty,d,cr]);}
const ih=Buffer.alloc(13);ih.writeUInt32BE(W,0);ih.writeUInt32BE(H,4);ih[8]=8;ih[9]=6;
const raw=Buffer.alloc((W*4+1)*H);for(let j=0;j<H;j++){raw[j*(W*4+1)]=0;buf.copy(raw,j*(W*4+1)+1,j*W*4,(j+1)*W*4);}
const out = process.argv[2] || (__dirname + "/../hand-preview.png");
fs.writeFileSync(out, Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk("IHDR",ih),chunk("IDAT",zlib.deflateSync(raw)),chunk("IEND",Buffer.alloc(0))]));
console.log("wrote", out, W+"x"+H);
console.log("knuckleY=", layoutL.knuckleY.toFixed(1), "keyboardH=", KEYBOARD_H.toFixed(1));
for (const handSide of ["left","right"]) {
  const layout = getHandLayout(handSide);
  const t = getThumbShape(handSide, layout, variant);
  console.log(handSide, "thumb tip=(", t.tipX.toFixed(1)+","+t.tipY.toFixed(1)+")", "base=(", t.baseX.toFixed(1)+","+t.baseY.toFixed(1)+")");
  for (const f of HAND_FINGERS[handSide]) { const s=getFingerShape(f,layout); console.log("   ", f, "tip=(", s.tipX.toFixed(1)+","+s.tipY.toFixed(1)+")"); }
}

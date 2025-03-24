const fs = require("fs");
const {
  ellips,
  giperbola,
  parabola,
  oray,
  apiwayilastırıw,
  parabola_apiwayılawstırıw,
  ETB,
} = require("./nomerler.cjs");

let [A, B, C] = ETB.map((nomerler) =>
  nomerler.split(",")
);

const paths = {
  ellips: "ellips/ellips.tex",
  giperbola: "giperbola/giperbola.tex",
  parabola: "parabola/parabola.tex",
  oray: "oray/oray.tex",
  apiwayilastırıw:
    "apiwayilastırıw/apiwayilastırıw.tex",
  parabola_apiwayılawstırıw:
    "parabola_apiwayılawstırıw/parabola_apiwayılawstırıw.tex",
  ETB: "ETB/ETB.tex",
};
const path = paths.ETB;

let Atex = [];
let Btex = [];
let Ctex = [];
let Dtex = [];

let text = fs.readFileSync(path, "utf-8");
text = text.replaceAll("\r", "").split("\n");

const result = text.map((v, i) => {
  const match = v.match(/(^\d+)\.(.*)/);
  if (match) {
    const questionNumber = match[1];
    if (A.includes(questionNumber)) Atex.push(v);
    else if (B.includes(questionNumber))
      Btex.push(v);
    else if (C.includes(questionNumber))
      Ctex.push(v);
    else Dtex.push(v);
  }
});

[Atex, Btex, Ctex, Dtex].forEach((v, i) =>
  fs.writeFileSync(
    __dirname +
      `/${String.fromCharCode(i + 65)}tex.tex`,
    v.join("\n")
  )
);

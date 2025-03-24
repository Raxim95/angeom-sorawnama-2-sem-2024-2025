const fs = require("fs");

const data = fs
  .readFileSync("a.tex", "utf-8")
  .replaceAll("\r", "")
  .split("\n");

const firstLine = data[0];
const match = firstLine.match(/^(\d+\.)\s*(.*)/);

if (!match) {
  console.log(
    "Pattern not found in the first line."
  );
  process.exit(1);
}

const [questionNumber, question] = [
  match[1],
  match[2],
];

const newData = data
  .slice(1)
  .map((element, i) => {
    const submatch = element.match(
      /^(\d+\))\s*(.*)/
    );
    return submatch
      ? `${questionNumber}${i + 1}) ${question} ${
          submatch[2]
        }`
      : null;
  })
  .filter(Boolean);

console.log(newData.join("\n"));

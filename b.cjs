const fs = require("fs");

const data = fs
  .readFileSync("a.tex", "utf-8")
  .replaceAll("\r", "")
  .split("\n");

let result = [];
let currentQuestionNumber = "";
let currentQuestionText = "";

for (let line of data) {
  let mainMatch = line.match(/^(\d+\.)\s*(.*)/); // Match main question
  let subMatch = line.match(/^(\d+\))\s*(.*)/); // Match subquestions

  if (mainMatch) {
    currentQuestionNumber = mainMatch[1];
    currentQuestionText = mainMatch[2];
  } else if (subMatch && currentQuestionNumber) {
    result.push(
      `${currentQuestionNumber}${subMatch[1]} ${currentQuestionText} ${subMatch[2]}`
    );
  }
}

fs.writeFileSync(
  __dirname + "/b.tex",
  result.join("\n"),
  "utf-8"
);

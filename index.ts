const day = process.argv[2];
const part = process.argv[3];
const isSample = process.argv[4] === "sample";

const filePath = `./${day}/${day}-${part}.ts`;
const inputFilePath = `./${day}/${day}-${isSample ? "sample-" : `${part}-`}input.txt`;

const fileContent = await Bun.file(inputFilePath).text();

import(filePath).then((module) => {
  if (typeof module.default === "function") {
    module.default(fileContent);
  }
});

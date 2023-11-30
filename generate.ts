import fs from "fs";
import path from "path";

for (let i = 1; i <= 25; i++) {
  const folderName = `day-${i}`;

  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
    }
  } catch (error) {
    console.error(error);
  }

  const fileNames = {
    a: `day-${i}-a.ts`,
    b: `day-${i}-b.ts`,
    inputA: `day-${i}-a-input.txt`,
    inputB: `day-${i}-b-input.txt`,
    sampleInput: `day-${i}-sample-input.txt`,
  };

  const fileContent =
`// input contains the content of the input file
// you choose to use
export default function (input: string) {
  console.log('input:', input)
  console.log('                         ')
  // your code goes here
  console.log('result:', undefined)
}`;

  if (!fs.existsSync(path.join(folderName, fileNames.a))) {
    Bun.write(path.join(folderName, fileNames.a), fileContent);
  }

  if (!fs.existsSync(path.join(folderName, fileNames.b))) {
    Bun.write(path.join(folderName, fileNames.b), fileContent);
  }

  if (!fs.existsSync(path.join(folderName, fileNames.inputA))) {
    Bun.write(path.join(folderName, fileNames.inputA), "a");
  }

  if (!fs.existsSync(path.join(folderName, fileNames.inputB))) {
    Bun.write(path.join(folderName, fileNames.inputB), "b");
  }

  if (!fs.existsSync(path.join(folderName, fileNames.sampleInput))) {
    Bun.write(path.join(folderName, fileNames.sampleInput), "sample");
  }

  if (!fs.existsSync(path.join(folderName, 'README.md'))) {
    Bun.write(path.join(folderName, 'README.md'), `# Day ${i}`);
  }
}

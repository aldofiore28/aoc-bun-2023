const day = process.argv[2];
const part = process.argv[3];
const isSample = process.argv[4] === "sample";

const filePath = `./day-${day}/day-${day}-${part}.ts`;
const inputFilePath = `./day-${day}/day-${day}-${isSample ? "sample-" : `${part}-`}input.txt`;

const fileContent = await Bun.file(inputFilePath).text();

let module;

try {
  module = await import(filePath);
} catch (error) {
  console.error(error);
}

if (typeof module.default === "function") {
  module.default(fileContent);
} else {
  throw new Error("Default export function not found.")
}

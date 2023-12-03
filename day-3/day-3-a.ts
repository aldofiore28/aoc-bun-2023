// input contains the content of the input file
// you choose to use
export default function (input: string) {
  console.log("input:\n", `${input}\n`);

  let result = 0;

  const symbolExceptDotRegex = /[^.\w\s]/;
  const symbolsRegex = /[^\w\s]/;

  const engineParts = input.split("\n");

  const sanitiseArrayLength = (length: number) => (length < 0 ? 0 : length);

  for (let i = 0; i < engineParts.length; i++) {
    const singleParts = engineParts[i].split("");

    let numberStart = undefined;
    let tempNumber = "";

    for (let j = 0; j < singleParts.length; j++) {
      const isArrayEnd = j === singleParts.length - 1;
      if (symbolsRegex.test(singleParts[j]) && !tempNumber) {
        continue;
      }

      // check if it's a number
      if (!isNaN(Number(singleParts[j]))) {
        // if it's a number and it's the first number we encountered
        // save the initial index to know where the number starts
        if (!numberStart === undefined) {
          numberStart = j;
        }

        // save the stringified number
        tempNumber = `${tempNumber}${singleParts[j]}`;
        // start again
        if (!isArrayEnd) {
          continue;
        }
      }

      // it's not a number get all adjacent characters
      // top
      const top =
        engineParts[i - 1]
          ?.split("")
          .slice(
            sanitiseArrayLength(j - tempNumber.length - (isArrayEnd ? 0 : 1)),
            j + 1
          )
          .join("") || "";

      // bottom
      const bottom =
        engineParts[i + 1]
          ?.split("")
          .slice(
            sanitiseArrayLength(j - tempNumber.length - (isArrayEnd ? 0 : 1)),
            j + 1
          )
          .join("") || "";

      // left
      const left =
        singleParts[j - tempNumber.length - (isArrayEnd ? 0 : 1)] || "";

      // right
      const right = isArrayEnd ? "" : singleParts[j];

      console.log(tempNumber);
      const allParts = `${top}${right}${bottom}${left}`;
      console.log(`
${top}
${left}${tempNumber}${right}
${bottom}`);
      const hasSymbol = symbolExceptDotRegex.test(allParts);
      console.log("🚀 ~ file: day-3-a.ts:74 ~ hasSymbol:", hasSymbol);

      if (hasSymbol) {
        result += Number(tempNumber);
      }

      numberStart = undefined;
      tempNumber = "";
    }
  }

  console.log("result:", result);
}

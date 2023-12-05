// input contains the content of the input file
// you choose to use
export default function (input: string) {
  console.log("input:\n", `${input}\n`);

  let result = 0;

  const symbolExceptDotRegex = /[^.\w\s]/;
  const symbolsRegex = /[^\w\s]/;

  const engineParts = input.split("\n");

  for (let i = 0; i < engineParts.length; i++) {
    const singleParts = engineParts[i].split("");

    let numberStart = undefined;
    let tempNumber = "";

    for (let j = 0; j < singleParts.length; j++) {
      const isNumberAtArrayStart = numberStart === 0;
      const isNumberAtArrayEnd = numberStart === singleParts.length - 1;

      if (symbolsRegex.test(singleParts[j]) && !tempNumber) {
        continue;
      }

      // check if it's a number
      if (!isNaN(Number(singleParts[j]))) {
        // if it's a number and it's the first number we encountered
        // save the initial index to know where the number starts
        if (numberStart === undefined) {
          numberStart = j;
        }

        // save the stringified number
        tempNumber = `${tempNumber}${singleParts[j]}`;

        if (!isNumberAtArrayEnd && j !== singleParts.length - 1) {
          continue;
        }
      }

      // it's not a number get all adjacent characters
      // top
      const top =
        engineParts[i - 1]
          ?.split("")
          .slice(
            isNumberAtArrayStart ? 0 : (numberStart as number) - 1,
            isNumberAtArrayEnd ? j : j + 1
          )
          .join("") || "";

      // bottom
      const bottom =
        engineParts[i + 1]
          ?.split("")
          .slice(
            isNumberAtArrayStart ? 0 : (numberStart as number) - 1,
            isNumberAtArrayEnd ? j : j + 1
          )
          .join("") || "";

      // left
      const left = isNumberAtArrayStart ? "" : singleParts[(numberStart as number) - 1];

      // right
      const right = isNumberAtArrayEnd ? "" : singleParts[j];

      const allParts = `${top}${right}${bottom}${left}`;
      const hasSymbol = symbolExceptDotRegex.test(allParts);

      if (hasSymbol) {
        result += Number(tempNumber);
      }

      numberStart = undefined;
      tempNumber = "";
    }
  }

  console.log("result:", result);
}

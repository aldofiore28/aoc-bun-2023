// input contains the content of the input file
// you choose to use
export default function (input: string) {
  console.log("input:", `${input}\n`);

  const sequences = input.split("\n");

  let result = 0;

  const numbersInDigitToNumberMap: Record<string, string> = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };

  sequences.forEach((sequence) => {
    const characters = sequence.split("");
    let firstNumber = "0";
    let secondNumber = "0";

    for (let i = 0; i < characters.length; i++) {
      const character = characters[i];

      if (!isNaN(parseInt(character))) {
        firstNumber = character;
        break;
      }

      Object.keys(numbersInDigitToNumberMap).forEach((wordNumber) => {
        const possibleNumberWord = sequence.substring(i, i + wordNumber.length);

        if (possibleNumberWord === wordNumber) {
          firstNumber = numbersInDigitToNumberMap[wordNumber];
        }
      });

      if (firstNumber !== "0") {
        break;
      }
    }

    for (let i = characters.length - 1; i >= 0; i--) {
      const character = characters[i];

      if (!isNaN(parseInt(character))) {
        secondNumber = character;
        break;
      }

      Object.keys(numbersInDigitToNumberMap).forEach((wordNumber) => {
        const possibleNumberWord = sequence.substring(
          i - wordNumber.length + 1,
          i + 1
        );

        if (possibleNumberWord === wordNumber) {
          secondNumber = numbersInDigitToNumberMap[wordNumber];
        }
      });

      if (secondNumber !== "0") {
        break;
      }
    }

    const usableNumber = parseInt(`${firstNumber}${secondNumber}`);

    result += usableNumber;
  });

  console.log("result:", result);
}

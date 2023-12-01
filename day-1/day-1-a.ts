// input contains the content of the input file
// you choose to use
export default function (input: string) {
  console.log("input:", input);
  console.log("                         ");

  const sequences = input.split("\n");

  let result = 0;

  sequences.forEach((sequence) => {
    // you can use regex to do this, I tried but I was raging
    const allNumbersInSequence = sequence
      .split("")
      .filter((char) => !isNaN(parseInt(char)));
    const usableNumber = parseInt(
      `${allNumbersInSequence?.at(0) || 0}${allNumbersInSequence?.at(-1) || 0}`
    );

    result += usableNumber;
  });

  console.log("result:", result);
}

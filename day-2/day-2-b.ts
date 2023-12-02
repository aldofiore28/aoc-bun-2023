// input contains the content of the input file
// you choose to use
export default function (input: string) {
  console.log("input:", input);
  console.log("                         ");

  const getDigitRegex = /\d+/;

  const result = input
    .split("\n")
    .map((game) =>
      game
        .replace(/\s+/g, "")
        .split(":")
        .at(1)
        ?.split(";")
        .map((cubesPulled) =>
          cubesPulled.split(",").reduce(
            (power, cubesPulledPerColor) => {
              const amount = cubesPulledPerColor.match(getDigitRegex)?.at(0);
              const colorName = cubesPulledPerColor.substring(
                amount?.length || 0
              );
              const amountNumber = parseInt(amount || "0");

              return {
                ...power,
                [colorName]:
                  amountNumber > power[colorName]
                    ? amountNumber
                    : power[colorName],
              };
            },
            { red: 0, green: 0, blue: 0 } as Record<string, number>
          )
        )
        .reduce((lowestPossiblePowerCombination, power) => ({
          red: Math.max(lowestPossiblePowerCombination.red, power.red),
          green: Math.max(lowestPossiblePowerCombination.green, power.green),
          blue: Math.max(lowestPossiblePowerCombination.blue, power.blue),
        }))
    )
    .reduce((sum, lowestPossiblePowerCombination) => {
      const red = lowestPossiblePowerCombination?.red || 0;
      const green = lowestPossiblePowerCombination?.green || 0;
      const blue = lowestPossiblePowerCombination?.blue || 0;

      return sum + red * green * blue;
    }, 0);

  console.log("result:", result);
}

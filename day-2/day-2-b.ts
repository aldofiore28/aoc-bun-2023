// input contains the content of the input file
// you choose to use
export default function (input: string) {
  console.log("input:", input);
  console.log("                         ");

  // const games = input.split("\n").map((game) => game.replace(/\s+/g, ""));

  // let result = 0;

  // for (const game of games) {
  //   const power: Record<string, number> = {
  //     red: 0,
  //     green: 0,
  //     blue: 0,
  //   };

  //   const [_, cubesShown] = game.split(":");

  //   cubesShown.split(";").forEach((cubes) => {
  //     const singleColor = cubes.split(",");

  //     singleColor.forEach((color) => {
  //       const amount = color.match(/\d+/)?.at(0);
  //       const colorName = color.substring(amount?.length || 0);
  //       const amountNumber = parseInt(amount || "0");

  //       power[colorName] = amountNumber > power[colorName] ? amountNumber : power[colorName];
  //     });
  //   });

  //   result += Object.values(power).reduce((sum, value) => sum * value);
  // }
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
        .reduce((lowestPossibleCombination, power) => ({
          red: Math.max(lowestPossibleCombination.red, power.red),
          green: Math.max(lowestPossibleCombination.green, power.green),
          blue: Math.max(lowestPossibleCombination.blue, power.blue),
        }))
    )
    .reduce((sum, power) => {
      const red = power?.red || 0;
      const green = power?.green || 0;
      const blue = power?.blue || 0;

      return sum + red * green * blue;
    }, 0);

  console.log("result:", result);
}

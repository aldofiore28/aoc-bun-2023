// input contains the content of the input file
// you choose to use
export default function (input: string) {
  console.log("input:", input);
  console.log("                         ");

  const MAX: Record<string, number> = {
    red: 12,
    green: 13,
    blue: 14,
  };

  const result = input
    .split("\n")
    .map((game) => game.replace(/\s+/g, ""))
    .map((game) => {
      const [_, cubesShown] = game.split(":");

      return cubesShown.split(";").map((cubes) => {
        const singleColor = cubes.split(",");

        return singleColor.reduce((isPossible, color) => {
          const amount = color.match(/\d+/)?.at(0);
          const colorName = color.substring(amount?.length || 0);

          return isPossible && parseInt(amount || "0") <= MAX[colorName];
        }, true);
      });
    })
    .reduce(
      (sum, allPullResults, i) =>
        allPullResults.every(Boolean) ? sum + i + 1 : sum,
      0
    );

  console.log("result:", result);
}

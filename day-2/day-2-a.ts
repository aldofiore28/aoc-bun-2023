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

  const allWhitespacesRegex = /\s+/g;

  const result = input
    .split("\n")
    .map((game) =>
      game
        .replace(allWhitespacesRegex, "")
        .split(":")
        .at(1)
        ?.split(";")
        .map((cubesPulled) =>
          cubesPulled.split(",").reduce((isPossible, cubesPulledPerColor) => {
            const amount = cubesPulledPerColor.match(/\d+/)?.at(0);
            const colorName = cubesPulledPerColor.substring(amount?.length || 0);

            return isPossible && parseInt(amount || "0") <= MAX[colorName];
          }, true)
        )
    )
    .reduce(
      (sum, allPullResults, i) =>
        allPullResults?.every(Boolean) ? sum + i + 1 : sum,
      0
    );

  console.log("result:", result);
}

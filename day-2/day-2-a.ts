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

  const games = input.split("\n").map((game) => game.replace(/\s+/g, ""));

  let result = 0;

  for (const game of games) {
    const [gameInfo, cubesShown] = game.split(":");

    const possibleGame = cubesShown.split(";").map((cubes) => {
      const singleColor = cubes.split(",");

      return singleColor.reduce((isPossible, color) => {
        const amount = color.match(/\d+/)?.at(0);
        const colorName = color.substring(amount?.length || 0);

        return isPossible && parseInt(amount || "0") <= MAX[colorName];
      }, true);
    });

    if (possibleGame.every((isPossible) => isPossible)) {
      const gameIdNumber = gameInfo.match(/\d+/)?.at(0);
      result += parseInt(gameIdNumber || "0");
    }
  }

  console.log("result:", result);
}

// input contains the content of the input file
// you choose to use
export default function (input: string) {
  console.log('input:', input)
  console.log('                         ')

  const games = input.split("\n").map((game) => game.replace(/\s+/g, ""));

  let result = 0;

  for (const game of games) {
    const power: Record<string, number> = {
      red: 0,
      green: 0,
      blue: 0,
    };

    const [_, cubesShown] = game.split(":");

    cubesShown.split(";").forEach((cubes) => {
      const singleColor = cubes.split(",");

      singleColor.forEach((color) => {
        const amount = color.match(/\d+/)?.at(0);
        const colorName = color.substring(amount?.length || 0);
        const amountNumber = parseInt(amount || "0");

        power[colorName] = amountNumber > power[colorName] ? amountNumber : power[colorName];
      });
    });

    result += Object.values(power).reduce((sum, value) => sum * value);
  }

  console.log('result:', result)
}
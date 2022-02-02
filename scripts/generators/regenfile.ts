import inquirer from "inquirer";
import nodePlop from "node-plop";
import * as path from "path";
//* individual regenerate files
import rengenerateTheme from "./theme/regenerate";

async function regenerateWhichPlop() {
  const plopFile = path.join(process.cwd(), "scripts/generators");
  const plop = await nodePlop(`${plopFile}/plopfile.ts`);

  let generator = "";
  if (process.argv?.[2]) {
    generator = process.argv[2];
  } else {
    const target = await inquirer.prompt({
      name: "generator",
      type: "list",
      message: "Which generator are we going to regenerate?\n",
      choices: plop.getGeneratorList().map((gen) => gen.name),
      validate: (input) => Boolean(input.trim()),
    });
    generator = target.generator;
  }

  switch (generator) {
    case "theme":
      await rengenerateTheme(plop);
      break;

    default:
      console.log("Not a valid target");
      process.exitCode = 1;
  }
}

(async () => {
  await regenerateWhichPlop();
})();

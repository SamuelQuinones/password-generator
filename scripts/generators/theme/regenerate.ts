import { Themes } from "./current";
import type { NodePlopAPI } from "node-plop";

async function main(plop: NodePlopAPI) {
  const themer = plop.getGenerator("theme");
  for (const theme of Themes) {
    await themer
      .runActions({ overrideExisting: true, ...theme })
      .then((results) => {
        console.log(results);
      });
  }
}

export default main;

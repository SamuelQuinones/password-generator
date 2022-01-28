import { Themes } from "./current";
import nodePlop from "node-plop";
import * as path from "path";

(async () => {
  const plopFile = path.join(process.cwd(), "scripts/generators");
  const plop = await nodePlop(`${plopFile}/plopfile.ts`);
  const themer = plop.getGenerator("theme");

  for (const theme of Themes) {
    await themer.runActions({ overrideExisting: true, ...theme });
  }
})();

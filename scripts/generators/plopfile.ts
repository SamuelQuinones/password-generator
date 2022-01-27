// plopfile.ts
import { NodePlopAPI } from "node-plop";
import { execSync } from "child_process";
import { themeGenerator } from "./theme";
interface PrettifyCustomActionData {
  path: string;
}

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator("theme", themeGenerator);

  plop.setActionType("prettify", (answers, config) => {
    const data = config?.data as PrettifyCustomActionData;
    execSync(`npx prettier --write "${data.path}"`);
    return "";
  });
}

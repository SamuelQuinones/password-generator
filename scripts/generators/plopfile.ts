// plopfile.ts
import { NodePlopAPI } from "node-plop";
import { themeGenerator } from "./theme";
import { execSync } from "child_process";

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator("theme", themeGenerator);

  plop.setActionType("prettify", (answers, config) => {
    const data = config.data as Record<string, any>;
    execSync(`prettier --write ${data.path}`);
    return "";
  });
}

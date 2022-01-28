// plopfile.ts
import { NodePlopAPI } from "node-plop";
import { themeGenerator } from "./theme";

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator("theme", themeGenerator);
}

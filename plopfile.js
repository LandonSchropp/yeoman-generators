import { gitSafetyCheck, gitCommit } from "./src/actions/git.js";
import { writeJSON, mergeJSON } from "./src/actions/json.js";
import {
  addPackages,
  executeWithPackageManager,
  installPackages,
} from "./src/actions/package-manager.js";
import eslint from "./src/eslint/index.js";
import husky from "./src/husky/index.js";
import initialize from "./src/initialize/index.js";
import onlyAllow from "./src/only-allow/index.js";
import prettier from "./src/prettier/index.js";
import typescript from "./src/typescript/index.js";

export default async (plop) => {
  // Configuration
  plop.setWelcomeMessage("Landon Schropp's Generators");

  // Actions
  plop.setActionType("addPackages", addPackages);
  plop.setActionType("executeWithPackageManager", executeWithPackageManager);
  plop.setActionType("installPackages", installPackages);
  plop.setActionType("mergeJSON", mergeJSON);
  plop.setActionType("writeJSON", writeJSON);
  plop.setActionType("gitSafetyCheck", gitSafetyCheck);
  plop.setActionType("gitCommit", gitCommit);

  // Generators
  await initialize(plop);
  prettier(plop);
  onlyAllow(plop);
  eslint(plop);
  typescript(plop);
  husky(plop);
};

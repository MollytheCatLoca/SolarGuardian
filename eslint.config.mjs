import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      "import/resolver": {
        node: {
          paths: ["."],
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        },
        alias: {
          map: [["@", "."]],
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    }
  },
  importPlugin.configs.recommended,
];
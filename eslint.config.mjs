// const js = require("@eslint/js")
import js from "@eslint/js";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      globals: globals.node,
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      "prettier/prettier": "error",
      "no-var": "error",
      "prefer-const": "warn",
      "eqeqeq": ["error", "always"],
      "no-eval": "error",
      "no-throw-literal": "error",
      "no-useless-catch": "warn",
      "radix": "error",
      "no-magic-numbers": ["warn", { ignore: [0, 1], enforceConst: true }],
      "no-param-reassign": "error",
      "no-shadow": "warn",
      "no-use-before-define": ["error", { functions: true, classes: true }],
      "no-else-return": "error",
      "consistent-return": "warn",
      "array-callback-return": "error",

      // ✅ Async & Promise safety
      "require-await": "warn",
      "no-return-await": "error",
      "prefer-promise-reject-errors": "warn",

      // ✅ Callback and Node.js-style error handling
      "callback-return": "warn",
      "handle-callback-err": ["warn", "^err"],
      "no-process-exit": "off", // allowed in CLI apps
      "no-path-concat": "error",

      // ✅ Clean code & readability
      "no-duplicate-imports": "error",
      "no-empty-function": "warn",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "complexity": ["warn", 10],
      "yoda": ["error", "never"]
    },
    ignores: ['node_modules', 'eslint.config.mjs', '.prettierrc'],
  },
]);

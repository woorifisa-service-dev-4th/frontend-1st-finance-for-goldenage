import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginHtml from "eslint-plugin-html";
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js", "*.html"],
    languageOptions: { sourceType: "module" },
    ignores: ["node_modules/**", "dist/**"], // 무시할 파일이나 폴더 추가
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      html: eslintPluginHtml,
      tailwindcss: eslintPluginTailwindcss,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "tailwindcss/classnames-order": "warn",
    },
    settings: {
      "html/report-bad-indent": "error",
    },
  },
  pluginJs.configs.recommended,
];

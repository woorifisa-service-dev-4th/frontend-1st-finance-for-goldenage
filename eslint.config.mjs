import globals from "globals";
import pluginJs from "@eslint/js";
import eslintPluginHtml from "eslint-plugin-html";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.js", "*.html"], languageOptions: { sourceType: "script" } },
  {
    languageOptions: { ecmaVersion: "latest", globals: { ...globals.browser, ...globals.node } }, // Node.js 환경 추가
    plugins: {
      html: eslintPluginHtml,
    },
    rules: {
      "no-unused-vars": "warn", // 사용하지 않는 변수 경고
      "no-console": "warn", // console.log 사용 경고
    },
    settings: {
      "html/report-bad-indent": "error", // HTML에서 잘못된 들여쓰기 에러 처리
    },
  },
  pluginJs.configs.recommended,
];
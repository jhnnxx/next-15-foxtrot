import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import reactHooks from "eslint-plugin-react-hooks";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // React Hooks 플러그인 추가
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // 적용할 파일 확장자
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error", // Hook 규칙 강제
      "react-hooks/exhaustive-deps": "warn", // 종속성 배열 검사
    },
  },
];

export default eslintConfig;

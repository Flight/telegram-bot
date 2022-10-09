module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["import", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
  },
  ignorePatterns: [".eslintrc.cjs", "/build/**/*"],
  rules: {
    // Preventng default exports
    // https://www.codeandchaos.com/2021/2021-09-26-JavaScriptDefaultExport/
    "import/no-default-export": "error",
    "import/prefer-default-export": 0,
  },
};

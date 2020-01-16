module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["airbnb-base", "eslint:recommended", "plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "spaced-comment": ["error", "always"],
    "prefer-const": ["error",{
      "destructuring": "any",
      "ignoreReadBeforeAssign": true
    }],
    "object-shorthand": ["error", "always"],
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};

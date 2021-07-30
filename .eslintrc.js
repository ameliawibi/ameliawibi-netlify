module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "plugin:import/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    project: "./jsconfig.json",
  },
  plugins: ["import", "prettier", "react"],
  rules: {
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        labelComponents: ["label"],
        controlComponents: ["input"],
      },
    ],
    // this is an entirely frontend project, .js is fine
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }],
    "import/extensions": ["error", { extensions: [".js", ".json"] }],
    // not needed since react 17
    "react/react-in-jsx-scope": "off",
    // to allow imports of devDependencies
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    // to disable typography's pet peeve
    "react/no-unescaped-entities": 0,
    semi: ["error", "always"],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
};

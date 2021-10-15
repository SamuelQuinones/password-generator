module.exports = {
  parser: "@typescript-eslint/parser",
  // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  ignorePatterns: [
    "node_modules/*",
    "build/*",
    "http/*",
    "certs/*",
    "logs/*",
    "certs/*",
    "!.prettierrc",
  ],
  extends: [
    "react-app",
    "react-app/jest",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    // may turn this on later, creates issues for HTML
    "react/no-unescaped-entities": 0,

    // We will use TypeScript's types for component props instead
    "react/prop-types": "off",

    // No need to import React when using React 17
    "react/react-in-jsx-scope": "off",

    // Includes .prettierrc rules
    "prettier/prettier": ["warn", {}, { usePrettierrc: true }],
  },
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended", // TypeScript rules
      ],
      rules: {
        // we should allow implicit any
        "@typescript-eslint/no-explicit-any": "off",

        // We don't need this ... for now
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-ts-comment": [
          "error",
          {
            "ts-ignore": "allow-with-description",
            minimumDescriptionLength: 10,
          },
        ],

        // should probably allow this ... but we wont for now
        "@typescript-eslint/no-non-null-assertion": "off",

        // turn off default rule
        "no-unused-vars": "off",

        // Why would you want unused vars?
        "@typescript-eslint/no-unused-vars": ["warn"],
      },
    },
  ],
};

const colors = require("tailwindcss/colors");
//* warn - As of Tailwind CSS v2.2, `lightBlue` has been renamed to `sky`.
//* warn - Please update your color palette to eliminate this warning.
delete colors.lightBlue;

module.exports = {
  purge: ["./src/**/*.tsx", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        250: "250ms",
      },
      transitionProperty: {
        custom:
          "background-color, border-color, color, fill, stroke, transform",
      },
    },
    colors: colors,
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.tsx", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "4rem",
        lg: "6rem",
        xl: "7rem",
        "2xl": "8rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

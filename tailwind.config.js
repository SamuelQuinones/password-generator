module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

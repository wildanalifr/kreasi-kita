module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        serif: ["Mulish", "serif"],
      },
      colors: {
        gray: {
          custom4: "#BDBDBD",
        },
        black: {
          custom1: "#1F1534",
        },
        blue: {
          kreasiKita: "#458FF6",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

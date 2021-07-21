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
          custom5: "#7D7987",
        },
        black: {
          custom1: "#1F1534",
        },
        blue: {
          kreasiKita: "#458FF6",
          footertop: "#67C3F3",
          footerbottom: "#5A98F2",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

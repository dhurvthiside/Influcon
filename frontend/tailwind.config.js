const { blueGray } = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        bricksans: ["Brick Sans", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
      animation: {
        scroll: "scroll 50s linear infinite",
        "scroll-reverse": "scroll-reverse 50s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      colors: {
        whitesmoke: "#f4f4f4",
        lightBlue: require("tailwindcss/colors").sky,
        blueGray: require("tailwindcss/colors").slate,
      },
    },
  },
  plugins: [],
};

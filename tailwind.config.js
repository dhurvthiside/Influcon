const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        bricksans: ['"Brick Sans"', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 13s linear infinite',
        marquee2: 'marquee2 13s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      colors: {
        lightBlue: colors.sky, // Add the "lightBlue" color using Tailwind's "sky" color palette
      },
    },
  },
  plugins: [],
};

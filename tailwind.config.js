/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./*.html"],
  theme: {
    extend: {
      spacing: {
        // margin top에 필요한 값들
        ...Array.from({ length: 101 }, (_, i) => i).reduce((acc, cur) => {
          acc[cur] = `${cur * 4}px`;
          return acc;
        }, {}),
      },
    },
    fontFamily: {
      daumBold: ['WooridaumB'],
      daumLight: ['WooridaumL'],
    },
  },
  plugins: [],
}

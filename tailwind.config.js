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
      colors: {
        wooriDeepBlue: "#0762b1",
        wooriWhite: "#FFFFFF",
        wooriLightBlue: "#36bcf6",
        wooriBlue: "#057ecd",
      },
    },
    fontFamily: {
      daumBold: ['WooridaumB'],
      daumLight: ['WooridaumL'],
    },
  },
  plugins: [],
};

// npx tailwindcss -i ./src/input.css -o ./src/output.css
// 를 통해 수정 후 적용 가능
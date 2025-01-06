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
      screens: {
        sm: '640px',
        md: '878px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1600px', // 2xl 추가
        '3xl': '1800px', // 3xl 추가
      },
      fontSize: (() => {
        const fontSize = {};
        for (let i = 1; i <= 100; i++) {
          fontSize[(i / 100).toFixed(1)] = `${i / 100}rem`;
        }
        return fontSize;
      })(),
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
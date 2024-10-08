/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "300px", max: "768px" },
      md: { min: "768px", max: "1150px" },
      lg: { min: "1150px", max: "2000px" },
    },
    extend: {
      colors: {
        black: "#000000",
        purple: "#BF5AF2",
        violet: "#0e0498",
        blue: "#454ae2",
      },
      fontFamily: {
        default: ["Montserrat", "Source Code Pro"],
      },
      backgroundImage: {
        gradientOne:
          "linear-gradient(0deg, rgba(46, 0, 63, 0.28) 0%, rgba(76, 0, 83, 0.43) 100%)",
        gradientTwo:
          "linear-gradient(360deg, rgba(0, 0, 0, 0.28) 0%, rgba(40, 40, 40, 0.43) 100%)",
        gradientThree: "linear-gradient(180deg, #49008B 0%, #17003E 100%)",
      },
    },
  },
  plugins: [],
};

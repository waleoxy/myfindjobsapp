module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      postJobColor: "#0F4A7B",
      ellipse_a: "#62BECB",
      ellipse_b: "#F57D7D",
      ellipse_c: "#62BECB",
      lineDivide: "#62BECB",
      searchBtn: "#EA5566",
    },
    fontSize: {
      djTxt: "40px",
      navMenuTxt: "18px",
      postBtnTxt: "16px",
      footerSubHead: "22px",
    },
    letterSpacing: {
      djTxt: "0.12em",
    },
  },
  plugins: [],
};

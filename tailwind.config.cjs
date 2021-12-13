module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["raleway", "system-ui"],
      serif: ["Libre Baskerville", "Georgia"],
    },
    colors: {
      blue: "#396783",
      red: "#982E35",
      grey1: "#34373C",
      grey2: "#6E6C6E",
      grey3: "868279",
      sand: "#F8F7FA"
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

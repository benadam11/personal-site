module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["raleway", "system-ui"],
      serif: ["Libre Baskerville", "Georgia"],
    },
    colors: {
      green: "var(--green)",
      blue: "var(--blue)",
      red: "var(--red)",
      grey1: "var(--grey1)",
      grey2: "var(--grey2)",
      grey3: "var(--grey3)",
      sand: "var(--sand)",
      accent: "var(--accent)",
    },
  }
};

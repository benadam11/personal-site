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
      contrast: "var(--contrast)",
      grey2: "var(--grey2)",
      grey3: "var(--grey3)",
      base: "var(--base)",
      accent: "var(--accent)",
    },
  }
};

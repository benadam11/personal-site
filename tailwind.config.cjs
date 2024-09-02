module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,md}"],
  theme: {
    fontFamily: {
      sans: ["Space Mono", "monospace"],
      serif: ["Space Grotesk", "monspace"],
    },
    colors: {
      base: "var(--base)",
      baseShaded: "var(--base-shaded)",
      contrast: "var(--contrast)",
      accent: "var(--accent)",
    },
  }
};

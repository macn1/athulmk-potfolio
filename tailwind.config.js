/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#070910",
        secondary: "#9aa3b8",
        tertiary: "#0e1220",
        "black-100": "#0a0d18",
        "black-200": "#090325",
        "white-100": "#e8ebf4",
        line: "rgba(255,255,255,0.08)",
        accent: "#8b7cff",
        accent2: "#38d6c4",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Sora", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0px 30px 80px -30px rgba(0,0,0,0.8)",
        glow: "0 0 60px -10px rgba(139,124,255,0.45)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          navy: "#151838",
          darkNavy: "#111538",
          blueNavy: "#172554",
          cardNavy: "#1e224d",
          brandBlue: "#1e428a",
          emerald: "#059669",
          emeraldHover: "#047857",
          emeraldDark: "#065f46",
          cyan: "#06b6d4",
        },
      },
    },
  },
  plugins: [],
};

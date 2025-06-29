/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neonPink: "#FF005C",
        neonCyan: "#00F0FF",
        neonPurple: "#8A2BE2",
        neonGold: "#FFD700",
        darkBg: "#000000",
        whiteText: "#FFFFFF",
      },
      fontFamily: {
        sans: ['"Montserrat"', "sans-serif"],
        orbitron: ['"Orbitron"', "sans-serif"],
      },
      dropShadow: {
        neonPink: "0 0 10px #FF005C, 0 0 20px #FF005C, 0 0 30px #FF005C",
      },
    },
  },
  plugins: [],
}

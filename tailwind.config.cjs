/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        peach: "#FED9B7",
        "dark-blue": "#0081A7",
      },
    },
  },
  plugins: [],
};

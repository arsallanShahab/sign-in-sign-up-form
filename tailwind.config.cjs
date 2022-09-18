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
        "tea-green": "#C7F9CC",
        "light-green": "#80ED99",
        "ocean-green": "#57CC99",
        "blue-saphire": "#22577A",
        "purssian-blue": "#12263A",
      },
    },
  },
  plugins: [],
};

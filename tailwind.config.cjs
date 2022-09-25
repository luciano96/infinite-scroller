/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        scrollBackground: "#ade1e5",
        text: "#fbf9ff",
        cardBackground: "#000501",
        headerBackground: "#73ab84",
        secondaryBackground: "#99d19c",
        idReveal: "#79c7c5",
      },
    },
  },
  plugins: []
};

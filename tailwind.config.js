/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chirp: ["Chirp", "sans-serif"],
        chirpe: ["ChirpExtended", "sans-serif"],
      },
    },
  },
  plugins: [],
};

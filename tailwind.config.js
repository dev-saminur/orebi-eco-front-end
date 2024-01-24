/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1604px",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
      colors: {
        white: "#ffffff",
        titleColor: "#262626",
        titleGray: "#767676",
      },
    },
  },
  plugins: [],
};

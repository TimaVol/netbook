/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: {
        100: "#2B2B39",
        200: "#20202D",
        300: "#0A093D",
      },
      darkBlue: "#217BF4",
      lightBlue: "#E5F0FD",
      darkGray: "#2B2B39",
      lightGray: "#656464",
      transparent: "transparent",
      pink: "#F04148",
      yellow: "#FFAF2E",
    },
    container: {
      padding: "15px",
      center: true,
    },
    extend: {
      backgroundImage: {
        primaryGradient: "linear-gradient(#FFFFFF, rgba(212, 231, 254,.5))",
        secondaryGradient:
          "linear-gradient(#FFFFFF, #F1F6FD, #F1F6FD, #F7F1FD)",
      },
    },
  },
  plugins: [],
};

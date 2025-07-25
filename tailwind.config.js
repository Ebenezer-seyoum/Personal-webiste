/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#090E34",
      dark: "#1D2144",
      primary: "#4A6CF7",
      yellow: "#FBB040",
      "body-color": "#959CB1",
      // Add your new custom dark colors here:
      "dark-green": "#064e3b",   // e.g. Tailwind's emerald-900 or your custom dark green
      "dark-blue": "#0c4a6e",    // a nice dark blue
      "dark-gray": "#262626",    // very dark gray
    },
    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    fontFamily: {
      // Set Times New Roman as the default serif font for the project
      sans: ['ui-sans-serif', 'system-ui'],  // keep default sans stack
      serif: ['"Times New Roman"', 'Georgia', 'serif'], // Times New Roman as serif
      // Optional: make Times New Roman the default for all text by overriding 'sans' (not recommended but possible)
      // default: ['"Times New Roman"', 'Georgia', 'serif'],
    },
    extend: {
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        fadeSlide: {
          "0%": { opacity: 0, transform: "translateY(8px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeSlide: "fadeSlide 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
};

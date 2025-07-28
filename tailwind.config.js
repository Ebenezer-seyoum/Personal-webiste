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
      "dark-green": "#064e3b",
      "dark-blue": "#0c4a6e",
      "dark-gray": "#262626",
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
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['"Times New Roman"', 'Georgia', 'serif'],
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
      // ✅ Add perspective here
      perspective: {
        none: "none",
        400: "400px",
        600: "600px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
      },
    },
  },
  plugins: [
    // Optional: Tailwind plugins like typography or forms
  ],
};

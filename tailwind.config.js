/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animationDelay: {
      500: "500ms",
      750: "750ms",
      1000: '1000ms',
     },
    extend: {},
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}

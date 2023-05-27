/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cyan-primary": "#42778a",
        "white-primary":"#fbfcfd",
      }
    },
  },
  plugins: [],
}


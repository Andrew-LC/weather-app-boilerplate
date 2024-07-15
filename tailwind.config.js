/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

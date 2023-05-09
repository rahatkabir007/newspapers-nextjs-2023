/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        'nblack': '#3B3B3B',
        'ngrey': '#F7F7F7',
        'nlightblack': '#232428',
        'ndarkblue': '#2D3748',
        'nlightblue': "#d8edef"
      },
    },
  },
  plugins: [],
};

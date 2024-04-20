/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors:{

        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#EC1276',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
      },
      gradientColorStops: {
        'custom-gradient': ['#0D32F2F', '#0D32F2F'],
      },

    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["monospace", "serif"],
    },
    extend: {
      colors: {
        'primary': '#377dff',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#32CDC4',
        'secondary': '#0E8388',
        'tertiary': '#CBE4DE',
        'fourth': '#2E4F4F',
      }
    },
  },
  plugins: [],
}


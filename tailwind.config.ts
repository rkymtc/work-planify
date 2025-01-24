/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C1C1E',
        secondary: '#D9D9D9',
      },
      fontFamily: {
        inter: ['DM Sans', 'sans-serif'],
      },
      animation: {
        spin: "spin 2s linear infinite", 
      },
    },
  },
  plugins: [
  ],
};
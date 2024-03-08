/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "#0F1624",
      white: "#fff",
      teal: "#13ADC7",
      indigo: "#6978D1",
      purple: "#945DD6",
      darkblue: "#162950",
    },
  },
  plugins: [],
};

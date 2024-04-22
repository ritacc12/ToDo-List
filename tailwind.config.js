/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#6c8cd7",
      },
    },
  },
  plugins: [require("daisyui", "'@tailwindcss/custom-forms'")],
};

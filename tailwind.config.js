/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minHeight: {
        "3/5": "60%",
        "4/5": "80%",
      },
    },
  },
  plugins: [],
};

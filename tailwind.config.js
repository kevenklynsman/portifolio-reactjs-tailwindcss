/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        card: "15rem",
      },
      flex: {
        1: "1 1 0",
        2: "2 1 0",
      },
    },
  },
  plugins: [],
};

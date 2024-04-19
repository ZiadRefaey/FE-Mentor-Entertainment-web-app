/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#10141E",
        "gray-blue": "#5A698F",
        red: "#FC4747",
        "semi-dark-blue": "#161D2F",
      },
    },
  },
  plugins: [],
};

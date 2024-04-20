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
        "semi-transparent": "rgba(0,0,0,0.75)",
      },
    },
    fontSize: {
      headingL: "2rem",
      headingM: "1.5rem",
      headingS: "1.5rem",
      headingLSmSc: "1.25rem",
      headingXS: "1.125rem",
      bodyM: "0.9375rem",
      bodyS: "0.8125rem",
    },
    letterSpacing: {},
  },
  plugins: [],
};

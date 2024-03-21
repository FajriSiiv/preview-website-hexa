/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "background-secondary-colors": "#F9FAFB",
        "btn-primary-bg": "#1746E8",
      },
      colors: {
        "text-secondary-700": "#475467",
        "text-primary-900": "#101828",
        "bg-icon": "#E8EDFF",
        "bg-border-blue": "#E8EDFF",
        "border-terciary": "#F2F4F7",
        "gray-disable": "#D0D5DD",
        "border-primary-background": "#EAECF0",
        "text-brand": "#0B206B",
        "btn-primary-color": "#1746E8",
        "btn-primary-border": "#4771FF",
        "bg-brand": "#F8F9FD",
        "bg-footer-blue": "#194DFF",
        "fg-quarterary": "#667085",
        "stroke-blue-blue-100": "#B8C8FF",
      },
      gridTemplateColumns: {
        "grid-our-client": "repeat(auto-fill,minmax(209px,2fr))",
        "our-client": "repeat(auto-fill,minmax(253px,1fr))",
      },
      gridTemplateRows: {
        "service-grid-anak": "repeat(auto-fit, minmax(200px, 2fr))",
      },
      fontFamily: {
        montserrat: "Montserrat, Poppins",
      },
      screens: {
        hp: "501px",
      },
    },
  },
  plugins: [],
};

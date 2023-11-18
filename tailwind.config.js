/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    section: {
      paddingBottom: "10%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "130px",
    },
    title:{
      fontSize: "55px",
      fontWeight: 500,
      lineHeight: "55px",
    },
    subtitle: {
      fontSize: "40px",
      fontWeight: 500,
      lineHeight: "44px",
      paddingBottom: "10%",
    },
    sectionTitle: {
      display: "inline-flex",
      flexDirection: "column",
      gap: "26px",
      alignItems: "flex-start",
      width: "100%",
      padding: "5% 0 10%",
    },
    input: {
      border: "none",
      outline: "none",
      fontSize: "17px",
      fontWeight: 400,
      borderBottom: "1px solid",
    },
    extend: {
    },
  },
  plugins: [],
};

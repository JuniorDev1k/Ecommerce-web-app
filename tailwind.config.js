/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens : {
    //   Responsive desine need only the responsive.
    // }

    fontFamily: {
      poppins: "Poppins",
      Nunito: "Nunito",
      robotto: "Roboto",
      logo: "Ribeye ",
    },

    // Typography
    extend: {
      colors: {
        text: "#FFFFFF",
        background: "black",
        primary: "#cca3a8",
        secondary: "#f91616",
        accent: "#94b173",
        background2: "#220202",
      },
    },
  },
  plugins: [],
};

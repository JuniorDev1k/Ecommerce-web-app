/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens : {
    //   Responsive desine need only the responsive.
    // }
    colors: {
      text: "#FFFFFF",
      background: "#0c0304",
      primary: "#cca3a8",
      secondary: "#770d1a",
      accent: "#94b173",
    },
    fontFamily: {
      poppins: "Poppins",
      Nunito: "Nunito",
      robotto: "Roboto",
      logo: "Ribeye",
    },

    // Typography
    extend: {},
  },
  plugins: [],
};

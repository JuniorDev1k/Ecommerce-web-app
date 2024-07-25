/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens : {
    //   Responsive desine need only the responsive.
    // }

    fontFamily: {
      header: ['"Montserrat"'],
      subheader: ['"Open Sans"'],
      paragraph: ['"Noto Sans Georgian"'],
      poppins: "Poppins",
      Nunito: "Nunito",
      robotto: "Roboto",
      logo: "Ribeye ",
      navLinks: ['"Lato"'],
    },

    // Typography`
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
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
};

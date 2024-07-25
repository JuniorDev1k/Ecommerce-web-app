/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // screens : {
    //   Responsive desine need only the responsive.
    // }

    fontFamily: {
      header: ["Montserrat", "sans-serif"],
      subheader: ["Open Sans", "sans-serif"],
      paragraph: ['"Noto Sans Georgian"'],
      poppins: ["Poppins", "sans-serif"],
      Nunito: ["Nunito", "sans-serif"],
      robotto: ["Roboto", "sans-serif"],
      logo: ['"Ribeye"'],
      navLinks: ['"Lato"'],
    },

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

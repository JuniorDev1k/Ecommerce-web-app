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
      logo: ["Ribeye", "sans-serif"],
      navLinks: ['"Lato"'],
    },

    extend: {
      colors: {
        secondary: ["#DF0D0D"],
        yelloww: "FAFF0C",
        text: "#FFFFFF",
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
};

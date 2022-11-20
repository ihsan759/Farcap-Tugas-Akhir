/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      body: ["Source Sans Pro"],
      sans: ["Source Sans Pro"],
      serif: ["Source Sans Pro"],
      mono: ["Source Sans Pro"],
    },
    extend: {},
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1170px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

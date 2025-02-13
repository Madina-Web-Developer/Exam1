
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily:{

      "Lato":["Lato", "serif"],
      "OpenSans":["Open Sans", "serif"]

    },

    container: {

      center: true,

      padding: {
        DEFAULT: '10px',
        sm: '20px',
        lg: '50px',
        xl: '1rem',
        '2xl': '2rem',
      },

    },
    extend: {},
  },
  plugins: [],
}
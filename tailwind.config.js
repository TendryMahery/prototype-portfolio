
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      animation:{
        blob: 'blob 30s infinite'
      },
      keyframes:{
        blob: {
          "0%" : {
            transform:"scale(1)",
          },
          "22%" : {
            transform:"translate(10px, -200px)",
          },
          "33%" : {
            transform:"translate(30px, -50px)",
          },
          "66%" : {
            transform:"translate(-30px, 50px)",
          },
          "88%" : {
            transform:"translate(-200px, 50px)",
          },
          "100%" : {
            transform:"scale(1)",
          },
        }
      },
      fontFamily: {
        sans: ['Rubik','sans-serif']
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          'sm': "512px",
          'md': "720px",
          'lg': "1024px",
          'xl': "1140px",
          '2xl': "1320px"
        }
      },
    },
  },

  plugins: [],
}


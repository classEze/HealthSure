module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'] ,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius:{
        circle: '50%'
      }
    },
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [],
}

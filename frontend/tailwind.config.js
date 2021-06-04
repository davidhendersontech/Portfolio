module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Merriweather'],
        'header': ['Mate SC']
      },
      colors: {
        orange: {
          dark: '#f58c00',
          DEFAULT: '#ffae42',
          light: '#ffc475'
        },
        blue: {
          dark: '#085e72',
          DEFAULT: '#0d98ba',
          light: '#10bfea'
        },
        mygray: {
          light: '#949494',
          DEFAULT: '#666666'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

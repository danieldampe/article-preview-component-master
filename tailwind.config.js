/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/*.js'],
  theme: {
    extend: {
      width: {
        mobile: 375,
        desktop: 1440
      },
      colors: {
        'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
        'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
        'grayish-blue': 'hsl(212, 23%, 69%)',
        'light-grayish-blue': 'hsl(210, 46%, 95%)'
      },
      fontFamily: {
        manrope: '"Manrope", sans-serif' /* 500, 700 */
      },
      fontSize: {
        body: 13
      }
    }
  },
  plugins: []
}

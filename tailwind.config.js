module.exports = {
  content: ['./**/*.html'],
  theme: {
    fontFamily: {
      'sans': ['"Space Grotesk"', 'sans-serif'],
      'footer' : ['"Space Mono"', 'sans-serif']
    },
    extend: {
      colors:{
        'main': '#FCF7E6'
      },
      screens: {
        'tb': '768px',
        'xl': '1280px'
      }
    },
  },
  plugins: [],
}
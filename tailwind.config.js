module.exports = {
  content: ["./*/**.{html,js}"],
  theme: {
    fontSize: {
      xs: ['10px', '14px'],
      sm: ['12px', '16px'],
      md: ['14px', '20px'],
      lg: ['20px', '24px'],
      xl: ['24px', '28px'],
      xxl: ['28px', '32px'],
      xxxl: ['32px', '36px'],
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

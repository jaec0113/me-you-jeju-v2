module.exports = {
  content: ["./*/**.{html,js}"],
  theme: {
    fontSize: {
      xs: ['10px', '14px'],
      sm: ['12px', '16px'],
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

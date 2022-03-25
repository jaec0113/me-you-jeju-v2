module.exports = {
  content: ["./links/**/*.{html,js}", "./index.html"],
  theme: {
    fontSize: {
      xs: ['10px', '14px'],
      sm: ['12px', '16px'],
      md: ['14px', '20px'],
      lg: ['20px', '24px'],
      xl: ['24px', '28px'],
      xxl: ['28px', '32px'],
      xxxl: ['32px', '36px'],
    },
    screens: {
      'tablet': '450px',
      'large-tablet': '700px',
      'laptop': '1024px',
      'desktop': '1280px',
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

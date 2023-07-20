/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-banner": "url('./images/banners/banner-1.jpg')",
        "hero-banner2": "url('./images/banners/banner-2.jpg')",
      },
      boxShadow: {
        'box-shadow': 'inset 0 0 0 3000px rgba(150, 150, 150, 0.192);'
      },
      width: {
        '98': '410px;'
      },
    },
  },
  plugins: [],
}


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Outfit, sans-serif'],
      baloo: ['"Baloo Bhaina 2", sans-serif']
    },

    extend: {
      height: {
        screen: '100dvh',
      },
      keyframes: {
        slideContentInleft: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        }
      },
      animation: {
        slideContentInleft: 'slideContentInleft 3s ease-out',
      }
    },
  },
  plugins: [],
}

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
        slideBikeInLeft: {
          '0%': { transform: 'translateX(-100vw)', opacity: 25 }, // 👈 full screen left
          '100%': { transform: 'translateX(0)', opacity: 90 },
        },
        slideContentInleft: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        }
      },
      animation: {
        slideBikeInLeft: 'slideBikeInLeft 2s ease-out',
        slideContentInleft: 'slideContentInleft 3s ease-out',
      }
    },
  },
  plugins: [],
}

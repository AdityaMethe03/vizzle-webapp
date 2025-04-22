export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            sans: ['Outfit, sans-serif'],
            baloo: ['"Baloo Bhaina 2", sans-serif']
        },

        extend: {
            fontSize: {
                huge: ['80rem', { lineHeight: '1' }],
            },
            height: {
                screen: '100dvh',
            }
        },
    },
    plugins: [],
}

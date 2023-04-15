/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0b0d0f',
                secondary: '#0F1114',
            },
        },
        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-linear': 'linear-gradient(var(--tw-gradient-stops))',
            'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
            'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
            'gradient-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
            'main-bg': "url('./src/assets/mainbg.png')",
            'hex-bg': "url('./src/assets/hexbg.png')",
            'three-hex': "url('./src/assets/threehex.png')",
        }
    },
    plugins: [],
}
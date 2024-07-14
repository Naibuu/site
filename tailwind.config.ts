import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            sans: ['Plus Jakarta Sans', 'sans-serif'],
        },
        extend: {
            screens: {
                xs: '500px',
            },
            spacing: {
                page: '750px',
            },
        },
    },
    plugins: [],
}
export default config

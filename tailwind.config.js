/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            primary: '#609966',
            secondary: '#9DC08B',
            accent: '#40513B',
            neutral: '#EDF1D6',
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: '#609966',
                    secondary: '#9DC08B',
                    accent: '#40513B',
                    neutral: '#EDF1D6',
                    'accent-content': '#f1e8d6',
                    'info-content': '#f5f7e9',
                    'base-100': '#ffffff',
                    'base-300': '#222222',
                },
            },
            'lemonade',
        ],
    },
    plugins: [require('daisyui')],
}

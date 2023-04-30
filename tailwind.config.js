/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'image-gradient': 'linear-gradient(180deg, rgba(25, 41, 58, 0.1) 0%, rgba(25, 41, 58, 1) 100%)',
            },
            keyframes: {
                'underline-center': {
                    '0%': { 'transform': 'scaleX(0)', 'transform-origin': 'center' },
                    '100%': { 'transform': 'scaleX(1)', 'transform-origin': 'center' },
                },
                'bounce': {
                    '0%, 100%': {
                        transform: 'translateY(0)',
                    },
                    '25%': {
                        transform: 'translateY(-5px)',
                    },
                    '50%': {
                        transform: 'translateY(-2px)',
                    },
                    '75%': {
                        transform: 'translateY(-1px)',
                    },
                },
            },
            animation: {
                'underline-center': 'underline-center 0.3s ease-in-out',
                'bounce': 'bounce 1s ease 1',
            },
            colors: {
                "DARK_GREEN_TRANSPARENT": "#19293a1a",
                "DARK_BLUE": "#19293a",
                "LIGHT_GRAY": "#edeff1",
                "SLATE_GRAY": "#506473",
                "DEEP_PINK": "#c0345e",
                "DARK_SLATE_BLUE": "#112d40",
                "GRAYISH_TURQUOISE": "#596d7a",
                "RED_PINK": "#c34465",
                "SLATE_GRAY_TRANSPARENT": "#50647380",
                "GRAYISH_BLUE": "#a7b1b8",
                "DARK_BLUE_TRANSPARENT": "#19293a80",
                "LIGHT_GRAY_BLUE": "#c5c9cd",
                "STEEL_GRAY": "#344657",
                "LIGHT_GRAY_2": "#e2e4e6",
                "PALE_GRAYISH_BLUE": "#c5cace",
                "LIGHT_SLATE_GRAY": "#9ea9b1",
            },
            fontFamily: {
                'open-sans': ['Open Sans', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif'],
                'open-sans-bold-italic': ['Open Sans Bold Italic', 'sans-serif'],
                'open-sans-bold': ['Open Sans Bold', 'sans-serif'],
                'open-sans-extra-bold-italic': ['Open Sans Extra Bold Italic', 'sans-serif'],
                'open-sans-extra-bold': ['Open Sans Extra Bold', 'sans-serif'],
                'open-sans-italic': ['Open Sans Italic', 'sans-serif'],
                'open-sans-light-italic': ['Open Sans Light Italic', 'sans-serif'],
                'open-sans-light': ['Open Sans Light', 'sans-serif'],
                'open-sans-medium-italic': ['Open Sans Medium Italic', 'sans-serif'],
                'open-sans-medium': ['Open Sans Medium', 'sans-serif'],
                'open-sans-regular': ['Open Sans Regular', 'sans-serif'],
                'open-sans-semi-bold-italic': ['Open Sans Semi Bold Italic', 'sans-serif'],
                'open-sans-semi-bold': ['Open Sans Semi Bold', 'sans-serif'],
            },
        },
    },
    plugins: [],
}


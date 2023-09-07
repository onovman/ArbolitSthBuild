/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/**/*.{html,js}"],
    important: true,
    theme: {
        colors: {
            primary: "#FFCB2E",
            secondary: "#2B2B2B",
            tertiary: "#fccc46",
            main: "#000",
            white: "#fff",
            sable: "#2b2b2b",
            dark: "#050505",
            gray: "#575757",
            darkness: "rgba(0, 0, 0, .2)",
            sableness: "#525252",
        },
        screens: {
            large: { max: "1920px" },
            bold: { max: "1200px" },
            medium: { max: "980px" },
            regular: { max: "640px" },
            middle: { max: "480px" },
            small: { max: "320px" },
        },
        fontFamily: {
            montserrat: ["Montserrat", "sans-serif"],
            roboto: ["Roboto Slab", "Arial", "sans-serif"],
        },
        fontSize: {
            small: ["14px", "1.55"],
            regular: ["16px", "1"],
            medium: ["18px", "1.35"],
            middle: ["20px", "1.55"],
            sparel: ["22px", "1.55"],
            spidy: [
                "25px",
                {
                    lineHeight: "1.23",
                    letterSpacing: "1px",
                },
            ],
            luby: [
                "30px",
                {
                    lineHeight: "1.23",
                    letterSpacing: "1px",
                },
            ],
            busty: [
                "32px",
                {
                    lineHeight: "1.23",
                    letterSpacing: "1px",
                },
            ],
            large: ["42px", "1.23"],
            big: [
                "48px",
                {
                    lineHeight: "1.23",
                    letterSpacing: "1px",
                },
            ],
        },
        boxShadow: {
            "1lr": "0 1px 3px rgb(0 0 0 / 0%)",
            "2lr": "0px 0px 6px 0px rgba(0, 0, 0, 0.1)",
            "1hr": "0px 0px 10px 0px rgb(0 0 0 / 10%)",
            "2hr": "0px 0px 10px 0px rgb(0 0 0 / 40%)",
            "1el": "inset 0px -1px 0px 0px #050505",
        },
    },
    plugins: [],
};

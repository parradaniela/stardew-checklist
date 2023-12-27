/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                stardew_yale_blue: "#02346A",
                stardew_polynesian_blue: "#014387",
                stardew_denim: "#0459AE",
                stardew_deep_sky_blue: "#45BAEF",
                stardew_robin_egg_blue: "#5CD7E6",
                stardew_light_cream: "#FEE6AE",
                stardew_sunset: "#FAC87C",
                stardew_persian_orange: "#D28D69",
                stardew_dark_brown: "#7A3710",
            },
            fontFamily: {
                stardew: ["StardewFont", "sans-serif"],
            },
        },
    },
    plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

        extend: {
            fontFamily: {
                better:['var(--font-better)'],
                cal:['var(--font-cal)'],

                // 'poppins': [
                //     'Poppins', 'sans-serif'
                // ],
                // 'great': ['Great Vibes', 'cursive'],
                // 'nasa': ["nasa", "sarif"]
            }
        },
        plugins: []
    }
}

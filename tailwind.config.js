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
                'poppins': [
                    'Poppins', 'sans-serif'
                ],
                'nasa': ["nasa", "sarif"]
            }
        },
        plugins: []
    }
}

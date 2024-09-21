/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			primary: "#3498db",
			secondary: "#404040",
			tertiary: "#e74c3c",
			quaternary: "#171717",
			light: "#ecf0f1",
			dark: "#000000",
			white: "#ffffff",
		},
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
		},
	},

	plugins: [],
}

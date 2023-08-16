/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		screens: {
			xsm:"400px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		colors: {
			text: "#050505",
			background: "#fafafa",
			primary: "#b52639",
			secondary: "#fdced3",
			accent: "#f50a29",
			darktext: "#fafafa",
			darkbackground: "#050505",
			darkprimary: "#b52639",
			darksecondary: "#310207",
			darkaccent: "#f96c7f",
		},
		fontFamily: {},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			borderRadius: { "4xl": "2rem" },
		},
	},
	plugins: [],
};

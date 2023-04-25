/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [ './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}' ],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Inter, system-ui, sans-serif',
				mono: 'Fira Code, monospace',
			},
			colors: {
				background: '#14213D',
				'background-dark': '#0B1323',
				highlight: '#FCA311',
				'highlight-dark': '#E58E02',
			},
		},
	},
	plugins: [],
}

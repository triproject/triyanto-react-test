/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: '#1e293b',
				'brand-light': '#44a4c1',
				secondary: '#00AFB9',
				'secondary-light': '#56C3C9',
			},
			fontFamily: {
				inter: ['Inter', 'Helvetica', 'sans-serif'],
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};

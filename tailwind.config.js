/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				primary: 'white',
				violet: '#005570',
				secondary: '#f9f9f9',
			},
			colors: {
				primary: 'white', // blue
				violet: '#005570', // violet
				secondary: '#6b6b6b', // gray - p
			},
		},
	},
	plugins: [],
};

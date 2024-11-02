/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				wallpaper: "url('src/assets/wallpaper.jpg')",
				homeWallpaper: "url('src/assets/homeWallpaper.jpg')",
			},
		},
	},
	plugins: [],
};

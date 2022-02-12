import { eleventyPlugin } from 'vite-plugin-eleventy'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [eleventyPlugin()],
	resolve:{ alias: {
		"@css": "../styles",
		"@pub": "../static",
		"@img": "@pub/images",
	}, },
	root: "src",
	clearScreen: false,
	publicDir: "../public",
	build: { 
		outDir: "../dist", 
		emptyOutDir: true,
	}
})

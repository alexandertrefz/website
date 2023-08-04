import { defineConfig } from "astro/config"

import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

import serviceWorker from "astrojs-service-worker"

export default defineConfig({
	site: "https://alexander.trefz.me",
	trailingSlash: "always",
	experimental: {
		viewTransitions: true
	},
	build: {
		format: "directory",
	},
	integrations: [
		mdx(),
		sitemap(),
		serviceWorker({
			workbox: {
				runtimeCaching: [
					{
						urlPattern: /^https:\/\/use\.typekit\.net/,
						handler: "CacheFirst",
						options: {
							cacheName: "fonts",
						},
					},
				],
			} as any,
		}),
	],
	vite: {
		plugins: [],
	},
})

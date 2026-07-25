import { defineConfig } from "astro/config"

import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

import serviceWorker from "astrojs-service-worker"
import type { GenerateSWOptions } from "workbox-build"

// swDest/globDirectory are filled in by the integration at build time, but
// its options type doesn't reflect that — hence the Omit here and the cast
// where the config is passed below.
const workboxConfig: Omit<GenerateSWOptions, "swDest"> = {
	// Precache only the content-hashed bundles. The default (**/*) would
	// precache every page and all 22 font files on first visit — and
	// serving precached HTML cache-first means the first visit after a
	// deploy renders the previous build's pages, referencing bundle hashes
	// that no longer exist on the server.
	globPatterns: ["_astro/**"],
	runtimeCaching: [
		{
			// Pages go network-first so a deploy is picked up immediately,
			// while previously visited pages remain available offline.
			urlPattern: ({ request }) => request.mode === "navigate",
			handler: "NetworkFirst",
			options: {
				cacheName: "pages",
				networkTimeoutSeconds: 4,
			},
		},
		{
			urlPattern: /\/fonts\/.+\.woff2$/,
			handler: "CacheFirst",
			options: {
				cacheName: "fonts",
				expiration: {
					maxEntries: 30,
					maxAgeSeconds: 60 * 60 * 24 * 365,
				},
			},
		},
		{
			urlPattern: /\.(?:png|svg|ico|webmanifest|txt)$/,
			handler: "StaleWhileRevalidate",
			options: {
				cacheName: "static",
			},
		},
	],
}

export default defineConfig({
	site: "https://alexander.trefz.me",
	trailingSlash: "always",
	redirects: {
		"/": "/blog/",
	},
	build: {
		format: "directory",
	},
	integrations: [
		mdx(),
		sitemap(),
		serviceWorker({
			workbox: workboxConfig as GenerateSWOptions,
		}),
	],
})

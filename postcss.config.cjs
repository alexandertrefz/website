const plugins = [require("autoprefixer")]

// Minification only matters for builds — running cssnano during `astro dev`
// just slows down HMR.
if (process.env.NODE_ENV === "production") {
	plugins.push(require("cssnano"))
}

module.exports = { plugins }

/* eslint-disable no-mixed-spaces-and-tabs */
const withSourceMaps = require("@zeit/next-source-maps");

module.exports = withSourceMaps({
	serverRuntimeConfig: {
	  rootDir: __dirname,
	},
});

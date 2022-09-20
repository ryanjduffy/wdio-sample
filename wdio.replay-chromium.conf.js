const cloneDeep = require("lodash.clonedeep");
const { getExecutablePath } = require("@replayio/playwright");

const base = require("./wdio.conf");

const config = cloneDeep(base);
config.capabilities = [
	{
		maxInstances: 5,
		browserName: "chrome",
		"goog:chromeOptions": {
			binary: getExecutablePath("chromium"),
			args: ["--headless"],
		},
	},
];

exports.config = config;

const cloneDeep = require("lodash.clonedeep");
const { getExecutablePath } = require("@replayio/playwright");

const { config: base } = require("./wdio.conf");

const config = cloneDeep(base);
config.capabilities = [
	{
		maxInstances: 5,
		browserName: "firefox",
		"moz:firefoxOptions": {
			binary: getExecutablePath("firefox"),
			args: ["-headless"],
			env: {
				// This should enable recording but doesn't seem to be making it to gecko
				RECORD_ALL_CONTENT: "1"
			}
		},
	},
];

exports.config = config;

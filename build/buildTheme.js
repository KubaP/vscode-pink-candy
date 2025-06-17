// Builds the theme files (the json theme definitions).
//
// Whilst all the necessary files can and will be created at runtime if missing, it's a good idea to publish the
// extension with pre-built files so that when the extension is installed, nothing _needs_ to be ran and vscode
// doesn't need to be reloaded straight away.

const fs = require("fs");
const path = require("path");
const { createThemes } = require("../out/theme");

// Handle working directory paths within Azure pipelines.
let workingDir = path.join(__dirname, "..");
if (process.env.RELEASE_PRIMARYARTIFACTSOURCEALIAS) {
	workingDir = path.join(
		process.env.SYSTEM_DEFAULTWORKINGDIRECTORY,
		process.env.RELEASE_PRIMARYARTIFACTSOURCEALIAS
	);
}

// Create the `$extension_root/themes` folder if it doesn't exist, otherwise the file writing functions will fail.
const folder = path.join(workingDir, "themes");
if (!fs.existsSync(folder)) {
	fs.mkdirSync(folder);
}

// Default configuration values.
//
// Note: this should be kept in-line with `Config.DEFAULT`.
const config = {
	markdownSyntaxStyle: "traditional",
	italicComments: false,
	altCurrentLine: false,
	monochromeBracketGuides: false,
	inlayStyle: "noBackground",
	lightTerminalColourScheme: "normal+dark",
	globalAccent: "default",
};

fs.writeFileSync(path.join(folder, "cached_config.json"), JSON.stringify(config));
createThemes(config, folder);

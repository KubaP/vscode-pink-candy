// Builds the necessary files for packaging/publishing.
// 
// Whilst all the necessary files can and will be created at runtime if missing, it's a good idea to publish the
// extension with pre-built files so that when the extension is installed, nothing _needs_ to be ran and vscode
// doesn't need to be restarted straight away.

const fs = require("fs");
const path = require("path");
const { createThemes } = require("../out/theme");

// Create the `./themes` folder if it doesn't exist, otherwise the file writing functions fail.
const folder = path.join(__dirname, "..", "themes");
if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
}

// Default configuration values. This should match whatever the defaults are in `package.json/Config.DEFAULT`.
const config = {
    mutedMd: false,
    italicComments: false,
    altCurrentLine: false,
    monochromeBracketGuides: false,
    inlayStyle: "noBackground",
    globalAccent: "default",
}

fs.writeFileSync(path.join(folder, "cached_config.json"), JSON.stringify(config));
createThemes(config);
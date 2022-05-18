const { createThemes } = require("../out/theme");

// Default configuration values. This should match whatever the defaults are in `package.json`.
const config = {
    mdToggle: false,
}

createThemes(config);
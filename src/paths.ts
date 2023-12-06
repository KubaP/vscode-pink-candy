import * as path from "path";

/**
 * Location of the `$extension_root/themes` folder.
 */
export const THEME_FOLDER = path.join(__dirname, "..", "themes");

/**
 * The location of the configuration cache file.
 */
export const CACHE_FILE = path.join(THEME_FOLDER, "cached_config.json");

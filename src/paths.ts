// This path-related stuff must be placed before any other files, because unlike in a sane language, imports
// actually "execute" the imported code in the file. Importing `getConfig` requires `config.js` to be evaluated,
// and in the process of evaluating that file it executes the code for `CACHE_FILE` constant, at which point
// `THEME_FOLDER` is expected to be defined already. Javascript has no concept of compile-time evaluation, or even
// of importing and evaluating a set of files as one "thing". Basically, exporting symbols child -> parent works
// "normally", but exporting symbols parent -> child is a clusterfuck. most sane "no proper type system" language
import * as path from "path";
/**
 * Location of the `$extension_root/themes` folder.
 */
export const THEME_FOLDER = path.join(__dirname, "..", "themes");

/**
 * The location of the configuration cache file.
 */
export const CACHE_FILE = path.join(THEME_FOLDER, "cached_config.json");

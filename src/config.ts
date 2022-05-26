import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

/**
 * Valid inlay hint styles.
 */
type InlayStyle = "noBackground" | "faintBackground" | "accent" | "accentBackground";
function isValidStyle(str: string): str is InlayStyle {
	return str == "noBackground" || str == "faintBackground" || str == "accent" || str == "accentBackground";
}

/**
 * Valid global accent options.
 */
type Accent = "default" | "disabledStatusBar" | "minimal";
function isValidAccent(str: string): str is Accent {
	return str == "default" || str == "disabledStatusBar" || str == "minimal";
}

/**
 * The location of the configuration cache file.
 */
const cachePath = path.join(__dirname, "..", "themes", "cached_config.json");

/**
 * The configuration of the theme.
 */
export class Config {
	mutedMd: boolean;
	italicComments: boolean;
	altCurrentLine: boolean;
	monochromeBracketGuides: boolean;
	inlayStyle: InlayStyle;
	globalAccent: Accent;

	constructor(
		mutedMd: boolean,
		italicComments: boolean,
		altCurrentLine: boolean,
		monochromeBracketGuides: boolean,
		inlayStyle: InlayStyle,
		globalAccent: Accent
	) {
		this.mutedMd = mutedMd;
		this.italicComments = italicComments;
		this.altCurrentLine = altCurrentLine;
		this.inlayStyle = inlayStyle;
		this.monochromeBracketGuides = monochromeBracketGuides;
		this.globalAccent = globalAccent;
	}

	isModified(): boolean {
		// If there is no cache, then we need to assume that the configuration has been modified. We also want to
		// create the cache file for future use.
		if (!fs.existsSync(cachePath)) {
			this.writeToCache();
			return true;
		}

		try {
			const cachedConfig = JSON.parse(fs.readFileSync(cachePath, { encoding: "utf8" }));
			if (
				this.mutedMd == cachedConfig.mutedMd &&
				this.altCurrentLine == cachedConfig.altCurrentLine &&
				this.italicComments == cachedConfig.italicComments &&
				this.monochromeBracketGuides == cachedConfig.monochromeBracketGuides &&
				this.inlayStyle == cachedConfig.inlayStyle &&
				this.globalAccent == cachedConfig.globalAccent
			) {
				return false;
			} else {
				return true;
			}
		} catch {
			return true;
		}
	}

	writeToCache() {
		fs.writeFileSync(cachePath, JSON.stringify(this, undefined, 4), { encoding: "utf8" });
	}
}

/**
 * Returns the current up-to-date configuration of the theme.
 */
export function getConfig(): Config {
	const config = vscode.workspace.getConfiguration("theme-pink-candy");

	let mutedMd: boolean | undefined = config.get("mutedMarkdownPlaintext");
	if (mutedMd === undefined) {
		mutedMd = false;
	}

	let italicComments: boolean | undefined = config.get("italicizedComments");
	if (italicComments === undefined) {
		italicComments = false;
	}

	let altCurrentLine: boolean | undefined = config.get("alternateCurrentLineStyle");
	if (altCurrentLine === undefined) {
		altCurrentLine = false;
	}

	let monochromeBracketGuides: boolean | undefined = config.get("monochromeBracketPairGuides");
	if (monochromeBracketGuides === undefined) {
		monochromeBracketGuides = false;
	}

	let inlayStyle: InlayStyle;
	let inlayStyleRaw: string | undefined = config.get("inlayHintStyle");
	if (inlayStyleRaw === undefined) {
		inlayStyleRaw = "noBackground";
	}
	if (isValidStyle(inlayStyleRaw)) {
		inlayStyle = inlayStyleRaw;
	} else {
		inlayStyle = "noBackground";
	}

	let globalAccent: Accent;
	let globalAccentRaw: string | undefined = config.get("globalAccent");
	if (globalAccentRaw === undefined) {
		globalAccentRaw = "default";
	}
	if (isValidAccent(globalAccentRaw)) {
		globalAccent = globalAccentRaw;
	} else {
		globalAccent = "default";
	}

	return new Config(mutedMd, italicComments, altCurrentLine, monochromeBracketGuides, inlayStyle, globalAccent);
}

/**
 * The default configuration of the theme.
 */
const DEFAULT_CONFIG = new Config(false, false, false, false, "noBackground", "default");

/**
 * Resets the configuration of the theme to the default options, and updates the cache as well.
 */
export function resetConfig() {
	DEFAULT_CONFIG.writeToCache();
	const config = vscode.workspace.getConfiguration("theme-pink-candy");
	config.update("mutedMarkdownPlaintext", undefined, true);
	config.update("italicizedComments", undefined, true);
	config.update("alternateCurrentLineStyle", undefined, true);
	config.update("monochromeBracketPairGuides", undefined, true);
	config.update("inlayHintStyle", undefined, true);
	config.update("globalAccent", undefined, true);
}

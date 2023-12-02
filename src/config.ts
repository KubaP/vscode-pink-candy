import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";

/**
 * Valid markdown syntax styles.
 */
type MarkdownSyntaxStyle = "traditional" | "mutedPlaintext" | "alternate";
function isValidMarkdownStyle(str: String): str is MarkdownSyntaxStyle {
	return str == "traditional" || str == "mutedPlaintext" || str == "alternate";
}

/**
 * Valid inlay hint styles.
 */
type InlayHintStyle = "noBackground" | "faintBackground" | "accent" | "accentBackground";
function isValidInlayStyle(str: string): str is InlayHintStyle {
	return str == "noBackground" || str == "faintBackground" || str == "accent" || str == "accentBackground";
}

/**
 * Valid global accent options.
 */
type GlobalAccent = "default" | "disabledStatusBar" | "minimal";
function isValidAccent(str: string): str is GlobalAccent {
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
	markdownSyntaxStyle: MarkdownSyntaxStyle;
	italicComments: boolean;
	altCurrentLine: boolean;
	monochromeBracketGuides: boolean;
	inlayStyle: InlayHintStyle;
	globalAccent: GlobalAccent;

	constructor(
		markdownSyntaxStyle: MarkdownSyntaxStyle,
		italicComments: boolean,
		altCurrentLine: boolean,
		monochromeBracketGuides: boolean,
		inlayStyle: InlayHintStyle,
		globalAccent: GlobalAccent
	) {
		this.markdownSyntaxStyle = markdownSyntaxStyle;
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
			let cachedConfig = JSON.parse(fs.readFileSync(cachePath, { encoding: "utf8" }));
			if (cachedConfig.markdownSyntaxStyle === undefined) {
				if (cachedConfig.mutedMd === true) {
					cachedConfig.markdownSyntaxStyle = "mutedPlaintext";
				} else {
					cachedConfig.markdownSyntaxStyle = "traditional";
				}
			}
			if (
				this.markdownSyntaxStyle == cachedConfig.markdownSyntaxStyle &&
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
 * Returns the current configuration of the theme.
 */
export function getConfig(): Config {
	const config = vscode.workspace.getConfiguration("theme-pink-candy");

	let markdownSyntaxStyle: MarkdownSyntaxStyle;
	let markdownSyntaxStyleRaw = config.inspect("markdownSyntaxStyle")!;
	if (markdownSyntaxStyleRaw.globalValue === undefined) {
		// `theme-pink-candy.markdownSyntaxStyle` is not defined within the user configuration.
		let mutedMdRaw = config.inspect("mutedMarkdownPlaintext")!;
		if (mutedMdRaw.globalValue === undefined) {
			// `theme-pink-candy.mutedMarkdownPlaintext` is not defined within the user configuration.
			markdownSyntaxStyle = "traditional";
		} else if (mutedMdRaw.globalValue === true) {
			markdownSyntaxStyle = "mutedPlaintext";
		} else {
			markdownSyntaxStyle = "traditional";
		}
	} else {
		if (typeof markdownSyntaxStyleRaw.globalValue === "string") {
			let value = markdownSyntaxStyleRaw.globalValue as string;
			if (isValidMarkdownStyle(value)) {
				markdownSyntaxStyle = value;
			} else {
				markdownSyntaxStyle = "traditional";
			}
		} else {
			markdownSyntaxStyle = "traditional";
		}
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

	let inlayStyle: InlayHintStyle;
	let inlayStyleRaw: string | undefined = config.get("inlayHintStyle");
	if (inlayStyleRaw === undefined) {
		inlayStyleRaw = "noBackground";
	}
	if (isValidInlayStyle(inlayStyleRaw)) {
		inlayStyle = inlayStyleRaw;
	} else {
		inlayStyle = "noBackground";
	}

	let globalAccent: GlobalAccent;
	let globalAccentRaw: string | undefined = config.get("globalAccent");
	if (globalAccentRaw === undefined) {
		globalAccentRaw = "default";
	}
	if (isValidAccent(globalAccentRaw)) {
		globalAccent = globalAccentRaw;
	} else {
		globalAccent = "default";
	}

	return new Config(
		markdownSyntaxStyle,
		italicComments,
		altCurrentLine,
		monochromeBracketGuides,
		inlayStyle,
		globalAccent
	);
}

/**
 * The default configuration of the theme.
 */
const DEFAULT_CONFIG = new Config("traditional", false, false, false, "noBackground", "default");

/**
 * Resets the configuration of the theme to the default options by undefining every configuration key, and resets
 * the cache as well.
 */
export function resetConfig() {
	DEFAULT_CONFIG.writeToCache();
	const config = vscode.workspace.getConfiguration("theme-pink-candy");
	config.update("mutedMarkdownPlaintext", undefined, true);
	config.update("markdownSyntaxStyle", undefined, true);
	config.update("italicizedComments", undefined, true);
	config.update("alternateCurrentLineStyle", undefined, true);
	config.update("monochromeBracketPairGuides", undefined, true);
	config.update("inlayHintStyle", undefined, true);
	config.update("globalAccent", undefined, true);
}

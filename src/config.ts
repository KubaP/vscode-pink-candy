import { THEME_FOLDER } from "./extension";
import * as fs from "fs";
import * as path from "path";
import * as vscode from "vscode";

/**
 * Valid markdown syntax styles.
 */
type MarkdownSyntaxStyle = "traditional" | "mutedPlaintext" | "alternate";
function isValidMarkdownSyntaxStyle(str: String): str is MarkdownSyntaxStyle {
	return str == "traditional" || str == "mutedPlaintext" || str == "alternate";
}

/**
 * Valid inlay hint styles.
 */
type InlayHintStyle = "noBackground" | "faintBackground" | "accent" | "accentBackground";
function isValidInlayHintStyle(str: string): str is InlayHintStyle {
	return (
		str == "noBackground" ||
		str == "faintBackground" ||
		str == "accent" ||
		str == "accentBackground"
	);
}

/**
 * Valid global accent options.
 */
type GlobalAccent = "default" | "disabledStatusBar" | "minimal";
function isValidGlobalAccent(str: string): str is GlobalAccent {
	return str == "default" || str == "disabledStatusBar" || str == "minimal";
}

/**
 * The location of the configuration cache file.
 */
const CACHE_FILE = path.join(THEME_FOLDER, "cached_config.json");

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

	/**
	 * Returns whether the theme configuration has been modified since the last time it was written to the cache.
	 */
	isModified(): boolean {
		// If there is no cache, then we need to assume that the configuration has been modified. We also want to
		// create the cache file for future use.
		if (!fs.existsSync(CACHE_FILE)) {
			this.writeToCache();
			return true;
		}

		try {
			// For details about handling deprecated properties, see: /docs/Design Document.md#cached-configuration

			let cachedConfig = JSON.parse(fs.readFileSync(CACHE_FILE, { encoding: "utf8" }));
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

	/**
	 * Writes the configuration to the cache file.
	 */
	writeToCache() {
		fs.writeFileSync(CACHE_FILE, JSON.stringify(this, undefined, 4), { encoding: "utf8" });
	}

	/**
	 * The default configuration settings.
	 */
	static DEFAULT: Config = new Config(
		"traditional",
		false,
		false,
		false,
		"noBackground",
		"default"
	);
}

/**
 * Returns the current configuration of the theme.
 */
export function getConfig(): Config {
	const config = vscode.workspace.getConfiguration("theme-pink-candy");

	// For details about handling deprecated settings, see: /docs/Design Document.md#configuration-vs-code

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
			if (isValidMarkdownSyntaxStyle(value)) {
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
	if (isValidInlayHintStyle(inlayStyleRaw)) {
		inlayStyle = inlayStyleRaw;
	} else {
		inlayStyle = "noBackground";
	}

	let globalAccent: GlobalAccent;
	let globalAccentRaw: string | undefined = config.get("globalAccent");
	if (globalAccentRaw === undefined) {
		globalAccentRaw = "default";
	}
	if (isValidGlobalAccent(globalAccentRaw)) {
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
 * Resets the configuration of the theme to the default settings by undefining every configuration key, and resets
 * the cache as well.
 */
export function resetConfig() {
	Config.DEFAULT.writeToCache();
	const config = vscode.workspace.getConfiguration("theme-pink-candy");
	config.update("mutedMarkdownPlaintext", undefined, true);
	config.update("markdownSyntaxStyle", undefined, true);
	config.update("italicizedComments", undefined, true);
	config.update("alternateCurrentLineStyle", undefined, true);
	config.update("monochromeBracketPairGuides", undefined, true);
	config.update("inlayHintStyle", undefined, true);
	config.update("globalAccent", undefined, true);
}

import { CACHE_FILE } from "./paths";
import * as fs from "fs";
import * as vscode from "vscode";

// Note: the accepted values should be kept in-line with `package.json`.

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
 * Valid light terminal colour schemes.
 */
type LightTerminalColourScheme = "normal+dark" | "normal+light" | "dark+normal";
function isValidLightTerminalColourScheme(str: string): str is LightTerminalColourScheme {
	return str == "normal+dark" || str == "normal+light" || str == "dark+normal";
}

/**
 * Valid global accent options.
 */
type GlobalAccent = "default" | "disabledStatusBar" | "minimal";
function isValidGlobalAccent(str: string): str is GlobalAccent {
	return str == "default" || str == "disabledStatusBar" || str == "minimal";
}

/**
 * The configuration of the theme.
 */
export class Config {
	markdownSyntaxStyle: MarkdownSyntaxStyle;
	italicComments: boolean;
	altCurrentLine: boolean;
	monochromeBracketGuides: boolean;
	inlayStyle: InlayHintStyle;
	lightTerminalColourScheme: LightTerminalColourScheme;
	globalAccent: GlobalAccent;

	constructor(
		markdownSyntaxStyle: MarkdownSyntaxStyle,
		italicComments: boolean,
		altCurrentLine: boolean,
		monochromeBracketGuides: boolean,
		inlayStyle: InlayHintStyle,
		lightTerminalColourScheme: LightTerminalColourScheme,
		globalAccent: GlobalAccent
	) {
		this.markdownSyntaxStyle = markdownSyntaxStyle;
		this.italicComments = italicComments;
		this.altCurrentLine = altCurrentLine;
		this.inlayStyle = inlayStyle;
		this.monochromeBracketGuides = monochromeBracketGuides;
		this.lightTerminalColourScheme = lightTerminalColourScheme;
		this.globalAccent = globalAccent;
	}

	/**
	 * The default configuration settings.
	 *
	 * WARNING: these default values should be kept in-line with `package.json`.
	 */
	static DEFAULT: Config = new Config(
		"traditional",
		false,
		false,
		false,
		"noBackground",
		"normal+dark",
		"default"
	);

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
			// For details about handling deprecated fields, see: /docs/Design Document.md#cached-configuration

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
				this.lightTerminalColourScheme == cachedConfig.lightTerminalColourScheme &&
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

	let lightTerminalColourScheme: LightTerminalColourScheme;
	let lightTerminalColourSchemeRaw: string | undefined = config.get("light.terminalColourScheme");
	if (lightTerminalColourSchemeRaw === undefined) {
		lightTerminalColourScheme = "normal+dark";
	}
	// No idea why we need to explicitly cast here, but not for the others.
	if (isValidLightTerminalColourScheme(lightTerminalColourSchemeRaw as string)) {
		lightTerminalColourScheme = lightTerminalColourSchemeRaw as LightTerminalColourScheme;
	} else {
		lightTerminalColourScheme = "normal+dark";
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
		lightTerminalColourScheme,
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
	// Note: this should undefine all settings defined in `package.json`.
	config.update("mutedMarkdownPlaintext", undefined, true);
	config.update("markdownSyntaxStyle", undefined, true);
	config.update("italicizedComments", undefined, true);
	config.update("alternateCurrentLineStyle", undefined, true);
	config.update("monochromeBracketPairGuides", undefined, true);
	config.update("inlayHintStyle", undefined, true);
	config.update("light.terminalColourScheme", undefined, true);
	config.update("globalAccent", undefined, true);
}

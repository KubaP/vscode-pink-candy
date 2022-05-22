import * as vscode from "vscode";
import { info } from "./extension";

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
 * The configuration of the theme.
 */
export class Config {
    mutedMd: boolean;
    italicComments: boolean;
    altCurrentLine: boolean;
    monochromeBracketGuides: boolean;
    inlayStyle: InlayStyle;
    globalAccent: Accent;

    constructor(mutedMd: boolean, italicComments: boolean, altCurrentLine: boolean, monochromeBracketGuides: boolean, inlayStyle: InlayStyle, globalAccent: Accent) {
        this.mutedMd = mutedMd;
        this.italicComments = italicComments;
        this.altCurrentLine = altCurrentLine;
        this.inlayStyle = inlayStyle;
        this.monochromeBracketGuides = monochromeBracketGuides;
        this.globalAccent = globalAccent;
    }
}

/**
 * Returns the current configuration of the theme.
 */
export function getConfig(): Config {
    const config = vscode.workspace.getConfiguration("theme-pink-candy");

    let mutedMd: boolean | undefined = config.get("mutedMarkdownPlaintext");
    if (mutedMd === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.mutedMarkdownPlaintext'");
        mutedMd = false;
    }

    let italicComments: boolean | undefined = config.get("italicizedComments");
    if (italicComments === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.italicizedComments'")
        italicComments = false;
    }

    let altCurrentLine: boolean | undefined = config.get("alternateCurrentLineStyle");
    if (altCurrentLine === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.alternateCurrentLineStyle'")
        altCurrentLine = false;
    }

    let monochromeBracketGuides: boolean | undefined = config.get("monochromeBracketPairGuides");
    if (monochromeBracketGuides === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.monochromeBracketPairGuides'")
        monochromeBracketGuides = false;
    }

    let inlayStyle: InlayStyle;
    let inlayStyleRaw: string | undefined = config.get("inlayHintStyle");
    if (inlayStyleRaw === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.inlayHintStyle'")
        inlayStyleRaw = "noBackground";
    }
    if (isValidStyle(inlayStyleRaw)) {
        inlayStyle = inlayStyleRaw;
    } else {
        info.appendLine(`ERROR: Invalid value '${inlayStyleRaw}' of 'theme-pink-candy.inlayHintStyle'`)
        inlayStyle = "noBackground";
    }

    let globalAccent: Accent;
    let globalAccentRaw: string | undefined = config.get("globalAccent");
    if (globalAccentRaw === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.globalAccent'")
        globalAccentRaw = "default";
    }
    if (isValidAccent(globalAccentRaw)) {
        globalAccent = globalAccentRaw;
    } else {
        info.appendLine(`ERROR: Invalid value '${globalAccentRaw}' of 'theme-pink-candy.globalAccent'`)
        globalAccent = "default";
    }

    return new Config(mutedMd, italicComments, altCurrentLine, monochromeBracketGuides, inlayStyle, globalAccent);
}
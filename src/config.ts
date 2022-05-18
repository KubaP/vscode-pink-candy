import * as vscode from "vscode";
import { info } from "./extension";

/**
 * Valid inlay hint styles.
 */
type Style = "noBackground" | "faintBackground" | "accent";
function isValidStyle(str: string): str is Style {
    return str == "noBackground" || str == "faintBackground" || str == "accent";
}

/**
 * The configuration of the theme.
 */
export class Config {
    mutedMd: boolean;
    italicComments: boolean;
    altCurrentLine: boolean;
    monochromeBracketGuides: boolean;
    inlayStyle: Style;

    constructor(mutedMd: boolean, italicComments: boolean, altCurrentLine: boolean, monochromeBracketGuides: boolean, inlayStyle: Style) {
        this.mutedMd = mutedMd;
        this.italicComments = italicComments;
        this.altCurrentLine = altCurrentLine;
        this.inlayStyle = inlayStyle;
        this.monochromeBracketGuides = monochromeBracketGuides;
    }
}

/**
 * Returns the current configuration of the theme.
 */
export function getConfig(): Config {
    const config = vscode.workspace.getConfiguration("theme-pink-candy");

    let mutedMd: boolean | undefined = config.get("mutedMarkdown");
    if (mutedMd === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.mutedMarkdown'");
        mutedMd = false;
    }

    let italicComments: boolean | undefined = config.get("italicComments");
    if (italicComments === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.italicComments'")
        italicComments = false;
    }

    let altCurrentLine: boolean | undefined = config.get("altCurrentLine");
    if (altCurrentLine === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.altCurrentLine'")
        altCurrentLine = false;
    }

    let monochromeBracketGuides: boolean | undefined = config.get("monochromeBracketGuides");
    if (monochromeBracketGuides === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.monochromeBracketGuides'")
        monochromeBracketGuides = false;
    }

    let inlayStyle: Style;
    let inlayStyleRaw: string | undefined = config.get("inlayStyle");
    if (inlayStyleRaw === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.inlayStyle'")
        inlayStyleRaw = "noBackground";
    }
    if (isValidStyle(inlayStyleRaw)) {
        inlayStyle = inlayStyleRaw;
    } else {
        info.appendLine(`ERROR: Invalid value '${inlayStyleRaw}' of 'theme-pink-candy.inlayStyle'`)
        inlayStyle = "noBackground";
    }

    return new Config(mutedMd, italicComments, altCurrentLine, monochromeBracketGuides, inlayStyle);
}
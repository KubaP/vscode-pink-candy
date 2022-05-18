import * as vscode from "vscode";
import { info } from "./extension";

export class Config {
    mutedMd: boolean;
    italicComments: boolean;
    altCurrentLine: boolean;
    altInlay: boolean;
    monochromeBracketGuides: boolean;

    constructor(mutedMd: boolean, italicComments: boolean, altCurrentLine: boolean, altInlay: boolean, monochromeBracketGuides: boolean) {
        this.mutedMd = mutedMd;
        this.italicComments = italicComments;
        this.altCurrentLine = altCurrentLine;
        this.altInlay = altInlay;
        this.monochromeBracketGuides = monochromeBracketGuides;
    }
}

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

    let altInlay: boolean | undefined = config.get("altInlay");
    if (altInlay === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.altInlay'")
        altInlay = false;
    }

    let monochromeBracketGuides: boolean | undefined = config.get("monochromeBracketGuides");
    if (monochromeBracketGuides === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.monochromeBracketGuides'")
        monochromeBracketGuides = false;
    }

    return new Config(mutedMd, italicComments, altCurrentLine, altInlay, monochromeBracketGuides);
}
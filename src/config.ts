import * as vscode from "vscode";
import { info } from "./extension";

export class Config {
    mutedMd: boolean;
    italicComments: boolean;

    constructor(mutedMd: boolean, italicComments: boolean) {
        this.mutedMd = mutedMd;
        this.italicComments = italicComments;
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

    return new Config(mutedMd, italicComments);
}
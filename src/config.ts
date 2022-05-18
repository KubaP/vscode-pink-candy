import * as vscode from "vscode";
import { info } from "./extension";

export class Config {
    mdToggle: boolean;

    constructor(mdToggle: boolean) {
        this.mdToggle = mdToggle;
    }
}

export function getConfig(): Config {
    const config = vscode.workspace.getConfiguration("theme-pink-candy");
    
    let mdToggle: boolean | undefined = config.get("mutedMarkdown");
    if (mdToggle === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.mutedMarkdown'");
        mdToggle = false;
    }

    return new Config(mdToggle);
}
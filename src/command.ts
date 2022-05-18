import * as vscode from "vscode";
import { info } from "./extension";

function toggleMutedMd() {
    const config = vscode.workspace.getConfiguration("theme-pink-candy");

    const toggle: boolean | undefined = config.get("mutedMarkdown");

    if (toggle === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.mutedMarkdown'");
        return;
    }

    // Toggle the boolean.
    config.update("mutedMarkdown", !toggle, true);
}

const toggleMutedMdCmd = vscode.commands.registerCommand("theme-pink-candy.toggleMutedMarkdown", () => {
    toggleMutedMd();
});

export { toggleMutedMdCmd };
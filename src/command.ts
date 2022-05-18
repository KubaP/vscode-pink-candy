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

function toggleItalicComments() {
    const config = vscode.workspace.getConfiguration("theme-pink-candy");

    const toggle: boolean | undefined = config.get("italicComments");
    if (toggle === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.italicComments'");
        return;
    }

    // Toggle the boolean.
    config.update("italicComments", !toggle, true);
}

function toggleAltCurrentLine() {
    const config = vscode.workspace.getConfiguration("theme-pink-candy");

    const toggle: boolean | undefined = config.get("altCurrentLine");
    if (toggle === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.altCurrentLine'");
        return;
    }

    // Toggle the boolean.
    config.update("altCurrentLine", !toggle, true);
}

const toggleMutedMdCmd = vscode.commands.registerCommand("theme-pink-candy.toggleMutedMarkdown", () => {
    toggleMutedMd();
});
const toggleItalicCommentsCmd = vscode.commands.registerCommand("theme-pink-candy.toggleItalicComments", () => {
    toggleItalicComments();
});
const toggleAltCurrentLineCmd = vscode.commands.registerCommand("theme-pink-candy.toggleAltCurrentLine", () => {
    toggleAltCurrentLine();
});

export { toggleMutedMdCmd, toggleItalicCommentsCmd, toggleAltCurrentLineCmd };
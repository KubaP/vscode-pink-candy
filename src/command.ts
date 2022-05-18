import * as vscode from "vscode";
import { info } from "./extension";

/**
 * Toggles a configuration boolean option.
 * @param name The boolean key.
 */
function toggleBoolean(name: string) {
    const config = vscode.workspace.getConfiguration("theme-pink-candy");

    const toggle: boolean | undefined = config.get(name);
    if (toggle === undefined) {
        info.appendLine(`ERROR: Could not find value of 'theme-pink-candy.${name}'`);
        return;
    }

    config.update(name, !toggle, true);
}

const toggleMutedMdCmd = vscode.commands.registerCommand("theme-pink-candy.toggleMutedMarkdown", () => {
    toggleBoolean("mutedMarkdown");
});
const toggleItalicCommentsCmd = vscode.commands.registerCommand("theme-pink-candy.toggleItalicComments", () => {
    toggleBoolean("italicComments");
});
const toggleAltCurrentLineCmd = vscode.commands.registerCommand("theme-pink-candy.toggleAltCurrentLine", () => {
    toggleBoolean("altCurrentLine");
});
const toggleAltInlayCmd = vscode.commands.registerCommand("theme-pink-candy.toggleAltInlay", () => {
    toggleBoolean("altInlay");
});
const toggleMonochromeBracketsCmd = vscode.commands.registerCommand("theme-pink-candy.toggleMonochromeBrackets", () => {
    toggleBoolean("monochromeBracketGuides")
});

export { toggleMutedMdCmd, toggleItalicCommentsCmd, toggleAltCurrentLineCmd, toggleAltInlayCmd, toggleMonochromeBracketsCmd };
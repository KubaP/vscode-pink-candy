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

async function pickInlayStyle() {
    const config = vscode.workspace.getConfiguration("theme-pink-candy");

    const style: string | undefined = config.get("inlayStyle");
    if (style === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.inlayStyle'");
        return;
    }

    // MAYBE: Replace this with the more advanced `window.createQuickPick` which allows setting the default
    // selected entry for example.

    // Note: The cases should match the configuration keys in `package.json`/`config.Style`.
    let placeHolder;
    switch (style) {
        case "noBackground": placeHolder = "Currently selected: No background"; break;
        case "faintBackground": placeHolder = "Currently selected: Faint background"; break;
        case "accent": placeHolder = "Currently selected: Accent text"; break;
        default: placeHolder = "Currently selected: Invalid";
    }

    // Note: The keys should match the configuration keys in `package.json`/`config.Style`.
    const options = [
        {
            label: "No background",
            detail: "No background behind the inlay hint.",
            key: "noBackground",
        },
        {
            label: "Faint background",
            detail: "A faint background behind the inlay hint.",
            key: "faintBackground",
        },
        {
            label: "Accent text",
            detail: "The inlay hint text has an accent colour and a faint background.",
            key: "accent",
        }
    ];

    try {
        const result = await vscode.window.showQuickPick(options, {
            title: "Select the inlay hint style",
            canPickMany: false,
            placeHolder,
            onDidSelectItem: () => { }
        });

        if (result === undefined) {
            // User quit the picker without selecting an option. Do nothing.
            return;
        }

        config.update("inlayStyle", result.key, true);
    } catch (err) {
        console.error(err);
    }
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
const toggleMonochromeBracketsCmd = vscode.commands.registerCommand("theme-pink-candy.toggleMonochromeBrackets", () => {
    toggleBoolean("monochromeBracketGuides")
});
const pickInlayStyleCmd = vscode.commands.registerCommand("theme-pink-candy.pickInlayStyle", () => {
    pickInlayStyle();
});

export { toggleMutedMdCmd, toggleItalicCommentsCmd, toggleAltCurrentLineCmd, toggleMonochromeBracketsCmd, pickInlayStyleCmd };
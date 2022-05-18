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

    const style: string | undefined = config.get("inlayHintStyle");
    if (style === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.inlayHintStyle'");
        return;
    }

    // MAYBE: Replace this with the more advanced `window.createQuickPick` which allows setting the default
    // selected entry for example.

    // Note: The cases should match the configuration keys in `package.json`/`config.InlayStyle`.
    let placeHolder;
    switch (style) {
        case "noBackground": placeHolder = "Currently selected: No background"; break;
        case "faintBackground": placeHolder = "Currently selected: Faint background"; break;
        case "accent": placeHolder = "Currently selected: Accent text"; break;
        default: placeHolder = "Currently selected: Invalid";
    }

    // Note: The keys should match the configuration keys in `package.json`/`config.InlayStyle`.
    const options = [
        {
            label: "No background",
            detail: "No background behind the inlay hint; this is the 'default' option.",
            key: "noBackground",
        },
        {
            label: "Faint background",
            detail: "A lightly shaded background behind the inlay hint for better contrast.",
            key: "faintBackground",
        },
        {
            label: "Accent text",
            detail: "An accent colour for the inlay hint text and a shaded background.",
            key: "accent",
        }
    ];

    try {
        const result = await vscode.window.showQuickPick(options, {
            title: "Select the appearance of inlay hints",
            canPickMany: false,
            placeHolder,
            onDidSelectItem: () => { }
        });

        if (result === undefined) {
            // User quit the picker without selecting an option. Do nothing.
            return;
        }

        config.update("inlayHintStyle", result.key, true);
    } catch (err) {
        console.error(err);
    }
}

const toggleMutedMdCmd = vscode.commands.registerCommand("theme-pink-candy.toggleMutedMarkdown", () => {
    toggleBoolean("mutedMarkdownPlaintext");
});
const toggleItalicCommentsCmd = vscode.commands.registerCommand("theme-pink-candy.toggleItalicComments", () => {
    toggleBoolean("italicizedComments");
});
const toggleAltCurrentLineCmd = vscode.commands.registerCommand("theme-pink-candy.toggleAltCurrentLine", () => {
    toggleBoolean("alternateCurrentLineStyle");
});
const toggleMonochromeBracketsCmd = vscode.commands.registerCommand("theme-pink-candy.toggleMonochromeBrackets", () => {
    toggleBoolean("monochromeBracketPairGuides")
});
const pickInlayStyleCmd = vscode.commands.registerCommand("theme-pink-candy.pickInlayStyle", () => {
    pickInlayStyle();
});

export { toggleMutedMdCmd, toggleItalicCommentsCmd, toggleAltCurrentLineCmd, toggleMonochromeBracketsCmd, pickInlayStyleCmd };
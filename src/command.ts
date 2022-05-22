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
            detail: "An accent colour for the inlay hint text.",
            key: "accent",
        },
        {
            label: "Accent text & faint background",
            detail: "An accent colour for the inlay hint text and shaded background.",
            key: "accentBackground",
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

async function pickGlobalAccent() {
    const config = vscode.workspace.getConfiguration("theme-pink-candy");

    const option: string | undefined = config.get("globalAccent");
    if (option === undefined) {
        info.appendLine("ERROR: Could not find value of 'theme-pink-candy.globalAccent'");
        return;
    }

    // MAYBE: Replace this with the more advanced `window.createQuickPick` which allows setting the default
    // selected entry for example.

    // Note: The cases should match the configuration keys in `package.json`/`config.Accent`.
    let placeHolder;
    switch (option) {
        case "default": placeHolder = "Currently selected: Default"; break;
        case "disabledStatusBar": placeHolder = "Currently selected: Disabled for the status bar"; break;
        case "minimal": placeHolder = "Currently selected: Minimal"; break;
        default: placeHolder = "Currently selected: Invalid";
    }

    // Note: The keys should match the configuration keys in `package.json`/`config.Accent`.
    const options = [
        {
            label: "Default",
            detail: "The accent colours are used everywhere; this is the 'default' option.",
            key: "default",
        },
        {
            label: "Disabled for the status bar",
            detail: "The accent colours are used everywhere _but_ on the status bar.",
            key: "disabledStatusBar",
        },
        {
            label: "Minimal",
            detail: "The accent colours are used only in a select few cases, such as buttons, links, important text, small decorations, etc.",
            key: "minimal",
        }
    ];

    try {
        const result = await vscode.window.showQuickPick(options, {
            title: "Select where the accent colours are used",
            canPickMany: false,
            placeHolder,
            onDidSelectItem: () => { }
        });

        if (result === undefined) {
            // User quit the picker without selecting an option. Do nothing.
            return;
        }

        config.update("globalAccent", result.key, true);
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
const pickGlobalAccentCmd = vscode.commands.registerCommand("theme-pink-candy.pickGlobalAccent", () => {
    pickGlobalAccent();
})

export { toggleMutedMdCmd, toggleItalicCommentsCmd, toggleAltCurrentLineCmd, toggleMonochromeBracketsCmd, pickInlayStyleCmd, pickGlobalAccentCmd };
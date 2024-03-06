import * as config from "./config";
import * as vscode from "vscode";

/**
 * Resets all extension settings.
 */
export const resetCmd = vscode.commands.registerCommand(
	"theme-pink-candy.restoreDefaultConfig",
	() => {
		config.resetConfig();
	}
);

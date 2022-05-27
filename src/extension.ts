// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

import { getConfig } from "./config";
import * as command from "./command";
import { showReloadConfirmation, showReloadOnLoadConfirmation } from "./message";
import { createThemes } from "./theme";
import * as path from "path";

// Location of the `$root/themes` folder.
const themeFolder = path.join(__dirname, "..", "themes");

// This method is called when your extension is activated.
export function activate(context: vscode.ExtensionContext) {
	// Register all of the commands.
	context.subscriptions.push(command.resetCmd);

	const config = getConfig();
	if (config.isModified()) {
		// The configuration must have been modified whilst vscode was not open.
		//
		// Write the modified configuration options back to the cache and re-create the theme files.
		config.writeToCache();
		createThemes(config, themeFolder);

		// Unlike with icon themes, proper workbench/syntax themes are not reloaded upon modification of the theme
		// files, so we must force vscode to reload to see the changes.
		showReloadOnLoadConfirmation();
	}

	vscode.workspace.onDidChangeConfiguration(onConfigChange);
}

/**
 * Runs whenever the vscode configuration changes.
 */
function onConfigChange(e: vscode.ConfigurationChangeEvent) {
	// Ignore configuration changes that aren't related to our theme.
	if (!e.affectsConfiguration("theme-pink-candy")) {
		return;
	}

	// Read the up-to-date configuration options, write any modifications to the cache, and re-create the theme
	// files.
	const config = getConfig();
	config.writeToCache();
	createThemes(config, themeFolder);

	// Unlike with icon themes, proper workbench/syntax themes are not reloaded upon modification of the theme
	// files, so we must force vscode to reload to see the changes.
	showReloadConfirmation();
}

// Output channel used for debugging.
//export let info = vscode.window.createOutputChannel("Pink Candy INFO");

// This method is called when your extension is deactivated.
export function deactivate() {}

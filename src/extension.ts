// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { createThemes } from './theme';
import * as command from './command';
import { getConfig } from './config';

// This method is called when your extension is activated.
export function activate(context: vscode.ExtensionContext) {

	// Register all of the commands.
	context.subscriptions.push(command.toggleMutedMdCmd);
	context.subscriptions.push(command.toggleItalicCommentsCmd);
	context.subscriptions.push(command.toggleAltCurrentLineCmd);
	context.subscriptions.push(command.toggleMonochromeBracketsCmd);
	context.subscriptions.push(command.pickInlayStyleCmd);
	context.subscriptions.push(command.pickGlobalAccentCmd);

	vscode.workspace.onDidChangeConfiguration(onConfigChange)

	// Re-create the theme files, in case the configuration was changed whilst vscode was not open.
	const config = getConfig();
	createThemes(config);
}

/**
 * Runs whenever the vscode configuration changes.
 */
function onConfigChange(e: vscode.ConfigurationChangeEvent) {
	// Ignore configuration changes that aren't related to our theme.
	if (!e.affectsConfiguration("theme-pink-candy")) {
		return;
	}

	// Read the up-to-date configuration options, and re-create the theme files.
	const config = getConfig();
	createThemes(config);
}

// Output channel used for debugging.
//export let info = vscode.window.createOutputChannel("Pink Candy INFO");

// This method is called when your extension is deactivated.
export function deactivate() { }

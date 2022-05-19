// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { createThemes } from './theme';
import * as command from './command';
import { getConfig } from './config';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "t" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('t.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from t!');
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(command.toggleMutedMdCmd);
	context.subscriptions.push(command.toggleItalicCommentsCmd);
	context.subscriptions.push(command.toggleAltCurrentLineCmd);
	context.subscriptions.push(command.toggleMonochromeBracketsCmd);
	context.subscriptions.push(command.pickInlayStyleCmd);
	context.subscriptions.push(command.pickGlobalAccentCmd);
	vscode.workspace.onDidChangeConfiguration(onConfigChange)

	const config = getConfig();
	createThemes(config);
}

export let info = vscode.window.createOutputChannel("Pink Candy INFO");

function onConfigChange(e: vscode.ConfigurationChangeEvent) {
	// Ignore configuration changes that aren't related to our theme.
	if (!e.affectsConfiguration("theme-pink-candy")) {
		return;
	}

	const config = getConfig();
	createThemes(config);
}

// this method is called when your extension is deactivated
export function deactivate() { }

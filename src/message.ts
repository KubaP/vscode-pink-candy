import * as vscode from "vscode";

export function showReloadConfirmation() {
	vscode.window
		.showInformationMessage("You need to reload VS Code to see the changes.", "Reload")
		.then((button) => {
			if (button == "Reload") {
				vscode.commands.executeCommand("workbench.action.reloadWindow");
			}
		});
}

export function showReloadOnLoadConfirmation() {
	vscode.window
		.showInformationMessage(
			"Detected new changes in the Pink Candy Theme configuration since the last time VS Code was open. You need to reload VS Code to see the changes.",
			"Reload"
		)
		.then((button) => {
			if (button == "Reload") {
				vscode.commands.executeCommand("workbench.action.reloadWindow");
			}
		});
}

import * as vscode from "vscode";
import * as config from "./config";

// NOTE: About configuration commands
//
// Commands which would make it easy to toggle theme options are unviable. They exhibit a race condition which
// makes them work correctly only about half of the time. Hence, I've had to scrap that idea.
//
// The idea behind the commands was that you can quickly toggle an option and vscode will reload immediately. This
// is much faster than having to open the Settings Pane, navigate to the appropriate section, and click on the
// toggles. Of course, the best solution would be to have vscode automatically reload themes when the files are
// modified, but that seems to only be a thing when you're debugging themes.
//
// The "race condition" that occurred was the following:
//     A command is ran
//     It writes to the vscode configuration to toggle the option key
//     The writing to the configuration triggers the onChange handler (which is necessary to react to settings page
//     changes)
//     The handler reads the old configuration values
//     The handler generates the new theme files and updates the cache with the old values
//     The new value only now get's written
//
// A possible solution would be a `setTimeOut()` in the handler. However, I tried it with a duration of 1000ms and
// it still wasn't enough to deal with this 100% of the time, and any longer and the delay lags too much when you
// change an option through the settings pane.

const resetCmd = vscode.commands.registerCommand("theme-pink-candy.restoreDefaultConfig", () => {
	config.resetConfig();
});

export { resetCmd };

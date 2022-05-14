// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from "path";
import * as fs from "fs";

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
	createTheme();
}

// this method is called when your extension is deactivated
export function deactivate() { }

function createTheme() {
	const jsonPath = path.join(__dirname, "..", "themes", "test.json");

	const theme = generateTheme(lightColors, "TEST", "light");

	return new Promise((resolve, reject) => {
		fs.writeFile(jsonPath, JSON.stringify(theme, undefined, 4), (err) => {
			err ? reject(err) : resolve(true)
		})
	});
}

const lightColors = {
	// Note: All non-alpha backgrounds are based on `primaryBg`.

	text: {
		normal: "#565869",

		// Text editor line numbers, suggestion ghost text, inactive tabs,
		muted: "#ADB1C2",

		// Breadcrumbs, general descriptions, unfocused titlebar,
		light: "#999999",

		// Status bar foreground, intellisense matching letters, intellisense selected foreground, button text,
		// list selected text, badge foreground, command bar selected foreground, menu selected text, banner text,
		// 
		inverse: "#FFFFFF",

		// Peek view title, peek view filenames,
		emphasised: "#000000",

		// Unnecessary text editor text,
		faded: "#000000C0",

		decoration: {
			// Indentation guides, whitespace chars, rulers,
			light: "#CECECE",
			// Current indentation guide, matching bracket border,
			dark: "#AAAAAA",
			// Codelens
			codelens: "#747474",
		},

		// Text editor current line, text editor folded line, hover over symbol background box,
		currentLine: "#00000007",

		// General selection box background, input option, text editor selection boxes, terminal selection,
		selectionBg: "#FBE3EE",
		selectionBgA: "#FF12771A",
		// Unfocused text editor selection boxes,
		secondarySelectionBgA: "#FF127710",

		// Tabstop box backgrounds,
		tabstopBgA: "#FF12776A",

		// Text editor & terminal highlight boxes, line background, search sidebar,
		// peek view match highlight boxes, list filter match highlight boxes,
		matchBg: "#F7F9CB",
		matchBgA: "#EFF3283A",
		matchBorder: "#11C678",
		matchBorderA: "#11C67820",
	},

	// Cursor, editor line number, breadcrumbs focus text/background, intellisense widget matching text,
	// intellisense widget selected background, peek view selected background, focused borders, button background,
	// checkbox tick, list selected background, progress bar, badge background, focused tab indicator,
	// activity bar drop border, activity bar active icon, modified setting indicator,  active panel indicator, 
	// command bar selected background, menu selected background, border drag, banner background,
	// status bar background, terminal cursor,
	primary: "#FF1277",
	primaryHover: "#DA005F",

	// Text editor, gutter, minimap, breadcrumbs, peek view text editor, empty editor group, panel, terminal,
	// active tab, hover tab, zen mode sides, activity bar, welcome page, tutorial page, notifications,
	// drag-and-drop prompt,
	primaryBg: "#FAFBFC",

	diag: {
		// Ruler/minimap decorations, underline squiggles, error lens foregrounds, problem panel icons,
		// input validation foregrounds, notification icons, testing message foregrounds, peek view widget text,
		selection: "#FBCEE2", // +(list selected background)
		match: "#F0E657",
		bracket: "#7777775A", // bracket match
		hint: "#11C678",
		info: "#00B7E4", // +(peek view)
		warning: "#FF942F", // +(list warning foreground)
		error: "#FF1277", // +(general error text foreground, bracket foreground mismatch, list error foreground, confusing unicode highlighting)

		// Error lens line backgrounds, testing message backgrounds, peek view backgrounds,
		// input validation backgrounds,
		hintBg: "#DCF5EB",
		hintBgA: "#11C67820",
		infoBg: "#DAF3F9",
		infoBgA: "#00B7E420",
		warningBg: "#FBEEE1",
		warningBgA: "#FF942F20",
		errorBg: "#FBE3EE",
		errorBgA: "#FF12771A",

		// Testing icons,
		testPassed: "#11C678",
		testQueued: "#00B7E4",
		testFailed: "#FF1277",
		testUnset: "#FF942F",
		testSkipped: "#ADB1C2",
	},

	git: {
		// File names, ruler/gutter/minimap decorations (where relevant),
		addedOrStaged: "#11C678",
		modified: "#00B7E4",
		renamed: "#13BBB7",
		untracked: "#C75AF3",
		removedOrConflicting: "#FF1277",
		ignoredOrSubmodule: "#ADB1C2",

		// Diff viewer line backgrounds,
		insertedBgA: "#11C6782A",
		removedBgA: "#FF127720",
		diffDiagonal: "#ADB1C2AA",

		// Conflict viewer ruler decorations,
		current: "#11C678",
		incoming: "#00B7E4",
		// Conflict viewer line backgrounds,
		currentBgA: "#11C6782A",
		currentHeaderBgA: "#11C6786A",
		incomingBgA: "#09A1ED2A",
		incomingHeaderBgA: "#09A1ED6A",
	},

	debug: {
		// Debug toolbar icons.
		start: "#11C678",
		pause: "#FF942F",
		step: "#00B7E4",
		stop: "#FF1277",

		// Gutter breakpoints.
		breakpoint: "#FF1277",
		breakpointDisabled: "#ADB1C2",

		// Exception widget background.
		exceptionBg: "#F7F9CB",
	},

	terminal: {
		// Command decoration icons,
		default: "#ADB1C2",
		success: "#11C678",
		error: "#FF1277",

		background: "#FAFBFC",
		foreground: "#333333", // 0m (foreground)
		ansiBlack: "#000", // 30m
		ansiBrightBlack: "#666", // 30;1m
		ansiWhite: "#FAFBFC", //37m (background)
		ansiBrightWhite: "#000", // (technicall 37;1m but vscode also applies this to just bold 1m)
		ansiBlue: "#09A1ED",
		ansiBrightBlue: "#41b9ff",
		ansiCyan: "#13BBB7",
		ansiBrightCyan: "#16dad6",
		ansiGreen: "#2DAE58",
		ansiBrightGreen: "#25da6a",
		ansiYellow: "#CF9C00",
		ansiBrightYellow: "#ffc104",
		ansiRed: "#ff0046",
		ansiBrightRed: "#ff2e87",
		ansiMagenta: "#c75af3",
		ansiBrightMagenta: "#c010ef",
	},

	ui: {
		// Widgets, find & replace pop-up, peek view list, inactive tab, tab header, sidebar,
		// panel section headers, debug toolbar (+border), notification centre header, command bar,
		// titlebar, drag prompt,
		secondaryBg: "#F3F3F3",

		// Sidebar section headers, widget status bar,
		tertiaryBg: "#E5E5E5",

		// Breadcrumbs, menus, any buttons which dropdown etc,
		dropdownBg: "#FAFBFC",

		// Checkbox, dropdown (+list), text input,
		inputBg: "#FFFFFF",

		// Editor groups, sidebar panes, panels, 
		primaryDropBg: "#FF12771A",

		// Panel, panel section header, terminal, settings page, peek view, sidebar, text input, tab groups,
		// dropdown, checkbox, hover widgets, exception widget, ruler, drag prompt,
		border: "#CECECE",

		// Command bar, notifications,
		secondaryBorder: "#D0D1D2",

		// Menu separator
		separator: "#CECECE",

		tabSeparator: "#999999",

		// Input foreground,
		placeholderText: "#CECECE",

		codeblock: "#09A1ED",

		// Normal links, notification links, text editor ctrl+click symbol,
		link: "#FF1277",
		linkHover: "#DA005F",

		// Button background, remote status button background,
		secondary: "#09A1ED",
		secondaryHover: "#0784C2",

		// Hover/active button overlays,
		hoverBgA: "#0000001A",
		activeBgA: "#0000002A",

		// Hover/selected list overlay,
		listHoverBgA: "#0000001A",
		listInactiveBgA: "#FF12771A",
		// Tree indent guide,
		treeIndent: "#D0D1D2",

		// Scrollbar/minimap handle overlays,
		scrollBgA: "#00000010",
		scrollHoverBgA: "#0000001F",
		scrollActiveBgA: "#0000002F",

		// Shadow whenever some scrollable element is scrolled, shadows around widgets,
		shadow: "#0000002F",

		// Status bar during debugging,
		statusDebugBg: "#11C678",
		// Status bar when no folder is open,
		statusEmptyBg: "#E5E5E5",
		// Hover/active button overlays,
		statusHoverBgA: "#0000002F",
		statusActiveBgA: "#0000004F",

		// Unfocused active tab indicator,
		unfocusedTab: "#FFA2CA",

		// Inactive icons,
		activityBarInactive: "#BFC0C7",

		// Code actions icon,
		lightBulb: "#FFC104",

		// Extension badge icons,
		star: "#FFC104",
		remote: "#09A1ED",
		verified: "#11C678",
		prerelease: "#FF942F",

		// Chart colours,
		chartLine: "#333333",
		chartBlue: "#09A1ED",
		chartGreen: "#2DAE58",
		chartYellow: "#CF9C00",
		chartOrange: "#f77708",
		chartRed: "#ff0046",
		chartPurple: "#c75af3",
	},

	gitGraph: [
		"#F767BB",
		"#09A1ED",
		"#2DAE58",
		"#CF9C00",
		"#FF5C57",
		"#CD6BF4",
		"#A8759A",
		"#6E82A6",
		"#13BBB7",
		"#8CBA10"
	],

	todo: {
		todo: "#565869",
		fixme: "#FF5C57",
		bug: "#ff1277",
		hack: "#CF9C00",
		maybe: "#13BBB7",
		unchecked: "#565869",
		checked: "#2DAE58",
	}
};

function generateTheme(color: any, name: string, type: string) {
	return {
		name: name,
		type: type,
		colors: {
			// EDITOR
			// Basics
			"editor.foreground": color.text.normal,
			"editor.background": color.primaryBg,
			"errorForeground": color.diag.error,
			"editorUnicodeHighlight.border": color.diag.error, // Highlight potentially confusing unicode characters.
			"editorUnicodeHighlight.background": color.diag.errorBgA,
			"widget.shadow": color.ui.shadow,
			//
			// Cursor/line
			"editorCursor.foreground": color.primary,
			"editorCursor.background": color.text.inverse, // Colour of a character when using block cursor.
			"editor.lineHighlightBackground": color.text.currentLine, // Current line background colour.
			"editor.lineHighlightBorder": "#00000000", // Remove current line border.
			"editorLineNumber.foreground": color.text.muted, // Line number colour in the gutter.
			"editorLineNumber.activeForeground": color.primary, // Current line number colour in the gutter.
			"editor.foldBackground": color.text.currentLine, // Colour of a line containing a folded range.
			"editor.hoverHighlightBackground": color.text.currentLine, // Background when hovering over a symbol.
			//
			// Text selection boxes/ranges
			"editor.selectionBackground": color.text.selectionBgA, // Background of selected text.
			//"editor.selectionForeground": "",
			"editor.inactiveSelectionBackground": color.text.secondarySelectionBgA, // Background of selection when editor not focused.
			"editor.selectionHighlightBackground": color.text.selectionBgA, // Background of matching text.
			//"editor.selectionHighlightBorder": "",
			//
			// Symbol selection boxes/ranges
			"editor.wordHighlightBackground": color.text.selectionBgA, // Background for selected symbol.
			//"editor.wordHighlightBorder": "",
			"editor.wordHighlightStrongBackground": color.text.selectionBgA, // Background of matching symbol.
			//"editor.wordHighlightStrongBorder": "",
			//
			// Search highlight boxes
			"editor.findMatchBackground": "#00000000", // Currently selected found match. Set to 0 so that it doesn't multiple with findMatchHighlightBackground.
			"editor.findMatchBorder": color.text.matchBorderA,
			"editor.findMatchHighlightBackground": color.text.matchBgA, // Other found matches.
			//"editor.findMatchHighlightBorder": "",
			"editor.findRangeHighlightBackground": color.text.secondarySelectionBgA, // Colour of the range of the current search.
			//"editor.findRangeHighlightBorder": "",
			//
			// Within the "search editor"
			"searchEditor.findMatchBackground": color.text.matchBgA,
			"searchEditor.findMatchBorder": color.text.matchBorderA,
			//"searchEditor.textInputBorder": "",
			//
			// Highlight colour of line containing found matching text.
			"editor.rangeHighlightBackground": color.text.matchBgA,
			//"editor.rangeHighlightBorder": "",
			"editor.symbolHighlightBackground": color.text.matchBgA, // ???
			//"editor.symbolHighlightBorder": "",
			//
			// Matching brackets
			"editorBracketMatch.border": color.text.decoration.dark, // Border around matching brackets.
			"editorBracketMatch.background": "#00000000", // Remove match background.
			//
			// Bracket pair colours
			"editorBracketHighlight.foreground1": "#2faf64",
			"editorBracketHighlight.foreground2": "#00b7e4",
			"editorBracketHighlight.foreground3": "#a8759a",
			"editorBracketHighlight.foreground4": "#CF9C00",
			"editorBracketHighlight.foreground5": "#FF5C57",
			"editorBracketHighlight.foreground6": "#c75af3",
			"editorBracketHighlight.unexpectedBracket.foreground": color.diag.error,
			"editorBracketPairGuide.foreground1": "#2faf64",
			"editorBracketPairGuide.foreground2": "#00b7e4",
			"editorBracketPairGuide.foreground3": "#a8759a",
			"editorBracketPairGuide.foreground4": "#CF9C00",
			"editorBracketPairGuide.foreground5": "#FF5C57",
			"editorBracketPairGuide.foreground6": "#c75af3",
			//
			// Inlay hints
			"editorInlayHint.foreground": color.text.decoration.codelens,
			"editorInlayHint.background": "#00000000",
			"editorInlayHint.typeForeground": color.text.decoration.codelens,
			"editorInlayHint.typeBackground": "#00000000",
			"editorInlayHint.parameterForeground": color.text.decoration.codelens,
			"editorInlayHint.parameterBackground": "#00000000",
			"rust_analyzer.inlayHints.foreground": color.text.decoration.codelens,
			"rust_analyzer.inlayHints.background": "#00000000",
			"rust_analyzer.inlayHints.foreground.typeHints": color.text.decoration.codelens,
			"rust_analyzer.inlayHints.background.typeHints": "#00000000",
			"rust_analyzer.inlayHints.foreground.chainingHints": color.text.decoration.codelens,
			"rust_analyzer.inlayHints.background.chainingHints": "#00000000",
			"rust_analyzer.inlayHints.foreground.parameterHints": color.text.decoration.codelens,
			"rust_analyzer.inlayHints.background.parameterHints": "#00000000",
			"editorCodeLens.foreground": color.text.decoration.codelens,
			// Debug inlay hints
			//"editor.inlineValuesForeground": "",
			//"editor.inlineValuesBackground": "#00000000",
			//
			// Whitespace and indentation
			"editorWhitespace.foreground": color.text.decoration.light,
			"editorIndentGuide.background": color.text.decoration.light,
			"editorIndentGuide.activeBackground": color.text.decoration.dark,
			"editorRuler.foreground": color.text.decoration.light,
			//
			// Ghost text
			"editorGhostText.foreground": color.text.muted, // Inline completion text.
			//"editorGhostText.border": "",
			//
			// Other
			"editorLink.activeForeground": color.ui.link, // When ctrl+hovering over a symbol.
			"editorLightBulb.foreground": color.ui.lightBulb, // Colour of the light-bulb.
			"editorLightBulbAutoFix.foreground": color.ui.lightBulb, // ???
			//
			//
			//
			// SNIPPETS [x]
			"editor.snippetTabstopHighlightBackground": color.text.tabstopBgA,
			//"editor.snippetTabstopHighlightBorder": "",
			"editor.snippetFinalTabstopHighlightBackground": color.text.tabstopBgA,
			//"editor.snippetFinalTabstopHighlightBorder": "",
			//
			// ERRORS/WARNINGS/INFO [x]
			"editorHint.foreground": color.diag.hint, // Hint squiggle
			//"editorHint.border": "",
			"editorInfo.foreground": color.diag.info, // Info squiggle
			//"editorInfo.border": "",
			//"editorInfo.background": "",
			"editorWarning.foreground": color.diag.warning, // Warning squiggle
			//"editorWarning.border": "",
			//"editorWarning.background": "",
			"editorError.foreground": color.diag.error, // Error squiggle
			//"editorError.border": "",
			//"editorError.background": "",
			"editorUnnecessaryCode.opacity": color.text.faded, // Unused symbols/text - 75% opacity.
			//"editorUnnecessaryCode.border": "",
			"problemsInfoIcon.foreground": color.diag.info, // Icons, e.g. symbols in problem panel
			"problemsWarningIcon.foreground": color.diag.warning,
			"problemsErrorIcon.foreground": color.diag.error,
			//
			// ERROR LENS [x]
			"errorLens.infoForegroundLight": color.diag.info,
			"errorLens.infoBackgroundLight": color.diag.infoBgA,
			"errorLens.hintForegroundLight": color.diag.hint,
			"errorLens.hintBackgroundLight": color.diag.hintBgA,
			"errorLens.warningForegroundLight": color.diag.warning,
			"errorLens.warningBackgroundLight": color.diag.warningBgA,
			"errorLens.errorForegroundLight": color.diag.error,
			"errorLens.errorBackgroundLight": color.diag.errorBgA,
			"errorLens.statusBarIconWarningForeground": color.text.inverse,
			"errorLens.statusBarIconErrorForeground": color.text.inverse,
			"errorLens.statusBarInfoForeground": color.text.inverse,
			"errorLens.statusBarHintForeground": color.text.inverse,
			"errorLens.statusBarWarningForeground": color.text.inverse,
			"errorLens.statusBarErrorForeground": color.text.inverse,
			"errorLens.infoGutterIconColor": color.diag.info,
			"errorLens.warningGutterIconColor": color.diag.warning,
			"errorLens.errorGutterIconColor": color.diag.error,
			//
			// RULER [x]
			//"editorOverviewRuler.background": "",
			"editorOverviewRuler.border": color.ui.border, // Border between scroll-bar and editor.
			"editorOverviewRuler.findMatchForeground": color.diag.match, // Matching text through find/replace.
			"editorOverviewRuler.rangeHighlightForeground": color.text.secondarySelectionBgA, // Range of selected symbol, e.g. picking symbol with @NAME
			"editorOverviewRuler.selectionHighlightForeground": color.diag.selection, // Symbol at current cursor position..
			"editorOverviewRuler.wordHighlightForeground": color.diag.selection, // Matching symbol at position.
			"editorOverviewRuler.wordHighlightStrongForeground": color.diag.selection, // ???
			"editorOverviewRuler.bracketMatchForeground": color.diag.bracket,
			"editorOverviewRuler.addedForeground": color.git.addedOrStaged,
			"editorOverviewRuler.modifiedForeground": color.git.modified,
			"editorOverviewRuler.deletedForeground": color.git.removedOrConflicting,
			"editorOverviewRuler.infoForeground": color.diag.info,
			"editorOverviewRuler.warningForeground": color.diag.warning,
			"editorOverviewRuler.errorForeground": color.diag.error,
			//
			// GUTTER [x]
			// TODO: Gutter - pull request comment annotations
			"editorGutter.background": color.primaryBg,
			"editorGutter.addedBackground": color.git.addedOrStaged, // Added strip.
			"editorGutter.modifiedBackground": color.git.modified, // Modified strip.
			"editorGutter.deletedBackground": color.git.removedOrConflicting, // Removed mark.
			"editorGutter.commentRangeForeground": color.text.muted, // ???
			//"editorGutter.foldingControlForeground": "", // Arrow for folding code ranges.
			//
			// MINIMAP [x]
			"minimap.background": color.primaryBg,
			//"minimap.foregroundOpacity": "", // ???
			"minimap.selectionHighlight": color.diag.selection, // Selection & current line
			"minimap.findMatchHighlight": color.diag.match, // Matching lines from find/replace.
			"minimap.errorHighlight": color.diag.error,
			"minimap.warningHighlight": color.diag.warning,
			//"minimap.selectionOccurrenceHighlight": "", // ???
			"minimapSlider.background": color.ui.scrollBgA, // Slider
			"minimapSlider.hoverBackground": color.ui.scrollHoverBgA, // Slider hover
			"minimapSlider.activeBackground": color.ui.scrollActiveBgA, // Slider held-down
			"minimapGutter.addedBackground": color.git.addedOrStaged,
			"minimapGutter.modifiedBackground": color.git.modified,
			"minimapGutter.deletedBackground": color.git.removedOrConflicting,
			//
			// BREADCRUMBS [x]
			"breadcrumb.foreground": color.text.light,
			"breadcrumb.background": color.primaryBg,
			"breadcrumb.focusForeground": color.primary,
			"breadcrumb.activeSelectionForeground": color.primary,
			"breadcrumbPicker.background": color.ui.dropdownBg,
			// WIDGETS [x], 
			// Pop-up widgets, e.g. find & replace dialogue.
			"editorWidget.foreground": color.text.normal, // All text.
			"editorWidget.background": color.ui.secondaryBg,
			"editorWidget.border": color.ui.border, // Horizontal line on the left of the widget.
			"editorWidget.resizeBorder": color.ui.border,
			// Intellisense widget
			"editorSuggestWidget.foreground": color.text.normal, // All text.
			"editorSuggestWidget.background": color.ui.secondaryBg,
			"editorSuggestWidget.border": color.ui.border,
			"editorSuggestWidget.highlightForeground": color.primary, // Matching letters in other entries.
			"editorSuggestWidget.focusHighlightForeground": color.text.inverse, // Matching letters in currently selected entry.
			"editorSuggestWidget.selectedBackground": color.primary, // Background of selected entry.
			"editorSuggestWidget.selectedForeground": color.text.inverse, // Text in selected entry.
			"editorSuggestWidget.selectedIconForeground": color.text.inverse, // Icon in selected entry.
			// Hover/documentation widget
			"editorHoverWidget.foreground": color.text.normal,
			"editorHoverWidget.background": color.ui.secondaryBg,
			"editorHoverWidget.border": color.ui.border,
			"editorHoverWidget.highlightForeground": color.ui.secondary, // ???
			"editorHoverWidget.statusBarBackground": color.ui.tertiaryBg, // The bottom bar, e.g. `View problem, no fixes available`
			// Debug Exception widget
			"debugExceptionWidget.background": color.debug.exceptionBg,
			"debugExceptionWidget.border": color.ui.border,
			// Peek view errors/warnings
			"editorMarkerNavigation.background": color.primaryBg,
			"editorMarkerNavigationInfo.background": color.diag.info,
			"editorMarkerNavigationInfo.headerBackground": color.diag.infoBg,
			"editorMarkerNavigationWarning.background": color.diag.warning,
			"editorMarkerNavigationWarning.headerBackground": color.diag.warningBg,
			"editorMarkerNavigationError.background": color.diag.error,
			"editorMarkerNavigationError.headerBackground": color.diag.errorBg,
			// Peek view normal
			"peekViewEditor.background": color.primaryBg,
			"peekViewEditor.matchHighlightBackground": color.text.matchBg, // Matching text in symbol.
			"peekViewEditor.matchHighlightBorder": color.text.matchBorderA, // Matching text border.
			"peekViewEditorGutter.background": color.primaryBg,
			"peekViewResult.background": color.ui.secondaryBg,
			"peekViewResult.fileForeground": color.text.emphasised, // File header text.
			"peekViewResult.lineForeground": color.text.normal, // Symbol text.
			"peekViewResult.selectionForeground": color.text.emphasised, // Clicked entry.
			"peekViewResult.selectionBackground": color.primary, // Clicked entry.
			"peekViewResult.matchHighlightBackground": color.text.matchBg, // Matching text in symbol.
			"peekView.border": color.diag.info,
			"peekViewTitle.background": color.diag.infoBg,
			"peekViewTitleLabel.foreground": color.text.emphasised,
			"peekViewTitleDescription.foreground": color.text.normal,
			//
			// DIFF VIEWER [x]
			"diffEditor.insertedTextBackground": color.git.insertedBgA,
			//"diffEditor.insertedTextBorder": "",
			"diffEditor.removedTextBackground": color.git.removedBgA,
			//"diffEditor.removedTextBorder": "",
			"diffEditor.border": color.ui.border, // Border between the two diff viewers.
			"diffEditor.diagonalFill": color.git.diffDiagonal, // Diagonal hatchings for differences.
			//
			// MERGE CONFLICT VIEWER [x]
			"merge.currentHeaderBackground": color.git.currentHeaderBgA,
			"merge.currentContentBackground": color.git.currentBgA,
			"merge.incomingHeaderBackground": color.git.incomingHeaderBgA,
			"merge.incomingContentBackground": color.git.incomingBgA,
			"merge.border": color.ui.border,
			//"merge.commonContentBackground": "",
			//"merge.commonHeaderBackground": "",
			"editorOverviewRuler.currentContentForeground": color.git.current,
			"editorOverviewRuler.incomingContentForeground": color.git.incoming,
			//"editorOverviewRuler.commonContentForeground": "",
			//
			//
			//
			// GENERAL TEXT
			"textLink.foreground": color.ui.link, // Link colour.
			"textLink.activeForeground": color.ui.linkHover, // Link hover/active colour.
			"descriptionForeground": color.text.light,
			"textPreformat.foreground": color.ui.codeblock, // Code block text
			//
			// SELECTION
			"focusBorder": color.primary, // Border colour of focused panes/panels.
			"selection.background": color.text.selectionBg,
			//
			// BUTTONS [x]
			"button.foreground": color.text.inverse,
			"button.background": color.primary,
			"button.hoverBackground": color.primaryHover,
			"button.secondaryForeground": color.text.inverse, // Secondary button, e.g. `Cancel` on a delete file dialogue.
			"button.secondaryBackground": color.ui.secondary,
			"button.secondaryHoverBackground": color.ui.secondaryHover,
			//"button.border": "",
			"checkbox.foreground": color.primary, // Colour of the tick itself.
			"checkbox.background": color.ui.inputBg,
			"checkbox.border": color.ui.border,
			// All sorts of buttons everywhere, e.g. the little `...`, or the `show diff`, or the `vcs commit` buttons.
			"toolbar.hoverBackground": color.ui.hoverBgA,
			"toolbar.activeBackground": color.ui.activeBgA,
			"icon.foreground": color.text.normal, // All sorts of icons/buttons everywhere.
			//"toolbar.hoverOutline": "",
			//
			// DROPDOWNS [x]
			"dropdown.background": color.ui.inputBg, // Background of dropdown that's not open.
			"dropdown.listBackground": color.ui.inputBg, // Background of the list that opens.
			"dropdown.foreground": color.text.normal, // All text.
			"dropdown.border": color.ui.border,
			//
			// LISTS [x]
			"list.activeSelectionBackground": color.primary,
			"list.activeSelectionForeground": color.ui.inputBg,
			"list.activeSelectionIconForeground": color.ui.inputBg, // Doesn't work?
			//"list.focusOutline": "", // Outline of focused entry in list.
			"list.focusBackground": color.diag.selection, // Background colour of a focused list entry when searching & matching.
			"list.focusForeground": color.text.normal, // Text colour of a focused list entry when searching & matching.
			"list.highlightForeground": color.text.normal, // E.g. matching text in the command palette.
			"list.focusHighlightForeground": color.text.inverse, // E.g. matching text in the currently selected entry in the command palette.
			// Un-focused list
			"list.inactiveSelectionBackground": color.ui.listInactiveBgA, // Colour of a selected item when the list is not actively selected.
			//"list.inactiveSelectionForeground": "",
			//"list.inactiveSelectionIconForeground": "",
			//"list.inactiveFocusOutline": "", //
			"list.inactiveFocusBackground": color.diag.selection, // ???
			// Other
			"list.dropBackground": color.ui.primaryDropBg,
			"list.hoverBackground": color.ui.listHoverBgA, // Background on individual entry on hover.
			"list.errorForeground": color.diag.error, // Text colour when there's an error.
			"list.warningForeground": color.diag.warning, // Text colour when there's a warning.
			"list.deemphasizedForeground": color.text.muted,
			"list.invalidItemForeground": color.diag.error, // Some error in the list.
			// Filter
			"listFilterWidget.background": color.text.matchBg, // The little pop-up when you start typing (searching) in a tree view.
			"listFilterWidget.outline": color.ui.border,
			"listFilterWidget.noMatchesOutline": color.diag.error,
			"list.filterMatchBackground": color.text.matchBg, // Background of list entries which match the filter.
			"list.filterMatchBorder": color.text.matchBorder,
			"tree.indentGuidesStroke": color.ui.treeIndent,
			"tree.tableColumnsBorder": color.ui.border,
			//
			// INPUT FIELDS [x]
			"input.border": color.ui.border,
			"input.foreground": color.text.normal,
			"input.background": color.ui.inputBg,
			"input.placeholderForeground": color.ui.placeholderText,
			"inputOption.activeBackground": color.text.selectionBg,
			//"inputOption.activeForeground": "#",
			//"inputOption.activeBorder": "",
			"inputValidation.infoForeground": color.diag.info,
			"inputValidation.infoBackground": color.diag.infoBg,
			"inputValidation.infoBorder": color.diag.info,
			"inputValidation.warningForeground": color.diag.warning,
			"inputValidation.warningBackground": color.diag.warningBg,
			"inputValidation.warningBorder": color.diag.warning,
			"inputValidation.errorForeground": color.diag.error,
			"inputValidation.errorBackground": color.diag.errorBg,
			"inputValidation.errorBorder": color.diag.error,
			//
			// SCROLLBAR [x]
			"scrollbar.shadow": color.ui.shadow, // General shadow when scrollable element is moved up.
			"scrollbarSlider.background": color.ui.scrollBgA, // Handle when mouse is in the pane.
			"scrollbarSlider.hoverBackground": color.ui.scrollHoverBgA, // Mouse-over.
			"scrollbarSlider.activeBackground": color.ui.scrollActiveBgA, // Held-down.
			//
			// PROGRESS BAR [x], e.g. vsc panel refresh/pull/push animation
			"progressBar.background": color.primary,
			//
			// SMALL BADGES [x], e.g. # of changes in vcs panel, or # of problems
			"badge.background": color.primary,
			"badge.foreground": color.text.inverse,
			//
			//
			//
			// TABS [x]
			"editorGroup.border": color.ui.border, // Border between editor panes.
			"editorGroup.focusedEmptyBorder": color.ui.border,
			"editorGroup.dropBackground": color.ui.primaryDropBg, // Background for re-organising tab panes.
			"editorGroupHeader.tabsBackground": color.ui.secondaryBg, // Background of tab row.
			"editorGroupHeader.noTabsBackground": color.ui.secondaryBg, // Background of no-tab row.
			"editorGroup.tabsBorder": "#00000000", // Border below the tab row.
			"editorGroupHeader.border": "#00000000", // Border underneath the tabs & breadcrumbs, if enabled.
			//
			"editorGroup.emptyBackground": color.primaryBg, // Background of empty editor pane.
			//
			"editorGroup.dropIntoPromptForeground": color.text.normal,
			"editorGroup.dropIntoPromptBackground": color.primaryBg,
			"editorGroup.dropIntoPromptBorder": "#00000000",
			// Individual tabs
			"tab.border": "#00000000", // | Borders between tabs |
			//
			"tab.activeForeground": color.text.normal,
			"tab.activeBackground": color.primaryBg,
			"tab.unfocusedActiveForeground": color.text.muted,
			"tab.unfocusedActiveBackground": color.primaryBg,
			"tab.activeBorder": "#00000000", // Bottom border for active tab.
			"tab.unfocusedActiveBorder": "#00000000",
			"tab.activeBorderTop": color.primary, // Top border for active tab.
			"tab.unfocusedActiveBorderTop": color.unfocusedTab,
			//
			"tab.lastPinnedBorder": color.ui.tabSeparator, // Border between pinned and non-pinned tabs.
			//
			"tab.inactiveForeground": color.text.muted,
			"tab.inactiveBackground": color.ui.secondaryBg,
			"tab.unfocusedInactiveForeground": color.ui.muted,
			"tab.unfocusedInactiveBackground": color.ui.secondaryBg,
			//
			"tab.hoverForeground": color.text.normal, // Text when hovering over a tab.
			"tab.unfocusedHoverForeground": color.text.normal, // Text when hovering over a tab.
			"tab.hoverBackground": color.primaryBg, // Background when hovering over a tab.
			"tab.unfocusedHoverBackground": color.primaryBg,
			"tab.hoverBorder": "#00000000",
			"tab.unfocusedHoverBorder": "#00000000",
			//
			"tab.activeModifiedBorder": "#00000000", // Top border for "dirty" files.
			"tab.unfocusedActiveModifiedBorder": "#00000000", // Top border for "dirty" files.
			"tab.inactiveModifiedBorder": "#00000000",
			"tab.unfocusedInactiveModifiedBorder": "#00000000",
			//
			"editorPane.background": color.primaryBg, // Background to the left/right side when the editor pane is centred.
			"sideBySideEditor.horizontalBorder": color.ui.border,
			"sideBySideEditor.verticalBorder": color.ui.border,
			//
			// ACTIVITY BAR [x], icons on the left/right
			"activityBar.background": color.primaryBg, // Background of the entire bar.
			"activityBar.dropBorder": color.primary, // Colour for when re-arranging icons.
			//"activityBar.border": "", // Border between bar and sidebar.
			"activityBar.foreground": color.primary, // Icon selected/hover colour.
			"activityBar.inactiveForeground": color.ui.activityBarInactive, // Icon not-selected colour.
			//"activityBar.activeBackground": "", // Background of active icon.
			"activityBarBadge.foreground": color.text.inverse,
			"activityBarBadge.background": color.primary,
			"activityBar.activeBorder": color.primary, // Line next to active icon.
			//"activityBar.activeFocusBorder": "", // ???
			//
			// SIDEBAR [x]
			"sideBar.background": color.ui.secondaryBg,
			"sideBar.foreground": color.text.normal, // All text
			"sideBarTitle.foreground": color.text.normal, // Title, e.g. `Explorer` or `Run and Debug`.
			"sideBarSectionHeader.foreground": color.text.normal, // Header, e.g. `Outline` or `Task Explorer`.
			"sideBarSectionHeader.background": color.ui.tertiaryBg, // Header background
			//"sideBarSectionHeader.border": "", // Border between sections in a single pane.
			"sideBar.border": color.ui.border, // Border with the main editor pane.
			"sideBar.dropBackground": color.ui.primaryDropBg, // Background for re-organising panes in the sidebar.
			//
			// EXTENSION SIDEBAR [x]
			"extensionIcon.verifiedForeground": color.ui.verified,
			"extensionIcon.starForeground": color.ui.star,
			"extensionIcon.preReleaseForeground": color.ui.prerelease,
			"extensionBadge.remoteForeground": color.text.inverse,
			"extensionBadge.remoteBackground": color.ui.remote,
			"extensionButton.prominentForeground": color.text.inverse, // `Install` button
			"extensionButton.prominentBackground": color.primary,
			"extensionButton.prominentHoverBackground": color.primaryHover,
			//
			// VCS SIDEBAR [x]
			"scm.providerBorder": color.ui.border,
			//
			// SETTINGS PAGE [x]
			"settings.headerForeground": color.text.normal, // Titles and headings
			"settings.modifiedItemIndicator": color.primary, // Strip at the side of any modified settings.
			"settings.rowHoverBackground": "#00000000", // Background colour of the currently active setting.
			"settings.focusedRowBackground": "#00000000",
			"settings.focusedRowBorder": color.ui.border,
			//
			// WELCOME PAGE [x]
			"welcomePage.background": color.primaryBg,
			//"welcomePage.progress.foreground": "",
			//"welcomePage.progress.background": "",
			//"welcomePage.tileBackground": "",
			//"welcomePage.tileHoverBackground": "",
			//"welcomePage.tileShadow": "",
			"walkThrough.embeddedEditorBackground": color.primaryBg,
			//
			// TODO: NOTEBOOK PAGE 
			//
			// PANEL [x]
			"panel.background": color.primaryBg,
			"panel.border": color.ui.border, // Border between panel and main editor pane.
			"panelSection.border": color.ui.border,
			//"panelInput.border": "", // ???
			//"panel.dropBorder": "", // ???
			"panelTitle.activeForeground": color.primary, // Panel tabs, e.g. `Problems` or `Terminal`.
			"panelTitle.activeBorder": color.primary, // Active tab underline.
			"panelTitle.inactiveForeground": color.text.normal,
			"panelSectionHeader.background": color.ui.secondaryBg, // E.g. `Debug Console` and `Output` panels in tab.
			"panelSectionHeader.foreground": color.text.normal,
			"panelSectionHeader.border": color.ui.border,
			"panelSection.dropBackground": color.ui.primaryDropBg, // Background for re-organising panels in a tab.
			//
			// DEBUG TOOLBAR & PANEL [x]
			"debugToolBar.background": color.ui.secondaryBg,
			"debugToolBar.border": color.ui.secondaryBg,
			//
			"debugIcon.breakpointForeground": color.debug.breakpoint, // The dot in the gutter.
			"debugIcon.breakpointDisabledForeground": color.debug.breakpointDisabled, // Disable dot.
			//"debugIcon.breakpointUnverifiedForeground": "", // ???
			//"debugIcon.breakpointCurrentStackframeForeground": "", // ???
			//"debugIcon.breakpointStackframeForeground": "" // ???
			"debugIcon.startForeground": color.debug.start, // The `|>` symbol in the debug panel.
			"debugIcon.pauseForeground": color.debug.pause, // The `||` symbol in the debug controller pop-down.
			"debugIcon.stopForeground": color.debug.stop,
			"debugIcon.disconnectForeground": color.debug.stop,
			"debugIcon.restartForeground": color.debug.stop,
			"debugIcon.stepOverForeground": color.debug.step,
			"debugIcon.stepIntoForeground": color.debug.step,
			"debugIcon.stepOutForeground": color.debug.step,
			"debugIcon.stepBackForeground": color.debug.step,
			"debugIcon.continueForeground": color.debug.start,
			"debugConsole.infoForeground": "#09A1ED",
			"debugConsole.warningForeground": "#CF9C00",
			"debugConsole.errorForeground": "#ff2e87",
			"debugConsole.sourceForeground": "#2DAE58",
			"debugConsoleInputIcon.foreground": "#c75af3",
			//"debugView.exceptionLabelForeground": "",
			//"debugView.exceptionLabelBackground": "",
			//"debugView.stateLabelForeground": "",
			//"debugView.stateLabelForeground": "",
			//"debugView.valueChangedHighlight": "",
			//
			"debugTokenExpression.name": color.text.normal,
			"debugTokenExpression.value": color.text.normal,
			"debugTokenExpression.string": "#CF9C00",
			"debugTokenExpression.boolean": "#2DAE58",
			"debugTokenExpression.number": "#FF5C57",
			"debugTokenExpression.error": "#FF1277",
			//
			// NOTIFICATIONS [x]
			//"notifications.foreground": "",
			"notifications.background": color.primaryBg,
			//"notificationToast.border": "", // Border of notification pop-ups.
			"notifications.border": color.ui.secondaryBorder, // Border between notifications in notification centre.
			"notificationCenterHeader.background": color.ui.secondaryBg,
			"notificationCenterHeader.foreground": color.text.normal,
			//"notificationCenter.border": "", // Border of notification centre pop-up.
			"notificationsInfoIcon.foreground": color.diag.info,
			"notificationsWarningIcon.foreground": color.diag.warning,
			"notificationsErrorIcon.foreground": color.diag.error,
			"notificationLink.foreground": color.ui.link, // ???
			//
			// DROP DOWN COMMAND BAR [x]
			"quickInputTitle.background": color.ui.secondaryBg,
			"quickInput.foreground": color.text.normal, // All text.
			"quickInput.background": color.ui.secondaryBg,
			"quickInputList.focusBackground": color.primary,
			"quickInputList.focusForeground": color.text.inverse,
			"quickInputList.focusIconForeground": color.text.inverse,
			"pickerGroup.border": color.ui.secondaryBorder, // Border between groups within the drop down.
			"pickerGroup.foreground": color.primary, // The little text seen sometimes, e.g. `other commands`.
			//
			//
			//
			// WINDOW [x]
			"titleBar.activeForeground": color.text.normal,
			"titleBar.activeBackground": color.ui.secondaryBg,
			"titleBar.inactiveForeground": color.text.light,
			"titleBar.inactiveBackground": color.ui.secondaryBg,
			//"titleBar.border": "",
			"menu.foreground": color.text.normal,
			"menu.background": color.ui.dropdownBg, // Background of a fly-out.
			"menu.selectionForeground": color.text.inverse,
			"menu.selectionBackground": color.primary,
			//"menu.selectionBorder": "",
			"menu.separatorBackground": color.ui.separator,
			"menubar.selectionForeground": color.text.normal,
			"menubar.selectionBackground": color.ui.hoverBgA, // Background of hover/active menu bar item.
			//"menubar.selectionBorder": "",
			//"window.activeBorder": "",
			//"window.inactiveBorder": "",
			"sash.hoverBorder": color.primary, // Dragable border to resize panes.
			//
			// BANNER [x]
			"banner.foreground": color.text.inverse,
			"banner.background": color.primary,
			"banner.iconForeground": color.text.inverse,
			//
			// STATUS BAR [x]
			"statusBar.foreground": color.text.inverse,
			"statusBar.background": color.primary,
			//"statusBar.border": "",
			"statusBarItem.hoverBackground": color.ui.statusHoverBgA,
			"statusBarItem.activeBackground": color.ui.statusActiveBgA,
			"statusBarItem.prominentForeground": color.text.inverse,
			"statusBarItem.prominentBackground": color.primary,
			"statusBarItem.prominentHoverBackground": color.ui.statusHoverBgA,
			"statusBarItem.errorBackground": color.text.inverse,
			"statusBarItem.errorForeground": color.primary,
			"statusBarItem.warningForeground": color.text.inverse,
			"statusBarItem.warningBackground": color.primary,
			// Remote icon
			"statusBarItem.remoteForeground": color.text.inverse,
			"statusBarItem.remoteBackground": color.ui.secondary,
			// When no folder open.
			"statusBar.noFolderForeground": color.text.normal,
			"statusBar.noFolderBackground": color.ui.statusEmptyBg,
			//"statusBar.noFolderBorder": "",
			// When debugging
			"statusBar.debuggingForeground": color.text.inverse,
			"statusBar.debuggingBackground": color.ui.statusDebugBg,
			//"statusBar.debuggingBorder": "",
			//
			//
			//
			// SYMBOLS [x]
			"symbolIcon.arrayForeground": "#565869",
			"symbolIcon.booleanForeground": "#13BBB7",
			"symbolIcon.classForeground": "#2DAE58",
			"symbolIcon.colorForeground": "#565869",
			"symbolIcon.constantForeground": "#13BBB7",
			"symbolIcon.enumeratorForeground": "#2DAE58",
			"symbolIcon.enumeratorMemberForeground": "#13BBB7",
			"symbolIcon.eventForeground": "#565869",
			"symbolIcon.fieldForeground": "#a8759a",
			"symbolIcon.fileForeground": "#565869",
			"symbolIcon.folderForeground": "#565869",
			"symbolIcon.functionForeground": "#09A1ED",
			"symbolIcon.interfaceForeground": "#c75af3",
			"symbolIcon.keyForeground": "#F767BB",
			"symbolIcon.keywordForeground": "#F767BB",
			"symbolIcon.methodForeground": "#09A1ED",
			"symbolIcon.moduleForeground": "#565869",
			"symbolIcon.namespaceForeground": "#565869",
			"symbolIcon.nullForeground": "#F767BB",
			"symbolIcon.numberForeground": "#FF5C57",
			"symbolIcon.objectForeground": "#2DAE58",
			"symbolIcon.operatorForeground": "#777777",
			"symbolIcon.packageForeground": "#565869",
			"symbolIcon.propertyForeground": "#a8759a",
			"symbolIcon.referenceForeground": "#F767BB",
			"symbolIcon.snippetForeground": "#F767BB",
			"symbolIcon.stringForeground": "#CF9C00",
			"symbolIcon.structForeground": "#2DAE58",
			"symbolIcon.textForeground": "#565869",
			"symbolIcon.typeParameterForeground": "#2DAE58",
			"symbolIcon.unitForeground": "#F767BB",
			"symbolIcon.variableForeground": "#565869",
			//
			// TESTING COLOURS [x]
			"testing.iconPassed": color.diag.testPassed,
			"testing.iconFailed": color.diag.testFailed,
			"testing.iconErrored": color.diag.testFailed,
			"testing.iconQueued": color.diag.testQueued,
			"testing.iconUnset": color.diag.testUnset,
			"testing.iconSkipped": color.diag.testSkipped,
			"testing.peekBorder": color.ui.border,
			//"testing.peekHeaderBackground": "",
			"testing.message.info.lineBackground": color.diag.infoBgA,
			"testing.message.info.decorationForeground": color.diag.info,
			"testing.message.error.lineBackground": color.diag.error,
			"testing.message.error.decorationForeground": color.diag.errorBgA,
			//
			// CHART COLOURS [x]
			"charts.foreground": color.text.normal,
			"charts.lines": color.ui.chartLine,
			"charts.blue": color.ui.chartBlue,
			"charts.green": color.ui.chartGreen,
			"charts.yellow": color.ui.chartYellow,
			"charts.orange": color.ui.chartOrange,
			"charts.red": color.ui.chartRed,
			"charts.purple": color.ui.chartPurple,
			//
			// TERMINAL COLOURS [x]
			"terminal.background": color.terminal.background,
			"terminal.foreground": color.terminal.foreground, // 0m (foreground)
			"terminal.ansiBlack": color.terminal.ansiBlack, // 30m
			"terminal.ansiBrightBlack": color.terminal.ansiBrightBlack, // 30;1m
			"terminal.ansiWhite": color.terminal.ansiWhite, //37m (background)
			"terminal.ansiBrightWhite": color.terminal.ansiBrightWhite, // (technicall 37;1m but vscode also applies this to just bold 1m)
			"terminal.ansiBlue": color.terminal.ansiBlue,
			"terminal.ansiBrightBlue": color.terminal.ansiBrightBlue,
			"terminal.ansiCyan": color.terminal.ansiCyan,
			"terminal.ansiBrightCyan": color.terminal.ansiBrightCyan,
			"terminal.ansiGreen": color.terminal.ansiGreen,
			"terminal.ansiBrightGreen": color.terminal.ansiBrightGreen,
			"terminal.ansiYellow": color.terminal.ansiYellow,
			"terminal.ansiBrightYellow": color.terminal.ansiBrightYellow,
			"terminal.ansiRed": color.terminal.ansiRed,
			"terminal.ansiBrightRed": color.terminal.ansiBrightRed,
			"terminal.ansiMagenta": color.terminal.ansiMagenta,
			"terminal.ansiBrightMagenta": color.terminal.ansiBrightMagenta,
			//
			"terminal.selectionBackground": color.text.selectionBgA,
			"terminal.findMatchBackground": "#00000000", // Currently selected found match. Set to 0 so that it doesn't multiple with findMatchHighlightBackground.
			"terminal.findMatchBorder": color.text.matchBorderA,
			"terminal.findMatchHighlightBackground": color.text.matchBgA,
			"terminal.findMatchHighlightBorder": "#00000000",
			//
			"terminalCommandDecoration.defaultBackground": color.terminal.default,
			"terminalCommandDecoration.successBackground": color.terminal.success,
			"terminalCommandDecoration.errorBackground": color.terminal.error,
			//
			"terminalCursor.foreground": color.primary,
			"terminalCursor.background": color.primaryBg, // Colour of text when selected by block cursor.
			//
			"terminal.dropBackground": color.ui.primaryDropBg, // // Background for re-organising stacked terminals.
			"terminal.tab.activeBorder": color.ui.border, // ???
			//
			// GIT COLOURS [x]
			"gitDecoration.untrackedResourceForeground": color.git.untracked,
			"gitDecoration.addedResourceForeground": color.git.addedOrStaged, // Files added to vcs that are not currently tracked.
			"gitDecoration.modifiedResourceForeground": color.git.modified, // Files already in vcs that are modified.
			"gitDecoration.renamedResourceForeground": color.git.renamed,
			"gitDecoration.deletedResourceForeground": color.git.removedOrConflicting,
			"gitDecoration.stageModifiedResourceForeground": color.git.addedOrStaged,
			"gitDecoration.stageDeletedResourceForeground": color.git.ignoredOrSubmodule,
			"gitDecoration.ignoredResourceForeground": color.git.ignoredOrSubmodule,
			"gitDecoration.conflictingResourceForeground": color.git.removedOrConflicting,
			"gitDecoration.submoduleResourceForeground": color.git.ignoredOrSubmodule,
			//
			// GIT GRAPH [x]
			"git-graph.graph.colours": color.gitGraph,
			//
			// _TODO TREE [x]
			"todo-tree.highlights.customHighlight": {
				"TODO": {
					"foreground": color.primaryBg,
					"background": color.todo.todo,
					"icon": "checklist",
					"iconColour": color.todo.todo,
					"gutterIcon": true
				},
				"FIXME": {
					"foreground": color.primaryBg,
					"background": color.todo.fixme,
					"icon": "tools",
					"iconColour": color.todo.fixme,
					"gutterIcon": true
				},
				"BUG": {
					"foreground": color.primaryBg,
					"background": color.todo.bug,
					"icon": "alert",
					"iconColour": color.todo.bug,
					"gutterIcon": true
				},
				"HACK": {
					"foreground": color.primaryBg,
					"background": color.todo.hack,
					"icon": "flame",
					"iconColour": color.todo.hack,
					"gutterIcon": true
				},
				"MAYBE": {
					"foreground": color.primaryBg,
					"background": color.todo.maybe,
					"icon": "info",
					"iconColour": color.todo.maybe,
					"gutterIcon": true
				},
				"[ ]": {
					"foreground": color.primaryBg,
					"background": color.todo.unchecked,
					"icon": "checklist",
					"iconColour": color.todo.unchecked,
					"gutterIcon": true
				},
				"[x]": {
					"foreground": color.todo.checked,
					"background": color.primaryBg,
					"icon": "checklist",
					"iconColour": color.todo.checked,
					"gutterIcon": true
				}
			}
		}
	}
}
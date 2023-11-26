import * as path from "path";
import * as fs from "fs";
import { Config } from "./config";
import { lightColors, lightSyntax } from "./light";
import { darkColors, darkSyntax } from "./dark";
import { darkWarmColors, darkWarmSyntax } from "./dark-warm";

/**
 * Creates the theme `.json` files.
 * @param config The current configuration.
 */
export function createThemes(config: Config, path: string) {
	createTheme("Pink Candy Light", "light", "pink-candy-light.json", path, lightColors, lightSyntax, config);
	createTheme("Pink Candy Dark", "dark", "pink-candy-dark.json", path, darkColors, darkSyntax, config);
	createTheme(
		"Pink Candy Dark Warm",
		"dark",
		"pink-candy-dark-warm.json",
		path,
		darkWarmColors,
		darkWarmSyntax,
		config
	);
}

function createTheme(
	name: string,
	type: string,
	file: string,
	themeFolder: string,
	color: UiColors,
	syntax: SyntaxColors,
	config: Config
) {
	const jsonPath = path.join(themeFolder, file);
	const theme = generateTheme(color, syntax, name, type, config);

	fs.writeFileSync(jsonPath, JSON.stringify(theme, undefined, 4));
}

// TODO: Review gutter comments
// TODO: Notebooks
// TODO: Status bar setting profiles (currently in insider 1.69)

function generateTheme(color: UiColors, syntax: SyntaxColors, name: string, type: string, config: Config) {
	// Output the appropriate error lens keys.
	let errorLens;
	let errorLensStatusBar;
	if (type == "light") {
		errorLens = {
			"errorLens.infoForegroundLight": color.diag.info,
			"errorLens.infoBackgroundLight": color.diag.infoBgA,
			"errorLens.hintForegroundLight": color.diag.hint,
			"errorLens.hintBackgroundLight": color.diag.hintBgA,
			"errorLens.warningForegroundLight": color.diag.warning,
			"errorLens.warningBackgroundLight": color.diag.warningBgA,
			"errorLens.errorForegroundLight": color.diag.error,
			"errorLens.errorBackgroundLight": color.diag.errorBgA,
			// Gutter icons.
			"errorLens.infoGutterIconColor": color.diag.info,
			"errorLens.warningGutterIconColor": color.diag.warning,
			"errorLens.errorGutterIconColor": color.diag.error,
		};
	} else {
		errorLens = {
			"errorLens.infoForeground": color.diag.info,
			"errorLens.infoBackground": color.diag.infoBgA,
			"errorLens.hintForeground": color.diag.hint,
			"errorLens.hintBackground": color.diag.hintBgA,
			"errorLens.warningForeground": color.diag.warning,
			"errorLens.warningBackground": color.diag.warningBgA,
			"errorLens.errorForeground": color.diag.error,
			"errorLens.errorBackground": color.diag.errorBgA,
			// Gutter icons.
			"errorLens.infoGutterIconColor": color.diag.info,
			"errorLens.warningGutterIconColor": color.diag.warning,
			"errorLens.errorGutterIconColor": color.diag.error,
		};
	}
	if (config.globalAccent == "default") {
		errorLensStatusBar = {
			"errorLens.statusBarHintForeground": color.text.inverse,
			"errorLens.statusBarInfoForeground": color.text.inverse,
			"errorLens.statusBarWarningForeground": color.text.inverse,
			"errorLens.statusBarIconWarningForeground": color.text.inverse,
			"errorLens.statusBarErrorForeground": color.text.inverse,
			"errorLens.statusBarIconErrorForeground": color.text.inverse,
		};
	} else {
		errorLensStatusBar = {
			"errorLens.statusBarHintForeground": color.diag.hint,
			"errorLens.statusBarInfoForeground": color.diag.info,
			"errorLens.statusBarWarningForeground": color.diag.warning,
			"errorLens.statusBarIconWarningForeground": color.diag.warning,
			"errorLens.statusBarErrorForeground": color.diag.error,
			"errorLens.statusBarIconErrorForeground": color.diag.error,
		};
	}

	// Configure comment styles.
	let commentSemanticStyles;
	let commentStyles;
	if (config.italicComments) {
		commentSemanticStyles = {
			comment: {
				foreground: syntax.fadedGray,
				fontStyle: "italic",
			},
		};
		commentStyles = {
			settings: {
				foreground: syntax.fadedGray,
				fontStyle: "italic",
			},
		};
	} else {
		commentSemanticStyles = {
			comment: syntax.fadedGray,
		};
		commentStyles = {
			settings: {
				foreground: syntax.fadedGray,
			},
		};
	}

	// Current line style.
	let currentLine;
	if (config.altCurrentLine) {
		currentLine = {
			"editor.lineHighlightBackground": "#00000000", // Current line background colour.
			"editor.lineHighlightBorder": color.text.currentLineBorder, // Remove current line border.
		};
	} else {
		currentLine = {
			"editor.lineHighlightBackground": color.text.currentLineBgA, // Current line background colour.
			"editor.lineHighlightBorder": "#00000000", // Remove current line border.
		};
	}

	// Inlay hint style.
	let inlay;
	switch (config.inlayStyle) {
		case "noBackground": {
			inlay = {
				"editorInlayHint.foreground": color.text.decoration.codelens,
				"editorInlayHint.background": "#00000000",
				"editorInlayHint.typeForeground": color.text.decoration.codelens,
				"editorInlayHint.typeBackground": "#00000000",
				"editorInlayHint.parameterForeground": color.text.decoration.codelens,
				"editorInlayHint.parameterBackground": "#00000000",
			};
			break;
		}
		case "faintBackground": {
			inlay = {
				"editorInlayHint.foreground": color.text.decoration.alt1Inlay,
				"editorInlayHint.background": color.text.decoration.alt1InlayBgA,
				"editorInlayHint.typeForeground": color.text.decoration.alt1Inlay,
				"editorInlayHint.typeBackground": color.text.decoration.alt1InlayBgA,
				"editorInlayHint.parameterForeground": color.text.decoration.alt1Inlay,
				"editorInlayHint.parameterBackground": color.text.decoration.alt1InlayBgA,
			};
			break;
		}
		case "accent": {
			inlay = {
				"editorInlayHint.foreground": color.text.decoration.alt2Inlay,
				"editorInlayHint.background": "#00000000",
				"editorInlayHint.typeForeground": color.text.decoration.alt2Inlay,
				"editorInlayHint.typeBackground": "#00000000",
				"editorInlayHint.parameterForeground": color.text.decoration.alt2Inlay,
				"editorInlayHint.parameterBackground": "#00000000",
			};
			break;
		}
		case "accentBackground": {
			inlay = {
				"editorInlayHint.foreground": color.text.decoration.alt3Inlay,
				"editorInlayHint.background": color.text.decoration.alt3InlayBgA,
				"editorInlayHint.typeForeground": color.text.decoration.alt3Inlay,
				"editorInlayHint.typeBackground": color.text.decoration.alt3InlayBgA,
				"editorInlayHint.parameterForeground": color.text.decoration.alt3Inlay,
				"editorInlayHint.parameterBackground": color.text.decoration.alt3InlayBgA,
			};
			break;
		}
	}

	// Bracket guides styles.
	let brackets;
	if (config.monochromeBracketGuides) {
		brackets = {
			"editorBracketHighlight.foreground1": color.text.decoration.dark,
			"editorBracketHighlight.foreground2": color.text.decoration.dark,
			"editorBracketHighlight.foreground3": color.text.decoration.dark,
			"editorBracketHighlight.foreground4": color.text.decoration.dark,
			"editorBracketHighlight.foreground5": color.text.decoration.dark,
			"editorBracketHighlight.foreground6": color.text.decoration.dark,
			"editorBracketPairGuide.foreground1": color.text.decoration.dark,
			"editorBracketPairGuide.foreground2": color.text.decoration.dark,
			"editorBracketPairGuide.foreground3": color.text.decoration.dark,
			"editorBracketPairGuide.foreground4": color.text.decoration.dark,
			"editorBracketPairGuide.foreground5": color.text.decoration.dark,
			"editorBracketPairGuide.foreground6": color.text.decoration.dark,
		};
	} else {
		brackets = {
			"editorBracketHighlight.foreground1": color.brackets.one,
			"editorBracketHighlight.foreground2": color.brackets.two,
			"editorBracketHighlight.foreground3": color.brackets.three,
			"editorBracketHighlight.foreground4": color.brackets.four,
			"editorBracketHighlight.foreground5": color.brackets.five,
			"editorBracketHighlight.foreground6": color.brackets.six,
			"editorBracketPairGuide.foreground1": color.brackets.one,
			"editorBracketPairGuide.foreground2": color.brackets.two,
			"editorBracketPairGuide.foreground3": color.brackets.three,
			"editorBracketPairGuide.foreground4": color.brackets.four,
			"editorBracketPairGuide.foreground5": color.brackets.five,
			"editorBracketPairGuide.foreground6": color.brackets.six,
		};
	}

	// Global accent options.
	let list;
	let widgets;
	let badges;
	let menu;
	let banner;
	let statusBar;
	let commandBar;
	if (config.globalAccent == "minimal") {
		// MINIMAL
		statusBar = {
			"statusBar.foreground": color.text.normal,
			"statusBar.background": color.ui.secondaryBg,
			"statusBarItem.hoverBackground": color.ui.hoverBgA,
			"statusBarItem.activeBackground": color.ui.activeBgA,
			"statusBarItem.compactHoverBackground": color.ui.hoverBgA,
			"statusBarItem.errorForeground": color.diag.error,
			"statusBarItem.errorBackground": color.ui.secondaryBg,
			"statusBarItem.warningForeground": color.diag.warning,
			"statusBarItem.warningBackground": color.ui.secondaryBg,
			"statusBarItem.prominentForeground": color.diag.info,
			"statusBarItem.prominentBackground": color.ui.secondaryBg,
			"statusBarItem.prominentHoverBackground": color.ui.hoverBgA,
			// Remote icon.
			"statusBarItem.remoteForeground": color.accent.primary,
			"statusBarItem.remoteBackground": color.ui.secondaryBg,
		};
		list = {
			"list.hoverBackground": color.ui.listHoverBgA, // Background on individual entry on hover.
			"list.activeSelectionBackground": color.ui.selectedBg,
			"list.activeSelectionForeground": color.text.normal,
			"list.activeSelectionIconForeground": color.text.normal, // Doesn't work?
			"list.inactiveSelectionBackground": color.ui.listHoverBgA, // Colour of a selected item when the list is not actively selected.
			"list.highlightForeground": color.accent.primary, // E.g. matching text in the command palette.
			"list.focusHighlightForeground": color.text.normal, // E.g. matching text in the currently selected entry in the command palette.
		};
		widgets = {
			"editorSuggestWidget.foreground": color.text.normal, // All text.
			"editorSuggestWidget.background": color.ui.primaryBg,
			"editorSuggestWidget.border": color.ui.border,
			"editorSuggestWidget.highlightForeground": color.accent.primary, // Matching letters in other entries.
			"editorSuggestWidget.focusHighlightForeground": color.text.normal, // Matching letters in currently selected entry.
			"editorSuggestWidget.selectedBackground": color.ui.selectedBg, // Background of selected entry.
			"editorSuggestWidget.selectedForeground": color.text.normal, // Text in selected entry.
			"editorSuggestWidget.selectedIconForeground": color.text.normal, // Icon in selected entry.
			//
			"peekViewResult.selectionForeground": color.text.normal, // Clicked entry.
			"peekViewResult.selectionBackground": color.ui.selectedBg, // Clicked entry.
		};
		badges = {
			"badge.foreground": color.accent.primary,
			"badge.background": color.ui.primaryBg,
			"activityBarBadge.foreground": color.accent.primary,
			"activityBarBadge.background": color.ui.primaryBg,
		};
		banner = {
			"banner.foreground": color.text.normal,
			"banner.background": color.ui.secondaryBg,
			"banner.iconForeground": color.text.normal,
		};
		menu = {
			"menu.foreground": color.text.normal,
			"menu.background": color.ui.dropdownBg, // Background of a fly-out.
			"menu.selectionForeground": color.text.normal,
			"menu.selectionBackground": color.ui.selectedBg,
			//"menu.selectionBorder": "",
			"menu.separatorBackground": color.ui.separator,
			"menubar.selectionForeground": color.text.normal,
			"menubar.selectionBackground": color.ui.hoverBgA, // Background of hover/active menu bar item.
			//"menubar.selectionBorder": "",
		};
		commandBar = {
			"quickInput.foreground": color.text.normal, // All text.
			"quickInput.background": color.ui.primaryBg,
			"quickInputTitle.background": color.ui.primaryBg,
			"quickInputList.focusBackground": color.ui.selectedBg,
			"quickInputList.focusForeground": color.text.normal,
			"quickInputList.focusIconForeground": color.text.normal,
			"pickerGroup.border": color.ui.separator, // Border between groups within the drop down.
			"pickerGroup.foreground": color.accent.primary, // The little text seen sometimes, e.g. `other commands`.
		};
	} else {
		// DEFAULT + DISABLED_STATUS_BAR
		list = {
			"list.hoverBackground": color.ui.listHoverBgA, // Background on individual entry on hover.
			"list.activeSelectionBackground": color.accent.primary,
			"list.activeSelectionForeground": color.text.inverse,
			"list.activeSelectionIconForeground": color.text.inverse, // Doesn't work?
			"list.inactiveSelectionBackground": color.ui.listInactiveBgA, // Colour of a selected item when the list is not actively selected.
			"list.highlightForeground": color.accent.primary, // E.g. matching text in the command palette.
			"list.focusHighlightForeground": color.text.inverse, // E.g. matching text in the currently selected entry in the command palette.
		};
		widgets = {
			"editorSuggestWidget.foreground": color.text.normal, // All text.
			"editorSuggestWidget.background": color.ui.primaryBg,
			"editorSuggestWidget.border": color.ui.border,
			"editorSuggestWidget.highlightForeground": color.accent.primary, // Matching letters in other entries.
			"editorSuggestWidget.focusHighlightForeground": color.text.inverse, // Matching letters in currently selected entry.
			"editorSuggestWidget.selectedBackground": color.accent.primary, // Background of selected entry.
			"editorSuggestWidget.selectedForeground": color.text.inverse, // Text in selected entry.
			"editorSuggestWidget.selectedIconForeground": color.text.inverse, // Icon in selected entry.
			//
			"peekViewResult.selectionForeground": color.text.emphasised, // Clicked entry.
			"peekViewResult.selectionBackground": color.accent.primary, // Clicked entry.
		};
		badges = {
			"badge.foreground": color.text.inverse,
			"badge.background": color.accent.primary,
			"activityBarBadge.foreground": color.text.inverse,
			"activityBarBadge.background": color.accent.primary,
		};
		banner = {
			"banner.foreground": color.text.inverse,
			"banner.background": color.accent.primary,
			"banner.iconForeground": color.text.inverse,
		};
		menu = {
			"menu.foreground": color.text.normal,
			"menu.background": color.ui.dropdownBg, // Background of a fly-out.
			"menu.selectionForeground": color.text.inverse,
			"menu.selectionBackground": color.accent.primary,
			//"menu.selectionBorder": "",
			"menu.separatorBackground": color.ui.separator,
			"menubar.selectionForeground": color.text.normal,
			"menubar.selectionBackground": color.ui.hoverBgA, // Background of hover/active menu bar item.
			//"menubar.selectionBorder": "",
		};
		commandBar = {
			"quickInput.foreground": color.text.normal, // All text.
			"quickInput.background": color.ui.primaryBg,
			"quickInputTitle.background": color.ui.primaryBg,
			"quickInputList.focusBackground": color.accent.primary,
			"quickInputList.focusForeground": color.text.inverse,
			"quickInputList.focusIconForeground": color.text.inverse,
			"pickerGroup.border": color.ui.separator, // Border between groups within the drop down.
			"pickerGroup.foreground": color.accent.primary, // The little text seen sometimes, e.g. `other commands`.
		};

		if (config.globalAccent == "disabledStatusBar") {
			// DISABLED_STATUS_BAR
			statusBar = {
				"statusBar.foreground": color.text.normal,
				"statusBar.background": color.ui.secondaryBg,
				"statusBarItem.hoverBackground": color.ui.hoverBgA,
				"statusBarItem.activeBackground": color.ui.activeBgA,
				"statusBarItem.compactHoverBackground": color.ui.hoverBgA,
				"statusBarItem.errorForeground": color.diag.error,
				"statusBarItem.errorBackground": color.ui.secondaryBg,
				"statusBarItem.warningForeground": color.diag.warning,
				"statusBarItem.warningBackground": color.ui.secondaryBg,
				"statusBarItem.prominentForeground": color.diag.info,
				"statusBarItem.prominentBackground": color.ui.secondaryBg,
				"statusBarItem.prominentHoverBackground": color.ui.hoverBgA,
				// Remote icon.
				"statusBarItem.remoteForeground": color.accent.primary,
				"statusBarItem.remoteBackground": color.ui.secondaryBg,
			};
		} else {
			// DEFAULT
			statusBar = {
				"statusBar.foreground": color.text.inverse,
				"statusBar.background": color.accent.primary,
				"statusBarItem.hoverBackground": color.ui.statusHoverBgA,
				"statusBarItem.activeBackground": color.ui.statusActiveBgA,
				"statusBarItem.compactHoverBackground": color.ui.statusHoverBgA,
				"statusBarItem.errorForeground": color.text.inverse,
				"statusBarItem.errorBackground": color.accent.primary,
				"statusBarItem.warningForeground": color.text.inverse,
				"statusBarItem.warningBackground": color.accent.primary,
				"statusBarItem.prominentForeground": color.text.inverse,
				"statusBarItem.prominentBackground": color.accent.primary,
				"statusBarItem.prominentHoverBackground": color.ui.statusHoverBgA,
				// Remote icon.
				"statusBarItem.remoteForeground": color.text.inverse,
				"statusBarItem.remoteBackground": color.accent.secondary,
			};
		}
	}

	// Markdown plaintest styles.
	let mdStyles = markdownStyles(syntax, config.mutedMd);

	return {
		name: name,
		type: type,
		colors: {
			// EDITOR
			// Basics
			foreground: color.text.normal,
			disabledForeground: color.ui.disabledText, // Disabled text, e.g. disable menu dropdown entries.
			"editor.foreground": color.text.normal,
			"editor.background": color.ui.primaryBg,
			errorForeground: color.diag.error,
			"editorUnicodeHighlight.border": color.diag.error, // Highlight potentially confusing unicode characters.
			"editorUnicodeHighlight.background": color.diag.errorBgA,
			"widget.shadow": color.ui.shadow,
			//
			// Cursor/line
			"editorCursor.foreground": color.accent.primary,
			"editorCursor.background": color.ui.primaryBg, // Colour of a character when using block cursor.
			...currentLine,
			"editorLineNumber.foreground": color.text.muted, // Line number colour in the gutter.
			"editorLineNumber.activeForeground": color.accent.primary, // Current line number colour in the gutter.
			"editor.foldBackground": color.text.currentLineBgA, // Colour of a line containing a folded range.
			"editor.hoverHighlightBackground": color.text.currentLineBgA, // Background when hovering over a symbol.
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
			"editor.findMatchBackground": "#00000000", // Currently selected found match. Set to 0 so that it doesn't multiply with findMatchHighlightBackground.
			"editor.findMatchBorder": color.text.matchBorderA,
			"editor.findMatchHighlightBackground": color.text.matchBgA, // Found match(es)
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
			...brackets,
			"editorBracketHighlight.unexpectedBracket.foreground": color.diag.error,
			//
			// Inlay hints
			...inlay,
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
			"editorLink.activeForeground": color.accent.primary, // When ctrl+hovering over a symbol.
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
			...errorLens,
			...errorLensStatusBar,
			//
			// RULER [x]
			//"editorOverviewRuler.background": "",
			"editorOverviewRuler.border": color.ui.border, // Border between scroll-bar and editor.
			"editorOverviewRuler.findMatchForeground": color.diag.match, // Matching text through find/replace.
			"editorOverviewRuler.rangeHighlightForeground": color.diag.match, // Range of selected symbol, e.g. picking symbol with @NAME
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
			"editorGutter.background": color.ui.primaryBg,
			"editorGutter.addedBackground": color.git.addedOrStaged, // Added strip.
			"editorGutter.modifiedBackground": color.git.modified, // Modified strip.
			"editorGutter.deletedBackground": color.git.removedOrConflicting, // Removed mark.
			"editorGutter.commentRangeForeground": color.text.muted, // ???
			//"editorGutter.foldingControlForeground": "", // Arrow for folding code ranges.
			//
			// MINIMAP [x]
			"minimap.background": color.ui.primaryBg,
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
			"breadcrumb.background": color.ui.primaryBg,
			"breadcrumb.focusForeground": color.accent.primary,
			"breadcrumb.activeSelectionForeground": color.accent.primary,
			"breadcrumbPicker.background": color.ui.dropdownBg,
			//
			// STICKY [x]
			"editorStickyScroll.background": color.ui.primaryBg,
			"editorStickyScrollHover.background": color.ui.listHoverBgA,
			// WIDGETS [x],
			// Pop-up widgets, e.g. find & replace dialogue.
			"editorWidget.foreground": color.text.normal, // All text.
			"editorWidget.background": color.ui.secondaryBg,
			"editorWidget.border": color.ui.border, // Horizontal line on the left of the widget.
			"editorWidget.resizeBorder": color.ui.border,
			// Intellisense widget
			...widgets,
			// Hover/documentation widget
			"editorHoverWidget.foreground": color.text.normal,
			"editorHoverWidget.background": color.ui.primaryBg,
			"editorHoverWidget.border": color.ui.border,
			"editorHoverWidget.highlightForeground": color.accent.secondary, // ???
			"editorHoverWidget.statusBarBackground": color.ui.secondaryBg, // The bottom bar, e.g. `View problem, no fixes available`
			// Debug Exception widget
			"debugExceptionWidget.background": color.debug.exceptionBg,
			"debugExceptionWidget.border": color.ui.border,
			// Peek view errors/warnings
			"editorMarkerNavigation.background": color.ui.primaryBg,
			"editorMarkerNavigationInfo.background": color.diag.info,
			"editorMarkerNavigationInfo.headerBackground": color.diag.infoBg,
			"editorMarkerNavigationWarning.background": color.diag.warning,
			"editorMarkerNavigationWarning.headerBackground": color.diag.warningBg,
			"editorMarkerNavigationError.background": color.diag.error,
			"editorMarkerNavigationError.headerBackground": color.diag.errorBg,
			// Peek view normal
			"peekViewEditor.background": color.ui.primaryBg,
			"peekViewEditor.matchHighlightBackground": color.text.matchBg, // Matching text in symbol.
			"peekViewEditor.matchHighlightBorder": color.text.matchBorderA, // Matching text border.
			"peekViewEditorGutter.background": color.ui.primaryBg,
			"peekViewResult.background": color.ui.secondaryBg,
			"peekViewResult.fileForeground": color.text.emphasised, // File header text.
			"peekViewResult.lineForeground": color.text.normal, // Symbol text.
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
			// MERGE EDITOR [x]
			"mergeEditor.change.background": color.git.mergeLineChangeBgA,
			"mergeEditor.change.word.background": color.git.mergeWordChangeBgA,
			"mergeEditor.conflict.unhandledUnfocused.border": color.git.mergeUnhandledUnfocused,
			"mergeEditor.conflict.unhandledFocused.border": color.git.mergeUnhandledFocused,
			"mergeEditor.conflict.handledUnfocused.border": color.git.mergeHandledUnfocused,
			"mergeEditor.conflict.handledFocused.border": color.git.mergeHandledFocused,
			"mergeEditor.conflict.unhandled.minimapOverViewRuler": color.git.mergeUnhandledFocused,
			"mergeEditor.conflict.handled.minimapOverViewRuler": color.git.mergeHandledFocused,
			//
			//
			//
			// GENERAL TEXT
			"textLink.foreground": color.accent.primary, // Link colour.
			"textLink.activeForeground": color.accent.linkHover, // Link hover/active colour.
			descriptionForeground: color.text.light,
			"textPreformat.foreground": color.accent.secondary, // Inline code block text.
			"textCodeBlock.background": color.ui.secondaryBg, // Code block background.
			"textBlockQuote.background": color.ui.secondaryBg, // Block quote background.
			"textBlockQuote.border": color.accent.primary, // Block quote left border.
			"textSeparator.foreground": color.ui.separator, // ???
			//
			// SELECTION
			focusBorder: color.accent.primary, // Border colour of focused panes/panels.
			"selection.background": color.text.selectionBg,
			//
			// BUTTONS [x]
			"button.foreground": color.text.inverse,
			"button.background": color.accent.primary,
			"button.hoverBackground": color.accent.primaryHover,
			"button.secondaryForeground": color.text.inverse, // Secondary button, e.g. `Cancel` on a delete file dialogue.
			"button.secondaryBackground": color.accent.secondary,
			"button.secondaryHoverBackground": color.accent.secondaryHover,
			//"button.border": "",
			"checkbox.foreground": color.accent.primary, // Colour of the tick itself.
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
			"dropdown.border": color.ui.border, // Border of the dropdown input itself, when not clicked.
			//
			// LISTS [x]
			...list,
			//"list.focusOutline": "", // Outline of focused entry in list.
			"list.focusBackground": color.diag.selection, // Background colour of a focused list entry when searching & matching.
			"list.focusForeground": color.text.normal, // Text colour of a focused list entry when searching & matching.
			// Un-focused list
			//"list.inactiveSelectionForeground": "",
			//"list.inactiveSelectionIconForeground": "",
			//"list.inactiveFocusOutline": "", //
			"list.inactiveFocusBackground": color.diag.selection, // ???
			// Other
			"list.dropBackground": color.ui.primaryDropBg,
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
			"progressBar.background": color.accent.primary,
			//
			// SMALL BADGES [x], e.g. # of changes in vcs panel, or # of problems
			...badges,
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
			"editorGroup.emptyBackground": color.ui.primaryBg, // Background of empty editor pane.
			//
			"editorGroup.dropIntoPromptForeground": color.text.normal,
			"editorGroup.dropIntoPromptBackground": color.ui.primaryBg,
			"editorGroup.dropIntoPromptBorder": "#00000000",
			// Individual tabs
			"tab.border": "#00000000", // | Borders between tabs |
			//
			"tab.activeForeground": color.text.normal,
			"tab.activeBackground": color.ui.primaryBg,
			"tab.unfocusedActiveForeground": color.text.muted,
			"tab.unfocusedActiveBackground": color.ui.primaryBg,
			"tab.activeBorder": "#00000000", // Bottom border for active tab.
			"tab.unfocusedActiveBorder": "#00000000",
			"tab.activeBorderTop": color.accent.primary, // Top border for active tab.
			"tab.unfocusedActiveBorderTop": color.ui.unfocusedTab,
			//
			"tab.lastPinnedBorder": color.ui.border, // Border between pinned and non-pinned tabs.
			//
			"tab.inactiveForeground": color.text.muted,
			"tab.inactiveBackground": color.ui.secondaryBg,
			"tab.unfocusedInactiveForeground": color.text.muted,
			"tab.unfocusedInactiveBackground": color.ui.secondaryBg,
			//
			"tab.hoverForeground": color.text.normal, // Text when hovering over a tab.
			"tab.unfocusedHoverForeground": color.text.normal, // Text when hovering over a tab.
			"tab.hoverBackground": color.ui.primaryBg, // Background when hovering over a tab.
			"tab.unfocusedHoverBackground": color.ui.primaryBg,
			"tab.hoverBorder": "#00000000",
			"tab.unfocusedHoverBorder": "#00000000",
			//
			"tab.activeModifiedBorder": "#00000000", // Top border for "dirty" files.
			"tab.unfocusedActiveModifiedBorder": "#00000000", // Top border for "dirty" files.
			"tab.inactiveModifiedBorder": "#00000000",
			"tab.unfocusedInactiveModifiedBorder": "#00000000",
			//
			"editorPane.background": color.ui.primaryBg, // Background to the left/right side when the editor pane is centred.
			"sideBySideEditor.horizontalBorder": color.ui.border,
			"sideBySideEditor.verticalBorder": color.ui.border,
			//
			// ACTIVITY BAR [x], icons on the left/right
			"activityBar.background": color.ui.primaryBg, // Background of the entire bar.
			"activityBar.dropBorder": color.accent.primary, // Colour for when re-arranging icons.
			"activityBar.border": color.ui.border, // Border between bar and sidebar/whatever main panel.
			"activityBar.foreground": color.accent.primary, // Icon selected/hover colour.
			"activityBar.inactiveForeground": color.ui.activityBarInactive, // Icon not-selected colour.
			//"activityBar.activeBackground": "", // Background of active icon.
			"activityBar.activeBorder": color.accent.primary, // Line next to active icon.
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
			"extensionIcon.sponsorForeground": color.ui.sponsor,
			"extensionBadge.remoteForeground": color.text.inverse,
			"extensionBadge.remoteBackground": color.ui.remote,
			"extensionButton.prominentForeground": color.text.inverse, // `Install` button
			"extensionButton.prominentBackground": color.accent.primary,
			"extensionButton.prominentHoverBackground": color.accent.primaryHover,
			//
			// VCS SIDEBAR [x]
			"scm.providerBorder": color.ui.border,
			//
			// SETTINGS PAGE [x]
			"settings.headerForeground": color.text.bold, // Titles and headings
			"settings.modifiedItemIndicator": color.accent.primary, // Strip at the side of any modified settings.
			"settings.rowHoverBackground": "#00000000", // Background colour of the currently active setting.
			"settings.focusedRowBackground": "#00000000",
			"settings.focusedRowBorder": color.ui.border,
			//
			// WELCOME PAGE [x]
			"welcomePage.background": color.ui.primaryBg,
			"welcomePage.progress.foreground": color.accent.primary,
			"welcomePage.progress.background": color.ui.primaryBg,
			"welcomePage.tileBackground": color.ui.secondaryBg,
			"welcomePage.tileHoverBackground": color.ui.selectedSecondaryBg,
			"welcomePage.tileShadow": color.ui.shadow,
			"walkThrough.embeddedEditorBackground": color.ui.primaryBg,
			//
			// PANEL [x]
			"panel.background": color.ui.primaryBg,
			"panel.border": color.ui.border, // Border between panel and main editor pane.
			"panelSection.border": color.ui.border,
			//"panelInput.border": "", // ???
			//"panel.dropBorder": "", // ???
			"panelTitle.activeForeground": color.accent.primary, // Panel tabs, e.g. `Problems` or `Terminal`.
			"panelTitle.activeBorder": color.accent.primary, // Active tab underline.
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
			"debugConsole.infoForeground": color.debug.info,
			"debugConsole.warningForeground": color.debug.warning,
			"debugConsole.errorForeground": color.debug.error,
			"debugConsole.sourceForeground": color.debug.source,
			"debugConsoleInputIcon.foreground": color.debug.input,
			//"debugView.exceptionLabelForeground": "",
			//"debugView.exceptionLabelBackground": "",
			//"debugView.stateLabelForeground": "",
			//"debugView.stateLabelForeground": "",
			//"debugView.valueChangedHighlight": "",
			//
			"debugTokenExpression.name": color.text.normal,
			"debugTokenExpression.value": color.text.normal,
			"debugTokenExpression.string": syntax.yellow,
			"debugTokenExpression.boolean": syntax.cyan,
			"debugTokenExpression.number": syntax.orange,
			"debugTokenExpression.error": syntax.strongPink,
			//
			// NOTIFICATIONS [x]
			//"notifications.foreground": "",
			"notifications.background": color.ui.primaryBg,
			//"notificationToast.border": "", // Border of notification pop-ups.
			"notifications.border": color.ui.border, // Border between notifications in notification centre.
			"notificationCenterHeader.background": color.ui.secondaryBg,
			"notificationCenterHeader.foreground": color.text.normal,
			//"notificationCenter.border": "", // Border of notification centre pop-up.
			"notificationsInfoIcon.foreground": color.diag.info,
			"notificationsWarningIcon.foreground": color.diag.warning,
			"notificationsErrorIcon.foreground": color.diag.error,
			"notificationLink.foreground": color.accent.primary, // ???
			//
			// DROP DOWN COMMAND BAR [x]
			...commandBar,
			"keybindingLabel.foreground": color.text.normal,
			"keybindingLabel.background": color.ui.selectedBgA,
			//"keybindingLabel.border": "", // Border when option is selected in command bar.
			//"keybindingLabel.bottomBorder": "",
			"keybindingTable.headerBackground": color.ui.secondaryBg,
			"keybindingTable.rowsBackground": color.ui.secondaryBg, // Background of every other row.
			//
			// COMMAND CENTER [x]
			"commandCenter.foreground": color.text.normal,
			"commandCenter.background": color.ui.primaryBg,
			"commandCenter.border": color.ui.border,
			"commandCenter.activeForeground": color.text.normal, // Text when hovering over.
			"commandCenter.activeBackground": color.ui.selectedBg, // Background when hovering over.
			//
			//
			//
			// WINDOW [x]
			"titleBar.activeForeground": color.text.normal,
			"titleBar.activeBackground": color.ui.secondaryBg,
			"titleBar.inactiveForeground": color.text.light,
			"titleBar.inactiveBackground": color.ui.secondaryBg,
			//"titleBar.border": "",
			...menu,
			//"window.activeBorder": "",
			//"window.inactiveBorder": "",
			"sash.hoverBorder": color.accent.primary, // Dragable border to resize panes.
			//
			// BANNER [x]
			...banner,
			//
			// STATUS BAR [x]
			...statusBar,
			//"statusBar.border": "",
			// When no folder open.
			"statusBar.noFolderForeground": color.text.normal,
			"statusBar.noFolderBackground": color.ui.statusEmptyBg,
			//"statusBar.noFolderBorder": "",
			// When debugging.
			"statusBar.debuggingForeground": color.text.inverse,
			"statusBar.debuggingBackground": color.ui.statusDebugBg,
			//"statusBar.debuggingBorder": "",
			//
			//
			//
			// SYMBOLS [x]
			"symbolIcon.arrayForeground": syntax.fg,
			"symbolIcon.booleanForeground": syntax.cyan,
			"symbolIcon.classForeground": syntax.green,
			"symbolIcon.colorForeground": color.text.normal,
			"symbolIcon.constantForeground": syntax.cyan,
			"symbolIcon.enumeratorForeground": syntax.green,
			"symbolIcon.enumeratorMemberForeground": syntax.cyan,
			"symbolIcon.eventForeground": color.text.normal,
			"symbolIcon.fieldForeground": syntax.mauve,
			"symbolIcon.fileForeground": color.text.normal,
			"symbolIcon.folderForeground": color.text.normal,
			"symbolIcon.functionForeground": syntax.blue,
			"symbolIcon.interfaceForeground": syntax.purple,
			"symbolIcon.keyForeground": syntax.pink,
			"symbolIcon.keywordForeground": syntax.pink,
			"symbolIcon.methodForeground": syntax.blue,
			"symbolIcon.moduleForeground": syntax.fg,
			"symbolIcon.namespaceForeground": syntax.fg,
			"symbolIcon.nullForeground": syntax.pink,
			"symbolIcon.numberForeground": syntax.orange,
			"symbolIcon.objectForeground": syntax.green,
			"symbolIcon.operatorForeground": syntax.gray,
			"symbolIcon.packageForeground": syntax.fg,
			"symbolIcon.propertyForeground": syntax.mauve,
			"symbolIcon.referenceForeground": syntax.pink,
			"symbolIcon.snippetForeground": syntax.pink,
			"symbolIcon.stringForeground": syntax.yellow,
			"symbolIcon.structForeground": syntax.green,
			"symbolIcon.textForeground": color.text.normal,
			"symbolIcon.typeParameterForeground": syntax.green,
			"symbolIcon.unitForeground": syntax.orange,
			"symbolIcon.variableForeground": syntax.fg,
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
			"testing.message.error.lineBackground": color.diag.errorBgA,
			"testing.message.error.decorationForeground": color.diag.error,
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
			"terminal.background": color.ui.primaryBg,
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
			"terminal.inactiveSelectionBackground": color.text.secondarySelectionBgA,
			"terminal.findMatchBackground": color.text.matchBg, // Currently selected match.
			"terminal.findMatchBorder": color.text.matchBorderA, // Currently selected match.
			"terminal.findMatchHighlightBackground": color.text.matchBgA, // Other matches.
			"terminal.findMatchHighlightBorder": "#00000000", // Other matches.
			"terminalOverviewRuler.cursorForeground": color.accent.primary,
			"terminalOverviewRuler.findMatchForeground": color.diag.match,
			//
			"terminalCommandDecoration.defaultBackground": color.terminal.default,
			"terminalCommandDecoration.successBackground": color.terminal.success,
			"terminalCommandDecoration.errorBackground": color.terminal.error,
			//
			"terminalCursor.foreground": color.accent.primary,
			"terminalCursor.background": color.ui.primaryBg, // Colour of text when selected by block cursor.
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
				TODO: {
					foreground: color.ui.primaryBg,
					background: color.todo.todo,
					icon: "checklist",
					iconColour: color.todo.todo,
					gutterIcon: true,
				},
				FIXME: {
					foreground: color.ui.primaryBg,
					background: color.todo.fixme,
					icon: "tools",
					iconColour: color.todo.fixme,
					gutterIcon: true,
				},
				BUG: {
					foreground: color.ui.primaryBg,
					background: color.todo.bug,
					icon: "alert",
					iconColour: color.todo.bug,
					gutterIcon: true,
				},
				HACK: {
					foreground: color.ui.primaryBg,
					background: color.todo.hack,
					icon: "flame",
					iconColour: color.todo.hack,
					gutterIcon: true,
				},
				MAYBE: {
					foreground: color.ui.primaryBg,
					background: color.todo.maybe,
					icon: "info",
					iconColour: color.todo.maybe,
					gutterIcon: true,
				},
				"[ ]": {
					foreground: color.ui.primaryBg,
					background: color.todo.unchecked,
					icon: "checklist",
					iconColour: color.todo.unchecked,
					gutterIcon: true,
				},
				"[x]": {
					foreground: color.todo.checked,
					background: color.ui.primaryBg,
					icon: "checklist",
					iconColour: color.todo.checked,
					gutterIcon: true,
				},
			},
		},
		semanticHighlighting: true,
		semanticTokenColors: {
			//
			keyword: syntax.pink,
			type: syntax.pink,
			builtinType: syntax.pink,
			selfKeyword: syntax.pink,
			newOperator: syntax.pink,
			"plainKeyword:csharp": syntax.pink,
			"controlKeyword:csharp": syntax.pink,
			//
			//
			punctuation: syntax.gray,
			operator: syntax.gray,
			arithmetic: syntax.gray,
			comparison: syntax.gray,
			logical: syntax.gray,
			bitwise: syntax.gray,
			//
			//
			function: syntax.blue, // Static function.
			"member.static:csharp": {
				// Static function.
				foreground: syntax.blue,
				fontStyle: "underline",
			},
			"method.static:typescript": {
				// Static method.
				foreground: syntax.blue,
				fontStyle: "underline",
			},
			method: syntax.blue, // Object method.
			"member:csharp": syntax.blue, // Object method.
			macro: syntax.blue,
			namespace: syntax.fg,
			struct: syntax.green,
			class: syntax.green,
			"class.static:csharp": {
				// Static class.
				foreground: syntax.green,
				fontStyle: "underline",
			},
			enum: syntax.green,
			union: syntax.green,
			typeAlias: syntax.green,
			enumMember: syntax.cyan,
			boolean: syntax.cyan,
			//
			//
			interface: syntax.purple, // Rust: `MyTrait`
			typeParameter: syntax.green, // Generic type annotation, e.g. `T`
			//
			//
			variable: syntax.fg,
			"local:csharp": syntax.fg, // Local variable.
			parameter: syntax.lightBlue,
			property: syntax.mauve, // Object members.
			"field:csharp": syntax.mauve, // Object members.
			"field.static:csharp": {
				// Static object members.
				foreground: syntax.mauve,
				fontStyle: "underline",
			},
			"property:csharp": {
				// Csharp properties.
				foreground: syntax.mauve,
				fontStyle: "bold",
			},
			"property.static:csharp": {
				// Cssharp static properties.
				foreground: syntax.mauve,
				fontStyle: "bold underline",
			},
			"property.static:typescript": {
				// Typescript static members.
				foreground: syntax.mauve,
				fontStyle: "underline",
			},
			"*.constant": syntax.cyan,
			"variable.static:csharp": syntax.cyan, // Constants
			"variable.readonly:csharp": syntax.cyan, // Constants
			"variable.readonly:javascript": syntax.cyan, // Constants
			"variable.readonly:typescript": syntax.cyan, // Constants
			//
			//
			string: syntax.yellow, // `"string"`
			"stringVerbatim:csharp": syntax.yellow,
			escapeSequence: syntax.orange, // `\n`
			character: syntax.orange, // `'b'`
			number: syntax.orange,
			...commentSemanticStyles,
			//
			//
			//attribute: syntax.attribute, // The #[]!() symbols in an attribute.
			unresolvedReference: {
				foreground: syntax.strongPink,
			},
			//
			// CSHARP
			xmlDocCommentText: syntax.fg,
			"xmlDocCommentName:csharp": syntax.fadedGray,
			"xmlDocCommentDelimiter:csharp": syntax.fadedGray,
			"xmlDocCommentAttributeName:csharp": syntax.orange,
			"xmlDocCommentAttributeQuotes:csharp": syntax.yellow,
			"xmlDocCommentAttributeValue:csharp": syntax.yellow,
			//
			// RUST
			"operator.controlFlow:rust": syntax.pink,
			"label:rust": syntax.lime,
			"lifetime:rust": syntax.purple,
			"formatSpecifier:rust": syntax.purple,
			"macroBang:rust": syntax.blue, // The ! in a macro call.
			//
			// REFERENCE
			"variable.reference": {
				fontStyle: "italic",
			},
			"method.reference": {
				fontStyle: "italic",
			},
			"function.reference": {
				fontStyle: "italic",
			},
			"parameter.reference": {
				fontStyle: "italic",
			},
			"selfKeyword.reference": {
				fontStyle: "italic",
			},
			//
			// MUTABLE
			"variable.mutable": {
				foreground: syntax.boldFg,
				fontStyle: "bold",
			},
			"method.mutable": {
				foreground: syntax.boldBlue,
				fontStyle: "bold",
			},
			"function.mutable": {
				foreground: syntax.boldBlue,
				fontStyle: "bold",
			},
			"parameter.mutable": {
				foreground: syntax.boldLightBlue,
				fontStyle: "bold",
			},
			"selfKeyword.mutable": {
				foreground: syntax.boldPink,
				fontStyle: "bold",
			},
			//
			// MUTABLE REFERENCE
			"variable.mutable.reference": {
				foreground: syntax.boldFg,
				fontStyle: "italic bold",
			},
			"method.mutable.reference": {
				foreground: syntax.boldBlue,
				fontStyle: "italic bold",
			},
			"function.mutable.reference": {
				foreground: syntax.boldBlue,
				fontStyle: "italic bold",
			},
			"parameter.mutable.reference": {
				foreground: syntax.boldLightBlue,
				fontStyle: "italic bold",
			},
			"selfKeyword.mutable.reference": {
				foreground: syntax.boldPink,
				fontStyle: "italic bold",
			},
			// Unset the underline effect, since something like `+=` would otherwise be underlined.
			"arithmetic.mutable": {
				fontStyle: "",
			},
			// Also unset.
			"bitwise.mutable": {
				fontStyle: "",
			},
			//
			// UNSAFE
			"*.unsafe": syntax.orange,
			"keyword.unsafe": {
				fontStyle: "bold underline",
			},
			"function.unsafe": {
				fontStyle: "underline",
			},
			"function.mutable.unsafe": {
				fontStyle: "bold underline",
			},
			"function.mutable.reference.unsafe": {
				fontStyle: "bold underline italic",
			},
			"method.unsafe": {
				fontStyle: "underline",
			},
			"method.mutable.unsafe": {
				fontStyle: "bold underline",
			},
			"method.mutable.reference.unsafe": {
				fontStyle: "bold underline italic",
			},
			//
			// ATTRIBUTES
			"attributeBracket.attribute:rust": syntax.orange,
			"builtinAttribute.attribute:rust": syntax.orange,
			"toolModule.attribute:rust": syntax.orange,
			"decorator.attribute:rust": syntax.orange,
			"derive.attribute:rust": syntax.orange,
			"generic.attribute:rust": syntax.orange,
			"parenthesis.attribute:rust": syntax.orange,
			//
			// TOML - Even Better TOML only
			tomlTableKey: syntax.lime,
			tomlArrayKey: syntax.purple,
		},
		tokenColors: [
			// BASICS
			{
				name: "Keywords",
				scope: [
					"keyword",
					"storage.type",
					"storage.modifier",
					"punctuation.definition.directive.c",
					"punctuation.definition.directive.cpp",
					"keyword.type.go",
					"storage.class.d",
					"markup.deleted.git_gutter",
					"entity.name.tag.css",
					"punctuation.definition.keyword.css",
					"entity.name.tag.wildcard.css",
					// rust
					"storage.modifier.mut.rust",
					"storage.modifier.type.rust",
					"variable.language.self.rust",
					// csharp
					"storage.modifier.cs",
					"keyword.other.this.cs",
					// powershell
					"keyword.control.powershell",
					"storage.type.powershell",
					"meta.function.powershell",
					// js
					"variable.language.this.js",
					"keyword.operator.new.js",
					"storage.type.js",
					"constant.language.null.js",
					"constant.language.undefined.js",
					"keyword.operator.ternary.js",
					// ts
					"variable.language.this.ts",
					"keyword.operator.new.ts",
					"storage.type.ts",
					"storage.type.namespace.ts",
					"variable.language.this.ts",
					"constant.language.null.ts",
					"constant.language.undefined.ts",
					"keyword.operator.ternary.ts",
					"keyword.operator.expression.of.ts",
				],
				settings: {
					foreground: syntax.pink,
				},
			},
			{
				name: "Built-in Types",
				scope: [
					// rust
					"entity.name.type.primitive.rust",
					"entity.name.type.numeric.rust",
					// csharp
					"keyword.type.cs",
					// js
					"support.type.primitive.js",
					// ts
					"support.type.primitive.ts",
				],
				settings: {
					foreground: syntax.pink,
				},
			},
			{
				name: "Punctuation & Operators",
				scope: [
					"punctuation",
					"keyword.operator",
					//
					"keyword.operator.sigil.rust",
					"keyword.operator.access.dot.rust",
					"keyword.operator.key-value.rust",
					"keyword.operator.attribute.inner.rust",
					"punctuation.definition.tag",
					"punctuation.definition.tag.html",
					"punctuation.definition.tag.begin.html",
					"punctuation.definition.tag.end.html",
					// js
					"meta.brace.round.js",
					"meta.brace.square.js",
					// ts
					"meta.brace.round.ts",
					"meta.brace.square.ts",
					// html
					"punctuation.definition.string.begin.html",
					"punctuation.definition.string.end.html",
					// xml
					"punctuation.definition.string.begin.xml",
					"punctuation.definition.string.end.xml",
					// markdown
					"punctuation.definition.string.markdown",
					// json
					"punctuation.support.type.property-name.begin.json",
					"punctuation.support.type.property-name.end.json",
					"punctuation.definition.string.begin.json",
					"punctuation.definition.string.end.json",
				],
				settings: {
					foreground: syntax.gray,
					fontStyle: "",
				},
			},
			//
			//
			//
			{
				// Free-standing functions and object methods.
				name: "Function and Methods",
				scope: [
					"entity.name.function",
					"meta.function-call",
					"variable.function",
					"support.function",
					"keyword.other.special-method",
					"keyword.other.common.function",
					// rust
					"entity.name.function.rust",
					// csharp
					"entity.name.function.cs",
					// powershell
					"support.function.powershell",
					// js
					"entity.name.function.js",
					// ts
					"entity.name.function.ts",
					// css
					"support.function.misc.css",
					"support.function.misc.scss",
				],
				settings: {
					foreground: syntax.blue,
				},
			},
			{
				// Macros and other fancy functions.
				name: "Special functions, Hygienic Macros, etc",
				scope: [
					"support.function.macro.rust",
					"support.function.macro.builtin.rust",
					"support.function.macro.core.rust",
					"entity.name.type.macro.rust",
					"entity.name.function.macro.rust",
					"entity.name.function.macro.rules.rust",
					"support.function.macro.julia",
					"support.function.builtin.zig",
				],
				settings: {
					foreground: syntax.blue,
				},
			},
			{
				name: "Classes, Enum types",
				scope: [
					"support.type",
					"support.class",
					"support.other.namespace.use.php",
					"meta.use.php",
					"support.other.namespace.php",
					"markup.changed.git_gutter",
					"support.type.sys-types",
					"entity.other.attribute-name.table.toml",
					"variable.key.table.toml",
					"storage.type.haskell",
					"storage.type.java",
					"storage.type.primitive.java",
					"storage.type.object.array.java",
					"storage.type.c",
					"storage.type.built-in.c",
					"meta.function.definition.parameters.c",
					"storage.type.built-in.cpp",
					"storage.type.built-in.primitive.cpp",
					"entity.name.class.kotlin",
					"storage.type.go",
					"storage.type.boolean.go",
					"storage.type.byte.go",
					"storage.type.error.go",
					"storage.type.numeric.go",
					"storage.type.rune.go",
					"storage.type.string.go",
					"storage.type.uintptr.go",
					"storage.type.concrete.nim",
					"storage.type.basic-type.d",
					"storage.type.d",
					"support.type.python",
					"basicTypes.nim",
					"meta.class.stanza.dune",
					"storage.type.cs",
					// rust
					"entity.name.type.rust",
					"entity.name.type.struct.rust",
					"entity.name.type.enum.rust",
					"entity.name.type.union.rust",
					"entity.name.type.declaration.rust",
					// csharp
					"storage.type.cs",
					"entity.name.type.class.cs",
					"entity.name.type.struct.cs",
					"entity.name.type.enum.cs",
					// js
					"entity.name.type.class.js",
					"support.class.builtin.js",
					"support.class.component.js",
					// ts
					"entity.name.type.class.ts",
				],
				settings: {
					foreground: syntax.green,
				},
			},
			{
				name: "Enum variant, Sum Types, etc",
				scope: [
					"constant.other.haskell",
					"variable.other.enummember.cpp",
					// rust
					"support.enum.core.rust",
					"entity.name.type.option.rust",
					"entity.name.type.result.rust",
					"constant.language.bool.rust",
					// csharp
					"entity.name.variable.enum-member.cs",
					"constant.language.boolean.true.cs",
					"constant.language.boolean.false.cs",
					// powershell,
					"constant.language.powershell",
					"constant.language.powershell punctuation.definition.variable.powershell",
					// js
					"constant.language.boolean.true.js",
					"constant.language.boolean.false.js",
					// ts
					"variable.other.enummember.ts",
					"constant.language.boolean.true.ts",
					"constant.language.boolean.false.ts",
					// yaml
					"constant.language.boolean.yaml",
					// toml
					// Even Better TOML
					"constant.language.boolean.toml",
				],
				settings: {
					foreground: syntax.cyan,
				},
			},
			//
			//
			//
			{
				name: "Interfaces",
				scope: [
					// rust
					"entity.name.type.trait.rust",
					// ts
					"entity.name.type.interface.ts",
				],
				settings: {
					foreground: syntax.purple,
				},
			},
			{
				name: "Type Parameters",
				scope: [
					// rust
					"entity.name.type.type-parameter.cs",
				],
				settings: {
					foreground: syntax.green,
				},
			},
			//
			//
			//
			{
				// Variable declarations and uses.
				name: "Variables",
				scope: [
					"variable",
					"meta.function-call.arguments",
					"string constant.other.placeholder",
					"meta.function-call.java",
					"storage.modifier.import.java",
					"variable.other.object",
					// rust
					"variable.other.rust",
					// csharp
					"entity.name.variable.local.cs",
					"variable.other.readwrite.cs",
					// js
					"variable.other.readwrite.js",
					"variable.other.constant.js",
					// ts
					"",
					// css
					"variable.css",
					"variable.argument.css",
					"variable.scss",
				],
				settings: {
					foreground: syntax.fg,
				},
			},
			{
				name: "Parameters",
				scope: [
					"variable.parameter",
					"keyword.other.self.rust",
					"meta.parens.block.c",
					"variable.css",
					// "meta.function.definition.parameters",
					// csharp
					"entity.name.variable.parameter.cs",
					// js
					"variable.parameter.js",
					// ts
					"variable.parameter.ts",
				],
				settings: {
					foreground: syntax.lightBlue,
				},
			},
			{
				name: "Members",
				scope: [
					// csharp
					"entity.name.variable.field.cs",
					"variable.other.object.property.cs",
					// powershell
					"variable.other.member.powershell",
					// js
					"variable.other.property.js",
					// ts
					"variable.object.property.ts",
					"variable.other.property.ts",
				],
				settings: {
					foreground: syntax.mauve,
				},
			},
			{
				name: "Constants",
				scope: [
					// rust
					"constant.other.caps.rust",
					// csharp
					"constant.language.null.cs",
					// powershell
					"support.constant.variable.powershell",
					"support.constant.variable.powershell punctuation.definition.variable.powershell",
					// js
					"variable.other.constant.js",
					// ts
					"variable.other.constant.ts",
					// json
					"constant.language.json",
					// toml
					// Better TOML
					"constant.other.boolean.toml",
				],
				settings: {
					foreground: syntax.cyan,
				},
			},
			//
			//
			//
			{
				name: "String & character",
				scope: [
					"string",
					"punctuation.definition.string",
					"constant.other.symbol",
					"constant.other.key",
					"meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
					// rust
					"string.quoted.double.rust",
					"punctuation.definition.string.rust",
					// csharp
					"string.quoted.double.cs",
					"punctuation.definition.string.begin.cs",
					"punctuation.definition.string.end.cs",
					// powershell
					"string.quoted.double.powershell",
					"string.quoted.single.powershell",
					"punctuation.definition.string.begin.powershell",
					"punctuation.definition.string.end.powershell",
					// js
					"string.quoted.single.js",
					"string.quoted.double.js",
					"string.template.js",
					"punctuation.definition.string.begin.js",
					"punctuation.definition.string.end.js",
					"punctuation.definition.string.template.begin.js",
					"punctuation.definition.string.template.end.js",
					// ts
					"string.quoted.single.ts",
					"string.quoted.double.ts",
					"string.template.ts",
					"punctuation.definition.string.begin.ts",
					"punctuation.definition.string.end.ts",
					"punctuation.definition.string.template.begin.ts",
					"punctuation.definition.string.template.end.ts",
					// css
					"string.quoted.double.css",
					"string.quoted.double.scss",
					"string.quoted.single.css",
					"string.quoted.single.scss",
					// xml
					"string.quoted.single.xml",
					"string.quoted.double.xml",
					// json
					"string.quoted.double.json",
					// yaml
					"string.unquoted.plain.out.yaml",
					"string.unquoted.block.yaml",
					"punctuation.definition.string.begin.yaml",
					"punctuation.definition.string.end.yaml",
					"string.quoted.single.yaml",
					"string.quoted.double.yaml",
					// toml
					// Better TOML & Even Better TOML
					"string.quoted.single.basic.line.toml",
					"string.quoted.triple.basic.block.toml",
					"string.quoted.single.literal.line.toml",
					"string.quoted.triple.literal.block.toml",
					// ini
					"string.quoted.single.ini",
					"string.quoted.double.ini",
					"punctuation.definition.string.begin.ini",
					"punctuation.definition.string.end.ini",
					// bnf
					"string.quoted.double.bnf",
					"string.quoted.single.bnf",
				],
				settings: {
					foreground: syntax.yellow,
				},
			},
			{
				name: "Escape characters",
				scope: [
					"constant.character.escape",
					// rust
					"constant.character.escape.rust",
					// csharp
					"constant.character.escape.cs",
					// powershell
					"constant.character.escape.powershell",
					// js
					"constant.character.escape.js",
					// ts
					"constant.character.escape.ts",
					// xml
					"punctuation.definition.constant.xml",
					"constant.character.entity.xml",
					// yaml
					"constant.character.escape.yaml",
					// toml
					// Better TOML & Even Better TOML
					"constant.character.escape.toml", // (Only within multi-line strings for Better TOML)
				],
				settings: {
					foreground: syntax.orange,
				},
			},
			{
				name: "Character literals",
				scope: [
					// rust
					"punctuation.definition.char.rust",
					"string.quoted.single.char.rust",
					// csharp
					"punctuation.definition.char.begin.cs",
					"punctuation.definition.char.end.cs",
					"string.quoted.single.cs",
				],
				settings: {
					foreground: syntax.orange,
				},
			},
			{
				name: "Number literals",
				scope: [
					"constant.numeric",
					// rust
					"constant.numeric.decimal.rust",
					"constant.numeric.bin.rust",
					"constant.numeric.hex.rust",
					"constant.numeric.oct.rust",
					"punctuation.separator.dot.decimal.rust",
					// csharp
					"constant.numeric.binary.cs",
					"constant.numeric.decimal.cs",
					"constant.numeric.hex.cs",
					// powershell
					"constant.numeric.integer.powershell",
					"constant.numeric.hex.powershell",
					"constant.numeric.octal.powershell",
					// js
					"constant.numeric.binary.js",
					"constant.numeric.decimal.js",
					"constant.numeric.hex.js",
					"constant.numeric.octal.js",
					// ts
					"constant.numeric.binary.ts",
					"constant.numeric.decimal.ts",
					"constant.numeric.hex.ts",
					"constant.numeric.octal.ts",
					// css
					"constant.numeric.css",
					// json
					"constant.numeric.json",
					// yaml
					"constant.numeric.integer.yaml",
					"constant.numeric.float.yaml",
					// toml
					// Better TOML
					"constant.numeric.integer.toml",
					"constant.numeric.float.toml",
					// Even Better TOML
					"constant.numeric.bin.toml",
					"constant.numeric.hex.toml",
					"constant.numeric.oct.toml",
					"constant.numeric.inf.toml",
					"constant.numeric.nan.toml",
				],
				settings: {
					foreground: syntax.orange,
				},
			},
			{
				name: "Comment",
				scope: [
					"comment",
					"punctuation.definition.comment",
					// csharp
					"comment.block.cs",
					"comment.line.double-slash.cs",
					// powershell
					"comment.line.powershell",
					// js
					"comment.block.documentation.js",
					"comment.line.double-slash.js",
					// ts
					"comment.block.documentation.ts",
					"comment.line.double-slash.ts",
					// xml
					"comment.block.xml",
					"punctuation.definition.comment.xml",
					// json
					"comment",
					"comment.line.double-slash.js",
					"comment.block.json",
					// yaml
					"punctuation.definition.comment.yaml",
					"comment.line.number-sign.yaml",
					// toml
					"punctuation.definition.comment.toml",
					"comment.line.number-sign.toml",
					// ini
					"punctuation.definition.comment.ini",
					"comment.line.semicolon.ini",
					"comment.line.number-sign.ini",
					// bnf
					"comment.line.bnf",
					"comment.block.bnf",
				],
				...commentStyles,
			},
			//
			//
			//
			{
				name: "Attributes",
				scope: [
					// rust
					"meta.attribute.rust",
					"meta.attribute.rust punctuation.definition.attribute.rust",
					"meta.attribute.rust punctuation.brackets.attribute.rust",
					"meta.attribute.rust punctuation.brackets.round.rust",
					"meta.attribute.rust entity.name.type.rust",
					// powershell
					"support.function.attribute.powershell",
					"variable.parameter.attribute.powershell",
				],
				settings: {
					foreground: syntax.orange,
				},
			},
			{
				name: "Unresolved Symbol",
				scope: ["invalid", "invalid.illegal"],
				settings: {
					foreground: syntax.strongPink,
				},
			},
			{
				name: "URL",
				scope: ["*url*", "*link*", "*uri*"],
				settings: {
					fontStyle: "underline",
				},
			},
			//
			// RUST
			//
			{
				name: "? Operator",
				scope: ["keyword.operator.misc.question-mark.rust", "keyword.operator.question.rust"],
				settings: {
					foreground: syntax.pink,
				},
			},
			{
				name: "Lifetimes",
				scope: [
					"punctuation.definition.lifetime.rust",
					"entity.name.type.lifetime.rust",
					"storage.modifier.lifetime.rust",
				],
				settings: {
					foreground: syntax.purple,
				},
			},
			{
				name: "Format Specifier",
				scope: ["meta.interpolation.rust", "punctuation.definition.interpolation.rust"],
				settings: {
					foreground: syntax.purple,
				},
			},
			{
				name: "Macro declaration variable specifier",
				scope: ["variable.other.metavariable.specifier.rust"],
				settings: {
					foreground: syntax.lime,
				},
			},
			//
			// CSHARP
			//
			{
				name: "Csharp - Doc Tag",
				scope: [
					"entity.name.tag.cs",
					"comment.block.documentation.cs punctuation.definition.tag.cs",
					"comment.block.documentation.cs punctuation.separator.equals.cs",
				],
				settings: {
					foreground: syntax.fadedGray,
				},
			},
			{
				name: "Csharp - Doc Tag Attribute",
				scope: ["entity.other.attribute-name.cs"],
				settings: {
					foreground: syntax.orange,
				},
			},
			{
				name: "Csharp - Doc Text",
				scope: ["comment.block.documentation.cs"],
				settings: {
					foreground: syntax.fg,
				},
			},
			{
				name: "Csharp - String Interpolation",
				scope: [
					"punctuation.definition.interpolation.begin.cs",
					"punctuation.definition.interpolation.end.cs",
				],
				settings: {
					foreground: syntax.purple,
				},
			},
			//
			// POWERSHELL
			//
			{
				name: "Powershell Variables",
				scope: [
					"variable.other.readwrite.powershell",
					"punctuation.definition.variable.powershell",
					"storage.modifier.scope.powershell",
				],
				settings: {
					foreground: syntax.green,
				},
			},
			{
				name: "Powershell Variable/Storage Scopes",
				scope: ["storage.modifier.scope.powershell", "support.variable.drive.powershell"],
				settings: {
					foreground: syntax.green,
					fontStyle: "underline",
				},
			},
			{
				name: "Powershell Special/Built-In Variables",
				scope: [
					"support.variable.automatic.powershell",
					"support.variable.automatic.powershell punctuation.definition.variable.powershell",
					"variable.language.powershell",
					"variable.language.powershell punctuation.definition.variable.powershell",
				],
				settings: {
					foreground: syntax.purple,
				},
			},
			{
				name: "Powershell Operators",
				scope: ["keyword.operator.comparison.powershell", "keyword.operator.logical.powershell"],
				settings: {
					foreground: syntax.pink,
				},
			},
			{
				name: "Powershell Comment Keywords",
				scope: "keyword.operator.documentation.powershell",
				settings: {
					foreground: syntax.fg,
				},
			},
			{
				name: "Powershell String Interpolation",
				scope: [
					"punctuation.section.embedded.substatement.begin.powershell",
					"punctuation.section.embedded.substatement.end.powershell",
				],
				settings: {
					foreground: syntax.purple,
				},
			},
			//
			// JS
			//
			{
				name: "JS - String Interpolation",
				scope: [
					"punctuation.definition.template-expression.begin.js",
					"punctuation.definition.template-expression.end.js",
				],
				settings: {
					foreground: syntax.purple,
				},
			},
			{
				name: "JS - Regexp Group",
				scope: ["punctuation.definition.group.regexp", "punctuation.definition.group.no-capture.regexp"],
				settings: {
					foreground: syntax.fg,
				},
			},
			{
				name: "JS - Regexp Characters",
				scope: [
					"constant.other.character-class.regexp",
					"keyword.operator.quantifier.regexp",
					"keyword.control.anchor.regexp",
					"punctuation.definition.look-ahead.regexp",
					"meta.assertion.look-ahead.regexp",
					"meta.group.assertion.regexp",
				],
				settings: {
					foreground: syntax.purple,
				},
			},
			//
			// JSX REACT
			//
			{
				name: "JSX - Embedded Code",
				scope: ["punctuation.section.embedded.begin.js", "punctuation.section.embedded.end.js"],
				settings: {
					foreground: syntax.orange,
					fontStyle: "bold",
				},
			},
			{
				name: "JSX - Attributes",
				scope: ["entity.other.attribute-name.js"],
				settings: {
					foreground: syntax.purple,
					fontStyle: "italic",
				},
			},
			//
			// TS
			//
			{
				name: "TS - String Interpolation",
				scope: [
					"punctuation.definition.template-expression.begin.ts",
					"punctuation.definition.template-expression.end.ts",
				],
				settings: {
					foreground: syntax.purple,
				},
			},
			//
			// HTML
			//
			{
				name: "HTML - Tags",
				scope: ["entity.name.tag.html"],
				settings: {
					foreground: syntax.pink,
				},
			},
			{
				name: "HTML - IDs",
				scope: ["meta.attribute.id.html string.quoted.double.html", "entity.other.attribute-name.id.css"],
				settings: {
					foreground: syntax.orange,
					fontStyle: "bold",
				},
			},
			{
				name: "HTML - Classes",
				scope: [
					"meta.attribute.class.html string.quoted.double.html",
					"entity.other.attribute-name.class.css",
				],
				settings: {
					foreground: syntax.green,
				},
			},
			{
				name: "HTML - Attributes",
				scope: ["entity.other.attribute-name.html", "entity.other.attribute-name.css"],
				settings: {
					foreground: syntax.cyan,
					fontStyle: "italic",
				},
			},
			{
				name: "HTML - Attribute Value",
				scope: ["meta.attribute", "meta.attribute-selector.css string.quoted.double.css"],
				settings: {
					foreground: syntax.yellow,
				},
			},
			{
				name: "HTML - Links",
				scope: [
					"meta.attribute.href.html string.quoted.double.html",
					"meta.attribute.src.html string.quoted.double.html",
					"meta.attribute.unrecognized.xmlns.html string.quoted.double.html",
				],
				settings: {
					foreground: syntax.purple,
				},
			},
			{
				name: "HTML - Embedded CSS",
				scope: ["meta.embedded.line.css"],
				settings: {
					foreground: syntax.lime,
				},
			},
			//
			// CSS
			//
			{
				name: "CSS - Tags",
				scope: ["entity.name.tag.css"],
				settings: {
					foreground: syntax.pink,
				},
			},
			{
				name: "CSS - Properties",
				scope: [
					"support.type.property-name.css",
					"meta.property-name.css",
					"meta.property-name.scss",
					"support.type.property-name.media.css",
				],
				settings: {
					foreground: syntax.mauve,
				},
			},
			{
				name: "CSS - Property Values",
				scope: ["support.constant.property-value.css"],
				settings: {
					foreground: syntax.cyan,
				},
			},
			{
				name: "CSS - Fontname Selector",
				scope: ["support.constant.font-name.css"],
				settings: {
					foreground: syntax.yellow,
				},
			},
			{
				name: "CSS - Pseudoclass Selector",
				scope: [
					"entity.other.attribute-name.pseudo-class.css",
					"entity.other.attribute-name.pseudo-element.css",
				],
				settings: {
					foreground: syntax.lime,
				},
			},
			{
				name: "CSS - Units",
				scope: [
					"keyword.other.unit.rem.css",
					"keyword.other.unit.em.css",
					"keyword.other.unit.ex.css",
					"keyword.other.unit.ch.css",
					"keyword.other.unit.vw.css",
					"keyword.other.unit.vh.css",
					"keyword.other.unit.vmin.css",
					"keyword.other.unit.vmax.css",
					"keyword.other.unit.percentage.css",
					"keyword.other.unit.mm.css",
					"keyword.other.unit.in.css",
					"keyword.other.unit.px.css",
					"keyword.other.unit.pt.css",
					"keyword.other.unit.pc.css",
					"keyword.other.unit.deg.css",
					"constant.other.scss", // {x}n
				],
				settings: {
					foreground: syntax.orange,
				},
			},
			{
				name: "CSS - Logical Operators",
				scope: [
					"keyword.operator.logical.and.media.css",
					"keyword.operator.logical.not.media.css",
					"keyword.operator.logical.only.media.css",
				],
				settings: {
					foreground: syntax.pink,
				},
			},
			{
				name: "CSS - Media Query Types",
				scope: ["support.constant.media.css"],
				settings: {
					foreground: syntax.purple,
				},
			},
			//
			// SCSS
			//
			{
				name: "SCSS - Symbols",
				scope: [
					"punctuation.definition.keyword.scss",
					"keyword.control.at-rule.include.scss",
					"entity.name.tag.reference.scss",
					"entity.name.tag.wildcard.scss",
				],
				settings: {
					foreground: syntax.pink,
				},
			},
			//
			// XML
			//
			{
				name: "XML - Tags",
				scope: ["entity.name.tag.xml", "entity.name.tag.localname.xml"],
				settings: {
					foreground: syntax.pink,
				},
			},
			{
				name: "XML - Attributes",
				scope: ["entity.other.attribute-name.xml", "entity.other.attribute-name.localname.xml"],
				settings: {
					foreground: syntax.cyan,
					fontStyle: "italic",
				},
			},
			{
				name: "XML - Tag Namespace",
				scope: ["entity.name.tag.namespace.xml"],
				settings: {
					foreground: syntax.lime,
				},
			},
			{
				name: "XML - Attribute Namespace",
				scope: ["entity.other.attribute-name.namespace.xml"],
				settings: {
					foreground: syntax.lime,
					fontStyle: "italic",
				},
			},
			{
				name: "XML - Attribute Namespace :",
				scope: ["entity.other.attribute-name.xml punctuation.separator.namespace.xml"],
				settings: {
					fontStyle: "italic",
				},
			},
			{
				name: "XML - Doctype",
				scope: "variable.language.documentroot.xml",
				settings: {
					foreground: syntax.purple,
				},
			},
			//
			// MARKDOWN
			//
			...mdStyles,
			//
			// JSON
			//
			{
				name: "JSON - Key",
				scope: "support.type.property-name.json",
				settings: {
					foreground: syntax.pink,
				},
			},
			{
				name: "JSON - Lighten Quotation Marks [DISABLED]",
				scope: [
					"punctuation.support.type.property-name.begin.json",
					"punctuation.support.type.property-name.end.json",
					"punctuation.definition.string.begin.json",
					"punctuation.definition.string.end.json",
				],
				settings: {
					//"foreground": "#ADB1C2"
				},
			},
			//
			// YAML
			//
			{
				name: "YAML - Keys",
				scope: ["entity.name.tag.yaml"],
				settings: {
					foreground: syntax.pink,
				},
			},
			{
				name: "YAML - Timestamp Values",
				scope: ["constant.other.timestamp.yaml"],
				settings: {
					foreground: syntax.green,
				},
			},
			{
				name: "YAML - Null Values",
				scope: ["constant.language.null.yaml"],
				settings: {
					foreground: syntax.pink,
				},
			},
			{
				name: "YAML - Types",
				scope: ["storage.type.tag-handle.yaml"],
				settings: {
					foreground: syntax.pink,
				},
			},
			{
				name: "YAML - Anchors",
				scope: [
					"entity.name.type.anchor.yaml",
					"punctuation.definition.anchor.yaml",
					"variable.other.alias.yaml",
					"keyword.control.flow.alias.yaml punctuation.definition.alias.yaml",
				],
				settings: {
					foreground: syntax.lime,
				},
			},
			//
			// TOML
			//
			{
				name: "TOML - Keys",
				scope: [
					// Better TOML
					"keyword.key.toml",
					// Even Better TOML
					"support.type.property-name.toml",
					//"variable.key.toml"
				],
				settings: {
					foreground: syntax.pink,
				},
			},
			{
				name: "TOML - Timestamp Values",
				scope: [
					// Better TOML
					"constant.other.date.toml",
					"constant.other.datetime.toml",
					"constant.other.datetime-with-timezone.toml",
					// Even Better TOML
					"constant.other.time.date.toml",
					"constant.other.time.time.toml",
					"constant.other.time.datetime.local.toml",
					"constant.other.time.datetime.offset.toml",
				],
				settings: {
					foreground: syntax.green,
				},
			},
			{
				name: "TOML - Tables",
				scope: [
					// Better TOML
					"entity.other.attribute-name.table.toml",
					// Even Better TOML
					"support.type.property-name.table.toml",
					//"variable.key.table.toml"
				],
				settings: {
					foreground: syntax.lime,
				},
			},
			{
				name: "TOML - Array Tables",
				scope: [
					// Better TOML
					"entity.other.attribute-name.table.array.toml",
					// Even Better TOML
					"support.type.property-name.array.toml",
					//"variable.key.array.table.toml"
				],
				settings: {
					foreground: syntax.purple,
				},
			},
			//
			// INI
			//
			{
				name: "INI - Keys",
				scope: "keyword.other.definition.ini",
				settings: {
					foreground: syntax.pink,
				},
			},
			{
				name: "INI - Headings",
				scope: "entity.name.section.group-title.ini",
				settings: {
					foreground: syntax.lime,
				},
			},
			//
			// BNF
			//
			{
				name: "BNF - Symbol",
				scope: "entity.name.class.bnf",
				settings: {
					foreground: syntax.green,
				},
			},
			{
				name: "BNF - Builtin",
				scope: "support.variable.bnf",
				settings: {
					foreground: syntax.cyan,
				},
			},
		],
	};
}

function markdownStyles(syntax: any, alternate: boolean) {
	let styles = [];
	if (alternate) {
		styles.push({
			// Normal undecorated text.
			name: "Markdown - Plain",
			scope: ["text.html.markdown", "punctuation.definition.list_item.markdown"],
			settings: {
				foreground: syntax.fadedGray,
			},
		});
		styles.push({
			// Inline code block text.
			name: "Markdown - Markup Raw Inline",
			scope: ["punctuation.definition.raw.markdown", "markup.inline.raw.string.markdown"],
			settings: {
				foreground: syntax.fg,
			},
		});
		styles.push({
			// Fenced code block text.
			name: "Markdown - Markup Raw Inline",
			scope: ["markup.fenced_code.block.markdown"],
			settings: {
				foreground: syntax.fg,
			},
		});
		styles.push({
			// The language identifier in a fenced code block, e.g. ```rust
			name: "Markdown - Raw Block Language Identifier",
			scope: [
				"fenced_code.block.language.markdown",
				"markup.fenced_code.block.markdown punctuation.definition.markdown",
			],
			settings: {
				foreground: syntax.fg,
			},
		});
	} else {
		styles.push({
			// Normal undecorated text.
			name: "Markdown - Plain",
			scope: ["text.html.markdown", "punctuation.definition.list_item.markdown"],
			settings: {
				foreground: syntax.fg,
			},
		});
		styles.push({
			// Inline code block text.
			name: "Markdown - Markup Raw Inline",
			scope: ["punctuation.definition.raw.markdown", "markup.inline.raw.string.markdown"],
			settings: {
				foreground: syntax.fg,
				fontStyle: "bold",
			},
		});
		styles.push({
			// Fenced code block text.
			name: "Markdown - Markup Raw Inline",
			scope: ["markup.fenced_code.block.markdown"],
			settings: {
				foreground: syntax.fg,
			},
		});
		styles.push({
			// The language identifier in a fenced code block, e.g. ```rust
			name: "Markdown - Raw Block Language Identifier",
			scope: [
				"fenced_code.block.language.markdown",
				"markup.fenced_code.block.markdown punctuation.definition.markdown",
			],
			settings: {
				foreground: syntax.fg,
				fontStyle: "bold",
			},
		});
	}

	return [
		...styles,
		{
			// The `#` symbol in titles.
			name: "Markdown - Headings",
			scope: [
				"markdown.heading",
				"markup.heading | markup.heading entity.name",
				"markup.heading.markdown punctuation.definition.heading.markdown",
				"entity.name.section.markdown",
			],
			settings: {
				foreground: syntax.pink,
			},
		},
		{
			name: "Markup - Bold",
			scope: ["punctuation.definition.bold.markdown", "markup.bold", "markup.bold string"],
			settings: {
				fontStyle: "bold",
				foreground: syntax.orange,
			},
		},
		{
			name: "Markup - Italic",
			scope: ["punctuation.definition.italic.markdown", "markup.italic"],
			settings: {
				fontStyle: "italic",
				foreground: syntax.blue,
			},
		},
		{
			name: "Markup - Bold-Italic",
			scope: [
				"markup.bold markup.italic",
				"markup.italic markup.bold",
				"markup.quote markup.bold",
				"markup.bold markup.italic string",
				"markup.italic markup.bold string",
				"markup.quote markup.bold string",
			],
			settings: {
				foreground: syntax.blue,
				fontStyle: "italic bold",
			},
		},
		{
			name: "Markdown - Quote",
			scope: ["punctuation.definition.quote.begin.markdown", "markup.quote.markdown"],
			settings: {
				foreground: syntax.yellow,
				fontStyle: "italic",
			},
		},
		{
			name: "Markdown - Strikethrough",
			scope: ["markup.strikethrough.markdown", "punctuation.definition.strikethrough.markdown"],
			settings: {
				foreground: syntax.fadedGray,
				fontStyle: "strikethrough",
			},
		},
		{
			name: "Markdown - Separator",
			scope: ["meta.separator.markdown"],
			settings: {
				foreground: syntax.fg,
				fontStyle: "bold",
			},
		},
		{
			// The `1.` or `-` or `*` symbols in a list entry.
			name: "Markdown - List",
			scope: ["punctuation.definition.list.begin.markdown"],
			settings: {
				foreground: syntax.cyan,
			},
		},
		{
			// Text comment/description around a link, e.g. `[Go to this link](...)`, or `[](... "some website")`
			name: "Markup - Url String",
			scope: [
				"punctuation.definition.string.begin.markdown",
				"punctuation.definition.string.end.markdown",
				"string.other.link.description.title.markdown",
				"string.other.link.description.markdown",
				"string.other.link.title.markdown",
			],
			settings: {
				foreground: syntax.green,
			},
		},
		{
			// The url part of the link.
			name: "Markup - Url Underline",
			scope: ["markup.underline.link", "constant.other.reference.link.markdown"],
			settings: {
				foreground: syntax.purple,
				fontStyle: "underline",
			},
		},
		{
			name: "Markup - Maths",
			scope: "punctuation.definition.math.begin.markdown",
			settings: {
				foreground: syntax.limeGreen,
			},
		},
		{
			name: "Markup - Maths constants/functions",
			scope: ["constant.character.math.tex", "constant.character.math.tex punctuation.definition.math.tex"],
			settings: {
				foreground: syntax.cyan,
			},
		},
	];
}

export interface SyntaxColors {
	strongPink: string;
	pink: string;
	purple: string;
	blue: string;
	cyan: string;
	lightBlue: string;
	green: string;
	lime: string;
	yellow: string;
	orange: string;
	mauve: string;
	fg: string;
	gray: string;
	fadedGray: string;

	boldPink: string;
	boldBlue: string;
	boldLightBlue: string;
	boldFg: string;
}

export interface UiColors {
	text: {
		// Most ui text, text editor default text
		normal: string;

		// Setting header text
		bold: string;

		// Text editor line number, text editor suggestion ghost text, list deemphasized text, tab unfocused title,
		// (??? x1)
		muted: string;

		// Breadcrumb text, general description text, titlebar unfocused text
		light: string;

		// Button text, extension button text, status bar when debugging text & icons
		//
		// DEFAULT: DISABLED_STATUS_BAR: Command bar & intellisense & list selected text & icon, badge text, banner
		// text, menu selected text
		//
		// DEFAULT: Status bar text & icons
		inverse: string;

		// Peek view selected text, peek view header text, peek view filename text,
		emphasised: string;

		/// Text editor unnecessary text
		faded: string;

		decoration: {
			// Text editor whitespace chars, text editor indentation guides, text editor rulers
			light: string;

			// Text editor matching bracket border, text editor corrent indentation guide
			//
			// MONO_GUIDES: Bracket match guides
			dark: string;

			// Codelens
			//
			// DEFAULT_INLAY: Inlay hint text
			codelens: string;

			// BCKG_INLAY: Inlay hint text
			alt1Inlay: string;
			// BCKG_INLAY: Inlay hint background
			alt1InlayBgA: string;

			// ACCENT_INLAY: Inlay hint text
			alt2Inlay: string; // FF4C986A on primaryBg

			// ACCENT_BCKG_INLAY: Inlay hint text
			alt3Inlay: string; // FF4C987A on primaryBg
			// ACCENT_BCKG_INLAY: Inlay hint background
			alt3InlayBgA: string;
		};

		// Text editor folded line, text editor hover over symbol background box
		//
		// NORMAL_LINE: Text editor current line background
		currentLineBgA: string;
		// ALT_LINE: Text editor current line border
		currentLineBorder: string;

		// Text editor selection background box, text editor matching text background box, text editor matching
		// symbol background box, text editor selection boxes, general selection, input field, terminal selection,
		selectionBg: string; // FF4C981A on primaryBg
		selectionBgA: string;
		// Text editor unfocused selection background box, text editor find current range background box, terminal
		// unfocused selection
		secondarySelectionBgA: string;

		// Text editor tabstop background box
		tabstopBgA: string;

		// Text editor & search sidebar find match background box, text editor match line background, peek view
		// match background box, list filter widget background, list filter match background, terminal find match
		// background box, (??? x1)
		matchBg: string;
		matchBgA: string;

		// Text editor & search sidebar find match border, peek view match border, list filter match border,
		// terminal find match border,
		matchBorder: string;
		matchBorderA: string;
	};

	accent: {
		// Cursor, text editor current line number, text editor ctrl+click, breadcrumb focused/active text, link
		// text, border of focused elements, button background, extension button background, checkbox tick,
		// progress bar, tab focused indicator, activity bar hover/active icon, activity bar active border,
		// settings modified indicator, panel active title, panel active indicator, border when draggable, command
		// bar grouping text, intellisense widget matching text, block quote left border, welcome page progress
		// bar, (??? x1)
		//
		// DEFAULT: DISABLED_STATUS_BAR: List & command bar currently selected background, intellisense widget
		// selected background, peek view widget selected background, badge background, banner background, menu
		// selected background
		//
		// DEFAULT: status bar background
		//
		// DISABLED_STATUS_BAR: MINIMAL: status bar remote icon
		//
		// MINIMAL: list & command bar matching text, badge text
		primary: string;
		primaryHover: string;
		linkHover: string;

		// Button background, codeblock text, (??? x1)
		//
		// DEFAULT: status bar remote background
		secondary: string;
		secondaryHover: string;
	};

	diag: {
		// Ruler markers, minimap markers,
		selection: string; // +(list search match background, ??? x1)
		match: string; // +(marker for currently selected @SYMBOL)
		bracket: string;

		// Error lens text, error lens gutter icons, peek view border, input validation text & border, testing
		// message line text (info+error), text editor underline squiggles, problems panel icons, ruler markers,
		// minimap markers, notification icons,
		//
		// DISABLED_STATUS_BAR: MINIMAL: Status bar text & icons,
		hint: string;
		info: string; // +(general peek view, status bar prominent if applicable)
		warning: string; // +(list warning text)
		error: string; // +(general error text, bracket mismatch foreground, list error text, list invalid text, list no matches, confusing unicode highlighting border)

		// Error lens line background, peek view header background, input validation background, testing message
		// line background (info+error),
		hintBg: string;
		hintBgA: string;
		infoBg: string; // +(general peek view)
		infoBgA: string; // +(general peek view)
		warningBg: string;
		warningBgA: string;
		errorBg: string;
		errorBgA: string; // +(confusing unicode highlighting)

		// Testing status icons
		testPassed: string;
		testQueued: string;
		testFailed: string;
		testUnset: string;
		testSkipped: string;
	};

	git: {
		// Ruler markers, minimap markers, gutter markers, file names
		addedOrStaged: string;
		modified: string;
		renamed: string;
		untracked: string;
		removedOrConflicting: string;
		ignoredOrSubmodule: string;
		current: string;
		incoming: string;

		// Diff viewer line backgrounds, refactor preview text backgrounds
		insertedBgA: string; // Entire modified line #243a31 Specifically added #264b37
		removedBgA: string; // Entire modified line #3f2234 Specifically removed #58203c
		diffDiagonal: string;

		// Conflict viewer line backgrounds
		currentBgA: string;
		currentHeaderBgA: string;
		incomingBgA: string;
		incomingHeaderBgA: string;

		// Merge editor backgrounds
		mergeWordChangeBgA: string;
		mergeLineChangeBgA: string;
		mergeUnhandledUnfocused: string;
		mergeUnhandledFocused: string; // +(ruler marker)
		mergeHandledUnfocused: string;
		mergeHandledFocused: string; // +(ruler marker)
	};

	debug: {
		// Debug toolbar icons
		start: string;
		pause: string;
		step: string;
		stop: string;

		// Gutter icons
		breakpoint: string;
		breakpointDisabled: string;

		// Exception widget background
		exceptionBg: string;

		// Debug console text
		info: string;
		warning: string;
		error: string;
		source: string;
		input: string;
	};

	terminal: {
		// Command decoration icons
		default: string; // +(SetMark sequence)
		success: string;
		error: string;

		foreground: string; // 0m (foreground)
		ansiBlack: string; // 30m
		ansiBrightBlack: string; // 30;1m
		ansiWhite: string; //37m (background)
		ansiBrightWhite: string; // (technicall 37;1m but vscode also applies this to just bold 1m, hence it's white)
		ansiBlue: string;
		ansiBrightBlue: string;
		ansiCyan: string;
		ansiBrightCyan: string;
		ansiGreen: string;
		ansiBrightGreen: string;
		ansiYellow: string;
		ansiBrightYellow: string;
		ansiRed: string;
		ansiBrightRed: string;
		ansiMagenta: string;
		ansiBrightMagenta: string;
	};

	ui: {
		// Intellisense widget, command bar, text editor, text editor block cursor char, text editor gutter, text
		// editor minimap, breacrumbs, hover widget, peek view text editor, peek view text gutter, tab empty group,
		// tab drop-into promp, tab active background, tab hover background, tab zen mode sides, activity bar
		// background, welcome page background, panel background, notification background, command center
		// background
		//
		// MINIMAL: Badge background,
		primaryBg: string;

		// Widgets, hover widget status bar, peek view list, tab row background, tab row empty background, tab
		// inactive background, tab unfocused background, sidebar background, panel section header background,
		// debug toolbar background & border, notification centre header, titlebar, block quote background,
		// code-block background, keybind table header backgrounds, keybind table even row background
		//
		// DISABLED_STATUS_BAR: MINIMAL: Status bar background, status bar remote icon background,
		secondaryBg: string;

		// Sidebar section header background
		tertiaryBg: string;

		// Breadcrumb, menu, any button which dropdowns
		dropdownBg: string;

		// Checkbox, dropdown (+list), input field,
		inputBg: string;

		// Tab group, sidebar pane, panel section, terminal, list
		primaryDropBg: string;

		// All borders
		border: string;

		// Menu separator, command bar group separator, border between pinned and non-pinned tabs, (??? x1)
		separator: string;

		// Input field foreground
		placeholderText: string;

		// Menu disabled entry foreground, (this is chosen to match `placeholderText` since the disabled text also
		// has a secondary fade layer)
		disabledText: string;

		// Little buttons, titlebar menu buttons, editor stick hover
		//
		// DISABLED_STATUS_BAR: MINIMAL: Status bar hover/active button overlays
		hoverBgA: string;
		activeBgA: string;

		// Lists, command bar hover, notification hover
		//
		// MINIMAL: List unfocused selected overlay
		listHoverBgA: string;
		// DEFAULT: DISABLED_STATUS_BAR: List unfocused selected overlay
		listInactiveBgA: string;

		// Keybind background
		selectedBgA: string;

		// Dropdown selected, intellisense widget, peek view result, menu dropdown, command bar, command center
		// hover
		selectedBg: string; // FFFFFF10 on primaryBg
		// Welcome page tile on hover
		selectedSecondaryBg: string; // FFFFFF10 on secondaryBg

		// Tree indent guide
		treeIndent: string;

		// Scrollbar/minimap handle overlays
		scrollBgA: string;
		scrollHoverBgA: string;
		scrollActiveBgA: string;

		// Shadow whenever some scrollable element is scrolled, shadows around open widgets
		shadow: string;

		// Status bar during debugging background
		statusDebugBg: string;
		// Status bar when no folder is open background
		statusEmptyBg: string;
		// DEFAULT: Status bar hover/active button overlays
		statusHoverBgA: string;
		statusActiveBgA: string;

		// Tab unfocused indicator
		unfocusedTab: string; // FF4C986A on primaryBg

		// Activity bar inactive icon
		activityBarInactive: string;

		// Code actions icon
		lightBulb: string;

		// Extension badge icons
		star: string;
		remote: string;
		verified: string;
		prerelease: string;
		sponsor: string;

		// Chart colours
		chartLine: string;
		chartBlue: string;
		chartGreen: string;
		chartYellow: string;
		chartOrange: string;
		chartRed: string;
		chartPurple: string;
	};

	brackets: {
		one: string;
		two: string;
		three: string;
		four: string;
		five: string;
		six: string;
	};

	gitGraph: [string, string, string, string, string, string, string, string, string, string];

	todo: {
		todo: string;
		fixme: string;
		bug: string;
		hack: string;
		maybe: string;
		unchecked: string;
		checked: string;
	};
}

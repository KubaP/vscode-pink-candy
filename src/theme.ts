import * as path from "path";
import * as fs from "fs";
import { Config } from "./config";
import { lightColors, lightSyntax } from "./light";
import { darkColors, darkSyntax } from "./dark";

/**
 * Creates the theme `.json` files.
 * @param config The current configuration.
 */
export function createThemes(config: Config, path: string) {
	createTheme("Pink Candy Light", "light", "pink-candy-light.json", path, lightColors, lightSyntax, config);
	createTheme("Pink Candy Dark", "dark", "pink-candy-dark.json", path, darkColors, darkSyntax, config);
}

function createTheme(
	name: string,
	type: string,
	file: string,
	themeFolder: string,
	color: any,
	syntax: any,
	config: Config
) {
	const jsonPath = path.join(themeFolder, file);
	const theme = generateTheme(color, syntax, name, type, config);

	fs.writeFileSync(jsonPath, JSON.stringify(theme, undefined, 4));
}

// TODO: Review gutter comments
// TODO: Notebooks
// TODO: Status bar setting profiles (currently in insider 1.69)

function generateTheme(color: any, syntax: any, name: string, type: string, config: Config) {
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
				foreground: syntax.comment,
				fontStyle: "italic",
			},
		};
		commentStyles = {
			settings: {
				foreground: syntax.comment,
				fontStyle: "italic",
			},
		};
	} else {
		commentSemanticStyles = {
			comment: syntax.comment,
		};
		commentStyles = {
			settings: {
				foreground: syntax.comment,
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
			"banner.background": color.secondaryBg,
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
			"editor.foreground": color.text.normal,
			"editor.background": color.ui.primaryBg,
			errorForeground: color.diag.error,
			"editorUnicodeHighlight.border": color.diag.error, // Highlight potentially confusing unicode characters.
			"editorUnicodeHighlight.background": color.diag.errorBgA,
			"widget.shadow": color.ui.shadow,
			disabledForeground: color.ui.disabledText, // Disabled text, e.g. disable menu dropdown entries.
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
			"tab.unfocusedInactiveForeground": color.ui.muted,
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
			//"activityBar.border": "", // Border between bar and sidebar.
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
			"settings.headerForeground": color.text.normal, // Titles and headings
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
			"debugTokenExpression.string": syntax.string,
			"debugTokenExpression.boolean": syntax.variant,
			"debugTokenExpression.number": syntax.number,
			"debugTokenExpression.error": syntax.invalid,
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
			"symbolIcon.arrayForeground": syntax.var,
			"symbolIcon.booleanForeground": syntax.variant,
			"symbolIcon.classForeground": syntax.type,
			"symbolIcon.colorForeground": color.text.normal,
			"symbolIcon.constantForeground": syntax.constant,
			"symbolIcon.enumeratorForeground": syntax.type,
			"symbolIcon.enumeratorMemberForeground": syntax.variant,
			"symbolIcon.eventForeground": color.text.normal,
			"symbolIcon.fieldForeground": syntax.member,
			"symbolIcon.fileForeground": color.text.normal,
			"symbolIcon.folderForeground": color.text.normal,
			"symbolIcon.functionForeground": syntax.fn,
			"symbolIcon.interfaceForeground": syntax.interface,
			"symbolIcon.keyForeground": syntax.jsonKey,
			"symbolIcon.keywordForeground": syntax.keyword,
			"symbolIcon.methodForeground": syntax.fn,
			"symbolIcon.moduleForeground": syntax.var,
			"symbolIcon.namespaceForeground": syntax.var,
			"symbolIcon.nullForeground": syntax.keyword,
			"symbolIcon.numberForeground": syntax.number,
			"symbolIcon.objectForeground": syntax.type,
			"symbolIcon.operatorForeground": syntax.punctuation,
			"symbolIcon.packageForeground": syntax.var,
			"symbolIcon.propertyForeground": syntax.member,
			"symbolIcon.referenceForeground": syntax.keyword,
			"symbolIcon.snippetForeground": syntax.keyword,
			"symbolIcon.stringForeground": syntax.string,
			"symbolIcon.structForeground": syntax.type,
			"symbolIcon.textForeground": color.text.normal,
			"symbolIcon.typeParameterForeground": syntax.type,
			"symbolIcon.unitForeground": syntax.number,
			"symbolIcon.variableForeground": syntax.var,
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
			keyword: syntax.keyword,
			type: syntax.keyword,
			builtinType: syntax.keyword,
			selfKeyword: syntax.keyword,
			newOperator: syntax.keyword,
			"plainKeyword:csharp": syntax.keyword,
			"controlKeyword:csharp": syntax.keyword,
			//
			//
			punctuation: syntax.punctuation,
			operator: syntax.punctuation,
			arithmetic: syntax.punctuation,
			comparison: syntax.punctuation,
			logical: syntax.punctuation,
			bitwise: syntax.punctuation,
			//
			//
			function: syntax.fn, // Static function.
			"member.static:csharp": {
				// Static function.
				foreground: syntax.fn,
				fontStyle: "underline",
			},
			"method.static:typescript": {
				// Static method.
				foreground: syntax.fn,
				fontStyle: "underline",
			},
			method: syntax.fn, // Object method.
			"member:csharp": syntax.fn, // Object method.
			macro: syntax.fn,
			namespace: syntax.var,
			struct: syntax.type,
			class: syntax.type,
			"class.static:csharp": {
				// Static class.
				foreground: syntax.type,
				fontStyle: "underline",
			},
			enum: syntax.type,
			union: syntax.type,
			typeAlias: syntax.type,
			enumMember: syntax.variant,
			boolean: syntax.variant,
			//
			//
			interface: syntax.interface, // Rust: `MyTrait`
			typeParameter: syntax.type, // Generic type annotation, e.g. `T`
			//
			//
			variable: syntax.var,
			"local:csharp": syntax.var, // Local variable.
			parameter: syntax.parameter,
			property: syntax.member, // Object members.
			"field:csharp": syntax.member, // Object members.
			"field.static:csharp": {
				// Static object members.
				foreground: syntax.member,
				fontStyle: "underline",
			},
			"property:csharp": {
				// Csharp properties.
				foreground: syntax.member,
				fontStyle: "bold",
			},
			"property.static:csharp": {
				// Cssharp static properties.
				foreground: syntax.member,
				fontStyle: "bold underline",
			},
			"property.static:typescript": {
				// Typescript static members.
				foreground: syntax.member,
				fontStyle: "underline",
			},
			"*.constant": syntax.constant,
			"variable.static:csharp": syntax.constant, // Constants
			"variable.readonly:csharp": syntax.constant, // Constants
			"variable.readonly:javascript": syntax.constant, // Constants
			"variable.readonly:typescript": syntax.constant, // Constants
			//
			//
			string: syntax.string, // `"string"`
			"stringVerbatim:csharp": syntax.string,
			escapeSequence: syntax.char, // `\n`
			character: syntax.char, // `'b'`
			number: syntax.number,
			...commentSemanticStyles,
			//
			//
			//attribute: syntax.attribute, // The #[]!() symbols in an attribute.
			unresolvedReference: {
				foreground: syntax.invalid,
			},
			//
			// CSHARP
			xmlDocCommentText: syntax.var,
			"xmlDocCommentName:csharp": syntax.comment,
			"xmlDocCommentDelimiter:csharp": syntax.comment,
			"xmlDocCommentAttributeName:csharp": syntax.char,
			"xmlDocCommentAttributeQuotes:csharp": syntax.string,
			"xmlDocCommentAttributeValue:csharp": syntax.string,
			//
			// RUST
			"operator.controlFlow:rust": syntax.keyword,
			"label:rust": syntax.rustLabel,
			"lifetime:rust": syntax.interface,
			"formatSpecifier:rust": syntax.format,
			"macroBang:rust": syntax.fn, // The ! in a macro call.
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
				foreground: syntax.rustVar,
				fontStyle: "bold",
			},
			"method.mutable": {
				foreground: syntax.rustFn,
				fontStyle: "bold",
			},
			"function.mutable": {
				foreground: syntax.rustFn,
				fontStyle: "bold",
			},
			"parameter.mutable": {
				foreground: syntax.rustParam,
				fontStyle: "bold",
			},
			"selfKeyword.mutable": {
				foreground: syntax.rustKeyword,
				fontStyle: "bold",
			},
			//
			// MUTABLE REFERENCE
			"variable.mutable.reference": {
				foreground: syntax.rustVar,
				fontStyle: "italic bold",
			},
			"method.mutable.reference": {
				foreground: syntax.rustFn,
				fontStyle: "italic bold",
			},
			"function.mutable.reference": {
				foreground: syntax.rustFn,
				fontStyle: "italic bold",
			},
			"parameter.mutable.reference": {
				foreground: syntax.rustParam,
				fontStyle: "italic bold",
			},
			"selfKeyword.mutable.reference": {
				foreground: syntax.rustKeyword,
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
			"*.unsafe": syntax.rustUnsafe,
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
			"attributeBracket.attribute:rust": syntax.attribute,
			"builtinAttribute.attribute:rust": syntax.attribute,
			"toolModule.attribute:rust": syntax.attribute,
			"decorator.attribute:rust": syntax.attribute,
			"derive.attribute:rust": syntax.attribute,
			"generic.attribute:rust": syntax.attribute,
			"parenthesis.attribute:rust": syntax.attribute,
			//
			// TOML - Even Better TOML only
			tomlTableKey: syntax.tomlTable,
			tomlArrayKey: syntax.tomlArray,
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
					"keyword.operator.ternary.ts"
				],
				settings: {
					foreground: syntax.keyword,
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
					foreground: syntax.keyword,
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
					foreground: syntax.punctuation,
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
					foreground: syntax.fn,
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
					foreground: syntax.fn,
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
					foreground: syntax.type,
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
					foreground: syntax.variant,
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
					foreground: syntax.interface,
				},
			},
			{
				name: "Type Parameters",
				scope: [
					// rust
					"entity.name.type.type-parameter.cs",
				],
				settings: {
					foreground: syntax.type,
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
					foreground: syntax.var,
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
					foreground: syntax.parameter,
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
					foreground: syntax.member,
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
					foreground: syntax.constant,
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
					foreground: syntax.string,
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
					foreground: syntax.char,
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
					foreground: syntax.char,
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
					foreground: syntax.number,
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
					foreground: syntax.attribute,
				},
			},
			{
				name: "Unresolved Symbol",
				scope: ["invalid", "invalid.illegal"],
				settings: {
					foreground: syntax.invalid,
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
					foreground: syntax.keyword,
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
					foreground: syntax.interface,
				},
			},
			{
				name: "Format Specifier",
				scope: ["meta.interpolation.rust", "punctuation.definition.interpolation.rust"],
				settings: {
					foreground: syntax.format,
				},
			},
			{
				name: "Macro declaration variable specifier",
				scope: ["variable.other.metavariable.specifier.rust"],
				settings: {
					foreground: syntax.rustMacroSpecifier,
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
					foreground: syntax.comment,
				},
			},
			{
				name: "Csharp - Doc Tag Attribute",
				scope: ["entity.other.attribute-name.cs"],
				settings: {
					foreground: syntax.char,
				},
			},
			{
				name: "Csharp - Doc Text",
				scope: ["comment.block.documentation.cs"],
				settings: {
					foreground: syntax.var,
				},
			},
			{
				name: "Csharp - String Interpolation",
				scope: [
					"punctuation.definition.interpolation.begin.cs",
					"punctuation.definition.interpolation.end.cs",
				],
				settings: {
					foreground: syntax.interface,
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
					foreground: syntax.psVar,
				},
			},
			{
				name: "Powershell Variable/Storage Scopes",
				scope: ["storage.modifier.scope.powershell", "support.variable.drive.powershell"],
				settings: {
					foreground: syntax.psVar,
					fontStyle: "underline",
				},
			},
			{
				name: "Powershell $_ Variable",
				scope: [
					"support.variable.automatic.powershell",
					"support.variable.automatic.powershell punctuation.definition.variable.powershell",
				],
				settings: {
					foreground: syntax.psSpecialVar,
				},
			},
			{
				name: "Powershell Operators",
				scope: ["keyword.operator.comparison.powershell", "keyword.operator.logical.powershell"],
				settings: {
					foreground: syntax.psOperator,
				},
			},
			{
				name: "Powershell Comment Keywords",
				scope: "keyword.operator.documentation.powershell",
				settings: {
					foreground: syntax.psCommentKeyword,
				},
			},
			{
				name: "Powershell String Interpolation",
				scope: [
					"punctuation.section.embedded.substatement.begin.powershell",
					"punctuation.section.embedded.substatement.end.powershell",
				],
				settings: {
					foreground: syntax.format,
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
					foreground: syntax.format,
				},
			},
			{
				name: "JS - Regexp Group",
				scope: ["punctuation.definition.group.regexp", "punctuation.definition.group.no-capture.regexp"],
				settings: {
					foreground: syntax.jsRegex,
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
					foreground: syntax.format,
				},
			},
			//
			// JSX REACT
			//
			{
				name: "JSX - Embedded Code",
				scope: ["punctuation.section.embedded.begin.js", "punctuation.section.embedded.end.js"],
				settings: {
					foreground: syntax.reactEmbedded,
					fontStyle: "bold",
				},
			},
			{
				name: "JSX - Attributes",
				scope: ["entity.other.attribute-name.js"],
				settings: {
					foreground: syntax.reactAttribute,
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
					foreground: syntax.format,
				},
			},
			//
			// HTML
			//
			{
				name: "HTML - Tags",
				scope: ["entity.name.tag.html"],
				settings: {
					foreground: syntax.htmlTag,
				},
			},
			{
				name: "HTML - Attributes",
				scope: ["entity.other.attribute-name.html"],
				settings: {
					foreground: syntax.htmlAttribute,
					fontStyle: "italic",
				},
			},
			{
				name: "HTML - IDs",
				scope: ["meta.attribute.id.html string.quoted.double.html", "entity.other.attribute-name.id.css"],
				settings: {
					foreground: syntax.htmlId,
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
					foreground: syntax.htmlClass,
				},
			},
			{
				name: "HTML - Meta Value",
				scope: ["meta.attribute"],
				settings: {
					foreground: syntax.htmlMeta,
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
					foreground: syntax.htmlLink,
				},
			},
			{
				name: "HTML - Embedded CSS",
				scope: ["meta.embedded.line.css"],
				settings: {
					foreground: syntax.htmlEmbeddedCss,
				},
			},
			//
			// CSS
			//
			{
				name: "CSS - Tags",
				scope: ["entity.name.tag.css"],
				settings: {
					foreground: syntax.htmlTag,
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
					foreground: syntax.cssProperty,
				},
			},
			{
				name: "CSS - Property Values",
				scope: ["support.constant.property-value.css"],
				settings: {
					foreground: syntax.cssValue,
				},
			},
			{
				name: "CSS - Fontname Selector",
				scope: ["support.constant.font-name.css"],
				settings: {
					foreground: syntax.cssFontname,
				},
			},
			{
				name: "CSS - Pseudoclass Selector",
				scope: [
					"entity.other.attribute-name.pseudo-class.css",
					"entity.other.attribute-name.pseudo-element.css",
				],
				settings: {
					foreground: syntax.cssPseudoclass,
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
					foreground: syntax.number,
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
					foreground: syntax.keyword,
				},
			},
			{
				name: "CSS - Media Query Types",
				scope: ["support.constant.media.css"],
				settings: {
					foreground: syntax.cssMedia,
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
					foreground: syntax.keyword,
				},
			},
			//
			// XML
			//
			{
				name: "XML - Tags",
				scope: ["entity.name.tag.xml", "entity.name.tag.localname.xml"],
				settings: {
					foreground: syntax.keyword,
				},
			},
			{
				name: "XML - Attributes",
				scope: ["entity.other.attribute-name.xml", "entity.other.attribute-name.localname.xml"],
				settings: {
					foreground: syntax.htmlAttribute,
					fontStyle: "italic",
				},
			},
			{
				name: "XML - Tag Namespace",
				scope: ["entity.name.tag.namespace.xml"],
				settings: {
					foreground: syntax.xmlNamespace,
				},
			},
			{
				name: "XML - Attribute Namespace",
				scope: ["entity.other.attribute-name.namespace.xml"],
				settings: {
					foreground: syntax.xmlNamespace,
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
					foreground: syntax.xmlDoctype,
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
					foreground: syntax.jsonKey,
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
					foreground: syntax.yamlKey,
				},
			},
			{
				name: "YAML - Timestamp Values",
				scope: ["constant.other.timestamp.yaml"],
				settings: {
					foreground: syntax.yamlTimestamp,
				},
			},
			{
				name: "YAML - Null Values",
				scope: ["constant.language.null.yaml"],
				settings: {
					foreground: syntax.keyword,
				},
			},
			{
				name: "YAML - Types",
				scope: ["storage.type.tag-handle.yaml"],
				settings: {
					foreground: syntax.keyword,
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
					foreground: syntax.yamlAnchor,
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
					foreground: syntax.tomlKey,
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
					foreground: syntax.tomlTimestamp,
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
					foreground: syntax.tomlTable,
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
					foreground: syntax.tomlArray,
				},
			},
			//
			// INI
			//
			{
				name: "INI - Keys",
				scope: "keyword.other.definition.ini",
				settings: {
					foreground: syntax.iniKey,
				},
			},
			{
				name: "INI - Headings",
				scope: "entity.name.section.group-title.ini",
				settings: {
					foreground: syntax.iniHeading,
				},
			},
			//
			// BNF
			//
			{
				name: "BNF - Symbol",
				scope: "entity.name.class.bnf",
				settings: {
					foreground: syntax.bnfSymbol,
				},
			},
			{
				name: "BNF - Builtin",
				scope: "support.variable.bnf",
				settings: {
					foreground: syntax.bnfBuiltin,
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
				foreground: syntax.mdAltText,
			},
		});
		styles.push({
			// Inline code block text.
			name: "Markdown - Markup Raw Inline",
			scope: ["punctuation.definition.raw.markdown", "markup.inline.raw.string.markdown"],
			settings: {
				foreground: syntax.mdCode,
			},
		});
		styles.push({
			// Fenced code block text.
			name: "Markdown - Markup Raw Inline",
			scope: ["markup.fenced_code.block.markdown"],
			settings: {
				foreground: syntax.mdCode,
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
				foreground: syntax.mdCode,
			},
		});
	} else {
		styles.push({
			// Normal undecorated text.
			name: "Markdown - Plain",
			scope: ["text.html.markdown", "punctuation.definition.list_item.markdown"],
			settings: {
				foreground: syntax.mdText,
			},
		});
		styles.push({
			// Inline code block text.
			name: "Markdown - Markup Raw Inline",
			scope: ["punctuation.definition.raw.markdown", "markup.inline.raw.string.markdown"],
			settings: {
				foreground: syntax.mdCode,
				fontStyle: "bold",
			},
		});
		styles.push({
			// Fenced code block text.
			name: "Markdown - Markup Raw Inline",
			scope: ["markup.fenced_code.block.markdown"],
			settings: {
				foreground: syntax.mdCode,
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
				foreground: syntax.mdCode,
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
				foreground: syntax.mdHeading,
			},
		},
		{
			name: "Markup - Bold",
			scope: ["punctuation.definition.bold.markdown", "markup.bold", "markup.bold string"],
			settings: {
				fontStyle: "bold",
				foreground: syntax.mdBold,
			},
		},
		{
			name: "Markup - Italic",
			scope: ["punctuation.definition.italic.markdown", "markup.italic"],
			settings: {
				fontStyle: "italic",
				foreground: syntax.mdItalic,
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
				foreground: syntax.mdItalic,
				fontStyle: "italic bold",
			},
		},
		{
			name: "Markdown - Quote",
			scope: ["punctuation.definition.quote.begin.markdown", "markup.quote.markdown"],
			settings: {
				foreground: syntax.mdQuote,
				fontStyle: "italic",
			},
		},
		{
			name: "Markdown - Strikethrough",
			scope: ["markup.strikethrough.markdown", "punctuation.definition.strikethrough.markdown"],
			settings: {
				foreground: syntax.mdStrikethrough,
				fontStyle: "strikethrough",
			},
		},
		{
			name: "Markdown - Separator",
			scope: ["meta.separator.markdown"],
			settings: {
				foreground: syntax.mdSeparator,
				fontStyle: "bold",
			},
		},
		{
			// The `1.` or `-` or `*` symbols in a list entry.
			name: "Markdown - List",
			scope: ["punctuation.definition.list.begin.markdown"],
			settings: {
				foreground: syntax.mdList,
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
				foreground: syntax.mdUrlName,
			},
		},
		{
			// The url part of the link.
			name: "Markup - Url Underline",
			scope: ["markup.underline.link", "constant.other.reference.link.markdown"],
			settings: {
				foreground: syntax.mdUrl,
				fontStyle: "underline",
			},
		},
		{
			name: "Markup - Maths",
			scope: "punctuation.definition.math.begin.markdown",
			settings: {
				foreground: syntax.mdMaths,
			},
		},
		{
			name: "Markup - Maths constants/functions",
			scope: ["constant.character.math.tex", "constant.character.math.tex punctuation.definition.math.tex"],
			settings: {
				foreground: syntax.mdMathsConst,
			},
		},
	];
}

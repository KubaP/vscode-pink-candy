export const darkColors = {
	// Note: All non-alpha backgrounds are based on `primaryBg`.

	text: {
		// Most ui text, text editor default text
		normal: "#ABB2BF",

		// Text editor line number, text editor suggestion ghost text, list deemphasized text, tab unfocused title,
		// (??? x1)
		muted: "#636D83",

		// Breadcrumb text, general description text, titlebar unfocused text
		light: "#7C869B",

		// Button text, extension button text, status bar when debugging text & icons
		//
		// DEFAULT: DISABLED_STATUS_BAR: Command bar & intellisense & list selected text & icon, badge text, banner
		// text, menu selected text
		//
		// DEFAULT: Status bar text & icons
		inverse: "#FFFFFF",

		// Peek view selected text, peek view header text, peek view filename text,
		emphasised: "#FFFFFF",

		/// Text editor unnecessary text
		faded: "#000000C0",

		decoration: {
			// Text editor whitespace chars, text editor indentation guides, text editor rulers
			light: "#3D434F",

			// Text editor matching bracket border, text editor corrent indentation guide
			//
			// MONO_GUIDES: Bracket match guides
			dark: "#5A6375",

			// Codelens
			//
			// DEFAULT_INLAY: Inlay hint text
			codelens: "#9C9C9C",

			// BCKG_INLAY: Inlay hint text
			alt1Inlay: "#9099AB",
			// BCKG_INLAY: Inlay hint background
			alt1InlayBgA: "#FFFFFF07",

			// ACCENT_INLAY: Inlay hint text
			alt2Inlay: "#7E3558", // FF4C986A on primaryBg

			// ACCENT_BCKG_INLAY: Inlay hint text
			alt3Inlay: "#8B385E", // FF4C987A on primaryBg
			// ACCENT_BCKG_INLAY: Inlay hint background
			alt3InlayBgA: "#FF4C9810",
		},

		// Text editor folded line, text editor hover over symbol background box
		//
		// NORMAL_LINE: Text editor current line background
		currentLineBgA: "#FFFFFF07",
		// ALT_LINE: Text editor current line border
		currentLineBorder: "#FFFFFF10",

		// Text editor selection background box, text editor matching text background box, text editor matching
		// symbol background box, text editor selection boxes, general selection, input field, terminal selection,
		selectionBg: "#392735", // FF4C981A on primaryBg
		selectionBgA: "#FF4C981A",
		// Text editor unfocused selection background box, text editor find current range background box,
		secondarySelectionBgA: "#FF4C9810",

		// Text editor tabstop background box
		tabstopBgA: "#FF4C981A",

		// Text editor & search sidebar find match background box, text editor match line background, peek view
		// match background box, list filter widget background, list filter match background, terminal find match
		// background box, (??? x1)
		matchBg: "#4E522B",
		matchBgA: "#CCD00C3A",

		// Text editor & search sidebar find match border, peek view match border, list filter match border,
		// terminal find match border,
		matchBorder: "#31A155",
		matchBorderA: "#31A1558A",
	},

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
		primary: "#FF1277",
		primaryHover: "#DA005F",
		linkHover: "#ff4c98",

		// Button background, codeblock text, (??? x1)
		//
		// DEFAULT: status bar remote background
		secondary: "#09A1ED",
		secondaryHover: "#0784C2",
	},

	diag: {
		// Ruler markers, minimap markers,
		selection: "#81577A", // +(list search match background, ??? x1)
		match: "#9CA320", // +(marker for currently selected @SYMBOL)
		bracket: "#5A63755A",

		// Error lens text, error lens gutter icons, peek view border, input validation text & border, testing
		// message line text (info+error), text editor underline squiggles, problems panel icons, ruler markers,
		// minimap markers, notification icons,
		//
		// DISABLED_STATUS_BAR: MINIMAL: Status bar text & icons,
		hint: "#31A155",
		info: "#018ACC", // +(general peek view, status bar prominent if applicable)
		warning: "#E17615", // +(list warning text)
		error: "#FF1277", // +(general error text, bracket mismatch foreground, list error text, list invalid text, list no matches, confusing unicode highlighting border)

		// Error lens line background, peek view header background, input validation background, testing message
		// line background (info+error),
		hintBg: "#293B38",
		hintBgA: "#31A15520",
		infoBg: "#233847", // +(general peek view)
		infoBgA: "#018ACC20", // +(general peek view)
		warningBg: "#403530",
		warningBgA: "#E1761520",
		errorBg: "#3E2A3B",
		errorBgA: "#FF12771A", // +(confusing unicode highlighting)

		// Testing status icons
		testPassed: "#31A155",
		testQueued: "#018ACC",
		testFailed: "#FF1277",
		testUnset: "#E17615",
		testSkipped: "#636D83",
	},

	git: {
		// Ruler markers, minimap markers, gutter markers, file names
		addedOrStaged: "#31A155",
		modified: "#018ACC",
		renamed: "#13BBB7",
		untracked: "#C75AF3",
		removedOrConflicting: "#FF1277",
		ignoredOrSubmodule: "#636D83",
		current: "#31A155",
		incoming: "#018ACC",

		// Diff viewer line backgrounds, refactor preview text backgrounds
		insertedBgA: "#31A1552A", // Entire modified line #243a31 Specifically added #264b37
		removedBgA: "#FF127720", // Entire modified line #3f2234 Specifically removed #58203c
		diffDiagonal: "#636D8388",

		// Conflict viewer line backgrounds
		currentBgA: "#31A1552A",
		currentHeaderBgA: "#31A1556A",
		incomingBgA: "#018ACC2A",
		incomingHeaderBgA: "#018ACC6A",

		// Merge editor backgrounds
		mergeWordChangeBgA: "#CCD00C2A",
		mergeLineChangeBgA: "#CCD00C1A",
		mergeUnhandledUnfocused: "#CCD00C4A",
		mergeUnhandledFocused: "#CCD00CAA", // +(ruler marker)
		mergeHandledUnfocused: "#FFFFFF3A",
		mergeHandledFocused: "#FFFFFF8A", // +(ruler marker)
	},

	debug: {
		// Debug toolbar icons
		start: "#31A155",
		pause: "#E17615",
		step: "#018ACC",
		stop: "#FF1277",

		// Gutter icons
		breakpoint: "#FF1277",
		breakpointDisabled: "#636D83",

		// Exception widget background
		exceptionBg: "#3D412F",

		// Debug console text
		info: "#10B1FE",
		warning: "#FF6B66",
		error: "#FF2884",
		source: "#FFFFFF",
		input: "#D177F5",
	},

	terminal: {
		// Command decoration icons
		default: "#636D83", // +(SetMark sequence)
		success: "#31A155",
		error: "#FF1277",

		foreground: "#ABB2BF", // 0m (foreground)
		ansiBlack: "#FFFFFF", // 30m
		ansiBrightBlack: "#666666", // 30;1m
		ansiWhite: "#22222A", //37m (background)
		ansiBrightWhite: "#FFFFFF", // (technicall 37;1m but vscode also applies this to just bold 1m, hence it's white)
		ansiBlue: "#09A1ED",
		ansiBrightBlue: "#41B9FF",
		ansiCyan: "#13BBB7",
		ansiBrightCyan: "#16DAD6",
		ansiGreen: "#2DAE58",
		ansiBrightGreen: "#25DA6A",
		ansiYellow: "#CF9C00",
		ansiBrightYellow: "#FFC104",
		ansiRed: "#FF0046",
		ansiBrightRed: "#FF2E87",
		ansiMagenta: "#C010EF",
		ansiBrightMagenta: "#C75AF3",
	},

	ui: {
		// Intellisense widget, command bar, text editor, text editor block cursor char, text editor gutter, text
		// editor minimap, breacrumbs, hover widget, peek view text editor, peek view text gutter, tab empty group,
		// tab drop-into promp, tab active background, tab hover background, tab zen mode sides, activity bar
		// background, welcome page background, panel background, notification background, command center
		// background
		//
		// MINIMAL: Badge background,
		primaryBg: "#22222A",

		// Widgets, hover widget status bar, peek view list, tab row background, tab row empty background, tab
		// inactive background, tab unfocused background, sidebar background, panel section header background,
		// debug toolbar background & border, notification centre header, titlebar, block quote background,
		// code-block background, keybind table header backgrounds, keybind table even row background
		//
		// DISABLED_STATUS_BAR: MINIMAL: Status bar background, status bar remote icon background,
		secondaryBg: "#1E1D24",

		// Sidebar section header background
		tertiaryBg: "#151419",

		// Breadcrumb, menu, any button which dropdowns
		dropdownBg: "#22222A",

		// Checkbox, dropdown (+list), input field,
		inputBg: "#22222A",

		// Tab group, sidebar pane, panel section, terminal, list
		primaryDropBg: "#FF4C981A",

		// All borders
		border: "#3D434F",

		// Menu separator, command bar group separator, border between pinned and non-pinned tabs, (??? x1)
		separator: "#3D434F",

		// Input field foreground
		placeholderText: "#646a74",

		// Menu disabled entry foreground, (this is chosen to match `placeholderText` since the disabled text also
		// has a secondary fade layer)
		disabledText: "#848A95",

		// Little buttons, titlebar menu buttons
		//
		// DISABLED_STATUS_BAR: MINIMAL: Status bar hover/active button overlays
		hoverBgA: "#FFFFFF1A",
		activeBgA: "#FFFFFF2A",

		// Lists, command bar hover, notification hover
		//
		// MINIMAL: List unfocused selected overlay
		listHoverBgA: "#FFFFFF10",
		// DEFAULT: DISABLED_STATUS_BAR: List unfocused selected overlay
		listInactiveBgA: "#FF4C981A",

		// Keybind background
		selectedBgA: "#FFFFFF10",

		// Dropdown selected, intellisense widget, peek view result, menu dropdown, command bar, command center
		// hover
		selectedBg: "#2F2F37", // FFFFFF10 on primaryBg
		// Welcome page tile on hover
		selectedSecondaryBg: "#35343A", // FFFFFF10 on secondaryBg

		// Tree indent guide
		treeIndent: "#454C59",

		// Scrollbar/minimap handle overlays
		scrollBgA: "#FFFFFF10",
		scrollHoverBgA: "#FFFFFF1F",
		scrollActiveBgA: "#FFFFFF2F",

		// Shadow whenever some scrollable element is scrolled, shadows around open widgets
		shadow: "#0000005F",

		// Status bar during debugging background
		statusDebugBg: "#31A155",
		// Status bar when no folder is open background
		statusEmptyBg: "#151419",
		// DEFAULT: Status bar hover/active button overlays
		statusHoverBgA: "#FFFFFF2F",
		statusActiveBgA: "#FFFFFF4F",

		// Tab unfocused indicator
		unfocusedTab: "#7E3558", // FF4C986A on primaryBg

		// Activity bar inactive icon
		activityBarInactive: "#636D83",

		// Code actions icon
		lightBulb: "#FFC104",

		// Extension badge icons
		star: "#FFC104",
		remote: "#09A1ED",
		verified: "#31A155",
		prerelease: "#E17615",
		sponsor: "#FF1277",

		// Chart colours
		chartLine: "#B9BFCA",
		chartBlue: "#10B1FE",
		chartGreen: "#3FC56B",
		chartYellow: "#F9C859",
		chartOrange: "#FF6B66",
		chartRed: "#FF2884",
		chartPurple: "#D177F5",
	},

	brackets: {
		one: "#3FC56B",
		two: "#10B1FE",
		three: "#F9C859",
		four: "#FF6B66",
		five: "#D177F5",
		six: "#B58E95",
	},

	gitGraph: [
		"#F85EB4",
		"#10B1FE",
		"#3FC56B",
		"#F9C859",
		"#FF6B66",
		"#D177F5",
		"#B58E95",
		"#97BCCD",
		"#15C9C5",
		"#9ACC12",
	],

	todo: {
		todo: "#B9BFCA",
		fixme: "#FF6B66",
		bug: "#FF2884",
		hack: "#F9C859",
		maybe: "#15C9C5",
		unchecked: "#B9BFCA",
		checked: "#3FC56B",
	},
};

export const darkSyntax = {
	keyword: "#F85EB4",
	fn: "#10B1FE",
	type: "#3FC56B",
	variant: "#15C9C5",
	constant: "#15C9C5",
	var: "#B9BFCA",

	punctuation: "#828DA0",
	parameter: "#97BCCD",
	member: "#B58E95",

	string: "#F9C859",
	char: "#FF6B66",
	number: "#FF6B66",
	format: "#D177F5",
	comment: "#636D83",

	interface: "#D177F5",
	attribute: "#FF6B66",

	invalid: "#FF2884",

	rustLabel: "#9ACC12",
	rustUnsafe: "#FF6B66",
	rustKeyword: "#F750AE",
	rustFn: "#01AAFA",
	rustVar: "#ABB2BF",
	rustParam: "#87B2C5",
	rustMacroSpecifier: "#9ACC12",

	jsRegex: "#B9BFCA",
	reactEmbedded: "#FF6B66",
	reactAttribute: "#D177F5",

	psVar: "#3FC56B",
	psSpecialVar: "#D177F5",
	psOperator: "#F85EB4",
	psCommentKeyword: "#B9BFCA",

	htmlTag: "#F85EB4",
	htmlAttribute: "#15C9C5",
	htmlId: "#FF6B66",
	htmlClass: "#3FC56B",
	htmlLink: "#D177F5",
	htmlMeta: "#F9C859",
	htmlEmbeddedCss: "#9ACC12",

	cssProperty: "#B58E95",
	cssValue: "#15C9C5",
	cssFontname: "#F9C859",
	cssPseudoclass: "#9ACC12",
	cssMedia: "#D177F5",

	xmlNamespace: "#9ACC12",
	xmlDoctype: "#D177F5",

	mdText: "#B9BFCA",
	mdAltText: "#636D83",
	mdHeading: "#F85EB4",
	mdBold: "#FF6B66",
	mdItalic: "#10B1FE",
	mdQuote: "#F9C859",
	mdStrikethrough: "#636D83",
	mdCode: "#B9BFCA",
	mdSeparator: "#B9BFCA",
	mdList: "#15C9C5",
	mdUrlName: "#3FC56B",
	mdUrl: "#D177F5",
	mdMaths: "#9ACC12",
	mdMathsConst: "#15C9C5",

	jsonKey: "#F85EB4",

	yamlKey: "#F85EB4",
	yamlTimestamp: "#3FC56B",
	yamlAnchor: "#9ACC12",

	tomlKey: "#F85EB4",
	tomlTimestamp: "#3FC56B",
	tomlTable: "#9ACC12",
	tomlArray: "#D177F5",

	iniKey: "#F85EB4",
	iniHeading: "#9ACC12",

	bnfSymbol: "#3FC56B",
	bnfBuiltin: "#15C9C5",
};

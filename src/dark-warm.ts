import { SyntaxColors, UiColors } from "./theme";

export const darkWarmSyntax: SyntaxColors = {
	strongPink: "#fb3453",
	pink: "#fb5270",
	purple: "#bd86d3",
	blue: "#839da5",
	cyan: "#7cc091",
	lightBlue: "#aaaaaa",
	green: "#b8bb26",
	lime: "#91c043",
	yellow: "#fabd2f",
	orange: "#fe8019",
	mauve: "#c7899a",
	fg: "#d5c4a1",
	gray: "#a89984",
	fadedGray: "#928374",
	//fadedGray: "#7c6f64",

	boldPink: "#fb4162",
	boldBlue: "#778f97",
	boldLightBlue: "#969696",
	boldFg: "#cfbc94",
};

export const darkWarmColors: UiColors = {
	// Note: All non-alpha backgrounds are based on `primaryBg`.

	text: {
		// Most ui text, text editor default text
		normal: "#bdae93",

		// Setting header text
		bold: "#d5c4a1",

		// Text editor line number, text editor suggestion ghost text, list deemphasized text, tab unfocused title,
		// (??? x1)
		muted: "#928374",

		// Breadcrumb text, general description text, titlebar unfocused text
		light: "#97856B",

		// Button text, extension button text, status bar when debugging text & icons
		//
		// DEFAULT: DISABLED_STATUS_BAR: Command bar & intellisense & list selected text & icon, badge text, banner
		// text, menu selected text
		//
		// DEFAULT: Status bar text & icons
		inverse: "#fbf1c7",

		// Peek view selected text, peek view header text, peek view filename text,
		emphasised: "#fbf1c7",

		/// Text editor unnecessary text
		faded: "#000000C0",

		decoration: {
			// Text editor whitespace chars, text editor indentation guides, text editor rulers
			light: "#48423F",

			// Text editor matching bracket border, text editor corrent indentation guide
			//
			// MONO_GUIDES: Bracket match guides
			dark: "#665c54",

			// Codelens
			//
			// DEFAULT_INLAY: Inlay hint text
			codelens: "#a89984",

			// BCKG_INLAY: Inlay hint text
			alt1Inlay: "#bdae93",
			// BCKG_INLAY: Inlay hint background
			alt1InlayBgA: "#fbf1c707",

			// ACCENT_INLAY: Inlay hint text
			alt2Inlay: "#7a2936", // fb34536A on primaryBg

			// ACCENT_BCKG_INLAY: Inlay hint text
			alt3Inlay: "#872a39", // fb34537A on primaryBg
			// ACCENT_BCKG_INLAY: Inlay hint background
			alt3InlayBgA: "#fb345310",
		},

		// Text editor folded line, text editor hover over symbol background box
		//
		// NORMAL_LINE: Text editor current line background
		currentLineBgA: "#fbf1c707",
		// ALT_LINE: Text editor current line border
		currentLineBorder: "#fbf1c710",

		// Text editor selection background box, text editor matching text background box, text editor matching
		// symbol background box, text editor selection boxes, general selection, input field, terminal selection,
		selectionBg: "#342226", // FF4C981A on primaryBg
		selectionBgA: "#fb34531A",
		// Text editor unfocused selection background box, text editor find current range background box, terminal
		// unfocused selection
		secondarySelectionBgA: "#fb345310",

		// Text editor tabstop background box
		tabstopBgA: "#fb34531A",

		// Text editor & search sidebar find match background box, text editor match line background, peek view
		// match background box, list filter widget background, list filter match background, terminal find match
		// background box, (??? x1)
		matchBg: "#414422",
		matchBgA: "#b8bb263A",

		// Text editor & search sidebar find match border, peek view match border, list filter match border,
		// terminal find match border,
		matchBorder: "#91c043",
		matchBorderA: "#91c0438A",
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
		primary: "#fb3453",
		primaryHover: "#c42941",
		link: "#fb4964",
		linkHover: "#ff627a",

		// Button background, codeblock text, (??? x1)
		//
		// DEFAULT: status bar remote background
		secondary: "#61a2b7",
		secondaryHover: "#508596",
	},

	diag: {
		// Ruler markers, minimap markers,
		selection: "#8D334B", // +(list search match background, ??? x1)
		match: "#c8d129", // +(marker for currently selected @SYMBOL)
		bracket: "#665c545A",

		// Error lens text, error lens gutter icons, peek view border, input validation text & border, testing
		// message line text (info+error), text editor underline squiggles, problems panel icons, ruler markers,
		// minimap markers, notification icons,
		//
		// DISABLED_STATUS_BAR: MINIMAL: Status bar text & icons,
		hint: "#91c043",
		info: "#458588", // +(general peek view, status bar prominent if applicable)
		warning: "#fe8019", // +(list warning text)
		error: "#fb3453", // +(general error text, bracket mismatch foreground, list error text, list invalid text, list no matches, confusing unicode highlighting border)

		// Error lens line background, peek view header background, input validation background, testing message
		// line background (info+error),
		hintBg: "#2c3526", // *BgA on primaryBg
		hintBgA: "#91c04320",
		infoBg: "#222d2f", // +(general peek view)
		infoBgA: "#45858820", // +(general peek view)
		warningBg: "#3a2d20",
		warningBgA: "#fe801920",
		errorBg: "#342226",
		errorBgA: "#fb34531A", // +(confusing unicode highlighting)

		// Testing status icons
		testPassed: "#91c043",
		testQueued: "#458588",
		testFailed: "#fb3453",
		testUnset: "#fe8019",
		testSkipped: "#928374",
	},

	git: {
		// Ruler markers, minimap markers, gutter markers, file names
		addedOrStaged: "#91c043",
		modified: "#458588",
		renamed: "#7cc091",
		untracked: "#b16286",
		removedOrConflicting: "#fb3453",
		ignoredOrSubmodule: "#928374",
		current: "#91c043",
		incoming: "#458588",

		// Diff viewer line backgrounds, refactor preview text backgrounds
		insertedBgA: "#91c0432A",
		removedBgA: "#fb345320",
		diffDiagonal: "#92837480",

		// Conflict viewer line backgrounds
		currentBgA: "#91c0432A",
		currentHeaderBgA: "#91c0436A",
		incomingBgA: "#4585882A",
		incomingHeaderBgA: "#4585886A",

		// Merge editor backgrounds
		mergeWordChangeBgA: "#b8bb262A",
		mergeLineChangeBgA: "#b8bb261A",
		mergeUnhandledUnfocused: "#b8bb264A",
		mergeUnhandledFocused: "#b8bb26AA", // +(ruler marker)
		mergeHandledUnfocused: "#fbf1c73A",
		mergeHandledFocused: "#fbf1c78A", // +(ruler marker)
	},

	debug: {
		// Debug toolbar icons
		start: "#91c043",
		pause: "#fe8019",
		step: "#458588",
		stop: "#fb3453",

		// Gutter icons
		breakpoint: "#fb3453",
		breakpointDisabled: "#928374",

		// Exception widget background
		exceptionBg: "#3D412F",

		// Debug console text
		info: "#839da5",
		warning: "#fe8019",
		error: "#fb3453",
		source: "#d5c4a1",
		input: "#bd86d3",
	},

	terminal: {
		// Command decoration icons
		default: "#928374", // +(SetMark sequence)
		success: "#91c043",
		error: "#fb3453",

		foreground: "#d5c4a1", // 0m (foreground)
		ansiBlack: "#fbf1c7", // 30m
		ansiBrightBlack: "#666666", // 30;1m
		ansiWhite: "#1d2021", //37m (background)
		ansiBrightWhite: "#fbf1c7", // (technicall 37;1m but vscode also applies this to just bold 1m, hence it's white)
		ansiBlue: "#458588",
		ansiBrightBlue: "#83a598",
		ansiCyan: "#689d6a",
		ansiBrightCyan: "#8ec07c",
		ansiGreen: "#98971a",
		ansiBrightGreen: "#b8bb26",
		ansiYellow: "#d79921",
		ansiBrightYellow: "#fabd2f",
		ansiRed: "#cc241d",
		ansiBrightRed: "#fb4934",
		ansiMagenta: "#b16286",
		ansiBrightMagenta: "#d3869b",
	},

	ui: {
		// Intellisense widget, command bar, text editor, text editor block cursor char, text editor gutter, text
		// editor minimap, breacrumbs, hover widget, peek view text editor, peek view text gutter, tab empty group,
		// tab drop-into promp, tab active background, tab hover background, tab zen mode sides, activity bar
		// background, welcome page background, panel background, notification background, command center
		// background
		//
		// MINIMAL: Badge background,
		primaryBg: "#1d2021",

		// Widgets, hover widget status bar, peek view list, tab row background, tab row empty background, tab
		// inactive background, tab unfocused background, sidebar background, panel section header background,
		// debug toolbar background & border, notification centre header, titlebar, block quote background,
		// code-block background, keybind table header backgrounds, keybind table even row background
		//
		// DISABLED_STATUS_BAR: MINIMAL: Status bar background, status bar remote icon background,
		secondaryBg: "#212526",

		// Sidebar section header background
		tertiaryBg: "#1a1c1d",

		// Breadcrumb, menu, any button which dropdowns
		dropdownBg: "#1d2021",

		// Checkbox, dropdown (+list), input field,
		inputBg: "#1d2021",

		// Tab group, sidebar pane, panel section, terminal, list
		primaryDropBg: "#fb34531A",

		// All borders
		border: "#504945",

		// Menu separator, command bar group separator, border between pinned and non-pinned tabs, (??? x1)
		separator: "#504945",

		// Input field foreground
		placeholderText: "#776B5E",

		// Menu disabled entry foreground, (this is chosen to match `placeholderText` since the disabled text also
		// has a secondary fade layer)
		disabledText: "#9E8E76",

		// Little buttons, titlebar menu buttons, editor stick hover
		//
		// DISABLED_STATUS_BAR: MINIMAL: Status bar hover/active button overlays
		hoverBgA: "#fbf1c71A",
		activeBgA: "#fbf1c72A",

		// Lists, command bar hover, notification hover
		//
		// MINIMAL: List unfocused selected overlay
		listHoverBgA: "#fbf1c710",
		// DEFAULT: DISABLED_STATUS_BAR: List unfocused selected overlay
		listInactiveBgA: "#fb34531A",

		// Keybind background
		selectedBgA: "#fbf1c710",

		// Dropdown selected, intellisense widget, peek view result, menu dropdown, command bar, command center
		// hover
		selectedBg: "#2a2c2b", // fbf1c710 on primaryBg
		// Welcome page tile on hover
		selectedSecondaryBg: "#383a36", // fbf1c710 on secondaryBg

		// Tree indent guide
		treeIndent: "#504945",

		// Scrollbar/minimap handle overlays
		scrollBgA: "#fbf1c710",
		scrollHoverBgA: "#fbf1c71F",
		scrollActiveBgA: "#fbf1c72F",

		// Shadow whenever some scrollable element is scrolled, shadows around open widgets
		shadow: "#0000005F",

		// Status bar during debugging background
		statusDebugBg: "#779e35",
		// Status bar when no folder is open background
		statusEmptyBg: "#151419",
		// DEFAULT: Status bar hover/active button overlays
		statusHoverBgA: "#0000002F",
		statusActiveBgA: "#0000004F",

		// Tab unfocused indicator
		unfocusedTab: "#75293a", // fb34536A on primaryBg

		// Activity bar inactive icon
		activityBarInactive: "#928374",
		activityBarTopInactive: "#ad9b79",

		// Code actions icon
		lightBulb: "#fabd2f",

		// Extension badge icons
		star: "#fabd2f",
		remote: "#458588",
		verified: "#91c043",
		prerelease: "#fe8019",
		sponsor: "#fb3453",

		// Chart colours
		chartLine: "#d5c4a1",
		chartBlue: "#839da5",
		chartGreen: "#b8bb26",
		chartYellow: "#fabd2f",
		chartOrange: "#fe8019",
		chartRed: "#fb3453",
		chartPurple: "#bd86d3",

		preformatText: "#61a2b7",
	},

	brackets: {
		one: "#b8bb26",
		two: "#839da5",
		three: "#fabd2f",
		four: "#fe8019",
		five: "#bd86d3",
		six: "#c7899a",
	},

	gitGraph: [
		"#fb5270",
		"#839da5",
		"#b8bb26",
		"#fabd2f",
		"#fe8019",
		"#bd86d3",
		"#c7899a",
		"#a5bcc4",
		"#7cc091",
		"#91c043",
	],

	todo: {
		todo: "#d5c4a1",
		fixme: "#fe8019",
		bug: "#fb3453",
		hack: "#fabd2f",
		maybe: "#7cc091",
		unchecked: "#d5c4a1",
		checked: "#b8bb26",
	},
};

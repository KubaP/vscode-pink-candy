export const lightColors = {
    // Note: All non-alpha backgrounds are based on `primaryBg`.

    text: {
        normal: "#565869",

        // Text editor line numbers, suggestion ghost text, inactive tabs,
        muted: "#ADB1C2",

        // Breadcrumbs, general descriptions, unfocused titlebar,
        light: "#999999",

        // Status bar foreground, intellisense matching letters, intellisense selected foreground, button text,
        // list selected text, badge foreground, command bar selected foreground, menu selected text, banner text,
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
            // Codelens, inlay hints
            codelens: "#747474",

            // Inlay hint ALTERNATE style.
            altInlay: "#565869",
            altInlayBgA: "#0000000A",
            // FIXME: Fill out colours
            altInlayAccent: "#000",
            altInlayAccentBgA: "#FF12771A",
        },

        // Text editor current line, text editor folded line, hover over symbol background box,
        currentLine: "#00000007",
        // Text editor current line ALTERNATE style.
        currentLineBorder: "#00000010",

        // General selection box background, input option, text editor selection boxes, terminal selection,
        selectionBg: "#FBE3EE",
        selectionBgA: "#FF12771A",
        // Unfocused text editor selection boxes,
        secondarySelectionBgA: "#FF127710",

        // Tabstop box backgrounds,
        tabstopBgA: "#FF12771A",

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
        // alternate status bar text,
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
        insertedBgA: "#11C6782A", // Entire modified line #d3f2e6 Added #b2ead3
        removedBgA: "#FF127720", // Entire modified line #fbddea Removed #fcc2db
        diffDiagonal: "#ADB1C288",

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

        // Console colors.
        info: "#09A1ED",
        warning: "#FF5C57",
        error: "#FF2E87",
        source: "#000000",
        input: "#C75AF3",
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
        ansiBlue: "#0f7cd7",
        ansiBrightBlue: "#09A1ED",
        ansiCyan: "#1ea0aa",
        ansiBrightCyan: "#13BBB7",
        ansiGreen: "#1ea330",
        ansiBrightGreen: "#30b95e",
        ansiYellow: "#c07205",
        ansiBrightYellow: "#CF9C00",
        ansiRed: "#ff0046",
        ansiBrightRed: "#ff3a70",
        ansiMagenta: "#b016ee",
        ansiBrightMagenta: "#c75af3",
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
        inputBg: "#FAFBFC",

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

        // Hover applied on the `primaryBg`.
        primaryHoverBgA: "#e6e6e7",
        secondaryHoverBgA: "#dadada",

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
        chartLine: "#565869",
        chartBlue: "#09A1ED",
        chartGreen: "#2DAE58",
        chartYellow: "#CF9C00",
        chartOrange: "#FF5C57",
        chartRed: "#FF1277",
        chartPurple: "#C75AF3",
    },

    brackets: {
        one: "#2DAE58",
        two: "#09A1ED",
        three: "#CF9C00",
        four: "#FF5C57",
        five: "#C75AF3",
        six: "#A8759A",
    },

    gitGraph: [
        "#F767BB",
        "#09A1ED",
        "#2DAE58",
        "#CF9C00",
        "#FF5C57",
        "#C75AF3",
        "#A8759A",
        "#6E82A6",
        "#13BBB7",
        "#8CBA10"
    ],

    todo: {
        todo: "#565869",
        fixme: "#FF5C57",
        bug: "#FF1277",
        hack: "#CF9C00",
        maybe: "#13BBB7",
        unchecked: "#565869",
        checked: "#2DAE58",
    }
};

export const lightSyntax = {
    keyword: "#F767BB",
    fn: "#09A1ED",
    type: "#2DAE58",
    variant: "#13BBB7",
    constant: "#13BBB7",
    var: "#565869",

    punctuation: "#777777",
    parameter: "#6E82A6",
    member: "#A8759A",

    string: "#CF9C00",
    char: "#FF5C57",
    number: "#FF5C57",
    format: "#C75AF3",
    comment: "#ADB1C2",

    interface: "#C75AF3",
    attribute: "#FF5C57",

    invalid: "#FF1277",

    rustLabel: "#8CBA10",
    rustUnsafe: "#FF5C57",
    rustKeyword: "#F871C0",
    rustFn: "#1DAEf6",
    rustVar: "#6C6E83",
    rustParam: "#7B8dAE",

    jsRegex: "#565869",
    reactEmbedded: "#FF5C57",
    reactAttribute: "#C75AF3",

    psVar: "#2DAE58",
    psSpecialVar: "#C75AF3",
    psOperator: "#F767BB",
    psCommentKeyword: "#565869",

    htmlTag: "#F767BB",
    htmlAttribute: "#13BBB7",
    htmlId: "#FF5C57",
    htmlClass: "#2DAE58",
    htmlLink: "#C75AF3",
    htmlMeta: "#CF9C00",
    htmlEmbeddedCss: "#8CBA10",

    cssProperty: "#A8759A",
    cssValue: "#13BBB7",
    cssFontname: "#CF9C00",
    cssPseudoclass: "#8CBA10",
    cssMedia: "#C75AF3",

    xmlNamespace: "#8CBA10",
    xmlDoctype: "#C75AF3",

    mdText: "#565869",
    mdAltText: "#ADB1C2",
    mdHeading: "#F767BB",
    mdBold: "#FF5C57",
    mdItalic: "#09A1ED",
    mdQuote: "#CF9C00",
    mdStrikethrough: "#ADB1C2",
    mdCode: "#565869",
    mdSeparator: "#565869",
    mdList: "#13BBB7",
    mdUrlName: "#2DAE58",
    mdUrl: "#C75AF3",
    mdMaths: "#8CBA10",
    mdMathsConst: "#13BBB7",

    jsonKey: "#F767BB",

    yamlKey: "#F767BB",
    yamlTimestamp: "#2DAE58",
    yamlAnchor: "#8CBA10",

    tomlKey: "#F767BB",
    tomlTimestamp: "#2DAE58",
    tomlTable: "#8CBA10",
    tomlArray: "#C75AF3",

    iniKey: "#F767BB",
    iniHeading: "#8CBA10",

    bnfSymbol: "#2DAE58",
    bnfBuiltin: "#13BBB7",
}
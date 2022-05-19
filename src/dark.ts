export const darkColors = {

    text: {
        normal: "#ABB2BF",

        // Text editor line numbers, suggestion ghost text, inactive tabs,
        muted: "#636D83",

        // Breadcrumbs, general descriptions, unfocused titlebar,
        light: "#7C869B",

        // Status bar foreground, intellisense matching letters, intellisense selected foreground, button text,
        // list selected text, badge foreground, command bar selected foreground, menu selected text, banner text,
        inverse: "#FFFFFF",

        // Peek view title, peek view filenames,
        emphasised: "#FFFFFF",

        // Unnecessary text editor text,
        faded: "#000000C0",

        decoration: {
            // Indentation guides, whitespace chars, rulers,
            light: "#3D434F",
            // Current indentation guide, matching bracket border,
            dark: "#5A6375",
            // Codelens, inlay hints
            codelens: "#9C9C9C",

            // Inlay hint ALTERNATE style.
            altInlay: "#ABB2BF",
            altInlayBgA: "#FFFFFF10",
            // FIXME: Tweak this
            altInlayAccent: "#d34482",
            altInlayAccentBgA: "#FF4C981A",
        },

        // Text editor current line, text editor folded line, hover over symbol background box,
        currentLine: "#FFFFFF07",
        // Text editor current line ALTERNATE style.
        currentLineBorder: "#FFFFFF10",

        // General selection box background, input option, text editor selection boxes, terminal selection,
        selectionBg: "#81577A",
        selectionBgA: "#FF4C981A",
        // Unfocused text editor selection boxes,
        secondarySelectionBgA: "#FF4C9810",

        // Tabstop box backgrounds,
        tabstopBgA: "#FF4C981A",

        // Text editor & terminal highlight boxes, line background, search sidebar,
        // peek view match highlight boxes, list filter match highlight boxes,
        matchBg: "#4E522B",
        matchBgA: "#CCD00C3A",
        matchBorder: "#31A155",
        matchBorderA: "#31A1558A",
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
    primaryBg: "#22252a",

    diag: {
        // Ruler/minimap decorations, underline squiggles, error lens foregrounds, problem panel icons,
        // input validation foregrounds, notification icons, testing message foregrounds, peek view widget text,
        // alternate status bar text,
        selection: "#81577A", // +(list selected background)
        match: "#9CA320",
        bracket: "#5A63755A", // bracket match
        hint: "#31A155",
        info: "#018ACC", // +(peek view)
        warning: "#E17615", // +(list warning foreground)
        error: "#FF1277", // +(general error text foreground, bracket foreground mismatch, list error foreground, confusing unicode highlighting)

        // Error lens line backgrounds, testing message backgrounds, peek view backgrounds,
        // input validation backgrounds,
        hintBg: "#293B38",
        hintBgA: "#31A15520",
        infoBg: "#233847",
        infoBgA: "#018ACC20",
        warningBg: "#403530",
        warningBgA: "#E1761520",
        errorBg: "#3E2A3B",
        errorBgA: "#FF12771A",

        // Testing icons,
        testPassed: "#31A155",
        testQueued: "#018ACC",
        testFailed: "#FF1277",
        testUnset: "#E17615",
        testSkipped: "#636D83",
    },

    git: {
        // File names, ruler/gutter/minimap decorations (where relevant),
        addedOrStaged: "#31A155",
        modified: "#018ACC",
        renamed: "#13BBB7",
        untracked: "#C75AF3",
        removedOrConflicting: "#FF1277",
        ignoredOrSubmodule: "#636D83",

        // Diff viewer line backgrounds,
        insertedBgA: "#31A1552A", // Entire modified line #243a31 Added #264b37
        removedBgA: "#FF127720", // Entire modified line #3f2234 Removed #58203c
        diffDiagonal: "#636D8388",

        // Conflict viewer ruler decorations,
        current: "#31A155",
        incoming: "#018ACC",
        // Conflict viewer line backgrounds,
        currentBgA: "#31A1552A",
        currentHeaderBgA: "#31A1556A",
        incomingBgA: "#018ACC2A",
        incomingHeaderBgA: "#018ACC6A",
    },

    debug: {
        // Debug toolbar icons.
        start: "#31A155",
        pause: "#E17615",
        step: "#018ACC",
        stop: "#FF1277",

        // Gutter breakpoints.
        breakpoint: "#FF1277",
        breakpointDisabled: "#636D83",

        // Exception widget background.
        exceptionBg: "#3D412F",


        // Console colors.
        info: "#10B1FE",
        warning: "#FF6B66",
        error: "#FF2884",
        source: "#FFFFFF",
        input: "#D177F5",
    },

    terminal: {
        // Command decoration icons,
        default: "#636D83",
        success: "#31A155",
        error: "#FF1277",

        background: "#22252a",
        foreground: "#ABB2BF", // 0m (foreground)
        ansiBlack: "#fff", // 30m
        ansiBrightBlack: "#666", // 30;1m
        ansiWhite: "#22252a", //37m (background)
        ansiBrightWhite: "#fff", // (technicall 37;1m but vscode also applies this to just bold 1m)
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
        ansiMagenta: "#c010ef",
        ansiBrightMagenta: "#c75af3",
    },

    ui: {
        // Widgets, find & replace pop-up, peek view list, inactive tab, tab header, sidebar,
        // panel section headers, debug toolbar (+border), notification centre header, command bar,
        // titlebar, drag prompt,
        secondaryBg: "#1D2024",

        // Sidebar section headers, widget status bar,
        tertiaryBg: "#141619",

        // Breadcrumbs, menus, any buttons which dropdown etc,
        dropdownBg: "#22252a",

        // Checkbox, dropdown (+list), text input,
        inputBg: "#22252a",

        // Editor groups, sidebar panes, panels, 
        primaryDropBg: "#FF4C981A",

        // Panel, panel section header, terminal, settings page, peek view, sidebar, text input, tab groups,
        // dropdown, checkbox, hover widgets, exception widget, ruler, drag prompt,
        border: "#3D434F",

        // Command bar, notifications,
        secondaryBorder: "#2f333c",

        // Menu separator
        separator: "#3D434F",

        tabSeparator: "#5a6374",

        // Input foreground,
        placeholderText: "#4D5665",

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
        // FIXME: Properly do-up hovers in the dark theme
        primaryHoverBgA: "#e6e6e7",
        secondaryHoverBgA: "#dadada",

        // Hover/selected list overlay,
        listHoverBgA: "#0000001A",
        listInactiveBgA: "#FF4C981A",
        // Tree indent guide,
        treeIndent: "#3D434F",

        // Scrollbar/minimap handle overlays,
        scrollBgA: "#FFFFFF10",
        scrollHoverBgA: "#FFFFFF1F",
        scrollActiveBgA: "#FFFFFF2F",

        // Shadow whenever some scrollable element is scrolled, shadows around widgets,
        shadow: "#0000005F",

        // Status bar during debugging,
        statusDebugBg: "#31A155",
        // Status bar when no folder is open,
        statusEmptyBg: "#E5E5E5", // FIXME: This probably isn't a good colour.
        // Hover/active button overlays,
        statusHoverBgA: "#0000002F",
        statusActiveBgA: "#0000004F",

        // Unfocused active tab indicator,
        unfocusedTab: "#FFA2CA",

        // Inactive icons,
        activityBarInactive: "#636D83",

        // Code actions icon,
        lightBulb: "#FFC104",

        // Extension badge icons,
        star: "#FFC104",
        remote: "#09A1ED",
        verified: "#31A155",
        prerelease: "#E17615",

        // Chart colours,
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
        "#9ACC12"
    ],

    todo: {
        todo: "#B9BFCA",
        fixme: "#FF6B66",
        bug: "#FF2884",
        hack: "#F9C859",
        maybe: "#15C9C5",
        unchecked: "#B9BFCA",
        checked: "#3FC56B",
    }
}

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
}
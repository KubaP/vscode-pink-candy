import * as path from "path";
import * as fs from "fs";

export function createThemes() {
    createTheme("TEST", "light", "test.json", lightColors, lightSyntax);
    createTheme("TEST-DARK", "dark", "test-dark.json", darkColors, darkSyntax);
}

function createTheme(name: string, type: string, file: string, color: any, syntax: any) {
    const jsonPath = path.join(__dirname, "..", "themes", file);
    const theme = generateTheme(color, syntax, name, type);

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

    brackets: {
        one: "#2dae58",
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

const lightSyntax = {
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

const darkColors = {

    text: {
        normal: "#ABB2BF",

        // Text editor line numbers, suggestion ghost text, inactive tabs,
        muted: "#636D83",

        // Breadcrumbs, general descriptions, unfocused titlebar,
        light: "#7C869B",

        // Status bar foreground, intellisense matching letters, intellisense selected foreground, button text,
        // list selected text, badge foreground, command bar selected foreground, menu selected text, banner text,
        // 
        inverse: "#FFFFFF",

        // Peek view title, peek view filenames,
        emphasised: "#000000", //FIXME

        // Unnecessary text editor text,
        faded: "#000000C0",

        decoration: {
            // Indentation guides, whitespace chars, rulers,
            light: "#3D434F",
            // Current indentation guide, matching bracket border,
            dark: "#5A6375",
            // Codelens
            codelens: "#9C9C9C",
        },

        // Text editor current line, text editor folded line, hover over symbol background box,
        currentLine: "#FFFFFF07",

        // General selection box background, input option, text editor selection boxes, terminal selection,
        selectionBg: "#81577A",
        selectionBgA: "#FF4C981A",
        // Unfocused text editor selection boxes,
        secondarySelectionBgA: "#FF4C9810",

        // Tabstop box backgrounds,
        tabstopBgA: "#FF4C986A",

        // Text editor & terminal highlight boxes, line background, search sidebar,
        // peek view match highlight boxes, list filter match highlight boxes,
        matchBg: "#9CA320",
        matchBgA: "#CCD00C3A",
        matchBorder: "#31A115",
        matchBorderA: "#31A15520",
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
    primaryBg: "#282C34",
    //primaryBg: "#22252a",

    diag: {
        // Ruler/minimap decorations, underline squiggles, error lens foregrounds, problem panel icons,
        // input validation foregrounds, notification icons, testing message foregrounds, peek view widget text,
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
        testUnset: "#FF942F", // FIXME
        testSkipped: "#636D83",
    },

    git: {
        // File names, ruler/gutter/minimap decorations (where relevant),
        addedOrStaged: "#31A115",
        modified: "#018ACC",
        renamed: "#13BBB7",
        untracked: "#C75AF3",
        removedOrConflicting: "#FF1277",
        ignoredOrSubmodule: "#636D83",

        // Diff viewer line backgrounds,
        insertedBgA: "#31A1152A",
        removedBgA: "#FF127720",
        diffDiagonal: "#636D83AA",

        // Conflict viewer ruler decorations,
        current: "#31A115",
        incoming: "#018ACC",
        // Conflict viewer line backgrounds,
        currentBgA: "#31A1152A",
        currentHeaderBgA: "#31A1156A",
        incomingBgA: "#018ACC2A",
        incomingHeaderBgA: "#018ACC6A",
    },

    debug: {
        // Debug toolbar icons.
        start: "#2FAF64",
        pause: "#E17615",
        step: "#018ACC",
        stop: "#FF1277",

        // Gutter breakpoints.
        breakpoint: "#FF1277",
        breakpointDisabled: "#636D83",

        // Exception widget background.
        exceptionBg: "#3D412F",


        // Console colors.
        info: "#09A1ED",
        warning: "#FF5C57",
        error: "#FF2E87",
        source: "#000000",
        input: "#C75AF3",
    },

    terminal: {
        // Command decoration icons,
        default: "#636D83",
        success: "#2FAF64",
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
        secondaryBg: "#22252A",
        //secondaryBg: "#1D2024",

        // Sidebar section headers, widget status bar,
        tertiaryBg: "#1D2024",

        // Breadcrumbs, menus, any buttons which dropdown etc,
        dropdownBg: "#22252A",

        // Checkbox, dropdown (+list), text input,
        inputBg: "#22252A",

        // Editor groups, sidebar panes, panels, 
        primaryDropBg: "#FF4C981A",

        // Panel, panel section header, terminal, settings page, peek view, sidebar, text input, tab groups,
        // dropdown, checkbox, hover widgets, exception widget, ruler, drag prompt,
        border: "#3D434F",
        //border: "#2f333c",

        // Command bar, notifications,
        secondaryBorder: "#3D434F",

        // Menu separator
        separator: "#7C869B",

        tabSeparator: "#999999",

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
        shadow: "#0000002F",

        // Status bar during debugging,
        statusDebugBg: "#31A155",
        // Status bar when no folder is open,
        statusEmptyBg: "#E5E5E5",
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
        verified: "#11C678",
        prerelease: "#FF942F",

        // Chart colours,
        chartLine: "#333333",
        chartBlue: "#09A1ED",
        chartGreen: "#3FC56B",
        chartYellow: "#FFC104",
        chartOrange: "#F77708",
        chartRed: "#FF0046",
        chartPurple: "#C75AF3",
    },

    brackets: {
        one: "#2dae58",
        two: "#09A1ED",
        three: "#CF9C00",
        four: "#FF5C57",
        five: "#C75AF3",
        six: "#A8759A",
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
        "#00d9cc", // #15C9C5
        "#9ACC12"
    ],

    todo: {
        todo: "#ABB2BF", // #B9BFCA
        fixme: "#FF6B66",
        bug: "#FF1277", // #FF2884
        hack: "#F9C859",
        maybe: "#00D9CC", // #15C9C5
        unchecked: "#ABB2BF", // #B9BFCA
        checked: "#3FC56B",
    }
}

const darkSyntax = {
    keyword: "#F85EB4",
    fn: "#10B1FE",
    type: "#3FC56B",
    variant: "#15C9C5",
    constant: "#15C9C5",
    var: "#B9BFCA",

    punctuation: "#828da0",
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

function generateTheme(color: any, syntax: any, name: string, type: string) {

    let errorLens;
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
            "errorLens.statusBarIconWarningForeground": color.text.inverse,
            "errorLens.statusBarIconErrorForeground": color.text.inverse,
            "errorLens.statusBarInfoForeground": color.text.inverse,
            "errorLens.statusBarHintForeground": color.text.inverse,
            "errorLens.statusBarWarningForeground": color.text.inverse,
            "errorLens.statusBarErrorForeground": color.text.inverse,
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
            "errorLens.statusBarIconWarningForeground": color.text.inverse,
            "errorLens.statusBarIconErrorForeground": color.text.inverse,
            "errorLens.statusBarInfoForeground": color.text.inverse,
            "errorLens.statusBarHintForeground": color.text.inverse,
            "errorLens.statusBarWarningForeground": color.text.inverse,
            "errorLens.statusBarErrorForeground": color.text.inverse,
            "errorLens.infoGutterIconColor": color.diag.info,
            "errorLens.warningGutterIconColor": color.diag.warning,
            "errorLens.errorGutterIconColor": color.diag.error,
        };
    }

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
            "editorBracketHighlight.foreground1": color.brackets.one,
            "editorBracketHighlight.foreground2": color.brackets.two,
            "editorBracketHighlight.foreground3": color.brackets.three,
            "editorBracketHighlight.foreground4": color.brackets.four,
            "editorBracketHighlight.foreground5": color.brackets.five,
            "editorBracketHighlight.foreground6": color.brackets.six,
            "editorBracketHighlight.unexpectedBracket.foreground": color.diag.error,
            "editorBracketPairGuide.foreground1": color.brackets.one,
            "editorBracketPairGuide.foreground2": color.brackets.two,
            "editorBracketPairGuide.foreground3": color.brackets.three,
            "editorBracketPairGuide.foreground4": color.brackets.four,
            "editorBracketPairGuide.foreground5": color.brackets.five,
            "editorBracketPairGuide.foreground6": color.brackets.six,
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
            ...errorLens,
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
        },
        semanticHighlighting: true,
        semanticTokenColors: {
            //
            "keyword": syntax.keyword,
            "type": syntax.keyword,
            "builtinType": syntax.keyword,
            "selfKeyword": syntax.keyword,
            "newOperator": syntax.keyword,
            "plainKeyword:csharp": syntax.keyword,
            "controlKeyword:csharp": syntax.keyword,
            //
            //
            "punctuation": syntax.punctuation,
            "operator": syntax.punctuation,
            "arithmetic": syntax.punctuation, // `+`, `-`, `*`, `/`
            "logical": syntax.punctuation,
            "comparison": syntax.punctuation, // `==`, `!=`, `===`
            "bitwise": syntax.punctuation,
            //
            //
            "function": syntax.fn, // Static function.
            "member.static:csharp": { // Static function.
                "foreground": syntax.fn,
                "fontStyle": "underline"
            },
            "method": syntax.fn, // Object method.
            "member:csharp": syntax.fn, // Object method.
            "macro": syntax.fn,
            "namespace": syntax.var,
            "struct": syntax.type,
            "class": syntax.type,
            "class.static:csharp": { // Static class.
                "foreground": syntax.type,
                "fontStyle": "underline"
            },
            "enum": syntax.type,
            "union": syntax.type,
            "typeAlias": syntax.type,
            "enumMember": syntax.variant,
            "boolean": syntax.variant,
            //
            //
            "interface": syntax.interface, // Rust: `MyTrait`
            "typeParameter": syntax.type, // Generic type annotation, e.g. `T`
            //
            //
            "variable": syntax.var,
            "local:csharp": syntax.var, // Local variable.
            "parameter": syntax.parameter,
            "property": syntax.member, // Object members.
            "field:csharp": syntax.member, // Object members.
            "field.static:csharp": { // Static object members.
                "foreground": syntax.member,
                "fontStyle": "underline"
            },
            "property:csharp": { // Csharp properties.
                "foreground": syntax.member,
                "fontStyle": "bold"
            },
            "property.static:csharp": { // Cssharp static properties.
                "foreground": syntax.member,
                "fontStyle": "bold underline"
            },
            "*.constant": syntax.constant,
            "variable.static:csharp": syntax.constant, // Constants
            "variable.readonly:csharp": syntax.constant, // Constants
            "variable.readonly:javascript": syntax.constant, // Constants
            //
            //
            "string": syntax.string, // `"string"`
            "stringVerbatim:csharp": syntax.string,
            "escapeSequence": syntax.char, // `\n`
            "character": syntax.char, // `'b'`
            "number": syntax.number,
            "comment": syntax.comment,
            //
            // 
            "attribute": syntax.attribute, // The #[]!() symbols in an attribute.
            "unresolvedReference": {
                "foreground": syntax.invalid
            },
            //
            // CSHARP
            "xmlDocCommentText": syntax.var,
            "xmlDocCommentName:csharp": syntax.comment,
            "xmlDocCommentDelimiter:csharp": syntax.comment,
            "xmlDocCommentAttributeName:csharp": syntax.char,
            "xmlDocCommentAttributeQuotes:csharp": syntax.string,
            "xmlDocCommentAttributeValue:csharp": syntax.string,
            //
            // RUST
            "operator.controlFlow": syntax.keyword,
            "label": syntax.rustLabel,
            "lifetime": syntax.interface,
            "formatSpecifier": syntax.format,
            //
            // REFERENCE
            "variable.reference": {
                "fontStyle": "italic"
            },
            "method.reference": {
                "fontStyle": "italic"
            },
            "function.reference": {
                "fontStyle": "italic"
            },
            "parameter.reference": {
                "fontStyle": "italic"
            },
            "selfKeyword.reference": {
                "fontStyle": "italic"
            },
            //
            // MUTABLE
            "variable.mutable": {
                "foreground": syntax.rustVar,
                "fontStyle": "bold"
            },
            "method.mutable": {
                "foreground": syntax.rustFn,
                "fontStyle": "bold"
            },
            "function.mutable": {
                "foreground": syntax.rustFn,
                "fontStyle": "bold"
            },
            "parameter.mutable": {
                "foreground": syntax.rustParam,
                "fontStyle": "bold"
            },
            "selfKeyword.mutable": {
                "foreground": syntax.rustKeyword,
                "fontStyle": "bold"
            },
            //
            // MUTABLE REFERENCE
            "variable.mutable.reference": {
                "foreground": syntax.rustVar,
                "fontStyle": "italic bold"
            },
            "method.mutable.reference": {
                "foreground": syntax.rustFn,
                "fontStyle": "italic bold"
            },
            "function.mutable.reference": {
                "foreground": syntax.rustFn,
                "fontStyle": "italic bold"
            },
            "parameter.mutable.reference": {
                "foreground": syntax.rustParam,
                "fontStyle": "italic bold"
            },
            "selfKeyword.mutable.reference": {
                "foreground": syntax.rustKeyword,
                "fontStyle": "italic bold"
            },
            // Unset the underline effect, since something like `+=` would otherwise be underlined.
            "arithmetic.mutable": {
                "fontStyle": ""
            },
            // Also unset.
            "bitwise.mutable": {
                "fontStyle": ""
            },
            //
            // UNSAFE
            "*.unsafe": syntax.rustUnsafe,
            "keyword.unsafe": {
                "fontStyle": "bold underline"
            },
            "function.unsafe": {
                "fontStyle": "underline"
            },
            "function.mutable.unsafe": {
                "fontStyle": "bold underline"
            },
            "function.mutable.reference.unsafe": {
                "fontStyle": "bold underline italic"
            },
            "method.unsafe": {
                "fontStyle": "underline"
            },
            "method.mutable.unsafe": {
                "fontStyle": "bold underline"
            },
            "method.mutable.reference.unsafe": {
                "fontStyle": "bold underline italic"
            },
            //
            // ATTRIBUTES
            "attributeBracket": syntax.attribute, // `#[]`
            "parenthesis.attribute": syntax.attribute, // `cfg(...)`
            "derive.attribute": syntax.attribute, // `derive(Debug)`
            "builtinAttribute": syntax.attribute, // `inline`, `cfg`, etc.
            "attribute.attribute": syntax.attribute, // `derive` or `clippy::something`.
            "generic.attribute": syntax.attribute, // Inside the attribute, e.g. `cfg(debug_assertions)`.
        },
        tokenColors: [
            // BASICS
            {
                "name": "Keywords",
                "scope": [
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
                    "constant.language.null.js",
                    "constant.language.undefined.js",
                    "keyword.operator.ternary.js"
                ],
                "settings": {
                    "foreground": syntax.keyword
                }
            },
            {
                "name": "Built-in Types",
                "scope": [
                    // rust
                    "entity.name.type.primitive.rust",
                    "entity.name.type.numeric.rust",
                    // csharp
                    "keyword.type.cs",
                    // js
                    "support.type.primitive.js"
                ],
                "settings": {
                    "foreground": syntax.keyword
                }
            },
            {
                "name": "Punctuation & Operators",
                "scope": [
                    "punctuation",
                    "keyword.operator",
                    "keyword.operator.sigil.rust",
                    "keyword.operator.access.dot.rust",
                    "keyword.operator.key-value.rust",
                    "keyword.operator.attribute.inner.rust",
                    "punctuation.definition.tag",
                    "punctuation.definition.tag.html",
                    "punctuation.definition.tag.begin.html",
                    "punctuation.definition.tag.end.html",
                    // jsx
                    "meta.brace.round.js",
                    "meta.brace.square.js",
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
                    "punctuation.definition.string.end.json"
                ],
                "settings": {
                    "foreground": syntax.punctuation,
                    "fontStyle": ""
                }
            },
            //
            //
            //
            {
                // Free-standing functions and object methods.
                "name": "Function and Methods",
                "scope": [
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
                    // css
                    "support.function.misc.css",
                    "support.function.misc.scss"
                ],
                "settings": {
                    "foreground": syntax.fn
                }
            },
            {
                // Macros and other fancy functions.
                "name": "Special functions, Hygienic Macros, etc",
                "scope": [
                    "support.function.macro.rust",
                    "support.function.macro.builtin.rust",
                    "support.function.macro.core.rust",
                    "entity.name.type.macro.rust",
                    "entity.name.function.macro.rust",
                    "entity.name.function.macro.rules.rust",
                    "support.function.macro.julia",
                    "support.function.builtin.zig"
                ],
                "settings": {
                    "foreground": syntax.fn
                }
            },
            {
                "name": "Classes, Enum types",
                "scope": [
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
                    "support.class.component.js"
                ],
                "settings": {
                    "foreground": syntax.type
                }
            },
            {
                "name": "Enum variant, Sum Types, etc",
                "scope": [
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
                    // yaml
                    "constant.language.boolean.yaml",
                    // toml
                    "constant.language.boolean.toml"
                ],
                "settings": {
                    "foreground": syntax.variant
                }
            },
            //
            //
            //
            {
                "name": "Interfaces",
                "scope": [
                    // rust
                    "entity.name.type.trait.rust"
                ],
                "settings": {
                    "foreground": syntax.interface
                }
            },
            {
                "name": "Type Parameters",
                "scope": [
                    // rust
                    "entity.name.type.type-parameter.cs"
                ],
                "settings": {
                    "foreground": syntax.type
                }
            },
            //
            //
            //
            {
                // Variable declarations and uses.
                "name": "Variables",
                "scope": [
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
                    // css
                    "variable.css",
                    "variable.argument.css",
                    "variable.scss"
                ],
                "settings": {
                    "foreground": syntax.var
                }
            },
            {
                "name": "Parameters",
                "scope": [
                    "variable.parameter",
                    "keyword.other.self.rust",
                    "meta.parens.block.c",
                    "variable.css",
                    // "meta.function.definition.parameters",
                    // csharp
                    "entity.name.variable.parameter.cs",
                    // js
                    "variable.parameter.js"
                ],
                "settings": {
                    "foreground": syntax.parameter
                }
            },
            {
                "name": "Members",
                "scope": [
                    // csharp
                    "entity.name.variable.field.cs",
                    "variable.other.object.property.cs",
                    // powershell
                    "variable.other.member.powershell",
                    // js
                    "variable.other.property.js"
                ],
                "settings": {
                    "foreground": syntax.member
                }
            },
            {
                "name": "Constants",
                "scope": [
                    // rust
                    "constant.other.caps.rust",
                    // csharp
                    "constant.language.null.cs",
                    // js
                    "variable.other.constant.js",
                    // json
                    "constant.language.json"
                ],
                "settings": {
                    "foreground": syntax.constant
                }
            },
            //
            //
            //
            {
                "name": "String & character",
                "scope": [
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
                    "string.quoted.single.basic.line.toml",
                    // ini
                    "string.quoted.single.ini",
                    "string.quoted.double.ini",
                    "punctuation.definition.string.begin.ini",
                    "punctuation.definition.string.end.ini",
                    // bnf
                    "string.quoted.double.bnf",
                    "string.quoted.single.bnf"
                ],
                "settings": {
                    "foreground": syntax.string
                }
            },
            {
                "name": "Escape characters",
                "scope": [
                    "constant.character.escape",
                    // rust
                    "constant.character.escape.rust",
                    // csharp
                    "constant.character.escape.cs",
                    // powershell
                    "constant.character.escape.powershell",
                    // js
                    "constant.character.escape.js",
                    // xml
                    "punctuation.definition.constant.xml",
                    "constant.character.entity.xml",
                    // yaml
                    "constant.character.escape.yaml",
                    // toml
                    "constant.character.escape.toml"
                ],
                "settings": {
                    "foreground": syntax.char
                }
            },
            {
                "name": "Character literals",
                "scope": [
                    // rust
                    "punctuation.definition.char.rust",
                    "string.quoted.single.char.rust",
                    // csharp
                    "punctuation.definition.char.begin.cs",
                    "punctuation.definition.char.end.cs",
                    "string.quoted.single.cs"
                ],
                "settings": {
                    "foreground": syntax.char
                }
            },
            {
                "name": "Number literals",
                "scope": [
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
                    // css
                    "constant.numeric.css",
                    // json
                    "constant.numeric.json",
                    // yaml
                    "constant.numeric.integer.yaml",
                    "constant.numeric.float.yaml",
                    // toml
                    "constant.numeric.integer.toml",
                    "constant.numeric.float.toml",
                    "constant.numeric.hex.toml",
                    "constant.numeric.oct.toml"
                ],
                "settings": {
                    "foreground": syntax.number
                }
            },
            {
                "name": "Comment",
                "scope": [
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
                    "comment.block.bnf"
                ],
                "settings": {
                    "foreground": syntax.comment
                }
            },
            //
            //
            //
            {
                "name": "Attributes",
                "scope": [
                    // rust
                    "meta.attribute.rust",
                    "punctuation.definition.attribute.rust",
                    "punctuation.brackets.attribute.rust",
                    "keyword.operator.attribute.inner.rust",
                    // powershell
                    "support.function.attribute.powershell",
                    "variable.parameter.attribute.powershell"
                ],
                "settings": {
                    "foreground": syntax.attribute
                }
            },
            {
                "name": "Unresolved Symbol",
                "scope": [
                    "invalid",
                    "invalid.illegal"
                ],
                "settings": {
                    "foreground": syntax.invalid
                }
            },
            {
                "name": "URL",
                "scope": [
                    "*url*",
                    "*link*",
                    "*uri*"
                ],
                "settings": {
                    "fontStyle": "underline"
                }
            },
            //
            // RUST
            //
            {
                "name": "? Operator",
                "scope": [
                    "keyword.operator.misc.question-mark.rust",
                    "keyword.operator.question.rust"
                ],
                "settings": {
                    "foreground": syntax.keyword
                }
            },
            {
                "name": "Lifetimes",
                "scope": [
                    "punctuation.definition.lifetime.rust",
                    "entity.name.type.lifetime.rust",
                    "storage.modifier.lifetime.rust"
                ],
                "settings": {
                    "foreground": syntax.interface
                }
            },
            {
                "name": "Format Specifier",
                "scope": [
                    "meta.interpolation.rust",
                    "punctuation.definition.interpolation.rust"
                ],
                "settings": {
                    "foreground": syntax.format
                }
            },
            //
            // CSHARP
            //
            {
                "name": "Csharp - Doc Tag",
                "scope": [
                    "entity.name.tag.cs",
                    "comment.block.documentation.cs punctuation.definition.tag.cs",
                    "comment.block.documentation.cs punctuation.separator.equals.cs"
                ],
                "settings": {
                    "foreground": syntax.comment
                }
            },
            {
                "name": "Csharp - Doc Tag Attribute",
                "scope": [
                    "entity.other.attribute-name.cs"
                ],
                "settings": {
                    "foreground": syntax.char
                }
            },
            {
                "name": "Csharp - Doc Text",
                "scope": [
                    "comment.block.documentation.cs"
                ],
                "settings": {
                    "foreground": syntax.var
                }
            },
            {
                "name": "Csharp - String Interpolation",
                "scope": [
                    "punctuation.definition.interpolation.begin.cs",
                    "punctuation.definition.interpolation.end.cs"
                ],
                "settings": {
                    "foreground": syntax.interface
                }
            },
            //
            // POWERSHELL
            //
            {
                "name": "Powershell Variables",
                "scope": [
                    "variable.other.readwrite.powershell",
                    "punctuation.definition.variable.powershell",
                    "storage.modifier.scope.powershell"
                ],
                "settings": {
                    "foreground": syntax.psVar
                }
            },
            {
                "name": "Powershell Variable Scopes",
                "scope": [
                    "storage.modifier.scope.powershell"
                ],
                "settings": {
                    "foreground": syntax.psVar,
                    "fontStyle": "underline"
                }
            },
            {
                "name": "Powershell $_ Variable",
                "scope": [
                    "support.variable.automatic.powershell",
                    "support.variable.automatic.powershell punctuation.definition.variable.powershell"
                ],
                "settings": {
                    "foreground": syntax.psSpecialVar
                }
            },
            {
                "name": "Powershell Operators",
                "scope": [
                    "keyword.operator.comparison.powershell",
                    "keyword.operator.logical.powershell"
                ],
                "settings": {
                    "foreground": syntax.psOperator
                }
            },
            {
                "name": "Powershell Comment Keywords",
                "scope": "keyword.operator.documentation.powershell",
                "settings": {
                    "foreground": syntax.psCommentKeyword
                }
            },
            {
                "name": "Powershell String Interpolation",
                "scope": [
                    "punctuation.section.embedded.substatement.begin.powershell",
                    "punctuation.section.embedded.substatement.end.powershell"
                ],
                "settings": {
                    "foreground": syntax.format
                }
            },
            //
            // JS
            //
            {
                "name": "JS - String Interpolation",
                "scope": [
                    "punctuation.definition.template-expression.begin.js",
                    "punctuation.definition.template-expression.end.js"
                ],
                "settings": {
                    "foreground": syntax.format
                }
            },
            {
                "name": "JS - Regexp Group",
                "scope": [
                    "punctuation.definition.group.regexp",
                    "punctuation.definition.group.no-capture.regexp"
                ],
                "settings": {
                    "foreground": syntax.jsRegex
                }
            },
            {
                "name": "JS - Regexp Characters",
                "scope": [
                    "constant.other.character-class.regexp",
                    "keyword.operator.quantifier.regexp",
                    "keyword.control.anchor.regexp",
                    "punctuation.definition.look-ahead.regexp",
                    "meta.assertion.look-ahead.regexp",
                    "meta.group.assertion.regexp"
                ],
                "settings": {
                    "foreground": syntax.format
                }
            },
            //
            // JSX REACT
            //
            {
                "name": "JSX - Embedded Code",
                "scope": [
                    "punctuation.section.embedded.begin.js",
                    "punctuation.section.embedded.end.js"
                ],
                "settings": {
                    "foreground": syntax.reactEmbedded,
                    "fontStyle": "bold"
                }
            },
            {
                "name": "JSX - Attributes",
                "scope": [
                    "entity.other.attribute-name.js"
                ],
                "settings": {
                    "foreground": syntax.reactAttribute,
                    "fontStyle": "italic"
                }
            },
            //
            // HTML
            //
            {
                "name": "HTML - Tags",
                "scope": [
                    "entity.name.tag.html"
                ],
                "settings": {
                    "foreground": syntax.htmlTag
                }
            },
            {
                "name": "HTML - Attributes",
                "scope": [
                    "entity.other.attribute-name.html"
                ],
                "settings": {
                    "foreground": syntax.htmlAttribute,
                    "fontStyle": "italic"
                }
            },
            {
                "name": "HTML - IDs",
                "scope": [
                    "meta.attribute.id.html string.quoted.double.html",
                    "entity.other.attribute-name.id.css"
                ],
                "settings": {
                    "foreground": syntax.htmlId,
                    "fontStyle": "bold"
                }
            },
            {
                "name": "HTML - Classes",
                "scope": [
                    "meta.attribute.class.html string.quoted.double.html",
                    "entity.other.attribute-name.class.css"
                ],
                "settings": {
                    "foreground": syntax.htmlClass
                }
            },
            {
                "name": "HTML - Meta Value",
                "scope": [
                    "meta.attribute"
                ],
                "settings": {
                    "foreground": syntax.htmlMeta
                }
            },
            {
                "name": "HTML - Links",
                "scope": [
                    "meta.attribute.href.html string.quoted.double.html",
                    "meta.attribute.src.html string.quoted.double.html",
                    "meta.attribute.unrecognized.xmlns.html string.quoted.double.html"
                ],
                "settings": {
                    "foreground": syntax.htmlLink
                }
            },
            {
                "name": "HTML - Embedded CSS",
                "scope": [
                    "meta.embedded.line.css"
                ],
                "settings": {
                    "foreground": syntax.htmlEmbeddedCss
                }
            },
            //
            // CSS
            //
            {
                "name": "CSS - Tags",
                "scope": [
                    "entity.name.tag.css"
                ],
                "settings": {
                    "foreground": syntax.htmlTag
                }
            },
            {
                "name": "CSS - Properties",
                "scope": [
                    "support.type.property-name.css",
                    "meta.property-name.css",
                    "meta.property-name.scss",
                    "support.type.property-name.media.css"
                ],
                "settings": {
                    "foreground": syntax.cssProperty
                }
            },
            {
                "name": "CSS - Property Values",
                "scope": [
                    "support.constant.property-value.css"
                ],
                "settings": {
                    "foreground": syntax.cssValue
                }
            },
            {
                "name": "CSS - Fontname Selector",
                "scope": [
                    "support.constant.font-name.css"
                ],
                "settings": {
                    "foreground": syntax.cssFontname
                }
            },
            {
                "name": "CSS - Pseudoclass Selector",
                "scope": [
                    "entity.other.attribute-name.pseudo-class.css",
                    "entity.other.attribute-name.pseudo-element.css"
                ],
                "settings": {
                    "foreground": syntax.cssPseudoclass
                }
            },
            {
                "name": "CSS - Units",
                "scope": [
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
                    "constant.other.scss" // {x}n
                ],
                "settings": {
                    "foreground": syntax.number
                }
            },
            {
                "name": "CSS - Logical Operators",
                "scope": [
                    "keyword.operator.logical.and.media.css",
                    "keyword.operator.logical.not.media.css",
                    "keyword.operator.logical.only.media.css"
                ],
                "settings": {
                    "foreground": syntax.keyword
                }
            },
            {
                "name": "CSS - Media Query Types",
                "scope": [
                    "support.constant.media.css"
                ],
                "settings": {
                    "foreground": syntax.cssMedia
                }
            },
            //
            // SCSS
            //
            {
                "name": "SCSS - Symbols",
                "scope": [
                    "punctuation.definition.keyword.scss",
                    "keyword.control.at-rule.include.scss",
                    "entity.name.tag.reference.scss",
                    "entity.name.tag.wildcard.scss"
                ],
                "settings": {
                    "foreground": syntax.keyword
                }
            },
            //
            // XML
            //
            {
                "name": "XML - Tags",
                "scope": [
                    "entity.name.tag.xml",
                    "entity.name.tag.localname.xml"
                ],
                "settings": {
                    "foreground": syntax.keyword
                }
            },
            {
                "name": "XML - Attributes",
                "scope": [
                    "entity.other.attribute-name.xml",
                    "entity.other.attribute-name.localname.xml"
                ],
                "settings": {
                    "foreground": syntax.htmlAttribute,
                    "fontStyle": "italic"
                }
            },
            {
                "name": "XML - Tag Namespace",
                "scope": [
                    "entity.name.tag.namespace.xml"
                ],
                "settings": {
                    "foreground": syntax.xmlNamespace
                }
            },
            {
                "name": "XML - Attribute Namespace",
                "scope": [
                    "entity.other.attribute-name.namespace.xml"
                ],
                "settings": {
                    "foreground": syntax.xmlNamespace,
                    "fontStyle": "italic"
                }
            },
            {
                "name": "XML - Attribute Namespace :",
                "scope": [
                    "entity.other.attribute-name.xml punctuation.separator.namespace.xml"
                ],
                "settings": {
                    "fontStyle": "italic"
                }
            },
            {
                "name": "XML - Doctype",
                "scope": "variable.language.documentroot.xml",
                "settings": {
                    "foreground": syntax.xmlDoctype
                }
            },
            //
            // MARKDOWN
            //
            {
                // Normal undecorated text.
                "name": "Markdown - Plain",
                "scope": [
                    "text.html.markdown",
                    "punctuation.definition.list_item.markdown"
                ],
                "settings": {
                    "foreground": syntax.mdText
                }
            },
            {
                // The `#` symbol in titles.
                "name": "Markdown - Headings",
                "scope": [
                    "markdown.heading",
                    "markup.heading | markup.heading entity.name",
                    "markup.heading.markdown punctuation.definition.heading.markdown",
                    "entity.name.section.markdown"
                ],
                "settings": {
                    "foreground": syntax.mdHeading
                }
            },
            {
                "name": "Markup - Bold",
                "scope": [
                    "punctuation.definition.bold.markdown",
                    "markup.bold",
                    "markup.bold string"
                ],
                "settings": {
                    "fontStyle": "bold",
                    "foreground": syntax.mdBold
                }
            },
            {
                "name": "Markup - Italic",
                "scope": [
                    "punctuation.definition.italic.markdown",
                    "markup.italic"
                ],
                "settings": {
                    "fontStyle": "italic",
                    "foreground": syntax.mdItalic
                }
            },
            {
                "name": "Markup - Bold-Italic",
                "scope": [
                    "markup.bold markup.italic",
                    "markup.italic markup.bold",
                    "markup.quote markup.bold",
                    "markup.bold markup.italic string",
                    "markup.italic markup.bold string",
                    "markup.quote markup.bold string"
                ],
                "settings": {
                    "foreground": syntax.mdItalic,
                    "fontStyle": "italic bold"
                }
            },
            {
                "name": "Markdown - Quote",
                "scope": [
                    "punctuation.definition.quote.begin.markdown",
                    "markup.quote.markdown"
                ],
                "settings": {
                    "foreground": syntax.mdQuote,
                    "fontStyle": "italic"
                }
            },
            {
                "name": "Markdown - Strikethrough",
                "scope": [
                    "markup.strikethrough.markdown",
                    "punctuation.definition.strikethrough.markdown"
                ],
                "settings": {
                    "foreground": syntax.mdStrikethrough,
                    "fontStyle": "strikethrough"
                }
            },
            {
                // Inline code block text.
                "name": "Markdown - Markup Raw Inline",
                "scope": [
                    "punctuation.definition.raw.markdown",
                    "markup.inline.raw.string.markdown"
                ],
                "settings": {
                    "foreground": syntax.mdCode,
                    "fontStyle": "bold"
                }
            },
            {
                // Fenced code block text.
                "name": "Markdown - Raw Block Fenced",
                "scope": [
                    "markup.fenced_code.block.markdown"
                ],
                "settings": {
                    "foreground": syntax.mdCode
                }
            },
            {
                // The language identifier in a fenced code block, e.g. ```rust
                "name": "Markdown - Raw Block Language Identifier",
                "scope": [
                    "fenced_code.block.language.markdown",
                    "markup.fenced_code.block.markdown punctuation.definition.markdown"
                ],
                "settings": {
                    "foreground": syntax.mdCode,
                    "fontStyle": "bold"
                }
            },
            {
                "name": "Markdown - Separator",
                "scope": [
                    "meta.separator.markdown"
                ],
                "settings": {
                    "foreground": syntax.mdSeparator,
                    "fontStyle": "bold"
                }
            },
            {
                // The `1.` or `-` or `*` symbols in a list entry.
                "name": "Markdown - List",
                "scope": [
                    "punctuation.definition.list.begin.markdown"
                ],
                "settings": {
                    "foreground": syntax.mdList
                }
            },
            {
                // Text comment/description around a link, e.g. `[Go to this link](...)`, or `[](... "some website")`
                "name": "Markup - Url String",
                "scope": [
                    "punctuation.definition.string.begin.markdown",
                    "punctuation.definition.string.end.markdown",
                    "string.other.link.description.title.markdown",
                    "string.other.link.description.markdown",
                    "string.other.link.title.markdown"
                ],
                "settings": {
                    "foreground": syntax.mdUrlName
                }
            },
            {
                // The url part of the link.
                "name": "Markup - Url Underline",
                "scope": [
                    "markup.underline.link",
                    "constant.other.reference.link.markdown"
                ],
                "settings": {
                    "foreground": syntax.mdUrl,
                    "fontStyle": "underline"
                }
            },
            {
                "name": "Markup - Maths",
                "scope": "punctuation.definition.math.begin.markdown",
                "settings": {
                    "foreground": syntax.mdMaths
                }
            },
            {
                "name": "Markup - Maths constants/functions",
                "scope": [
                    "constant.character.math.tex",
                    "constant.character.math.tex punctuation.definition.math.tex"
                ],
                "settings": {
                    "foreground": syntax.mdMathsConst
                }
            },
            //
            // JSON
            //
            {
                "name": "JSON - Key",
                "scope": "support.type.property-name.json",
                "settings": {
                    "foreground": syntax.jsonKey
                }
            },
            {
                "name": "JSON - Lighten Quotation Marks [DISABLED]",
                "scope": [
                    "punctuation.support.type.property-name.begin.json",
                    "punctuation.support.type.property-name.end.json",
                    "punctuation.definition.string.begin.json",
                    "punctuation.definition.string.end.json"
                ],
                "settings": {
                    //"foreground": "#ADB1C2"
                }
            },
            //
            // YAML
            //
            {
                "name": "YAML - Keys",
                "scope": [
                    "entity.name.tag.yaml"
                ],
                "settings": {
                    "foreground": syntax.yamlKey
                }
            },
            {
                "name": "YAML - Timestamp Values",
                "scope": [
                    "constant.other.timestamp.yaml"
                ],
                "settings": {
                    "foreground": syntax.yamlTimestamp
                }
            },
            {
                "name": "YAML - Null Values",
                "scope": [
                    "constant.language.null.yaml"
                ],
                "settings": {
                    "foreground": syntax.keyword
                }
            },
            {
                "name": "YAML - Types",
                "scope": [
                    "storage.type.tag-handle.yaml"
                ],
                "settings": {
                    "foreground": syntax.keyword
                }
            },
            {
                "name": "YAML - Anchors",
                "scope": [
                    "entity.name.type.anchor.yaml",
                    "punctuation.definition.anchor.yaml",
                    "variable.other.alias.yaml",
                    "keyword.control.flow.alias.yaml punctuation.definition.alias.yaml"
                ],
                "settings": {
                    "foreground": syntax.yamlAnchor
                }
            },
            //
            // TOML
            //
            {
                "name": "TOML - Keys",
                "scope": [
                    "variable.key.toml"
                ],
                "settings": {
                    "foreground": syntax.tomlKey
                }
            },
            {
                "name": "TOML - Timestamp Values",
                "scope": [
                    "constant.other.time.date.toml",
                    "constant.other.time.time.toml",
                    "constant.other.time.datetime.local.toml",
                    "constant.other.time.datetime.offset.toml"
                ],
                "settings": {
                    "foreground": syntax.tomlTimestamp
                }
            },
            {
                "name": "TOML - Tables",
                "scope": [
                    "variable.key.table.toml"
                ],
                "settings": {
                    "foreground": syntax.tomlTable
                }
            },
            {
                "name": "TOML - Array Tables",
                "scope": [
                    "variable.key.array.table.toml"
                ],
                "settings": {
                    "foreground": syntax.tomlArray
                }
            },
            //
            // INI
            //
            {
                "name": "INI - Keys",
                "scope": "keyword.other.definition.ini",
                "settings": {
                    "foreground": syntax.iniKey
                }
            },
            {
                "name": "INI - Headings",
                "scope": "entity.name.section.group-title.ini",
                "settings": {
                    "foreground": syntax.iniHeading
                }
            },
            //
            // BNF
            //
            {
                "name": "BNF - Symbol",
                "scope": "entity.name.class.bnf",
                "settings": {
                    "foreground": syntax.bnfSymbol
                }
            },
            {
                "name": "BNF - Builtin",
                "scope": "support.variable.bnf",
                "settings": {
                    "foreground": syntax.bnfBuiltin
                }
            }
        ]
    }
}
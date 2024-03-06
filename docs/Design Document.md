# Design Document
This is a design document for the project. It both states information about the project, such as describing schemas, but also explains important/noteworthy design decisions.

## Commands (VS Code)
The extension registers one command (`theme-pink-candy.restoreDefaultConfig`) that resets the extension's configuration and cached configuration.

### Commands to toggle options (UNIMPLEMENTABLE)
I attempted to implement commands that change the individual configuration settings, but it turned out to be infeasable because the implementation exhibits a race condition, (due to a bug in VS Code).

The race condition occured as follows:
1. A command is ran.
2. VS Code **starts** to write to the configuration to change the setting, (but doesn't actually complete the write).
3. The writing to the configuration triggers the extension's `onChange` handler, (which is necessary so that the extension can react to changes in the settings page/settings json).
4. The handler reads the old configuration settings values.
5. The handler generates new theme files (based on the old settings values) and updates the cache.
6. The new setting value only now gets written.
7. The extension is now in an invalid state.

One possible solution to this is to use a `setTimeOut()` within the `onChange` handler. However, even with a duration of 1000ms the race condition still occured sometimes, and any longer of a delay would negatively impact the user experience when changing a setting through the settings page/settings json.

This clearly looks like a bug in VS Code. I didn't file a bug report because the issue isn't *that* big, and the VS Code team don't care about issues unless they have a large impact.

## Configuration (VS Code)
The extension registers multiple VS Code settings that alter the theme's appearance.

Due to VS Code's limitations, rewriting the theme file doesn't automatically update the appearance of VS Code. The program must be reloaded for changes to take effect. Therefore, when the extension detects a change, it prompts the user to reload the VS Code with a toast notification.

### Schema v1.0.0 - v1.4.0
```ts
{
    "theme-pink-candy.mutedMarkdownPlaintext": boolean;
    "theme-pink-candy.italicizedComments": boolean;
    "theme-pink-candy.alternateCurrentLineStyle": boolean;
    "theme-pink-candy.monochromeBracketPairGuides": boolean;
    "theme-pink-candy.inlayHintStyle":
        "noBackground" |
        "faintBackground" |
        "accent" |
        "accentBackground";
    "theme-pink-candy.globalAccent": "default" | "disabledStatusBar" | "minimal";
}
```

### Schema v1.5.0+
```ts
{
    "theme-pink-candy.mutedMarkdownPlaintext": boolean; // Deprecated
    "theme-pink-candy.markdownSyntaxStyle": "traditional" | "mutedPlaintext" | "alternate";
    "theme-pink-candy.italicizedComments": boolean;
    "theme-pink-candy.alternateCurrentLineStyle": boolean;
    "theme-pink-candy.monochromeBracketPairGuides": boolean;
    "theme-pink-candy.inlayHintStyle":
        "noBackground" |
        "faintBackground" |
        "accent" |
        "accentBackground";
    "theme-pink-candy.globalAccent": "default" | "disabledStatusBar" | "minimal";
}
```
The `theme-pink-candy.mutedMarkdownPlaintext` key has been deprecated and its functionality replaced with the `theme-pink-candy.markdownSyntaxStyle` key. If `theme-pink-candy.markdownSyntaxStyle` is defined within the user configuration, it takes precedence. Otherwise, if `theme-pink-candy.mutedMarkdownPlaintext` is defined within the user configuration, it results in the following:

|Value|Effect|
|-|-|
|`true`|Treat `theme-pink-candy.markdownSyntaxStyle` as `"mutedPlaintext"`|
|`false`|Treat `theme-pink-candy.markdownSyntaxStyle` as `"traditional"`|
|non-boolean|Continue|

Otherwise, the default value of `theme-pink-candy.markdownSyntaxStyle` is used.

## Cached Configuration
Whenever the configuration changes, the parsed result is written to a cache file. This is necessary so that in the situation that the configuration was changed whilst the extension (or VS Code) wasn't running, upon the extension running again, it can determine whether it needs to recreate the theme files and prompt to reload VS Code.

### Schema v1.0.0 - v1.4.0
```ts
{
    mutedMd: boolean;
    italicComments: boolean;
    altCurrentLine: boolean;
    inlayStyle: "noBackground" | "faintBackground" | "accent" | "accentBackground";
    monochromeBracketGuides: boolean;
    globalAccent: "default" | "disabledStatusBar" | "minimal";
}
```

### Schema v1.5.0+
```ts
{
    markdownSyntaxStyle: "traditional" | "mutedPlaintext" | "alternate";
    italicComments: boolean;
    altCurrentLine: boolean;
    inlayStyle: "noBackground" | "faintBackground" | "accent" | "accentBackground";
    monochromeBracketGuides: boolean;
    globalAccent: "default" | "disabledStatusBar" | "minimal";
}
```

**Conversion from previous schema**

1. Replace according to the following table:

|Value of `mutedMd`|Value for `markdownSyntaxStyle`|
|-|-|
|`true`|`"mutedPlaintext"`|
|`false`|`"traditional"`|

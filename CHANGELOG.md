# Changelog

## 1.6.0 - 2025-06-17
### Added
- The extension is now published on the [OpenVSX](https://open-vsx.org/extension/kuba-p/theme-pink-candy) marketplace.
- Alternate terminal colour schemes for the light theme. This addresses the ambiguity in what "bright" ANSI/aixterm escape sequences mean for a light theme. This is accessible through the new `theme-pink-candy.light.terminalColourScheme` setting. See the documentation for a comparison of the different options.
- UI styles for the revamped *Editor Action List* popup introduced in version 1.93.
- UI styles for the new *Activity Bar Warning/Error Badges* introduced in version 1.94.
- UI styles for the new *Source Control Graph* introduced in version 1.93.
- UI styles for *multi-selecting tabs* introduced in version 1.91.
- UI styles for the *editor git blame* introduced in version 1.96.
- UI styles for the new *radio button control* (used in the profile editor) introduced in version 1.93.
- Various minor missing UI styles.

### Changed
- Tweaked existing terminal colours in the light theme to improve contrast against the background and provide a more even lightness of hues.

## 1.5.0 - 2024-03-06
### Added
- Syntax highlighting for Asciidoc files; most language features are now styled.
- Markdown syntax highlighting for raw blocks (indent by 4 spaces), fenced code block attributes, and alternate-notation headings (`===` and `---` underlines).
- Alternate markdown syntax highlighting colour scheme that emphasizes semantic meaning and de-emphasizes markdown control characters. This is accessible through the new `theme-pink-candy.markdownSyntaxStyle` setting. See the documentation for a comparison against the existing colour scheme.
- Typescript syntax highlighting for `typeof`, `in`, `is`, `instanceof`, `keyof` and `infer` keywords; `super` built-in variable, `NaN` literal; built-in primitive types (like `undefined`, `null`, `object`, etc).
- Javascript syntax highlighting for `typeof`.
- UI styles for the new *Multi Diff Viewer* introduced in version 1.86.
- UI styles for the new *Button toggle states* introduced in version 1.82.
- UI styles for the new *Top Activity Bar* introduced in version 1.84.
- UI style for the new *preformatted text background* introduced in version 1.84.

### Changed
- Increased contrast of links in the dark theme variants.
- Improved existing markdown syntax highlighting for inline styles. Edge cases such as bold and simultaneously italic and simultaneously strikethrough text now are styled correctly and more clearly.
- The existing `theme-pink-candy.mutedMarkdownPlaintext` setting is now deprecated. The existing functionality is replaced by the new `theme-pink-candy.markdownSyntaxStyle` setting.
- Improved the descriptions for the extension's settings.
- Scoped the extension's settings to be application-wide. Previously the settings were unscoped.

### Fixed
- Missing border between the activity bar and whatever is to the side of it (primary side bar, editor pane, etc).
- Typescript syntax highlighting for types defined using the `type` keyword were incorrectly coloured like primitive types.

## 1.4.0 - 2022-12-31
### Added
- A warm variant of the dark theme. This is heavily inspired by Gruvbox, but with some modifications to fit with the rest of the themes.
- Typescript syntax highlighting for the `of` keyword.
- Powershell syntax highlighting for built-in variables, such as `$WhatIfPreference`.
- CSS syntax highlighting for attribute selectors, i.e. the `type` in `input[type = "checkbox"]`.
- UI styles for the new *Sticky Scroll* functionality introduced in version 1.71.

### Fixed
- Missing UI style for general text within the settings pane.

## 1.3.4 - 2022-08-30
### Added
- Support for running this extension in *Restricted Mode*.
- Typescript syntax highlighting for a bunch of keywords, such as `null`, `undefined`, etc.

### Fixed
- Rust syntax highlighting applying incorrect textmate & semantic colours. This breakage occurred because of the latest rust-analyzer release (29/08/2022) which changed how it outputs syntax colours for punctuation, operator and attribute tokens. This extension has been updated to reflect these changes and return the previous highlighting behaviour.

## 1.3.3 - 2022-07-31
### Added
- Rust syntax highlighting for the variable specifier within macro declarations, i.e. the `expr` in `$var:expr`.
- UI styles for the new terminal *Find/Match* functionality introduced in version 1.68.
- UI styles for the new *Merge Editor* introduced in version 1.69.
- UI styles for the new *Command Center* introduced in version 1.69.
- UI style for the new extension sponsor button introduced in version 1.68.

### Changed
- Increased contrast of disabled text.

### Fixed
- TOML syntax highlighting applying incorrect colours, inconsistently from the rest of the theme.
- Incorrect colour used for the text selection background in widgets in the dark theme.

## 1.3.2 - 2022-05-27
### Fixed
- Invalid colour string used for one of the alternate inlay hint styles.

## 1.3.1 - 2022-05-27
**FIXED** issue with release `1.3.0` which did not package the theme files because of a build script bug.

### Added
- Configuration options for the theme. There are now a number of extension options which allow for configuring aspects of the theme to your liking. Please see the documentation for an overview.
- Syntax highlighting for Typescript.
- Syntax highlighting for Backus-Naur Form markup.
- Powershell syntax highlighting for built-in constants (such as `$Host`), and underlines for storage prefixes (e.g. `$env:`) just like with variable scopes.
- Markdown syntax highlighting for strikethrough text.
- UI style for the new editor *Drag-into Prompt* introduced in version 1.66.
- Syntax highlighting for *Ambiguous Unicode Characters*.
- UI styles for the new terminal *Find/Match* functionality introduced in version 1.66.
- UI styles for the new *Terminal Integration* command decorators introduced in version 1.66.
- UI styles for the *Welcome/Walkthrough Page*.
- UI styles for keybind icons and the keybing settings table.
- UI style for extension preview badges.
- *Internal*: UI styles for a bunch of things. Bumping minimum `vscode` version from `1.60` to `1.67`, a number of default styles have changed so explicit styles had to be added to return the appearance to what was previously.

### Changed
- **BREAKING**: Bump minimum supported VS Code version to `1.67`.
- Markdown syntax highlighting styles plaintext in a darker colour, inline code blocks in bold, list bullet points in cyan, and quotes in yellow.
- Decrease contrast of the diagonal pattern used in the diff-viewer.
- The order of colours used for the *Bracket Guide Colouring* feature.
- Increased contrast of placeholder text.
- Increased contrast of tree indentation guides.
- Darken the overall background colours in the dark theme.
- Decrease the contrast of menu separators.
- Decrease the intensity of the tabstops when using snippets.
- Decrease the intensity of input backgrounds.
- Increase the contrast of matching bracket outlines.
- Change the colour of the debugging start icon to green, and of the testing unset icon to orange.
- Change the colour of warnings in the debug console to orange, and of source files to black.

### Fixed
- Terminal bold formatting having a decreased contrast compared to foreground text.
- Inconsistencies in the shades of purple used in the light theme for syntax highlighting.
- Poor contrast of some of the terminal colours in the light theme.
- Debug viewer boolean colour not matching the colour used in syntax highlighting.
- The hover-over colour used for buttons/dropdowns in the dark theme was darker than the background.
- The `!` bang in rust macro calls not being coloured blue like the macro name.
- A bunch of small inconsistencies in the colours used for the UI in the dark theme.

## 1.3.0 - 2022-05-26
*PULLED RELEASE* because of major packaging bug.

## 1.2.0 - 2022-03-10
### Added
- Syntax highlighting for XML; support for common xml features, including namespaces.
- Syntax highlighting for Yaml.
- Syntax highlighting for Toml.
- Syntax highlighting for INI files.

## 1.1.0 - 2022-03-04
### Added
- Syntax highlighting for Markdown Maths features, such as the `$$` delimiters and `\div` functions.
- Colour palette for the *Git Graph* extension; specifically, colours for the branches.
- Styles for the *Todo Tree* extension, supporting common tags such as `TODO`, `FIXME`, etc.

### Changed
- Modify icon to look more aesthetically pleasing at smaller sizes, e.g. in the extension sidebar.

### Fixed
- Symbol colours not matching the syntax highlighting colours, (e.g. in the breadcrumbs).

## 1.0.1 - 2022-02-25
### Fixed
- Incorrect image links in the README.

## 1.0.0 - 2022-02-23
### Added
- Initial release, with the support for the following languages: Rust, C#, Powershell, Javascript, HTML, CSS, SCSS, Markdown and Json. Also included is full IDE/workbench theming.

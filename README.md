# Pink Candy
A vivid colour scheme with a pink accent, with both light and dark variants. Includes editor/syntax highlighting, as well as full IDE/workbench theming.

### Table of Contents
1. [Overview](#overview)
2. [Language Specific Features](#language-specifics)
3. [Overriding Styles (Customising)](#overriding-styles)
4. [Contributing](#contributing)
5. [License](#license)

## Overview
This theme supports `semantic` highlighting, so it should work with any langauge extension. More specifically however, this theme has been tweaked and tested on:
- Rust
- C#
- Powershell
- Markdown
- Json

ℹ More languages coming in the future.

## Language Specifics
This theme, unlike many others, takes advantage of semantic scopes that each language extension provides. This allows the theme to suit it's appearance to the specific language and highlight/underline/embolden syntax that otherwise would not stand out in other themes.

### Rust
- References, and functions that take references, are italicised.
- Mutability, and functions which mutate, are emboldened.
- Unsafe functions use a different bright colour and are underlined.
- Attributes are distinctly coloured.
- Lifetimes are distinctly coloured.
- The try `?` operator is coloured like a keyword.

### C#
- Static functions are underlined.
- Properties are emboldened.
- Xml doc comments are syntax highlighted inside.

### Powershell
- Comparison and logical operators, like `-eq` and `-not`, are coloured like a keyword.
- Variables are distinctly coloured.
- Parameter declarations (attributes) are distinctly coloured.
- Object members are distinctly coloured.

## Overriding Styles
See [Overriding Styles](./Overriding_Styles.md) for the guide.

## Contributing
I have tested this theme on languages I am proficient in, and I hope that you will find the syntax highlighting in these languages pleasing. However for many languages, I am not aware of their intricacies and I may not have the right sense for how the syntax should look.

If something looks off in a language you're using, feel free to open an [Issue](https://github.com/KubaP/vscode-pink-candy/issues) so that we can improve it for everyone.

## License
This project is licensed under the **GPLv3** license - see [LICENSE](./LICENSE) for details.
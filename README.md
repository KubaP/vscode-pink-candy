![Pink Candy Banner](./img/banner.png#gh-light-mode-only)
![Pink Candy Banner](./img/banner_dark.png#gh-dark-mode-only)

<br>
<p align="center">
A vivid colour scheme with a pink accent, in both light and dark variants. Includes editor/syntax highlighting as well as full IDE and workbench theming.
</p>
<br>

### Table of Contents
1. [Screenshots](#screenshots)
2. [Overview](#overview)
3. [Language Specific Styles](#language-specific-styles)
4. [Overriding Styles](#overriding-styles)
5. [Contributing](#contributing)
6. [License](#license)

## Screenshots

![Example 1](./img/example_1.png)
> Editing a markdown file.

![Example 2](./img/example_2.png)
> Debugging an application.

![Example 3](./img/example_3.png)
> Configuring some settings.

![Example 4](./img/example_4.png)
> Viewing a git diff.

## Overview
This theme supports *'Semantic'* highlighting, so it should work well with any langauge extension. More specifically however, this theme has been tweaked and tested on:
- Rust
- C#
- Powershell
- HTML/CSS/SCSS
- Javascript (inc. JSX)
- Markdown
- Json

ℹ More languages coming in the future.

## Language Specific Styles
This theme, unlike many others, takes full advantage of semantic scopes that each language extension provides. This allows the theme to suit its appearance to the specific language and highlight/underline/embolden syntax that otherwise would not stand out in other themes.

### Rust
- References, and functions that take references, are italicised.
- Mutability, and functions which mutate, are emboldened.
- Unsafe functions use a different bright colour and are underlined.
- Attributes are distinctly coloured.
- Lifetimes are distinctly coloured.
- The try `?` operator is coloured like a keyword.
- Format specifiers (e.g. `{x:?}`) are distinctly coloured.

### C#
- Static functions, classes and fields are underlined.
- Properties are emboldened.
- String interpolation delimiters are distinctly coloured.
- Xml doc comments are syntax highlighted inside.

### Powershell
- Comparison and logical operators, like `-eq` and `-not`, are coloured like a keyword.
- Variables are distinctly coloured.
- Parameter declarations (attributes) are distinctly coloured.
- Object members are distinctly coloured.
- String interpolation delimiters are distinctly coloured.

### HTML/CSS/SCSS
- IDs, Classes, and other attribute values have different colours.
- Attribute keys are italicised.
- Inline CSS styles have a unique colour.
- Urls are uniquely coloured.
- Units have the same colour as number literals.
- SCSS-specific characters are correctly coloured.

### Javascript
- String interpolation delimiters are distinctly coloured.
- Regex expressions are distinctly coloured.
- Static properties have a unique colour.
#### JSX (React)
- Element attributes have a unique colour.
- Embedded code delimiters `{...}` are distinctly coloured and emboldened.

## Overriding Styles
See [Overriding Styles](./Overriding_Styles.md) for a guide on how to override specific styles to your liking.

## Contributing
I have tested this theme on languages I am proficient in, and I hope that you will find the syntax highlighting in these languages pleasing. However for many languages, I am not aware of their intricacies and I may not have the right sense for how the syntax should look.

If something looks off in a language you're using, feel free to open an [Issue](https://github.com/KubaP/vscode-pink-candy/issues) so that we can improve it for everyone.

## License
This project is licensed under the **MIT** license - see [LICENSE](./LICENSE) for details.
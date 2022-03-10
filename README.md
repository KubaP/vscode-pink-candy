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
This theme supports both *'Semantic'* and *'Textmate'* highlighting, so it should work well with any langauge extension. More specifically however, this theme has been hand-tweaked and tested on:
- Rust
- C#
- Powershell
- HTML/CSS/SCSS
- Javascript (inc. JSX)
- XML
- Markdown
- Json

ℹ More languages coming in the future.

This theme also supports styling for these extensions:
- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - see [note](#Extensions).
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) - see [note](#Extensions).

## Language Specific Styles
This theme, unlike many others, takes full advantage of semantic scopes that each language extension provides. This allows the theme to suit its appearance to the specific language and highlight/underline/embolden syntax that otherwise would not stand out in other themes.

### Rust
See highlighting examples [here](./Highlighting_Examples.md#rust).
- References, and functions that take references, are italicised.
- Mutability, and functions which mutate, are emboldened.
- Unsafe functions use a different bright colour and are underlined.
- Attributes are distinctly coloured.
- Lifetimes are coloured like traits.
- The try `?` operator is coloured like a keyword.
- Format specifiers (e.g. `{x:?}`) are distinctly coloured.

### C#
See highlighting examples [here](./Highlighting_Examples.md#c#).
- Static functions, classes and fields are underlined.
- Properties are emboldened.
- String interpolation delimiters are distinctly coloured.
- Xml doc comments are syntax highlighted inside.

### Powershell
See highlighting examples [here](./Highlighting_Examples.md#powershell).
- Comparison and logical operators, like `-eq` and `-not`, are coloured like a keyword.
- Variables are distinctly coloured.
- Parameter declarations (attributes) are distinctly coloured.
- Object members are distinctly coloured.
- String interpolation delimiters are distinctly coloured.

### HTML/CSS/SCSS
See highlighting examples [here](./Highlighting_Examples.md#html/css/scss).
- IDs, Classes, and other attribute values have different colours.
- Attribute keys are italicised.
- Inline CSS styles have a unique colour.
- Urls are uniquely coloured.
- Units have the same colour as number literals.
- SCSS-specific characters are correctly coloured.

### Javascript
See highlighting examples [here](./Highlighting_Examples.md#javascript).
- String interpolation delimiters are distinctly coloured.
- Regex expressions are distinctly coloured.
- Static properties have a unique colour.
#### JSX (React)
See highlighting examples [here](./Highlighting_Examples.md#jsx).
- Element attributes have a unique colour.
- Embedded code delimiters `{...}` are distinctly coloured and emboldened.

### Miscellaneous
XML highlighting examples are [here](./Highlighting_Examples.md#xml). Markdown highlighting examples are [here](./Highlighting_Examples.md#markdown). Json highlighting examples are [here](./Highlighting_Examples.md#json).

## Overriding Styles
See [Overriding Styles](./Overriding_Styles.md) for a guide on how to override specific styles to your liking.

## Extensions
The *Git Graph* and *Todo Tree* extensions do not provide themable colours. As of the time of this writing, if you want these extensions to fit in with this theme, go to [Extensions](./Extensions.md) and follow the instructions. I am in the process of creating a pull request to add themable colour support to the *Git Graph* extension, so hopefully in the future this workaround will not be necessary.

## Contributing
I have tested this theme on languages I am proficient in, and I hope that you will find the syntax highlighting in these languages pleasing. However for many languages, I am not aware of their intricacies and I may not have the right sense for how the syntax should look.

If something looks off in a language you're using, feel free to open an [Issue](https://github.com/KubaP/vscode-pink-candy/issues) so that we can improve it for everyone.

## License
This project is licensed under the **MIT** license - see [LICENSE](./LICENSE) for details.
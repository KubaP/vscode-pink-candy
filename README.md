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
If you overall like the theme but would like to tweak some aspect of it to your liking, here are the instructions to do so.

### Semantic Override
For the majority of languages, this is the section you want to override.

Inside of your `settings.json`, you can insert the following snippet:
```json
"editor.semanticTokenColorCustomizations": {
    "rules": {
        "KEYWORD": {
            "foreground": "#00FFAA",  // This specifies the colour.
            "fontStyle": "FONT_STYLE" // This specifies the decoration.
        }
    }
},
```
Where the `KEYWORD` is of the semantic scope you want to modify, and `FONT_STYLE` is one of the following:
- "bold"
- "italic"
- "underline"
- "bold underline"
- "italic underline"
- "italic bold underline"
- "" (empty; this **clears** any styles)

#### Example
You don't want C# static functions to be underlined. You open [Styles.md](./Styles.md) and navigate to the `C Sharp` section. Inside, you will find a sub-section `Static Function`, and in it there is the following line:
```md
- s: "member.static"
```
Now, inside of your `settings.json`, you write:
```json
"editor.semanticTokenColorCustomizations": {
    "rules": {
        "member.static:csharp": {
            "fontStyle": "" // Removes the underline.
        }
    }
},
```

### Textmate Override
Some language extensions don't provide semantic highlighting; in such a case, this is the section you want to override.

*Note:* Even for languages supporting semantic highlighting, they won't support it within things such as the `Hover documentation widget` since that inherently lacks context. For such things, the highlighting uses these textmate scopes.

Inside of your `settings.json`, you can insert the following snippet:
```json
"editor.tokenColorCustomizations": {
    "textMateRules": [
        {
            "scope": [
                "KEYWORD"
            ],
            "settings": {
                "foreground": "#00FFAA",  // This specifies the colour.
                "fontStyle": "FONT_STYLE" // This specifies the decoration.
            }
        }
    ]
}
```
Where the `KEYWORD` is of the textmate scope you want to modify, and `FONT_STYLE` is one of the following:
- "bold"
- "italic"
- "underline"
- "bold underline"
- "italic underline"
- "italic bold underline"
- "" (empty; this **clears** any styles)

#### Example
You want Rust lifetimes to be a different colour. You open [Styles.md](./Styles.md) and navigate to the `Rust` section. Inside, you will find a sub-section `Lifetimes`, and in it there are the following lines:
```md
- s: "lifetime"
- tm: "punctuation.definition.lifetime.rust"
- tm: "entity.name.type.lifetime.rust"
- tm: "storage.modifier.lifetime.rust"
```
Now, inside of your `settings.json`, you write:
```json
"editor.semanticTokenColorCustomizations": {
    "rules": {
        "lifetime:rust": {
            "foreground": "#00FF00"
        }
    }
},
"editor.tokenColorCustomizations": {
    "textMateRules": [
        {
            "scope": [
                "punctuation.definition.lifetime.rust",
                "entity.name.type.lifetime.rust",
                "storage.modifier.lifetime.rust"
            ],
            "settings": {
                "foreground": "#00FF00"
            }
        }
    ]
}
```
In this example, we had to both modify the semantic and textmate scopes. The semantic scope modified the appearance within the text editor, and the textmate scopes modified the appearance in the documentation widget (and other places that lack context).

## Contributing
I have tested this theme on languages I am proficient in, and I hope that you will find the syntax highlighting in these languages pleasing. However for many languages, I am not aware of their intricacies and I may not have the right sense for how the syntax should look.

If something looks off in a language you're using, feel free to open an [Issue](https://github.com/KubaP/vscode-colour-theme/issues) so that we can improve it for everyone.

## License
This project is licensed under the **GPLv3** license - see [LICENSE](./LICENSE) for details.
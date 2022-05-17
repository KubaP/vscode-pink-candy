# Overriding Styles
If you like the theme overall, but would like to tweak some aspect of it to your liking, here are the instructions to do so.

### Important Note
*Semantic highlighting* only works if, a) the language extension supports it, and b) the code is in full context, i.e. within the main editor pane. *Semantic highlighting* does not work in places without context, such as the documentation hover widget, the git diff pane, etc. In such places, only the *Textmate theming* applies.

For a full list of scopes for each language, see [Styles](./Styles.md).

## Font styles
These are the accepted font styles (make sure to get the exact spelling correct):
- "bold"
- "italic"
- "underline"
- "bold underline"
- "italic underline"
- "italic bold underline"
- "strikethrough"
- "" (empty; this **clears** any styles)

## Semantic Overrides
Inside of your `settings.json`, you can insert the following snippet:
```json
"editor.semanticTokenColorCustomizations": {
    "rules": {
        "SCOPE": {
            "foreground": "#00FFAA",  // This specifies the colour.
            "fontStyle": "FONT_STYLE" // This specifies the font style.
        }
    }
},
```
`SCOPE` refers to the semantic keyword, for example `punctuation`. If you want to only style a certain language, you can append the language name after the scope, like so: `punctuation:rust`.

## Textmate Overrides
Inside of your `settings.json`, you can insert the following snippet:
```json
"editor.tokenColorCustomizations": {
    "textMateRules": [
        {
            "scope": [
                "SCOPE"
            ],
            "settings": {
                "foreground": "#00FFAA",  // This specifies the colour.
                "fontStyle": "FONT_STYLE" // This specifies the font style.
            }
        }
    ]
}
```
`SCOPE` refers to the full scope of the token, for example `punctuation.definition.string.rust`.

## Example
You don't want C# static functions to be underlined. You open [Styles](./Styles.md) and navigate to the `C Sharp` section. Inside, you will find a sub-section `Static Function`, and in it there is the following line:
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
In this example, we only modified the semantic highlighting because the textmate theming does not support static functions.

## Example
You want Rust lifetimes to be a different colour. You open [Styles](./Styles.md) and navigate to the `Rust` section. Inside, you will find a sub-section `Lifetimes`, and in it there are the following lines:
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
In this example, we had to both modify the semantic and textmate scopes. The semantic scope modified the appearance within the text editor, and the textmate scopes modified the appearance in the documentation widget, git diff pane, (and other places that lack context).
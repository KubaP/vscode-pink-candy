# Extensions
Note: currently it is impossible to have different colours depending on which theme is selected, i.e. light or dark.

## Git Graph
Copy and paste the following snippet into your `settings.json` file:

```json
"git-graph.graph.colours": [
    "#F767BB",
    "#09A1ED",
    "#2DAE58",
    "#CF9C00",
    "#FF5C57",
    "#cd6bf4",
    "#a8759a",
    "#6e82a6",
    "#13BBB7",
    "#8cba10"
],
```

## Todo Tree
Copy and paste the following snippet into your `settings.json` file:

```json
"todo-tree.general.tags": [
    "TODO",
    "FIXME",
    "BUG",
    "HACK",
    "MAYBE",
    "[ ]",
    "[x]",
],
"todo-tree.highlights.customHighlight": {
    "TODO": {
        "foreground": "#fafbfc",
        "background": "#565869",
        "icon": "checklist",
        "iconColour": "#565869",
        "gutterIcon": true
    },
    "FIXME": {
        "foreground": "#fafbfc",
        "background": "#FF5C57",
        "icon": "tools",
        "iconColour": "#FF5C57",
        "gutterIcon": true
    },
    "BUG": {
        "foreground": "#ffffff",
        "background": "#ff1277",
        "icon": "alert",
        "iconColour": "#ff1278",
        "gutterIcon": true
    },
    "HACK": {
        "foreground": "#fafbfc",
        "background": "#CF9C00",
        "icon": "flame",
        "iconColour": "#CF9C00",
        "gutterIcon": true
    },
    "MAYBE": {
        "foreground": "#fafbfc",
        "background": "#13BBB7",
        "icon": "info",
        "iconColour": "#13BBB7",
        "gutterIcon": true
    },
    "[ ]": {
        "foreground": "#fafbfc",
        "background": "#565869",
        "icon": "checklist",
        "iconColour": "#565869",
        "gutterIcon": true
    },
    "[x]": {
        "foreground": "#2DAE58",
        "background": "#fafbfc",
        "icon": "checklist",
        "iconColour": "#2DAE58",
        "gutterIcon": true
    }
},
```
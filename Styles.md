# Styles

View this document inside of a text editor with hex colour highlighting support, otherwise you won't be able to see the colours in each sub-heading. For vscode, the [colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize) extension is a good one.

- `- s:` represent semantic scopes.
- `- tm:` represent 'TextMate' scopes.

## General

### Keywords #F767BB #f85eb4
- s: "newOperator" - `new`
#### rust
- s: "keyword"
- tm: "keyword"
- tm: "storage.modifier" - `mut` keyword
- tm: "storage.type.rust" - `enum` and `struct` declarations, `let` keyword
#### csharp
- s: "plainKeyword", "controlKeyword"
- tm: "keyword"
- tm: "storage.modifier.cs" - `public`, `static`, `override` etc.

### Self/This #F767BB #f85eb4
#### rust
- s: "selfKeyword"
- tm: "variable.language.self.rust"
#### csharp
- s: "plainKeyword"
- tm: "keyword.other.this.cs"

### Built-in Type #F767BB #f85eb4
- s: "type"
#### rust
- s: "builtinType"
- tm: "entity.name.type.numeric.rust" - All number types like `u32` etc.
- tm: "entity.name.type.primitive.rust" - `char`, `str`, `bool`
#### csharp
- s: "plainKeyword"
- tm: "keyword.type.cs"

### Punctuation #777777 #828da0
- s: "punctuation"
- tm: "punctuation"

### Operators #777777 #828da0
### rust
- s: "operator"
- s: "arithmetic"
- s: "comparison"
- s: "logical"
- s: "bitwise"
- tm: "keyword.operator"
#### csharp
- s: "operator"
- tm: "keyword.operator"



### Function #09A1ED #10b1fe
#### rust
- s: "function"
- tm: "entity.name.function.rust" ⚠ Cannot differentiate between functions and enum tuple variants. Cannot differentiate static functions from object methods.
#### csharp
- s: "member.static"
- tm: "entity.name.function.cs" ⚠ Cannot differentiate static methods from object methods.

### Method #09A1ED #10b1fe
#### rust
- s: "method"
- tm: "entity.name.function.rust"
#### csharp
- s: "member"
- tm: "entity.name.function.cs"

### Namespace #565869 #abb2bf
#### rust
- s: "namespace"
- tm: "entity.name.namespace.rust"
#### csharp
- s: "namespace"
- tm: "entity.name.type.namespace.cs" - ⚠ (Only for the using/namespace statements) Cannot differentiate namespaces, in function bodies, from other local variables.

### Custom Type #2DAE58 #3fc56b
#### rust
- s: "struct"
- s: "enum"
- s: "union"
- s: "typeAlias"
- tm: "entity.name.type.rust" - Actual typename references
- tm: "entity.name.type.struct.rust" - Struct declaration
- tm: "entity.name.type.enum.rust" - Enum declaration
- tm: "entity.name.type.union.rust" - Union declaration
- tm: "entity.name.type.declaration.rust" - Type alias declaration
#### csharp
- s: "class"
- s: "struct"
- s: "enum"
- tm: "storage.type.cs" - Actual typename references
- tm: "entity.name.type.class.cs" - Class declaration
- tm: "entity.name.type.struct.cs" - Struct declaration
- tm: "entity.name.type.enum.cs" - Enum declaration

### Enum Member #13BBB7 #15c9c5 ℹ Includes boolean `true/false`.
#### rust
- s: "enumMember"
- s: "boolean"
- tm: "constant.language.bool.rust"
- tm: "support.enum.core.rust"
- tm: "entity.name.type.option.rust"
- tm: "entity.name.type.result.rust"
#### csharp
- s: "enumMember"
- tm: "entity.name.variable.enum-member.cs" - Enum variant declarations
- tm: "constant.language.boolean.true.cs"
- tm: "constant.language.boolean.false.cs"



### Interface/Inheritance #cd6bf4 #d177f5
#### rust
- s: "interface"
- tm: "entity.name.type.trait.rust" - ⚠ Trait declaration only

### Type Parameters #2DAE58 #3fc56b
#### rust
- s: "typeParameter"
#### csharp
- s: "typeParameter"
- tm: "entity.name.type.type-parameter.cs"



### Variables #565869 #b9bfca
#### rust
- s: "variable"
- tm: "variable.other.rust" - ⚠ Cannot differentiate between variables and parameters/members
#### csharp
- s: "local"
- tm: "entity.name.variable.local.cs" - Only for declarations, not later uses

### Parameters #6e82a6 #97bccd
#### rust
- s: "parameter"
#### csharp
- s: "parameter"
- tm: "entity.name.variable.parameter.cs" - Only for declarations in function header, not uses

### Object members #a8759a #b58e95
#### rust
- s: "property"
#### csharp
- s: "field"
- tm: "variable.other.object.property.cs" - ⚠ Incorrectly highlights objects in namespaces

### Constants #13BBB7 #15c9c5
#### rust
- s: "*.constant"
- tm: "constant.other.caps.rust"
#### csharp
- s: "variable.static"



### Strings #CF9C00 #f9c859
#### rust
- s: "string"
- tm: "string.quoted.double.rust"
- tm: "punctuation.definition.string.rust"
#### csharp
- s: "string"
- tm: "string.quoted.double.cs"
- tm: "punctuation.definition.string.begin.cs"
- tm: "punctuation.definition.string.end.cs"

### Raw Strings
#### csharp
- s: "stringVerbatim" `@"..."`

### Escape characters #FF5C57 #ff6b66
#### rust
- s: "escapeSequence"
- tm: "constant.character.escape.rust"
#### csharp
- tm: "constant.character.escape.cs"

### Character Literals #FF5C57 #ff6b66
#### rust
- s: "character"
- tm: "string.quoted.single.char.rust"
- tm: "punctuation.definition.char.rust"
#### csharp
- tm: "string.quoted.single.cs"
- tm: "punctuation.definition.char.begin.cs"
- tm: "punctuation.definition.char.end.cs"

### Number Literals #FF5C57 #ff6b66
#### rust
- s: "number"
- tm: "constant.numeric.decimal.rust"
- tm: "punctuation.separator.dot.decimal.rust",
- tm: "constant.numeric.bin.rust"
- tm: "constant.numeric.hex.rust"
- tm: "constant.numeric.oct.rust"
#### csharp
- s: "number"
- tm: "constant.numeric.decimal.cs"
- tm: "constant.numeric.binary.cs"
- tm: "constant.numeric.hex.cs"

### Comments #ADB1C2 #636d83
#### rust
- s: "comment"
- tm: "comment"
#### csharp
- s: "comment"
- s: "comment.documentation.cs"
- tm: "comment.block.documentation.cs"



### Attributes #FF5C57 #ff6b66
#### rust
- s: "attribute"
- s: "parenthesis.attribute" `()`
- s: "macro.attribute" `#[derive()]`
- s: "builtinAttribute" `#[inline]`, `#[cfg]`, etc.
- s: "generic.attribute" `clippy::something`, `debug_assertions`, etc.
- tm: "meta.attribute.rust"
- tm: "punctuation.definition.attribute.rust"
- tm: "punctuation.brackets.attribute.rust"
- tm: "keyword.operator.attribute.inner.rust"

### Unresolved Symbol #FF1277 #ff2884
#### rust
- "unresolvedReference"



## Rust

### References (italic)
- s: "*.reference"
  - "variable.reference" - Reference to a variable.
  - "method.reference" - Method which takes `&self`.
  - "parameter.reference" - Parameter of type `&T`.
  - "selfKeyword.reference" - `&self`.

### Mutability (bold)
- s: "*.mutable"
  - "variable.mutable" - Mutable variable.
  - "method.mutable" - Method which takes `mut self`.
  - "parameter.mutable" - Parameter of type `mut T`.
  - "selfKeyword.mutable" - `mut self`.

### Mutable References (bold italic)
- s: "*.mutable.reference"
  - "variable.mutable.reference" - Mutable reference to a variable.
  - "method.mutable.reference" - Method which takes `&mut self`.
  - "parameter.mutable.reference" - Parameter of type `&mut T`.
  - "selfKeyword.mutable.reference" - `&mut self`.

### Try operator `?` #F767BB #f85eb4
- s: "operator.controlFlow" 
- tm: "keyword.operator.misc.question-mark.rust"
- tm: "keyword.operator.question.rust"

### Lifetimes `'a` #cd6bf4 #d177f5
- s: "lifetime"
- tm: "punctuation.definition.lifetime.rust"
- tm: "entity.name.type.lifetime.rust"
- tm: "storage.modifier.lifetime.rust"

### Labels `'outer: while ...` #8cba10 #9acc12
- s: "label"

### Unsafe #FF5C57 #ff6b66 (above effects plus underline)
- s: "*.unsafe"
- s: "keyword.unsafe" - `unsafe` Bold underline

### Textmate limitations
- No way to colour enum variants (empty enum variants appear like types and tuple enum variants appear like functions).
- No way to colour trait constrains in generics.
- No way to colour labels.
- No support for distinguishing mutability, referencing, etc.
- Only partial support for attributes.
- No support for object members or function parameters.
- No support for any unsafe highlighting.



## C Sharp

### Static Function #09A1ED  #10b1fe (underlined)
- s: "member.static"

### Static Classes #2DAE58 #3fc56b (underlined)
- s: "class.static"

### Static Members #a8759a #b58e95 (underlined)
- s: "field.static"

### Properties #a8759a #b58e95 (bold)
- s: "property"

### Doc Tag #565869 #b9bfca
- s: "xmlDocCommentName" `<summary> ...`
- s: "xmlDocCommentDelimiter" `</para>`
- tm: "entity.name.tag.cs" `summary`
- tm: "punctuation.definition.tag.cs" `<`, `/>`

### Doc Tag Attribute #FF5C57 #ff6b66 `<... type= ...`
- s: "xmlDocCommentAttributeName"
- tm: "entity.other.attribute-name.cs"

### Doc Tag Attribute Value #CF9C00 #f9c859
- s: "xmlDocCommentAttributeQuotes" `="...."`
- s: "xmlDocCommentAttributeValue" `...="..."`

### Doc Text #ADB1C2 #636d83
- s: "xmlDocCommentText"

### Limitations
- No way to differentiate base classes from inherited classes.
- No way to colour booleans since they get overridden by the semantic "plainKeyword" token.
- No way to colour character strings.
- No support for attributes.
- No support for "unresolved" symbols.
#### Textmate limitations
- No support for enum members.
- No support for constants.
- No support for static functions, classes or fields.
- No distinction between fields and properties.
- No distinction between classes and inherited classes.



## Powershell
The official powershell language extension does not support semantic highlighting, but even within the traditional
'Textmate' highlighting, it lacks a number of scopes which makes the results look a bit primitive and basic in places.

Keywords #F767BB #f85eb4
- "keyword.control.powershell" `if`, `foreach`, `param`, `return`, etc.
- "storage.type.powershell" `function ... {}`
- "keyword.operator.comparison.powershell" `-eq`, `-gt`, etc.
- "keyword.operator.logical.powershell" `-not`

Classes/Built-in types #F767BB #f85eb4
- "storage.type.powershell" `char`, `string`, `System.Collections.Generic.List`, etc.

Operator/Punctuation #777777 #828da0
- "keyword.operator"

Cmdlet/Functions #09A1ED #10b1fe
- "support.function.powershell" `Get-Item`, etc.

Variables #2DAE58 #3fc56b
- "variable.other.readwrite.powershell" `$variableName`
- "punctuation.definition.variable.powershell" `$...`
- "support.variable.automatic.powershell" `$_`
- "storage.modifier.scope.powershell" `global`, `script`, etc.

Members/Methods #a8759a #b58e95
- "variable.other.member.powershell" `.something`

Constants/Booleans #2DAE58 #3fc56b
- "constant.language.powershell" `true`, `false`

Strings #CF9C00 #f9c859
- "string.quoted.double.powershell" `"..."`
- "string.quoted.single.powershell" `'...'`
- "punctuation.definition.string.begin.powershell"
- "punctuation.definition.string.end.powershell"

Escape characters #FF5C57 #ff6b66
- "constant.character.escape.powershell" `` `a``

Number Literals #FF5C57 #ff6b66
- "constant.numeric.integer.powershell"
- "constant.numeric.hex.powershell"
- "constant.numeric.octal.powershell"

Attributes #FF5C57 #ff6b66
- "support.function.attribute.powershell" `[Parameter ...]`
- "variable.parameter.attribute.powershell" `[... Position ...]`

Comments #ADB1C2 #636d83
- "comment.line.powershell" `# ...`

Comment Keywords #565869 #b9bfca
- "keyword.operator.documentation.powershell" `.SYNOPSIS ...`

### Limitations
- No way to differentiate between function declaration and type/class, hence why types are in pink rather than green.
- No way to colour booleans.
- No support for differentiation between built-in types and classes.
- No support for parameters, e.g. `-Path`.
- No support for pipe `|`.



## Markdown
Markdown only supports textmate highlighting; it has no semantic highlighting.

### Text #ADB1C2 #636d83
- "text.html.markdown"
- "punctuation.definition.list_item.markdown"

### Titles #F767BB #f85eb4
- "entity.name.section.markdown" `... Heading title`
- "markdown.heading"
- "markup.heading.markdown"
- "punctuation.definition.heading.markdown" `## ...`

### Bold #FF5C57 #ff6b66 (bold)
- "markup.bold"
- "punctuation.definition.bold.markdown" `** ... **`

### Italic #09A1ED #10b1fe
- "markup.italic"
- "punctuation.definition.italic.markdown" `* ... *`

### Quote #c75af3 #d177f5
- "markup.quote.markdown"
- "punctuation.definition.quote.begin.markdown" `> ...`

### Inline Code #565869 #abb2bf
- "markup.inline.raw.string.markdown"
- "punctuation.definition.raw.markdown" `` `...` ``

### Fenced Codeblock #565869 #abb2bf
- "markup.fenced_code.block.markdown"
#### Language identifier #F767BB #f85eb4
- "fenced_code.block.language.markdown" ```` ```rust ````

### List #565869 #abb2bf
- "punctuation.definition.list.begin.markdown" `- ...`, `1. ...`, `* ...`

### Url description #2DAE58 #3fc56b
- "string.other.link.title.markdown"
- "string.other.link.description.markdown"
- "string.other.link.description.title.markdown"
- "punctuation.definition.string.begin.markdown" `[](... "...")`
- "punctuation.definition.string.end.markdown" `[](... "...")`
#### Link #565869 #abb2bf (underline)
- "markup.underline.link"
- "constant.other.reference.link.markdown"



## JSON
JSON only supports textmate highlighting; it has no semantic highlighting.

### Keys #F767BB #f85eb4
- "support.type.property-name.json"

### String Values #CF9C00 #f9c859
- "string.quoted.double.json"

### String Values #FF5C57 #ff6b66
- "constant.numeric.json"

### Constant Values #13BBB7 #15c9c5
- "constant.language.json"

### Comments #ADB1C2 #636d83
- "comment"
- "comment.line.double-slash.js"
- "comment.block.json"

### Punctuation #777777 #828da0
- "punctuation"

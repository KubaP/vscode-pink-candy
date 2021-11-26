# Styles

View this document inside of a text editor with hex colour highlighting support, otherwise you won't be able to see the colours in each sub-heading. For vscode, the [colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize) extension is a good one.

- `- s:` represent semantic scopes.
- `- tm:` represent textmate scopes.

## General

### Keywords #F767BB #f85eb4
- "keyword"
- "newOperator" `new`
#### csharp
- s: "plainKeyword", "controlKeyword"
- tm: "storage.modifier.cs" `public`, `static`, etc.
- tm: "keyword.*.cs" (Lots of specific differentiations)

### Built-in Type #F767BB #f85eb4
- "builtinType", "type"
#### csharp
- "keyword.type.cs" `void`, `string`, etc.

### Punctuation #777777 #828da0
- "punctuation"

### Operators #777777 #828da0
- "operator"
- "arithmetic"
- "logical"
- "comparison"
- "bitwise"



### Function #09A1ED #10b1fe
- "function"
#### csharp
- s: "member.static"
- tm: "entity.name.function.cs"

### Method #09A1ED #10b1fe
- "method"
#### csharp
- s: "member"
- tm: "entity.name.function.cs"

### Namespace #565869 #abb2bf
- "namespace"

### Custom Type #13BBB7 #15c9c5
- "struct", "class", "enum", "union", "typeAlias"
#### csharp
- tm: "storage.type.cs" `class`

### Enum Member #2DAE58 #3fc56b
ℹ Includes boolean types.
- "enumMember", "boolean"
#### csharp
- tm: "constant.language.boolean.false.cs"
- tm: "constant.language.boolean.true.cs"



### Interface #c75af3 #d177f5
- "interface"

### Type Parameters #13BBB7 #15c9c5
- "typeParameter"



### Variables #565869 #b9bfca
- "variable"
#### csharp
- s: "local"
- tm: "entity.name.variable.local.cs"

### Parameters #6e82a6 #97bccd
- "parameter"
#### csharp
- tm: "entity.name.variable.parameter.cs"

### Object members #a8759a #b58e95
- "property"
#### csharp
- s: "field"
- tm: "variable.other.object.property.cs"

### Self/This #F767BB #f85eb4
- "selfKeyword"
#### csharp
- tm: "keyword.other.this.cs" `this`

### Constants #2DAE58 #3fc56b
- "*.constant"
#### csharp
- s: "variable.static"



### Strings #CF9C00 #f9c859
- "string"
#### csharp
- tm: "string.quoted.double.cs"

### Raw Strings
#### csharp
- s: "stringVerbatim" `@"..."`
- tm: "string.quoted.double.cs"

### Escape characters #FF5C57 #ff6b66
- "escapeSequence"
#### csharp
- tm: "constant.character.escape.cs" `\n`

### Character Literals #FF5C57 #ff6b66
- "character"
#### csharp
- tm: "string.quoted.single.cs" `'b'`

### Number Literals #FF5C57 #ff6b66
- "number"
#### csharp
- tm: "constant.numeric.decimal.cs"
- tm: "constant.numeric.binary.cs"
- tm: "constant.numeric.hex.cs"

### Comments #ADB1C2 #636d83
- "comment"
#### csharp
- s: "comment.documentation.cs"
- tm: "comment.block.documentation.cs"



### Attributes #FF5C57 #ff6b66
- "attribute"
#### rust
- s: "parenthesis.attribute" `()`
- s: "macro.attribute" `#[derive()]`
- s: "builtinAttribute" `#[inline]`, `#[cfg]`, etc.
- s: "generic.attribute" `clippy::something`, `debug_assertions`, etc.

### Unresolved Symbol #FF1277 #ff2884
- "unresolvedReference"



## Rust

### Try operator `?` #F767BB #f85eb4
- s: "operator.controlFlow" 
- tm: "keyword.operator.mics.question-mark.rust"
- tm: "keyword.operator.question.rust"

### Lifetimes #8cba10 #9acc12
- s: "lifetime"
- tm: "punctuation.definition.lifetime.rust"
- tm: "entity.name.type.lifetime.rust"
- tm: "storage.modifier.lifetime.rust"



## C Sharp

### Static Function #09A1ED  #10b1fe (underlined)
- s: "member.static"

### Properties #a8759a #b58e95 (bold)
- s: "property"

### Doc Tag #565869 #b9bfca
- s: "xmlDocCommentName" `<summary> ...`
- s: "xmlDocCommentDelimiter" `</para>`

### Doc Tag Attribute #FF5C57 #ff6b66
- s: "xmlDocCommentAttributeName" `<... type= ...`

### Doc Tag Attribute Value #CF9C00 #f9c859
- s: "xmlDocCommentAttributeQuotes" `="...."`
- s: "xmlDocCommentAttributeValue" `...="..."`

### Doc Text #ADB1C2 #636d83
- s: "xmlDocCommentText"

### Limitations
- No way to differentiate base classes from inherited classes.
- No way to colour booleans since they get overridden by the semantic "plainKeyword" token.
- No support for attributes.
- No support for "unresolved" symbols.
#### Textmate limitations
- No support for enums/enum members.
- No support for constants.
- No distinction between fields and properties.
- No distinction between types and type parameters.
- No distinction between classes and interfaces.



## Powershell
The official powershell language extension does not support semantic highlighting, but even within the traditional
scope-based highlighting, it lacks a number of scopes which makes the results look a bit primitive in places.

Keywords #F767BB #f85eb4
- "keyword.control.powershell" `if`, `foreach`, `param`, `return`, etc.
- "storage.type.powershell" `function ... {}`
- "keyword.operator.comparison.powershell" `-eq`, `-gt`, etc.
- "keyword.operator.logical.powershell" `-not`

Operator/Punctuation #777777 #828da0
- "keyword.operator"

Classes/Built-in types #F767BB #f85eb4
- "storage.type.powershell" `char`, `string`, `System.Collections.Generic.List`, etc.

Cmdlet/Functions #09A1ED #10b1fe
- "support.function.powershell" `Get-Item`, etc.

Variables #2DAE58 #3fc56b
- "variable.other.readwrite.powershell" `$variableName`
- "punctuation.definition.variable.powershell" `$...`
- "support.variable.automatic.powershell" `$_`
- "storage.modifier.scope.powershell" `global`, `script`, etc.

Members/Methods #a8759a #b58e95
- "variable.other.member.powershell" `.something`

Number Constants #FF5C57 #ff6b66
- "constant.numeric.integer.powershell"
- "constant.numeric.hex.powershell"
- "constant.numeric.octal.powershell"

Constants #2DAE58 #3fc56b
- "constant.language.powershell" `true`, `false`

Strings #CF9C00 #f9c859
- "string.quoted.double.powershell" `"..."`
- "string.quoted.single.powershell" `'...'`

Escape characters #FF5C57 #ff6b66
- "constant.character.escape.powershell" `` `a``

Attributes #FF5C57 #ff6b66
- "support.function.attribute.powershell" `[Parameter ...]`
- "variable.parameter.attribute.powershell" `[... Position ...]`

Comments #ADB1C2 #636d83
- "comment.line.powershell" `# ...`

Comment Keywords #565869 #b9bfca
- "keyword.operator.documentation.powershell" `.SYNOPSIS ...`

### Limitations
- No way to differentiate between function declaration and type/class, hence why types are in pink rather than cyan.
- No support for differentiation between built-in types and classes.
- No support for parameters, e.g. `-Path`.
- No support for pipe `|`.


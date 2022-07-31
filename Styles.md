# Styles

View this document inside of a text editor with hex colour highlighting support, otherwise you won't be able to see the colours in each sub-heading. For vscode, the [colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize) extension is a good one.

- `- s:` represent *Semantic Highlighting* scopes.
- `- tm:` represent *TextMate* scopes.

## General

### Keywords #F767BB #f85eb4
- s: "newOperator" - `new`
#### rust
- s: "keyword"
- tm: "keyword"
- tm: "storage.modifier" - `mut` keyword
- tm: "storage.type.rust" - `enum` and `struct` declarations, `let` keyword
#### csharp
- s: "plainKeyword"
- s: "controlKeyword"
- tm: "keyword"
- tm: "storage.modifier.cs" - `public`, `static`, `override` etc.
#### js
- tm: "keyword"
- tm: "keyword.operator.new.js" - `new`
- tm: "keyword.operator.ternary.js"
- tm: "constant.language.null.js"
- tm: "constant.language.undefined.js"
- tm: "storage.type.js" - `var`, `const`, etc.
#### ts
- tm: "keyword"
- tm: "keyword.operator.new.ts" - `new`
- tm: "storage.type.ts" - `var`, `const`, `class`, `constructor`, etc.
- tm: "storage.type.namespace.ts" - `module`

### Self/This #F767BB #f85eb4
#### rust
- s: "selfKeyword"
- tm: "variable.language.self.rust"
#### csharp
- s: "plainKeyword"
- tm: "keyword.other.this.cs"
#### js
- tm: "variable.language.this.js"
#### ts
- tm: "variable.language.this.ts"

### Built-in Type #F767BB #f85eb4
- s: "type"
#### rust
- s: "builtinType"
- tm: "entity.name.type.numeric.rust" - All number types like `u32` etc.
- tm: "entity.name.type.primitive.rust" - `char`, `str`, `bool`
#### csharp
- s: "plainKeyword"
- tm: "keyword.type.cs"
#### js
- tm: "support.type.primitive.js"
#### ts
- tm: "support.type.primitive.ts"

### Punctuation #777777 #828da0
- s: "punctuation"
- tm: "punctuation"
#### js
- tm: "meta.brace.round.js" - For some reason not all braces/brackets have the punctuation token
- tm: "meta.brace.square.js" - see above
#### ts
- tm: "meta.brace.round.ts" - see above
- tm: "meta.brace.square.ts" - see above

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
#### js
- tm: "keyword.operator"
#### ts
- tm: "keyword.operator"


### Function #09A1ED #10b1fe
#### rust
- s: "function"
- tm: "entity.name.function.rust" ⚠ Cannot differentiate between functions and enum tuple variants. Cannot differentiate static functions from object methods.
#### csharp
- s: "member.static"
- tm: "entity.name.function.cs" ⚠ Cannot differentiate static methods from object methods.
#### js
- s: "function"
- tm: "entity.name.function.js"
#### ts
- s: "function"
- tm: "entity.name.function.ts"

### Method #09A1ED #10b1fe
#### rust
- s: "method"
- tm: "entity.name.function.rust"
#### csharp
- s: "member"
- tm: "entity.name.function.cs"
#### ts
- s: "member"
- tm: "entity.name.function.ts"


### Namespace #565869 #b9bfca
#### rust
- s: "namespace"
- tm: "entity.name.namespace.rust"
#### csharp
- s: "namespace"
- tm: "entity.name.type.namespace.cs" - ⚠ (Only for the using/namespace statements) Cannot differentiate namespaces, in function bodies, from other local variables.
#### js
- s: "namespace" - Only in code, not in imports header.


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
#### js
- s: "class"
- tm: "entity.name.type.class.js" - Class declaration (⚠ Cannot differentiate between classes and functions outside of the class declaration).
- tm: "support.class.builtin.js" - Classes from the std lib
- tm: "support.class.component.js" - React "classes" (types)
#### ts
- s: "class
- s: "class.defaultLibrary" - Classes from the std lib
- s: "enum"
- tm: "entity.name.type.class.ts"- Class declaration (⚠ Cannot differentiate between classes and functions outside of the class declaration).

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
- tm: "entity.name.variable.enum-member.cs" - Enum variant declarations only.
- tm: "constant.language.boolean.true.cs"
- tm: "constant.language.boolean.false.cs"
#### js
- tm: "constant.language.boolean.true.js"
- tm: "constant.language.boolean.false.js"
#### ts
- s: "enumMember"
- tm: "variable.other.enummember.ts" - Enum variant declarations only.
- tm: "constant.language.boolean.true.ts"
- tm: "constant.language.boolean.false.ts"

### Interface/Inheritance #cd6bf4 #d177f5
#### rust
- s: "interface"
- tm: "entity.name.type.trait.rust" - Trait declaration only
#### ts
- s: "interface"
- tm: "entity.name.type.interface.ts" - Interface declaration only

### Type Parameters #2DAE58 #3fc56b
#### rust
- s: "typeParameter"
#### csharp
- s: "typeParameter"
- tm: "entity.name.type.type-parameter.cs" - In object declaration only.
#### ts
- s: "typeParameter"


### Variables #565869 #b9bfca
#### rust
- s: "variable"
- tm: "variable.other.rust" - ⚠ Cannot differentiate between variables and parameters/members
#### csharp
- s: "local"
- tm: "entity.name.variable.local.cs" - Only for declarations, not later uses
- tm: "variable.other.readwrite.cs" - For later uses.
#### js
- s: "variable"
- tm: "variable.other.readwrite.js"
#### ts
- s: "variable"
- tm: "variable.other.readwrite.ts"

### Parameters #6e82a6 #97bccd
#### rust
- s: "parameter"
#### csharp
- s: "parameter"
- tm: "entity.name.variable.parameter.cs" - Only for declarations in function header, not uses
#### js
- s: "parameter"
- tm: "variable.parameter.js" - Only highlights within the function definition.
#### ts
- s: "parameter"
- tm: "variable.parameter.ts" - Only highlights within the function definition.

### Object members #a8759a #b58e95
#### rust
- s: "property"
#### csharp
- s: "field"
- tm: "entity.name.variable.field.cs" - Only for declarations within class.
- tm: "variable.other.object.property.cs" - Incorrectly highlights static objects in namespace paths.
#### js
- s: "property" - Only applies to static values inside a class.
- tm: "variable.other.property.js"
#### ts
- s: "property"
- tm: "variable.object.property.ts" - Only inside class declarations.
- tm: "variable.other.property.ts" - Accessing through the dot notation, i.e. `obj.something`

### Constants #13BBB7 #15c9c5
#### rust
- s: "*.constant"
- tm: "constant.other.caps.rust"
#### csharp
- s: "variable.static" - Declarations of `const`.
- s: "variable.readonly" - Later uses of the variable.
- tm: "constant.language.null.cs"
#### js
- s: "variable.readonly"
- tm: "variable.other.constant.js - Only applies to the declaration.
#### ts
- s: "variable.readonly"
- tm: "variable.other.constant.ts" - Only applies to the declaration.



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
#### js
- tm: "string.quoted.single.js"
- tm: "string.quoted.double.js"
- tm: "string.template.js"
- tm: "punctuation.definition.string.begin.js"
- tm: "punctuation.definition.string.end.js"
- tm: "punctuation.definition.string.template.begin.js"
- tm: "punctuation.definition.string.template.end.js"
#### ts
- tm: "string.quoted.single.ts"
- tm: "string.quoted.double.ts"
- tm: "string.template.ts"
- tm: "punctuation.definition.string.begin.ts"
- tm: "punctuation.definition.string.end.ts"
- tm: "punctuation.definition.string.template.begin.ts"
- tm: "punctuation.definition.string.template.end.ts"

### Raw Strings
#### csharp
- s: "stringVerbatim" - `@"..."`

### Escape characters #FF5C57 #ff6b66
#### rust
- s: "escapeSequence"
- tm: "constant.character.escape.rust"
#### csharp
- tm: "constant.character.escape.cs"
#### js
- tm: "constant.character.escape.js"
#### ts
- tm: "constant.character.escape.ts"

### String Interpolation #cd6bf4 #d177f5
#### rust
- s: "formatSpecifier"
- tm: "meta.interpolation.rust"
- tm: "punctuation.definition.interpolation.rust
#### csharp
- tm: "punctuation.definition.interpolation.begin.cs"
- tm: "punctuation.definition.interpolation.end.cs"
#### js
- tm: "punctuation.definition.template-expression.begin.js"
- tm: "punctuation.definition.template-expression.end.js"
#### ts
- tm: "punctuation.definition.template-expression.begin.ts"
- tm: "punctuation.definition.template-expression.end.ts"

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
#### js
- tm: "constant.numeric.decimal.js"
- tm: "constant.numeric.binary.js"
- tm: "constant.numeric.hex.js"
- tm: "constant.numeric.octal.js"
#### ts
- tm: "constant.numeric.decimal.ts"
- tm: "constant.numeric.binary.ts"
- tm: "constant.numeric.hex.ts"
- tm: "constant.numeric.octal.ts"

### Comments #ADB1C2 #636d83
#### rust
- s: "comment"
- tm: "comment"
#### csharp
- s: "comment"
- s: "comment.documentation.cs"
- tm: "comment.line.double-slash.cs"
- tm: "comment.block.cs"
#### js
- tm: "comment.block.js"
- tm: "comment.block.documentation.js"
- tm: "comment.line.double-slash.js"
#### ts
- tm: "comment.block.ts"
- tm: "comment.block.documentation.ts"
- tm: "comment.line.double-slash.ts"


### Attributes #FF5C57 #ff6b66
#### rust
- s: "attribute"
- s: "parenthesis.attribute" - `()`
- s: "macro.attribute" - `#[derive()]`
- s: "builtinAttribute" - `#[inline]`, `#[cfg]`, etc.
- s: "generic.attribute" - `clippy::something`, `debug_assertions`, etc.
- tm: "meta.attribute.rust"
- tm: "punctuation.definition.attribute.rust"
- tm: "punctuation.brackets.attribute.rust"
- tm: "keyword.operator.attribute.inner.rust"

### Unresolved Symbol #FF1277 #ff2884
#### rust
- s: "unresolvedReference"
#### csharp
- tm: "invalid.illegal"


## Rust

### References (italicised)
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

### Mutable References (bold italicised)
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

### Unsafe #FF5C57 #ff6b66 (above effects + underlined)
- s: "*.unsafe"
- s: "keyword.unsafe" - `unsafe` Bold underline

### Macro declaration variable specifier `...:expr` #8cba10 #9acc12
- tm: "variable.other.metavariable.specifier.rust"

### Textmate limitations
- No way to colour enum variants (empty enum variants appear like types and tuple enum variants appear like functions).
- No way to colour trait constrains in generics.
- No way to colour labels.
- No support for distinguishing mutability, referencing, etc.
- Only partial support for attributes.
- No support for object members or function parameters.
- No support for any unsafe highlighting.



## C Sharp

### Static Functions #09A1ED  #10b1fe (underlined)
- s: "member.static"

### Static Classes #2DAE58 #3fc56b (underlined)
- s: "class.static"

### Static Members #a8759a #b58e95 (underlined)
- s: "field.static"

### Properties #a8759a #b58e95 (bold)
- s: "property"

### Static Properties #a8759a #b58e95 (bold underlined)
- s: "property.static"

### Doc Tag #ADB1C2 #636d83
- s: "xmlDocCommentName" - `<summary> ...`
- s: "xmlDocCommentDelimiter" - `</para>`
- tm: "entity.name.tag.cs" - `summary`
- tm: "comment.block.documentation.cs punctuation.definition.tag.cs" - `<`, `/>`
- tm: "comment.block.documentation.cs punctuation.separator.equals.cs" - `..=..`

### Doc Tag Attribute #FF5C57 #ff6b66 - `<... type= ...`
- s: "xmlDocCommentAttributeName"
- tm: "entity.other.attribute-name.cs"

### Doc Tag Attribute Value #CF9C00 #f9c859
- s: "xmlDocCommentAttributeQuotes" - `="...."`
- s: "xmlDocCommentAttributeValue" - `...="..."`

### Doc Text #565869 #b9bfca
- s: "xmlDocCommentText"
- tm: "comment.block.documentation.cs"

### Limitations
- No way to differentiate base classes from inherited classes.
- No way to colour booleans since they get overridden by the semantic "plainKeyword" token.
- No distinction between character strings `''` and proper strings `""`.
- No support for attributes.
- No support for "unresolved" symbols.
- No way to colour string interpolation delimiters.
#### Textmate limitations
- No support for enum members.
- No support for constants.
- No support for static functions or classes.
- Syntax highlighting can get confused between object fields and namespace paths.
- No distinction between parameters and local variables inside of function bodies.
- No distinction between fields and properties.
- No distinction between classes and inherited classes.



## Powershell
The official powershell language extension does not support semantic highlighting, but even within the traditional
'Textmate' highlighting, it lacks a number of scopes which makes the results look a bit primitive and basic in places.

Keywords #F767BB #f85eb4
- "keyword.control.powershell" - `if`, `foreach`, `param`, `return`, etc.
- "storage.type.powershell" - `function ... {}`
- "keyword.operator.comparison.powershell" - `-eq`, `-gt`, etc.
- "keyword.operator.logical.powershell" - `-not`

Classes/Built-in types #F767BB #f85eb4
- "storage.type.powershell" - `char`, `string`, `System.Collections.Generic.List`, etc.

Operator/Punctuation #777777 #828da0
- "keyword.operator"

Cmdlet/Functions #09A1ED #10b1fe
- "support.function.powershell" - `Get-Item`, etc.

Variables #2DAE58 #3fc56b
- "variable.other.readwrite.powershell" - `$variableName`
- "punctuation.definition.variable.powershell" - The `$` beforehand

Variable Scopes #2DAE58 #3fc56b (underlined)
- "storage.modifier.scope.powershell" - `global:`, `script:`, etc.

Storage Scopes #2DAE58 #3fc56b (underlined)
- "support.variable.drive.powershell" - `env:`, `Temp:`, etc.

Special Variable #cd6bf4 #d177f5
- "support.variable.automatic.powershell" - The `$_` in loops for example
- "support.variable.automatic.powershell punctuation.definition.variable.powershell" - The `$` beforehand

Members/Methods #a8759a #b58e95
- "variable.other.member.powershell" - `.something`

Constants/Booleans #13BBB7 #15c9c5
- "constant.language.powershell" - `true`, `false`, `null`, etc.
- "constant.language.powershell punctuation.definition.variable.powershell" - The `$` beforehand
- "support.constant.variable.powershell" - Things like `$Host`, etc.
- "support.constant.variable.powershell punctuation.definition.variable.powershell" - The `$` beforehand

Strings #CF9C00 #f9c859
- "string.quoted.double.powershell"
- "string.quoted.single.powershell"
- "punctuation.definition.string.begin.powershell"
- "punctuation.definition.string.end.powershell"

Escape characters #FF5C57 #ff6b66
- "constant.character.escape.powershell" - `` `a``

String Interpolation `$(...)` #cd6bf4 #d177f5
- "punctuation.section.embedded.substatement.begin.powershell"
- "punctuation.section.embedded.substatement.end.powershell"

Number Literals #FF5C57 #ff6b66
- "constant.numeric.integer.powershell"
- "constant.numeric.hex.powershell"
- "constant.numeric.octal.powershell"

Attributes #FF5C57 #ff6b66
- "support.function.attribute.powershell" - `[Parameter ...]`
- "variable.parameter.attribute.powershell" - `[... Position ...]`

Comments #ADB1C2 #636d83
- "comment.line.powershell" - `# ...`

Comment Keywords #565869 #b9bfca
- "keyword.operator.documentation.powershell" - `.SYNOPSIS ...`

### Limitations
- No way to differentiate between function declaration and type/class, hence why types are in pink rather than green.
- No way to colour booleans.
- No support for differentiation between built-in types and classes.
- No support for parameters, e.g. `-Path`.
- No support for pipe `|`.



## HTML/Css/Scss
HTML/Css/Scss only support textmate highlighting.

### Tags #F767BB #f85eb4
- "entity.name.tag.html"
- "entity.name.tag.css"

### Classes #2DAE58 #3fc56b
- "meta.attribute.class.html"
- "entity.other.attribute-name.class.css"

### IDs #FF5C57 #ff6b66 (bold)
- "meta.attribute.id.html"
- "entity.other.attribute-name.id.css"



### Attributes (HTML) #13BBB7 #15c9c5 (italicised)
- "entity.other.attribute-name.html"

### Attribute Values (HTML) #CF9C00 #f9c859
- "string.quoted.double.html"

### Attribute Value Urls (HTML) #cd6bf4 #d177f5
- "meta.attribute.href.html"
- "meta.attribute.src.html"
- "meta.attribute.unrecognized.xmlns.html"

### Attribute Value Inline Styles (HTML) #8cba10 #9acc12
- "meta.embedded.line.css"

### String Quote Marks (HTML) #777777 #828da0
- "punctuation.definition.string.begin.html"
- "punctuation.definition.string.end.html"



### Properties (CSS) #a8759a #b58e95
- "support.type.property-name.css"
- "meta.property-name.css"
- "meta.property-name.scss"
- "support.type.property-name.media.css"

### Property Value Strings (CSS) #CF9C00 #f9c859
- "string.quoted.double.css"
- "string.quoted.double.scss"
- "string.quoted.single.css"
- "string.quoted.single.scss"
- "support.constant.font-name.css"

### Property Value Numbers (CSS) #FF5C57 #ff6b66
- "constant.numeric.css"
- "keyword.other.unit.rem.css"
- "keyword.other.unit.em.css"
- "keyword.other.unit.ex.css"
- "keyword.other.unit.ch.css"
- "keyword.other.unit.vw.css"
- "keyword.other.unit.vh.css"
- "keyword.other.unit.vmin.css"
- "keyword.other.unit.vmax.css"
- "keyword.other.unit.percentage.css"
- "keyword.other.unit.mm.css"
- "keyword.other.unit.in.css"
- "keyword.other.unit.px.css"
- "keyword.other.unit.pt.css"
- "keyword.other.unit.pc.css"
- "keyword.other.unit.deg.css"
- "constant.other.scss"

### Property Value Constants/Keys (CSS) #13BBB7 #15c9c5
- "support.constant.property-value.css"

### Pseudoclass Selectors (CSS) #8cba10 #9acc12
- "entity.other.attribute-name.pseudo-class.css"
- "entity.other.attribute-name.pseudo-element.css"

### Variables (CSS) #565869 #b9bfca
- "variable.css"
- "variable.argument.css"
- "variable.scss"

### Functions (CSS) #09A1ED #10b1fe
- "support.function.misc.css"
- "support.function.misc.scss"

### Logical Operators (CSS) #F767BB #f85eb4
- "keyword.operator.logical.and.media.css"
- "keyword.operator.logical.not.media.css"
- "keyword.operator.logical.only.media.css"

### Media Query Types (CSS) #cd6bf4 #d177f5
- "support.constant.media.css"

### Special Symbols (SCSS) #F767BB #f85eb4
- "entity.name.tag.reference.scss" - `&`
- "punctuation.definition.keyword.scss" - `@`
- "keyword.control.at-rule.include.scss" - `@`
- "entity.name.tag.wildcard.scss" - `*`


## Javascript

### Regexp #cd6bf4 #d177f5 (Likely incomplete)
- tm: "constant.other.character-class.regexp"
- tm: "keyword.operator.quantifier.regexp"
- tm: "keyword.control.anchor.regexp"
- tm: "punctuation.definition.look-ahead.regexp"
- tm: "meta.assertion.look-ahead.regexp"
- tm: "meta.group.assertion.regexp"
#### Brackets #565869 #b9bfca
- tm: "punctuation.definition.group.regexp"
- tm: "punctuation.definition.group.no-capture.regexp"

#### JSX Embedded Code #FF5C57 #ff6b66 (bold)
- tm: "punctuation.section.embedded.begin.js"
- tm: "punctuation.section.embedded.end.js"

#### JSX Attributes #cd6bf4 #d177f5 (italicised)
- tm: "entity.other.attribute-name.js"

### Limitations
- Distinction between methods and functions only applies within classes; outside, a method is treated the same as a function, so there is no highlighting difference.
#### Textmate limitations
- Distinction between constants is pointless since constants are used differently in javascript compared to most languages, i.e. declaring a value or function as `const` is very common.
- No way to differentiate between class constructor calls and function calls.
- No support for parameter highlighting inside of the function body.



## Typescript

### Static Functions #09A1ED  #10b1fe (underlined)
- s: "method.static"

### Static Members #a8759a #b58e95 (underlined)
- s: "property.static"

### Textmate limitations
- Distinction between constants is pointless since constants are used differently in javascript compared to most languages, i.e. declaring a value or function as `const` is very common.
- No way to differentiate between class constructor calls and function calls.
- No support for parameter highlighting inside of the function body.
- No support for static functions or members.
- No way to differentiate enum variants from object members outside of their declarations.
- No support for interface usage.



## XML
XML only supports textmate highlighting; it has no semantic highlighting.

### Tags #F767BB #f85eb4
- "entity.name.tag.xml" - Global xml tags?
- "entity.name.tag.localname.xml" - Normal xml tags

### Attributes #13BBB7 #15c9c5 (italicised)
- "entity.other.attribute-name.html"
- "entity.other.attribute-name.localname.html"

### String Values #CF9C00 #f9c859
- "string.quoted.double.xml"
- "string.quoted.single.xml"

### Doctype #cd6bf4 #d177f5
- "variable.language.documentroot.xml"

### Namespaces #8cba10 #9acc12
- "entity.name.tag.namespace.xml" - Tags
- "entity.other.attribute-name.namespace.xml" - Attributes (italicised)

### Escape Characters #FF5C57 #ff6b66
- "punctuation.definition.constant.xml" - `&...`
- "constant.character.entity.xml"

### Comments #ADB1C2 #636d83
- "comment.block.xml"
- "punctuation.definition.comment.xml"

### String Quote Marks #777777 #828da0
- "punctuation.definition.string.begin.xml"
- "punctuation.definition.string.end.xml"



## Markdown
Markdown only supports textmate highlighting; it has no semantic highlighting.

### Text #565869 #B9BFCA (alternatively #ADB1C2 #636d83)
- "text.html.markdown"
- "punctuation.definition.list_item.markdown"

### Titles #F767BB #f85eb4
- "entity.name.section.markdown" - `# Heading title`
- "markdown.heading"
- "markup.heading.markdown"
- "punctuation.definition.heading.markdown" - `## ...`

### Bold #FF5C57 #ff6b66 (bold)
- "markup.bold"
- "punctuation.definition.bold.markdown" - `** ... **`

### Italic #09A1ED #10b1fe
- "markup.italic"
- "punctuation.definition.italic.markdown" - `* ... *`

### Quote #CF9C00 #F9C859
- "markup.quote.markdown"
- "punctuation.definition.quote.begin.markdown" - `> ...`

### Strikethrough #ADB1C2 #636D83
- "markup.strikethrough.markdown"
- "punctuation.definition.strikethrough.markdown"

### Inline Code #565869 #B9BFCA (bold)
- "markup.inline.raw.string.markdown"
- "punctuation.definition.raw.markdown" - `` `...` ``

### Fenced Codeblock #565869 #B9BFCA
- "markup.fenced_code.block.markdown"
#### Language Identifier #565869 #B9BFCA (bold)
- "fenced_code.block.language.markdown" - ```` ```rust ````

### List #13BBB7 #15c9c5
- "punctuation.definition.list.begin.markdown" - `- ...`, `1. ...`, `* ...`

### Url Description #2DAE58 #3fc56b
- "string.other.link.title.markdown"
- "string.other.link.description.markdown"
- "string.other.link.description.title.markdown"
- "punctuation.definition.string.begin.markdown" - `[](... "...")`
- "punctuation.definition.string.end.markdown" - `[](... "...")`

### Url Link #cd6bf4 #d177f5 (underlined)
- "markup.underline.link"
- "constant.other.reference.link.markdown"

### String Quote Marks #777777 #828da0
- "punctuation.definition.string.markdown"

### Math Delimiters #8cba10 #9acc12
- "punctuation.definition.math.begin.markdown"

### Math Constants/Functions #13BBB7 #15c9c5
- "constant.character.math.tex",
- "constant.character.math.tex punctuation.definition.math.tex"



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

### String Quote Marks #777777 #828da0
- "punctuation.definition.string.begin.json"
- "punctuation.definition.string.end.json"
- "punctuation.support.type.property-name.begin.json"
- "punctuation.support.type.property-name.end.json"



## YAML
YAML only supports textmate highlighting; it has no semantic highlighting.

### Keys #F767BB #f85eb4
- "entity.name.tag.yaml"

### String Values #CF9C00 #f9c859
- "string.unquoted.plain.out.yaml"
- "string.unquoted.block.yaml"
- "punctuation.definition.string.begin.yaml"
- "punctuation.definition.string.end.yaml"
- "string.quoted.single.yaml"
- "string.quoted.double.yaml"

### Number Values #FF5C57 #ff6b66
- "constant.numeric.integer.yaml"
- "constant.numeric.float.yaml"

### Boolean Values #13BBB7 #15c9c5
- "constant.language.boolean.yaml"

### Timestamp Values #2DAE58 #3fc56b
- "constant.other.timestamp.yaml"

### Null Values #F767BB #f85eb4
- "constant.language.null.yaml"

### Types #F767BB #f85eb4
- "storage.type.tag-handle.yaml"

### Anchors #8cba10 #9acc12
- "entity.name.type.anchor.yaml"
- "punctuation.definition.anchor.yaml"
- "variable.other.alias.yaml"
- "keyword.control.flow.alias.yaml punctuation.definition.alias.yaml"

### Escape Characters #FF5C57 #ff6b66
- "constant.character.escape.yaml"

### Comments #ADB1C2 #636d83
- "punctuation.definition.comment.yaml"
- "comment.line.number-sign.yaml"



## TOML
TOML has some support for semantic highlighting.

### Keys #F767BB #f85eb4
- tm: "keyword.key.toml",
- tm: "support.type.property-name.toml"

### String Values #CF9C00 #f9c859
- tm: "string.quoted.single.basic.line.toml"
- tm: "string.quoted.single.literal.line.toml"
- tm: "string.quoted.triple.basic.block.toml"
- tm: "string.quoted.triple.literal.block.toml"

### Number Values #FF5C57 #ff6b66
- tm: "constant.numeric.integer.toml"
- tm: "constant.numeric.float.toml"
- tm: "constant.numeric.bin.toml"
- tm: "constant.numeric.hex.toml"
- tm: "constant.numeric.oct.toml"
- tm: "constant.numeric.inf.toml"
- tm: "constant.numeric.nan.toml"

### Boolean Values #13BBB7 #15c9c5
- tm: "constant.language.boolean.toml"
- tm: "constant.other.boolean.toml"

### Timestamp Values #2DAE58 #3fc56b
- tm: "constant.other.date.toml"
- tm: "constant.other.datetime.toml"
- tm: "constant.other.datetime-with-timezone.toml"
- tm: "constant.other.time.date.toml"
- tm: "constant.other.time.time.toml"
- tm: "constant.other.time.datetime.local.toml"
- tm: "constant.other.time.datetime.offset.toml"

### Tables #8cba10 #9acc12
- s: "tomlTableKey"
- tm: "entity.other.attribute-name.table.toml"
- tm: "support.type.property-name.table.toml"

### Array Tables #cd6bf4 #d177f5
- s: "tomlArrayKey"
- tm: "entity.other.attribute-name.table.array.toml"
- tm: "support.type.property-name.array.toml"

### Escape Characters #FF5C57 #ff6b66
- tm: "constant.character.escape.toml"

### Comments #ADB1C2 #636d83
- tm: "punctuation.definition.comment.toml"
- tm: "comment.line.number-sign.toml"



## INI
INI only supports textmate highlighting; it has no semantic highlighting.

### Keys #F767BB #f85eb4
- "keyword.other.definition.ini"

### Headings #8cba10 #9acc12
- "entity.name.section.group-title.ini"

### String Values #CF9C00 #f9c859
- "string.quoted.single.ini"
- "string.quoted.double.ini"
- "punctuation.definition.string.begin.ini"
- "punctuation.definition.string.end.ini"

### Comments #ADB1C2 #636d83
- "punctuation.definition.comment.ini"
- "comment.line.semicolon.ini"
- "comment.line.number-sign.ini"



## Backus-Naur Form
BNF only supports textmate highlighting; it has no semantic highlighting.

### Symbols #2DAE58 #3fc56b
- "entity.name.class.bnf"

### Strings #CF9C00 #f9c859
- "string.quoted.double.bnf"
- "string.quoted.single.bnf"

### Built-in #13BBB7 #15c9c5
- "support.variable.bnf"

### Comments #ADB1C2 #636d83
- "comment.line.bnf"
- "comment.block.bnf"

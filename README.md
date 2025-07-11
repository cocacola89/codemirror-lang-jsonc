<!-- NOTE: README.md is generated from src/README.md -->

# @codemirror/lang-json [![NPM version](https://img.shields.io/npm/v/@codemirror/lang-json.svg)](https://www.npmjs.org/package/@codemirror/lang-json)

[ [**WEBSITE**](https://codemirror.net/) | [**ISSUES**](https://github.com/codemirror/dev/issues) | [**FORUM**](https://discuss.codemirror.net/c/next/) | [**CHANGELOG**](https://github.com/codemirror/lang-json/blob/main/CHANGELOG.md) ]

This package implements JSONC language support for the
[CodeMirror](https://codemirror.net/) code editor.

The [project page](https://codemirror.net/) has more information, a
number of [examples](https://codemirror.net/examples/) and the
[documentation](https://codemirror.net/docs/).

This code is released under an
[MIT license](https://github.com/codemirror/lang-json/tree/main/LICENSE).

We aim to be an inclusive, welcoming community. To make that explicit,
we have a [code of
conduct](http://contributor-covenant.org/version/1/1/0/) that applies
to communication around the project.

Thanks to [marijnh](https://github.com/marijnh) and [SirPepe](https://github.com/SirPepe) for their contributions that made this fork possible.

## Usage

```javascript
import {EditorView, basicSetup} from "codemirror"
import {jsonc} from "@cocacola89/codemirror-lang-json"

const view = new EditorView({
  parent: document.body,
  doc: `{"version": "9.99.99", /* comment */ "data": [1, 2, 3]}`,
  extensions: [basicSetup, jsonc()]
})
```

## API Reference

 * **`jsonc`**`() → LanguageSupport`\
   JSONC language support.


 * **`jsoncLanguage`**`: LRLanguage`\
   A language provider that provides JSON parsing.



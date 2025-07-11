import {parser} from "@codemovie/grammar-json-with-comments"
import {continuedIndent, indentNodeProp, foldNodeProp, foldInside, LRLanguage, LanguageSupport} from "@codemirror/language"

/// A language provider that provides JSON parsing.
export const jsoncLanguage = LRLanguage.define({
  name: "jsonc",
  parser: parser.configure({
    props: [
      indentNodeProp.add({
        Object: continuedIndent({except: /^\s*\}/}),
        Array: continuedIndent({except: /^\s*\]/})
      }),
      foldNodeProp.add({
        "Object Array": foldInside
      })
    ]
  }),
  languageData: {
    closeBrackets: {brackets: ["[", "{", '"']},
    indentOnInput: /^\s*[\}\]]$/
  }
})

/// JSONC language support.
export function jsonc() {
  return new LanguageSupport(jsoncLanguage)
}
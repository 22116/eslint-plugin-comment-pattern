# ESLint Comment Plugin

This plugin allows you to add patterns to block certain comments in your codebase.

## Installation

```bash
npm install --save-dev eslint-plugin-comment-pattern
```

## Usage

Add `comment-pattern` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["comment-pattern"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "comment-pattern/no-pattern-comments": [
      "error",
      {
        "patterns": [
          {
            "pattern": "[а-яА-ЯёЁ]",
            "message": "Cyrillic characters are not allowed in comments"
          },
          {
            "pattern": "TODO",
            "message": "TODO comments are not allowed"
          }
        ]
      }
    ]
  }
}
```

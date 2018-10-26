## parcel-plugin-markdown-string

> [Parcel](https://parceljs.org/) plugin for loader markdown string.

### Use

Install the plugin

```bash
npm install parcel-plugin-markdown-string --save-dev
```

Import your markdown files!

```js
import MarkdownString from './Markdown.md';

console.log(MarkdownString) // => Output markdown string.
```

If you want to convert directly to HTML, you need to set [marked](https://github.com/markedjs/marked) options in [package.json](example/package.json).

```json
{
  "name": "example",
  "marked": {
    "breaks": true,
    "pedantic": false,
    "gfm": true,
    "tables": true,
    "sanitize": false,
    "smartLists": true,
    "smartypants": false,
    "xhtml": false
    // ...
  },
}
```

Import Markdown output HTML!

```js
import HTMLString from './Markdown.md';

console.log(HTMLString) // => Output HTML string.
document.body.innerHTML = html;
```

### Test

```bash
npm run test
```
const { Asset } = require('parcel-bundler');
class MarkdownAsset extends Asset {
  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'js';
  }
  parse(markdownString) {
    this.code = markdownString;
  }
  generate() {
    // Send to JS bundler
    return { 'js': `module.exports = ${JSON.stringify(this.code)}` };
  }
}

module.exports = MarkdownAsset;

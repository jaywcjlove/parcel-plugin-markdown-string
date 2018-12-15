const { Asset } = require('parcel-bundler');
const marked = require('marked');

class MarkdownAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = 'js';
  }
  async parse(markdownString) {
    const pkg = await this.resolver.findPackage(process.cwd());
    if (pkg && pkg.marked) {
      this.code = marked(markdownString, pkg.marked);
    } else {
      this.code = markdownString;
    }
  }
  generate() {
    // Send to JS bundler
    return { 'js': `module.exports = ${JSON.stringify(this.code)}` };
  }
}

module.exports = MarkdownAsset;

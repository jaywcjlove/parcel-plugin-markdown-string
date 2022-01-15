import { Transformer } from '@parcel/plugin';
import path from 'path';
import { marked } from 'marked';

export default new Transformer({
  async loadConfig({ config }) {
    // @ts-ignore
    const conf = await config.getConfig([
      path.resolve('.markedrc'),
      path.resolve('.markedrc.js'),
      path.resolve('marked.config.js'),
    ]);
    if (conf) {
      let isJavascript = path.extname(conf.filePath) === '.js';
      if (isJavascript) {
        config.invalidateOnStartup();
      }
      return {
        marked: {
          breaks: true,
          pedantic: false,
          gfm: true,
          tables: true,
          sanitize: false,
          smartLists: true,
          smartypants: false,
          xhtml: false,
        },
        ...conf.contents as any,
      };
    }
  },
  async transform({ asset, config }) {
    let code = await asset.getCode();
    const option: { marked?: marked.MarkedOptions } = config || {};
    if (option.marked) {
      code = marked.parse(code, { ...option.marked });
    }
    asset.type = 'js';
    asset.setCode(`export default ${JSON.stringify(code)}`);
    return [asset];
  },
});

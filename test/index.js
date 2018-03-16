const Bundler = require('parcel-bundler');
const PluginReactMarkdown = require('../index.js');

let bundler = new Bundler('./example/index.html', {
    watch: true
});

PluginReactMarkdown(bundler);

bundler.serve();

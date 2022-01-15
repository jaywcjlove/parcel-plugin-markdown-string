const { Parcel } = require('@parcel/core');
// const defaultConfigContents = require('@parcel/config-default');

let bundler = new Parcel({
  entries: 'test/example/index.html',
  defaultConfig: '@parcel/config-default',
  defaultTargetOptions: {
    distDir: 'test/dist'
  },
  serveOptions: {
    port: 30022
  },
  hmrOptions: {
    port: 30022
  }
});

;(async () => {
  try {
    let subscription = await bundler.watch((err, event) => {
      if (err) {
        console.log(err);
        // fatal error
        throw err;
      }
      if (event.type === 'buildSuccess') {
        let bundles = event.bundleGraph.getBundles();
        console.log(`✨ Built ${bundles.length} bundles in ${event.buildTime}ms!`);
      } else if (event.type === 'buildFailure') {
        console.log(event.diagnostics);
      }
    });
    // some time later...
    // await subscription.unsubscribe();
  } catch (error) {
    console.log(error)
  }
})();
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#ce2371', '@lwx-color': '#9cdcfe' },
            javascriptEnabled: true,
          }
        }
      }
    }
  ]
};
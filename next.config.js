// next.config.js
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
})
let nextraConfig = withNextra()
nextraConfig.assetPrefix = './'
module.exports = nextraConfig

// next.config.js
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
})
let nextraConfig = withNextra()
nextraConfig.assetPrefix = './'
console.log(process.env.ENV);
if (process.env.ENV === 'production') {
  nextraConfig.basePath = '/revent-docs'
}
module.exports = nextraConfig

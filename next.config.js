// // next.config.js
// const withNextra = require('nextra')({
//   theme: 'nextra-theme-docs',
//   themeConfig: './theme.config.js',
//   unstable_staticImage: true,
// })
// let nextraConfig = withNextra()
// nextraConfig.assetPrefix = './'
// // if (process.env.ENV === 'production') {
// //   nextraConfig.basePath = '/revent-docs'
// // }
// module.exports = nextraConfig

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
})
module.exports = withNextra()

const gatsbyPluginReactHelmet = require.resolve('gatsby-plugin-react-helmet')
const gatsbySourceFilesystem = require.resolve('gatsby-source-filesystem')
const gatsbyPluginSharp = require.resolve('gatsby-plugin-sharp')
const gatsbyTransformerSharp = require.resolve('gatsby-transformer-sharp')
const gatsbyPluginManifest = require.resolve('gatsby-plugin-manifest')
const gatsbyPluginOffline = require.resolve('gatsby-plugin-offline')

const path = require('path')

const imageOptimisationPlugins = [
  {
    resolve: gatsbySourceFilesystem,
    options: {
      name: 'images',
      path: path.join(__dirname, 'src', 'images'),
    },
  },
  gatsbyPluginSharp,
  gatsbyTransformerSharp,
]

const manifest = {
  name: 'gatsby-starter-default',
  short_name: 'starter',
  start_url: '/',
  background_color: '#663399',
  theme_color: '#663399',
  display: 'minimal-ui',
  icon: path.join(__dirname, 'src', 'images', 'gatsby-icon.png'),
}

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    gatsbyPluginReactHelmet,
    ...imageOptimisationPlugins,
    { resolve: gatsbyPluginManifest, options: manifest },
    gatsbyPluginOffline,
  ],
}

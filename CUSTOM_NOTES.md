
## gatsby plugins

Um Bilder anzuzeigen und zu optimieren, nutzen wir [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image), was folgende plugins benötigt

- [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem): makes files accessible via graphql to access them as "gatsby-source"
- [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp): helper-plugin to use [sharp](https://github.com/lovell/sharp) transformations
- [gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp): expose algorithms using the sharp-plugin (resize/crop/optimize)

## gatsby-plugin-offline

[gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline) adds a [workbox](https://developers.google.com/web/tools/workbox/modules/workbox-build) build to make the generated app PWA-kompatibel. 

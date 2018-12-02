
## gatsby plugins

Um Bilder anzuzeigen und zu optimieren, nutzen wir [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image), was folgende plugins benötigt

- [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem): makes files accessible via graphql to access them as "gatsby-source"
- [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp): helper-plugin to use [sharp](https://github.com/lovell/sharp) transformations
- [gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp): expose algorithms using the sharp-plugin (resize/crop/optimize)

## gatsby-plugin-offline

[gatsby-plugin-offline](https://www.gatsbyjs.org/packages/gatsby-plugin-offline) adds a [workbox](https://developers.google.com/web/tools/workbox/modules/workbox-build) build to make the generated app PWA-kompatibel.

## gatsby-wordpress-source

todo:

1. checke im wp-admin-panel dass unter `settings` > `Permalinks` (e.g. https://wp.domain.de/wp-admin/options-permalink.php) `post name` ausgewählt ist
1. s  

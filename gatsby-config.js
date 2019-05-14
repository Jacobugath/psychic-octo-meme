module.exports = {
  siteMetadata: {
    title: `Rebecca Alexander Piano Studio`,
    description: `Website for local piano studio.`,
    author: `Jacob Morris`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rebecca Alexander Piano Studio`,
        short_name: `Piano Studio`,
        start_url: `/`,
        background_color: `#F3F1EB`,
        theme_color: `#4281A4`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

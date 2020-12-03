/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Vedat Olmez`,
    titleTemplate: `%s | Web Yazılım - Web Tasarım`,
    description: `Vedat Ölmez | Web Yazılım, Web Tasarım`,
    siteUrl: `https://vedatolmez.com.tr`,
    image: `/images/color.jpg`,
    author: `Vedat Olmez`,
    authorSite: `https://www.vedatolmez.com/`,
    twitterUsername: `@vedatoImez`,
    twitterURL: `https://twitter.com/`,
    linkedInURL: `https://www.linkedin.com/in/vedat-%C3%B6lmez-96b2b319b/`,
    githubURL: `https://github.com/VedatOlmez`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vedat Ölmez | Web Yazılım, Web Tasarım`,
        short_name: `Vedat Ölmez`,
        start_url: `/`,
        background_color: `#0027EC`,
        theme_color: `#0027EC`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "ENTER YOUR GA TRACKING ID HERE",
        head: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/images`,
      },
    },
  ],
}

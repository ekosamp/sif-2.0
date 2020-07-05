module.exports = {
  pathPrefix: `/dev`,
  siteMetadata: {
    title: "South Island Fireplace & Spas",
    titleTemplate: ``,
    description: ``,
    author: `Danny Di Iorio`,
    authorContact: `https://www.linkedin.com/in/danielrdiiorio/`,
    twitterUsername: ``,
    image: 'landing.png',
    siteUrl: 'http://www.southislandfireplace.com/',
    copyright: "South Island Fireplace & Spas. <a href='' target='_blank' rel='noopener noreferrer'>All Rights Reserved. </a>",
    social: {
      facebook: "https://www.facebook.com/southislandfireplace/",
      // twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com/southislandfireplaceandspas/",
      linkedin: "https://www.linkedin.com/company/south-island-fireplace-&-spas-ltd./"
    }, 
    contact: {
      phone: '250-746-0123',
      address: "2939 Boys Road, Duncan, BC, Canada. V9L 6W4",
      email: 'sales@southislandfireplace.com',
      website: "http://www.southislandfireplace.com/",
      rating: "5.0",
      customers: "700",
      clients: "3200",
      addressInfos: [
        {
          "id": "duncan",
          "state": "Showroom",
          "address": "2939 Boys Road, Duncan, BC, Canada. V9L 6W4",
          "email": "sales@southislandfireplace.com",
          "phone": "250-746-0123"
        }
      ]
    }
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/containers/layout/layout.js`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        tableOfContents: {
          heading: null,
          maxDepth: 6,
        },
        "excerpt_separator": `<!-- endexcerpt -->`,
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/assets/fonts`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "name": "South Island Fireplace & Spas",
        "short_name": "sif",
        "theme_color": "#086ad8",
        "background_color": "#ffffff",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "icon": "src/assets/images/favicon.ico",
        "icons": [
          {
            "src": "/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
        ],
        useClassNames: true
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'http://southislandfireplace.com',
        sitemap: 'http://southislandfireplace.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source - TODO: UPDATE
        baseUrl: `http://www.southislandfireplace.com/wp/`,
        protocol: `http`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: true
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 1849858,
        sv: 6
      },
    },
  ]
}

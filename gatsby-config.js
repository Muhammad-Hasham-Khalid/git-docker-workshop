module.exports = {
  siteMetadata: {
    title: "Git & Docker Workshop",
    subtitle: "",
    author: "Muhammad Hasham Khalid",
    authorSubtitle: "Associate Consultant @ Systems Ltd.",
    authorImage: "author.jpeg", // this image should go in /static
    courseImage: "courseImage.png", // this also should go in /static
    twitter: "https://twitter.com/hashiinngg", // make empty string to omit socials
    linkedin: "https://linkedin.com/in/mhashamk",
    github: "https://github.com/Muhammad-Hasham-Khalid",
    description:
      "I am a software engineer, eager to learn and work on modern technologies for building and deploying fast, elegant and performant applications. I am mostly interested in mobile and web application development alongside with exploring cutting-edge technologies like Blockchain, Cloud Computing etc.",
    keywords: [
      "hasham khalid",
      "muhammad hasham",
      "muhammad hasham khalid",
      "Muhammad-Hasham-Khalid",
      "hashiinngg",
      "software-engineer",
      "speaker",
      "github",
      "git",
      "docker",
      "NED",
      "NED university",
    ],
  },
  pathPrefix: "",
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /src/,
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false,
            },
          },
        ],
      },
    },
  ],
};

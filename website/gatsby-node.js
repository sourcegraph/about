// @ts-check

/**
 * This file is responsible for programatically creating pages from data such as Markdown files.
 *
 * Refer to https://www.gatsbyjs.org/tutorial/part-seven/ for relevant documentation.
 */

const path = require('path')
const slugify = require('slugify')
const { createFilePath } = require('gatsby-source-filesystem')

/**
 * onCreateNode creates Gatsby nodes from Markdown files. Nodes are queryable via GraphQL in other
 * parts of the app.
 *
 * @type {(args: import('gatsby').CreateNodeArgs<{}>) => void}
 */
exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === 'MarkdownRemark') {
    /** @type {import('gatsby').Node & {frontmatter: {slug?: string}}} */
    const markdownNode = node

    /** @type {import('gatsby-source-filesystem').FileSystemNode} */
    const fileNode = getNode(node.parent)

    // The slug is the right-most part of the URL path that is determined by the node. For example,
    // in /blog/foo, the slug is "foo".
    const slug =
      markdownNode.frontmatter.slug ||
      createFilePath({ node, getNode, basePath: fileNode.id, trailingSlash: false }).replace(/^\//, '')

    // The permalink is the full URL path to the node. For example, in /blog/foo, the permalink is.
    // "/blog/foo".
    /** @type {string} */
    let permalink
    /** @type {string | undefined} */
    let blogType
    switch (fileNode.sourceInstanceName) {
      case 'blog':
        permalink = `/blog/${slug}/`
        blogType = 'blog'
        break

      case 'press':
        permalink = `/press-release/${slug}/`
        blogType = 'press'
        break

      case 'podcast':
        permalink = `/podcast/${slug}/`
        blogType = 'podcast'
        break

      case 'liveblog':
        const liveblogDirToBlogType = {
          gophercon: 'go',
          dotgo: 'go',
          'graphql-summit': 'graphql',
          'strange-loop': 'strange-loop',
          'github-universe': 'github-universe',
        }
        blogType = liveblogDirToBlogType[fileNode.relativeDirectory]
        if (!blogType) {
          throw new Error(
            `no blogType for ${fileNode.relativePath}, relativeDirectory is ${fileNode.relativeDirectory}`
          )
        }
        permalink = `/${blogType}/${slug}/`
        break

      case 'data':
        permalink = `/${slug}/`
        break

      default:
        throw new Error(`unhandled file ${fileNode.relativePath}`)
    }

    createNodeField({ node, name: 'slug', value: slug })
    createNodeField({ node, name: 'permalink', value: permalink })
    if (blogType) {
      createNodeField({ node, name: 'blogType', value: blogType })
    }
  }
}

/**
 * Generate pages from the Markdown nodes we created in onCreateNode.
 *
 * @type {(args: import('gatsby').CreatePagesArgs) => Promise<any>}
 */
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const PostTemplate = path.resolve(`src/templates/PostTemplate.tsx`)
    const ContentTemplate = path.resolve(`src/templates/ContentTemplate.tsx`)

    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                    permalink
                    blogType
                  }
                  fileAbsolutePath
                  parent {
                    ... on File {
                      sourceInstanceName
                    }
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          switch (node.parent.sourceInstanceName) {
            case 'blog':
              createPage({
                path: node.fields.permalink,
                component: PostTemplate,
                context: {},
              })
              break

            case 'press':
              createPage({
                path: node.fields.permalink,
                component: PostTemplate,
                context: {},
              })
              break

            case 'liveblog':
              createPage({
                path: node.fields.permalink,
                component: PostTemplate,
                context: {},
              })
              break

            case 'podcast':
              createPage({
                path: node.fields.permalink,
                component: PostTemplate,
                context: {},
              })
              break

            case 'data':
              createPage({
                path: node.fields.permalink,
                component: ContentTemplate,
                context: {},
              })
              break

            default:
              throw new Error(`unhandled node ${node.relativePath}`)
          }
        })
      })
    )
  })
}

// Resolves path aliases
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@styles': path.resolve(__dirname, 'src/css'),
      },
    },
  })
}

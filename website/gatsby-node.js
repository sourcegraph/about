const _ = require('lodash')
const parseFilePath = require('parse-filepath')
const path = require('path')

function kebabcase(str) {
  result = str.toLowerCase()
  // Convert non-alphanumeric characters to hyphens
  result = result.replace(/[^-'a-z0-9]+/g, '-')
  result = result.replace(/'/, '')
  // Remove hyphens from both ends
  result = result.replace(/^-+/, '').replace(/-$/, '')
  result = result.replace(/(-)\1{1,}/, '-')

  return result
}
exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const PostTemplate = path.resolve(`src/templates/blogPostTemplate.tsx`)
    const ContentTemplate = path.resolve(`src/templates/contentTemplate.tsx`)
    const DocsTemplate = path.resolve(`src/templates/docsTemplate.tsx`)

    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    title
                    permalink
                    published
                    tags
                  }
                  fields {
                    slug
                  }
                  fileAbsolutePath
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
          if (node.fileAbsolutePath) {
            const slug = node.fields.slug
            const absPath = node.fileAbsolutePath
            if (absPath.includes('/docs/server/')) {
              createPage({
                path: slug,
                component: DocsTemplate,
                layout: 'ServerDocs',
                context: {
                  fileSlug: slug,
                },
              })
            } else if (absPath.includes('/docs/datacenter/')) {
              createPage({
                path: slug,
                component: DocsTemplate,
                layout: 'DataCenterDocs',
                context: {
                  fileSlug: slug,
                },
              })
            } else if (absPath.includes('/docs/integrations/')) {
              createPage({
                path: slug,
                component: DocsTemplate,
                layout: 'IntegrationsDocs',
                context: {
                  fileSlug: slug,
                },
              })
            } else if (
              (absPath.includes('/blogposts') || absPath.includes('/projects')) &&
              node.frontmatter.published === true
            ) {
              if (node.frontmatter.tags && node.frontmatter.tags.includes('blog')) {
                createPage({
                  path: `/blog/${slug}`,
                  component: PostTemplate,
                  context: {
                    fileSlug: slug,
                  },
                })
              } else if (
                node.frontmatter.tags &&
                (node.frontmatter.tags.includes('gophercon') || node.frontmatter.tags.includes('dotGo'))
              ) {
                createPage({
                  path: `/go/${slug}`,
                  component: PostTemplate,
                  context: {
                    fileSlug: slug,
                  },
                })
              } else if (node.frontmatter.tags && node.frontmatter.tags.includes('graphql')) {
                createPage({
                  path: `/graphql/${slug}`,
                  component: PostTemplate,
                  context: {
                    fileSlug: slug,
                  },
                })
              }
            } else {
              createPage({
                path: slug,
                component: ContentTemplate,
                context: {
                  fileSlug: slug,
                },
              })
            }
          }
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  let slug
  switch (node.internal.type) {
    case `MarkdownRemark`:
      const fileNode = getNode(node.parent)
      if (fileNode.relativePath) {
        const parsedFilePath = parseFilePath(fileNode.relativePath)
        const name = node.frontmatter.title
        const kebabName = kebabcase(name)
        if (parsedFilePath.name !== `index` && parsedFilePath.dirname !== '' && !node.frontmatter.permalink) {
          slug = `/${parsedFilePath.dirname}/${kebabName}/`
        } else if (parsedFilePath.name !== `index` && node.frontmatter.slug && !node.frontmatter.permalink) {
          slug = `${node.frontmatter.slug}`
        } else if (parsedFilePath.name !== `index` && !node.frontmatter.permalink) {
          slug = `/${kebabName}/`
        } else if (parsedFilePath.name !== `index`) {
          slug = node.frontmatter.permalink
        } else {
          slug = `/${parsedFilePath.dirname}/`
        }
      }
      break
  }
  if (slug) {
    createNodeField({ node, name: `slug`, value: slug })
  }
}

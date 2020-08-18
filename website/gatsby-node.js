// @ts-check

/**
 * This file is responsible for programatically creating pages from data such as markdown files.
 *
 * Refer to https://www.gatsbyjs.org/tutorial/part-seven/ for relevant documentation.
 */

const parseFilePath = require('parse-filepath')
const path = require('path')
const slugify = require('slugify')

/** onCreateNode creates Gatsby nodes from markdown files. Nodes are queryable via GraphQL in other parts of the app.*/
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  let slug
  switch (node.internal.type) {
    case `MarkdownRemark`:
      const fileNode = getNode(node.parent)
      if (fileNode.relativePath) {
        const parsedFilePath = parseFilePath(fileNode.relativePath)
        const name = node.frontmatter.title
        const slugified = slugify(name)

        if (parsedFilePath.name !== `index` && node.frontmatter.slug && !node.frontmatter.permalink) {
          // For markdown files that don't specify a permalink but have a slug, use the slug.
          slug = `${node.frontmatter.slug}`
        } else if (parsedFilePath.name !== `index` && !node.frontmatter.permalink) {
          // For markdown files that don't specify a slug or permalink, use the slugified file name.
          slug = `/${slugified}/`
        } else if (parsedFilePath.name !== `index` && node.frontmatter.permalink) {
          // For markdown files with a permalink, use the permalink.
          slug = node.frontmatter.permalink
        } else {
          // If there's no permalink, and the file is called index.md, use the directory name as the slug.
          slug = `/${parsedFilePath.dirname}/`
        }
      }
      break
  }
  if (slug) {
    // Add a field called "slug" to the node.
    createNodeField({ node, name: `slug`, value: slug })
  }
}

/** Generate pages from the markdown nodes we created in onCreateNode. */
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const PostTemplate = path.resolve(`src/templates/blogPostTemplate.tsx`)
    const ContentTemplate = path.resolve(`src/templates/contentTemplate.tsx`)
    const PodcastEpisodeTemplate = path.resolve(`src/templates/podcastEpisodeTemplate.tsx`)

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

            if (absPath.includes('/blogposts') && node.frontmatter.published === true) {
              if (node.frontmatter.tags && node.frontmatter.tags.includes('blog')) {
                createPage({
                  path: `/blog/${slug}`,
                  component: PostTemplate,
                  context: {
                    fileSlug: slug,
                  },
                })
              } else if (node.frontmatter.tags && node.frontmatter.tags.includes('press-release')) {
                createPage({
                  path: `/press-releases/${slug}`,
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
              } else if (node.frontmatter.tags && node.frontmatter.tags.includes('strange-loop')) {
                createPage({
                  path: `/strange-loop/${slug}`,
                  component: PostTemplate,
                  context: {
                    fileSlug: slug,
                  },
                })
              }
            } else if (node.frontmatter.tags && node.frontmatter.tags.includes('podcast')) {
              createPage({
                path: `/podcast/${slug}`,
                component: PodcastEpisodeTemplate,
                context: {
                  fileSlug: slug,
                  showTab: 'summary',
                },
              })
              createPage({
                path: `/podcast/${slug}/notes`,
                component: PodcastEpisodeTemplate,
                context: {
                  fileSlug: slug,
                  showTab: 'notes',
                },
              })
              createPage({
                path: `/podcast/${slug}/transcript`,
                component: PodcastEpisodeTemplate,
                context: {
                  fileSlug: slug,
                  showTab: 'transcript',
                },
              })
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

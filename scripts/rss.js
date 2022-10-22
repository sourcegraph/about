const { promises: fs } = require('fs')
const matter = require('gray-matter')
const path = require('path')
const RSS = require('rss')

async function walk(dir) {
  const files = []
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const fullPath = path.join(dir, e.name)
    if (e.isDirectory()) {
      const nested = await walk(fullPath)
      files.push(...nested)
    } else if (e.name.endsWith('.md')) {
      files.push(fullPath)
    }
  }
  return files
}

;(async function () {
  const feed = new RSS({
    title: 'Sourcegraph blog',
    site_url: 'https://about.sourcegraph.com/',
    feed_url: 'https://about.sourcegraph.com/rss.xml',
  })

  const folder = path.join(__dirname, '..', 'content', 'blogposts')
  const files = await walk(folder)

  const posts = []
  await Promise.all(
    files.map(async name => {
      const content = await fs.readFile(name)
      const frontmatter = matter(content)
      posts.push(frontmatter)
    })
  )

  posts.sort((a, b) => {
    return new Date(b.data.publishDate).getTime() - new Date(a.data.publishDate).getTime()
  })

  const recent = posts.slice(0, 10)
  recent.map(post => {
    let description = post.data.description
    if (description === null) {
      const paragraphs = post.content.split('\n\n')
      if (paragraphs.length > 0) {
        description = paragraphs[0].trim()
      }
    }

    feed.item({
      title: post.data.title,
      url: path.join('/blog', post.data.slug),
      date: post.data.publishDate,
      description: description,
    })
  })

  await fs.writeFile('./public/rss.xml', feed.xml({ indent: true }))
})()

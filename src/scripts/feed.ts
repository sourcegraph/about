/* eslint-disable no-sync */
import fs from 'fs'
import path from 'path'

import { Feed } from 'feed'

import { getAllPublishedBlogPosts } from '../lib/api'

const generateFeeds = async (): Promise<void> => {
    const baseURL = 'https://about.sourcegraph.com'

    const feed = new Feed({
        title: 'Sourcegraph Blog',
        description: "Our changelog, announcements, dev posts, and anything else we think you'll find interesting.",
        id: baseURL,
        link: baseURL,
        language: 'en',
        feedLinks: {
            rss2: `${baseURL}/feed.xml`,
            atom: `${baseURL}/atom.xml`,
            json: `${baseURL}/feed.json`,
        },
        copyright: '',
        author: { name: 'Sourcegraph', link: 'https://sourcegraph.com', email: 'hi@sourcegraph.com' },
    })

    const posts = await getAllPublishedBlogPosts()
    if (!posts) {
        throw new Error('no posts found')
    }
    for (const post of posts) {
        const url = `${baseURL}${post.urlPath}`
        feed.addItem({
            title: post.frontmatter.title || 'Untitled',
            id: url,
            link: url,
            description: post.excerpt,
            author: post.frontmatter.authors,
            date: post.frontmatter.publishDate ? new Date(post.frontmatter.publishDate) : new Date(2023, 0, 1),
        })
    }

    const publicPath = path.join(__dirname, '../../public')
    fs.writeFileSync(path.join(publicPath, 'feed.rss.xml'), feed.rss2())
    fs.writeFileSync(path.join(publicPath, 'feed.atom.xml'), feed.atom1())
    fs.writeFileSync(path.join(publicPath, 'feed.json'), feed.json1())
}

generateFeeds().catch(error => {
    console.error(error)
    process.exit(1)
})

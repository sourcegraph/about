import fs from 'fs/promises'

import matter from 'gray-matter'

import { Page, Post } from '../interfaces/posts'

export const loadMarkdownFile = async (filename: string): Promise<Page | Post | Error> => {
    const page = await fs
        .readFile(filename, 'utf8')
        .then(page => {
            const { data, content } = matter(page)
            return { frontmatter: data, content }
        })
        .catch(error => {
            throw new Error(error)
        })

    return page
}

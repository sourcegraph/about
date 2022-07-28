import fs from 'fs/promises'
import path from 'path'

import globby from 'globby'
import matter from 'gray-matter'

interface Post {
    frontmatter: FrontMatter
    content: string
    excerpt?: string
    fileAbsolutePath?: string
    fields?: {
        slug: string
        permalink: string
        blogType: BlogType
    }
}

enum BlogType {
    PressRelease = 'press',
    Podcast = 'podcast',
    Blog = 'blog',
}

export interface FrontMatter {
    slug?: string
    title?: string
    description?: string
    /** Controls the page's `<title>` for SEO and the browser tab label. Defaults to {@link title}. */
    externalTitle?: string
    /** Controls the page's `<meta name="description">` for SEO. Defaults to {@link description}. */
    externalDescription?: string
    canonical?: string
    publishDate?: string
    published?: boolean
    heroImage?: string
    authors?: {
        name: string
        url?: string
    }[]
    tags?: string[]
    changelogItems?: {
        url: string
        category: string
        description: string
    }[]
    socialImage?: string
    layout?: string
    style?: string
}

interface FileCacheObject {
    records: FileCacheRecord
}

interface SlugObject {
    contentDirectory: string
    recordSlugs: SlugRecord
}

interface SlugCacheObject {
    records: SlugDirectory
}

interface Record {
    slugPath: string
    filePath: string
}

interface Slug {
    slugPath: string
    publishDate: string
}

interface SlugRecord {
    [index: string]: Slug
}

interface SlugDirectory {
    [index: string]: SlugObject
}

interface FileCacheRecord {
    [index: string]: Record
}

const CONTENT_FOLDER = 'content'
const FILE_CACHE_PATH = '../../public/data/fileCache.json'
const SLUG_CACHE_PATH = '../../public/data/slugCache.json'

const loadMarkdownFile = async (filename: string): Promise<Post | Error> => {
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

const loadSlug = async (file: string): Promise<string> => {
    const fileRegex = /\d+\/|\.(md|markdown|mdx)$/gi
    const replaceFields = async (file: string): Promise<string> => {
        const loadedFile = (await loadMarkdownFile(path.join(process.cwd(), CONTENT_FOLDER, file))) as Post
        const slug = loadedFile.frontmatter.slug as string
        const newSlug = file.replace(fileRegex, '').split('/').splice(1)
        if (slug && newSlug[newSlug.length - 1] !== slug) {
            newSlug[newSlug.length - 1] = slug
        }

        return newSlug.join('/')
    }
    return replaceFields(file)
}

const loadDate = async (file: string): Promise<string | undefined> => {
    const loadedFile = (await loadMarkdownFile(path.join(process.cwd(), CONTENT_FOLDER, file))) as Post
    if (loadedFile) {
        return loadedFile.frontmatter.publishDate
    }
}

const mapFileDataCache = async (baseDirectory: string): Promise<FileCacheObject> => {
    const getFiles = await globby('**/*.md', { cwd: baseDirectory })
    const records = {
        records: Object.fromEntries(
            await Promise.all(
                getFiles.map(async (file: string) => [
                    await loadSlug(file),
                    { slugPath: await loadSlug(file), filePath: file },
                ])
            )
        ) as FileCacheRecord,
    }

    return records
}

const mapSlugDataCache = async (baseDirectory: string): Promise<SlugCacheObject> => {
    const directories = await fs.readdir(baseDirectory)
    const returnDirectorySlugs = async (directory: string): Promise<SlugObject> => {
        const directoryFiles = await globby('**/*.md', { cwd: path.join(baseDirectory, directory) })
        const slugs = {
            contentDirectory: directory,
            recordSlugs: Object.fromEntries(
                await Promise.all(
                    directoryFiles.map(async (file: string) => [
                        await loadSlug(path.join(directory, file)),
                        {
                            slugPath: await loadSlug(path.join(directory, file)),
                            publishDate: await loadDate(path.join(directory, file)),
                        },
                    ])
                )
            ) as SlugRecord,
        }
        return slugs
    }
    const allRecords = (await Promise.all(directories.map(async directory => returnDirectorySlugs(directory)))
        .then((response: SlugObject[]) => response)
        .catch(error => console.error(error))) as SlugObject[]
    const records: SlugCacheObject = {
        records: Object.fromEntries(allRecords.map(record => [record.contentDirectory, record])) as SlugDirectory,
    }
    return records
}

const hasFile = async (filePath: string): Promise<boolean> => {
    try {
        await fs.access(path.join(__dirname, filePath))
        return true
    } catch {
        console.warn('No file in place')
        return false
    }
}

const createFileDataCache = async (): Promise<void> => {
    const data = await mapFileDataCache(path.join(process.cwd(), CONTENT_FOLDER))
    const file = await hasFile(FILE_CACHE_PATH)
    if (!file) {
        await fs.writeFile(path.join(__dirname, FILE_CACHE_PATH), JSON.stringify({}), 'utf8')
    }
    const fileData = JSON.parse(await fs.readFile(path.join(__dirname, FILE_CACHE_PATH), 'utf8')) as FileCacheObject
    if (Object.keys(fileData).length === 0) {
        await fs.writeFile(path.join(__dirname, FILE_CACHE_PATH), JSON.stringify(data))
    }
}

const createSlugDataCache = async (): Promise<void> => {
    const data = await mapSlugDataCache(path.join(process.cwd(), CONTENT_FOLDER))
    const file = await hasFile(SLUG_CACHE_PATH)
    if (!file) {
        await fs.writeFile(path.join(__dirname, SLUG_CACHE_PATH), JSON.stringify({}), 'utf8')
    }
    const fileData = JSON.parse(await fs.readFile(path.join(__dirname, SLUG_CACHE_PATH), 'utf8')) as SlugCacheObject
    if (Object.keys(fileData).length === 0) {
        await fs.writeFile(path.join(__dirname, SLUG_CACHE_PATH), JSON.stringify(data))
    }
}

const createDataCache = async (): Promise<void> => {
    await createFileDataCache()
    await createSlugDataCache()
}

export default createDataCache

createDataCache().catch(error => {
    console.error(error)
    process.exit(1)
})

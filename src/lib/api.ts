import fs from 'fs/promises'
import path from 'path'

interface Record {
    slugPath: string
    filePath: string
}

export interface FileCacheObject {
    records: FileCacheRecord
}

interface SlugObject {
    contentDirectory: SlugDirectory
    recordSlugs: SlugRecord
}

interface SlugCacheObject {
    records: SlugDirectory
}

interface Record {
    slugPath: string
    filePath: string
}

export interface Slug {
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

const FILE_CACHE_PATH = '/public/data/fileCache.json'
const SLUG_CACHE_PATH = '/public/data/slugCache.json'

const filterFiles = (files: string[], fileRegex: RegExp): string[] =>
    files.filter(file => file.match(fileRegex) && !file.startsWith('index')).map(file => file.replace(fileRegex, ''))

export const getPages = async (baseDirectory: string): Promise<string[]> => {
    const fileRegex = /\.tsx$/gi
    const getFiles = await fs.readdir(baseDirectory)
    return filterFiles(getFiles, fileRegex)
}

export const getAllSlugs = async (): Promise<SlugCacheObject | undefined> => {
    const slugData = (await fs
        .readFile(path.join(process.cwd(), SLUG_CACHE_PATH), 'utf8')
        .catch(error => console.error(error))) as string
    if (slugData) {
        return JSON.parse(slugData) as SlugCacheObject
    }
}

export const getSortedSlugs = async (directory: string): Promise<Slug[] | undefined> => {
    const allSlugs = await getAllSlugs()
    if (!allSlugs) {
        return
    }
    const slugsByDirectory = Object.values(allSlugs.records[`${directory}`].recordSlugs)
    return slugsByDirectory.sort((a, b) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf())
}

export const getMarkdownFiles = async (): Promise<FileCacheObject | undefined> => {
    const fileData = (await fs
        .readFile(path.join(process.cwd(), FILE_CACHE_PATH), 'utf8')
        .catch(error => console.error(error))) as string
    if (fileData) {
        return JSON.parse(fileData) as FileCacheObject
    }
}

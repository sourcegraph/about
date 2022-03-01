import { promises as fs } from 'fs'

import globby from 'globby'

const filterFiles = (files: string[], fileRegex: RegExp): string[] => files
    .filter(file => file.match(fileRegex) && !file.startsWith('index'))
    .map(file => file.replace(fileRegex, ''))

export const getPages = async (baseDirectory: string): Promise<string[]> => {
    const fileRegex = /\.tsx$/gi
    const getFiles = await fs.readdir(baseDirectory)
    return filterFiles(getFiles, fileRegex)
}

export const getMarkdownPages = async (baseDirectory: string): Promise<{ slugPath: string; filePath: string }[]> => {
    const fileRegex = /\.(md|markdown|mdx)$/gi
    const getFiles = await globby('**/*.md', { cwd: baseDirectory })
    return getFiles.map(file => ({
        slugPath: file.replace(fileRegex, ''),
        filePath: file,
    }))
}

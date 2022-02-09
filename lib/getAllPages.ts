import { promises as fs } from 'fs'

export const getAllPages = async (baseDirectory: string, fileType?: string): Promise<string[]> => {
    const fileRegex = fileType ? /\.(md|markdown|mdx)$/gi : /\.tsx$/gi
    const getFiles = await fs.readdir(baseDirectory)
    const matchedFiles = getFiles
        .filter(file => file.match(fileRegex) && !file.startsWith('index'))
        .map(file => file.replace(fileRegex, ''))

    return matchedFiles
}

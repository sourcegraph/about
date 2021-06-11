import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

export const CONTENT_PATH = path.join(process.cwd(), 'content')

export const getSourceOfFile = filePath => {
  return fs.readFileSync(filePath)
}

export const getAllPages = (dirPath = CONTENT_PATH, allPages = []) => {
  const dirFiles = fs.readdirSync(dirPath)

  dirFiles.forEach(filePath => {
    const fullPath = dirPath + '/' + filePath

    if (fs.statSync(fullPath).isDirectory()) {
      allPages = getAllPages(fullPath, allPages)
    } else if (/\.mdx?$/.test(filePath)) {
      const source = getSourceOfFile(fullPath)
      const slug = fullPath.replace(CONTENT_PATH, '').replace(/\.mdx?$/, '')
      const { data } = matter(source)

      allPages.push({
        _type: 'page',
        frontmatter: data,
        slug: slug,
      })
    }
  })

  return allPages
}

export const getPage = async slug => {
  console.log('getPage: ', slug)
  const source = getSourceOfFile(path.join(CONTENT_PATH, '/', slug + '.mdx'))

  const { code, frontmatter } = await bundleMDX(source, {
    cwd: CONTENT_PATH,
  })

  return {
    frontmatter,
    code,
  }
}

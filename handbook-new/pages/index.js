import Link from 'next/link'
import { getAllPages } from '../utils/mdx'
import merge from 'lodash.merge'

function renderDirectoryEntries(directorySlug, directoryEntries) {
  return (
    <li key={directorySlug}>
      {renderDirectoryNameFromSlug(directorySlug)}
      <ol>
        {Object.keys(directoryEntries).map((key, index) => {
          const entry = directoryEntries[key]

          if (entry._type === 'dir') {
            return renderDirectoryEntries(key, entry)
          } else if (entry._type === 'page') {
            return renderPageLink(entry)
          }
        })}
      </ol>
    </li>
  )
}

function renderDirectoryNameFromSlug(slug) {
  const name = slug.replace('-', ' ').replace(/\w\S*/g, w => w.replace(/^\w/, c => c.toUpperCase()))
  return <span>{name}</span>
}

function renderPageLink(page) {
  return (
    <li key={page.slug}>
      <Link href={`${page.slug}`}>{page.frontmatter.title}</Link>
    </li>
  )
}

// TODO move to utils
function sortObject(object) {
  var sortedObj = {},
    keys = Object.keys(object)

  keys.sort(function (key1, key2) {
    ;(key1 = key1.toLowerCase()), (key2 = key2.toLowerCase())
    if (key1 < key2) return -1
    if (key1 > key2) return 1
    return 0
  })

  for (var index in keys) {
    var key = keys[index]
    if (typeof object[key] == 'object' && !(object[key] instanceof Array)) {
      sortedObj[key] = sortObject(object[key])
    } else {
      sortedObj[key] = object[key]
    }
  }

  return sortedObj
}

export default function HandbookIndex({ pagesHierarchy }) {
  return (
    <div className="wrapper">
      <h1>Sourcegraph Handbook</h1>
      <ol>{renderDirectoryEntries('', pagesHierarchy)}</ol>
    </div>
  )
}

export const getStaticProps = async () => {
  const allPages = getAllPages()

  let pagesHierarchy = {}

  allPages.forEach(page => {
    const slugParts = page.slug.substring(1).split('/')
    const pageHierarchy = slugParts.reduceRight((value, key) => ({ [key]: value, _type: 'dir' }), page)
    pagesHierarchy = merge(pagesHierarchy, pageHierarchy)
  })

  pagesHierarchy = sortObject(pagesHierarchy)

  return {
    props: { pagesHierarchy },
  }
}

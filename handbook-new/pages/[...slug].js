import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPages, getPage } from '../utils/mdx'

export default function ContentPage({ code, frontmatter = {} }) {
  if (!code) {
    return (
      <div className="wrapper">
        <h1>Loading...</h1>
      </div>
    )
  }

  const Component = React.useMemo(() => getMDXComponent(code), [code])

  return (
    <div className="wrapper">
      <h1>{frontmatter.title}</h1>
      <Component />
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
  const page = await getPage(params.slug.join('/'))

  return {
    props: { ...page },
  }
}

export const getStaticPaths = async () => {
  console.log('static path?')
  const paths = getAllPages().map(({ slug }) => ({ params: { slug: [slug] } }))
  return {
    paths,
    fallback: true,
  }
}

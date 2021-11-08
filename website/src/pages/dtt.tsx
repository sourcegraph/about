import { PageProps } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'
import { PostsList } from '../components/blog/PostsList'
import { BlogType, BLOG_TYPE_TO_INFO, urlToPost } from '../components/blog/postTypes'
import { BlogHeader } from '../components/blog/BlogHeader'
import { FeaturedEpisode } from '../components/blog/FeaturedEpisode'
import { ContentSection } from '../components/content/ContentSection'

export const DttPage: React.FunctionComponent<PageProps<{ allMarkdownRemark: any }>> = props => {
    const posts = props.data.allMarkdownRemark.edges.filter((post: any) => post.node.frontmatter.published === true)
    const postDefaultProps = {
        full: false,
        className: 'posts-list__post card featured-episode',
        headerClassName: 'card-header bg-white border-bottom-0 text-center',
        titleClassName: 'posts-list__post-title',
        titleLinkClassName: 'posts-list__post-title-link',
        tag: 'li',
        renderTitleAsLink: true,
    }
    return (
        <Layout
            location={props.location}
            meta={{
                title: 'Dev Tool Time',
                description:
                    'Sourcegraph engineers interview other devs in the community about their desk set up, favorite dev tools, productivity hacks, and more.',
                image: 'https://about.sourcegraph.com/sourcegraph-og.png',
            }}
        >
            <div className="container-lg">
                <BlogHeader title={'Dev Tool Time'} baseUrl={'/dtt'} />
                <div>
                    <p className="mb-1">
                        Sourcegraph engineers interview other devs in the community about their desk set up, favorite
                        dev tools, productivity hacks, and more.
                    </p>
                    <img src="/dtt_landing_page.jpg" alt="Dev Tool Time logo" style={{ maxWidth: '100%' }} />
                </div>
                <ContentSection className="py-5">
                    {' '}
                    <h2>Recent episodes:</h2>
                    <FeaturedEpisode
                        post={posts[0].node}
                        url={urlToPost(posts[0].node, BLOG_TYPE_TO_INFO[BlogType.DTT])}
                        key={posts[0].node.frontmatter.slug}
                        {...postDefaultProps}
                    />
                    <div className="featured-episode-container">
                        <FeaturedEpisode
                            post={posts[1].node}
                            url={urlToPost(posts[1].node, BLOG_TYPE_TO_INFO[BlogType.DTT])}
                            key={posts[1].node.frontmatter.slug}
                            {...postDefaultProps}
                        />
                        <FeaturedEpisode
                            post={posts[2].node}
                            url={urlToPost(posts[2].node, BLOG_TYPE_TO_INFO[BlogType.DTT])}
                            key={posts[2].node.frontmatter.slug}
                            {...postDefaultProps}
                        />
                    </div>
                </ContentSection>
                <section className="dtt-updates mb-6">
                    <div className="upcoming-episode">Join us for ...</div>
                    <div className="hubspot-form">Hubspot form</div>
                </section>
                <PostsList blogInfo={BLOG_TYPE_TO_INFO[BlogType.DTT]} posts={posts.slice(3, -1)} />
            </div>
        </Layout>
    )
}

export default DttPage

export const pageQuery = graphql`
    query Dtt {
        allMarkdownRemark(
            filter: { frontmatter: { tags: { in: "dtt" } } }
            sort: { fields: [frontmatter___publishDate], order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        description
                        heroImage
                        author
                        authorUrl
                        canonical
                        tags
                        publishDate(formatString: "MMMM D, YYYY")
                        slug
                        published
                        changelogItems {
                            url
                            category
                            description
                        }
                        style
                        youtube
                    }
                    html
                    excerpt(pruneLength: 300)
                    fields {
                        slug
                        permalink
                        blogType
                    }
                    fileAbsolutePath
                }
            }
        }
    }
`

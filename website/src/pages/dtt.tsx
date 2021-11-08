import { PageProps } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'
import { PostsList } from '../components/blog/PostsList'
import { BlogType, BLOG_TYPE_TO_INFO, urlToPost } from '../components/blog/postTypes'
import { BlogHeader } from '../components/blog/BlogHeader'
import { FeaturedEpisode } from '../components/blog/FeaturedEpisode'
import { ContentSection } from '../components/content/ContentSection'
import HubspotForm from '../components/HubspotForm'

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
                        dev tools, productivity hacks, and more. Episodes stream on{' '}
                        <a href="https://www.twitch.tv/sourcegraph">Twitch</a> every other Wednesday at 11AM PT//2PM
                        ET//8PM CEST.
                    </p>
                    {/* Given the profusion dtt logos, we may want to remove this banner. */}
                    {/* <img src="/dtt_landing_page.jpg" alt="Dev Tool Time logo" style={{ maxWidth: '100%' }} /> */}
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
                        <div className="card p-4 hubspot-form">
                            <HubspotForm
                                portalId="2762526"
                                formId="d59f5947-8f58-467b-8609-d095e9d8c9c7"
                                campaignId="013t0000022mdYAAQ"
                            />
                        </div>
                    </div>
                </ContentSection>
                <section>
                    <h2>Other episodes:</h2>
                    <PostsList blogInfo={BLOG_TYPE_TO_INFO[BlogType.DTT]} posts={posts.slice(2, -1)} />
                    <p>
                        You can view the full archive of Dev Tool Time episodes on{' '}
                        <a href="https://www.youtube.com/playlist?list=PL6zLuuRVa1_iDEP4EicZ8972RgyccCRGF">Youtube</a>.
                    </p>
                </section>
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

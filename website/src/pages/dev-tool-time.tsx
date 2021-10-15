import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { ContentPage } from '../components/content/ContentPage'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import { PodcastSubscribeLinks } from '../components/podcast/PodcastSubscribeLinks'
import { PostsListPage } from '../components/blog/PostsListPage'
import { BLOG_TYPE_TO_INFO, BlogType } from '../components/blog/postTypes'

export const Page: React.FunctionComponent<PageProps<{ allMarkdownRemark: any }>> = ({ data, location }) => (
    <PostsListPage
        blogInfo={BLOG_TYPE_TO_INFO[BlogType.Podcast]}
        posts={data.allMarkdownRemark.edges.filter((post: any) => post.node.frontmatter.published === true)}
        location={location}
    ></PostsListPage>
)
const a = () => (
    <Layout
        location={location}
        meta={{
            title: 'Dev Tool Time',
            description: 'Engineers interviewing engineers about their dev tools.',
        }}
        className="navbar-dark bg-black"
    >
        <ContentPage
            title="Dev Tool Time"
            titleClassName="podcast__banner text-white"
            mainActions={
                <div className="d-flex flex-column align-items-center podcast__subbanner text-white">
                    Conversations, stories, and insights from dev tool creators
                </div>
            }
        >
            <ContentSection color="black">
                <div className="podcast">
                    <div className="podcast__subscribe-top">
                        <PodcastSubscribeLinks
                            className="podcast__subscribe"
                            linkClassName="podcast__subscribe-option"
                        />
                    </div>
                    {data.allMarkdownRemark.edges
                        .filter((post: any) => post.node.frontmatter.published === true)
                        .map((episode: any) => (
                            <div key={episode.episode.node.frontmatter.slug} className="podcast__episode">
                                <div className="podcast__title">
                                    <a href={`/podcast/${episode.episode.node.frontmatter.slug}`}>
                                        {episode.episode.node.frontmatter.title}
                                    </a>
                                </div>
                                {episode.html.guestsHTML && (
                                    <div
                                        dangerouslySetInnerHTML={{ __html: episode.html.guestsHTML }}
                                        className="podcast__people"
                                    />
                                )}
                                <div className="podcast__date">{episode.episode.node.frontmatter.publishDate}</div>
                                {episode.html.audioHTML && (
                                    <div
                                        dangerouslySetInnerHTML={{ __html: episode.html.audioHTML }}
                                        className="podcast__player"
                                    />
                                )}
                                <div
                                    dangerouslySetInnerHTML={{ __html: episode.html.summaryHTML }}
                                    className="podcast__description"
                                />
                            </div>
                        ))}
                </div>
            </ContentSection>
        </ContentPage>
    </Layout>
)

export default Page

export const pageQuery = graphql`
    query DTTEpisodes {
        allMarkdownRemark(
            filter: { fields: { blogType: { in: ["dtt"] } } }
            sort: { fields: [frontmatter___publishDate], order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        tags
                        publishDate(formatString: "MMMM D, YYYY")
                        slug
                        published
                    }
                    html
                    excerpt(pruneLength: 300)
                    fields {
                        slug
                        permalink
                        blogType
                    }
                }
            }
        }
    }
`

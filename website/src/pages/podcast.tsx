import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { ContentPage } from '../components/content/ContentPage'
import { ContentSection } from '../components/content/ContentSection'
import Layout from '../components/Layout'
import { PodcastSubscribeLinks } from '../components/podcast/PodcastSubscribeLinks'
import { PostsListPage } from '../components/blog/PostsListPage'
import { BLOG_TYPE_TO_INFO, BlogType } from '../components/blog/postTypes'

interface HTMLParts {
    guestsHTML?: string
    audioHTML?: string
    summaryHTML?: string
    transcriptHTML?: string
    showNotesHTML?: string
}

export function getHTMLParts(html: string): HTMLParts {
    const partsMeta: {
        name: keyof HTMLParts
        start: string
        end: string
    }[] = [
        {
            name: 'audioHTML',
            start: '<!-- START AUDIO -->',
            end: '<!-- END AUDIO -->',
        },
        {
            name: 'guestsHTML',
            start: '<!-- START GUESTS -->',
            end: '<!-- END GUESTS -->',
        },
        {
            name: 'summaryHTML',
            start: '<!-- START SUMMARY -->',
            end: '<!-- END SUMMARY -->',
        },
        {
            name: 'transcriptHTML',
            start: '<!-- START TRANSCRIPT -->',
            end: '<!-- END TRANSCRIPT -->',
        },
        {
            name: 'showNotesHTML',
            start: '<!-- START SHOWNOTES -->',
            end: '<!-- END SHOWNOTES -->',
        },
    ]
    const parts: HTMLParts = {}
    for (const { name, start, end } of partsMeta) {
        if (html.indexOf(start) < 0) {
            continue
        }
        if (html.indexOf(end) < 0) {
            console.error(`Did not find ending sentinel ${end} for section ${name}`)
            continue
        }
        parts[name] = html.substring(html.indexOf(start) + start.length, html.indexOf(end))
    }
    return parts
}

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
            title: 'The Sourcegraph Podcast',
            description: 'Conversations and stories from dev tool creators',
        }}
        className="navbar-dark bg-black"
    >
        <ContentPage
            title="The Podcast🎙"
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
                        .map((episode: any) => ({
                            episode,
                            html: getHTMLParts(episode.node.html),
                        }))
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
                    <div className="podcast__acknowledgements">
                        <h2>Acknowledgements</h2>
                        <p>
                            The voices in the intro segment of the show are (in order of appearance): Edsger Dijkstra,
                            Dennis Ritchie, Grace Hopper, Steve Jobs, Jamie Zawinski, and Steve Ballmer.
                        </p>
                    </div>
                </div>
            </ContentSection>
        </ContentPage>
    </Layout>
)

export default Page

export const pageQuery = graphql`
    query PodcastEpisodes {
        allMarkdownRemark(
            filter: { fields: { blogType: { eq: "podcast" } } }
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

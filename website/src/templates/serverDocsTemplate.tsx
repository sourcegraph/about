import { graphql } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import * as rehypeReact from 'rehype-react'
import ServerDocs from '../components/ServerDocs'
import { ServerVersionNumber } from '../components/ServerVersionNumber'
import { eventLogger } from '../EventLogger'

export default class ServerDocsTemplate extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    private logSelectDockercommand(): void {
        const selection = document.getSelection().toString()
        if (selection.includes('docker run') && !selection.includes('codeintel')) {
            eventLogger.trackInstallServerCommandHighlighted('docs')
        } else if (selection.includes('docker run') && selection.includes('codeintel')) {
            eventLogger.trackInstallCodeIntelligenceCommandHighlighted('docs')
        }
    }

    public componentDidMount(): void {
        if (document) {
            document.getElementsByTagName('body')[0].setAttribute('style', 'background-image:none')
        }

        document.addEventListener('mouseup', this.logSelectDockercommand)

        if ((window as any).docsearch) {
            ;(window as any).docsearch({
                apiKey: 'f1b3c4d15528dfd4b90b8ec2812f39ab',
                indexName: 'sourcegraph',
                inputSelector: '#algolia',
                debug: false, // Set debug to true if you want to inspect the dropdown
            })
        }
    }

    public componentWillUnmount(): void {
        document.removeEventListener('mouseup', this.logSelectDockercommand)
        document.getElementsByTagName('nav')[0].setAttribute('style', 'background-color:transparent')
    }

    private renderAst = new rehypeReact({
        createElement: React.createElement,
        components: { 'server-version-number': ServerVersionNumber },
    }).Compiler

    public render(): JSX.Element | null {
        const md = this.props.data.markdownRemark
        const htmlAst = md.htmlAst
        const excerpt = md.excerpt
        const title = md.frontmatter.title

        return (
            <ServerDocs location={this.props.location}>
                <div className="documentation__markdown">
                    <Helmet>
                        <title>{title}</title>
                        <meta property="og:title" content={title} />
                        <meta name="twitter:title" content={title} />
                        <meta name="twitter:description" content={excerpt} />
                        <meta property="og:description" content={excerpt} />
                        <meta name="description" content={excerpt} />
                    </Helmet>
                    <h1 className="documentation__title">{title}</h1>
                    <hr />
                    <div className="documentation__body">{this.renderAst(htmlAst)}</div>
                </div>
            </ServerDocs>
        )
    }
}

export const pageQuery = graphql`
    query serverDocsTemplate($fileSlug: String) {
        markdownRemark(fields: { slug: { eq: $fileSlug } }) {
            frontmatter {
                title
                permalink
            }
            htmlAst
            excerpt
            fields {
                slug
            }
        }
    }
`

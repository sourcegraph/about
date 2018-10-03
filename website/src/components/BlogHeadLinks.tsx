import Link from 'gatsby-link'
import * as React from 'react'

export default class BlogHeadLinks extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <p>
                <Link to="/blog" activeClassName="blog__link-inactive">
                    <span> The official Sourcegraph blog</span>
                </Link>{' '}
                •
                <Link to="/go" activeClassName="blog__link-inactive">
                    <span> Go conference liveblogs</span>
                </Link>{' '}
                •
                <Link to="/graphql" activeClassName="blog__link-inactive">
                    <span> GraphQL Summit 2017 liveblog</span>
                </Link>
            </p>
        )
    }
}

import { Link } from 'gatsby'
import * as React from 'react'

export default class BlogHeadLinks extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <p>
                <Link to="/blog" activeClassName="blog__link-inactive">
                    <span>Sourcegraph liveblogs</span>
                </Link>{' '}
                •
                <Link to="/go" activeClassName="blog__link-inactive">
                    <span> GopherCon and dotGo</span>
                </Link>{' '}
                •
                <Link to="/graphql" activeClassName="blog__link-inactive">
                    <span> GraphQL Summit 2017</span>
                </Link>
            </p>
        )
    }
}

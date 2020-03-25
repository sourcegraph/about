import { Link } from 'gatsby'
import * as React from 'react'
import { BLOGS } from '../pages/blog'

export default class BlogHeadLinks extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <p>
                <span className="font-weight-bold pr-2">Liveblogs:</span>
                <Link to={BLOGS.StrangeLoop} activeClassName="blog__link-inactive">
                    <span>Strange Loop</span>
                </Link>{' '}
                •{' '}
                <Link to={BLOGS.GopherCon} activeClassName="blog__link-inactive">
                    <span>GopherCon and dotGo</span>
                </Link>{' '}
                •{' '}
                <Link to={BLOGS.GraphQLSummit} activeClassName="blog__link-inactive">
                    <span>GraphQL Summit</span>
                </Link>
            </p>
        )
    }
}

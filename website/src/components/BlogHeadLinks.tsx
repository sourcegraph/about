import { Link } from 'gatsby'
import * as React from 'react'
import { BLOGS } from '../pages/blog'

export default class BlogHeadLinks extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <p>
                <span className="font-weight-bold pr-2">Liveblogs:</span>
                <Link to={BLOGS.StrangeLoop} className="text-light">
                    Strange Loop
                </Link>{' '}
                •{' '}
                <Link to={BLOGS.GopherCon} className="text-light">
                    GopherCon and dotGo
                </Link>{' '}
                •{' '}
                <Link to={BLOGS.GraphQLSummit} className="text-light">
                    GraphQL Summit
                </Link>
            </p>
        )
    }
}

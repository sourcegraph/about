import { Link } from 'gatsby'
import * as React from 'react'
import { BLOGS } from '../../pages/blog'

export default class BlogHeadLinks extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <p>
                <span className="font-weight-bold pr-2">Past liveblogs:</span>
                <Link to={`/${BLOGS.StrangeLoop}`}>Strange Loop</Link> •{' '}
                <Link to={`/${BLOGS.GopherCon}`}>GopherCon and dotGo</Link> •{' '}
                <Link to={`/${BLOGS.GraphQLSummit}`}>GraphQL Summit</Link>
            </p>
        )
    }
}

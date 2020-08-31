import { Link } from 'gatsby'
import * as React from 'react'
import { BlogType, BLOG_TYPE_TO_INFO } from './postTypes'

export default class BlogHeadLinks extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <p>
                <span className="font-weight-bold pr-2">Past liveblogs:</span>
                <Link to={BLOG_TYPE_TO_INFO[BlogType.StrangeLoop].baseUrl}>Strange Loop</Link> •{' '}
                <Link to={BLOG_TYPE_TO_INFO[BlogType.GopherCon].baseUrl}>GopherCon and dotGo</Link> •{' '}
                <Link to={BLOG_TYPE_TO_INFO[BlogType.GraphQLSummit].baseUrl}>GraphQL Summit</Link> •{' '}
                <Link to={BLOG_TYPE_TO_INFO[BlogType.GitHubUniverse].baseUrl}>GitHub Universe</Link>
            </p>
        )
    }
}

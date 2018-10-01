import * as React from 'react'
import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    RedditIcon,
    RedditShareButton,
    TwitterIcon,
    TwitterShareButton,
} from 'react-share'

interface SocialProps {
    url: string
    title: string
}
class SocialLinks extends React.Component<any, any> {
    constructor(props: SocialProps) {
        super(props)
    }

    public render(): JSX.Element | null {
        return (
            <div className="d-flex" style={{ cursor: 'pointer' }}>
                <FacebookShareButton url={this.props.url} quote={this.props.title}>
                    <FacebookIcon size={48} />
                </FacebookShareButton>
                &nbsp;
                <TwitterShareButton url={this.props.url} title={this.props.title}>
                    <TwitterIcon size={48} />
                </TwitterShareButton>
                &nbsp;
                <LinkedinShareButton url={this.props.url} title={this.props.title}>
                    <LinkedinIcon size={48} />
                </LinkedinShareButton>
                &nbsp;
                <RedditShareButton url={this.props.url} title={this.props.title}>
                    <RedditIcon size={48} />
                </RedditShareButton>
            </div>
        )
    }
}

export default SocialLinks

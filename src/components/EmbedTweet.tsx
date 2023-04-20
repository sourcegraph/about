import React, { FunctionComponent } from 'react'

import classNames from 'classnames'
import Script from 'next/script'

/**
 * Props for the TwitterEmbed component.
 */
interface Props {
    /** The ID of the tweet to embed. */
    tweetId: string
    /** Whether to use the dark theme. Default to true */
    dark?: boolean
    /** Additional class name(s) for the component. */
    className?: string
}

/**
 * A component that embeds a tweet from Twitter.
 */
export const TwitterEmbed: FunctionComponent<Props> = ({ tweetId, className, dark = true }) => {
    const theme = dark ? 'dark' : 'light'

    return (
        <>
            {/* Load the Twitter widgets script */}
            <Script id="tweeter_widget" async={true} src="https://platform.twitter.com/widgets.js" />

            <div className={classNames(className)}>
                <blockquote className="twitter-tweet" data-theme={theme}>
                    {/* Link to the tweet on Twitter */}
                    <a href={`https://twitter.com/twitter/status/${tweetId}`}> </a>
                </blockquote>
            </div>
        </>
    )
}

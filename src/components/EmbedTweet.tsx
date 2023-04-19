import React, { FunctionComponent } from 'react'

import classNames from 'classnames'

interface Props {
    tweetId: string
    dark?: boolean
    className?: string
}

export const TwitterEmbed: FunctionComponent<Props> = ({ tweetId, className, dark = true }) => {
    const theme = dark ? 'dark' : 'light'

    return (
        <div className={classNames(className)}>
            <blockquote className='twitter-tweet' data-theme={theme}>
                <a href={`https://twitter.com/twitter/status/${tweetId}`}> </a>
            </blockquote>
        </div>
    )
}

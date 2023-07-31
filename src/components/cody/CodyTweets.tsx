import { FunctionComponent } from 'react'

import { EmbeddedTweet, TweetSkeleton } from 'react-tweet'
import { Tweet } from 'react-tweet/api'

export const CodyTweets: FunctionComponent<{ tweets: (Tweet | undefined)[] }> = ({ tweets = [] }) => (
    <div className="relative mt-10 grid w-full grid-cols-1 gap-x-6 md:grid-cols-2">
        <div className="relative grid auto-rows-min grid-cols-1">
            <div className="mb-1 flex justify-center xl:-mr-[80px]">
                {tweets[0] ? <EmbeddedTweet key={tweets[0].id_str} tweet={tweets[0]} /> : <TweetSkeleton />}
            </div>
        </div>
        <div className="relative grid auto-rows-min grid-cols-1">
            <div className="mb-1 -mt-[30px] flex justify-center md:mt-0 xl:-ml-[80px]">
                {tweets[1] ? <EmbeddedTweet key={tweets[1].id_str} tweet={tweets[1]} /> : <TweetSkeleton />}
            </div>
            <div className="-mt-[30px] flex justify-center xl:-ml-[80px]">
                {tweets[2] ? <EmbeddedTweet key={tweets[2].id_str} tweet={tweets[2]} /> : <TweetSkeleton />}
            </div>
        </div>
    </div>
)

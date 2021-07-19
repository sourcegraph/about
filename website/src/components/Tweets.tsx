import * as React from 'react'

export const Tweets: React.FunctionComponent<any> = props => (
    <div className="tweets row">
        <div className="col-md-4">
            <blockquote className="twitter-tweet" data-lang="en">
                <p lang="en" dir="ltr">
                    Our engineers loved <a href="https://twitter.com/sourcegraph?ref_src=twsrc%5Etfw">@sourcegraph</a> so much
                    that we decided to make it the singular supported tool at Yelp for{' '}
                    <a href="https://twitter.com/hashtag/codesearch?src=hash&amp;ref_src=twsrc%5Etfw">#codesearch</a>{' '}
                    and viewing 🤩: <a href="https://bit.ly/2pEko0o">https://bit.ly/2pEko0o</a>
                </p>
                &mdash; YelpEngineering (@YelpEngineering){' '}
                <a href="https://twitter.com/YelpEngineering/status/1191460849162113024?ref_src=twsrc%5Etfw">
                    November 4, 2019
                </a>
            </blockquote>
        </div>
        <div className="col-md-4">
            <blockquote className="twitter-tweet" data-lang="en" data-cards="hidden">
                <p lang="en" dir="ltr">
                    Learning a new code base using @sourcegraph <a href="https://twitter.com/sourcegraph">@sourcegraph</a> is
                    extra dope! <a href="https://sourcegraph.com">{'https://sourcegraph.com'}</a>
                </p>
                &mdash; Kelsey Hightower (@kelseyhightower){' '}
                <a href="https://twitter.com/kelseyhightower/status/791084672797122561/">October 25, 2016</a>
            </blockquote>
        </div>
        <div className="col-md-4">
            <blockquote className="twitter-tweet">
                <p lang="en" dir="ltr">
                    No code search tool I&#39;ve used can hold a candle to{' '}
                    <a href="https://twitter.com/sourcegraph?ref_src=twsrc%5Etfw">@sourcegraph</a>. Makes jumping around code
                    and sharing code references so easy. Blazing fast, even for{' '}
                    <a href="https://twitter.com/hashtag/Kubernetes?src=hash&amp;ref_src=twsrc%5Etfw">#Kubernetes</a>.
                </p>
                &mdash; Matt Kelly (@mattkellyeng){' '}
                <a href="https://twitter.com/mattkellyeng/status/1116684521481691136?ref_src=twsrc%5Etfw">
                    April 12, 2019
                </a>
            </blockquote>
        </div>
    </div>
)

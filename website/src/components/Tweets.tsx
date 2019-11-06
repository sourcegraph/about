import * as React from 'react'

export const Tweets: React.FunctionComponent<any> = props => (
    <div className="tweets row">
        <div className="col-md-4">
            <blockquote className="twitter-tweet" data-lang="en">
                <p lang="en" dir="ltr">
                    Our engineers loved <a href="https://twitter.com/srcgraph?ref_src=twsrc%5Etfw">@srcgraph</a> so much that we decided to make it the singular supported tool at Yelp for <a href="https://twitter.com/hashtag/codesearch?src=hash&amp;ref_src=twsrc%5Etfw">#codesearch</a> and viewing 🤩: <a href="https://bit.ly/2pEko0o">https://bit.ly/2pEko0o</a>
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
                    Learning a new code base using @srcgraph <a href="https://twitter.com/srcgraph">@srcgraph</a> is
                    extra dope! <a href="https://sourcegraph.com">{'https://sourcegraph.com'}</a>
                </p>
                &mdash; Kelsey Hightower (@kelseyhightower){' '}
                <a href="https://twitter.com/kelseyhightower/status/791084672797122561/">October 25, 2016</a>
            </blockquote>
        </div>
        <div className="col-md-4">
            <blockquote className="twitter-tweet" data-lang="en">
                <p lang="en" dir="ltr">
                    I prefer sourcegraph&#39;s search and code browsing to native github. Yeah, I said it.
                </p>
                &mdash; ⚑😀 4A4D42 😀⚑ (@josebiro){' '}
                <a href="https://twitter.com/josebiro/status/1104430013565136898?ref_src=twsrc%5Etfw">March 9, 2019</a>
            </blockquote>
        </div>
    </div>
)

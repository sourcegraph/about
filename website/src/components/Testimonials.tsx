import * as React from 'react'

export const Testimonials: React.FunctionComponent<any> = props => (
    <div className="testimonials row">
        <div className="col-md-4">
            <blockquote className="twitter-tweet" data-lang="en">
                <p lang="en" dir="ltr">
                    I prefer sourcegraph&#39;s search and code browsing to native github. Yeah, I said it.
                </p>
                &mdash; ⚑😀 4A4D42 😀⚑ (@josebiro){' '}
                <a href="https://twitter.com/josebiro/status/1104430013565136898?ref_src=twsrc%5Etfw">March 9, 2019</a>
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
                    Viewing <a href="https://twitter.com/hashtag/golang?src=hash&amp;ref_src=twsrc%5Etfw">#golang</a>{' '}
                    code on <a href="https://twitter.com/github?ref_src=twsrc%5Etfw">@GitHub</a> with{' '}
                    <a href="https://twitter.com/srcgraph?ref_src=twsrc%5Etfw">@srcgraph</a> is delightful. ✨
                </p>
                &mdash; Paulo L F Casaretto (@pcasaretto){' '}
                <a href="https://twitter.com/pcasaretto/status/956634549047451648?ref_src=twsrc%5Etfw">
                    January 25, 2018
                </a>
            </blockquote>
        </div>
    </div>
)

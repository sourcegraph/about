import * as React from 'react'

export default class HomepageCarousel extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }
    public render(): JSX.Element | null {
        return (
            <div className="carousel slide" data-ride="carousel" id="carousel-1">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="carousel-item-container" style={{ display: 'flex', justifyContent: 'center' }}>
                            <blockquote className="twitter-tweet" data-lang="en" data-cards="hidden">
                                <p lang="en" dir="ltr">
                                    Learning a new code base using @srcgraph{' '}
                                    <a href="https://twitter.com/srcgraph">@srcgraph</a> is extra dope!{' '}
                                    <a href="https://sourcegraph.com">{'https://sourcegraph.com'}</a>
                                </p>
                                &mdash; Kelsey Hightower (@kelseyhightower){' '}
                                <a href="https://twitter.com/kelseyhightower/status/791084672797122561/">
                                    October 25, 2016
                                </a>
                            </blockquote>
                            <blockquote className="twitter-tweet" data-lang="en">
                                <p lang="en" dir="ltr">
                                    Sourcegraph is amazing. It runs in your browser and integrates with GitHub. Demo:{' '}
                                    <a href="https://t.co/x6VN4KwWFl">{'https://t.co/x6VN4KwWFl'}</a>
                                </p>
                                &mdash; Federico Cargnelutti (@fedecarg){' '}
                                <a href="https://twitter.com/fedecarg/status/889629274155737088?ref_src=twsrc%5Etfw">
                                    July 24, 2017
                                </a>
                            </blockquote>
                            <blockquote className="twitter-tweet" data-lang="en">
                                <p lang="en" dir="ltr">
                                    Has this been said enough? The best engineering company of 2017 and early 2018 has
                                    got to be Sourcegraph. Way to improve the world for all engineers &lt;3{' '}
                                    <a href="https://twitter.com/srcgraph?ref_src=twsrc%5Etfw">@srcgraph</a>
                                </p>
                                &mdash; Grayson Koonce (@breerly){' '}
                                <a href="https://twitter.com/breerly/status/979828134139719680?ref_src=twsrc%5Etfw">
                                    March 30, 2018
                                </a>
                            </blockquote>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-item-container" style={{ display: 'flex', justifyContent: 'center' }}>
                            <blockquote className="twitter-tweet" data-lang="en">
                                <p lang="en" dir="ltr">
                                    <a href="https://twitter.com/srcgraph?ref_src=twsrc%5Etfw">@srcgraph</a> makes
                                    browsing of java source code easy on{' '}
                                    <a href="https://twitter.com/hashtag/GitHub?src=hash&amp;ref_src=twsrc%5Etfw">
                                        #Github
                                    </a>
                                    . For example, I really like &#39;Find References&#39; feature! No need for text
                                    search or download code in local IDE. 👍 Thanks{' '}
                                    <a href="https://twitter.com/srcgraph?ref_src=twsrc%5Etfw">@srcgraph</a>!{' '}
                                    <a href="https://twitter.com/hashtag/SourceGraph?src=hash&amp;ref_src=twsrc%5Etfw">
                                        #SourceGraph
                                    </a>
                                </p>
                                &mdash; Manik Magar (@ManikMagar){' '}
                                <a href="https://twitter.com/ManikMagar/status/978811837893537792?ref_src=twsrc%5Etfw">
                                    March 28, 2018
                                </a>
                            </blockquote>
                            <blockquote
                                className="twitter-tweet"
                                data-cards="hidden"
                                data-lang="en"
                                data-conversation="none"
                            >
                                <p lang="en" dir="ltr">
                                    {' '}
                                    <a href="https://twitter.com/srcgraph">@srcgraph</a> is amazing when you're dealing
                                    with a lot of codebases 🙏🏻
                                </p>
                                &mdash; Willem Spruijt 👨🏻‍💻 (@wspruijt){' '}
                                <a href="https://twitter.com/wspruijt/status/1022448400145555463">July 26, 2018</a>
                            </blockquote>
                            <blockquote className="twitter-tweet" data-lang="en">
                                <p lang="en" dir="ltr">
                                    Been using <a href="https://twitter.com/srcgraph?ref_src=twsrc%5Etfw">@srcgraph</a>{' '}
                                    to navigate github projects for the last few weeks. How did I ever navigate repos
                                    without it? Great work &amp; thanks for putting me on{' '}
                                    <a href="https://twitter.com/nickdsnyder?ref_src=twsrc%5Etfw">@nickdsnyder</a>
                                </p>
                                &mdash; Joshua Manns (@joshuamanns){' '}
                                <a href="https://twitter.com/joshuamanns/status/936662460597022720?ref_src=twsrc%5Etfw">
                                    December 1, 2017
                                </a>
                            </blockquote>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="carousel-item-container" style={{ display: 'flex', justifyContent: 'center' }}>
                            <blockquote className="twitter-tweet" data-lang="en">
                                <p lang="en" dir="ltr">
                                    The worst thing about debugging this problem is that this problem took out the{' '}
                                    <a href="https://twitter.com/srcgraph?ref_src=twsrc%5Etfw">@srcgraph</a> instance so
                                    now I have to use grep like a madman.
                                </p>
                                &mdash; Terin Stock (@terinjokes){' '}
                                <a href="https://twitter.com/terinjokes/status/973243745104576512?ref_src=twsrc%5Etfw">
                                    March 12, 2018
                                </a>
                            </blockquote>
                            <blockquote
                                className="twitter-tweet"
                                data-cards="hidden"
                                data-lang="en"
                                data-conversation="none"
                            >
                                <p lang="en" dir="ltr">
                                    {' '}
                                    <a href="https://twitter.com/srcgraph">@srcgraph</a> Sourcegraph, a must have for
                                    the developers!
                                </p>
                                &mdash; Sheng Yang (@yasker){' '}
                                <a href="https://twitter.com/yasker/status/1025793346785005568">August 4, 2018</a>
                            </blockquote>
                            <blockquote className="twitter-tweet" data-lang="en">
                                <p lang="en" dir="ltr">
                                    Viewing{' '}
                                    <a href="https://twitter.com/hashtag/golang?src=hash&amp;ref_src=twsrc%5Etfw">
                                        #golang
                                    </a>{' '}
                                    code on <a href="https://twitter.com/github?ref_src=twsrc%5Etfw">@GitHub</a> with{' '}
                                    <a href="https://twitter.com/srcgraph?ref_src=twsrc%5Etfw">@srcgraph</a> is
                                    delightful. ✨
                                </p>
                                &mdash; Paulo L F Casaretto (@pcasaretto){' '}
                                <a href="https://twitter.com/pcasaretto/status/956634549047451648?ref_src=twsrc%5Etfw">
                                    January 25, 2018
                                </a>
                            </blockquote>
                        </div>
                    </div>
                    <div>
                        <a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" />
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

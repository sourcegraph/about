import { Link } from 'gatsby'
import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import YouTubeIcon from 'mdi-react/YoutubeIcon'
import TwitchIcon from 'mdi-react/TwitchIcon'
import SpotifyIcon from 'mdi-react/SpotifyIcon'
import * as React from 'react'

export const Footer: React.FunctionComponent<{ minimal?: boolean }> = ({ minimal }) => (
    <footer className={`${minimal ? '' : 'pt-6 pb-2'}`}>
        <div className="footer__container container">
            {!minimal && (
                <React.Fragment>
                    <div className="row footer__nav-sections">
                        <div className="col-sm-6 col-md-3 col-lg-2 mt-3 mb-3 order-md-2">
                            <h3 className="footer__nav-header">About Sourcegraph</h3>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to="/case-studies">Case studies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/customers">Customers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/pricing">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://info.sourcegraph.com/hubfs/CTA%20assets/Sourcegraph-overview.pdf"
                                        target="_blank"
                                        rel="noopener"
                                        className="bigCode"
                                    >
                                        Sourcegraph overview (PDF)
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-2 mt-3 mb-3 order-md-3">
                            <h3 className="footer__nav-header">Resources</h3>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md">
                                        Changelog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://docs.sourcegraph.com">Documentation</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/podcast">Podcast</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="https://info.sourcegraph.com/emergence-of-big-code-2020-survey">Big code survey</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://open.spotify.com/user/p3ntuomfda8r7czdbsgy36ogk?si=8095204aefc24587">Sourcegraph Radio</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 col-lg-2 mt-3 mb-3 order-md-4">
                            <h3 className="footer__nav-header">Company</h3>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="https://boards.greenhouse.io/sourcegraph91">Careers - We're Hiring!</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/handbook">Handbook</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/news">News</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/handbook/company/strategy">Sourcegraph strategy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-lg-3 mb-5 order-md-1">
                            <Link className="row footer__logo ml-1" to="/">
                                <span role="img" aria-label="Sourcegraph - Universal code search">
                                    {' '}
                                </span>
                            </Link>
                            <ul className="nav footer__social mt-1">
                                <li className="nav-item">
                                    <a
                                        href="https://github.com/sourcegraph"
                                        target="_blank"
                                        rel="nofollow noopener"
                                        aria-label="GitHub"
                                    >
                                        <GithubIcon />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://twitter.com/sourcegraph"
                                        target="_blank"
                                        rel="nofollow noopener"
                                        aria-label="Twitter"
                                    >
                                        <TwitterIcon />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://www.linkedin.com/company/4803356/"
                                        target="_blank"
                                        rel="nofollow noopener"
                                        aria-label="LinkedIn"
                                    >
                                        <LinkedinIcon />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://www.youtube.com/c/Sourcegraph/featured"
                                        target="_blank"
                                        rel="nofollow noopener"
                                        aria-label="YouTube"
                                    >
                                        <YouTubeIcon />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://www.twitch.tv/sourcegraph"
                                        target="_blank"
                                        rel="nofollow noopener"
                                        aria-label="Twitch"
                                    >
                                        <TwitchIcon />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://open.spotify.com/user/p3ntuomfda8r7czdbsgy36ogk?si=8095204aefc24587"
                                        target="_blank"
                                        rel="nofollow noopener"
                                        aria-label="Spotify"
                                    >
                                        <SpotifyIcon />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </React.Fragment>
            )}
            <div className="footer__postscript d-flex justify-content-between pt-4 pb-2 small">
                <ul className="nav">
                    <li className="nav-item text-muted mr-3">&copy; 2021 Sourcegraph</li>
                    <li className="nav-item">
                        <Link to="/terms" className="nav-link">
                            Terms
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/security" className="nav-link">
                            Security
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/privacy" className="nav-link">
                            Privacy
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
)

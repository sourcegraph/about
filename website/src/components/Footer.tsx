import { Link } from 'gatsby'
import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import YouTubeIcon from 'mdi-react/YoutubeIcon'
import TwitchIcon from 'mdi-react/TwitchIcon'
import SpotifyIcon from 'mdi-react/SpotifyIcon'
import React, { FunctionComponent } from 'react'

interface Props {
    minimal?: boolean
    className?: string
}

export const Footer: FunctionComponent<Props> = ({ minimal, className }) => (
    <footer className={`flex-shrink-0 ${minimal ? '' : 'pt-6 pb-2'} ${className || ''}`}>
        <div className="container-xl">
            {!minimal && (
                <>
                    <div className="row footer__nav-sections">
                        <div className="col-sm-6 col-md-3 col-lg-2 mt-3 mb-3 order-md-2">
                            <h3 className="footer__nav-header">About Sourcegraph</h3>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link to="/case-studies">Case studies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/use-cases">Use cases</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/pricing">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://info.sourcegraph.com/hubfs/CTA%20assets/Sourcegraph-overview.pdf"
                                        target="_blank"
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
                                    <a href="https://learn.sourcegraph.com">Learn</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/podcast">Podcast</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/dev-tools-quiz">Dev tools quiz</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/community">Community</Link>
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
                                    <a href="/jobs">Careers - We're Hiring!</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="https://handbook.sourcegraph.com">Handbook</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/news">News</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="https://handbook.sourcegraph.com/company/strategy">Sourcegraph strategy</a>
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
                </>
            )}
            <div className="footer__postscript d-flex justify-content-between py-3 small">
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

import { FunctionComponent } from 'react'

import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import SpotifyIcon from 'mdi-react/SpotifyIcon'
import TwitchIcon from 'mdi-react/TwitchIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import YouTubeIcon from 'mdi-react/YoutubeIcon'
import Link from 'next/link'

interface Props {
    minimal?: boolean
    className?: string
}

const Footer: FunctionComponent<Props> = ({ minimal, className }) => (
    <footer className={`${minimal ? '' : 'pt-6 pb-2'} ${className || ''}`}>
        <div className="container-xl">
            {!minimal && (
                <>
                    <div className="row footer__nav-sections">
                        <div className="col-sm-6 col-md-3 col-lg-2 mt-3 mb-3 order-md-2">
                            <h3 className="footer__nav-header">About Sourcegraph</h3>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link href="/case-studies">Case studies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/use-cases">Use cases</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/pricing">Pricing</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/handouts/Sourcegraph-Overview.pdf">Sourcegraph overview (PDF)</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm-6 col-md-3 col-lg-2 mt-3 mb-3 order-md-3">
                            <h3 className="footer__nav-header">Resources</h3>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link href="/blog">Blog</Link>
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
                                    <Link href="/podcast">Podcast</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/dev-tools-quiz">Dev tools quiz</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/community">Community</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-sm-6 col-md-3 col-lg-2 mt-3 mb-3 order-md-4">
                            <h3 className="footer__nav-header">Company</h3>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link href="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/jobs">Careers - We're Hiring!</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="https://handbook.sourcegraph.com">Handbook</a>
                                </li>
                                <li className="nav-item">
                                    <Link href="/news">News</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="https://handbook.sourcegraph.com/company/strategy">Sourcegraph strategy</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 col-lg-3 mb-5 order-md-1">
                            <Link href="/" passHref={true}>
                                <a href="#none" className="row footer__logo ml-1 ">
                                    <span role="img" aria-label="Sourcegraph - Universal code search">
                                        {' '}
                                    </span>
                                </a>
                            </Link>

                            <ul className="nav footer__social mt-1">
                                <li className="nav-item">
                                    <a
                                        href="https://github.com/sourcegraph"
                                        target="_blank"
                                        rel="nofollow noreferrer"
                                        aria-label="GitHub"
                                    >
                                        <GithubIcon />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://twitter.com/sourcegraph"
                                        target="_blank"
                                        rel="nofollow noreferrer"
                                        aria-label="Twitter"
                                    >
                                        <TwitterIcon />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://www.linkedin.com/company/4803356/"
                                        target="_blank"
                                        rel="nofollow noreferrer"
                                        aria-label="LinkedIn"
                                    >
                                        <LinkedinIcon />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://www.youtube.com/c/Sourcegraph/featured"
                                        target="_blank"
                                        rel="nofollow noreferrer"
                                        aria-label="YouTube"
                                    >
                                        <YouTubeIcon />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://www.twitch.tv/sourcegraph"
                                        target="_blank"
                                        rel="nofollow noreferrer"
                                        aria-label="Twitch"
                                    >
                                        <TwitchIcon />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        href="https://open.spotify.com/user/p3ntuomfda8r7czdbsgy36ogk?si=8095204aefc24587"
                                        target="_blank"
                                        rel="nofollow noreferrer"
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

            <div
                className={`footer__postscript d-flex justify-content-between ${minimal ? 'py-3' : 'pt-4 pb-2'} small`}
            >
                <ul className="nav">
                    <li className="nav-item text-muted mr-3">&copy; {new Date().getFullYear()} Sourcegraph</li>
                    <li className="nav-item">
                        <Link href="/terms" passHref={true}>
                            <a href="#none" className="nav-link">
                                Terms
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/security" passHref={true}>
                            <a href="#none" className="nav-link">
                                Security
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/privacy" passHref={true}>
                            <a href="#none" className="nav-link">
                                Privacy
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
)

export default Footer

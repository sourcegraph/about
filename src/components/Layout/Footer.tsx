import { FunctionComponent } from 'react'

import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import SpotifyIcon from 'mdi-react/SpotifyIcon'
import TwitchIcon from 'mdi-react/TwitchIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import YouTubeIcon from 'mdi-react/YoutubeIcon'
import Link from 'next/link'

import { buttonStyle, buttonLocation } from '@data'

interface Props {
    minimal?: boolean
    className?: string
}

const Footer: FunctionComponent<Props> = ({ minimal, className }) => (
    <footer className={`${minimal ? '' : 'pt-6 pb-2'} ${className || ''}`}>
        <div className="container-xl">
            {!minimal && (
                <div className="row footer__nav-sections">
                    <div className="col-sm-6 col-md-3 col-lg-2 mb-3 order-md-2">
                        <h3 className="footer__nav-header text-lg font-weight-bold">About Sourcegraph</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link href="/use-cases" passHref={true}>
                                    <a
                                        href="#none"
                                        title="Use cases"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.footer}
                                        data-button-type="cta"
                                    >
                                        Use cases
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/case-studies" passHref={true}>
                                    <a
                                        href="#none"
                                        title="Case studies"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.footer}
                                        data-button-type="cta"
                                    >
                                        Case studies
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/pricing" passHref={true}>
                                    <a
                                        href="#none"
                                        title="Pricing"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.footer}
                                        data-button-type="cta"
                                    >
                                        Pricing
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/handouts/Sourcegraph-Overview.pdf" passHref={true}>
                                    <a
                                        href="#none"
                                        title="Sourcegraph overview"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.footer}
                                        data-button-type="cta"
                                    >
                                        Sourcegraph overview
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-2 mb-3 order-md-3">
                        <h3 className="footer__nav-header text-lg font-weight-bold">Resources</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link href="/blog" passHref={true}>
                                    <a
                                        href="#none"
                                        title="Blog"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.footer}
                                        data-button-type="cta"
                                    >
                                        Blog
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md"
                                    title="Changelog"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.footer}
                                    data-button-type="cta"
                                >
                                    Changelog
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="https://docs.sourcegraph.com"
                                    title="Documentation"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.footer}
                                    data-button-type="cta"
                                >
                                    Documentation
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="https://learn.sourcegraph.com"
                                    title="Learn"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.footer}
                                    data-button-type="cta"
                                >
                                    Learn
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link href="/podcast" passHref={true}>
                                    <a
                                        href="#none"
                                        title="Podcast"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.footer}
                                        data-button-type="cta"
                                    >
                                        Podcast
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/dev-tools-quiz" passHref={true}>
                                    <a
                                        href="#none"
                                        title="Dev tools quiz"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.footer}
                                        data-button-type="cta"
                                    >
                                        Dev tools quiz
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/community">
                                    <a
                                        href="#none"
                                        title="Community"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.footer}
                                        data-button-type="cta"
                                    >
                                        Community
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-2 mb-3 order-md-4">
                        <h3 className="footer__nav-header text-lg font-weight-bold">Company</h3>
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
                                <a
                                    href="https://handbook.sourcegraph.com"
                                    title="Handbook"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.footer}
                                    data-button-type="cta"
                                >
                                    Handbook
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link href="/news">News</Link>
                            </li>
                            <li className="nav-item">
                                <a
                                    href="https://handbook.sourcegraph.com/company/strategy"
                                    title="Sourcegraph strategy"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.footer}
                                    data-button-type="cta"
                                >
                                    Sourcegraph strategy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 col-lg-3 mb-5 order-md-1">
                        <Link href="/" passHref={true}>
                            <a
                                href="#none"
                                className="row footer__logo ml-1"
                                title="Sourcegraph - Universal code search"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.footer}
                                data-button-type="cta"
                            >
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
                                    title="GitHub"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.footer}
                                    data-button-type="cta"
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
                                    title="Twitter"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.footer}
                                    data-button-type="cta"
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
                                    title="LinkedIn"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.footer}
                                    data-button-type="cta"
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
                                    title="Youtube"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.footer}
                                    data-button-type="cta"
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
                                    title="Twitch"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.footer}
                                    data-button-type="cta"
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
                                    title="Spotify"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.footer}
                                    data-button-type="cta"
                                >
                                    <SpotifyIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}

            <div
                className={`footer__postscript d-flex justify-content-between ${minimal ? 'py-3' : 'pt-4 pb-2'} small`}
            >
                <ul className="nav">
                    <li className="nav-item mr-3">&copy; {new Date().getFullYear()} Sourcegraph</li>
                    <li className="nav-item">
                        <Link href="/terms" passHref={true}>
                            <a
                                href="#none"
                                className="nav-link text-gray-5"
                                title="Terms"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.footer}
                                data-button-type="cta"
                            >
                                Terms
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/terms/security" passHref={true}>
                            <a
                                href="#none"
                                className="nav-link text-gray-5"
                                title="Security"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.footer}
                                data-button-type="cta"
                            >
                                Security
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/terms/privacy" passHref={true}>
                            <a
                                href="#none"
                                className="nav-link text-gray-5"
                                title="Privacy"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.footer}
                                data-button-type="cta"
                            >
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

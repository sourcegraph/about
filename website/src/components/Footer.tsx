import { Link } from 'gatsby'
import GitHubCircleIcon from 'mdi-react/GithubCircleIcon'
import LinkedinIcon from 'mdi-react/LinkedinBoxIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import * as React from 'react'
import { PRODUCT_FEATURES, PRODUCT_USE_CASES } from './ProductPopover'

export const Footer: React.FunctionComponent<{ minimal?: boolean }> = ({ minimal }) => (
    <footer className="footer pt-6 pb-2">
        <div className="footer__container container">
            {!minimal && (
                <div className="row footer__nav-sections">
                    <div className="col-12 col-lg-3 mb-5">
                        <Link to="/">
                            <img className="footer__logo" src="/sourcegraph/logo--light.svg" />
                        </Link>
                        <ul className="nav footer__social mt-1">
                            <li className="nav-item">
                                <a href="https://github.com/sourcegraph" target="_blank">
                                    <GitHubCircleIcon />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://twitter.com/srcgraph" target="_blank">
                                    <TwitterIcon />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.linkedin.com/company/4803356/" target="_blank">
                                    <LinkedinIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                        <h3 className="footer__nav-header">Why Sourcegraph?</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/product">What is a developer platform?</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/pricing">Pricing</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                        <h3 className="footer__nav-header">Features &amp; use cases</h3>
                        <ul className="nav flex-column">
                            {PRODUCT_FEATURES.map(({ text, to }, i) => (
                                <li key={i} className="nav-item">
                                    <Link to={to}>{text}</Link>
                                </li>
                            ))}
                            {PRODUCT_USE_CASES.map(({ text, to }, i) => (
                                <li key={i} className="nav-item">
                                    <Link to={to}>{text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                        <h3 className="footer__nav-header">Resources</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a href="https://docs.sourcegraph.com">Documentation</a>
                            </li>
                            <li className="nav-item">
                                <a href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md">
                                    Changelog
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                        <h3 className="footer__nav-header">Company</h3>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link to="/plan">Master plan</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <a href="/handbook">Handbook</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/jobs">Careers</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            <div className="footer__postscript d-flex justify-content-between pt-4 pb-2 small">
                <ul className="nav">
                    <li className="nav-item text-muted mr-3">Copyright &copy; 2019 Sourcegraph</li>
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

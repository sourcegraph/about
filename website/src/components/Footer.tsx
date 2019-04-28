import { Link } from 'gatsby'
import * as React from 'react'

export const Footer: React.FunctionComponent<any> = () => (
    <footer className="footer pt-6 pb-2">
        <div className="footer__container container">
            <div className="row footer__nav-sections">
                <div className="col-12 col-lg-3 mb-5">
                    <Link to="/">
                        <img className="footer__logo" src="/sourcegraph/logo--light.svg" />
                    </Link>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                    <h3 className="footer__nav-header">Product</h3>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a href="https://docs.sourcegraph.com/user/search">Code search</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://docs.sourcegraph.com/extensions">Code intelligence &amp; extensions</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://docs.sourcegraph.com/integration">Integrations</a>
                        </li>
                        <li className="nav-item">
                            <a href="https://about.sourcegraph.com/pricing">Enterprise</a>
                        </li>
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
                            <Link to="/pricing">Pricing</Link>
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
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/jobs">Careers</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-3 col-lg-2 mb-3">
                    <h3 className="footer__nav-header">Community</h3>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a href="https://github.com/sourcegraph" target="_blank">
                                GitHub
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <a href="https://twitter.com/srcgraph" target="_blank">
                                Twitter
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="https://www.linkedin.com/company/4803356/" target="_blank">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__postscript d-flex justify-content-between py-2 small">
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

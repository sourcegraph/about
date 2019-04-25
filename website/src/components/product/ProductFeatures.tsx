import { Link } from 'gatsby'
import React from 'react'

export const ProductFeatures: React.FunctionComponent<{}> = () => (
    <div className="product-features__feature-block py-2">
        <div className="container">
            <div className="row">
                <div className="col-md-6 product-features__deploy-card" id="search-datacenter">
                    <div className="product-features__deploy-card-detail">
                        <div className="icon">
                            <figure className="search-icon" />
                        </div>
                        <div className="copy">
                            <h3>Grok your code</h3>
                            <p>
                                Search and navigate across all of your code, with instant querying, "Go to definition"
                                and "Find references" across repositories and dependencies.{' '}
                                <Link to="/product/code-search-navigation">Learn more &raquo;</Link>
                            </p>
                        </div>
                    </div>
                    <div className="product-features__deploy-card-detail">
                        <div className="icon">
                            <figure className="dc-icon" />
                        </div>
                        <div className="copy">
                            <h3 />
                            <p>
                                As you grow to hundreds or thousands of users and repositories, graduate from the
                                single-server deployment to a highly scalable cluster with Sourcegraph Enterprise.{' '}
                                <Link to="/product/code-search-navigation">Learn more &raquo;</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 product-features__deploy-card" id="intelligence-integrations">
                    <div className="product-features__deploy-card-detail">
                        <div className="icon">
                            <figure className="ci-icon" />
                        </div>
                        <div className="copy">
                            <h3>All your code, available in one place</h3>
                            <p>
                                10,000s of repositories, all branches and commits, all programming languages, any code
                                host&mdash;all of your code works on Sourcegraph.{' '}
                                <Link to="/product/code-search-navigation">Learn more &raquo;</Link>
                            </p>
                        </div>
                    </div>
                    <div className="product-features__deploy-card-detail">
                        <div className="icon">
                            <figure className="int-icon" />
                        </div>
                        <div className="copy">
                            <h3>Integrates into your workflow</h3>
                            <p>
                                Get hovers and code navigation on files and code reviews right inside GitHub, GitHub
                                Enterprise, GitLab, Bitbucket Server, and Phabricator. Search code from your editor,
                                browser, or command line.{' '}
                                <Link to="/product/code-search-navigation">Learn more &raquo;</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

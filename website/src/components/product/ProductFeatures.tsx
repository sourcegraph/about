import { Link } from 'gatsby'
import React from 'react'

export const ProductFeatures: React.FunctionComponent<{}> = () => (
    <div className="product-features product-features__feature-block py-2">
        <div className="container">
            <div className="product-features__deploy-card-detail">
                <div className="icon">
                    <figure className="search-icon" />
                </div>
                <div className="copy">
                    <h4>Grok your code</h4>
                    <p>
                        Search and navigate across all of your code, with instant querying, "Go to definition" and "Find
                        references" across repositories and dependencies.{' '}
                        <Link to="/product/code-search-navigation">Learn more &raquo;</Link>
                    </p>
                </div>
            </div>
            <div className="product-features__deploy-card-detail">
                <div className="icon">
                    <figure className="dc-icon" />
                </div>
                <div className="copy">
                    <h4>TODO</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget purus nulla. Suspendisse quis
                        tortor a nibh dignissim condimentum at sed justo. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia Curae.{' '}
                        <Link to="/product/code-review">Learn more &raquo;</Link>
                    </p>
                </div>
            </div>
            <div className="product-features__deploy-card-detail">
                <div className="icon">
                    <figure className="ci-icon" />
                </div>
                <div className="copy">
                    <h4>All your code, available in one place</h4>
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
                    <h4>Integrates into your workflow</h4>
                    <p>
                        Get hovers and code navigation on files and code reviews right inside GitHub, GitHub Enterprise,
                        GitLab, Bitbucket Server, and Phabricator. Search code from your editor, browser, or command
                        line. <Link to="/product/code-search-navigation">Learn more &raquo;</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
)

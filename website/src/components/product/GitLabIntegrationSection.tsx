import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import * as React from 'react'
import { RequestDemoAction } from '../../css/components/actions/RequestDemoAction'

export const GitLabIntegrationSection: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <div className="gitlab-integration-section py-5 row justify-content-center ">
        <div className="row justify-content-center container">
            <h2 className="text-center display-4 mb-2">
                <div className="gitlab-integration-section__new-badge">New</div>
                <div className="gitlab-integration-section__title ml-4">
                    GitLab adds code navigation with Sourcegraph
                </div>
            </h2>
            <div className="col-lg-8 mb-6 mb-lg-0">
                <div className=" gitlab-integration-section__quote">
                    <p className="font-weight-light">
                        Sourcegraph has the best find-definition, find-references, and intelligent code navigation
                        capability on the planet&mdash;and they brought it to GitLab.
                    </p>
                    <footer>Sid Sijbrandij, GitLab CEO</footer>
                </div>
                <p class="container">
                    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                        <iframe
                            src="https://player.vimeo.com/video/372590007?color=0CB6F4&amp;title=0&amp;byline="
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            webkitallowfullscreen=""
                            mozallowfullscreen=""
                            allowfullscreen=""
                        ></iframe>
                    </div>
                </p>
                <p className="home__intro-text font-weight-light">
                    GitLab and Sourcegraph just announced a partnership to provide code navigation natively to GitLab
                    users
                </p>
                <RequestDemoAction className="mt-5" />
                <a
                    className="mt-3 d-flex align-items-center text-decoration-none"
                    href="https://about.sourcegraph.com/blog/gitlab-integrates-sourcegraph-code-navigation-and-code-intelligence"
                    target="_blank"
                >
                    Read about the integration
                    <ArrowRightBoxIcon className="text-primary ml-1" />
                </a>
            </div>
        </div>
    </div>
)

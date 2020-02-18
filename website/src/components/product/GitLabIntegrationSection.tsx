import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import * as React from 'react'
import { RequestDemoAction } from '../../css/components/actions/RequestDemoAction'
import { Vimeo } from '../../components/Vimeo'

export const GitLabIntegrationSection: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <div id="gitlab-integration" className="gitlab-integration-section py-5 container-fluid justify-content-center d-flex">
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
                <div className="container mb-4">
                    <Vimeo id={372590007}/>
                </div>
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

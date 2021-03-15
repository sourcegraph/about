import { Link } from 'gatsby'
import React from 'react'
import { ContentSection } from './content/ContentSection'

export const TrySourcegraph: React.FunctionComponent<{ demoFormURL?: string; className?: string }> = ({
    demoFormURL = '/contact/request-demo',
    className = '',
}) => (
    <ContentSection className={className}>
        <div className="row">
            <div className="col-md-6 pr-md-5">
                <h3 className="display-4 font-weight-bold">Try Sourcegraph for free today</h3>
                <p>
                    You'll be searching your own code in 10 minutes. You can run it self-hosted (all of your code stays
                    local and secure).
                </p>
            </div>
            <div className="col-md-6 pt-3 align-self-center text-center">
                <Link className="btn btn-outline-secondary mx-2 mb-3" to={demoFormURL} title="Request a demo">
                    Schedule a demo
                </Link>
                <Link className="btn btn-primary mx-2 mb-3" to="/get-started" title="Try Sourcegraph now">
                    Try Sourcegraph now
                </Link>
            </div>
        </div>
    </ContentSection>
)

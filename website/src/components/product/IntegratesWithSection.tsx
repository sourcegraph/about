import React from 'react'

export const IntegratesWithSection: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <div className={`integrates-with-section text-center ${className}`}>
        <h4 className="text-center font-weight-light">Integrates with:</h4>
        <div className="mt-4 d-flex justify-content-center align-items-center">
            <img className="integrates-with-section__logo mx-2" src="/external-logos/github-horizontal-logo.svg" />
            <img className="integrates-with-section__logo mx-2" src="/external-logos/github-enterprise-logo.svg" />
            <img className="integrates-with-section__logo mx-2" src="/external-logos/gitlab-logo.svg" />
            <img className="integrates-with-section__logo mx-2" src="/external-logos/bitbucket-server-logo.svg" />
            <img className="integrates-with-section__logo mx-2" src="/external-logos/phabricator-logo.svg" />
            <strong className="mr-2 p-1 border rounded">Datadog</strong>
            <strong className="mr-2 p-1 border rounded">Codecov</strong>
            <strong className="mr-2 p-1 border rounded">LightStep</strong>
            <strong className="mr-2 p-1 border rounded">Sentry</strong>
            <strong className="mr-2 p-1 border rounded">JIRA</strong>
        </div>
    </div>
)

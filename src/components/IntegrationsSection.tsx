import { FunctionComponent, ReactNode } from 'react'

import { ContentSection } from '@components'
import { buttonStyle, buttonLocation } from '@data'

const codeHosts: string[] = [
    'GitLab.com',
    'GitLab Enterprise',
    'GitHub.com',
    'GitHub Enterprise',
    'Bitbucket Server',
    'Bitbucket Data Center',
    'Bitbucket Cloud',
    'Phabricator',
    'Gitolite',
    'Gerrit (coming soon)',
    'Perforce',
    'CVS',
    'Any git-based code host',
]

const languages: string[] = [
    'Java',
    'Python',
    'Go',
    'JavaScript',
    'TypeScript',
    'C#',
    'C',
    'C++',
    'Swift',
    'Objective-C',
    'Kotlin',
    'Ruby',
    'Scala',
    'Rust',
    'Perl',
    'Dart',
    'Erlang',
    'COBOL',
    'Clojure',
    'Lisp',
    'Shell',
    'Terraform',
    'Lua',
    'GraphQL',
    'Thrift',
    'Protobuf',
    'YAML',
    'JSON',
    'Jsonnet',
    'R',
    'PHP',
    'Elixir',
    'Haskell',
    'PowerShell',
    'OCaml',
    'CUDA',
    'Pascal',
    'Verilog',
    'VHDL',
    'Groovy',
    'Tcl',
]

const tools: string[] = [
    'Chrome',
    'Firefox',
    'VS Code',
    'JetBrains',
    'Vim',
    'Emacs',
    'Atom',
    'Sublime Text',
    'Datadog',
    'Lightstep',
    'Sentry',
    'Codecov',
    'Jira',
    'npm',
    'SonarQube',
]

const selfHostedOptions: string[] = [
    'Kubernetes cluster',
    'Amazon EKS or EC2',
    'Google GKE',
    'Microsoft Azure AKS',
    'Docker Compose',
]

const renderListItems = (items: string[]): ReactNode =>
    items.map((item: string) => (
        <li key={item} className="my-2 mr-2 list-inline-item">
            <code
                className="px-2 py-1 rounded tw-text-gray-500 tw-bg-gray-100 tw-border tw-border-solid tw-border-gray-200 small"
                // eslint-disable-next-line react/forbid-dom-props
                style={{ fontSize: '14px' }}
            >
                {item}
            </code>
        </li>
    ))

export const IntegrationsSection: FunctionComponent = () => (
    <ContentSection color="white" className="py-5 py-md-7">
        <h2 className="mb-3">Works with your code, infrastructure, and tools</h2>

        <div className="row">
            <div className="mb-5 col-lg-6">
                <h4>All your repositories + 2M open source (and counting)</h4>

                <ul className="tw-list-none tw-ml-0 tw-flex tw-flex-wrap">{renderListItems(codeHosts)}</ul>
                <a
                    href="mailto:feedback@sourcegraph.com"
                    title="Have a repository not covered here?"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    Have a repository not covered here?
                </a>
            </div>

            <div className="mb-5 col-lg-6">
                <h4>All your languages</h4>

                <ul className="tw-list-none tw-ml-0 tw-flex tw-flex-wrap">{renderListItems(languages)}</ul>
                <a
                    href="mailto:feedback@sourcegraph.com"
                    title="Need a different language?"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    Need a different language?
                </a>
            </div>

            <div className="mb-5 col-lg-6">
                <h4>All your tools</h4>

                <ul className="tw-list-none tw-ml-0 tw-flex tw-flex-wrap">{renderListItems(tools)}</ul>
                <a
                    href="https://docs.sourcegraph.com/integration"
                    title="See all integrations or build your own"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    See all integrations or build your own
                </a>
            </div>

            <div className="mb-5 col-lg-6">
                <h4>Deployment options</h4>

                <ul className="tw-list-none tw-ml-0">
                    <li className="list-inline-item text-wrap">
                        <h5>Self-hosted by you:</h5>
                        <ul className="tw-list-none tw-m-0 tw-flex tw-flex-wrap">
                            {renderListItems(selfHostedOptions)}
                        </ul>
                    </li>

                    <li className="tw-list-none tw-m-0">
                        <h5 className="mt-3">Managed and hosted by us:</h5>
                        <ul className="tw-list-none tw-m-0 tw-flex tw-flex-wrap">
                            {renderListItems(['Docker Compose in GCP'])}
                        </ul>
                    </li>
                </ul>
                <a
                    href="https://docs.sourcegraph.com/admin/install"
                    title="Learn about deploying Sourcegraph"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    Learn about deploying Sourcegraph
                </a>
            </div>
        </div>
    </ContentSection>
)

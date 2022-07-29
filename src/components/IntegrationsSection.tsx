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
        <li key={item} className="list-inline-item my-2 mr-2">
            <code
                className="bg-gray-200 text-gray-500 small rounded p-1"
                // eslint-disable-next-line react/forbid-dom-props
                style={{ fontSize: '14px' }}
            >
                {item}
            </code>
        </li>
    ))

export const IntegrationsSection: FunctionComponent = () => (
    <ContentSection color="white" className="py-5 py-md-7">
        <h2 className="display-3 font-weight-bold mb-3">Works with your code, infrastructure, and tools</h2>

        <div className="row">
            <div className="col-lg-6 mb-5">
                <h3 className="h5 font-weight-bold">All your repositories + 2M open source (and counting)</h3>

                <ul className="list-inline d-inline-flex flex-wrap">{renderListItems(codeHosts)}</ul>
                <a
                    href="mailto:feedback@sourcegraph.com"
                    className="text-primary"
                    title="Have a repository not covered here?"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    Have a repository not covered here?
                </a>
            </div>

            <div className="col-lg-6 mb-5">
                <h3 className="h5 font-weight-bold">All your languages</h3>

                <ul className="list-inline d-inline-flex flex-wrap">{renderListItems(languages)}</ul>
                <a
                    href="mailto:feedback@sourcegraph.com"
                    className="text-primary"
                    title="Need a different language?"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    Need a different language?
                </a>
            </div>

            <div className="col-lg-6 mb-5">
                <h3 className="h5 font-weight-bold">All your tools</h3>

                <ul className="list-inline d-inline-flex flex-wrap">{renderListItems(tools)}</ul>
                <a
                    href="https://docs.sourcegraph.com/integration"
                    className="text-primary"
                    title="See all integrations or build your own"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    See all integrations or build your own
                </a>
            </div>

            <div className="col-lg-6 mb-5">
                <h4 className="font-weight-bold">Deployment options</h4>

                <ul className="list-inline d-inline-flex flex-wrap">
                    <li className="list-inline-item text-wrap">
                        <h6 className="font-weight-normal">Self-hosted by you:</h6>
                        <ul className="p-0">{renderListItems(selfHostedOptions)}</ul>
                    </li>

                    <li className="list-inline-item text-wrap">
                        <h6 className="font-weight-normal mt-3">Managed and hosted by us:</h6>
                        <ul className="p-0">{renderListItems(['Docker Compose in GCP'])}</ul>
                    </li>
                </ul>
                <a
                    href="https://docs.sourcegraph.com/admin/install"
                    className="text-primary"
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

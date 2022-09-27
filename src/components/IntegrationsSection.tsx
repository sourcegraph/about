import { FunctionComponent, ReactNode } from 'react'

import { Badge, ContentSection } from '@components'
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
    'Perforce',
    'CVS',
    'Any Git-based code host',
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

const tools: string[] = ['Chrome', 'Firefox', 'VS Code', 'JetBrains', 'Vim', 'Emacs', 'Atom', 'Sublime Text']

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
            <Badge text={item} size="small" />
        </li>
    ))

export const IntegrationsSection: FunctionComponent = () => (
    <ContentSection background="white">
        <h2 className="tw-mb-3xl">Works with your code, infrastructure, and tools</h2>

        <div className="row">
            <div className="mb-5 col-lg-6">
                <h4>All your repositories + 2M open source (and counting)</h4>

                <ul className="lg:tw-max-w-lg tw-list-none tw-ml-0 tw-flex tw-flex-wrap tw-mb-xxs">
                    {renderListItems(codeHosts)}
                </ul>
                <a
                    href="mailto:feedback@sourcegraph.com"
                    title="Have a repository not covered here?"
                    className="tw-font-normal"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    Have a repository not covered here?
                </a>
            </div>

            <div className="mb-5 col-lg-6">
                <h4>All your languages</h4>

                <ul className="lg:tw-max-w-xl tw-list-none tw-ml-0 tw-flex tw-flex-wrap tw-mb-xxs">
                    {renderListItems(languages)}
                </ul>
                <a
                    href="mailto:feedback@sourcegraph.com"
                    title="Need a different language?"
                    className="tw-font-normal"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    Need a different language?
                </a>
            </div>

            <div className="mb-5 col-lg-6">
                <h4>Your most used tools</h4>

                <ul className="lg:tw-max-w-md tw-list-none tw-ml-0 tw-flex tw-flex-wrap tw-mb-xxs">
                    {renderListItems(tools)}
                </ul>
                <a
                    href="https://docs.sourcegraph.com/integration"
                    title="See all integrations"
                    className="tw-font-normal"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    See all integrations
                </a>
            </div>

            <div className="mb-5 col-lg-6">
                <h4>Deployment options</h4>

                <ul className="tw-list-none tw-ml-0 tw-mb-xxs">
                    <li className="list-inline-item text-wrap">
                        <h5 className="tw-mt-xs tw-text-lg tw-font-normal">Cloud:</h5>
                        <ul className="tw-list-none tw-m-0 tw-flex tw-flex-wrap">
                            {renderListItems(['Single-tenant Sourcegraph Cloud instance'])}
                        </ul>
                    </li>

                    <li className="tw-list-none tw-m-0">
                        <h5 className="tw-mt-xxs tw-text-lg tw-font-normal">Self-hosted by you:</h5>
                        <ul className="lg:tw-max-w-sm tw-list-none tw-m-0 tw-flex tw-flex-wrap">
                            {renderListItems(selfHostedOptions)}
                        </ul>
                    </li>
                </ul>
                <a
                    href="https://docs.sourcegraph.com/admin/install"
                    title="Learn about deploying Sourcegraph"
                    className="tw-font-normal"
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

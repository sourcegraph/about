import React, { FunctionComponent } from 'react'
import { ContentSection } from './content/ContentSection'

const codeHosts: string[] = [
    'GitHub',
    'GitHub Enterprise',
    'GitLab',
    'Bitbucket Server',
    'Bitbucket Cloud',
    'Phabricator',
    'AWS CodeCommit',
    'Azure DevOps',
    'Perforce',
    'Mercurial',
    'Subversion',
    'CVS',
    'TFS',
    'Gitea',
    'Gerrit',
    'cgit',
    'Ridiculously big monorepos',
    '2,000,000+ open source repositories',
    'Any combo of these',
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
    'LightStep',
    'Sentry',
    'Codecov',
    'Jira',
    'npm',
    'SonarQube',
]

const renderListItems = (items: string[]) =>
    items.map((item: string) => (
        <li key={item} className="list-inline-item">
            <code className="border rounded px-1">{item}</code>
        </li>
    ))

export const IntegrationsSection: FunctionComponent = () => (
    <ContentSection className="py-7">
        <h2 className="display-3 font-weight-bold mb-3">Works with your code, infrastructure, and tools</h2>
        <div className="row">
            <div className="col-lg-6">
                <h3 className="h5 font-weight-bold pt-3">All your repositories + 2M open source (and counting)</h3>
                <ul className="list-inline d-inline-flex flex-wrap">
                    {renderListItems(codeHosts)}
                    <li className="d-block">
                        <a href="mailto:feedback@sourcegraph.com" className="small text-muted">
                            Have a repository not covered here?
                        </a>
                    </li>
                </ul>
            </div>

            <div className="col-lg-6">
                <h3 className="h5 font-weight-bold pt-3">All your languages</h3>
                <ul className="list-inline d-inline-flex flex-wrap">
                    {renderListItems(languages)}
                    <li className="d-block">
                        <a href="mailto:feedback@sourcegraph.com" className="d-inline-block small text-muted">
                            Need a different language?
                        </a>
                    </li>
                </ul>
            </div>

            <div className="col-lg-6">
                <h3 className="h5 font-weight-bold pt-3">All your tools</h3>
                <ul className="list-inline d-inline-flex flex-wrap">
                    {renderListItems(tools)}
                    <li className="d-block">
                        <a href="https://docs.sourcegraph.com/integration" className="small text-muted">
                            See all integrations or build your own
                        </a>
                    </li>
                </ul>
            </div>

            <div className="col-lg-6">
                <h3 className="h5 font-weight-bold pt-3">Deployment options</h3>
                <ul className="list-inline d-inline-flex flex-wrap">
                    <li className="list-inline-item text-wrap">
                        Who? <code className="border rounded px-1">Self-hosted (you)</code>{' '}
                        <code className="border rounded px-1">Managed by us</code>{' '}
                    </li>
                    <li className="list-inline-item text-wrap">
                        Where? <code className="border rounded px-1">AWS</code>{' '}
                        <code className="border rounded px-1">Google Cloud</code>{' '}
                        <code className="border rounded px-1">Azure</code>{' '}
                        <code className="border rounded px-1">Other infra</code>
                    </li>
                    <li className="list-inline-item text-wrap">
                        What? <code className="border rounded px-1">Docker container</code>{' '}
                        <code className="border rounded px-1">Kubernetes cluster</code>{' '}
                        <code className="border rounded px-1">Custom cluster</code>
                    </li>
                    <li className="d-block">
                        <a href="https://docs.sourcegraph.com/admin/install" className="small text-muted">
                            Learn about deploying Sourcegraph
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </ContentSection>
)

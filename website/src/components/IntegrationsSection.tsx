import React from 'react'
import { ContentSection } from './content/ContentSection'

export const IntegrationsSection: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <ContentSection className={className}>
        <h2 className="display-3 font-weight-bold mb-3">Works with your code, infrastructure, and tools</h2>
        <div className="row">
            <div className="col-lg-6">
                <h3 className="h5 font-weight-bold pt-3">All your repositories</h3>
                <ul className="list-inline d-inline-flex flex-wrap">
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">GitHub</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">GitHub Enterprise</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">GitLab</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Bitbucket Server</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Bitbucket Cloud</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Phabricator</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">AWS CodeCommit</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Azure DevOps</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Perforce</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Mercurial</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Subversion</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">CVS</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">TFS</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Gitea</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Gerrit</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">cgit</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Ridiculously big monorepos</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Open source repos</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">1,000,000+ repositories</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Any combo of these</code>
                    </li>
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
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Java</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Python</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Go</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">JavaScript</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">TypeScript</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">C#</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">C</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">C++</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Swift</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Objective-C</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Kotlin</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Ruby</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Scala</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Rust</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Perl</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Dart</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Erlang</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">COBOL</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Clojure</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Lisp</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Shell</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Terraform</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Lua</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">GraphQL</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Thrift</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Protobuf</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">YAML</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">JSON</code>
                    </li>
                       <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Jsonnet</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">R</code>
                    </li>
                     <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">PHP</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Elixir</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Haskell</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">PowerShell</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">OCaml</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">CUDA</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Pascal</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Verilog</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">VHDL</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Groovy</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Tcl</code>
                    </li>
                    <li className="d-block">
                        <a href="mailto:feedback@sourcegraph.com" className="small text-muted">
                            Need a different language?
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-lg-6">
                <h3 className="h5 font-weight-bold pt-3">All your tools</h3>
                <ul className="list-inline d-inline-flex flex-wrap">
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Chrome</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Firefox</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">VS Code</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">JetBrains</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Vim</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Emacs</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Atom</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Sublime Text</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Datadog</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">LightStep</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Sentry</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Codecov</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Jira</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">npm</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">sonarcube/sonarcloud</code>
                    </li>
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
                    <li className="list-inline-item text-nowrap">
                        Who? <code className="border rounded px-1">Self-hosted (you)</code>{' '}
                        <code className="border rounded px-1">Cloud</code>{' '}
                        <code className="border rounded px-1">Managed by us</code>{' '}
                    </li>
                    <li className="list-inline-item text-nowrap">
                        Where? <code className="border rounded px-1">AWS</code>{' '}
                        <code className="border rounded px-1">Google Cloud</code>{' '}
                        <code className="border rounded px-1">Azure</code>{' '}
                    </li>
                    <li className="list-inline-item text-nowrap">
                        <code className="border rounded px-1">Other infra</code>
                    </li>
                    <li className="list-inline-item text-nowrap">
                        What? <code className="border rounded px-1">Docker container</code>{' '}
                        <code className="border rounded px-1">Kubernetes cluster</code>{' '}
                    </li>
                    <li className="list-inline-item text-nowrap">
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

import { Link } from 'gatsby'
import React from 'react'
import { Blockquote } from '../../components/Blockquote'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'
import { IntegratesWithSection } from '../../components/product/IntegratesWithSection'
import { ContactPresalesSupportAction } from '../../css/components/actions/ContactPresalesSupportAction'
import { GetStartedAction } from '../../css/components/actions/GetStartedAction'
import { ViewDeveloperDocumentationAction } from '../../css/components/actions/ViewDeveloperDocumentationAction'

export default ((props: any) => (
    <Layout location={props.location}>
        <ContentPage
            title="Code search and navigation"
            description="Sourcegraph helps you grok code, so you can write better code more quickly."
            mainActions={
                <div className="d-flex flex-column align-items-center">
                    <a className="btn btn-primary mb-2" href="https://docs.sourcegraph.com/#quickstart">
                        Install
                    </a>
                    <ViewDeveloperDocumentationAction
                        className="text-light my-1"
                        url="https://docs.sourcegraph.com/user/search"
                    >
                        Code search documentation
                    </ViewDeveloperDocumentationAction>
                    <ContactPresalesSupportAction className="text-light" />
                </div>
            }
        >
            <ContentSection color="white" className="py-6">
                <h2>The best developers and teams use code search</h2>
                <div className="row">
                    <div className="col-md-4">
                        <Blockquote
                            quote="[It's] essential to be able to easily search [the] whole source … huge productivity boost: easy to find uses, defs, examples, etc."
                            by={
                                <a
                                    href="https://static.googleusercontent.com/media/research.google.com/en/people/jeff/stanford-295-talk.pdf"
                                    target="_blank"
                                >
                                    Jeff Dean (Google Senior Fellow)
                                </a>
                            }
                        />
                    </div>
                    <div className="col-md-4">
                        <Blockquote
                            quote="Things...that clearly would have helped every software company I've ever worked at: … instant code search over the entire codebase"
                            by={
                                <a href="https://www.kalzumeus.com/2019/3/18/two-years-at-stripe/" target="_blank">
                                    Patrick McKenzie (patio11)
                                </a>
                            }
                        />
                    </div>
                    <div className="col-md-4">
                        <Blockquote
                            quote="Software engineering is more about reading code than writing it, and part of this process is finding the code that you should read."
                            by={
                                <a href="https://github.com/google/zoekt/blob/master/doc/faq.md" target="_blank">
                                    Han-Wen Nienhuys (Google engineer)
                                </a>
                            }
                        />
                    </div>
                    <div className="col-md-4">
                        <Blockquote
                            quote="tbgs [Facebook's code search tool] is the StackOverflow for Facebook engineers"
                            by={
                                <a href="https://twitter.com/cyan_binary/status/1015015559115653121" target="_blank">
                                    Facebook engineer
                                </a>
                            }
                        />
                    </div>
                    <div className="col-md-4">
                        <Blockquote
                            quote="A substantial amount of my day is spent inside of Google's internal code search tool."
                            by={
                                <a href="https://twitter.com/foxxtrot/status/988850022530867203?ref_src=twsrc%5Etfw">
                                    Google engineer
                                </a>
                            }
                        />
                    </div>
                    <div className="col-md-4">
                        <Blockquote
                            quote="Sourcegraph [code search] … has made me insanely more productive and efficient at writing code here. I’m able to understand and deeply dive through all of our microservices and get my work done really fast."
                            by="Lyft engineering manager"
                        />
                    </div>
                </div>
                <h5 className="mt-3">Want more data on the value of code search?</h5>
                <p>
                    <strong>98%</strong> of Google developers say their Sourcegraph-like internal code search tool is{' '}
                    <strong>"critical"</strong>, according to a published{' '}
                    <a
                        href="https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43835.pdf"
                        target="_blank"
                    >
                        research paper from Google
                    </a>
                    &nbsp;and a{' '}
                    <a
                        href="https://docs.google.com/document/d/1LQxLk4E3lrb3fIsVKlANu_pUjnILteoWMMNiJQmqNVU/edit#heading=h.xxziwxixfqq3"
                        target="_blank"
                    >
                        Google developer survey
                    </a>
                    .
                </p>
                <hr className="mt-5" />
                <h3 className="mt-5">How does code search help?</h3>
                <p>
                    The published{' '}
                    <a
                        href="https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43835.pdf"
                        target="_blank"
                    >
                        research paper from Google
                    </a>{' '}
                    answers this well. Code search helps developers:
                </p>
                <div className="row code-search-navigation-page__use-cases">
                    <div className="col-md-6">
                        <h5>Find example code</h5>
                        <table className="table table-striped">
                            <tr>
                                <th>API consumer needs help</th>
                                <td>"I want to know how a function should be called"</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <hr />
                <IntegratesWithSection
                    className="py-6"
                    showTypes={['codeHost', 'plugin', 'language']}
                    customTypeLabels={{ codeHost: 'Code hosts' }}
                />
            </ContentSection>
        </ContentPage>
    </Layout>
)) as React.FunctionComponent<any>

import { Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import { Blockquote } from '../components/Blockquote'
import { ContentPage } from '../components/content/ContentPage'
import { ContentSection } from '../components/content/ContentSection'
import { IntegrationsSection } from '../components/IntegrationsSection'
import Layout from '../components/Layout'
import { CustomerLogosSection } from '../components/product/CustomerLogosSection'
import { TrySourcegraph } from '../components/TrySourcegraph'

export default ((props: any) => (
    <Layout
        location={props.location}
        meta={{
            title: 'What is Universal Code Search',
            description: 'Universal Code Search is the best way to answer any questions about code and systems.',
        }}
    >
        <Helmet>
            <style dangerouslySetInnerHTML={{ __html: `>.async-hide { opacity: 0 !important}` }} />
            <script>
                {`(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
            h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
            (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
            })(window,document.documentElement,'async-hide','dataLayer',4000,
            {'GTM-TB4NLS7':true});`}
            </script>
        </Helmet>
        <ContentPage
            title="What is Universal Code Search?"
            className="bg-gradient-primary mt-2"
            titleClassName="display-2 font-weight-bold"
        >
            <ContentSection color="white" className="pt-6 pb-2">
                <div className="row justify-content-md-center mb-4">
                    <div className="col-md-10">
                        <h2 className="display-3 font-weight-bold mb-4">
                            Universal Code Search is the best way to answer any questions about code and systems.
                        </h2>
                        <p>
                            Sourcegraph Universal Code Search lets you review, search, and modify your code no matter
                            where it's stored. Explore and better understand all code, faster, with Sourcegraph's
                            contextual code intelligence to improve developer productivity and code change management to
                            make large-scale changes.
                        </p>

                        <p>
                            <a href="#used-by">Uber, Lyft, Yelp, and other enterprises</a> rely on Universal Code
                            Search, not just code hosts.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center py-4">
                    <div className="col-lg-10 text-center">
                        <img src="/external-logos/sofi-logo.svg" width="100px" />
                        <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
                            <p>
                                Sourcegraph is an ingrained part of my daily process at SoFi. With Sourcegraph, our
                                engineers can understand all of the repercussions of committing a change to a service
                                that is exposed to other services.
                            </p>
                            <footer className="blockquote-footer">Ursula Robertson, Engineering Manager, SoFi</footer>
                        </blockquote>
                    </div>
                </div>
            </ContentSection>
            <ContentSection color="purple" className="py-5">
                <h2 className="display-3 font-weight-bold mt-3 text-center">Universal across everything </h2>
                <p className="text-center">
                    Universal Code Search must have these things. Anything else is just a code search tool.
                </p>
                <div className="row mt-5">
                    <div className="col-md-4 pr-5">
                        <h4>Code Discovery</h4>
                        <p>
                            <ul className="pl-3">
                                <li>Navigate and explore code across any codebase</li>
                                <li>Access anything stored as code from a centralized place</li>
                                <li>Improve the speed to understand complex or unfamiliar codebases</li>
                            </ul>
                        </p>
                    </div>
                    <div className="col-md-4 pr-5">
                        <h4>Code Intelligence</h4>
                        <p>
                            <ul className="pl-3">
                                <li>Understand code in context</li>
                                <li>Find answers faster, without huge amounts of effort</li>
                                <li>Better code reviews with code intelligence to find defintions or references</li>
                            </ul>
                        </p>
                    </div>
                    <div className="col-md-4 pr-5">
                        <h4>Code Change Management</h4>
                        <p>
                            <ul className="pl-3">
                                <li>Manage large-scale changes across the entire codebase</li>
                                <li>Easily run campaigns with a query and track results</li>
                                <li>Migrate code to new APIs, address deprecations and dependencies, and more</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </ContentSection>
            <ContentSection color="white" className="py-4">
                <h2 className="display-3 font-weight-bold mt-3">Code search is the superpower</h2>
                <p>
                    Uber, Lyft, Yelp, and other world-class companies rely on Sourcegraph Universal Code Search (not
                    just a code host) to ship software.
                </p>
                <div className="row mt-5">
                    <div className="col-md-6 col-lg-4 mb-3 pr-5">
                        <h4>Google CodeSearch</h4>
                        <h5>
                            <em>internal-only tool</em>
                        </h5>
                        <ul className="pl-3">
                            <li>
                                Used 5-10 times daily by almost every Google technical employee for the last 10+ years
                            </li>
                            <li>
                                98% of developers say it is "critical" to their job (in a{' '}
                                <a
                                    href="https://docs.google.com/document/d/1LQxLk4E3lrb3fIsVKlANu_pUjnILteoWMMNiJQmqNVU/edit#heading=h.xxziwxixfqq3"
                                    target="_blank"
                                >
                                    Google developer survey
                                </a>
                                )
                            </li>
                            <li>$100Ms invested, with dozens of full-time engineers building it</li>
                            <li>
                                Use cases and value are{' '}
                                <Link to="/product/code-search-navigation#use-cases">
                                    documented in a Google internal research study
                                </Link>
                            </li>
                        </ul>
                        <Blockquote
                            quote="[It's] essential to be able to easily search [the] whole source … huge productivity boost: easy to find uses, defs, examples, etc."
                            by={
                                <a
                                    href="https://static.googleusercontent.com/media/research.google.com/en//people/jeff/stanford-295-talk.pdf"
                                    target="_blank"
                                >
                                    Jeff Dean (Google Senior Fellow)
                                </a>
                            }
                        />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-3 pr-5">
                        <h4>
                            Facebook BigGrep/<abbr title="The Big Grep Search">TBGS</abbr>
                        </h4>
                        <h5>
                            <em>internal-only tool</em>
                        </h5>
                        <ul className="pl-3">
                            <li>Used daily by almost every Facebook technical employee for the last ~8 years</li>
                            <li>
                                More secretive than Google's tool, but is described in a{' '}
                                <a
                                    href="https://www.facebook.com/atscaleevents/videos/dev-tools-scale-searching-through-code-at-scale-jeroen-vae/1911812842425144/"
                                    target="_blank"
                                >
                                    conference talk
                                </a>{' '}
                                and some{' '}
                                <a href="https://twitter.com/cyan_binary/status/1015015559115653121" target="_blank">
                                    tweets
                                </a>
                            </li>
                            <li>$100Ms invested, with dozens of full-time engineers building it</li>
                        </ul>
                        <Blockquote
                            quote="tbgs is the StackOverflow for Facebook engineers"
                            by={
                                <a href="https://twitter.com/cyan_binary/status/1015015559115653121" target="_blank">
                                    Facebook engineer
                                </a>
                            }
                        />
                    </div>
                    <div className="col-md-12 col-lg-4 mb-3 pr-5">
                        <h2>
                            <img
                                className="mb-2"
                                style={{ width: '25px', height: '25px' }}
                                src="/sourcegraph/sourcegraph-mark.svg"
                            />{' '}
                            Sourcegraph
                        </h2>
                        <h5>Used by Uber, Lyft, Yelp, and more</h5>
                        <ul className="pl-3">
                            <li>Every developer at these organizations uses Sourcegraph</li>
                            <li>
                                Used by the world's leading technology companies (except Google and Facebook, which
                                built their in-house tools 10+ years ago for $100Ms+)
                            </li>
                        </ul>
                        <Blockquote
                            quote="Seriously, Sourcegraph is the best tool we’ve invested in. It’s made me insanely more productive and efficient at writing code here. I’m able to understand and deeply dive through all of our microservices and get my work done really fast. This is absolutely incredible."
                            by="Lyft engineering manager"
                        />
                        <Blockquote
                            quote="[Sourcegraph] improves my productivity and ability to write clean code by 2-3x."
                            by="Uber senior engineer"
                        />
                    </div>
                </div>
            </ContentSection>
            <IntegrationsSection className="bg-white py-4" />
            <ContentSection color="white" className="py-2">
                <hr />
                <CustomerLogosSection className="py-5" />
                <hr />
            </ContentSection>
            <ContentSection color="white" className="py-6">
                <TrySourcegraph />
            </ContentSection>
        </ContentPage>
    </Layout>
)) as React.FunctionComponent<any>

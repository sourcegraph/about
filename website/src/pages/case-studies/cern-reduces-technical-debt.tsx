import * as chris from '../../../static/case-studies/chris-roderick-cern.jpg'
import * as lhc from '../../../static/case-studies/cern-image-lhc-cc.jpg'
import * as React from 'react'
import {
    CaseStudyPage,
    CaseStudyRequestDemoForm,
    InContentBlockquote,
    InContentImage
} from '../../components/content/CaseStudyPage'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'


export default ((props: any) => (
    <Layout
        location={props.location}
        meta={{
            title: 'Sourcegraph empowers CERN to tackle code reuse and code changes in mission-critical applications',
            description:
                'Sourcegraph empowers developers at CERN to reuse existing code and manage mission-critical code changes with ease',
            image: 'https://about.sourcegraph.com/external-logos/cern-name-reverse-logo.svg',
        }}
        className="navbar-dark bg-black"
    >
        <CaseStudyPage
            customer="CERN"
            title="Sourcegraph empowers CERN to tackle code reuse and code changes in mission-critical applications"
            heroImage="/external-logos/cern-supplier-logo.svg"
            heroLink="https://procurement.web.cern.ch"
            quote={{
                quote:
                    'Sourcegraph is extremely valuable for what we do. It enables us to easily clean up deprecated APIs and estimate the risks and costs of our APIs’ evolution.',
                author: 'Vito Baggiolini, Senior Software Engineer, CERN',
            }}
        >
            <ContentSection color="white" className="col-md-6 pb-5">
                <div className="container">
                    <p>Physicists at CERN use some of the world's most powerful particle accelerators to discover what the universe is made of and how it works. Over the last 18 years, the organization’s Java codebase for accelerator controls has grown to roughly 15 million lines of code. CERN operates within a self-contained software system that is developed and maintained by nearly 300 people, with all of its code in Sourcegraph. To achieve efficient development and safe upgrades, developers require a tool that lets them quickly and effectively search through their entire codebase so they can easily change and reuse code where necessary. </p>
                    <div className="row justify-content-md-center pt-3">
                        <div className="col-md-8">
                            <InContentImage
                                src={lhc}
                                alt="Large Hadron Collider, image by CERN"
                                caption="Large Hadron Collider, image by CERN"
                                className="case-studies__img img-fluid d-block mb-3"
                            />
                        </div>
                    </div>
                    <h2 className="pt-5 pb-1">Avoiding reinventing the wheel with universal code search</h2>
                    <p>Sourcegraph empowers developers at CERN to reuse code that already exists, avoiding duplication and saving developers countless hours redoing work that has already been done. It takes search one step further by &quot;understanding&quot; the structure of the code (as opposed to just &quot;seeing&quot; it as raw text), enabling the organization to do semantic searches that yield accurate results.</p>
                    <InContentBlockquote
                        quote="I was recently tasked with something that I, admittedly, had no idea how to do, but I was sure that someone at CERN must’ve already done it at some point. Sourcegraph universal code search took me directly to the code I was looking for so I could repurpose it. It’s also an invaluable tool for enabling our developers to learn from one another."
                        author="Vito Baggiolini"
                    />
                    <div className="row pt-3">
                        <div className="col-md-3 pt-5">
                            <InContentImage
                                src={chris}
                                alt="Chris Roderick, Applications and Services Section Leader, CERN"
                                className="case-studies__img rounded-circle img-fluid mx-auto d-block mb-3"
                            />
                        </div>
                        <div className="col-md-9">
                            <InContentBlockquote
                                quote="Sourcegraph helps us with technical debt reduction and the consolidation of our codebase by letting us avoid duplication, spot the usage of deprecated APIs or internal (non-API) library code, and identify general purpose code in specific projects (such as utility classes) that can be factored out and shared in a core library."
                                author="Chris Roderick, Applications and Services Section Leader, CERN"
                            />
                        </div>
                    </div>
                    <h2 className="pt-5 pb-1">Tackling mission-critical code changes with ease</h2>
                    <InContentBlockquote
                        quote="Sourcegraph lets us make informed decisions on how to evolve our codebase. For example, a library owner knows exactly how all other developers use their API, and can therefore make educated decisions on how to evolve it."
                        author="Chris Roderick"
                    />
                    <p>The Large Hadron Collider (LHC) at CERN features five-year operational periods and the software must be stable during this time. Sourcegraph helps developers make small, backward-compatible changes and ensures that any change made by a given team to one part of the codebase doesn't break (or require adaptations of) dependent code written by other people. It’s essential that these changes are done correctly, as mistakes can stop the operation of the CERN accelerators and waste precious time for physics research.</p>
                    <p>The LHC also features upgrade periods of 1-2 years, during which developers typically make more radical changes. During these periods, Sourcegraph lets users identify redundant code (e.g., utility methods) and assess the cost/benefit of doing breaking API changes.</p>
                    <InContentBlockquote
                        quote="Our solution prior to Sourcegraph didn’t let us do detailed and precise searches on how and where a method of a specific class is used. As a result, we were unable to measure the impact that a planned API change would have on the rest of our huge codebase. This put us in a position where we weren’t making necessary changes because we were unsure of the effect they would have."
                        author="Vito Baggiolini"
                    />
                    <p>Universal code search lets developers at CERN make changes to their code, including those with potentially costly implications if done incorrectly, with ease and confidence. As the organization continues to uncover fascinating insights into how our universe works, Sourcegraph serves as its go-to tool for code reuse and code change management. </p>
                </div>
            </ContentSection>
        </CaseStudyPage >
        <CaseStudyRequestDemoForm />
    </Layout >
)) as React.FunctionComponent<any>

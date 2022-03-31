import * as React from 'react'
import { Link } from 'gatsby'
import { Blockquote, BlockquoteWithLogo } from '../../components/Blockquote'
import { CaseStudyJumbotron, AuthorBio } from '../../components/content/CaseStudyPage'
import { CaseStudiesList } from '../../components/product/CaseStudiesList'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'
import ClipboardTextOutlineIcon from 'mdi-react/ClipboardTextOutlineIcon'
import ChartBarIcon from 'mdi-react/ChartBarIcon'
import CheckCircleOutlineIcon from 'mdi-react/CheckCircleOutlineIcon'
import FlagOutlineIcon from 'mdi-react/FlagOutlineIcon'
import slugify from 'slugify'

export default ((props: any) => (
    <Layout
        location={props.location}
        meta={{
            title: 'Nutanix fixed Log4j quickly and confidently with Sourcegraph',
            description:
                'Sourcegraph enables Nutanix to find and fix security vulnerabilities quickly across the code base. When the Log4j vulnerability rocked the industry, Nutanix was able to confidently identify every instance of Log4j across its sprwaling codebase and deliver patches to its customers that fully remediated the vulnerability within 4 days.',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
    >
        <div className={`${slugify('Nutanix').toLowerCase()}-case-study`}>
            <CaseStudyJumbotron
                className="bg-gradient-onahau-fog text-black height-md-450 height-auto p-2"
                color="white"
                customer="Nutanix"
            >
                <h1 className="pt-5 pb-6 display-2 font-weight-bold mw-600 mx-auto">
                    Nutanix fixed Log4j quickly and confidently with Sourcegraph
                </h1>
            </CaseStudyJumbotron>

            <ContentSection color="white" className="py-6 text-center col-sm-12 col-md-9 col-lg-7">
                <BlockquoteWithLogo
                    quote={`Sourcegraph was the right product at the right time.`}
                    by="Jon Kohler, Technical Director of Solution Engineering at Nutanix"
                    logoHref="https://nutanix.com"
                    logoImage="/external-logos/nutanix-logo.svg"
                />
                {/* <blockquote>
                    <div className="my-4">
                        <img src="/external-logos/nutanix-logo.svg" width="210px" alt="nutanix" />
                    </div>
                    <h2 className="display-3 font-weight-bold mw-600 mx-auto">
                        "Sourcegraph was the right product at the right time."
                    </h2>
                    <footer className="blockquote-footer">
                        Jon Kohler, Technical Director of Solution Engineering at Nutanix
                    </footer>
                </blockquote> */}
            </ContentSection>

            <section className="d-flex flex-column flex-md-row">
                <div className="bg-light-gray-2 p-lg-6 p-md-5 px-1 py-5 col-sm-12 col-md-6">
                    <div className="mb-5 ml-md-5 ml-3 d-flex flex-column flex-md-row">
                        <div className="d-flex bg-white align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 rounded-circle text-center pt-1 mw-50">
                            <ClipboardTextOutlineIcon color="#00A1C7" size={40} className="p-1" />
                        </div>
                        <div className="pl-3 col-11 col-lg-9">
                            <h5 className="font-weight-bold">Use case</h5>
                            <p>Find and fix security vulnerabilities quickly across the code base.</p>
                        </div>
                    </div>
                    <div className="mb-5 ml-md-5 ml-3 d-flex flex-column flex-md-row">
                        <div className="d-flex bg-white align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 rounded-circle text-center pt-1 mw-50">
                            <FlagOutlineIcon color="#00A1C7" size={40} className="p-1" />
                        </div>
                        <div className="pl-3 col-11 col-lg-9">
                            <h5 className="font-weight-bold">Challenge</h5>
                            <ul className="pl-4">
                                <li>
                                    Inability to efficiently find all the instances of Log4j in their large codebase.
                                </li>
                                <li>Lack of code-level clarity that vulnerabilities were completely resolved.</li>
                                <li>Uncertainty about the scope and impact of the Log4j vulnerability.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-5 ml-md-5 ml-3 d-flex flex-column flex-md-row">
                        <div className="d-flex bg-white align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 rounded-circle text-center pt-1 mw-50">
                            <CheckCircleOutlineIcon color="#00A1C7" size={40} className="p-1" />
                        </div>
                        <div className="pl-3 col-11 col-lg-9">
                            <h5 className="font-weight-bold">Solution</h5>
                            <ul className="pl-4">
                                <li>Able to quickly and efficiently find every instance of the Log4j vulnerability.</li>
                                <li>Full confidence that all Log4j-vulnerable code was identified and resolved.</li>
                                <li>
                                    Able to quickly validate that no known vulnerabilities exist in the codebase prior
                                    to each release.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-blue-mist p-lg-6 p-md-5 px-1 py-5 col-sm-12 col-md-6">
                    <div className="mb-5 ml-md-5 ml-3 d-flex flex-column flex-md-row">
                        <div className="d-flex bg-white align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 rounded-circle text-center pt-1 mw-50">
                            <ChartBarIcon color="#00A1C7" size={40} className="p-1" />
                        </div>
                        <div className="pl-3 col-11 col-lg-9">
                            <h5 className="font-weight-bold">Result</h5>
                            <ul className="pl-4">
                                <li>
                                    Nutanix was able to see where JMSAppender existed, fix it, and send out a release
                                    all in less than 5 minutes.
                                </li>
                                <li>
                                    Nutanix was able to deliver patches to its customers that fully remediated the Log4j
                                    vulnerability.
                                </li>
                                <li>
                                    Nutanix was able to confidently identify every instance of Log4j across its
                                    sprawling codebase.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ContentSection color="white" className="py-6 col-sm-12 col-md-9 col-lg-7">
                <section>
                    <p>
                        As the Technical Director of Solution Engineering at Nutanix, Jon Kohler understands the
                        complexity involved in securing the multitude of applications and solutions required to power
                        such a large organization. “Security is something that we care about intensely here at Nutanix,”
                        Jon said, “because it’s part of our bedrock. It's why customers like us, and we have to take it
                        seriously.”
                    </p>
                    <h2 className="mt-6 mb-4 display-3 font-weight-bold mw-600">
                        Log4j: The vulnerability that rocked an industry
                    </h2>
                    <p>
                        <span className="font-weight-bold">In December of 2021, </span>
                        software companies around the world discovered that Log4j, an open-source logging library
                        bundled in many software packages, contained significant vulnerabilities, one of which was a
                        10/10 on the CVSS scale. The Federal Trade Commission called the library “
                        <a href="https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2022/01/ftc-warns-companies-remediate-log4j-security-vulnerability">
                            ubiquitous
                        </a>
                        .”
                    </p>
                    <p>
                        Jon discovered that the offending module recurred throughout their build. “The more we dug,” Jon
                        explained, “the more we realized this bug was everywhere and nowhere at the same time.”
                    </p>
                    <p>
                        Nutanix moved quickly, despite having multiple build and artifact management systems, as well as
                        a large monorepo with many component branches and hundreds of git repositories. In under four
                        days, Nutanix was able to deliver patches to its customers that fully remediated the Log4j
                        vulnerability.
                    </p>
                </section>
            </ContentSection>

            <ContentSection className="py-6 col-sm-12 col-md-9 col-lg-7">
                <h2 className="mb-4 display-4 font-weight-bold mw-600">
                    Nutanix used Sourcegraph to identify every instance of Log4j within 2 days
                </h2>
                <p>
                    <span className="font-weight-bold">Speed was of the essence, </span>
                    but the timing of the Log4j news, which broke right before many employees go on vacation for the
                    winter holidays, didn't make things easy.
                </p>
                <p>
                    However, Nutanix armed its engineers with Sourcegraph. Within a couple of days, a few Sourcegraph
                    queries identified every instance of the Log4j vulnerability.
                </p>
                <p>
                    With the Log4j 1.x vulnerability, for instance, codebases were only insecure if they used
                    <a href="https://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/net/JMSAppender.html">
                        {' '}
                        JMSAppender
                    </a>
                    . Jon used Sourcegraph to see where JMSAppender existed, fixed it, and sent out a release. “That
                    took almost less than five minutes,” Jon said. Sourcegraph released a
                    <Link to="/blog/log4j-log4shell-0-day/"> blog post </Link>
                    that explained how other companies addressing Log4j could use code search for similar benefits.
                </p>
                <p>This speed gave the team a head start on mitigation.</p>
                <p>
                    Deploying these fixes required quality assurance and testing as well as discovery and fixing. Within
                    a week and a half, Nutanix had deployed three back-to-back patches.
                </p>
                <p>
                    With the help of Sourcegraph, Nutanix was able to release these patches relatively quickly compared
                    to other companies. Nutanix's customers reported satisfaction with both the speed of the patches and
                    their quality.
                </p>
                <p>
                    “We tried to take a measured approach,” Jon said. “We wanted to get things done quickly but without
                    completely flying by the seats of our pants.”
                </p>
            </ContentSection>

            <ContentSection color="white" className="py-6 text-center col-sm-12 col-md-9 col-lg-7">
                <Blockquote
                    quote={`It's nice when you can just run a report and say, 'Here it is,'' or 'Here it isn't.'' It's much
                    better than having to say, 'Well, boss, I think we got it all.’`}
                    by="Jon Kohler"
                />
                {/* <blockquote className="py-md-6">
                    <h3 className="font-weight-normal text-gray mw-600 mx-auto">
                        “It's nice when you can just run a report and say, 'Here it is,'' or 'Here it isn't.'' It's much
                        better than having to say, 'Well, boss, I think we got it all.’”
                    </h3>
                    <footer className="blockquote-footer">Jon Kohler</footer>
                </blockquote> */}
            </ContentSection>

            <ContentSection className="py-6 col-sm-12 col-md-9 col-lg-7">
                <section>
                    <h2 className="mb-4 display-4 font-weight-bold mw-600">
                        Nutanix has renewed confidence in its vulnerability remediation
                    </h2>
                    <p>
                        <span className="font-weight-bold">Tracking down the Log4j vulnerability was, </span>
                        in Jon's words, like “herding cats who were herding mice at the same time.”
                    </p>
                    <p>
                        Without Sourcegraph, Jon would have either been tracking down whoever built each component to
                        ask them how and where they used Log4j or stumbling through all of the company's repositories.
                    </p>
                    <p>
                        Using Sourcegraph, Jon discovered every instance of Log4j and was fully confident in the
                        results. “It's nice,” Jon said, “when you can just run a report and say, 'Here it is,'' or 'Here
                        it isn't.'' It's much better than having to say, 'Well, boss, I think we got it all.’”
                    </p>
                    Nutanix needed that confidence because of its sprawling codebase. One thing that made Log4j
                    especially complicated for Nutanix—as it does for other large-scale enterprises—is that there were
                    multiple source control systems in play. Sourcegraph provided them with “unified visibility,”
                    according to Jon. “I can't imagine the pain of having to do that either with grep or OpenGrok,” he
                    added.
                    <p>
                        Confidence spread from Jon to the rest of the team and throughout the company. With
                        <Link to="/blog/introducing-search-contexts/"> search contexts</Link>, Jon was able to share
                        relevant contexts and queries, showing the team how they could verify whether a given Log4j
                        instance was present or absent. He could show them precisely what they changed.
                    </p>
                    <p>
                        “We used Sourcegraph contexts to see specifically where a service was at any given point in
                        time,” Jon said. Without Sourcegraph, the team would've had to use code scanning, which takes a
                        lot of time, or manual build inspections, which aren't foolproof.
                    </p>
                </section>
            </ContentSection>

            <div className="bg-gradient-blue-mist py-lg-7 p-5">
                <h2 className="text-center pb-5 display-3 font-weight-bold">Results</h2>
                <div className="mb-5 row">
                    <div className="col-sm-12 col-md-4 text-center">
                        <h3 className="pb-3 font-weight-bold text-blue7">{'<'} 5 min</h3>
                        <p className="mw-md-400 mw-lg-250 mw-xl-250 mx-auto">
                            Nutanix was able to see where JMSAppender existed, fix it, and send out a release all in
                            less than 5 minutes.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-4 text-center">
                        <h3 className="pb-3 font-weight-bold text-blue7">4 days</h3>
                        <p className="mw-md-400 mw-lg-250 mw-xl-250 mx-auto">
                            Nutanix was able to deliver patches to its customers that fully remediated the Log4j
                            vulnerability.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-4 text-center">
                        <h3 className="pb-3 font-weight-bold text-blue7">100%</h3>
                        <p className="mw-md-400 mw-lg-250 mw-xl-250 mx-auto">
                            Nutanix was able to confidently identify every instance of Log4j across its sprawling
                            codebase.
                        </p>
                    </div>
                </div>
            </div>

            <ContentSection color="white" className="py-6 col-sm-12 col-md-9 col-lg-7">
                <section>
                    <h2 className="mb-4 display-4 font-weight-bold mw-500">
                        Log4j is the tip of the open-source vulnerability iceberg
                    </h2>
                    <p>
                        <span className="font-weight-bold">With Sourcegraph's help,</span>
                        Nutanix was able to transform a trust-threatening risk into a trust-building opportunity. Their
                        customers, Jon explained, were worried about hundreds of other vendors, all of whom were likely
                        affected by Log4j.
                    </p>
                    <p>
                        “That's hopefully something customers will remember us for,” Jon said. “We quickly either
                        provided them with clarity or gave them a line on the next available patch because we were able
                        to identify the issue and start fixing it ASAP.”
                    </p>
                    <p>
                        Jon explained that, at many enterprises, dependencies are unseen and forgotten. “You might check
                        in on a dependency and find it hasn't been reviewed for four, five, six, or even ten years. But
                        it works, so why update it?”
                    </p>
                    Log4j is one of many reasons why monitoring and updating is now a renewed priority. “Companies will
                    have to be more diligent,” Jon said.
                    <p>Sourcegraph is the best way to find and fix the next Log4j vulnerability.</p>
                </section>
            </ContentSection>

            <AuthorBio
                customer="Nutanix"
                image="/case-studies/jon-kohler.png"
                author="Jon Kohler"
                title="Technical Director of Solution Engineering at Nutanix"
                about="Nutanix has 20,000 customers, an annual revenue of nearly $1.394 billion, and over 6,000 employees. Organizations around the world rely on Nutanix software as a single platform to manage any app at any scale for their hybrid multicloud environments."
            />

            <div className="bg-light-gray2">
                <ContentSection>
                    <div className="row d-flex flex-column mx-4 mx-lg-0 py-7 align-items-lg-center align-items-left">
                        <div className="mb-5 d-flex flex-column">
                            <h1 className="text-center font-weight-bold">Get started with Sourcegraph</h1>
                            <p className="text-center">
                                Understand, fix, and automate changes across your entire codebase.
                            </p>
                        </div>
                        <div className="d-flex flex-column">
                            <a
                                className="btn btn-primary"
                                href="https://info.sourcegraph.com/demo-request"
                                title="Request a Demo."
                            >
                                Request a demo
                            </a>
                            <Link to="/get-started" className="d-flex justify-content-center mt-4">
                                <p className="font-weight-bold">Try Sourcegraph now</p>
                            </Link>
                        </div>
                    </div>
                </ContentSection>
            </div>

            <ContentSection color="white" className="py-lg-7 py-5">
                <h1 className="pl-5 pb-5 display-3 font-weight-bold">Explore other case studies</h1>
                <CaseStudiesList listLength={4} />
            </ContentSection>
        </div>
    </Layout>
)) as React.FunctionComponent<any>

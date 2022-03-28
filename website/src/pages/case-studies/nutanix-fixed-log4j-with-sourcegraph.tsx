import * as React from 'react'
import { Link } from 'gatsby'
import { CaseStudyJumbotron } from '../../components/content/CaseStudyPage'
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
            <CaseStudyJumbotron className="bg-gradient-onahau-fog text-black height-450" color="white" customer="Nutanix">
                <h1 className="text-black py-5 px-7 py-auto">Nutanix fixed Log4j quickly and confidently with Sourcegraph</h1>
            </CaseStudyJumbotron>

            <ContentSection color="white" className="py-6 text-center col-sm-12 col-md-9 col-lg-7">
                <blockquote>
                    <div className="my-4">
                        <img src="/external-logos/nutanix-logo.svg" width="210px" alt="nutanix" />
                    </div>
                    <h1 className="font-weight-normal">
                        "Sourcegraph was the right product at the right time."
                    </h1>
                    <footer className="blockquote-footer">Jon Kohler, Technical Director of Solution Engineering at Nutanix</footer>
                </blockquote>
            </ContentSection>

            <section className="d-flex">
                <div className="bg-light-gray-2 p-6 col-sm-12 col-md-6">
                    <div className="mb-5 ml-5 row">
                        <ClipboardTextOutlineIcon color="#00A1C7" size={30} />
                        <div className="pl-3 w-75">
                            <h5 className="font-weight-semibold">Use case</h5>
                            <p>Find and fix security vulnerabilities quickly across the code base.</p>
                        </div>
                    </div>
                    <div className="mb-5 ml-5 row">
                        <FlagOutlineIcon color="#00A1C7" size={30} />
                        <div className="pl-3 w-75">
                            <h5 className="font-weight-semibold">Challenge</h5>
                            <ul className="pl-3">
                                <li>Inability to efficiently find all the instances of Log4j in their large codebase.</li>
                                <li>Lack of code-level clarity that vulnerabilities were completely resolved.</li>
                                <li>Uncertainty about the scope and impact of the Log4j vulnerability.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-5 ml-5 row">
                        <CheckCircleOutlineIcon color="#00A1C7" size={30} />
                        <div className="pl-3 w-75">
                            <h5 className="font-weight-semibold">Solution</h5>
                            <ul className="pl-3">
                                <li>Able to quickly and efficiently find every instance of the Log4j vulnerability.</li>
                                <li>Full confidence that all Log4j-vulnerable code was identified and resolved.</li>
                                <li>Able to quickly validate that no known vulnerabilities exist in the codebase prior to each release.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-blue-mist p-6 col-sm-12 col-md-6">
                    <div className="mb-5 ml-5 row">
                        <ChartBarIcon color="#00A1C7" size={30} />
                        <div className="pl-3 w-75">
                            <h5 className="font-weight-semibold">Result</h5>
                            <ul className="pl-3">
                                <li>Nutanix was able to see where JMSAppender existed, fix it, and send out a release all in less than 5 minutes.</li>
                                <li>Nutanix was able to deliver patches to its customers that fully remediated the Log4j vulnerability.</li>
                                <li>Nutanix was able to confidently identify every instance of Log4j across its sprawling codebase.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ContentSection color="white" className="py-6 col-sm-12 col-md-9 col-lg-7">
                <section>
                    <p>
                        As the Technical Director of Solution Engineering at Nutanix, Jon Kohler understands the complexity involved in securing the multitude of applications and solutions required to power such a large organization. “Security is something that we care about intensely here at Nutanix,” Jon said, “because it’s part of our bedrock. It's why customers like us, and we have to take it seriously.”
                    </p>
                    <h2 className="mt-6 mb-4 font-weight-normal">
                        Log4j: The vulnerability that rocked an industry
                    </h2>
                    <p>
                        <span className="font-weight-bold">In December of 2021,</span> software companies around the world discovered that Log4j, an open-source logging library bundled in many software packages, contained significant vulnerabilities, one of which was a 10/10 on the CVSS scale. The Federal Trade Commission called the library “ubiquitous.”
                    </p>
                    <p>
                        Jon discovered that the offending module recurred throughout their build. “The more we dug,” Jon explained, “the more we realized this bug was everywhere and nowhere at the same time.”
                    </p>
                    <p>
                        Nutanix moved quickly, despite having multiple build and artifact management systems, as well as a large monorepo with many component branches and hundreds of git repositories. In under four days, Nutanix was able to deliver patches to its customers that fully remediated the Log4j vulnerability.
                    </p>
                </section>
            </ContentSection>

            <ContentSection className="py-6 col-sm-12 col-md-9 col-lg-7">
                <h2 className="font-weight-normal mb-4">
                    Nutanix used Sourcegraph to identify every instance of Log4j within 2 days
                </h2>
                <p>
                    <span className="font-weight-bold">Speed was of the essence,</span>
                     but the timing of the Log4j news, which broke right before many employees go on vacation for the winter holidays, didn't make things easy.
                </p>
                <p>
                    However, Nutanix armed its engineers with Sourcegraph. Within a couple of days, a few Sourcegraph queries identified every instance of the Log4j vulnerability.
                </p>
                <p>
                    With the Log4j 1.x vulnerability, for instance, codebases were only insecure if they used JMSAppender. Jon used Sourcegraph to see where JMSAppender existed, fixed it, and sent out a release. “That took almost less than five minutes,” Jon said. Sourcegraph released a blog post that explained how other companies addressing Log4j could use code search for similar benefits.
                </p>
                <p>
                    This speed gave the team a head start on mitigation.
                </p>
                <p>
                    Deploying these fixes required quality assurance and testing as well as discovery and fixing. Within a week and a half, Nutanix had deployed three back-to-back patches.
                </p>
                <p>
                    With the help of Sourcegraph, Nutanix was able to release these patches relatively quickly compared to other companies. Nutanix's customers reported satisfaction with both the speed of the patches and their quality.
                </p>
                <p>
                    “We tried to take a measured approach,” Jon said. “We wanted to get things done quickly but without completely flying by the seats of our pants.”
                </p>
            </ContentSection>

            <ContentSection color="white" className="py-6 text-center col-sm-12 col-md-9 col-lg-7">
                <blockquote className="py-6">
                    <h3 className="font-weight-normal">
                        “It's nice when you can just run a report and say, 'Here it is,'' or 'Here it isn't.'' It's much better than having to say, 'Well, boss, I think we got it all.’”
                    </h3>
                    <footer className="blockquote-footer">Jon Kohler</footer>
                </blockquote>
            </ContentSection>

            <ContentSection className="py-6 col-sm-12 col-md-9 col-lg-7">
                <section>
                    <h2 className="font-weight-normal mb-4">
                        Nutanix has renewed confidence in its vulnerability remediation
                    </h2>
                    <p>
                        <span className="font-weight-bold">Tracking down the Log4j vulnerability was,</span>
                         in Jon's words, like “herding cats who were herding mice at the same time.”
                    </p>
                    <p>
                        Without Sourcegraph, Jon would have either been tracking down whoever built each component to ask them how and where they used Log4j or stumbling through all of the company's repositories.
                    </p>
                    <p>
                        Using Sourcegraph, Jon discovered every instance of Log4j and was fully confident in the results. “It's nice,” Jon said, “when you can just run a report and say, 'Here it is,'' or 'Here it isn't.'' It's much better than having to say, 'Well, boss, I think we got it all.’”
                    </p>
                        Nutanix needed that confidence because of its sprawling codebase. One thing that made Log4j especially complicated for Nutanix—as it does for other large-scale enterprises—is that there were multiple source control systems in play. Sourcegraph provided them with “unified visibility,” according to Jon. “I can't imagine the pain of having to do that either with grep or OpenGrok,” he added.
                    <p>
                        Confidence spread from Jon to the rest of the team and throughout the company. With search contexts, Jon was able to share relevant contexts and queries, showing the team how they could verify whether a given Log4j instance was present or absent. He could show them precisely what they changed.
                    </p>
                    <p>
                        “We used Sourcegraph contexts to see specifically where a service was at any given point in time,” Jon said. Without Sourcegraph, the team would've had to use code scanning, which takes a lot of time, or manual build inspections, which aren't foolproof.
                    </p>
                </section>
            </ContentSection>

            <div className="bg-gradient-blue-mist p-md-7 p-sm-2">
                <h3 className="text-center pb-5">Results</h3>
                <div className="mb-5 ml-5 row">
                    <div className="col-sm-12 col-md-4 text-center">
                        <h3 className="pb-3 font-weight-semibold">5 min</h3>
                        <p>Nutanix was able to see where JMSAppender existed, fix it, and send out a release all in less than 5 minutes.</p>
                    </div>
                    <div className="col-sm-12 col-md-4 text-center">
                        <h3 className="pb-3 font-weight-semibold">4 days</h3>
                        <p>Nutanix was able to deliver patches to its customers that fully remediated the Log4j vulnerability.</p>
                    </div>
                    <div className="col-sm-12 col-md-4 text-center">
                        <h3 className="pb-3 font-weight-semibold">100%</h3>
                        <p>Nutanix was able to confidently identify every instance of Log4j across its sprawling codebase.</p>
                    </div>
                </div>
            </div>

            <ContentSection color="white" className="py-6 col-sm-12 col-md-9 col-lg-7">
                <section>
                    <h2 className="font-weight-normal mb-4">
                        Log4j is the tip of the open-source vulnerability iceberg
                    </h2>
                    <p>
                        <span className="font-weight-bold">With Sourcegraph's help,</span>
                         Nutanix was able to transform a trust-threatening risk into a trust-building opportunity. Their customers, Jon explained, were worried about hundreds of other vendors, all of whom were likely affected by Log4j.
                    </p>
                    <p>
                        “That's hopefully something customers will remember us for,” Jon said. “We quickly either provided them with clarity or gave them a line on the next available patch because we were able to identify the issue and start fixing it ASAP.”
                    </p>
                    <p>
                        Jon explained that, at many enterprises, dependencies are unseen and forgotten. “You might check in on a dependency and find it hasn't been reviewed for four, five, six, or even ten years. But it works, so why update it?”
                    </p>
                        Log4j is one of many reasons why monitoring and updating is now a renewed priority. “Companies will have to be more diligent,” Jon said.
                    <p>
                        Sourcegraph is the best way to find and fix the next Log4j vulnerability.
                    </p>
                </section>
            </ContentSection>

            <div className="bg-light-gray2">
                <ContentSection>
                    <div className="row d-flex flex-column mx-4 mx-lg-0 py-7 align-items-lg-center align-items-left">
                        <div className="mb-5 d-flex flex-column">
                            <h1 className="font-weight-bold">Get started with Sourcegraph</h1>
                            <p className="text-center">Understand, fix, and automate changes across your entire codebase.</p>
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
        </div>
    </Layout>
)) as React.FunctionComponent<any>

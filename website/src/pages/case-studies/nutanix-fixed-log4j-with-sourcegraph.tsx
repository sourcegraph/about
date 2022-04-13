import React, { FunctionComponent } from 'react'
import { PageProps, Link } from 'gatsby'
import slugify from 'slugify'

import { Blockquote, BlockquoteWithLogoTop } from '../../components/Blockquote'
import { CaseStudyJumbotron, AuthorBio } from '../../components/content/CaseStudyPage'
import { CaseStudyCard, CASESTUDIES } from '../../components/product/CaseStudyCard'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'

import ClipboardTextOutlineIcon from 'mdi-react/ClipboardTextOutlineIcon'
import ChartBarIcon from 'mdi-react/ChartBarIcon'
import CheckCircleOutlineIcon from 'mdi-react/CheckCircleOutlineIcon'
import FlagOutlineIcon from 'mdi-react/FlagOutlineIcon'

const NutanixCaseStudy: FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={{
            title: 'Nutanix fixed Log4j quickly and confidently with Sourcegraph',
            description:
                'Nutanix case study. Learn how Nutanix uses Sourcegraph to find and fix security vulnerabilities quickly across their code base.',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
    >
        <div className={`${slugify('Nutanix').toLowerCase()}-case-study`}>
            <CaseStudyJumbotron
                className="bg-gradient-saturn-saturated text-black h-md-450 h-auto p-2"
                color="white"
                customer="Nutanix"
            >
                <h1 className="pt-5 pb-6 display-2 font-weight-bold max-w-600 mx-auto">
                    Nutanix fixed Log4j quickly and confidently with Sourcegraph
                </h1>
            </CaseStudyJumbotron>

            <ContentSection color="white" className="py-6 text-center max-w-600">
                <BlockquoteWithLogoTop
                    quote={`Sourcegraph was the right product at the right time.`}
                    by="Jon Kohler, Technical Director of Solution Engineering at Nutanix"
                    logoHref="https://nutanix.com"
                    logoAlt="Nutanix"
                    logoImage="/external-logos/nutanix-logo.svg"
                />
            </ContentSection>

            <section className="d-flex flex-column flex-md-row">
                <div className="bg-light-gray-4 p-lg-6 p-md-5 px-1 py-5 col-sm-12 col-md-6">
                    <section className="max-w-xl-550 ml-xl-auto">
                        <div className="mb-5 ml-3 d-flex flex-column flex-md-row justify-content-lg-end">
                            <div className="d-flex bg-white align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 rounded-circle text-center p-1 max-w-50">
                                <ClipboardTextOutlineIcon size={40} className="p-1 text-blurple" />
                            </div>
                            <div className="pl-3 col-11 col-lg-9">
                                <h5 className="font-weight-bold">Use case</h5>
                                <ul className="pl-4">
                                    <li>
                                        <Link to="/use-cases/vulnerabilities">
                                            Find and fix security vulnerabilities quickly across the codebase.
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-5 ml-3 d-flex flex-column flex-md-row justify-content-lg-end">
                            <div className="d-flex bg-white align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 rounded-circle text-center p-1 max-w-50">
                                <FlagOutlineIcon size={40} className="p-1 text-blurple" />
                            </div>
                            <div className="pl-3 col-11 col-lg-9">
                                <h5 className="font-weight-bold">Challenge</h5>
                                <ul className="pl-4">
                                    <li>
                                        Inability to efficiently find all the instances of Log4j in their large
                                        codebase.
                                    </li>
                                    <li>Lack of code-level clarity that vulnerabilities were completely resolved.</li>
                                    <li>Uncertainty about the scope and impact of the Log4j vulnerability.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mb-5 ml-3 d-flex flex-column flex-md-row justify-content-lg-end">
                            <div className="d-flex bg-white align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 rounded-circle text-center p-1 max-w-50">
                                <CheckCircleOutlineIcon size={40} className="p-1 text-blurple" />
                            </div>
                            <div className="pl-3 col-11 col-lg-9">
                                <h5 className="font-weight-bold">Solution</h5>
                                <ul className="pl-4">
                                    <li>
                                        Able to quickly and efficiently find every instance of the Log4j vulnerability.
                                    </li>
                                    <li>Full confidence that all Log4j-vulnerable code was identified and resolved.</li>
                                    <li>
                                        Able to quickly validate that no known vulnerabilities exist in the codebase
                                        prior to each release.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="bg-gradient-venus-radial p-lg-6 p-md-5 px-1 py-5 col-sm-12 col-md-6">
                    <section className="max-w-xl-550">
                        <div className="mb-5 ml-3 ml-lg-0 d-flex flex-column flex-md-row">
                            <div className="d-flex bg-white align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 rounded-circle text-center p-1 max-w-50">
                                <ChartBarIcon size={40} className="p-1 text-blurple" />
                            </div>
                            <div className="pl-3 col-11 col-lg-9">
                                <h5 className="font-weight-bold">Results</h5>
                                <ul className="pl-4">
                                    <li>
                                        Nutanix was able to see where JMSAppender existed, fix it, and send out a
                                        release in less than 5 minutes.
                                    </li>
                                    <li>
                                        Nutanix was able to deliver patches to its customers that fully remediated the
                                        Log4j vulnerability in under 4 days.
                                    </li>
                                    <li>
                                        Nutanix was able to identify every instance of Log4j across its sprawling
                                        codebase with 100% confidence.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

            <ContentSection color="white" className="py-6 max-w-700">
                <p>
                    As the Technical Director of Solution Engineering at Nutanix, Jon Kohler understands the complexity
                    involved in securing the multitude of applications and solutions required to power such a large
                    organization. “Security is something that we care about intensely here at Nutanix,” Jon said,
                    “because it's part of our bedrock. It's why customers like us, and we have to take it seriously.”
                </p>
                <h2 className="mt-6 mb-4 display-4 font-weight-bold max-w-600">
                    Log4j: The vulnerability that rocked an industry
                </h2>
                <p>
                    <span className="font-weight-bold">In December of 2021, </span>
                    software companies around the world discovered that Log4j, an open-source logging library bundled in
                    many software packages, contained significant vulnerabilities, one of which was a{' '}
                    <a target="_blank" rel="noreferrer" href="https://logging.apache.org/log4j/2.x/security.html">
                        10/10 on the CVSS scale
                    </a>
                    {'. '}
                    The Federal Trade Commission called the library “
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2022/01/ftc-warns-companies-remediate-log4j-security-vulnerability"
                    >
                        ubiquitous
                    </a>
                    .”
                </p>
                <p>
                    Jon discovered that the offending module recurred throughout their build. “The more we dug,” Jon
                    explained, “the more we realized this bug was everywhere and nowhere at the same time.”
                </p>
                <p>
                    Nutanix moved quickly, despite having multiple build and artifact management systems, as well as a
                    large monorepo with many component branches and hundreds of git repositories. In under four days,
                    Nutanix was able to deliver patches to its customers that fully remediated the Log4j vulnerability.
                </p>
            </ContentSection>

            <ContentSection className="py-6 max-w-700">
                <h2 className="mb-4 display-4 font-weight-bold max-w-600">
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
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://logging.apache.org/log4j/1.2/apidocs/org/apache/log4j/net/JMSAppender.html"
                    >
                        {' '}
                        JMSAppender
                    </a>
                    . Jon used Sourcegraph to see where JMSAppender existed, fixed it, and sent out a release. “That
                    took almost less than five minutes,” Jon said. Sourcegraph released a
                    <Link to="/blog/log4j-log4shell-0-day/"> blog post </Link>
                    that explained how other companies addressing Log4j could use code search for similar benefits.
                </p>
                <p>This speed gave the team a head start on mitigation.</p>
                <p>Deploying these fixes required quality assurance and testing as well as discovery and fixing.</p>
                <p>
                    With the help of Sourcegraph, Nutanix was able to release three back-to-back patches relatively
                    quickly compared to other companies. Nutanix's customers reported satisfaction with both the speed
                    of the patches and their quality.
                </p>
                <p>
                    “We tried to take a measured approach,” Jon said. “We wanted to get things done quickly but without
                    completely flying by the seats of our pants.”
                </p>
            </ContentSection>

            <ContentSection color="white" className="py-6 max-w-700 text-pale-sky">
                <Blockquote
                    border={true}
                    quote="It's nice when you can just run a report and say, 'Here it is,' or 'Here it isn't.' It's much
                    better than having to say, 'Well, boss, I think we got it all.'"
                    by="Jon Kohler, Technical Director of Solution Engineering at Nutanix"
                />
            </ContentSection>

            <ContentSection className="py-6 max-w-700">
                <section>
                    <h2 className="mb-4 display-4 font-weight-bold max-w-600">
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
                        it isn't.'' It's much better than having to say, 'Well, boss, I think we got it all.'”
                    </p>
                    <p>
                        Nutanix needed that confidence because of its sprawling codebase. One thing that made Log4j
                        especially complicated for Nutanix—as it does for other large-scale enterprises—is that there
                        were multiple source control systems in play. Sourcegraph provided them with “unified
                        visibility,” according to Jon. “I can't imagine the pain of having to do that either with grep
                        or OpenGrok,” he added.
                    </p>
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

            <div className="bg-gradient-venus-radial py-lg-7 p-5">
                <section className="container-xl">
                    <h2 className="text-center pb-5 display-3 font-weight-bold">Results</h2>
                    <div className="mb-5 row">
                        <div className="col-sm-12 col-md-4 text-center">
                            <h3 className="pb-3 font-weight-bold text-curious-blue">{'<'} 5 min</h3>
                            <p className="max-w-md-400 max-w-lg-250 max-w-xl-250 mx-auto">
                                Nutanix was able to see where JMSAppender existed, fix it, and send out a release in
                                less than 5 minutes.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-4 text-center">
                            <h3 className="pb-3 font-weight-bold text-curious-blue">4 days</h3>
                            <p className="max-w-md-400 max-w-lg-250 max-w-xl-250 mx-auto">
                                Nutanix was able to deliver patches to its customers that fully remediated the Log4j
                                vulnerability.
                            </p>
                        </div>
                        <div className="col-sm-12 col-md-4 text-center">
                            <h3 className="pb-3 font-weight-bold text-curious-blue">100% confidence</h3>
                            <p className="max-w-md-400 max-w-lg-250 max-w-xl-250 mx-auto">
                                Nutanix was able to confidently identify every instance of Log4j across its sprawling
                                codebase.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <ContentSection color="white" className="py-6 max-w-700 col-xl-5">
                <section>
                    <h2 className="mb-4 display-4 font-weight-bold max-w-600">
                        Log4j is the tip of the open-source vulnerability iceberg
                    </h2>
                    <p>
                        <span className="font-weight-bold">With Sourcegraph's help, </span>
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
                    <p>
                        Log4j is one of many reasons why monitoring and updating is now a renewed priority. “Companies
                        will have to be more diligent,” Jon said. With Sourcegraph, Nutanix is prepared to
                        <Link to="/use-cases/vulnerabilities"> find and fix the next vulnerability</Link>.
                    </p>
                </section>
            </ContentSection>

            <AuthorBio
                customer="Nutanix"
                image="/case-studies/jon-kohler.png"
                author="Jon Kohler"
                title="Technical Director of Solution Engineering at Nutanix"
                about="Nutanix has 20,000 customers, an annual revenue of nearly $1.394 billion, and over 6,000 employees. Organizations around the world rely on Nutanix software as a single platform to manage any app at any scale for their hybrid multicloud environments."
            />

            <div className="bg-light-gray-3">
                <ContentSection>
                    <div className="row d-flex flex-column mx-4 mx-lg-0 py-7 align-items-lg-center align-items-left">
                        <div className="mb-5 d-flex flex-column">
                            <h1 className="text-center font-weight-bold">Get started with Sourcegraph</h1>
                            <p className="text-center">
                                Understand, fix, and automate changes across your entire codebase.
                            </p>
                        </div>
                        <div className="d-flex flex-column">
                            <Link to="/demo" className="btn btn-primary">
                                Request a demo
                            </Link>
                            <Link to="/get-started" className="d-flex justify-content-center mt-4">
                                <p className="font-weight-bold">Try Sourcegraph now</p>
                            </Link>
                        </div>
                    </div>
                </ContentSection>
            </div>

            <ContentSection color="white" className="py-lg-7 py-5 col-xl-6">
                <h1 className="pl-5 pb-5 display-3 font-weight-bold">Explore other case studies</h1>
                <div className="d-flex flex-wrap">
                    {CASESTUDIES.slice(1, 5).map((study, i) => (
                        <div key={i} className="col-lg-6 mb-3">
                            <CaseStudyCard study={study} />
                        </div>
                    ))}
                </div>
            </ContentSection>
        </div>
    </Layout>
)

export default NutanixCaseStudy

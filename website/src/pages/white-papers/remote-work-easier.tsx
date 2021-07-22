import { Link } from 'gatsby'
import TwitterIcon from 'mdi-react/TwitterIcon'
import * as React from 'react'
import * as bg from '../../../static/white-papers/remote-easier-bg_1680x300.png'
import * as codelinksharing from '../../../static/white-papers/remotework_codelinksharing.png'
import * as codereview from '../../../static/white-papers/remotework_codereview.png'
import * as commithistory from '../../../static/white-papers/remotework_commithistory.png'
import { ContentSection } from '../../components/content/ContentSection'
import {
    InContentBlockquote,
    InContentImage,
    WhitePaperPage,
    WhitePaperRequestDemoForm,
} from '../../components/content/WhitePaperPage'
import Layout from '../../components/Layout'

export default ((props: any) => (
    <Layout
        location={props.location}
        meta={{
            title: 'Sourcegraph white paper: Remote software development made easier',
            description:
                'Sourcegraph transitioned from remote-first to all-remote early 2020. Here is a compilation of tips and tricks on how to live your best distributed work life and a summary of the benefits of using Sourcegraph when working remotely.',
            image: 'https://about.sourcegraph.com/white-papers/remote-easier.jpg',
        }}
    >
        <WhitePaperPage
            title="Remote software development made easier"
            quote={{
                quote:
                    'Any tool that empowers you to find the answer to your own question is good for remote work, and Sourcegraph is such a tool.',
                author: 'Nick Snyder, VP Engineering at Sourcegraph',
            }}
            pdf="https://info.sourcegraph.com/hubfs/CTA%20assets/Sourcegraph-remote-software-development-made-easier.pdf"
            bgImage={bg}
        >
            <ContentSection color="white" className="col-md-6 pt-5">
                <div className="container">
                    <p>
                        Sourcegraph has been remote-friendly from the beginning — our two longest-tenured teammates have
                        worked remotely since 2015 from Arizona and South Africa! We moved to remote-first in May of
                        2019 and completed our transition to all-remote with the ringing-in of 2020.
                    </p>
                    <p>
                        We have compiled some excellent tips and tricks from fellow{' '}
                        <a href="https://about.sourcegraph.com/handbook/company/team">teammates</a> on how to live your best
                        distributed work life!
                    </p>
                    <h2 className="pt-5 pb-1">Tips for working remotely</h2>
                    <h3 className="pt-5 pb-1">Home office and desk setup</h3>
                    <ul>
                        <li>
                            <b>Separate work and home:</b> Try working in a different space to where you relax/sleep.
                        </li>
                        <li>
                            <b>Ergonomics are crucial:</b> Consider getting an ergonomically friendly chair and standing
                            desk.
                        </li>
                        <li>
                            <b>Get a loud keyboard:</b> You can use a loud keyboard, unlike in an office environment.
                        </li>
                    </ul>
                    <h3 className="pt-5 pb-1">Schedule</h3>
                    <ul>
                        <li>
                            <b>Stick to your plan:</b> When working from home, it’s VERY important to have a set
                            schedule. You’ll also need the discipline to respect it, or you risk blurring the lines
                            between work and life to an unhealthy degree.
                        </li>
                        <li>
                            <b>Triage:</b> In the morning, catch up on Slack/GitHub. Stick to triaging (recording in
                            org-mode Slack/issues to get back to), so you can review and respond to the smaller stuff
                            instantly. Then, create a plan for the rest of the day.
                        </li>
                        <li>
                            <b>Timebox:</b> Schedule your daily working hours (whether that's 9-5 or a variant) with
                            flexibility to work a little earlier or later. Productivity thrives with timeboxes. 'One
                            hour until lunch' or 'Two hours till the day is over' works much better than 'Let's start
                            working on this and see how long it takes.'
                        </li>
                    </ul>
                    <h3 className="pt-5 pb-1">Communication</h3>
                    <ul>
                        <li>
                            <b>Care:</b> Start by caring about your written communication. Well-written prose looks
                            exactly like well-written clean code: like someone cares. Most importantly, it should be
                            written for others to understand with no obvious typos and grammar mistakes. Always reread
                            and edit what you write. Remember to ensure that what you want to communicate is clear and
                            can be understood by someone who doesn't have all of the context and knowledge you had when
                            writing. Extra points for removing unnecessary sentences and words.
                        </li>
                        <li>
                            <b>Mind the round trip time:</b> People work in different time zones and might take a full
                            working day or night for someone to respond to your messages. To avoid a multi-day
                            back-and-forth, keep this round trip time — from you to the receiver and back — in mind. In
                            practical terms: try to provide as much information as necessary for the other person to
                            answer your request without the need for them to ask follow-up questions. Of course, that’s
                            not always possible, but the goal should be to eliminate it as much as possible.
                        </li>
                        <li>
                            <b>Raise your voice:</b> When you’re working remotely, your colleagues won’t bump into you
                            on your way to the office kitchen or stop by at your desk to ask you how your day is going.
                            Nobody is going to meet you by accident. You're not visible if you don't raise your voice.
                            Actively communicate your progress, proactively ask for help, clearly document what you
                            know, etc.'
                        </li>
                    </ul>
                    <h2 className="pt-5 pb-1">Benefits of using Sourcegraph when working remotely</h2>
                    <p>
                        There is no Sourcegraph office beyond an official mailbox – all of our developers, managers, and
                        executives are remote. We understand what makes remote work successful. We believe what we have
                        built with Sourcegraph will be invaluable to you. Your remote development experience, whether
                        you’re a work-from-home expert or newbie, will grow stronger than ever.
                    </p>
                    <p>Below are some ways Sourcegraph improves working together effectively on a remote team.</p>
                    <h3 className="pt-5 pb-1">Reduce communication needed when reviewing changes</h3>
                    <p>
                        When reviewing code, you need a deep understanding of what that code does. If you aren’t
                        familiar with how it works, you may spend a lot of time asking the change author questions,
                        which is time-consuming for both you and the author.
                    </p>
                    <p>
                        We built the Sourcegraph browser extension to help you more quickly navigate and understand code
                        (among other things!). The Sourcegraph browser extension provides hover tooltips directly in
                        GitHub, GitLab, Bitbucket, and many other code hosts when reviewing code. When doing code
                        reviews, you can learn by example, finding references to and documentation for the code you are
                        reviewing. This allows you to build a comprehensive understanding of how the code works and
                        ensure your questions are specific to what the author has changed.
                    </p>
                    <InContentImage
                        src={codereview}
                        alt="Sourcegraph’s go to definition and find references hover tooltip on a code review"
                    />
                    <InContentBlockquote
                        quote="Having Sourcegraph is an improvement for several reasons. It’s an easy way to share pointers to code and searches on code. When working remotely, I can't easily have someone look over my shoulder as I would in person. Screen sharing is possible (but with much higher-friction), and the results are harder to reproduce offline. Links to Sourcegraph are much more useful when trying to add in context for a Slack thread that blew up when I wasn't paying attention.

                        Sourcegraph is also a better way to explore unfamiliar code. It costs more to get someone's attention when asking a question (because of timezones, async channels), so when I do need to ask someone for help, I want to respect their time by doing due diligence first. Sourcegraph helps me explore the code more effectively on my own than I could with only local clones and GitHub search."
                        author="Michael Fromberger, Software Engineer at Sourcegraph"
                    />
                    <h3 className="pt-5 pb-1">Find the right people</h3>
                    <p>
                        Writing code changes—especially for new employees—can be a daunting task because you need to
                        understand large and complex systems. Sourcegraph streamlines the entire code browsing
                        experience so that no matter where you are browsing code (on GitHub, GitLab, Bitbucket, etc.),
                        you have code intelligence at your fingertips via documentation hovers, go to definition, and
                        find references. This empowers you to find answers without having to seek out help. When you do
                        need support, you can simply click to find the author of the code. Sourcegraph’s powerful search
                        engine lets you start by searching broadly for what you are working on, and then narrow it down
                        with advanced filters, including full regex search. Once you’ve found the results you need, you
                        can easily find who authored the code, and even search the repository’s entire git history to
                        see if others have made similar changes in the past—allowing you to follow the paper trail of
                        your code’s history.
                    </p>
                    <InContentImage
                        src={commithistory}
                        alt="A commit history search with highlighted code authors in Sourcegraph"
                    />
                    <InContentBlockquote
                        quote="As a Product Manager, I care about everything--features, bug fixes, improvements--that go into the product. I use a saved search in Sourcegraph to be notified by email every time there is an update to our CHANGELOG. This lets me keep track of what and when features get in and makes sure I know who to talk to about that change if I have any questions. It also removes unnecessary communication cycles between the engineering team and me because rather than needing to interrupt each team member, or require them to reach out to me to find out what is going on, I am proactively informed."
                        author="Christina Forney, Product Manager at Sourcegraph"
                    />
                    <h3 className="pt-5 pb-1">Write better documentation</h3>
                    <p>
                        We’ve found that Sourcegraph helps our engineers write better documentation. Once you have
                        information at your fingertips and see where it’s missing (like when you are hovering over
                        functions), you are more likely to improve the documentation of that code to make understanding
                        it easier at a glance.
                    </p>
                    <InContentBlockquote
                        quote="As we've grown, I've needed to hand off a lot of code ownership and processes to other people. This meant writing a lot of docs (in code and in Markdown files). Having code search makes me more likely and happier to write docs because I believe that people will be more likely to actually discover and read them."
                        author="Quinn Slack, CEO of Sourcegraph"
                    />
                    <p>
                        Sourcegraph’s search also makes it more likely that you will discover documentation that is
                        stored inside your repositories but outside your code. This increases traffic to documentation
                        and leads to people relying on it more, which in turn causes people to improve it. We have seen
                        this extensively in the{' '}
                        <a href="https://about.sourcegraph.com/handbook">Sourcegraph handbook</a>.
                    </p>
                    <h3 className="pt-5 pb-1">Share code more easily</h3>
                    <p>
                        You’re staring at some code in your editor, struggling to understand how the code actually
                        works. You decide it’s best to ask your coworker if she knows—but how do you share the code
                        you’re looking at? Walk over to her desk? Navigate through the GitHub user interface to find the
                        right file?
                    </p>
                    <InContentBlockquote
                        quote="It’s nice to be able to share links to code with Sourcegraph. It’s important for remote work because your conversation partner often cannot look at your screen."
                        author="Uwe Hoffmann, Software Engineer at Sourcegraph"
                    />
                    <p>
                        With <a href="https://docs.sourcegraph.com/integration/editor">Sourcegraph editor extensions</a>
                        , you can easily use a shortcut key to open your current selection on Sourcegraph. You can also
                        use our{' '}
                        <a href="https://docs.sourcegraph.com/integration/browser_search_engine">
                            browser search engine shortcuts
                        </a>{' '}
                        to quickly search across your entire organization’s code. Both allow you to instantly get a link
                        to that code that you can share with a coworker.
                    </p>
                    <InContentImage
                        src={codelinksharing}
                        alt="With Sourcegraph, you can share a direct link to the code you want to discuss"
                    />
                    <h3 className="pt-5 pb-1">Sourcegraph supports remote work environments in many ways. It:</h3>
                    <ul>
                        <li>Empowers you to find answers to your own questions</li>
                        <li>
                            Reduces unnecessary communication and improves the efficiency of the communications you do
                            need
                        </li>
                        <li>Makes it easier to find the right people to talk to</li>
                        <li>Showcases code dependencies to ensure informed communication</li>
                        <li>Enables link sharing to code, facilitating remote and asynchronous conversations</li>
                    </ul>
                    <InContentBlockquote
                        quote="Any tool that empowers you to find the answer to your own question is good for remote work, and Sourcegraph is such a tool. The alternative is waiting for someone else to tell you the answer, which means you are blocked in the meantime, or you have to task-switch, which is costly."
                        author="Nick Snyder, VP Engineering at Sourcegraph"
                    />
                    <br />
                </div>
            </ContentSection>
            <ContentSection color="black" className="py-5">
                <div className="row justify-content-md-center">
                    <div className="col-md-3 text-center">
                        <a href="https://twitter.com/sourcegraph" target="_blank">
                            <TwitterIcon size={72} />
                        </a>
                    </div>
                    <div className="col-md-6">
                        <h5>
                            How has Sourcegraph helped make your remote software development better?{' '}
                            <a
                                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                                className="twitter-share-button"
                                data-text='Great read on "Remote software development made easier" – @sourcegraph has helped me with ...'
                                data-url="https://about.sourgraph.com/white-papers/remote-work-easier"
                                data-related="sourcegraph"
                                data-show-count="false"
                            ></a>{' '}
                            and let us know!
                        </h5>
                    </div>
                </div>
            </ContentSection>
            <ContentSection color="gray" className="py-5">
                <div className="row justify-content-md-center">
                    <div className="col-md-3 text-center">
                        <img
                            src="/external-logos/sourcegraph-universal-code-search-ebook-v1.jpg"
                            alt="Download: Universal Code Search and Intelligence"
                            width="170"
                            className="universal-code-search--glow"
                        />
                    </div>
                    <div className="col-md-6">
                        <h5>EBOOK</h5>
                        <h3>Universal code search and intelligence</h3>
                        <h6>
                            Learn more on how Sourcegraph Universal Code Search can improve your productivity and
                            efficiency as a developer.
                        </h6>
                        <Link
                            className="btn btn-lg btn-outline-light universal-code-search__btn mt-3 font-weight-normal "
                            to="/resources/universal-code-search-ebook/?utm_medium=organic_search&utm_source=about&utm_content=universal-code-search"
                        >
                            Free download
                        </Link>
                    </div>
                </div>
            </ContentSection>
        </WhitePaperPage>
        <WhitePaperRequestDemoForm />
    </Layout>
)) as React.FunctionComponent<any>

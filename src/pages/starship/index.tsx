import { FunctionComponent } from 'react'

import { Heading, Layout, CustomerLogos, ContentSection, YouTube } from '../../components'
import { BlogListItem } from '../../components/Blog/BlogListItem'
import { DownloadAppCallToActionSection } from '../../components/cta/DownloadAppCallToActionSection'

const blogs = [
    {
        title: 'Cheating is All You Need',
        href: 'https://about.sourcegraph.com/blog/cheating-is-all-you-need',
        description:
            'There is something legendary and historic happening in software engineering, right now as we speak, and yet most of you don’t realize at all how big it is.',
        imageSrc: 'https://storage.googleapis.com/sourcegraph-assets/blog/starship-blog-hero-1.png',
    },
    {
        title: 'Sourcegraph 5.0 release post',
        href: 'https://about.sourcegraph.com/blog/release/5.0',
        description: 'Sourcegraph 5.0 introduces more than 20 updates and improvements.',
        imageSrc: 'https://storage.googleapis.com/sourcegraph-assets/blog/release-post/5.0/sourcegraph-5-0-hero.png',
    },
    {
        title: 'Announcing Sourcegraph Own',
        href: 'https://about.sourcegraph.com/blog/announcing-sourcegraph-own',
        description:
            "Sourcegraph Own, available now as an experimental feature, integrates evergreen code ownership with Sourcegraph's code intelligence platform.",
        imageSrc: 'https://storage.googleapis.com/sourcegraph-assets/blog/sourcegraph-own-og.png',
    },
    {
        title: 'Announcing the Sourcegraph app',
        href: 'https://about.sourcegraph.com/blog/announcing-sourcegraph-app',
        description:
            'The Sourcegraph app, now in beta, brings code intelligence to your local machine in a free, lightweight package.',
        imageSrc: 'https://storage.googleapis.com/sourcegraph-assets/blog/announcing-the-sourcegraph-app.png',
    },
]

declare global {
    interface Window {
        /* Type definition to add lintrk, part of the Linkedin Insights Tag, to
         * the window object, allowing to call window.lintrk()
         */
        lintrk(eventName: string, eventOptions: { conversion_id: number | string }): void
    }
}

const Starship: FunctionComponent = () => (
    <Layout
        headerColorTheme="purple"
        childrenClassName="sg-bg-gradient-starship"
        displayChildrenUnderNav={true}
        meta={{
            image: 'https://about.sourcegraph.com/starship/starship_og.png',
            title: 'Code intelligence + AI = 🤯',
            description: 'Sourcegraph 5.0, the latest release of our code intelligence platform, is now available.',
        }}
    >
        <div className="flex justify-center md:mt-[51px]">
            <img
                src="/sourcegraph/sourcegraph-mark.svg"
                className="h-[67.71px] w-[61.71px] md:h-24 md:w-24"
                alt="Sourcegraph"
            />
            <p className="ml-[17px] font-grotesk text-[40px] font-light leading-[64px] tracking-[-1px] text-white md:ml-[22px] md:text-[86px] md:leading-[110px]">
                5.0
            </p>
            <div className="ml-2 mt-2.5 h-[56.39px] w-[0.96px] bg-white sm:ml-5 md:h-[88px] md:w-[1.5px]" />
            <img
                src="/starship/starship-blur.svg"
                className="ml-2 h-[158px] w-[200px] sm:ml-5 sm:h-[209.9px] sm:w-[284px] md:ml-[31px] md:h-[327.57px] md:w-[442px]"
                alt="Starship"
            />
        </div>

        <ContentSection className="relative text-center md:-mt-[22px]" parentClassName="!py-0">
            <div className="mx-auto mb-[48px] flex max-w-[960px] flex-col md:mb-24">
                <Heading
                    size="h1"
                    className="max-w-[860px] self-center !font-grotesk !text-[36px] font-medium leading-[55px] tracking-[-1px] text-white md:text-[52px] md:leading-[73px]"
                >
                    Code intelligence + AI = 🤯
                </Heading>
                <Heading size="h3" className="mt-6 max-w-[860px] self-center font-normal text-gray-200 md:mt-4">
                    Sourcegraph 5.0, the latest release of our code intelligence platform, is now available. Watch the
                    livestream.
                </Heading>
                <YouTube
                    title="Starship Talks: A new era for software and how it’s built"
                    id="tggj3o1pL5U"
                    showTitle={true}
                />
            </div>
            <img
                src="/starship/launch.svg"
                alt="Launch Pill"
                className="absolute top-[217.7px] left-[6.29px] hidden blur-sm md:block lg:left-[90.29px]"
            />
        </ContentSection>

        <ContentSection className="mb-16 pt-[16px] md:mb-24" parentClassName="!py-0">
            <Heading size="h3" className="mb-6 max-w-[604px] text-white md:mb-16">
                Learn more about Sourcegraph 5.0
            </Heading>
            {blogs.map(blog => (
                <BlogListItem key={blog.title} {...blog} />
            ))}
        </ContentSection>

        {/* CTA */}
        <ContentSection parentClassName="relative !pt-0 !px-0" className="flex flex-col items-center text-white">
            <Heading
                size="h2"
                className="max-w-[728px] px-sm text-center !font-grotesk !text-4xl font-medium !tracking-[-1px]"
            >
                Over 1.8M engineers use Sourcegraph to build software you rely on
            </Heading>

            <CustomerLogos dark={true} monochrome={true} className="-px-sm !bg-transparent md:pb-5xl" />

            <DownloadAppCallToActionSection colorTheme="dark" />

            <img
                className="absolute hidden h-[280px] lg:left-[8%] lg:bottom-[160px] lg:block 2xl:left-[21%]"
                src="/backgrounds/background-launch-pill.svg"
                alt="Starship"
            />
            <img
                className="absolute hidden h-[640px] lg:-bottom-[390px] lg:left-[0] lg:block xl:left-[2%] xl:-bottom-[390px] 2xl:left-[16%]"
                src="/backgrounds/midground-launch-pill.svg"
                alt="Starship"
            />
            <img
                className="absolute hidden h-[800px] lg:-bottom-[290px] lg:right-[0] lg:block xl:right-[2%] xl:-bottom-[390px] 2xl:right-[14%]"
                src="/backgrounds/foreground-launch-pill.svg"
                alt="Starship"
            />
        </ContentSection>
    </Layout>
)

export default Starship

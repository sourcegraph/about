import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { ContentSection, ExternalsAuth, Heading } from '..'

interface CodyCtaProps {
    onContactClick: () => void
}

export const CodyCta: FunctionComponent<CodyCtaProps> = ({ onContactClick }) => (
    <ContentSection
        id="contact-form"
        parentClassName="!py-0"
        className="mx-auto flex flex-col gap-6 py-16 pt-16 md:flex-row md:py-[112px]"
    >
        <div className="flex flex-col gap-8 md:max-w-[352px]">
            <Heading size="h2" className="!text-[47px] text-white">
                Get started with Cody (beta)
            </Heading>
        </div>

        <div className="max-w-[440px] rounded-lg border border-white border-opacity-25 bg-[#612590] p-6 md:max-w-fit">
            <Heading size="h2" className="!text-4xl text-white">
                Cody free tier
            </Heading>
            <p className="mt-6 max-w-[413.5px] text-lg text-gray-200">
                Free forever for individual devs on public and private code, with a generous rate limit.
            </p>
            <div className="mt-6 flex flex-col flex-wrap gap-4 md:flex-row md:gap-2">
                <div className="flex flex-row flex-wrap gap-4 md:gap-2 lg:flex-nowrap">
                    <ExternalsAuth
                        className="flex-1 justify-center !font-normal md:w-fit"
                        authProvider="github"
                        label="GitHub"
                        source="about-cody"
                    />
                    <ExternalsAuth
                        className="flex-1 justify-center !font-normal md:w-fit"
                        authProvider="gitlab"
                        label="GitLab"
                        source="about-cody"
                    />
                    <ExternalsAuth
                        className="flex-1 justify-center !font-normal md:w-fit"
                        authProvider="google"
                        label="Google"
                        source="about-cody"
                    />
                </div>
            </div>
            <p className="mt-4 text-[14px] text-violet-300 opacity-70">
                By registering, you agree to our{' '}
                <Link className="text-violet-300 underline" target="_blank" href="https://about.sourcegraph.com/terms">
                    Terms of Service
                </Link>{' '}
                and{' '}
                <Link
                    className="text-violet-300 underline"
                    target="_blank"
                    href="https://about.sourcegraph.com/terms/privacy"
                >
                    Privacy Policy
                </Link>
            </p>
        </div>

        <div className="flex min-h-[295px] max-w-[440px] flex-col gap-4 rounded-lg border border-white border-opacity-40 p-6">
            <Heading size="h2" className="!text-4xl text-white">
                Cody Enterprise
            </Heading>
            <p className="text-lg text-gray-200">Beta access available to Code Search customers.</p>
            <div className="flex max-w-[356px] flex-col flex-wrap gap-4 md:flex-row">
                <button
                    title="Get started with Cody"
                    className="btn btn-inverted-primary text-center"
                    type="button"
                    onClick={onContactClick}
                >
                    Contact us
                </button>
                <Link
                    href="/cody/pricing"
                    className="hidden items-center justify-center gap-[10px] font-semibold text-white hover:text-violet-300 hover:underline md:flex"
                >
                    Pricing and plans <ChevronRightIcon />
                </Link>
                <Link
                    href="/cody/pricing"
                    className="hover:bg-color-violet-600 rounded-[5px] border border-white px-5 py-3 text-center font-semibold text-white md:hidden"
                >
                    Pricing and plans
                </Link>
            </div>
        </div>
    </ContentSection>
)

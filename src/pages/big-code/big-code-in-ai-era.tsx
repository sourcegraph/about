import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { ContentSection, HubSpotForm, Layout } from '../../components'

import styles from '../../styles/CustomHubspotForm.module.scss'

interface PercentageContentProps {
    percentage: string
    description: string
    percentageClassName?: string
    descriptionClassName?: string
    wrapperClassName?: string
}

const TheRiseOfAI: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Big Code in the AI era',
            description:
                'Developers are struggling more than ever with issues around tech debt, maintenance, collaboration, and scalability. But with the overnight AI boom, the pain of Big Code is only getting worse.',
            image: 'https://about.sourcegraph.com/rise-of-ai/rise-of-ai-og.png',
        }}
        headerColorTheme="dark"
        displayChildrenUnderNav={true}
        className="relative"
    >
        <ContentSection
            parentClassName="!py-0 !px-6 overflow-x-clip"
            className="grid grid-cols-1 gap-x-4 md:grid-cols-2 md:px-6"
        >
            <div className="flex w-full max-w-[737px] flex-col">
                <h1 className="mb-6 text-white xl:w-[737px]">Big Code in the AI era</h1>

                <p className="m-0 text-lg text-gray-200">
                    The Big Code problem is a rapidly growing crisis for developers, engineering leaders, and companies
                    today because of the real threat it presents not only to tech innovation, but also to the stability
                    and security of digital products consumers use every day.
                </p>
            </div>
        </ContentSection>

        <div className="absolute right-0 ml-9 hidden h-[600px] w-full bg-[url('/rise-of-ai/illustration.png')] bg-cover bg-center bg-no-repeat md:top-[15px] md:block md:w-[400px] lg:top-[30px] lg:w-[500px] xl:w-[550px]" />

        <h3 className="relative z-10 mt-16 max-w-[838px] px-6 text-center text-white md:mx-auto md:mt-[176px]">
            Developers are struggling more than ever with issues around tech debt, maintenance, collaboration, and
            scalability. The overnight AI boom means Big Code pains are only getting worse:
        </h3>

        <ContentSection
            parentClassName="!py-0 !px-6"
            className="mt-16 flex flex-col items-center gap-6 md:flex-row md:items-start md:px-6"
        >
            <div className="flex flex-col items-center gap-3 md:w-[417px]">
                <img className="h-[237px] w-[237px]" src="/rise-of-ai/72.svg" alt="72%" />
                <h4 className="text-center text-white">Big Code’s getting bigger.</h4>
                <p className="text-center text-lg text-white">
                    77% of devs say their codebase grew 5x over the past three years.
                </p>
            </div>
            <div className="flex flex-col items-center gap-3 md:w-[417px]">
                <img className="h-[237px] w-[237px]" src="/rise-of-ai/14.svg" alt="72%" />
                <h4 className="text-center text-white">Devs aren’t writing code.</h4>
                <p className="text-center text-lg text-white">
                    Only 14% of devs’ time is actually spent writing new code for core products. The rest is spent
                    trying to search, understand, and fix code.
                </p>
            </div>
            <div className="flex flex-col items-center gap-3 md:w-[417px]">
                <img className="h-[237px] w-[237px]" src="/rise-of-ai/73.svg" alt="72%" />
                <h4 className="text-center text-white">AI brings innovation–and headaches.</h4>
                <p className="text-center text-lg text-white">
                    73% of devs already struggle with code created by someone else that is difficult to understand. This
                    number will only go up with the rise of AI.{' '}
                </p>
            </div>
        </ContentSection>

        <ContentSection
            parentClassName="!py-0 !px-6"
            className="mt-16 flex flex-col gap-[34px] rounded-[5px] bg-white p-6 md:mt-[120px] md:flex-row md:p-12 "
        >
            <h1 className="text-gray-700 md:max-w-[562px]">
                Only <span className="text-violet-500">65% of devs</span> say their company has a plan to address Big
                Code.
            </h1>
            <div className="flex flex-col md:w-[562px]">
                <p className="text-xl font-semibold">
                    Big • Code <span className="font-normal italic text-gray-500"> noun </span>
                </p>
                <p className="text-lg text-gray-700">
                    Referring to the size and complexity of codebases, containing millions of lines of code, making it
                    challenging to manage and understand without the aid of specialized tools and techniques. Without a
                    plan to address Big Code, companies face increasing complexity, higher development costs, and most
                    significantly, slowed innovation.
                </p>
            </div>
        </ContentSection>

        <h2 className="mx-6 mt-16 text-center text-white md:mx-auto md:mt-[112px]">
            We can’t ignore the Big Code problem anymore.
        </h2>

        <ContentSection
            parentClassName="!py-0 !px-6"
            className="mt-16 flex flex-col justify-between gap-6 text-center md:flex-row md:px-6"
        >
            <PercentageContent
                percentage="73"
                description="Are blocked more frequently due to the growing size of their codebase."
                wrapperClassName="flex-1 grow gap-4"
                percentageClassName="justify-center"
            />
            <PercentageContent
                percentage="82"
                description="Say they wish they could spend less time looking for information or old code and more time actually coding."
                wrapperClassName="flex-1 gap-4"
                percentageClassName="justify-center"
            />
            <PercentageContent
                percentage="85"
                description="Struggle to maintain efficiency."
                wrapperClassName="flex-1 gap-4"
                percentageClassName="justify-center"
            />
        </ContentSection>

        <ContentSection
            className="grid grid-cols-1 gap-6 px-6 py-16 md:grid-cols-2 md:px-6 md:pt-[112px] md:pb-28"
            parentClassName="!p-0"
        >
            <div>
                <h2 className="mb-[30px] max-w-[460px] text-white">The AI era is here and no one has a plan.</h2>
                <p className="max-w-[572px] text-lg text-gray-200">
                    76% of developers are excited about the rise of dev tools powered by AI, but there are still big
                    concerns around AI and its impact on Big Code:
                </p>
            </div>
            <div className="text-white">
                <div className="mb-12">
                    <img src="/rise-of-ai/progress-bar1.svg" alt="first statistic progress bar" />
                    <p className="mt-3">61% are concerned about AI’s impact on tech debt.</p>
                </div>
                <div className="mb-12">
                    <img src="/rise-of-ai/progress-bar2.svg" alt="second statistic progress bar" />
                    <p className="mt-3">
                        67% of respondents expressed concern about code sprawl due to the growth of AI.
                    </p>
                </div>
                <div>
                    <img src="/rise-of-ai/progress-bar3.svg" alt="third statistic progress bar" />
                    <p className="mt-3">
                        76% are worried about the amount of new code will be created that will then need to be managed.
                    </p>
                </div>
            </div>
        </ContentSection>

        <ContentSection className="md:mb-20 md:px-6" parentClassName="!py-0">
            <h2 className="mx-auto mb-[54px] max-w-[1061px] text-center text-white">The Big Code struggle is real.</h2>
            <div className="relative z-10 grid grid-cols-1 justify-items-center gap-6 rounded-[5px] bg-white p-4 md:grid-cols-2 md:p-12">
                <PercentageContent
                    percentage="95"
                    description="Need help getting up to speed and stay on top of the codebase significantly faster."
                    wrapperClassName="max-w-[411px] gap-4"
                    percentageClassName="justify-start !text-violet-500"
                    descriptionClassName="!text-gray-700 md:text-[22px]"
                />
                <PercentageContent
                    percentage="91"
                    description="Want to be able to ID and resolve code issues more efficiently."
                    wrapperClassName="max-w-[411px] gap-4"
                    percentageClassName="justify-start !text-violet-500"
                    descriptionClassName="!text-gray-700 md:text-[22px]"
                />
                <PercentageContent
                    percentage="91"
                    description="Would save a significant amount of time if their codebase was fully searchable across all sources and repos."
                    wrapperClassName="max-w-[411px] gap-4"
                    percentageClassName="justify-start !text-violet-500"
                    descriptionClassName="!text-gray-700 md:text-[22px]"
                />
                <PercentageContent
                    percentage="88"
                    description="Want a tool that would allow them to have a greater output with fewer people and resources."
                    wrapperClassName="max-w-[411px] gap-4"
                    percentageClassName="justify-start !text-violet-500"
                    descriptionClassName="!text-gray-700 md:text-[22px]"
                />
            </div>
        </ContentSection>

        <ContentSection
            className="flex flex-col items-center justify-center gap-8 pb-4 md:flex-row"
            parentClassName="md:!pt-8"
        >
            <div className="md:pb:0 w-full border-b border-gray-500 pb-10 md:w-fit md:border-r md:border-b-0 md:pr-8">
                <h2 className="!text-4xl text-white">Get the full report</h2>

                <div className={classNames('mx-auto mt-4 md:min-w-[400px] xl:min-w-[517px]', styles.form)}>
                    <HubSpotForm
                        formId="3612c366-2e75-4a4b-9212-6dcbd6b008fe"
                        inlineMessage={
                            'Thank you! <a style="color: var(--sg-color-white);text-decoration: underline;" href=\'https://info.sourcegraph.com/hubfs/PDFs/big-code-in-ai-report.pdf\'>Download the report here.</a>'
                        }
                    />
                </div>
            </div>
            <div className="w-full md:w-fit">
                <h2 className="mb-4 text-white md:mb-8">Put AI to work on Big Code.</h2>
                <Link
                    href="/cody"
                    className="btn btn-secondary-dark w-fit min-w-fit px-6 font-normal"
                    title="Get access to Cody"
                >
                    Get access to Cody
                </Link>
            </div>
        </ContentSection>

        <ContentSection className="py-16 md:py-28" parentClassName="bg-gray-200 !py-0  relative z-10">
            <h2 className="mb-4 text-center !text-4xl">Methodology</h2>
            <p className="mx-auto mb-0 max-w-[768px] text-center text-lg text-gray-700">
                To create our Big Code Report, we rely on survey data gathered anonymously by Ground Control Research.
                The respondents are developers and engineering leaders that vary in experience levels across several
                engineering disciplines. The respondents work at companies that span all major industries with at least
                1,000 employees.
            </p>
        </ContentSection>
    </Layout>
)

export default TheRiseOfAI

const PercentageContent: FunctionComponent<PercentageContentProps> = ({
    percentage,
    description,
    percentageClassName,
    descriptionClassName,
    wrapperClassName,
}) => (
    <div className={classNames(wrapperClassName)}>
        <div className={classNames('flex text-violet-300', percentageClassName)}>
            <h1>{percentage}</h1>
            <p className="!text-[40px] font-semibold leading-[70px]">%</p>
        </div>
        <p className={classNames('text-lg text-white', descriptionClassName)}>{description}</p>
    </div>
)

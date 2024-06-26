import { FunctionComponent } from 'react'

import classNames from 'classnames'
import CheckIcon from 'mdi-react/CheckIcon'
import CloseIcon from 'mdi-react/CloseIcon'
import CodeTags from 'mdi-react/CodeTagsIcon'
import CurrencyDollar from 'mdi-react/CurrencyUsdIcon'
import MinusCircle from 'mdi-react/MinusCircleIcon'
import Link from 'next/link'

import { ContentSection, CustomerLogos, HubSpotForm, Layout, ThreeUpText } from '../components'
import { MeetWithProductExpertButton } from '../components/cta/MeetWithProductExpertButton'
import { buttonLocation } from '../data/tracking'

import styles from '../styles/CustomHubspotForm.module.scss'

interface BatchChangesInsightProps {
    heading: React.ReactNode
    paragraph?: React.ReactNode
    listType?: 'ul' | 'ol'
    listItems: React.ReactNode[]
    quoteText: React.ReactNode
    wrapperClassName?: string
}

interface WorkflowStatsProps {
    title?: string
    stats?: React.ReactNode[]
    borderColorClass?: string
    textColorClass?: string
}

const ForresterTotalEconomicImpact: FunctionComponent = () => {
    const threeUpTextItems = [
        {
            icon: <MinusCircle className="mx-auto mb-6 rounded bg-violet-200 p-2 text-violet-400" size={48} />,
            description: (
                <h4 className="mx-auto px-1 text-center text-white">Eliminating other search tools and solutions</h4>
            ),
        },
        {
            icon: <CodeTags className="mx-auto mb-6 rounded bg-violet-200 p-2 text-violet-400" size={48} />,
            description: (
                <h4 className="mx-auto px-1 text-center text-white">
                    Reduced developer labor cost for typical search and understanding activities
                </h4>
            ),
        },
        {
            icon: <CurrencyDollar className="mx-auto mb-6 rounded bg-violet-200 p-2 text-violet-400" size={48} />,
            description: (
                <h4 className="mx-auto px-1 text-center text-white">Labor savings for additional use cases</h4>
            ),
        },
    ]

    return (
        <Layout
            meta={{
                title: 'Forrester Total Economic Impact Report',
                description: 'A commissioned study conducted by Forrester Consulting on behalf of Sourcegraph',
                image: '/other/forrester-tei/tei-og.png',
            }}
            headerColorTheme="purple"
            childrenClassName="sg-bg-gradient-own"
            displayChildrenUnderNav={true}
        >
            <ContentSection
                parentClassName="!py-0 !px-6"
                className="!mt-[22px] flex flex-col justify-between gap-6 md:flex-row xl:px-6"
            >
                <div className="max-w-[637px]">
                    <h1 className="text-white">The Total Economic Impact™ of Sourcegraph code intelligence platform</h1>
                    <h3 className="mt-6 text-gray-200">
                        A commissioned study conducted by Forrester Consulting on behalf of Sourcegraph
                    </h3>
                </div>
                <div className={classNames(styles.form, 'md:min-w-[400px] xl:min-w-[517px]')} id="get-report-form">
                    <HubSpotForm
                        formId="e09d62b0-7c79-422e-a3d2-98c7c2948716"
                        inlineMessage={
                            'Thank you! <a style="color: var(--sg-color-white);text-decoration: underline;" href=\'https://2762526.fs1.hubspotusercontent-na1.net/hubfs/2762526/PDFs/Sourcegraph%20TEI.pdf\' target="_blank">Download the report here.</a>'
                        }
                    />
                </div>
            </ContentSection>

            <div className="mt-16 bg-violet-700 py-6 px-6 md:mt-24 md:py-24">
                <h2 className="text-center text-white">Key findings</h2>
                <p className="mx-auto mt-[30px] max-w-[572px] text-center text-lg text-gray-100">
                    Relying on customer interviews, data collection, and financial analysis, Forrester Consulting
                    concluded that Sourcegraph can provide customers:
                </p>
                <div className="mt-16 flex flex-wrap justify-center gap-4 text-center">
                    <div className="flex w-[267px] flex-col gap-3 font-semibold text-gray-100">
                        <p className="mb-0 text-[42px] leading-[62px]">251%</p>
                        <p className="mb-0 text-2xl font-semibold">Return on investment</p>
                    </div>
                    <div className="flex w-[267px] flex-col gap-3 font-semibold text-gray-100">
                        <p className="mb-0 text-[42px] font-semibold leading-[62px]">&lt;6 months</p>
                        <p className="mb-0 text-2xl">Break-even point</p>
                    </div>
                    <div className="flex w-[267px] flex-col gap-3 font-semibold text-gray-100">
                        <p className="mb-0 text-[42px] font-semibold leading-[62px]">$9.37M</p>
                        <p className="mb-0 text-2xl">Net present value</p>
                    </div>
                </div>
            </div>

            <h2 className="mt-16 px-6 text-center text-white md:mt-24">
                Incremental profit for customers derives from:
            </h2>

            <ThreeUpText
                items={threeUpTextItems}
                className="mx-auto mt-16 max-w-screen-xl md:px-6"
                wrapperClassName="!gap-6"
            />

            <h1 className="mt-16 px-6 text-center text-white md:mt-[192px]">How Sourcegraph achieves this impact</h1>

            <ContentSection
                className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 xl:px-6"
                parentClassName="px-0 overflow-x-clip"
            >
                <div className="max-w-[628px] px-6 xl:px-0">
                    <h2 className="text-white">Sourcegraph is a code intelligence platform</h2>
                    <p className="mt-6 text-lg text-gray-200">
                        Sourcegraph understands various developer search use cases and effectively facilitates their
                        application, be it debugging, seeking broad understanding, code reuse, code health analysis, or
                        quality improvements.
                    </p>
                </div>
                <div className="h-[270px] bg-[url('/code-intelligence-platform-illustration.svg')] bg-cover bg-center bg-no-repeat sm:w-[500px] md:h-[397px] md:w-[600px] xl:w-[710px]" />
            </ContentSection>

            <BatchChangesInsight
                heading="Sourcegraph is a multiplier of developer productivity"
                listType="ul"
                listItems={[
                    <li key="1" className="pb-2">
                        Used daily for code search and intelligence needs,{' '}
                        <span className="font-semibold"> saving on average 2-3 hours per week per developer</span>
                    </li>,
                    <li key="2" className="pb-2">
                        Boosts productivity through{' '}
                        <span className="font-semibold"> faster, and more tailored code search and intelligence </span>
                        capabilities. Facilitates a deeper understanding of code, code reuse, best practices,
                        accelerating debugging code, and developer collaboration
                    </li>,
                    <li key="3">
                        Considered a <span className="font-semibold">necessary tool</span> by developers in internal
                        satisfaction surveys
                    </li>,
                ]}
                quoteText={
                    <>
                        <p className="text-[20px] leading-9">
                            “Sourcegraph helps developers understand things more quickly. They code more effectively and
                            quickly because they understand their surroundings, they understand their requirements, they
                            find code to reuse, etc.”
                        </p>
                        <p className="text-[20px] font-semibold leading-9">
                            – Development tools engineering manager, online ticketing
                        </p>
                    </>
                }
            />

            <ContentSection className="py-8 md:pt-[144px]" parentClassName="!pb-0 md:!py-0">
                <h2 className="mx-auto mb-24 text-center text-white">
                    Sourcegraph meaningfully improves developer workflows
                </h2>
                <div className="flex flex-col justify-center gap-6 md:flex-row">
                    <WorkflowStats
                        title="Before Sourcegraph:"
                        stats={[
                            'Ineffective homegrown, open-source, or native code host solutions for code search',
                            'Lacking capabilities: Certain query requests were not obtainable, results were in a cumbersome format, and the means to obtain a full understanding was often neither possible nor obvious',
                            ' Unable to load all repositories',
                            'Unacceptable response times ranging from seconds to minutes',
                            'Inaccurate results frequently suspect or known to be incorrect or incomplete',
                        ]}
                        {...PLAN_COLORS.beforeSourcegraph}
                    />
                    <WorkflowStats
                        title="After Sourcegraph:"
                        stats={[
                            'Sourcegraph replaced all existing search tools',
                            'Developers found Sourcegraph easy to use, with capabilities aligned to their needs, useful for developing a basic understanding to code, debugging applications, and identifying best practices and code reuse opportunities',
                            "Enables search and navigation for the developer org's entire codebase without limits",
                            'Split-second response times',
                            'Accurate results',
                        ]}
                        {...PLAN_COLORS.afterSourcegraph}
                    />
                </div>
            </ContentSection>

            <BatchChangesInsight
                wrapperClassName="mt-16 md:mt-24"
                heading="Sourcegraph also provides real-time code insights and incident response capabilities"
                paragraph={
                    <p className="text-[18px] text-gray-200">
                        Beyond code search and understanding, Sourcegraph caters to these use cases:
                    </p>
                }
                listType="ol"
                listItems={[
                    <li key="1" className="pb-2">
                        Provides <span className="font-semibold">real-time code analysis</span> for the entire codebase
                        (with{' '}
                        <Link className="text-gray-200 underline" href="https://about.sourcegraph.com/code-insights">
                            Code Insights
                        </Link>
                        )
                    </li>,
                    <li key="2">
                        Provides <span className="font-semibold">incident responses</span> to application outages or
                        other issues requiring rapid resolution (with{' '}
                        <Link className="text-gray-200 underline" href="https://about.sourcegraph.com/batch-changes">
                            Batch Change
                        </Link>
                        s)
                    </li>,
                ]}
                quoteText={
                    <>
                        <p className="text-[20px]">
                            “We have used Sourcegraph’s batch changes utility to retire some internal libraries, upgrade
                            library versions, and even changing our URLs that were getting flagged as spam when used in
                            emails. Planning is easier and shorter, communications are improved, and execution is a lot
                            better.”
                        </p>
                        <p className="text-[20px] font-semibold">
                            – Senior manager of developer experience, online software company
                        </p>
                    </>
                }
            />

            <ContentSection className="flex flex-col items-center py-16 md:pt-[208px]" parentClassName="!py-0">
                <h2 className="mx-auto max-w-[846px] text-center text-white">
                    Download the full report to discover the ROI and cost savings your enterprise can see with
                    Sourcegraph
                </h2>
                <div className="mt-8 flex flex-row gap-4">
                    <Link
                        href="#get-report-form"
                        className="btn btn-primary-dark min-w-fit px-6 font-normal"
                        title="Read the report"
                    >
                        Read the report
                    </Link>
                    <MeetWithProductExpertButton
                        buttonClassName="btn-secondary-dark"
                        buttonLocation={buttonLocation.body}
                    >
                        Contact sales
                    </MeetWithProductExpertButton>
                </div>
            </ContentSection>

            <ContentSection className="py-8 md:pt-[176px] md:pb-28" parentClassName="!py-0">
                <h2 className="mx-auto max-w-[628px] text-center text-white">
                    Sourcegraph is trusted by the world’s leading enterprises
                </h2>
                <CustomerLogos dark={true} monochrome={true} className="!bg-transparent md:mt-[68px]" />
            </ContentSection>
        </Layout>
    )
}

export default ForresterTotalEconomicImpact

const BatchChangesInsight: FunctionComponent<BatchChangesInsightProps> = ({
    heading,
    paragraph,
    listType = 'ul',
    listItems,
    quoteText,
    wrapperClassName,
}) => (
    <ContentSection
        className={classNames('flex flex-col gap-y-10 gap-x-[133px] md:flex-row xl:px-6', wrapperClassName)}
        parentClassName="!py-0"
    >
        <div className="max-w-[627px]">
            <h2 className="mx-auto mb-[37px] max-w-[846px] text-white">{heading}</h2>
            {listItems.length > 0 && (
                <>
                    {paragraph}
                    {listType === 'ul' ? (
                        <ul className="text-[18px] text-gray-200">{listItems.map(item => item)}</ul>
                    ) : (
                        <ol className="text-gray-200">{listItems.map(item => item)}</ol>
                    )}
                </>
            )}
        </div>
        <div className="sg-bg-gradient-forrester max-w-[519px] p-6 text-gray-200 md:py-[42px] md:px-[47px]">
            {quoteText}
        </div>
    </ContentSection>
)

export const PLAN_COLORS: Record<
    'beforeSourcegraph' | 'afterSourcegraph',
    { borderColorClass: string; textColorClass: string }
> = {
    beforeSourcegraph: {
        borderColorClass: 'border-t-vermillion-300',
        textColorClass: 'text-vermillion-300',
    },
    afterSourcegraph: {
        borderColorClass: 'border-t-violet-400',
        textColorClass: 'text-green-400',
    },
}

const WorkflowStats: FunctionComponent<WorkflowStatsProps> = ({ title, stats, borderColorClass, textColorClass }) => (
    <div
        className={`h-100 mx-auto max-w-[519px] rounded border-t-16 border-gray-200 bg-white p-4 shadow-lg sm:p-8 md:max-h-[532px] ${borderColorClass} md:mx-0`}
    >
        <h2 className="mb-6">{title}</h2>
        {stats?.map((stat, index) => (
            <div key={index} className="flex">
                {title === 'Before Sourcegraph:' ? (
                    <>
                        <span>
                            <CloseIcon className={`mr-2 ${textColorClass}`} />
                        </span>
                        <p className="max-w-[411px] pb-3 text-[18px]">{stat}</p>
                    </>
                ) : (
                    <>
                        <span>
                            <CheckIcon className={`mr-2 ${textColorClass}`} />
                        </span>
                        <p className="max-w-[411px] pb-3 text-[18px]">{stat}</p>
                    </>
                )}
            </div>
        ))}
    </div>
)

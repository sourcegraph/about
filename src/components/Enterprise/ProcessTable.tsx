import { FunctionComponent, ReactNode } from 'react'

import { FileSpreadsheet, Settings, ListTodo, BarChartBig } from 'lucide-react'

import { ContentSection } from '..'

interface TabProps {
    title: string
    icon: ReactNode
    subTitle: string
    items: string[]
}
const tabData = [
    {
        title: 'PLANNING',
        icon: <FileSpreadsheet className="h-6 w-6" />,
        subTitle: 'Align on a trial plan',
        items: [
            'Discuss your requirements & goals',
            'Create an evaluation plan: use cases, test scenarios, and metrics benchmarks',
        ],
    },
    {
        title: 'SETUP',
        icon: <Settings className="h-6 w-6" />,
        subTitle: 'Setup your custom environment',
        items: [
            'Stand up your own single-tenant instance',
            'Ingest code from all your code hosts to set up context-awareness',
            'Kickstart your team’s onboarding to Cody',
        ],
    },
    {
        title: 'EVALUATION',
        icon: <ListTodo className="h-6 w-6" />,
        subTitle: 'Run the evaluation',
        items: [
            'Weekly status huddles to make sure your devs are getting the most out of Cody',
            'Ongoing enablement to help developers learn the product',
            'Collect your product feedback',
        ],
    },
    {
        title: 'FEEDBACK',
        icon: <BarChartBig className="h-6 w-6" />,
        subTitle: 'Review trial results',
        items: ['Survey of your developers’ experience', 'Evaluation metrics', 'Value assessment report'],
    },
]
export const ProcessTable: FunctionComponent = () => (
    <ContentSection
        className="overflow-hidden bg-transparent"
        parentClassName="pb-2.5 md:!pb-0 md:px-20 pt-8 md:!pt-8 !mt-2.5 md:!mt-0"
    >
        <h2 className="mb-8">What does the enterprise trial process look like?</h2>
        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-gray-200 bg-white md:grid-cols-4">
            {tabData.map(tab => (
                <Tab key={tab.title} title={tab.title} icon={tab.icon} subTitle={tab.subTitle} items={tab.items} />
            ))}
        </div>
    </ContentSection>
)

const Tab: FunctionComponent<TabProps> = ({ title, icon, subTitle, items }) => (
    <div>
        <div className="bg-violet-100 py-4 px-9">
            <span className="text-lg font-medium uppercase tracking-wide text-gray-700">{title}</span>
        </div>
        <div className="flex flex-col gap-y-4 py-6 px-9">
            {icon}
            <div className="text-base font-semibold tracking-tight text-gray-700">{subTitle}</div>
            <ul className="!ml-5 list-outside">
                {items.map(item => (
                    <li key={title} className="text-base tracking-tight text-gray-500 ">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>
)

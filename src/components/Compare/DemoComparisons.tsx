import { FunctionComponent } from 'react'

import KeyboardArrowRightIcon from 'mdi-react/KeyboardArrowRightIcon'
import Link from 'next/link'

import { Heading } from '../Heading'

const data = [
    {
        name: 'Compare Cody to GitHub’s Copilot',
        image: 'github-copilot.svg',
        url: '/demo/copilot-vs-cody',
    },
    {
        name: 'Compare Cody to Amazon’s CodeWhisperer',
        image: 'amazon-codewhisperer.svg',
        url: '/demo/amazon-codewhisperer-vs-cody',
    },
    {
        name: 'Compare Cody to Cursor',
        image: 'cursor.svg',
        url: '/demo/cursor-vs-cody',
    },
    {
        name: 'Compare Cody to Tabnine’s code AI assistant',
        image: 'tabnine.svg',
        url: '/demo/tabnine-vs-cody',
    },
    {
        name: 'Compare Cody to Codeium',
        image: 'codeium.svg',
        url: '/demo/codeium-vs-cody',
    },
]

export const DemoComparisons: FunctionComponent = () => (
    <div className="mx-auto mb-10 max-w-[1232px]  lg:pt-10">
        <Heading size="h2" className="mb-10 px-4 !leading-10 !tracking-[-1px] lg:mb-[75px] lg:px-0">
            Compare other code AI assistants
        </Heading>
        <div className="grid grid-cols-1 gap-lg text-center md:grid-cols-3">
            {data?.map(assistant => (
                <div className="col-span mb-10 rounded p-10 text-left sm:p-md" key={assistant.name}>
                    <img
                        src={`/assets/compare/${assistant.image}`}
                        className="mb-2 mr-sm inline h-sm w-sm"
                        alt={assistant.name}
                    />
                    <img src="/cody-logomark-default.svg" className="mb-2 inline h-sm w-sm" alt="Cody" />

                    <Heading size="h3" className="mb-sm text-2xl leading-[30px] !tracking-[-0.25px] text-black">
                        {assistant.name}
                    </Heading>

                    <Link
                        href={assistant.url}
                        className="btn-link flex font-semibold tracking-[-0.25px]"
                        title="Learn more"
                    >
                        Learn more
                        <KeyboardArrowRightIcon className="ml-3 inline" />
                    </Link>
                </div>
            ))}
        </div>
    </div>
)

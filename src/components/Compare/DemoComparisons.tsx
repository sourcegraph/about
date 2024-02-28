import { FunctionComponent } from 'react'

import KeyboardArrowRightIcon from 'mdi-react/KeyboardArrowRightIcon'
import Link from 'next/link'

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
    <div className="grid grid-cols-1 gap-lg text-center md:grid-cols-3">
        {data?.map(assistant => (
            <div className="col-span mb-10 rounded p-10 text-left hover:shadow-lg sm:p-md" key={assistant.name}>
                <img src="/cody-logomark-default.svg" className="mb-2 mr-sm inline h-sm w-sm" alt="Cody" />
                <img
                    src={`/assets/compare/${assistant.image}`}
                    alt={assistant.name}
                    className="mb-2 inline h-sm w-sm"
                />

                <p className="mb-sm text-2xl text-black">{assistant.name}</p>

                <Link href={assistant.url} className="btn-link flex font-semibold" title="Learn more">
                    Learn more
                    <KeyboardArrowRightIcon className="ml-3 inline" />
                </Link>
            </div>
        ))}
    </div>
)

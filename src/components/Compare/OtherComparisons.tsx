import { FunctionComponent } from 'react'

import Link from 'next/link'

const data = [
    {
        name: 'GitHub Copilot',
        image: 'github-copilot.svg',
        url: '/compare/copilot-vs-cody',
    },
    {
        name: 'Amazon CodeWhisperer',
        image: 'amazon-codewhisperer.svg',
        url: '/compare/amazon-codewhisperer-vs-cody',
    },
    {
        name: 'Cursor',
        image: 'cursor.svg',
        url: '/compare/cursor-vs-cody',
    },
    {
        name: 'Tabnine',
        image: 'tabnine.svg',
        url: '/compare/tabnine-vs-cody',
    },
    {
        name: 'Codeium',
        image: 'codeium.svg',
        url: '/compare/codeium-vs-cody',
    },
]

export const OtherComparisons: FunctionComponent = () => (
    <div className="grid grid-cols-1 gap-lg text-center md:grid-cols-3">
        {data?.map(assistant => (
            <Link href={assistant.url} key={assistant.name}>
                <div className="col-span mb-10 rounded p-xs hover:shadow-lg sm:p-md">
                    <img src="/cody-logomark-default.svg" className="mb-2 mr-10 inline h-[48px] w-[48px]" />
                    <img
                        src={`/assets/compare/${assistant.image}`}
                        alt={assistant.name}
                        className="mb-2 inline h-[48px] w-[48px]"
                    />

                    <p className="text-black">Cody vs {assistant.name}</p>
                </div>
            </Link>
        ))}
    </div>
)

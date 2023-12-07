import { FunctionComponent, useState } from 'react'

import Link from 'next/link'

const data = [
  {
    name: 'GitHub Copilot',
    image: 'github-copilot.svg',
    url: '/compare/copilot-vs-cody'
  },
  {
    name: 'Amazon CodeWhisperer',
    image: 'amazon-codewhisperer.svg',
    url: '/compare/amazon-codewhisperer-vs-cody'
  },
  {
    name: 'Cursor',
    image: 'cursor.svg',
    url: '/compare/cursor-vs-cody'
  },
  {
    name: 'Tabnine',
    image: 'tabnine.svg',
    url: '/compare/tabnine-vs-cody'
  }
]

export const OtherComparisons: FunctionComponent = () => (
  <div className="grid grid-cols-1 gap-lg md:grid-cols-3 text-center">
    {data?.map(assistant => (
    <Link href={assistant.url} key={assistant.name}>
      <div className="col-span mb-10 rounded p-xs hover:shadow-lg sm:p-md">

        <img src="/cody-logomark-default.svg" className="h-[48px] w-[48px] inline mb-2 mr-10" />
        <img src={`/assets/compare/${assistant.image}`} alt={assistant.name} className="h-[48px] w-[48px] mb-2 inline" />

        <p className="text-black">Cody vs {assistant.name}</p>

      </div>
    </Link>
    ))}
  </div>
)

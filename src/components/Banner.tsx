import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

export const Banner: FunctionComponent = () => (
    <div className="sg-bg-gradient-starship-small max-h-[154px] overflow-hidden md:max-h-[125px]">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-x-[51px] md:flex-row md:items-start">
            <img
                src="/starship/starship-blur.svg"
                alt="Sourcegraph Starship"
                className="mt-[33px] md:mt-[43px]"
                draggable={false}
                width={251}
                height={35}
            />
            <Link
                href="/starship"
                title="What’s coming"
                className="btn relative top-[-183px] mt-[51px] bg-transparent text-violet-300 md:static"
            >
                What’s coming
                <ChevronRightIcon className="mb-1 !mb-0 ml-[18px] inline" />
            </Link>
        </div>
    </div>
)

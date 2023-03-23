import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import { FunctionComponent } from 'mdx/types'
import Link from 'next/link'

export const Banner: FunctionComponent<{}> = () => (
    <div className="z-[1000] bg-black py-[13px] border-b-1 sg-border-gradient-banner">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-y-[9px] gap-x-12 md:flex-row">
            <p className="mb-0 font-semibold leading-[22px] text-white">
                Learn about AI + code intelligence from leaders in the space
            </p>
            <Link
                href="https://www.twitch.tv/sourcegraph"
                title="Watch live on Twitch"
                className="btn bg-transparent !px-0 !py-0 leading-[22px] text-violet-300"
            >
                Watch live on Twitch
                <ChevronRightIcon className="!mb-0 ml-[18px] inline" />
            </Link>
        </div>
    </div>
)

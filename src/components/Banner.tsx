import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import { FunctionComponent } from 'mdx/types'
import Link from 'next/link'

export const Banner: FunctionComponent<{}> = () => (
    <div className="sg-border-gradient-banner z-[1000] border-b-1 bg-black py-[13px]">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-y-[9px] gap-x-12 md:flex-row">
            <p className="mb-0 font-semibold leading-[22px] text-white">
                Join us at 12pm PT on October 4 as we unveil Cody's latest features
            </p>
            <Link
                href="https://www.youtube.com/watch?v=IywQJ47XPE0"
                title="RSVP to the livestream"
                className="btn bg-transparent !px-0 !py-0 leading-[22px] text-violet-300"
            >
                RSVP to the livestream
                <ChevronRightIcon className="!mb-0 ml-[18px] inline" />
            </Link>
        </div>
    </div>
)

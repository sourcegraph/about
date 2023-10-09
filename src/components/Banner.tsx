import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import { FunctionComponent } from 'mdx/types'
import Link from 'next/link'

export const Banner: FunctionComponent<{}> = () => (
    <div className="sg-border-gradient-banner z-[1000] border-b-1 bg-black py-[13px]">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-y-[9px] gap-x-12 px-2 md:flex-row">
            <p className="mb-0 text-center font-semibold leading-[22px] text-white">
                The latest Cody release improves autocomplete performance by up to 2x
            </p>
            <Link
                href="https://about.sourcegraph.com/blog/feature-release-october-2023"
                title="RSVP to the livestream"
                className="btn bg-transparent !px-0 !py-0 leading-[22px] text-violet-300"
            >
                Read the release blog
                <ChevronRightIcon className="!mb-0 ml-[18px] inline" />
            </Link>
        </div>
    </div>
)

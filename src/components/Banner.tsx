import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import { FunctionComponent } from 'mdx/types'
import Link from 'next/link'

export const Banner: FunctionComponent<{}> = () => (
    <div className="sg-border-gradient-banner z-[1000] border-b-1 bg-black py-[13px]">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-y-[9px] gap-x-12 px-2 md:flex-row">
            <p className="mb-0 text-center font-semibold leading-[22px] text-white">
                Join our webinar on live coding with AI on May 23
            </p>
            <Link
                href="https://sourcegraph.com/webinars"
                title="AI Coding Webinar"
                className="btn bg-transparent !px-0 !py-0 leading-[22px] text-violet-300"
            >
                Register
                <ChevronRightIcon className="!mb-0 ml-[6px] inline" />
            </Link>
        </div>
    </div>
)

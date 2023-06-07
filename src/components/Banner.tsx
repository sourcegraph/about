import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import { FunctionComponent } from 'mdx/types'
import Link from 'next/link'

export const Banner: FunctionComponent<{}> = () => (
    <div className="sg-border-gradient-banner z-[1000] border-b-1 bg-black py-[13px]">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-y-[9px] gap-x-12 md:flex-row">
            <p className="mb-0 font-semibold leading-[22px] text-white">
                You can now get 1,000 free daily completions with Cody
            </p>
            <Link
                href="/blog/increasing-the-completions-rate-limit"
                title="Read more"
                className="btn bg-transparent !px-0 !py-0 leading-[22px] text-violet-300"
            >
                Read more
                <ChevronRightIcon className="!mb-0 ml-[18px] inline" />
            </Link>
        </div>
    </div>
)

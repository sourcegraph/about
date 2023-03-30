import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import { FunctionComponent } from 'mdx/types'
import Link from 'next/link'

export const Banner: FunctionComponent<{}> = () => (
    <div className="sg-border-gradient-banner z-[1000] border-b-1 bg-black py-[13px]">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-y-[9px] gap-x-12 sm:flex-row">
            <p className="mb-0 font-semibold leading-[22px] text-white">
                We just shipped{' '}
                <Link className="font-semibold text-violet-300" href="/blog/release/5.0">
                    Sourcegraph 5.0
                </Link>{' '}
                and{' '}
                <Link className="font-semibold text-violet-300" href="/cody">
                    Cody
                </Link>
                .
            </p>
            <Link
                href="https://www.twitch.tv/sourcegraph"
                title="See what’s new"
                className="btn flex items-center bg-transparent !px-0 !py-0 leading-[22px] text-violet-300"
            >
                🔴 LIVE NOW: Join the dev talks
                <ChevronRightIcon className="!mb-0 ml-2 inline" />
            </Link>
        </div>
    </div>
)

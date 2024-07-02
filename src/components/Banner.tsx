import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import { FunctionComponent } from 'mdx/types'
import Link from 'next/link'

/**
 * Renders a banner component with a message and a link to learn more.
 * The banner is displayed at the top of the page with a gradient border.
 * The content is centered and responsive, adjusting to different screen sizes.
 * Turn on and off in src/components/Layout/Header/Header.tsx
 * Find `const [showBanner, setShowBanner] = useState(false)` switch true for on, false for off.
 */
export const Banner: FunctionComponent<{}> = () => (
    <div className="sg-border-gradient-banner z-[1000] border-b-1 bg-black py-[13px]">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-y-[9px] gap-x-12 px-2 md:flex-row">
            <p className="mb-0 text-center font-semibold leading-[22px] text-white">
                Claude 3.5 Sonnet is now available for Cody
            </p>
            <Link
                href="https://sourcegraph.com/blog/claude-3.5-sonnet-now-available-in-cody"
                title="Claude 3.5 Sonnet is now available for Cody"
                className="btn bg-transparent !px-0 !py-0 leading-[22px] text-violet-300"
                target="_blank"
            >
                Learn more
                <ChevronRightIcon className="!mb-0 ml-[6px] inline" />
            </Link>
        </div>
    </div>
)

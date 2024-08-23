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
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center gap-12 gap-y-[9px] px-2 md:flex-row">
            <p className="mb-0 text-center font-semibold leading-[22px] text-white">
                Sourcegraph is a Visionary in the 2024 Gartner® Magic Quadrant™ for AI Code Assistants
            </p>
            <Link
                href="https://sourcegraph.com/blog/gartner-magic-quadrant-ai-code-assistants"
                title="Sourcegraph is a Visionary in the first Gartner® Magic Quadrant™ for AI Code Assistants"
                className="btn btn-link-dark btn-link-icon bg-transparent !px-0 !py-0 leading-[22px] text-violet-300"
                target="_blank"
            >
                Learn more
                <ChevronRightIcon className="!mb-0 ml-[6px] inline" />
            </Link>
        </div>
    </div>
)

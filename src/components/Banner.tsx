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
    <div className="sg-border-gradient-banner z-[1000] border-b-1 bg-black py-[13px] px-4 lg:px-0">
        <Link
            href="https://sourcegraph.com/blog/gartner-magic-quadrant-ai-code-assistants"
            title="Sourcegraph is a Visionary in the first Gartner® Magic Quadrant™ for AI Code Assistants"
            className="btn btn-link-dark btn-link-icon flex w-full items-center justify-center bg-transparent !px-0 !py-0 text-sm leading-[22px] text-violet-300"
            target="_blank"
        >
            <p className="mb-0 mr-2 text-center text-sm font-semibold leading-[22px] text-gray-200">
                Sourcegraph is a Visionary in the 2024 Gartner® Magic Quadrant™ for AI Code Assistants
            </p>
            <span className="hidden lg:inline-block">
                <span>Learn more</span>
                <ChevronRightIcon className="!mb-0 ml-[6px] inline" />
            </span>
        </Link>
    </div>
)

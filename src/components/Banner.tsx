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
    <div className="z-[1000] bg-black  px-4 lg:px-0">
        <Link
            href="https://sourcegraph.registration.goldcast.io/events/b650937d-ba9f-40ce-9429-35c3539a5bb1?utm_medium=website&utm_source=website"
            className="btn btn-link-dark btn-link-icon transition-colorshover:text-white group flex w-full items-center justify-center bg-transparent !px-0 !py-3 text-sm text-gray-200 hover:no-underline focus:outline-none focus:ring-0"
            target="_blank"
        >
            <p className="mb-0 mr-2 text-center text-sm font-semibold">
                Access the sessions from our recent Virtual Code AI Summit
            </p>
            <span className="hidden translate-y-px text-violet-300 lg:inline-block">
                {/* <span>Get access</span> */}
                <ChevronRightIcon className="!mb-0 ml-0.5 inline -translate-y-px transition-transform group-hover:translate-x-2" />
            </span>
        </Link>
    </div>
)

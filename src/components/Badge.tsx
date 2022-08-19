import { FunctionComponent } from 'react'

interface Badge {
    text: string
}

/**
 * This is our Badge component from the DLS.
 * TODO: add big/small variants as seen in our resources page
 *
 * @param props - component props
 * @param props.text - badge text
 * @returns
 */
export const Badge: FunctionComponent<Badge> = ({ text }) => (
    <span className="tw-text-xs tw-text-gray-500 tw-bg-gray-200 tw-px-2 tw-py-1 tw-rounded-md tw-ml-xxs tw-font-mono tw-align-middle tw-font-medium">
        {text}
    </span>
)

import classNames from 'classnames'
import EmailOutlineIcon from 'mdi-react/EmailOutlineIcon'
import Link from 'next/link'

import { EventName, getEventLogger } from '../../hooks/eventLogger'

interface EmailAuthProps {
    label?: React.ReactNode | string
    source: string
    className?: string
    icon?: boolean
}

export const EmailAuth: React.FunctionComponent<EmailAuthProps> = ({
    label = 'Continue with Email',
    source,
    className,
    icon,
}) => {
    const handleOnClick = (): void => {
        const eventArguments = {
            type: 'form',
            source,
            description: '',
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getEventLogger().log(EventName.AUTH_INITIATED, eventArguments, eventArguments)
    }

    return (
        <Link
            href="https://sourcegraph.com/sign-up?showEmail=true&returnTo=/get-cody"
            className={classNames(
                'btn hover:sg-bg-hover-signup-button flex w-full items-center justify-center',
                className
            )}
            onClick={handleOnClick}
        >
            {icon && <EmailOutlineIcon className="pr-2" />} {label}
        </Link>
    )
}

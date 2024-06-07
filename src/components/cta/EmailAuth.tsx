import classNames from 'classnames'
import EmailOutlineIcon from 'mdi-react/EmailOutlineIcon'
import Link from 'next/link'

import { TelemetryProps } from '../../telemetry'

import { telemetryProviderTypes } from './ExternalProvider'

interface EmailAuthProps extends TelemetryProps {
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
    telemetryRecorder,
}) => {
    const handleOnClick = (): void => {
        telemetryRecorder.recordEvent('auth', 'initiate', { metadata: { authType: telemetryProviderTypes.form }, privateMetadata: {
            type: 'form',
            source,
            description: '',
        }})
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

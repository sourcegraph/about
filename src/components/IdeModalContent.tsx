import { FunctionComponent } from 'react'

import Link from 'next/link'

import { VSCODE, JETBRAINS } from '../pages/constants'
import { TelemetryProps } from '../telemetry'

import { ExternalProvider } from './cta/ExternalProvider'
import { Heading } from './Heading'

interface Props extends TelemetryProps {
    source: string
    plan?: 'pro' | 'free'
    disablePlanParam?: boolean
}

export const IdeModalContent: FunctionComponent<Props> = ({
    source,
    plan = 'free',
    disablePlanParam,
    telemetryRecorder,
}) => (
    <div>
        <Heading size="h4" className="font-[590px] text-2xl leading-[30px] -tracking-[.25px] text-gray-600 md:pr-2">
            Install the Cody IDE extension
        </Heading>
        <ExternalProvider
            providerType={VSCODE}
            label="Install for VS Code"
            dark={false}
            className="mt-8 !-tracking-[.25px]"
            source={source}
            plan={plan}
            disablePlanParam={disablePlanParam}
            telemetryRecorder={telemetryRecorder}
        />
        <ExternalProvider
            providerType={JETBRAINS}
            label="Install for JetBrains"
            dark={false}
            className="mt-4 !-tracking-[.25px]"
            source={source}
            plan={plan}
            telemetryRecorder={telemetryRecorder}
        />
        <p className="mt-8 mb-0 text-sm leading-[19.88px] text-gray-500">
            Already have an account?{' '}
            <Link
                href="https://sourcegraph.com/cody/manage"
                className="text-violet-500 underline underline-offset-[3.5px]"
            >
                {' '}
                Sign in.{' '}
            </Link>
        </p>
    </div>
)

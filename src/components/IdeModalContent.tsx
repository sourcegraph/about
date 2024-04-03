import { FunctionComponent } from 'react'

import Link from 'next/link'

import { ExternalsAuth } from './cta/ExternalsAuth'
import { Heading } from './Heading'

interface Props {
    source: string
    plan?: 'pro' | 'free'
}

export const IdeModalContent: FunctionComponent<Props> = ({ source, plan = 'free' }) => (
    <div>
        <Heading size="h4" className="text-2xl font-[590px] text-gray-600 leading-[30px] -tracking-[.25px] md:pr-2">
            Install the Cody extension in your IDE
        </Heading>
        <ExternalsAuth
            authProvider="vscode"
            label="Install for VS Code"
            dark={false}
            className="mt-8 !-tracking-[.25px]"
            source={source}
            plan={plan}
        />
        <ExternalsAuth
            authProvider="jetbrains"
            label="Install for JetBrains"
            dark={false}
            className="mt-4 !-tracking-[.25px]"
            source={source}
            plan={plan}
        />
        <p className="mt-8 text-sm text-gray-500 md:pr-2 leading-[19.88px]">
            By registering, you agree to our{' '}
            <Link href="/terms" className="text-gray-500 underline underline-offset-[3.5px]">
                Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/terms/privacy" className="text-gray-500 underline underline-offset-[3.5px]">
                Privacy Policy.
            </Link>
        </p>
        <p className="mt-8 mb-0 text-sm text-gray-500 leading-[19.88px]">
            Already have an account?{' '}
            <Link href="https://sourcegraph.com/sign-in" className="text-violet-500 underline underline-offset-[3.5px]">
                {' '}
                Sign in.{' '}
            </Link>
        </p>
    </div>
)

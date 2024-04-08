import { FunctionComponent } from 'react'

import Link from 'next/link'

import { ExternalsAuth } from './cta/ExternalsAuth'
import { Heading } from './Heading'

interface Props {
    source: string
    plan?: 'pro' | 'free'
}

export const AuthenticateModalContent: FunctionComponent<Props> = ({ source, plan = 'free' }) => (
    <div>
        <Heading size="h4" className="text-lg font-semibold text-gray-600">
            Sign up to get free access
        </Heading>
        <ExternalsAuth
            authProvider="github"
            label="Continue With GitHub"
            dark={false}
            className="mt-8"
            source={source}
            plan={plan}
        />
        <ExternalsAuth
            authProvider="gitlab"
            label="Continue With GitLab"
            dark={false}
            className="mt-4"
            source={source}
            plan={plan}
        />
        <ExternalsAuth
            authProvider="google"
            label="Continue With Google"
            dark={false}
            className="mt-4"
            source={source}
            plan={plan}
        />
        <p className="mt-8 text-sm text-gray-500">
            By registering, you agree to our{' '}
            <Link href="/terms" className="text-gray-500 underline">
                Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/terms/privacy" className="text-gray-500 underline">
                Privacy Policy.
            </Link>
        </p>
        <p className="mt-8 mb-0 text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="https://sourcegraph.com/sign-in?returnTo=/cody/manage" className="text-violet-500">
                {' '}
                Sign in.{' '}
            </Link>
        </p>
    </div>
)

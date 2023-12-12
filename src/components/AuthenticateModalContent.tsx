import { FunctionComponent } from 'react'

import Link from 'next/link'

import { ExternalsAuth } from './cta/ExternalsAuth'

interface Props {
    source: string
}

export const AuthenticateModalContent: FunctionComponent<Props> = ({ source }) => (
    <div>
        <p className="text-lg text-gray-600">Sign up to get free access:</p>
        <ExternalsAuth
            authProvider="github"
            label="Continue With GitHub"
            dark={false}
            className="mt-8"
            source={source}
        />
        <ExternalsAuth
            authProvider="gitlab"
            label="Continue With Gitlab"
            dark={false}
            className="mt-4"
            source={source}
        />
        <ExternalsAuth
            authProvider="google"
            label="Continue With Google"
            dark={false}
            className="mt-4"
            source={source}
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
            <Link href="https://sourcegraph.com/sign-in" className="text-violet-500">
                {' '}
                Sign in.{' '}
            </Link>
        </p>
    </div>
)

import { FunctionComponent } from 'react'

import Link from 'next/link'

export const FormLegal: FunctionComponent = () => (
    <p>
        <small>
            By submitting, I agree to Sourcegraph's <Link href="/terms">Terms of Service</Link> and{' '}
            <Link href="/terms/privacy">Privacy Policy</Link>.
        </small>
    </p>
)

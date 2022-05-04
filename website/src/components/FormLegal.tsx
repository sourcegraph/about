import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

export const FormLegal: FunctionComponent = () => (
    <p>
        <small>
            By submitting, I agree to Sourcegraph's{` `}
            <Link to="/terms">Terms of Service</Link> and{` `}
            <Link to="/privacy">Privacy Policy</Link>.
        </small>
    </p>
)

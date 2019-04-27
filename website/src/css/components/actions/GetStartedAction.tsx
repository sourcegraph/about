import { Link } from 'gatsby'
import React from 'react'

export const GetStartedAction: React.FunctionComponent<{ showEmailInput?: boolean; className?: string }> = ({
    showEmailInput,
    className = '',
}) => (
    <form className={`form form-inline ${className}`}>
        {showEmailInput && <input className="form-control mr-md-2 mb-2" type="text" placeholder="Enter work email" />}
        <button type="submit" role="button" className="btn btn-primary mb-2">
            Get started
        </button>
    </form>
)

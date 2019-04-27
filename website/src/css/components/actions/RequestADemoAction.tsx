import { Link } from 'gatsby'
import React from 'react'

export const RequestADemoAction: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <form className={`form form-inline ${className}`}>
        <input className="form-control mr-2" type="text" placeholder="Enter work email" />
        <button type="submit" role="button" className="btn btn-primary">
            Request a demo
        </button>
    </form>
)

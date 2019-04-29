import React from 'react'

export const SubmitEmailForm: React.FunctionComponent<{ buttonText: string; className?: string }> = ({
    buttonText,
    className = '',
}) => (
    <form className={`form form-inline ${className}`}>
        <input className="form-control mr-md-2 mb-2" type="text" placeholder="Enter work email" size={27} />
        <button type="submit" role="button" className="btn btn-primary mb-2">
            {buttonText}
        </button>
    </form>
)

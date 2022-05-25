import React from 'react'

export const SubmitEmailForm: React.FunctionComponent<{
    formAction: string
    buttonText: string
    className?: string
}> = ({ formAction, buttonText, className = '' }) => (
    <div>
        <form
            className={`form form-inline input-group mb-2 d-inline-flex w-auto ${className}`}
            action={formAction}
            method="get"
        >
            <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter your email"
                size={27}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
                autoComplete="email"
            />
            <div className="input-group-append">
                <button type="submit" role="button" className="btn btn-primary">
                    {buttonText}
                </button>
            </div>
        </form>
    </div>
)

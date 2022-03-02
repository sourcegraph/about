import React, { FunctionComponent } from 'react'

interface Props {
    formAction: string
    buttonText: string
    className?: string
}

export const SubmitEmailForm: FunctionComponent<Props> = ({ formAction, buttonText, className = '' }) => (
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
                <button type="submit" className="btn btn-primary">
                    {buttonText}
                </button>
            </div>
        </form>
    </div>
)

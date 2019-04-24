import React from 'react'

export const Blockquote: React.FunctionComponent<{
    quote: string
    by?: string | React.ReactFragment
}> = ({ quote, by }) => (
    <blockquote className="p-2 text-muted bg-light rounded">
        &ldquo;{quote}&rdquo;
        {by && (
            <>
                <br />
                <div className="text-right">&mdash; {by}</div>
            </>
        )}
    </blockquote>
)

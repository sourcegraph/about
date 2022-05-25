import React from 'react'

export const Blockquote: React.FunctionComponent<{
    quote: string
    by?: string | React.ReactFragment
}> = ({ quote, by }) => (
    <blockquote className="p-3 bg-light rounded rounded-lg">
        &ldquo;{quote}&rdquo;
        {by && (
            <>
                <br />
                <div className="text-right text-muted">&mdash; {by}</div>
            </>
        )}
    </blockquote>
)

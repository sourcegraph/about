import React from 'react'

export const UseCasesTable: React.FunctionComponent<{
    data: {
        description: string
        example: string
    }[]
}> = ({ data }) => (
    <table className="use-cases-table table table-striped table-sm">
        <tbody>
            {data.map(({ description, example }, i) => (
                <tr key={i}>
                    <th className="use-cases-table__description">{description}</th>
                    <td className="use-cases-table__example">&ldquo;{example}&rdquo;</td>
                </tr>
            ))}
        </tbody>
    </table>
)

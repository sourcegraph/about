import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

import { CompareDataType } from './constants'
import { FeatureComponent } from './FeatureComponent'

interface CompareTableProps {
    compareData: CompareDataType
    demoStyle?: boolean
    firstChoiceTitle?: string
}
interface TableProps {
    children?: ReactNode
}

export const CompareTables: FunctionComponent<CompareTableProps> = ({
    compareData: { competitorName, attributesData },
    demoStyle = false,
    firstChoiceTitle,
}) => {
    const tableData = attributesData.map(attribute => ({
        selection: attribute.selection,
        firstChoiceTitle: firstChoiceTitle ?? 'Sourcegraph Cody',
        comparisons: attribute.attributes,
    }))
    return (
        <div
            className={classNames('  mx-auto grid max-w-screen-xl grid-cols-1 gap-lg px-5 md:grid-cols-12 xl:px-0', {
                'relative z-20 bg-white lg:pt-[86px]': demoStyle,
            })}
        >
            <div className="col-span-full">
                {tableData.map(data => (
                    <Table key={data.selection}>
                        <thead>
                            <tr>
                                <th className="w-1/2 border-0 text-left text-base font-semibold xs:text-base">
                                    {data.selection}
                                </th>
                                <th className="text w-1/4 border-0 text-base !font-semibold !tracking-normal xs:text-base">
                                    {data.firstChoiceTitle}
                                </th>
                                <th className="text w-1/4 border-0 text-base !font-semibold !tracking-normal xs:text-base">
                                    {competitorName}
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.comparisons?.map(item => (
                                <FeatureComponent item={item} key={item.feature} />
                            ))}
                        </tbody>
                    </Table>
                ))}

                <p className="mt-1 text-sm text-gray-400">Last updated: 2024-04-16</p>
            </div>
        </div>
    )
}

const Table: FunctionComponent<TableProps> = ({ children }) => (
    <div className="w-full	overflow-y-auto md:overflow-auto">
        <table className=" w-full table-auto overflow-scroll border-0 md:table-fixed md:overflow-auto">
            {children}
        </table>
    </div>
)

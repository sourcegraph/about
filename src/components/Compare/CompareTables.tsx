import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

import { CompareDataType } from './constants'
import { FeatureComponent } from './FeatureComponent'

interface CompareTableProps {
    compareData: CompareDataType
    demoStyle?: boolean
}
interface TableProps {
    children?: ReactNode
}

export const CompareTables: FunctionComponent<CompareTableProps> = ({
    compareData: { competitorName, contextSupport, featureSupport, ideSupport, llmSupport, pricingSupport },
    demoStyle = false,
}) => (
    <div
        className={classNames('  mx-auto grid max-w-screen-xl grid-cols-1 gap-lg px-5 md:grid-cols-12 xl:px-0', {
            'relative z-20 bg-white lg:pt-[86px]': demoStyle,
        })}
    >
        <div className="col-span-full">
            <Table>
                <thead>
                    <tr>
                        <th className="w-1/2 border-0 text-left font-semibold">Features</th>
                        <th className="text w-1/4 border-0 text-xs !font-semibold !tracking-normal xs:text-base">
                            Sourcegraph Cody
                        </th>
                        <th className="text w-1/4 border-0 text-xs !font-semibold !tracking-normal xs:text-base">
                            {competitorName}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {featureSupport?.map(item => (
                        <FeatureComponent item={item} key={item.feature} />
                    ))}
                </tbody>
            </Table>

            <Table>
                <thead>
                    <tr>
                        <th className="w-1/2 border-0 text-left font-semibold">IDE support</th>
                        <th className="text w-1/4 border-0 text-xs !font-semibold !tracking-normal xs:text-base">
                            Sourcegraph Cody
                        </th>
                        <th className="text w-1/4 border-0 text-xs !font-semibold !tracking-normal xs:text-base">
                            {competitorName}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {ideSupport?.map(item => (
                        <FeatureComponent item={item} key={item.feature} />
                    ))}
                </tbody>
            </Table>

            <Table>
                <thead>
                    <tr>
                        <th className="w-1/2 border-0 text-left font-semibold">LLM / Model</th>
                        <th className="text w-1/4 border-0 text-xs !font-semibold !tracking-normal xs:text-base">
                            Sourcegraph Cody
                        </th>
                        <th className="text w-1/4 border-0 text-xs !font-semibold !tracking-normal xs:text-base">
                            {competitorName}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {llmSupport?.map(item => (
                        <FeatureComponent item={item} key={item.feature} />
                    ))}
                </tbody>
            </Table>

            <Table>
                <thead>
                    <tr>
                        <th className="w-1/2 border-0 text-left font-semibold">Context and personalization</th>
                        <th className="text w-1/4 border-0 text-xs !font-semibold !tracking-normal xs:text-base">
                            Sourcegraph Cody
                        </th>
                        <th className="text w-1/4 border-0 text-xs !font-semibold !tracking-normal xs:text-base">
                            {competitorName}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {contextSupport?.map(item => (
                        <FeatureComponent item={item} key={item.feature} />
                    ))}
                </tbody>
            </Table>

            <Table>
                <thead>
                    <tr>
                        <th className="w-1/2 border-0 text-left font-semibold">Pricing</th>
                        <th className="text w-1/4 border-0 text-xs !font-semibold !tracking-normal xs:text-base">
                            Sourcegraph Cody
                        </th>
                        <th className="text w-1/4 border-0 text-xs !font-semibold !tracking-normal xs:text-base">
                            {competitorName}
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {pricingSupport?.map(item => (
                        <FeatureComponent item={item} key={item.feature} />
                    ))}
                </tbody>
            </Table>

            <p className="mt-1 text-sm text-gray-400">Last updated: 2024-04-12</p>
        </div>
    </div>
)

const Table: FunctionComponent<TableProps> = ({ children }) => (
    <div className="w-full	overflow-y-auto md:overflow-auto">
        <table className=" w-full table-auto overflow-scroll border-0 md:table-fixed md:overflow-auto">
            {children}
        </table>
    </div>
)

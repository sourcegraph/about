import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { CodePointer } from './CodePointer'
import { Line } from './Line'

interface SideSectionProp {
    codyStartFrom: number
    codyEndFrom: number
    totalLines: number
    activeLine: number
    showCodyPointer: boolean
}

export const SideSection: FunctionComponent<SideSectionProp> = ({
    codyStartFrom,
    codyEndFrom,
    totalLines,
    activeLine = 1,
    showCodyPointer,
}) => {
    const codyGroupLastLine = codyEndFrom > totalLines ? totalLines : codyEndFrom

    const beforeCodyGroup = codyStartFrom === 1 ? [] : generateArray(1, codyStartFrom - 1)
    const codyGroup = generateArray(codyStartFrom, codyGroupLastLine)
    const afterCodyGroup = generateArray(codyEndFrom + 1, totalLines)

    return (
        <div className="text-right leading-[1.42] text-[#5E6E8C]">
            {beforeCodyGroup.length >= 1 && (
                <div className="relative">
                    {beforeCodyGroup.map(line => (
                        <Line
                            key={line}
                            className={classNames('pr-[21.5px]', {
                                'opacity-0': activeLine < line,
                            })}
                        >
                            {line}
                        </Line>
                    ))}
                </div>
            )}

            {codyGroup.length >= 1 && (
                <div className="relative">
                    <CodePointer active={showCodyPointer} />

                    {codyGroup.map(line => (
                        <Line
                            key={line}
                            className={classNames('pr-[21.5px]', {
                                'opacity-0': activeLine < line,
                            })}
                        >
                            {line}
                        </Line>
                    ))}
                </div>
            )}

            {afterCodyGroup.length >= 1 && (
                <div className="relative">
                    {afterCodyGroup.map(line => (
                        <Line
                            key={line}
                            className={classNames('pr-[21.5px]', {
                                'opacity-0': activeLine < line,
                            })}
                        >
                            {line}
                        </Line>
                    ))}
                </div>
            )}
        </div>
    )
}

const generateArray = (start: number, end: number): number[] =>
    Array.from({ length: end - start + 1 }, (___, index) => start + index)

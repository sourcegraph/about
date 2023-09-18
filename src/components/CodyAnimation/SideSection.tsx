import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { CodePointer } from './CodePointer'
import { Line } from './Line'

interface SideSectionProp {
    activeLine?: number
    accepted: boolean
    totalLines: number
}

export const SideSection: FunctionComponent<SideSectionProp> = ({ activeLine = 1, accepted, totalLines }) => {
    const fadeInLinesStartFrom = 2
    const fadeInLines = Array.from({ length: totalLines - 1 }, (___, lineNumber) => lineNumber + fadeInLinesStartFrom)
    return (
        <div className=" text-right  text-[#5E6E8C]">
            {activeLine >= 1 && <Line className="pr-[19px]">1</Line>}

            <div className="relative">
                <CodePointer active={activeLine >= 4} />

                {fadeInLines.map(line => (
                    <Line
                        key={line}
                        className={classNames('pr-[19px]', {
                            'opacity-100': line === 2 && activeLine >= 2,
                            'opacity-0': (!accepted && line !== fadeInLinesStartFrom) || activeLine === 1,
                        })}
                    >
                        {line}
                    </Line>
                ))}
            </div>
        </div>
    )
}

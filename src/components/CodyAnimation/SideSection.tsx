import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { CodePointer } from './CodePointer'
import { Line } from './Line'

// TODO: Add support fot the props below
// codyStartFrom: number;
// codyEndFrom: number;
// totalLines: number;
// activeLine: number;
// accepted: boolean;

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
            {activeLine >= 1 && <Line className="pr-[21.5px]">1</Line>}

            <div className="relative">
                <CodePointer active={activeLine >= 10} />

                {fadeInLines.map(line => (
                    <Line
                        key={line}
                        className={classNames('pr-[21.5px]', {
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

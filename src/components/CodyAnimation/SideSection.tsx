import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { CodePointer } from './CodePointer'
import { Line } from './Line'
interface SideSectionProp {
    lines?: number
    suggestion: boolean
    accepted: boolean
}

export const SideSection: FunctionComponent<SideSectionProp> = ({ lines = 1, suggestion, accepted }) => {
    const lineNumbers = Array.from({ length: 13 }, (___, lineNumber) => lineNumber + 3)
    return (
        <div className={classNames(' text-right  text-[#5E6E8C]')}>
            {lines >= 1 && <Line className="pr-[19px]">1</Line>}
            {suggestion === false && (
                <Line
                    className={classNames('pr-[19px]', {
                        'opacity-0': !(lines >= 2),
                    })}
                >
                    2
                </Line>
            )}

            <div className="relative">
                <CodePointer active={lines >= 4} />
                {lines >= 2 && suggestion === true && <Line className="pr-[19px]">2</Line>}

                <div
                    className={classNames({
                        'opacity-0': !accepted,
                    })}
                >
                    {lineNumbers.map(line => (
                        <Line key={line} className="pr-[19px]">
                            {line}
                        </Line>
                    ))}
                </div>
            </div>
        </div>
    )
}

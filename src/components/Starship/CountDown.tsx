import { FunctionComponent, useEffect, useState } from 'react'

import classNames from 'classnames'

import { remainingTime } from '../../util/remainingTime'

interface Props {
    className?: string
    launchDate: string
}

interface TimeProps {
    value?: string
    label?: string
}

export const CountDown: FunctionComponent<Props> = ({ className, launchDate }) => {
    const [time, setTime] = useState({
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0',
        launched: false,
    })

    useEffect(() => {
        const date = new Date(launchDate).getTime()
        const getRemainingTime = (): void => {
            setTime(remainingTime(date))
        }
        getRemainingTime()

        const countdown = setInterval(getRemainingTime, 1000)

        return () => clearInterval(countdown)
    }, [launchDate])

    return (
        <div
            className={classNames(className, 'flex flex-row items-center justify-center text-white md:items-baseline')}
        >
            <Time value={time.days} label="Days" />
            <p className="px-2 text-5xl font-semibold sm:px-6 md:px-2 md:text-[150px] md:font-normal md:leading-[210px] lg:text-[172px] lg:leading-[241px]">
                :
            </p>
            <Time value={time.hours} label="Hours" />
            <p className="px-2 text-5xl font-semibold sm:px-6 md:px-2 md:text-[150px] md:font-normal md:leading-[210px] lg:text-[172px] lg:leading-[241px]">
                :
            </p>
            <Time value={time.minutes} label="Minutes" />
            <p className="px-2 text-5xl font-semibold sm:px-6 md:px-2 md:text-[150px] md:font-normal md:leading-[210px] lg:text-[172px] lg:leading-[241px]">
                :
            </p>
            <Time value={time.seconds} label="Seconds" />
        </div>
    )
}

const Time: FunctionComponent<TimeProps> = ({ value, label }) => (
    <div className="flex flex-col items-center">
        <p className="mb-0 font-grotesk text-5xl font-semibold tracking-[-1px] md:text-[150px] md:font-normal md:leading-[210px] lg:text-[172px] lg:leading-[241px]">
            {value}
        </p>
        <p className="text-xl font-semibold text-gray-200 lg:text-4xl lg:leading-[50px]">{label}</p>
    </div>
)

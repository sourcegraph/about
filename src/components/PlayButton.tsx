import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import PlayCircleIcon from 'mdi-react/PlayCircleIcon'

interface Props {
    title: string
    time?: string
    ctaText?: string
}

export const PlayButton: FunctionComponent<Props> = ({ title, time, ctaText }) => (
    <div className="z-10 flex w-fit  flex-col md:w-[310px]">
        <PlayCircleIcon className="z-10 mx-auto -mb-4 h-[60px] w-[60px] rounded-[50%] bg-violet-200 text-violet-500" />
        <div className="rounded-[38px] bg-white p-3 px-8 md:px-0">
            <p className="mb-0 text-center font-semibold md:leading-[34px]">{title}</p>
            <div className="flex justify-center gap-4 text-sm font-semibold">
                {time && <p className="mb-0  text-gray-400">{time}</p>}
                {ctaText && (
                    <p className="mb-0 flex items-center text-violet-500">
                        {ctaText} <ChevronRightIcon className="!mb-0 inline" />
                    </p>
                )}
            </div>
        </div>
    </div>
)

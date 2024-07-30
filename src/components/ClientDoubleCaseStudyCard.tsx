import React, { FunctionComponent } from 'react'

import classNames from 'classnames'

interface ClientDoubleCaseStudyCardProps {
    leftClientImgSrc: string
    leftClientName: string
    leftClientTitle: string
    rightClientImgSrc: string
    rightTestimony: string
    rightClientName: string
    rightClientTitle: string
    leftTestimony: string
    className?: string
    roundedImage?: boolean
    title?: string
    titleClassName?: string
    isBatchChangesPage?: boolean
}

interface ClientCardProps {
    isBatchChangesPage?: boolean
    roundedImage?: boolean
    clientImgSrc: string
    clientName: string
    clientTitle: string
    testimony: string
}
const ClientDoubleCaseStudyCard: React.FC<ClientDoubleCaseStudyCardProps> = ({
    leftClientImgSrc,
    rightClientImgSrc,
    rightTestimony,
    leftTestimony,
    rightClientName,
    rightClientTitle,
    isBatchChangesPage,
    leftClientName,
    leftClientTitle,
    className,
    roundedImage,
    titleClassName,
    title,
}) => (
    <div className={classNames(className, 'sg-reviews mb-28 rounded-none px-6 py-24 md:mb-24 md:rounded-2xl md:px-20')}>
        {title && <div className={titleClassName}>{title}</div>}
        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
            <ClientCard
                clientImgSrc={leftClientImgSrc}
                clientName={leftClientName}
                clientTitle={leftClientTitle}
                testimony={leftTestimony}
                roundedImage={roundedImage}
                isBatchChangesPage={isBatchChangesPage}
            />
            <ClientCard
                clientImgSrc={rightClientImgSrc}
                clientName={rightClientName}
                clientTitle={rightClientTitle}
                testimony={rightTestimony}
                roundedImage={roundedImage}
                isBatchChangesPage={isBatchChangesPage}
            />
        </div>
    </div>
)

const ClientCard: FunctionComponent<ClientCardProps> = ({
    isBatchChangesPage,
    roundedImage,
    clientImgSrc,
    clientTitle,
    clientName,
    testimony,
}) => (
    <div
        className={classNames('flex flex-col rounded-[10px] border-1 border-gray-200 bg-white', {
            'gap-2.5 px-[15px] pt-[15px] pb-[25px]': isBatchChangesPage,
            'gap-4 p-5': !isBatchChangesPage,
        })}
    >
        <div className="flex">
            <img
                className={`mr-[10px] h-[40px] w-[40px] ${roundedImage && 'rounded-full'}`}
                src={clientImgSrc}
                alt="Completions Brand Icon"
            />
            <div className="flex flex-col">
                <p className="mb-0 text-base tracking-tight text-violet-500">{clientName}</p>
                <p className="mb-0 text-sm text-gray-500">{clientTitle}</p>
            </div>
        </div>
        <p className="mb-0 text-lg !-tracking-[0.25px] text-gray-700">{testimony}</p>
    </div>
)

export default ClientDoubleCaseStudyCard

import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { ContentSection } from '../ContentSection'

interface OwnFeatureProps {
    steps: { description: string; completed: boolean }[]
}

const getStepClassName = (isCompleted: boolean, index: number, stepsLength: number): string => {
    const isFirstStep = index === 0
    const isLastStep = index === stepsLength - 1

    const completedClass = isCompleted ? 'border-l-blue-300' : 'border-violet-500'
    const fadeTopClass = isFirstStep
        ? isCompleted
            ? 'sg-completed-roadmap-fade-top'
            : 'sg-pending-roadmap-fade-top'
        : ''
    const fadeBottomClass =
        isLastStep && isCompleted
            ? 'sg-completed-roadmap-fade-bottom'
            : isLastStep && !isCompleted
            ? 'sg-pending-roadmap-fade-bottom'
            : ''
    const topClass = isFirstStep ? '-top-6' : 'top-11'

    return `${completedClass} ${fadeTopClass} ${fadeBottomClass} ${topClass}`
}

export const FeatureRoadMap: FunctionComponent<OwnFeatureProps> = ({ steps }) => (
    <ContentSection className="flex h-[100%] flex-col items-center md:-mt-[25%]">
        {steps?.map((step, index) => (
            <div className="relative flex w-full items-center" key={step.description}>
                <div
                    className={classNames(
                        'absolute left-[11px] -bottom-12 border-l',
                        getStepClassName(step.completed, index, steps.length)
                    )}
                />

                <div className="absolute z-10 mt-8 shrink-0">
                    {step.completed ? (
                        <img src="check-circle.svg" alt="completed" className="" aria-hidden="true" />
                    ) : (
                        <img src="light.svg" alt="not completed" className="-ml-[7.5px]" aria-hidden="true" />
                    )}
                </div>
                <p className="ml-16 mt-10 max-w-[418px] text-lg text-gray-200">{step.description}</p>
            </div>
        ))}
    </ContentSection>
)

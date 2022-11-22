import { FunctionComponent, useEffect, useRef, useState } from 'react'

import AlertIcon from 'mdi-react/AlertIcon'
import ChartLineVariantIcon from 'mdi-react/ChartLineVariantIcon'
import CheckCircleIcon from 'mdi-react/CheckCircleIcon'
import ClipboardTextIcon from 'mdi-react/ClipboardTextIcon'
import Link from 'next/link'

interface TextLink {
    text: string
    href?: string
}

interface Props {
    useCases: TextLink[]
    challenges: TextLink[]
    solutions: TextLink[]
    results: TextLink[]
}

interface ListItemProps {
    item: TextLink
}

const isString = (value: string | TextLink): boolean => typeof value === 'string'

const ListItemType: FunctionComponent<ListItemProps> = ({ item }) => (
    <li className="py-1">{item?.href ? <Link href={item.href}>{item.text}</Link> : <span>{item.text}</span>}</li>
)

export const UseChallengeSolutionResults: FunctionComponent<Props> = ({ useCases, challenges, solutions, results }) => {
    const box = useRef<HTMLDivElement | null>(null)
    const [boxHeight, setBoxHeight] = useState<number>(0)
    const bottomContainerPadding = 96
    const boxHalfHeight = `-${boxHeight / 2 + bottomContainerPadding}px`

    function getBoxHeight(): void {
        if (box.current) {
            setBoxHeight(box.current.clientHeight)
        }
    }

    useEffect(() => {
        if (box.current) {
            setBoxHeight(box.current?.clientHeight)
        }

        window.addEventListener('resize', getBoxHeight)

        return () => {
            window.removeEventListener('resize', getBoxHeight)
        }
    }, [])

    return (
        <div className="tw-relative tw-flex lg:tw-flex-row tw-flex-col tw-py-xl">
            <div className="col-lg-6 col-12">
                <div className="mb-5 tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-end">
                    <div className="mb-3 tw-rounded tw-p-1 tw-text-center tw-flex tw-bg-violet-100 tw-self-start col-1 col-lg-2 tw-justify-center tw-items-center max-w-50">
                        <ClipboardTextIcon size={40} className="tw-p-1 tw-text-violet-400" />
                    </div>
                    <div className="tw-pl-xs col-11 col-lg-9">
                        <h4>Use case</h4>
                        {useCases.length > 1 ? (
                            <ul className="mb-0 ml-0 tw-pl-sm">
                                {useCases.map(useCase => (
                                    <ListItemType key={useCase.text} item={useCase} />
                                ))}
                            </ul>
                        ) : useCases[0].href ? (
                            <p className="tw-mb-0">
                                <Link href={useCases[0].href}>{useCases[0].text}</Link>
                            </p>
                        ) : (
                            <span>{useCases[0].text}</span>
                        )}
                    </div>
                </div>
                <div className="mb-5 mb-lg-0 tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-end">
                    <div className="mb-3 tw-rounded tw-p-1 tw-text-center tw-flex tw-bg-violet-100 tw-self-start col-1 col-lg-2 tw-justify-center tw-items-center max-w-50">
                        <AlertIcon size={40} className="tw-p-1 tw-text-violet-400" />
                    </div>
                    <div className="tw-pl-xs col-11 col-lg-9">
                        <h4>Challenge</h4>
                        {challenges.length > 1 ? (
                            <ul className="mb-0 ml-0 tw-pl-sm">
                                {challenges.map(challenge => (
                                    <ListItemType key={challenge.text} item={challenge} />
                                ))}
                            </ul>
                        ) : challenges[0].href ? (
                            <Link href={challenges[0].href}>{challenges[0].text}</Link>
                        ) : (
                            <span>{challenges[0].text}</span>
                        )}
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <div className="mb-5 mb-lg-0 tw-flex tw-flex-col lg:tw-flex-row xl:tw-justify-center">
                    <div className="mb-3 tw-rounded tw-p-1 tw-text-center tw-flex tw-bg-violet-100 tw-self-start col-1 col-lg-2 tw-justify-center tw-items-center max-w-50">
                        <CheckCircleIcon size={40} className="tw-p-1 tw-text-violet-400" />
                    </div>
                    <div className="tw-pl-xs col-11 col-lg-9">
                        <h4>Solution</h4>
                        {solutions.length > 1 ? (
                            <ul className="mb-0 ml-0 tw-pl-sm">
                                {solutions.map(solution => (
                                    <ListItemType key={solution.text} item={solution} />
                                ))}
                            </ul>
                        ) : solutions[0].href ? (
                            <Link href={solutions[0].href}>{solutions[0].text}</Link>
                        ) : (
                            <span>{solutions[0].text}</span>
                        )}
                    </div>
                </div>
            </div>

            <div
                ref={box}
                // eslint-disable-next-line react/forbid-dom-props
                style={{ marginBottom: boxHalfHeight }}
                className="sg-bg-gradient-venus lg:tw-absolute xl:tw-right-5xl lg:tw-right-sm lg:tw-bottom-0 tw-max-w-[700px] lg:tw-max-w-[500px] tw-mx-auto tw-p-8 tw-w-[95%]"
            >
                <div className="ml-lg-0 tw-flex tw-flex-col lg:tw-flex-row">
                    <div className="mb-3 tw-rounded tw-p-1 tw-text-center tw-flex tw-bg-violet-100 tw-self-start col-1 col-lg-2 tw-justify-center tw-items-center max-w-50">
                        <ChartLineVariantIcon size={40} className="tw-p-1 tw-text-violet-400" />
                    </div>
                    <div className="tw-pr-0 tw-pl-xs col-lg-10 col-11">
                        <h4>Results</h4>
                        {results.length > 1 ? (
                            <ul className="tw-pl-6 tw-mb-0 tw-ml-0">
                                {results.map(result => (
                                    <ListItemType key={result.text} item={result} />
                                ))}
                            </ul>
                        ) : results[0].href ? (
                            <Link href={results[0].href}>{results[0].text}</Link>
                        ) : (
                            <span>{results[0].text}</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

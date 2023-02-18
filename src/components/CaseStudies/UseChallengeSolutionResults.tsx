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
        <div className="relative flex flex-col gap-lg py-xl lg:flex-row">
            <div>
                <div className="mb-8 flex flex-col lg:flex-row lg:justify-end">
                    <div className="mb-4 flex max-w-[50px] items-center justify-center self-start rounded bg-violet-100 p-1 text-center">
                        <ClipboardTextIcon size={40} className="p-1 text-violet-400" />
                    </div>
                    <div className="pl-xs">
                        <h4>Use case</h4>
                        {useCases.length > 1 ? (
                            <ul className="mb-0 ml-0 pl-sm">
                                {useCases.map(useCase => (
                                    <ListItemType key={useCase.text} item={useCase} />
                                ))}
                            </ul>
                        ) : useCases[0].href ? (
                            <p className="mb-0">
                                <Link href={useCases[0].href}>{useCases[0].text}</Link>
                            </p>
                        ) : (
                            <span>{useCases[0].text}</span>
                        )}
                    </div>
                </div>
                <div className="mb-8 flex flex-col lg:mb-0 lg:flex-row lg:justify-end">
                    <div className="mb-4 flex max-w-[50px] items-center justify-center self-start rounded bg-violet-100 p-1 text-center">
                        <AlertIcon size={40} className="p-1 text-violet-400" />
                    </div>
                    <div className="pl-xs">
                        <h4>Challenge</h4>
                        {challenges.length > 1 ? (
                            <ul className="mb-0 ml-0 pl-sm">
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
            <div>
                <div className="mb-8 flex flex-col lg:mb-0 lg:flex-row xl:justify-center">
                    <div className="mb-4 flex max-w-[50px] items-center justify-center self-start rounded bg-violet-100 p-1 text-center">
                        <CheckCircleIcon size={40} className="p-1 text-violet-400" />
                    </div>
                    <div className="pl-xs">
                        <h4>Solution</h4>
                        {solutions.length > 1 ? (
                            <ul className="mb-0 ml-0 pl-sm">
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
                className="sg-bg-gradient-venus mx-auto w-[95%] max-w-[700px] p-8 lg:absolute lg:right-sm lg:bottom-0 lg:max-w-[500px] xl:right-5xl"
            >
                <div className="flex flex-col lg:ml-0 lg:flex-row">
                    <div className="mb-4 flex max-w-[50px] items-center justify-center self-start rounded bg-violet-100 p-1 text-center">
                        <ChartLineVariantIcon size={40} className="p-1 text-violet-400" />
                    </div>
                    <div className="pr-0 pl-xs">
                        <h4>Results</h4>
                        {results.length > 1 ? (
                            <ul className="mb-0 ml-0 pl-6">
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

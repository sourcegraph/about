import { FunctionComponent, useEffect, useRef, useState } from 'react'

import AlertIcon from 'mdi-react/AlertIcon'
import ChartLineVariantIcon from 'mdi-react/ChartLineVariantIcon'
import CheckCircleIcon from 'mdi-react/CheckCircleIcon'
import ClipboardTextIcon from 'mdi-react/ClipboardTextIcon'
import Link from 'next/link'

import { useWindowWidth } from '@hooks'

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
    const windowWidth = useWindowWidth()
    const boxHalfHeight = `-${boxHeight / 2}px`

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
        <section className="container tw-relative d-flex flex-lg-row flex-column bg-light-gray-4-2 py-7">
            <div className="col-lg-6 col-12">
                <div className="mb-5 d-flex flex-column flex-lg-row justify-content-lg-end">
                    <div className="p-0 p-1 mb-3 text-center rounded d-flex bg-violet-1 align-self-start col-1 col-lg-2 justify-content-center align-items-center max-w-50">
                        <ClipboardTextIcon size={40} className="p-1 text-vivid-violet" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h4 className="font-weight-bold">Use case</h4>
                        {useCases.length > 1 ? (
                            <ul className="pl-4 mb-0">
                                {useCases.map(useCase => (
                                    <ListItemType key={useCase.text} item={useCase} />
                                ))}
                            </ul>
                        ) : useCases[0].href ? (
                            <Link href={useCases[0].href}>{useCases[0].text}</Link>
                        ) : (
                            <span>{useCases[0].text}</span>
                        )}
                    </div>
                </div>
                <div className="mb-5 mb-lg-0 d-flex flex-column flex-lg-row justify-content-lg-end">
                    <div className="p-0 p-1 mb-3 text-center rounded d-flex bg-violet-1 align-self-start col-1 col-lg-2 justify-content-center align-items-center max-w-50">
                        <AlertIcon size={40} className="p-1 text-vivid-violet" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h4 className="font-weight-bold">Challenge</h4>
                        {challenges.length > 1 ? (
                            <ul className="pl-4 mb-0">
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
                <div className="mb-5 mb-lg-0 d-flex flex-column flex-lg-row justify-content-xl-center">
                    <div className="p-0 p-1 mb-3 text-center rounded d-flex bg-violet-1 align-self-start col-1 col-lg-2 justify-content-center align-items-center max-w-50">
                        <CheckCircleIcon size={40} className="p-1 text-vivid-violet" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h4 className="font-weight-bold">Solution</h4>
                        {solutions.length > 1 ? (
                            <ul className="pl-4 mb-0">
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
                style={{ marginBottom: boxHalfHeight, width: '95%' }}
                className="bg-gradient-venus lg:tw-absolute tw-right-0 tw-bottom-0 xl:tw-max-w-[500px] lg:tw-max-w-[450px] tw-max-w-[700px] tw-mx-auto tw-p-8"
            >
                <div className="ml-lg-0 d-flex flex-column flex-lg-row">
                    <div className="p-0 p-1 mb-3 text-center rounded d-flex bg-violet-1 align-self-start col-1 col-lg-2 justify-content-center align-items-center max-w-50">
                        <ChartLineVariantIcon size={40} className="p-1 text-vivid-violet" />
                    </div>
                    <div className="pl-3 pr-0 col-lg-10 col-11">
                        <h4 className="font-weight-bold">Results</h4>
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
        </section>
    )
}

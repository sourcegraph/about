import { FunctionComponent, useEffect, useRef, useState } from 'react'

import ChartBarIcon from 'mdi-react/ChartBarIcon'
import CheckCircleOutlineIcon from 'mdi-react/CheckCircleOutlineIcon'
import ClipboardTextOutlineIcon from 'mdi-react/ClipboardTextOutlineIcon'
import FlagOutlineIcon from 'mdi-react/FlagOutlineIcon'
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
        <section className="position-relative container d-flex flex-lg-row flex-column bg-light-gray-4-2 py-7">
            <div className="col-lg-6 col-12">
                <div className="mb-5 d-flex flex-column flex-lg-row justify-content-lg-end">
                    <div className="d-flex bg-white align-self-start mb-3 col-1 col-lg-2 justify-content-center align-items-center p-0 rounded-circle text-center p-1 max-w-50">
                        <ClipboardTextOutlineIcon size={40} className="p-1 text-blurple" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h5 className="font-weight-bold">Use case</h5>
                        {useCases.length > 1 ? (
                            <ul className="pl-4 mb-0">
                                {useCases.map(useCase => (
                                    <ListItemType key={useCase.text} item={useCase} />
                                ))}
                            </ul>
                        ) : (
                            useCases[0].href ? <Link href={useCases[0].href}>{useCases[0].text}</Link> : <span>{useCases[0].text}</span>
                        )}
                    </div>
                </div>
                <div className="mb-lg-0 mb-5 d-flex flex-column flex-lg-row justify-content-lg-end">
                    <div className="d-flex bg-white align-self-start mb-3 col-1 col-lg-2 justify-content-center align-items-center p-0 rounded-circle text-center p-1 max-w-50">
                        <FlagOutlineIcon size={40} className="p-1 text-blurple" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h5 className="font-weight-bold">Challenge</h5>
                        {challenges.length > 1 ? (
                            <ul className="pl-4 mb-0">
                                {challenges.map(challenge => (
                                    <ListItemType key={challenge.text} item={challenge} />
                                ))}
                            </ul>
                        ) : (
                            challenges[0].href ? <Link href={challenges[0].href}>{challenges[0].text}</Link> : <span>{challenges[0].text}</span>
                        )}
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-12">
                <div className="mb-lg-0 mb-5 d-flex flex-column flex-lg-row justify-content-xl-center">
                    <div className="d-flex bg-white align-self-start mb-3 col-1 col-lg-2 justify-content-center align-items-center p-0 rounded-circle text-center p-1 max-w-50">
                        <CheckCircleOutlineIcon size={40} className="p-1 text-blurple" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h5 className="font-weight-bold">Solution</h5>
                        {solutions.length > 1 ? (
                            <ul className="pl-4 mb-0">
                                {solutions.map(solution => (
                                    <ListItemType key={solution.text} item={solution} />
                                ))}
                            </ul>
                        ) : (
                            solutions[0].href ? <Link href={solutions[0].href}>{solutions[0].text}</Link> : <span>{solutions[0].text}</span>
                        )}
                    </div>
                </div>
            </div>

            <div
                ref={box}
                // eslint-disable-next-line react/forbid-dom-props
                style={{ marginBottom: boxHalfHeight, width: '95%' }}
                className="col-5 bg-gradient-venus-radial lg-absolute right-0 max-w-xl-500 max-w-450 bottom-0 mx-auto px-4 py-5"
            >
                <div className="ml-lg-0 d-flex flex-column flex-lg-row">
                    <div className="d-flex bg-white align-self-start mb-3 col-1 col-lg-2 justify-content-center align-items-center p-0 rounded-circle text-center p-1 max-w-50">
                        <ChartBarIcon size={40} className="p-1 text-blurple" />
                    </div>
                    <div className="pl-3 col-lg-11 col-12">
                        <h5 className="font-weight-bold">Results</h5>
                        {results.length > 1 ? (
                            <ul className="pl-4 mb-0">
                                {results.map(result => (
                                    <ListItemType key={result.text} item={result} />
                                ))}
                            </ul>
                        ) : (
                            results[0].href ? <Link href={results[0].href}>{results[0].text}</Link> : <span>{results[0].text}</span>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

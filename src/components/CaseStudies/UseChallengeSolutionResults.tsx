import { FunctionComponent } from 'react'

import ChartBarIcon from 'mdi-react/ChartBarIcon'
import CheckCircleOutlineIcon from 'mdi-react/CheckCircleOutlineIcon'
import ClipboardTextOutlineIcon from 'mdi-react/ClipboardTextOutlineIcon'
import FlagOutlineIcon from 'mdi-react/FlagOutlineIcon'
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
    <li>{item?.href ? <Link href={item.href}>{item.text}</Link> : <span>{item.text}</span>}</li>
)

export const UseChallengeSolutionResults: FunctionComponent<Props> = ({ useCases, challenges, solutions, results }) => (
    <section className="d-flex flex-column flex-md-row">
        <div className="bg-light-gray-4-2 p-lg-6 p-md-5 px-1 py-5 col-sm-12 col-md-6">
            <section className="max-w-xl-550 ml-xl-auto">
                <div className="mb-5 ml-3 d-flex flex-column flex-md-row justify-content-lg-end">
                    <div className="d-flex bg-white align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 rounded-circle text-center p-1 max-w-50">
                        <ClipboardTextOutlineIcon size={40} className="p-1 text-blurple" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h5 className="font-weight-bold">Use case</h5>
                        {useCases.length > 1 ? (
                            <ul className="pl-4">
                                {useCases.map(useCase => (
                                    <ListItemType key={useCase.text} item={useCase} />
                                ))}
                            </ul>
                        ) : (
                            useCases[0].href ? <Link href={useCases[0].href}>{useCases[0].text}</Link> : <span>{useCases[0].text}</span>
                        )}
                    </div>
                </div>
                <div className="mb-5 ml-3 d-flex flex-column flex-md-row justify-content-lg-end">
                    <div className="d-flex bg-white align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 rounded-circle text-center p-1 max-w-50">
                        <FlagOutlineIcon size={40} className="p-1 text-blurple" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h5 className="font-weight-bold">Challenge</h5>
                        {challenges.length > 1 ? (
                            <ul className="pl-4">
                                {challenges.map(challenge => (
                                    <ListItemType key={challenge.text} item={challenge} />
                                ))}
                            </ul>
                        ) : (
                            challenges[0].href ? <Link href={challenges[0].href}>{challenges[0].text}</Link> : <span>{challenges[0].text}</span>
                        )}
                    </div>
                </div>
                <div className="mb-5 ml-3 d-flex flex-column flex-md-row justify-content-lg-end">
                    <div className="d-flex bg-white align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 rounded-circle text-center p-1 max-w-50">
                        <CheckCircleOutlineIcon size={40} className="p-1 text-blurple" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h5 className="font-weight-bold">Solution</h5>
                        {solutions.length > 1 ? (
                            <ul className="pl-4">
                                {solutions.map(solution => (
                                    <ListItemType key={solution.text} item={solution} />
                                ))}
                            </ul>
                        ) : (
                            solutions[0].href ? <Link href={solutions[0].href}>{solutions[0].text}</Link> : <span>{solutions[0].text}</span>
                        )}
                    </div>
                </div>
            </section>
        </div>
        <div className="bg-gradient-venus-radial p-lg-6 p-md-5 px-1 py-5 col-sm-12 col-md-6">
            <section className="max-w-xl-550">
                <div className="mb-5 ml-3 ml-lg-0 d-flex flex-column flex-md-row">
                    <div className="d-flex bg-white align-self-center align-self-md-start col-1 col-md-2 justify-content-center align-items-center p-0 rounded-circle text-center p-1 max-w-50">
                        <ChartBarIcon size={40} className="p-1 text-blurple" />
                    </div>
                    <div className="pl-3 col-11 col-lg-9">
                        <h5 className="font-weight-bold">Results</h5>
                        {results.length > 1 ? (
                            <ul className="pl-4">
                                {results.map(result => (
                                    <ListItemType key={result.text} item={result} />
                                ))}
                            </ul>
                        ) : (
                            results[0].href ? <Link href={results[0].href}>{results[0].text}</Link> : <span>{results[0].text}</span>
                        )}
                    </div>
                </div>
            </section>
        </div>
    </section>
)

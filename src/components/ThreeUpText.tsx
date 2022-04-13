import { FunctionComponent } from 'react'

interface Result {
    subtitle: string
    description: string
}

interface Props {
    title: string
    results: Result[]
}

export const ThreeUpText: FunctionComponent<Props> = ({ title, results }) => (
    <div className="bg-gradient-venus-radial py-lg-7 p-5">
        <section className="container-xl">
            <h2 className="text-center display-3 font-weight-bold">{title}</h2>

            <div className="mb-5 d-flex flex-wrap justify-content-center">
                {results.map((result, index) => (
                    <div key={`result-${index + 1}-${result.subtitle}`} className="col-sm-12 col-md-4 text-center pt-5">
                        <h3 className="pb-3 font-weight-bold text-curious-blue">{result.subtitle}</h3>
                        <p className="max-w-md-400 max-w-lg-250 max-w-xl-250 mx-auto">{result.description}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
)

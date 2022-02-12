import { FunctionComponent } from 'react'

export const CaseStudy: FunctionComponent = () => (
    <div className="container">
        <p>
            Founded in France in 2005, Criteo partners with retailers to recommend products to potential
            customers through ad retargeting. The company has massive volumes of data stored in its
            on-premise servers, along with millions of lines of code that developers work on in both Paris
            and the U.S.
        </p>

        <p>
            Criteo has a heterogeneous ecosystem with thousands of repositories. When working on a single
            repository, developers use their IDE for code search. But for teams that are cross-functional or
            work in multiple repositories, this small-scale search strategy isn't sufficient and can be a
            major time sink.
        </p>

        <div className="row justify-content-md-center pt-3">
            <div className="col-md-4">
                <img
                    src='/assets/case-studies/francois-jehl-criteo.jpg'
                    alt="François Jehl, Senior Engineering Manager, Criteo"
                    className="case-studies__img rounded-circle img-fluid mx-auto d-block mb-3"
                />
            </div>
            <div className="col-md-4">
                <img
                    src='/assets/case-studies/loic-teikiteetini-vaysse-criteo.jpg'
                    alt="Loic Teikiteetini-Vaysse, Software Development Engineer, Criteo"
                    className="case-studies__img rounded-circle img-fluid mx-auto d-block mb-3"
                />
            </div>
        </div>

        <h2 className="pt-5 pb-1">Prioritize developer happiness and productivity follows</h2>

        <p>
            Sourcegraph serves as Criteo's one-stop shop for searching across all of its codebases, making
            its employees' lives that much easier. Criteo relies on many different ecosystems for different
            teams, and Sourcegraph now provides the ability to cross boundaries of different codebases and
            different languages authored by different people with different tools.
        </p>

        <p>
            Developers start with a query, then use the recommended filters to narrow their search until
            they locate the piece of code that is of interest. “Sometimes they don't even know what they're
            looking for—perhaps just patterns that need to be deprecated. With our previous tools, the
            results were not good,” said François Jehl.
        </p>

        <h2 className="pt-5 pb-1">Survey says Sourcegraph is the ultimate time-saver</h2>

        <p>
            Criteo conducted an internal survey with Sourcegraph early adopters to determine how Sourcegraph
            has impacted its developers' workflows. The survey found that 83 percent of those developers
            used Sourcegraph every single day, and nearly two-thirds used it several times per day.
        </p>

        <p>
            55 percent of respondents said Sourcegraph saved them a few dozen minutes per day, while 18
            percent stated they saved over an hour per day.
        </p>

        <p>
            As codebases grow larger, Sourcegraph will continue to serve as the backbone to help developers
            at Criteo quickly search through code to understand what's happening within its ecosystem.
        </p>
    </div>
)

export default CaseStudy

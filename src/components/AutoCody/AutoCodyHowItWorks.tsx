import { FunctionComponent } from 'react'

const AutoCodyHowItWorks: FunctionComponent = () => (
    <div>
        <h2 className="text-center text-4xl font-semibold !tracking-[-1px] text-[#0F111A]">How does AutoCody work?</h2>
        <h3 className="mx-auto mt-2 text-center text-xl font-semibold tracking-tight text-gray-400">
            A 5-step user{' '}
            <span role="img" aria-label="handshake">
                🤝
            </span>{' '}
            AI strategy
        </h3>

        <div className="mt-14 grid grid-cols-[400px,1fr] gap-4">
            <div className="">
                <div className="rounded-2xl bg-gray-200/30 p-8">
                    <p className="text-sm font-semibold text-gray-400">Step 1</p>
                    <h3 className="text-2xl font-semibold text-[#0F111A]">Prompting</h3>
                    <p className="mt-4 text-lg text-gray-500">
                        The step that we know and have done 1,000+ times in the past year
                    </p>
                </div>
            </div>
            <div className="">
                <div className="rounded-2xl bg-gray-200/30 p-8">VIDEO GOES HERE</div>
            </div>
        </div>
    </div>
)

export default AutoCodyHowItWorks

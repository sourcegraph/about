import { FunctionComponent } from 'react'

export const HeadingSection: FunctionComponent = () => (
    <div className="flex justify-center">
        <img
            src="/sourcegraph/sourcegraph-mark.svg"
            className="h-[67.71px] w-[61.71px] md:h-24 md:w-24"
            alt="Sourcegraph"
        />
        <p className="ml-[17px] font-grotesk text-[40px] font-light leading-[64px] tracking-[-1px] text-white md:ml-[22px] md:text-[86px] md:leading-[110px]">
            5.0
        </p>
        <div className="ml-2 mt-2.5 h-[56.39px] w-[0.96px] bg-white sm:ml-5 md:h-[88px] md:w-[1.5px]" />
        <img
            src="/starship/starship-blur.svg"
            className="ml-2 h-[158px] w-[200px] sm:ml-5 sm:h-[209.9px] sm:w-[284px] md:ml-[31px] md:h-[327.57px] md:w-[442px]"
            alt="Starship"
        />
    </div>
)

const icons = [
    {
        src: '/assets/icons/leidos-logo-light.svg',
        className: 'h-[35px]',
    },
    {
        src: '/assets/icons/siriusxm-logo-light.svg',
        className: 'h-[32px]',
    },
    {
        src: '/assets/icons/reddit-logo-light.svg',
        className: 'h-[35px]',
    },
    {
        src: '/assets/icons/1password-logo-light.svg',
        className: 'h-[32px]',
    },
    {
        src: '/assets/icons/palo-alto-logo-light.svg',
        className: 'h-[35px]',
    },
    {
        src: '/assets/icons/atlassian-logo-light.svg',
        className: 'h-[32px]',
    },
]

const ServicesHero = (): any => (
    <div className="mt-8 w-[85%] rounded-lg bg-violet-700 px-10 xl:px-16">
        <div className="flex flex-wrap items-center gap-20 self-stretch lg:flex-nowrap 2xl:content-center 2xl:justify-between">
            <div className="flex w-[400px] flex-grow flex-col space-y-6 pt-10 lg:mt-0 2xl:items-start">
                <h1 className="leading-extra-tight tracking-extra-tight pb-0 font-sans text-6xl font-semibold text-white 2xl:pt-0">
                    Professional Services
                </h1>
                <p className="leading-custom-150 tracking-custom-tight font-sans text-lg font-normal text-white">
                    Whether you need tailored implementation, heightened ongoing support, or specialized projects to
                    drive greater value and utilization, we provide the expertise to ensure smooth, efficient adoption
                    across your organization.
                </p>
            </div>

            <div className="relative mt-20 flex w-[350px] lg:h-full">
                <div className="flex flex-col space-y-[5px] overflow-y-auto pl-4 md:space-y-[18px] lg:h-full">
                    <div className="light-metallic-gradient-to-r rounded-2xl p-8 text-gray-700">
                        <div className="">
                            "Your team's exceptional technical support and prompt assistance have been invaluable
                            throughout our collaboration."
                        </div>
                        <div className="mt-5 opacity-70">- Sourcegraph enterprise customer</div>
                    </div>
                </div>
            </div>
        </div>

        {/* loop over icons */}
        <div className="flex items-center justify-between py-16">
            {icons.map(icon => (
                <img key={icon.src} src={icon.src} alt="" className={`mx-2 h-[32px] ${icon.className}`} />
            ))}
        </div>
    </div>
)

export default ServicesHero

import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

interface Props {
    title: string
    competitorIcon: string
    competitorDescription: string
    children: ReactNode
    titleClassName?: string
    simpleStyle?: boolean
    containerClassName?: string
}

const CompareHero: FunctionComponent<Props> = ({
    title,
    titleClassName,
    competitorIcon,
    competitorDescription,
    children,
    simpleStyle = false,
    containerClassName,
}) => {
    const brandBoxShadow = simpleStyle ? 'inset 0px 13px 7px -6px #f2f2f2' : ''
    return (
        <div className="bg-red-300 ">
            <div className="relative isolate">
                {/* grid background */}
                <svg
                    className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 opacity-70 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                        <path
                            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                        fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
                    />
                </svg>

                <div className="overflow-hidden">
                    <div className={classNames('mx-auto max-w-7xl px-6 pb-24 pt-28 xl:px-0', containerClassName)}>
                        <div className="gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                            <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                {/* title */}
                                <h1 className={titleClassName}>{title}</h1>

                                {/* the comparison paragraphs */}
                                <div className="mt-10 space-y-5 text-base leading-[1.6] text-gray-500 sm:max-w-md lg:mr-10 lg:max-w-none">
                                    {children}
                                </div>
                            </div>

                            {/* icon grid */}
                            <div className="mt-20 flex w-full items-center justify-center lg:mt-0">
                                {/* vs box is placed in the center */}
                                {/* the cody and competitor logos are placed absolutely from that */}
                                <div
                                    className={classNames('relative flex items-center lg:items-baseline lg:gap-0', {
                                        'gap-5': !simpleStyle,
                                    })}
                                >
                                    {/* vs box */}
                                    <div
                                        className={classNames(
                                            'relative z-[2] h-16 w-16 rounded-md p-1 lg:h-24 lg:w-24',
                                            {
                                                'bg-gray-300 ': !simpleStyle,
                                            }
                                        )}
                                    >
                                        <div className="flex h-full w-full items-center justify-center rounded bg-white font-extrabold">
                                            <span
                                                className={classNames(
                                                    '-translate-y-1 bg-gradient-to-br from-gray-400 to-gray-600 bg-clip-text leading-none text-transparent ',
                                                    {
                                                        'text-4xl lg:text-8xl': !simpleStyle,
                                                        'text-4xl font-bold lg:text-[34.32px] lg:leading-[40.96px]':
                                                            simpleStyle,
                                                    }
                                                )}
                                            >
                                                vs
                                            </span>
                                        </div>
                                    </div>

                                    {/* cody logo */}
                                    <div
                                        className={classNames(' z-[3] order-first  lg:absolute lg:order-none ', {
                                            '-left-40 -top-40 h-32 w-32 rounded-md bg-gradient-to-br from-vermillion-300 via-violet-400 to-blue-400 p-1 shadow-card lg:h-44 lg:w-44':
                                                !simpleStyle,
                                            '-left-28 -top-24 h-32 w-32 overflow-hidden rounded-[35.46px] border-[4px] border-[#F2F2F2] p-1 lg:h-[137px] lg:w-[137px]':
                                                simpleStyle,
                                        })}
                                        // eslint-disable-next-line react/forbid-dom-props
                                        style={{ boxShadow: brandBoxShadow }}
                                    >
                                        <div
                                            className={classNames(
                                                'flex h-full w-full items-center justify-center rounded ',
                                                {
                                                    'bg-white': !simpleStyle,
                                                }
                                            )}
                                        >
                                            <img
                                                src="/cody-logomark-default.svg"
                                                alt="Cody Logo"
                                                className={classNames({
                                                    'h-16 w-16 lg:h-24 lg:w-24': !simpleStyle,
                                                    'h-[74px] w-[74px]': simpleStyle,
                                                })}
                                            />
                                        </div>
                                    </div>

                                    {/* competitor logo */}
                                    <div
                                        className={classNames('h-32 w-32', {
                                            '-bottom-40 -right-40 z-[1] h-32 w-32 rounded-md bg-gray-600 p-1 shadow-lg lg:absolute  lg:h-44 lg:w-44':
                                                !simpleStyle,
                                            '-bottom-24 -right-28 z-[11] overflow-hidden rounded-[35.46px] border-[4px] border-[#F2F2F2] p-1 lg:absolute lg:h-[137px] lg:w-[137px]':
                                                simpleStyle,
                                        })}
                                        // eslint-disable-next-line react/forbid-dom-props
                                        style={{ boxShadow: brandBoxShadow }}
                                    >
                                        <div
                                            className={classNames(
                                                'flex h-full w-full  items-center justify-center rounded ',
                                                {
                                                    'bg-white': !simpleStyle,
                                                }
                                            )}
                                        >
                                            <img
                                                src={competitorIcon}
                                                alt={competitorDescription}
                                                className={classNames({
                                                    'h-16 w-16 lg:h-24 lg:w-24': !simpleStyle,
                                                    'h-[74px] w-[74px]': simpleStyle,
                                                })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompareHero

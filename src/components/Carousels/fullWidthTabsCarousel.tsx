import { FunctionComponent, ReactNode, useEffect, useState } from 'react'

import classNames from 'classnames'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

import { breakpoints } from '../../data/breakpoints'
import { useCarousel } from '../../hooks/carousel'
import { useWindowWidth } from '../../hooks/windowWidth'
import ReadCaseStudyLink from '../ReadCaseStudyLink'
import { Template } from '../TemplateCodeBlock'

interface FullWidthTabsCarouselProps {
    items: CarouselItem[]
    title?: string | ReactNode
    autoAdvance?: boolean
    animateTransition?: boolean
    darkMode?: boolean
    content: ContentEnum
    cta?: boolean
    overline?: boolean
    overlineText?: string | ReactNode
    subtitle?: string
    parentSectionClassName?: string
    isVariant?: boolean
}
export enum ContentEnum { // Ensure export if used in other files
    Media = 'media',
    Copy = 'copy',
}

interface CarouselItem {
    title: string
    subtitle?: string
    text: ReactNode
}

export const FullWidthTabsCarousel: FunctionComponent<FullWidthTabsCarouselProps> = ({
    items,
    title,
    content,
    autoAdvance = true,
    darkMode = false,
    animateTransition = false,
    cta = true,
    overline = true,
    overlineText,
    subtitle,
    isVariant,
    parentSectionClassName,
}) => {
    const carouselHook = useCarousel(items, autoAdvance ?? false)
    const carouselItems = carouselHook.carouselItems.items as CarouselItem[]
    const [currentItem, setCurrentItem] = useState(carouselItems[0])

    useEffect(() => {
        setCurrentItem(carouselHook.carouselItems.currentItem as CarouselItem)
    }, [carouselHook.carouselItems.currentItem])

    const windowWidth = useWindowWidth()
    const isMdOrDown = windowWidth < breakpoints.lg
    const activePaginationColor = darkMode ? 'bg-white' : 'bg-gray-700'
    const inactivePaginationColor = darkMode ? 'bg-[#E4E9F4]' : 'bg-gray-300'

    const getItemClassName = (
        item: CarouselItem,
        currentItem: ReactNode | CarouselItem | Template,
        animateTransition: boolean
    ): string => {
        if (!animateTransition) {
            return ''
        }
        return item === currentItem
            ? 'sg-border-gradient-saturn border-2 border-solid px-2 text-black '
            : 'text-gray-300'
    }

    const getCarouselClassName = (content: ContentEnum, animateTransition: boolean, isMdOrDown: boolean): string => {
        if (content === ContentEnum.Media) {
            return 'items-center'
        }

        if (animateTransition && !isMdOrDown) {
            return 'h-[550px] bg-gray-50'
        }

        return 'min-h-full items-start'
    }

    const getCarouselCopyClassNames = (
        item: CarouselItem,
        currentItem: ReactNode | CarouselItem | Template,
        animateTransition: boolean
    ): string => {
        if (animateTransition) {
            return item === currentItem ? 'opacity-100 lg:w-[350px] xl:w-[450px]' : 'opacity-0'
        }

        return item === currentItem ? 'block w-full opacity-100' : 'opacity-0 absolute -z-10'
    }
    return (
        <div>
            <FullWidthTabsHeader
                overline={overline}
                overlineText={overlineText}
                cta={cta}
                darkMode={darkMode}
                title={title}
                subTitle={subtitle}
                isVariant={isVariant}
            />
            <div
                className={classNames(
                    'grid grid-cols-1 items-center justify-center lg:grid-cols-2 lg:gap-8',
                    parentSectionClassName
                )}
            >
                {/* Mobile Image Caption (Button Label) */}
                {content === ContentEnum.Media && (
                    <div className="mb-0 block md:mx-auto lg:mb-0 lg:hidden">
                        {carouselItems.map((item, index) => (
                            <h3
                                className={classNames(
                                    'hidden text-center',
                                    item === carouselHook.carouselItems.currentItem && 'block'
                                )}
                                key={item.title}
                                onClick={() => carouselHook.moveCarousel(index)}
                                onKeyDown={() => carouselHook.moveCarousel(index)}
                                role="presentation"
                            >
                                {item.title}
                            </h3>
                        ))}
                    </div>
                )}

                {/* Web Indicators */}
                <div className="m-0 hidden flex-col justify-between px-0 py-6 pl-14 lg:flex lg:gap-[18px]">
                    {carouselItems.map((item, index) => {
                        const itemClassName = getItemClassName(
                            item,
                            carouselHook.carouselItems.currentItem,
                            animateTransition
                        )
                        return (
                            <div
                                className={classNames(
                                    'custom-carousel-item display-5 mb-0 max-w-[430px] cursor-pointer py-2 transition-all duration-500 ease-in-out',
                                    itemClassName,
                                    index !== carouselItems.length - 1 ? 'mb-2' : 'mb-0'
                                )}
                                key={item.title}
                                onClick={() => carouselHook.moveCarousel(index)}
                                onKeyDown={() => carouselHook.moveCarousel(index)}
                                role="button"
                                tabIndex={0}
                            >
                                <h5
                                    className={classNames(
                                        'mb-1 ml-4 text-lg font-semibold leading-[23.4px] transition-all duration-500 ease-in-out',
                                        animateTransition ? 'text-lg' : 'font-normal',
                                        !animateTransition &&
                                            item === carouselHook.carouselItems.currentItem &&
                                            'my-2 border-l-2 border-gray-300 pl-4',
                                        darkMode ? 'text-white opacity-60' : 'text-gray-700',
                                        isVariant && 'text-[32px]'
                                    )}
                                >
                                    {item.title}
                                </h5>
                                {item.subtitle && <p className="mb-0">{item.subtitle}</p>}
                            </div>
                        )
                    })}
                </div>

                {/* Carousel Item Copy*/}
                <div
                    className={classNames(
                        'relative flex justify-center lg:justify-start',
                        getCarouselClassName(content, animateTransition, isMdOrDown)
                    )}
                >
                    {carouselItems.map(item => {
                        const itemClassName = getCarouselCopyClassNames(
                            item,
                            carouselHook.carouselItems.currentItem,
                            animateTransition
                        )
                        return (
                            <div
                                key={item.title}
                                className={classNames(
                                    'flex justify-center overflow-hidden transition-all duration-500 ease-in-out md:rounded-xl',
                                    animateTransition && 'absolute',
                                    itemClassName
                                )}
                            >
                                <div>{item.text}</div>
                            </div>
                        )
                    })}
                </div>

                {/* Mobile Indicators */}
                <div className="mx-auto mt-10 flex items-center py-2.5 lg:hidden">
                    <ArrowLeftIcon
                        className="mr-9 cursor-pointer"
                        onClick={() => carouselHook.moveCarousel('decrement')}
                        color={carouselHook.autoAdvance && carouselHook.isAdvancing ? '#D0D0D0' : activePaginationColor}
                    />
                    <div className="flex flex-row gap-3">
                        {carouselItems.map((item, index) => (
                            <button
                                type="button"
                                onClick={() => carouselHook.moveCarousel(index)}
                                key={item.title}
                                className={classNames(
                                    'h-[12px] w-[12px] cursor-pointer rounded-full',
                                    item === carouselHook.carouselItems.currentItem
                                        ? activePaginationColor
                                        : inactivePaginationColor
                                )}
                            />
                        ))}
                    </div>
                    <ArrowRightIcon
                        className="ml-9 cursor-pointer"
                        onClick={() => carouselHook.moveCarousel()}
                        color={
                            carouselHook.autoAdvance && !carouselHook.isAdvancing ? '#D0D0D0' : activePaginationColor
                        }
                    />
                </div>
            </div>
        </div>
    )
}

interface FullWidthTabsHeaderProps {
    darkMode: boolean
    cta: boolean
    overline: boolean
    title?: string | ReactNode
    subTitle?: string
    overlineText?: string | ReactNode
    isVariant?: boolean
}
const FullWidthTabsHeader: FunctionComponent<FullWidthTabsHeaderProps> = ({
    darkMode,
    cta,
    overline,
    title,
    subTitle,
    overlineText,
    isVariant,
}) => (
    <div className={classNames('flex flex-row justify-center', darkMode ? 'text-white opacity-60' : 'text-gray-700')}>
        <div
            className={classNames(
                'mb-8 flex max-w-[632px] flex-col items-center !gap-0 lg:mb-16',
                isVariant && 'md:!max-w-[800px]'
            )}
        >
            {overline && (
                <h6
                    className={classNames(
                        'py-0 text-center uppercase',
                        darkMode ? 'text-white opacity-60' : 'text-gray-700 opacity-70'
                    )}
                >
                    <span className="mb-4">{overlineText}</span>
                </h6>
            )}
            <h2
                className={classNames(
                    'text-center md:mx-auto md:max-w-[493px]',
                    darkMode ? 'text-white opacity-80' : 'text-gray-700',
                    isVariant && 'md:!max-w-[800px]'
                )}
            >
                {title}
            </h2>
            {subTitle && (
                <div
                    className={classNames(
                        'pt-4 text-center',
                        darkMode ? 'text-white opacity-60' : 'text-gray-700 opacity-70',
                        isVariant ? 'text-xl md:max-w-[800px]' : 'text-base'
                    )}
                >
                    {subTitle}
                </div>
            )}
            {cta && (
                <ReadCaseStudyLink
                    linkClassName={classNames(
                        'btn-link-dark btn-link-icon pt-4 flex gap-2.5 font-semibold leading-[22.4px] text-white',
                        darkMode ? 'text-white' : 'text-violet-500'
                    )}
                    href="/case-studies/qualtrics-speeds-up-unit-tests-and-code-understanding-with-cody"
                />
            )}
        </div>
    </div>
)

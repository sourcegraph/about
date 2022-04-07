import { useRef, useState, useEffect, FunctionComponent, useCallback } from 'react'

import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import Link from 'next/link'
import { useSpring, animated } from 'react-spring'

import { buttonStyle, buttonLocation } from '@components'

const ITEMS: {
    name: string
    url: string
    link?: {
        url: string
        target?: string
        rel?: string
    }
}[] = [
    {
        name: 'Amazon',
        url: '/external-logos/amazon-logo.svg',
    },
    {
        name: 'Dropbox',
        url: '/external-logos/dropbox-logo.svg',
    },
    {
        name: 'Cloudflare',
        url: '/external-logos/cloudflare-color-logo.svg',
    },
    {
        name: 'GE',
        url: '/external-logos/general-electric-logo.svg',
    },
    {
        name: 'Reddit',
        url: '/external-logos/reddit-logo.png',
    },
    {
        name: 'Paypal',
        url: '/external-logos/paypal-logo.svg',
    },
    {
        name: 'Indeed',
        url: '/external-logos/indeed-logo.svg',
    },
    {
        name: 'Uber',
        url: '/external-logos/uber.svg',
    },
    {
        name: 'Plaid',
        url: '/external-logos/plaid-logo.svg',
    },
    {
        name: 'Lyft',
        url: '/external-logos/lyft-logo.svg',
    },
    {
        name: 'Unity',
        url: '/external-logos/unity.svg',
    },
    {
        name: 'Collective Health',
        url: '/external-logos/collective-health-logo.svg',
    },
    {
        name: 'F5',
        url: '/external-logos/f5-logo.svg',
    },
    {
        name: 'Qualtrics',
        url: '/external-logos/qualtrics-logo.svg',
    },
    {
        name: 'Toast',
        url: '/external-logos/toast-logo.svg',
    },
    {
        name: 'SoFi',
        url: '/external-logos/sofi-logo.svg',
    },
    {
        name: 'Yelp',
        url: '/external-logos/yelp.svg',
    },
    {
        name: 'Prezi',
        url: '/external-logos/prezi-logo.svg',
    },
    {
        name: 'Thought Machine',
        url: '/external-logos/thought-machine-logo.svg',
    },
    {
        name: 'Adidas Running',
        url: '/external-logos/adidas-runtastic-sq-logo.svg',
    },
    {
        name: 'Nutanix',
        url: '/external-logos/nutanix-logo.svg',
    },
    {
        name: 'Quantcast',
        url: '/external-logos/quantcast-logo.svg',
    },
    {
        name: 'Criteo',
        url: '/external-logos/criteo-logo.svg',
    },
    {
        name: 'Convoy',
        url: '/external-logos/convoy-logo.svg',
    },
    {
        name: 'Eventbrite',
        url: '/external-logos/eventbrite.png',
    },
    {
        name: 'Cornerstone OnDemand',
        url: '/external-logos/cornerstone-ondemand-logo.svg',
    },
    {
        name: 'Skelter Labs',
        url: '/external-logos/skelter-labs-logo.svg',
    },
    {
        name: 'Factset',
        url: '/external-logos/factset-logo.svg',
    },
    {
        name: 'Cambridge University Press',
        url: '/external-logos/cambridge-university-press-logo.svg',
    },
    {
        name: 'Workiva',
        url: '/external-logos/workiva-vector-logo.svg',
    },
    {
        name: 'Mercado Libre',
        url: '/external-logos/mercado-libre.svg',
    },
    {
        name: 'Blend',
        url: '/external-logos/blend.svg',
    },
    {
        name: 'AppLovin',
        url: '/external-logos/applovin-logo.svg',
    },
    {
        name: 'TripActions',
        url: '/external-logos/tripactions-logo.svg',
    },
    {
        name: 'Mercari',
        url: '/external-logos/mercari.svg',
    },
    {
        name: 'Handy',
        url: '/external-logos/handy-logo.svg',
    },
    {
        name: 'Capella Space',
        url: '/external-logos/capella_space.svg',
    },
    {
        name: 'Motley Fool',
        url: '/external-logos/motley_fool.svg',
    },
    {
        name: 'Twilio',
        url: '/external-logos/twilio-segment-horizontal-darkacai-logo.svg',
    },
    {
        name: 'Apex Clearing',
        url: '/external-logos/apex-clearing-logo.png',
    },
]

interface Props {
    showButton: boolean
    className: string
    showSection: boolean
    noCta?: boolean
}

export const CustomerLogosSectionAnimated: FunctionComponent<Props> = ({
    showButton,
    className,
    showSection,
    noCta,
}) => {
    const [buttonClass, setButtonClass] = useState('')
    const [windowWidth, setWindowWidth] = useState(0)
    const [imagesWidth, setImagesWidth] = useState(0)
    const [totalWidth, setTotalWidth] = useState(0)
    const [scrollAnimation, setScrollAnimation] = useState(false)
    const [readyToScroll, setReadyToScroll] = useState(false)

    const innerContainerReference = useRef<HTMLDivElement>(null)
    const firstLogoContainerReference = useRef<HTMLDivElement | null>(null)
    const secondLogoContainerReferenceClone = useRef<HTMLDivElement | Node | null>(null)
    const thirdLogoContainerReferenceClone = useRef<HTMLDivElement | Node | null>(null)
    // eslint-disable-next-line id-length
    const [{ x, y, scale }, set] = useSpring(() => ({ x: 0, y: 0, scale: 0 }))
    const minDeviceWidth = 991
    const animationTimeInSeconds = 25
    let extraSpace = 0
    if (ITEMS.length % 3 !== 0) {
        extraSpace = 135
    }

    const adjustWindowWidth = (): void => {
        setWindowWidth(window.innerWidth)
    }

    const transitionStart = useCallback(() => {
        const logoContainerOne = firstLogoContainerReference.current as HTMLDivElement
        const logoContainerTwo = secondLogoContainerReferenceClone.current as HTMLDivElement
        const logoContainerThree = thirdLogoContainerReferenceClone.current as HTMLDivElement

        if (logoContainerOne && logoContainerTwo && logoContainerThree) {
            logoContainerOne.style.transition = `${animationTimeInSeconds}s linear`
            logoContainerTwo.style.transition = `${animationTimeInSeconds}s linear`
            logoContainerThree.style.transition = `${animationTimeInSeconds}s linear`
            logoContainerOne.style.transform = `translateX(${-totalWidth}px)`
            logoContainerTwo.style.transform = `translateX(${-totalWidth}px)`
            logoContainerThree.style.transform = `translateX(${-totalWidth}px)`
        }
    }, [totalWidth])

    const transitionEnd = useCallback(
        (event: Event) => {
            const target = event.target as HTMLDivElement
            if (target.id !== 'logo-container-reference') {
                return
            }
            const logoContainerOne = firstLogoContainerReference.current as HTMLDivElement
            const logoContainerTwo = secondLogoContainerReferenceClone.current as HTMLDivElement
            const logoContainerThree = thirdLogoContainerReferenceClone.current as HTMLDivElement
            if (logoContainerOne && logoContainerTwo && logoContainerThree) {
                logoContainerOne.style.transition = 'none'
                logoContainerTwo.style.transition = 'none'
                logoContainerThree.style.transition = 'none'
                logoContainerOne.style.transform = 'translateX(0px)'
                logoContainerTwo.style.transform = 'translateX(0px)'
                logoContainerThree.style.transform = 'translateX(0px)'
            }
            setTimeout(() => {
                transitionStart()
            }, 0)
        },
        [transitionStart]
    )

    const startAnimation = useCallback(() => {
        const logoElement = document.querySelector('logo-container-reference')
        logoElement?.addEventListener('transitionend', transitionEnd)
        transitionStart()
    }, [transitionEnd, transitionStart])

    const pauseAnimation = useCallback(() => {
        const logoContainerOne = firstLogoContainerReference.current as HTMLDivElement
        const logoContainerTwo = secondLogoContainerReferenceClone.current as HTMLDivElement
        const logoContainerThree = thirdLogoContainerReferenceClone.current as HTMLDivElement
        if (logoContainerOne && logoContainerTwo && logoContainerThree) {
            const transformOne = window.getComputedStyle(logoContainerOne).transform
            const transformTwo = window.getComputedStyle(logoContainerTwo).transform
            const transformThree = window.getComputedStyle(logoContainerThree).transform

            logoContainerOne.style.transform = transformOne
            logoContainerTwo.style.transform = transformTwo
            logoContainerThree.style.transform = transformThree

            logoContainerOne.style.transition = 'none'
            logoContainerTwo.style.transition = 'none'
            logoContainerThree.style.transition = 'none'
        }
    }, [])

    const continueAnimationFromCurrentPosition = useCallback(() => {
        const logoContainerOne = firstLogoContainerReference.current as HTMLDivElement
        const logoContainerTwo = secondLogoContainerReferenceClone.current as HTMLDivElement
        const logoContainerThree = thirdLogoContainerReferenceClone.current as HTMLDivElement
        const transformOne = window.getComputedStyle(logoContainerOne).transform
        const matchedTransformOne = transformOne.match(/matrix.*\((.+)\)/)

        if (logoContainerOne && logoContainerTwo && logoContainerThree && matchedTransformOne) {
            const matrixValueXOne = matchedTransformOne[1].split(', ')[4]
            const xPosition = parseInt(matrixValueXOne, 10)
            const newPosition = -totalWidth - xPosition

            const pixelsPersecond = Math.abs(totalWidth) / animationTimeInSeconds
            const newpositiontime = (Math.abs(newPosition) / pixelsPersecond).toString()

            logoContainerOne.style.transition = `${newpositiontime}s linear`
            logoContainerTwo.style.transition = `${newpositiontime}s linear`
            logoContainerThree.style.transition = `${newpositiontime}s linear`

            logoContainerOne.style.transform = `translateX(${-totalWidth}px)`
            logoContainerTwo.style.transform = `translateX(${-totalWidth}px)`
            logoContainerThree.style.transform = `translateX(${-totalWidth}px)`
        }
    }, [totalWidth])

    const buttonFollowsMouse = useCallback(
        (event: MouseEvent) => {
            if (innerContainerReference.current) {
                const containerRec = innerContainerReference.current.getBoundingClientRect()
                const width = innerContainerReference.current?.offsetWidth
                const height = innerContainerReference.current?.offsetHeight
                const scrollLeft = innerContainerReference.current?.scrollLeft
                if (
                    event &&
                    containerRec &&
                    event.clientX - containerRec?.left > 150 &&
                    event.clientY - containerRec?.top > 60 &&
                    width &&
                    height &&
                    containerRec.left + width - event.clientX > 150 &&
                    containerRec.top + height - event.clientY > 60
                ) {
                    setButtonClass('')
                    set({ scale: 1 })
                } else {
                    setButtonClass('sourcegraph-cta-button-edge')
                    set({ scale: 0.1 })
                }
                set({
                    x: event.clientX - (containerRec.left + scrollLeft),
                    y: event.clientY - containerRec.top,
                })
            }
        },
        [set]
    )

    const handleMouseEnter = useCallback(() => {
        if (readyToScroll) {
            if (!scrollAnimation) {
                setScrollAnimation(true)
            } else {
                continueAnimationFromCurrentPosition()
            }
        }
    }, [continueAnimationFromCurrentPosition, setScrollAnimation, scrollAnimation, readyToScroll])

    const handleMouseMove = useCallback(
        (event: MouseEvent) => {
            if (showButton && readyToScroll) {
                buttonFollowsMouse(event)
            }
        },
        [buttonFollowsMouse, showButton, readyToScroll]
    )

    const handleMouseLeaveInnerArea = useCallback(() => {
        if (readyToScroll) {
            pauseAnimation()
            if (showButton) {
                set({ scale: 0 })
            }
        }
    }, [readyToScroll, pauseAnimation, showButton, set])

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        window.addEventListener('resize', adjustWindowWidth)
        return () => {
            window.removeEventListener('resize', adjustWindowWidth)
        }
    }, [])

    useEffect(() => {
        const promises = ITEMS.map(
            async image =>
                new Promise(resolve => {
                    const imageReference = new Image()
                    imageReference.addEventListener('load', () => {
                        if (imageReference.height && imageReference.width) {
                            let calculatedWidth = (imageReference.width / imageReference.height) * 50
                            if (calculatedWidth > 135) {
                                calculatedWidth = 135
                            }
                            setImagesWidth(previousState => (previousState += calculatedWidth + 70)) // Total width of all images
                        } else {
                            setImagesWidth(previousState => (previousState += 135 + 70))
                        }
                        resolve([image])
                    })
                    imageReference.src = image.url
                })
        )
        Promise.all(promises)
            .then(() => {
                const logoElement = document.querySelector('#logo-container-reference')
                if (logoElement) {
                    logoElement.classList.remove('hidden')
                    const secondLogoContainerClone = logoElement.cloneNode(true)
                    const thirdLogoContainerClone = logoElement.cloneNode(true)
                    logoElement?.parentNode?.insertBefore(secondLogoContainerClone, logoElement.nextSibling)
                    logoElement?.parentNode?.insertBefore(thirdLogoContainerClone, logoElement.nextSibling)
                    secondLogoContainerReferenceClone.current = secondLogoContainerClone
                    thirdLogoContainerReferenceClone.current = thirdLogoContainerClone
                    setReadyToScroll(true)
                }
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    useEffect(() => {
        if (scrollAnimation) {
            startAnimation()
        }
    }, [scrollAnimation, startAnimation])

    useEffect(() => {
        if (readyToScroll && windowWidth < minDeviceWidth) {
            setTimeout(() => {
                startAnimation()
            }, 500)
        }
    }, [readyToScroll, windowWidth, startAnimation])

    useEffect(() => {
        if (
            firstLogoContainerReference.current &&
            secondLogoContainerReferenceClone.current &&
            thirdLogoContainerReferenceClone.current
        ) {
            if (windowWidth > minDeviceWidth) {
                innerContainerReference.current?.addEventListener('mouseenter', handleMouseEnter)
                innerContainerReference.current?.addEventListener('mousemove', handleMouseMove)
                innerContainerReference.current?.addEventListener('mouseleave', handleMouseLeaveInnerArea)
            }
        }
    }, [scrollAnimation, handleMouseEnter, handleMouseLeaveInnerArea, handleMouseMove, windowWidth])

    useEffect(() => {
        setTotalWidth(imagesWidth / 3 + 30 + extraSpace)
    }, [imagesWidth, extraSpace])

    return (
        <div id="customers" className={`container customer-logos-section ${className}`}>
            {showSection && (
                <h3 className="customer-logos-section__header text-center font-weight-normal">
                    Our customers use Sourcegraph every day to build software you rely on.
                </h3>
            )}
            {!showButton && (
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center mt-2">
                        <Link href="/demo" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                className="btn btn-outline-primary"
                                data-button-style={buttonStyle.arrowBoxOutlined}
                                data-button-location={buttonLocation.bodyDemo}
                                data-button-type="cta"
                            >
                                Schedule a demo <ArrowRightBoxIcon className="icon-inline ml-1" />
                            </a>
                        </Link>
                    </div>
                </div>
            )}
            <div className="customer-container-outer" ref={innerContainerReference}>
                {windowWidth > minDeviceWidth && showButton && (
                    <Link href="/case-studies" passHref={true}>
                        <animated.div
                            className={'sourcegraph-cta-button ' + buttonClass}
                            style={{
                                left: x,
                                top: y,
                                transform: scale.to(value => `scale(${value}) translate(-50%, -50%)`),
                            }}
                        >
                            Learn how customers <br /> use Sourcegraph
                        </animated.div>
                    </Link>
                )}
                <div
                    style={{ width: totalWidth }} // eslint-disable-line react/forbid-dom-props
                    id="logo-container-reference"
                    ref={firstLogoContainerReference}
                    className="text-center mt-4 d-flex flex-wrap justify-content-between align-items-center line-height-normal customer-container-inner hidden"
                >
                    {ITEMS.map(logo => (
                        <div key={logo.name}>
                            <div
                                className={`${logo.name.replace(' ', '-').toLowerCase()} customer-logos-section__item`}
                            >
                                {logo.link ? (
                                    <a href={logo.link.url} target={logo.link.target} rel={logo.link.rel}>
                                        <img
                                            className={
                                                'customer-logos-section__item-logo d-block mx-auto ' +
                                                (showButton && windowWidth > minDeviceWidth
                                                    ? 'customer-logos-section__item-logo-animation'
                                                    : 'link-hover')
                                            }
                                            src={logo.url}
                                            alt={logo.name}
                                        />
                                    </a>
                                ) : (
                                    <img
                                        className={
                                            'customer-logos-section__item-logo d-block mx-auto ' +
                                            (showButton && windowWidth > minDeviceWidth
                                                ? 'customer-logos-section__item-logo-animation'
                                                : '')
                                        }
                                        src={logo.url}
                                        alt={logo.name}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {windowWidth < minDeviceWidth && showButton && !noCta && (
                <div className="sourcegraph-cta-bottom-container">
                    <Link href="/case-studies" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="sourcegraph-cta-link-bottom">
                            <div className="sourcegraph-cta-button-bottom">
                                Learn how customers <br /> use Sourcegraph
                            </div>
                        </a>
                    </Link>
                </div>
            )}
        </div>
    )
}

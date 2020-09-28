import React, {useRef, useState, useEffect} from 'react';
import { useSpring, animated } from 'react-spring';
import * as easings from 'd3-ease';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';

const ITEMS: {
    name: string
    url: string
    link?: {
        url: string
        target?: string
        rel?: string
    },
    overrideCss?: string // If you want to choose the css for a specific logo instead of random
}[] = [
    {
        name: 'Cloudflare',
        url: '/external-logos/cloudflare-color-logo.svg',
    },
    {
        name: 'Nutanix',
        url: '/external-logos/nutanix-logo.svg',
    },
    {
        name: 'Uber',
        url: '/external-logos/uber.svg',
    },
    {
        name: 'Lyft',
        url: '/external-logos/lyft-logo.svg',
        link: {
            url: '/case-studies/lyft-monolith-to-microservices',
        },
    },
    {
        name: 'Amazon',
        url: '/external-logos/amazon-logo.svg',
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
        link: {
            url: '/case-studies/sofi-moves-fast-on-hundreds-of-microservices',
        },
    },
    {
        name: 'Yelp',
        url: '/external-logos/yelp.svg',
        link: {
            url: 'https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html',
            target: '_blank',
            rel: 'nofollow',
        },
    },
    {
        name: 'Adidas Running',
        url: '/external-logos/adidas-runtastic-sq-logo.svg',
    },
    {
        name: 'Indeed',
        url: '/external-logos/indeed-logo.svg',
    },
    {
        name: 'Prezi',
        url: '/external-logos/prezi-logo.svg',
    },
    {
        name: 'F5',
        url: '/external-logos/f5-logo.svg',
    },
    {
        name: 'Quantcast',
        url: '/external-logos/quantcast-logo.svg',
        link: {
            url: '/case-studies/quantcast-large-scale-refactoring',
        },
        overrideCss: 'ml-1 mr-4 mt-4 mb-2'
    },
    {
        name: 'Criteo',
        url: '/external-logos/criteo-logo.svg',
    },
    {
        name: 'Paypal',
        url: '/external-logos/paypal-logo.svg',
    },
    {
        name: 'Convoy',
        url: '/external-logos/convoy-logo.svg',
        link: {
            url: '/case-studies/convoy-improved-on-boarding',
        },
    },
    {
        name: 'Outreach',
        url: '/external-logos/outreach-logo.svg',
    },
    {
        name: 'Plaid',
        url: '/external-logos/plaid-logo.svg',
    },
    {
        name: 'Expanse',
        url: '/external-logos/expanse-logo.svg',
    },
    {
        name: 'Collective Health',
        url: '/external-logos/collective-health-logo.svg',
    },
    {
        name: 'Button',
        url: '/external-logos/use-button-logo.svg',
    },
    {
        name: 'Apex Clearing',
        url: '/external-logos/apex-clearing-logo.png',
    },
    {
        name: 'AppLovin',
        url: '/external-logos/applovin-logo.svg',
    },
    {
        name: 'Thorn',
        url: '/external-logos/thorn-logo.svg',
        link: {
            url: '/case-studies/we-are-thorn',
        },
    },
    {
        name: 'Thought Machine',
        url: '/external-logos/thought-machine-logo.svg',
    },
    {
        name: 'GetYourGuide',
        url: '/external-logos/gyg.svg',
    },
    //
    {
        name: 'Thought Machine',
        url: '/external-logos/thought-machine-logo.svg',
    },
    {
        name: 'Button',
        url: '/external-logos/use-button-logo.svg',
    },
    {
        name: 'Button',
        url: '/external-logos/use-button-logo.svg',
    },
]

interface Props {
    scrollTimeInSeconds: number,
    showButton: boolean,
    className: String
}

export const CustomerLogosSectionAnimated: React.FC<Props> = ({scrollTimeInSeconds, showButton, className}) => {

    // const [scrollTo, setScrollTo] = useState(0);
    // const [toggle, setToggle] = useState(true);
    const [buttonClass, setButtonClass] = useState('');
    const [windowWidth, setWindowWidth] = useState(0);
    // const [duration, setDuration] = useState(scrollTimeInSeconds * 1000);
    const [imagesWidth, setImagesWidth] = useState(0);
    const [scrollAnimation, setScrollAnimation] = useState(false);

    const innerContainerRef = useRef<HTMLDivElement>(null);
    const [number, setNumber] = useState(null);
    const durationInMilliSeconds = number ? (number! * 1000) : scrollTimeInSeconds * 1000;
    const minDeviceWidth = 991;
    // const scrollProps = useSpring({
    //     scroll: scrollTo,
    //     from: { scroll: 0 },
    //     config: {
    //         duration: duration,
    //         easing: easings.easeSinInOut
    //     }
    // });
    // const [{moveX}, setMoveX] = useSpring(() => ({moveX: 0}));
    const [{x, y, scale}, set] = useSpring(() => ({x: 0, y: 0, scale: 0 }));
    // const [{chevronRightScale}, setChevronRightScale] = useSpring(() => ({chevronRightScale: 1}));
    // const [{chevronLeftScale}, setChevronLeftScale] = useSpring(() => ({chevronLeftScale: 0}));

    let extraSpace = 0;
    if (ITEMS.length % 3 !== 0) {
        extraSpace = 135;
    };

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', adjustWindowWidth);
        return () => {
            window.removeEventListener('resize', adjustWindowWidth);
        };
    }, []);

    useEffect(() => {
        let promises = ITEMS.map((image) => {
            return new Promise((resolve, reject) => {
                const imageRef = new Image();
                imageRef.onload = function() {
                    // this.height and this.width
                    let calculatedWidth = (this.width / this.height) * 50;
                    if (calculatedWidth > 135) calculatedWidth = 135;
                    setImagesWidth(prevState => prevState += (calculatedWidth + 60)); //Total width of all images
                    resolve();
                };
                imageRef.src = image.url;
            })
        });
        Promise.all(promises).then(() => {
            const logoElement = document.getElementById('logo-container-reference')!;
            const newLogoElement = logoElement.cloneNode(true);
            newLogoElement.id = 'new-logo-element';
            logoElement?.parentNode?.insertBefore(newLogoElement, logoElement.nextSibling);
            setScrollAnimation(true);
        });
    },[]);

    useEffect(() => {
        if (scrollAnimation) {

            console.log(scrollAnimation)
            
            let logoElement = document.getElementById('logo-container-reference')!;
            let newLogoElement = document.getElementById('new-logo-element')!;
            let totalWidth = (imagesWidth / 3) + 30 + extraSpace;

            logoElement.addEventListener('transitionend', transitionEnd);

            function transitionStart() {
                logoElement.style.transition = '15s linear';
                newLogoElement.style.transition = '15s linear';
                logoElement.style.transform = `translateX(${-totalWidth}px)`;
                newLogoElement.style.transform = `translateX(${-totalWidth}px)`;
            };

            function transitionEnd(e) {               
                if (e.target.id !== 'logo-container-reference') return;
                logoElement.style.transition = 'none';
                newLogoElement.style.transition = 'none';
                logoElement.style.transform = `translateX(0px)`;
                newLogoElement.style.transform = `translateX(0px)`;
                setTimeout(() => {
                    transitionStart()
                },0);
            };

            setTimeout(() => {
                transitionStart()
            }, 500);
        };
    }, [scrollAnimation])

    function adjustWindowWidth() {
        setWindowWidth(window.innerWidth);
    };

    function changeChevronIcons() {
        const scrollEnd = innerContainerRef.current?.scrollWidth! - innerContainerRef.current?.offsetWidth!;
        if (innerContainerRef.current?.scrollLeft! < scrollEnd) {
            setChevronRightScale({chevronRightScale: 1});
        } else {
            setChevronRightScale({chevronRightScale: 0});
        };
        if (innerContainerRef.current?.scrollLeft! > 0) {
            setChevronLeftScale({chevronLeftScale: 1});
        } else {
            setChevronLeftScale({chevronLeftScale: 0});
        };
    }

    function handleMouseEnterRight() {
        //This is calculating how fast it should scroll based on the position the scroll is starting from
        const scrollEnd = innerContainerRef.current?.scrollWidth! - innerContainerRef.current?.offsetWidth!;
        const currentPostion = innerContainerRef.current?.scrollLeft!;
        const scrollSpeed = durationInMilliSeconds / scrollEnd;
        console.log(scrollEnd)
        setDuration(durationInMilliSeconds - (currentPostion * scrollSpeed));
        setScrollTo(scrollEnd);
    };

    function handleMouseLeaveRight() {
        setScrollTo(innerContainerRef.current?.scrollLeft!);
        changeChevronIcons();
    };

    function handleMouseEnterLeft() {
        const scrollEnd = innerContainerRef.current?.scrollWidth! - innerContainerRef.current?.offsetWidth!;
        const currentPostion = innerContainerRef.current?.scrollLeft!;
        const scrollSpeed = durationInMilliSeconds / scrollEnd;
        setDuration((currentPostion * scrollSpeed));
        setScrollTo(0);
    };

    function handleMouseLeaveLeft() {
        setScrollTo(innerContainerRef.current?.scrollLeft!);
        changeChevronIcons();
    };

    function handleMouseMove(e) {
        const containerRec = innerContainerRef.current?.getBoundingClientRect();
        if (
            e.clientX - containerRec?.left! > 150 && 
            e.clientY - containerRec?.top! > 60 && 
            (containerRec?.left! + innerContainerRef.current?.offsetWidth!) - e.clientX > 150 &&
            (containerRec?.top! + innerContainerRef.current?.offsetHeight!) - e.clientY > 60
            )
        {
            setButtonClass('');
            set({scale: 1});
        } else {
            setButtonClass('sourcegraph-cta-button-edge');
            set({scale: 0.1});
        };
        set({
            x: (e.clientX - containerRec?.left!) + innerContainerRef.current?.scrollLeft!, 
            y: e.clientY - containerRec?.top!
        });
        // changeChevronIcons();
    };

    function handleMouseLeaveInnerArea() {
        set({scale: 0});
    };

    // function changeToggle() {
    //     setToggle(prevState => !prevState);
    // }

    // function changeNumber(e) {
    //     // console.log(parseInt(e.target.value), e.target.value)
    //     setNumber(parseFloat(e.target.value))
    // }

    let logoArray;
    if (windowWidth < minDeviceWidth) {
        logoArray = [...ITEMS].splice(0, 20);
    } else {
        logoArray = ITEMS;
    };


    // const elementsRef = useRef(data.map(() => createRef()));

    // useEffect(() => {
    //     const nextHeights = elementsRef.current.map(
    //       ref => ref.current.getBoundingClientRect().height
    //     );
    //     setHeights(nextHeights);
    //   }, []);

    // console.log(imagesWidth)
    // console.log('Divided', imagesWidth / 3)
    // console.log(imagesHeight)


    return (
        <div id="customers" className={`container customer-logos-section ${className}`}>
            <h3 className="customer-logos-section__header text-center font-weight-light text-muted">
                Our customers use Sourcegraph every day to build software you rely on.
            </h3>
            {/* {(windowWidth > minDeviceWidth) &&
                <div className={'testcontainer'}>
                    <div>Toggle layout: {toggle ? 'random layout' : 'normal layout'}</div>
                    <input
                        type="checkbox"
                        onChange={changeToggle}
                        checked={toggle}
                    />
                    <div>Scroll Speed in Seconds</div>
                    <input
                        type="number"
                        onChange={changeNumber}
                    />
                </div>
            } */}
            <div
                className="customer-container-outer"
                ref={innerContainerRef} 
                onMouseMove={windowWidth > minDeviceWidth ? handleMouseMove : undefined}
                onMouseLeave={windowWidth > minDeviceWidth ? handleMouseLeaveInnerArea : undefined}
            >
            {(windowWidth > minDeviceWidth) && showButton &&
                <a href="/customers">
                    <animated.div className={"sourcegraph-cta-button " + buttonClass} style={{ left: x, top: y, transform: scale.interpolate(s => `scale(${s}) translate(-50%, -50%)`) }}>
                        Learn how customers <br/> use Sourcegraph
                    </animated.div>
                </a>
            }
            <div
                id="logo-container-reference"
                style={{width: (imagesWidth / 3) + 30 + extraSpace}}
                className="text-center mt-4 d-flex flex-wrap justify-content-between align-items-center line-height-normal customer-container-inner">
                {logoArray.map((logo, i) => {
                    // let margin = '';
                    // let index = i + 1;
                    // if (index % 5 === 0) {
                    //     margin = 'ml-2 mr-3 mt-3 mb-4';
                    // } else if (index % 4 === 0) {
                    //     margin = 'ml-3 mr-1 mt-5 mb-3';
                    // } else if (index % 3 === 0) {
                    //     margin = 'ml-4 mr-2 mt-2 mb-1';
                    // } else if (index % 2 === 0) {
                    //     margin = 'ml-3 mr-1 mt-4 mb-2';
                    // } else {
                    //     margin = 'ml-1 mr-5 mt-1 mb-4';
                    // };
                    // orginal marging mx-4 my-2
                    return (
                        <div
                            key={i}
                            className={`${logo.name.replace(' ', '-').toLowerCase()} customer-logos-section__item`}
                        >
                            {logo.link ? (
                                <a href={logo.link.url} target={logo.link.target} rel={logo.link.rel}>
                                    <img
                                        className={"customer-logos-section__item-logo d-block mx-auto " + (showButton && (windowWidth > minDeviceWidth) ? 'customer-logos-section__item-logo-animation' : 'link-hover')}
                                        src={logo.url}
                                        alt={logo.name}
                                    />
                                </a>
                            ) : (
                                <img
                                    className={"customer-logos-section__item-logo d-block mx-auto " + (showButton && (windowWidth > minDeviceWidth) ? 'customer-logos-section__item-logo-animation' : '')}
                                    src={logo.url}
                                    alt={logo.name}
                                />
                            )}
                        </div>
                    )
                })}
            </div>
            </div>
            {(windowWidth < minDeviceWidth) && showButton &&
                <div className={"sourcegraph-cta-bottom-container"}>
                    <a href="/customers" className={"sourcegraph-cta-link-bottom"}>
                        <div className={"sourcegraph-cta-button-bottom"}>Learn how customers <br/> use Sourcegraph</div>
                    </a>
                </div>
            }
        </div>
    );
}


// {windowWidth > minDeviceWidth &&
//     <div
//         className="hoverAreaLeft"
//         onMouseEnter={handleMouseEnterLeft}
//         onMouseLeave={handleMouseLeaveLeft}
//         >
//         <animated.div className={'icon-left-container-centered'} style={{ transform: chevronLeftScale.interpolate(s => `scale(${s})` )}}> 
//             <ChevronLeftIcon className={'icon-left'}/>
//         </animated.div>
//     </div>
// }

// {(windowWidth > minDeviceWidth) &&
//     <div                         
//         className="hoverAreaRight"
//         onMouseEnter={handleMouseEnterRight}
//         onMouseLeave={handleMouseLeaveRight}
//         >
//         <animated.div className={'icon-right-container-centered'} style={{ transform: chevronRightScale.interpolate(s => `scale(${s})` )}}> 
//             <ChevronRightIcon className={'icon-right'}/>
//         </animated.div>
//     </div>
// }
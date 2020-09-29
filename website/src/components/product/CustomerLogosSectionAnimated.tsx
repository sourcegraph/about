import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

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
        // link: {
        //     url: '/case-studies/lyft-monolith-to-microservices',
        // },
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
        // link: {
        //     url: '/case-studies/sofi-moves-fast-on-hundreds-of-microservices',
        // },
    },
    {
        name: 'Yelp',
        url: '/external-logos/yelp.svg',
        // link: {
        //     url: 'https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html',
        //     target: '_blank',
        //     rel: 'nofollow',
        // },
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
        // link: {
        //     url: '/case-studies/quantcast-large-scale-refactoring',
        // }
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
        // link: {
        //     url: '/case-studies/convoy-improved-on-boarding',
        // },
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
        // link: {
        //     url: '/case-studies/we-are-thorn',
        // },
    },
    {
        name: 'Thought Machine',
        url: '/external-logos/thought-machine-logo.svg',
    },
    {
        name: 'GetYourGuide',
        url: '/external-logos/gyg.svg',
    },
]

interface Props {
    showButton: boolean,
    className: String
}

export const CustomerLogosSectionAnimated: React.FC<Props> = ({showButton, className}) => {

    const [buttonClass, setButtonClass] = useState('');
    const [windowWidth, setWindowWidth] = useState(0);
    const [imagesWidth, setImagesWidth] = useState(0);
    const [scrollAnimation, setScrollAnimation] = useState(false);
    const [newxPosition, _setNewXposition] = useState(0);

    const innerContainerRef = useRef<HTMLDivElement>(null);
    const firstLogoContainerRef = useRef(null);
    const secondLogoContainerRefClone = useRef(null);
    const thirdLogoContainerRefClone = useRef(null);
    const mysetNewXpositionRef = useRef(newxPosition);
    const [{x, y, scale}, set] = useSpring(() => ({x: 0, y: 0, scale: 0 }));
    const setNewXposition = data => {
        mysetNewXpositionRef.current = data;
        _setNewXposition(data);
    };
    const minDeviceWidth = 991;
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
            return new Promise((resolve, _) => {
                const imageRef = new Image();
                imageRef.onload = function() {
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
            const secondLogoContainerClone = logoElement.cloneNode(true);
            const thirdLogoContainerClone = logoElement.cloneNode(true);
            secondLogoContainerClone.id = 'new-logo-element';
            thirdLogoContainerClone.id = 'new-logo-element2';
            logoElement?.parentNode?.insertBefore(secondLogoContainerClone, logoElement.nextSibling);
            logoElement?.parentNode?.insertBefore(thirdLogoContainerClone, logoElement.nextSibling);
            secondLogoContainerRefClone.current = secondLogoContainerClone;
            thirdLogoContainerRefClone.current = thirdLogoContainerClone;
            setScrollAnimation(true);
        });
    },[]);

    useEffect(() => {
        if (scrollAnimation) {
            let logoElement = document.getElementById('logo-container-reference')!;
            logoElement.addEventListener('transitionend', transitionEnd);
            setTimeout(() => {
                transitionStart()
            }, 500);
        };
    }, [scrollAnimation]);
    
    useEffect(() => {
        if (firstLogoContainerRef.current && secondLogoContainerRefClone.current && thirdLogoContainerRefClone.current) {
            if (windowWidth > minDeviceWidth) {
                innerContainerRef.current!.addEventListener('mouseenter', handleMouseEnter);
                innerContainerRef.current!.addEventListener('mousemove', handleMouseMove);
                innerContainerRef.current!.addEventListener('mouseleave', handleMouseLeaveInnerArea);
            };
        };
    }, [firstLogoContainerRef.current, secondLogoContainerRefClone.current, thirdLogoContainerRefClone.current])

    function adjustWindowWidth() {
        setWindowWidth(window.innerWidth);
    };

    function transitionStart() {
        const logoContainerOne = firstLogoContainerRef.current!;
        const logoContainerTwo = secondLogoContainerRefClone.current!;
        const logoContainerThree = thirdLogoContainerRefClone.current!;
        let totalWidth = (imagesWidth / 3) + 30 + extraSpace;
        logoContainerOne.style.transition = '15s linear';
        logoContainerTwo.style.transition = '15s linear';
        logoContainerThree.style.transition = '15s linear';
        logoContainerOne.style.transform = `translateX(${-totalWidth + mysetNewXpositionRef.current}px)`;
        logoContainerTwo.style.transform = `translateX(${-totalWidth + mysetNewXpositionRef.current}px)`;
        logoContainerThree.style.transform = `translateX(${-totalWidth + mysetNewXpositionRef.current}px)`;
    };

    function transitionEnd(e) { 
        if (e.target.id !== 'logo-container-reference') return;
        const logoContainerOne = firstLogoContainerRef.current!;
        const logoContainerTwo = secondLogoContainerRefClone.current!;
        const logoContainerThree = thirdLogoContainerRefClone.current!;
        logoContainerOne.style.transition = 'none';
        logoContainerTwo.style.transition = 'none';
        logoContainerThree.style.transition = 'none';
        logoContainerOne.style.transform = `translateX(${mysetNewXpositionRef.current}px)`;
        logoContainerTwo.style.transform = `translateX(${mysetNewXpositionRef.current}px)`;
        logoContainerThree.style.transform = `translateX(${mysetNewXpositionRef.current}px)`;
        setTimeout(() => {
            transitionStart()
        },0);
    };

    function pauseAnimation() {
        const logoContainerOne = firstLogoContainerRef.current!;
        const logoContainerTwo = secondLogoContainerRefClone.current!;
        const logoContainerThree = thirdLogoContainerRefClone.current!;
        let transformOne = window.getComputedStyle(logoContainerOne).transform;
        let transformTwo = window.getComputedStyle(logoContainerTwo).transform;
        let transformThree = window.getComputedStyle(logoContainerThree).transform;

        logoContainerOne.style.transform = transformOne;
        logoContainerTwo.style.transform = transformTwo;
        logoContainerThree.style.transform = transformThree;

        logoContainerOne.style.transition = 'none';
        logoContainerTwo.style.transition = 'none';
        logoContainerThree.style.transition = 'none';
    };

    function continueAnimationFromCurrentPosition() {
        const logoContainerOne = firstLogoContainerRef.current!;
        const logoContainerTwo = secondLogoContainerRefClone.current!;
        const logoContainerThree = thirdLogoContainerRefClone.current!;
        let transformOne = window.getComputedStyle(logoContainerOne).transform;
        let matrixValueXOne = transformOne.match(/matrix.*\((.+)\)/)[1].split(', ')[4];
        let totalWidth = (imagesWidth / 3) + 30 + extraSpace;
        let xPosition = parseInt(matrixValueXOne);
        let newPosition = -totalWidth + xPosition;

        logoContainerOne.style.transition = '15s linear';
        logoContainerTwo.style.transition = '15s linear';
        logoContainerThree.style.transition = '15s linear';

        logoContainerOne.style.transform = `translateX(${newPosition}px)`;
        logoContainerTwo.style.transform = `translateX(${newPosition}px)`;
        logoContainerThree.style.transform = `translateX(${newPosition}px)`;

        setNewXposition(xPosition);
    };

    function buttonFollowsMouse(e) {
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
    };

    function handleMouseEnter() {
        if (!showButton) pauseAnimation();
    };

    function handleMouseMove(e) {
        if (showButton) buttonFollowsMouse(e);
    };

    function handleMouseLeaveInnerArea() {
        if (showButton) {
            set({scale: 0});
        } else {
            continueAnimationFromCurrentPosition();
        };
    };

    return (
        <div id="customers" className={`container customer-logos-section ${className}`}>
            <h3 className="customer-logos-section__header text-center font-weight-light text-muted">
                Our customers use Sourcegraph every day to build software you rely on.
            </h3>
            <div
                className="customer-container-outer"
                ref={innerContainerRef}
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
                ref={firstLogoContainerRef}
                style={{width: (imagesWidth / 3) + 30 + extraSpace}}
                className="text-center mt-4 d-flex flex-wrap justify-content-between align-items-center line-height-normal customer-container-inner">
                {ITEMS.map((logo, i) => {
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
};
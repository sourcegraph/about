import { useEffect } from 'react'

import classNames from 'classnames'
import Cookies from 'js-cookie'
import GithubIcon from 'mdi-react/GithubIcon'
import Link from 'next/link'

import { EventName, getEventLogger } from '../../hooks/eventLogger'
import { getAuthButtonsTracker } from '../../lib/utils'

export interface AuthProvider {
    serviceType: 'github' | 'gitlab' | 'google'
}

interface ExternalsAuthProps {
    label: string
    source: string
    authProvider: AuthProvider['serviceType']
    dark?: boolean
    className?: string
}

const GitlabColorIcon: React.FunctionComponent<React.PropsWithChildren<{ className?: string }>> = ({ className }) => (
    <svg
        className={className}
        width="24"
        height="24"
        viewBox="-2 -2 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M9.99944 19.2025L13.684 7.86902H6.32031L9.99944 19.2025Z" fill="#E24329" />
        <path
            d="M1.1594 7.8689L0.037381 11.3121C-0.0641521 11.6248 0.0454967 11.9699 0.313487 12.1648L9.99935 19.2023L1.1594 7.8689Z"
            fill="#FCA326"
        />
        <path
            d="M1.15918 7.86873H6.31995L4.0989 1.04315C3.98522 0.693949 3.48982 0.693949 3.37206 1.04315L1.15918 7.86873Z"
            fill="#E24329"
        />
        <path
            d="M18.8444 7.8689L19.9624 11.3121C20.0639 11.6248 19.9542 11.9699 19.6862 12.1648L9.99902 19.2023L18.8444 7.8689Z"
            fill="#FCA326"
        />
        <path
            d="M18.8449 7.86873H13.6841L15.901 1.04315C16.0147 0.693949 16.5101 0.693949 16.6279 1.04315L18.8449 7.86873Z"
            fill="#E24329"
        />
        <path d="M9.99902 19.2023L13.6835 7.8689H18.8444L9.99902 19.2023Z" fill="#FC6D26" />
        <path d="M9.99907 19.2023L1.15918 7.8689H6.31995L9.99907 19.2023Z" fill="#FC6D26" />
    </svg>
)

const GoogleColorIcon: React.FunctionComponent<React.PropsWithChildren<{ className?: string }>> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="24"
        height="24"
        viewBox="0 0 46 46"
        className={className}
    >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g transform="translate(-1 -1)">
                <g filter="url(#filter-1)" transform="translate(4 4)">
                    <g>
                        <use fill="#FFF" xlinkHref="#path-2" />
                        <use xlinkHref="#path-2" />
                        <use xlinkHref="#path-2" />
                        <use xlinkHref="#path-2" />
                    </g>
                </g>
                <g transform="translate(15 15)">
                    <path
                        fill="#4285F4"
                        d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                    />
                    <path
                        fill="#34A853"
                        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
                    />
                    <path
                        fill="#FBBC05"
                        d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                    />
                    <path
                        fill="#EA4335"
                        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
                    />
                    <path d="M0 0h18v18H0V0z" />
                </g>
            </g>
        </g>
    </svg>
)

export const ExternalsAuth: React.FunctionComponent<ExternalsAuthProps> = ({
    label,
    authProvider = 'github',
    source,
    dark,
    className,
}) => {
    useEffect(() => {
        const { buttonId, conversionId } = getAuthButtonsTracker(authProvider)
        const script = document.createElement('script')
        script.async = true
        script.innerHTML = `
            document.getElementById("${buttonId}").addEventListener("click", function() {
                !function(s,a,e,v,n,t,z) {
                    if(s.saq) return;
                    n=s.saq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!s._saq)s._saq=n;
                    n.push=n;
                    n.loaded=!0;
                    n.version='1.0';
                    n.queue=[];
                    t=a.createElement(e);
                    t.async=!0;
                    t.src=v;
                    z=a.getElementsByTagName(e)[0];
                    z.parentNode.insertBefore(t,z)
                }(window,document,'script','https://tags.srv.stackadapt.com/events.js');
                saq('conv', '${conversionId}');
            });
        `
        document.head.append(script)

        return () => {
            script.remove()
        }
    }, [authProvider])

    const handleOnClick = (): void => {
        const eventArguments = {
            type: authProvider,
            source,
            description: '',
        }
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getEventLogger().log(EventName.SIGNUP_INITIATED, eventArguments, eventArguments)
        Cookies.set('cody.survey.show', JSON.stringify(true), {
            expires: 365,
            domain: 'sourcegraph.com',
        })
    }

    switch (authProvider) {
        case 'github':
            return (
                <Link
                    href="https://sourcegraph.com/.auth/github/login?pc=https%3A%2F%2Fgithub.com%2F%3A%3Ae917b2b7fa9040e1edd4&redirect=/get-cody"
                    className={classNames(
                        'btn hover:sg-bg-hover-external-auth-button flex items-center px-4 hover:text-black md:h-12 md:px-6 md:text-lg',
                        dark ? 'hover:btn-primary bg-black text-white ' : 'btn-inverted-primary text-black',
                        className
                    )}
                    onClick={handleOnClick}
                    id="githubButton"
                >
                    <GithubIcon className="h-8 w-8 pr-2" />
                    {label}
                </Link>
            )
        case 'gitlab':
            return (
                <Link
                    href="https://sourcegraph.com/.auth/gitlab/login?pc=https%3A%2F%2Fgitlab.com%2F%3A%3Ab45ecb474e92c069567822400cf73db6e39917635bf682f062c57aca68a1e41c&redirect=/get-cody"
                    className={classNames(
                        'btn hover:sg-bg-hover-external-auth-button flex items-center px-4 hover:text-black md:h-12 md:px-6 md:text-lg',
                        dark ? 'sg-gitlab-bg-color hover:btn-primary text-white ' : 'btn-inverted-primary text-black',
                        className
                    )}
                    onClick={handleOnClick}
                    id="gitlabButton"
                >
                    <GitlabColorIcon className="h-8 w-8 pr-2" />
                    {label}
                </Link>
            )
        case 'google':
            return (
                <Link
                    href="https://sourcegraph.com/.auth/openidconnect/login?pc=google"
                    className={classNames(
                        'btn hover:sg-bg-hover-external-auth-button flex items-center pl-3 pr-3 hover:text-black md:h-12 md:text-lg',
                        dark ? 'hover:btn-primary text-white ' : 'btn-inverted-primary text-black',
                        className
                    )}
                    onClick={handleOnClick}
                    id="googleButton"
                >
                    <GoogleColorIcon className="h-10 w-10" />
                    <span className="pr-2">{label}</span>
                </Link>
            )
        default:
            return null
    }
}

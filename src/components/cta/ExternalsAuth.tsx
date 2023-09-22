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
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
        <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        />
        <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        />
        <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
        />
        <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        />
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
                    <GithubIcon className='mr-2' />
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
                    <GitlabColorIcon className='mr-2' />
                    {label}
                </Link>
            )
        case 'google':
            return (
                <Link
                    href="https://sourcegraph.com/.auth/openidconnect/login?pc=google&redirect=/get-cody"
                    className={classNames(
                        'btn hover:sg-bg-hover-external-auth-button flex items-center px-4 hover:text-black md:h-12 md:px-6 md:text-lg',
                        dark ? 'sg-gitlab-bg-color hover:btn-primary text-white ' : 'btn-inverted-primary text-black',
                        className
                    )}
                    onClick={handleOnClick}
                    id="googleButton"
                >
                    <GoogleColorIcon className='w-6 h-6 mr-2' />
                    {label}
                </Link>
            )
        default:
            return null
    }
}

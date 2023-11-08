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
    <svg className={className} xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="90 110 200 160" fill='none'>
        <path
            d="M282.83,170.73l-.27-.69-26.14-68.22a6.81,6.81,0,0,0-2.69-3.24,7,7,0,0,0-8,.43,7,7,0,0,0-2.32,3.52l-17.65,54H154.29l-17.65-54A6.86,6.86,0,0,0,134.32,99a7,7,0,0,0-8-.43,6.87,6.87,0,0,0-2.69,3.24L97.44,170l-.26.69a48.54,48.54,0,0,0,16.1,56.1l.09.07.24.17,39.82,29.82,19.7,14.91,12,9.06a8.07,8.07,0,0,0,9.76,0l12-9.06,19.7-14.91,40.06-30,.1-.08A48.56,48.56,0,0,0,282.83,170.73Z"
            fill="#e24329"
        />
        <path
            d="M282.83,170.73l-.27-.69a88.3,88.3,0,0,0-35.15,15.8L190,229.25c19.55,14.79,36.57,27.64,36.57,27.64l40.06-30,.1-.08A48.56,48.56,0,0,0,282.83,170.73Z"
            fill="#fc6d26"
        />
        <path
            d="M153.43,256.89l19.7,14.91,12,9.06a8.07,8.07,0,0,0,9.76,0l12-9.06,19.7-14.91S209.55,244,190,229.25C170.45,244,153.43,256.89,153.43,256.89Z"
            fill="#fca326"
        />
        <path
            d="M132.58,185.84A88.19,88.19,0,0,0,97.44,170l-.26.69a48.54,48.54,0,0,0,16.1,56.1l.09.07.24.17,39.82,29.82s17-12.85,36.57-27.64Z"
            fill="#fc6d26"
        />
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

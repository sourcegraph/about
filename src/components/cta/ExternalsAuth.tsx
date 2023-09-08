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

    return authProvider === 'github' ? (
        <Link
            href="https://sourcegraph.com/.auth/github/login?pc=https%3A%2F%2Fgithub.com%2F%3A%3Ae917b2b7fa9040e1edd4&redirect=/get-cody"
            className={classNames(
                `btn hover:sg-bg-hover-external-auth-button flex items-center px-4 hover:text-black md:h-12 md:px-6 md:text-lg
                 ${dark ? 'hover:btn-primary bg-black text-white ' : 'btn-inverted-primary text-black'}`,
                className
            )}
            onClick={handleOnClick}
            id="githubButton"
        >
            <GithubIcon className="pr-2" />
            {label}
        </Link>
    ) : (
        <Link
            href="https://sourcegraph.com/.auth/gitlab/login?pc=https%3A%2F%2Fgitlab.com%2F%3A%3A262309265ae76179773477bd50c93c7022007a4810c344c69a7371da11949c48&redirect=/get-cody"
            className={classNames(
                `btn hover:sg-bg-hover-external-auth-button flex items-center px-4 hover:text-black md:h-12 md:px-6 md:text-lg ${
                    dark ? 'sg-gitlab-bg-color hover:btn-primary text-white ' : 'btn-inverted-primary text-black'
                }`,
                className
            )}
            onClick={handleOnClick}
            id="gitlabButton"
        >
            <GitlabColorIcon className="pr-2" />
            {label}
        </Link>
    )
}

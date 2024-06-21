import { FunctionComponent, PropsWithChildren, ReactNode, useEffect } from 'react'

import classNames from 'classnames'
import Cookies from 'js-cookie'
import GithubIcon from 'mdi-react/GithubIcon'
import Link from 'next/link'

import { getProviderButtonsTracker, captureCustomEventWithPageData } from '../../lib/utils'
import { GITHUB, GITLAB, GOOGLE, VSCODE, JETBRAINS } from '../../pages/constants'
import { TelemetryProps } from '../../telemetry'

export type ProviderType = typeof GITHUB | typeof GITLAB | typeof GOOGLE | typeof VSCODE | typeof JETBRAINS

export const telemetryProviderTypes: { [key in ProviderType | string]: number } = {
    github: 1,
    gitlab: 2,
    google: 3,
    vscode: 4,
    jetbrains: 5,
    form: 6,
}

interface ExternalProviderProps extends TelemetryProps {
    label: string
    source: string
    providerType: ProviderType
    dark?: boolean
    className?: string
    plan?: 'pro' | 'free'
    disablePlanParam?: boolean
}

interface ExternalLinkProps {
    label: string
    dark?: boolean
    className?: string
    plan?: 'pro' | 'free'
    handleOnClick: () => void
    icon: ReactNode
    id: string
    link: string
    openInNewTab?: boolean
    disablePlanParam?: boolean
}

const PLAN_PRO = 'pro'

const GitlabColorIcon: FunctionComponent<PropsWithChildren<{ className?: string }>> = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="90 110 200 160"
        fill="none"
    >
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

const GoogleColorIcon: FunctionComponent<PropsWithChildren<{ className?: string }>> = ({ className }) => (
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

const JetBrainsColorIcon: FunctionComponent<PropsWithChildren<{ className?: string }>> = ({ className }) => (
    <svg
        className={className}
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M0.416992 0.852783H12.036V12.4718H0.416992V0.852783Z" fill="black" />
        <path d="M1.68164 10.2932H6.03878V11.0194H1.68164V10.2932Z" fill="white" />
        <path
            d="M1.49951 3.85438L1.82291 3.54841C1.85368 3.59698 1.89552 3.63757 1.945 3.66685C1.99448 3.69613 2.05019 3.71328 2.10758 3.71689C2.23151 3.71689 2.31285 3.63168 2.31285 3.46321V2.30518H2.81246V3.46708C2.81994 3.55804 2.80886 3.64957 2.7799 3.73612C2.75094 3.82267 2.7047 3.90243 2.64399 3.97057C2.5773 4.03259 2.49898 4.08078 2.41355 4.11235C2.32813 4.14393 2.2373 4.15827 2.14631 4.15454C2.02198 4.1627 1.8976 4.13949 1.78459 4.08704C1.67157 4.03459 1.57354 3.95459 1.49951 3.85438Z"
            fill="white"
        />
        <path
            d="M3.03125 2.30518H4.48944V2.72927H3.52119V3.00813H4.39068V3.39543H3.53474V3.68397H4.503V4.11194H3.03125V2.30518Z"
            fill="white"
        />
        <path d="M5.2058 2.74864H4.66357V2.30518H6.25345V2.74476H5.70929V4.11968H5.2058V2.74864Z" fill="white" />
        <path
            d="M1.70068 4.8381H2.55662C2.73596 4.82464 2.91338 4.88238 3.05043 4.99883C3.08881 5.0378 3.1189 5.08415 3.13887 5.13508C3.15884 5.186 3.16828 5.24044 3.16662 5.29512C3.1688 5.38338 3.143 5.47006 3.09291 5.54276C3.04282 5.61546 2.97101 5.67045 2.88776 5.69985C2.99079 5.71873 3.08369 5.77378 3.14972 5.85509C3.21576 5.93639 3.25059 6.0386 3.24795 6.14331C3.24795 6.45509 2.99427 6.64486 2.56049 6.64486H1.70068V4.8381ZM2.66894 5.39775C2.66894 5.29705 2.5876 5.24283 2.44043 5.24283H2.19062V5.56042H2.43075C2.58373 5.56042 2.67281 5.51007 2.67281 5.40356L2.66894 5.39775ZM2.49465 5.91286H2.19062V6.24788H2.50433C2.65925 6.24788 2.74446 6.18785 2.74446 6.08134C2.74446 5.98451 2.667 5.91286 2.49853 5.91286H2.49465Z"
            fill="white"
        />
        <path
            d="M3.41846 4.83815H4.21242C4.42394 4.82434 4.63245 4.89385 4.79338 5.0318C4.85034 5.08648 4.89526 5.15243 4.92527 5.22546C4.95528 5.29849 4.96972 5.37697 4.96766 5.4559C4.97115 5.57643 4.93705 5.69507 4.87008 5.79535C4.80311 5.89563 4.70659 5.97259 4.59392 6.01555L5.0277 6.64879H4.44674L4.08268 6.09882H3.9142V6.64879H3.41846V4.83815ZM4.19306 5.70958C4.36154 5.70958 4.46223 5.62631 4.46223 5.49463C4.46223 5.34939 4.35766 5.27774 4.19112 5.27774H3.91227V5.71539L4.19306 5.70958Z"
            fill="white"
        />
        <path
            d="M5.66284 4.82275H6.14696L6.92157 6.65082H6.38128L6.25154 6.32355H5.54858L5.41884 6.65082H4.89404L5.66284 4.82275ZM6.10242 5.93237L5.90877 5.4192L5.7035 5.93237H6.10242Z"
            fill="white"
        />
        <path d="M6.99316 4.83228H7.49666V6.64678H6.99316V4.83228Z" fill="white" />
        <path
            d="M7.69043 4.83228H8.15906L8.81167 5.80053V4.83228H9.30935V6.64678H8.8717L8.18811 5.65142V6.64678H7.69043V4.83228Z"
            fill="white"
        />
        <path
            d="M9.39453 6.37192L9.67532 6.03691C9.83849 6.17372 10.0434 6.2509 10.2563 6.25573C10.3938 6.25573 10.4654 6.20926 10.4654 6.12986C10.4654 6.0524 10.4054 6.01367 10.1575 5.95364C9.77021 5.86456 9.47393 5.75999 9.47393 5.38624C9.47393 5.04929 9.73923 4.80529 10.1749 4.80529C10.4449 4.7949 10.7098 4.88068 10.9224 5.04735L10.6784 5.40367C10.5315 5.29377 10.3544 5.23159 10.1711 5.22551C10.0491 5.22551 9.98904 5.27392 9.98904 5.3417C9.98904 5.42303 10.051 5.45983 10.3047 5.51792C10.7191 5.607 10.9708 5.74256 10.9708 6.08145C10.9708 6.45132 10.6784 6.6624 10.2369 6.6624C9.93031 6.67011 9.63122 6.56697 9.39453 6.37192Z"
            fill="white"
        />
    </svg>
)

const ExternalLink: FunctionComponent<ExternalLinkProps> = ({
    label,
    dark,
    id,
    handleOnClick,
    className,
    plan = 'free',
    icon,
    link,
    openInNewTab,
    disablePlanParam,
}) => (
    <Link
        href={plan === PLAN_PRO && !disablePlanParam ? `${link + '?pro=true'}` : `${link}`}
        className={classNames(
            'hover:sg-bg-hover-external-auth-button flex items-center justify-center px-4 py-2 font-normal hover:text-black md:h-12 md:px-6 md:text-base',
            dark
                ? 'hover:btn-primary bg-black text-white'
                : 'btn-inverted-primary rounded-[3px] border border-gray-400 text-black',
            className
        )}
        onClick={handleOnClick}
        id={id}
        {...(openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
        {icon}
        {label}
    </Link>
)

export const ExternalProvider: FunctionComponent<ExternalProviderProps> = ({
    label,
    providerType = GITHUB,
    source,
    dark,
    className,
    plan = 'free',
    disablePlanParam,
    telemetryRecorder,
}) => {
    useEffect(() => {
        const { buttonId, conversionId } = getProviderButtonsTracker(providerType)
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
    }, [providerType])

    const handleOnClick = (): void => {
        const eventArguments = {
            type: providerType,
            source,
            description: '',
        }
        if (providerType === VSCODE || providerType === JETBRAINS) {
            telemetryRecorder.recordEvent('codyExtension', 'initiateInstall', {
                metadata: { editorType: telemetryProviderTypes[providerType] },
                privateMetadata: eventArguments,
            })
        } else {
            captureCustomEventWithPageData(`${providerType}_auth_click`)
            telemetryRecorder.recordEvent('auth', 'initiate', {
                metadata: { authType: telemetryProviderTypes[providerType] },
                privateMetadata: eventArguments,
            })
            Cookies.set('cody.survey.show', JSON.stringify(true), {
                expires: 365,
                domain: 'sourcegraph.com',
            })
        }
    }

    switch (providerType) {
        case GITHUB:
            return (
                <ExternalLink
                    plan={plan}
                    label={label}
                    dark={dark}
                    className={className}
                    id="githubButton"
                    handleOnClick={handleOnClick}
                    icon={<GithubIcon className="mr-2" />}
                    link="https://sourcegraph.com/.auth/openidconnect/login?prompt_auth=github&pc=sams&&redirect=/get-cody"
                />
            )
        case GITLAB:
            return (
                <ExternalLink
                    plan={plan}
                    label={label}
                    dark={dark}
                    className={className}
                    id="gitlabButton"
                    handleOnClick={handleOnClick}
                    icon={<GitlabColorIcon className="mr-2" />}
                    link="https://sourcegraph.com/.auth/openidconnect/login?prompt_auth=gitlab&pc=sams&redirect=/get-cody"
                />
            )
        case GOOGLE:
            return (
                <ExternalLink
                    plan={plan}
                    label={label}
                    dark={dark}
                    className={className}
                    id="googleButton"
                    handleOnClick={handleOnClick}
                    icon={<GoogleColorIcon className="mr-2 h-6 w-6" />}
                    link="https://sourcegraph.com/.auth/openidconnect/login?prompt_auth=google&pc=sams&redirect=/get-cody"
                />
            )
        case VSCODE:
            return (
                <ExternalLink
                    plan={plan}
                    label={label}
                    dark={dark}
                    className={className}
                    id="vscodeButton"
                    handleOnClick={handleOnClick}
                    icon={
                        <img
                            src="/icons/vscode.svg"
                            height={14.67}
                            width={14.67}
                            alt="VScode Icon"
                            className="mr-2 h-[14.67px] w-[14.67px]"
                        />
                    }
                    link="https://marketplace.visualstudio.com/items?itemName=sourcegraph.cody-ai"
                    openInNewTab={true}
                    disablePlanParam={disablePlanParam}
                />
            )
        case JETBRAINS:
            return (
                <ExternalLink
                    plan={plan}
                    label={label}
                    dark={dark}
                    className={className}
                    id="jetbrainsButton"
                    handleOnClick={handleOnClick}
                    icon={<JetBrainsColorIcon className="mr-2 h-[11.62px] w-[11.62px]" />}
                    link="https://plugins.jetbrains.com/plugin/9682-cody-ai-coding-assistant-with-autocomplete--chat"
                    openInNewTab={true}
                />
            )
        default:
            return null
    }
}

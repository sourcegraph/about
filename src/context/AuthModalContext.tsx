import { FunctionComponent, ReactNode, createContext, useContext, useState, useMemo, useCallback } from 'react'

import { useRouter } from 'next/router'
import { useFeatureFlagVariantKey } from 'posthog-js/react'

import { AuthenticateModalContent, Modal, IdeModalContent } from '../components'
import { TelemetryProps } from '../telemetry'

interface AuthModalContextProps {
    isSignUpModalOpen: boolean
    openModal: (source: string, plan?: 'free' | 'pro', disablePlanParam?: boolean) => void
    closeModal: () => void
}

const AuthModalContext = createContext<AuthModalContextProps>({
    isSignUpModalOpen: false,
    openModal: () => {},
    closeModal: () => {},
})

export const useAuthModal = (): AuthModalContextProps => useContext(AuthModalContext)

export const AuthModalProvider: FunctionComponent<{ children: ReactNode } & TelemetryProps> = ({
    children,
    telemetryRecorder,
}) => {
    const router = useRouter()
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)
    const [isControlModalOpen, setIsControlModalOpen] = useState(false)

    const [source, setSource] = useState<string>('')
    const [disablePlanParam, setDisablePlanParam] = useState<boolean>(false)
    const [plan, setPlan] = useState<'pro' | 'free' | undefined>('free')

    const userFlag = useFeatureFlagVariantKey('install-first')

    const displayModal = useCallback((): void => {
        telemetryRecorder.recordEvent('abTest', 'enroll', {
            privateMetadata: {
                testName: 'AuthInstallModalTest',
                group: (userFlag as string) ?? 'undefined',
                modal: userFlag === 'test' ? 'installation' : 'signup',
            },
        })

        if (userFlag === 'test') {
            setIsControlModalOpen(true)
        } else {
            setIsSignUpModalOpen(true)
        }
    }, [userFlag, telemetryRecorder])

    const openModal = useCallback(
        (source: string, plan?: 'pro' | 'free', disablePlanParam?: boolean) => {
            setDisablePlanParam(disablePlanParam ?? false)
            setSource(source)
            if (router.pathname !== '/demo/cody') {
                displayModal()
            } else {
                setIsSignUpModalOpen(true)
            }
            telemetryRecorder.recordEvent('aboutGetCodyPopover', 'open', {
                privateMetadata: {
                    source,
                    description: '',
                },
            })
            setPlan(plan ?? 'free')
        },
        [displayModal, router.pathname, telemetryRecorder]
    )

    const closeModal = (): void => {
        setIsSignUpModalOpen(false)
        setIsControlModalOpen(false)
    }

    const authModalContextValue = useMemo(
        () => ({ isSignUpModalOpen, openModal, closeModal }),
        [isSignUpModalOpen, openModal]
    )

    return (
        <AuthModalContext.Provider value={authModalContextValue}>
            <>
                {children}

                {isSignUpModalOpen && (
                    <Modal open={isSignUpModalOpen} handleClose={closeModal}>
                        <AuthenticateModalContent source={source} plan={plan} telemetryRecorder={telemetryRecorder} />
                    </Modal>
                )}
                {isControlModalOpen && (
                    <Modal open={isControlModalOpen} handleClose={closeModal}>
                        <IdeModalContent
                            source={source}
                            plan={plan}
                            disablePlanParam={disablePlanParam}
                            telemetryRecorder={telemetryRecorder}
                        />
                    </Modal>
                )}
            </>
        </AuthModalContext.Provider>
    )
}

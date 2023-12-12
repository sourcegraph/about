import { FunctionComponent, ReactNode, createContext, useContext, useState } from 'react'

import { AuthenticateModalContent, Modal } from '../components'
import { logAuthPopoverEvent } from '../util'

interface AuthModalContextProps {
    isSignUpModalOpen: boolean
    openModal: (source: string, plan?: 'free' | 'pro') => void
    closeModal: () => void
}

const AuthModalContext = createContext<AuthModalContextProps>({
    isSignUpModalOpen: false,
    openModal: () => {},
    closeModal: () => {},
})

export const useAuthModal = (): AuthModalContextProps => useContext(AuthModalContext)

export const AuthModalProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false)
    const [source, setSource] = useState<string>('')
    const [plan, setPlan] = useState<'pro' | 'free' | undefined>('free')

    const openModal = (source: string, plan?: 'pro' | 'free'): void => {
        setSource(source)
        setIsSignUpModalOpen(true)
        logAuthPopoverEvent(source)
        setPlan(plan ?? 'free')
    }

    const closeModal = (): void => {
        setIsSignUpModalOpen(false)
    }

    return (
        <AuthModalContext.Provider value={{ isSignUpModalOpen, openModal, closeModal }}>
            <>
                {children}

                {isSignUpModalOpen && (
                    <Modal open={isSignUpModalOpen} handleClose={closeModal}>
                        <AuthenticateModalContent source={source} plan={plan} />
                    </Modal>
                )}
            </>
        </AuthModalContext.Provider>
    )
}

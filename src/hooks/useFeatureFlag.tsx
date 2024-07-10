import { useState, useEffect } from 'react'

import { useFeatureFlagVariantKey } from 'posthog-js/react'

type FeatureFlagValue = string | boolean | null | undefined

interface FeatureFlagHookResultProps {
    flagValue: FeatureFlagValue
    isFlagReady: boolean
    isBlocked: boolean
}

const DEFAULT_TIMEOUT = 100

export const useFeatureFlag = (name: string, timeout = DEFAULT_TIMEOUT): FeatureFlagHookResultProps => {
    const [flagValue, setFlagValue] = useState<FeatureFlagValue>(null)
    const [isFlagReady, setIsFlagReady] = useState(false)
    const [isBlocked, setIsBlocked] = useState(false)

    const posthogFlagValue = useFeatureFlagVariantKey(name)

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout> | undefined

        const handleTimeout = (): void => {
            if (posthogFlagValue === undefined) {
                setIsBlocked(true)
            }
        }

        if (posthogFlagValue !== undefined) {
            setFlagValue(posthogFlagValue)
            setIsFlagReady(true)
            setIsBlocked(false)
        } else {
            timeoutId = setTimeout(handleTimeout, timeout)
        }

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
        }
    }, [name, posthogFlagValue, timeout])

    return { flagValue, isFlagReady, isBlocked }
}

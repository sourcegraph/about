import { useState, useEffect } from 'react'

import posthog from 'posthog-js'
import { useFeatureFlagVariantKey } from 'posthog-js/react'

interface UseFeatureFlagReturnProp {
    flagValue: string | boolean | null
    isFlagReady: boolean
}

export const useFeatureFlag = (name: string): UseFeatureFlagReturnProp => {
    const [flagValue, setFlagValue] = useState<string | boolean | null>(null)
    const [isFlagReady, setIsFlagReady] = useState(false)

    const posthogFlagValue = useFeatureFlagVariantKey(name)

    useEffect(() => {
        if (posthogFlagValue) {
            posthog.onFeatureFlags(() => {
                setFlagValue(posthogFlagValue)
                setIsFlagReady(true)
            })
        }
    }, [posthogFlagValue])

    return { flagValue, isFlagReady }
}

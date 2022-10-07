import { useEffect } from 'react'

/**
 * This captures the initial landing page source of a user during a session so
 * that we can track this data and populate our HubSpot forms to understand
 * the user journey.
 */
export const useLandingSource = (): void => {
    useEffect(() => {
        const landingSource = sessionStorage.getItem('landingSource')

        if (!landingSource) {
            sessionStorage.setItem('landingSource', window.location.pathname)
        }
    }, [])
}

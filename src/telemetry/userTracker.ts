import { formatISO, startOfWeek } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'

import { type Cookies, defaultCookies, getUserCookieSettings, getSessionCookieSettings } from './cookies'

const ANONYMOUS_USER_ID_KEY = 'sourcegraphAnonymousUid'
const COHORT_ID_KEY = 'sourcegraphCohortId'
const DEVICE_ID_KEY = 'sourcegraphDeviceId'
const DEVICE_SESSION_ID_KEY = 'sourcegraphSessionId'

/**
 * Configures and loads cookie properties for user tracking purposes.
 *
 * All values are configured and initialized once on the constructor, as values
 * are unlikely to change.
 *
 * Prefer the global userTracker instance.
 */
export class UserTracker {
    /**
     * The anonymous identifier for this user (used to allow site admins
     * on a Sourcegraph instance to see a count of unique users on a daily,
     * weekly, and monthly basis).
     */
    public readonly anonymousUserID: string
    /**
     * The cohort ID is generated when the anonymous user ID is generated.
     * Users that have visited before the introduction of cohort IDs will not have one.
     */
    public readonly cohortID: string | undefined
    /**
     * Device ID is a require field for Amplitude events:  https://developers.amplitude.com/docs/http-api-v2
     */
    public readonly deviceID: string
    /**
     * Device session ID seems to be the same thing as anonymousUserID for the
     * most part.
     */
    public readonly deviceSessionID: string

    constructor(cookies: Cookies = defaultCookies()) {
        /**
         * Gets the anonymous user ID and cohort ID of the user from cookies.
         * If user doesn't have an anonymous user ID yet, a new one is generated, along with
         * a cohort ID of the week the user first visited.
         *
         * If the user already has an anonymous user ID before the introduction of cohort IDs,
         * the user will not haved a cohort ID.
         *
         * If user had an anonymous user ID in localStorage, it will be migrated to cookies.
         */
        let anonymousUserID = cookies.get(ANONYMOUS_USER_ID_KEY) || localStorage.getItem(ANONYMOUS_USER_ID_KEY)
        let cohortID = cookies.get(COHORT_ID_KEY)
        if (!anonymousUserID) {
            anonymousUserID = uuidv4()
            cohortID = getPreviousMonday(new Date())
        }

        // Use cookies instead of localStorage so that the ID can be shared with subdomains (sourcegraph.com).
        // Always set to renew expiry and migrate from localStorage
        cookies.set(ANONYMOUS_USER_ID_KEY, anonymousUserID, getUserCookieSettings())
        localStorage.removeItem(ANONYMOUS_USER_ID_KEY)

        if (cohortID) {
            cookies.set(COHORT_ID_KEY, cohortID, getUserCookieSettings())
        }

        let deviceID = cookies.get(DEVICE_ID_KEY)
        if (!deviceID || deviceID === '') {
            // If device ID does not exist, use the anonymous user ID value so these are consolidated.
            deviceID = anonymousUserID
        }
        cookies.set(DEVICE_ID_KEY, deviceID, getUserCookieSettings())

        let deviceSessionID = cookies.get(DEVICE_SESSION_ID_KEY)
        if (!deviceSessionID || deviceSessionID === '') {
            // If device ID does not exist, use the anonymous user ID value so these are consolidated.
            deviceSessionID = anonymousUserID
        }
        cookies.set(DEVICE_SESSION_ID_KEY, deviceSessionID, getSessionCookieSettings)

        this.anonymousUserID = anonymousUserID
        this.cohortID = cohortID
        this.deviceID = deviceID
        this.deviceSessionID = deviceSessionID
    }
}

/**
 * Returns the Monday at or before the supplied date, in YYYY-MM-DD format.
 * This is used to generate cohort IDs for users who
 * started using the site on the same week.
 */
export function getPreviousMonday(date: Date): string {
    return formatISO(startOfWeek(date, { weekStartsOn: 1 }), { representation: 'date' })
}

let userTracker: UserTracker

/**
 * Configures and loads cookie properties for user tracking purposes.
 */
export function getUserTracker(): UserTracker {
    if (userTracker) {
        return userTracker
    }
    userTracker = new UserTracker()
    return userTracker
}

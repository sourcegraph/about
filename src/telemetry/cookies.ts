/**
 * THE COOKIE SETTINGS IN THIS FILE ARE IDENTICAL TO THOSE USED ON SOURCEGRAPH.COM
 * AND OTHER SOURCEGRAPH.COM SUBDOMAINS.
 *
 * It is essential to keep these in sync, to ensure that cross-platform user and
 * session tracking cookies are re-used and not duplicated or different.
 */

import cookies, { type CookieAttributes } from 'js-cookie'

/**
 * Cookies is a simple interface over real cookies from 'js-cookie'.
 */
export interface Cookies {
    /**
     * Read cookie
     */
    get(name: string): string | undefined
    /**
     * Create a cookie
     */
    set(name: string, value: string, options?: CookieAttributes): string | undefined
}

/**
 * Alias for 'js-cookie' default implementation, behind the Cookies interface.
 */
export function defaultCookies(): Cookies {
    return cookies
}

let userCookieSettings: CookieAttributes
let sessionCookieSettings: CookieAttributes

export function getUserCookieSettings(): CookieAttributes {
    if (userCookieSettings) { return userCookieSettings }
    userCookieSettings = {
        // 365 days expiry, but renewed on activity.
        expires: 365,
        // Enforce HTTPS
        secure: true,
        // We only read the cookie with JS so we don't need to send it cross-site nor on initial page requests.
        // However, we do need it on page redirects when users sign up via OAuth, hence using the Lax policy.
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
        sameSite: 'Lax',
        // Specify the Domain attribute to ensure subdomains (sourcegraph.com) can receive this cookie.
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#define_where_cookies_are_sent
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        domain: window.location.hostname,
    }
    return userCookieSettings
}

export function getSessionCookieSettings(): CookieAttributes {
    if (sessionCookieSettings) { return sessionCookieSettings }
    sessionCookieSettings = {
        // ~30 minutes expiry, but renewed on activity.
        expires: 0.0208,
        // Enforce HTTPS
        secure: true,
        // We only read the cookie with JS so we don't need to send it cross-site nor on initial page requests.
        // However, we do need it on page redirects when users sign up via OAuth, hence using the Lax policy.
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
        sameSite: 'Lax',
        // Specify the Domain attribute to ensure subdomains (sourcegraph.com) can receive this cookie.
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#define_where_cookies_are_sent
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        domain: window.location.hostname,
    }
    return sessionCookieSettings
}

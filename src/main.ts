import { getCookie, setCookie } from './helpers'

export enum CookieTypes {
  NECESSARY = 'necessary',
  FUNCTIONAL = 'functional',
  PERFORMANCE = 'performance',
  MARKETING = 'marketing'
}

export enum CookieOptions {
  ALLOW = 'allow',
  DENY = 'deny'
}

const COOKIE_SHOW_BANNER = 'ckies_showBanner'
const COOKIE_SHOW_BANNER_VALUE = 'nope'

const CONFIG_EXPIRES = 365 * 24 * 60 * 60 * 1000

export default class CKies {
  // Check if CookieType should be used
  public static use(type: CookieTypes) {
    return getCookie(this.key(type)) === CookieOptions.ALLOW
  }

  // Get cookie name for CookieType
  public static key(type: CookieTypes) {
    return `ckies_${type}`
  }

  // Get expiration date for new cookies
  public static getExpireDate() {
    const date = new Date()
    date.setTime(date.getTime() + CONFIG_EXPIRES)

    return date
  }

  // Deny usage for CookieType
  public static deny(type: CookieTypes) {
    this.set(type, CookieOptions.DENY)
  }

  // Allow usage for CookieType
  public static allow(type: CookieTypes) {
    this.set(type, CookieOptions.ALLOW)
  }

  // Set cookie for CookieType
  public static set(type: CookieTypes, option: CookieOptions) {
    setCookie(this.key(type), option, this.getExpireDate())
  }

  // Check if cookie
  public static showBanner() {
    return getCookie(COOKIE_SHOW_BANNER) !== COOKIE_SHOW_BANNER_VALUE
  }

  // Wrapper to check if necesserary cookies can be used
  public static useNecessary() {
    return true
  }

  // Wrapper to check if functional cookies can be used
  public static useFunctional() {
    return this.use(CookieTypes.FUNCTIONAL)
  }

  // Wrapper to check if performance cookies can be used
  public static usePerformance() {
    return this.use(CookieTypes.PERFORMANCE)
  }

  // Wrapper to check if marketing cookies can be used
  public static useMarketing() {
    return this.use(CookieTypes.MARKETING)
  }
}

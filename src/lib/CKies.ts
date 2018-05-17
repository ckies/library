import { Cookie } from './Cookie'

export enum CookieType {
  NECESSARY = 'necessary',
  FUNCTIONAL = 'functional',
  PERFORMANCE = 'performance',
  MARKETING = 'marketing'
}

export enum CookieOptions {
  ALLOW = 'allow',
  DENY = 'deny'
}

export const CONFIG_EXPIRATION = 365 * 24 * 60 * 60 * 1000

export class CKies {
  // Get expiration date for new cookies
  public static getExpireDate() {
    const date = new Date()
    date.setTime(date.getTime() + CONFIG_EXPIRATION)

    return date
  }

  // Get cookie name for CookieType
  public static key(type: CookieType) {
    return `ckies_${type}`
  }

  // Check if CookieType should be used
  public static use(type: CookieType) {
    if (type === CookieType.NECESSARY) {
      return true
    }

    return this.isOptIn() ? (
      Cookie.get(this.key(type)) === CookieOptions.ALLOW
    ) : (
      Cookie.get(this.key(type)) !== CookieOptions.DENY
    )
  }

  // Deny usage for CookieType
  public static deny(type: CookieType) {
    this.set(type, CookieOptions.DENY)
  }

  // Allow usage for CookieType
  public static allow(type: CookieType) {
    this.set(type, CookieOptions.ALLOW)
  }

  // Wrapper to check if necesserary cookies can be used
  public static useNecessary() {
    return this.use(CookieType.NECESSARY)
  }

  // Wrapper to check if functional cookies can be used
  public static useFunctional() {
    return this.use(CookieType.FUNCTIONAL)
  }

  // Wrapper to check if performance cookies can be used
  public static usePerformance() {
    return this.use(CookieType.PERFORMANCE)
  }

  // Wrapper to check if marketing cookies can be used
  public static useMarketing() {
    return this.use(CookieType.MARKETING)
  }

  // Set cookie for CookieType
  private static set(type: CookieType, option: CookieOptions) {
    if (type !== CookieType.NECESSARY) {
      Cookie.set(this.key(type), option, this.getExpireDate())
    }
  }

  // Check if mode is OPT_IN
  private static isOptIn() {
    /* tslint:disable */
    return window.hasOwnProperty('CKIES_OPTIN') && window['CKIES_OPTIN'] === true
    /* tslint:enable */
  }
}

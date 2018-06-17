import { ckies as CKies, CookieType } from '../../src'
import { CONFIG_EXPIRATION } from '../../src/lib/Cookie'
import { removeAllCookies } from '../helpers/'

describe('CKies', () => {
  beforeEach(() => {
    removeAllCookies()
  })

  describe('CONFIGE_EXPIRATION', () => {
    it('should be roughly one year', () => {
      expect(CONFIG_EXPIRATION).toBe(
        365 * 24 * 60 * 60 * 1000
      )
    })
  })

  describe('.key()', () => {
    it('generates cookie names', () => {
      expect(CKies.key(CookieType.FUNCTIONAL)).toBe('ckies_functional')
      expect(CKies.key(CookieType.NECESSARY)).toBe('ckies_necessary')
      expect(CKies.key(CookieType.PERFORMANCE)).toBe('ckies_performance')
      expect(CKies.key(CookieType.MARKETING)).toBe('ckies_marketing')
    })
  })

  describe('.allow()', () => {
    it('sets cookie to allow functional cookies', () => {
      CKies.allow(CookieType.FUNCTIONAL)
      expect(document.cookie).toContain('ckies_functional=allow')
    })

    it('sets cookie to allow performance cookies', () => {  
      CKies.allow(CookieType.PERFORMANCE)
      expect(document.cookie).toContain('ckies_performance=allow')
    })

    it('sets cookie to allow marketing cookies', () => {
      CKies.allow(CookieType.MARKETING)
      expect(document.cookie).toContain('ckies_marketing=allow')
    })

    it('does not set cookie to allow necessary cookies', () => {
      CKies.allow(CookieType.NECESSARY)
      expect(document.cookie).not.toContain('ckies_necessary')
    })
  })

  describe('.deny()', () => {
    it('sets cookie to deny functional cookies', () => {
      CKies.deny(CookieType.FUNCTIONAL)
      expect(document.cookie).toContain('ckies_functional=deny')
    })

    it('sets cookie to deny performance cookies', () => {  
      CKies.deny(CookieType.PERFORMANCE)
      expect(document.cookie).toContain('ckies_performance=deny')
    })

    it('sets cookie to deny marketing cookies', () => {
      CKies.deny(CookieType.MARKETING)
      expect(document.cookie).toContain('ckies_marketing=deny')
    })

    it('does not set cookie to deny necessary cookies', () => {
      CKies.deny(CookieType.NECESSARY)
      expect(document.cookie).not.toContain('ckies_necessary')
    })
  })

  describe('.use()', () => {
    it('return true per default', () => {
      expect(CKies.useNecessary()).toBe(true)
      expect(CKies.useFunctional()).toBe(true)
      expect(CKies.usePerformance()).toBe(true)
      expect(CKies.useMarketing()).toBe(true)
    })

    it('support opt-in per global option', () => {
      window['CKIES_OPTIN'] = true

      expect(CKies.useNecessary()).toBe(true)
      expect(CKies.useFunctional()).toBe(false)
      expect(CKies.usePerformance()).toBe(false)
      expect(CKies.useMarketing()).toBe(false)

      window['CKIES_OPTIN'] = false

      expect(CKies.useNecessary()).toBe(true)
      expect(CKies.useFunctional()).toBe(true)
      expect(CKies.usePerformance()).toBe(true)
      expect(CKies.useMarketing()).toBe(true)

      delete window['CKIES_OPTIN']

      expect(CKies.useNecessary()).toBe(true)
      expect(CKies.useFunctional()).toBe(true)
      expect(CKies.usePerformance()).toBe(true)
      expect(CKies.useMarketing()).toBe(true)
    })

    it('return true for necessary cookies', () => {
      CKies.allow(CookieType.NECESSARY)
      expect(CKies.use(CookieType.NECESSARY)).toBeTruthy()
      expect(CKies.useNecessary()).toBeTruthy()

      CKies.deny(CookieType.NECESSARY)
      expect(CKies.use(CookieType.NECESSARY)).toBeTruthy()
      expect(CKies.useNecessary()).toBeTruthy()
    })

    it('checks settings for functional cookies', () => {
      CKies.allow(CookieType.FUNCTIONAL)
      expect(CKies.use(CookieType.FUNCTIONAL)).toBeTruthy()
      expect(CKies.useFunctional()).toBeTruthy()

      CKies.deny(CookieType.FUNCTIONAL)
      expect(CKies.use(CookieType.FUNCTIONAL)).toBeFalsy()
      expect(CKies.useFunctional()).toBeFalsy()
    })

    it('checks settings for performance cookies', () => {
      CKies.allow(CookieType.PERFORMANCE)
      expect(CKies.use(CookieType.PERFORMANCE)).toBeTruthy()
      expect(CKies.usePerformance()).toBeTruthy()

      CKies.deny(CookieType.PERFORMANCE)
      expect(CKies.use(CookieType.PERFORMANCE)).toBeFalsy()
      expect(CKies.usePerformance()).toBeFalsy()
    })

    it('checks settings for marketing cookies', () => {
      CKies.allow(CookieType.MARKETING)
      expect(CKies.use(CookieType.MARKETING)).toBeTruthy()
      expect(CKies.useMarketing()).toBeTruthy()

      CKies.deny(CookieType.MARKETING)
      expect(CKies.use(CookieType.MARKETING)).toBeFalsy()
      expect(CKies.useMarketing()).toBeFalsy()
    })
  })
})

import CKies, { CookieTypes } from './main'

declare var document: Document

describe('cks', () => {
  test('.key() to generate cookie names', () => {
    expect(CKies.key(CookieTypes.FUNCTIONAL)).toBe('ckies_functional')
    expect(CKies.key(CookieTypes.NECESSARY)).toBe('ckies_necessary')
    expect(CKies.key(CookieTypes.PERFORMANCE)).toBe('ckies_performance')
    expect(CKies.key(CookieTypes.MARKETING)).toBe('ckies_marketing')
  })

  test('.getExpireDate()', () => {
    const date = new Date()
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * 365)

    expect(CKies.getExpireDate().toUTCString()).toBe(date.toUTCString())
  })

  test('.allow()', () => {
    CKies.allow(CookieTypes.MARKETING)
    expect(document.cookie).toContain('ckies_marketing=allow')

    CKies.allow(CookieTypes.PERFORMANCE)
    expect(document.cookie).toContain('ckies_performance=allow')
  })

  test('.deny()', () => {
    CKies.deny(CookieTypes.NECESSARY)
    expect(document.cookie).toContain('ckies_necessary=deny')

    CKies.deny(CookieTypes.FUNCTIONAL)
    expect(document.cookie).toContain('ckies_functional=deny')
  })

  test('.use()', () => {
    CKies.deny(CookieTypes.NECESSARY)
    expect(CKies.use(CookieTypes.NECESSARY)).toBe(false)

    CKies.allow(CookieTypes.NECESSARY)
    expect(CKies.use(CookieTypes.NECESSARY)).toBe(true)

    CKies.allow(CookieTypes.FUNCTIONAL)
    expect(CKies.use(CookieTypes.FUNCTIONAL)).toBe(true)

    CKies.allow(CookieTypes.MARKETING)
    expect(CKies.use(CookieTypes.MARKETING)).toBe(true)

    CKies.deny(CookieTypes.MARKETING)
    expect(CKies.use(CookieTypes.MARKETING)).toBe(false)
  })
})

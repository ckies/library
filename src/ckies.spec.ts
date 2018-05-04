import { CKies, CookieType } from './'

declare var document: Document

describe('cks', () => {
  test('.key() to generate cookie names', () => {
    expect(CKies.key(CookieType.FUNCTIONAL)).toBe('ckies_functional')
    expect(CKies.key(CookieType.NECESSARY)).toBe('ckies_necessary')
    expect(CKies.key(CookieType.PERFORMANCE)).toBe('ckies_performance')
    expect(CKies.key(CookieType.MARKETING)).toBe('ckies_marketing')
  })

  test('.getExpireDate()', () => {
    const date = new Date()
    date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * 365)

    expect(CKies.getExpireDate().toUTCString()).toBe(date.toUTCString())
  })

  test('.allow()', () => {
    CKies.allow(CookieType.MARKETING)
    expect(document.cookie).toContain('ckies_marketing=allow')

    CKies.allow(CookieType.PERFORMANCE)
    expect(document.cookie).toContain('ckies_performance=allow')
  })

  test('.deny()', () => {
    CKies.deny(CookieType.NECESSARY)
    expect(document.cookie).toContain('ckies_necessary=deny')

    CKies.deny(CookieType.FUNCTIONAL)
    expect(document.cookie).toContain('ckies_functional=deny')
  })

  test('.use()', () => {
    CKies.deny(CookieType.NECESSARY)
    expect(CKies.use(CookieType.NECESSARY)).toBe(false)

    CKies.allow(CookieType.NECESSARY)
    expect(CKies.use(CookieType.NECESSARY)).toBe(true)

    CKies.allow(CookieType.FUNCTIONAL)
    expect(CKies.use(CookieType.FUNCTIONAL)).toBe(true)

    CKies.allow(CookieType.MARKETING)
    expect(CKies.use(CookieType.MARKETING)).toBe(true)

    CKies.deny(CookieType.MARKETING)
    expect(CKies.use(CookieType.MARKETING)).toBe(false)
  })
})

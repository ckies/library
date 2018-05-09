import { Cookie } from '../../src/lib/Cookie'

describe('Cookie', () => {
  describe('set()', () => {
    it('should not set cookie with expire date not in the future', () => {
      Cookie.set('foo', 'bar', new Date())

      expect(document.cookie).not.toContain('foo=bar')
    })
  
    it('should set cookie with expire date in the future', () => {
      const date = new Date()
      date.setTime(date.getTime() + 1000)
      Cookie.set('foo', 'bar', date)
  
      expect(document.cookie).toContain('foo=bar')
    })
  })
  
  describe('get()', () => {
    it('should return null for unknown cookies', () => {
      expect(Cookie.get('unkown')).toBe(null)
    })

    it('should return value for known cookies', () => {
      const date = new Date()
      date.setTime(date.getTime() + 1000)
      Cookie.set('foo', 'bar', date)

      expect(Cookie.get('foo')).toBe('bar')
    })
  })
  
})
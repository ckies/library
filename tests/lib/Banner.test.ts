import { Banner } from '../../src'
import { removeAllCookies } from '../helpers/'

describe('Banner', () => {
  beforeEach(() => {
    removeAllCookies()
  })

  describe('needed()', () => {
    it('should be needed per default', () => {
      expect(Banner.needed()).toBeTruthy()
      expect(Banner.confirmed()).toBeFalsy()
    })

    it('should not be needed after confirmation', () => {
      Banner.confirm()

      expect(Banner.needed()).toBeFalsy()
      expect(Banner.confirmed()).toBeTruthy()
    })
  })

  describe('confirm()', () => {
    it('should store state in cookie', () => {
      expect(document.cookie).not.toContain('ckies_banner=confirmed')

      Banner.confirm()

      expect(document.cookie).toContain('ckies_banner=confirmed')
    })
  })
})
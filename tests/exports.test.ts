const lib = require('../src/browser/ckies')

describe('browser export', () => {
  it('should contain functions', () => {
    expect(lib.Banner).toBeDefined()
    expect(lib.Banner.needed).toBeDefined()

    expect(lib.useFunctional).toBeDefined()
    expect(lib.usePerformance).toBeDefined()
    expect(lib.useNecessary).toBeDefined()
    expect(lib.useMarketing).toBeDefined()
  })
})
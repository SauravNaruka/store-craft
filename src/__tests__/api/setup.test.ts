import {setupAPIClient} from 'src/api/setup'

describe('api client setup', () => {
  test('the return result of setup api client', () => {
    const client = setupAPIClient()
    expect(client).toHaveProperty('product')
    expect(client).toHaveProperty('collection')
    expect(client).toHaveProperty('checkout')
    expect(client).toHaveProperty('shop')
  })
})

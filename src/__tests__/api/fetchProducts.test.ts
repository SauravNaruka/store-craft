import {graphql} from 'msw'
import {
  fetchProductsShortInfoBySearchQuery,
  fetchProductsBySearchQuery,
} from '@api/fetchProducts'
import {server} from '../../__mocks__/server'

describe('fetch Products APIs', () => {
  test('fetchProductsShortInfoBySearchQuery error in api response', async () => {
    server.use(
      graphql.query('ProductsShortInfoBySearchQuery', (_req, res, ctx) => {
        return res.once(
          ctx.status(500),
          ctx.errors([{message: 'Server Error'}]),
        )
      }),
    )

    await expect(fetchProductsShortInfoBySearchQuery('test')).rejects.toThrow()
  })

  test('fetchProductsBySearchQuery error in api response', async () => {
    server.use(
      graphql.query('ProductsBySearchQuery', (_req, res, ctx) => {
        return res.once(
          ctx.status(500),
          ctx.errors([{message: 'Server Error'}]),
        )
      }),
    )

    await expect(fetchProductsBySearchQuery('test', 1)).rejects.toThrow()
  })
})

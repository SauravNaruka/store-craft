import {graphql} from 'msw'
import {fetchCollectionWithProductsBySlug} from '@api/fetchCollection'
import {server} from '../../__mocks__/server'

describe('fetch collection by handle', () => {
  test('error in api response', async () => {
    server.use(
      graphql.query('CollectionProductsByHandle', (_req, res, ctx) => {
        return res.once(ctx.data({collection: null}))
      }),
    )

    await expect(
      fetchCollectionWithProductsBySlug({
        handle: 'FEATURED_PRODUCTS_HANDLE',
        numberOfProducts: 10,
      }),
    ).rejects.toThrow()
  })
})

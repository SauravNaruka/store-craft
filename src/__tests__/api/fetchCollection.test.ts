import {graphql} from 'msw'
import {fetchCollectionBySlug} from '@api/fetchCollection'
import {server} from '../../__mocks__/server'

describe('fetch collection by handle', () => {
  test('error in api response', async () => {
    server.use(
      graphql.query('Collection', (req, res, ctx) => {
        return res.once(ctx.data({collection: null}))
      }),
    )

    await expect(
      fetchCollectionBySlug({
        handle: 'FEATURED_PRODUCTS_HANDLE',
        numberOfProducts: 10,
        numberOfImages: 1,
      }),
    ).rejects.toThrow()
  })
})

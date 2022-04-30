import {graphql} from 'msw'
import {
  fetchAllCollections,
  fetchCollectionsBySearchQuery,
} from '@api/fetchCollections'
import {server} from '../../__mocks__/server'

describe('fetch collection APIs', () => {
  test('fetchAllCollections error in api response', async () => {
    server.use(
      graphql.query('CollectionsBySearchQuery', (_req, res, ctx) => {
        return res.once(ctx.data({collection: null}))
      }),
    )

    await expect(fetchAllCollections()).rejects.toThrow()
  })

  test('fetchCollectionsBySearchQuery error in api response', async () => {
    server.use(
      graphql.query('CollectionsBySearchQuery', (_req, res, ctx) => {
        return res.once(ctx.data({collection: null}))
      }),
    )

    await expect(
      fetchCollectionsBySearchQuery({
        query: 'test',
        numberOfCollections: 1,
      }),
    ).rejects.toThrow()
  })
})

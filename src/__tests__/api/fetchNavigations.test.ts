import {graphql} from 'msw'
import {
  fetchNavigationAndRelatedCollectionBySlug,
  fetchNavigationBySlug,
  fetchCollectionByNavigation,
} from '@api/fetchNavigations'
import {server} from '../../__mocks__/server'
import {buildNavigation} from '../../__mocks__/Navigations.mock'

describe('fetch navigation by id', () => {
  test('error in api response', async () => {
    server.use(
      graphql.query('Navigations', (req, res, ctx) => {
        return res.once(
          ctx.status(500),
          ctx.errors([{message: 'Server Error'}]),
        )
      }),
    )

    await expect(
      fetchNavigationBySlug({slug: 'product-navigation'}),
    ).rejects.toThrow()
  })

  test('empty api response', async () => {
    server.use(
      graphql.query('Navigations', (req, res, ctx) => {
        return res.once(ctx.data({allNavigation: []}))
      }),
    )

    await expect(
      fetchNavigationBySlug({slug: 'product-navigation'}),
    ).rejects.toThrow()
  })

  test('fetchCollectionByNavigation incorrect data', async () => {
    const navigation = buildNavigation()
    const collections = await fetchCollectionByNavigation({
      ...navigation,
      items: undefined,
    })
    expect(Object.keys(collections).length).toBe(0)

    const collections2 = await fetchCollectionByNavigation({
      ...navigation,
      items: [{}],
    })
    expect(Object.keys(collections2).length).toBe(0)
  })

  test('fetchNavigationAndRelatedCollectionBySlug error in api response', async () => {
    server.use(
      graphql.query('CollectionShortInfo', (req, res, ctx) => {
        return res.once(
          ctx.status(500),
          ctx.errors([{message: 'Server Error'}]),
        )
      }),
    )

    await expect(
      fetchNavigationAndRelatedCollectionBySlug({slug: 'product-navigation'}),
    ).rejects.toThrow()
  })
})

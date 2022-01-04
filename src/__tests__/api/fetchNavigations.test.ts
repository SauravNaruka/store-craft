import {graphql} from 'msw'
import {fetchNavigationById} from '@api/fetchNavigations'
import {server} from '../../__mocks__/server'
import {UnknownDataError} from '@helpers/error.helper'

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

    await expect(fetchNavigationById('product-navigation')).rejects.toThrow()
  })

  test('empty api response', async () => {
    server.use(
      graphql.query('Navigations', (req, res, ctx) => {
        return res.once(ctx.data({allNavigation: []}))
      }),
    )

    await expect(fetchNavigationById('product-navigation')).rejects.toThrow(
      UnknownDataError,
    )
  })
})

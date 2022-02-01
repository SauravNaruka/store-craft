import {graphql} from 'msw'
import {fetchFooter} from '@api/fetchFooter'
import {server} from '../../__mocks__/server'

describe('fetch Footer', () => {
  test('error in api response', async () => {
    server.use(
      graphql.query('Footer', (req, res, ctx) => {
        return res.once(
          ctx.status(500),
          ctx.errors([{message: 'Server Error'}]),
        )
      }),
    )

    await expect(fetchFooter({id: 'abc'})).rejects.toThrow()
  })

  test('empty api response', async () => {
    server.use(
      graphql.query('Footer', (req, res, ctx) => {
        return res.once(ctx.data({allGlobalConfig: []}))
      }),
    )

    await expect(fetchFooter({id: 'abc'})).rejects.toThrow()
  })
})

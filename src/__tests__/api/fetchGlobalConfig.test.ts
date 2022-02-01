import {graphql} from 'msw'
import {fetchGlobalConfig} from '@api/fetchGlobalConfig'
import {server} from '../../__mocks__/server'

describe('fetch global config', () => {
  test('error in api response', async () => {
    server.use(
      graphql.query('GlobalConfigs', (req, res, ctx) => {
        return res.once(
          ctx.status(500),
          ctx.errors([{message: 'Server Error'}]),
        )
      }),
    )

    await expect(fetchGlobalConfig()).rejects.toThrow()
  })

  test('empty api response', async () => {
    server.use(
      graphql.query('GlobalConfigs', (req, res, ctx) => {
        return res.once(ctx.data({allGlobalConfig: []}))
      }),
    )

    await expect(fetchGlobalConfig()).rejects.toThrow()
  })
})

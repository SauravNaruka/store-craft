import {graphql} from 'msw'
import {build, fake} from '@jackfranklin/test-data-bot'
import type {GlobalConfigsQuery} from '@generated/cms.types'

export const getGlobalConfig = graphql.query(
  'GlobalConfigs',
  (req, res, ctx) => {
    return res(ctx.data(buildGlobalConfigsResponse()))
  },
)

export const buildGlobalConfigsResponse = build<GlobalConfigsQuery>({
  fields: {
    allGlobalConfig: [
      {
        theme: {
          footerMenu: {
            _id: fake(f => f.datatype.uuid()),
          },
        },
        stagingTheme: {
          footerMenu: {
            _id: fake(f => f.datatype.uuid()),
          },
        },
      },
    ],
  },
})

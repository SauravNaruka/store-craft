import {graphql} from 'msw'
import {buildGlobalConfigsResponse} from './GlobalConfig.mock'

export const getGlobalConfig = graphql.query(
  'GlobalConfigs',
  (req, res, ctx) => {
    return res(ctx.data(buildGlobalConfigsResponse()))
  },
)

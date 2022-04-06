import {graphql} from 'msw'
import {buildProductQuickSearchResponse} from './fetchProductQuickSearch.mock'

export const getProductQuickSearchHandler = graphql.query(
  'ProductQuickSearch',
  (req, res, ctx) => {
    return res(ctx.data(buildProductQuickSearchResponse()))
  },
)

import {rest} from 'msw'
import {buildProductQuickSearchResponse} from './fetchProductQuickSearch.mock'

export const quickSearchHandler = rest.get(
  '/.netlify/functions/quickSearch',
  (req, res, ctx) => {
    // const query = req.url.searchParams.get('query')

    return res(ctx.json(buildProductQuickSearchResponse()))
  },
)

import {rest} from 'msw'
import {buildCollectionsBySearchQuery} from './Collection.mock'
import {buildProductConnection} from './Product.mock'

export const quickSearchHandler = rest.get(
  '/.netlify/functions/quickSearch',
  (_req, res, ctx) => {
    const products = buildProductConnection()
    const collections = buildCollectionsBySearchQuery()
    return res(ctx.json({products, collections}))
  },
)

import {rest} from 'msw'
import {
  buildCollectionsBySearchQuery,
  buildCollectionWithProductsBySlug,
} from './Collection.mock'
import {buildProductConnection} from './Product.mock'

export const quickSearchHandler = rest.get(
  '/api/quickSearch',
  (_req, res, ctx) => {
    const products = buildProductConnection()
    const collections = buildCollectionsBySearchQuery()
    return res(ctx.json({products, collections}))
  },
)

export const searchCollectionHandler = rest.get(
  '/api/searchCollection',
  (_req, res, ctx) => {
    const collection = buildCollectionWithProductsBySlug()
    return res(ctx.json({collection}))
  },
)

export const searchProductsHandler = rest.get(
  '/api/searchProducts',
  (_req, res, ctx) => {
    const products = buildProductConnection()
    return res(ctx.json({products}))
  },
)

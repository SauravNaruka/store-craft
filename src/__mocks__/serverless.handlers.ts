import {rest} from 'msw'
import {
  buildCollectionsBySearchQuery,
  buildCollectionWithProductsBySlug,
} from './Collection.mock'
import {buildProductConnection} from './Product.mock'

export const quickSearchHandler = rest.get(
  '/.netlify/functions/quickSearch',
  (_req, res, ctx) => {
    const products = buildProductConnection()
    const collections = buildCollectionsBySearchQuery()
    return res(ctx.json({products, collections}))
  },
)

export const searchCollectionHandler = rest.get(
  '/.netlify/functions/searchCollection',
  (_req, res, ctx) => {
    const collection = buildCollectionWithProductsBySlug()
    return res(ctx.json({collection}))
  },
)

export const searchProductsHandler = rest.get(
  '/.netlify/functions/searchProducts',
  (_req, res, ctx) => {
    const products = buildProductConnection()
    return res(ctx.json({products}))
  },
)

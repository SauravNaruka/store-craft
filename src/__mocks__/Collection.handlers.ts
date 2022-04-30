import {Collection, CollectionConnection} from '@generated/storefront.types'
import {graphql} from 'msw'
import {
  buildCollectionWithProductsBySlug,
  buildCollectionsBySearchQuery,
  buildCollectionWithImageByID,
} from './Collection.mock'

export const getCollectionProductsByHandleHandler = graphql.query(
  'CollectionProductsByHandle',
  (_req, res, ctx) => {
    return res(ctx.data({collection: buildCollectionWithProductsBySlug()}))
  },
)

export const getCollectionProductsWithFiltersByHandleHandler = graphql.query(
  'CollectionProductsWithFiltersByHandle',
  (_req, res, ctx) => {
    return res(ctx.data({collection: buildCollectionWithProductsBySlug()}))
  },
)

export const getCollectionsBySearchQueryHandler = graphql.query(
  'CollectionsBySearchQuery',
  (_req, res, ctx) => {
    return res(
      ctx.data({
        collection: buildCollectionsBySearchQuery() as CollectionConnection,
      }),
    )
  },
)

export const getCollectionWithImageByIDHandler = graphql.query(
  'CollectionWithImageByID',
  (req, res, ctx) => {
    return res(
      ctx.data({
        collection: buildCollectionWithImageByID({
          id: req.variables.id,
        }) as Collection,
      }),
    )
  },
)

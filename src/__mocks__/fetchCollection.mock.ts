import {graphql} from 'msw'
import {aCollection, aPageInfo, aProduct} from '@generated/storefront.types'

export const getCollectionHandler = graphql.query(
  'Collection',
  (req, res, ctx) => {
    return res(ctx.data({collection: collection}))
  },
)

export const product = aProduct({
  collections: undefined,
  metafield: null,
  metafields: undefined,
  media: undefined,
  options: [],
  sellingPlanGroups: undefined,
  variantBySelectedOptions: undefined,
  variants: undefined,
})

export const collection = aCollection({
  metafield: null,
  metafields: undefined,
  products: {
    edges: [
      {
        cursor: 'et',
        node: product,
      },
    ],
    filters: [],
    pageInfo: aPageInfo(),
  },
})

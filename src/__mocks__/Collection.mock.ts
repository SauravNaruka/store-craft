import {aCollection, aPageInfo, aProduct} from '@generated/storefront.types'

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

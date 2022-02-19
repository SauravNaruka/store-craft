import {build, fake, sequence} from '@jackfranklin/test-data-bot'
import {
  aCollection,
  aPageInfo,
  aProduct,
  Collection,
} from '@generated/storefront.types'

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

export const buildCollectionShortInfo = build<Partial<Collection>>({
  fields: {
    __typename: 'Collection',
    id: sequence(),
    handle: fake(f => f.internet.url()),
    image: {
      altText: fake(f => f.random.words()),
      url: fake(f => f.internet.url()),
      w96: fake(f => f.internet.url()),
      w128: fake(f => f.internet.url()),
      w256: fake(f => f.internet.url()),
      w384: fake(f => f.internet.url()),
      w640: fake(f => f.internet.url()),
      w750: fake(f => f.internet.url()),
      w828: fake(f => f.internet.url()),
      w1080: fake(f => f.internet.url()),
      w1200: fake(f => f.internet.url()),
      w1920: fake(f => f.internet.url()),
      w2048: fake(f => f.internet.url()),
      w3840: fake(f => f.internet.url()),
    },
  },
})

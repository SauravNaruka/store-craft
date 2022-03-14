import faker from 'faker'
import {buildShopifySourceImage} from './ShopifySourceImage.mock'
import {ShopifyProduct} from '@generated/cms.types'

export function buildShopifyProduct(
  overrides: Partial<ShopifyProduct> = {},
): ShopifyProduct {
  return {
    __typename: 'ShopifyProduct',
    _id: faker.datatype.uuid(),
    title: faker.random.words(),
    handle: faker.internet.url(),
    sourceData: {
      images: {
        __typename: 'ShopifySourceImages',
        edges: [
          {
            __typename: 'ShopifySourceImageEdge',
            node: buildShopifySourceImage(),
          },
        ],
      },
    },
    ...overrides,
  }
}

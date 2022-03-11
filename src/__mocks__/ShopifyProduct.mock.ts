import faker from 'faker'
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
            node: {
              __typename: 'ShopifySourceImage',
              w100: faker.internet.url(),
              w300: faker.internet.url(),
              w800: faker.internet.url(),
              w1200: faker.internet.url(),
              w1600: faker.internet.url(),
            },
          },
        ],
      },
    },
    ...overrides,
  }
}

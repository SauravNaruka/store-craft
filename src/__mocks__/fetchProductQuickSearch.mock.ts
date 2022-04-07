import faker from 'faker'
import {
  Product,
  ProductConnection,
  ProductEdge,
  ProductQuickSearchQuery,
} from '@generated/storefront.types'

const NUMBER_OF_PRODUCT_Nodde = 3
export function buildProductQuickSearchResponse(
  overrides: Partial<ProductConnection> = {},
): Partial<ProductQuickSearchQuery> {
  return {
    __typename: 'QueryRoot',
    products: {
      __typename: 'ProductConnection',
      edges: Array(NUMBER_OF_PRODUCT_Nodde)
        .fill(undefined)
        .map(() => {
          return {
            __typename: 'ProductEdge',
            node: buildProductQuickSearch(),
          }
        }),
      ...overrides,
    },
  }
}

export function buildProductQuickSearch(): Partial<Product> {
  return {
    __typename: 'Product',
    title: faker.random.words(),
    handle: faker.internet.url(),
    featuredImage: {
      altText: faker.random.words(),
      url: faker.internet.url(),
      w96: faker.internet.url(),
      w128: faker.internet.url(),
    },
  }
}

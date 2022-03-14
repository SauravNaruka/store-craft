import faker from 'faker'
import type {NavigationProduct} from '@generated/cms.types'

export function buildNavigationProduct(
  overrides: Partial<NavigationProduct> = {},
): NavigationProduct {
  return {
    __typename: 'NavigationProduct',
    title: faker.random.words(),
    product: {
      handle: faker.internet.url(),
    },
    image: {
      asset: {
        url: faker.internet.url(),
        assetId: faker.datatype.uuid(),
      },
      caption: faker.random.words(),
    },
    ...overrides,
  }
}

import faker from 'faker'
import type {ShopifyCollection} from '@generated/cms.types'

export function buildShopifyCollection(
  overrides: Partial<ShopifyCollection> = {},
): ShopifyCollection {
  return {
    __typename: 'ShopifyCollection',
    title: faker.random.words(),
    subtitle: faker.random.words(),
    shopifyId: faker.random.word(),
    handle: faker.internet.url(),
    ...overrides,
  }
}

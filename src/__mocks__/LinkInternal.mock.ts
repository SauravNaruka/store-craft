import faker from 'faker'
import type {LinkInternal, ShopifyCollection, Page} from '@generated/cms.types'

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

export function buildPage(): Page {
  return {
    __typename: 'Page',
    title: faker.random.words(),
    slug: {current: faker.random.word()},
  }
}

export function buildLinkInternalShopifyCollection(): LinkInternal {
  return {
    __typename: 'LinkInternal',
    reference: buildShopifyCollection(),
  }
}

export function buildLinkInternalPage(): LinkInternal {
  return {
    __typename: 'LinkInternal',
    reference: buildPage(),
  }
}

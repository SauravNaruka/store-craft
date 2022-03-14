import faker from 'faker'
import type {ShopifySourceImage} from '@generated/cms.types'

export function buildShopifySourceImage(
  overrides: Partial<ShopifySourceImage> = {},
): ShopifySourceImage {
  return {
    __typename: 'ShopifySourceImage',
    id: faker.datatype.uuid(),
    altText: faker.random.words(),
    originalSrc: faker.internet.url(),
    w100: faker.internet.url(),
    w300: faker.internet.url(),
    w800: faker.internet.url(),
    w1200: faker.internet.url(),
    w1600: faker.internet.url(),
  }
}

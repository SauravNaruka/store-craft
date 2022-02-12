import {ShopifyCollection} from '@generated/cms.types'

export function isShopifyCollection(
  object?: unknown,
): object is ShopifyCollection {
  return (object as ShopifyCollection)?.__typename === 'ShopifyCollection'
}

import type {ShopifyProduct} from '@generated/cms.types'

export function isShopifyProduct(object?: unknown): object is ShopifyProduct {
  return (object as ShopifyProduct)?.__typename === 'ShopifyProduct'
}

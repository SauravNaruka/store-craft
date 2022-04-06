import type {ShopifyProduct} from '@generated/cms.types'
import type {ProductConnection} from '@generated/storefront.types'

export function isShopifyProduct(object?: unknown): object is ShopifyProduct {
  return (object as ShopifyProduct)?.__typename === 'ShopifyProduct'
}

export function isProductConnection(
  object?: unknown,
): object is ProductConnection {
  return (object as ProductConnection)?.__typename === 'ProductConnection'
}

import type {ShopifyProduct} from '@generated/cms.types'
import type {
  ProductConnection,
  ProductVariant,
  SelectedOption,
} from '@generated/storefront.types'
import {getRelativeProductURL} from './url.helpers'

export function isShopifyProduct(object?: unknown): object is ShopifyProduct {
  return (object as ShopifyProduct)?.__typename === 'ShopifyProduct'
}

export function isProductConnection(
  object?: unknown,
): object is ProductConnection {
  return (object as ProductConnection)?.__typename === 'ProductConnection'
}

export function getProductVariantURL(
  variant: ProductVariant,
  productSlug: string,
): string {
  const selectedOptionMap = getProductVariantSelectedOptionsAsMap(
    variant.selectedOptions,
  )

  const queryParams = new URLSearchParams(selectedOptionMap)
  const variantSlug = getRelativeProductURL(
    `${productSlug}?${queryParams.toString()}`,
  )

  return variantSlug
}

export function getProductVariantSelectedOptionsAsMap(
  selectedOptions: SelectedOption[],
): Record<string, string> {
  return selectedOptions.reduce(
    (obj, {name, value}) => ({
      ...obj,
      [name]: value,
    }),
    {},
  )
}

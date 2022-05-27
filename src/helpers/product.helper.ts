import type {ShopifyProduct} from '@generated/cms.types'
import type {
  ProductConnection,
  ProductVariant,
  SelectedOption,
} from '@generated/storefront.types'

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
  const variantURLQueryString = variant.selectedOptions.reduce(
    (urlBase, selectedOption, index) => {
      return (
        urlBase +
        getURLQuerySeparator(index === 0) +
        getProductVariantOptionURLQuery(selectedOption)
      )
    },
    productSlug,
  )

  return variantURLQueryString
}

function getURLQuerySeparator(isFirstParam: boolean) {
  return isFirstParam ? '?' : '&'
}

function getProductVariantOptionURLQuery(selectedOption: SelectedOption) {
  return `${selectedOption.name}=${selectedOption.value}`
}

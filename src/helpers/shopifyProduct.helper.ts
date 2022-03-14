import * as logger from '@helpers/logger'
import type {ShopifyProduct} from '@generated/cms.types'
import type {ImageType} from '@LocalTypes/interfaces'

export function isShopifyProduct(object?: unknown): object is ShopifyProduct {
  return (object as ShopifyProduct)?.__typename === 'ShopifyProduct'
}

export function getShopifyProductFirstImage(
  product: ShopifyProduct,
): ImageType {
  const firstImage = product.sourceData?.images?.edges?.[0]?.node
  if (firstImage && firstImage.originalSrc && firstImage.altText) {
    return {
      ...firstImage,
      url: firstImage.originalSrc,
      altText: firstImage.altText,
    }
  }

  logger.error(
    `Missing image for product ${product.title}, having ID: ${product._id}`,
  )

  //TODO: Replace with stock error image
  return {
    ...firstImage,
    url: firstImage?.originalSrc ?? '',
    altText: firstImage?.altText ?? 'Missing image',
  }
}

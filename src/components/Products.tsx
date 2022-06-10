import * as React from 'react'
import {isValidImageType} from '@helpers/image.helper'
import {
  getMaxPriceFromProductPriceRange,
  getMinPriceFromProductPriceRange,
} from '@helpers/price.helper'
import type {Product, CurrencyCode} from '@generated/storefront.types'
import type {Price, Maybe, ImageType} from '@LocalTypes/interfaces'
import {getRelativeProductURL} from '@helpers/url.helpers'

type ProductsChildren = {
  title: string
  subtitle?: string | null
  slug: string
  currencyCode: CurrencyCode
  amount: number
  originalAmount?: number
  image?: Maybe<ImageType>
  index: number
}

type PropType = {
  products: Product[]
  children: (props: ProductsChildren) => React.ReactNode
}

export function Products({products, children: render}: PropType) {
  return (
    <>
      {products.map(
        (
          {
            handle,
            title,
            description,
            featuredImage,
            compareAtPriceRange,
            priceRange,
          },
          index,
        ) => {
          const image = isValidImageType(featuredImage) ? featuredImage : null
          const {amount: originalAmount}: Price =
            getMaxPriceFromProductPriceRange(compareAtPriceRange)
          const {amount, currencyCode}: Price =
            getMinPriceFromProductPriceRange(priceRange)

          const slug = getRelativeProductURL(handle)

          if (title && slug && description && amount && currencyCode) {
            return render({
              title,
              subtitle: description,
              slug,
              currencyCode,
              amount,
              originalAmount,
              image,
              index,
            })
          } else {
            return null
          }
        },
      )}
    </>
  )
}

export default Products

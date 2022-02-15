import * as React from 'react'
import {getFirstNodeFromConnection} from '@helpers/connection.helper'
import {isValidImageType} from '@helpers/image.helper'
import {
  getMaxPriceFromProductPriceRange,
  getMinPriceFromProductPriceRange,
} from '@helpers/price.helper'
import type {
  Image as ImageShopify,
  Product,
  CurrencyCode,
} from '@generated/storefront.types'
import type {Price, Maybe, ImageType} from '../types/interfaces'

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
          {handle, title, description, images, compareAtPriceRange, priceRange},
          index,
        ) => {
          const firstImage = getFirstNodeFromConnection<ImageShopify>(images)
          const image = isValidImageType(firstImage) ? firstImage : null
          const {amount: originalAmount}: Price =
            getMaxPriceFromProductPriceRange(compareAtPriceRange)
          const {amount, currencyCode}: Price =
            getMinPriceFromProductPriceRange(priceRange)

          if (title && handle && description && amount && currencyCode) {
            return render({
              title,
              subtitle: description,
              slug: handle,
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

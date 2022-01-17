import * as React from 'react'
import {getFirstNodeFromConnection} from '@helpers/connection.helper'
import {
  getMaxPriceFromProductPriceRange,
  getMinPriceFromProductPriceRange,
} from '@helpers/price.helper'
import type {
  Image as ImageShopify,
  Product,
  CurrencyCode,
} from '@generated/storefront.types'
import type {Price, Maybe} from '../types/interfaces'

type ProductsChildren = {
  id: string
  link: string
  title: string
  subtitle?: string | null
  imageUrl: string
  imageCaption: string
  originalAmount?: number
  amount: number
  currencyCode: CurrencyCode
  seo?: {title?: Maybe<string>; description?: Maybe<string>}
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
            id,
            handle,
            title,
            description,
            images,
            compareAtPriceRange,
            priceRange,
            seo,
          },
          index,
        ) => {
          const image = getFirstNodeFromConnection<ImageShopify>(images)
          const {amount: originalAmount}: Price =
            getMaxPriceFromProductPriceRange(compareAtPriceRange)
          const {amount, currencyCode}: Price =
            getMinPriceFromProductPriceRange(priceRange)

          if (
            image &&
            image.url &&
            title &&
            handle &&
            description &&
            amount &&
            currencyCode
          ) {
            return render({
              id,
              link: handle,
              title,
              subtitle: description,
              imageUrl: image.url,
              imageCaption: image.altText ? image.altText : title,
              originalAmount,
              amount,
              currencyCode,
              seo: seo,
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

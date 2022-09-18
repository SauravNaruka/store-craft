import * as React from 'react'
import {ProductCarousel} from '@components/carousel/ProductCarousel'
import {ProductOptions} from '@components/product/ProductOptions'
import {useVariantSelector} from '@hooks/useVariantSelector'
import type {Product, ProductVariant} from '@generated/storefront.types'
import {addToCart} from '@helpers/cart.helper'

export type PropType = {
  product: Product
  variant: ProductVariant
  slug: string
}

export function ProductPageDetails({product, variant, slug}: PropType) {
  return (
    <>
      <h1>
        {product.title}
        {variant.title}
      </h1>
      <ProductCarousel product={product} variantImage={variant.image} />
      <span>{product.productType}</span>
      <span>{product.descriptionHtml}</span>
      <ProductOptions
        options={product.options}
        variants={product.variants}
        slug={slug}
        selectedVariant={variant}
      />
      <button onClick={() => addToCart(variant.id)}>Add to Cart</button>
    </>
  )
}

import * as React from 'react'
import intersectionWith from 'lodash/intersectionWith'
import isEqual from 'lodash/isEqual'
import {ProductOption} from './ProductOption'
import type {
  ProductOption as ProductOptionType,
  ProductVariant,
  ProductVariantConnection,
} from '@generated/storefront.types'

export type PropType = {
  slug: string
  options: Array<ProductOptionType>
  variants: ProductVariantConnection
  selectedVariant: ProductVariant
}

export function ProductOptions({
  slug,
  options,
  variants,
  selectedVariant,
}: PropType) {
  const unSelectedVariants = React.useMemo(
    () => getUnSelectedVariants(selectedVariant, variants, options),
    [options, selectedVariant, variants],
  )

  return (
    <>
      <span>
        {options.map((option: ProductOptionType) => {
          return (
            <ProductOption
              key={option.id}
              slug={slug}
              option={option}
              selectedVariant={selectedVariant}
              unSelectedVariants={unSelectedVariants}
            />
          )
        })}
      </span>
    </>
  )
}

export function getUnSelectedVariants(
  selectedVariant: ProductVariant,
  variantConnection: ProductVariantConnection,
  options: ProductOptionType[],
): ProductVariant[] {
  const unSelectedVariant = variantConnection.edges.filter(({node}) => {
    const matchedOptions = intersectionWith(
      node.selectedOptions,
      selectedVariant.selectedOptions,
      isEqual,
    )

    return matchedOptions.length === options.length - 1
  })

  return unSelectedVariant.map(({node}) => node)
}

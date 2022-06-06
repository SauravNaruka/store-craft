import * as React from 'react'
import {ProductOptionValue} from './ProductOptionValue'
import {getProductVariantURL} from '@helpers/product.helper'
import * as logger from '@helpers/logger'
import type {
  ProductOption as ProductOptionType,
  ProductVariant,
  SelectedOption,
} from '@generated/storefront.types'
import {ProductOptionColorValue} from './ProductOptionColorValue'
import {OPTIONS_WITH_COLOR_PALLETS} from '@constants/products.constants'

type GetOptionURLAndMatchingProductVariantProps = {
  currentOption: SelectedOption
  selectedVariant: ProductVariant
  unSelectedVariants: ProductVariant[]
  productSlug: string
}

type GetOptionURLAndMatchingProductVariantReturnType = {
  variantSlug: string
  variant: ProductVariant
  isCurrentOptionSelected: boolean
}

export type PropType = {
  slug: string
  option: ProductOptionType
  selectedVariant: ProductVariant
  unSelectedVariants: ProductVariant[]
}

const CURRENT_VARIANT_SLUG = '#'

export function ProductOption({
  slug,
  option,
  selectedVariant,
  unSelectedVariants,
}: PropType) {
  return (
    <>
      <h4>{option.name}</h4>
      <ul key={option.id} className={'my-3'}>
        <li>
          {option.values.map((value: string) => {
            const valueId = `${option.id}_${value}`
            const currentOption = {name: option.name, value}
            const {
              variantSlug,
              variant: productVariant,
              isCurrentOptionSelected,
            } = getProductVariantOptionDetails({
              currentOption,
              selectedVariant,
              unSelectedVariants,
              productSlug: slug,
            })

            if (OPTIONS_WITH_COLOR_PALLETS.includes(option.name)) {
              return (
                <ProductOptionColorValue
                  key={valueId}
                  slug={variantSlug}
                  value={value}
                  isSelected={isCurrentOptionSelected}
                  price={productVariant.priceV2}
                  image={productVariant.image}
                />
              )
            } else {
              return (
                <ProductOptionValue
                  key={valueId}
                  slug={variantSlug}
                  value={value}
                  isSelected={isCurrentOptionSelected}
                  price={productVariant.priceV2}
                  image={productVariant.image}
                />
              )
            }
          })}
        </li>
      </ul>
    </>
  )
}

function getProductVariantOptionDetails({
  currentOption,
  selectedVariant,
  unSelectedVariants,
  productSlug,
}: GetOptionURLAndMatchingProductVariantProps): GetOptionURLAndMatchingProductVariantReturnType {
  let variantSlug = CURRENT_VARIANT_SLUG
  let variant = selectedVariant
  const isCurrentOptionSelected = isProductVariantHasOption(
    currentOption,
    selectedVariant,
  )

  if (!isCurrentOptionSelected) {
    variant = getMatchingProductVariantForOption(
      currentOption,
      unSelectedVariants,
    )
    variantSlug = getProductVariantURL(variant, productSlug)
  }

  return {
    variantSlug,
    variant,
    isCurrentOptionSelected,
  }
}

function getMatchingProductVariantForOption(
  option: SelectedOption,
  productVariants: ProductVariant[],
): ProductVariant {
  for (const index in productVariants) {
    if (isProductVariantHasOption(option, productVariants[index])) {
      return productVariants[index]
    }
  }

  logger.error(
    new Error(
      `Unable to find matching variant for option: ${JSON.stringify(
        option,
      )}  & variant: ${JSON.stringify(productVariants)}`,
    ),
  )

  return productVariants[0]
}

function isProductVariantHasOption(
  option: SelectedOption,
  variant: ProductVariant,
) {
  const isOptionExistInVariant = variant.selectedOptions.filter(
    selectedOption => isSelectedOptionsEqual(selectedOption, option),
  )

  return isOptionExistInVariant.length > 0
}

function isSelectedOptionsEqual(
  selectedOption: SelectedOption,
  option: SelectedOption,
): boolean {
  return (
    selectedOption.name === option.name && selectedOption.value === option.value
  )
}

import * as React from 'react'
import {InternalLink} from '../microUI/InternalLink'
import {formatAmount} from '@helpers/price.helper'
import {getProductVariantURL} from '@helpers/product.helper'
import * as logger from '@helpers/logger'
import type {
  ProductOption,
  ProductVariant,
  SelectedOption,
} from '@generated/storefront.types'

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
  option: ProductOption
  selectedVariant: ProductVariant
  unSelectedVariants: ProductVariant[]
}

export function ProductOptionComponent({
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

            return (
              <InternalLink
                key={valueId}
                href={variantSlug}
                {...(isCurrentOptionSelected ? {'aria-current': 'page'} : {})}
              >
                <span key={value} className="mx-2">
                  {value}{' '}
                  {formatAmount(
                    productVariant.priceV2.amount,
                    productVariant.priceV2.currencyCode,
                  )}
                </span>
              </InternalLink>
            )
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
  let variantSlug = '#'
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
): unknown {
  return (
    selectedOption.name === option.name && selectedOption.value === option.value
  )
}

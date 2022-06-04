import * as React from 'react'
import {ProductCarousel} from '@components/carousel/ProductCarousel'
import {ProductOptions} from '@components/product/ProductOptions'
import {useVariantSelector} from '@hooks/useVariantSelector'
import type {
  Product,
  ProductOption,
  ProductVariant,
} from '@generated/storefront.types'

export type PropType = {
  product: Product
  slug: string
}

export function ProductPageDetails({product, slug}: PropType) {
  const variant = useVariantSelector(product.variants)

  return (
    <>
      <h1>
        {product.title}
        {variant.title}
      </h1>
      <ProductCarousel product={product} />
      <span>{product.productType}</span>
      <span>{product.descriptionHtml}</span>
      <ProductOptions
        options={product.options}
        variants={product.variants}
        slug={slug}
        selectedVariant={variant}
      />
    </>
  )
}

interface KeyValuePair {
  [key: string]: string | number | undefined | null | string[]
}

export function getOptionsFromVariant(variant: ProductVariant) {
  const selectedOptions: KeyValuePair = {}
  variant.selectedOptions.forEach(({name, value}) => {
    selectedOptions[name] = value
  })

  return selectedOptions
}

export function getSelectedOptions(
  options: ProductOption[],
  query: KeyValuePair,
): KeyValuePair {
  const queryKeys = Object.keys(query)
  if (queryKeys.length === 0) {
    return getDefaultSelectedOption(options)
  } else {
    return getOptionKeyValueByQuery(options, query, queryKeys)
  }
}

function getDefaultSelectedOption(options: ProductOption[]): KeyValuePair {
  return options.reduce(
    (previousValue: KeyValuePair, option: ProductOption) => {
      return {...previousValue, [option.name]: option.values[0]}
    },
    {},
  )
}

function getOptionKeyValueByQuery(
  options: ProductOption[],
  query: KeyValuePair,
  queryKeys: string[],
): KeyValuePair {
  return options.reduce(
    (previousValue: KeyValuePair, option: ProductOption) => {
      const matchedQueryKey = getValueByCaseInsensitiveMatch(
        queryKeys,
        option.name,
      )

      const matchedQueryValue = matchedQueryKey
        ? getValueByCaseInsensitiveMatch(
            option.values,
            query[matchedQueryKey] as string,
          )
        : matchedQueryKey

      if (matchedQueryValue) {
        return {...previousValue, [option.name]: matchedQueryValue}
      } else {
        return {...previousValue, [option.name]: option.values[0]}
      }
    },
    {},
  )
}

function getValueByCaseInsensitiveMatch(object: string[], key: string) {
  const asLowercase = key?.toLowerCase() ?? ''
  const objectValue = object.find(value => value.toLowerCase() === asLowercase)

  return objectValue
}

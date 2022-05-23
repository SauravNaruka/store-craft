import * as React from 'react'
import {useRouter} from 'next/router'
import RadioInput from './microUI/RadioInput'
import {formatAmount} from '@helpers/price.helper'
import type {
  ProductOption,
  ProductVariant,
  ProductVariantConnection,
  ProductVariantEdge,
  SelectedOption,
} from '@generated/storefront.types'

export type PropType = {
  options: Array<ProductOption>
  variants: ProductVariantConnection
  selectedVariant: ProductVariant
}

export function ProductOptions({options, variants, selectedVariant}: PropType) {
  const [selectedOptions, setOptions] = React.useState(
    getOptionsFromVariant(selectedVariant),
  )

  return (
    <>
      <span>
        {options.map(({__typename, id, name, values}: ProductOption) => {
          return (
            <ul key={id} className={'my-3'}>
              <h4>{name}</h4>
              <li>
                {values.map((value: string) => {
                  const valueId = `${id}_${value}`
                  return (
                    <RadioInput
                      key={valueId}
                      id={valueId}
                      name={id}
                      checked={selectedOptions[name] === value}
                    >
                      <span key={value} className="mx-2">
                        {value}
                      </span>
                    </RadioInput>
                  )
                })}
              </li>
            </ul>
          )
        })}
      </span>
      {/* <span>
        {variants.edges.map(({node}: ProductVariantEdge) => {
          return (
            <div key={node.id} className={'my-3'}>
              <div className="mx-2">{node.title}</div>
              <div className="mx-2">{node.availableForSale}</div>
              <div className="mx-2">{node.sku}</div>
              <div className="mx-2">
                {node.selectedOptions.map(({name, value}: SelectedOption) => {
                  return (
                    <div key={name} className="mx-2">
                      {name}: {value}
                    </div>
                  )
                })}
              </div>
              <div className="mx-2">
                {formatAmount(
                  node.compareAtPriceV2?.amount,
                  node.compareAtPriceV2!.currencyCode,
                )}
              </div>
              <div className="mx-2">
                {formatAmount(node.priceV2?.amount, node.priceV2!.currencyCode)}
              </div>
            </div>
          )
        })}
      </span> */}
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

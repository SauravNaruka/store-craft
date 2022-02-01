import {aProductPriceRange} from 'generated/storefront.types'
import {
  getMaxPriceFromProductPriceRange,
  getMinPriceFromProductPriceRange,
} from '@helpers/price.helper'

describe('Price helper methods', () => {
  test('getMaxPriceFromProductPriceRange to return correct value', () => {
    const priceRange = aProductPriceRange()

    expect(getMaxPriceFromProductPriceRange(priceRange)).toMatchObject({
      amount: priceRange.maxVariantPrice.amount,
      currencyCode: priceRange.maxVariantPrice.currencyCode,
    })
  })

  test('getMinPriceFromProductPriceRange to return correct value', () => {
    const priceRange = aProductPriceRange()

    expect(getMinPriceFromProductPriceRange(priceRange)).toMatchObject({
      amount: priceRange.minVariantPrice.amount,
      currencyCode: priceRange.minVariantPrice.currencyCode,
    })
  })
})

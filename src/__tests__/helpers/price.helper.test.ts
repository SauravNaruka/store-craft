import {
  getMaxPriceFromProductPriceRange,
  getMinPriceFromProductPriceRange,
} from '@helpers/price.helper'
import {buildProductPriceFields} from 'src/__mocks__/Product.mock'
import {CurrencyCode, ProductPriceRange} from '@generated/storefront.types'

describe('Price helper methods', () => {
  test('getMaxPriceFromProductPriceRange to return correct value', () => {
    const priceRange = buildProductPriceFields().priceRange as ProductPriceRange

    expect(getMaxPriceFromProductPriceRange(priceRange)).toMatchObject({
      amount: priceRange.maxVariantPrice.amount,
      currencyCode: priceRange.maxVariantPrice.currencyCode,
    })
  })

  test('getMaxPriceFromProductPriceRange & getMinPriceFromProductPriceRange to return hanlde null value', () => {
    expect(getMaxPriceFromProductPriceRange(null)).toMatchObject({
      amount: null,
      currencyCode: CurrencyCode.Inr,
    })

    expect(getMinPriceFromProductPriceRange(null)).toMatchObject({
      amount: null,
      currencyCode: CurrencyCode.Inr,
    })
  })

  test('getMinPriceFromProductPriceRange to return correct value', () => {
    const priceRange = buildProductPriceFields().priceRange as ProductPriceRange

    expect(getMinPriceFromProductPriceRange(priceRange)).toMatchObject({
      amount: priceRange.minVariantPrice.amount,
      currencyCode: priceRange.minVariantPrice.currencyCode,
    })
  })
})

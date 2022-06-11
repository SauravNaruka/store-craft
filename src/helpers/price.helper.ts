import {
  ProductPriceRange,
  MoneyV2,
  CurrencyCode,
} from 'generated/storefront.types'
import type {Maybe, Price} from '../types/interfaces'

const EMPTY_PRICE = {amount: null, currencyCode: CurrencyCode.Inr}

export function getMaxPriceFromProductPriceRange(
  priceRange: Maybe<ProductPriceRange>,
): Price {
  if (priceRange) {
    return getVariantPriceFromProductPriceRange(priceRange.maxVariantPrice)
  } else {
    return EMPTY_PRICE
  }
}

export function getMinPriceFromProductPriceRange(
  priceRange: Maybe<ProductPriceRange>,
): Price {
  if (priceRange) {
    return getVariantPriceFromProductPriceRange(priceRange.minVariantPrice)
  } else {
    return EMPTY_PRICE
  }
}

export function getVariantPriceFromProductPriceRange(money: MoneyV2): Price {
  const amount = money.amount
  const currencyCode = money.currencyCode

  return {amount, currencyCode}
}

export function formatAmount(amount: number, currencyCode: CurrencyCode) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: currencyCode,
    maximumFractionDigits: 0,
  }).format(amount)
}

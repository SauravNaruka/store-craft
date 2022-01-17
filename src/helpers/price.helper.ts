import type {
  ProductPriceRange,
  MoneyV2,
  CurrencyCode,
} from 'generated/storefront.types'
import type {Price} from '../types/interfaces'

export function getMaxPriceFromProductPriceRange(
  priceRange: ProductPriceRange,
): Price {
  return getVariantPriceFromProductPriceRange(priceRange.maxVariantPrice)
}

export function getMinPriceFromProductPriceRange(
  priceRange: ProductPriceRange,
): Price {
  return getVariantPriceFromProductPriceRange(priceRange.minVariantPrice)
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

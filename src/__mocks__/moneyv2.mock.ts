import {CurrencyCode, MoneyV2} from '@generated/storefront.types'
import faker from 'faker'

export function buildMoneyV2(): MoneyV2 {
  return {
    __typename: 'MoneyV2',
    amount: faker.commerce.price(),
    currencyCode: faker.finance.currencyCode() as CurrencyCode,
  }
}

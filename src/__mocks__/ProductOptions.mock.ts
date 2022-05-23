import faker from 'faker'
import type {ProductOption} from '@generated/storefront.types'

export const NUMBER_OF_PRODUCT_OPTION = 3
export const NUMBER_OF_PRODUCT_OPTION_VALUES = 3

export function buildProductOptions(): ProductOption[] {
  return Array(NUMBER_OF_PRODUCT_OPTION)
    .fill(undefined)
    .map(() => buildProductOption()) as ProductOption[]
}

export function buildProductOption(): Partial<ProductOption> {
  return {
    __typename: 'ProductOption',
    id: faker.datatype.uuid(),
    name: faker.random.word(),
    values: Array(NUMBER_OF_PRODUCT_OPTION_VALUES)
      .fill(undefined)
      .map(() => faker.random.word()),
  }
}

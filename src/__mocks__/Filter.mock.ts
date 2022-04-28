import faker from 'faker'
import {Filter, FilterType, FilterValue} from '@generated/storefront.types'

const NUMBER_OF_FILTERS = 3
const NUMBER_OF_FILTER_VALUES = 2

export function buildFilters(): Filter[] {
  return Array(NUMBER_OF_FILTERS)
    .fill(undefined)
    .map(() => buildListFilter()) as Filter[]
}

export function buildListFilter(): Partial<Filter> {
  const id = faker.random.word()
  return {
    __typename: 'Filter',
    id: addFilterIDPrefix(id),
    label: faker.random.words(),
    type: FilterType.List,
    values: Array(NUMBER_OF_FILTER_VALUES)
      .fill(undefined)
      .map(() => buildListFilterValue(id)) as FilterValue[],
  }
}

export function buildListFilterValue(
  parentID: string,
  overrides?: Partial<FilterValue>,
): Partial<FilterValue> {
  const id = faker.random.word()
  return {
    __typename: 'FilterValue',
    id: addFilterIDPrefix(`${parentID}.${id}`),
    input: JSON.stringify({[parentID]: id}),
    label: id,
    ...(overrides ? overrides : {}),
  }
}

function addFilterIDPrefix(id: string): string {
  return `filter.v.${id}`
}

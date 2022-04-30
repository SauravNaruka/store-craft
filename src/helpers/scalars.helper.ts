import {Filter} from '@generated/storefront.types'

export function parseFilters(filters: Filter[]): Filter[] {
  return filters.map(parseFilter)
}

export function parseFilter(filter: Filter): Filter {
  const values =
    filter.values?.map(value => {
      const input = JSON.parse(value.input)
      return {...value, input}
    }) ?? []

  return {...filter, values}
}

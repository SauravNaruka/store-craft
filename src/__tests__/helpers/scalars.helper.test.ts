import {Filter} from '@generated/storefront.types'
import {parseFilter} from '@helpers/scalars.helper'

describe('filter helper functions', () => {
  test('parse filter return parsed values', () => {
    const aFilter = {
      __typename: 'Filter',
      id: 'filter.v.option.size',
      label: 'Size',
      type: 'LIST',
      values: [
        {
          __typename: 'FilterValue',
          id: 'filter.v.option.size.large',
          input: '{"variantOption":{"name":"size","value":"Large"}}',
          label: 'Large',
        },
      ],
    } as Filter

    const parsedFilter: Filter = parseFilter(aFilter)
    expect(parsedFilter.values[0].input).toEqual({
      variantOption: {name: 'size', value: 'Large'},
    })
  })
})
